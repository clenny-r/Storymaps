/* Rowe CELPIP Mock Exam: Test D content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly harder than the real test (aimed at CLB 8 to 11).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* ---------- small SVG helpers for speaking pictures ---------- */
  function person(x, y, o) {
    o = o || {};
    var s = o.s || 1, skin = o.skin || '#e0b48f', shirt = o.shirt || '#3d7cc9', pants = o.pants || '#38414d', hair = o.hair || '#3b2a20';
    var arms = o.arms || 'down';
    var a = arms === 'up' ? '<line x1="-7" y1="-30" x2="-16" y2="-50" /><line x1="7" y1="-30" x2="16" y2="-50" />'
      : arms === 'right' ? '<line x1="-7" y1="-30" x2="-12" y2="-14" /><line x1="7" y1="-30" x2="24" y2="-36" />'
      : arms === 'left' ? '<line x1="-7" y1="-30" x2="-24" y2="-36" /><line x1="7" y1="-30" x2="12" y2="-14" />'
      : '<line x1="-7" y1="-30" x2="-12" y2="-14" /><line x1="7" y1="-30" x2="12" y2="-14" />';
    var legs = o.sit ? '<line x1="-4" y1="-12" x2="-14" y2="-12" /><line x1="4" y1="-12" x2="-6" y2="-12" /><line x1="-14" y1="-12" x2="-14" y2="0" /><line x1="-6" y1="-12" x2="-6" y2="0" />'
      : '<line x1="-4" y1="-12" x2="-7" y2="0" /><line x1="4" y1="-12" x2="7" y2="0" />';
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<g stroke="' + skin + '" stroke-width="4" stroke-linecap="round">' + a + '</g>' +
      '<g stroke="' + pants + '" stroke-width="5" stroke-linecap="round">' + legs + '</g>' +
      '<rect x="-8" y="-36" width="16" height="25" rx="5" fill="' + shirt + '"/>' +
      '<circle cx="0" cy="-45" r="9" fill="' + skin + '"/>' +
      '<path d="M-9 -46 a9 9 0 0 1 18 0 q-9 -6 -18 0z" fill="' + hair + '"/>' +
      '</g>';
  }

  /* ---------- S3/S4: a windy afternoon at the beach ---------- */
  var BEACH = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A busy beach on a very windy afternoon">';
    p += '<rect width="640" height="400" fill="#bfe6f7"/>';
    p += '<circle cx="590" cy="45" r="24" fill="#f7d35c"/>';
    p += '<g fill="#ffffff"><ellipse cx="420" cy="48" rx="40" ry="14"/><ellipse cx="450" cy="40" rx="28" ry="12"/><ellipse cx="90" cy="38" rx="34" ry="11"/></g>';
    /* wind lines */
    p += '<g stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"><path d="M290 70 q25 -10 50 0 q20 8 40 -2"/><path d="M320 100 q25 -10 50 0"/><path d="M20 110 q25 -10 50 0 q15 6 30 0"/><path d="M500 95 q25 -10 50 0"/></g>';
    /* sea */
    p += '<rect y="150" width="640" height="80" fill="#3f9fd0"/>';
    p += '<g stroke="#ffffff" stroke-width="2" fill="none" opacity=".8"><path d="M20 175 q15 -8 30 0 q15 8 30 0"/><path d="M260 168 q15 -8 30 0 q15 8 30 0"/><path d="M470 180 q15 -8 30 0 q15 8 30 0"/><path d="M140 200 q15 -8 30 0 q15 8 30 0"/></g>';
    /* swimmer */
    p += '<circle cx="150" cy="186" r="8" fill="#a9714b"/><path d="M142 184 a8 8 0 0 1 16 0z" fill="#1d1410"/><line x1="158" y1="188" x2="172" y2="176" stroke="#a9714b" stroke-width="4" stroke-linecap="round"/><path d="M134 194 q16 -6 32 0" stroke="#ffffff" stroke-width="2" fill="none"/>';
    /* sand */
    p += '<path d="M0 222 Q320 206 640 224 L640 400 L0 400z" fill="#f1dca7"/>';
    /* kite and child */
    p += '<polygon points="230,40 250,64 230,92 210,64" fill="#8e44ad"/><line x1="210" y1="64" x2="250" y2="64" stroke="#5b2c6f" stroke-width="1.5"/>';
    p += '<path d="M230 92 q-10 10 2 18 q-12 8 0 18" stroke="#8e44ad" stroke-width="2" fill="none"/>';
    p += '<line x1="230" y1="92" x2="204" y2="230" stroke="#555" stroke-width="1.2"/>';
    p += person(200, 272, { s: .8, arms: 'up', shirt: '#f39c12', skin: '#f0c9a6', hair: '#c49a42' });
    /* lifeguard tower with flag */
    p += '<g stroke="#ffffff" stroke-width="5"><line x1="392" y1="292" x2="400" y2="210"/><line x1="438" y1="292" x2="430" y2="210"/><line x1="395" y1="255" x2="435" y2="255"/></g>';
    p += '<rect x="384" y="202" width="62" height="10" fill="#d63031"/>';
    p += '<rect x="390" y="226" width="50" height="16" fill="#d63031"/><text x="415" y="238" font-size="8" text-anchor="middle" font-family="sans-serif" fill="#ffffff">LIFEGUARD</text>';
    p += person(415, 202, { sit: true, arms: 'left', shirt: '#d63031', skin: '#7a4b31', hair: '#120c08' });
    p += '<line x1="444" y1="202" x2="444" y2="140" stroke="#555" stroke-width="3"/><path d="M444 142 q14 -5 26 2 q12 6 24 0 l0 16 q-12 6 -24 0 q-12 -7 -26 -2z" fill="#f1c40f"/>';
    /* volleyball game */
    p += person(530, 262, { s: .75, arms: 'up', shirt: '#16a085', skin: '#c98c64', hair: '#2a1b12' });
    p += '<g stroke="#555" stroke-width="4"><line x1="492" y1="214" x2="492" y2="278"/><line x1="604" y1="214" x2="604" y2="278"/></g>';
    p += '<rect x="492" y="216" width="112" height="18" fill="#ffffff" fill-opacity=".35" stroke="#333" stroke-width="1.5"/>';
    p += '<g stroke="#333" stroke-width=".8">' + (function () { var l = ''; for (var i = 1; i < 11; i++) l += '<line x1="' + (492 + i * 10.2) + '" y1="216" x2="' + (492 + i * 10.2) + '" y2="234"/>'; return l; })() + '<line x1="492" y1="225" x2="604" y2="225"/></g>';
    p += person(578, 302, { arms: 'up', shirt: '#2e86c1', skin: '#e3b28b', hair: '#7a4a24' });
    p += '<circle cx="556" cy="182" r="9" fill="#ffffff" stroke="#e67e22" stroke-width="2"/><path d="M548 180 q8 6 16 0" stroke="#e67e22" stroke-width="1.5" fill="none"/>';
    /* towel under the umbrella */
    p += '<rect x="124" y="352" width="70" height="24" fill="#e74c3c" transform="skewX(-15)"/><g fill="#ffffff" opacity=".7"><rect x="142" y="352" width="8" height="24" transform="skewX(-15)"/><rect x="166" y="352" width="8" height="24" transform="skewX(-15)"/></g>';
    /* empty hole where the umbrella was */
    p += '<ellipse cx="88" cy="346" rx="7" ry="3" fill="#b89a5f"/>';
    /* beach umbrella lifting out of the sand */
    p += '<line x1="112" y1="302" x2="74" y2="216" stroke="#555" stroke-width="4"/>';
    p += '<g transform="rotate(-28 74 216)"><path d="M24 220 Q74 168 124 220 Q111 211 99 220 Q86 211 74 220 Q62 211 49 220 Q37 211 24 220z" fill="#27ae60"/><path d="M49 220 Q74 168 99 220" fill="none" stroke="#f1c40f" stroke-width="3"/></g>';
    p += '<g stroke="#7d8ea0" stroke-width="2" fill="none"><path d="M140 230 l14 -4"/><path d="M138 244 l16 -3"/></g>';
    p += person(134, 366, { s: 1.1, arms: 'up', shirt: '#8e44ad', skin: '#d6a07a', hair: '#1d1410' });
    /* sandcastle with a child and bucket */
    p += '<g fill="#d9b26f"><rect x="252" y="338" width="60" height="26"/><rect x="250" y="318" width="16" height="20"/><rect x="298" y="318" width="16" height="20"/><rect x="273" y="310" width="18" height="28"/></g>';
    p += '<g fill="#b8914f"><rect x="276" y="350" width="12" height="14" rx="6"/></g><line x1="282" y1="310" x2="282" y2="296" stroke="#555" stroke-width="1.5"/><polygon points="282,296 294,300 282,304" fill="#e74c3c"/>';
    p += person(232, 372, { sit: true, s: .8, shirt: '#e84393', skin: '#8d5a3b', hair: '#120c08', arms: 'right' });
    p += '<path d="M200 358 l16 0 l-3 16 l-10 0z" fill="#3498db"/><path d="M202 358 q6 -10 12 0" stroke="#555" stroke-width="1.5" fill="none"/>';
    /* dog running toward the sandcastle */
    p += '<g fill="#a5713f"><ellipse cx="368" cy="362" rx="20" ry="9"/><circle cx="345" cy="352" r="8"/><ellipse cx="341" cy="345" rx="4" ry="7"/></g>';
    p += '<g stroke="#a5713f" stroke-width="4" stroke-linecap="round"><line x1="354" y1="368" x2="342" y2="378"/><line x1="360" y1="368" x2="354" y2="380"/><line x1="380" y1="368" x2="392" y2="378"/><line x1="384" y1="366" x2="398" y2="372"/><line x1="388" y1="358" x2="400" y2="350"/></g>';
    p += '<circle cx="342" cy="351" r="1.8" fill="#222"/>';
    /* ice cream cart with a customer */
    p += '<rect x="462" y="330" width="76" height="40" rx="4" fill="#f4f1ea" stroke="#e84393" stroke-width="3"/>';
    p += '<line x1="500" y1="330" x2="500" y2="306" stroke="#555" stroke-width="3"/><path d="M462 310 q38 -34 76 0z" fill="#e84393"/>';
    p += '<circle cx="478" cy="374" r="8" fill="#444"/><circle cx="522" cy="374" r="8" fill="#444"/>';
    p += '<text x="500" y="355" font-size="10" text-anchor="middle" fill="#9b3d6c" font-family="sans-serif">ICE CREAM</text>';
    p += person(580, 386, { arms: 'left', shirt: '#f1c40f', skin: '#f0c9a6', hair: '#555555' });
    p += '<polygon points="556,352 552,361 560,361" fill="#d9a35b"/><circle cx="556" cy="349" r="4.5" fill="#a0e0c8"/>';
    p += '</svg>';
    return p;
  })();

  /* ---------- S5: commuting options ---------- */
  var USEDCAR = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e3edf5"/><rect y="88" width="200" height="32" fill="#7f8c8d"/><g stroke="#f1c40f" stroke-width="3"><line x1="10" y1="104" x2="40" y2="104"/><line x1="80" y1="104" x2="110" y2="104"/><line x1="150" y1="104" x2="180" y2="104"/></g>' +
    '<path d="M30 84 L40 62 Q48 50 64 50 L120 50 Q134 50 144 62 L162 66 Q172 68 172 78 L172 84z" fill="#c0392b"/><rect x="58" y="56" width="30" height="14" fill="#d6eaf8"/><rect x="94" y="56" width="32" height="14" fill="#d6eaf8"/>' +
    '<circle cx="60" cy="86" r="11" fill="#2c3e50"/><circle cx="142" cy="86" r="11" fill="#2c3e50"/><circle cx="60" cy="86" r="4" fill="#bdc3c7"/><circle cx="142" cy="86" r="4" fill="#bdc3c7"/>' +
    '<rect x="132" y="12" width="56" height="22" rx="3" fill="#f6d55c"/><text x="160" y="27" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#333">USED</text></svg>';
  var EBIKE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e8f6ec"/><rect y="98" width="200" height="22" fill="#a3b1a8"/>' +
    '<circle cx="55" cy="80" r="22" fill="none" stroke="#333" stroke-width="4"/><circle cx="145" cy="80" r="22" fill="none" stroke="#333" stroke-width="4"/>' +
    '<path d="M55 80 L85 50 L130 50 L145 80 M85 50 L100 80 L55 80 M100 80 L130 50" stroke="#16a085" stroke-width="4" fill="none" stroke-linejoin="round"/>' +
    '<path d="M130 50 L126 36 L138 32" stroke="#555" stroke-width="3" fill="none"/><rect x="78" y="40" width="20" height="5" rx="2" fill="#222"/>' +
    '<rect x="94" y="54" width="22" height="12" rx="2" fill="#2c3e50" transform="rotate(-40 105 60)"/><polygon points="106,52 100,61 105,61 101,69 110,58 105,58" fill="#f1c40f"/>' +
    '<text x="100" y="18" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">E-BIKE</text></svg>';
  var CARSHARE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#f3eefa"/><rect y="90" width="200" height="30" fill="#95a5a6"/>' +
    '<path d="M20 86 L30 66 Q36 56 50 56 L100 56 Q112 56 120 66 L134 70 Q142 72 142 80 L142 86z" fill="#2e86c1"/><rect x="44" y="60" width="26" height="12" fill="#d6eaf8"/><rect x="76" y="60" width="28" height="12" fill="#d6eaf8"/>' +
    '<text x="82" y="82" font-size="8" text-anchor="middle" font-family="sans-serif" fill="#ffffff">SHARE</text>' +
    '<circle cx="46" cy="88" r="9" fill="#2c3e50"/><circle cx="118" cy="88" r="9" fill="#2c3e50"/>' +
    '<rect x="156" y="30" width="28" height="48" rx="4" fill="#34495e"/><rect x="159" y="35" width="22" height="36" fill="#d6eaf8"/><path d="M170 42 a6 6 0 0 1 6 6 c0 5 -6 12 -6 12 c0 0 -6 -7 -6 -12 a6 6 0 0 1 6 -6z" fill="#e74c3c"/>' +
    '<text x="70" y="24" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">CAR SHARE</text></svg>';

  /* ---------- S8: an unusual suitcase ---------- */
  var ODDCASE = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual suitcase in a travel shop">' +
    '<rect width="640" height="400" fill="#eef1f5"/><rect y="330" width="640" height="70" fill="#c8bfb0"/>' +
    '<rect x="24" y="24" width="170" height="54" rx="6" fill="#ffffff" stroke="#b0b8c4"/><text x="109" y="58" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#2c3e50">TRAVEL SHOP</text>' +
    /* telescoping handle */
    '<g stroke="#7f8c8d" stroke-width="6"><line x1="250" y1="140" x2="250" y2="66"/><line x1="290" y1="140" x2="290" y2="66"/></g><rect x="242" y="56" width="56" height="14" rx="7" fill="#2c3e50"/>' +
    /* price tag hanging from the handle */
    '<path d="M292 66 Q330 70 352 92" stroke="#555" stroke-width="1.5" fill="none"/><g transform="rotate(14 380 106)"><path d="M352 92 L408 92 L408 122 L352 122 L340 107z" fill="#f6d55c" stroke="#b7950b"/><circle cx="350" cy="107" r="3" fill="#fff"/><text x="380" y="113" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">$349</text></g>' +
    /* main case */
    '<rect x="220" y="140" width="200" height="180" rx="16" fill="#6c5ce7"/><g stroke="#5848c2" stroke-width="3"><line x1="260" y1="150" x2="260" y2="310"/><line x1="300" y1="150" x2="300" y2="310"/><line x1="340" y1="150" x2="340" y2="310"/><line x1="380" y1="150" x2="380" y2="310"/></g>' +
    /* seat cushion on top */
    '<rect x="306" y="118" width="108" height="24" rx="10" fill="#d63031"/><g stroke="#a82424" stroke-width="2"><line x1="330" y1="122" x2="330" y2="138"/><line x1="360" y1="122" x2="360" y2="138"/><line x1="390" y1="122" x2="390" y2="138"/></g>' +
    /* motor on the side */
    '<rect x="420" y="238" width="64" height="62" rx="6" fill="#7f8c8d" stroke="#555" stroke-width="2"/><circle cx="452" cy="269" r="20" fill="#bdc3c7" stroke="#555" stroke-width="2"/><g stroke="#555" stroke-width="3"><line x1="452" y1="251" x2="452" y2="287"/><line x1="434" y1="269" x2="470" y2="269"/></g><text x="452" y="314" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#333">MOTOR</text>' +
    /* cup holder with a cup on the left side */
    '<path d="M186 186 L220 186 L220 196 L186 196z" fill="#2c3e50"/><path d="M190 160 L216 160 L212 192 L194 192z" fill="#ffffff" stroke="#999"/><rect x="190" y="156" width="26" height="6" rx="2" fill="#795548"/><text x="203" y="214" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#333">CUP</text>' +
    /* phone charger with a phone on a cable */
    '<rect x="236" y="226" width="40" height="22" rx="3" fill="#2d3436"/><text x="256" y="241" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#ffffff">USB</text>' +
    '<path d="M256 248 C256 280 170 250 170 284" stroke="#222" stroke-width="2.5" fill="none"/><rect x="156" y="284" width="28" height="48" rx="4" fill="#34495e"/><rect x="159" y="289" width="22" height="36" fill="#81ecec"/>' +
    /* large wheels */
    '<circle cx="256" cy="336" r="20" fill="#2d3436"/><circle cx="256" cy="336" r="8" fill="#b2bec3"/><circle cx="384" cy="336" r="20" fill="#2d3436"/><circle cx="384" cy="336" r="8" fill="#b2bec3"/>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'D',
    title: 'Mock Test D',
    note: 'Original practice content in the CELPIP-General format. This test is slightly harder than the real exam.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'office',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { DEV: { name: 'Dev', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#5d6d7e', style: 'short' }, AMARA: { name: 'Amara', g: 'f', skin: '#7a4b31', hair: '#1d1410', shirt: '#d35400', style: 'curly' } },
        segments: [{
          lines: [
            ['AMARA', 'Dev, do you want to grab lunch? I was thinking of that noodle place on Quinpool.'],
            ['DEV', 'I\'d love to, but I\'ve only got about half an hour. I have a call with the Calgary office at one.'],
            ['AMARA', 'Then the noodle place is out. There\'s always a line out the door at lunchtime. What about the sandwich shop downstairs?'],
            ['DEV', 'Perfect. And if it\'s busy, we can just take the food back up to our desks.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Amara change her lunch suggestion?', o: ['Dev does not have time to wait in a long line.', 'The noodle place is too far from the office.', 'Dev has to eat at his desk during the call.', 'The sandwich shop is cheaper than the noodles.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#2e4053', style: 'short' }, FARAH: { name: 'Farah', g: 'f', skin: '#c98c64', hair: '#120c08', shirt: '#117a65', style: 'long' } },
          segments: [
            {
              lines: [
                ['FARAH', 'Owen, have you got a second? We\'ve got a real problem in Conference Room B.'],
                ['OWEN', 'What kind of problem? The people from Bayside Freight are coming in at two.'],
                ['FARAH', 'I know. I went in to test everything, and the projector won\'t turn on. There\'s just a little red light blinking on the side.'],
                ['OWEN', 'Great. And it\'s already ten past one.'],
                ['FARAH', 'It gets worse. My laptop decided to install an update while I was setting up, and now it\'s stuck on a black screen. The whole presentation is on it.'],
                ['OWEN', 'Okay, um, didn\'t you save a copy somewhere else?'],
                ['FARAH', 'I emailed myself a version last night, but that\'s the old draft. It doesn\'t have the new cost figures Mr. Tanaka asked for this morning, and honestly, those figures are the whole reason they\'re coming in.'],
                ['OWEN', 'How long has the laptop been stuck like that?'],
                ['FARAH', 'About fifteen minutes. The progress bar hasn\'t moved at all.']
              ],
              questions: [
                { id: 'L1.1', q: 'What did Farah find when she tested the room?', o: ['The projector would not start.', 'The projector light was not on.', 'The room was booked by Bayside.', 'The laptop cable was missing.'] },
                { id: 'L1.2', q: 'How much time is there before the clients arrive?', o: ['Less than an hour', 'About fifteen minutes', 'An hour and ten minutes', 'Just over two hours'] },
                { id: 'L1.3', q: 'Why is Farah especially worried about the emailed copy?', o: ['It lacks the figures the meeting is about.', 'It has figures Mr. Tanaka has not checked.', 'It is in a format her laptop cannot open.', 'It was sent to the clients by mistake.'] }
              ]
            },
            {
              lines: [
                ['OWEN', 'Right. Let\'s deal with the projector first. The IT desk is short-staffed today, but Kwame is upstairs on the fifth floor. I\'ll message him.'],
                ['FARAH', 'Good idea. He mentioned last month that there\'s a spare projector in the storage room, and he\'s the only one with a key.'],
                ['OWEN', 'Then he\'s our best bet. Now, the slides. Could you rebuild the cost section from the old draft?'],
                ['FARAH', 'I think so, if I can get the numbers. Mr. Tanaka sent them in a spreadsheet, so they\'re sitting in my email. I just need a computer that works.'],
                ['OWEN', 'Use mine. I don\'t need it until the meeting. Go to my office, though. You\'ll get more done there than in this room with people walking in and out.'],
                ['FARAH', 'Thanks. Updating four slides should take me half an hour, tops. That still leaves a few minutes for us to run through it together.'],
                ['OWEN', 'Oh, Kwame just replied. He\'s stuck in a training session until one thirty, but he says he\'ll bring the spare projector down right after that.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Owen call Kwame their "best bet"?', o: ['Kwame can reach equipment others cannot.', 'Kwame is the only IT worker in today.', 'Kwame knows how to repair the projector.', 'Kwame works on the same floor as Farah.'] },
                { id: 'L1.5', q: 'Why does Owen suggest that Farah work in his office?', o: ['It will be easier to concentrate there.', 'His office has a projector that works.', 'The clients will be waiting in Room B.', 'Kwame will need the room to set up.'] },
                { id: 'L1.6', q: 'What can be inferred about Farah\'s plan for the slides?', o: ['She expects to finish with a little time to spare.', 'She will need Kwame\'s help to update the figures.', 'She will rewrite the whole presentation from memory.', 'She will present the old draft without any changes.'] }
              ]
            },
            {
              lines: [
                ['OWEN', 'How\'s it going? It\'s twenty to two.'],
                ['FARAH', 'The slides are finished. And guess what, my own laptop finally came back on. But honestly, I don\'t trust it today. I\'d rather present from yours.'],
                ['OWEN', 'That\'s fine with me. Kwame\'s already set up the spare projector, and he said its cable only fits the older port on my laptop anyway, so that decides it.'],
                ['FARAH', 'Lucky us. Should we mention any of this to the clients?'],
                ['OWEN', 'No, I don\'t think so. If anything else goes wrong, we\'ve got a backup. I asked reception to print twelve copies of the slides, enough for everyone in the room plus a couple of spares.'],
                ['FARAH', 'Smart. I\'ll go put them on the table now.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why does Farah decide not to present from her own laptop?', o: ['She doubts it will work reliably today.', 'It is still stuck on a black screen.', 'Kwame says it overheats easily.', 'Owen insists that she use his laptop.'] },
                { id: 'L1.8', q: 'What is Owen\'s attitude toward telling the clients about the problems?', o: ['He sees no need, since they have a backup.', 'He wants to apologize before they start.', 'He would like reception to explain it.', 'He prefers to wait until something fails.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { ADVISOR: { name: 'Service advisor', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#1f618d', style: 'bald' }, LUCIA: { name: 'Lucia', g: 'f', skin: '#d6a07a', hair: '#3b2a20', shirt: '#943126', style: 'bun' } },
          segments: [{
            lines: [
              ['ADVISOR', 'Ms. Ferreira? Hi, I\'m calling about your car. We\'ve finished the oil change and the tire rotation you booked.'],
              ['LUCIA', 'Oh, great. So it\'s ready to go?'],
              ['ADVISOR', 'Almost. But while it was up on the lift, our technician noticed your front brake pads are pretty worn. They\'re down to about three millimetres, and we normally recommend replacing them at four.'],
              ['LUCIA', 'Hmm. I did hear a squeak last week, but I figured it was just the cold weather.'],
              ['ADVISOR', 'That squeak is often the first warning. Front pads, parts and labour, come to two hundred and twenty dollars. We also spotted a small leak from the water pump. That one isn\'t urgent, but it should be looked at in the next few months. It\'s about four hundred and fifty.'],
              ['LUCIA', 'Wow. My bill today was supposed to be ninety dollars. I wasn\'t expecting to hear about another six hundred and seventy.'],
              ['ADVISOR', 'I understand. If it were my car, I wouldn\'t put off the brakes, especially with winter coming. The water pump can wait. We could book it for later, whenever suits you.'],
              ['LUCIA', 'Okay. How long would the brakes take?'],
              ['ADVISOR', 'About an hour and a half. If you have somewhere to be, our shuttle can drop you off downtown.'],
              ['LUCIA', 'I have to pick up my son from school at three thirty. Will it be done by then?'],
              ['ADVISOR', 'It\'s just after twelve now, so yes, no problem at all.'],
              ['LUCIA', 'All right, go ahead with the brakes, and I\'ll take the shuttle. But could you write down the water pump price for me? I\'d like to see what a couple of other garages would charge before I decide.'],
              ['ADVISOR', 'Of course. I\'ll put it on your invoice as a recommendation.']
            ],
            questions: [
              { id: 'L2.1', q: 'How does Lucia react when she hears about the brake pads?', o: ['She remembers a noise she had dismissed.', 'She says the pads were replaced recently.', 'She blames cold weather for the damage.', 'She asks to see the worn pads herself.'] },
              { id: 'L2.2', q: 'What is true about Lucia\'s brake pads?', o: ['They are thinner than the shop advises.', 'They should be replaced within a few months.', 'They are leaking fluid from the front.', 'They are about four millimetres thick.'] },
              { id: 'L2.3', q: 'If the shop does only the work Lucia approves, how much will her bill be today?', o: ['$310', '$220', '$760', '$540'] },
              { id: 'L2.4', q: 'What is the advisor\'s view of the two repairs?', o: ['Only one of them should be done right away.', 'Both should be finished before winter starts.', 'Neither one is serious enough to do today.', 'The water pump is more urgent than the brakes.'] },
              { id: 'L2.5', q: 'Why does Lucia ask for the water pump price in writing?', o: ['She may get prices from other garages.', 'She plans to pay for it on her next visit.', 'She needs to send it to her insurance company.', 'She thinks the advisor has made an error.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#f0c9a6', hair: '#4a3020', shirt: '#5d6d7e', style: 'short' }, AMINA: { name: 'Amina Yusuf', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#b9770e', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Amina Yusuf, the founder of Open Field Soccer, a youth league here in Saskatoon for newcomer families. Welcome, Amina.'],
              ['AMINA', 'Thanks for having me.'],
              ['HOST', 'So, how did the league get started?'],
              ['AMINA', 'When my family arrived in Canada, my two boys had a really hard time making friends. Their English wasn\'t strong yet, and they were too shy to sign up for a regular team. But they would play soccer for hours. So one Saturday I brought a ball to the park near our building, and a few other newcomer kids joined in. By the end of that summer, twelve kids were coming every week.'],
              ['HOST', 'And today?'],
              ['AMINA', 'Today we have about three hundred players on twenty-four teams, from age six to fourteen.'],
              ['HOST', 'That\'s remarkable. What does it cost families?'],
              ['AMINA', 'Registration is twenty dollars a season. But, and this is important to me, no child is ever turned away. If a family can\'t pay, they just tell us, and nobody asks any questions. Local businesses sponsor the teams, and that money covers the field rental.'],
              ['HOST', 'What about equipment? Cleats aren\'t cheap.'],
              ['AMINA', 'No, and kids grow so fast. So at the end of every season we hold a boot swap. Families bring the cleats their kids have outgrown and take home a bigger pair. The provincial soccer association also donates shin guards.'],
              ['HOST', 'Who does the coaching?'],
              ['AMINA', 'Mostly volunteer parents, and many of them are newcomers themselves. Every coach takes a free weekend course before the season starts, so they know the safety rules and how to run a proper practice.'],
              ['HOST', 'I understand the league isn\'t only about the kids.'],
              ['AMINA', 'Exactly. While the children play, the parents sit together on the sidelines. We have volunteers there who chat with them so they can practise their English, and every few weeks someone from a settlement agency drops by to answer questions about housing, schools, that kind of thing.'],
              ['HOST', 'What\'s next for Open Field?'],
              ['AMINA', 'A lot of families have asked for a girls-only program, and we\'d love to start one next summer. The challenge is coaching. Right now, almost all of our coaches are dads, and some of those families would only feel comfortable with women coaching their daughters.']
            ],
            questions: [
              { id: 'L3.1', q: 'What led Amina to start the league?', o: ['Her sons were isolated but loved playing soccer.', 'Her sons had been turned away by a regular team.', 'Her neighbours asked her to coach their children.', 'The park near her building needed more visitors.'] },
              { id: 'L3.2', q: 'How has the league changed since its first summer?', o: ['It has grown about twenty-five times larger.', 'It has grown from twelve teams to twenty-four.', 'It now includes children as young as four.', 'It has doubled in size every single year.'] },
              { id: 'L3.3', q: 'What does Amina emphasize about the registration fee?', o: ['Families unable to pay are not asked to explain.', 'Sponsors pay it for families who are newcomers.', 'It covers the cost of renting the soccer fields.', 'It is lower for families with two or more children.'] },
              { id: 'L3.4', q: 'What is the purpose of the boot swap?', o: ['To let kids trade cleats that no longer fit', 'To collect shin guards for the newer players', 'To raise money for renting the soccer fields', 'To sell new cleats to families at low prices'] },
              { id: 'L3.5', q: 'What is suggested about the time parents spend at games?', o: ['It helps them adjust to life in Canada.', 'It is when they take the coaching course.', 'It is spent mostly cheering for their kids.', 'It is when they meet the team sponsors.'] },
              { id: 'L3.6', q: 'What does Amina imply about the girls-only program?', o: ['It depends on recruiting more female coaches.', 'It was her own idea rather than the families\'.', 'It will replace the current mixed teams.', 'It will start as soon as this season ends.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'The provincial government announced this morning that the minimum wage will rise in two steps over the coming year.'],
              ['NEWS', 'The current rate of fifteen dollars and twenty cents an hour will increase to fifteen dollars and ninety cents on April first, and then to sixteen dollars and fifty cents on October first.'],
              ['NEWS', 'Employers will have until the end of February to update their payroll systems before the first change takes effect.'],
              ['NEWS', 'According to the province, about forty-two thousand people currently earn the minimum wage, most of them in retail and food service.'],
              ['NEWS', 'For someone working forty hours a week, the two increases together will add about fifty-two dollars to each weekly paycheque.'],
              ['NEWS', 'After that, the wage will no longer depend on a government announcement. Starting in 2028, it will be adjusted every April to match the rise in the cost of living.'],
              ['NEWS', 'Reaction has been mixed. Anti-poverty groups welcomed the news, but they say sixteen fifty still falls well short of what it takes to cover rent in the province\'s larger cities.'],
              ['NEWS', 'Meanwhile, the Provincial Federation of Small Business warns that some owners may cut staff hours to cover the extra cost. The federation is asking the government to lower the small business tax rate to help employers adjust.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Upcoming raises for the lowest-paid workers', 'A new tax break for owners of small businesses', 'The rising cost of rent in the province\'s cities', 'A plan to reduce working hours in retail stores'] },
              { id: 'L4.2', q: 'By how much will the hourly wage rise on October 1?', o: ['60 cents', '70 cents', '$1.30', '$1.60'] },
              { id: 'L4.3', q: 'After both increases, how much more will a 40-hour weekly paycheque be?', o: ['About $52', 'About $28', 'About $42', 'About $130'] },
              { id: 'L4.4', q: 'What will happen beginning in 2028?', o: ['Raises will be tied to living costs each year.', 'Small businesses will pay a lower rate of tax.', 'The wage will rise to $16.50 per hour.', 'Workers will be paid every two weeks.'] },
              { id: 'L4.5', q: 'What is the attitude of the anti-poverty groups?', o: ['Pleased, but they feel it falls short.', 'Worried that workers will lose shifts.', 'They want the raise delayed until 2028.', 'They believe rents will rise because of it.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Agenda: Elm Street safety', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { DIANE: { name: 'Diane (chair)', g: 'f', skin: '#f0c9a6', hair: '#d8d8d8', shirt: '#34495e', style: 'short' }, VIKRAM: { name: 'Vikram', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#b03a2e', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#e8c4a0', hair: '#1d1410', shirt: '#16a085', style: 'long' } },
          segments: [{
            lines: [
              ['DIANE', 'Okay, let\'s get started. The main item tonight is Elm Street. We\'ve raised twelve thousand dollars from the spring yard sale and the bake sales, and the city has a program that will match whatever we put toward a safety project. But applications close on November thirtieth, so we need to decide tonight: speed bumps or the crosswalk.'],
              ['VIKRAM', 'I\'ll make the case for speed bumps. Ever since the bridge construction started, drivers have been using Elm as a shortcut. We put up that borrowed radar sign for two weeks, and the average speed was fifty-eight kilometres an hour. The limit is forty.'],
              ['MEI', 'Nobody disputes that people are speeding, Vikram. My worry is that bumps just push the problem somewhere else. Drivers will avoid Elm and cut through Birch instead, and Birch doesn\'t even have sidewalks.'],
              ['VIKRAM', 'That\'s possible, I suppose. But at least people on Elm would be safer.'],
              ['DIANE', 'What about the fire department? Last time this came up, people were worried that bumps would slow down ambulances and fire trucks.'],
              ['VIKRAM', 'The city doesn\'t use the old kind anymore. They install speed cushions now, with gaps that are just wide enough for the wheels of emergency vehicles. Regular cars still have to slow down. Three of them would cost about nine thousand.'],
              ['MEI', 'Okay, but think about who\'s actually at risk. Kids cross at Elm and Birch every single day to get to the playground, and there\'s nothing there, not even painted lines. A crosswalk with flashing lights costs twenty-four thousand dollars. With the city matching our money, we\'d pay half.'],
              ['VIKRAM', 'Which is every cent we have.'],
              ['MEI', 'It is. But it protects the people who are most likely to get hurt.'],
              ['DIANE', 'Here\'s what I\'m thinking. The crosswalk is the bigger project, and there\'s no guarantee the matching program will be offered again next year. So let\'s apply for the crosswalk now. Vikram, could we borrow the radar sign again and collect speed data through the winter? If the numbers stay high, we\'ll have a strong case for speed cushions next year.'],
              ['VIKRAM', 'Fine. I\'m not thrilled, but I can see the logic. I\'ll call the city about the sign tomorrow.'],
              ['MEI', 'And I\'ll draft the application and send it to you both by Friday.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To choose a safety project for Elm Street', 'To plan the next neighbourhood bake sale', 'To discuss the bridge construction delays', 'To elect a new chair for the association'] },
              { id: 'L5.2', q: 'According to Vikram, why are more drivers using Elm Street?', o: ['They are avoiding the bridge construction.', 'They are driving their children to the playground.', 'The speed limit on Elm Street was raised.', 'Birch Street has been closed for repairs.'] },
              { id: 'L5.3', q: 'How fast were drivers going, compared with the speed limit?', o: ['18 km/h above it on average', '58 km/h above it on average', '40 km/h above it on average', '8 km/h above it on average'] },
              { id: 'L5.4', q: 'What is Mei\'s main concern about speed bumps?', o: ['Drivers may switch to a street with no sidewalks.', 'They may slow down ambulances and fire trucks.', 'They are more expensive than a crosswalk.', 'Children may trip over them on the way to the park.'] },
              { id: 'L5.5', q: 'How does Vikram respond to the worry about emergency vehicles?', o: ['The new design has gaps for their wheels.', 'The fire department has approved the plan.', 'Emergency vehicles rarely use Elm Street.', 'The bumps would be removed in winter.'] },
              { id: 'L5.6', q: 'What does Vikram mean when he says, "Which is every cent we have"?', o: ['The crosswalk would use all of their savings.', 'The city would pay the full cost of the crosswalk.', 'Speed cushions would cost them nothing at all.', 'They will need to hold another yard sale soon.'] },
              { id: 'L5.7', q: 'Why does Diane choose the crosswalk for now?', o: ['The matching program may not return next year.', 'The speed data showed that drivers are slowing down.', 'Vikram agreed that speed bumps are not needed.', 'The city will not pay for speed cushions.'] },
              { id: 'L5.8', q: 'How does Vikram feel about the final decision?', o: ['He accepts it, though without enthusiasm.', 'He agrees because the data supports it.', 'He rejects it and plans to appeal to the city.', 'He is pleased that his idea was chosen.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should zoos exist?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#6c3483', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Few public places spark debate quite like the zoo. Supporters describe zoos as centres of conservation, while critics argue that keeping wild animals on display no longer makes sense.'],
              ['NARR', 'Doctor Ruth Abernathy, a conservation biologist who works with several Canadian zoos, says modern zoos are very different from the ones many adults remember. She points to breeding programs that have raised endangered frogs, turtles and birds in safe conditions and later released them into the wild.'],
              ['NARR', 'Abernathy also stresses education. In her view, most children will never travel to see a tiger or a gorilla in its natural home. Seeing one in person, she says, can spark a lifelong interest in protecting nature in a way that a video simply cannot. She adds that ticket sales at many zoos help pay for research projects in the wild.'],
              ['NARR', 'Simon Bergeron, who leads an animal welfare group, sees things differently. He argues that large animals such as elephants and polar bears travel enormous distances in the wild, and that even the best enclosure is tiny by comparison. Some animals, he says, develop repetitive behaviours like pacing back and forth, which he sees as a clear sign of stress.'],
              ['NARR', 'Bergeron also notes that most species kept in zoos are not endangered at all. He believes the money would do more good if it were spent protecting habitats directly. For animals that cannot return to the wild, he favours sanctuaries: large protected spaces that are mostly closed to visitors.'],
              ['NARR', 'Despite their differences, both experts agree on one point: some species are now so rare that they may not survive without human help. The real question, it seems, is where that help should happen.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Opposing views on the value of zoos', 'The rising cost of building modern zoos', 'Rare animal species found only in Canada', 'How zoos are training their new staff'] },
              { id: 'L6.2', q: 'According to Dr. Abernathy, how are modern zoos different?', o: ['Some now raise animals for release.', 'They now keep only Canadian species.', 'They now show their animals in videos.', 'They send most of their animals abroad.'] },
              { id: 'L6.3', q: 'Why does Dr. Abernathy think zoos matter for children?', o: ['Seeing animals in person can inspire them.', 'A video works just as well as a real visit.', 'Children should travel to see wild animals.', 'Children can help zoo staff care for animals.'] },
              { id: 'L6.4', q: 'According to Bergeron, what does pacing back and forth show?', o: ['That the animal is under stress', 'That the animal needs more food', 'That the animal is preparing to travel', 'That the animal wants to be seen'] },
              { id: 'L6.5', q: 'What is Bergeron\'s view of the money spent on zoos?', o: ['It would help more if used on habitats.', 'It should go toward building larger enclosures.', 'It should mainly fund breeding programs.', 'It should be spent on rescuing polar bears.'] },
              { id: 'L6.6', q: 'What does the reporter\'s final comment suggest?', o: ['They differ on where rare species should be helped.', 'Both experts want zoos to stop keeping large animals.', 'Neither expert thinks rare species can be saved.', 'Both experts think sanctuaries should replace zoos.'] }
            ]
          }]
        }
      ]
    },

    /* =================== READING =================== */
    reading: {
      parts: [
        {
          id: 'R1', title: 'Part 1: Reading Correspondence', minutes: 11,
          instructions: 'Read the following message. Answer questions 1 to 6 by choosing the best option from each drop-down menu. Then read the reply and complete it by choosing the best option for each blank (7 to 11).',
          passage: '<h3>Message</h3><p>Hi Kofi,</p><p>I\'m sorry it has taken me so long to write back. You won\'t believe how busy the last month has been, but in the best possible way. The bakery is finally open!</p><p>We opened our doors three weeks ago in the old shoe repair shop on Lincoln Street. After twelve years of doing other people\'s taxes, it still feels strange to spend my days covered in flour instead of staring at spreadsheets. My old manager at the accounting firm told me I had lost my mind, and on some mornings I wonder whether he was right.</p><p>The hours are the hardest part. I start at four every morning so the bread is ready when we open at seven. On the first Saturday, the cinnamon buns were completely gone by nine thirty, and I had to apologize to a long line of disappointed customers. Since then, I have been making double batches on weekends. My nephew Theo, who is in his last year of high school, works behind the counter on Saturdays and Sundays. I honestly don\'t know how I would manage without him.</p><p>There is one big headache: the oven. It came with the shop, and it is at least thirty years old. The back heats up much faster than the front, so I have to turn every tray around halfway through baking. I would love to replace it, but a new commercial oven costs around nine thousand dollars, so it will have to wait until I have saved enough, probably sometime next spring.</p><p>Now, the real reason I am writing. I am planning a proper grand opening party on Saturday the 22nd, with free samples and live music. The problem is that the old shoe repair sign is still hanging above the door! You are the most talented designer I know. Would you be willing to create a logo and a new sign for me? I can\'t pay you much, but I can promise you free bread for the rest of your life.</p><p>Let me know what you think. And of course, you are invited to the party.</p><p>Love,<br>Ines</p>',
          questions: [
            { id: 'R1.1', q: 'Ines suggests that her former manager', o: ['thought her career change was unwise.', 'helped her choose a spot for the bakery.', 'knew she disliked working with spreadsheets.', 'urged her to go into business for herself.'] },
            { id: 'R1.2', q: 'The first Saturday most likely showed Ines that', o: ['demand was greater than she had planned for.', 'customers preferred bread to cinnamon buns.', 'she needed to open well before seven o\'clock.', 'Theo could not handle the counter by himself.'] },
            { id: 'R1.3', q: 'Ines\'s attitude toward her nephew\'s help is one of', o: ['deep gratitude.', 'mild disappointment.', 'polite tolerance.', 'growing concern.'] },
            { id: 'R1.4', q: 'The oven is a problem mainly because', o: ['it does not cook evenly.', 'it is too small for double batches.', 'the trays no longer fit inside it.', 'it needs an hour to warm up each day.'] },
            { id: 'R1.5', q: 'Ines expects to replace the oven', o: ['once her savings allow it.', 'right after the grand opening.', 'with a loan from her former firm.', 'before the end of this month.'] },
            { id: 'R1.6', q: 'Ines mentions free bread in order to', o: ['compensate for a modest fee.', 'promote the samples at the party.', 'thank Kofi for visiting the shop.', 'show how much bread goes unsold.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Ines,</p><p>Congratulations! I always knew you would do it. I have to admit, I still can\'t quite picture you leaving [[R1.7]], but from your message it sounds like you made the right choice. Starting work [[R1.8]] before the doors open sounds exhausting, though, so please make sure you get some rest. My sister walked past the shop last week, by the way, and she says the smell alone nearly made her late for work.</p><p>I am not surprised that the cinnamon buns sold out. Yours were always the best. Maybe you should [[R1.9]] for the party as well, so nobody goes home disappointed this time.</p><p>And yes, of course I will design your sign. It is about time [[R1.10]] came down. I will send you a few logo ideas by next weekend, which should give the sign company enough time to have everything up before [[R1.11]]. As for payment, free bread for life sounds like an excellent deal to me.</p><p>See you on the 22nd!</p><p>Kofi</p>',
          blanks: [
            { id: 'R1.7', o: ['a steady office career', 'the shop on Lincoln Street', 'your nephew at the counter', 'the bakery so soon'] },
            { id: 'R1.8', o: ['three full hours', 'a full hour', 'half an hour', 'nearly five hours'] },
            { id: 'R1.9', o: ['bake twice the usual amount', 'turn every tray around', 'skip the free samples', 'open the doors at nine thirty'] },
            { id: 'R1.10', o: ['the previous owner\'s sign', 'your thirty-year-old oven', 'the price of a new oven', 'the line outside your door'] },
            { id: 'R1.11', o: ['your big celebration', 'next spring', 'Theo finishes school', 'the new oven arrives'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following price list. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Northwind Mobile: Monthly Plans</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Plan</th><th>Monthly price</th><th>Data</th><th>Calls within Canada</th><th>Calls and texts to the U.S.</th></tr></thead><tbody>' +
            '<tr><td>Starter</td><td>$25</td><td>2 GB</td><td>300 minutes</td><td>Not included</td></tr>' +
            '<tr><td>Everyday</td><td>$40</td><td>10 GB</td><td>Unlimited</td><td>Not included</td></tr>' +
            '<tr><td>Traveller</td><td>$55</td><td>15 GB</td><td>Unlimited</td><td>Included</td></tr>' +
            '<tr><td>Max</td><td>$75</td><td>50 GB</td><td>Unlimited</td><td>Included</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>All plans include unlimited texts within Canada.</li><li>Extra data: $10 for each GB above your plan\'s limit.</li><li>24-month agreement: save $5 per month on any plan except Starter.</li><li>Each additional line on the same account: 20% off that plan\'s regular monthly price. This discount cannot be combined with the 24-month agreement saving.</li><li>Students with a valid student card receive 5 GB of bonus data each month on the Everyday plan only.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Marisol,</p><p>I finally compared the plans at Northwind Mobile. I use about 12 GB of data a month, and since I call my brother in Seattle every Sunday, I need U.S. calling. That means the cheapest plan that works for me is [[R2.1]]. If I sign a 24-month agreement, it will cost [[R2.2]] a month.</p><p>For Ana, the Everyday plan looks perfect. She uses about 14 GB a month, but because she is [[R2.3]], she would get 15 GB in total. Her phone would be the second line on my account, so her plan would cost [[R2.4]] a month.</p><p>I also checked whether the cheaper Starter plan could work for her, but she would need about 12 GB of extra data, which would add [[R2.5]] to her bill every month. So Everyday it is.</p><p>Let me know what you think before I sign anything.</p><p>Rosa</p>',
          blanks: [
            { id: 'R2.1', o: ['Traveller', 'Everyday', 'Max', 'Starter'] },
            { id: 'R2.2', o: ['$50', '$55', '$70', '$44'] },
            { id: 'R2.3', o: ['able to show proof of enrolment', 'the second line on my account', 'signing a 24-month agreement too', 'a new customer this month'] },
            { id: 'R2.4', o: ['$32', '$35', '$40', '$27'] },
            { id: 'R2.5', o: ['$120', '$140', '$100', '$20'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A student who uses about 16 GB a month and never calls the U.S. would probably pay the least on', o: ['Everyday.', 'Traveller.', 'Max.', 'Starter.'] },
            { id: 'R2.7', q: 'A customer on a 24-month agreement for the Everyday plan who is not a student and uses 13 GB in one month will pay', o: ['$65.', '$70.', '$35.', '$45.'] },
            { id: 'R2.8', q: 'Over the full length of a 24-month agreement, the Max plan costs', o: ['$1,680.', '$1,800.', '$1,560.', '$840.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Building the Trans-Canada Highway</h3><p><b>A.</b> In the early 1900s, driving from one side of Canada to the other was more of an expedition than a road trip. Paved roads were rare outside of cities, and in many regions there was simply no road at all. Motorists who attempted the journey sometimes had to load their cars onto trains to get past rivers, swamps and rocky stretches. Even into the 1940s, many drivers heading west from Ontario found it easier to cross into the United States and return to Canada farther along. The few people who completed the whole trip often wrote newspaper articles about it, which only added to the feeling that crossing the country by car was an achievement rather than an ordinary holiday.</p><p><b>B.</b> After the Second World War, pressure grew for a single national road that would connect every province. In 1949, Parliament passed the Trans-Canada Highway Act. Under the agreement, the federal government would share the cost of construction, while each province would be responsible for building and maintaining its own section. Ottawa also set basic standards, such as minimum lane widths and gentle slopes, so that the road would feel consistent from one province to the next. Choosing the route was not easy. Some provinces pushed for the highway to pass through their largest towns, while others preferred the shortest and cheapest path, and negotiations sometimes dragged on for years.</p><p><b>C.</b> Construction proved to be just as difficult. In northern Ontario, crews had to blast through the hard granite of the Canadian Shield, one section at a time. In British Columbia, the route through Rogers Pass in the Selkirk Mountains crossed one of the most avalanche-prone areas in the country, so engineers built long concrete sheds to protect drivers from sliding snow. The highway was officially opened at Rogers Pass in 1962, although some gaps remained, and it was not considered complete until 1971.</p><p><b>D.</b> Today, the main route stretches about 7,800 kilometres from Victoria, British Columbia, to St. John\'s, Newfoundland and Labrador, making it one of the longest national highways in the world. Ferries carry travellers across the water at both ends of the country. Drivers can recognize the route by its green and white signs featuring a maple leaf, and in Victoria a "Mile 0" marker shows where the journey begins. Although much of the highway is still only two lanes wide, several provinces are adding lanes to busy sections to improve safety.</p>',
          questions: [
            { id: 'R3.1', q: 'Some early travellers moved their vehicles by rail for parts of the trip.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Provincial governments were in charge of constructing their own stretches of road.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Explosives were needed to clear a path through rock.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'A complete cross-country trip on the route includes time on boats.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'There was disagreement about which communities the road should serve.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'The road was formally opened before it was fully completed.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'Tolls were charged on the highway in its early years.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Some heavily used parts of the road are being made wider.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Drivers once had to leave the country to get across it.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Has Tipping Gone Too Far?</h3><p>Not long ago, leaving a tip meant adding about fifteen percent to a restaurant bill. Today, customers are asked to tip almost everywhere, from coffee counters to self-serve frozen yogurt shops, and payment machines often suggest twenty or even twenty-five percent. In a recent survey of Canadian adults, nearly two thirds said they felt pressured to tip more than they wanted to, and many said they were eating out less often as a result. Some described feeling awkward when a worker turned the screen toward them and then stood waiting while they chose a percentage.</p><p>Restaurant owner Gabrielle Fournier decided to try something different. Two years ago, her Montreal bistro dropped tipping completely and raised menu prices by eighteen percent. The extra money pays every employee a higher hourly wage, including the cooks and dishwashers, who in many restaurants receive only a small share of tips. "Our kitchen staff work just as hard as our servers," Fournier says. "It never seemed right that their pay depended on what happened in the dining room." Since the change, she says, far fewer employees have quit, although some regular customers complained about the higher prices at first.</p><p>Not everyone in the industry is convinced. Jordan Pike, who has worked as a server in Winnipeg for nine years, says tips give servers a reason to go the extra mile. "On a busy Friday night, I can earn twice what I would on a flat wage," he explains. "If you take that away, a lot of experienced servers will leave for jobs with better hours." He also believes that many customers enjoy rewarding good service and would resent paying higher prices no matter what kind of experience they had. At his restaurant, Pike adds, servers already pass a portion of their tips to the kitchen at the end of each shift, so the cooks also benefit when the dining room is busy.</p><p>Priya Nair, who studies consumer behaviour at a university in Edmonton, sees the debate a little differently. In her view, the real issue is not tipping itself but the way the request is presented. Her research found that when the smallest button on a screen starts at twenty percent, people leave larger tips but feel more irritated afterward. "Most customers will simply press whatever is in the middle," she says. She recommends that machines offer a clear "no tip" button of the same size as the others, and that suggested amounts be calculated before tax. Banning tips outright, she argues, would only replace one frustration with another.</p><p>Still, Pike agrees that something has to change. He thinks tipping should be expected only where staff serve customers at the table, not when someone simply hands over a muffin at a counter. "When people are asked to tip for everything," he says, "they start to resent tipping the people who actually depend on it." Fournier, for her part, admits that a no-tipping model may not work for every restaurant, especially in smaller towns where customers are very sensitive to price.</p>',
          questions: [
            { id: 'R4.1', q: 'The writer mentions the survey mainly in order to', o: ['show that unease about tipping is widespread.', 'prove that most diners tip fifteen percent.', 'explain why coffee shops raised their prices.', 'argue that payment machines should be banned.'] },
            { id: 'R4.2', q: 'Fournier\'s decision was most likely driven by', o: ['a sense that her cooks were treated unfairly.', 'a decline in regular guests at the bistro.', 'the rising cost of hiring skilled servers.', 'customer complaints about the tip screens.'] },
            { id: 'R4.3', q: 'Nair would most likely agree that', o: ['customers are steered by how options are laid out.', 'tipping should be removed from all restaurants.', 'counter staff deserve the same tips as servers.', 'menu prices should rise by about eighteen percent.'] },
            { id: 'R4.4', q: 'Pike is concerned that ending tips would', o: ['cause veteran wait staff to look elsewhere for work.', 'make diners pay closer attention to the service.', 'give cooks a larger share of the restaurant income.', 'force many restaurants to close on busy weekends.'] },
            { id: 'R4.5', q: 'Pike\'s attitude toward tipping is best described as', o: ['broadly in favour, with reservations.', 'firmly against it in all cases.', 'uncertain and still undecided.', 'enthusiastic in every situation.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I run a small café in a town outside Halifax, so this article hit close to home. Like many of the people in the survey, my customers say they feel [[R4.6]] when the tip screen is turned toward them. I understand why Ms. Fournier decided to [[R4.7]], and I admire her for thinking about her kitchen staff. But as she admits herself, her model might not suit everyone. In a town like mine, people are [[R4.8]], and an eighteen percent jump on the menu would scare them away.</p><p>On the other hand, I agree with Mr. Pike that nobody should be expected to tip [[R4.9]], so last month I switched off the tip screen at my counter. My staff were worried at first, so I raised their hourly wage by two dollars. I am hoping that, as at Ms. Fournier\'s bistro, the result will be that [[R4.10]].</p>',
          blanks: [
            { id: 'R4.6', o: ['put on the spot', 'fairly rewarded', 'mostly ignored', 'pleasantly surprised'] },
            { id: 'R4.7', o: ['do away with gratuities', 'lower her menu prices', 'hire more servers', 'share tips with the kitchen'] },
            { id: 'R4.8', o: ['quick to notice any price increase', 'happy to tip generously at counters', 'used to eating out several times a week', 'unfamiliar with the custom of tipping'] },
            { id: 'R4.9', o: ['just for being handed a pastry', 'for a meal served at their table', 'on a busy Friday night', 'more than ten percent'] },
            { id: 'R4.10', o: ['my employees stay longer', 'servers collect more tips', 'cooks get a share of tips', 'working hours get shorter'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You have signed up for a college course that will help you in your career. The classes take place on Tuesday and Thursday mornings from 9:00 to 11:00 a.m., which is during your usual working hours.</p><p>Write an email to your manager. In your email, do the following:</p><ul><li>Explain why you want to take the course.</li><li>Describe the change to your work schedule that you are asking for.</li><li>Explain how you will make sure your work is not affected.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your local school board wants students to spend more time learning each year and is asking parents and community members for their opinion. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Make each school day one hour longer, from September to June.' },
            { key: 'B', label: 'Option B', text: 'Shorten the summer break by three weeks and keep the school day the same length.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has a job interview next week for a position she really wants, but she is very nervous about it. Give her advice on how to prepare and how to stay calm.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you received some good news. What was the news, how did you find out, and how did you react?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: BEACH },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: BEACH },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You need a better way to get to your new job, which is 12 kilometres from your home. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Buy a used car', image: USEDCAR, facts: ['2017 hatchback: $9,500', 'Insurance: about $150 a month', 'Parking at work: $60 a month', '25 minutes door to door'] },
            { key: 'B', title: 'Buy an e-bike', image: EBIKE, facts: ['Price: $2,200', 'Charging: about $5 a month', 'Free bike parking at work', '35 minutes door to door'] }
          ],
          third: { key: 'C', title: 'Car-share membership', image: CARSHARE, facts: ['Membership: $12 a month', 'Driving: $15 per hour', 'Cars parked all around the city', 'Book ahead: few cars free at rush hour'] },
          persuade: 'Your family member suggests the car-share membership instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Your neighbour is going on vacation for two weeks, and you agreed to water her garden and feed her cat every day. Today, your manager told you that you must travel to another city for work during the second week of her vacation.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot help for the full two weeks.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot go on the work trip.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Should parents pay their children for doing chores at home, such as washing dishes or cleaning their rooms? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are shopping for luggage and see this unusual suitcase. Call your friend who travels a lot for work. Describe the suitcase and explain whether you think your friend should buy it.', image: ODDCASE }
      ]
    }
  });
})();
