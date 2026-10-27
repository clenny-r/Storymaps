const { chromium } = require('playwright');
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage();
  await p.addInitScript(()=>{ speechSynthesis.speak=()=>{}; localStorage.setItem('babyVoicePicked_v1','1'); localStorage.setItem('babyLevel_v1','3'); });
  const B='http://localhost:8123/Pages/Apps/Baby%20Games/';
  const texts=[];
  const grab=async(f,fn)=>{ await p.goto(B+f); await p.waitForTimeout(500); texts.push(...await p.evaluate(fn)); };
  await grab('baby-animals.html',()=>{ const o=[]; ANIMALS.forEach(a=>{ const n=a.n.toLowerCase(); o.push(line(a),'Yes! '+line(a)+'!','Who says '+a.s+'?','Can you find the '+n+'?','That is the '+n+'.','Where is the '+n+'?'); }); return o; });
  await grab('baby-body.html',()=>{ const o=[]; PARTS.forEach(t=>{ o.push('Where '+verb(t)+' '+the(t)+'?','Yes! '+cap(the(t))+'! Well done!',(t.many?'Those are ':'That is ')+the(t)+'.'); }); return o; });
  await grab('baby-words.html',()=>{ const o=[]; WORDS.forEach(x=>{ o.push(cap(x.w)+'! '+(x.a===x.w?'':cap(art(x))+'.'), cap(x.w)+'! '+cap(art(x))+'. '+x.w.charAt(0).toUpperCase()+' is for '+x.w+'.', whereIs(x),'Yes! '+cap(art(x))+'! Well done!',(x.pl?'Those are ':'That is ')+art(x)+'.'); if(x.r) o.push('Which one '+rq(x)+'?'); }); return o; });
  await grab('baby-colors.html',()=>{ const o=[]; COLORS.forEach(c=>{ o.push('Tap the '+c.name+' one',"Yes! " + cap(c.name) + ", like " + (c.like || ("a " + c.thing)) + "!",'Try again. Tap the '+c.name+' one.'); }); return o; });
  await grab('baby-family.html',()=>{ const o=[]; PEOPLE.forEach(x=>{ o.push("Where's "+x.say+"?","Try again! Where's "+x.say+"?"); CHEERS.forEach(c=>o.push(c+" That's "+x.say+"!")); }); return o; });
  await grab('baby-bible-squish.html',()=>{ const o=[]; AFFIRMATIONS.forEach(a=>o.push(a.text)); LETTERS.forEach(l=>o.push(l.l+' is for '+l.word)); return o.map(t=>t.replace(/[^\x00-\x7FÀ-ɏ']/g,'').replace(/\s+/g,' ').trim()); });
  await grab('baby-draw.html',()=>{ const o=affirmations.map(a=>a.say); o.push('Welcome, little one! Let us make something beautiful for God!'); return o; });
  texts.push("Hi! Let's play together!");
  // also capture anything else spoken during random play
  const extra=[];
  for (const f of ['baby-squish-game.html','baby-bible-squish.html','baby-draw.html','baby-colors.html','baby-family.html','baby-body.html','baby-animals.html','baby-words.html']) {
    await p.goto(B+f); await p.evaluate(()=>{ window.__t=[]; const o=BabyVoice.say; BabyVoice.say=function(t,cb){ window.__t.push(t); if(cb) setTimeout(cb,20); }; });
    for(let i=0;i<120;i++){ if(!p.url().endsWith(f)) break; await p.mouse.click(60+Math.random()*700, 150+Math.random()*900); await p.waitForTimeout(40);
      if(p.url().endsWith(f)) extra.push(...((await p.evaluate(()=>{ const t=window.__t||[]; window.__t=[]; return t; }))||[])); }
  }
  texts.push(...extra);
  await p.goto(B+'baby-words.html');
  const out=await p.evaluate((texts)=>{ const m={}; texts.forEach(t=>BabyVoice._sentences(t).forEach(x=>{ m[x.h]=x; })); return Object.values(m); }, texts);
  require('fs').writeFileSync('sentences.json', JSON.stringify(out,null,0));
  console.log('texts',texts.length,'extra',extra.length,'unique sentences',out.length);
  console.log(out.slice(0,8).map(x=>x.s).join(' | '));
  const hashes=new Set(out.map(x=>x.h)); console.log('hash collisions', out.length-hashes.size);
  await b.close();
})();
