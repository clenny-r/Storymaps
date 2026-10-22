"""Build Meta AI prompts for Listening Part 5 of a test. usage: make_prompts.py T "room description" """
import json,subprocess,sys,random,re
T,room=sys.argv[1],sys.argv[2]
d=json.loads(subprocess.run(['node','-e',f"global.window={{MOCK_TESTS:[]}};require('/home/claude/celpip/tests/mock_test_{T}.js');process.stdout.write(JSON.stringify(window.MOCK_TESTS[0].listening.parts.find(p=>p.id==='L5')))"],capture_output=True,text=True).stdout)
def rgb(h): h=h.lstrip('#'); return [int(h[i:i+2],16) for i in (0,2,4)]
def lum(h): r,g,b=rgb(h); return 0.299*r+0.587*g+0.114*b
def skin(h):
    l=lum(h); return 'light' if l>200 else 'fair' if l>180 else 'medium' if l>150 else 'medium-brown' if l>115 else 'dark brown'
NAMED={'black':(20,20,20),'dark grey':(70,70,70),'grey':(140,140,140),'white':(245,245,245),'navy blue':(30,45,90),'blue':(50,100,200),'light blue':(140,190,230),'teal':(20,130,130),'green':(40,140,60),'olive green':(110,120,50),'yellow':(235,200,50),'orange':(230,120,40),'red':(190,40,40),'burgundy':(120,30,50),'pink':(230,140,170),'purple':(110,60,150),'brown':(110,70,40),'beige':(220,200,160)}
def cname(h):
    c=rgb(h); return min(NAMED,key=lambda k:sum((a-b)**2 for a,b in zip(NAMED[k],c)))
HAIR={'black':(25,20,20),'dark brown':(70,45,30),'brown':(120,80,50),'auburn':(140,60,40),'blond':(220,190,120),'grey':(160,160,160),'white':(235,235,235)}
def hair(h):
    c=rgb(h); return min(HAIR,key=lambda k:sum((a-b)**2 for a,b in zip(HAIR[k],c)))
STY={'short':'short','long':'long','bun':'tied back in a bun','curly':'curly','bald':'bald'}
rnd=random.Random(T)
cast=d['cast']; keys=list(cast); seats=['LEFT','MIDDLE','RIGHT']; seatw=['left','middle','right']
desc=[];seat={}
for i,k in enumerate(keys):
    c=cast[k]; nm=c['name'].split()[0].rstrip('.'); seat[k]=(nm,seatw[i])
    who='a woman' if c['g']=='f' else 'a man'; age=rnd.randint(28,56)
    hs='a bald head' if c.get('style')=='bald' else f"{STY.get(c.get('style'),'short')} {hair(c['hair'])} hair"
    if c.get('style')=='bun': hs=f"{hair(c['hair'])} hair tied back in a bun"
    pre='in the' if seats[i]=='MIDDLE' else 'on the'
    hc=hair(c['hair'])
    if hc in ('grey','white'): age=rnd.randint(58,68)
    sc=cname(c['shirt']); art='an' if sc[0] in 'aeiou' else 'a'
    desc.append(f"{pre} {seats[i]}, {nm}, {who} about {age} with {skin(c['skin'])} skin and {hs}, wearing {art} {sc} top")
lines=d['segments'][0]['lines']
for who,t in lines:
    assert len(t.split())<=21, (who,t)
first_who,first_t=lines[0]
first=(f"Create a 10-second realistic video. Wide, static camera shot of {room}. Three people sit side by side facing the camera: "
       + '; '.join(desc[:-1])+'; '+desc[-1]+'. '
       + f"Only {seat[first_who][0]} speaks, in a natural Canadian English accent, and says exactly these words and nothing else: \"{first_t}\" The other two listen. No captions, no subtitles, no music, no text on screen.")
rest=[f"Next 10-second clip, SAME scene: same three people, same faces, same clothes, same seats, same room, same static camera. Only {seat[w][0]} ({seat[w][1]}) speaks, in a natural Canadian English accent, saying exactly: \"{t}\" The other two listen. No captions, no subtitles, no music, no text on screen." for w,t in lines[1:]]
P=json.load(open('/home/claude/meta/prompts_all.json')); P[T]={'first':first,'rest':rest}; json.dump(P,open('/home/claude/meta/prompts_all.json','w'),indent=1)
print(T,len(rest)+1,'clips'); print(first)
