"""Generate natural-voice listening audio (Kokoro, CPU) for every mock test.
Output: /mnt/user-data/outputs/celpip/tests/audio/<T>/<key>.mp3 plus a manifest json per test.
"""
import json, subprocess, sys, os, time, re
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

ROOT = '/home/claude/celpip/tests'
OUT = '/mnt/user-data/outputs/celpip/tests/audio'
F = ['af_heart', 'af_bella', 'af_aoede', 'bf_emma', 'af_kore', 'af_nova']
M = ['am_michael', 'am_fenrir', 'am_puck', 'bm_george', 'bm_fable', 'am_liam']
NARR = 'af_sarah'
SR = 24000
k = Kokoro('/home/claude/kk/kokoro-v1.0.onnx', '/home/claude/kk/voices-v1.0.bin')

def load_test(tid):
    js = open(f'{ROOT}/mock_test_{tid}.js').read()
    out = subprocess.run(['node', '-e', f"global.window={{MOCK_TESTS:[]}};require('{ROOT}/mock_test_{tid}.js');process.stdout.write(JSON.stringify(window.MOCK_TESTS[0]))"], capture_output=True, text=True)
    return json.loads(out.stdout)

def sil(s): return np.zeros(int(s * SR), dtype=np.float32)

def clean(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = t.replace('’', "'").replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', t).strip()

def say(text, voice):
    text = clean(text)
    if not text: return sil(0.1)
    a, sr = k.create(text, voice=voice, speed=1.0, lang='en-us')
    assert sr == SR
    return a.astype(np.float32)

def write_mp3(path, audio):
    tmp = path + '.wav'
    sf.write(tmp, audio, SR)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp, '-af', 'loudnorm=I=-18:TP=-1.5:LRA=11', '-ac', '1', '-ar', '24000', '-b:a', '56k', path], check=True)
    os.remove(tmp)

def gen(tid):
    T = load_test(tid)
    parts = [T['listening']['practice']] + T['listening']['parts']
    vmap, fi, mi = {}, 0, 0
    for p in parts:
        for key, c in p['cast'].items():
            kk = p['id'] + ':' + key
            if kk not in vmap:
                if c.get('g') == 'm': vmap[kk] = M[mi % len(M)]; mi += 1
                else: vmap[kk] = F[fi % len(F)]; fi += 1
    os.makedirs(f'{OUT}/{tid}', exist_ok=True)
    mp=f'{OUT}/{tid}/manifest.json'
    old=json.load(open(mp)) if os.path.exists(mp) else {}
    manifest = {'test': tid, 'voices': vmap, 'files': dict(old.get('files',{}))}
    for p in parts:
        for si, seg in enumerate(p['segments']):
            key = 'LP-0' if p['id'] == 'LP' else f"{p['id']}-{si}"
            path = f'{OUT}/{tid}/{key}.mp3'
            if tid == 'A' and key == 'L5-0':
                continue  # real Meta AI video already exists
            if not os.path.exists(path):
                pieces = [sil(0.4)]
                for who, text in seg['lines']:
                    pieces.append(say(text, vmap.get(p['id'] + ':' + who, NARR)))
                    pieces.append(sil(0.55))
                pieces.append(sil(0.3))
                audio = np.concatenate(pieces)
                write_mp3(path, audio)
                manifest['files'][key] = round(len(audio) / SR, 1)
                print(tid, key, round(len(audio) / SR, 1), 's', flush=True)
            if p['id'] in ('LP', 'L1', 'L2', 'L3'):
                for q in seg['questions']:
                    qp = f"{OUT}/{tid}/{q['id']}.mp3"
                    if os.path.exists(qp): continue
                    audio = np.concatenate([sil(0.25), say(q['q'], NARR), sil(0.3)])
                    write_mp3(qp, audio)
                    manifest['files'][q['id']] = round(len(audio) / SR, 1)
    manifest['list']=sorted(f for f in os.listdir(f'{OUT}/{tid}') if f.endswith(('.mp3','.mp4')))
    json.dump(manifest, open(f'{OUT}/{tid}/manifest.json', 'w'), indent=1)
    print('DONE', tid, flush=True)

for tid in sys.argv[1:]:
    t = time.time(); gen(tid); print('elapsed', tid, round(time.time() - t), 's', flush=True)
