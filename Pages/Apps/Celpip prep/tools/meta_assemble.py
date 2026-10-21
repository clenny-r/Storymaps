"""Trim, check and join Meta AI clips into tests/audio/<T>/L5-0.mp4
usage: python3 assemble.py <TEST> map.json   (map.json: {"1": "/path/clip1.mp4", ...})"""
import sys, json, re, subprocess, os, difflib, wave
import numpy as np
from pocketsphinx import Decoder
T = sys.argv[1]; MAP = {int(k): v for k, v in json.load(open(sys.argv[2])).items()}
p = json.load(open('/home/claude/meta/prompts_all.json'))[T]
prompts = [p['first']] + p['rest']
lines = [re.search(r'(?:exactly these words and nothing else|saying exactly): "(.*?)"', x).group(1) for x in prompts]
spk = [re.search(r'Only (\w[\w\-]*)', x).group(1) for x in prompts]
WORK = f'/home/claude/meta/work_{T}'; os.makedirs(WORK, exist_ok=True)
OUT = f'/mnt/user-data/outputs/celpip/tests/audio/{T}'; os.makedirs(OUT, exist_ok=True)
# speaker genders from the test file
tj = subprocess.run(['node', '-e', f"global.window={{MOCK_TESTS:[]}};require('/home/claude/celpip/tests/mock_test_{T}.js');const p=window.MOCK_TESTS[0].listening.parts.find(x=>x.id==='L5');process.stdout.write(JSON.stringify(p.cast))"], capture_output=True, text=True).stdout
cast = json.loads(tj); gender = {c['name'].split()[0].rstrip('.'): c['g'] for c in cast.values()}
norm = lambda s: re.sub(r"[^a-z' ]", "", s.lower().replace('-', ' ')).split()
dec = Decoder()

def load(w):
    f = wave.open(w); return np.frombuffer(f.readframes(f.getnframes()), dtype=np.int16).astype(float)

def pitch(x, sr=16000):
    ps = []
    for s in range(0, len(x) - 1024, 512):
        fr = x[s:s + 1024]
        if np.sqrt((fr ** 2).mean()) < 800: continue
        fr = fr - fr.mean(); ac = np.correlate(fr, fr, 'full')[1023:]
        lo, hi = sr // 350, sr // 70; k = lo + np.argmax(ac[lo:hi])
        if ac[k] > 0.4 * ac[0]: ps.append(sr / k)
    return int(np.median(ps)) if ps else 0

report = []; listfile = open(f'{WORK}/list.txt', 'w')
for i in range(1, len(lines) + 1):
    src = MAP[i]; w = f'{WORK}/c{i:02d}.wav'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-ac', '1', '-ar', '16000', w], check=True)
    x = load(w); sr = 16000; hop = 320
    env = np.array([np.sqrt((x[j:j + hop] ** 2).mean()) for j in range(0, len(x) - hop, hop)])
    thr = max(1000, 0.25 * np.percentile(env, 95))
    act = env > thr
    idx = np.where(act)[0]
    start = max(0, idx[0] * hop / sr - 0.15) if len(idx) else 0
    end = min(len(x) / sr, (idx[-1] + 1) * hop / sr + 0.35) if len(idx) else len(x) / sr
    # Meta sometimes repeats part of the line after a pause. Try every pause as an end point and keep the earliest
    # one whose transcript is (almost) as good as the best, so the repeat is cut off.
    if len(idx):
        regs = []; st = idx[0]; prev = idx[0]
        for j in idx[1:]:
            if (j - prev) * hop / sr >= 0.3: regs.append((st, prev)); st = j
            prev = j
        regs.append((st, prev))
        cands = []
        for (_, e) in regs:
            ce = min(len(x) / sr, (e + 1) * hop / sr + 0.3)
            sg = x[int(start * sr):int(ce * sr)].astype(np.int16)
            dec.start_utt(); dec.process_raw(sg.tobytes(), full_utt=True); dec.end_utt()
            hh = dec.hyp().hypstr if dec.hyp() else ''
            cands.append((ce, difflib.SequenceMatcher(None, norm(lines[i - 1]), norm(hh)).ratio()))
        best = max(c[1] for c in cands)
        end = min(c[0] for c in cands if c[1] >= best - 0.05)
    seg = x[int(start * sr):int(end * sr)].astype(np.int16)
    dec.start_utt(); dec.process_raw(seg.tobytes(), full_utt=True); dec.end_utt()
    hyp = dec.hyp().hypstr if dec.hyp() else ''
    sc = difflib.SequenceMatcher(None, norm(lines[i - 1]), norm(hyp)).ratio()
    f0 = pitch(seg.astype(float)); g = gender.get(spk[i - 1], '?')
    ok_g = (g == 'm' and 0 < f0 < 160) or (g == 'f' and f0 >= 150)
    out = f'{WORK}/t{i:02d}.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{start:.2f}', '-to', f'{end:.2f}', '-i', src, '-vf', 'scale=1280:720,fps=24,format=yuv420p', '-c:v', 'libx264', '-crf', '22', '-preset', 'fast', '-c:a', 'aac', '-ar', '48000', '-ac', '2', '-b:a', '128k', out], check=True)
    listfile.write(f"file '{out}'\n")
    report.append({'clip': i, 'speaker': spk[i - 1], 'g': g, 'f0': f0, 'gender_ok': ok_g, 'score': round(sc, 2), 'start': round(start, 2), 'end': round(end, 2), 'exp': lines[i - 1], 'heard': hyp})
    print(f"{i:2d} {spk[i-1]:8s} {g} f0={f0:3d} {'OK ' if ok_g else 'BAD'} score={sc:.2f} {start:.2f}-{end:.2f} | {hyp[:70]}", flush=True)
listfile.close()
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', f'{WORK}/list.txt', '-af', 'loudnorm=I=-18:TP=-1.5:LRA=11', '-c:v', 'libx264', '-crf', '28', '-maxrate', '700k', '-bufsize', '1400k', '-preset', 'medium', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '96k', f'{OUT}/L5-0.mp4'], check=True)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{OUT}/L5-0.mp4', '-vf', 'fps=1/5,scale=320:-1,tile=6x5', '-frames:v', '1', f'{WORK}/sheet.png'], check=True)
dur = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f'{OUT}/L5-0.mp4'], capture_output=True, text=True).stdout.strip()
json.dump(report, open(f'{WORK}/report.json', 'w'), indent=1)
print('WROTE', f'{OUT}/L5-0.mp4', dur, 's; mean score', round(np.mean([r['score'] for r in report]), 2), '; gender mismatches', [r['clip'] for r in report if not r['gender_ok']])
