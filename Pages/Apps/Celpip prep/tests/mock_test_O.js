/* Rowe CELPIP Mock Exam: Test O content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly harder than the real test (CLB 8 to 11).
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
      : arms === 'front' ? '<line x1="-7" y1="-30" x2="14" y2="-28" /><line x1="7" y1="-30" x2="20" y2="-26" />'
      : '<line x1="-7" y1="-30" x2="-12" y2="-14" /><line x1="7" y1="-30" x2="12" y2="-14" />';
    var legs = o.sit ? '<line x1="-4" y1="-12" x2="-14" y2="-12" /><line x1="4" y1="-12" x2="-6" y2="-12" /><line x1="-14" y1="-12" x2="-14" y2="0" /><line x1="-6" y1="-12" x2="-6" y2="0" />'
      : o.walk ? '<line x1="-4" y1="-12" x2="-10" y2="0" /><line x1="4" y1="-12" x2="10" y2="0" />'
      : '<line x1="-4" y1="-12" x2="-7" y2="0" /><line x1="4" y1="-12" x2="7" y2="0" />';
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<g stroke="' + skin + '" stroke-width="4" stroke-linecap="round">' + a + '</g>' +
      '<g stroke="' + pants + '" stroke-width="5" stroke-linecap="round">' + legs + '</g>' +
      '<rect x="-8" y="-36" width="16" height="25" rx="5" fill="' + shirt + '"/>' +
      '<circle cx="0" cy="-45" r="9" fill="' + skin + '"/>' +
      '<path d="M-9 -46 a9 9 0 0 1 18 0 q-9 -6 -18 0z" fill="' + hair + '"/>' +
      '</g>';
  }

  function helmet(x, y, s, c) {
    s = s || 1;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-12 0 a12 11 0 0 1 24 0z" fill="' + (c || '#f1c40f') + '"/><rect x="-16" y="-2" width="32" height="4" rx="2" fill="' + (c || '#f1c40f') + '"/></g>';
  }

  var FIREHALL = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A busy open house at a small-town fire hall">';
    p += '<rect width="640" height="400" fill="#cfe8f7"/>';
    p += '<g fill="#ffffff"><ellipse cx="420" cy="50" rx="60" ry="16"/><ellipse cx="560" cy="80" rx="45" ry="12"/></g>';
    /* paved lot and grass */
    p += '<rect y="250" width="640" height="150" fill="#b8b8b0"/><rect y="244" width="640" height="8" fill="#8fbf6a"/>';
    /* fire hall building */
    p += '<rect x="20" y="96" width="240" height="156" fill="#b5523b"/><polygon points="10,100 140,52 270,100" fill="#7b2d1f"/>';
    p += '<rect x="60" y="150" width="110" height="102" fill="#3b3b3b"/><g stroke="#555" stroke-width="2"><line x1="60" y1="170" x2="170" y2="170"/><line x1="60" y1="190" x2="170" y2="190"/></g>';
    p += '<rect x="186" y="160" width="50" height="40" fill="#d6eaf8" stroke="#7b2d1f" stroke-width="3"/>';
    p += '<rect x="70" y="106" width="140" height="24" rx="3" fill="#ffffff"/><text x="140" y="123" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#a93226">FIRE HALL</text>';
    /* bunting being hung by a man on a ladder */
    p += '<path d="M20 140 Q60 152 100 142" stroke="#555" stroke-width="1.5" fill="none"/><g><polygon points="30,143 38,143 34,153" fill="#e74c3c"/><polygon points="48,147 56,147 52,157" fill="#f1c40f"/><polygon points="66,148 74,148 70,158" fill="#3498db"/><polygon points="84,146 92,146 88,156" fill="#2ecc71"/></g>';
    p += '<g stroke="#9a7d0a" stroke-width="3"><line x1="22" y1="252" x2="8" y2="150"/><line x1="38" y1="252" x2="24" y2="150"/></g><g stroke="#9a7d0a" stroke-width="2"><line x1="20" y1="232" x2="36" y2="232"/><line x1="17" y1="210" x2="33" y2="210"/><line x1="14" y1="188" x2="30" y2="188"/><line x1="11" y1="166" x2="27" y2="166"/></g>';
    p += person(24, 196, { shirt: '#27ae60', skin: '#c98c64', hair: '#2a1b12', arms: 'right', s: .85 });
    /* fire truck */
    p += '<rect x="250" y="190" width="200" height="56" rx="6" fill="#d62c1a"/><rect x="400" y="166" width="54" height="50" rx="6" fill="#d62c1a"/><rect x="410" y="174" width="36" height="22" fill="#d6eaf8"/>';
    p += '<g stroke="#bdc3c7" stroke-width="3"><line x1="262" y1="182" x2="392" y2="182"/><line x1="262" y1="190" x2="392" y2="190"/></g><g stroke="#bdc3c7" stroke-width="2"><line x1="280" y1="182" x2="280" y2="190"/><line x1="310" y1="182" x2="310" y2="190"/><line x1="340" y1="182" x2="340" y2="190"/><line x1="370" y1="182" x2="370" y2="190"/></g>';
    p += '<rect x="262" y="214" width="120" height="6" fill="#f4f6f7"/><circle cx="290" cy="250" r="15" fill="#2c3e50"/><circle cx="290" cy="250" r="6" fill="#bdc3c7"/><circle cx="420" cy="250" r="15" fill="#2c3e50"/><circle cx="420" cy="250" r="6" fill="#bdc3c7"/>';
    /* child in the cab, waving */
    p += '<circle cx="428" cy="186" r="7" fill="#f2cfb0"/><path d="M421 185 a7 7 0 0 1 14 0z" fill="#d9b56a"/><line x1="434" y1="190" x2="442" y2="178" stroke="#f2cfb0" stroke-width="3" stroke-linecap="round"/>';
    /* firefighter spraying a hose */
    p += helmet(484, 228, 1, '#f1c40f');
    p += person(484, 286, { shirt: '#c0392b', pants: '#2c3e50', skin: '#8d5a3b', hair: '#120c08', arms: 'front' });
    p += '<path d="M450 286 Q470 262 502 258" stroke="#566573" stroke-width="5" fill="none"/>';
    p += '<path d="M506 256 Q560 214 604 296" stroke="#5dade2" stroke-width="5" fill="none" opacity=".85"/><g fill="#5dade2"><circle cx="600" cy="300" r="3"/><circle cx="608" cy="292" r="2.5"/><circle cx="596" cy="306" r="2.5"/></g>';
    /* target cones */
    p += '<polygon points="616,300 624,280 632,300" fill="#e67e22"/>';
    /* man carrying a cake walking into the spray */
    p += person(580, 330, { shirt: '#f4d03f', skin: '#f0c9a6', hair: '#5d4037', arms: 'front', walk: true });
    p += '<rect x="586" y="288" width="34" height="18" rx="3" fill="#fdfefe" stroke="#e8a0b0" stroke-width="2"/><rect x="584" y="304" width="38" height="4" fill="#bdc3c7"/><g fill="#e74c3c"><circle cx="594" cy="286" r="2"/><circle cx="604" cy="286" r="2"/><circle cx="614" cy="286" r="2"/></g><text x="603" y="300" font-size="7" text-anchor="middle" font-family="sans-serif" fill="#c0392b">CAKE</text>';
    /* face painting table */
    p += '<rect x="30" y="318" width="96" height="8" fill="#8e44ad"/><g stroke="#5b2c6f" stroke-width="3"><line x1="38" y1="326" x2="38" y2="350"/><line x1="118" y1="326" x2="118" y2="350"/></g><rect x="40" y="290" width="76" height="16" rx="3" fill="#ffffff" stroke="#8e44ad"/><text x="78" y="302" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#8e44ad">FACE PAINTING</text>';
    p += person(40, 372, { sit: true, shirt: '#e91e63', skin: '#a9714b', hair: '#1d1410', arms: 'right' });
    p += person(118, 372, { sit: true, shirt: '#2980b9', skin: '#f2cfb0', hair: '#c49a42', s: .75 });
    p += '<g fill="#e74c3c"><circle cx="112" cy="337" r="2"/><circle cx="116" cy="340" r="2"/></g>';
    /* barbecue with smoke */
    p += '<rect x="186" y="318" width="56" height="20" rx="4" fill="#2c3e50"/><g stroke="#2c3e50" stroke-width="3"><line x1="192" y1="338" x2="188" y2="364"/><line x1="236" y1="338" x2="240" y2="364"/></g><g fill="#8b4513"><ellipse cx="200" cy="316" rx="7" ry="3"/><ellipse cx="214" cy="316" rx="7" ry="3"/><ellipse cx="228" cy="316" rx="7" ry="3"/></g>';
    p += '<g fill="#d5d8dc" opacity=".8"><circle cx="206" cy="300" r="8"/><circle cx="216" cy="286" r="10"/><circle cx="208" cy="270" r="9"/></g>';
    p += person(262, 360, { shirt: '#ffffff', skin: '#6b4226', hair: '#120c08', arms: 'left' });
    p += '<line x1="238" y1="324" x2="230" y2="314" stroke="#7f8c8d" stroke-width="3"/>';
    /* Dalmatian dog eyeing the barbecue */
    p += '<g><ellipse cx="166" cy="372" rx="18" ry="9" fill="#ffffff" stroke="#333" stroke-width="1"/><circle cx="184" cy="362" r="8" fill="#ffffff" stroke="#333" stroke-width="1"/><g fill="#222"><circle cx="160" cy="370" r="2.5"/><circle cx="170" cy="374" r="2"/><circle cx="154" cy="374" r="2"/><circle cx="186" cy="360" r="1.6"/></g><rect x="154" y="378" width="3" height="10" fill="#fff" stroke="#333" stroke-width=".5"/><rect x="174" y="378" width="3" height="10" fill="#fff" stroke="#333" stroke-width=".5"/></g>';
    /* child trying on a big helmet with a firefighter helping */
    p += person(330, 392, { shirt: '#16a085', skin: '#c98c64', hair: '#1d1410', s: .7 });
    p += helmet(330, 362, 1.4, '#f1c40f');
    p += person(372, 392, { shirt: '#c0392b', pants: '#2c3e50', skin: '#f0c9a6', hair: '#8b5a2b', arms: 'left' });
    /* girl whose balloon is floating away */
    p += person(470, 392, { shirt: '#f39c12', skin: '#e3b28b', hair: '#3b2a20', s: .75, arms: 'up' });
    p += '<ellipse cx="500" cy="318" rx="12" ry="15" fill="#e74c3c"/><path d="M500 333 q-6 10 2 18 q-6 8 -2 14" stroke="#555" stroke-width="1" fill="none"/>';
    p += '</svg>';
    return p;
  })();

  var CLINIC = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#eef5fb"/><rect y="100" width="200" height="20" fill="#bdc3c7"/>' +
    '<rect x="20" y="30" width="160" height="72" fill="#ffffff" stroke="#2e86c1" stroke-width="2"/><rect x="20" y="16" width="160" height="18" fill="#2e86c1"/><text x="100" y="29" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#ffffff">EYE CLINIC</text>' +
    '<rect x="34" y="44" width="40" height="50" fill="#fdfefe" stroke="#7f8c8d"/><text x="54" y="58" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#333">E</text><text x="54" y="72" font-size="8" text-anchor="middle" font-family="sans-serif" fill="#333">F P</text><text x="54" y="84" font-size="6" text-anchor="middle" font-family="sans-serif" fill="#333">T O Z</text>' +
    '<g stroke="#333" stroke-width="3" fill="none"><circle cx="118" cy="68" r="12"/><circle cx="152" cy="68" r="12"/><line x1="130" y1="68" x2="140" y2="68"/></g></svg>';

  var ONLINE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#f4f1fa"/>' +
    '<rect x="40" y="18" width="120" height="74" rx="4" fill="#34495e"/><rect x="46" y="24" width="108" height="62" fill="#ecf0f1"/><rect x="28" y="92" width="144" height="8" rx="3" fill="#7f8c8d"/>' +
    '<g stroke="#8e44ad" stroke-width="3" fill="none"><circle cx="82" cy="54" r="11"/><circle cx="114" cy="54" r="11"/><line x1="93" y1="54" x2="103" y2="54"/></g><rect x="70" y="72" width="60" height="9" rx="3" fill="#27ae60"/><text x="100" y="79" font-size="6" text-anchor="middle" font-family="sans-serif" fill="#ffffff">ORDER NOW</text>' +
    '<rect x="150" y="80" width="36" height="26" fill="#d4a76a" stroke="#a0784a"/><line x1="150" y1="88" x2="186" y2="88" stroke="#a0784a"/></svg>';

  var OPTICAL = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e9f7ef"/><rect y="98" width="200" height="22" fill="#95a5a6"/>' +
    '<rect x="10" y="26" width="180" height="74" fill="#d5dbdb"/><rect x="10" y="14" width="180" height="16" fill="#1e8449"/><text x="100" y="26" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#ffffff">SUPERSTORE OPTICAL</text>' +
    '<rect x="78" y="56" width="44" height="44" fill="#d6eaf8" stroke="#7f8c8d"/><text x="100" y="48" font-size="8" text-anchor="middle" font-family="sans-serif" fill="#1e8449">READY TOMORROW</text>' +
    '<g stroke="#2c3e50" stroke-width="2" fill="none"><path d="M24 70 L32 70 L40 90 L62 90 L66 76 L36 76"/><circle cx="44" cy="96" r="3"/><circle cx="58" cy="96" r="3"/></g></svg>';

  var STROLLER = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual three-wheeled stroller in a baby store">' +
    '<rect width="640" height="400" fill="#fbf3ea"/><rect y="330" width="640" height="70" fill="#d7ccc8"/>' +
    '<rect x="24" y="24" width="170" height="52" rx="6" fill="#ffffff" stroke="#d7b899"/><text x="109" y="57" text-anchor="middle" font-family="sans-serif" font-size="19" fill="#8d6e63">BABY STORE</text>' +
    /* solar panel canopy */
    '<path d="M220 170 Q250 90 340 92 L340 170z" fill="#1f3a5f"/><g stroke="#5dade2" stroke-width="1.5"><line x1="250" y1="120" x2="340" y2="120"/><line x1="236" y1="145" x2="340" y2="145"/><line x1="280" y1="98" x2="280" y2="170"/><line x1="310" y1="93" x2="310" y2="170"/></g><rect x="254" y="124" width="72" height="16" rx="3" fill="#f4d03f"/><text x="290" y="136" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1f3a5f">SOLAR PANEL</text>' +
    /* seat */
    '<path d="M222 170 L340 170 L330 236 L236 236z" fill="#16a085"/><rect x="246" y="186" width="70" height="40" rx="8" fill="#1abc9c"/>' +
    /* handle with a horn and a cup holder */
    '<line x1="340" y1="170" x2="420" y2="90" stroke="#555" stroke-width="7" stroke-linecap="round"/><rect x="408" y="80" width="34" height="14" rx="6" fill="#2c3e50"/>' +
    '<circle cx="446" cy="76" r="9" fill="#e74c3c"/><path d="M455 72 L478 62 L478 90 L455 80z" fill="#f1c40f"/>' +
    '<rect x="380" y="118" width="22" height="26" rx="3" fill="#ffffff" stroke="#7f8c8d" stroke-width="2"/><rect x="383" y="108" width="16" height="12" fill="#a0522d"/>' +
    /* dog leash hook with a leash */
    '<path d="M362 150 q10 0 10 10" stroke="#555" stroke-width="3" fill="none"/><path d="M372 160 Q390 220 420 250" stroke="#c0392b" stroke-width="3" fill="none"/><circle cx="422" cy="252" r="5" fill="#7f8c8d"/>' +
    /* frame, cooler basket, standing step */
    '<line x1="280" y1="236" x2="250" y2="318" stroke="#555" stroke-width="6"/><line x1="320" y1="236" x2="372" y2="318" stroke="#555" stroke-width="6"/><line x1="280" y1="236" x2="170" y2="318" stroke="#555" stroke-width="6"/>' +
    '<rect x="248" y="254" width="92" height="40" rx="5" fill="#3498db"/><rect x="248" y="250" width="92" height="8" rx="3" fill="#ecf0f1"/><text x="294" y="279" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#ffffff">COOLER</text>' +
    '<rect x="350" y="296" width="60" height="10" rx="3" fill="#7f8c8d"/><text x="380" y="292" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#555">STEP</text>' +
    /* three wheels */
    '<circle cx="170" cy="328" r="22" fill="#2c3e50"/><circle cx="170" cy="328" r="8" fill="#bdc3c7"/><circle cx="250" cy="328" r="22" fill="#2c3e50"/><circle cx="250" cy="328" r="8" fill="#bdc3c7"/><circle cx="378" cy="328" r="22" fill="#2c3e50"/><circle cx="378" cy="328" r="8" fill="#bdc3c7"/>' +
    /* price tag */
    '<line x1="442" y1="94" x2="500" y2="150" stroke="#555" stroke-width="1.5"/><path d="M500 136 L580 136 L580 176 L500 176 L490 156z" fill="#f6d55c" stroke="#b7950b"/><circle cx="500" cy="156" r="3" fill="#fbf3ea"/><text x="538" y="163" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#333">$340</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'O',
    title: 'Mock Test O',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { PETRA: { name: 'Petra', g: 'f', skin: '#f2cfb0', hair: '#5a3825', shirt: '#e67e22', style: 'long' }, MALIK: { name: 'Malik', g: 'm', skin: '#8d5a3b', hair: '#120c08', shirt: '#1f618d', style: 'short' } },
        segments: [{
          lines: [
            ['PETRA', 'The sign says the lake loop is closed past the bridge. Part of the trail washed out.'],
            ['MALIK', 'So we either turn back, or we take the ridge trail. It\'s steeper, but it still ends at the parking lot.'],
            ['PETRA', 'Steeper, with your knee? Let\'s just go back the way we came. It\'s only forty minutes.'],
            ['MALIK', 'Fine, but we\'re stopping at the bench with the view.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Petra want to return the way they came?', o: ['She thinks the other route would be hard on Malik.', 'The ridge trail does not lead back to the parking lot.', 'Part of the ridge trail was washed out by the river.', 'She wants to rest at the bench that has a good view.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { SANJAY: { name: 'Sanjay', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#7d3c98', style: 'short' }, BRIDGET: { name: 'Bridget', g: 'f', skin: '#f0c9a6', hair: '#b03a2e', shirt: '#117864', style: 'curly' } },
          segments: [
            {
              lines: [
                ['SANJAY', 'Bridget, the city just sent this morning\'s ice report for the lake. It isn\'t good. They measured twenty-two centimetres near the shore.'],
                ['BRIDGET', 'Twenty-two? They won\'t let a crowd on it under thirty. Frostbite Days opens a week from Friday.'],
                ['SANJAY', 'I know. That warm spell last week really set us back. The city engineer thinks it could still reach thirty if we get a few nights below minus twenty, but she wouldn\'t promise anything.'],
                ['BRIDGET', 'And when do they make the final call?'],
                ['SANJAY', 'Next Wednesday. So, two days before we open.'],
                ['BRIDGET', 'That\'s far too late for the sculptors. They need their ice blocks set in place at least five days ahead. And the blocks get cut from the lake too, don\'t they?'],
                ['SANJAY', 'They do. Actually, no, sorry, not anymore. This year the arena\'s freezing them in its ice plant. So the blocks themselves are fine. It\'s only the location that\'s a problem.'],
                ['BRIDGET', 'Well, at least that\'s one thing off the list.']
              ],
              questions: [
                { id: 'L1.1', q: 'What is the main problem the organizers face?', o: ['Their usual site may not be safe in time.', 'The festival must open a week later.', 'The ice blocks cannot be cut this year.', 'The city has refused to measure the ice.'] },
                { id: 'L1.2', q: 'Why is a decision next Wednesday a problem?', o: ['The sculptors need to start setting up before then.', 'The city engineer will be away until that Friday.', 'The forecast shows another warm spell that day.', 'The arena needs that day to freeze the ice blocks.'] },
                { id: 'L1.3', q: 'What does Sanjay correct about the ice blocks?', o: ['They are being made indoors this year.', 'They are being cut from the lake as usual.', 'They have to be in place five days ahead.', 'They are too thin to be carved safely.'] }
              ]
            },
            {
              lines: [
                ['BRIDGET', 'So we need a backup site, and we need to choose it now, not next Wednesday.'],
                ['SANJAY', 'What about the exhibition grounds? It\'s a huge paved lot, right on the bus route, and there\'s lighting already.'],
                ['BRIDGET', 'But no skating. Half the people come to Frostbite Days for the skating, not the sculptures.'],
                ['SANJAY', 'The fire department floods the outdoor rinks every winter. If they lend us their water truck, we could build a rink right on the pavement.'],
                ['BRIDGET', 'Would it be ready in time?'],
                ['SANJAY', 'With these overnight lows, two nights of flooding should do it. Actually, wait. The chief said three, to be safe. And honestly, a paved lot\'s flatter than the lake ever was.'],
                ['BRIDGET', 'Okay. Let\'s book the grounds today. And if the lake does freeze thick enough, we could still hold a family skate out there on the last weekend.'],
                ['SANJAY', 'I like that. It gives people a reason to come back.']
              ],
              questions: [
                { id: 'L1.4', q: 'What drawback of the exhibition grounds does Bridget point out?', o: ['Visitors would miss one of the main attractions.', 'The site would need lighting for evening events.', 'The lot is too far from the city bus route.', 'The pavement is too uneven for a good rink.'] },
                { id: 'L1.5', q: 'How long will it take to prepare the rink?', o: ['Three nights', 'Two nights', 'Five nights', 'Seven nights'] },
                { id: 'L1.6', q: 'What does Bridget suggest about the lake?', o: ['It might still be used later if conditions improve.', 'The sculptures could be moved there for the last weekend.', 'The fire department should flood it again this week.', 'It will be closed to the public for the whole festival.'] }
              ]
            },
            {
              lines: [
                ['SANJAY', 'Okay, the grounds are booked. The vendors are mostly fine with the move, except the hot chocolate stand. They say there\'s no power outlet out where we\'ve put them.'],
                ['BRIDGET', 'Couldn\'t they use a generator?'],
                ['SANJAY', 'They could, but they\'d have to rent one, and they\'re a youth group raising money for a band trip. It would eat up most of what they make.'],
                ['BRIDGET', 'Then let\'s put them right beside the building and move the face painting out to the far end. Face painting doesn\'t need power.'],
                ['SANJAY', 'Good idea. They\'ll be the first thing people smell when they walk in, too. Last thing: every poster in town says "on the lake."'],
                ['BRIDGET', 'Ugh, right. We\'ve got about two hundred of those up. Let\'s not reprint them. Put "new location" stickers over the address and post the change online tonight.'],
                ['SANJAY', 'I\'ll get the high school volunteers to do the stickers after class tomorrow.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why is the hot chocolate stand unhappy with its spot?', o: ['Paying for its own power would cut into its fundraising.', 'The youth group has no way to travel to the grounds.', 'The face painters were given the place by the building.', 'The organizers will not allow generators at the site.'] },
                { id: 'L1.8', q: 'What does Bridget\'s decision about the posters suggest?', o: ['She wants a quick, low-cost fix.', 'She plans to reprint them later.', 'She wants to delay the announcement.', 'She would rather keep the old address.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Customer service agent', g: 'm', skin: '#e8c39e', hair: '#151515', shirt: '#1a5276', style: 'short' }, ORLA: { name: 'Orla', g: 'f', skin: '#f2cfb0', hair: '#a0522d', shirt: '#a93226', style: 'long' } },
          segments: [{
            lines: [
              ['AGENT', 'Thanks for calling Maple Crate Home, this is Haruto. How can I help?'],
              ['ORLA', 'Hi, Haruto. I ordered a sofa from your website, and it arrived yesterday. I paid twelve hundred dollars for it. The problem is, I chose dark grey, and what showed up is more of a pale blue.'],
              ['AGENT', 'I\'m sorry about that. Could I have your order number?'],
              ['ORLA', 'It\'s M four four seven two one, under Orla Brennan.'],
              ['AGENT', 'Thanks. Okay, the order says Slate, which is our dark grey, so it sounds like the warehouse sent the wrong one. Do you still have the packaging?'],
              ['ORLA', 'Most of it. The delivery guys took the big box, but I kept the plastic, and the legs are still wrapped.'],
              ['AGENT', 'That\'s fine. So, you have a few options. We can send the right colour, but Slate is on back order, so that would be about six weeks. We\'d pick up the blue one when we drop off the new one.'],
              ['ORLA', 'Six weeks? My in-laws are coming for the holidays in three.'],
              ['AGENT', 'Or, if you like the sofa otherwise, you could keep it, and I\'d refund twenty percent of what you paid.'],
              ['ORLA', 'Hmm. Or I could send it back for a full refund?'],
              ['AGENT', 'You can. Normally large items have a seventy-nine dollar pickup fee, but since this was our mistake, we\'d waive it.'],
              ['ORLA', 'Here\'s the thing. Honestly, the blue isn\'t bad, and it\'s really comfortable. But it doesn\'t go with my curtains at all.'],
              ['AGENT', 'I hear that a lot. Some customers keep the sofa and buy one of our fitted covers in another colour. They\'re about a hundred and fifty.'],
              ['ORLA', 'Nice try. No, I think I\'ll take the refund and shop somewhere I can see the colour in person. When can you pick it up?'],
              ['AGENT', 'The earliest is Thursday, between eight and noon. Someone will need to be home to let the movers in.'],
              ['ORLA', 'I work Thursdays, but my neighbour has a key, and she\'s retired. That should work.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is Orla\'s problem with the sofa?', o: ['It is a different colour from the one she ordered.', 'It arrived without its legs and some packaging.', 'It looks different from the photos on the website.', 'It was damaged by the crew who delivered it.'] },
              { id: 'L2.2', q: 'Why does Orla not want an exchange?', o: ['The new sofa would not arrive before her guests.', 'She would have to pay a fee to have it picked up.', 'She no longer has the box the sofa came in.', 'The colour she ordered is no longer being made.'] },
              { id: 'L2.3', q: 'How much would Orla pay in total if she kept the blue sofa?', o: ['$960', '$1,200', '$240', '$1,121'] },
              { id: 'L2.4', q: 'How does Orla react to the idea of a sofa cover?', o: ['She sees it as an attempt to sell her something.', 'She thinks it is a sensible way to save money.', 'She asks whether one is available in dark grey.', 'She agrees to buy one along with new curtains.'] },
              { id: 'L2.5', q: 'Why does Orla choose a refund?', o: ['She wants to judge colours with her own eyes next time.', 'The refund would include the seventy-nine dollar fee.', 'She finds the blue sofa uncomfortable to sit on.', 'Her neighbour advised her to send the sofa back.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#e3b28b', hair: '#4a3020', shirt: '#566573', style: 'bun' }, CELESTE: { name: 'Celeste Abara', g: 'f', skin: '#5c3a21', hair: '#120c08', shirt: '#d35400', style: 'curly' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Celeste Abara, who started the Kitchen Table Club, an after-school program in north-central Regina. Celeste, how did it begin?'],
              ['CELESTE', 'Almost by accident. I lived across from an elementary school, and I noticed the same few kids sitting on the steps of the corner store every afternoon until dark.'],
              ['CELESTE', 'Their parents were at work, and the nearest program had a waiting list of over a year.'],
              ['HOST', 'So you invited them in?'],
              ['CELESTE', 'Not exactly. I couldn\'t bring other people\'s children into my apartment. But I asked the community hall down the street if I could use their kitchen two afternoons a week.'],
              ['CELESTE', 'They said yes, as long as I paid for the insurance. That first year, it was eight kids and me.'],
              ['HOST', 'And now?'],
              ['CELESTE', 'Now we run four afternoons a week, with about forty children between seven and twelve. Every day starts with an hour of homework, then we cook a meal together, and the kids eat before they go home.'],
              ['HOST', 'Why cooking?'],
              ['CELESTE', 'Partly because a lot of them were arriving hungry. But it\'s also sneaky learning. When you double a recipe, that\'s fractions. When you read the steps out loud, that\'s reading practice. Kids who hate worksheets will happily measure flour all afternoon.'],
              ['HOST', 'Who helps you run it?'],
              ['CELESTE', 'Volunteers, mostly retired teachers and university students in education. The students can count the hours toward their teaching placements, so it works for them too. And thanks to a grant from a local credit union, we now have one paid coordinator.'],
              ['HOST', 'Is the program free?'],
              ['CELESTE', 'For families, yes. But there\'s one rule: every family gives back two hours a month. Some parents cook, some drive, and one dad repaired every chair in the hall. At first I was afraid it would scare people off.'],
              ['HOST', 'Did it?'],
              ['CELESTE', 'Quite the opposite. Parents told me they liked not feeling like they were accepting charity. And a lot of them ended up becoming friends.'],
              ['HOST', 'What\'s been the biggest challenge?'],
              ['CELESTE', 'Space. The hall is booked every Friday, so we can\'t go to five days, and we now have thirty kids on our own waiting list. Which is a bit ironic, when you think about how this all started.'],
              ['HOST', 'So what\'s next?'],
              ['CELESTE', 'The school has offered us its cafeteria starting in January. If the parents can live with an earlier pickup time, we\'ll finally have room for everyone.']
            ],
            questions: [
              { id: 'L3.1', q: 'What first led Celeste to start the program?', o: ['She saw children with nowhere to go after school.', 'Her own children were on a long waiting list.', 'A corner store owner asked her to help some children.', 'The community hall wanted someone to use its kitchen.'] },
              { id: 'L3.2', q: 'What condition did the community hall set?', o: ['She had to cover the cost of insurance.', 'She could use the kitchen once a week.', 'She had to keep the group to eight children.', 'She had to leave the hall free on Fridays.'] },
              { id: 'L3.3', q: 'Why does Celeste call the cooking "sneaky learning"?', o: ['Children practise school skills without noticing.', 'Children cook secretly at home after the program.', 'Children are tested on the recipes every week.', 'Children cook instead of doing their homework.'] },
              { id: 'L3.4', q: 'Why do the university students volunteer?', o: ['The work counts toward their program requirements.', 'They are paid through a grant from a credit union.', 'They hope to become the program\'s next coordinator.', 'They attended the program when they were younger.'] },
              { id: 'L3.5', q: 'How did families react to the two-hour rule?', o: ['They were glad to be able to contribute.', 'Several of them left the program over it.', 'They asked to give more hours each month.', 'They preferred to donate money instead.'] },
              { id: 'L3.6', q: 'Why does Celeste describe her waiting list as ironic?', o: ['She began the club because another program was full.', 'The hall is always booked by other groups on Fridays.', 'The cafeteria will have more space than they need.', 'Most children on the list are already in the program.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Volunteer fire departments across rural New Brunswick say they are running short of people, and one community near Sussex is trying something new to bring them in.'],
              ['NEWS', 'The Kings Valley Fire Department, which protects about nine hundred homes, has just thirteen active members, down from twenty-eight a decade ago. Fire officials recommend at least twenty for a department of that size.'],
              ['NEWS', 'Chief Darlene Hachey says the problem is not a lack of interest. It is time. New recruits must complete about one hundred and fifty hours of training, mostly on weeknights, and many young parents simply cannot commit to that.'],
              ['NEWS', 'Starting this fall, the department will offer a new "support member" role. Support members will not enter burning buildings. Instead, they will drive equipment, control traffic at crash scenes, run the radio and help with paperwork, after only about twenty hours of training.'],
              ['NEWS', 'Hachey says the change would free trained firefighters for the work only they can do. At a typical highway collision, she points out, as many as four firefighters can be tied up just directing traffic.'],
              ['NEWS', 'Support members will be able to take the full training later if they choose.'],
              ['NEWS', 'The department has also signed agreements with two local employers, a dairy and a hardware store, which will let staff leave for emergency calls without losing pay.'],
              ['NEWS', 'Not everyone is convinced. A former deputy chief warns that a two-level system could cause confusion at emergency scenes, where everyone needs to know exactly who is allowed to do what.'],
              ['NEWS', 'Hachey says support members will wear helmets of a different colour to avoid exactly that problem.'],
              ['NEWS', 'An information night will be held next Tuesday at the fire hall on Main Street.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A rural department\'s new way of finding volunteers', 'A drop in emergency calls in rural New Brunswick', 'The opening of a new fire hall on Main Street', 'New training rules for firefighters in the province'] },
              { id: 'L4.2', q: 'According to the chief, people are not volunteering because', o: ['the full training demands too many evenings.', 'the department now protects too many homes.', 'they are not interested in fighting fires.', 'local employers will not give them time off.'] },
              { id: 'L4.3', q: 'Support members will', o: ['take on duties that do not involve fighting fires.', 'complete one hundred and fifty hours of training.', 'replace trained firefighters at every collision.', 'enter buildings alongside trained firefighters.'] },
              { id: 'L4.4', q: 'The chief mentions highway collisions to show that', o: ['trained members are often used for simple tasks.', 'crashes near Sussex have increased this year.', 'support members will need radios at each scene.', 'firefighters need more training in traffic control.'] },
              { id: 'L4.5', q: 'How does the chief answer the former deputy chief\'s concern?', o: ['Each member\'s role will be easy to see at a scene.', 'Support members will be fully trained before calls.', 'Only trained firefighters will go to highway crashes.', 'The two employers will supervise their own staff.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Tenant committee agenda', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { GRACE: { name: 'Grace', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#2874a6', style: 'bun' }, MAGNUS: { name: 'Magnus', g: 'm', skin: '#f2cfb0', hair: '#c49a42', shirt: '#7d6608', style: 'short' }, YVETTE: { name: 'Yvette', g: 'f', skin: '#e8c3a0', hair: '#5a3825', shirt: '#a93226', style: 'long' } },
          segments: [{
            lines: [
              ['GRACE', 'Okay, thanks for coming. The property manager says the new owner might stop allowing dogs in new leases.'],
              ['MAGNUS', 'Only new leases? So people who already have dogs can keep them?'],
              ['GRACE', 'For now. But she said if the complaints keep coming in, current tenants could face stricter rules too.'],
              ['YVETTE', 'What are the complaints, exactly? I hear some barking now and then, but nothing terrible.'],
              ['GRACE', 'Three things. Dog mess on the front lawn, dogs in the elevator, and two barking complaints from the fifth floor.'],
              ['MAGNUS', 'The lawn is the big one. I\'ve stepped in it twice this month, and I own a dog.'],
              ['YVETTE', 'There\'s no garbage can anywhere near the lawn. People carry the bags all the way around back.'],
              ['MAGNUS', 'So we ask for a waste station by the front door. Bags and a bin. It costs almost nothing.'],
              ['GRACE', 'The manager said she\'d pay for one if the committee agrees to empty it twice a week.'],
              ['YVETTE', 'I can do Mondays. I walk right past it on my way to the bus anyway.'],
              ['MAGNUS', 'I\'ll take Thursdays. Now, the elevator. That one\'s trickier.'],
              ['YVETTE', 'It is for me. I\'m allergic, so sometimes I wait for the next elevator, and it\'s slow.'],
              ['GRACE', 'Some buildings set aside one elevator for pets. We have two, so that could work here.'],
              ['MAGNUS', 'But the service elevator is at the back. Dog owners would have to walk past the mailboxes.'],
              ['YVETTE', 'Honestly, a short walk seems fair, compared with me missing my bus.'],
              ['MAGNUS', 'Fair enough. If it\'s posted clearly, I\'ll explain it to the other dog owners myself.'],
              ['GRACE', 'Good. Barking is the last one. Both complaints are about the same unit, five-oh-eight.'],
              ['YVETTE', 'Isn\'t that the couple with the new puppy? They both work long shifts at the hospital.'],
              ['MAGNUS', 'A puppy alone for ten hours is going to bark. I don\'t blame the dog.'],
              ['GRACE', 'I\'d rather talk to them before the manager does. A letter from her would feel like a threat.'],
              ['YVETTE', 'Maybe someone could offer a midday walk. A teenager in the building might do it for a few dollars.'],
              ['MAGNUS', 'My nephew on the second floor would jump at that. He\'s saving up for a bike.'],
              ['GRACE', 'Perfect. Let\'s write all this up so the manager sees we\'re taking it seriously.'],
              ['YVETTE', 'Should we point out that the tenants solved it ourselves? That might matter to the new owner.'],
              ['MAGNUS', 'Definitely. If owners and non-owners are working together, a ban starts to look unnecessary.'],
              ['GRACE', 'Agreed. I\'ll send you both a draft by Friday, and you can add anything I\'ve missed.']
            ],
            questions: [
              { id: 'L5.1', q: 'What prompted the meeting?', o: ['A possible change to the building\'s rules on pets', 'A complaint about a new puppy on the fifth floor', 'A request from the manager to hire a dog walker', 'A decision by the owner to remove all dogs'] },
              { id: 'L5.2', q: 'What does Grace say about tenants who already have dogs?', o: ['Their situation could change if problems continue.', 'They must find new homes for their dogs this year.', 'They will need to register their dogs with the manager.', 'They will not be affected by any new rules at all.'] },
              { id: 'L5.3', q: 'Why does Magnus mention that he owns a dog?', o: ['To show that even owners find the lawn problem serious', 'To explain why he was the one who made the complaint', 'To offer to clean up the front lawn by himself', 'To show that his own dog is not responsible'] },
              { id: 'L5.4', q: 'According to Yvette, why do some owners not clean up properly?', o: ['There is nowhere nearby to throw the waste away.', 'There are no bags available at the front door.', 'Most owners walk their dogs around the back.', 'The manager refuses to pay for a garbage bin.'] },
              { id: 'L5.5', q: 'What does the manager want in return for a waste station?', o: ['Committee members must take charge of emptying it.', 'Tenants must pay for the bin and the supply of bags.', 'Dog owners must use the back door of the building.', 'Yvette must stop using the front elevator for now.'] },
              { id: 'L5.6', q: 'Why does Yvette support a separate elevator for pets?', o: ['Avoiding dogs sometimes makes her late.', 'She was once bitten in the elevator.', 'The service elevator is closer to her unit.', 'Dogs often block the front mailboxes.'] },
              { id: 'L5.7', q: 'What can be inferred about the barking problem?', o: ['The puppy is probably left alone for long periods.', 'The couple in five-oh-eight have refused to help.', 'Several units on the fifth floor have new puppies.', 'The manager has already sent the couple a letter.'] },
              { id: 'L5.8', q: 'Why does Grace want to speak to the couple herself?', o: ['A message from the manager might seem hostile.', 'The manager does not know which unit it is.', 'She would like to walk the puppy herself.', 'She is a close friend of the couple.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Eye exams before school?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#1e8449', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'When children start kindergarten, parents in many parts of Canada are asked to show that their child\'s vaccinations are up to date. Now some eye care professionals want a full eye exam added to that list.'],
              ['NARR', 'Annika Lindqvist, an optometrist in Charlottetown, says the case is simple: young children rarely complain about poor vision, because they have no idea that other people see more clearly.'],
              ['NARR', '"A five-year-old who can\'t see the board doesn\'t say so," she explains. "She just stops paying attention, and the teacher assumes it\'s a behaviour problem."'],
              ['NARR', 'Lindqvist argues that the quick checks some schools already offer are not enough.'],
              ['NARR', 'Reading letters off a chart across the room can catch a child who cannot see far away, but it often misses problems with focusing up close or with how the two eyes work together.'],
              ['NARR', 'Her second argument is about timing. Some conditions, such as a lazy eye, respond well to treatment in the early years but become much harder to correct once a child reaches eight or nine.'],
              ['NARR', 'She stresses, however, that a requirement must never keep a child out of class. Families who miss the deadline, she says, should get reminders and help booking an appointment, not a closed classroom door.'],
              ['NARR', 'Harold Benoit, an elementary school principal in Sudbury, agrees that every child should have an eye exam. Where he differs is on making it a condition of starting school.'],
              ['NARR', 'His first concern is access. In northern and rural communities, he says, the nearest optometrist may be an hour or more away, and the wait for an appointment can stretch to several months.'],
              ['NARR', 'Newcomer families, he adds, are often dealing with dozens of forms already, and one more requirement could feel like a barrier rather than a service.'],
              ['NARR', 'Benoit\'s second argument is practical. He says office staff would spend weeks every fall chasing missing paperwork, time that would otherwise go to supporting students and families.'],
              ['NARR', 'Instead, he would bring the eye care to the children. His school hosted a mobile eye clinic last spring, and in two days the visiting team examined almost every student in the building, including dozens who had never seen an eye doctor.'],
              ['NARR', 'Lindqvist welcomes mobile clinics, but she points out that they usually reach each school only once every few years, so a child could start school and struggle for a long time before the van arrives.'],
              ['NARR', 'Benoit replies that a rule on paper does not guarantee an exam either, and that some families would simply sign a form saying they had been, without ever going.'],
              ['NARR', 'He adds that a strict rule would put the most pressure on the very families who already find the system hardest to deal with.'],
              ['NARR', 'Both agree on one point: in most provinces, eye exams for children are already covered by public health plans, yet many parents do not know this. A simple information campaign, they say, could make a difference whatever is decided.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether children should need an eye exam to start school', 'How schools can reduce behaviour problems in kindergarten', 'Why mobile eye clinics are replacing local optometrists', 'Whether provinces should pay for children\'s glasses'] },
              { id: 'L6.2', q: 'According to Lindqvist, why do young children not report vision problems?', o: ['They do not realize their sight is unusual.', 'They are afraid of being seen as badly behaved.', 'Teachers rarely ask them about their eyesight.', 'They cannot yet read the letters on a chart.'] },
              { id: 'L6.3', q: 'What is Lindqvist\'s view of the checks some schools already do?', o: ['They detect only some types of problems.', 'They are more reliable than a full exam.', 'They should be done by classroom teachers.', 'They are mainly used to find a lazy eye.'] },
              { id: 'L6.4', q: 'On what point does Benoit agree with Lindqvist?', o: ['All children would benefit from having their eyes examined.', 'Schools should collect exam forms from every family each fall.', 'Families in rural areas can easily reach an optometrist.', 'Mobile clinics visit each school far too rarely to help.'] },
              { id: 'L6.5', q: 'Why does Benoit describe his school\'s mobile clinic?', o: ['To show it reached children who might otherwise be missed', 'To show that mobile clinics visit every school each year', 'To complain that the visit disrupted classes for two days', 'To explain how his office staff tracked missing forms'] },
              { id: 'L6.6', q: 'How does Benoit respond to Lindqvist\'s criticism of mobile clinics?', o: ['A requirement would not ensure exams really happen.', 'Mobile clinics could easily visit schools every year.', 'Most children see an optometrist before age eight.', 'Families who lie on forms could be kept out of school.'] }
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
          passage: '<h3>Message</h3><p>Dear Marisa,</p><p>Thank you for the birthday card, and sorry it has taken me a month to answer. I promised Aunt Rosa I would tell you everything about the new job, so here is the full report.</p><p>As you know, I started at the sawmill outside Prince George at the beginning of September. I thought I would be running machines by the second day. Instead, I spent my entire first week in a classroom. We learned how to lock out a machine before cleaning it, how to read the warning signs, and what to do if someone gets hurt. On the Thursday, we practised with fire extinguishers behind the building, which was the only part I really enjoyed at the time.</p><p>Then came my "buddy" period. For six weeks, every new worker is paired with someone experienced and is not allowed to work a station alone. My buddy is Wendell, who has been at the mill for twenty-six years. He says very little and smiles even less, so I was nervous around him at first. In my second week, I reached in to clear a jammed board without stopping the conveyor. Wendell hit the emergency stop and then, very calmly, held up his left hand. He is missing the tip of one finger. He did not say a word, and he did not need to.</p><p>I complained a lot about all the training back then, but I see things differently now. Last Tuesday, a new worker on the night shift tried to clear a jam the same way I had, and there was nobody beside him. He will be fine, but he will be off work for a month.</p><p>The good news is that my buddy period ends next Friday. If my supervisor signs off, I will move to the planer line and get a raise of two dollars an hour. The company also pays for anyone who wants to take the full first aid course, so I have signed up for the November session. It takes two full Saturdays, but I think it will be worth it.</p><p>I hope your nursing program is going well. Will you be home for the holidays?</p><p>Your cousin,<br>Teodor</p>',
          questions: [
            { id: 'R1.1', q: 'Teodor mentions Aunt Rosa to explain', o: ['why he is giving Marisa so much detail.', 'who sent him the card for his birthday.', 'why it has taken him a month to reply.', 'who helped him find work at the sawmill.'] },
            { id: 'R1.2', q: 'Teodor\'s first week was not what he expected because he', o: ['did not get to operate any of the machinery.', 'had to practise using fire extinguishers.', 'worked the night shift without a partner.', 'was paired with someone he did not like.'] },
            { id: 'R1.3', q: 'At first, Teodor felt uneasy around Wendell because Wendell', o: ['seemed quiet and rather unfriendly.', 'had reported him to the supervisor.', 'criticized his work in front of others.', 'insisted on stopping the conveyor often.'] },
            { id: 'R1.4', q: 'By holding up his hand, Wendell was most likely', o: ['showing Teodor what such a mistake can cost.', 'asking Teodor to help him clear the jam.', 'showing that the emergency stop had failed.', 'reminding Teodor to sign up for first aid.'] },
            { id: 'R1.5', q: 'The accident on the night shift suggests that', o: ['the rule about working in pairs has a real purpose.', 'night workers receive less training in the classroom.', 'Wendell was not paying attention to the new workers.', 'the conveyor at the mill was badly designed.'] },
            { id: 'R1.6', q: 'Teodor\'s move to the planer line depends on', o: ['approval from the person he reports to.', 'finishing the first aid course in November.', 'Wendell retiring from the mill next Friday.', 'agreeing to work two Saturdays a month.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Teodor,</p><p>What a letter! I laughed at the part about the fire extinguishers, but I have to admit that the story about [[R1.7]] gave me chills. It sounds like Wendell taught you more in one silent moment than [[R1.8]] did in a whole week.</p><p>I am so glad the man on the night shift will be all right. If he had had [[R1.9]] beside him, he probably would not have been hurt.</p><p>Congratulations on the raise, assuming your supervisor agrees. Two dollars more an hour adds up quickly! I am also impressed that you are giving up [[R1.10]] to learn first aid. As a future nurse, I approve, and you might even end up teaching me something.</p><p>Yes, I will be home for the holidays, from December 18 to January 3. Let\'s meet at Aunt Rosa\'s. By then, [[R1.11]], so you can tell me all about it.</p><p>Love,<br>Marisa</p>',
          blanks: [
            { id: 'R1.7', o: ['Wendell\'s missing fingertip', 'the drill behind the building', 'your week in the classroom', 'the warning signs you learned'] },
            { id: 'R1.8', o: ['all of your classroom lessons', 'the night-shift supervisor', 'your first aid instructor', 'the rest of the buddy period'] },
            { id: 'R1.9', o: ['an experienced partner', 'a fire extinguisher nearby', 'a clearer warning sign', 'a first aid instructor'] },
            { id: 'R1.10', o: ['two of your weekends', 'your Friday evenings', 'your planer line raise', 'a month of night shifts'] },
            { id: 'R1.11', o: ['you will be working at a new station', 'your buddy period will just be starting', 'Wendell will have retired from the mill', 'you will be back on the night shift'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Wapiti Ridge Provincial Park (near Hinton, Alberta): Day Hikes</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Trail</th><th>Length</th><th>Climb</th><th>Typical time</th><th>Dogs</th><th>Notes</th></tr></thead><tbody>' +
            '<tr><td>Beaver Pond Loop</td><td>4 km loop</td><td>50 m</td><td>1.5 hours</td><td>On leash</td><td>First 1 km is wheelchair accessible</td></tr>' +
            '<tr><td>Cutbank Canyon</td><td>9 km return</td><td>320 m</td><td>3.5 hours</td><td>On leash</td><td>Canyon views; closes when river is high</td></tr>' +
            '<tr><td>Ptarmigan Ridge</td><td>14 km return</td><td>780 m</td><td>6 hours</td><td>Not allowed</td><td>Best views in the park; wildlife area</td></tr>' +
            '<tr><td>Old Mine Road</td><td>11 km return</td><td>150 m</td><td>3.5 hours</td><td>On leash</td><td>Shared with cyclists</td></tr>' +
            '<tr><td>Wolf Lake Trail</td><td>7 km one way</td><td>240 m</td><td>3 hours one way</td><td>On leash</td><td>Ends at Wolf Lake; shuttle back to main lot</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Vehicle pass: $15 per vehicle per day, or $90 for an annual pass. Passes are not needed for walk-in or cycle-in visitors.</li><li>Wolf Lake shuttle: leaves Wolf Lake for the main lot at 2:00 p.m. and 5:00 p.m. only. $8 per person; children under 12 ride free. Reserve at least 24 hours ahead.</li><li>Ptarmigan Ridge: hikers must start before 10:00 a.m. From July 15 to September 15, groups of four or more people are required.</li><li>Cutbank Canyon closes whenever the river gauge at the trailhead reads above 2 metres. Check the board on the day of your hike.</li><li>Dogs must be on a leash no longer than 2 metres at all times.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Anders,</p><p>Thanks again for inviting me to join you and your niece at Wapiti Ridge next Saturday. I looked at the trail list, and here are my thoughts.</p><p>Since you are bringing Biscuit, Ptarmigan Ridge is out, which is a shame, because it has the best views. I would love to see a canyon, so [[R2.1]] is my first choice, as long as [[R2.2]] on the day.</p><p>If not, we could hike to Wolf Lake and take the shuttle back. If we start at 10:00, we should reach the lake at about [[R2.3]], in time for the first shuttle. The shuttle would cost us [[R2.4]] altogether, since your niece is only ten. We will all drive up together in your car, so the pass will be [[R2.5]].</p><p>Let me know what you think!</p><p>Jolene</p>',
          blanks: [
            { id: 'R2.1', o: ['Cutbank Canyon', 'Old Mine Road', 'Wolf Lake Trail', 'Beaver Pond Loop'] },
            { id: 'R2.2', o: ['the river is not running too high', 'we hike in a group of four or more', 'we start the hike before 10:00 a.m.', 'we reserve our places a day ahead'] },
            { id: 'R2.3', o: ['1:00 p.m.', '2:00 p.m.', '11:30 a.m.', '5:00 p.m.'] },
            { id: 'R2.4', o: ['$16', '$24', '$8', '$31'] },
            { id: 'R2.5', o: ['$15 for the day', '$45 for the three of us', '$90 for the whole year', 'free for walk-in visitors'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Three friends plan to hike Ptarmigan Ridge on August 2. To follow the park rules, they', o: ['will need at least one more person to join them.', 'can bring a dog if it stays on a short leash.', 'may start at any time before noon that day.', 'must reserve their places a day in advance.'] },
            { id: 'R2.7', q: 'Hikers who reach Wolf Lake at 2:30 p.m. and want to ride the shuttle will', o: ['have to wait for the later departure.', 'catch the shuttle that leaves at 2:00 p.m.', 'need to walk back on the same trail.', 'pay extra for a same-day reservation.'] },
            { id: 'R2.8', q: 'A couple will drive to the park in one car on seven separate days this year. Compared with buying a pass each day, an annual pass would', o: ['save them $15.', 'cost them $15 more.', 'save them $105.', 'cost the same amount.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>What Your Home Insurance Really Covers</h3><p><b>A.</b> Most homeowners in Canada carry home insurance, often because the bank that holds their mortgage insists on it. A standard policy usually protects three things: the building itself, the belongings inside it, and the owner\'s legal responsibility if someone is injured on the property. Tenants can buy a similar policy that covers their possessions and their liability, but not the building, which is the landlord\'s responsibility. Many renters skip this coverage, assuming that the landlord\'s insurance will replace their furniture and electronics after a fire or a break-in. In most cases, it will not. Condominium owners have yet another arrangement: the condominium corporation insures the shared structure, while each owner covers the inside of their own unit.</p><p><b>B.</b> The most common cause of claims is not fire or theft but water. Burst pipes, leaking dishwashers and overflowing toilets account for a large share of the damage that insurers pay for each year. Flooding from outside is a different matter. Water rising from a river or pouring in during heavy rain is often excluded from a basic policy and has to be added as an extra, sometimes called overland water coverage. Sewer backup, when water comes up through a basement floor drain, is usually a separate add-on as well. Many homeowners discover these gaps only after a storm.</p><p><b>C.</b> Every claim comes with a deductible, the amount the owner pays before the insurer contributes anything. Choosing a higher deductible lowers the yearly premium, which is why many people do it, but it also means that small repairs are paid entirely out of pocket. Making several small claims in a short period can also push future premiums up, or even lead an insurer to decide not to renew a policy. For this reason, some advisers suggest keeping savings at least equal to the deductible and saving claims for larger losses. Insurers also look at the age of a home\'s roof, wiring and plumbing when they set the price of a policy.</p><p><b>D.</b> When damage happens, the first step is to stop it from getting worse, for example by shutting off the water or covering a broken window. Insurers generally expect this and will pay back reasonable costs. Owners should photograph the damage before cleaning up and, if it is safe, keep damaged items until an adjuster has seen them. It also helps to write down the name of everyone you speak to at the insurance company, along with the date of each call. A home inventory, which is a list or video of belongings made in advance, can speed up a claim considerably, yet most people only make one after their first loss, when it is too late to help.</p>',
          questions: [
            { id: 'R3.1', q: 'Renters sometimes wrongly believe that someone else\'s policy protects their things.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Water entering from outside the home may need extra coverage.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Damaged property should not be thrown out too quickly.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'Frequent small claims can make it harder to keep a policy.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Leaks that start inside the home are behind many claims.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'Insurers usually pay for a hotel when a damaged home cannot be lived in.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'A lender may require a borrower to have insurance.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Drains in the lowest level of a home present a separate risk.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'Recording possessions ahead of time makes the process faster.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Buyer Beware? The Debate Over Used-Car Inspections</h3><p>Buying a used car from a private seller can save thousands of dollars compared with a dealership. It can also go badly wrong. In some parts of Canada, a vehicle must pass a safety inspection before it can be registered to a new owner. In others, buyers rely largely on the seller\'s word and their own judgment, and calls to make inspections mandatory everywhere are growing louder.</p><p>Aurelia Costa learned the hard way. Last spring, the Penticton teacher paid $7,800 for a seven-year-old hatchback she found online. The seller, a friendly retiree, told her the car had "never given him a day of trouble." Three weeks later, a mechanic told her the brake lines were badly rusted and the car was unsafe to drive. The repairs cost $2,300. "I did everything I thought I was supposed to do," Costa says. "I test-drove it, I asked questions, I checked the kilometres. But I\'m not a mechanic, and most buyers aren\'t." She believes every car sold privately should come with a recent inspection report, paid for by the seller.</p><p>Bashir Haidari, who runs a two-bay garage in Charlottetown, does dozens of pre-purchase inspections every year. He charges about $150 and says roughly one car in four that he looks at has a problem the buyer did not know about. Yet he is cautious about a legal requirement. "An inspection is a snapshot," he explains. "It tells you the brakes were fine on Tuesday. It doesn\'t tell you how the car was treated for the last seven years." He also worries that a mandatory system would create long waits at garages like his, especially in spring, when many people buy and sell. In his view, buyers should be strongly encouraged to get an independent inspection, and a seller who refuses should be treated as a warning sign.</p><p>Gerald Lindsay, a retired electrician in Moose Jaw who has sold four of his own cars privately, opposes the idea more firmly. He says inspection costs would fall hardest on people selling older, inexpensive vehicles. "If my car is worth $2,500, a $150 inspection plus maybe $400 of small repairs to pass it is a big bite," he says. He adds that many buyers of cheap cars are students or newcomers who know the car needs work and accept that in exchange for a low price. A requirement, he argues, would push some of these cars off the road entirely and leave buyers with fewer affordable choices.</p><p>Costa is unconvinced. "A low price shouldn\'t mean unsafe brakes," she says. "The person driving behind me never agreed to that risk."</p><p>Even so, there is some common ground. Haidari and Lindsay both support a free online tool that would let buyers check whether a vehicle has been in a serious accident or still has a loan owing on it. Costa says such a tool would have been useful to her too, but that no database could have found the rust under her car.</p>',
          questions: [
            { id: 'R4.1', q: 'The writer mentions that the seller was "a friendly retiree" to suggest that', o: ['a pleasant seller is no guarantee of a sound car.', 'older sellers usually take good care of their cars.', 'Costa had bought a car from the same man before.', 'the seller was hiding the rust from the buyer.'] },
            { id: 'R4.2', q: 'Costa believes that inspections should be', o: ['arranged and paid for by the person selling.', 'carried out by buyers who know about cars.', 'required only for cars over seven years old.', 'done by dealerships rather than by garages.'] },
            { id: 'R4.3', q: 'Haidari calls an inspection "a snapshot" to show that it', o: ['shows a car\'s current state but not its past.', 'can be done quickly in a single afternoon.', 'is cheaper than most buyers tend to expect.', 'is often wrong about the state of the brakes.'] },
            { id: 'R4.4', q: 'Lindsay\'s main concern is that a requirement would', o: ['reduce the supply of low-cost vehicles.', 'make garages much busier in the spring.', 'force sellers to lower their asking price.', 'stop newcomers from buying their first car.'] },
            { id: 'R4.5', q: 'When Costa mentions "the person driving behind me," she means that', o: ['unsafe cars put other people at risk, not only buyers.', 'another driver had warned her about her brakes.', 'she was in an accident caused by someone else.', 'drivers of cheap cars should leave more space.'] }
          ],
          reply: '<h3>Reader comment</h3><p>Last year I sold my old minivan privately, so this article hit home. Like Mr. Lindsay, I worried that [[R4.6]]. My van was worth about $3,000, and it needed new tires and a few small repairs before any inspection would pass it.</p><p>Still, Ms. Costa\'s story changed my mind. Her brakes had a problem that [[R4.7]]. In the end, I paid for an inspection myself and showed the report to everyone who came to look. To my surprise, [[R4.8]]: the second person who saw the van bought it on the spot.</p><p>I also agree with Mr. Haidari that buyers should be suspicious when [[R4.9]]. As for the online tool, it is a good start, but as Ms. Costa says, it [[R4.10]].</p>',
          blanks: [
            { id: 'R4.6', o: ['getting it ready to pass would cost too much for its value', 'buyers would refuse to pay the price I was asking', 'garages would be too busy to see me in the spring', 'an inspection would reveal an accident I had hidden'] },
            { id: 'R4.7', o: ['no careful test drive would have revealed', 'the seller had openly admitted to her', 'only appeared after several years', 'an online tool could easily have found'] },
            { id: 'R4.8', o: ['the report made the sale easier', 'the inspection found no problems', 'nobody bothered to read the report', 'the van failed the first inspection'] },
            { id: 'R4.9', o: ['a seller will not let them have the car checked', 'a car has more than one hundred thousand kilometres', 'a seller seems friendly and talks a lot', 'an inspection costs more than $150'] },
            { id: 'R4.10', o: ['cannot reveal the condition of hidden parts', 'shows only accidents from the past year', 'charges buyers a fee for every search', 'is useful only for very old vehicles'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Your seven-year-old attends an after-school program at your local community centre, which costs $380 a month. Yesterday, a notice said that starting next month, the fee will rise to $430 and the program will close at 5:30 p.m. instead of 6:00 p.m. because of a staff shortage. You finish work at 5:00 p.m., and your trip to the centre takes about 35 minutes.</p><p>Write an email to the program director. In your email, do the following:</p><ul><li>Explain how these changes will affect your family.</li><li>Ask about the reasons for the changes, or suggest a possible solution.</li><li>Say what you would like the director to do before the changes take effect.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer must provide yearly safety training to all staff and is asking employees which format they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'One full paid training day each year at an outside centre, with hands-on practice in first aid, using fire extinguishers and emergency evacuation. The whole team would be away on the same day, so regular work would pile up and some deadlines might be missed.' },
            { key: 'B', label: 'Option B', text: 'Six short online lessons spread over the year, about 30 minutes each, which employees complete at their desks whenever it is convenient. There would be no hands-on practice, and it would be easy for people to click through the lessons without paying attention.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a hobby or activity you enjoy in your free time, and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to adopt a dog from the local animal shelter. He lives alone in a one-bedroom apartment on the sixth floor, works ten-hour shifts four days a week, and says he can spend about $150 a month on a pet. Give your friend advice about whether and how he should adopt a dog.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you helped plan or organize an event, such as a party, a trip or a community activity. What went wrong, how did you deal with it, and what would you do differently next time?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: FIREHALL },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the man carrying the cake, the dog near the barbecue, the balloon and the man on the ladder.', image: FIREHALL },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You need new glasses before you start a new job in three weeks, where you will spend most of the day at a computer. Your workplace plan will pay up to $200, but not until after your first month. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Optometrist\'s clinic', image: CLINIC, facts: ['Frames and lenses: $380', 'Ready in 10 days', 'Measured and fitted in person; free adjustments for a year', 'Anti-glare screen coating included'] },
            { key: 'B', title: 'Online order', image: ONLINE, facts: ['Frames and lenses: $95', 'Arrives in about 3 weeks', 'You must measure your own eyes using a phone app', 'Returns within 30 days, with a $20 fee'] }
          ],
          third: { key: 'C', title: 'Superstore optical counter', image: OPTICAL, facts: ['Frames and lenses: $220', 'Ready the next day', 'Small choice of frames', 'Screen coating: $60 extra'] },
          persuade: 'Your partner thinks the superstore optical counter would be better. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Months ago, you promised to help your friend run his food booth at the town\'s folk festival this Saturday. He paid $400 for the booth and is counting on you, because his other helper has already cancelled. This morning, your elderly neighbour told you that her basement flooded, and the insurance adjuster can only visit on Saturday. She does not speak English well and has asked you to be there to help her explain the damage.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot help at his booth on Saturday.</p><p><b>Option B:</b> Talk to your neighbour. Explain why you cannot be there for the adjuster\'s visit.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>For forty years, your town\'s summer festival has ended with a fireworks show. This year, the festival committee is considering replacing the fireworks with a light show using hundreds of small drones, which would cost about the same. Supporters say drones are quieter for pets and young children and carry no risk of starting grass fires in a dry summer. Others say fireworks are a tradition that families look forward to, and that a drone show would feel less exciting.</p><p>The committee has asked residents for their views before it decides next month. Should the festival replace the fireworks with a drone show? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a baby store and see this unusual stroller. Call your sister, who has a two-year-old and a four-year-old, owns a large dog, and lives on the third floor of a building with no elevator. The stroller costs $340, weighs 15 kilograms, and folds down to just over a metre long. Her car has a small trunk. Describe the stroller and explain whether you think your sister should buy it.', image: STROLLER }
      ]
    }
  });
})();
