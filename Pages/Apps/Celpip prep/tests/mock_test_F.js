/* Rowe CELPIP Mock Exam: Test F content.
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
  /* winter hat (toque) drawn on top of a person() at the same x, y and scale */
  function toque(x, y, s, c) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-10 -46 a10 10 0 0 1 20 0z" fill="' + c + '"/><circle cx="0" cy="-57" r="3.5" fill="#ffffff"/></g>';
  }

  var SNOWSTREET = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A residential street on a snowy winter morning">';
    p += '<rect width="640" height="400" fill="#dfe7ef"/>';
    /* houses with snow on the roofs */
    p += '<rect x="15" y="135" width="130" height="80" fill="#b5654a"/><polygon points="5,138 80,85 155,138" fill="#6b4a3a"/><path d="M5 138 L80 85 L155 138 L148 138 L80 93 L12 138z" fill="#ffffff"/><rect x="35" y="160" width="26" height="22" fill="#f6e7a6"/><rect x="95" y="170" width="26" height="45" fill="#4a3426"/>';
    p += '<rect x="255" y="140" width="120" height="75" fill="#7f9bb3"/><polygon points="245,143 315,95 385,143" fill="#4f5d6b"/><path d="M245 143 L315 95 L385 143 L378 143 L315 103 L252 143z" fill="#ffffff"/><rect x="270" y="165" width="24" height="20" fill="#f6e7a6"/><rect x="335" y="165" width="24" height="20" fill="#f6e7a6"/>';
    p += '<rect x="470" y="130" width="140" height="85" fill="#c9b27c"/><polygon points="460,133 540,80 620,133" fill="#7a5a3a"/><path d="M460 133 L540 80 L620 133 L613 133 L540 88 L467 133z" fill="#ffffff"/><rect x="490" y="155" width="24" height="20" fill="#f6e7a6"/>';
    /* snowy yards, road, sidewalk */
    p += '<rect y="215" width="640" height="32" fill="#f7f9fb"/>';
    p += '<rect y="247" width="640" height="70" fill="#8e969e"/><g fill="#ffffff" opacity=".7"><rect x="20" y="280" width="40" height="4"/><rect x="200" y="280" width="40" height="4"/><rect x="380" y="280" width="40" height="4"/></g>';
    p += '<path d="M0 317 Q160 307 320 317 T640 317 L640 324 L0 324z" fill="#ffffff"/>';
    p += '<rect y="324" width="640" height="76" fill="#eef2f6"/>';
    /* person shovelling the driveway between the houses */
    p += '<path d="M205 240 q15 -22 32 0z" fill="#ffffff" stroke="#c8d3de"/>';
    p += person(185, 242, { s: .85, shirt: '#c0392b', skin: '#f0c9a6', hair: '#6b4a2a', arms: 'right' }) + toque(185, 242, .85, '#2e86c1');
    p += '<line x1="203" y1="212" x2="214" y2="238" stroke="#6b4a2a" stroke-width="3"/><rect x="208" y="234" width="16" height="7" fill="#555555"/>';
    /* car stuck in a snowbank, one person pushing */
    p += '<path d="M78 268 L98 250 L138 250 L154 268z" fill="#2c7a7b"/><rect x="62" y="266" width="112" height="26" rx="6" fill="#2f8f83"/><rect x="104" y="254" width="28" height="13" fill="#cfe3ef"/>';
    p += '<circle cx="86" cy="294" r="10" fill="#333333"/><circle cx="152" cy="294" r="10" fill="#333333"/>';
    p += '<ellipse cx="160" cy="304" rx="34" ry="14" fill="#ffffff" stroke="#c8d3de"/>';
    p += '<g stroke="#ffffff" stroke-width="2"><line x1="70" y1="300" x2="56" y2="290"/><line x1="72" y1="304" x2="54" y2="302"/></g>';
    p += '<text x="118" y="284" font-size="9" text-anchor="middle" fill="#ffffff" font-family="sans-serif">STUCK</text>';
    /* driver at the wheel */
    p += '<circle cx="118" cy="262" r="5" fill="#f0c9a6"/><path d="M113 261 a5 5 0 0 1 10 0z" fill="#555555"/>';
    p += person(42, 312, { s: .9, shirt: '#8e44ad', skin: '#8d5a3b', hair: '#1d1410', arms: 'right' }) + toque(42, 312, .9, '#e67e22');
    /* bus arriving at the stop */
    p += '<rect x="425" y="236" width="190" height="62" rx="8" fill="#2e6fb5"/><rect x="425" y="282" width="190" height="8" fill="#f1c40f"/>';
    p += '<g fill="#cfe3ef"><rect x="440" y="246" width="30" height="22"/><rect x="478" y="246" width="30" height="22"/><rect x="516" y="246" width="30" height="22"/><rect x="554" y="246" width="30" height="22"/></g>';
    p += '<circle cx="430" cy="290" r="4" fill="#fff6a8"/><circle cx="465" cy="300" r="12" fill="#333333"/><circle cx="580" cy="300" r="12" fill="#333333"/>';
    p += '<rect x="590" y="242" width="20" height="14" fill="#1b3f66"/><text x="600" y="253" font-size="9" text-anchor="middle" fill="#ffffff" font-family="sans-serif">12</text>';
    p += '<g stroke="#5f6b78" stroke-width="2" opacity=".7"><line x1="620" y1="250" x2="638" y2="250"/><line x1="620" y1="265" x2="636" y2="265"/><line x1="620" y1="280" x2="638" y2="280"/></g>';
    p += '<rect x="402" y="272" width="3" height="66" fill="#555555"/><rect x="390" y="262" width="28" height="16" rx="2" fill="#2e6fb5"/><text x="404" y="274" font-size="9" text-anchor="middle" fill="#ffffff" font-family="sans-serif">BUS</text>';
    p += person(378, 356, { s: .9, shirt: '#34495e', skin: '#e3b28b', hair: '#555555' }) + toque(378, 356, .9, '#c0392b');
    /* commuter running for the bus and waving */
    p += person(462, 392, { s: .9, shirt: '#16a085', skin: '#d6a07a', hair: '#2a1b12', arms: 'up' }) + toque(462, 392, .9, '#34495e');
    /* woman walking a dog along the sidewalk */
    p += person(120, 392, { s: .9, shirt: '#2980b9', skin: '#f2cfb0', hair: '#7a4a24', arms: 'right' }) + toque(120, 392, .9, '#e84393');
    p += '<line x1="141" y1="360" x2="164" y2="378" stroke="#8a2d2d" stroke-width="2"/>';
    p += '<g fill="#5b4636"><ellipse cx="172" cy="384" rx="12" ry="6"/><circle cx="166" cy="377" r="5"/><rect x="163" y="388" width="3" height="8"/><rect x="177" y="388" width="3" height="8"/></g>';
    /* children building a snowman */
    p += '<circle cx="250" cy="370" r="22" fill="#ffffff" stroke="#b9c6d3"/><circle cx="250" cy="337" r="16" fill="#ffffff" stroke="#b9c6d3"/><circle cx="250" cy="312" r="11" fill="#ffffff" stroke="#b9c6d3"/>';
    p += '<rect x="241" y="294" width="18" height="8" fill="#222222"/><rect x="237" y="301" width="26" height="3" fill="#222222"/><polygon points="250,312 262,315 250,316" fill="#e67e22"/><circle cx="246" cy="309" r="1.5" fill="#222222"/><circle cx="254" cy="309" r="1.5" fill="#222222"/>';
    p += '<g stroke="#6b4a2a" stroke-width="2"><line x1="236" y1="335" x2="220" y2="325"/><line x1="264" y1="335" x2="280" y2="325"/></g>';
    p += person(205, 392, { s: .7, shirt: '#e74c3c', skin: '#c98c64', hair: '#2a1b12', arms: 'right' }) + toque(205, 392, .7, '#f1c40f');
    p += person(295, 392, { s: .7, shirt: '#27ae60', skin: '#f2cfb0', hair: '#c49a42', arms: 'up' }) + toque(295, 392, .7, '#8e44ad');
    /* person with a coffee stepping onto an icy patch */
    p += '<ellipse cx="545" cy="389" rx="48" ry="7" fill="#a9d8f2"/><g stroke="#ffffff" stroke-width="2"><line x1="520" y1="388" x2="534" y2="386"/><line x1="552" y1="391" x2="570" y2="388"/></g>';
    p += '<g transform="rotate(-14 530 388)">' + person(530, 388, { shirt: '#d35400', skin: '#7a4b31', hair: '#120c08', arms: 'up' }) + '</g>';
    p += '<rect x="505" y="326" width="8" height="10" fill="#ffffff" stroke="#7a5a3a"/>';
    /* falling snow */
    p += '<g fill="#ffffff">';
    var flakes = [[30, 30], [90, 60], [150, 20], [210, 55], [270, 25], [330, 60], [390, 30], [450, 50], [510, 20], [570, 45], [620, 70], [60, 100], [180, 95], [300, 80], [420, 100], [600, 110], [240, 120], [120, 125], [360, 115], [500, 105]];
    flakes.forEach(function (f) { p += '<circle cx="' + f[0] + '" cy="' + f[1] + '" r="3"/>'; });
    p += '</g>';
    p += '</svg>';
    return p;
  })();

  var CRUISE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#2c3e66"/><circle cx="165" cy="22" r="10" fill="#f6e7a6"/><rect y="80" width="200" height="40" fill="#1f5f8b"/><path d="M30 70 L170 70 L155 92 L45 92z" fill="#ffffff"/><rect x="60" y="52" width="80" height="18" fill="#ecf0f1"/><rect x="82" y="38" width="36" height="14" fill="#ecf0f1"/><g fill="#f6d55c"><rect x="66" y="57" width="8" height="6"/><rect x="80" y="57" width="8" height="6"/><rect x="94" y="57" width="8" height="6"/><rect x="108" y="57" width="8" height="6"/><rect x="122" y="57" width="8" height="6"/></g><g stroke="#f6d55c" stroke-width="1" opacity=".6"><line x1="50" y1="100" x2="80" y2="100"/><line x1="110" y1="106" x2="150" y2="106"/></g><text x="100" y="114" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#ffffff">DINNER CRUISE</text></svg>';
  var ALBUM = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#f4ede1"/><rect x="25" y="25" width="150" height="80" rx="4" fill="#8b4a3a"/><rect x="31" y="30" width="67" height="70" fill="#ffffff"/><rect x="102" y="30" width="67" height="70" fill="#ffffff"/><rect x="38" y="38" width="52" height="34" fill="#9ccbe0"/><circle cx="56" cy="52" r="5" fill="#e0b48f"/><circle cx="72" cy="52" r="5" fill="#8d5a3b"/><rect x="109" y="38" width="24" height="24" fill="#d8b98a"/><rect x="138" y="38" width="24" height="24" fill="#a8d08d"/><rect x="109" y="66" width="53" height="26" fill="#f2c4c4"/><g stroke="#999999"><line x1="38" y1="82" x2="90" y2="82"/><line x1="38" y1="90" x2="80" y2="90"/></g><text x="100" y="17" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#5a3a2a">PHOTO ALBUM</text></svg>';
  var SPA = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e6f2ee"/><rect x="20" y="70" width="70" height="14" rx="4" fill="#ffffff" stroke="#b7d3c9"/><rect x="24" y="56" width="62" height="14" rx="4" fill="#cfe8df" stroke="#b7d3c9"/><rect x="28" y="42" width="54" height="14" rx="4" fill="#ffffff" stroke="#b7d3c9"/><g fill="#7f8c8d"><ellipse cx="135" cy="88" rx="26" ry="9"/><ellipse cx="135" cy="74" rx="20" ry="7"/><ellipse cx="135" cy="62" rx="14" ry="5"/></g><rect x="160" y="40" width="14" height="30" fill="#f8f3e6"/><path d="M167 40 q-5 -8 0 -14 q5 6 0 14z" fill="#f39c12"/><path d="M110 40 q10 -20 20 0 q-10 6 -20 0z" fill="#6ab187"/><text x="100" y="110" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#2f6f5e">SPA</text></svg>';

  var ODDMOWER = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual ride-on lawn mower at a hardware store">' +
    '<rect width="640" height="400" fill="#eef1e8"/><rect y="330" width="640" height="70" fill="#b8b2a4"/>' +
    '<rect x="30" y="30" width="170" height="44" rx="6" fill="#ffffff" stroke="#c9bfae"/><text x="115" y="58" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#3d6b35">GARDEN CENTRE</text>' +
    /* price tag */
    '<line x1="560" y1="20" x2="560" y2="60" stroke="#777777" stroke-width="2"/><path d="M520 60 L600 60 L600 120 L520 120 L506 90z" fill="#f6d55c" stroke="#b38f1e" stroke-width="2"/><circle cx="520" cy="90" r="4" fill="#ffffff"/><text x="560" y="98" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#333333">$2,999</text>' +
    /* umbrella over the seat */
    '<line x1="400" y1="195" x2="392" y2="95" stroke="#555555" stroke-width="4"/><path d="M290 110 Q392 20 494 105 Q443 92 392 102 Q341 92 290 110z" fill="#e74c3c"/><path d="M341 96 Q392 36 443 96 Q418 92 392 102 Q366 92 341 96z" fill="#f1c40f"/>' +
    /* light beams from the headlights */
    '<polygon points="160,250 40,215 40,300" fill="#fff6a8" opacity=".7"/>' +
    /* cutting deck and body */
    '<rect x="190" y="300" width="250" height="22" rx="6" fill="#7f8c8d"/>' +
    '<path d="M170 300 L170 255 Q175 232 210 228 L460 228 L470 300z" fill="#2e8b3a"/>' +
    '<circle cx="176" cy="250" r="10" fill="#fff6a8" stroke="#b38f1e" stroke-width="2"/><circle cx="176" cy="276" r="10" fill="#fff6a8" stroke="#b38f1e" stroke-width="2"/>' +
    /* wheels */
    '<circle cx="225" cy="318" r="24" fill="#333333"/><circle cx="225" cy="318" r="9" fill="#cccccc"/><circle cx="430" cy="305" r="42" fill="#333333"/><circle cx="430" cy="305" r="14" fill="#cccccc"/>' +
    /* seat with backrest */
    '<rect x="365" y="205" width="70" height="20" rx="8" fill="#222222"/><rect x="420" y="160" width="18" height="60" rx="6" fill="#222222"/>' +
    /* steering wheel */
    '<line x1="300" y1="228" x2="320" y2="185" stroke="#555555" stroke-width="6"/><ellipse cx="322" cy="182" rx="26" ry="8" fill="none" stroke="#222222" stroke-width="5"/>' +
    /* cup holder with a cup */
    '<rect x="452" y="206" width="26" height="8" fill="#555555"/><rect x="456" y="184" width="18" height="24" rx="2" fill="#3498db"/><path d="M474 190 q8 4 0 12" stroke="#3498db" stroke-width="3" fill="none"/>' +
    /* radio with antenna and music notes */
    '<rect x="230" y="200" width="50" height="28" rx="4" fill="#34495e"/><circle cx="244" cy="214" r="8" fill="#95a5a6"/><rect x="258" y="207" width="16" height="5" fill="#f1c40f"/><line x1="276" y1="200" x2="290" y2="165" stroke="#555555" stroke-width="2"/>' +
    '<text x="215" y="185" font-family="sans-serif" font-size="22" fill="#34495e">&#9835;</text><text x="250" y="170" font-family="sans-serif" font-size="18" fill="#34495e">&#9834;</text>' +
    /* cut grass */
    '<g stroke="#5aa84e" stroke-width="2"><line x1="480" y1="330" x2="484" y2="318"/><line x1="490" y1="330" x2="488" y2="316"/><line x1="500" y1="330" x2="505" y2="319"/><line x1="140" y1="330" x2="138" y2="318"/><line x1="150" y1="330" x2="154" y2="317"/></g>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'F',
    title: 'Mock Test F',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty (CLB 8 to 11).',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { MARCUS: { name: 'Marcus', g: 'm', skin: '#7a4b31', hair: '#120c08', shirt: '#2e86c1', style: 'short' }, JIWOO: { name: 'Ji-woo', g: 'f', skin: '#f1d2b4', hair: '#1a1a1a', shirt: '#c0392b', style: 'long' } },
        segments: [{
          lines: [
            ['MARCUS', 'Hey Ji-woo, the outdoor rink on the Commons finally opened. Want to go skating this weekend?'],
            ['JIWOO', 'For sure. Saturday afternoon won\'t work, though. I\'ve got a dentist appointment at two, and Sunday I\'m at my aunt\'s all day.'],
            ['MARCUS', 'What about Saturday morning, then? It\'s usually pretty quiet before the hockey crowd shows up around eleven.'],
            ['JIWOO', 'Perfect. Let\'s meet there at nine thirty, and I\'ll bring a thermos of hot chocolate.']
          ],
          questions: [
            { id: 'LP.1', q: 'When will Marcus and Ji-woo go skating?', o: ['Saturday morning', 'Saturday afternoon', 'Sunday morning', 'Sunday at eleven'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { DANIEL: { name: 'Daniel', g: 'm', skin: '#f0c9a6', hair: '#7a5a3a', shirt: '#5d6d7e', style: 'short' }, AMARA: { name: 'Amara', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#a93226', style: 'curly' } },
          segments: [
            {
              lines: [
                ['AMARA', 'Daniel, did you see the email from the school board? It came in around lunchtime.'],
                ['DANIEL', 'No, I\'ve been on the warehouse floor all day. What\'s up?'],
                ['AMARA', 'They\'re cancelling route fourteen. That\'s Zoe\'s bus. Starting a week from Monday, it won\'t come down our street anymore.'],
                ['DANIEL', 'You\'re kidding. Did they say why?'],
                ['AMARA', 'They can\'t hire enough drivers, apparently. So they\'re merging three routes into two, and the closest stop for us will be on Cobequid Road.'],
                ['DANIEL', 'Cobequid Road? That\'s, what, two and a half kilometres? And there\'s no sidewalk for about half of it.'],
                ['AMARA', 'Exactly. I\'m not having her walk that, especially in January, when it\'s still pitch dark at quarter to eight.'],
                ['DANIEL', 'And neither of us can just drive her. I have to be in Burnside by eight, and your shifts start at seven most days.'],
                ['AMARA', 'Right. School doesn\'t start until eight forty, so there\'s a real gap there. The good news is that after school, she just walks across the street to the community centre program, the way she does now, so we really only have to figure out the mornings.'],
                ['DANIEL', 'Well, that\'s something, at least. Okay. We\'ve got ten days to sort it out.']
              ],
              questions: [
                { id: 'L1.1', q: 'What is the main problem Daniel and Amara are facing?', o: ['Their daughter will soon lose her ride to school.', 'Their daughter\'s school is changing its hours.', 'Their daughter has been missing the bus lately.', 'Their daughter\'s bus driver is leaving the job.'] },
                { id: 'L1.2', q: 'What can be inferred about Zoe\'s trip home in the afternoon?', o: ['It will not be affected by the change.', 'It will now start from Cobequid Road.', 'Daniel will need to leave work early.', 'It is the part that worries Amara most.'] },
                { id: 'L1.3', q: 'Why does Amara reject the idea of Zoe walking to the new stop?', o: ['The route would be unsafe at that hour.', 'Zoe would arrive at school far too late.', 'The new stop is not on Zoe\'s new route.', 'Zoe already walks to the community centre.'] }
              ]
            },
            {
              lines: [
                ['DANIEL', 'Okay, let\'s think. I could ask my supervisor if I can come in at nine instead of eight and just stay an hour later.'],
                ['AMARA', 'Do you think she\'d go for that?'],
                ['DANIEL', 'Honestly? Maybe for a week or two. But the trucks all arrive first thing, and we\'re already short-staffed in the mornings. I can\'t see her agreeing to it until June.'],
                ['AMARA', 'Hmm. What about the Kowalskis? Eli\'s in Zoe\'s class, and Marta drives him every morning. She goes right past our house.'],
                ['DANIEL', 'That\'s a thought. I just don\'t want to ask her to do it five days a week for nothing. That\'s a lot, even for a good neighbour.'],
                ['AMARA', 'I agree. There\'s also the before-school program in the gym. It opens at seven thirty, and it\'s twelve dollars a day.'],
                ['DANIEL', 'Twelve a day adds up fast, though. Every single day, that\'s sixty a week.'],
                ['AMARA', 'True. Maybe some kind of mix? Marta\'s always been kind to us, so maybe the simplest thing is to be upfront about what we need. If she says no, at least we\'ll know.']
              ],
              questions: [
                { id: 'L1.4', q: 'How does Daniel feel about changing his work hours?', o: ['He doubts it could last for long.', 'He is sure his supervisor will agree.', 'He thinks it would cost the family too much.', 'He would rather start work earlier.'] },
                { id: 'L1.5', q: 'What is Daniel\'s concern about the Kowalskis?', o: ['They might be asked to do too much.', 'Marta does not drive past their house.', 'Eli and Zoe are not in the same class.', 'Marta would expect to be paid for it.'] },
                { id: 'L1.6', q: 'What will Amara probably do this evening?', o: ['Talk honestly with a neighbour', 'Sign Zoe up for the gym program', 'Email Daniel\'s supervisor', 'Drive past the Kowalskis\' house'] }
              ]
            },
            {
              lines: [
                ['AMARA', 'So I talked to Marta. She was lovely about it. She said she\'d be happy to take Zoe on Mondays, Wednesdays and Fridays.'],
                ['DANIEL', 'Only three days? Did she say why?'],
                ['AMARA', 'Eli has swim practice before school on Tuesdays and Thursdays, so she drops him at the pool at seven. It just doesn\'t work those days.'],
                ['DANIEL', 'Fair enough. Then on Tuesdays and Thursdays, I\'ll drop Zoe at the before-school program at seven thirty. I can still make it to Burnside by eight if the roads are okay.'],
                ['AMARA', 'Great. So that\'s two days of the program instead of five. Way better than what we were looking at. And I told Marta I\'d pick both kids up from the community centre every Friday, so she can start her weekend early.'],
                ['DANIEL', 'That seems fair. Maybe we should get her a little gift card too, just to say thanks.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will the before-school program cost the family each week?', o: ['$24', '$12', '$36', '$60'] },
                { id: 'L1.8', q: 'What has Amara offered in return for Marta\'s help?', o: ['Bringing both children home on one weekday', 'Driving Eli to his swim practice twice a week', 'Paying for part of Eli\'s swimming lessons', 'Taking both children to school on Tuesdays'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { BAKER: { name: 'Baker', g: 'f', skin: '#ecc9a2', hair: '#8e3b1f', shirt: '#f5b7b1', style: 'bun' }, KWAME: { name: 'Kwame', g: 'm', skin: '#5a3a22', hair: '#120c08', shirt: '#1e8449', style: 'short' } },
          segments: [{
            lines: [
              ['BAKER', 'Hi there, welcome to Sugar Maple Bakery. What can I do for you?'],
              ['KWAME', 'Hi. I\'d like to order a birthday cake for my daughter. She\'s turning seven on Saturday.'],
              ['BAKER', 'Oh, lovely. Roughly how many people will it need to serve?'],
              ['KWAME', 'About twenty. Mostly kids from her class, plus a few of the parents.'],
              ['BAKER', 'Then I\'d go with a half sheet. Our round cakes really only serve about twelve, so you\'d come up short. The half sheet serves up to twenty-four, and it\'s sixty-five dollars.'],
              ['KWAME', 'That\'s fine. She wants chocolate with strawberry filling. And, well, the big thing is she really, really wants a unicorn on top.'],
              ['BAKER', 'Hmm. A sculpted unicorn takes our decorator most of a day, so we ask for five days\' notice on those. With Saturday only three days away, I honestly can\'t promise it.'],
              ['KWAME', 'Oh no. She\'s going to be so disappointed.'],
              ['BAKER', 'Don\'t worry, there\'s another way. We can print a unicorn picture on an edible sheet, put it on top, and pipe a rainbow border around it. It\'s eight dollars extra, and to be honest, the kids usually like it even more.'],
              ['KWAME', 'You know what, that sounds great. Let\'s do that. And could you write "Happy Birthday, Ama" on it?'],
              ['BAKER', 'Of course. Oh, I should mention, we do bake with nuts in this kitchen, so we can\'t guarantee that any of our cakes are nut-free.'],
              ['KWAME', 'Ah, good to know. There\'s one boy in her class with a nut allergy. I\'ll give his parents a heads-up so they can send something else for him.'],
              ['BAKER', 'That\'s probably wise. We take half the payment today as a deposit, and you can pick it up any time on Saturday after nine.'],
              ['KWAME', 'Great. The party doesn\'t start until two, so I\'ll probably swing by around eleven, after her soccer game.'],
              ['BAKER', 'That works. Just keep it in the fridge until about an hour before you serve it. The filling is made with fresh strawberries, so it won\'t sit out on a warm counter the way a plain chocolate cake would.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why does the baker recommend a half sheet cake?', o: ['A round cake would not feed everyone.', 'It is cheaper than two round cakes.', 'It is easier to put a picture on.', 'The round cakes need five days\' notice.'] },
              { id: 'L2.2', q: 'Why can\'t the bakery make a sculpted unicorn?', o: ['The order is too close to the party.', 'The decorator is away until Saturday.', 'It would not fit on a half sheet cake.', 'It costs more than Kwame wants to pay.'] },
              { id: 'L2.3', q: 'What does the baker suggest about the printed picture?', o: ['Young guests often like it better than the sculpted kind.', 'It takes the decorator most of a day.', 'It comes free with a half sheet cake.', 'It needs five days\' notice as well.'] },
              { id: 'L2.4', q: 'How much will Kwame pay today?', o: ['$36.50', '$32.50', '$73', '$65'] },
              { id: 'L2.5', q: 'What will Kwame probably do because of the nut warning?', o: ['Warn the parents of one guest', 'Order a second cake without nuts', 'Ask for a cake with no filling', 'Keep the cake in the fridge'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#f2cfb0', hair: '#8a8a8a', shirt: '#2e4053', style: 'short' }, LUCIA: { name: 'Lucia Ferreira', g: 'f', skin: '#c98c64', hair: '#3b2a20', shirt: '#117a65', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest this morning is Lucia Ferreira, manager of the Harbourside Food Bank in Dartmouth. Lucia, thanks for coming in.'],
              ['LUCIA', 'Thanks for having me.'],
              ['HOST', 'Let\'s start with the numbers. How busy are you these days?'],
              ['LUCIA', 'Busier than we\'ve ever been. Two years ago, we were serving about nine hundred households a month. Now it\'s closer to thirteen hundred, so that\'s an increase of over forty percent.'],
              ['HOST', 'And who\'s coming through your doors?'],
              ['LUCIA', 'This is the part that surprises people. About a third of our clients have jobs. Some of them are working two jobs. But once the rent is paid, there just isn\'t enough left for groceries. We also see a lot of seniors on fixed incomes, and more and more students.'],
              ['HOST', 'I understand you\'ve changed the way people actually receive food.'],
              ['LUCIA', 'We have. We used to hand out pre-packed boxes, and everyone got exactly the same thing. But people would end up with items they couldn\'t eat, because of allergies or their culture, and a lot of it went in the garbage. Now we\'re set up like a small grocery store. Clients walk through with a basket and pick what their family actually needs. People tell us it feels a lot less embarrassing, too.'],
              ['HOST', 'If listeners want to help, what should they give?'],
              ['LUCIA', 'Honestly, cash goes the furthest. We buy directly from wholesalers, so every dollar lets us buy about three dollars\' worth of food. If people would rather give food, we\'re always short on protein: peanut butter, canned fish, beans. We get plenty of pasta.'],
              ['HOST', 'And volunteers?'],
              ['LUCIA', 'Weekday sorting shifts fill up fast, which is wonderful. Where we struggle is Saturday mornings. We need people with their own vehicles to collect donations from local grocery stores. A few more drivers would make a huge difference.'],
              ['HOST', 'Is that a big commitment?'],
              ['LUCIA', 'Not really. We ask drivers for two Saturdays a month, about three hours each. There\'s a short food safety course first, but it\'s online now, so most people finish it in an evening. It used to take a full day in person.'],
              ['HOST', 'Anything coming up that people should know about?'],
              ['LUCIA', 'Our Fill the Bus drive is on November second. We\'ll park a city bus outside the Portland Street library and try to fill it, seats and all.']
            ],
            questions: [
              { id: 'L3.1', q: 'What does Lucia say about her clients that people find surprising?', o: ['Many of them are employed.', 'Most of them are students.', 'Few of them are seniors.', 'Some of them own homes.'] },
              { id: 'L3.2', q: 'What was one problem with the pre-packed boxes?', o: ['Some of the contents went unused.', 'They took volunteers too long to pack.', 'They did not contain enough food.', 'Grocery stores stopped supplying them.'] },
              { id: 'L3.3', q: 'According to Lucia, how do clients feel about the new system?', o: ['It allows them more dignity.', 'It takes them too much time.', 'It offers less food than before.', 'It is harder to understand.'] },
              { id: 'L3.4', q: 'Why does Lucia prefer donations of money?', o: ['The food bank can get food for less.', 'Money is easier to store than food.', 'Donated food is often out of date.', 'Cash pays for the grocery store layout.'] },
              { id: 'L3.5', q: 'What can be inferred about pasta?', o: ['The food bank does not need much more.', 'It is the most requested food item.', 'It is bought cheaply from wholesalers.', 'Clients rarely choose it from shelves.'] },
              { id: 'L3.6', q: 'Which kind of help is hardest for the food bank to find?', o: ['People who can pick up store donations on weekends', 'Volunteers to sort food on weekday shifts', 'Drivers for the city bus on November second', 'Trainers to run the food safety course'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'The province has banned all campfires and open burning, effective immediately, as wildfire season arrives several weeks earlier than usual.'],
              ['NEWS', 'Officials say this has been the driest spring in more than fifty years. As of this morning, crews are fighting eleven wildfires across the province.'],
              ['NEWS', 'Three are considered out of control, including one near Shelburne that has grown to roughly four hundred hectares. Two water bombers arrived from New Brunswick yesterday, and firefighters from Ontario are expected by the weekend.'],
              ['NEWS', 'The ban applies everywhere: provincial parks, private campgrounds and residential backyards. Fire pits and wood-burning chimineas are included. Propane camp stoves and barbecues, however, are still permitted, as long as they can be shut off with a valve.'],
              ['NEWS', 'Anyone caught breaking the ban could face a fine of up to ten thousand dollars. Officials stress that the vast majority of wildfires in the province are started by people, not by lightning.'],
              ['NEWS', 'In the past week alone, officers have handed out fourteen tickets, most of them to homeowners burning brush in their own yards.'],
              ['NEWS', 'The ban will stay in place until at least August fifteenth, and will be reviewed weekly after that, depending on rainfall.'],
              ['NEWS', 'Residents are also being asked not to use gas-powered tools, such as chainsaws, in wooded areas between noon and six p.m., when hot, dry conditions make sparks most dangerous.'],
              ['NEWS', 'Campground owners say cancellations are already coming in. The province is reminding visitors that campgrounds remain open, and that camping is still allowed, provided people cook on approved stoves.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the main purpose of the news item?', o: ['To announce limits on fires across the province', 'To report that campgrounds will close this summer', 'To explain how firefighters control large fires', 'To warn residents near Shelburne to leave home'] },
              { id: 'L4.2', q: 'What is true about the fire near Shelburne?', o: ['Crews have not yet brought it under control.', 'It was started by a lightning strike.', 'Firefighters from Ontario are already fighting it.', 'It began when a homeowner burned brush.'] },
              { id: 'L4.3', q: 'Which of these would still be allowed under the new rules?', o: ['Cooking supper at a campsite on a stove that can be turned off', 'Grilling over a small wood fire in a provincial park','Burning dry brush in a backyard early in the morning', 'A small fire in a chiminea at a private campground'] },
              { id: 'L4.4', q: 'What does the report suggest about the end of the ban?', o: ['It could be later than August 15.', 'It will end once it rains heavily.', 'It is set for the end of this week.', 'It depends on the number of fines paid.'] },
              { id: 'L4.5', q: 'Why does the province remind people that campgrounds are open?', o: ['Some campers have been cancelling their trips.', 'Campground owners have asked for the ban to end.', 'Most fires were started outside of campgrounds.', 'Visitors must now register their camp stoves.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'New office: decide by Friday', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { OLIVIA: { name: 'Olivia (manager)', g: 'f', skin: '#f0c9a6', hair: '#d4a24c', shirt: '#34495e', style: 'bun' }, TARIQ: { name: 'Tariq', g: 'm', skin: '#b07a52', hair: '#1a1a1a', shirt: '#b9770e', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#ecc9a2', hair: '#111111', shirt: '#7d3c98', style: 'long' } },
          segments: [{
            lines: [
              ['OLIVIA', 'Okay, let\'s get started. Our lease here ends in March, and the property company wants an answer on one of the two spaces by Friday. You\'ve both toured them. Thoughts?'],
              ['TARIQ', 'I\'ll be honest, I\'m leaning toward Bayers Lake. It\'s three thousand square feet, so we\'d finally have room for a proper training room. And it\'s only forty-nine hundred a month.'],
              ['MEI', 'Compared to fifty-eight hundred for the one on Hollis Street. So downtown would cost us an extra nine hundred a month.'],
              ['TARIQ', 'Right. And Bayers Lake has free parking. Downtown, a monthly spot runs about a hundred and eighty dollars.'],
              ['MEI', 'That only matters if you drive, though. I did a quick survey last week. Of our fourteen staff, nine take the bus or the ferry, or they bike in. And the bus out to Bayers Lake only comes every forty minutes.'],
              ['TARIQ', 'Huh. I honestly didn\'t realize it was that many.'],
              ['MEI', 'And think about clients. Most of them are downtown. Right now, they just walk over for meetings. If we move out to the business park, we\'d be the ones driving to them, every time.'],
              ['OLIVIA', 'That\'s a good point. I\'m also thinking about hiring. We\'ve struggled to find junior designers, and most of the people I\'ve interviewed this year don\'t own a car.'],
              ['TARIQ', 'Okay, I can see where this is heading. But what about training? The downtown space is only twenty-four hundred square feet.'],
              ['MEI', 'I measured it. If we turn the back storage area into a meeting room, we could fit about twelve people. That covers most of our sessions.'],
              ['OLIVIA', 'And for the big ones, there\'s a conference room on the ground floor we could book. So, downtown it is. Tariq, I know it wasn\'t your first choice. I\'ll ask the property company to include two parking spots that anyone can book on days they really need a car.'],
              ['TARIQ', 'I appreciate that. It\'s fair. Maybe I\'ll finally give the ferry a try.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main goal of the meeting?', o: ['To agree on where the team will work', 'To discuss hiring junior designers', 'To plan the team\'s training sessions', 'To negotiate a lower rent for March'] },
              { id: 'L5.2', q: 'Why does Tariq first prefer the Bayers Lake space?', o: ['It is bigger and less expensive.', 'It is close to most of their clients.', 'It is near the bus and ferry routes.', 'It already includes a training room.'] },
              { id: 'L5.3', q: 'Including one monthly parking spot, how much more per month would the downtown space cost?', o: ['$1,080', '$900', '$720', '$1,260'] },
              { id: 'L5.4', q: 'What does Mei\'s survey suggest?', o: ['Free parking would help only a minority.', 'Most staff would prefer Bayers Lake.', 'Nine staff members want a training room.', 'Fourteen staff members drive to work.'] },
              { id: 'L5.5', q: 'How does Tariq react to the survey results?', o: ['He did not expect them.', 'He says they are wrong.', 'He asks for a new survey.', 'He finds them irrelevant.'] },
              { id: 'L5.6', q: 'Why does Olivia mention job candidates?', o: ['A suburban office could be harder for them to reach.', 'They have asked for a larger training room.', 'They expect the company to pay for parking.', 'Most of them have said they live near Bayers Lake.'] },
              { id: 'L5.7', q: 'How does Mei answer Tariq\'s concern about training?', o: ['She explains how an unused area could be converted.', 'She suggests holding all training sessions online.', 'She proposes renting a room in Bayers Lake.', 'She says the team rarely needs any training.'] },
              { id: 'L5.8', q: 'What is Tariq\'s attitude at the end of the discussion?', o: ['He accepts the outcome and may change how he gets to work.', 'He agrees only because two parking spots will be free.', 'He still hopes Olivia will reconsider Bayers Lake.', 'He plans to keep driving and pay for his own spot.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Plastic bags: ban or not?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#e3b28b', hair: '#5a3a22', shirt: '#943126', style: 'curly' } },
          segments: [{
            lines: [
              ['NARR', 'Should stores still be allowed to hand out single-use plastic bags? Several town councils in the region are debating a ban, and residents are sharply divided.'],
              ['NARR', 'Marine biologist Doctor Naomi Clarke strongly supports a ban. She says plastic bags are among the most common items collected during beach clean-ups along the Atlantic coast.'],
              ['NARR', 'Over time, sunlight and waves break them into tiny fragments called microplastics, which are almost impossible to remove from the water once they are there.'],
              ['NARR', 'Clarke also points to how brief a bag\'s useful life is. On average, she says, a plastic bag is used for about twelve minutes, yet it can stay in the environment for hundreds of years.'],
              ['NARR', 'In her view, a small change in shopping habits is a reasonable price to pay.'],
              ['NARR', 'She adds that bans have already worked elsewhere. On one stretch of the South Shore, volunteers found roughly two thirds fewer bags within three years of a local ban.'],
              ['NARR', 'Clarke admits the ban was not the only change there, since a school clean-up program began the same year, but she believes the ban did most of the work.'],
              ['NARR', 'Not everyone agrees. Victor Huang owns a small grocery store in a rural community. He says a paper bag costs him about ten cents, compared with two cents for a plastic one, and that difference adds up quickly for a business like his.'],
              ['NARR', 'Huang also questions whether a ban actually helps the environment. Many of his customers, he says, reuse their shopping bags to line garbage cans or to pick up after their dogs.'],
              ['NARR', 'When the free bags disappear, people simply buy thicker plastic bags for those jobs. He adds that a cotton tote has to be used many times before it does less harm than plastic.'],
              ['NARR', 'Clarke has heard that argument before. She accepts that many households give a grocery bag a second use, but says a second use only delays the moment it is thrown away.'],
              ['NARR', 'As for totes, she agrees they only make sense if people keep using them, which is why she recommends sturdy bags that last for years, not a new tote every week.'],
              ['NARR', 'Huang has a second concern that he feels councils tend to overlook. Many of his customers are seniors who shop once a week and buy a lot at a time.'],
              ['NARR', 'If they forget their bags, a ban leaves them juggling groceries in the parking lot, and a few have told him they would rather drive forty minutes to a large store in town.'],
              ['NARR', 'Still, Huang does not dismiss the environmental problem. He lives near the coast himself, and he says the bags he sees caught in fences after a storm bother him as much as anyone.'],
              ['NARR', 'He simply believes the people who litter should be targeted, not every shopper.'],
              ['NARR', 'Instead of a ban, Huang would like to see a charge of around twenty-five cents per bag, which he believes would encourage people to bring their own without forcing anyone.'],
              ['NARR', 'Clarke calls that a reasonable first step, but doubts it would go far enough on its own. Councils are expected to hold public meetings this spring before making a decision.']
            ],
            questions: [
              { id: 'L6.1', q: 'What point is Clarke making with the figure of twelve minutes?', o: ['A bag does its job briefly but survives for centuries.', 'Most shoppers reuse a plastic bag about twelve times.', 'Bags begin to break apart soon after reaching the water.', 'Shoppers spend very little time choosing their bags.'] },
              { id: 'L6.2', q: 'What does Clarke admit about the South Shore results?', o: ['Another effort may also have reduced the number of bags.', 'The number of bags found on the beach did not really change.', 'Volunteers stopped counting the bags after three years.', 'The local ban was cancelled after a school program began.'] },
              { id: 'L6.3', q: 'Why does Victor Huang object to switching to paper bags?', o: ['The extra cost is significant for a store of his size.', 'His customers find paper bags too weak for heavy items.', 'Paper bags are harder to recycle in rural areas.', 'Paper bags cost him about two cents more each.'] },
              { id: 'L6.4', q: 'How does Clarke respond to the point that people reuse their bags at home?', o: ['A second use only postpones the bag being thrown out.', 'Very few households actually reuse their grocery bags.', 'Cotton totes should be used for those jobs instead.', 'Thicker plastic bags are less harmful than thin ones.'] },
              { id: 'L6.5', q: 'Why does Huang mention his older customers?', o: ['A ban could push some of them to shop elsewhere.', 'They are the most likely to litter after shopping.', 'They could not afford a twenty-five cent charge.', 'They usually prefer paper bags to plastic ones.'] },
              { id: 'L6.6', q: 'On which point do Clarke and Huang agree?', o: ['Bag litter along the coast is a genuine problem.', 'A bag charge would be enough on its own.', 'Reusing bags as liners largely solves the issue.', 'Rural stores should be exempt from any ban.'] }
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
          passage: '<h3>Message</h3><p>Hi Gabriel,</p><p>I hope you are well and that the warehouse is surviving without me! It has been almost two years since I left Atlantic Freight because my husband\'s job took our family to Ottawa, and I still miss our Friday coffee runs.</p><p>I am writing to ask a favour. After staying home with our son for the past year and a half, I am finally ready to go back to work. Now that he has a spot at a daycare near our apartment, I have applied for a project coordinator position with Capital Homes Co-operative, a non-profit that builds affordable housing. My first interview was on Monday, and I think it went well, although the panel seemed a little worried about the gap in my résumé. They have asked for two references by the end of the week.</p><p>Normally I would ask Mr. Doucet, since he was my supervisor, but he retired last spring and now spends most of the year sailing. I have emailed him twice without a reply, so I do not think I can count on him in time. My other reference will be the instructor from the evening course in project management that I finished in March, but she only knows my schoolwork. You and I worked side by side for three years, and you know my work better than anyone else there.</p><p>If you agree, the hiring manager, Ms. Okonkwo, will phone you on Wednesday or Thursday between 9:00 a.m. and 4:00 p.m. Eastern time. Remember that Moncton is an hour ahead of us. If a call is difficult, she said she would be just as happy with a short email.</p><p>The job involves a lot of scheduling and working with outside contractors, so it would really help if you could mention the inventory software project. I know you remember how stressful that spring was, but we trained all thirty staff in six weeks and still finished under budget.</p><p>Please do not feel any pressure. If you are too busy, I completely understand. Either way, we are coming to Moncton in December to visit my parents, and I would love to catch up over lunch.</p><p>Thank you so much,<br>Fatima</p>',
          questions: [
            { id: 'R1.1', q: 'Fatima left Atlantic Freight because', o: ['her partner\'s work required a move.', 'she wished to stay home with her son.', 'the software project was too stressful.', 'a housing non-profit had hired her.'] },
            { id: 'R1.2', q: 'Fatima suggests that she is looking for work now because', o: ['her child has a place in childcare.', 'her evening course has just ended.', 'Mr. Doucet retired last spring.', 'the co-operative contacted her first.'] },
            { id: 'R1.3', q: 'Fatima implies that the interview panel', o: ['noticed her time away from paid work.', 'doubted her skills with contractors.', 'wanted references from her instructor.', 'disliked that she lived in Ottawa.'] },
            { id: 'R1.4', q: 'Fatima most likely wants Gabriel as a reference because he', o: ['saw how she performed on the job.', 'was her supervisor at the warehouse.', 'taught her evening management course.', 'has already met Ms. Okonkwo.'] },
            { id: 'R1.5', q: 'Fatima mentions the software project in order to', o: ['point to abilities the new role calls for.', 'remind Gabriel that she left during it.', 'show that it ended ahead of schedule.', 'explain why Ms. Okonkwo phoned her.'] },
            { id: 'R1.6', q: 'Overall, Fatima\'s attitude toward asking the favour is', o: ['eager, yet careful not to impose.', 'anxious and rather insistent.', 'formal and somewhat distant.', 'doubtful and overly apologetic.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Fatima,</p><p>What wonderful news! Of course I will be a reference for you. Honestly, the warehouse has not been the same since you left, and I would be glad to tell Ms. Okonkwo that [[R1.7]].</p><p>One small problem: I will be at a safety training course all day on Wednesday, with my phone switched off. Could you ask her to call me on Thursday instead? Any time from [[R1.8]] my time works. If Thursday does not suit her either, I can [[R1.9]] instead.</p><p>I will definitely talk about the software rollout. I still remember you teaching [[R1.10]] how to use the new scanners, one shift at a time, without going over budget. It is a perfect example of the organizing and training skills a coordinator needs. And if she asks about your time at home, I can mention that [[R1.11]], which shows you kept your skills up to date.</p><p>And yes, lunch in December is a must. Give your little boy a hug from me.</p><p>All the best,<br>Gabriel</p>',
          blanks: [
            { id: 'R1.7', o: ['you would suit that role very well', 'you were my supervisor for years', 'you never found the warehouse stressful', 'you plan to return to Atlantic Freight'] },
            { id: 'R1.8', o: ['10:00 a.m. to 5:00 p.m.', '9:00 a.m. to 4:00 p.m.', '8:00 a.m. to 3:00 p.m.', '11:00 a.m. to 6:00 p.m.'] },
            { id: 'R1.9', o: ['send her a few written lines', 'ask Mr. Doucet to phone her', 'take her call on Wednesday', 'visit her office in Ottawa'] },
            { id: 'R1.10', o: ['all thirty of our co-workers', 'thirty new contractors', 'the staff at Capital Homes', 'Mr. Doucet and the managers'] },
            { id: 'R1.11', o: ['you studied project management', 'you trained staff at a daycare', 'your instructor already called her', 'you worked part time in housing'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following parking rate chart. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>City of Bayview: On-Street and Lot Parking Rates</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Zone</th><th>Area</th><th>Mon to Fri, 8:00 a.m. to 6:00 p.m.</th><th>Evenings, 6:00 to 10:00 p.m.</th><th>Weekends and holidays, 8:00 a.m. to 10:00 p.m.</th><th>Maximum stay</th></tr></thead><tbody>' +
            '<tr><td>A</td><td>Downtown core</td><td>$4.00 per hour</td><td>$2.00 per hour</td><td>$2.50 per hour</td><td>2 hours</td></tr>' +
            '<tr><td>B</td><td>Waterfront</td><td>$3.00 per hour</td><td>$2.00 per hour</td><td>$3.00 per hour</td><td>3 hours</td></tr>' +
            '<tr><td>C</td><td>Hospital district</td><td>$2.50 per hour</td><td>$1.50 per hour</td><td>$1.50 per hour</td><td>4 hours</td></tr>' +
            '<tr><td>D</td><td>Park and Ride lots</td><td>$6.00 per day</td><td>Free</td><td>Free</td><td>No limit</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>All on-street parking is free from 10:00 p.m. to 8:00 a.m. Maximum stays apply only during paid hours.</li><li>Zone B summer rate: from May 1 to September 30, the weekend and holiday rate in Zone B is $4.00 per hour.</li><li>Vehicles displaying a valid accessible parking permit may stay one hour longer than the maximum, at the regular rate.</li><li>Paying with the BayPark app adds a $0.35 fee per parking session. There is no fee at pay stations.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Rosa,</p><p>I looked up the city parking rates for our plans next week. On Saturday, July 12, we are going to the festival on the waterfront, so we will be paying [[R2.1]] an hour. We can only stay three hours, and if we use the pay station rather than the app, that will cost us [[R2.2]] in total.</p><p>On Monday morning, I am taking Dad to his eye appointment at the hospital. The clinic said it could take up to five hours with all the tests. Please remember to bring the mobility parking permit Dad got from the province last spring. Five hours is longer than the Zone C limit, but because of [[R2.3]], we will not have to move the car. Parking from 9:00 a.m. to 2:00 p.m. will cost [[R2.4]].</p><p>Finally, the concert downtown in Zone A on Friday starts at 9:00 p.m. and finishes around 11:30. Even though we will be there for more than two hours, we will only pay [[R2.5]].</p><p>See you soon,<br>Martin</p>',
          blanks: [
            { id: 'R2.1', o: ['$4.00', '$3.00', '$2.50', '$2.00'] },
            { id: 'R2.2', o: ['$12.00', '$9.00', '$12.35', '$9.35'] },
            { id: 'R2.3', o: ['the accessible permit Dad was given', 'the summer weekend rate', 'the free evening parking', 'the BayPark app session'] },
            { id: 'R2.4', o: ['$12.50', '$10.00', '$7.50', '$13.50'] },
            { id: 'R2.5', o: ['for one hour', 'for two hours', 'the daytime rate', 'the app fee only'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Which of these drivers would break the maximum-stay rule?', o: ['One parked in Zone A from noon to 3:00 p.m. on a Thursday', 'One parked in Zone C from 10:00 a.m. to 2:00 p.m. on a Monday', 'One parked in Zone A from 9:00 p.m. to midnight on a Friday', 'One with an accessible permit parked in Zone B for four hours on a Sunday'] },
            { id: 'R2.7', q: 'A commuter who must park from 8:00 a.m. to 5:00 p.m. every weekday would most likely use', o: ['Zone D.', 'Zone C.', 'Zone B.', 'Zone A.'] },
            { id: 'R2.8', q: 'According to the chart, Zone B is the only zone where', o: ['the weekend price depends on the time of year.', 'evening parking is cheaper than daytime parking.', 'the weekend rate is lower than the weekday rate.', 'drivers may stay for three hours or longer.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Giving Time, Gaining More</h3><p><b>A.</b> Every year, millions of Canadians give their time to sports clubs, hospitals, food banks, festivals and animal shelters. Most say they began volunteering simply to help others or to support a cause they care about. Yet researchers are finding that volunteers themselves gain a surprising number of benefits. In interviews, many people report that they signed up for one reason and stayed for a completely different one, such as the friendships they formed or the confidence they gained along the way. Surveys also suggest that people who volunteered with their parents as children are more likely to volunteer as adults. Organizations, in turn, depend heavily on this help: many local charities could not run their programs without it.</p><p><b>B.</b> Some of the clearest benefits are related to health. Studies of older adults have linked regular volunteering with lower blood pressure and fewer symptoms of depression. One likely explanation is social contact: volunteering gets people out of the house and into conversation with others, which helps protect against loneliness. Researchers add a word of caution, however. The benefits seem to level off at around two to three hours a week, and people who take on far more than that may end up feeling worn out rather than refreshed. A few studies have followed volunteers for many years, but researchers say more work is needed before firm conclusions can be drawn about long-term health.</p><p><b>C.</b> For young people and newcomers to Canada, volunteering can also be a bridge to paid work. It provides local work experience, a chance to practise workplace English or French, and supervisors who can later speak to a person\'s abilities. Employment counsellors recommend choosing roles that connect to a person\'s career goals. An accountant, for example, will gain more from helping a charity with its bookkeeping than from sorting donated clothing. Many hiring managers say they value volunteer experience as much as paid experience, as long as it is clearly described on a résumé. Some companies even give their staff a paid day off each year to volunteer.</p><p><b>D.</b> Experts suggest that beginners start small. Instead of committing to a weekly shift right away, new volunteers can try a one-day event, such as a park clean-up or a charity run, to discover what suits them. Most community centres keep lists of local organizations looking for help, and several websites match people with roles based on their skills and availability. Before agreeing to a position, volunteers should also ask whether training is provided and whether the organization covers expenses such as parking or bus fare. Finally, experts stress that there is nothing wrong with trying a role and moving on if it turns out not to be the right fit.</p>',
          questions: [
            { id: 'R3.1', q: 'Taking on too much volunteer work may leave people exhausted.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'People sometimes continue volunteering for reasons other than the ones that first motivated them.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'A single short commitment can help a person test what kind of role they enjoy.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'Volunteer work can lead to recommendations from people who have seen a person\'s work.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Older adults who volunteer regularly tend to live longer than those who do not.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Spending time with others may partly explain why volunteering is good for health.', fixed: true, a: 'B' },
            { id: 'R3.7', q: 'Volunteers benefit most from tasks connected to the work they hope to do.', fixed: true, a: 'C' },
            { id: 'R3.8', q: 'It is worth asking whether an organization will pay back travel costs.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Online services can pair people with roles that fit their abilities and schedule.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Lecture Hall or Laptop?</h3><p>Over the past decade, the number of university courses offered fully online in Canada has grown steadily. At one Manitoba university, more than a quarter of all course enrolments are now online, and that share continues to rise each year. As universities plan their budgets and buildings for the next twenty years, a debate has grown over whether online classes can truly replace the lecture hall, or whether something important is lost when students learn through a screen.</p><p>Kenji Watanabe, who designs online courses at a college in British Columbia and completed his own master\'s degree online while working full time, argues that flexibility is the key advantage. "Many of today\'s students are not eighteen-year-olds living in residence," he says. "They are parents, shift workers and people in rural areas who would otherwise have to drive two hours to campus." He adds that recorded lectures allow students to pause, rewind and review difficult material, which especially helps those studying in a second language. In his experience, well-designed online courses with weekly deadlines and small discussion groups produce results that are just as good as traditional classes.</p><p>Dr. Rhiannon Mackay, a chemistry professor in Halifax, is not convinced. She points out that online courses tend to have higher dropout rates, particularly among first-year students who have not yet built strong study habits. "When there is no class to show up to, it is very easy to fall behind without anyone noticing," she says. In her own field, she adds, laboratory work simply cannot be done properly through a screen. She also values the informal moments that campus life provides: questions after class, study groups formed in the hallway, and conversations with professors that sometimes lead to research jobs. "Students do not just learn from lectures. They learn from each other, and from being part of a community."</p><p>Nadia Bellerose, who chairs a student association in Saskatoon, sees the question differently. In a survey her association ran last fall, most students said they wanted online options, but almost as many complained that some online courses were little more than old lectures uploaded to a website. "Students are not against online learning. They are against lazy online learning," she says. In her view, the real issue is fairness: universities often save money on classrooms by moving courses online, yet tuition for those courses has not gone down. She would like some of those savings spent on tutors and live video office hours.</p><p>Despite their differences, Watanabe and Mackay agree that the right answer may depend on the student. Mackay suggests that first-year courses should be taught mainly in person, with online options becoming more common in later years, once students have proven they can manage their own time. Watanabe goes further. He would like universities to offer the same course in both formats so that every student can choose. "The worst outcome," he says, "is forcing everyone into a single model, whichever one it is."</p>',
          questions: [
            { id: 'R4.1', q: 'The main purpose of the article is to', o: ['set out competing opinions on remote study.', 'explain how to design a good online course.', 'report on budget cuts at one university.', 'argue that lecture halls will disappear.'] },
            { id: 'R4.2', q: 'Watanabe most likely mentions his own master\'s degree to show that he', o: ['has personally combined study and a job.', 'knows that recorded lectures are simple.', 'left full-time work to finish his studies.', 'earned his degree faster than usual.'] },
            { id: 'R4.3', q: 'Dr. Mackay is concerned that new students taking courses online', o: ['may drift behind with nobody aware.', 'may be more tempted to cheat on exams.', 'may need faster internet at home.', 'may choose programs without labs.'] },
            { id: 'R4.4', q: 'Bellerose would most likely agree that online courses', o: ['need better quality, not removal.', 'should be cancelled at most universities.', 'should cost students more for live support.', 'work best as uploaded recorded lectures.'] },
            { id: 'R4.5', q: 'Compared with Mackay\'s view, Watanabe\'s final position suggests that he is', o: ['readier to let learners decide.', 'more focused on first-year students.', 'more doubtful about learning online.', 'more worried about laboratory work.'] }
          ],
          reply: '<h3>Reader comment</h3><p>As a mother of two who went back to university at thirty-five, I can relate to Mr. Watanabe. We live well outside the city, so without online courses I would have to [[R4.6]] twice a week, which is simply not possible with my children\'s schedules. Being able to [[R4.7]] the recordings late at night, after the kids are asleep, has saved me more than once.</p><p>That said, Dr. Mackay makes a fair point about first-year students. My nephew took all his first-year courses online, and with nobody checking on him, he had [[R4.8]] by November. As a biology student, I also agree that [[R4.9]] cannot really be replaced by a video. And Ms. Bellerose is right about money. I pay exactly the same fees as my neighbour, who attends every class in person, so I would like to see [[R4.10]]. Still, in the end, the best approach is the one Watanabe describes: let students choose for themselves.</p>',
          blanks: [
            { id: 'R4.6', o: ['spend hours on the road to campus', 'move into a student residence', 'give up my full-time job', 'hire a private tutor at home'] },
            { id: 'R4.7', o: ['stop and replay', 'join small groups to discuss', 'meet weekly deadlines for', 'attend live office hours for'] },
            { id: 'R4.8', o: ['lost track of his coursework', 'formed a hallway study group', 'found a research assistant job', 'moved out of residence for good'] },
            { id: 'R4.9', o: ['hands-on experiments', 'a recorded lecture series', 'online discussion groups', 'a weekly deadline schedule'] },
            { id: 'R4.10', o: ['some savings go to extra support', 'my fees rise to pay for office hours', 'more courses taught in lecture halls', 'empty classrooms rented to the public'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You hired a contractor to renovate your kitchen and have already paid 80% of the $14,000 price. The work was supposed to be finished three weeks ago, but the countertops are not installed and the sink is not connected, and the contractor has stopped returning your calls. Your parents arrive from overseas in two weeks to stay with you for a month, but you would still prefer to keep working with this contractor rather than start over with someone new.</p><p>Write an email to the contractor. In your email, do the following:</p><ul><li>Describe the work you agreed on and what is still unfinished.</li><li>Explain how the delay is affecting you and your household.</li><li>Say what you want the contractor to do, by when, and what you will do if this does not happen.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>A small piece of city-owned land in your neighbourhood has been empty for several years. The city is asking residents how it should be used. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a fenced dog park with benches, a water fountain and separate areas for large and small dogs. It would be free to use, but the nearest houses are only 20 metres away, and barking would start as early as 6:00 a.m.' },
            { key: 'B', label: 'Option B', text: 'Create a community garden with plots that residents can rent, a shared tool shed and space for gardening workshops. Plots would cost $60 a season, there would be room for only 25 households, and the garden would sit unused from November to April.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you enjoy visiting, and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has decided to learn how to cook, but has never prepared a full meal before. Your friend works long shifts, gets home around 7:00 p.m., and has only about $60 a week to spend on groceries. Give your friend advice on how to get started.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to make a difficult decision. What were your choices, what did you decide, who did you turn to for advice, and how do you feel about the decision now?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: SNOWSTREET },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the icy patch, the stuck car, and the bus that is pulling in.', image: SNOWSTREET },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your brother are planning a gift for your parents\' 30th wedding anniversary. Choose the option you prefer. In the next section, you will need to persuade your brother that your choice is better.',
          choices: [
            { key: 'A', title: 'Harbour dinner cruise', image: CRUISE, facts: ['3-hour evening cruise with dinner and live music', 'Cost: $240', 'Departs Saturdays at 6:00 p.m., on the anniversary date', 'Cancelled in rough weather; rebooking only, no refund'] },
            { key: 'B', title: 'Custom family photo album', image: ALBUM, facts: ['60 pages of family photos with notes from relatives', 'Cost: $220', 'Needs photos collected from 12 relatives', 'Ready in 4 weeks, after the anniversary date'] }
          ],
          third: { key: 'C', title: 'Spa day for two', image: SPA, facts: ['Massage and lunch for two', 'Cost: $310', 'Full day, 9:00 a.m. to 4:00 p.m.', '45-minute drive from home'] },
          persuade: 'Your brother would rather give your parents a spa day instead. Persuade him that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You share an apartment with a roommate who often has friends over late on weeknights. The noise has been keeping you awake before work. Today, your landlord called to say the downstairs neighbour has complained, and that both of you could receive a formal warning.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your roommate. Explain the problem and suggest a solution you can both accept.</p><p><b>Option B:</b> Talk to your landlord. Explain the situation and ask for time to fix it before any warning is given.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>After several pedestrians were hit at busy downtown crossings, your city council is considering a $75 fine for anyone caught looking at a phone while crossing a street. Supporters say it would save lives and change habits quickly. Opponents say it would be hard to enforce fairly and that the money would be better spent on safer crossings and lower speed limits.</p><p>A local radio station has asked residents to share their views. Do you support the fine? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a garden centre and see this unusual lawn mower. Your neighbour is looking for a new lawn mower for a small, sloped backyard and has said he or she does not want to spend more than about $1,500. Call your neighbour, describe the lawn mower, and explain whether you think he or she should buy it.', image: ODDMOWER }
      ]
    }
  });
})();
