/* Rowe CELPIP Mock Exam: Test A content.
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

  var PARK = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A busy city park on a summer afternoon">';
    p += '<rect width="640" height="400" fill="#bfe3f5"/>';
    p += '<g fill="#5f6b78" opacity=".85"><ellipse cx="560" cy="60" rx="70" ry="30"/><ellipse cx="610" cy="75" rx="50" ry="25"/><ellipse cx="515" cy="78" rx="45" ry="22"/></g>';
    p += '<g stroke="#7d8ea0" stroke-width="2" opacity=".8"><line x1="530" y1="105" x2="524" y2="122"/><line x1="560" y1="105" x2="554" y2="122"/><line x1="590" y1="102" x2="584" y2="119"/></g>';
    p += '<circle cx="90" cy="60" r="28" fill="#f7d35c"/>';
    p += '<rect y="180" width="640" height="220" fill="#8cc56d"/>';
    p += '<path d="M0 330 C160 290 330 300 640 255 L640 290 C350 330 170 325 0 365z" fill="#e3d2b0"/>';
    p += '<ellipse cx="510" cy="215" rx="95" ry="28" fill="#6fb3d9"/>';
    p += '<g fill="#fff"><ellipse cx="480" cy="212" rx="9" ry="5"/><ellipse cx="505" cy="220" rx="9" ry="5"/></g><g fill="#f0b23a"><circle cx="488" cy="208" r="3"/><circle cx="513" cy="216" r="3"/></g>';
    p += '<rect x="58" y="120" width="16" height="80" fill="#7a5233"/><circle cx="66" cy="110" r="46" fill="#4f9a45"/><circle cx="40" cy="128" r="30" fill="#5aa84e"/><circle cx="95" cy="125" r="30" fill="#5aa84e"/>';
    /* kite drifting toward the tree */
    p += '<polygon points="170,70 186,90 170,112 154,90" fill="#e2543b"/><line x1="170" y1="112" x2="225" y2="250" stroke="#555" stroke-width="1.2"/>';
    p += '<path d="M170 112 q-6 10 4 16 q-8 8 2 14" stroke="#e2543b" stroke-width="2" fill="none"/>';
    p += person(225, 262, { shirt: '#f2a33a', s: .9, arms: 'up', skin: '#8d5a3b', hair: '#1d1410' });
    /* picnic family */
    p += '<rect x="250" y="275" width="110" height="40" fill="#d9534f" transform="skewX(-12)"/>';
    p += '<g fill="#fff" opacity=".6"><rect x="262" y="275" width="10" height="40" transform="skewX(-12)"/><rect x="292" y="275" width="10" height="40" transform="skewX(-12)"/><rect x="322" y="275" width="10" height="40" transform="skewX(-12)"/></g>';
    p += '<rect x="290" y="270" width="26" height="18" rx="3" fill="#a8743e"/>';
    p += person(270, 298, { shirt: '#6a4fb0', sit: true, skin: '#c98c64', hair: '#2a1b12' });
    p += person(335, 300, { shirt: '#2f8f83', sit: true, skin: '#f0c9a6', hair: '#c49a42' });
    /* ice cream cart with a line */
    p += '<rect x="400" y="262" width="62" height="40" rx="4" fill="#f4f1ea" stroke="#d27aa5" stroke-width="3"/><path d="M396 262 q35 -34 70 0z" fill="#d27aa5"/><circle cx="412" cy="306" r="8" fill="#444"/><circle cx="452" cy="306" r="8" fill="#444"/>';
    p += '<text x="431" y="287" font-size="10" text-anchor="middle" fill="#9b3d6c" font-family="sans-serif">ICE CREAM</text>';
    p += person(478, 300, { shirt: '#ffffff', skin: '#e3b28b', hair: '#555' });
    p += person(498, 302, { shirt: '#3fa3d6', s: .75, skin: '#7a4b31', hair: '#120c08', arms: 'left' });
    p += '<polygon points="492,268 488,277 496,277" fill="#d9a35b"/><circle cx="492" cy="266" r="4" fill="#f7c2d6"/>';
    p += person(520, 304, { shirt: '#c64b73', skin: '#f2cfb0', hair: '#7a4a24' });
    /* man walking a dog toward the pond */
    p += person(560, 340, { shirt: '#4a6d8c', skin: '#d6a07a', hair: '#333', arms: 'right' });
    p += '<line x1="582" y1="313" x2="610" y2="330" stroke="#8a2d2d" stroke-width="2"/>';
    p += '<g fill="#a5713f"><ellipse cx="616" cy="334" rx="14" ry="7"/><circle cx="628" cy="328" r="6"/><rect x="606" y="338" width="3" height="10"/><rect x="622" y="338" width="3" height="10"/></g>';
    /* bench with older couple */
    p += '<rect x="110" y="300" width="80" height="8" fill="#7d5a3c"/><rect x="110" y="285" width="80" height="6" fill="#7d5a3c"/><rect x="116" y="308" width="5" height="16" fill="#555"/><rect x="180" y="308" width="5" height="16" fill="#555"/>';
    p += person(132, 322, { shirt: '#8a9aa8', sit: true, skin: '#f0c9a6', hair: '#d8d8d8' });
    p += person(165, 322, { shirt: '#b87fb5', sit: true, skin: '#f0c9a6', hair: '#e6e6e6' });
    /* cyclist on the path */
    p += '<g transform="translate(330 352)"><circle cx="-18" cy="0" r="12" fill="none" stroke="#333" stroke-width="3"/><circle cx="18" cy="0" r="12" fill="none" stroke="#333" stroke-width="3"/><path d="M-18 0 L-2 -16 L18 0 M-2 -16 L10 -16" stroke="#c0392b" stroke-width="3" fill="none"/></g>';
    p += person(328, 338, { shirt: '#f4d03f', skin: '#c98c64', hair: '#2a1b12', arms: 'right' });
    p += '</svg>';
    return p;
  })();

  var CAMP = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#cfeaf7"/><rect y="78" width="200" height="42" fill="#79b86a"/><ellipse cx="150" cy="86" rx="48" ry="12" fill="#5aa6d6"/><polygon points="40,90 75,40 110,90" fill="#e67e22"/><polygon points="75,40 75,90 60,90" fill="#c4661a"/><polygon points="160,78 175,45 190,78" fill="#3f7f3a"/><polygon points="135,78 148,52 161,78" fill="#4a8c44"/><circle cx="30" cy="22" r="10" fill="#f6d55c"/></svg>';
  var HOTEL = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#dfe8f2"/><rect x="20" y="50" width="34" height="70" fill="#9aa9ba"/><rect x="146" y="40" width="36" height="80" fill="#9aa9ba"/><rect x="62" y="18" width="76" height="102" fill="#4f6a8a"/><g fill="#f6e7a6">' +
    (function () { var w = ''; for (var r = 0; r < 6; r++) for (var c = 0; c < 4; c++) w += '<rect x="' + (70 + c * 17) + '" y="' + (26 + r * 14) + '" width="9" height="8"/>'; return w; })() +
    '</g><rect x="90" y="102" width="20" height="18" fill="#2c3e50"/><text x="100" y="15" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">HOTEL</text></svg>';
  var WATERPARK = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e8f4fb"/><rect x="10" y="30" width="180" height="90" fill="#cfd8e3"/><polygon points="10,30 100,6 190,30" fill="#9fb2c6"/><path d="M40 40 C120 40 40 80 120 80 C160 80 150 104 170 108" stroke="#f39c12" stroke-width="10" fill="none" stroke-linecap="round"/><rect x="24" y="96" width="150" height="20" rx="4" fill="#4fb3e8"/><text x="100" y="24" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">INDOOR WATER PARK</text></svg>';

  var ODDBIKE = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual bicycle at a garage sale">' +
    '<rect width="640" height="400" fill="#efe9df"/><rect y="300" width="640" height="100" fill="#b9b2a6"/>' +
    '<rect x="30" y="40" width="140" height="70" rx="6" fill="#fff" stroke="#c9bfae"/><text x="100" y="72" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7a4b2a">GARAGE</text><text x="100" y="95" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7a4b2a">SALE</text>' +
    '<rect x="470" y="60" width="120" height="44" rx="6" fill="#f6d55c"/><text x="530" y="89" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#333">$75</text>' +
    /* wheels */
    '<circle cx="190" cy="300" r="62" fill="none" stroke="#333" stroke-width="8"/><circle cx="430" cy="300" r="62" fill="none" stroke="#333" stroke-width="8"/>' +
    '<g stroke="#999" stroke-width="2"><line x1="190" y1="238" x2="190" y2="362"/><line x1="128" y1="300" x2="252" y2="300"/><line x1="430" y1="238" x2="430" y2="362"/><line x1="368" y1="300" x2="492" y2="300"/></g>' +
    /* frame */
    '<path d="M190 300 L280 210 L400 210 L430 300 M280 210 L310 300 L190 300 M310 300 L400 210" stroke="#2e86c1" stroke-width="9" fill="none" stroke-linejoin="round"/>' +
    '<path d="M400 210 L392 170 L420 160" stroke="#555" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<rect x="258" y="190" width="46" height="12" rx="6" fill="#222"/>' +
    /* umbrella over the seat */
    '<line x1="282" y1="190" x2="300" y2="80" stroke="#555" stroke-width="4"/><path d="M200 95 Q300 10 400 80 Q350 70 300 80 Q250 75 200 95z" fill="#e74c3c"/>' +
    /* front basket with a cup holder */
    '<rect x="420" y="165" width="70" height="44" rx="5" fill="#c49a5a" stroke="#8a6331" stroke-width="3"/><g stroke="#8a6331" stroke-width="2"><line x1="440" y1="165" x2="440" y2="209"/><line x1="460" y1="165" x2="460" y2="209"/><line x1="420" y1="187" x2="490" y2="187"/></g>' +
    '<rect x="372" y="150" width="16" height="22" rx="3" fill="#7f8c8d"/>' +
    /* side car for a dog */
    '<rect x="70" y="250" width="90" height="48" rx="18" fill="#27ae60"/><circle cx="96" cy="292" r="16" fill="none" stroke="#333" stroke-width="5"/>' +
    '<g fill="#a5713f"><circle cx="128" cy="238" r="16"/><ellipse cx="116" cy="230" rx="6" ry="11"/><ellipse cx="140" cy="230" rx="6" ry="11"/></g><circle cx="123" cy="236" r="2" fill="#222"/><circle cx="133" cy="236" r="2" fill="#222"/>' +
    /* small solar panel on the back rack */
    '<rect x="212" y="214" width="56" height="10" fill="#555"/><rect x="214" y="196" width="52" height="18" fill="#1f3b73" stroke="#7fa3d6"/>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'A',
    title: 'Mock Test A',
    note: 'Original practice content in the CELPIP-General format.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { TOM: { name: 'Tom', g: 'm', skin: '#e3b28b', hair: '#4a3020', shirt: '#3d7cc9', style: 'short' }, GRACE: { name: 'Grace', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#c0504d', style: 'long' } },
        segments: [{
          lines: [
            ['TOM', 'Hi Grace. Are you still coming to the farmers\' market with us on Saturday?'],
            ['GRACE', 'I wanted to, but my sister is flying in that morning, so I have to pick her up from the airport at ten.'],
            ['TOM', 'That\'s too bad. Maybe we can all go next weekend instead.'],
            ['GRACE', 'That sounds good. Let\'s plan on it.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why can\'t Grace go to the market on Saturday?', o: ['She is picking up her sister.', 'She promised to work an extra shift that morning.', 'The market is closed for the long weekend.', 'She is flying out to visit her sister.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { SAM: { name: 'Sam', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#4a6d8c', style: 'short' }, LEAH: { name: 'Leah', g: 'f', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#2f8f83', style: 'bun' } },
          segments: [
            {
              lines: [
                ['SAM', 'Leah, got a minute? Harbour View Bistro just called, and it isn\'t good news.'],
                ['LEAH', 'About Margaret\'s retirement lunch on Friday? Please don\'t tell me they double-booked us again.'],
                ['SAM', 'Worse, I\'m afraid. A pipe burst in their kitchen overnight, and they can\'t reopen for at least two weeks. Every booking is cancelled.'],
                ['LEAH', 'Oh no. We invited thirty-five people, and her whole family is driving in from Truro for it.'],
                ['SAM', 'I know. The manager\'s giving us back everything we paid, but that doesn\'t give us anywhere to hold it.'],
                ['LEAH', 'Well, at least we\'re not out of pocket. We only put down the two hundred for the deposit, didn\'t we?'],
                ['SAM', 'That\'s what I thought too, but then we ordered the cake through them as well, remember? That was another fifty on top. It should all be back on the company card within a week.'],
                ['LEAH', 'Right, the cake. Okay. Honestly, with Friday this close, I\'d be amazed if anywhere decent still has a table for thirty-five at lunchtime.']
              ],
              questions: [
                { id: 'L1.1', q: 'What problem are Sam and Leah dealing with?', o: ['Their chosen venue can no longer host the event.', 'The restaurant has double-booked their table.', 'Margaret\'s family can no longer attend the lunch.', 'The restaurant will not give back their money.'] },
                { id: 'L1.2', q: 'How much money will the restaurant return?', o: ['$250', '$200', '$50', '$300'] },
                { id: 'L1.3', q: 'What does Leah suggest about other restaurants?', o: ['They will be hard to book at this late stage.', 'They will not take a group without a deposit.', 'They will be too far for Margaret\'s family.', 'They usually charge more for a group at lunch.'] }
              ]
            },
            {
              lines: [
                ['SAM', 'What if we just held it here? The big boardroom on the fourth floor is free on Friday.'],
                ['LEAH', 'I thought of that, but it only seats about twenty. Besides, Margaret has given this company twenty-two years. Sandwiches next to the projector isn\'t much of a send-off.'],
                ['SAM', 'Fair enough. My brother-in-law runs a catering business. He can bring food pretty much anywhere, and he\'s used to last-minute jobs.'],
                ['LEAH', 'Really? That changes things. Then we don\'t need a restaurant at all, just a decent room.'],
                ['SAM', 'Exactly. What about the community hall on Spring Street? It\'s only a five-minute walk from here.'],
                ['LEAH', 'The one beside the library? I think they rent it by the hour. I have no idea whether it\'s free on Friday, though.'],
                ['LEAH', 'I\'ll phone them right after this. If it\'s available, your brother-in-law can look after the food, and we can decorate on Thursday after work.'],
                ['SAM', 'Sounds good. I\'ll give him a heads-up tonight so he can keep Friday open, but I won\'t promise him anything until you\'ve heard back.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Leah reject the boardroom?', o: ['It is too cramped and too ordinary for the occasion.', 'It has been reserved for a client meeting on Friday.', 'The caterer would have trouble reaching the fourth floor.', 'Margaret has asked not to celebrate at the office.'] },
                { id: 'L1.5', q: 'What makes Sam\'s brother-in-law useful?', o: ['He can supply food wherever they hold the lunch.', 'He can lend them the dining room at his company.', 'He can cater only if they use the boardroom.', 'He can help them decorate on Thursday evening.'] },
                { id: 'L1.6', q: 'What will Sam probably do tonight?', o: ['Warn his brother-in-law without making a firm booking', 'Call the community hall to check whether it is free', 'Confirm the catering order for Friday afternoon', 'Meet Leah at the hall to start decorating'] }
              ]
            },
            {
              lines: [
                ['LEAH', 'Okay, I just called the hall. They\'re free on Friday from eleven until three, and it\'s fifty-five dollars an hour. Oh, sorry, no, I\'ve got that backwards. Fifty-five is their rate for charities. For us it\'s sixty.'],
                ['SAM', 'Still reasonable. Lunch starts at noon anyway, so should we just book it from twelve to two?'],
                ['LEAH', 'I was tempted, but we\'ll need an hour beforehand to set up and an hour afterwards to clear everything out. So I\'d take the whole block they have.'],
                ['SAM', 'Makes sense. That\'s still a bit less than the bistro is refunding. I\'ll email everyone the new address this afternoon.'],
                ['LEAH', 'Perfect. Now, what about Margaret? She\'s bound to hear that the bistro closed.'],
                ['SAM', 'Should we just tell her what happened? She might feel better knowing.'],
                ['LEAH', 'I\'d rather not. She\'d only fret, and she\'d probably insist on coming in early to help us set up. If she asks, let\'s just say the venue changed and leave it at that.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will the hall cost them altogether?', o: ['$240', '$220', '$120', '$250'] },
                { id: 'L1.8', q: 'How does Leah want to handle Margaret?', o: ['Give her as little explanation as possible', 'Invite her to help prepare the hall', 'Tell her about the bistro before she hears it elsewhere', 'Ask Sam to send her the new address first'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLERK: { name: 'Store clerk', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#2e4053', style: 'short' }, NADIA: { name: 'Nadia', g: 'f', skin: '#c98c64', hair: '#120c08', shirt: '#b03a2e', style: 'long' } },
          segments: [{
            lines: [
              ['CLERK', 'Good afternoon. What can I do for you today?'],
              ['NADIA', 'Hi. I bought this coat here a few weeks ago, and the zipper has already come apart at the bottom. I can\'t even do it up anymore. I\'d like to return it, if that\'s possible.'],
              ['CLERK', 'Oh, that\'s frustrating, I\'m sorry. Do you have your receipt with you?'],
              ['NADIA', 'Well, that\'s the other problem. The paper one was in my jeans pocket and went through the wash. But my husband asked the store to email him a copy, and he forwarded it to me this morning. Here.'],
              ['CLERK', 'That\'s perfect, thanks. Let me see. You bought it on the third, so you\'re well inside our thirty-day window. Would you like your money back, or a new one of the same coat? We\'ve got one left in your size.'],
              ['NADIA', 'Honestly, I loved the style, and it\'s really warm. But if one zipper went this fast, I\'m not sure I\'d trust the next one. Is there anything similar that\'s built a bit tougher?'],
              ['CLERK', 'The Northline parka might suit you. It\'s longer and heavier, and it has a two-way metal zipper, so it\'s far less likely to split. It\'s normally two hundred and ten, but there\'s thirty dollars off until Sunday.'],
              ['NADIA', 'Heavier, hmm. I take the bus everywhere, so I wasn\'t really looking for anything bulky. Then again, I wait at a stop down by the harbour every morning, and the wind there is brutal.'],
              ['CLERK', 'A lot of our customers who commute say the same thing. And the hood zips off, so on milder days you can lose some of the bulk.'],
              ['NADIA', 'That helps. And how would the money work? I paid a hundred and fifty for this one.'],
              ['CLERK', 'I\'d put that whole amount toward the parka, so you\'d just cover what\'s left. And if it doesn\'t fit, I\'ll simply refund you instead.'],
              ['NADIA', 'Okay. The fitting rooms are just behind me? I\'ll see how it looks, but I have a feeling I\'m walking out of here in it.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Nadia at the store?', o: ['To deal with a coat that has failed too soon', 'To buy a heavier coat for her husband', 'To exchange a coat that is the wrong size', 'To collect an order her husband placed online'] },
              { id: 'L2.2', q: 'How does Nadia prove she bought the coat?', o: ['She shows a copy her husband passed on to her.', 'She shows the paper receipt from her jeans.', 'The clerk finds the payment on her bank card.', 'She points to the tag still attached to the coat.'] },
              { id: 'L2.3', q: 'How does Nadia feel about her original coat?', o: ['She liked it but doubts a new one would last.', 'She found it too heavy to wear on the bus.', 'She regrets choosing such a long style.', 'She would take it again in a different size.'] },
              { id: 'L2.4', q: 'How much will Nadia pay if she takes the parka?', o: ['$30', '$60', '$180', '$40'] },
              { id: 'L2.5', q: 'Why does Nadia mention the harbour?', o: ['To explain why extra warmth may be worth the weight', 'To explain why she wants a lighter coat', 'To say where she was when the zipper broke', 'To complain that her bus is often late'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#5d6d7e', style: 'bald' }, REBECCA: { name: 'Rebecca Ellis', g: 'f', skin: '#f0c9a6', hair: '#c49a42', shirt: '#7d3c98', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'Joining me today is Rebecca Ellis, who coordinates the new tool library at the Eastside Community Centre. Rebecca, for anyone who hasn\'t come across one, what is a tool library?'],
              ['REBECCA', 'It\'s really just a library, except instead of books, people borrow things like drills, ladders, lawn mowers, even pressure washers. Most households need that kind of tool once or twice a year, so it\'s wasteful for every family on the street to own one.'],
              ['HOST', 'And how did it get started?'],
              ['REBECCA', 'A few neighbours kept noticing perfectly good equipment left at the curb on garbage day. So they started rescuing it and storing it in one woman\'s garage.'],
              ['REBECCA', 'Within a year there were over four hundred items in there, and her husband wanted somewhere to park his car again. That\'s when the community centre offered us a room.'],
              ['HOST', 'I can imagine. So how does someone join?'],
              ['REBECCA', 'You need to live in the city and bring ID that shows your address. It\'s twenty-five dollars a year, but anyone with a student card or anyone over sixty-five pays nothing.'],
              ['REBECCA', 'Oh, and if you volunteer ten hours with us, we waive your fee for the following year.'],
              ['HOST', 'How long can people keep what they borrow?'],
              ['REBECCA', 'Most things go out for a week. We used to do the same with the lawn mowers, but last summer some people were waiting nearly a month to get one, so now they\'re limited to three days.'],
              ['HOST', 'And when something breaks? I imagine that happens.'],
              ['REBECCA', 'All the time, and we don\'t charge for normal wear and tear, only if something has obviously been misused. Every second Thursday we hold a repair night. Retired electricians and carpenters fix whatever\'s broken and show members how to do simple repairs on their own.'],
              ['HOST', 'What\'s next for the library?'],
              ['REBECCA', 'People in the north end keep asking for a branch of their own. The city has already offered us space in the old fire hall, rent-free, and we have enough donated tools to stock it.'],
              ['REBECCA', 'What we don\'t have is people. Right now the same twelve volunteers cover every shift here, and they\'re stretched pretty thin. Honestly, even two hours a month from a few more listeners would make a real difference.']
            ],
            questions: [
              { id: 'L3.1', q: 'What is the main purpose of the tool library?', o: ['To share equipment that people use only now and then', 'To sell second-hand tools cheaply to residents', 'To train people for jobs in the trades', 'To rescue tools before they are thrown away'] },
              { id: 'L3.2', q: 'Why did the collection move to the community centre?', o: ['It had outgrown the place where it was stored.', 'The city would not allow it to run from a garage.', 'The centre offered to buy all of the tools.', 'Neighbours complained about the equipment at the curb.'] },
              { id: 'L3.3', q: 'Who could join without paying a fee?', o: ['A resident who is sixty-eight years old', 'Anyone who donates a tool to the library', 'Any new member during their first year', 'A volunteer who has given five hours'] },
              { id: 'L3.4', q: 'Why are lawn mowers now lent for less time?', o: ['Too many people were kept waiting for one.', 'They break down more often than other tools.', 'They are needed for the repair nights.', 'Members used to keep them for a month.'] },
              { id: 'L3.5', q: 'When might a member have to pay for a repair?', o: ['When a tool has clearly been used carelessly', 'When a tool wears out from ordinary use', 'When the repair is done on a Thursday', 'When a volunteer fixes the tool at home'] },
              { id: 'L3.6', q: 'What is holding back the north-end branch?', o: ['A shortage of people to run it', 'A lack of donated equipment to stock it', 'The cost of renting the old fire hall', 'Waiting for approval from the city'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#1f618d', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Drivers and transit riders heading downtown will notice a change starting next Monday, when the city launches a six-month trial of bus-only lanes on Barrington Road.'],
              ['NEWS', 'On weekdays from seven to nine in the morning and from four to six in the evening, the curb lane in both directions will be closed to private cars. Buses, taxis and cyclists will still be allowed to use it.'],
              ['NEWS', 'Outside those hours, the lanes will go back to general traffic and street parking.'],
              ['NEWS', 'Transit director Alan Brooks says buses on the route now run an average of eleven minutes behind schedule at rush hour.'],
              ['NEWS', 'He says delays like these are the main reason people give for giving up on transit, and he expects the new lanes to cut that figure by more than half.'],
              ['NEWS', 'For the first two weeks, drivers caught in the lanes during restricted hours will only get a warning. The city originally announced a one-hundred-dollar fine after that, but council raised the amount by fifty dollars at its meeting last week.'],
              ['NEWS', 'Not everyone is pleased. The Barrington Business Association says losing parking during the afternoon rush could hurt shops that rely on commuters stopping on their way home.'],
              ['NEWS', 'It has asked the city to end the evening restriction at five instead of six. Morning parking is less of a concern, the association says, since most stores on the street don\'t open until ten.'],
              ['NEWS', 'Council will review ridership figures and feedback from local businesses when the trial wraps up in the spring, before deciding whether to make the lanes permanent.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A temporary test of lanes for certain vehicles', 'A permanent change to downtown parking rules', 'A plan to close Barrington Road to cars all day', 'An increase in fines for illegal parking downtown'] },
              { id: 'L4.2', q: 'Who may NOT use the curb lane at peak hours?', o: ['A commuter driving her own car', 'A cyclist riding to work', 'A taxi carrying a passenger', 'A city bus on its regular route'] },
              { id: 'L4.3', q: 'Why does Alan Brooks support the lanes?', o: ['He believes more reliable buses will keep riders on transit.', 'He wants fewer taxis on the road during rush hour.', 'He thinks riders are leaving mainly because of high fares.', 'He expects buses to run eleven minutes ahead of schedule.'] },
              { id: 'L4.4', q: 'A driver caught in the lane in the third week of the trial would', o: ['be fined one hundred and fifty dollars.', 'receive only a warning.', 'be fined one hundred dollars.', 'be fined fifty dollars.'] },
              { id: 'L4.5', q: 'What does the business association want?', o: ['Street parking to return an hour earlier in the evening', 'The morning restriction to begin at ten instead of seven', 'The trial to be cancelled before the spring', 'Lower fines for drivers during the first month'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Team budget: $10,000', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { HANNAH: { name: 'Hannah (manager)', g: 'f', skin: '#f0c9a6', hair: '#3b2a20', shirt: '#34495e', style: 'bun' }, RAJ: { name: 'Raj', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#d35400', style: 'short' }, COLETTE: { name: 'Colette', g: 'f', skin: '#e3b28b', hair: '#b5651d', shirt: '#16a085', style: 'curly' } },
          segments: [{
            lines: [
              ['HANNAH', 'Thanks for staying, everyone. As you know, head office approved ten thousand dollars for our team this year, and we need to decide how to use it by the end of the month. Raj, you had an idea?'],
              ['RAJ', 'Yes. I think we should put most of it toward training. Half the team still struggles with the new project software, and the official course is about eight hundred dollars per person. If we send eight people, that\'s six thousand four hundred.'],
              ['COLETTE', 'I don\'t disagree that training matters, but the company already offers free online videos for that software. People just don\'t make time to watch them.'],
              ['RAJ', 'The videos are fine for the basics, but they don\'t cover the reporting features, and that\'s where we lose the most time.'],
              ['COLETTE', 'Fair point. My concern is our workspace. Three people have mentioned back pain this month. I\'d like to replace the oldest chairs and add a few standing desks. I got a quote of around four thousand dollars.'],
              ['RAJ', 'Four thousand sounds reasonable, as long as the new chairs come with a proper warranty this time.'],
              ['HANNAH', 'Health has to come first, so I\'m inclined to approve the chairs. Raj, would the training still be useful if we sent four people instead of eight?'],
              ['RAJ', 'It would. Those four could then run short sessions to teach everyone else. That\'s probably more effective anyway, since they know how our team actually works.'],
              ['COLETTE', 'I like that. And it leaves some money left over.'],
              ['HANNAH', 'About two thousand eight hundred, by my count. Let\'s keep that as a reserve until the fall, in case something comes up. I\'ll send the plan to head office tomorrow.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the purpose of the meeting?', o: ['To agree on how to divide a yearly fund', 'To choose which staff will attend a training course', 'To review complaints about the new project software', 'To prepare a request for more money from head office'] },
              { id: 'L5.2', q: 'How much will the agreed training cost?', o: ['$3,200', '$6,400', '$2,800', '$4,000'] },
              { id: 'L5.3', q: 'What is Colette\'s view of the online videos?', o: ['They would help more if staff actually used them.', 'They are too basic for experienced staff.', 'They cost the company about eight hundred dollars each.', 'They are available only to people at head office.'] },
              { id: 'L5.4', q: 'How does Raj respond to Colette?', o: ['He says the videos skip the area where the team wastes the most time.', 'He agrees the videos are enough for most of the team.', 'He says the videos cost more than the official course.', 'He says few people on the team can access the videos.'] },
              { id: 'L5.5', q: 'Why does Colette raise the issue of furniture?', o: ['Several staff have recently reported physical discomfort.', 'The oldest chairs are broken and cannot be repaired.', 'Head office now requires standing desks in every office.', 'Clients have complained about the look of the office.'] },
              { id: 'L5.6', q: 'What does Raj suggest about the chairs bought in the past?', o: ['They were not properly covered if something went wrong.', 'They cost more than four thousand dollars.', 'They were bought without Hannah\'s approval.', 'They came with standing desks that nobody used.'] },
              { id: 'L5.7', q: 'Why does Raj think a smaller group may work better?', o: ['Colleagues can shape the lessons around the team\'s own work.', 'Four people can take the course at a group discount.', 'The official course accepts only four people at a time.', 'The rest of the team can learn from the free videos instead.'] },
              { id: 'L5.8', q: 'What does Hannah decide about the money left over?', o: ['Hold it back for unexpected needs', 'Spend it on more chairs in the fall', 'Use it to train four more people', 'Return it to head office'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Homework in elementary school?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#d6a07a', hair: '#4a3020', shirt: '#943126', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'A growing number of elementary schools across Canada are cutting back on homework, and some have dropped it altogether. The change has divided parents and teachers alike. Some school boards say no topic has filled more parent meetings this year.'],
              ['NARR', 'Doctor Felix Marchand, a child psychologist in Winnipeg, supports the trend. He points to research suggesting that homework in the early grades makes little measurable difference to how children do on tests.'],
              ['NARR', 'Young children, he says, learn just as much from play, sports and time with their families as they do from another page of exercises.'],
              ['NARR', 'His second concern is what homework does to the home. Marchand says that long evenings of assignments often end in tears and shouting matches between tired parents and tired children.'],
              ['NARR', 'Over time, he argues, children begin to connect learning with conflict, and some have lost interest in school well before they ever reach high school.'],
              ['NARR', 'Marchand does accept that many parents like homework because it shows them what their child is studying. But he says a short weekly note from the teacher would do that job just as well, without taking over the family\'s evening.'],
              ['NARR', 'Aisha Morgan, who has taught grade five for fifteen years, sees things differently. She agrees that piles of worksheets do more harm than good. Where she parts ways with Marchand is on the value of a small, steady routine.'],
              ['NARR', 'In her experience, ten to twenty minutes a night of reading or math practice teaches children to sit down and focus on their own, which is exactly what they will need in junior high.'],
              ['NARR', 'Her second argument is about fairness. When schools stop sending work home, Morgan says, families with money simply hire tutors or sign their children up for private lessons.'],
              ['NARR', 'Children whose parents can\'t afford that fall further behind, so a no-homework policy could actually widen the very gap it was meant to close.'],
              ['NARR', 'Marchand has an answer to that, too. If schools are worried about fairness, he says, they should run free after-school reading clubs instead of relying on parents to supervise work at the kitchen table.'],
              ['NARR', 'Morgan also questions the research that Marchand relies on. Those studies, she points out, mostly measure test results. They say little about habits like organization and persistence, and those are the things she sees homework building.'],
              ['NARR', 'As for the arguments at home, she believes they come from assignments that are too long or too hard, not from homework itself.'],
              ['NARR', 'Her proposal is a compromise: short, optional tasks that a parent and child can do together, such as reading aloud or following a recipe, with no marks attached.'],
              ['NARR', 'Marchand calls that a reasonable step. However, he doubts that optional will stay optional for long, especially in schools where parents compare notes at the school gate.'],
              ['NARR', 'For now, most school boards are not setting a single rule. They are leaving the decision to each principal, and many principals say they plan to ask parents for their views before September.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['A disagreement over homework for young children', 'Research showing homework raises test scores in the early grades', 'A new provincial rule that bans homework in all schools', 'The rising cost of private tutoring for young children'] },
              { id: 'L6.2', q: 'Why does Dr. Marchand mention a weekly note from the teacher?', o: ['To show that parents could stay informed without homework', 'To suggest that homework should be given once a week', 'To explain how teachers report test results to families', 'To argue that teachers send home too much paperwork'] },
              { id: 'L6.3', q: 'According to Dr. Marchand, what is the long-term risk of heavy homework?', o: ['Children may come to link learning with unhappiness.', 'Children may score lower once they reach high school.', 'Parents may stop helping with schoolwork altogether.', 'Teachers may have less time to plan their lessons.'] },
              { id: 'L6.4', q: 'Which view do Dr. Marchand and Ms. Morgan share?', o: ['Large amounts of worksheets are not helpful.', 'A short nightly routine builds useful habits.', 'Homework should be left to parents to set.', 'Test results are the best measure of learning.'] },
              { id: 'L6.5', q: 'How does Ms. Morgan respond to the research Dr. Marchand cites?', o: ['It ignores the skills she believes homework develops.', 'It proves that homework raises test scores.', 'It was carried out only on high school students.', 'It shows that tutoring works better than homework.'] },
              { id: 'L6.6', q: 'What is Dr. Marchand\'s concern about Ms. Morgan\'s compromise?', o: ['Families may feel pressure to do the tasks anyway.', 'The tasks are too short to make any difference.', 'Tasks without marks will not be taken seriously.', 'Principals will refuse to allow optional tasks.'] }
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
          passage: '<h3>Message</h3><p>Hi Owen,</p><p>I hope things are good in Calgary. It has been almost two months since we moved to Halifax, and I finally have a quiet evening to write properly.</p><p>The move itself was harder than expected. The truck carrying our furniture was delayed by a snowstorm in New Brunswick, so we spent our first five nights sleeping on air mattresses in an empty apartment. The kids thought it was a big adventure. My back did not. The moving company did offer us a partial refund, which helped a little, but I would think twice before hiring them again.</p><p>Things have improved a lot since then. Michael started his new job at the hospital in our second week, and he loves his team, although the night shifts are tiring. I am still looking for work, but I have had two interviews with engineering firms downtown, and one of them has asked me back for a second meeting next Tuesday. The commute would be longer than I hoped, but the projects sound exciting. Wish me luck!</p><p>The city itself is wonderful. We are only a ten-minute walk from the waterfront, and every Saturday we go to the farmers\' market, where the kids have become addicted to the blueberry scones. The only thing I miss is the dry Calgary air. Here, the wind off the ocean goes straight through your coat, so I have learned to dress in layers.</p><p>Now for my real reason for writing: we would love for you and Priya to visit this summer. Our new place has a spare room, and July would be perfect because the kids will be at day camp during the week, so we can explore together. Just avoid the first weekend of the month, since Michael\'s parents are already staying with us then. Let me know what dates might work, and I will start planning a trip to Peggy\'s Cove.</p><p>Hugs,<br>Jenna</p>',
          questions: [
            { id: 'R1.1', q: 'Jenna\'s family slept on air mattresses because', o: ['a storm along the route slowed the truck with their things.', 'the movers lost part of their furniture in New Brunswick.', 'they sent the furniture back in return for a partial refund.', 'the spare room was being kept ready for their guests.'] },
            { id: 'R1.2', q: 'Jenna\'s remark "My back did not" suggests that she', o: ['found sleeping on the floor painful.', 'hurt herself carrying the furniture.', 'was too busy to rest that week.', 'disliked the new apartment.'] },
            { id: 'R1.3', q: 'What does Jenna imply about the moving company?', o: ['She was not fully happy with its service.', 'She would gladly use it again for her next move.', 'It refused to give the family any money back.', 'It delivered the furniture earlier than promised.'] },
            { id: 'R1.4', q: 'About her job search, Jenna says that', o: ['one of the two firms wants to meet with her again.', 'both firms have invited her back for next Tuesday.', 'she has an interview at the hospital where Michael works.', 'she turned one firm down because of the long commute.'] },
            { id: 'R1.5', q: 'Jenna now wears several layers of clothing because', o: ['the wind from the water cuts through a single coat.', 'Halifax gets more snowstorms than Calgary does.', 'the Saturday market opens before the day warms up.', 'the walk to the waterfront is longer than she expected.'] },
            { id: 'R1.6', q: 'The main purpose of Jenna\'s message is to', o: ['give an update and ask her friends to stay.', 'ask Owen for advice about finding engineering work.', 'complain about the company that moved her family.', 'describe a trip she recently took to Peggy\'s Cove.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Jenna,</p><p>It was great to hear from you! I am sorry the first week was so rough. Five nights on an air mattress sounds like [[R1.7]], and I am glad the movers at least gave you some money back. Good luck on Tuesday. I am sure you will impress them, and [[R1.8]].</p><p>Priya and I would love to visit. She has [[R1.9]], so how about the 14th to the 21st? Because of [[R1.10]], we have stayed away from the first weekend. We will start looking for flights this weekend and send you our times once we book.</p><p>Please don\'t plan anything big. Honestly, we would be happy just walking by the water, wandering through the Saturday market and trying those famous blueberry scones. And thanks for the warning about the wind. I will make sure to pack [[R1.11]].</p><p>Give the kids a hug from us, and tell Michael we hope the night shifts get easier.</p><p>See you soon,<br>Owen</p>',
          blanks: [
            { id: 'R1.7', o: ['a tough way to begin', 'a fun treat for everyone', 'a clever way to save money', 'a relaxing first week'] },
            { id: 'R1.8', o: ['a longer commute is worth it for exciting work', 'the hospital will be lucky to have you', 'the firm is only ten minutes from the waterfront', 'Michael can drive you there after his night shift'] },
            { id: 'R1.9', o: ['time off in the middle of July', 'already booked a tour of Peggy\'s Cove', 'a job at a day camp in July', 'no holidays until late August'] },
            { id: 'R1.10', o: ['your in-laws\' visit', 'the kids\' day camp', 'Michael\'s night shifts', 'your interview on Tuesday'] },
            { id: 'R1.11', o: ['several pieces I can wear on top of each other', 'only light summer clothing', 'my heaviest winter parka', 'a wide hat for the sun'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Lakeside Recreation Centre: Winter Swim Programs</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Program</th><th>Ages</th><th>Day and time</th><th>Sessions</th><th>Resident</th><th>Non-resident</th></tr></thead><tbody>' +
            '<tr><td>Splash Starters</td><td>3 to 5</td><td>Saturday 9:00 to 9:30 a.m.</td><td>8</td><td>$64</td><td>$80</td></tr>' +
            '<tr><td>Junior Swim</td><td>6 to 9</td><td>Tuesday and Thursday 4:30 to 5:15 p.m.</td><td>16</td><td>$144</td><td>$176</td></tr>' +
            '<tr><td>Youth Stroke Clinic</td><td>10 to 14</td><td>Wednesday 6:00 to 7:00 p.m.</td><td>10</td><td>$120</td><td>$150</td></tr>' +
            '<tr><td>Adult Learn-to-Swim</td><td>15 and over</td><td>Monday 7:30 to 8:30 p.m.</td><td>8</td><td>$96</td><td>$120</td></tr>' +
            '<tr><td>Aquafit (drop-in)</td><td>16 and over</td><td>Mon, Wed, Fri 10:00 to 11:00 a.m.</td><td>Drop-in</td><td>$8 per class</td><td>$10 per class</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Registration opens online on January 6 at 8:00 a.m.</li><li>Family discount: when two or more children from the same household register, take 10% off the lower-priced program.</li><li>Programs begin the week of January 13. Children are placed by their age on the first day of the program.</li><li>Children under 8 must have an adult present on the pool deck.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Ben,</p><p>I have been looking at the swim programs at Lakeside. Since we live in the city, we pay the resident price. Lucas is five right now, but he turns six on January 10, so the program for him is [[R2.1]], and Maya, who just turned eleven, could do the stroke clinic on [[R2.2]]. Because Lucas will still be under eight, one of us will need to [[R2.3]] during his lessons. His classes start at 4:30, so I can take him straight there after I pick him up from school.</p><p>Maya\'s program would normally be $120, but with the family discount it comes to [[R2.4]]. I was also thinking of joining Aquafit myself, but the classes are on weekday mornings, when I am at work, so I will [[R2.5]].</p><p>Registration opens on January 6, so let\'s sign up first thing that morning before the spots fill up.</p><p>Carla</p>',
          blanks: [
            { id: 'R2.1', o: ['Junior Swim', 'Splash Starters', 'the Youth Stroke Clinic', 'Splash Starters until he turns six'] },
            { id: 'R2.2', o: ['Wednesday evenings', 'Saturday mornings', 'Tuesday afternoons', 'Monday nights'] },
            { id: 'R2.3', o: ['stay on the pool deck', 'swim in the water with him', 'sign up for Adult Learn-to-Swim', 'wait in the parking lot until he finishes'] },
            { id: 'R2.4', o: ['$108', '$120', '$96', '$150'] },
            { id: 'R2.5', o: ['skip it for now', 'take it on Saturdays', 'pay the non-resident price', 'join the adult lessons instead'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A non-resident family registers a 4-year-old for Splash Starters and an 8-year-old for Junior Swim. They pay', o: ['$248.', '$256.', '$238.40.', '$201.60.'] },
            { id: 'R2.7', q: 'A parent asks whether her 8-year-old can attend Junior Swim while she waits in the car. Based on the notes, the answer is', o: ['yes, because the adult rule covers only children younger than 8.', 'no, because an adult must be present on the pool deck.', 'only if she registers for Adult Learn-to-Swim at the same time.', 'yes, but only if the family pays the non-resident price.'] },
            { id: 'R2.8', q: 'Carla\'s 15-year-old niece cannot come to Aquafit with her because', o: ['the class is limited to people aged 16 and over.', 'non-residents may not take drop-in classes.', 'she would first need to finish Adult Learn-to-Swim.', 'the class is held only on Monday evenings.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Bees in the City</h3><p><b>A.</b> Beekeeping is no longer limited to farms. In the past decade, hives have appeared on apartment balconies, restaurant rooftops and even office towers in cities such as Toronto, Vancouver and Montreal. Supporters say urban bees benefit from the wide variety of flowers in parks and gardens, which can provide a richer diet than large farms planted with a single crop. A few companies now rent hives to offices that want to show they care about the environment, sending a trained keeper to check on the colonies every two weeks. Honey from city hives is often sold at farmers\' markets, and some keepers claim its flavour changes from one neighbourhood to the next.</p><p><b>B.</b> However, keeping bees in the city comes with rules. Most municipalities require hives to be registered, and an inspector may visit if a neighbour files a complaint. Hives must also be placed a minimum distance from property lines, often around three metres. Some cities also limit the number of hives per property, and many require a solid fence or hedge at least two metres high, which forces bees to fly upward, well above the heads of people walking by. New beekeepers are strongly encouraged to take a course before buying equipment, as poorly managed colonies are more likely to spread disease to neighbouring hives. Starting a single hive, including the bees, protective clothing and tools, typically costs several hundred dollars.</p><p><b>C.</b> Not everyone welcomes the trend. Some scientists warn that a sudden rise in honeybee hives may harm wild native bees, which compete for the same flowers. Unlike honeybees, which live in colonies of thousands, many native species live alone and nest in the ground, and they play an important role in pollinating local plants. Many of them also become active in early spring, when few garden flowers are open. In one Montreal study, which counted bees at more than one hundred gardens over three summers, researchers found that as the number of hives in the city grew, the variety of wild bees visiting urban gardens declined. They suggest that cities should plant more flowers, not simply add more hives.</p><p><b>D.</b> For people who want to help pollinators without the commitment of a hive, experts recommend simple steps: growing native plants, avoiding chemical pesticides and leaving small patches of bare soil for ground-nesting bees. Even a few pots of herbs on a balcony can feed bees for weeks. Choosing plants that bloom at different times, from early spring to late fall, makes sure that food is available throughout the season. Several cities now offer free seed packets each spring to residents who want to turn part of their lawn into a pollinator garden, and some schools have planted similar gardens so that students can watch bees up close.</p>',
          questions: [
            { id: 'R3.1', q: 'Many wild species are solitary and make their homes underground.', fixed: true, a: 'C' },
            { id: 'R3.2', q: 'City plantings may offer bees a more varied food supply than some farmland.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'Some municipalities give residents the materials to start a garden at no cost.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'A tall barrier can keep bees flying above pedestrians.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Cities began requiring registration after neighbours complained about being stung.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Beginners are advised to get some training first.', fixed: true, a: 'B' },
            { id: 'R3.7', q: 'A study found that city honeybee hives passed diseases on to wild native bees.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'A city may cap how many colonies can be kept on a single lot.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'Some businesses pay to have hives placed at their workplace and looked after.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Is the Four-Day Week Ready for Canada?</h3><p>When a mid-sized Ontario software company switched to a four-day work week last year, its owners expected some loss of productivity. Instead, they found the opposite. Over twelve months, the company reports that projects were completed on time more often, sick days fell by almost a third, and the number of job applications doubled. Employees kept their full salaries while working thirty-two hours instead of forty.</p><p>Not every employee was convinced at first. Project lead Lauren Moreau admits she expected the change to backfire. "I assumed I would be doing five days of work in four and going home exhausted," she says. What changed her mind was the company\'s decision to cancel most internal meetings and agree on a short list of goals at the start of each week. "Now I spend Fridays with my children, and on Monday I actually know what matters most."</p><p>Supporters argue that results like these are not unusual. Economist Dr. Sarah Lindqvist points to trials in several countries where most participating companies chose to keep the shorter week after the trial ended. "When people have a real weekend plus one extra day, they come back rested and more focused," she says. "Meetings get shorter because everyone knows time is limited." She also believes the model could help employers compete for skilled workers at a time when many industries face shortages.</p><p>Critics, however, say these success stories mostly come from office jobs. Retail manager Paul Okafor notes that a store must stay open six or seven days a week regardless of staff schedules. "For us, a four-day week just means hiring more people or paying more overtime," he explains. "That cost gets passed on to customers, and many small shops simply cannot afford it." He adds that several of his part-time employees have told him they would like more hours, not fewer, because they are saving for school. Hospitals, schools and factories face similar challenges, since their work cannot simply be compressed. Others worry that cramming forty hours of work into four ten-hour days, rather than truly reducing hours, could increase fatigue.</p><p>Even some supporters urge caution. Human resources consultant Mei Tanaka has helped three firms try the model, and one dropped it within six months. "Clients expected answers on Fridays, and nobody had planned for that," she says. "A shorter week only works if customers are told in advance and someone is always on call."</p><p>Lindqvist acknowledges that the model is not a universal solution. She suggests that industries unable to close for a day could still experiment with shorter shifts or rotating schedules. One small manufacturer she advised now runs two overlapping crews, so the plant stays open five days a week while each worker is on the floor for only four. "The goal is not a specific number of days," she says. "It is finding out whether we are measuring work by hours spent instead of results achieved."</p>',
          questions: [
            { id: 'R4.1', q: 'What can be concluded about the trial at the Ontario software company?', o: ['Staff were ill less often, and more people wanted to work there.', 'Projects took longer, but employees said they were much happier.', 'Employees accepted lower salaries in exchange for a shorter week.', 'The owners decided to return to a five-day schedule after a year.'] },
            { id: 'R4.2', q: 'Why did Lauren Moreau change her opinion of the shorter week?', o: ['Her employer cut back on meetings and set clear weekly priorities.', 'She found that she could finish five days of work in only four.', 'Her children started school and she needed Fridays to drive them.', 'The company agreed to pay her extra for working ten-hour days.'] },
            { id: 'R4.3', q: 'Paul Okafor is concerned that a four-day week would', o: ['leave his customers paying higher prices.', 'give his part-time staff too many hours.', 'force his store to close one day a week.', 'make it harder to find skilled office staff.'] },
            { id: 'R4.4', q: 'Dr. Lindqvist would most likely agree that', o: ['a shorter week could help firms attract scarce talent.', 'retail stores should be required to close one day a week.', 'ten-hour days are the best way to shorten the work week.', 'office workers already spend too few hours at their desks.'] },
            { id: 'R4.5', q: 'Dr. Lindqvist\'s final point is that', o: ['output should count for more than time on the job.', 'every industry should be required to adopt a four-day week.', 'stores and hospitals should close for one extra day each week.', 'shorter shifts are better than a four-day week for office workers.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I work as a nurse, so I read this article with mixed feelings. Like Mr. Okafor, I do not see how my workplace could [[R4.6]]. Patients need care around the clock, and our unit is already short of staff. Still, I agree with Dr. Lindqvist that [[R4.7]]. After a string of long shifts, I know I am not at my best. That is why I like her idea of [[R4.8]] for workplaces that cannot shut down.</p><p>What worries me is the idea of squeezing forty hours into four days. In healthcare, [[R4.9]] can lead to serious mistakes. I also noticed that Ms. Moreau only came around once her company [[R4.10]]. Hospital managers should learn from that before they change anyone\'s schedule. Simply moving the same workload into fewer days will not help anyone, least of all our patients.</p>',
          blanks: [
            { id: 'R4.6', o: ['close one extra day', 'attract twice as many applicants', 'cancel most of its weekly meetings', 'run two overlapping crews'] },
            { id: 'R4.7', o: ['well-rested staff concentrate better', 'nurses should work four ten-hour shifts', 'hospitals should hire more part-time staff', 'shorter meetings save the most time'] },
            { id: 'R4.8', o: ['shifts that rotate', 'longer but fewer shifts', 'paying staff more overtime', 'closing the ward on weekends'] },
            { id: 'R4.9', o: ['working while worn out', 'cancelling team meetings', 'rotating staff between units', 'setting new goals each week'] },
            { id: 'R4.10', o: ['rethought how the work was planned', 'gave every employee a large raise', 'hired extra staff for weekend shifts', 'switched everyone to ten-hour days'] }
          ]
        }
      ]
    },
    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Three weeks ago, you ordered a $480 solid wood bookshelf online as a birthday present for your daughter. Her birthday is this Saturday. The bookshelf arrived yesterday with a cracked side panel, and the bag of screws was missing. The company\'s website says damaged items can only be returned in their original box, but you have already put the box out for recycling.</p><p>Write an email to the company\'s customer service department. In your email, do the following:</p><ul><li>Describe what you ordered and what was wrong when it arrived.</li><li>Explain why you can no longer return it in the original box.</li><li>Say what you would like the company to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city owns an empty lot downtown and is asking residents how it should be used. Each option has costs as well as benefits. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a public park with a playground, trees and an open lawn for events. The city would pay for it, and keeping it up would add about $40 a year to the average property tax bill.' },
            { key: 'B', label: 'Option B', text: 'Let a private developer build a parking garage with small shops and cafés on the ground floor. It would cost taxpayers nothing and bring in rent, but construction would take about three years and add traffic to nearby streets.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe some things you enjoy doing with your friends.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has just moved to a new city for work, where he does not know anyone. He works long hours, including some weekends, and he is trying to save money for a car. Give him advice on how to meet people and settle in.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to learn something new very quickly, for example for a job, a move or a family situation. What did you have to learn, what made it difficult, and how did you manage?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: PARK },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: PARK },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is planning a weekend activity. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Camping at Keji Lake', image: CAMP, facts: ['2 nights in a tent', 'Campsite: $90', '2-hour drive', 'Swimming, hiking, campfire', 'Rain possible on Saturday'] },
            { key: 'B', title: 'City hotel weekend', image: HOTEL, facts: ['2 nights in a hotel', 'Cost: $320, plus $25 a night for parking', '1-hour drive', 'Museums, restaurants, indoor pool'] }
          ],
          third: { key: 'C', title: 'Indoor water park', image: WATERPARK, facts: ['1 day only', 'Tickets: $150 for the family', '30-minute drive', 'Water slides, wave pool, arcade'] },
          persuade: 'Your family member suggests the indoor water park instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You promised to help your coworker move to a new apartment this Saturday. Today, your manager asked you to work on Saturday to meet an important client. Doing this could help you get a promotion.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your coworker. Explain why you cannot help on Saturday.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot work on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Your company is deciding whether to let all staff work from home two days a week. Some managers say it would save commuting time and help employees with families. Others worry that teamwork would suffer and that new employees would be harder to train. Your manager has asked for your opinion. Should the company allow it? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a garage sale and see this unusual bicycle for $75. Your friend collects bicycles, but he has only $100 to spend this month and very little space left in his garage. Call your friend. Describe the bicycle and explain whether you think he should buy it.', image: ODDBIKE }
      ]
    }
  });
})();
