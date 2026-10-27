import json, base64, glob, os, subprocess, sys
src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
tmp = out + '/_tmp.wav'
hashes = []
for f in sorted(glob.glob(src + '/twcvoice_p*.json')):
    for h, b64 in json.load(open(f)).items():
        if not all(c in '0123456789abcdef' for c in h) or len(h) != 8: continue
        open(tmp, 'wb').write(base64.b64decode(b64))
        # trim silence at both ends (the player adds its own lead-in), mono MP3
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tmp, '-af',
            'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,atempo=0.9,apad=pad_dur=0.05',
            '-ac', '1', '-ar', '22050', '-b:a', '40k', out + '/' + h + '.mp3'], check=True)
        hashes.append(h)
os.remove(tmp)
hashes = sorted(set(hashes))
json.dump(hashes, open(out + '/index.json', 'w'), separators=(',', ':'))
print(len(hashes), 'clips')
