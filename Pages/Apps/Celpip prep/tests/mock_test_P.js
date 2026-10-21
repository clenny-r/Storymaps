/* Rowe CELPIP Mock Exam: Test P content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (mix of CLB 9 to 11 items with some CLB 7 to 8).
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

  function house(x, y, w, h, c, door) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<polygon points="' + (x - 8) + ',' + y + ' ' + (x + w / 2) + ',' + (y - 34) + ' ' + (x + w + 8) + ',' + y + '" fill="#6e4b3a"/>' +
      '<polygon points="' + (x - 8) + ',' + y + ' ' + (x + w / 2) + ',' + (y - 34) + ' ' + (x + w + 8) + ',' + y + ' ' + (x + w + 2) + ',' + (y - 4) + ' ' + (x + w / 2) + ',' + (y - 28) + ' ' + (x - 2) + ',' + (y - 4) + '" fill="#ffffff"/>' +
      '<rect x="' + (x + 12) + '" y="' + (y + 14) + '" width="18" height="16" fill="#fdf2c4" stroke="#ffffff" stroke-width="2"/>' +
      '<rect x="' + (x + w - 30) + '" y="' + (y + 14) + '" width="18" height="16" fill="#fdf2c4" stroke="#ffffff" stroke-width="2"/>' +
      '<rect x="' + (x + w / 2 - 8 + (door || 0)) + '" y="' + (y + h - 30) + '" width="16" height="30" fill="#5b3a29"/>';
  }

  var WINTER = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A snowy neighbourhood street and park on a winter morning">';
    p += '<rect width="640" height="400" fill="#cfe6f5"/>';
    /* light snow falling */
    p += '<g fill="#ffffff">' + (function () { var t = ''; for (var i = 0; i < 26; i++) t += '<circle cx="' + ((i * 53) % 640 + 8) + '" cy="' + ((i * 37) % 60 + 6) + '" r="2"/>'; return t; })() + '</g>';
    /* houses along the far side of the street */
    p += house(30, 70, 100, 50, '#c0504d') + house(170, 72, 96, 48, '#4f81bd') + house(382, 70, 100, 50, '#9bbb59', -26) + house(520, 72, 96, 48, '#8064a2');
    p += '<rect y="120" width="640" height="32" fill="#f4f8fb"/>';
    /* driveway of the third house, freshly shovelled */
    p += '<rect x="420" y="120" width="44" height="32" fill="#8e979e"/>';
    p += '<path d="M466 152 Q480 132 500 140 Q510 146 506 152z" fill="#ffffff" stroke="#d6e2ea"/>';
    /* the street */
    p += '<rect y="152" width="640" height="54" fill="#9aa5ad"/><g fill="#f4f8fb"><rect x="20" y="177" width="30" height="4"/><rect x="90" y="177" width="30" height="4"/><rect x="300" y="177" width="30" height="4"/><rect x="370" y="177" width="30" height="4"/></g>';
    /* man shovelling at the end of his driveway */
    p += person(446, 150, { s: .8, shirt: '#2e7d32', skin: '#8d5a3b', hair: '#120c08', arms: 'left' });
    p += '<line x1="428" y1="128" x2="414" y2="150" stroke="#6d4c2f" stroke-width="3"/><rect x="404" y="146" width="18" height="7" fill="#e74c3c"/>';
    /* city snowplow moving left toward the driveway, pushing a wave of snow */
    p += '<path d="M470 204 Q478 176 492 172 Q500 186 500 204z" fill="#ffffff" stroke="#d6e2ea"/>';
    p += '<polygon points="494,168 506,166 512,204 496,206" fill="#7f8c8d"/>';
    p += '<rect x="512" y="160" width="40" height="40" rx="4" fill="#f39c12"/><rect x="518" y="166" width="26" height="16" fill="#d6eaf8"/>';
    p += '<rect x="552" y="168" width="78" height="32" fill="#e67e22"/><text x="591" y="190" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#ffffff">CITY</text>';
    p += '<rect x="526" y="152" width="14" height="8" fill="#f1c40f"/>';
    p += '<g fill="#2c3e50"><circle cx="530" cy="204" r="9"/><circle cx="604" cy="204" r="9"/></g>';
    /* parked car with a woman scraping the frosty windshield */
    p += '<path d="M140 196 L150 178 Q154 172 164 172 L214 172 Q224 172 230 180 L240 190 L248 192 L248 200 L136 200 L136 196z" fill="#2471a3"/><path d="M156 182 Q159 177 166 177 L188 177 L188 188 L152 188z" fill="#ecf0f1"/><path d="M194 177 L212 177 Q220 177 224 183 L228 188 L194 188z" fill="#ffffff"/>';
    p += '<rect x="150" y="168" width="70" height="6" rx="3" fill="#ffffff"/>';
    p += '<g fill="#1b2631"><circle cx="160" cy="202" r="8"/><circle cx="226" cy="202" r="8"/></g>';
    p += person(268, 206, { s: .8, shirt: '#8e44ad', skin: '#f0c9a6', hair: '#d4a24c', arms: 'left' });
    p += '<line x1="249" y1="177" x2="240" y2="182" stroke="#1abc9c" stroke-width="3"/>';
    /* park in the foreground */
    p += '<rect y="206" width="640" height="194" fill="#f4f8fb"/>';
    /* outdoor rink with boards */
    p += '<ellipse cx="160" cy="300" rx="138" ry="64" fill="#7a5a3a"/><ellipse cx="160" cy="300" rx="132" ry="58" fill="#bfe3f2"/>';
    p += '<g stroke="#ffffff" stroke-width="2" fill="none" opacity=".7"><path d="M60 300 Q110 280 160 300"/><path d="M150 330 Q200 310 250 330"/></g>';
    /* child skating with a skating aid */
    p += '<g stroke="#c0392b" stroke-width="3" fill="none"><path d="M86 330 L86 306 L116 306 L116 330"/></g>';
    p += person(100, 332, { s: .65, shirt: '#f1c40f', skin: '#c98c64', hair: '#1d1410', arms: 'right' });
    /* skater gliding backwards */
    p += person(170, 296, { s: .8, shirt: '#16a085', skin: '#e3b28b', hair: '#6b4a2b', arms: 'up' });
    /* skater losing balance */
    p += '<g transform="rotate(-28 236 330)">' + person(236, 330, { s: .8, shirt: '#2980b9', skin: '#5c3a21', hair: '#120c08', arms: 'up' }) + '</g>';
    p += '<g stroke="#5d6d7e" stroke-width="1.5"><line x1="252" y1="300" x2="262" y2="294"/><line x1="254" y1="308" x2="266" y2="304"/></g>';
    /* child about to throw a snowball at the rink */
    p += person(40, 392, { s: .75, shirt: '#e91e63', skin: '#f2cfb0', hair: '#5d4037', arms: 'up' });
    p += '<circle cx="50" cy="350" r="6" fill="#ffffff" stroke="#bdc3c7"/>';
    /* two children building a snowman that has no head yet */
    p += '<circle cx="360" cy="344" r="24" fill="#ffffff" stroke="#c9d6df"/><circle cx="360" cy="308" r="17" fill="#ffffff" stroke="#c9d6df"/><g fill="#2c3e50"><circle cx="360" cy="302" r="2"/><circle cx="360" cy="312" r="2"/></g>';
    p += person(326, 372, { s: .7, shirt: '#d35400', skin: '#e8c3a0', hair: '#a0703a', arms: 'right' });
    p += '<circle cx="414" cy="372" r="12" fill="#ffffff" stroke="#c9d6df"/>';
    p += person(436, 384, { s: .7, shirt: '#27ae60', skin: '#a9714b', hair: '#2a1b12', arms: 'left' });
    /* hot chocolate stand with a volunteer */
    p += person(522, 288, { shirt: '#c0392b', skin: '#d6a07a', hair: '#3b2a20', arms: 'right' });
    p += '<rect x="474" y="274" width="100" height="30" fill="#8b5a2b"/><text x="524" y="293" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#ffffff">HOT CHOCOLATE</text>';
    p += '<g fill="#ecf0f1" stroke="#7f8c8d"><rect x="544" y="265" width="8" height="9"/><rect x="556" y="265" width="8" height="9"/></g><rect x="482" y="259" width="16" height="15" rx="2" fill="#95a5a6"/>';
    /* woman walking a dog */
    p += person(452, 300, { s: .85, shirt: '#34495e', skin: '#f0c9a6', hair: '#2a1b12', arms: 'left' });
    p += '<line x1="432" y1="272" x2="414" y2="284" stroke="#c0392b" stroke-width="1.5"/>';
    p += '<g fill="#8d6e63"><ellipse cx="402" cy="290" rx="14" ry="7"/><circle cx="388" cy="284" r="6"/><rect x="392" y="294" width="3" height="8"/><rect x="408" y="294" width="3" height="8"/></g><polygon points="384,280 386,274 390,279" fill="#6d4c41"/>';
    /* parent pulling a child on a sled */
    p += person(600, 392, { shirt: '#f39c12', skin: '#6b4226', hair: '#120c08', arms: 'left' });
    p += '<line x1="578" y1="356" x2="530" y2="376" stroke="#555" stroke-width="1.5"/>';
    p += '<path d="M476 380 L532 380 Q540 380 538 372" stroke="#c0392b" stroke-width="3" fill="none"/><rect x="480" y="370" width="50" height="8" fill="#e74c3c"/>';
    p += person(506, 372, { s: .6, sit: true, shirt: '#3498db', skin: '#e8c39e', hair: '#151515', arms: 'up' });
    p += '</svg>';
    return p;
  })();

  var TENTSITE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#d9eef7"/><path d="M0 70 Q50 50 100 66 Q150 54 200 68 L200 120 L0 120z" fill="#7cb46b"/>' +
    '<polygon points="20,40 32,12 44,40" fill="#24452e"/><polygon points="160,44 172,14 184,44" fill="#24452e"/><rect x="30" y="40" width="4" height="8" fill="#4a3324"/><rect x="170" y="44" width="4" height="8" fill="#4a3324"/>' +
    '<polygon points="60,98 100,48 140,98" fill="#e67e22"/><polygon points="100,48 100,98 88,98" fill="#b65f15"/><polygon points="100,98 92,74 108,98" fill="#5a2f0c"/>' +
    '<g stroke="#6d4c2f" stroke-width="4" stroke-linecap="round"><line x1="150" y1="104" x2="172" y2="98"/><line x1="150" y1="98" x2="172" y2="104"/></g><path d="M154 100 Q158 86 161 82 Q166 90 168 100z" fill="#f39c12"/>' +
    '<text x="100" y="28" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1b4f72">PARK CAMPSITE</text></svg>';

  var COTTAGE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#dff1fb"/><rect y="80" width="200" height="40" fill="#5dade2"/><path d="M0 80 L90 80 L90 70 L0 70z" fill="#7cb46b"/>' +
    '<rect x="20" y="40" width="64" height="32" fill="#f5f0e1"/><polygon points="14,40 52,16 90,40" fill="#a04000"/><rect x="30" y="48" width="12" height="10" fill="#aed6f1"/><rect x="62" y="48" width="12" height="10" fill="#aed6f1"/><rect x="47" y="54" width="10" height="18" fill="#6e4b3a"/>' +
    '<rect x="90" y="76" width="56" height="5" fill="#8b5a2b"/><g stroke="#5b3f26" stroke-width="2"><line x1="96" y1="81" x2="96" y2="92"/><line x1="140" y1="81" x2="140" y2="92"/></g>' +
    '<path d="M150 92 Q165 100 180 92 Q165 96 150 92z" fill="#c0392b"/>' +
    '<text x="140" y="30" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1b4f72">LAKE COTTAGE</text></svg>';

  var CABIN = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e8f0e3"/><rect y="88" width="200" height="32" fill="#8fbf74"/>' +
    '<polygon points="10,90 24,30 38,90" fill="#24452e"/><polygon points="160,90 176,26 192,90" fill="#2b5236"/><polygon points="140,90 150,50 160,90" fill="#24452e"/>' +
    '<rect x="56" y="54" width="76" height="38" fill="#8b5a2b"/><g stroke="#6d4421" stroke-width="2"><line x1="56" y1="62" x2="132" y2="62"/><line x1="56" y1="70" x2="132" y2="70"/><line x1="56" y1="78" x2="132" y2="78"/><line x1="56" y1="86" x2="132" y2="86"/></g>' +
    '<polygon points="48,56 94,28 140,56" fill="#4a3324"/><rect x="66" y="64" width="14" height="12" fill="#f9e79f"/><rect x="104" y="66" width="14" height="26" fill="#4a2c17"/>' +
    '<path d="M0 108 Q60 96 100 104 Q150 112 200 100" stroke="#c8a165" stroke-width="5" fill="none"/>' +
    '<text x="100" y="20" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1d5e2a">FOREST CABIN</text></svg>';

  var SHOVEL = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual snow shovel in a hardware store">' +
    '<rect width="640" height="400" fill="#eef2f5"/><rect y="320" width="640" height="80" fill="#b8c2cb"/>' +
    '<rect x="24" y="24" width="190" height="52" rx="6" fill="#ffffff" stroke="#c4cdd5"/><text x="119" y="57" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#34495e">HARDWARE STORE</text>' +
    /* wide blade */
    '<path d="M150 250 L330 250 L344 320 L136 320z" fill="#2e86c1" stroke="#1b4f72" stroke-width="3"/><rect x="136" y="314" width="208" height="8" fill="#95a5a6"/>' +
    /* two wheels behind the blade */
    '<circle cx="372" cy="306" r="18" fill="#2c3e50"/><circle cx="372" cy="306" r="7" fill="#bdc3c7"/>' +
    /* salt spreader box with holes */
    '<rect x="350" y="248" width="56" height="40" rx="4" fill="#ecf0f1" stroke="#7f8c8d" stroke-width="2"/><g fill="#7f8c8d"><circle cx="362" cy="282" r="2"/><circle cx="372" cy="282" r="2"/><circle cx="382" cy="282" r="2"/><circle cx="392" cy="282" r="2"/></g><text x="378" y="270" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#555">SALT</text>' +
    /* long handle with a bend */
    '<path d="M330 256 L440 160 L520 110" stroke="#7f8c8d" stroke-width="9" fill="none" stroke-linecap="round"/>' +
    /* folding hinge */
    '<circle cx="440" cy="160" r="9" fill="#f1c40f" stroke="#b7950b" stroke-width="2"/>' +
    /* heated grip with a red glow and a battery pack */
    '<rect x="506" y="98" width="62" height="20" rx="9" fill="#c0392b" transform="rotate(-32 506 108)"/><path d="M520 82 q6 -10 0 -18 M534 74 q6 -10 0 -18" stroke="#e74c3c" stroke-width="2" fill="none"/>' +
    '<g transform="rotate(-32 480 136)"><rect x="462" y="124" width="36" height="22" rx="3" fill="#34495e"/><g fill="#2ecc71"><rect x="467" y="129" width="6" height="12"/><rect x="475" y="129" width="6" height="12"/></g></g>' +
    /* headlamp on the handle */
    '<rect x="394" y="186" width="28" height="18" rx="4" fill="#555" transform="rotate(-40 408 195)"/><polygon points="392,198 340,190 352,226" fill="#fff6a8" opacity=".7"/>' +
    /* price tag */
    '<line x1="520" y1="120" x2="560" y2="200" stroke="#555" stroke-width="1.5"/><path d="M546 200 L612 200 L612 240 L546 240 L536 220z" fill="#f6d55c" stroke="#b7950b"/><circle cx="546" cy="220" r="3" fill="#eef2f5"/><text x="580" y="227" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#333">$189</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'P',
    title: 'Mock Test P',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { BRONWYN: { name: 'Bronwyn', g: 'f', skin: '#f2cfb0', hair: '#8e5a2b', shirt: '#16a085', style: 'long' }, BARISTA: { name: 'Barista', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#4a3324', style: 'short' } },
        segments: [{
          lines: [
            ['BRONWYN', 'Hi, could I get a large oat milk latte? Actually, wait, make that a medium. I\'m meeting a friend, and I\'ll probably want a second one later.'],
            ['BARISTA', 'Sure. Oat milk is fifty cents extra, but if you have your own cup, I can take a quarter off.'],
            ['BRONWYN', 'Oh, my travel mug\'s in the car. Never mind, I\'m staying, so a regular mug is fine.'],
            ['BARISTA', 'One medium oat latte, for here. Coming right up.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Bronwyn change her order to a medium?', o: ['She expects to order another drink later.', 'The large size costs fifty cents more.', 'She left her travel mug in the car.', 'The barista suggested a smaller size.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { YESENIA: { name: 'Yesenia', g: 'f', skin: '#c98c64', hair: '#1d1410', shirt: '#8e44ad', style: 'long' }, HAMISH: { name: 'Hamish', g: 'm', skin: '#f0c9a6', hair: '#7b5a3a', shirt: '#2e86c1', style: 'short' } },
          segments: [
            {
              lines: [
                ['YESENIA', 'Hamish, I just got off the phone with the city\'s permit office. You know how we figured the new deck didn\'t need a permit, since we\'re only replacing the old one?'],
                ['HAMISH', 'Yeah, that\'s what the guy at the lumber yard said. Don\'t tell me he was wrong.'],
                ['YESENIA', 'Well, half wrong. A straight replacement wouldn\'t need one. But ours is bigger, and it\'s more than sixty centimetres off the ground. Anything that high needs a building permit, with drawings.'],
                ['HAMISH', 'How long does that take?'],
                ['YESENIA', 'Three to four weeks, she said, and that\'s if the drawings are complete. And Benoit\'s crew is booked to start a week from Monday.'],
                ['HAMISH', 'He won\'t wait a month. He\'s booked solid until September after us.'],
                ['YESENIA', 'And here\'s the worst part. If you build without one, the city can order you to take it down. The Brennans on Ash Street had to rip out half their fence.'],
                ['HAMISH', 'So what\'s triggering this? The size or the height?'],
                ['YESENIA', 'Mostly the height. Low decks are exempt, even big ones.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why does the new deck need a permit?', o: ['It will be raised above the exempt height.', 'It will be built too close to the fence.', 'The old deck never had city approval.', 'The lumber yard sold them the wrong kind of wood.'] },
                { id: 'L1.2', q: 'Why is the permit timing a problem?', o: ['They could lose the builder if the start is delayed.', 'The city only reviews drawings after September.', 'The builder needs a full month to prepare the drawings.', 'The neighbours have complained about the old deck.'] },
                { id: 'L1.3', q: 'Why does Yesenia mention the Brennans?', o: ['To show the risk of skipping approval.', 'To suggest asking them about permits.', 'To explain why their own fence has to move.', 'To recommend the crew who built it.'] }
              ]
            },
            {
              lines: [
                ['HAMISH', 'Then what if we just build it lower? Under sixty centimetres, and we don\'t need a permit at all.'],
                ['YESENIA', 'But the back door is about ninety centimetres above the yard. We\'d step outside and drop straight down.'],
                ['HAMISH', 'So we put a wide step right outside the door, like a little landing. The deck itself sits low.'],
                ['YESENIA', 'You know, a low deck might actually be easier for your dad. He avoids stairs since his knee operation.'],
                ['HAMISH', 'Exactly. And Benoit said fewer posts means less digging. He figured it\'d knock about fifteen hundred off the eleven thousand he quoted us.'],
                ['YESENIA', 'The step isn\'t free, though.'],
                ['HAMISH', 'No, he guessed around six hundred for that.'],
                ['YESENIA', 'Okay, I like it. But before we tell him anything, I want it in writing from the city that a landing doesn\'t count as part of the deck. I\'m not getting caught by the same rule twice.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Hamish suggest building the deck lower?', o: ['It would remove the need for city approval.', 'It would let them avoid adding a step.', 'Benoit prefers not to build raised decks.', 'His father asked for a deck without stairs.'] },
                { id: 'L1.5', q: 'Compared with the original quote, what would the new design cost?', o: ['About $900 less', 'About $1,500 less', 'About $600 more', 'About $2,100 less'] },
                { id: 'L1.6', q: 'What does Yesenia want before they go ahead?', o: ['Confirmation that the step is not covered by the rule', 'A written price for the step from the builder', 'Her father-in-law\'s opinion on the lower, simpler design', 'A complete set of drawings for the lower deck'] }
              ]
            },
            {
              lines: [
                ['YESENIA', 'Good news, mostly. The city emailed back. A landing outside the door is fine without a permit, as long as it\'s no bigger than one and a half metres on each side.'],
                ['HAMISH', 'Ours would be about a metre each way. So we\'re well under.'],
                ['YESENIA', 'Right. But she also looked at our lot survey. Any deck, permit or not, has to stay at least one point two metres from the side property line. Ours is drawn at one metre from the fence.'],
                ['HAMISH', 'So we lose twenty centimetres on that side. Fine. The barbecue still fits, and honestly, it leaves a bit more room for the garden.'],
                ['YESENIA', 'One thing, though. Benoit orders lumber on Thursday mornings, and he said he cuts everything to whatever sketch we give him.'],
                ['HAMISH', 'Right. And the sketch he has still shows the old measurements, doesn\'t it? The high version.']
              ],
              questions: [
                { id: 'L1.7', q: 'What change does the city\'s reply require?', o: ['Moving one side of the deck farther from the fence', 'Making the landing smaller than one metre on each side', 'Moving the barbecue off the new deck', 'Applying for a permit for the landing'] },
                { id: 'L1.8', q: 'Why does Yesenia mention when Benoit orders lumber?', o: ['Updated measurements must reach him before then.', 'The lumber price will go up after Thursday.', 'He cannot start work until the lumber arrives.', 'The city must approve the sketch by Thursday.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { ADVISOR: { name: 'Credit union advisor', g: 'm', skin: '#e8c39e', hair: '#2a1b12', shirt: '#1a5276', style: 'short' }, ODETTE: { name: 'Odette', g: 'f', skin: '#6b4226', hair: '#120c08', shirt: '#b03a2e', style: 'bun' } },
          segments: [{
            lines: [
              ['ADVISOR', 'Good afternoon, welcome to Prairie Hearth Credit Union. How can I help?'],
              ['ODETTE', 'Hi. Two things, actually. I saw a poster about free budgeting classes, and I\'d also like to open an account for my son. He\'s seventeen and just started his first part-time job.'],
              ['ADVISOR', 'Great. Let\'s start with your son. Since he\'s under eighteen, you\'d be a joint holder on the account until his birthday. Is he with you today?'],
              ['ODETTE', 'No, he\'s at work. Does he really need to come in?'],
              ['ADVISOR', 'He does, I\'m afraid, with his own photo ID. We can\'t open it on his behalf. But you can book a time online, and it only takes about twenty minutes.'],
              ['ODETTE', 'Okay. And there\'s no monthly fee? His paycheques aren\'t exactly huge.'],
              ['ADVISOR', 'Youth accounts are free until twenty-five. The catch is that the debit card has a daily limit of two hundred dollars. Some teenagers find that pretty annoying.'],
              ['ODETTE', 'Honestly, that sounds like a feature, not a catch.'],
              ['ADVISOR', 'Ha, fair enough. Now, the budgeting classes. There are four sessions, Tuesday evenings, starting on the fourteenth.'],
              ['ODETTE', 'Oh, no. Tuesday is my late shift at the warehouse. I don\'t get home until after ten.'],
              ['ADVISOR', 'Hang on, let me check something. Actually, the Tuesday group is full anyway. But we\'ve just added a Saturday morning group starting the eighteenth. Same four sessions, ten until noon.'],
              ['ODETTE', 'Saturdays work. Could my son come too? He\'s the one who really needs it.'],
              ['ADVISOR', 'Members sixteen and up are welcome, and he\'ll be a member by then. Just register him separately, so we print enough workbooks.'],
              ['ODETTE', 'Perfect. Is there anything I should bring?'],
              ['ADVISOR', 'Ideally, two or three months of bank and credit card statements. The first session is all about tracking where your money actually goes, and people are usually surprised.'],
              ['ODETTE', 'Hmm. I\'m a bit nervous about that part, to be honest.'],
              ['ADVISOR', 'Most people are. Nobody else sees your statements, though. You work through them on your own, and the instructor just shows you how.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why can\'t Odette open her son\'s account today?', o: ['He must be there in person with identification.', 'He is too young to hold any account of his own.', 'She needed to book an appointment online first.', 'His part-time job does not pay enough yet.'] },
              { id: 'L2.2', q: 'How does Odette feel about the daily card limit?', o: ['She thinks it will be good for her son.', 'She expects her son to find it annoying.', 'She would like the limit to be raised.', 'She is surprised that the account is free.'] },
              { id: 'L2.3', q: 'What does the advisor find out about the Tuesday class?', o: ['It has no places left.', 'It was moved to Saturday mornings.', 'It now starts on the eighteenth.', 'It is only for members over sixteen.'] },
              { id: 'L2.4', q: 'What must Odette do so that her son can attend the class?', o: ['Fill in a separate sign-up for him as well', 'Bring an extra workbook for him', 'Wait until he turns eighteen', 'Show his photo ID at the first session'] },
              { id: 'L2.5', q: 'Why does the advisor say that nobody else sees the statements?', o: ['To ease Odette\'s concern about the first session', 'To explain why the classes are kept so small', 'To warn her not to share her card details with other members', 'To suggest that she leave her statements at home'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#f0c9a6', hair: '#c49a42', shirt: '#5b2c6f', style: 'bun' }, SUNIL: { name: 'Sunil Chandrasekar', g: 'm', skin: '#a9714b', hair: '#2a2a2a', shirt: '#1e8449', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Sunil Chandrasekar, who coordinates volunteers at the hospital here in Kelowna. Sunil, when people picture hospital volunteers, they probably think of the gift shop. What are your volunteers actually doing?'],
              ['SUNIL', 'Ha, the gift shop\'s still there, but it\'s a small part now. Our biggest group works in wayfinding.'],
              ['SUNIL', 'They meet people at the main doors and walk them to where they need to go. The building\'s grown in pieces over fifty years, so honestly, it\'s a maze.'],
              ['HOST', 'How many volunteers do you have?'],
              ['SUNIL', 'About four hundred. Actually, no, I\'m out of date. That was before this spring\'s intake, and we took on sixty new people then.'],
              ['HOST', 'That\'s a lot of people to coordinate. Is it hard to fill the shifts?'],
              ['SUNIL', 'It is. And yet weekday mornings are overflowing, while evenings and weekends are always short. Everyone wants nine to noon on a Tuesday. But patients don\'t stop needing company at six o\'clock on a Saturday.'],
              ['HOST', 'What does company mean, exactly?'],
              ['SUNIL', 'Take our mealtime program. Some older patients barely eat when they\'re alone. A volunteer sits with them, opens containers, chats a bit. The nurses tell us those patients eat noticeably more on the days a volunteer is there.'],
              ['HOST', 'Who can apply?'],
              ['SUNIL', 'Anyone sixteen or older. We ask for one three-hour shift a week, for at least six months.'],
              ['SUNIL', 'And everyone needs a police check and a TB test, which together can take a month, so I tell people not to wait until the week they want to start.'],
              ['HOST', 'Do you get many young people?'],
              ['SUNIL', 'Quite a few. Students often do it for their school volunteer hours, and we\'re glad to have them.'],
              ['HOST', 'How did you get into this yourself?'],
              ['SUNIL', 'My father was a patient here for three weeks, about eight years ago. A volunteer brought him the newspaper every morning and argued with him about hockey. It was the best part of his day.'],
              ['SUNIL', 'When I retired from teaching, I signed up, and two years later they offered me this job.'],
              ['HOST', 'What would you say to someone who\'s nervous they won\'t know what to do?'],
              ['SUNIL', 'That it\'s completely normal. Every new volunteer shadows an experienced one for their first three shifts. And the main skill is listening. You don\'t need any medical knowledge. In fact, you\'re not allowed to give medical advice at all.']
            ],
            questions: [
              { id: 'L3.1', q: 'What do most of the hospital\'s volunteers do?', o: ['Help people find their way around the building', 'Run the gift shop near the main entrance', 'Keep older patients company at mealtimes', 'Bring the newspaper to patients every single morning'] },
              { id: 'L3.2', q: 'About how many volunteers does the hospital have now?', o: ['About 460', 'About 400', 'About 340', 'About 60'] },
              { id: 'L3.3', q: 'What scheduling problem does Sunil describe?', o: ['Too few volunteers are available outside regular weekday hours.', 'Many volunteers cancel their Tuesday morning shifts.', 'Volunteers are not allowed to choose their own shifts.', 'Weekend shifts are too long for most volunteers.'] },
              { id: 'L3.4', q: 'Why does Sunil mention what the nurses have noticed?', o: ['To show that the mealtime visits have a real effect', 'To explain why nurses prefer working with volunteers', 'To show that volunteers need some medical training', 'To suggest that older patients dislike hospital food'] },
              { id: 'L3.5', q: 'Why does Sunil advise people to apply early?', o: ['The required screening can take several weeks.', 'Weekday morning shifts fill up very quickly.', 'New volunteers must first complete six months.', 'The spring intake has a fixed deadline.'] },
              { id: 'L3.6', q: 'Why did Sunil first decide to volunteer?', o: ['He had seen how much a volunteer helped his father.', 'His teaching job required him to do community service.', 'The hospital had offered him a paid position.', 'He wanted to learn more about medical care.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f3a5f', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'A new kind of grocery store opened in Thunder Bay this week, and on most of its shelves, there is no fixed price.'],
              ['NEWS', 'At the Current River Community Market, every item carries a suggested price, but shoppers pay whatever they feel they can afford at the checkout. Those who can pay more are encouraged to round up, which helps cover the cost for others.'],
              ['NEWS', 'The market is run by a non-profit group that also operates two food banks in the city.'],
              ['NEWS', 'Director Annelise Bergstrom says demand at those food banks has risen by almost a third in two years, much of it from working families who never expected to need help.'],
              ['NEWS', 'Many of them, she says, told staff they found it hard to walk into a food bank. At a market, they choose their own groceries and pay something, and she says that matters to people.'],
              ['NEWS', 'The idea is being watched closely. In its first five days, the market served about two thousand shoppers, who paid, on average, seventy-five cents for every dollar of suggested prices.'],
              ['NEWS', 'Bergstrom says the market needs to reach at least ninety cents to cover its rent and staff over the long term.'],
              ['NEWS', 'Until then, a grant from a local foundation will make up the difference, but only for the first eighteen months.'],
              ['NEWS', 'Not everyone is enthusiastic. Some local grocers worry that the market could draw away their customers, though Bergstrom points out that it stocks only basics such as bread, eggs, rice and fresh vegetables.'],
              ['NEWS', 'The market is open six days a week and is looking for volunteer cashiers, especially for its busy Saturday morning shift.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A store where customers decide how much to pay', 'A food bank that has moved to a new building', 'A local foundation that funds grocery stores', 'A rise in the price of basic groceries'] },
              { id: 'L4.2', q: 'According to Bergstrom, why do some families prefer the market?', o: ['They feel uncomfortable asking a food bank for help.', 'They can buy a wider range of products there.', 'They can volunteer as cashiers to lower their bill.', 'They live too far from the city\'s two existing food banks.'] },
              { id: 'L4.3', q: 'What do the first week\'s figures suggest?', o: ['Shoppers are paying less than the market needs.', 'Most shoppers are rounding up at the checkout.', 'Fewer people came than the organizers hoped.', 'The market is already covering its rent.'] },
              { id: 'L4.4', q: 'What might happen if payments do not improve?', o: ['The market could struggle once its grant runs out.', 'The food banks would have to close their doors.', 'The foundation would extend its support for years.', 'Suggested prices would rise to ninety cents an item.'] },
              { id: 'L4.5', q: 'How does Bergstrom respond to the local grocers\' concern?', o: ['She notes that the market sells only a limited range of goods.', 'She says the market will close on Saturdays to help them.', 'She explains that grocers can donate their unsold food.', 'She argues that grocery prices in the city are already far too high.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Next season: ice and fees', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { BRIDGET: { name: 'Bridget', g: 'f', skin: '#f2cfb0', hair: '#b5651d', shirt: '#2e86c1', style: 'long' }, CALLUM: { name: 'Callum', g: 'm', skin: '#e3b28b', hair: '#3b2a20', shirt: '#7d3c98', style: 'short' }, RUBY: { name: 'Ruby', g: 'f', skin: '#b07850', hair: '#1d1410', shirt: '#d35400', style: 'curly' } },
          segments: [{
            lines: [
              ['BRIDGET', 'Okay, let\'s start. The arena sent next season\'s ice rates, and it\'s not pretty.'],
              ['CALLUM', 'How bad is it? Last season we paid two hundred and fifty an hour.'],
              ['BRIDGET', 'It\'s going up to three hundred. Sorry, no, two ninety. Three hundred is the tournament rate.'],
              ['RUBY', 'And we book three hours every Sunday night for twenty weeks. That adds up fast.'],
              ['CALLUM', 'Could we take the later slot? Ten-thirty until one-thirty is a lot cheaper.'],
              ['RUBY', 'Callum, half our players start work at seven on Monday morning. They\'d be exhausted.'],
              ['BRIDGET', 'I agree. We\'d lose people, and then the cost per player goes up anyway.'],
              ['CALLUM', 'Fair. What about the rink in Warman? It\'s twenty-five minutes north, and they charge two forty.'],
              ['RUBY', 'Cheaper, sure. But how many of our players don\'t drive? At least a dozen take the bus.'],
              ['CALLUM', 'Right, and no bus goes out to Warman. Okay, forget that one.'],
              ['BRIDGET', 'So we\'re probably raising fees. I hate that. This league exists so people can play cheaply.'],
              ['RUBY', 'How much would we need? Roughly.'],
              ['BRIDGET', 'If nothing else changes, about forty-five dollars more per player.'],
              ['CALLUM', 'That\'s a lot for some of our newer players. Several only arrived in Canada last year.'],
              ['RUBY', 'Wait. What about selling part of our ice? We barely use the last half hour.'],
              ['BRIDGET', 'True. The third game always finishes early, and people just stand around chatting.'],
              ['CALLUM', 'The arena manager told me the figure skating club is on a waiting list for Sunday ice.'],
              ['RUBY', 'Oh, I skated with their head coach for years. She\'d jump at thirty minutes.'],
              ['BRIDGET', 'If they paid for that half hour, the increase per player drops to about twenty-five.'],
              ['CALLUM', 'Twenty-five I can sell. Especially if we keep the same Sunday time.'],
              ['RUBY', 'We could also let people pay in two instalments instead of one.'],
              ['BRIDGET', 'Good idea. Nobody should miss a season over one big payment in September.'],
              ['CALLUM', 'So do we tell the players now, or wait until it\'s settled?'],
              ['BRIDGET', 'Wait. If the skating club says no, we\'re back to forty-five, and I\'d rather announce once.'],
              ['RUBY', 'Then let\'s not lose a day. I think their board meets Thursday.'],
              ['CALLUM', 'And I\'ll ask the arena whether they can split the invoice between us and the club.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To deal with a rise in the cost of their ice time', 'To choose a new arena for the coming season', 'To plan a tournament for the figure skating club', 'To arrange transportation for players without cars'] },
              { id: 'L5.2', q: 'By how much will the league\'s hourly ice rate increase?', o: ['$40', '$50', '$10', '$45'] },
              { id: 'L5.3', q: 'Why does Ruby object to the later time slot?', o: ['Many players have to be at work early the next day.', 'The late slot costs more than the Sunday evening one.', 'The figure skating club already uses that time.', 'Players who take the bus could not get home.'] },
              { id: 'L5.4', q: 'Why does Bridget think the later slot might not save money?', o: ['Fewer players would be left to share the cost.', 'The arena would charge the tournament rate.', 'The games would have to be made shorter.', 'Players would ask for a lower fee for late games.'] },
              { id: 'L5.5', q: 'What is the main problem with the rink in Warman?', o: ['Some players would have no way of getting there.', 'Its hourly rate is higher than the arena\'s new rate.', 'It does not have ice available on Sunday nights.', 'It is too far for players who drive to games.'] },
              { id: 'L5.6', q: 'Why does Callum mention the newer players?', o: ['He worries that a large increase would be hard for them.', 'He thinks they should pay less than the other players.', 'He wants them to help with the skating club offer.', 'He believes most of them would prefer the late slot.'] },
              { id: 'L5.7', q: 'What will Ruby most likely do next?', o: ['Contact the skating club before its next meeting', 'Ask the arena to split the invoice with the club', 'Announce the fee increase to all the players', 'Set up the two-instalment payment option'] },
              { id: 'L5.8', q: 'Why does Bridget want to wait before telling the players?', o: ['The final amount may still change.', 'The arena has not confirmed its rates.', 'Most players are away until September.', 'She expects the players to be upset.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Who should clear sidewalks?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#d6a07a', hair: '#333333', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'This winter, several Canadian cities are asking a question that sounds simple: who should be responsible for clearing snow from residential sidewalks? In many places, homeowners must clear the sidewalk in front of their property within a day of a snowfall.'],
              ['NARR', 'Other cities have handed the job to municipal crews.'],
              ['NARR', 'Emmanuel Boateng, who uses a power wheelchair and chairs an accessibility committee in his city, wants municipal crews to take over everywhere. His first argument is that a sidewalk is only as good as its worst stretch.'],
              ['NARR', 'If ninety-nine homeowners shovel and one does not, he says, the route is still blocked for him, for parents pushing strollers, and for older people using walkers. Many of them, he says, simply stay home until spring.'],
              ['NARR', 'His second argument is about cost. In cities that already clear sidewalks with small plows, he says, the service costs the average household about fifty dollars a year in property tax, far less than hiring a private company.'],
              ['NARR', 'He adds that cleared sidewalks mean fewer falls and fewer injuries treated in emergency rooms, which cost the public far more than any plow.'],
              ['NARR', 'Boateng admits that crews cannot be everywhere at once. After a big storm, some streets may wait a day or two. But he says he would rather wait for a cleared route he can count on than hope that every neighbour remembers.'],
              ['NARR', 'Heather Sandvik, who managed public works in a mid-sized Ontario city for fifteen years, sees it differently. Her first concern is the price tag for larger cities.'],
              ['NARR', 'To clear every residential sidewalk, she says, a city of half a million people might need dozens of new machines and enough operators to run them overnight. The fifty-dollar figure, she argues, comes from cities with compact neighbourhoods and shorter routes.'],
              ['NARR', 'Her second point is speed. A homeowner with a shovel can clear a sidewalk the same morning, while a citywide route can take up to two days to complete.'],
              ['NARR', 'In her experience, the first complaint after a city takes over is that sidewalks are cleared later than before.'],
              ['NARR', 'She also notes that small sidewalk plows often leave a ridge of hard-packed snow across the end of each driveway, which homeowners then have to dig out themselves.'],
              ['NARR', 'Sandvik does not dismiss the problem Boateng describes. She agrees that patchy shovelling is a real barrier. Her solution, though, is stronger enforcement, with quick inspections and fines for owners who ignore the rules.'],
              ['NARR', 'She would combine that with volunteer programs that match seniors and people with disabilities with neighbours who are willing to shovel for them.'],
              ['NARR', 'Boateng is not convinced. Fines, he says, usually depend on someone filing a complaint, and inspectors often arrive days later. And volunteer programs tend to run short of helpers exactly when they are needed most, after the heaviest storms.'],
              ['NARR', 'For now, both agree on one thing: whatever system a city chooses, residents need to know clearly who is responsible, and by when.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Who should be responsible for clearing sidewalks', 'How cities can lower the cost of snow removal', 'Why sidewalk plows are replacing road plows', 'How residents can get help shovelling their driveways'] },
              { id: 'L6.2', q: 'What does Boateng mean by a sidewalk\'s "worst stretch"?', o: ['One uncleared section can make a whole route unusable.', 'Some streets are always plowed last after a storm.', 'Older sidewalks are too narrow for wheelchairs.', 'Homeowners usually clear only part of their sidewalk.'] },
              { id: 'L6.3', q: 'What does Boateng concede?', o: ['Crews may take some time to reach every street.', 'Private companies clear sidewalks more cheaply.', 'Most homeowners do not clear their sidewalks.', 'Small plows can damage sidewalks and lawns.'] },
              { id: 'L6.4', q: 'Why does Sandvik question the fifty-dollar figure?', o: ['It comes from places that are easier to serve.', 'It does not include the cost of the new plows.', 'It was calculated by a private company.', 'It applies only to homeowners who use a walker.'] },
              { id: 'L6.5', q: 'According to Sandvik, what often happens after a city takes over?', o: ['People notice that snow stays on sidewalks longer than before.', 'Homeowners stop shovelling their own driveways.', 'Volunteer programs gain many more members.', 'Property taxes double within the first year.'] },
              { id: 'L6.6', q: 'Why does Boateng doubt Sandvik\'s proposal?', o: ['It reacts slowly and depends on help that may not appear.', 'Fines would be too expensive for most homeowners to pay.', 'Seniors do not want their neighbours to shovel for them.', 'Inspectors would refuse to work right after big storms.'] }
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
          passage: '<h3>Message</h3><p>Hi Baptiste,</p><p>I hope the move to the new apartment went smoothly and that Anouk is enjoying her new job. I have been meaning to write for weeks, but now I finally have some news worth sharing.</p><p>We have rented a cottage on Lake of Bays for the last two weeks of August, and we would love it if your family joined us for the second week. It belongs to a colleague of Rupert\'s, and because he is charging us far less than he normally would, we have agreed to look after a few jobs for him while we are there, such as staining the dock and clearing the gutters.</p><p>The cottage has three bedrooms but only one bathroom, so mornings may call for some patience. My mother will be staying with us until the Wednesday of your week, which means one bedroom will be taken for your first few nights. After that, it is yours. Until then, the boys can sleep in the bunkie, a tiny cabin right by the water. Knowing them, they will probably refuse to move out of it once your room is free.</p><p>A few practical things. The last two kilometres of the road are gravel and quite rough, so if you are still driving the small car, go slowly. The cottage takes its water straight from the lake, and the owner asks that nobody drink it, so please bring plenty of bottled water. The nearest grocery store is in Dorset, about twenty minutes away, and it closes early on Sundays.</p><p>There is no internet, and your phone will only get a signal at the very end of the dock. Rupert keeps complaining about this, but I notice he has stopped checking his email at dinner.</p><p>The owner leaves a canoe and two kayaks for guests. There is also a motorboat, but only he is allowed to drive it, so please do not let the boys get their hopes up.</p><p>As for money, please do not worry about the rent. All we ask is that you cover your own groceries and bring your telescope. Apparently, on a clear night up there, you can see the Milky Way.</p><p>Let me know by the end of the month so I can tell the owner how many people to expect.</p><p>Warmly,<br>Corinne</p>',
          questions: [
            { id: 'R1.1', q: 'Corinne and Rupert are paying a reduced rent because they', o: ['have agreed to do some work on the property.', 'will share the cottage with Baptiste\'s family.', 'are renting the cottage for the whole summer.', 'know the owner through Corinne\'s mother.'] },
            { id: 'R1.2', q: 'During the first part of Baptiste\'s stay,', o: ['one of the bedrooms will still be in use.', 'Corinne\'s mother will sleep in the bunkie.', 'the cottage will have no running water.', 'the boys will have to share the bathroom.'] },
            { id: 'R1.3', q: 'Corinne expects that the boys will', o: ['enjoy the bunkie more than a regular room.', 'complain about sharing a single bathroom.', 'ask to use the owner\'s motorboat every day.', 'refuse to sleep so close to the water.'] },
            { id: 'R1.4', q: 'What does Corinne suggest about the road to the cottage?', o: ['It could be hard on a smaller vehicle.', 'It is closed to traffic early on Sundays.', 'It is paved only as far as the store in Dorset.', 'Visitors should not attempt it after dark.'] },
            { id: 'R1.5', q: 'Corinne\'s comment about Rupert suggests that he', o: ['is enjoying the break from being connected more than he admits.', 'is worried about missing important messages from work.', 'plans to drive to Dorset every evening to check his email.', 'would prefer to rent a cottage with internet next year.'] },
            { id: 'R1.6', q: 'Corinne asks Baptiste to', o: ['make sure his children do not expect a boat ride.', 'help her stain the dock and clean the gutters.', 'pay a share of the cost of renting the cottage.', 'bring enough groceries for both families.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Corinne,</p><p>What a wonderful invitation! Anouk and I talked it over last night, and we would love to come. We can arrive on the Saturday and stay the full week.</p><p>Of course, we completely understand that your mother will be using [[R1.7]] for the first few nights. Honestly, our boys were thrilled to hear that they might sleep [[R1.8]], so I suspect we will have trouble getting them out of there.</p><p>We actually sold the small car in June, so [[R1.9]] should not be a problem for our new van. I will pack the telescope, of course, and we will fill the back of the van with [[R1.10]] since the lake water is off limits.</p><p>One question: I am supposed to be on call for work that week. Since phones only work at [[R1.11]], I may disappear down there now and then. I hope Rupert will forgive me.</p><p>Thank you again. We cannot wait.</p><p>Baptiste</p>',
          blanks: [
            { id: 'R1.7', o: ['one of the bedrooms', 'the only bathroom', 'the small cabin by the lake', 'the canoe and the kayaks'] },
            { id: 'R1.8', o: ['in a little cabin by the lake', 'in the room your mother uses', 'on the motorboat at the dock', 'in a tent beside the cottage'] },
            { id: 'R1.9', o: ['the rough stretch at the end', 'the drive to the store in Dorset', 'the early closing time on Sundays', 'the twenty minutes from the lake'] },
            { id: 'R1.10', o: ['drinking water', 'groceries from Dorset', 'fuel for the boat', 'bedding and towels'] },
            { id: 'R1.11', o: ['the tip of the dock', 'the store in Dorset', 'the top of the gravel road', 'the bunkie by the water'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Mill Creek Settlement Services, Edmonton: Winter Programs (January to March)</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Program</th><th>Who can join</th><th>Days and time</th><th>Weeks</th><th>Fee</th><th>Free childcare</th></tr></thead><tbody>' +
            '<tr><td>English Conversation Circle</td><td>All newcomers</td><td>Mon and Wed, 6:00 to 7:30 p.m.</td><td>10</td><td>Free</td><td>Yes</td></tr>' +
            '<tr><td>Job Search Workshop</td><td>Permanent residents only</td><td>Tue, 9:30 a.m. to 12:00 p.m.</td><td>6</td><td>Free</td><td>No</td></tr>' +
            '<tr><td>Workplace English (CLB 5 and up)</td><td>Permanent residents and work permit holders</td><td>Tue and Thu, 6:00 to 8:30 p.m.</td><td>12</td><td>$60</td><td>Yes</td></tr>' +
            '<tr><td>Driving Theory Prep</td><td>All newcomers aged 16 and up</td><td>Sat, 10:00 a.m. to 1:00 p.m.</td><td>4</td><td>$40</td><td>No</td></tr>' +
            '<tr><td>Computer Basics</td><td>All newcomers</td><td>Fri, 2:00 to 4:00 p.m.</td><td>12</td><td>Free</td><td>Yes</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Childcare is for children aged 18 months to 6 years and must be booked at least 7 days before the first class. Spaces are limited.</li><li>Program fees are waived for clients who arrived in Canada less than 12 months before the program starts. Bring your arrival document.</li><li>Clients registered in 2 or more programs receive $50 toward a monthly transit pass for each month they attend.</li><li>Workplace English requires a placement test (CLB 5 or higher). Tests are held on Saturdays at 9:00 a.m.</li><li>Clients who miss more than 2 classes in a row without notice lose their place to the next person on the waiting list.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Soraya,</p><p>I picked up the winter program list at Mill Creek today. Since your bakery shift ends at 1:00 every weekday, the only weekday daytime program you could manage is [[R2.1]]. For your English, Workplace English is the best match, but before you can register, you will need to [[R2.2]].</p><p>Unfortunately, you arrived fourteen months ago, so you will not get the newcomer discount. If you take Workplace English and Driving Theory Prep, the fees will come to [[R2.3]] in total.</p><p>Samira can come with you to the evening classes, but remember that the centre needs [[R2.4]], so please call them by the end of this week.</p><p>The good news is that taking two programs means help with the bus. If you attend Workplace English and Computer Basics from January to March, you will get [[R2.5]] toward your transit passes.</p><p>Love,<br>Idris</p>',
          blanks: [
            { id: 'R2.1', o: ['Computer Basics', 'Job Search Workshop', 'Driving Theory Prep', 'English Conversation Circle'] },
            { id: 'R2.2', o: ['pass an assessment on a Saturday morning', 'show your arrival document at the desk', 'book childcare at least a week ahead', 'join the waiting list for evening classes'] },
            { id: 'R2.3', o: ['$100', '$0', '$60', '$40'] },
            { id: 'R2.4', o: ['a week\'s notice to arrange care for her', 'her arrival document before she can join', 'proof that she is at least eighteen months', 'a separate fee for each evening she attends'] },
            { id: 'R2.5', o: ['$150', '$100', '$50', '$300'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A client who arrived four months ago on a work permit wants to take the Job Search Workshop. She', o: ['cannot register because of the program\'s entry rule.', 'can join for free because she arrived recently.', 'must first take the Saturday placement test.', 'can join if she books childcare at least a week ahead.'] },
            { id: 'R2.7', q: 'A man in Driving Theory Prep misses the first three Saturdays without telling anyone. What will most likely happen?', o: ['Someone waiting for a spot will be given his place.', 'He will have to pay the $40 fee a second time.', 'He will lose his monthly transit pass support.', 'He will be moved to the Computer Basics class instead.'] },
            { id: 'R2.8', q: 'A parent who can only attend in the evening, has not yet reached CLB 5, and must bring a three-year-old should choose', o: ['English Conversation Circle.', 'Workplace English.', 'Driving Theory Prep.', 'Computer Basics.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Long Journey of the Monarch Butterfly</h3><p><b>A.</b> Every summer, orange and black monarch butterflies appear in gardens, meadows and roadsides across southern Canada, from Alberta to Nova Scotia. By late August, however, something unusual begins. Instead of staying to face the cold, the monarchs east of the Rocky Mountains start flying south toward the mountain forests of central Mexico, a journey that can exceed 4,000 kilometres. Few insects anywhere in the world travel so far. Monarchs west of the Rockies take a shorter route to the coast of California. Remarkably, no single butterfly completes the full round trip. The monarchs that reach Canada in early summer are the great-grandchildren of the ones that left the year before.</p><p><b>B.</b> The secret lies in how different generations live. Butterflies born in spring and early summer survive only two to six weeks, just long enough to mate and lay eggs. The generation that emerges in late summer is different. These butterflies delay breeding, store fat, and can live for up to eight months, which gives them time to fly south, spend the winter clustered on fir trees, and begin the trip north in spring. Scientists believe they find their way by using the position of the sun together with an internal clock. In September, thousands may gather at Point Pelee, on the shore of Lake Erie, waiting for favourable winds before crossing the water.</p><p><b>C.</b> Monarch caterpillars can eat only one kind of plant: milkweed. The plant contains chemicals that make the caterpillars, and later the adult butterflies, taste bitter to birds, and their bright colours act as a warning. Yet milkweed has been disappearing. Farmers long treated it as a pest, roadsides are often mowed during the breeding season, and new housing has replaced many open fields. Mowing at the wrong time destroys eggs and caterpillars along with the plants. Ontario only removed common milkweed from its official list of noxious weeds in 2014. Partly because of this loss of habitat, the monarch is now listed as endangered in Canada.</p><p><b>D.</b> Ordinary people can make a real difference. Planting native milkweed, along with late-blooming flowers that provide nectar for the journey, turns a backyard or schoolyard into a refuelling stop. Even a few plants in a balcony container can attract a passing female looking for a place to lay her eggs. Avoiding pesticides in the garden also helps. Thousands of volunteers take part in research by reporting sightings online or by attaching tiny numbered stickers to the wings of butterflies they catch. When one of these tagged monarchs is later found in Mexico, scientists learn more about the route it took. Experts do warn against buying farm-raised butterflies to release at weddings or other events, since they can spread disease to wild populations.</p>',
          questions: [
            { id: 'R3.1', q: 'Butterflies that hatch early in the season live only long enough to reproduce.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'The insects\' appearance signals to predators that they are unpleasant to eat.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Members of the public help scientists work out the path the butterflies follow.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'The butterflies that leave Canada in the fall are not the ones that return the next year.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Some monarchs wait for the right conditions before flying over a large lake.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'Cutting plants at certain times of year can kill the young insects living on them.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'Monarchs from one region of the country travel a shorter distance than others.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Changes in how land is used have reduced the food that young monarchs rely on.', fixed: true, a: 'C' },
            { id: 'R3.9', q: 'Fewer monarchs have gathered at Point Pelee in recent years than in the past.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Cafés Put a Clock on Laptops?</h3><p>On a weekday afternoon at a popular café in Montreal\'s Mile End, nearly every table is taken, yet the room is strangely quiet. Most customers are bent over laptops, and many have been there since morning. Last fall, owner Elena Marchetti decided something had to change. She now limits laptop use to 90 minutes on weekends and has covered half of her electrical outlets. Similar rules have since appeared in cafés from Halifax to Vancouver, and they have started an argument about what a café is for.</p><p>Marchetti insists she has nothing against remote workers. "On a Tuesday morning, they are my best customers," she says. Her problem is weekends, when families and groups arrive, find no seats and leave. She estimates that a table occupied for four hours by one person who buys a single coffee brings in less than a fifth of what it would earn from customers who come and go. "Rent in this neighbourhood has doubled in six years. I cannot sell the same chair for five dollars all afternoon."</p><p>Kai Nakamura, a freelance designer who works from cafés four days a week, thinks rules like these miss the bigger picture. He says regular laptop users fill tables during slow hours that would otherwise sit empty, and that he usually spends more than twenty dollars a day on drinks and lunch. "On a quiet Wednesday, we are what keeps the lights on," he argues. He also points out that many people work in cafés because their apartments are small or shared, not because they want free electricity.</p><p>Nakamura does concede that some laptop users take advantage. He has seen people spread out across a table for six, or join video calls without headphones. "Those people make it harder for the rest of us," he admits.</p><p>Fiona Gallagher, who studies small businesses at a college in Ottawa, says the answer depends heavily on timing. Her research with twenty independent cafés found that laptop users made up about 40 percent of weekday customers but only 15 percent on weekends. On weekdays, cafés that welcomed them did better than those that discouraged them. On weekends, the pattern reversed. "A blanket ban is a mistake," she says, "but so is pretending that seats are free."</p><p>Gallagher believes time limits work best when they are clear and posted in advance. Customers who learn the rule at the door tend to accept it, she says, while those asked to leave partway through a visit often post angry online reviews. Several cafés she studied have tried other solutions, such as a separate shared work table, or a small hourly charge that includes unlimited coffee.</p><p>Marchetti admits she has received a few angry reviews, but she says weekend sales are up twelve percent since the change. Nakamura, for his part, has simply moved his weekend work to the public library. "The coffee is worse," he says, "but nobody looks at me."</p>',
          questions: [
            { id: 'R4.1', q: 'Why did Marchetti introduce her new rules?', o: ['Weekend visitors were leaving because tables were taken.', 'Remote workers were her least profitable weekday customers.', 'Customers had complained about the noise from video calls.', 'Her electricity bills had doubled over the past six years.'] },
            { id: 'R4.2', q: 'Marchetti mentions her rent in order to', o: ['explain why each seat must bring in more money.', 'show that her café is in a popular neighbourhood.', 'argue that remote workers should pay for power.', 'suggest that she may have to move her business.'] },
            { id: 'R4.3', q: 'What does Nakamura admit?', o: ['Some laptop users behave in ways that hurt others.', 'He works in cafés mainly to use their electricity.', 'His spending on drinks is lower than most customers\'.', 'Weekday laptop users take tables away from families.'] },
            { id: 'R4.4', q: 'According to Gallagher\'s research, whether laptop users help a café', o: ['depends on the day of the week.', 'depends on the size of the café.', 'depends on how much they spend on food.', 'depends on whether outlets are covered.'] },
            { id: 'R4.5', q: 'Nakamura\'s final comment suggests that he', o: ['values feeling welcome more than good coffee.', 'plans to return to cafés once the rules change.', 'thinks the library should start selling coffee.', 'prefers working at home to working in public.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I run a small bakery café in Kingston, and this article could have been written about my shop. Like Ms. Marchetti, I found that my real problem was [[R4.6]], not the rest of the week. On a slow Tuesday, I am grateful for the regulars with laptops, who, as Mr. Nakamura says, [[R4.7]].</p><p>I also have to agree with him that [[R4.8]]. Last winter, one man held a two-hour phone meeting at my window table without headphones, and three other customers left.</p><p>When I first set a limit, I asked people to leave once their two hours were up. Ms. Gallagher is right that [[R4.9]]: within a week, I had three one-star reviews. Now the rule is printed on a sign by the door, and I offer [[R4.10]] at the back, where anyone who wants to stay longer can sit. Nobody has complained since.</p>',
          blanks: [
            { id: 'R4.6', o: ['the busy Saturday and Sunday crowds', 'the price of rent in my neighbourhood', 'the number of outlets near the tables', 'the quiet hours on weekday mornings'] },
            { id: 'R4.7', o: ['keep the business going at quiet times', 'take tables away from families and groups', 'spend less than five dollars in an afternoon', 'come in only because their homes are small'] },
            { id: 'R4.8', o: ['a few careless users spoil it for everyone', 'remote workers should pay for electricity', 'laptops should be banned on weekends', 'most cafés charge too much for coffee'] },
            { id: 'R4.9', o: ['interrupting a visit tends to backfire', 'time limits never work in small cafés', 'posting rules at the door is a mistake', 'laptop users rarely read online reviews'] },
            { id: 'R4.10', o: ['one large table shared by laptop users', 'unlimited coffee for a small hourly fee', 'a discount for customers who leave early', 'free access to the outlets I had covered'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Your nine-year-old son plays in your local minor hockey association. You paid the $650 registration fee online in August, but your credit card was charged twice. Then, two weeks ago, his team\'s practices were moved from Wednesday evenings to Saturdays at 6:00 a.m. with no explanation. You have sent two emails about the double charge and received no reply. You also volunteer as the team\'s assistant coach and want to keep a good relationship with the association.</p><p>Write an email to the president of the association. In your email, do the following:</p><ul><li>Explain both problems and what you have already done about the payment.</li><li>Describe how the new practice time affects your family and others on the team.</li><li>Say what you would like the association to do, and suggest how you could help.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>A local family has donated 40 hectares of forest beside a lake to your town. The town council is asking residents how the land should be used. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Keep the land as a nature reserve with walking trails and a small parking lot. Wildlife habitat would be protected, but the reserve would earn no money, and the town would pay about $80,000 a year from property taxes to maintain it.' },
            { key: 'B', label: 'Option B', text: 'Build a town-run campground with 60 campsites and 10 rental cabins. It would bring in money and visitors for local businesses, but about a quarter of the forest would be cleared, and summer traffic on the lake road would increase.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood where you like to spend time, and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours and her husband have just had their first baby. For the next year, they will live on one income, and their rent is going up by $150 a month starting next month. They have never followed a budget before. Give your friend advice on how to manage their money during this year.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you were new somewhere, such as a city, a school or a job, and someone helped you settle in. What happened, how did their help make a difference, and what would you do differently if you were in that situation again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: WINTER },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the snowplow and the man who has just shovelled his driveway, the people on the rink, and the children in the park.', image: WINTER },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your sister are planning a two-night getaway with her two young children in late September. Choose the option you prefer. In the next section, you will need to persuade your sister that your choice is better.',
          choices: [
            { key: 'A', title: 'Tent camping in a provincial park', image: TENTSITE, facts: ['Campsite: $38 per night, firewood $10 a bundle', 'You must bring all the gear: tent, sleeping bags, stove', 'Washrooms and showers are 300 metres from the site', 'Rain is forecast for Saturday afternoon'] },
            { key: 'B', title: 'Rent a lake cottage', image: COTTAGE, facts: ['$290 per night, plus an $80 cleaning fee', 'Full kitchen, two bedrooms and a private dock', '3.5 hours of driving each way', 'Cancellation is free only up to 30 days before'] }
          ],
          third: { key: 'C', title: 'Rustic forest cabin', image: CABIN, facts: ['$110 per night, sleeps four on bunk beds', 'No electricity: wood stove and lanterns', 'Reached by a 1-kilometre walking trail', 'Outhouse only, no running water'] },
          persuade: 'Your sister would prefer the rustic forest cabin. Persuade your sister that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Every Saturday morning, you volunteer at the help desk of your local public library. Yesterday, the volunteer coordinator asked you to train two new volunteers this Saturday, because the person who usually trains them is sick. However, you had already promised your brother that you would help him move to a new apartment that morning. He has rented a truck from 9:00 a.m. to noon, and you are the only person who can help him lift the heavy furniture.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to the volunteer coordinator. Explain why you cannot train the new volunteers this Saturday.</p><p><b>Option B:</b> Talk to your brother. Explain why you cannot help him move on Saturday morning.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your province is considering a law that would require large grocery stores to donate unsold food that is still safe to eat to food banks and charities, instead of throwing it away. Supporters say it would reduce waste and help families struggling with high food prices. Store owners reply that sorting, storing and transporting donations costs money that would be passed on to shoppers, and that food banks do not always have room for fresh food.</p><p>A provincial committee is asking residents for their views. Should large grocery stores be required to donate unsold food? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a hardware store and see this unusual snow shovel. Call your friend, whose 72-year-old father lives alone and has a short but steep driveway. Your friend wants to buy him something to make winter easier, and has a budget of $200. The battery for the grip and the lamp lasts about 40 minutes, and the shovel weighs 9 kilograms. Describe the shovel and explain whether you think your friend should buy it.', image: SHOVEL }
      ]
    }
  });
})();
