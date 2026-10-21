/* Rowe CELPIP Mock Exam: Test B content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer.
   Difficulty target: slightly harder than the real test (about CLB 8 to 11). */
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

  /* market stall: posts, striped awning with a label, and a table */
  function stall(x, w, label, colour) {
    var s = '';
    s += '<rect x="' + (x + 2) + '" y="104" width="6" height="128" fill="#6b4f35"/><rect x="' + (x + w - 8) + '" y="104" width="6" height="128" fill="#6b4f35"/>';
    s += '<rect x="' + (x - 6) + '" y="78" width="' + (w + 12) + '" height="30" fill="' + colour + '"/>';
    for (var i = 0; i < 6; i++) s += '<rect x="' + (x - 6 + i * (w + 12) / 6) + '" y="78" width="' + ((w + 12) / 12) + '" height="30" fill="#ffffff" opacity=".35"/>';
    s += '<rect x="' + (x + w / 2 - 44) + '" y="84" width="88" height="20" rx="3" fill="#ffffff"/>';
    s += '<text x="' + (x + w / 2) + '" y="99" font-size="14" font-weight="bold" text-anchor="middle" fill="#333" font-family="sans-serif">' + label + '</text>';
    return s;
  }
  function table(x, w, cloth) {
    return '<rect x="' + x + '" y="196" width="' + w + '" height="36" fill="' + cloth + '"/><rect x="' + x + '" y="196" width="' + w + '" height="6" fill="#ffffff" opacity=".4"/>';
  }

  var MARKET = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A busy outdoor farmers market on a sunny morning">';
    p += '<rect width="640" height="400" fill="#cfe8f7"/>';
    p += '<circle cx="606" cy="38" r="22" fill="#f7d35c"/>';
    p += '<g fill="#7fb069"><circle cx="40" cy="70" r="30"/><circle cx="330" cy="62" r="26"/><circle cx="430" cy="66" r="28"/></g>';
    p += '<rect y="168" width="640" height="232" fill="#d8ccb8"/>';
    p += '<g stroke="#c4b69f" stroke-width="2"><line x1="0" y1="250" x2="640" y2="250"/><line x1="0" y1="320" x2="640" y2="320"/></g>';
    p += '<text x="320" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#2c5f2d" font-family="sans-serif">FARMERS\' MARKET</text>';
    /* stall 1: fruit, vendor handing a bag to a customer */
    p += stall(20, 170, 'FRUIT', '#d9534f');
    p += person(90, 228, { s: 1.25, shirt: '#2e7d32', skin: '#c98c64', hair: '#1d1410', arms: 'right' });
    p += table(20, 170, '#8d6e4f');
    p += '<g><rect x="30" y="176" width="40" height="20" fill="#b07d4a"/><rect x="140" y="176" width="40" height="20" fill="#b07d4a"/></g>';
    p += '<g fill="#d63c2f"><circle cx="38" cy="174" r="6"/><circle cx="50" cy="172" r="6"/><circle cx="62" cy="174" r="6"/></g>';
    p += '<g fill="#f39c12"><circle cx="148" cy="174" r="6"/><circle cx="160" cy="172" r="6"/><circle cx="172" cy="174" r="6"/></g>';
    p += '<rect x="112" y="176" width="18" height="22" rx="2" fill="#e8d3a8" stroke="#a88b5a"/>';
    p += person(150, 290, { shirt: '#f2a33a', skin: '#f0c9a6', hair: '#7a4a24', arms: 'left' });
    /* stall 2: bread, customer paying */
    p += stall(236, 170, 'BREAD', '#e08e2b');
    p += person(330, 228, { s: 1.25, shirt: '#ffffff', skin: '#f0c9a6', hair: '#d8d8d8', arms: 'left' });
    p += table(236, 170, '#6d8fb3');
    p += '<g fill="#c68642"><ellipse cx="258" cy="190" rx="16" ry="7"/><ellipse cx="292" cy="188" rx="14" ry="8"/><ellipse cx="360" cy="190" rx="16" ry="7"/><ellipse cx="390" cy="189" rx="12" ry="7"/></g>';
    p += person(290, 286, { shirt: '#6a4fb0', skin: '#7a4b31', hair: '#120c08', arms: 'right' });
    p += '<rect x="310" y="244" width="14" height="8" fill="#5fa55a"/>';
    /* stall 3: flowers, woman leaving with a bouquet */
    p += stall(452, 170, 'FLOWERS', '#8e5bb5');
    p += person(536, 228, { s: 1.25, shirt: '#c64b73', skin: '#d6a07a', hair: '#3b2a20' });
    p += table(452, 170, '#7d9a5a');
    p += '<g fill="#5a6d7a"><rect x="466" y="176" width="22" height="20"/><rect x="500" y="176" width="22" height="20"/><rect x="566" y="176" width="22" height="20"/><rect x="598" y="176" width="20" height="20"/></g>';
    p += '<g fill="#e74c3c"><circle cx="472" cy="170" r="5"/><circle cx="482" cy="168" r="5"/></g><g fill="#f1c40f"><circle cx="506" cy="170" r="5"/><circle cx="516" cy="168" r="5"/></g><g fill="#ec87c0"><circle cx="572" cy="170" r="5"/><circle cx="582" cy="168" r="5"/></g><g fill="#ffffff"><circle cx="603" cy="170" r="5"/><circle cx="613" cy="168" r="5"/></g>';
    p += person(600, 300, { shirt: '#16a085', skin: '#a9714b', hair: '#1d1410', arms: 'right' });
    p += '<line x1="624" y1="264" x2="626" y2="250" stroke="#2e7d32" stroke-width="2"/><g fill="#e74c3c"><circle cx="622" cy="248" r="4"/><circle cx="630" cy="250" r="4"/><circle cx="626" cy="242" r="4"/></g>';
    /* tall stack of crates leaning and about to fall, worker reaching for it */
    p += '<g transform="rotate(14 430 290)">';
    for (var c = 0; c < 5; c++) {
      var cy = 270 - c * 22;
      p += '<rect x="414" y="' + cy + '" width="36" height="20" fill="#b07d4a" stroke="#7a5233" stroke-width="2"/><line x1="414" y1="' + (cy + 10) + '" x2="450" y2="' + (cy + 10) + '" stroke="#7a5233" stroke-width="2"/>';
    }
    p += '</g>';
    p += '<g fill="#d63c2f"><circle cx="486" cy="196" r="5"/><circle cx="496" cy="214" r="5"/></g>';
    p += person(410, 300, { shirt: '#4a6d8c', skin: '#8d5a3b', hair: '#120c08', arms: 'up' });
    /* musician on a stool with an open guitar case, child dancing */
    p += '<rect x="44" y="350" width="22" height="5" fill="#555"/><line x1="48" y1="355" x2="46" y2="372" stroke="#555" stroke-width="3"/><line x1="62" y1="355" x2="64" y2="372" stroke="#555" stroke-width="3"/>';
    p += person(60, 368, { shirt: '#943126', sit: true, skin: '#e3b28b', hair: '#555555', arms: 'right' });
    p += '<ellipse cx="66" cy="344" rx="10" ry="8" fill="#b5651d"/><line x1="70" y1="340" x2="96" y2="326" stroke="#6b3d14" stroke-width="3"/>';
    p += '<rect x="80" y="372" width="46" height="14" rx="3" fill="#333"/><rect x="84" y="375" width="38" height="8" fill="#8b1e3f"/><g fill="#f1c40f"><circle cx="94" cy="379" r="2.5"/><circle cx="104" cy="378" r="2.5"/><circle cx="112" cy="380" r="2.5"/></g>';
    p += '<g fill="#555"><text x="100" y="310" font-size="16" font-family="sans-serif">&#9835;</text><text x="116" y="296" font-size="14" font-family="sans-serif">&#9834;</text></g>';
    p += person(150, 380, { shirt: '#f4d03f', s: .7, skin: '#c98c64', hair: '#2a1b12', arms: 'up' });
    /* loose dog running toward the fruit stand, leash trailing, owner chasing */
    p += '<g transform="translate(222 338)"><ellipse cx="0" cy="0" rx="20" ry="8" fill="#a5713f"/><circle cx="-22" cy="-8" r="8" fill="#a5713f"/><ellipse cx="-20" cy="-14" rx="4" ry="6" fill="#7a4f28"/><circle cx="-26" cy="-9" r="1.6" fill="#222"/>';
    p += '<g stroke="#a5713f" stroke-width="3.5" stroke-linecap="round"><line x1="-12" y1="5" x2="-22" y2="14"/><line x1="-6" y1="5" x2="-2" y2="15"/><line x1="10" y1="5" x2="4" y2="15"/><line x1="15" y1="4" x2="26" y2="12"/><line x1="19" y1="-3" x2="30" y2="-12"/></g></g>';
    p += '<path d="M206 332 q24 10 44 4 t48 12" stroke="#c0392b" stroke-width="2" fill="none"/>';
    p += '<g stroke="#9a8f80" stroke-width="2"><line x1="252" y1="330" x2="268" y2="330"/><line x1="254" y1="340" x2="272" y2="340"/></g>';
    p += person(320, 360, { shirt: '#3fa3d6', skin: '#f2cfb0', hair: '#c49a42', arms: 'left', s: 1.1 });
    /* woman pushing a stroller */
    p += '<g><rect x="470" y="330" width="34" height="20" rx="8" fill="#2c3e50"/><path d="M470 330 q4 -18 22 -18 l0 18z" fill="#34495e"/><line x1="504" y1="332" x2="518" y2="318" stroke="#555" stroke-width="3"/><circle cx="476" cy="356" r="6" fill="#333"/><circle cx="498" cy="356" r="6" fill="#333"/></g>';
    p += person(532, 362, { shirt: '#b87fb5', skin: '#7a4b31', hair: '#1d1410', arms: 'left' });
    p += '</svg>';
    return p;
  })();

  var CAT = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#f3ead8"/><rect y="92" width="200" height="28" fill="#c9a77c"/>' +
    '<ellipse cx="100" cy="82" rx="30" ry="22" fill="#7f8c8d"/><circle cx="100" cy="50" r="18" fill="#7f8c8d"/><polygon points="86,40 88,24 98,36" fill="#7f8c8d"/><polygon points="114,40 112,24 102,36" fill="#7f8c8d"/>' +
    '<circle cx="93" cy="49" r="3" fill="#2ecc71"/><circle cx="107" cy="49" r="3" fill="#2ecc71"/><polygon points="100,55 97,52 103,52" fill="#e0868a"/>' +
    '<path d="M128 92 q30 -4 24 -34" stroke="#7f8c8d" stroke-width="7" fill="none" stroke-linecap="round"/><text x="30" y="24" font-size="14" font-family="sans-serif" fill="#555">CAT</text></svg>';
  var DOG = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#dff0d8"/><rect y="90" width="200" height="30" fill="#8cc56d"/>' +
    '<ellipse cx="96" cy="70" rx="34" ry="16" fill="#c68642"/><circle cx="136" cy="52" r="15" fill="#c68642"/><ellipse cx="146" cy="58" rx="9" ry="6" fill="#c68642"/><circle cx="154" cy="57" r="3" fill="#222"/><ellipse cx="128" cy="52" rx="6" ry="11" fill="#8a5a2b"/><circle cx="139" cy="48" r="2" fill="#222"/>' +
    '<g stroke="#c68642" stroke-width="6" stroke-linecap="round"><line x1="72" y1="80" x2="70" y2="98"/><line x1="86" y1="82" x2="86" y2="98"/><line x1="108" y1="82" x2="108" y2="98"/><line x1="120" y1="80" x2="122" y2="98"/><line x1="62" y1="66" x2="48" y2="50"/></g>' +
    '<circle cx="168" cy="96" r="7" fill="#e74c3c"/><text x="20" y="24" font-size="14" font-family="sans-serif" fill="#2d5016">DOG</text></svg>';
  var FISH = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#ece4d4"/><rect x="20" y="96" width="160" height="16" fill="#7a5233"/>' +
    '<rect x="30" y="22" width="140" height="74" rx="4" fill="#7ec8e3" stroke="#4a6d8c" stroke-width="3"/><rect x="30" y="84" width="140" height="12" fill="#e3c48a"/>' +
    '<path d="M50 84 q-6 -20 2 -38 M60 84 q6 -22 -2 -42 M150 84 q-6 -18 4 -34" stroke="#2e8b57" stroke-width="4" fill="none"/>' +
    '<g><ellipse cx="96" cy="50" rx="12" ry="7" fill="#f39c12"/><polygon points="108,50 118,43 118,57" fill="#f39c12"/><circle cx="90" cy="48" r="1.6" fill="#222"/></g>' +
    '<g><ellipse cx="128" cy="70" rx="10" ry="6" fill="#e74c3c"/><polygon points="138,70 146,64 146,76" fill="#e74c3c"/><circle cx="123" cy="68" r="1.5" fill="#222"/></g>' +
    '<g fill="#ffffff" opacity=".8"><circle cx="84" cy="36" r="2.5"/><circle cx="80" cy="28" r="2"/></g><text x="100" y="15" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">AQUARIUM</text></svg>';

  var GADGET = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual kitchen appliance in a store">' +
    '<rect width="640" height="400" fill="#f4efe6"/><rect y="300" width="640" height="100" fill="#b8a48a"/><rect y="296" width="640" height="8" fill="#9c8669"/>' +
    '<rect x="20" y="20" width="220" height="40" rx="6" fill="#ffffff" stroke="#c9bfae"/><text x="130" y="47" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7a4b2a">KITCHEN STORE</text>' +
    /* radio antenna rising from the back of the toaster */
    '<line x1="218" y1="186" x2="160" y2="70" stroke="#777" stroke-width="4"/><circle cx="160" cy="68" r="7" fill="#c0392b"/>' +
    /* toaster body with two slots and toast */
    '<rect x="190" y="180" width="230" height="118" rx="22" fill="#c8ccd0" stroke="#8f969c" stroke-width="4"/>' +
    '<rect x="236" y="160" width="36" height="28" rx="3" fill="#e2b062" stroke="#b07d3a" stroke-width="2"/><rect x="300" y="166" width="36" height="22" rx="3" fill="#e2b062" stroke="#b07d3a" stroke-width="2"/>' +
    '<rect x="230" y="184" width="48" height="6" rx="3" fill="#555"/><rect x="294" y="184" width="48" height="6" rx="3" fill="#555"/>' +
    /* egg holder on top */
    '<path d="M366 182 q14 18 28 0z" fill="#f6d55c" stroke="#c9a227" stroke-width="2"/><ellipse cx="380" cy="168" rx="11" ry="15" fill="#fbf4e4" stroke="#d8cbb0"/>' +
    /* clock face on the front */
    '<circle cx="270" cy="244" r="30" fill="#ffffff" stroke="#555" stroke-width="3"/><line x1="270" y1="244" x2="270" y2="224" stroke="#222" stroke-width="3"/><line x1="270" y1="244" x2="284" y2="252" stroke="#222" stroke-width="3"/>' +
    '<g fill="#555" font-size="9" font-family="sans-serif" text-anchor="middle"><text x="270" y="224">12</text><text x="292" y="248">3</text><text x="270" y="270">6</text><text x="248" y="248">9</text></g>' +
    '<rect x="330" y="230" width="16" height="40" rx="4" fill="#555"/><circle cx="380" cy="248" r="9" fill="#3d3d3d"/>' +
    /* coffee maker attached to the right side */
    '<rect x="420" y="130" width="86" height="168" rx="8" fill="#2c3e50"/><rect x="430" y="140" width="66" height="30" rx="4" fill="#3d566e"/>' +
    '<path d="M436 210 h54 l-6 82 h-42z" fill="#d6eaf8" stroke="#7f8c8d" stroke-width="2" opacity=".9"/><path d="M439 244 h48 l-3 46 h-42z" fill="#6f4e37"/>' +
    '<path d="M490 220 q20 0 18 24 q-2 16 -20 14" stroke="#7f8c8d" stroke-width="4" fill="none"/><rect x="456" y="190" width="14" height="14" fill="#555"/>' +
    /* price tag hanging from the antenna */
    '<line x1="184" y1="118" x2="120" y2="150" stroke="#555" stroke-width="1.5"/><rect x="72" y="146" width="80" height="40" rx="6" fill="#f6d55c" stroke="#c9a227" stroke-width="2"/><circle cx="82" cy="166" r="4" fill="#f4efe6"/><text x="118" y="173" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#333">$89</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'B',
    title: 'Mock Test B',
    note: 'Original practice content in the CELPIP-General format. Written slightly harder than the real test.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { KOFI: { name: 'Kofi', g: 'm', skin: '#7a4b31', hair: '#120c08', shirt: '#2e86c1', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#f0d0b0', hair: '#1d1410', shirt: '#d35400', style: 'bun' } },
        segments: [{
          lines: [
            ['KOFI', 'Hey Mei, are we still on for the movie tonight? It\'s playing at seven fifteen and again at nine forty.'],
            ['MEI', 'Let\'s do the early one. I start work at six tomorrow morning, so I can\'t be out too late.'],
            ['KOFI', 'Sure. Then let\'s meet in the lobby at seven, so we have time to grab popcorn.'],
            ['MEI', 'Perfect. See you then.']
          ],
          questions: [
            { id: 'LP.1', q: 'What time will Kofi and Mei meet?', o: ['7:00', '7:15', '9:40', '6:00'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { ANJALI: { name: 'Anjali', g: 'f', skin: '#a9714b', hair: '#120c08', shirt: '#7d3c98', style: 'long' }, MARCUS: { name: 'Marcus', g: 'm', skin: '#f0c9a6', hair: '#6b4423', shirt: '#4a6d8c', style: 'short' } },
          segments: [
            {
              lines: [
                ['ANJALI', 'Marcus, wake up. You need to come downstairs. There\'s water all over the basement floor.'],
                ['MARCUS', 'What? How much water?'],
                ['ANJALI', 'A lot. It\'s at least five centimetres deep by the laundry room. I assumed it was the rain at first, since it poured all night, but I checked the window wells and they\'re bone dry.'],
                ['MARCUS', 'Okay, hang on. Oh, I see it. It\'s coming from under the laundry sink. The pipe has split right along the side.'],
                ['ANJALI', 'Can you stop it?'],
                ['MARCUS', 'I\'m shutting off the main valve now. There. That should stop it, but it also means we\'ve got no water anywhere in the house until it\'s fixed. No showers, no dishes, nothing.'],
                ['ANJALI', 'Well, at least the sump pump is still running. But look at the storage area. The boxes with my grandmother\'s photo albums were sitting right on the floor.'],
                ['MARCUS', 'Oh no. Those are the boxes we kept saying we\'d put up on the shelves.'],
                ['ANJALI', 'I know, I know. The couch and the guest bed can be replaced. Those pictures can\'t.']
              ],
              questions: [
                { id: 'L1.1', q: 'What told Anjali that the rain was not the cause?', o: ['The window wells had no water in them.', 'The sump pump was still running.', 'The water was coming from the laundry sink.', 'The rain had stopped before midnight.'] },
                { id: 'L1.2', q: 'What drawback of his action does Marcus point out?', o: ['Nobody in the house can use water for now.', 'The sump pump will no longer have power.', 'The pipe will need to be fully replaced.', 'The water will rise further in the laundry room.'] },
                { id: 'L1.3', q: 'What can be inferred about the photo albums?', o: ['Moving them earlier would have kept them safe.', 'They had been placed on shelves last month.', 'They belonged to Marcus\'s late grandmother.', 'Anjali values them less than the furniture.'] }
              ]
            },
            {
              lines: [
                ['MARCUS', 'Okay. First things first. Do I call the insurance company or a plumber?'],
                ['ANJALI', 'Both, but let\'s not touch anything yet. When my sister had a leak, her insurer wanted photos and video of everything before she moved a single item. Otherwise it was her word against theirs.'],
                ['MARCUS', 'Makes sense. I\'ll go around with my phone. And I just pulled up the policy. Sudden pipe bursts are covered, but there\'s a thousand-dollar deductible.'],
                ['ANJALI', 'A thousand? I thought it was five hundred.'],
                ['MARCUS', 'It was. We bumped it up last spring to bring our monthly payments down, remember?'],
                ['ANJALI', 'Right, right. Okay, what about a plumber? Can Dave come?'],
                ['MARCUS', 'I texted him. He can\'t get here until tomorrow afternoon. There\'s an emergency service that could be here by ten this morning, but they charge a hundred and eighty dollars just to walk through the door, plus their hourly rate.'],
                ['ANJALI', 'That hurts. But a day and a half with no water? We can\'t cook, we can\'t wash anything. I don\'t think we have a choice.'],
                ['MARCUS', 'Agreed. I\'ll book them, and then I\'ll phone the insurance company while we wait.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Anjali mention her sister?', o: ['To support documenting the damage first', 'To suggest asking her sister\'s plumber', 'To show that leaks are common in old homes', 'To warn that her sister\'s claim was refused'] },
                { id: 'L1.5', q: 'What do we learn about the deductible?', o: ['It was raised to reduce their premiums.', 'It is lower than Anjali believed.', 'It does not apply to burst pipes.', 'It was recently lowered to five hundred dollars.'] },
                { id: 'L1.6', q: 'Why do they agree to pay for the emergency plumber?', o: ['Waiting would leave them without water too long.', 'Their regular plumber charges a higher hourly rate.', 'The insurer will only pay an emergency service.', 'The damage will get worse by tomorrow afternoon.'] }
              ]
            },
            {
              lines: [
                ['ANJALI', 'Okay, the photos of the damage are done. Now, the albums. Should we just try the hair dryer on them?'],
                ['MARCUS', 'Actually, I texted my cousin Lena. She works in the archives at the university, and she said absolutely no heat. It makes the prints curl and stick together.'],
                ['ANJALI', 'So what are we supposed to do?'],
                ['MARCUS', 'She said to put the wettest ones in freezer bags and freeze them. That stops the damage where it is, and then they can be thawed and air-dried slowly, a few at a time. She even offered to come help.'],
                ['ANJALI', 'Strange, but okay. Meanwhile, the whole basement needs to dry out, or we\'ll have mould by next week. The hardware store rents dehumidifiers for forty-five dollars a day.'],
                ['MARCUS', 'How long would we need one?'],
                ['ANJALI', 'The guy on the phone said three days for a basement our size.'],
                ['MARCUS', 'Fine. Just hang on to the receipt. The insurance might cover that too.']
              ],
              questions: [
                { id: 'L1.7', q: 'What is Lena\'s advice about the wettest photos?', o: ['Stop the damage now and dry them gradually later.', 'Dry them right away with gentle heat.', 'Bring them to the university to be restored.', 'Separate them before putting them in bags.'] },
                { id: 'L1.8', q: 'How much will the dehumidifier cost in total?', o: ['$135', '$45', '$90', '$180'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { TELLER: { name: 'Bank teller', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#1f618d', style: 'short' }, FARAH: { name: 'Farah', g: 'f', skin: '#c98c64', hair: '#3b2a20', shirt: '#16a085', style: 'curly' } },
          segments: [{
            lines: [
              ['TELLER', 'Good morning. What can I do for you today?'],
              ['FARAH', 'Hi. I think I lost my debit card yesterday. I\'ve gone through my whole apartment, and I called the gym, because that\'s the last place I remember using it, but nobody\'s turned it in.'],
              ['TELLER', 'Sorry to hear that. Have you done anything to block it yet?'],
              ['FARAH', 'I locked it in the mobile app last night, as soon as I noticed it was gone.'],
              ['TELLER', 'Good thinking. That\'s exactly what we recommend. Let me take a look at your recent activity. Okay, the last purchase was thirty-two dollars at a grocery store on Tuesday. Was that you?'],
              ['FARAH', 'Yes, that was me.'],
              ['TELLER', 'Then nothing unusual has gone through. I\'ll cancel the old card for good and print you a new one right here. It only takes a few minutes.'],
              ['FARAH', 'Oh, great. I thought I\'d have to wait for one in the mail. Is there a charge?'],
              ['TELLER', 'Normally it\'s ten dollars, but replacements are free with your account package. You\'ll need to choose a new PIN on this keypad. And just so you know, tap won\'t work until you make one purchase with the chip and your PIN.'],
              ['FARAH', 'Good to know. Will the card number be the same?'],
              ['TELLER', 'No, it\'ll be a new number. So if you\'ve got any monthly payments set up with the old card, like your phone bill or online subscriptions, you\'ll need to update them.'],
              ['FARAH', 'Ugh, I have a few of those. I guess I know what I\'m doing tonight.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why did Farah call the gym?', o: ['She thought she might have left her card there.', 'She wanted to cancel her membership.', 'The gym had charged her card by mistake.', 'Staff had found a wallet in the locker room.'] },
              { id: 'L2.2', q: 'How does the teller react to what Farah did the night before?', o: ['The teller approves of it.', 'The teller says it was unnecessary.', 'The teller is surprised by it.', 'The teller asks her to undo it.'] },
              { id: 'L2.3', q: 'Why does the teller ask about the grocery purchase?', o: ['To confirm no one else has used the card', 'To check how much money is in the account', 'To find out where she lost the card', 'To refund the thirty-two dollars'] },
              { id: 'L2.4', q: 'What is true about the replacement card?', o: ['Farah will pay nothing for it.', 'It will arrive by mail in a few days.', 'It works for tap payments right away.', 'It keeps the same card number.'] },
              { id: 'L2.5', q: 'What can be inferred about Farah at the end?', o: ['She has several bills linked to her card.', 'She plans to close her account soon.', 'She will choose her PIN at home.', 'She will search her home again tonight.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#f0c9a6', hair: '#b5651d', shirt: '#5d6d7e', style: 'bun' }, GABRIEL: { name: 'Gabriel Okoye', g: 'm', skin: '#5c3a24', hair: '#120c08', shirt: '#c0392b', style: 'bald' } },
          segments: [{
            lines: [
              ['HOST', 'My guest this morning is Gabriel Okoye, who spends his winter weekends as a volunteer ski patroller at Pine Ridge. Gabriel, thanks for coming in.'],
              ['GABRIEL', 'Thanks for having me.'],
              ['HOST', 'So how did you end up on ski patrol?'],
              ['GABRIEL', 'Honestly, it started with an accident. About ten years ago, I fell and broke my wrist on a hill out west. The patroller who looked after me was so calm, and so kind, that I remember thinking, I want to be able to do that for someone.'],
              ['HOST', 'And what does it take? I\'m guessing you have to be a pretty good skier.'],
              ['GABRIEL', 'You do need to be a strong intermediate skier or snowboarder, but believe it or not, that\'s the easy part. The real hurdle is first aid. New patrollers take an advanced course that runs about eighty hours, and then there\'s on-snow training, where you learn to bring an injured person down the hill in a toboggan.'],
              ['HOST', 'That\'s a big commitment for a volunteer.'],
              ['GABRIEL', 'It is. We ask people for at least ten days a season. In return, they get a season pass, which is worth around six hundred dollars, so most people feel it\'s a fair trade.'],
              ['HOST', 'What does a typical day look like?'],
              ['GABRIEL', 'We\'re there at seven thirty, before the lifts open, checking every trail for hazards, things like ice patches or fallen branches. During the day we respond to calls. Then at closing we do what\'s called a sweep: we ski every run one last time to make sure nobody\'s still out there.'],
              ['HOST', 'What kinds of injuries do you see most?'],
              ['GABRIEL', 'For skiers, it\'s mostly knees. Snowboarders tend to hurt their wrists, because they put their hands out when they fall. And a lot of it doesn\'t need to happen. A lesson or two, wrist guards for new boarders, staying on runs that match your level. Simple things.'],
              ['HOST', 'And if listeners want to get involved?'],
              ['GABRIEL', 'We\'re holding an information session at the public library on November twelfth. Come by, ask questions, and if you start the course right away, you could be on the hill by January.']
            ],
            questions: [
              { id: 'L3.1', q: 'What made Gabriel want to become a patroller?', o: ['The way a patroller treated him after a fall', 'The chance to earn a free season pass', 'A friend who already worked on the patrol', 'A first aid course he took on a hill out west'] },
              { id: 'L3.2', q: 'What does Gabriel suggest about the skiing requirement?', o: ['It is less demanding than the first aid training.', 'It is the hardest part for most new volunteers.', 'Only expert skiers can meet it.', 'It is tested during the toboggan training.'] },
              { id: 'L3.3', q: 'How does Gabriel describe the season pass arrangement?', o: ['Most volunteers think it is a reasonable exchange.', 'It is worth more than the first aid course.', 'Only volunteers who work ten days a month get one.', 'It is the main reason most people volunteer.'] },
              { id: 'L3.4', q: 'What happens at the end of each day?', o: ['Patrollers ski each trail to check for people.', 'Patrollers clear ice patches and fallen branches.', 'Patrollers check the lifts before they close.', 'Patrollers write reports on all injuries.'] },
              { id: 'L3.5', q: 'What does Gabriel imply about many injuries?', o: ['Some could be prevented with basic precautions.', 'Most happen on the easier trails.', 'Snowboarders are hurt more often than skiers.', 'Knee injuries are the most serious kind.'] },
              { id: 'L3.6', q: 'Why does Gabriel mention January?', o: ['New recruits could start patrolling by then.', 'The information session takes place then.', 'The ski season usually begins then.', 'Training courses are held in that month.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#2e4053', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'The province has confirmed that a new ferry route between Tidewater Point and Gull Island will begin service on the first of next month.'],
              ['NEWS', 'Until now, island residents without their own boat have relied on a private water taxi that runs only from May to September. The new ferry will operate year-round.'],
              ['NEWS', 'The vessel, the Harbour Light, can carry sixty vehicles and three hundred passengers. It will make four round trips a day, and the crossing will take about fifty minutes.'],
              ['NEWS', 'Fares will be eighteen dollars for adult passengers and forty-five dollars for a car and driver. Island residents who register for a resident card will pay half the regular fare.'],
              ['NEWS', 'Reservations open online next Monday, and officials are urging drivers to book ahead for weekend sailings, which are expected to fill quickly in the summer months.'],
              ['NEWS', 'Not everyone in Tidewater Point is celebrating. Some residents near the terminal worry about traffic and parking on their narrow streets. In response, the province says a new one-hundred-and-twenty-space parking lot beside the terminal will open before the first sailing.'],
              ['NEWS', 'On Gull Island, however, business owners say year-round service could finally make it possible to keep their doors open through the winter, instead of closing every fall.'],
              ['NEWS', 'The ferry operator also expects the route to create about forty jobs, and says most of them will go to people who live on the island.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the main topic of the report?', o: ['A ferry route opening next month', 'A water taxi ending its service', 'A bridge being built to an island', 'An increase in ferry fares'] },
              { id: 'L4.2', q: 'What is the main advantage of the ferry over the water taxi?', o: ['It will offer service in winter as well.', 'Its fares will be lower for everyone.', 'Its crossing will take less time.', 'It will carry island residents for free.'] },
              { id: 'L4.3', q: 'How much will an adult island resident with a resident card pay to cross on foot?', o: ['$9', '$18', '$45', '$22.50'] },
              { id: 'L4.4', q: 'How has the province responded to concerns in Tidewater Point?', o: ['By adding parking near the terminal', 'By reducing the number of sailings', 'By widening the streets near the dock', 'By delaying the launch of the route'] },
              { id: 'L4.5', q: 'What do Gull Island business owners expect?', o: ['To stay open in the off-season', 'To attract more summer visitors', 'To get cheaper ferry tickets', 'To receive new parking spaces'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Summer picnic: 45 staff', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { SIOBHAN: { name: 'Siobhan', g: 'f', skin: '#f2cfb0', hair: '#a0522d', shirt: '#34495e', style: 'long' }, MATEO: { name: 'Mateo', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#d35400', style: 'curly' }, WEI: { name: 'Wei', g: 'm', skin: '#e8c39e', hair: '#120c08', shirt: '#27ae60', style: 'short' } },
          segments: [{
            lines: [
              ['SIOBHAN', 'Okay, we\'ve got about fifteen minutes. I need to book a spot for the summer picnic this week. We\'ve got forty-five staff signed up, plus families.'],
              ['MATEO', 'I\'ll be honest, I think Riverside Park is the obvious choice. It\'s a ten-minute walk from the office, it\'s free, and nobody has to drive.'],
              ['WEI', 'It\'s convenient, sure, but last year half the people left after an hour. There\'s hardly any shade, and the playground is right next to the road. With kids running around, a lot of parents were on edge the whole time.'],
              ['MATEO', 'Fair enough. What were the other options?'],
              ['SIOBHAN', 'Two more. Maple Hollow Farm, about forty minutes out. They handle everything: a barbecue lunch, wagon rides, strawberry picking. But it\'s twenty-five dollars a head.'],
              ['WEI', 'And with families, we could easily have a hundred and fifty people. That\'s nearly four thousand dollars, and we\'ve got two thousand.'],
              ['SIOBHAN', 'Right. The third option is Clearwater Provincial Park. It\'s a thirty-minute drive. We\'d rent the big covered shelter for a hundred and fifty dollars, and there\'s a beach with lifeguards on weekends.'],
              ['MATEO', 'Thirty minutes is fine if you have a car, but at least ten of our people take the bus to work. How would they get there?'],
              ['WEI', 'We could charter a school bus. When my son\'s soccer team did that, it was about four hundred for the day.'],
              ['SIOBHAN', 'So the shelter and the bus together leave us plenty for food. And the picnic\'s on a Saturday, so the lifeguards will be there.'],
              ['MATEO', 'Okay, I\'m sold. But we need a rain plan. That shelter only holds about sixty people.'],
              ['WEI', 'Good point. If the forecast looks bad, we could push it back a week. I\'ll find out whether the park lets us change the date without losing the fee.'],
              ['SIOBHAN', 'Perfect. I\'ll book the shelter today, Wei will check the rain policy, and Mateo, could you look into the bus?'],
              ['MATEO', 'Sure. I\'ll get a couple of quotes so we\'re not just going on Wei\'s number.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To pick a location for an event', 'To set the budget for an event', 'To plan the menu for an event', 'To decide who is invited to an event'] },
              { id: 'L5.2', q: 'Why does Wei object to Riverside Park?', o: ['It has little shade and feels unsafe for kids.', 'It is too far for people to walk from work.', 'It charges a fee that is over the budget.', 'It was too crowded with other groups last year.'] },
              { id: 'L5.3', q: 'What can be concluded about the farm option?', o: ['It would cost more than the budget allows.', 'It is closer to the office than the provincial park.', 'It does not offer any food.', 'It is only open on weekdays.'] },
              { id: 'L5.4', q: 'Why does Mateo raise a concern about the provincial park?', o: ['Some staff do not drive to work.', 'The drive would take over an hour.', 'The beach has no lifeguards.', 'The shelter costs too much.'] },
              { id: 'L5.5', q: 'About how much will the shelter and the bus cost together?', o: ['$550', '$400', '$150', '$2,000'] },
              { id: 'L5.6', q: 'Why does Siobhan mention that the picnic is on a Saturday?', o: ['Lifeguards will be working that day.', 'More employees can come on weekends.', 'The bus is cheaper on Saturdays.', 'The farm is closed on Saturdays.'] },
              { id: 'L5.7', q: 'What is Mateo\'s concern about rain?', o: ['The shelter is too small for everyone.', 'The bus company might cancel the trip.', 'The beach would be closed.', 'The forecast is often wrong.'] },
              { id: 'L5.8', q: 'Why does Mateo want more than one quote?', o: ['To check the price Wei mentioned', 'To find a bus with more seats', 'To compare it with the farm', 'To prove the park is too far'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Winter tires: required?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#943126', style: 'curly' } },
          segments: [{
            lines: [
              ['NARR', 'As temperatures drop, a familiar debate is returning: should winter tires be required by law in every province and territory?'],
              ['NARR', 'Right now, the rules vary widely. Quebec requires winter tires on passenger vehicles for part of the year, while most other provinces leave the decision up to drivers.'],
              ['NARR', 'Among those calling for a national rule is Doctor Miriam Castellano, a road safety researcher. She explains that all-season tires begin to stiffen at around seven degrees Celsius, while winter tires stay flexible and grip far better on ice and snow.'],
              ['NARR', 'Castellano argues that because so many Canadians drive between provinces, one national standard would be simpler and fairer. A crash caused by poor tires, she points out, affects everyone on the road, not just the driver who decided to save money.'],
              ['NARR', 'Not everyone agrees. Owen Fitzgerald, who runs a driving school in Victoria, says a one-size-fits-all rule makes little sense in a country this large. In parts of coastal British Columbia, he notes, snow may fall only a handful of days a year.'],
              ['NARR', 'He also points to the cost. A set of winter tires on separate rims can run from eight hundred to twelve hundred dollars, plus storage and a change twice a year. For students and low-income families, he says, that money might do more good if it went toward brakes and regular maintenance.'],
              ['NARR', 'Fitzgerald believes that driver education, such as teaching people to slow down and leave more space, would save more lives than a new law. Castellano\'s response is that good habits and good tires are not an either-or choice.'],
              ['NARR', 'For now, the provinces will continue to set their own rules.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['A debate over requiring winter tires', 'New rules for driving schools', 'A rise in winter car accidents', 'The rising cost of new tires in Canada'] },
              { id: 'L6.2', q: 'According to Dr. Castellano, what happens to all-season tires in cold weather?', o: ['They get harder and grip less.', 'They wear out much faster.', 'They lose air pressure overnight.', 'They become too soft.'] },
              { id: 'L6.3', q: 'Why does Castellano favour one national standard?', o: ['Many people drive from one province to another.', 'Quebec\'s rule has been very popular.', 'Winter tires would be cheaper if everyone bought them.', 'Insurance companies have asked for it.'] },
              { id: 'L6.4', q: 'What is Owen Fitzgerald\'s main objection to a national rule?', o: ['It ignores differences between regions.', 'It should begin in coastal areas first.', 'It would only affect new drivers.', 'It would be too hard for police to enforce.'] },
              { id: 'L6.5', q: 'What does Fitzgerald suggest some families should spend money on instead?', o: ['Brakes and regular maintenance', 'Lessons at a driving school nearby', 'All-season tires', 'Tire storage'] },
              { id: 'L6.6', q: 'How does Castellano respond to Fitzgerald\'s view on education?', o: ['Drivers need both good habits and good tires.', 'Education is a waste of money.', 'Driving schools should be free for students.', 'Education matters more than tires.'] }
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
          passage: '<h3>Message</h3><p>Dear Ethan,</p><p>By the time this letter reaches you, you will have finished your first week in Saskatoon. I hope your residence room is not too small and that your roommate does not snore! Your mother tells me the drive across the Prairies took three full days and that you slept through most of it in the back seat while she and your father took turns at the wheel. Some things never change.</p><p>I have been thinking about my own first year away from home. I was eighteen when I left our farm to study nursing in Halifax, and I cried myself to sleep every night for the first two weeks. What saved me was joining the choir. I could not sing very well, and the director politely placed me in the very back row, but I met my best friend there, and she is still my best friend sixty years later. So my one piece of advice is this: find one group outside your classes and stay with it, even in the weeks when you are busy and it feels like a chore.</p><p>I have mailed you a small package. Inside you will find the blue quilt from the cedar chest, since your mother says the heating in your building is unreliable, and a tin of the oatmeal cookies you like. Please share them. It is the quickest way I know to make friends. There is also a cheque for two hundred dollars. Your mother says textbooks are terribly expensive these days, so use it for those and not for pizza.</p><p>As you know, I am having my knee operation on October 8, so I will not be able to travel for Thanksgiving this year. The surgeon says it will be about six weeks before I can manage stairs again. Instead, my neighbour Mrs. Dube has been teaching me to use video calls on my tablet. I am improving, although last week I spent ten minutes talking to the ceiling. Could we try a call on Sunday evenings? Any time after seven o\'clock my time is best, once my television program is over. Remember that I am two hours ahead of you.</p><p>I am so proud of you, my dear. Study hard, but remember to sleep.</p><p>With all my love,<br>Grandma Lucille</p>',
          questions: [
            { id: 'R1.1', q: 'Lucille\'s remark "Some things never change" suggests that Ethan', o: ['has always tended to doze off on long car journeys.', 'still complains about long drives across the Prairies.', 'has never enjoyed travelling with his parents.', 'has always disliked sitting in the back seat.'] },
            { id: 'R1.2', q: 'Lucille most likely mentions where the choir director placed her to show that', o: ['her voice was not a strong one.', 'the director was unkind to new members.', 'she preferred to stand at the back.', 'the choir was very large that year.'] },
            { id: 'R1.3', q: 'The main advice Lucille gives Ethan is to', o: ['keep attending one non-academic group through busy periods.', 'join a choir in his first year, just as she did.', 'make friends by sharing food with his classmates.', 'put his classes ahead of clubs when he is busy.'] },
            { id: 'R1.4', q: 'Lucille sent the quilt because', o: ['Ethan\'s building may not stay warm enough.', 'Ethan\'s roommate needed an extra blanket.', 'the cedar chest had no more room in it.', 'Ethan\'s mother forgot to pack his bedding.'] },
            { id: 'R1.5', q: 'Lucille implies that the cheque', o: ['is intended for course materials, not treats.', 'should be shared with the students on his floor.', 'will help pay for a trip home at Thanksgiving.', 'is partly a gift from Ethan\'s mother as well.'] },
            { id: 'R1.6', q: 'Lucille will probably not visit Ethan this autumn because she', o: ['needs weeks to recover from surgery.', 'is still learning how to use her tablet.', 'has promised to help her neighbour.', 'does not enjoy long journeys by car.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Grandma,</p><p>Thank you so much for the package! It arrived yesterday, and the quilt is already on my bed. Mom was right to worry, because [[R1.7]]. The cookies lasted about an hour. I did what you suggested and offered them to everyone on my floor, and now I know almost all of their names.</p><p>I followed your other advice too. You will laugh, but I have signed up for [[R1.8]], even though I am probably about as musical as you were at eighteen. We rehearse every Thursday night, and I promise to keep going [[R1.9]].</p><p>Don\'t worry, your cheque went exactly where you wanted. I bought [[R1.10]] at the campus bookstore, and I still have a little left over. I resisted the pizza, I promise.</p><p>Good luck with your operation. I hope the six weeks pass quickly. Sunday evenings are perfect for me. Since you are ahead of me, I will call [[R1.11]], so you won\'t miss the end of your program. And please try to point the tablet at your face this time!</p><p>Love,<br>Ethan</p>',
          blanks: [
            { id: 'R1.7', o: ['the radiator in my room barely works', 'the residence heating is far too strong', 'my roommate snores loudly every night', 'my mother forgot to pack my blankets'] },
            { id: 'R1.8', o: ['the university singing group', 'the campus hiking club', 'a first-year nursing course', 'a weekly cooking class'] },
            { id: 'R1.9', o: ['even when I would rather skip it', 'until I find a better group to join', 'only when my classes are not busy', 'as long as my roommate comes too'] },
            { id: 'R1.10', o: ['two books for my chemistry course', 'pizza for everyone on my floor', 'a new tablet for our video calls', 'a bus ticket home for Thanksgiving'] },
            { id: 'R1.11', o: ['shortly after five o\'clock my time', 'shortly after seven o\'clock my time', 'just before five o\'clock my time', 'just before seven o\'clock your time'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following price list. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Northgate Fitness: Membership Plans</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Plan</th><th>Monthly fee</th><th>Joining fee</th><th>Gym hours</th><th>Group classes</th><th>Pool access</th></tr></thead><tbody>' +
            '<tr><td>Basic</td><td>$29</td><td>$49</td><td>6:00 a.m. to 10:00 p.m.</td><td>Not included</td><td>No</td></tr>' +
            '<tr><td>Flex</td><td>$45</td><td>$49</td><td>24 hours</td><td>4 per month</td><td>No</td></tr>' +
            '<tr><td>Premium</td><td>$65</td><td>None</td><td>24 hours</td><td>Unlimited</td><td>Yes</td></tr>' +
            '<tr><td>Student</td><td>$25</td><td>$25</td><td>6:00 a.m. to 10:00 p.m.</td><td>2 per month</td><td>Weekends only</td></tr>' +
            '<tr><td>Family</td><td>$110</td><td>$75</td><td>24 hours</td><td>Unlimited</td><td>Yes</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Pay for a full year in advance and pay for only 10 months. Joining fees still apply.</li><li>Group classes beyond those included in your plan cost $12 each.</li><li>Student plan: a valid full-time student card is required, and members must be 25 or younger.</li><li>Family plan: two adults and up to three children under 18 living at the same address. Members under 14 must be accompanied by an adult at all times.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dana,</p><p>I picked up the price list from Northgate Fitness. Since neither of us is a student and I really want to start swimming again, the only individual plan that works for me is [[R2.1]]. For you, since you only want the weight room and two yoga classes a month, [[R2.2]] would cost the least.</p><p>Here is the funny part. If we each bought those two plans, we would pay [[R2.3]] a month, which is exactly the price of the Family plan. The Family plan would also cover Theo. Because he is sixteen, he could [[R2.4]], which he would love.</p><p>If we choose the Family plan and pay for the whole year up front, the total for the first twelve months, including the joining fee, would be [[R2.5]]. I think that is a good deal. Let\'s talk about it tonight.</p><p>Jordan</p>',
          blanks: [
            { id: 'R2.1', o: ['the Premium plan', 'the Student plan', 'the Flex plan', 'the Family plan'] },
            { id: 'R2.2', o: ['the Flex plan', 'the Basic plan', 'the Student plan', 'the Premium plan'] },
            { id: 'R2.3', o: ['$110', '$94', '$74', '$130'] },
            { id: 'R2.4', o: ['work out without one of us beside him', 'join at half the usual monthly price', 'swim only on Saturdays and Sundays', 'bring along a friend at no extra cost'] },
            { id: 'R2.5', o: ['$1,175', '$1,100', '$1,395', '$1,320'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Why would the Student plan not suit a 21-year-old full-time student who wants to swim on weekday evenings?', o: ['Its swimming is limited to Saturdays and Sundays.', 'Its members have to be at least 25 years old.', 'It offers just two group classes each month.', 'It does not accept a full-time student card.'] },
            { id: 'R2.7', q: 'In a month when a Basic member takes three group classes, the total cost is', o: ['$65.', '$41.', '$29.', '$36.'] },
            { id: 'R2.8', q: 'A Student plan member who wants to train at 11:00 p.m. would need to', o: ['move to a different membership.', 'pay an extra $12 late fee.', 'show a valid student card.', 'come on a weekend instead.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>From Tree to Table: The Story of Maple Syrup</h3><p><b>A.</b> Long before European settlers arrived, Indigenous peoples in what is now eastern Canada and the northeastern United States collected the sweet sap of maple trees each spring. They cut into the bark, gathered the sap in containers made of birch bark and concentrated it into syrup and sugar, using methods such as dropping heated stones into the liquid. Many early settlers learned the process from Indigenous communities, and by the 1800s maple sugar was a common sweetener on rural farms, where imported cane sugar was expensive and often hard to find.</p><p><b>B.</b> Sap only runs under particular weather conditions. Producers need a pattern of nights below freezing followed by days above zero. The repeated freezing and thawing builds pressure inside the tree, which pushes sap out through a small hole drilled into the trunk. In most years, this window lasts only four to six weeks, usually from early March to mid-April. Trees are generally not tapped until they are about 25 centimetres across, which can take forty years, and a healthy tree can be tapped every spring for generations without lasting harm.</p><p><b>C.</b> Fresh sap looks almost like water and contains only about two percent sugar. To turn it into syrup, producers boil it in a long, shallow pan called an evaporator, often for many hours at a time. It takes roughly forty litres of sap to make a single litre of syrup. Producers watch the temperature closely: the syrup is ready when it boils at about four degrees above the boiling point of water. Taken off the heat too early, it stays thin and may spoil; boiled too long, it starts to form crystals. The finished product is graded by colour and taste, from golden syrup with a delicate flavour to very dark syrup with a strong one. Sap collected toward the end of the season usually produces the darker grades.</p><p><b>D.</b> Today, few producers carry buckets from tree to tree. Most sugar bushes rely on networks of plastic tubing that carry sap directly to the sugar shack, sometimes with vacuum pumps to increase the flow. Quebec produces the large majority of the world\'s maple syrup, and producers there keep a strategic reserve of syrup to protect buyers against poor harvests. Researchers are also watching the effects of a warming climate, which in some regions is causing the season to start earlier and become harder to predict.</p>',
          questions: [
            { id: 'R3.1', q: 'Sap flow depends on temperatures swinging above and below freezing.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'A tree must reach a certain size before sap is taken from it.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Sap is mostly water when it leaves the tree.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'Maple sugar was once popular partly because other sweeteners were costly.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Many producers no longer gather sap by hand.', fixed: true, a: 'D' },
            { id: 'R3.6', q: 'Syrup made late in the season tends to have a stronger colour.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'Syrup is set aside in case a future harvest is small.', fixed: true, a: 'D' },
            { id: 'R3.8', q: 'Maple syrup contains more vitamins than white sugar.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Newcomers to North America were taught how to make maple sugar.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Phones in the Classroom: Ban or Teach?</h3><p>When Westbrook Secondary School told students last fall that phones must stay in their lockers during class, many expected protests. A year later, principal Danielle Fortin calls the change "the best decision we have made in a decade." Teachers report that students take part more in discussions, and the number of online bullying incidents during school hours has fallen by almost half. "The phones were not just a distraction for the student holding one," Fortin says. "They pulled the attention of everyone sitting nearby." She adds that students may still use their phones at lunch and between classes, so the rule is far less strict than its critics claim.</p><p>Child psychologist Dr. Arjun Mehta supports similar policies. He notes that many teenagers say they find it almost impossible to ignore a notification, even when they want to. Taking the phone out of the room, he argues, removes the temptation altogether, which works far better than asking young people to rely on willpower alone. He is more cautious about the figures, however. "One year of data from one school is encouraging, but it is not proof," he says. "Bullying numbers rise and fall for many reasons."</p><p>Not everyone is convinced. Kwame Asante, who teaches computer science at another high school, believes a ban avoids the real problem. "These students will have phones in their pockets for the rest of their lives, at university and at work," he says. "If we simply take them away, we never teach them how to manage them." In his classroom, phones stay face down on the desk unless he asks students to use them, for example to record an experiment or check a source. Students who misuse the privilege lose it for a week, and he says few repeat the mistake.</p><p>Some parents have raised safety concerns. Lisa Moreau, a mother of two teenagers, says she wants to be able to reach her children quickly in an emergency. Fortin responds that the school office can contact any student within minutes, and that during a real emergency, hundreds of students calling home at once could actually make it harder for emergency services to communicate. Moreau is not fully satisfied. "The office is fine for a forgotten lunch," she says, "but I would like to see the emergency plan in writing."</p><p>Asante admits that a ban may be the most practical option for schools with very large classes, where one teacher cannot watch every desk. Still, he hopes schools will eventually see phones as "a tool to be taught, not a toy to be confiscated."</p><p>Students themselves are divided. Grade eleven student Maya Lindgren admits that she concentrates better without her phone, but says the rule felt like a punishment for the whole school when only a few students were causing problems. "Some of us were using our phones responsibly," she says. She would like seniors with a clean record to earn back limited use in class.</p>',
          questions: [
            { id: 'R4.1', q: 'Fortin most likely mentions students "sitting nearby" in order to show that', o: ['the harm went beyond the person using the device.', 'students were copying answers from classmates.', 'classrooms had become too crowded for discussion.', 'most of the bullying took place during lessons.'] },
            { id: 'R4.2', q: 'Dr. Mehta\'s attitude toward the Westbrook results is best described as', o: ['hopeful, but careful not to overstate them.', 'doubtful, since he opposes such bans.', 'enthusiastic, as they prove the rule works.', 'critical of how the school gathered them.'] },
            { id: 'R4.3', q: 'Asante\'s main point about bans is that they', o: ['leave young people unprepared for lifelong device use.', 'punish responsible students for the mistakes of a few.', 'are too difficult to enforce in very large classes.', 'make it harder for parents to reach their children.'] },
            { id: 'R4.4', q: 'Moreau\'s reaction to Fortin suggests that she', o: ['wants the school\'s emergency arrangements set out formally.', 'now accepts that phones should stay in the lockers.', 'plans to phone the school office much more often.', 'thinks students need phones to replace forgotten lunches.'] },
            { id: 'R4.5', q: 'Maya Lindgren would probably support a rule that', o: ['lets trusted older students regain some phone use.', 'allows every student to use a phone at lunch.', 'applies the ban only to students in grade eleven.', 'takes phones away for a week after any misuse.'] }
          ],
          reply: '<h3>Reader comment</h3><p>As the parent of a grade ten student, I read this article with great interest. At first I sided with Ms. Moreau, because my daughter takes two buses to school and I want to [[R4.6]]. Still, I have to admit Principal Fortin has a point: if every student phoned home during a crisis, [[R4.7]].</p><p>What I liked most was Mr. Asante\'s classroom. Rather than locking phones away, he [[R4.8]], which seems much closer to what our children will face at work. I also appreciated that Dr. Mehta did not oversell the Westbrook numbers, since a drop in bullying [[R4.9]].</p><p>My own view is that both sides could meet in the middle. A full ban might be sensible in [[R4.10]], while smaller schools could try Mr. Asante\'s method, perhaps combined with Maya\'s idea of rewarding students who have earned some trust.</p>',
          blanks: [
            { id: 'R4.6', o: ['know I can get hold of her fast if something goes wrong', 'collect her phone myself at the end of each school day', 'drive her to school on the days when the weather is bad', 'check everything she posts online during school hours'] },
            { id: 'R4.7', o: ['responders might struggle to get through', 'parents would reach the school too slowly', 'the office could not contact any students', 'students would all forget their own numbers'] },
            { id: 'R4.8', o: ['has students keep devices idle until a task calls for them', 'takes every phone away for a week at the start of term', 'lets students use phones freely once their work is done', 'permits phones only at lunch and between their classes'] },
            { id: 'R4.9', o: ['could have causes other than the new rule', 'shows that the lockers have solved the issue', 'happened mainly among the senior students', 'was caused mostly by constant notifications'] },
            { id: 'R4.10', o: ['crowded rooms where one teacher cannot see every desk', 'computer science classes that use phones for experiments', 'schools where parents want written emergency plans', 'senior grades where students have a clean record'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You recently stayed for two nights at a hotel while travelling to a family wedding. After you got home, you realized that you had left something valuable in your room. You also noticed a mistake on the bill that was charged to your credit card.</p><p>Write an email to the hotel manager. In your email, do the following:</p><ul><li>Describe the item you left behind and where you think it is.</li><li>Explain the mistake on your bill.</li><li>Say what you would like the hotel to do about both problems.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your company is planning its end-of-year holiday celebration and has asked employees which event they would prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'An evening dinner for employees and their partners at a downtown restaurant, with a three-course meal and a short awards presentation.' },
            { key: 'B', label: 'Option B', text: 'A Saturday family day at an indoor play centre, with lunch, games and activities for employees\' children.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you like to visit.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'Your cousin has received two job offers. One pays more but requires a long daily commute. The other pays less but is close to home and offers flexible hours. Give your cousin advice on how to choose.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you helped a stranger. What happened, and how did you feel afterward?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: MARKET },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: MARKET },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family has decided to get a pet. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Adopt a cat', image: CAT, facts: ['Adoption fee: $150', 'Food and litter: about $60 a month', 'Can stay alone during a workday', 'Lives about 15 years'] },
            { key: 'B', title: 'Adopt a dog', image: DOG, facts: ['Adoption fee: $350', 'Food and care: about $120 a month', 'Needs two 30-minute walks a day', 'Lives about 12 years'] }
          ],
          third: { key: 'C', title: 'Aquarium fish', image: FISH, facts: ['Tank and equipment: $250', 'Food and supplies: about $20 a month', 'Tank cleaning: 1 hour a week', 'Quiet and takes little space'] },
          persuade: 'Your family member suggests getting aquarium fish instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Your best friend is moving overseas for work and is holding a farewell dinner next Saturday evening. You have just learned that your sister has planned a surprise party for your parents\' 35th wedding anniversary on the same evening, and she is counting on you to give a speech.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot come to the farewell dinner.</p><p><b>Option B:</b> Talk to your sister. Explain why you cannot come to the anniversary party.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Should cities offer free public transit to everyone? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a kitchen store and see this unusual appliance. Call your friend who loves kitchen gadgets. Describe the appliance and explain whether you think your friend should buy it.', image: GADGET }
      ]
    }
  });
})();
