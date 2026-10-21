/* Rowe CELPIP Mock Exam: Test I content.
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

  /* ---------- S3/S4: a busy grocery store ---------- */
  var GROCERY = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A busy grocery store on a weekend afternoon">';
    p += '<rect width="640" height="400" fill="#d8cfbf"/>';
    p += '<rect width="640" height="232" fill="#f4efe2"/>';
    p += '<g stroke="#c7bca8" stroke-width="1"><line x1="0" y1="290" x2="640" y2="290"/><line x1="0" y1="350" x2="640" y2="350"/><line x1="160" y1="232" x2="120" y2="400"/><line x1="320" y1="232" x2="320" y2="400"/><line x1="480" y1="232" x2="520" y2="400"/></g>';
    /* shelves */
    p += '<rect x="18" y="50" width="236" height="180" fill="#c9b79c"/><rect x="24" y="56" width="224" height="168" fill="#efe6d6"/>';
    p += '<g fill="#8f7a5c"><rect x="24" y="96" width="224" height="5"/><rect x="24" y="140" width="224" height="5"/><rect x="24" y="184" width="224" height="5"/></g>';
    var cols = ['#d35400', '#2980b9', '#27ae60', '#c0392b', '#8e44ad', '#f1c40f'];
    [64, 108, 152, 196].forEach(function (y, r) {
      for (var i = 0; i < 10; i++) {
        if (r === 1 && i > 6) continue; /* gap on the second shelf where the worker is stocking */
        p += '<rect x="' + (30 + i * 21) + '" y="' + (y + (i % 2) * 4) + '" width="16" height="' + (28 - (i % 2) * 4) + '" fill="' + cols[(i + r) % 6] + '"/>';
      }
    });
    p += '<rect x="96" y="20" width="90" height="22" rx="3" fill="#2c3e50"/><text x="141" y="36" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#fff">AISLE 4</text>';
    /* worker on a step stool restocking */
    p += '<rect x="186" y="236" width="40" height="7" fill="#7f8c8d"/><g stroke="#7f8c8d" stroke-width="3"><line x1="190" y1="243" x2="186" y2="268"/><line x1="222" y1="243" x2="226" y2="268"/></g>';
    p += person(206, 236, { shirt: '#2e8b57', skin: '#a9714b', hair: '#120c08', arms: 'up' });
    p += '<rect x="186" y="164" width="38" height="20" fill="#b9874f" stroke="#8a6331"/>';
    p += '<rect x="232" y="246" width="40" height="26" fill="#b9874f" stroke="#8a6331"/><text x="252" y="263" font-size="8" text-anchor="middle" font-family="sans-serif" fill="#5a3d1c">STOCK</text>';
    /* sample table with server and a customer tasting */
    p += person(330, 262, { shirt: '#c0392b', skin: '#f0c9a6', hair: '#c49a42', arms: 'right' });
    p += '<ellipse cx="356" cy="225" rx="14" ry="4" fill="#bdc3c7"/><g fill="#f7dc6f"><rect x="348" y="218" width="5" height="5"/><rect x="356" y="217" width="5" height="5"/></g>';
    p += '<rect x="286" y="250" width="96" height="36" fill="#fff" stroke="#c0392b" stroke-width="2"/><text x="334" y="273" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#c0392b">FREE SAMPLES</text>';
    p += '<g fill="#f7dc6f"><rect x="296" y="243" width="6" height="6"/><rect x="306" y="243" width="6" height="6"/><rect x="368" y="243" width="6" height="6"/></g>';
    p += person(404, 296, { shirt: '#5d6d7e', skin: '#7a4b31', hair: '#1d1410', arms: 'left' });
    /* checkout */
    p += '<rect x="548" y="120" width="82" height="24" rx="3" fill="#16a085"/><text x="589" y="137" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#fff">CHECKOUT 3</text><line x1="589" y1="144" x2="589" y2="220" stroke="#555" stroke-width="3"/>';
    p += person(600, 246, { shirt: '#16a085', skin: '#e3b28b', hair: '#4a3020', arms: 'left' });
    p += '<rect x="560" y="210" width="26" height="20" fill="#34495e"/>';
    p += '<rect x="450" y="240" width="186" height="40" fill="#95a5a6"/><rect x="450" y="240" width="110" height="7" fill="#2c3e50"/>';
    p += '<g><rect x="470" y="231" width="12" height="9" fill="#e67e22"/><rect x="490" y="229" width="10" height="11" fill="#2980b9"/><rect x="520" y="233" width="16" height="7" fill="#f1c40f"/></g>';
    p += person(548, 304, { shirt: '#8e44ad', skin: '#c98c64', hair: '#2a1b12', arms: 'right' });
    p += person(506, 306, { shirt: '#f39c12', skin: '#f2cfb0', hair: '#d8d8d8' });
    p += person(466, 308, { shirt: '#2980b9', skin: '#8d5a3b', hair: '#120c08', arms: 'right' });
    p += '<rect x="486" y="270" width="18" height="12" fill="none" stroke="#c0392b" stroke-width="2"/>';
    /* oranges display */
    p += '<rect x="18" y="318" width="116" height="34" fill="#a0522d"/><rect x="24" y="352" width="6" height="18" fill="#6e3b1e"/><rect x="122" y="352" width="6" height="18" fill="#6e3b1e"/>';
    p += '<text x="76" y="340" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#fff">ORANGES 3 for $2</text>';
    for (var row = 0; row < 5; row++) {
      for (var k = 0; k < 7 - row; k++) {
        p += '<circle cx="' + (40 + row * 7 + k * 14) + '" cy="' + (311 - row * 12) + '" r="7" fill="#f39c12" stroke="#d35400" stroke-width="1"/>';
      }
    }
    /* child standing in a cart grabbing an orange, parent pushing */
    p += '<g stroke="#7f8c8d" stroke-width="2" fill="none"><path d="M146 322 L214 322 L208 352 L152 352 Z"/><line x1="160" y1="322" x2="158" y2="352"/><line x1="176" y1="322" x2="175" y2="352"/><line x1="192" y1="322" x2="192" y2="352"/><line x1="214" y1="322" x2="228" y2="312"/><line x1="152" y1="352" x2="152" y2="366"/><line x1="208" y1="352" x2="208" y2="366"/></g>';
    p += '<circle cx="152" cy="370" r="5" fill="#333"/><circle cx="208" cy="370" r="5" fill="#333"/>';
    p += person(182, 344, { s: .7, shirt: '#e84393', skin: '#d6a07a', hair: '#3b2a20', arms: 'left' });
    p += '<circle cx="163" cy="317" r="6" fill="#f39c12" stroke="#d35400"/>';
    p += person(246, 376, { shirt: '#34495e', skin: '#d6a07a', hair: '#3b2a20', arms: 'left' });
    /* leaning tower of cans with a cart heading toward it */
    p += '<g transform="rotate(7 360 386)">';
    var cy0 = [364, 342, 320, 298];
    cy0.forEach(function (yy, r) {
      for (var c = 0; c < 4 - r; c++) {
        var xx = 322 + r * 10 + c * 20;
        p += '<rect x="' + xx + '" y="' + yy + '" width="18" height="22" fill="#c0392b" stroke="#7b241c"/><rect x="' + xx + '" y="' + (yy + 7) + '" width="18" height="7" fill="#fdfefe"/>';
      }
    });
    p += '</g>';
    p += '<g stroke="#555" stroke-width="2"><path d="M398 290 q6 -4 10 0"/><path d="M402 282 q6 -4 10 0"/></g>';
    p += '<rect x="292" y="356" width="24" height="16" fill="#f1c40f"/><text x="304" y="368" font-size="8" text-anchor="middle" font-family="sans-serif" fill="#333">SALE</text>';
    p += '<g stroke="#7f8c8d" stroke-width="2" fill="none"><path d="M424 350 L490 350 L484 378 L430 378 Z"/><line x1="440" y1="350" x2="438" y2="378"/><line x1="458" y1="350" x2="457" y2="378"/><line x1="474" y1="350" x2="473" y2="378"/><line x1="490" y1="350" x2="504" y2="340"/></g>';
    p += '<circle cx="434" cy="386" r="5" fill="#333"/><circle cx="482" cy="386" r="5" fill="#333"/>';
    p += '<g stroke="#999" stroke-width="2"><line x1="545" y1="352" x2="565" y2="352"/><line x1="548" y1="362" x2="572" y2="362"/></g>';
    p += person(526, 390, { shirt: '#7d3c98', skin: '#f0c9a6', hair: '#555555', arms: 'left' });
    p += '<rect x="534" y="368" width="7" height="12" rx="1" fill="#222"/><rect x="535" y="369" width="5" height="8" fill="#85c1e9"/>';
    p += '</svg>';
    return p;
  })();

  /* ---------- S5: dinner options ---------- */
  var COOK = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#fdf3e3"/><rect y="78" width="200" height="42" fill="#d5c4a1"/><rect x="40" y="62" width="80" height="58" fill="#ecf0f1" stroke="#95a5a6"/><g fill="#2c3e50"><ellipse cx="62" cy="64" rx="14" ry="3"/><ellipse cx="98" cy="64" rx="14" ry="3"/></g><rect x="50" y="42" width="26" height="20" rx="3" fill="#c0392b"/><line x1="44" y1="46" x2="50" y2="46" stroke="#555" stroke-width="3"/><g stroke="#bbb" stroke-width="2" fill="none"><path d="M56 38 q4 -6 0 -12"/><path d="M66 38 q4 -6 0 -12"/></g><rect x="130" y="66" width="44" height="10" rx="2" fill="#a0522d"/><g fill="#27ae60"><circle cx="142" cy="63" r="4"/><circle cx="150" cy="63" r="4"/></g><circle cx="162" cy="63" r="4" fill="#e74c3c"/><text x="100" y="18" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">HOME COOKING</text></svg>';
  var TAKEOUT = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#eaf2f8"/><rect y="88" width="200" height="32" fill="#b9a68a"/><path d="M40 40 L100 40 L106 100 L34 100 Z" fill="#c8a165"/><path d="M52 40 q18 -18 36 0" stroke="#8a6331" stroke-width="3" fill="none"/><text x="70" y="74" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#5a3d1c">TAKEOUT</text><path d="M122 66 L170 66 L164 100 L128 100 Z" fill="#fff" stroke="#95a5a6"/><path d="M122 66 L134 54 L158 54 L170 66" fill="#ecf0f1" stroke="#95a5a6"/><line x1="140" y1="54" x2="152" y2="40" stroke="#c0392b" stroke-width="2"/><line x1="146" y1="54" x2="156" y2="42" stroke="#c0392b" stroke-width="2"/><text x="100" y="20" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">DELIVERY</text></svg>';
  var BUFFET = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#fbeee6"/><rect x="60" y="8" width="80" height="20" rx="3" fill="#922b21"/><text x="100" y="22" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#fff">BUFFET</text><rect x="14" y="70" width="172" height="34" fill="#7b5e42"/><rect x="14" y="66" width="172" height="6" fill="#f0e6d2"/><g fill="#bdc3c7"><rect x="22" y="56" width="30" height="10" rx="2"/><rect x="60" y="56" width="30" height="10" rx="2"/><rect x="98" y="56" width="30" height="10" rx="2"/><rect x="136" y="56" width="30" height="10" rx="2"/></g><g fill="#e67e22"><ellipse cx="37" cy="56" rx="11" ry="3"/></g><g fill="#27ae60"><ellipse cx="75" cy="56" rx="11" ry="3"/></g><g fill="#f4d03f"><ellipse cx="113" cy="56" rx="11" ry="3"/></g><g fill="#c0392b"><ellipse cx="151" cy="56" rx="11" ry="3"/></g><rect x="18" y="38" width="164" height="4" fill="#aed6f1" opacity=".8"/><line x1="20" y1="42" x2="20" y2="66" stroke="#95a5a6" stroke-width="2"/><line x1="180" y1="42" x2="180" y2="66" stroke="#95a5a6" stroke-width="2"/></svg>';

  /* ---------- S8: a tent mounted on top of a car ---------- */
  var ROOFTENT = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual tent mounted on top of a car outside an outdoor equipment store">' +
    '<rect width="640" height="400" fill="#dcecf5"/><rect y="320" width="640" height="80" fill="#9ea3a8"/><g stroke="#f4f6f7" stroke-width="3"><line x1="40" y1="360" x2="100" y2="360"/><line x1="560" y1="360" x2="620" y2="360"/></g>' +
    '<rect x="20" y="22" width="170" height="40" rx="5" fill="#1e8449"/><text x="105" y="48" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#fff">OUTDOOR GEAR</text>' +
    /* car */
    '<rect x="130" y="232" width="350" height="70" rx="16" fill="#2e86c1"/><path d="M175 234 L200 186 L410 186 L440 234 Z" fill="#2874a6"/>' +
    '<path d="M210 228 L222 194 L300 194 L300 228 Z" fill="#d6eaf8"/><path d="M312 228 L312 194 L400 194 L424 228 Z" fill="#d6eaf8"/>' +
    '<circle cx="205" cy="304" r="30" fill="#222"/><circle cx="205" cy="304" r="12" fill="#aaa"/><circle cx="405" cy="304" r="30" fill="#222"/><circle cx="405" cy="304" r="12" fill="#aaa"/>' +
    '<rect x="470" y="252" width="14" height="10" fill="#f9e79f"/><rect x="128" y="252" width="10" height="10" fill="#e74c3c"/>' +
    /* roof rack and tent */
    '<rect x="190" y="178" width="230" height="8" fill="#555"/>' +
    '<polygon points="190,178 420,178 420,92" fill="#e67e22"/><polygon points="340,178 420,178 420,92 340,122" fill="#d35400"/>' +
    '<rect x="356" y="132" width="44" height="34" fill="#7f8c8d" stroke="#5d6d7e"/><g stroke="#aab7b8" stroke-width="1"><line x1="356" y1="143" x2="400" y2="143"/><line x1="356" y1="154" x2="400" y2="154"/><line x1="371" y1="132" x2="371" y2="166"/><line x1="386" y1="132" x2="386" y2="166"/></g>' +
    /* solar panel on the sloped roof of the tent */
    '<polygon points="252,155 322,129 318,118 248,144" fill="#1f3b73" stroke="#85c1e9" stroke-width="1.5"/><line x1="287" y1="142" x2="283" y2="131" stroke="#85c1e9"/>' +
    /* string lights along the edge */
    '<path d="M192 176 Q300 150 418 94" stroke="#555" stroke-width="1" fill="none"/>' +
    '<g><circle cx="210" cy="171" r="3.5" fill="#f1c40f"/><circle cx="240" cy="164" r="3.5" fill="#e74c3c"/><circle cx="270" cy="156" r="3.5" fill="#2ecc71"/><circle cx="300" cy="147" r="3.5" fill="#f1c40f"/><circle cx="330" cy="136" r="3.5" fill="#e74c3c"/><circle cx="360" cy="123" r="3.5" fill="#2ecc71"/><circle cx="390" cy="109" r="3.5" fill="#f1c40f"/></g>' +
    /* flag on a pole */
    '<line x1="416" y1="92" x2="416" y2="36" stroke="#555" stroke-width="3"/><polygon points="416,36 452,46 416,56" fill="#c0392b"/>' +
    /* awning on poles */
    '<polygon points="420,104 540,128 540,138 420,116" fill="#f4d03f" stroke="#b7950b"/><line x1="536" y1="136" x2="536" y2="322" stroke="#555" stroke-width="3"/>' +
    /* ladder */
    '<g stroke="#bdc3c7" stroke-width="5" stroke-linecap="round"><line x1="196" y1="182" x2="122" y2="322"/><line x1="222" y1="182" x2="148" y2="322"/></g>' +
    '<g stroke="#bdc3c7" stroke-width="4"><line x1="187" y1="200" x2="213" y2="200"/><line x1="176" y1="222" x2="202" y2="222"/><line x1="164" y1="244" x2="190" y2="244"/><line x1="153" y1="266" x2="179" y2="266"/><line x1="141" y1="288" x2="167" y2="288"/><line x1="130" y1="310" x2="156" y2="310"/></g>' +
    /* price tag */
    '<line x1="536" y1="150" x2="570" y2="70" stroke="#555" stroke-width="1.5"/><rect x="510" y="22" width="112" height="56" rx="6" fill="#fff" stroke="#c0392b" stroke-width="3"/><text x="566" y="44" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#333">TENT ONLY</text><text x="566" y="68" font-size="20" text-anchor="middle" font-family="sans-serif" fill="#c0392b">$1,850</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'I',
    title: 'Mock Test I',
    note: 'Original practice content in the CELPIP-General format. Written slightly harder than the real test.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#1f618d', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#e8c39e', hair: '#120c08', shirt: '#d35400', style: 'long' } },
        segments: [{
          lines: [
            ['OWEN', 'Hey Mei, want to watch the hockey game at my place Thursday night? Puck drops at seven.'],
            ['MEI', 'I\'d love to, but my evening class doesn\'t finish until eight. I\'d only catch the end.'],
            ['OWEN', 'No problem. I\'ll record it from the start, and we can watch the whole thing when you get here. Just stay off your phone so you don\'t see the score.'],
            ['MEI', 'Deal. I\'ll bring the snacks.']
          ],
          questions: [
            { id: 'LP.1', q: 'What does Owen offer to do?', o: ['Record the game so they can watch it later', 'Text Mei the score after each period', 'Pick Mei up as soon as her class ends', 'Buy snacks before the game starts at seven'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { JUNO: { name: 'Juno', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#7d3c98', style: 'curly' }, ARIF: { name: 'Arif', g: 'm', skin: '#c98c64', hair: '#120c08', shirt: '#2e4053', style: 'short' } },
          segments: [
            {
              lines: [
                ['JUNO', 'Arif, look at the departures board. Our Moncton flight just switched to cancelled.'],
                ['ARIF', 'You\'re kidding. Hang on, I just got a text from the airline. It says there\'s a mechanical problem with the aircraft, and they don\'t have a replacement plane available tonight. The weather in Moncton is fine, apparently, so it\'s just bad luck.'],
                ['JUNO', 'This cannot be happening. Camille\'s wedding is tomorrow at two, and I\'m supposed to be at the salon with the other bridesmaids at ten in the morning. She\'s been planning our hair for months.'],
                ['ARIF', 'Okay, the text says they\'ve automatically moved us to tomorrow\'s eleven-forty flight.'],
                ['JUNO', 'Eleven forty? When does that get in?'],
                ['ARIF', 'Um, five past three, local time.'],
                ['JUNO', 'So we\'d walk in after the vows are over. That\'s not an option, Arif. I\'m standing up there next to her.'],
                ['ARIF', 'I know, I know. They\'re also offering us fifteen-dollar meal vouchers, for whatever that\'s worth.'],
                ['JUNO', 'A sandwich isn\'t going to get us to New Brunswick. Let\'s get to the service desk before that line gets any longer.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why was the original flight cancelled?', o: ['A faulty plane could not be replaced in time.', 'A storm in Moncton grounded the evening flights.', 'Too few passengers had booked seats that night.', 'The crew had already worked their maximum hours.'] },
                { id: 'L1.2', q: 'What can be inferred about Juno?', o: ['She has a role in the wedding itself.', 'She is the one getting married tomorrow.', 'She booked the flights for both of them.', 'She works at a hair salon in Moncton.'] },
                { id: 'L1.3', q: 'Why does Juno reject the airline\'s new booking?', o: ['They would miss the ceremony entirely.', 'It does not leave until the afternoon.', 'The meal vouchers would not cover lunch.', 'Arif would arrive later than she would.'] }
              ]
            },
            {
              lines: [
                ['ARIF', 'Well, that was quicker than I expected. So, the agent can\'t get us to Moncton tonight, and there\'s no connection from Halifax to Moncton until tomorrow afternoon. But she can put us on the nine-fifteen to Halifax, and since it\'s the same airline, there\'s no extra charge.'],
                ['JUNO', 'Halifax? How far is that from Moncton?'],
                ['ARIF', 'About two and a half hours by car.'],
                ['JUNO', 'Hmm. What if we just rented a car here and drove the whole way?'],
                ['ARIF', 'From Toronto? That\'s fourteen hours, minimum. Even taking turns, we\'d show up wrecked, and you\'d be yawning in every photo.'],
                ['JUNO', 'Fair. What about a bus from Halifax? I\'d rather not be on the highway in the middle of the night.'],
                ['ARIF', 'Let me look. Okay, the first bus to Moncton leaves at seven in the morning and gets in at eleven fifteen.'],
                ['JUNO', 'So I\'d miss the salon completely. No good.'],
                ['ARIF', 'Then it has to be a rental car from the Halifax airport. I\'ll do the driving, if that helps.'],
                ['JUNO', 'It does. Tell her we\'ll take the Halifax seats before somebody else grabs them.']
              ],
              questions: [
                { id: 'L1.4', q: 'Arif thinks driving from Toronto would be', o: ['impractical, since they would arrive worn out.', 'cheaper, but only if they shared the driving.', 'faster than waiting for tomorrow\'s flight.', 'risky, because the highways would be icy overnight.'] },
                { id: 'L1.5', q: 'What does the agent arrange for them?', o: ['A change of destination at no extra cost', 'A refund for the cancelled Moncton flight', 'A free night at a Toronto airport hotel', 'A connecting flight from Halifax to Moncton'] },
                { id: 'L1.6', q: 'Why is the bus from Halifax unsuitable?', o: ['Juno would miss an earlier commitment.', 'It leaves Halifax before their plane even lands.', 'It does not stop in Moncton.', 'Arif prefers not to drive at night.'] }
              ]
            },
            {
              lines: [
                ['JUNO', 'Okay, we\'re officially on the Halifax flight. Now the car. There\'s one at the airport for sixty-five dollars a day.'],
                ['ARIF', 'And we\'d leave it in Moncton, right? Since we\'re flying home from there on Sunday.'],
                ['JUNO', 'Right, so there\'s a forty-dollar fee for dropping it off somewhere else. We\'d have it two days, so a hundred and seventy altogether.'],
                ['ARIF', 'Split between us, that\'s not terrible. But the rental counter closes at one a.m., and we land at twelve thirty-five. That\'s tight.'],
                ['JUNO', 'I\'ll call and ask them to hold the car. But here\'s my other idea. Instead of driving to Moncton half asleep at one in the morning, let\'s book the hotel right next to the airport, get a few hours of sleep, and head out at six.'],
                ['ARIF', 'So we\'d roll into Moncton around eight thirty. That still gives you an hour and a half before the salon.'],
                ['JUNO', 'Exactly. And I\'m texting Camille right now, before she hears about the cancellation from someone else and panics.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will each of them pay for the rental car?', o: ['$85', '$65', '$170', '$105'] },
                { id: 'L1.8', q: 'Why does Juno suggest the airport hotel?', o: ['To avoid driving to Moncton overnight', 'To give the rental counter time to open', 'To be closer to the bus station', 'To meet Camille early in the morning'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { LIB: { name: 'Librarian', g: 'f', skin: '#f2cfb0', hair: '#555555', shirt: '#117a65', style: 'bun' }, TOMAS: { name: 'Tomas', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#a04000', style: 'short' } },
          segments: [{
            lines: [
              ['LIB', 'Hi there. What can I help you with?'],
              ['TOMAS', 'Hi. I just moved into the neighbourhood, and I\'d like to get a library card.'],
              ['LIB', 'Welcome! Cards are free for anyone who lives in the city. I\'ll need a photo ID and something showing your current address.'],
              ['TOMAS', 'Here\'s my driver\'s licence, but it still has my old address in Winnipeg. Would my lease work? It\'s on my phone.'],
              ['LIB', 'As long as your name and the new address are on it, that\'s fine. Okay, you\'re all set. You can have up to thirty items out at once.'],
              ['TOMAS', 'Thirty? I won\'t need that many. How long can I keep things?'],
              ['LIB', 'Books are three weeks. DVDs and video games are one week. You can renew online twice, and each renewal gives you another full loan period. The only exception is when someone else has put a hold on the item. Then it has to come back on the due date.'],
              ['TOMAS', 'And late fees? At my old library they added up fast.'],
              ['LIB', 'We got rid of daily fines a couple of years ago. But once something is thirty days overdue, it\'s considered lost, and you\'re billed for the replacement cost.'],
              ['TOMAS', 'Good to know. Oh, one more thing. I need to improve my French for work. Is there anything for that?'],
              ['LIB', 'There is. Your card gives you free access to a language-learning app, and there\'s a French conversation circle here every Tuesday at six thirty. It\'s drop-in, so you don\'t have to sign up.'],
              ['TOMAS', 'Tuesdays are perfect. I\'m off early that day. I\'ll see you then.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Tomas\'s licence not enough on its own?', o: ['It shows an address he no longer uses.', 'It does not show his full legal name.', 'It has already expired.', 'It is not accepted as photo identification.'] },
              { id: 'L2.2', q: 'If no one reserves it, what is the longest Tomas could keep a video game?', o: ['Three weeks', 'One week', 'Two weeks', 'Nine weeks'] },
              { id: 'L2.3', q: 'In which situation must an item be returned on its due date?', o: ['Another member is waiting for it.', 'It has already been renewed once.', 'It is a DVD or a video game.', 'The member has thirty items out.'] },
              { id: 'L2.4', q: 'What is the library\'s current policy on late items?', o: ['Members pay only if an item is treated as lost.', 'Small daily fines are charged after thirty days.', 'Members are blocked from borrowing after one week.', 'Fines were removed for children but not adults.'] },
              { id: 'L2.5', q: 'What will Tomas probably do on Tuesday evening?', o: ['Practise speaking French with others', 'Sign up for a French course at the library', 'Download the language-learning app', 'Leave work early to return his books'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#e3b28b', hair: '#3b2a20', shirt: '#566573', style: 'short' }, IVANA: { name: 'Ivana Petrovic', g: 'f', skin: '#f0c9a6', hair: '#6e2c00', shirt: '#1a5276', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Ivana Petrovic, a settlement counsellor at the Northshore Newcomer Centre. Ivana, welcome.'],
              ['IVANA', 'Thanks for having me.'],
              ['HOST', 'So what does a settlement counsellor actually do?'],
              ['IVANA', 'In short, I help people who\'ve just arrived in Canada get on their feet, and that usually comes down to two things: work and housing. I arrived as a newcomer myself eighteen years ago, so I still remember how overwhelming it all felt, not knowing where to even start.'],
              ['HOST', 'Let\'s start with work. What\'s the biggest barrier?'],
              ['IVANA', 'Honestly, the phrase "Canadian experience." People with ten or fifteen years in their profession apply for jobs and are told they need it, but of course they can\'t get it until someone gives them a first job here. It goes round and round.'],
              ['HOST', 'How do you help people get out of that loop?'],
              ['IVANA', 'Mainly through mentorship. We pair each newcomer with a volunteer who works in the same field here, so an accountant with an accountant, a nurse with a nurse. The mentor explains how hiring really works in that industry, what employers look for that isn\'t in the job posting, and often introduces them to people. About two-thirds of our mentees are working in their field within a year.'],
              ['HOST', 'And people in regulated professions, like engineers or doctors?'],
              ['IVANA', 'They need their credentials assessed, and my advice is to start before you even land. The process can easily take six months or more, and every month you wait is a month you might spend in a job well below your skills.'],
              ['HOST', 'Now, housing. Why is that so hard?'],
              ['IVANA', 'A lot of landlords ask for a credit history, and newcomers simply don\'t have one yet. We write reference letters and explain tenants\' rights. And I always give one warning: never send a deposit for an apartment you haven\'t seen in person. Fake rental ads target newcomers constantly, because the scammers know they can\'t easily check.'],
              ['HOST', 'Are your services free?'],
              ['IVANA', 'For permanent residents and their families, completely. And starting next month, we\'ll stay open until eight on Wednesdays, because so many of our clients work day shifts and simply can\'t come in during office hours.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why does Ivana mention her own arrival in Canada?', o: ['To show she understands her clients\' confusion', 'To explain why she chose to study counselling', 'To point out how much easier settling has become', 'To encourage listeners to volunteer as mentors'] },
              { id: 'L3.2', q: 'What point does Ivana make about "Canadian experience"?', o: ['It creates a cycle that is hard to break.', 'Most employers have stopped asking for it.', 'Professionals with long careers rarely need it.', 'It matters more in regulated professions.'] },
              { id: 'L3.3', q: 'What is suggested about the mentors?', o: ['They share inside knowledge of their industry.', 'They are usually retired professionals paid by the centre.', 'They hire most of their own mentees.', 'They must have been newcomers themselves.'] },
              { id: 'L3.4', q: 'Why does Ivana advise starting the credential assessment early?', o: ['The process can delay a career for months.', 'It is cheaper to complete it from abroad.', 'Employers will not interview people without it.', 'It cannot be started once you live in Canada.'] },
              { id: 'L3.5', q: 'Why does Ivana warn newcomers about deposits?', o: ['Dishonest rental ads often target them.', 'Landlords rarely return deposits to tenants.', 'Deposits are illegal for most apartments.', 'Newcomers often pay more than the legal limit.'] },
              { id: 'L3.6', q: 'What change is the centre making next month?', o: ['Extending its hours one evening a week', 'Opening on weekends for shift workers', 'Charging a fee to temporary residents', 'Hiring more counsellors for day shifts'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#7a4b31', hair: '#120c08', shirt: '#283747', style: 'bald' } },
          segments: [{
            lines: [
              ['NEWS', 'Commuters who rely on the Harbourgate Bridge should prepare for longer trips, as a fourteen-month repair project gets underway this Saturday.'],
              ['NEWS', 'Crews will replace the bridge\'s concrete deck, which has not been fully rebuilt since the bridge opened in 1968. Throughout the project, two of the bridge\'s four lanes will be closed, leaving a single lane in each direction. Officials estimate that about forty thousand vehicles cross the bridge on an average weekday.'],
              ['NEWS', 'The bridge will also close completely on Friday and Saturday nights, from eleven p.m. to six a.m., while heavy equipment is moved into place. During those closures, drivers will be sent to the Mill Road crossing, a detour that adds roughly twenty minutes. Emergency vehicles will still be let through during the overnight closures.'],
              ['NEWS', 'Trucks weighing more than ten tonnes will be banned from the bridge until the work is finished.'],
              ['NEWS', 'To ease the pressure, the regional transit authority will run the harbour ferry every fifteen minutes during rush hour, instead of every thirty. The sidewalk on the east side of the bridge will remain open to pedestrians and cyclists.'],
              ['NEWS', 'Project engineer Diane Fortier admits the disruption will be frustrating. But she says putting the work off would only raise the cost. "If we wait, we risk emergency repairs that could shut the bridge with no warning at all," she said.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Disruption expected from a long bridge project', 'A plan to build a second harbour bridge', 'A temporary ferry service for commuters', 'Complaints from drivers about the Mill Road detour'] },
              { id: 'L4.2', q: 'How many lanes of the bridge will be open on a weekday morning?', o: ['Two', 'Four', 'One', 'None'] },
              { id: 'L4.3', q: 'What will drivers have to do at midnight on a Saturday?', o: ['Use a longer route across the harbour', 'Wait for crews to move their equipment', 'Share a single lane in each direction', 'Pay a toll to use the Mill Road crossing'] },
              { id: 'L4.4', q: 'Why will the ferry run more often?', o: ['To give commuters another way to cross', 'Because the sidewalk will be closed', 'To carry trucks that are banned from the bridge', 'Because Mill Road will close at rush hour'] },
              { id: 'L4.5', q: 'What is Diane Fortier\'s view of the project?', o: ['Delays now are better than risks later.', 'The timing was chosen to suit commuters.', 'The bridge should have been replaced in 1968.', 'The work could be finished faster with more crews.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Group project: proposal due Fri', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { ELODIE: { name: 'Elodie', g: 'f', skin: '#f0c9a6', hair: '#b5651d', shirt: '#c0392b', style: 'long' }, KWAME: { name: 'Kwame', g: 'm', skin: '#5e3a24', hair: '#120c08', shirt: '#2471a3', style: 'short' }, JIN: { name: 'Jin', g: 'm', skin: '#e8c39e', hair: '#1d1410', shirt: '#7f8c8d', style: 'short' } },
          segments: [{
            lines: [
              ['ELODIE', 'Okay, so Professor Grant wants our topic by Friday, and the one firm rule is that we have to use data we gather ourselves, here in the city. No just pulling national statistics off a website.'],
              ['KWAME', 'Right. So I keep thinking about food waste in the campus cafeteria. Every lunch I watch people throw out half a tray. We could literally weigh what gets thrown away.'],
              ['ELODIE', 'That\'s interesting, but I was really hoping we could do the electric scooters downtown. Everyone has an opinion about them, and the city still hasn\'t decided whether to keep the program.'],
              ['JIN', 'Scooters would be fun, but where would our numbers come from? The city only publishes scooter data once a year, and the latest report is almost two years old.'],
              ['ELODIE', 'We could survey students who ride them.'],
              ['JIN', 'Remember our survey last semester, though? We sent it to the whole program and got twelve replies. Twelve. Professor Grant said you can\'t conclude anything from that.'],
              ['ELODIE', 'Ugh. Don\'t remind me.'],
              ['KWAME', 'Here\'s the thing. I already spoke to the cafeteria manager, and she said we can weigh the bins at lunch for two weeks. So the data is basically guaranteed.'],
              ['JIN', 'That\'s a big deal. Real numbers, collected by us. That\'s exactly what Grant asked for.'],
              ['ELODIE', 'Okay, I\'m mostly convinced. But numbers alone won\'t tell us why people waste food. What if I go table to table with three or four quick questions while people are eating? It\'s a lot harder to ignore someone standing right in front of you than an email.'],
              ['KWAME', 'I love that. It gives us the reasons behind the numbers.'],
              ['JIN', 'And I\'ll turn it all into charts. Honestly, I\'d much rather sit with a spreadsheet than walk up to strangers.'],
              ['KWAME', 'Then I\'ll confirm the two weeks with the manager. Should we meet Thursday after class and write up the proposal?'],
              ['ELODIE', 'Let\'s do it at the library. I\'ll book one of the study rooms for three.']
            ],
            questions: [
              { id: 'L5.1', q: 'What are the students mainly trying to do?', o: ['Choose a topic for their project', 'Prepare for an exam on Friday', 'Plan a survey about scooters', 'Write a report on last semester'] },
              { id: 'L5.2', q: 'What did the professor require for the project?', o: ['The data must be collected locally.', 'Students must use national statistics.', 'The project must include a survey.', 'The topic must be about the campus.'] },
              { id: 'L5.3', q: 'Why does Jin have doubts about the scooter topic?', o: ['The available city data is out of date.', 'Most students do not use the scooters.', 'The city has already ended the program.', 'Scooters are not allowed on the campus.'] },
              { id: 'L5.4', q: 'Why does Jin mention last semester\'s survey?', o: ['To show a survey alone may not be reliable', 'To suggest they reuse the same questions', 'To remind Elodie that it was her idea', 'To argue that the professor dislikes all surveys'] },
              { id: 'L5.5', q: 'Why is Kwame\'s idea attractive to the group?', o: ['They already have permission to gather data.', 'The cafeteria manager will write the report.', 'Food waste is the professor\'s favourite topic.', 'It requires less work than the other ideas.'] },
              { id: 'L5.6', q: 'Why does Elodie think her survey will work better this time?', o: ['People are more likely to answer in person.', 'The questions will be sent to more students.', 'The cafeteria manager will hand it out.', 'It will offer a prize for completing it.'] },
              { id: 'L5.7', q: 'What can be inferred about Jin?', o: ['Jin prefers data work to meeting strangers.', 'Jin thinks the survey will fail again.', 'Jin wants to change the topic back to scooters.', 'Jin has already written part of the proposal.'] },
              { id: 'L5.8', q: 'What will happen on Thursday?', o: ['The group will meet in a study room.', 'Kwame will start weighing the bins.', 'Elodie will hand in the proposal.', 'They will meet the cafeteria manager.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Bike lanes or parking?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#a9714b', hair: '#2a1b12', shirt: '#6c3483', style: 'bun' } },
          segments: [{
            lines: [
              ['NARR', 'Across the country, cities are adding protected bike lanes, and very often the space comes from removing street parking. On busy main streets, that trade has become one of the most heated local debates.'],
              ['NARR', 'Urban planner Doctor Mateo Silva supports the change. He points to a study of one mid-sized Canadian city, where the number of people cycling on a downtown street tripled within two years of a protected lane opening.'],
              ['NARR', 'Silva argues that many people would happily cycle but feel unsafe sharing the road with cars, and that a physical barrier gives them the confidence to try. He also rejects the idea that cyclists are bad for business. In his research, customers who arrived by bike spent less on each visit, but they came back more often, so over a month they spent at least as much as drivers.'],
              ['NARR', 'Bakery owner Joanne Lister is not persuaded. Under the city\'s current plan, her shop on Queen Street would lose eight of the twelve parking spaces out front. Many of her regulars are seniors, she says, and others pick up large cake orders that simply cannot go home on a bicycle.'],
              ['NARR', 'Lister also points out that cycling drops sharply in winter, when, she says, the lanes sit mostly empty while drivers circle the block looking for a spot. She insists she is not against bike lanes. She would just like the city to put them on quieter side streets that run parallel to the main road.'],
              ['NARR', 'The city will hold a public meeting next month. Until then, residents can share their views through an online survey, which closes on the thirtieth.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Replacing parking with bike lanes', 'The rising cost of parking downtown', 'Safety rules for city cyclists', 'A new bakery on Queen Street'] },
              { id: 'L6.2', q: 'Why does Dr. Silva mention the study?', o: ['To show that safer lanes can attract riders', 'To prove that cycling reduces downtown car traffic', 'To show how quickly lanes can be built', 'To compare Canadian and foreign cities'] },
              { id: 'L6.3', q: 'According to Silva, how do customers who cycle behave?', o: ['They spend less per visit but come more often.', 'They spend more on each visit than drivers do, on average.', 'They visit less often than drivers.', 'They shop mostly in the winter.'] },
              { id: 'L6.4', q: 'Why is Joanne Lister worried about the plan?', o: ['Many customers would find cycling hard.', 'Her shop is too small for bicycle racks.', 'The construction will close her shop.', 'She will lose all twelve parking spaces.'] },
              { id: 'L6.5', q: 'What is Lister\'s overall position?', o: ['She accepts bike lanes, but not on her street.', 'She opposes cycling infrastructure entirely.', 'She wants parking fees to pay for lanes.', 'She thinks bike lanes should be removed every winter.'] },
              { id: 'L6.6', q: 'What can residents do at this point?', o: ['Give their opinion online', 'Attend a meeting this week', 'Vote on the plan next month', 'Email Dr. Silva with questions'] }
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
          passage: '<h3>Message</h3><p>Hi Andre,</p><p>I hope you, Kezia and the boys are doing well! I\'m writing because I\'ve finally done it: the Campbell family reunion is booked. After three years of everyone saying "we should really do this," it\'s actually happening, and I can stop feeling guilty every time someone brings it up.</p><p>We\'ll be at Pine Hollow Camp near Huntsville over the August long weekend, from Friday afternoon until Monday morning. I\'ve rented three large cabins right on the lake, and we\'ll have the screened-in dining hall to ourselves for meals. It works out to $120 per person aged twelve and over for the whole weekend, and children under twelve stay free. The camp needs full payment from me by June 20, so please send me your share by e-transfer no later than June 15. If anyone has to cancel after that, I\'m afraid I can\'t give the money back, because the camp won\'t refund me either.</p><p>The date isn\'t a coincidence. Grandpa Leon turns ninety that Saturday, and I\'d like to surprise him with a slideshow after dinner. This is where you come in. Aunt Rose told me her old photo albums went to your place when she moved into the seniors\' residence, and I know you have a scanner. Could you scan some pictures of Grandpa as a young man, especially from his years working on the railway? He talks about those days more than anything else. And please don\'t breathe a word of this to him! He hates any fuss, and if he hears about it, he\'ll insist that we cancel the whole thing.</p><p>For Saturday dinner, I\'m thinking potluck: each family brings one main dish and one dessert. I\'m secretly hoping your mom will make her coconut bread, since nobody has tasted it since the last reunion.</p><p>Sadly, Uncle Desmond can\'t make it. He\'s having knee surgery in July and won\'t be cleared to travel by then, so we\'ll set up a video call during the party so he can still be part of it.</p><p>One last thing, and feel free to say no: could you drive Grandpa up from Toronto? Yours is the only van in the family, and he says the bus is hard on his back. If it doesn\'t suit you, I\'ll find another way.</p><p>Talk soon,<br>Marisol</p>',
          questions: [
            { id: 'R1.1', q: 'The opening of Marisol\'s message suggests that she', o: ['feels a weight has lifted now that the event is set.', 'expects few relatives to come after so many years.', 'is annoyed that no one else offered to organize it.', 'still feels guilty that the plans took three years.'] },
            { id: 'R1.2', q: 'Marisol asks for the money by June 15 most likely in order to', o: ['collect it before her own deadline with the camp.', 'get a lower price per person from the camp.', 'give relatives time to cancel for a full refund.', 'find out how many children under twelve will come.'] },
            { id: 'R1.3', q: 'A relative who drops out of the reunion in early July would probably', o: ['not get back what they paid.', 'get a refund directly from the camp.', 'lose only a small part of their share.', 'have to pay Marisol a second time.'] },
            { id: 'R1.4', q: 'Marisol especially wants pictures from Grandpa\'s working years because', o: ['he enjoys recalling that period most.', 'Aunt Rose took most of her photos then.', 'he has asked to see them at the party.', 'Andre has already scanned the others.'] },
            { id: 'R1.5', q: 'Marisol is concerned that if Grandpa Leon learns of the plan, he will', o: ['ask for the celebration to be dropped.', 'refuse to travel to the camp by bus.', 'want to choose the photos himself.', 'tell Uncle Desmond about the surprise.'] },
            { id: 'R1.6', q: 'The tone of Marisol\'s final request is best described as', o: ['considerate, leaving Andre free to decline.', 'urgent, since the bus is already full.', 'apologetic, as she feels she asks too much.', 'firm, because Andre owns the only van.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Marisol,</p><p>This is fantastic news, and congratulations on finally pinning everyone down! Kezia and I will definitely be there with both boys. Since Theo turned fourteen in March and Sam is nine, I\'ll send you [[R1.7]] by e-transfer this week, well before your deadline.</p><p>I\'d be happy to help with the slideshow. I\'ve still got [[R1.8]] in boxes in the basement, so I\'ll start scanning this weekend. I\'m fairly sure I saw a picture of Grandpa in uniform, which would be perfect, since you said [[R1.9]] is what he loves talking about. Don\'t worry, my lips are sealed.</p><p>As for food, I asked Mom about [[R1.10]]. She laughed and said it was about time someone did, and she\'s planning to bake two loaves.</p><p>Of course I\'ll drive Grandpa. There\'s lots of room in the van, and a long ride on the bus would be [[R1.11]]. I\'ll pick him up Friday morning so we arrive in the afternoon. The boys are already asking whether the camp has canoes, so I suspect we won\'t see much of them all weekend.</p><p>See you in August,<br>Andre</p>',
          blanks: [
            { id: 'R1.7', o: ['$360', '$240', '$480', '$120'] },
            { id: 'R1.8', o: ['the collection Rose left with us', 'Grandpa\'s letters from his youth', 'the pictures from our last reunion', 'Uncle Desmond\'s old camera slides'] },
            { id: 'R1.9', o: ['his time with the trains', 'his ninetieth birthday', 'his first trip to Huntsville', 'his move to the residence'] },
            { id: 'R1.10', o: ['that treat you were hoping for', 'our family\'s main dish', 'a cake for Grandpa\'s birthday', 'cooking for the whole potluck'] },
            { id: 'R1.11', o: ['too uncomfortable for him', 'too expensive for him', 'too slow for the boys', 'too risky for his knee'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Westbrook Language Centre: Fall Classes</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Class</th><th>Level</th><th>Day and time</th><th>Weeks</th><th>Class fee</th><th>Materials</th></tr></thead><tbody>' +
            '<tr><td>Italian Conversation</td><td>Beginner</td><td>Monday and Wednesday 6:00 to 7:30 p.m.</td><td>10</td><td>$280</td><td>$35</td></tr>' +
            '<tr><td>Italian Conversation</td><td>Intermediate</td><td>Tuesday and Thursday 6:00 to 7:30 p.m.</td><td>10</td><td>$280</td><td>$35</td></tr>' +
            '<tr><td>English for the Workplace</td><td>CLB 5 to 7</td><td>Saturday 9:30 a.m. to 12:30 p.m.</td><td>8</td><td>$240</td><td>Included</td></tr>' +
            '<tr><td>Spanish for Travellers</td><td>Beginner</td><td>Thursday 7:00 to 8:30 p.m.</td><td>6</td><td>$150</td><td>$20</td></tr>' +
            '<tr><td>Mandarin Basics</td><td>Beginner</td><td>Saturday 1:00 to 3:00 p.m.</td><td>8</td><td>$220</td><td>$40</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Register on or before August 31 to save 15% on the class fee. Materials are not discounted.</li><li>Seniors (65 and over) pay half the class fee. The senior rate cannot be combined with the early registration discount.</li><li>Intermediate classes require a free 20-minute placement test before registration.</li><li>Withdraw before the second class for a refund of the class fee, minus a $25 administration fee.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Joon,</p><p>I picked up the fall schedule from Westbrook. You said your shifts only leave you free on weekends, so English for the Workplace on [[R2.1]] looks perfect, and you won\'t need to buy a book.</p><p>As for me, I want to get back into Italian. I took two years of it in high school, so I\'d like to skip the beginner level, but first I have to [[R2.2]]. If I register before the end of August, the class itself will cost me [[R2.3]], plus $35 for the book.</p><p>My mom, who is 67, wants to try Spanish before her trip to Mexico. Even if she registers early, the senior rate works out better for her, so she\'ll pay [[R2.4]] for the class.</p><p>And don\'t worry if you\'re not sure about committing. If you decide after the first class that it\'s not for you, you\'ll get your class fee back except for [[R2.5]].</p><p>Helena</p>',
          blanks: [
            { id: 'R2.1', o: ['Saturday mornings', 'Saturday afternoons', 'weekday evenings', 'Thursday evenings'] },
            { id: 'R2.2', o: ['have my level checked', 'buy the Italian book', 'register before August', 'finish the beginner class'] },
            { id: 'R2.3', o: ['$238', '$280', '$273', '$140'] },
            { id: 'R2.4', o: ['$75', '$95', '$127.50', '$150'] },
            { id: 'R2.5', o: ['a $25 charge', 'the book cost', '15 percent', 'the first class'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Someone who is free on only one weekday evening per week would most likely choose', o: ['Spanish for Travellers.', 'Italian Conversation (Beginner).', 'English for the Workplace.', 'Mandarin Basics.'] },
            { id: 'R2.7', q: 'A 70-year-old taking Mandarin Basics will pay, including materials,', o: ['$150.', '$110.', '$227.', '$260.'] },
            { id: 'R2.8', q: 'A 40-year-old who registers for Italian Conversation (Beginner) on September 5 will pay, for the class and the book,', o: ['$315.', '$273.', '$280.', '$238.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Tides of the Bay of Fundy</h3><p><b>A.</b> The Bay of Fundy, which lies between New Brunswick and Nova Scotia, is known for having the highest tides on Earth. At Burntcoat Head, near the eastern end of the bay, the difference between low and high tide has been measured at more than sixteen metres, roughly the height of a five-storey building. Twice a day, about 160 billion tonnes of seawater flow into and out of the bay, which is more than the combined flow of all the freshwater rivers in the world.</p><p><b>B.</b> Scientists explain these extreme tides with two features of the bay. The first is its shape. The bay is long, and it becomes both narrower and shallower toward its end, so the incoming water is squeezed and forced upward. The second is a natural effect called resonance. Water in the bay rocks back and forth in a cycle of about thirteen hours, which is very close to the twelve-and-a-half-hour cycle of the ocean tides. Like a child on a swing who is pushed at just the right moment, each tide adds to the motion of the one before.</p><p><b>C.</b> The tides shape daily life along the shore. At low tide, visitors to places such as the Hopewell Rocks can walk on the ocean floor among tall rock formations, but they are warned to keep an eye on the clock, because the water returns quickly and can cut off anyone who wanders too far. In some fishing villages, boats sit on the mud twice a day, waiting for the sea to come back. The wide mud flats left by the falling tide also matter to wildlife. Every summer, huge numbers of small shorebirds stop here on their long migration to South America, feeding on tiny shrimp in the mud until they have nearly doubled their weight.</p><p><b>D.</b> Because so much water moves so quickly, the bay has long attracted interest as a source of clean energy. A tidal power station at Annapolis Royal produced electricity for more than thirty years before it closed in 2019. More recently, companies have tested underwater turbines in the Minas Passage, where the currents are especially strong. Progress has been slow: the powerful currents have damaged equipment, and fishing groups have raised concerns about how turbines might affect fish. Supporters believe that if these problems can be solved, the bay could one day supply power to thousands of homes.</p>',
          questions: [
            { id: 'R3.1', q: 'The natural rhythm of the water in the bay closely matches that of the ocean tides.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Some animals use the area to build up energy before a long journey.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Newer attempts to generate electricity have run into practical problems.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'The volume of water moving in the bay exceeds that of all the world\'s rivers together.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Experts expect the bay\'s tides to grow even larger in the coming decades.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'People exploring the exposed sea floor need to pay attention to the time.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'The water gets less deep the farther it travels into the bay.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'A facility that once turned the tides into power is no longer running.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'At one site, the rise of the water can equal the height of a building several storeys high.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should We Tax Sugary Drinks?</h3><p>Several Canadian communities are considering a tax on sugar-sweetened beverages such as soft drinks, energy drinks and sweetened iced teas. One proposal under discussion would add twenty cents to the price of every litre, raising the cost of a two-litre bottle by forty cents. Both sides of the debate accept that many Canadians consume far more sugar than health guidelines recommend. Where they part ways is on whether a tax is the right response.</p><p>Supporters see the tax as a simple way to improve public health. Dr. Amara Okeke, a nutrition researcher, notes that sugary drinks are the largest single source of added sugar in many people\'s diets, and that calories in liquid form do not make people feel full the way solid food does. "When a drink becomes more expensive, people buy less of it," she says. "We saw it with tobacco, and early results from other countries show the same pattern with soft drinks." She adds that the money raised could pay for programs such as free fruit and vegetables in schools or new water fountains in parks.</p><p>Opponents argue that the tax would hit the wrong people. Gord Michaud, who owns three convenience stores in a small town, says lower-income families spend a larger share of their budget on groceries, so they would feel any price increase the most. "A family that\'s already stretched doesn\'t need another forty cents on every bottle," he says. He also worries that shoppers living near a border would simply drive to the next town or province to stock up, taking the rest of their shopping with them. Unlike large supermarket chains, he adds, small stores like his cannot afford to absorb a price increase to keep customers happy. In his view, clear labels and education in schools would change habits without punishing anyone.</p><p>Dr. Okeke responds that lower-income households are also more likely to suffer from diabetes and dental disease, so they have the most to gain from drinking less sugar. She agrees, however, that a tax by itself is not enough. "Labels and education help, but they work best when the healthy choice is also the cheaper choice," she says.</p><p>Priya Raman, a health economist who has studied similar taxes abroad, takes neither side on whether a tax should exist, but she believes the current proposal is poorly designed. "A flat charge per litre treats a lightly sweetened iced tea exactly like an energy drink with three times the sugar," she points out. Where governments have instead set higher rates for drinks with more sugar, she says, manufacturers quietly changed their recipes before the tax even started, so shoppers barely noticed a difference in price.</p><p>Michaud remains doubtful that the money would be spent as promised. "Once a government gets used to a new source of income, it rarely ends up where people were told it would go," he says. If a tax is introduced anyway, he would like it to be reviewed after three years to see whether people are actually drinking less.</p>',
          questions: [
            { id: 'R4.1', q: 'The main purpose of the first paragraph is to', o: ['outline the plan and what both camps accept.', 'argue that Canadians should drink less soda.', 'explain why the tax has already been approved.', 'compare drink prices in several communities.'] },
            { id: 'R4.2', q: 'Dr. Okeke mentions tobacco in order to', o: ['show that higher prices have cut demand before.', 'claim that soft drinks are as harmful as smoking.', 'propose that the tax fund programs to quit smoking.', 'point out that tobacco taxes hurt small stores.'] },
            { id: 'R4.3', q: 'Michaud is most likely concerned that, under the tax, his stores will', o: ['lose customers to nearby areas without it.', 'be forced to stop selling energy drinks.', 'pay a higher rate than supermarket chains.', 'have to print new labels for every bottle.'] },
            { id: 'R4.4', q: 'Dr. Okeke responds to the claim that the tax is unfair to poorer families by saying that', o: ['those families stand to benefit most.', 'they would pay only forty cents more.', 'they should be exempt from paying it.', 'they already drink less soda than others.'] },
            { id: 'R4.5', q: 'Both Okeke and Michaud would agree that', o: ['teaching people about sugar is worthwhile.', 'a review after three years is essential.', 'the money will reach the promised programs.', 'flat rates per litre are the fairest design.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I work as a dental hygienist, and I see the effects of sugary drinks every day, so I lean toward Dr. Okeke\'s side. Her point that liquid calories [[R4.6]] matches what my patients tell me: they finish a large soda and are hungry again an hour later. I also like her idea of using the revenue for [[R4.7]], so that people have a free and healthy option when they are out for a walk.</p><p>That said, Mr. Michaud raises a fair concern. In my town, the next province is only fifteen minutes away, and I can easily imagine families [[R4.8]]. If a tax goes ahead, I agree with him that [[R4.9]] after a few years. I would also borrow Ms. Raman\'s idea and [[R4.10]], since a flat charge per litre seems unfair to people who already choose lightly sweetened drinks. With those conditions attached, I would support the tax.</p>',
          blanks: [
            { id: 'R4.6', o: ['fail to satisfy hunger as meals do', 'cost less than other sweet snacks', 'are mostly bought by schoolchildren', 'cause more harm than cigarettes do'] },
            { id: 'R4.7', o: ['drinking water in public spaces', 'discounts at small corner stores', 'dental clinics in poorer areas', 'clearer labels on every bottle'] },
            { id: 'R4.8', o: ['crossing over to do all their errands', 'switching to cheaper bottled water', 'cutting back on fruit and vegetables', 'asking local stores to absorb the cost'] },
            { id: 'R4.9', o: ['its impact on habits should be checked', 'the rate should be raised gradually', 'the revenue should go to store owners', 'the labels should be redesigned again'] },
            { id: 'R4.10', o: ['tie the rate to each product\'s sweetness', 'apply one rate to every litre sold', 'exempt iced teas from the tax entirely', 'let manufacturers set their own rates'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Your child\'s class is going on a field trip next week. After reading the permission form the school sent home, you have a concern about the trip.</p><p>Write an email to your child\'s teacher. In your email, do the following:</p><ul><li>Say which trip you are writing about and what you learned from the form.</li><li>Describe your concern and explain why it worries you.</li><li>Suggest what the school could do so that your child can take part safely.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city\'s transit service will have extra money in next year\'s budget and is asking riders how it should be used. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Make buses more frequent, so that most routes run every 10 minutes instead of every 20 minutes.' },
            { key: 'B', label: 'Option B', text: 'Lower fares, so that a single ride costs $2.00 instead of $3.25 and a monthly pass costs $60 instead of $95.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you enjoy visiting.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to buy their first car but does not know much about cars. Give your friend advice on how to choose and buy one.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you met someone who had a strong influence on you. Who was this person, and how did they influence you?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: GROCERY },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: GROCERY },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is deciding what to do for dinner this Friday. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Cook at home', image: COOK, facts: ['Groceries: about $35', '1 hour to cook, 20 minutes to clean up', 'Healthy recipe of your choice', 'Eat together at the kitchen table'] },
            { key: 'B', title: 'Order takeout', image: TAKEOUT, facts: ['About $70 with delivery and tip', 'Arrives in 45 minutes', 'No cooking and no dishes', 'Few healthy choices on the menu'] }
          ],
          third: { key: 'C', title: 'Buffet restaurant', image: BUFFET, facts: ['$28 per adult, $14 per child', '15-minute drive', 'Over 60 dishes and a dessert bar', 'Busy on Fridays: up to a 30-minute wait'] },
          persuade: 'Your family member wants to go to the buffet restaurant instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You borrowed your sister\'s expensive camera for a weekend trip. While you were hiking, you dropped it, and now the lens is cracked. Your sister needs the camera next Saturday, because she has been paid to take photos at a friend\'s wedding.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your sister. Explain what happened and what you will do about it.</p><p><b>Option B:</b> Talk to a friend who owns a similar camera. Ask your friend to lend it to your sister for the wedding.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Some people believe workers should retire at 65. Others think people should keep working for as long as they are able and want to. What is your opinion? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at an outdoor equipment store and see this unusual tent displayed on top of a car. Call your friend who loves camping. Describe the tent and explain whether you think your friend should buy it.', image: ROOFTENT }
      ]
    }
  });
})();
