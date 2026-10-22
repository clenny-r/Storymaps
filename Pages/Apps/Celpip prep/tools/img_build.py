"""Build tests/img/<T>/{scene,object,opt_A,opt_B,opt_C}.jpg from ChatGPT PNGs.
usage: build_imgs.py RAW_DIR OUT_TESTS_IMG_DIR PROMPTS_JSON"""
import sys,os,json
import numpy as np
from PIL import Image
raw,out,pj=sys.argv[1:4]
d=json.load(open(pj))
def save(im,path,w):
    os.makedirs(os.path.dirname(path),exist_ok=True)
    im=im.convert('RGB'); h=round(im.height*w/im.width)
    im.resize((w,h),Image.LANCZOS).save(path,quality=84,optimize=True,progressive=True)
def gutter(prof,lo,hi):
    # longest run of near-white lines between lo and hi; return (start,end)
    best=(0,0);s=None
    for i in range(lo,hi):
        if prof[i]>245:
            s=i if s is None else s
            if i-s+1>best[1]-best[0]: best=(s,i+1)
        else: s=None
    return best
def cut(path):
    im=Image.open(path).convert('RGB'); a=np.asarray(im).astype(float).mean(axis=2)
    H,W=a.shape
    # use per-line minimum-ish: mean brightness over the line
    col=np.percentile(a,10,axis=0); row=np.percentile(a,10,axis=1)
    cx=gutter(col,int(W*.35),int(W*.65)); cy=gutter(row,int(H*.35),int(H*.65))
    if cx[1]-cx[0]<3 or cy[1]-cy[0]<3: raise SystemExit(f'NO GUTTER {path} {cx} {cy}')
    def trim(box):
        x0,y0,x1,y1=box; c=im.crop(box); b=np.asarray(c).astype(float).mean(axis=2)
        # strip white edges
        cs=np.where(np.percentile(b,10,axis=0)<245)[0]; rs=np.where(np.percentile(b,10,axis=1)<245)[0]
        return c.crop((cs[0],rs[0],cs[-1]+1,rs[-1]+1)) if len(cs) and len(rs) else c
    cells=[trim((0,0,cx[0],cy[0])),trim((cx[1],0,W,cy[0])),trim((0,cy[1],cx[0],H)),trim((cx[1],cy[1],W,H))]
    return cells,(cx,cy)
done=[]
for i,g in enumerate(d['grids'],1):
    p=os.path.join(raw,f'celimg_grid{i:02d}.png')
    if not os.path.exists(p): continue
    cells,info=cut(p)
    for name,c in zip(g['cells'],cells):
        T,k=name.split('.')
        # crop to 3:2 centre if needed
        w,h=c.size; tw=min(w,round(h*1.5)); th=round(tw/1.5)
        c=c.crop(((w-tw)//2,(h-th)//2,(w-tw)//2+tw,(h-th)//2+th))
        save(c,f'{out}/{T}/opt_{k}.jpg',600); done.append(name)
    print('grid',i,info,[c.size for c in cells])
for T in d['scenes']:
    for kind,w in (('scene',1200),('object',1000)):
        p=os.path.join(raw,f'celimg_{T}_{kind}.png')
        if os.path.exists(p): save(Image.open(p),f'{out}/{T}/{kind}.jpg',w); done.append(T+'.'+kind)
print(len(done),'images written')
