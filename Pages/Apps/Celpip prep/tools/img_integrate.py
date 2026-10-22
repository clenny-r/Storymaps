"""Swap SVG speaking pictures for tests/img/<T>/*.jpg and drop the unused SVG code.
usage: integrate.py TESTS_DIR SPEAKING_JSON"""
import sys,re,json,html
td,sj=sys.argv[1:3]; meta=json.load(open(sj))
def tag(T,name,alt): return "'<img src=\"tests/img/%s/%s.jpg\" alt=\"%s\">'"%(T,name,html.escape(alt,quote=True).replace("'","&#39;"))
for T in 'ABCDEFGHIJKLMNOPQRSTU':
    f=f'{td}/mock_test_{T}.js'; s=open(f,encoding='utf8').read(); n0=len(s)
    m=meta[T]; L=s.split('\n'); cnt=0
    for i,l in enumerate(L):
        if re.search(r"id: 'S[34]'",l): L[i],k=re.subn(r"image: [A-Z_][A-Z0-9_]*",lambda _:'image: '+tag(T,'scene',m['S3']['label']),l); cnt+=k
        elif re.search(r"id: 'S8'",l): L[i],k=re.subn(r"image: [A-Z_][A-Z0-9_]*",lambda _:'image: '+tag(T,'object',m['S8']['label']),l); cnt+=k
        else:
            mm=re.search(r"key: '([ABC])', title: '((?:[^'\\]|\\.)*)', image: [A-Z_][A-Z0-9_]*",l)
            if mm:
                title=mm.group(2).replace("\\'","'")
                L[i]=re.sub(r"image: [A-Z_][A-Z0-9_]*",lambda _:'image: '+tag(T,'opt_'+mm.group(1),'Photo: '+title),l,count=1); cnt+=1
    assert cnt==6,(T,cnt)
    s='\n'.join(L)
    # remove the SVG helper block: from the helper comment to the line before window.MOCK_TESTS.push
    a=s.find('/* ---------- small SVG helpers'); b=s.find('window.MOCK_TESTS.push(')
    if a!=-1 and b>a:
        b=s.rfind('\n',0,b)+1
        s=s[:a]+'/* Speaking pictures are image files in tests/img/'+T+'/ (scene, object, opt_A to opt_C). */\n  '+s[b:].lstrip(' ')
    open(f,'w',encoding='utf8').write(s); print(T,cnt,n0,'->',len(s))
