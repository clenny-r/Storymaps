import subprocess, os, re, sys, glob, json
common=set('the and was you that for with this are have not but they his her she what all were when your can said there use each which their time will about out many then them these some would make like into has two more write see number way could people than first water been call who its now find long down day did get come made may part over new sound take only little work know place year live back give most very after thing our just name good sentence man think say great where help through much before line right too mean old any same tell boy follow came want show also around form three small set put end does another well large must big even such because turn here why ask went men read need land different home move try kind hand picture again change off play spell air away animal house point page letter mother answer found study still learn should world high every near add food between own below country plant last school father keep tree never start city earth eye light thought head under story saw left few while along might close something seem next hard open example begin life always those both paper together got group often run important until children side feet car mile night walk white sea began grow took river four carry state once book hear stop without second later miss idea enough eat face watch far really almost let above girl sometimes mountain cut young talk soon list song being leave family project science wind manager cafeteria already spoke strongest'.split())
for T in sys.argv[1:]:
    hits=[]
    for f in sorted(glob.glob(f'/home/claude/meta/work_{T}/t*.mp4')):
        i=int(re.search(r't(\d+)\.mp4',f).group(1))
        d=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f],capture_output=True,text=True).stdout)
        best=''
        t=0.3
        while t<d:
            png='/tmp/claude-0/-home-claude/3d05f3d2-620b-53bf-9e95-c5d52bc509a1/scratchpad/c2.png'
            subprocess.run(['ffmpeg','-v','error','-y','-ss',f'{t:.2f}','-i',f,'-frames:v','1','-vf','crop=iw*0.7:ih*0.2:iw*0.15:ih*0.78,scale=iw*2:-1,format=gray',png])
            txt=subprocess.run(['tesseract',png,'-','--psm','6'],capture_output=True,text=True).stdout.lower()
            w=re.findall(r"[a-z']+",txt); real=[x for x in w if x in common]
            if len(real)>=3: best=' '.join(w[:14]); break
            t+=1.0
        if best: hits.append((i,best))
    print(T,hits,flush=True)
