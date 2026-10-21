/* Rowe CELPIP Mock Exam: Test H content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty target: slightly harder than the real test (CLB 8 to 11).
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
  /* skate blades under a standing person drawn with person(x, y, {s}) */
  function skates(x, y, s) {
    s = s || 1;
    return '<g stroke="#5d6d7e" stroke-width="2" stroke-linecap="round"><line x1="' + (x - 11 * s) + '" y1="' + (y + 2) + '" x2="' + (x - 3 * s) + '" y2="' + (y + 2) + '"/><line x1="' + (x + 3 * s) + '" y1="' + (y + 2) + '" x2="' + (x + 11 * s) + '" y2="' + (y + 2) + '"/></g>';
  }

  var RINK = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An outdoor skating rink in a city park on a winter afternoon">';
    p += '<rect width="640" height="400" fill="#cfe2f3"/>';
    /* hills and evergreen trees */
    p += '<path d="M0 150 Q120 105 250 140 Q380 100 520 135 Q590 115 640 130 L640 170 L0 170z" fill="#e9f0f7"/>';
    p += '<g fill="#2f6b4f">' +
      '<polygon points="30,165 52,95 74,165"/><polygon points="80,165 98,110 116,165"/><polygon points="250,160 268,108 286,160"/>' +
      '<polygon points="440,160 460,100 480,160"/><polygon points="590,160 610,96 630,160"/></g>';
    p += '<g fill="#ffffff" opacity=".8"><polygon points="52,95 46,115 58,115"/><polygon points="460,100 454,118 466,118"/><polygon points="610,96 604,114 616,114"/></g>';
    p += '<rect y="160" width="640" height="240" fill="#f4f7fb"/>';
    /* the rink with boards */
    p += '<rect x="140" y="178" width="485" height="172" rx="60" fill="#dcefff" stroke="#8fa7bf" stroke-width="7"/>';
    p += '<line x1="383" y1="182" x2="383" y2="346" stroke="#d9534f" stroke-width="3" opacity=".6"/>';
    p += '<circle cx="383" cy="264" r="22" fill="none" stroke="#3d7cc9" stroke-width="2" opacity=".5"/>';
    /* open gate on the left boards and the ice cleaner coming in */
    p += '<rect x="134" y="208" width="14" height="46" fill="#f4f7fb"/>';
    p += '<rect x="92" y="206" width="96" height="44" rx="6" fill="#ffffff" stroke="#2e86c1" stroke-width="3"/>';
    p += '<rect x="150" y="190" width="30" height="20" rx="3" fill="#2e86c1"/>';
    p += person(165, 210, { s: .55, shirt: '#f39c12', skin: '#c98c64', hair: '#2a1b12' });
    p += '<rect x="92" y="236" width="96" height="10" fill="#2e86c1"/>';
    p += '<text x="128" y="230" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#1b4f72">ICE CLEANER</text>';
    p += '<circle cx="108" cy="252" r="8" fill="#333"/><circle cx="172" cy="252" r="8" fill="#333"/>';
    p += '<g stroke="#2e86c1" stroke-width="2"><line x1="66" y1="214" x2="84" y2="214"/><line x1="60" y1="226" x2="84" y2="226"/><line x1="66" y1="238" x2="84" y2="238"/></g>';
    /* fallen child and parent helping */
    p += '<g transform="translate(262 330) rotate(-90)">' + person(0, 0, { s: .6, shirt: '#e74c3c', skin: '#8d5a3b', hair: '#1d1410' }) + '</g>';
    p += '<g stroke="#d35400" stroke-width="2"><line x1="226" y1="306" x2="220" y2="298"/><line x1="236" y1="303" x2="236" y2="294"/><line x1="246" y1="306" x2="252" y2="298"/></g>';
    p += person(286, 332, { s: .85, arms: 'left', shirt: '#6a4fb0', skin: '#8d5a3b', hair: '#1d1410' }) + skates(286, 332, .85);
    /* couple skating hand in hand */
    p += person(330, 292, { s: .85, arms: 'right', shirt: '#16a085', skin: '#f0c9a6', hair: '#c49a42' }) + skates(330, 292, .85);
    p += person(370, 292, { s: .85, arms: 'left', shirt: '#c0392b', skin: '#e3b28b', hair: '#4a3020' }) + skates(370, 292, .85);
    /* skater going backward fast, about to bump into someone */
    p += person(398, 240, { s: .8, shirt: '#8e44ad', skin: '#d6a07a', hair: '#2a1b12' }) + skates(398, 240, .8);
    p += '<rect x="408" y="200" width="8" height="12" rx="2" fill="#333"/><line x1="404" y1="214" x2="410" y2="208" stroke="#d6a07a" stroke-width="3"/>';
    p += person(426, 242, { s: .8, arms: 'up', shirt: '#f1c40f', skin: '#a9714b', hair: '#120c08' }) + skates(426, 242, .8);
    p += '<g stroke="#7f8c8d" stroke-width="2" stroke-linecap="round"><line x1="444" y1="214" x2="466" y2="214"/><line x1="446" y1="224" x2="472" y2="224"/><line x1="444" y1="234" x2="464" y2="234"/></g>';
    /* hockey game on the right side */
    p += '<rect x="588" y="236" width="18" height="30" fill="none" stroke="#c0392b" stroke-width="3"/><g stroke="#c0392b" stroke-width="1" opacity=".6"><line x1="594" y1="236" x2="594" y2="266"/><line x1="600" y1="236" x2="600" y2="266"/><line x1="588" y1="251" x2="606" y2="251"/></g>';
    p += person(578, 274, { s: .7, arms: 'left', shirt: '#1f618d', skin: '#f0c9a6', hair: '#7a4a24' }) + skates(578, 274, .7);
    p += '<line x1="561" y1="249" x2="556" y2="274" stroke="#6b4a2a" stroke-width="3"/>';
    p += person(510, 290, { s: .75, arms: 'right', shirt: '#c0392b', skin: '#7a4b31', hair: '#120c08' }) + skates(510, 290, .75);
    p += '<line x1="528" y1="263" x2="542" y2="290" stroke="#6b4a2a" stroke-width="3"/>';
    p += person(480, 250, { s: .75, arms: 'right', shirt: '#1f618d', skin: '#e3b28b', hair: '#3b2a20' }) + skates(480, 250, .75);
    p += '<line x1="498" y1="223" x2="510" y2="250" stroke="#6b4a2a" stroke-width="3"/>';
    p += '<ellipse cx="552" cy="290" rx="5" ry="2.5" fill="#111"/>';
    /* hot chocolate stand outside the rink */
    p += '<rect x="14" y="300" width="112" height="62" fill="#a0522d"/>';
    p += '<path d="M8 300 L132 300 L122 280 L18 280z" fill="#e74c3c"/>';
    p += '<g fill="#ffffff"><path d="M38 280 L44 280 L42 300 L34 300z"/><path d="M66 280 L72 280 L72 300 L64 300z"/><path d="M94 280 L100 280 L102 300 L94 300z"/></g>';
    p += '<rect x="20" y="324" width="100" height="16" fill="#fdf2e9"/>';
    p += '<text x="70" y="336" font-size="9.5" text-anchor="middle" font-family="sans-serif" fill="#6e2c00">HOT CHOCOLATE</text>';
    p += person(70, 324, { s: .7, shirt: '#ffffff', skin: '#c98c64', hair: '#2a1b12' });
    p += person(150, 384, { s: .85, arms: 'right', shirt: '#2f8f83', skin: '#f2cfb0', hair: '#7a4a24' });
    p += '<rect x="166" y="347" width="8" height="10" rx="2" fill="#f4f1ea" stroke="#6e2c00"/>';
    p += '<path d="M168 343 q-3 -5 0 -9 M172 343 q3 -5 0 -9" stroke="#95a5a6" stroke-width="1.5" fill="none"/>';
    /* bench with someone tying skates */
    p += '<rect x="420" y="372" width="90" height="7" fill="#7d5a3c"/><rect x="426" y="379" width="5" height="14" fill="#555"/><rect x="498" y="379" width="5" height="14" fill="#555"/>';
    p += '<g transform="translate(456 392) rotate(18)">' + person(0, 0, { s: .8, sit: true, arms: 'down', shirt: '#d35400', skin: '#7a4b31', hair: '#120c08' }) + '</g>';
    p += '<rect x="436" y="386" width="16" height="7" rx="2" fill="#ffffff" stroke="#555"/>';
    /* lamp post and snowflakes */
    p += '<rect x="596" y="300" width="5" height="96" fill="#34495e"/><circle cx="598" cy="296" r="8" fill="#f7dc6f"/>';
    p += '<g fill="#ffffff">';
    [[40, 30], [120, 60], [200, 25], [300, 70], [350, 30], [420, 55], [500, 20], [560, 65], [620, 35], [260, 45]].forEach(function (f) { p += '<circle cx="' + f[0] + '" cy="' + f[1] + '" r="2.5"/>'; });
    p += '</g>';
    p += '</svg>';
    return p;
  })();

  var COOK = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#fbefe2"/><rect y="84" width="200" height="36" fill="#c9a27e"/><rect x="40" y="70" width="120" height="16" fill="#7f8c8d"/><circle cx="70" cy="78" r="5" fill="#e74c3c"/><circle cx="130" cy="78" r="5" fill="#e74c3c"/><rect x="58" y="44" width="50" height="26" rx="4" fill="#34495e"/><rect x="50" y="46" width="66" height="5" rx="2" fill="#2c3e50"/><path d="M70 40 q-5 -8 0 -16 M84 40 q-5 -8 0 -16 M98 40 q-5 -8 0 -16" stroke="#95a5a6" stroke-width="2" fill="none"/><rect x="132" y="40" width="26" height="14" fill="#ffffff" stroke="#bbb"/><circle cx="138" cy="36" r="8" fill="#ffffff" stroke="#bbb"/><circle cx="152" cy="36" r="8" fill="#ffffff" stroke="#bbb"/><text x="100" y="16" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#6e2c00">COOKING</text></svg>';
  var PHOTO = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e6eef7"/><polygon points="0,120 50,70 95,120" fill="#9fb2c6"/><polygon points="120,120 165,62 200,100 200,120" fill="#9fb2c6"/><rect x="58" y="44" width="84" height="54" rx="8" fill="#2c3e50"/><rect x="72" y="36" width="26" height="10" rx="2" fill="#2c3e50"/><circle cx="100" cy="71" r="20" fill="#5d6d7e"/><circle cx="100" cy="71" r="12" fill="#1b2631"/><circle cx="96" cy="67" r="4" fill="#aeb6bf"/><rect x="124" y="50" width="10" height="6" fill="#f7dc6f"/><text x="100" y="20" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1b4f72">PHOTOGRAPHY</text></svg>';
  var DANCE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#f3e6f7"/><rect y="100" width="200" height="20" fill="#b9770e"/>' +
    person(82, 100, { arms: 'right', shirt: '#8e44ad', skin: '#c98c64', hair: '#2a1b12' }) + person(122, 100, { arms: 'left', shirt: '#e74c3c', skin: '#f0c9a6', hair: '#7a4a24' }) +
    '<g fill="#6c3483"><circle cx="34" cy="48" r="5"/><rect x="38" y="28" width="2.5" height="21"/><circle cx="166" cy="58" r="5"/><rect x="170" y="38" width="2.5" height="21"/></g><text x="100" y="18" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#6c3483">DANCE</text></svg>';

  var COAT = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual winter coat on display in a store">';
    p += '<rect width="640" height="400" fill="#eef1f4"/><rect y="352" width="640" height="48" fill="#c8ccd2"/>';
    p += '<rect x="24" y="30" width="150" height="56" rx="6" fill="#ffffff" stroke="#c0c6cc"/><text x="99" y="54" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1b4f72">NEW THIS</text><text x="99" y="74" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1b4f72">WINTER</text>';
    /* display stand */
    p += '<rect x="316" y="22" width="8" height="22" fill="#7f8c8d"/>';
    /* hood with a light */
    p += '<path d="M282 76 Q282 30 320 30 Q358 30 358 76z" fill="#1e8449"/>';
    p += '<circle cx="320" cy="44" r="8" fill="#f7dc6f" stroke="#7d6608" stroke-width="2"/>';
    p += '<polygon points="312,44 250,20 250,70" fill="#f7dc6f" opacity=".45"/>';
    /* coat body and sleeves */
    p += '<path d="M270 78 L370 78 L392 250 L248 250z" fill="#239b56"/>';
    p += '<path d="M270 80 L236 110 L218 220 L242 224 L258 128z" fill="#1e8449"/>';
    p += '<path d="M370 80 L404 110 L422 220 L398 224 L382 128z" fill="#1e8449"/>';
    /* solar panel on the shoulder */
    p += '<g transform="rotate(-8 296 104)"><rect x="276" y="92" width="40" height="26" fill="#1f3b73" stroke="#7fa3d6" stroke-width="2"/><g stroke="#7fa3d6" stroke-width="1"><line x1="289" y1="92" x2="289" y2="118"/><line x1="302" y1="92" x2="302" y2="118"/><line x1="276" y1="105" x2="316" y2="105"/></g></g>';
    /* many zippers */
    p += '<g stroke="#d5d8dc" stroke-width="3" fill="none"><line x1="320" y1="80" x2="320" y2="250"/>' +
      '<line x1="340" y1="100" x2="362" y2="100"/><line x1="336" y1="124" x2="364" y2="124"/>' +
      '<line x1="226" y1="150" x2="248" y2="146"/><line x1="222" y1="180" x2="246" y2="176"/><line x1="394" y1="146" x2="416" y2="150"/><line x1="396" y1="176" x2="420" y2="180"/></g>';
    p += '<g fill="#bdc3c7"><rect x="316" y="140" width="8" height="10"/><rect x="358" y="96" width="6" height="8"/><rect x="360" y="120" width="6" height="8"/><rect x="244" y="142" width="6" height="8"/><rect x="242" y="172" width="6" height="8"/></g>';
    /* heated pockets */
    p += '<rect x="262" y="180" width="44" height="34" rx="4" fill="#e67e22"/><rect x="334" y="180" width="44" height="34" rx="4" fill="#e67e22"/>';
    p += '<text x="284" y="202" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#ffffff">HEAT</text><text x="356" y="202" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#ffffff">HEAT</text>';
    p += '<g stroke="#e74c3c" stroke-width="2" fill="none"><path d="M270 176 q-4 -6 0 -12 q4 -6 0 -12"/><path d="M298 176 q-4 -6 0 -12 q4 -6 0 -12"/><path d="M342 176 q-4 -6 0 -12 q4 -6 0 -12"/><path d="M370 176 q-4 -6 0 -12 q4 -6 0 -12"/></g>';
    /* sleeping bag that unrolls from the hem */
    p += '<path d="M248 250 L392 250 L410 348 L230 348z" fill="#5dade2"/>';
    p += '<g stroke="#2e86c1" stroke-width="2"><line x1="244" y1="272" x2="396" y2="272"/><line x1="240" y1="296" x2="400" y2="296"/><line x1="236" y1="320" x2="404" y2="320"/></g>';
    p += '<line x1="248" y1="250" x2="392" y2="250" stroke="#d5d8dc" stroke-width="4" stroke-dasharray="4 3"/>';
    p += '<text x="320" y="340" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1b4f72">SLEEPING BAG</text>';
    /* price tag on the sleeve */
    p += '<line x1="422" y1="220" x2="470" y2="250" stroke="#555" stroke-width="1.5"/>';
    p += '<path d="M466 238 L540 238 L540 288 L466 288 L456 263z" fill="#f6d55c" stroke="#b7950b" stroke-width="2"/><circle cx="468" cy="263" r="3" fill="#eef1f4"/>';
    p += '<text x="502" y="270" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#333">$389</text>';
    p += '</svg>';
    return p;
  })();

  window.MOCK_TESTS.push({
    id: 'H',
    title: 'Mock Test H',
    note: 'Original practice content in the CELPIP-General format. Written to be slightly harder than the real test.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#2e86c1', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#e8c39e', hair: '#120c08', shirt: '#d35400', style: 'bun' } },
        segments: [{
          lines: [
            ['OWEN', 'Hang on, Mei. Should I grab the umbrella? It\'s looking pretty grey out there.'],
            ['MEI', 'The forecast says the rain won\'t start until around four, and we\'ll be home from the bookstore long before that.'],
            ['OWEN', 'Forecasts aren\'t always right, though. It folds up small, so I\'ll just stick it in my backpack.'],
            ['MEI', 'Fair enough. As long as you\'re the one carrying it.']
          ],
          questions: [
            { id: 'LP.1', q: 'What does Owen decide to do?', o: ['Take the umbrella just in case', 'Leave the umbrella at home', 'Wait until the rain stops at four', 'Buy an umbrella at the bookstore'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { KWAME: { name: 'Kwame', g: 'm', skin: '#5c3a24', hair: '#0f0a07', shirt: '#4a6d8c', style: 'short' }, MARISOL: { name: 'Marisol', g: 'f', skin: '#d6a07a', hair: '#2a1b12', shirt: '#b03a2e', style: 'long' } },
          segments: [
            {
              lines: [
                ['KWAME', 'Marisol, have you been up to the fifth floor yet? The furniture truck showed up about twenty minutes ago.'],
                ['MARISOL', 'Not yet, I\'ve been stuck sorting out parking passes. Please tell me it\'s all set up. We\'ve got twenty-six people walking in at one o\'clock.'],
                ['KWAME', 'Well... it\'s set up. Just not with our furniture. There are tall stools and little round café tables everywhere. Honestly, it looks like a coffee shop. No desks, no proper chairs.'],
                ['MARISOL', 'You\'re joking. Did somebody change the order without telling us?'],
                ['KWAME', 'That was my first thought too, but no. Our order number\'s on the paperwork, but the packing slip is addressed to some law firm over in Dartmouth. My guess is the warehouse put the two orders on the wrong trucks.'],
                ['MARISOL', 'Which means that firm is probably staring at twenty-six of our desks right now.'],
                ['KWAME', 'Probably. And the driver says he can\'t take anything back until his dispatcher signs off, but the dispatcher isn\'t picking up.'],
                ['MARISOL', 'Okay. Deep breath. It\'s half past nine, so we still have some time. Not a lot, but some.']
              ],
              questions: [
                { id: 'L1.1', q: 'What most likely caused the problem?', o: ['The supplier mixed up two customers\' orders.', 'Someone changed the order without telling them.', 'The law firm cancelled its own order at the last minute.', 'The driver unloaded the order on the wrong floor.'] },
                { id: 'L1.2', q: 'Why can\'t the driver fix the situation right away?', o: ['He needs approval he has not yet received.', 'His truck is already full with another order.', 'He does not know where the law firm is located.', 'He has to finish a delivery in Dartmouth first.'] },
                { id: 'L1.3', q: 'What does Marisol mean when she says "Not a lot, but some"?', o: ['The situation is urgent but not yet hopeless.', 'Only some of the staff will arrive at one.', 'Some of the furniture can probably be used.', 'She expects the dispatcher to call back soon.'] }
              ]
            },
            {
              lines: [
                ['MARISOL', 'Right. I\'m going to skip the dispatcher and call the supplier\'s customer service line myself. Somebody there must be able to sort this out.'],
                ['KWAME', 'Worth a try. But let\'s be realistic. Even if they track down our desks, there\'s no way they\'ll get them here today.'],
                ['MARISOL', 'No, probably not. So the real question is what twenty-six people do this afternoon. They can\'t just stand around holding their boxes.'],
                ['KWAME', 'Well, we\'ve still got the old office until Friday. Couldn\'t people stay there one more day?'],
                ['MARISOL', 'In theory. But the movers brought nearly all the computers across this morning. Hauling them back for one day? I don\'t think so.'],
                ['KWAME', 'Fair. Okay, what about using what we\'ve got? Those café tables aren\'t that bad. Most people could manage with a laptop for a day or two.'],
                ['MARISOL', 'Actually, that\'s not a terrible idea. Except for finance. They work on two big monitors all day. They\'d never cope at a café table. But the training room on six already has twelve desks set up.'],
                ['KWAME', 'So finance goes up to the training room, and everyone else roughs it at the café tables. I\'ll get security to unlock the training room. They\'ve got the only key.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Marisol reject Kwame\'s first suggestion?', o: ['Moving everything back would be too much work.', 'The lease on the old office has already ended.', 'The staff have already packed their boxes.', 'The movers will not be available until Friday.'] },
                { id: 'L1.5', q: 'What is Marisol\'s opinion of the café tables?', o: ['They will do for most staff, but not for everyone.', 'They are fine for all staff for a day or two.', 'They look too much like a coffee shop to use.', 'They should be sent back to the supplier first.'] },
                { id: 'L1.6', q: 'What will Kwame most likely do next?', o: ['Contact building security', 'Call the supplier\'s customer service line', 'Set up laptops at the café tables', 'Carry the finance team\'s monitors upstairs'] }
              ]
            },
            {
              lines: [
                ['MARISOL', 'Good news, for once. I got through to a supervisor. She checked, and yes, the law firm got our order and we got theirs. They\'re swapping both deliveries tomorrow morning at eight.'],
                ['KWAME', 'Eight tomorrow? Honestly, I was bracing myself for next week. Are they charging us for the second delivery?'],
                ['MARISOL', 'Nope. And she\'s taking fifteen percent off our invoice for the trouble. The order came to twelve thousand dollars, so that\'s eighteen hundred back.'],
                ['KWAME', 'Not bad, all things considered. Do we tell people now, or let them find out when they get here?'],
                ['MARISOL', 'Now. I\'ll send an email before lunch so nobody walks in and panics. Could you stick a sign by the elevators telling finance to head up to six?'],
                ['KWAME', 'I\'m on it.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will the company save on its invoice?', o: ['$1,800', '$1,200', '$1,500', '$12,000'] },
                { id: 'L1.8', q: 'How does Kwame feel about the supplier\'s solution?', o: ['It is faster than he had expected.', 'It comes too late to help the staff today.', 'It is not generous enough for the trouble.', 'It depends on the law firm agreeing to it.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Check-in agent', g: 'f', skin: '#f2cfb0', hair: '#b5651d', shirt: '#1f618d', style: 'bun' }, TARIQ: { name: 'Tariq', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#7d6608', style: 'short' } },
          segments: [{
            lines: [
              ['AGENT', 'Good morning. Where are you headed today?'],
              ['TARIQ', 'Morning. Winnipeg, on the ten-fifteen. Here\'s my passport.'],
              ['AGENT', 'Thank you. Go ahead and put your suitcase on the scale for me. Hmm. It\'s showing twenty-six kilos, and your fare includes one checked bag up to twenty-three.'],
              ['TARIQ', 'Twenty-six? I weighed it on my bathroom scale last night and it said twenty-two. I guess I can\'t trust that thing.'],
              ['AGENT', 'You\'d be surprised how often I hear that. So, you have a few choices. I can charge the overweight fee, which is seventy-five dollars. Or you can check a second bag for forty, if you have something to split it into. Or you take out three kilos, and there\'s no charge at all.'],
              ['TARIQ', 'I don\'t have a second bag, but I\'ve got this backpack as my carry-on. Could I just move some things into it?'],
              ['AGENT', 'Sure, as long as the backpack stays under ten kilos and you don\'t move any liquids over a hundred millilitres into it.'],
              ['TARIQ', 'No liquids. The heavy stuff is a stack of textbooks and my winter boots. The books can go in the backpack, and I\'ll wear the boots. It\'s minus fifteen in Winnipeg anyway.'],
              ['AGENT', 'That\'s probably your best plan. Could you step over to that table by the window to repack? That way I can keep the line moving. When you\'re done, come straight back to me. You won\'t have to queue again.'],
              ['TARIQ', 'Perfect. Thanks, I really appreciate it.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is Tariq\'s problem?', o: ['His suitcase is heavier than his fare allows.', 'His backpack contains too many liquids.', 'His fare does not include a checked bag.', 'His flight to Winnipeg has been delayed.'] },
              { id: 'L2.2', q: 'What does Tariq conclude about the difference in weight?', o: ['His scale at home is not accurate.', 'He added more things after weighing the bag.', 'The scale at the airport needs repair.', 'His textbooks are heavier than he thought.'] },
              { id: 'L2.3', q: 'If Tariq had a second bag, how much less would he pay than the overweight fee?', o: ['$35', '$40', '$75', '$115'] },
              { id: 'L2.4', q: 'Why does Tariq choose to wear his boots?', o: ['He will need them where he is going.', 'They do not fit inside his backpack.', 'The agent tells him that he must.', 'Boots are not allowed in carry-on bags.'] },
              { id: 'L2.5', q: 'Why does the agent send Tariq to the table by the window?', o: ['So other passengers are not kept waiting', 'So she can weigh his backpack there', 'So he can join the line again afterward', 'So security can inspect his liquids'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#7a4b31', hair: '#1d1410', shirt: '#7d3c98', style: 'curly' }, MATEO: { name: 'Mateo Fernandes', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#2874a6', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Mateo Fernandes, a third-year apprentice electrician. Mateo, thanks for coming in. How did you end up in the trades?'],
              ['MATEO', 'Thanks for having me. Honestly, it wasn\'t the plan. After high school I worked in a phone store for six years. I liked the customers, but I never felt like I was actually building anything. Then I spent a weekend helping a friend, who\'s an electrician, wire his garage, and I was hooked.'],
              ['HOST', 'So how does an apprenticeship actually work?'],
              ['MATEO', 'Most of the learning happens on the job. You work under a licensed electrician, what we call a journeyperson, and you log your hours. Then about once a year you go back to college for roughly eight weeks of classroom training. From start to finish it\'s around four years.'],
              ['HOST', 'And you\'re paid during all of that?'],
              ['MATEO', 'Yes, that\'s the best part. You start at about half of a journeyperson\'s wage, and it goes up every time you pass a level. So I\'m not going to finish with a huge student loan hanging over me.'],
              ['HOST', 'What surprised you most?'],
              ['MATEO', 'Honestly, the math. People assume the trades are for kids who didn\'t do well in school, but I use formulas every single day. And the electrical code book is about as thick as an old phone book. You have to read it really carefully, because one mistake can start a fire.'],
              ['HOST', 'What\'s the toughest part of the job?'],
              ['MATEO', 'Probably winter. On a new construction site, the heat usually isn\'t on yet, so you\'re pulling wire in a freezing building at seven in the morning, and your fingers go numb. Good gloves help. You get used to it. Mostly.'],
              ['HOST', 'What would you say to someone who\'s thinking about it?'],
              ['MATEO', 'Don\'t just apply blindly. Take a short pre-apprenticeship course, or ask to shadow someone for a day. You\'ll find out pretty fast whether you like the work. And look for a patient mentor. Mine has made all the difference.'],
              ['HOST', 'And where do you see yourself in five years?'],
              ['MATEO', 'Licensed, hopefully, and specializing in solar installations. I think the demand is only going to grow.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why did Mateo leave his previous job?', o: ['He wanted work where he could make something.', 'He did not enjoy dealing with customers.', 'His friend offered him a job as an electrician.', 'The phone store closed after six years.'] },
              { id: 'L3.2', q: 'How is an apprenticeship mainly organized?', o: ['Mostly paid work, plus yearly classroom blocks', 'Mostly classroom study, plus summer jobs', 'Four years of full-time college courses', 'Eight weeks of training, then a licence'] },
              { id: 'L3.3', q: 'What advantage of an apprenticeship does Mateo point out?', o: ['He can train without building up much debt.', 'He earns the same wage as a journeyperson.', 'He can finish his training in eight weeks.', 'He can choose his own working hours.'] },
              { id: 'L3.4', q: 'Why does Mateo mention the electrical code book?', o: ['To challenge a common belief about the trades', 'To explain why he did poorly in school', 'To complain about the cost of course materials', 'To describe how most electrical fires begin'] },
              { id: 'L3.5', q: 'What is Mateo\'s attitude toward working in winter?', o: ['It is unpleasant, but he has mostly adjusted.', 'It may be the reason he leaves the trade.', 'It is easy once you buy good gloves.', 'It is less difficult than the math.'] },
              { id: 'L3.6', q: 'What does Mateo recommend to people considering the trade?', o: ['Test whether they enjoy the work before committing', 'Apply to as many programs as possible at once', 'Choose a mentor who also teaches at a college', 'Plan to specialize in solar work from the start'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#2e4053', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Harbourton city council has approved new rules for short-term rentals, the homes and suites that visitors book online for a few nights at a time. The rules take effect on April first.'],
              ['NEWS', 'Under the new bylaw, owners may rent out a property for short stays only if it is their principal residence, meaning the place where they live for most of the year. Investors who own several units will no longer be allowed to list them for short stays.'],
              ['NEWS', 'Every host will also need a business licence, which will cost two hundred and fifty dollars a year. The licence number must appear in every online listing.'],
              ['NEWS', 'Councillor Denise Arsenault, who led the change, estimates that about four hundred homes in the city are currently rented to visitors full time. She stresses that the council is not against tourism. Instead, she says, the goal is to return some of those homes to residents, at a time when fewer than one in a hundred rental apartments in Harbourton is vacant.'],
              ['NEWS', 'Not everyone is pleased. Raymond Choi rents out the basement suite of the house he lives in, and he says the income helps him pay his mortgage. He supports limits on investors, but he worries that the yearly fee and the paperwork will push small hosts like him out of the market.'],
              ['NEWS', 'Hosts who break the rules could be fined up to one thousand dollars per day. The city says it will hire two additional inspectors to enforce the bylaw.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Limits on who may rent homes to visitors', 'A shortage of hotel rooms for tourists', 'A new tax on long-term rental apartments', 'Rising mortgage costs for local homeowners'] },
              { id: 'L4.2', q: 'Under the bylaw, who can no longer offer short stays?', o: ['Owners renting out homes they do not live in', 'Owners renting out a suite in their own home', 'Hosts who rent for more than a few nights', 'Hosts who post their listings online'] },
              { id: 'L4.3', q: 'What is Councillor Arsenault\'s main reason for the rules?', o: ['To make more homes available to residents', 'To reduce the number of tourists in the city', 'To raise money through the new licence fees', 'To protect local hotels from online competition'] },
              { id: 'L4.4', q: 'What can be inferred about Raymond Choi?', o: ['His suite meets the residence requirement.', 'He will have to stop renting his suite in April.', 'He owns several rental units in the city.', 'He opposes any limits on short-term rentals.'] },
              { id: 'L4.5', q: 'How does the city plan to make sure hosts follow the rules?', o: ['By adding inspection staff', 'By removing all online listings', 'By charging a daily licence fee', 'By asking neighbours to report hosts'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Grade 7: Term 1 conferences', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { TEACHER: { name: 'Ms. Desjardins (teacher)', g: 'f', skin: '#f0c9a6', hair: '#4a3020', shirt: '#34495e', style: 'long' }, AMARA: { name: 'Amara (mother)', g: 'f', skin: '#5c3a24', hair: '#0f0a07', shirt: '#c0392b', style: 'curly' }, FEMI: { name: 'Femi (father)', g: 'm', skin: '#4a2e1c', hair: '#0f0a07', shirt: '#117a65', style: 'bald' } },
          segments: [{
            lines: [
              ['TEACHER', 'Thanks for coming in, both of you. Let me start with the good news. Tobi\'s science project on wind turbines was one of the strongest in the class. He got ninety-two percent, and his explanation to the class was really clear.'],
              ['AMARA', 'Oh, that\'s wonderful. He spent weeks on that thing in our garage.'],
              ['TEACHER', 'It showed. Math is where I\'m concerned, though. His mark has slipped from a B-plus in October to a C. And it isn\'t that he doesn\'t understand the material. On tests, he does fine. The problem is homework. He\'s missing five of the last twelve assignments.'],
              ['AMARA', 'Five? But every night he tells us he finished his homework at school.'],
              ['FEMI', 'I think I know what\'s going on. He has basketball practice four nights a week now. By the time he\'s home and has eaten, it\'s nine o\'clock. Honestly, maybe he needs to take a break from basketball until his marks come back up.'],
              ['TEACHER', 'I understand, and of course that\'s your decision. But I\'d be careful. Basketball is a big part of why he enjoys coming to school. On game days, he\'s actually one of the most focused students in my class.'],
              ['FEMI', 'Hmm. So what would you suggest instead?'],
              ['TEACHER', 'We run a free homework club in the library on Tuesdays and Thursdays, from three-fifteen to four-fifteen. There\'s always a teacher there to help. His practice doesn\'t start until five, so he could manage both.'],
              ['AMARA', 'That could work. But how would we know whether he\'s actually doing the work?'],
              ['TEACHER', 'Every Friday, I post the coming week\'s assignments on the school\'s online portal, with due dates. It also shows what\'s been handed in. If you check it on the weekend, there won\'t be any surprises.'],
              ['AMARA', 'Then I\'ll check it every Sunday night, and we\'ll sit down with him and plan out the week.'],
              ['FEMI', 'All right. We\'ll keep basketball for now. But if his math mark hasn\'t improved by the February report card, we\'ll have to revisit it.'],
              ['TEACHER', 'That sounds fair. Let\'s book another meeting in January to see how it\'s going. And I\'ll let Tobi know we spoke, so he doesn\'t feel anything is happening behind his back.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To review Tobi\'s progress and agree on a plan', 'To choose a topic for Tobi\'s next science project', 'To discuss moving Tobi to another math class', 'To complain about the basketball practice schedule'] },
              { id: 'L5.2', q: 'What does the teacher suggest about Tobi\'s ability in math?', o: ['It is better than his current mark shows.', 'It has not kept up with the new material.', 'It is stronger in homework than on tests.', 'It is behind most of the class this term.'] },
              { id: 'L5.3', q: 'What can be inferred from Amara\'s reaction to the missing assignments?', o: ['Tobi has been misleading his parents.', 'The teacher had already emailed the parents.', 'Amara checks Tobi\'s homework every night.', 'Tobi left his finished work at home.'] },
              { id: 'L5.4', q: 'Why does Femi think Tobi is falling behind?', o: ['He has little free time left after practice.', 'He finds the math homework too difficult.', 'He spent too long on his science project.', 'He would rather watch basketball at home.'] },
              { id: 'L5.5', q: 'What is the teacher\'s attitude toward Femi\'s idea?', o: ['She accepts it is his choice but advises against it.', 'She agrees that basketball should stop for now.', 'She insists that Tobi must stay on the team.', 'She thinks Tobi should make the decision alone.'] },
              { id: 'L5.6', q: 'Why is the homework club a practical option for Tobi?', o: ['It finishes before his practice begins.', 'It is held on his days off from practice.', 'It is run by his basketball coach.', 'It replaces two practices each week.'] },
              { id: 'L5.7', q: 'What will Amara do each week?', o: ['Check the portal and plan the week with Tobi', 'Email the teacher to ask about missing work', 'Attend the homework club together with Tobi', 'Post Tobi\'s assignments on the school portal'] },
              { id: 'L5.8', q: 'Under what condition might Tobi have to stop playing basketball?', o: ['His math mark is no better by February.', 'The January meeting does not go well.', 'He misses the homework club on Tuesdays.', 'He hands in fewer than twelve assignments.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Volunteer hours to graduate?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#943126', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Some Canadian high schools already require students to complete a set number of community service hours before they can graduate, and several more school boards are now considering the idea. The debate has revealed sharp differences of opinion.'],
              ['NARR', 'Supporters say the requirement connects teenagers with their communities in ways a classroom cannot. Leila Haddad, who coordinates volunteers at a large food bank, says that many students who first arrive simply to finish their forty required hours keep coming back long after the hours are done.'],
              ['NARR', 'She adds that volunteering gives young people references and real experience to list on their first job applications. That matters most, she says, for students whose families have no connections in the working world.'],
              ['NARR', 'Critics argue that compulsory volunteering defeats its own purpose. Professor Graham Whitfield, who studies youth employment, says that once service is required, many students treat it as a box to tick, choosing whatever is quickest rather than something that genuinely interests them.'],
              ['NARR', 'He also raises a question of fairness. Students who work part-time to help support their families, or who look after younger brothers and sisters, may struggle to find spare hours, while students from wealthier homes can fit them in easily. Whitfield would rather see schools recognize volunteering through awards or optional credits than make it mandatory.'],
              ['NARR', 'Haddad replies that the scheduling problem can be solved if students are allowed to complete their hours gradually over four years, including during the summer. The local school board says it will gather feedback from students and parents this spring before making a decision.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether service hours should be needed to graduate', 'How food banks attract and keep young volunteers', 'Why teenagers find it hard to get part-time work', 'Whether students should earn credits for sports'] },
              { id: 'L6.2', q: 'What does Haddad\'s comment about returning students suggest?', o: ['Required service can grow into real interest.', 'Students rarely finish their required hours.', 'Food banks rely mainly on student volunteers.', 'Students prefer volunteering to paid work.'] },
              { id: 'L6.3', q: 'According to Haddad, why is volunteering especially useful for some students?', o: ['It gives them something to show future employers.', 'It earns them extra high school credits.', 'It helps them pay their family\'s bills.', 'It leads directly to paid food bank jobs.'] },
              { id: 'L6.4', q: 'What is Professor Whitfield\'s main objection?', o: ['Making service compulsory weakens its value.', 'Volunteering takes time away from studying.', 'Food banks do not teach students useful skills.', 'Schools cannot supervise students who volunteer.'] },
              { id: 'L6.5', q: 'What fairness problem does Whitfield describe?', o: ['Family duties leave some students with less free time.', 'Rural students live too far from volunteer sites.', 'Wealthier students are given the easier volunteer placements.', 'Older students are required to do more hours.'] },
              { id: 'L6.6', q: 'Which policy would Whitfield most likely support?', o: ['An award for students who choose to volunteer', 'An increase in the number of required hours', 'A rule excusing working students from homework', 'A plan letting students finish hours in summer'] }
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
          passage: '<h3>Message</h3><p>Hi Ahmed,</p><p>I hope you and Farah are enjoying the summer. I am writing because a few of us on Larch Crescent have been talking about holding a block party this year, and I am hoping you will help me get it off the ground.</p><p>The plan is to close the street on Saturday, August 16, from noon until six. If the weather is bad, we will move everything to the following Saturday. To close the street, we need a permit from the city. The application costs only forty dollars, but it must include signatures from at least sixty percent of the households on the street. There are twenty-five homes on Larch, so we need fifteen signatures. So far I have nine, and the form is due at City Hall by July 25.</p><p>You may remember the potluck we tried in the park two summers ago. Everyone was generous, but we ended up with eleven desserts and almost nothing else. This time I will put a sign-up sheet on my porch so that people can choose a category: salads, main dishes, desserts or drinks.</p><p>Now for my requests. First, could you and Farah sign the petition? I will drop it off on Thursday evening. Second, I remember the big gas barbecue you used for your son\'s graduation. Would you be willing to lend it for the afternoon? I will make sure someone who knows what they are doing is in charge of it. Finally, you have already met the two new families at the end of the street, and I have not yet had a chance to introduce myself. Would you mind mentioning the party to them?</p><p>I would also love some ideas for the children. I was thinking about a sidewalk chalk contest, but I am open to anything.</p><p>Thanks so much,<br>Rosalind (number 14)</p>',
          questions: [
            { id: 'R1.1', q: 'If the weather is poor on August 16, the party will', o: ['be held one week later.', 'move to the park instead.', 'be cancelled for this year.', 'start later in the afternoon.'] },
            { id: 'R1.2', q: 'Before the deadline, Rosalind still needs signatures from', o: ['six more households.', 'nine more households.', 'fifteen more households.', 'sixty percent more households.'] },
            { id: 'R1.3', q: 'Rosalind mentions the earlier potluck to explain why she', o: ['is organizing the food differently.', 'wants to hold the party in the street.', 'needs a permit from the city.', 'would like to borrow a barbecue.'] },
            { id: 'R1.4', q: 'About the barbecue, Rosalind promises that', o: ['an experienced person will operate it.', 'Ahmed\'s son will be in charge of it.', 'she will return it before the evening.', 'she will pay for the gas it uses.'] },
            { id: 'R1.5', q: 'Rosalind asks Ahmed to speak to the new families because', o: ['she has not met them yet.', 'they live next door to her.', 'they have asked about the party.', 'they have children in the contest.'] },
            { id: 'R1.6', q: 'The main purpose of Rosalind\'s message is to', o: ['ask a neighbour for several kinds of help.', 'invite a neighbour to a potluck in the park.', 'complain about the cost of a city permit.', 'welcome new families to the street.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Rosalind,</p><p>What a great idea! Farah and I will happily sign. We are home on Thursday evening, so [[R1.7]] whenever it suits you. With our household on the list, you will only need [[R1.8]] more before the deadline.</p><p>You are welcome to the barbecue, but to be honest, I would rather [[R1.9]] myself. It can be tricky to light, and I know its habits. Farah also says we can lend you folding tables and chairs if you need more places for people to sit. We have six of each in the garage.</p><p>By coincidence, I spoke to both new families yesterday. The Kowalskis have three young children, so they loved the [[R1.10]] and even offered to buy the supplies. The other family, the Osei-Martins, said they will bring a big salad.</p><p>One concern: our daughter is getting married on August 23, so if the party is moved because of rain, we [[R1.11]]. Let us hope for sunshine!</p><p>Ahmed</p>',
          blanks: [
            { id: 'R1.7', o: ['just knock on our door', 'leave it in our mailbox', 'send it to City Hall', 'put it on your porch'] },
            { id: 'R1.8', o: ['five', 'six', 'four', 'fifteen'] },
            { id: 'R1.9', o: ['be in charge of it', 'buy a new one', 'leave it at home', 'lend it to my son'] },
            { id: 'R1.10', o: ['chalk contest idea', 'dessert table idea', 'sign-up sheet idea', 'rain date idea'] },
            { id: 'R1.11', o: ['will not be able to come', 'can host it in our yard', 'will bring extra desserts', 'will apply for a new permit'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Eastwood Community College: Fall Evening Courses</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Course</th><th>Day and time</th><th>Starts</th><th>Weeks</th><th>Tuition</th><th>Materials</th></tr></thead><tbody>' +
            '<tr><td>Conversational French I</td><td>Monday 6:30 to 8:30 p.m.</td><td>Sept. 15</td><td>10</td><td>$220</td><td>$35 (book)</td></tr>' +
            '<tr><td>Spreadsheets for Small Business</td><td>Monday 7:00 to 9:00 p.m.</td><td>Sept. 15</td><td>6</td><td>$180</td><td>None</td></tr>' +
            '<tr><td>Introduction to Bookkeeping</td><td>Tuesday and Thursday 7:00 to 9:00 p.m.</td><td>Sept. 16</td><td>8</td><td>$340</td><td>None</td></tr>' +
            '<tr><td>Digital Photography Basics</td><td>Wednesday 6:00 to 9:00 p.m.</td><td>Sept. 17</td><td>6</td><td>$260</td><td>$40 (lab fee)</td></tr>' +
            '<tr><td>Home Renovation Skills</td><td>Thursday 6:30 to 9:30 p.m.</td><td>Sept. 18</td><td>8</td><td>$310</td><td>$75 (supplies)</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Early registration: register on or before August 31 and take 10% off tuition. The discount does not apply to materials.</li><li>Seniors (65 and over) pay 50% of tuition. This cannot be combined with the early registration discount.</li><li>A course with fewer than 8 registered students one week before its start date will be cancelled, and all fees will be refunded.</li><li>Parking: $5 per evening, or $60 for a term pass.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dana,</p><p>I finally went through Eastwood\'s fall evening courses. My first choice was bookkeeping for the catering business, but since I work late every Tuesday, I have decided on [[R2.1]] instead. It is only six weeks long, and it should still help with our invoices. The downside is that I will have to give up on [[R2.2]] this fall, because the two class times overlap.</p><p>I am registering this week, well before the end of August, so my tuition will come to [[R2.3]]. I will drive, but a term pass does not make sense for such a short course. Paying each evening, parking will cost me [[R2.4]] in total.</p><p>Your mom asked me about Digital Photography. Since she is 68, she qualifies for the seniors\' rate, so including the lab fee she will pay [[R2.5]].</p><p>Talk soon,<br>Lena</p>',
          blanks: [
            { id: 'R2.1', o: ['Spreadsheets for Small Business', 'Introduction to Bookkeeping', 'Home Renovation Skills', 'Digital Photography Basics'] },
            { id: 'R2.2', o: ['French', 'bookkeeping', 'photography', 'renovation'] },
            { id: 'R2.3', o: ['$162', '$180', '$144', '$171'] },
            { id: 'R2.4', o: ['$30', '$60', '$12', '$40'] },
            { id: 'R2.5', o: ['$170', '$157', '$130', '$300'] }
          ],
          questions: [
            { id: 'R2.6', q: 'The course with the most class hours in total is', o: ['Introduction to Bookkeeping.', 'Home Renovation Skills.', 'Conversational French I.', 'Digital Photography Basics.'] },
            { id: 'R2.7', q: 'If only six students have registered for Home Renovation Skills by September 11,', o: ['the course will be cancelled and fees returned.', 'the course will start one week later than planned.', 'the six students will pay a higher tuition fee.', 'the students will pay only for their supplies.'] },
            { id: 'R2.8', q: 'A person aged 40 who registers early for Home Renovation Skills will pay, including supplies,', o: ['$354.', '$385.', '$346.50.', '$279.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>How Habits Take Hold</h3><p><b>A.</b> Psychologists usually describe a habit as a simple loop. First comes a cue, such as a time of day, a place or a feeling. The cue triggers a routine, which is the behaviour itself, and the routine is followed by a reward that makes the brain more likely to repeat the sequence next time. Over many repetitions, control of the behaviour gradually shifts to parts of the brain that work largely outside conscious awareness. This is efficient: one frequently quoted estimate suggests that around forty percent of what people do each day is done out of habit, which leaves attention free for decisions that genuinely require it.</p><p><b>B.</b> A popular claim holds that a new habit takes twenty-one days to form. The figure appears to trace back to a 1960s book by a surgeon who noticed that patients needed about three weeks to adjust to changes in their appearance, an observation that had nothing to do with habits. When researchers in London followed volunteers who were trying to adopt a daily behaviour, such as drinking a glass of water with lunch, the average time before it felt automatic was sixty-six days, with individuals ranging from eighteen days to more than eight months. Encouragingly, missing an occasional day made little difference to the final result.</p><p><b>C.</b> Because willpower is unreliable, experts recommend designing habits that demand as little of it as possible. One approach is to attach a new behaviour to an existing one: "After I pour my morning coffee, I will write in my journal for two minutes." Another is to reduce the effort needed to begin. Someone who wants to run in the morning might lay out running clothes the night before, while a person hoping to eat better might keep washed fruit at eye level in the fridge. Starting with a version of the habit so small that it seems almost pointless can also help, since consistency matters more than intensity in the early weeks.</p><p><b>D.</b> Breaking an unwanted habit is generally harder than building a new one. Research suggests that old habits are not erased but remain stored, ready to return, which explains why people often slip back into them during periods of stress or fatigue. Rather than relying on resistance alone, specialists advise replacing the routine while keeping the cue and the reward, for example taking a short walk instead of snacking when work becomes frustrating. Adding obstacles also works: leaving a phone in another room makes late-night scrolling far less tempting.</p>',
          questions: [
            { id: 'R3.1', q: 'A well-known number about habit formation came from an observation unrelated to habits.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'At first, doing a tiny amount regularly may matter more than doing a lot.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Behaviour that runs automatically allows the mind to focus on other choices.', fixed: true, a: 'A' },
            { id: 'R3.4', q: 'Being tired can lead people back to behaviour they had tried to give up.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'People who record their progress in a journal are more likely to succeed.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'The time needed to form a habit differs widely between individuals.', fixed: true, a: 'B' },
            { id: 'R3.7', q: 'Making an unwanted activity less convenient can help a person resist it.', fixed: true, a: 'D' },
            { id: 'R3.8', q: 'An emotion can be the signal that sets off a habitual behaviour.', fixed: true, a: 'A' },
            { id: 'R3.9', q: 'Connecting a new action to an established part of the day is recommended.', fixed: true, a: 'C' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Can Electric Cars Handle a Canadian Winter?</h3><p>Every winter, the same question comes up in online forums and around kitchen tables: can an electric car really cope with a Canadian winter? Sales of electric vehicles have climbed steadily in recent years, yet many drivers in colder regions still hesitate. Prices have fallen as more models reach the market, so for many buyers the price is no longer the main concern. The cold is. The answer, it turns out, depends a great deal on who is driving, and where.</p><p>Dr. Yusuf Rahimi, an energy researcher who has tested vehicles at temperatures as low as minus thirty, believes the fears are often exaggerated. "Yes, batteries lose range in the cold. At minus twenty, a typical car might travel about thirty percent less than it does in summer," he explains. "But most Canadians drive less than fifty kilometres a day. Even with that loss, they are well within the range of almost any model." He points out that newer cars use heat pumps, which warm the cabin far more efficiently than older heaters, and that owners can heat the car while it is still plugged in, so the battery is not drained before the trip begins. Rahimi adds that electric cars have one surprising winter advantage: they start instantly, without the struggle of a cold engine.</p><p>Colleen Mackay sees things differently. She works as a home-care nurse in rural northern Manitoba and drives about two hundred kilometres on a typical day, often on roads where the nearest charging station is an hour away. "On a minus-thirty morning, I cannot afford to wonder whether I will make it home," she says. Mackay also notes that a cold battery accepts a charge more slowly, so a stop that takes thirty minutes in July can take more than an hour in January. For drivers like her, she argues, a hybrid, which can fall back on gasoline, is the more realistic choice for now. She also points out that on long, dark winter drives, the heater and headlights draw power for hours, which shortens the range even further.</p><p>Both agree that location matters. Rahimi admits that people living in apartments, without a parking spot near an electrical outlet, face a real challenge, since charging overnight at home is what makes winter ownership easy. Mackay, for her part, says she would gladly consider an electric car once charging stations in the north become more common. "I am not against the technology," she says. "I just need it to reach the places where I work."</p>',
          questions: [
            { id: 'R4.1', q: 'The first paragraph suggests that whether electric cars suit Canadian winters', o: ['depends on each driver\'s situation.', 'has been settled by rising sales.', 'is mainly discussed by researchers.', 'depends mostly on the price of the car.'] },
            { id: 'R4.2', q: 'Dr. Rahimi argues that winter range loss matters less than people fear because', o: ['most daily trips are fairly short.', 'newer batteries no longer lose range.', 'charging on the road is now easy.', 'temperatures rarely reach minus twenty.'] },
            { id: 'R4.3', q: 'Heating the car while it is plugged in helps because', o: ['the battery\'s charge is saved for driving.', 'heat pumps work only when connected.', 'a warm engine starts more quickly.', 'the battery holds more charge in the cold.'] },
            { id: 'R4.4', q: 'Mackay mentions charging times to show that, in winter,', o: ['long trips become less predictable.', 'charging stations are poorly built.', 'hybrids charge faster than electric cars.', 'summer driving can also be difficult.'] },
            { id: 'R4.5', q: 'Rahimi and Mackay would most likely both agree that', o: ['location affects how practical an electric car is.', 'electric cars are not suitable for most Canadian drivers.', 'apartment dwellers should choose hybrids instead.', 'heat pumps have solved most winter problems.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I live in Edmonton and drive about twenty kilometres a day, so according to Dr. Rahimi, losing [[R4.6]] of my range on the coldest days would hardly affect me. I also liked learning that electric cars [[R4.7]], since my old car often refuses to start on January mornings.</p><p>However, I rent an apartment with [[R4.8]], so I face exactly the challenge he admits to. My sister is in a different position. Like Ms. Mackay, she drives long distances through the north for work, and I agree that for her a [[R4.9]] makes more sense today. Perhaps once there are [[R4.10]] along her routes, she will be ready to switch.</p>',
          blanks: [
            { id: 'R4.6', o: ['about a third', 'about half', 'about a tenth', 'nearly all'] },
            { id: 'R4.7', o: ['start right away', 'never need charging', 'heat up more slowly', 'charge faster in winter'] },
            { id: 'R4.8', o: ['no outlet near my parking spot', 'a heat pump in the basement', 'a charging station next door', 'a private heated garage'] },
            { id: 'R4.9', o: ['hybrid', 'heat pump', 'bus pass', 'spare battery'] },
            { id: 'R4.10', o: ['more charging stations', 'warmer winters', 'shorter work shifts', 'better car heaters'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Since the spring, several large potholes have appeared on your street. They have not been repaired, and they are causing problems for drivers, cyclists and people walking.</p><p>Write an email to your city councillor. In your email, do the following:</p><ul><li>Describe where the potholes are and how long they have been there.</li><li>Explain how the potholes are affecting you and your neighbours.</li><li>Say what you would like the city to do and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your public library has received extra funding for next year, but only enough for one new service. It is asking members which one it should choose. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Extend opening hours to 10:00 p.m. on weekday evenings, so that students and working adults can study and borrow books later.' },
            { key: 'B', label: 'Option B', text: 'Start free weekend programs for children, such as story time, science clubs and reading help.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you like to visit, and explain why.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A close friend tells you that she has been feeling very stressed at work. She has too many tasks, often stays late and is sleeping badly. Give her advice on how to deal with the situation.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you tried a new food or a new activity for the first time. What was it, how did you feel, and would you do it again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: RINK },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: RINK },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your partner want to take a weekend course together this winter. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Cooking class', image: COOK, facts: ['6 Saturday mornings, 9:00 to 12:00', '$280 per person', 'Ingredients included', 'Take home the meals you cook'] },
            { key: 'B', title: 'Photography course', image: PHOTO, facts: ['4 Sundays, 1:00 to 5:00 p.m.', '$190 per person', 'Bring your own camera or phone', 'Includes 2 outdoor photo walks'] }
          ],
          third: { key: 'C', title: 'Dance lessons', image: DANCE, facts: ['8 Friday evenings, 7:00 to 8:30', '$150 per couple', 'No experience needed', 'Ends with a dance party'] },
          persuade: 'Your partner suggests the dance lessons instead. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You and a coworker are presenting a project to your manager on Monday. Your coworker promised to finish his half of the slides by Thursday, but it is now Friday afternoon and he has not started. He says he has been too busy with other work.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your coworker. Explain why he must finish his part before Monday.</p><p><b>Option B:</b> Talk to your manager. Explain the situation and ask to move the presentation to later in the week.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Some people think cities should ban private cars from their downtown areas on weekends. Do you agree or disagree? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are shopping for winter clothes and see this unusual coat. Call your friend, who is planning a winter camping trip. Describe the coat and explain whether you think your friend should buy it.', image: COAT }
      ]
    }
  });
})();
