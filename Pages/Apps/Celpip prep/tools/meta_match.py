"""Transcribe downloaded Meta AI clips and match each to the expected lines of a test's Part 5.
usage: python3 match.py <TEST> <file1.mp4> ...   -> prints best line index per file and writes match_<T>.json"""
import sys, json, re, subprocess, difflib, os
from pocketsphinx import Decoder
T = sys.argv[1]; files = sys.argv[2:]
p = json.load(open('/home/claude/meta/prompts_all.json'))[T]
prompts = [p['first']] + p['rest']
def line_of(pr):
    m = re.search(r'(?:exactly these words and nothing else|saying exactly): "(.*?)"', pr)
    return m.group(1)
lines = [line_of(x) for x in prompts]
norm = lambda s: re.sub(r"[^a-z' ]", "", s.lower().replace('-', ' ')).split()
dec = Decoder()
out = []
for f in files:
    w = '/tmp/claude-0/-home-claude/3d05f3d2-620b-53bf-9e95-c5d52bc509a1/scratchpad/m.wav'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f, '-ac', '1', '-ar', '16000', w], check=True)
    dec.start_utt(); dec.process_raw(open(w, 'rb').read()[44:], full_utt=True); dec.end_utt()
    hyp = dec.hyp().hypstr if dec.hyp() else ''
    sc = [difflib.SequenceMatcher(None, norm(l), norm(hyp)).ratio() for l in lines]
    best = max(range(len(lines)), key=lambda i: sc[i])
    out.append({'file': f, 'clip': best + 1, 'score': round(sc[best], 2), 'hyp': hyp})
    print(os.path.basename(f), 'clip', best + 1, round(sc[best], 2), '|', hyp[:90], flush=True)
have = sorted(set(o['clip'] for o in out))
print('missing clips:', [i + 1 for i in range(len(lines)) if i + 1 not in have])
json.dump({'lines': lines, 'files': out}, open(f'/home/claude/meta/match_{T}.json', 'w'), indent=1)
