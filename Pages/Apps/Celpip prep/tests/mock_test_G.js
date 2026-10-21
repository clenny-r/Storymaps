/* Rowe CELPIP Mock Exam: Test G content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
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

  /* ---------- S3/S4: children's birthday party in a backyard ---------- */
  var PARTY = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A children\'s birthday party in a backyard">';
    p += '<rect width="640" height="400" fill="#bfe3f5"/>';
    p += '<circle cx="590" cy="45" r="24" fill="#f7d35c"/>';
    /* fence and grass */
    p += '<rect y="150" width="640" height="50" fill="#d8b98a"/>';
    p += (function () { var f = '<g stroke="#b8956a" stroke-width="2">'; for (var i = 0; i <= 640; i += 20) f += '<line x1="' + i + '" y1="150" x2="' + i + '" y2="200"/>'; return f + '</g>'; })();
    p += '<rect y="200" width="640" height="200" fill="#8cc56d"/>';
    /* house on the left */
    p += '<rect x="0" y="70" width="120" height="150" fill="#e8d7c0"/><polygon points="-10,72 60,30 130,72" fill="#9c4f3a"/>';
    p += '<rect x="20" y="100" width="34" height="30" fill="#bfe3f5" stroke="#fff" stroke-width="3"/><rect x="74" y="150" width="30" height="70" fill="#6d4c35"/>';
    /* banner */
    p += '<line x1="180" y1="40" x2="180" y2="200" stroke="#7a5233" stroke-width="4"/><line x1="470" y1="40" x2="470" y2="200" stroke="#7a5233" stroke-width="4"/>';
    p += '<rect x="215" y="30" width="220" height="30" rx="4" fill="#f26d9b"/><line x1="180" y1="44" x2="215" y2="44" stroke="#555"/><line x1="435" y1="44" x2="470" y2="44" stroke="#555"/>';
    p += '<text x="325" y="51" font-size="16" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="bold">HAPPY BIRTHDAY</text>';
    /* balloon floating away */
    p += '<ellipse cx="150" cy="80" rx="13" ry="16" fill="#e74c3c"/><path d="M150 96 q-6 14 4 26 q-8 12 2 24" stroke="#555" stroke-width="1.2" fill="none"/>';
    /* barbecue with an adult */
    p += person(38, 300, { shirt: '#4a6d8c', skin: '#8d5a3b', hair: '#1d1410', arms: 'right' });
    p += '<line x1="62" y1="264" x2="72" y2="258" stroke="#555" stroke-width="3"/>';
    p += '<path d="M66 262 h46 a23 14 0 0 1 -46 0z" fill="#333"/><line x1="76" y1="274" x2="70" y2="300" stroke="#333" stroke-width="3"/><line x1="102" y1="274" x2="108" y2="300" stroke="#333" stroke-width="3"/>';
    p += '<g fill="#8b3a2b"><rect x="74" y="257" width="12" height="5" rx="2"/><rect x="92" y="257" width="12" height="5" rx="2"/></g>';
    p += '<g stroke="#aaa" stroke-width="3" fill="none" opacity=".8"><path d="M80 250 q-6 -10 2 -20 q8 -10 0 -20"/><path d="M98 250 q6 -10 -2 -20 q-8 -10 0 -20"/></g>';
    /* child reaching for the escaping balloon */
    p += person(160, 330, { shirt: '#f39c12', s: .8, arms: 'up', skin: '#f0c9a6', hair: '#c49a42' });
    /* pile of presents */
    p += '<rect x="190" y="292" width="26" height="22" fill="#3498db"/><rect x="200" y="292" width="5" height="22" fill="#f1c40f"/><rect x="214" y="298" width="22" height="16" fill="#9b59b6"/><rect x="223" y="298" width="4" height="16" fill="#fff"/><rect x="200" y="278" width="20" height="14" fill="#2ecc71"/><rect x="208" y="278" width="4" height="14" fill="#e74c3c"/>';
    /* balloons tied to the chair */
    p += '<g stroke="#555" stroke-width="1"><line x1="246" y1="250" x2="228" y2="176"/><line x1="246" y1="250" x2="250" y2="166"/><line x1="246" y1="250" x2="268" y2="178"/></g>';
    p += '<ellipse cx="228" cy="162" rx="12" ry="15" fill="#f1c40f"/><ellipse cx="250" cy="152" rx="12" ry="15" fill="#3498db"/><ellipse cx="268" cy="164" rx="12" ry="15" fill="#2ecc71"/>';
    p += '<rect x="236" y="250" width="22" height="6" fill="#7d5a3c"/><rect x="238" y="256" width="3" height="20" fill="#7d5a3c"/><rect x="253" y="256" width="3" height="20" fill="#7d5a3c"/><rect x="254" y="226" width="4" height="26" fill="#7d5a3c"/>';
    /* birthday child behind the table, with party hat */
    p += person(330, 262, { shirt: '#e84393', skin: '#7a4b31', hair: '#120c08', arms: 'up' });
    p += '<polygon points="322,210 338,210 330,190" fill="#f1c40f"/><circle cx="330" cy="189" r="3" fill="#e74c3c"/>';
    p += person(295, 262, { shirt: '#16a085', s: .85, skin: '#c98c64', hair: '#2a1b12' });
    /* table with cake */
    p += '<rect x="270" y="250" width="160" height="12" fill="#fbd3e2"/><rect x="270" y="262" width="160" height="14" fill="#f7b7cf"/><rect x="282" y="276" width="5" height="30" fill="#7d5a3c"/><rect x="413" y="276" width="5" height="30" fill="#7d5a3c"/>';
    p += '<rect x="358" y="226" width="44" height="24" rx="3" fill="#fff7e6" stroke="#d27aa5" stroke-width="2"/><rect x="358" y="236" width="44" height="4" fill="#d27aa5"/>';
    p += '<g stroke="#3498db" stroke-width="2"><line x1="370" y1="226" x2="370" y2="216"/><line x1="380" y1="226" x2="380" y2="216"/><line x1="390" y1="226" x2="390" y2="216"/></g><g fill="#f39c12"><circle cx="370" cy="213" r="2.5"/><circle cx="380" cy="213" r="2.5"/><circle cx="390" cy="213" r="2.5"/></g>';
    p += '<g fill="#fff" stroke="#bbb"><ellipse cx="300" cy="250" rx="9" ry="3"/><ellipse cx="330" cy="250" rx="9" ry="3"/></g><rect x="338" y="238" width="8" height="12" fill="#e67e22"/>';
    /* dog with front paws on the table, eyeing the cake */
    p += '<g fill="#a5713f"><ellipse cx="446" cy="270" rx="18" ry="9" transform="rotate(-45 446 270)"/><circle cx="430" cy="248" r="10"/><ellipse cx="422" cy="250" rx="5" ry="8" fill="#7a5230"/><rect x="452" y="278" width="4" height="22"/><rect x="460" y="274" width="4" height="26"/></g>';
    p += '<g stroke="#a5713f" stroke-width="4" stroke-linecap="round"><line x1="438" y1="262" x2="426" y2="252"/></g><circle cx="427" cy="246" r="2" fill="#222"/><circle cx="420" cy="250" r="2.5" fill="#222"/><path d="M462 268 q12 -6 10 -18" stroke="#a5713f" stroke-width="4" fill="none" stroke-linecap="round"/>';
    /* parent taking a photo */
    p += person(500, 318, { shirt: '#c64b73', skin: '#f2cfb0', hair: '#7a4a24', arms: 'left' });
    p += '<rect x="468" y="276" width="12" height="9" rx="2" fill="#333"/><circle cx="472" cy="280" r="2" fill="#9bd"/>';
    /* sack race */
    p += person(550, 360, { shirt: '#3fa3d6', s: .85, skin: '#d6a07a', hair: '#333', arms: 'up' });
    p += '<rect x="539" y="340" width="22" height="24" rx="3" fill="#b08550"/>';
    p += person(600, 368, { shirt: '#f4d03f', s: .85, skin: '#8d5a3b', hair: '#1d1410', arms: 'up' });
    p += '<rect x="589" y="348" width="22" height="24" rx="3" fill="#b08550"/>';
    p += '<line x1="530" y1="378" x2="625" y2="378" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/>';
    /* child with a hoop in the front left */
    p += person(300, 380, { shirt: '#9b59b6', s: .8, skin: '#e3b28b', hair: '#4a3020', arms: 'right' });
    p += '<ellipse cx="324" cy="362" rx="16" ry="5" fill="none" stroke="#e74c3c" stroke-width="3"/>';
    p += '</svg>';
    return p;
  })();

  /* ---------- S5 option pictures ---------- */
  var DOWNTOWN = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#dfe8f2"/><rect x="8" y="40" width="30" height="80" fill="#9aa9ba"/><rect x="160" y="30" width="32" height="90" fill="#9aa9ba"/><rect x="60" y="20" width="80" height="100" fill="#b5651d"/><g fill="#f6e7a6">' +
    (function () { var w = ''; for (var r = 0; r < 5; r++) for (var c = 0; c < 4; c++) w += '<rect x="' + (68 + c * 18) + '" y="' + (28 + r * 15) + '" width="10" height="9"/>'; return w; })() +
    '</g><rect x="90" y="102" width="20" height="18" fill="#3b2a20"/><rect y="114" width="200" height="6" fill="#555"/><text x="100" y="14" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">DOWNTOWN APARTMENT</text></svg>';
  var SUBURB = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#cfeaf7"/><rect y="84" width="200" height="36" fill="#79b86a"/><rect x="50" y="52" width="80" height="44" fill="#f4f1ea"/><polygon points="42,54 90,22 138,54" fill="#c0392b"/><rect x="82" y="70" width="16" height="26" fill="#6d4c35"/><rect x="58" y="62" width="16" height="14" fill="#9bd"/><rect x="106" y="62" width="16" height="14" fill="#9bd"/><rect x="160" y="64" width="8" height="30" fill="#7a5233"/><circle cx="164" cy="56" r="20" fill="#4f9a45"/><g stroke="#fff" stroke-width="2"><line x1="20" y1="80" x2="20" y2="96"/><line x1="30" y1="80" x2="30" y2="96"/><line x1="15" y1="86" x2="40" y2="86"/></g><circle cx="24" cy="18" r="9" fill="#f6d55c"/></svg>';
  var CONDO = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e8f4fb"/><rect y="88" width="200" height="32" fill="#4fb3e8"/><rect x="40" y="10" width="54" height="80" fill="#7fb2d1" stroke="#4f6a8a" stroke-width="2"/><g stroke="#4f6a8a" stroke-width="1"><line x1="40" y1="26" x2="94" y2="26"/><line x1="40" y1="42" x2="94" y2="42"/><line x1="40" y1="58" x2="94" y2="58"/><line x1="40" y1="74" x2="94" y2="74"/><line x1="67" y1="10" x2="67" y2="90"/></g><polygon points="140,104 150,70 150,104" fill="#fff"/><path d="M128 106 h34 l-6 8 h-22z" fill="#8a6331"/><g stroke="#fff" stroke-width="1.5" fill="none"><path d="M10 100 q6 -4 12 0 q6 4 12 0"/><path d="M170 112 q6 -4 12 0 q6 4 12 0"/></g><text x="150" y="30" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">WATERFRONT</text></svg>';

  /* ---------- S8: unusual shoes at a market stall ---------- */
  var ODDSHOES = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual pair of shoes for sale at a market stall">' +
    '<rect width="640" height="400" fill="#f3ede4"/><rect y="320" width="640" height="80" fill="#b98a5a"/>' +
    '<path d="M0 0 h640 v40 h-640z" fill="#2f8f83"/><g fill="#fff">' +
    (function () { var s = ''; for (var i = 0; i < 640; i += 64) s += '<rect x="' + (i + 32) + '" y="0" width="32" height="40"/>'; return s; })() +
    '</g><rect x="30" y="60" width="150" height="50" rx="6" fill="#fff" stroke="#c9bfae"/><text x="105" y="92" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7a4b2a">SHOE STALL</text>' +
    /* shoe body */
    '<path d="M150 260 L150 150 Q160 130 200 135 L250 140 Q270 190 330 200 L450 215 Q520 225 520 262 Z" fill="#3d7cc9" stroke="#1f4e85" stroke-width="4" stroke-linejoin="round"/>' +
    /* sole */
    '<rect x="140" y="258" width="390" height="22" rx="10" fill="#eee" stroke="#999" stroke-width="3"/>' +
    /* lights along the sole */
    '<g fill="#f7d35c" stroke="#e67e22" stroke-width="1.5"><circle cx="190" cy="269" r="5"/><circle cx="240" cy="269" r="5"/><circle cx="290" cy="269" r="5"/><circle cx="340" cy="269" r="5"/><circle cx="390" cy="269" r="5"/><circle cx="440" cy="269" r="5"/><circle cx="490" cy="269" r="5"/></g>' +
    '<g stroke="#f7c948" stroke-width="2"><line x1="240" y1="254" x2="236" y2="246"/><line x1="340" y1="254" x2="340" y2="245"/><line x1="440" y1="254" x2="444" y2="246"/></g>' +
    /* springs under the heel */
    '<path d="M160 280 l20 6 l-20 6 l20 6 l-20 6 l20 6 l-20 6 M210 280 l20 6 l-20 6 l20 6 l-20 6 l20 6 l-20 6" stroke="#7f8c8d" stroke-width="4" fill="none" stroke-linejoin="round"/>' +
    '<rect x="150" y="316" width="90" height="6" fill="#555"/>' +
    /* wheels under the front */
    '<circle cx="360" cy="298" r="18" fill="#e74c3c" stroke="#333" stroke-width="4"/><circle cx="460" cy="298" r="18" fill="#e74c3c" stroke="#333" stroke-width="4"/><circle cx="360" cy="298" r="4" fill="#333"/><circle cx="460" cy="298" r="4" fill="#333"/>' +
    /* buckles across the top */
    '<g fill="#222"><rect x="262" y="160" width="14" height="52" transform="rotate(-25 269 186)"/><rect x="302" y="172" width="14" height="50" transform="rotate(-25 309 197)"/><rect x="342" y="182" width="14" height="44" transform="rotate(-25 349 204)"/></g>' +
    '<g fill="none" stroke="#d4ac0d" stroke-width="3"><rect x="258" y="178" width="14" height="12"/><rect x="299" y="189" width="14" height="12"/><rect x="340" y="197" width="14" height="12"/></g>' +
    /* small fan at the ankle */
    '<circle cx="185" cy="190" r="26" fill="#ddd" stroke="#555" stroke-width="3"/><g fill="#5d6d7e"><ellipse cx="185" cy="176" rx="6" ry="12"/><ellipse cx="198" cy="198" rx="6" ry="12" transform="rotate(120 198 198)"/><ellipse cx="172" cy="198" rx="6" ry="12" transform="rotate(240 172 198)"/></g><circle cx="185" cy="190" r="4" fill="#333"/>' +
    '<g stroke="#9bb" stroke-width="2" fill="none"><path d="M120 178 q-8 6 0 12"/><path d="M108 172 q-10 12 0 24"/></g>' +
    /* price tag */
    '<line x1="520" y1="250" x2="560" y2="150" stroke="#555" stroke-width="2"/><polygon points="540,110 610,110 610,160 540,160 528,135" fill="#f6d55c" stroke="#b7950b" stroke-width="2"/><circle cx="540" cy="135" r="4" fill="#fff"/><text x="578" y="143" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#333">$149</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'G',
    title: 'Mock Test G',
    note: 'Original practice content in the CELPIP-General format.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#2e86c1', style: 'short' }, MAYA: { name: 'Maya', g: 'f', skin: '#a9714b', hair: '#120c08', shirt: '#d35400', style: 'curly' } },
        segments: [{
          lines: [
            ['OWEN', 'Maya, isn\'t that library book due today? The slip\'s been sitting on the counter all week.'],
            ['MAYA', 'Oh no, you\'re right. And I still have two chapters left.'],
            ['OWEN', 'Can\'t you just renew it online? As long as nobody else has put a hold on it, it should be fine.'],
            ['MAYA', 'Good idea. I\'ll do it on my phone right now, before I forget again.']
          ],
          questions: [
            { id: 'LP.1', q: 'What will Maya probably do next?', o: ['Extend the loan online', 'Return the book today', 'Pay a fine at the desk', 'Finish the last two chapters'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { AMARA: { name: 'Amara', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#8e44ad', style: 'long' }, JORDAN: { name: 'Jordan', g: 'm', skin: '#e3b28b', hair: '#4a3020', shirt: '#27ae60', style: 'short' } },
          segments: [
            {
              lines: [
                ['AMARA', 'Jordan, did you see the email from the festival people? About the Tidewaters concert?'],
                ['JORDAN', 'No, I haven\'t checked my email since this morning. Why, what\'s up?'],
                ['AMARA', 'They\'ve moved it. You know that storm we had on Tuesday? Apparently it tore part of the roof off the stage at Point Pleasant Park, and they can\'t get it repaired in time.'],
                ['JORDAN', 'You\'re kidding. So, is the whole thing cancelled?'],
                ['AMARA', 'No, no. It\'s been pushed back to Sunday the twentieth, and it\'ll be indoors at the Harbourfront Arena instead of in the park.'],
                ['JORDAN', 'Hang on. It was supposed to be Saturday, July twelfth, wasn\'t it?'],
                ['AMARA', 'Yeah. And honestly, I\'m kind of gutted. The whole reason I wanted to go was to sit on the grass with a picnic and watch the sun go down over the water. A hockey arena just isn\'t the same, you know?'],
                ['JORDAN', 'I get that. Still, as long as the band\'s playing, I\'m happy. Did they say anything about our tickets? We paid a hundred and thirty for the two of them.'],
                ['AMARA', 'They\'re still valid for the new date. Or we can ask for a full refund through the ticket website, but only until July fifteenth. After that, no refunds.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why has the concert been moved?', o: ['Bad weather damaged the stage.', 'The band had to change its plans.', 'Too few tickets had been sold.', 'The park was needed for an event.'] },
                { id: 'L1.2', q: 'What is true about the new arrangements?', o: ['The concert will be held eight days later.', 'The concert will be held a week earlier.', 'The concert will move to a different park.', 'The concert will now start on a Saturday.'] },
                { id: 'L1.3', q: 'How does Amara feel about the change?', o: ['Let down, since the setting mattered to her', 'Relieved, because the park is often crowded', 'Annoyed, because a refund is not possible', 'Fine, as long as the band still performs'] }
              ]
            },
            {
              lines: [
                ['JORDAN', 'Okay, so here\'s my problem. I\'m on the schedule at the garden centre that Sunday. I work until six, and if I remember right, concerts at the arena usually open their doors around six thirty.'],
                ['AMARA', 'That\'s tight. The arena\'s right downtown, so from your work that\'s twenty-five minutes at least, maybe more if there\'s traffic.'],
                ['JORDAN', 'And then there\'s parking. The last time I went to a game there, it was twenty bucks, and the lot was full by six.'],
                ['AMARA', 'So let\'s not drive at all. The number nine bus stops right outside the garden centre and goes straight down Barrington. It\'s about twenty minutes.'],
                ['JORDAN', 'True. But I\'d still be running in the door with dirt on my hands, and I hate rushing. Actually, you know what? Kelsey\'s been asking me to cover one of her Saturdays for weeks. Maybe she\'d take my Sunday in exchange.'],
                ['AMARA', 'Oh, that would be perfect. Then the timing wouldn\'t matter at all.'],
                ['JORDAN', 'Let me message her right now, before I forget.']
              ],
              questions: [
                { id: 'L1.4', q: 'What problem does Jordan have with the new date?', o: ['He is scheduled to work that afternoon.', 'He is going out of town that weekend.', 'He has already promised to help a friend.', 'He does not like concerts at the arena.'] },
                { id: 'L1.5', q: 'Why does Amara suggest taking the bus?', o: ['Parking there is costly and fills up.', 'The bus is quicker than driving at rush hour.', 'Concert tickets include a free bus ride.', 'Jordan\'s car is being repaired that weekend.'] },
                { id: 'L1.6', q: 'What will Jordan probably do next?', o: ['Ask a coworker to trade shifts', 'Ask his manager for the day off', 'Look up the bus schedule online', 'Request a refund for both tickets'] }
              ]
            },
            {
              lines: [
                ['JORDAN', 'Good news. Kelsey said yes. So I\'ll work her shift on Saturday the nineteenth, and I\'m free all day on the twentieth.'],
                ['AMARA', 'Great! Oh, and I just read the rest of the email. The arena doesn\'t allow outside food or drinks, so the picnic basket is definitely staying home.'],
                ['JORDAN', 'That\'s a shame. Anything else?'],
                ['AMARA', 'Yeah, to apologize for the change, every ticket comes with a ten-dollar voucher for the food stands inside.'],
                ['JORDAN', 'Not bad. That\'ll cover a couple of drinks, anyway. But I\'d rather have a proper meal than nachos and hot dogs. What about that Thai place across the street from the arena? We could eat there first and then just walk over.'],
                ['AMARA', 'Sounds good. If we get there around five, we\'ll have plenty of time.']
              ],
              questions: [
                { id: 'L1.7', q: 'What is the total value of the vouchers they will receive?', o: ['$20', '$10', '$130', '$65'] },
                { id: 'L1.8', q: 'Why does Jordan suggest the Thai restaurant?', o: ['He wants something more filling than snacks.', 'The arena food stands do not take vouchers.', 'Amara forgot to pack the picnic basket.', 'It offers a discount to concert ticket holders.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLERK: { name: 'Front desk clerk', g: 'f', skin: '#f0c9a6', hair: '#3b2a20', shirt: '#2e4053', style: 'bun' }, BAINS: { name: 'Mr. Bains', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#7d6608', style: 'short' } },
          segments: [{
            lines: [
              ['CLERK', 'Good evening. How can I help you?'],
              ['BAINS', 'Hi. I\'m in room four eighteen. Sorry to bother you this late, but there\'s a problem with the air conditioner.'],
              ['CLERK', 'Oh, I\'m sorry. Is it not cooling the room?'],
              ['BAINS', 'No, it cools the room just fine. The problem is the noise. Every few minutes it makes this loud rattling sound, and it wakes me up just as I\'m falling asleep. And if I turn it off, the room gets way too hot.'],
              ['CLERK', 'I understand. I can send someone from maintenance up to take a look. They\'re usually there within about twenty minutes.'],
              ['BAINS', 'I appreciate that, but I\'m giving a presentation at eight tomorrow morning, and I really need to get some sleep. Even if they come right away, they might not be able to fix it tonight. Is there any chance I could just switch rooms?'],
              ['CLERK', 'Let me check. Yes, I have six twelve, on the sixth floor. It\'s the same type of room, one king bed, but it faces the courtyard instead of the street, so it\'s a lot quieter.'],
              ['BAINS', 'That sounds much better.'],
              ['CLERK', 'And because of the trouble, I\'d like to include breakfast in our restaurant tomorrow at no charge. It opens at six thirty, so you\'ll have time before your presentation.'],
              ['BAINS', 'Oh, that\'s very kind. Thank you.'],
              ['CLERK', 'Here are your new key cards. If you\'d like to go up and pack your things, I\'ll ask Luis from our bell staff to meet you at four eighteen with a cart in about ten minutes. Maintenance can deal with the old room in the morning.'],
              ['BAINS', 'Perfect. Thanks so much for your help.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is wrong with Mr. Bains\'s room?', o: ['The air conditioner is too noisy.', 'The air conditioner does not cool the room.', 'The room is too close to the elevator.', 'The window facing the street will not close.'] },
              { id: 'L2.2', q: 'Why does Mr. Bains turn down the clerk\'s first offer?', o: ['He needs rest and doubts a quick repair.', 'He thinks maintenance will take too long to arrive.', 'He would prefer a room that faces the courtyard.', 'He is planning to check out early the next day.'] },
              { id: 'L2.3', q: 'According to the clerk, why is room 612 quieter?', o: ['It does not face the street.', 'Its air conditioner was recently replaced.', 'It is at the end of a quiet hallway.', 'It has thicker walls than other rooms.'] },
              { id: 'L2.4', q: 'What does the clerk do to make up for the problem?', o: ['Offers a free morning meal', 'Takes money off his bill', 'Gives him a later checkout', 'Moves him to a larger room'] },
              { id: 'L2.5', q: 'Who will meet Mr. Bains at his room?', o: ['A bell staff member with a cart', 'A maintenance worker with tools', 'The hotel manager on duty tonight', 'A housekeeper with fresh towels'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#d6a07a', hair: '#4a3020', shirt: '#943126', style: 'long' }, THEO: { name: 'Théo Gagnon', g: 'm', skin: '#f2cfb0', hair: '#5a3a1a', shirt: '#1e8449', style: 'curly' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Théo Gagnon, a volunteer at the Hollow Brook Wildlife Centre near Windsor. Théo, welcome.'],
              ['THEO', 'Thanks for having me.'],
              ['HOST', 'So, how does someone end up caring for injured wild animals?'],
              ['THEO', 'In my case, completely by accident. About three years ago, I was driving home and saw an owl sitting at the side of the road. It couldn\'t fly. I had no idea what to do, so I called the centre, and they talked me through getting it into a box safely. A few weeks later they invited me to watch it being released, and I signed up as a volunteer that same day.'],
              ['HOST', 'What does a typical shift look like?'],
              ['THEO', 'Not very glamorous, honestly. I do one four-hour shift every Saturday, and most of it is scrubbing cages, doing laundry and preparing food. Every animal has its own diet, so there\'s a lot of chopping and weighing. Spring is a different story, though. Baby birds have to be fed every thirty minutes from sunrise to sunset.'],
              ['HOST', 'Every thirty minutes?'],
              ['THEO', 'Every thirty minutes. That\'s why we need so many more volunteers from May to July.'],
              ['HOST', 'What\'s the most common mistake people make with wildlife?'],
              ['THEO', 'Bringing in babies that don\'t need rescuing, without a doubt. People see a fawn lying alone in the grass and assume it\'s been abandoned. But the mother leaves it there on purpose while she feeds, and she comes back. So our advice is simple: before you touch anything, call our hotline and describe what you see. Very often the best thing to do is nothing at all.'],
              ['HOST', 'Do volunteers need special training?'],
              ['THEO', 'Everyone takes a two-day orientation, and then you start with birds and small animals. If you want to work with larger mammals, raccoons or foxes, for example, you also need a rabies vaccination, which the centre helps arrange.'],
              ['HOST', 'And what keeps you coming back every Saturday?'],
              ['THEO', 'Release days. When you\'ve spent weeks looking after an animal, and you open the box and watch it run, or fly, back into the woods, there\'s really nothing like it.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Théo first become involved with the centre?', o: ['He asked it for help with a hurt bird.', 'He studied animal care at college.', 'A neighbour invited him to volunteer.', 'He read about the centre in a newspaper.'] },
              { id: 'L3.2', q: 'How does Théo describe most of his regular work?', o: ['Ordinary rather than exciting', 'Stressful and often risky', 'Technical and highly skilled', 'Mostly done outdoors in the woods'] },
              { id: 'L3.3', q: 'Why does the centre need more help from May to July?', o: ['Baby birds must be fed very often.', 'Many volunteers go on vacation then.', 'The centre stays open for longer hours.', 'More animals are released in the summer.'] },
              { id: 'L3.4', q: 'According to Théo, what do people often do wrong?', o: ['Rescue young animals that are not abandoned', 'Feed wild animals bread and other human food', 'Release injured animals before they have healed', 'Keep injured wild animals in their homes as pets'] },
              { id: 'L3.5', q: 'What extra requirement applies to volunteers who handle foxes?', o: ['They must get a rabies vaccination.', 'They must pay for their own training.', 'They must work only on weekday shifts.', 'They must complete a longer orientation.'] },
              { id: 'L3.6', q: 'What does Théo find most rewarding?', o: ['Seeing animals he cared for go free', 'Feeding the baby birds in the spring', 'Answering calls on the centre\'s hotline', 'Teaching new volunteers about animals'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Walkers and cyclists in Bridgewater have a new place to explore this week. The long-awaited LaHave Riverside Trail officially opened on Saturday morning.'],
              ['NEWS', 'The fourteen-kilometre paved trail follows the east bank of the river, linking the downtown waterfront with Riverbend Park to the south. Much of it runs along the route of an abandoned rail line.'],
              ['NEWS', 'The project cost three point two million dollars. It took two years to complete, about six months longer than planned, after spring flooding washed out sections of new work in its first year.'],
              ['NEWS', 'Trail manager Denise Corkum says more than two thousand people used the trail on opening day. She reminds users that people on foot have the right of way, and cyclists must keep their speed under twenty kilometres an hour. Electric bicycles are allowed, but motorized scooters are not. Dogs are welcome, as long as they stay on a leash.'],
              ['NEWS', 'The first three kilometres, closest to downtown, are lit and stay open until eleven p.m. The rest of the trail closes at sunset.'],
              ['NEWS', 'Some homeowners whose properties back onto the trail have raised concerns about privacy and noise. The town says it will plant a row of trees along those sections this fall.'],
              ['NEWS', 'A second phase, which would extend the trail another six kilometres south, could begin in 2028, but only if the town can secure the necessary funding.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['The opening of a new riverside trail', 'A plan to bring back an old railway line', 'Flood damage along the banks of the river', 'A cycling race in Bridgewater'] },
              { id: 'L4.2', q: 'Why did the project take longer than expected?', o: ['High water destroyed some of the work.', 'Homeowners objected to the route.', 'The funding was approved late.', 'The old rail line had to be removed.'] },
              { id: 'L4.3', q: 'Which statement about the trail rules is correct?', o: ['People walking have the right of way.', 'Cyclists may ride at up to 30 km/h.', 'Motorized scooters are allowed after dark.', 'Dogs may run freely on most sections.'] },
              { id: 'L4.4', q: 'How will the town respond to homeowners\' concerns?', o: ['By planting trees beside parts of the trail', 'By closing the trail earlier near houses', 'By moving that section farther from homes', 'By banning bicycles near private property'] },
              { id: 'L4.5', q: 'What can be inferred about the second phase?', o: ['It is not yet certain to go ahead.', 'It will start before the trees are planted.', 'It will follow the west bank of the river.', 'It has already received full funding.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Mom and Dad: 40 years!', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { KEISHA: { name: 'Keisha', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#c0392b', style: 'bun' }, ANDRE: { name: 'Andre', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#2471a3', style: 'bald' }, SIMONE: { name: 'Simone', g: 'f', skin: '#8d5a3b', hair: '#2a1b12', shirt: '#d4ac0d', style: 'curly' } },
          segments: [{
            lines: [
              ['KEISHA', 'Okay, thanks for coming over, you two. Mom and Dad\'s anniversary is September twenty-seventh, so we\'ve got about ten weeks. I think we should throw them a big surprise party. Rent the hall at the community centre, invite everyone, maybe eighty people.'],
              ['ANDRE', 'Eighty people? Keisha, that\'s a lot. And honestly, I\'m not sure a surprise is a good idea. Remember Dad\'s sixtieth? Mom tried to surprise him, and he was grumpy the whole night because he hadn\'t had a chance to get ready.'],
              ['SIMONE', 'That\'s true. He still complains about wearing his old gardening shirt in every single photo.'],
              ['KEISHA', 'Okay, fair enough. Maybe not a surprise. But it\'s their fortieth. I don\'t want it to feel small.'],
              ['SIMONE', 'What if we did something meaningful instead of something huge? They had their first date at Café Rosalind on Quinpool Road. It\'s still there, and they\'ve got a private room upstairs that seats thirty.'],
              ['ANDRE', 'Oh, I love that. Mom\'s always telling the story about Dad knocking soup into his lap.'],
              ['KEISHA', 'Thirty, though. How do we choose who comes?'],
              ['SIMONE', 'Family and their closest friends. Realistically, that\'s about thirty anyway. Everyone else could come to an open house at Mom and Dad\'s place the next afternoon. Just coffee and cake, nothing fancy.'],
              ['KEISHA', 'Hmm. Actually, that solves my problem. Nobody gets left out. Okay, what does the café charge?'],
              ['SIMONE', 'I called yesterday. It\'s fifty-five dollars a person for three courses, dessert included.'],
              ['ANDRE', 'So for thirty people, that\'s sixteen fifty. Split three ways, five hundred and fifty each. I can manage that, but let\'s not pile much more on top.'],
              ['KEISHA', 'Agreed. Then let me take on something that doesn\'t cost much. I\'ll collect old photos from the relatives and put together a slideshow. Aunt Pearl has boxes of pictures from their wedding.'],
              ['SIMONE', 'Perfect. I\'ll book the room before someone else grabs that Saturday. Andre, could you handle the guest list and the invitations?'],
              ['ANDRE', 'Sure. I\'ll have them out by the end of the month. But we still need Mom and Dad to keep that evening free, without giving anything away.'],
              ['KEISHA', 'Leave that to me. I\'ll call them this weekend and just say the three of us want to take them out for dinner.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To plan an anniversary celebration', 'To plan a surprise party for their father', 'To choose a gift for their mother', 'To book a family trip for their parents'] },
              { id: 'L5.2', q: 'Why is Andre against a surprise party?', o: ['Their father disliked an earlier surprise.', 'Their mother does not like being around large crowds.', 'The community centre hall would cost far too much.', 'Their parents will be away for most of September.'] },
              { id: 'L5.3', q: 'Why does Simone mention the gardening shirt?', o: ['To agree with Andre about surprises', 'To suggest a gift idea for their father', 'To describe what Dad usually wears at home', 'To recall a funny story from the first date'] },
              { id: 'L5.4', q: 'Why does Simone suggest Café Rosalind?', o: ['It is where their parents first went out.', 'It is the cheapest place near Quinpool Road.', 'Their parents celebrated their wedding there.', 'It has the largest private room in the area.'] },
              { id: 'L5.5', q: 'What is the purpose of the open house?', o: ['To include guests not invited to the dinner', 'To let their parents rest after a busy night out', 'To show everyone the slideshow of wedding photos', 'To save money by not paying for a large dinner'] },
              { id: 'L5.6', q: 'How much will each sibling pay for the dinner?', o: ['$550', '$1,650', '$55', '$600'] },
              { id: 'L5.7', q: 'What will Keisha be responsible for?', o: ['Making a slideshow of old photos', 'Booking the room upstairs at the café', 'Sending invitations to all the guests', 'Baking a cake for the open house'] },
              { id: 'L5.8', q: 'What will Keisha most likely tell her parents?', o: ['That they are going out for dinner', 'That a big party is being held for them', 'That Aunt Pearl is coming to visit them', 'That the open house has been cancelled'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Fast food ads and kids',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#5d6d7e', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Should fast food companies be allowed to advertise directly to children? As concern grows about children\'s eating habits, the question is getting serious attention across the country.'],
              ['NARR', 'Quebec has restricted commercial advertising aimed at children under thirteen since 1980, and some health groups would like to see similar rules everywhere. Dr. Nora Abiola, a pediatric dietitian in Winnipeg, is one of them.'],
              ['NARR', 'She says young children often cannot tell the difference between an advertisement and regular entertainment, especially when ads appear inside games and videos. In her view, cartoon mascots and free toys teach children to connect happiness with salty, sugary food long before they are old enough to judge for themselves.'],
              ['NARR', 'Abiola also argues that parents are simply outspent. A family trying to teach good habits at home is competing with marketing budgets worth millions of dollars. "We already accept that some products should not be sold to children," she says. "Cigarettes are the obvious example. Why should habits that can last a lifetime be any different?"'],
              ['NARR', 'Not everyone agrees. Gavin Hartley owns two family restaurants in Saskatoon and teaches marketing at a local college. He says a ban would be very hard to define. Would a poster for a kids\' menu count? What about a children\'s hockey team whose jerseys are paid for by a restaurant?'],
              ['NARR', 'Hartley also predicts that large chains would simply move their marketing to places where the rules are weaker, such as social media accounts run from outside the country, while small businesses like his would lose one of their few affordable ways to attract families.'],
              ['NARR', 'In his view, the responsibility belongs with parents, and the money would be better spent on nutrition lessons in schools, so that children learn to make healthy choices for themselves.'],
              ['NARR', 'A research team in Halifax plans to publish a study next spring comparing children\'s eating habits in provinces with and without advertising limits.']
            ],
            questions: [
              { id: 'L6.1', q: 'What issue does the report discuss?', o: ['Banning fast food ads aimed at children', 'Removing fast food from school cafeterias', 'Adding health warnings to restaurant menus', 'Raising taxes on sugary drinks and snacks'] },
              { id: 'L6.2', q: 'According to Dr. Abiola, why are young children easily influenced by ads?', o: ['They often cannot recognize an ad as an ad.', 'They spend more hours watching TV than adults.', 'They have more pocket money than in the past.', 'They copy what they see their parents eating.'] },
              { id: 'L6.3', q: 'Why does Dr. Abiola mention cigarettes?', o: ['To argue there is a precedent for such limits', 'To claim that fast food is as harmful as smoking', 'To suggest that parents who smoke set a bad example', 'To explain why mascots appear in video games'] },
              { id: 'L6.4', q: 'What is one of Gavin Hartley\'s objections to a ban?', o: ['It would be hard to define clearly.', 'It would raise prices on kids\' menus.', 'It would hurt children\'s hockey teams.', 'It would close many large restaurant chains.'] },
              { id: 'L6.5', q: 'What does Hartley predict large chains would do?', o: ['Move their ads where rules are weaker', 'Lower prices on their children\'s meals', 'Close many of their smaller locations', 'Sponsor more school nutrition programs'] },
              { id: 'L6.6', q: 'What does Hartley think would be a better approach?', o: ['Nutrition lessons in schools', 'Warning labels on restaurant posters', 'Grants for families to buy healthy food', 'Free toys only with healthy kids\' meals'] }
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
          passage: '<h3>Message</h3><p>Hello Wildcats families,</p><p>Welcome to the spring season! I am thrilled to be coaching the Under-10 Wildcats for a third year, and I am looking forward to meeting the six girls who have moved up from our Under-8 program. Before our first practice, there are a few changes you should know about.</p><p>First, our practice schedule. The town is replacing the grass at Kinsmen Field with artificial turf, and the work will not be finished until mid-June at the earliest. Until then, we will practise at Oakridge Elementary School on Wednesdays from 5:30 to 6:45 p.m., rather than on Tuesdays. The school field has no washrooms, and the building itself is locked after 5:00, so please make sure your child goes before leaving home.</p><p>Second, equipment. Shin guards are required at every practice and game. This is a league rule rather than my own, and referees will not allow a player on the field without them. Please also send a full water bottle labelled with your child\'s name. New jerseys will be handed out at the first practice. The $35 fee covers the jersey and matching socks. It can be paid in cash or by e-transfer to our treasurer, Paulette Gauthier, and is due by May 16. Families with more than one child registered with the club pay only $20 for each additional child.</p><p>Third, our big event this season is the Hub City Tournament in Truro on Saturday, June 7. The first whistle is at 9:00 a.m., but I need every player there by 8:15 to warm up. Last year, two of our girls arrived after the warm-up and had to sit out the opening game, which was hard on everyone. I am also looking for four parents who can drive players who do not have a ride. If you can help, please reply by May 30 so that I can organize car groups.</p><p>Finally, weather. We play in light rain, but practice is cancelled if there is thunder or lightning. I will send a text by 4:00 p.m. if we need to cancel, so please make sure the club office has your current cell number. I no longer post cancellations on the club website, because it was often updated too late to be useful.</p><p>Thank you for trusting me with your daughters. Let\'s have a fun and safe season!</p><p>Coach Danielle Fortier</p>',
          questions: [
            { id: 'R1.1', q: 'The team must practise somewhere else until at least mid-June because', o: ['work on its usual playing surface will still be under way.', 'the school has reserved Kinsmen Field on Tuesday evenings.', 'the turf at Oakridge Elementary School is being replaced.', 'the town locks the gates of Kinsmen Field after 5:00.'] },
            { id: 'R1.2', q: 'The coach most likely mentions that the school building is locked after 5:00 because', o: ['players will have nowhere to use a toilet there.', 'families cannot wait indoors if it starts to rain.', 'practice has to end before the building closes.', 'equipment cannot be stored in the school overnight.'] },
            { id: 'R1.3', q: 'By saying that shin guards are "a league rule rather than my own," the coach suggests that', o: ['she has no power to make exceptions.', 'she thinks the rule is unfair to new players.', 'referees will lend shin guards to players.', 'the league may drop the rule before June.'] },
            { id: 'R1.4', q: 'Paulette Gauthier is probably the person who', o: ['collects the money families owe the club.', 'drives players to the tournament in Truro.', 'chooses the players for the Under-10 team.', 'sends a text when practice is called off.'] },
            { id: 'R1.5', q: 'The coach describes what happened at last year\'s tournament in order to', o: ['stress how much being punctual matters.', 'blame two families for losing a game.', 'explain why the first game starts at 9:00.', 'show that the warm-up is not essential.'] },
            { id: 'R1.6', q: 'According to the coach, announcements on the club website', o: ['did not always appear in time to help.', 'are read by very few of the families.', 'cost the club more than text messages.', 'will now be updated by 4:00 p.m. daily.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Coach Fortier,</p><p>Thanks for the detailed update. Anika is very excited to be back for another season. I am glad you mentioned the change of field, because we live right beside Kinsmen and would have gone there out of habit. The new day actually works better for us, since Anika\'s piano lesson falls on your old practice night, [[R1.7]].</p><p>Her younger sister, Leela, is joining the Under-8 team this year, so tonight I will send [[R1.8]] by e-transfer to cover both girls. I hardly ever carry cash anyway.</p><p>I would also be happy to be one of the four drivers for the tournament. Our van has room for three more girls. The drive from our neighbourhood to Truro takes about an hour, so the girls should be ready to leave by [[R1.9]] at the latest, which would get us there just in time for the warm-up.</p><p>One more thing: my cell number changed last month. I will pass the new one to [[R1.10]] this week so that I do not miss a cancellation. Since we can no longer [[R1.11]] for updates, a text is our only way of knowing.</p><p>See you on Wednesday,<br>Ravi Menon</p>',
          blanks: [
            { id: 'R1.7', o: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday'] },
            { id: 'R1.8', o: ['$55', '$70', '$40', '$35'] },
            { id: 'R1.9', o: ['7:15 a.m.', '8:15 a.m.', '8:00 a.m.', '7:45 a.m.'] },
            { id: 'R1.10', o: ['the club office', 'the treasurer', 'the school office', 'the league'] },
            { id: 'R1.11', o: ['check online', 'phone the school', 'ask the referees', 'call the town'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Atlantic Coastal Rail: Halifax to Moncton (one way)</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Train</th><th>Runs</th><th>Leaves Halifax</th><th>Arrives Truro</th><th>Arrives Moncton</th><th>Economy</th><th>Flex</th></tr></thead><tbody>' +
            '<tr><td>101</td><td>Daily</td><td>6:40 a.m.</td><td>8:05 a.m.</td><td>10:25 a.m.</td><td>$48</td><td>$72</td></tr>' +
            '<tr><td>103*</td><td>Mon to Fri</td><td>9:15 a.m.</td><td>10:40 a.m.</td><td>1:00 p.m.</td><td>$42</td><td>$66</td></tr>' +
            '<tr><td>105</td><td>Daily</td><td>1:30 p.m.</td><td>2:55 p.m.</td><td>5:15 p.m.</td><td>$48</td><td>$72</td></tr>' +
            '<tr><td>107*</td><td>Fri, Sat, Sun</td><td>5:45 p.m.</td><td>7:10 p.m.</td><td>9:30 p.m.</td><td>$55</td><td>$80</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Children aged 2 to 11 pay half the Economy fare on any train. Children under 2 travel free on an adult\'s lap.</li><li>Seniors aged 65 and over receive 10% off any adult fare.</li><li>Economy tickets cannot be refunded. Flex tickets can be refunded in full up to 24 hours before departure.</li><li>Bicycles are carried only on trains marked *, for $12 per bicycle each way, and must be reserved when booking.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Jasmine,</p><p>I have finally booked my trip to see you in Moncton. I am leaving on Saturday, October 18, once my shift at the bakery ends at noon. Since I want to bring my bike so we can ride the trails together, I have no choice but to take train [[R2.1]], which gets in at [[R2.2]]. Could you pick us up at the station?</p><p>Leo is coming with me too. He turned eight last month, so his ticket will cost only [[R2.3]]. I chose Economy for both of us, even though those tickets [[R2.4]], because my days off are already approved and every dollar counts this month. With the bike, the total for both of us for the trip there comes to [[R2.5]].</p><p>I have not booked the trip home yet, because the return schedule is different. I will send you the details once I have them.</p><p>See you soon,<br>Nadine</p>',
          blanks: [
            { id: 'R2.1', o: ['107', '103', '101', '105'] },
            { id: 'R2.2', o: ['9:30 p.m.', '5:15 p.m.', '7:10 p.m.', '1:00 p.m.'] },
            { id: 'R2.3', o: ['$27.50', '$55.00', '$24.00', '$40.00'] },
            { id: 'R2.4', o: ['give no refunds', 'cost more than Flex', 'sell out quickly', 'exclude bicycles'] },
            { id: 'R2.5', o: ['$94.50', '$82.50', '$67.00', '$122.00'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A 70-year-old taking the earliest train with a Flex ticket will pay', o: ['$64.80.', '$72.00.', '$43.20.', '$48.00.'] },
            { id: 'R2.7', q: 'A woman travelling on a Tuesday with her bicycle and her one-year-old son on her lap, on the cheapest fare possible, will pay', o: ['$54.00.', '$42.00.', '$75.00.', '$60.00.'] },
            { id: 'R2.8', q: 'Nadine\'s reason for choosing Economy suggests that she', o: ['is confident her travel date will not change.', 'believes Flex tickets do not include bicycles.', 'expects a refund if she has to cancel.', 'thinks Economy seats are more comfortable.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Growing a Greener City</h3><p><b>A.</b> Across Canada, cities are setting ambitious goals for planting trees, and the reasons go well beyond appearance. On a hot summer afternoon, a street lined with mature trees can be several degrees cooler than a nearby street with none, which reduces the need for air conditioning. Tree roots and leaves also capture rainwater, slowing its flow into storm drains during heavy downpours. Some studies have even found that homes on leafy streets sell for slightly higher prices than similar homes on bare ones. Trees also trap dust and other pollutants, and researchers have linked green streets with lower stress among the people who live on them.</p><p><b>B.</b> Keeping those trees alive, however, is harder than planting them. A tree in a forest may live for more than a century, but one planted beside a downtown sidewalk often survives only fifteen to twenty years. Its roots are squeezed into a small pit of hard, packed soil, and each winter it is exposed to the salt spread on roads and sidewalks. To give roots more room, some cities now install underground frames, called soil cells, that hold loose soil beneath the pavement without letting it get crushed. The method is expensive, but so is failure: removing a dead street tree and replacing it can cost a city well over a thousand dollars.</p><p><b>C.</b> Where trees are planted also matters. When several Canadian cities mapped their tree cover using aerial photos, they found large differences between neighbourhoods. Older, wealthier areas often had thick canopies, while newer or lower-income areas, especially those near highways and industrial sites, had far less shade. As a result, a number of cities have changed their planting programs to give priority to the streets that need cooling the most. Planners stress that this is about more than comfort, since the hottest blocks during a heat wave are also where emergency calls for heat illness tend to rise.</p><p><b>D.</b> Residents can play a part too. Many municipalities offer free or low-cost trees to homeowners each spring, along with advice on where to plant them. Experts say the first three years are the most important, because young trees need regular deep watering until their roots are established. They also recommend planting a mix of species. When an insect pest spread through eastern Canada and killed millions of ash trees, neighbourhoods that had planted almost nothing else lost most of their shade within a few years.</p>',
          questions: [
            { id: 'R3.1', q: 'Chemicals used to keep pavement safe in winter can harm trees.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Trees can reduce the amount of water that reaches drains during storms.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'Depending on only one kind of tree can leave an area exposed.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'Images taken from the air revealed uneven tree cover.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Most new trees in Canadian cities are planted by volunteers.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Living near trees may increase the value of a property.', fixed: true, a: 'A' },
            { id: 'R3.7', q: 'Newly planted trees need a lot of water for a limited period.', fixed: true, a: 'D' },
            { id: 'R3.8', q: 'Trees beside city streets usually die much younger than trees in the wild.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'Some cities now plant first in the areas that most need shade.', fixed: true, a: 'C' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Drivers Pay to Enter Downtown?</h3><p>Port Avalon city council is considering a plan that would charge drivers $12 to enter the downtown core on weekdays between 7 a.m. and 7 p.m. Cameras would read licence plates at the edge of the zone, and the bill would be mailed to the vehicle owner. People who live inside the zone would pay half price. If approved, the charge could begin within two years. The proposal follows a city report showing that the number of cars entering downtown each morning has risen by nearly a quarter over the past decade, while the number of people living downtown has barely changed.</p><p>Urban planner Dr. Mei-Ling Chow is one of the plan\'s strongest supporters. She points out that during rush hour, traffic downtown crawls along at less than 15 kilometres an hour, and buses are stuck in the same jams as everyone else. Several European cities introduced similar charges and saw traffic fall noticeably within the first year. "Road space downtown is limited and valuable," Chow says. "Right now we hand it out for nothing and then act surprised when it runs out." The charge is expected to raise about $40 million a year, all of which, she says, should go toward more frequent buses and protected bike lanes.</p><p>Brian Kowalczyk, whose family has run a hardware store downtown for thirty years, sees things differently. Many of his customers drive in from rural areas where there is no bus service at all. "People buying lumber and paint are not going to carry it home on a bus," he says. "They will just drive to the big stores at the edge of town, where parking is free." He also worries about workers such as cleaners and kitchen staff, many of whom start their shifts before buses run often. For them, he says, $12 a day adds up to $60 a week, which is a serious cost for people on low wages.</p><p>Chow admits that the plan will only be fair if transit improves first. She suggests that the charge should not start until new bus routes are running, and that drivers with low incomes should receive a discount. Kowalczyk remains unconvinced. He would prefer the city to build cheaper parking garages on the edge of downtown and run a free shuttle from them to the main shopping streets. Several other downtown business owners have signed a letter supporting that idea.</p><p>Transportation researcher Odile Brassard, who has studied the European examples, takes a middle position. She agrees that the charge would probably reduce traffic, but she notes that those cities had spent heavily on transit for years before any fee began. "A charge on its own is a stick without a carrot," she says. She also points out that the shuttle plan has costs of its own: garages must be built, and a shuttle running every ten minutes would need steady funding. Her advice is to test the fee for one year, with a clear promise to cancel it if downtown sales fall sharply. The council will hold public meetings on the proposal this spring.</p>',
          questions: [
            { id: 'R4.1', q: 'The writer most likely mentions that the downtown population has barely changed in order to show that', o: ['the extra cars belong mainly to people from elsewhere.', 'downtown residents ought to pay the full $12 charge.', 'few people want to live near heavy downtown traffic.', 'the city report did not count people living downtown.'] },
            { id: 'R4.2', q: 'Dr. Chow\'s remark about handing out road space "for nothing" suggests that', o: ['drivers currently pay no price for a scarce resource.', 'the city should stop building new roads downtown.', 'buses should travel downtown without paying a fee.', 'parking downtown ought to be free for residents.'] },
            { id: 'R4.3', q: 'Mr. Kowalczyk is concerned that the charge would', o: ['send shoppers to retailers outside the core.', 'make his customers take the bus more often.', 'lead customers to order products online.', 'force downtown residents to pay full price.'] },
            { id: 'R4.4', q: 'Mr. Kowalczyk mentions cleaners and kitchen staff because', o: ['they often begin work when transit is scarce.', 'they would be charged a higher morning rate.', 'most of them live inside the downtown zone.', 'they are among his most loyal customers.'] },
            { id: 'R4.5', q: 'Ms. Brassard would most likely agree that', o: ['a fee works best once transit is already strong.', 'the fee will not reduce traffic and should be dropped.', 'Mr. Kowalczyk\'s shuttle would cost the city nothing.', 'the charge should be made permanent from the start.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I drive downtown three days a week, and I expected to hate this idea. After reading the article, though, I have changed my mind somewhat. I sit in traffic for forty minutes every morning, and the bus I could take instead is no faster, because it [[R4.6]]. Still, I share Mr. Kowalczyk\'s worry about people whose shifts start [[R4.7]]. For someone who drives in every weekday, the charge would cost [[R4.8]] every four weeks, and that is a lot of money on a low wage. That is why the discount Dr. Chow proposes for [[R4.9]] makes sense to me.</p><p>In the end, though, I find Ms. Brassard\'s view the most convincing. A one-year trial seems sensible, as long as the city keeps its promise to [[R4.10]] if downtown shops start to suffer. Why not try it and see?</p>',
          blanks: [
            { id: 'R4.6', o: ['is caught in the same congestion', 'uses the new protected bike lanes', 'stops at every parking garage', 'goes around the edge of the charging zone'] },
            { id: 'R4.7', o: ['before service is frequent', 'after the shops have closed', 'inside the downtown zone', 'at the big stores outside town'] },
            { id: 'R4.8', o: ['$240', '$60', '$48', '$300'] },
            { id: 'R4.9', o: ['drivers who earn less', 'people who live downtown', 'shoppers from rural areas', 'downtown business owners'] },
            { id: 'R4.10', o: ['scrap the charge', 'build the garages', 'lower bus fares', 'raise the fee'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You are a member of a local fitness centre. Last week, a class you attend regularly was cancelled without any notice, and you arrived to find the room empty. When you checked your bank statement afterwards, you also noticed that your monthly membership charge was higher than usual.</p><p>Write an email to the fitness centre\'s manager. In your email, do the following:</p><ul><li>Describe the class and what happened when you arrived.</li><li>Explain the problem with your membership charge.</li><li>Say what you would like the fitness centre to do.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your company wants to offer employees a new benefit and has asked staff to choose between two options. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'A free catered lunch for all employees every Friday, eaten together in the staff room.' },
            { key: 'B', label: 'Option B', text: 'Flexible start times, so employees can begin work at any time between 7:00 and 10:00 a.m.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you like to visit, and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is about to move into their first apartment and has never lived alone before. Give your friend advice on how to prepare and manage their new home.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you made a mistake and learned something important from it. What happened, and what did you learn?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: PARTY },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: PARTY },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your partner are looking for a new place to rent. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Apartment downtown', image: DOWNTOWN, facts: ['2 bedrooms, 4th floor', 'Rent: $2,100 per month', '5-minute walk to work', 'No yard, street parking only'] },
            { key: 'B', title: 'House in the suburbs', image: SUBURB, facts: ['3 bedrooms and a backyard', 'Rent: $2,300 per month', '35-minute drive to work', 'Quiet street near a park'] }
          ],
          third: { key: 'C', title: 'Condo by the water', image: CONDO, facts: ['2 bedrooms with a balcony', 'Rent: $2,600 per month', '20-minute bus ride to work', 'Ocean view, gym in the building'] },
          persuade: 'Your partner suggests the condo by the water instead. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Two months ago, you promised your neighbour that you would feed her cat and water her plants while she is away for two weeks. Her trip starts next Monday. Yesterday, your sister invited you to join her family on a week-long cottage trip during the same time, and she has already paid for your share.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot keep your promise.</p><p><b>Option B:</b> Talk to your sister. Explain why you cannot join the trip.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Should all students be required to learn a second language in school? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a market and see this unusual pair of shoes for sale. Call your friend who loves unusual fashion. Describe the shoes and explain whether you think your friend should buy them.', image: ODDSHOES }
      ]
    }
  });
})();
