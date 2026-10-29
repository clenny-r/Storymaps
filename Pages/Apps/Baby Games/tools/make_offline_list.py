"""Write offline-files.json: every file Plane mode should save (run from the Baby Games folder)."""
import os, json, re, glob
skip_dirs = {'tools', '.git'}
skip_ext = {'.md', '.py'}
skip_files = {'piper-research.json', 'offline-files.json'}
out = []
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in skip_dirs]
    for f in files:
        if f in skip_files or os.path.splitext(f)[1] in skip_ext: continue
        p = os.path.relpath(os.path.join(root, f), '.').replace(os.sep, '/')
        out.append(p)
# Google Fonts stylesheets the pages link to (their font files are saved on first use)
fonts = set()
for h in glob.glob('*.html'):
    fonts.update(re.findall(r'href="(https://fonts\.googleapis\.com/[^"]+)"', open(h, encoding='utf8').read()))
out = sorted(out) + sorted(f.replace('&amp;', '&') for f in fonts)
json.dump(out, open('offline-files.json', 'w'), indent=0)
print(len(out), 'files')
