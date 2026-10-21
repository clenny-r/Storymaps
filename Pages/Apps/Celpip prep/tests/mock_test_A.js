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
                ['SAM', 'Leah, do you have a minute? I just got a call from Harbour View Bistro.'],
                ['LEAH', 'About Margaret\'s retirement lunch on Friday? Is everything okay?'],
                ['SAM', 'Not really. A pipe burst in their kitchen last night, and they\'re closed for at least two weeks. They\'ve cancelled all of their bookings.'],
                ['LEAH', 'Oh no. We invited thirty-five people, and Margaret\'s family is driving in from Truro.'],
                ['SAM', 'I know. The manager offered to refund our deposit, but that doesn\'t solve the problem of where to hold it.'],
                ['LEAH', 'Well, the refund helps. We put down two hundred dollars, right?'],
                ['SAM', 'Two hundred and fifty, actually. It should be back on the company card in about five business days.'],
                ['LEAH', 'Okay. Let me think. Friday is only three days away. Most places will already be fully booked for lunch.']
              ],
              questions: [
                { id: 'L1.1', q: 'What problem are Sam and Leah dealing with?', o: ['The restaurant they booked has closed temporarily.', 'They invited more guests than the restaurant can seat.', 'Margaret has asked them to cancel the party.', 'The restaurant refused to return their deposit.'] },
                { id: 'L1.2', q: 'How much was the deposit?', o: ['$250', '$200', '$35', '$500'] },
                { id: 'L1.3', q: 'Why is Leah worried about finding a new place?', o: ['The lunch is only three days away.', 'Margaret\'s family cannot travel.', 'The refund will take several weeks.', 'Most restaurants are too expensive.'] }
              ]
            },
            {
              lines: [
                ['SAM', 'What about having it here, in the large boardroom on the fourth floor?'],
                ['LEAH', 'I thought about that, but it only seats twenty people comfortably. And it feels too much like a regular meeting. Margaret has been here twenty-two years. She deserves something nicer.'],
                ['SAM', 'Fair enough. My brother-in-law runs a catering company. He could bring food almost anywhere, even on short notice.'],
                ['LEAH', 'That\'s really useful. So we just need a room. What about the community hall on Spring Street? It\'s only a five-minute walk from here.'],
                ['SAM', 'The one next to the library? I think they rent it out by the hour, but I don\'t know if it\'s free on Friday.'],
                ['LEAH', 'I\'ll call them right after this. If it\'s available, your brother-in-law could handle the food, and we could decorate it ourselves on Thursday evening.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Leah reject the boardroom?', o: ['It is too small and feels too formal.', 'It is being used for client meetings on Friday afternoon.', 'It is too far from where Margaret\'s family will park.', 'Margaret has asked not to have it at the office.'] },
                { id: 'L1.5', q: 'What can Sam\'s brother-in-law offer?', o: ['Catering on short notice', 'A larger room', 'A discount on decorations', 'Transportation for the guests'] },
                { id: 'L1.6', q: 'What will Leah do next?', o: ['Call the community hall', 'Ask the library about renting its meeting room', 'Email the guests about the new location', 'Phone Sam\'s brother-in-law about the menu'] }
              ]
            },
            {
              lines: [
                ['LEAH', 'Okay, I just spoke to the hall. They\'re free on Friday from eleven until three, and it\'s sixty dollars an hour.'],
                ['SAM', 'That works. Lunch was supposed to start at noon anyway. Should we book all four hours?'],
                ['LEAH', 'We\'ll need time to set up and clean up, so yes. That\'s two hundred and forty dollars, almost the same as the deposit we\'re getting back.'],
                ['SAM', 'Perfect. I\'ll email everyone the new address this afternoon and ask people to reply if they need directions.'],
                ['LEAH', 'Good. And let\'s not tell Margaret about any of this. She would only worry.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will they pay for the hall in total?', o: ['$240', '$60', '$180', '$250'] },
                { id: 'L1.8', q: 'What does Leah suggest about Margaret?', o: ['She should not be told about the change.', 'She should be asked to help decorate the hall on Thursday.', 'She should be the one to choose the new location.', 'She should be told so she can inform her family.'] }
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
              ['CLERK', 'Good afternoon. How can I help you today?'],
              ['NADIA', 'Hi. I bought this coat here about three weeks ago, and the zipper has already broken. I\'d like to return it.'],
              ['CLERK', 'I\'m sorry to hear that. Do you have your receipt?'],
              ['NADIA', 'I have it on my phone. They sent me an email receipt. Here it is.'],
              ['CLERK', 'Thanks. Okay, our return period is thirty days, so you\'re still within it. Would you like a refund, or would you prefer to exchange it for the same coat?'],
              ['NADIA', 'Honestly, I liked the coat, but I\'m worried the same thing will happen again. Do you have something similar with a stronger zipper?'],
              ['CLERK', 'We have the Northline parka. It\'s a bit heavier, and it has a two-way metal zipper. It\'s forty dollars more, though.'],
              ['NADIA', 'Hmm. It gets really cold where I live, so a heavier one might actually be better. Could I try it on?'],
              ['CLERK', 'Of course. The fitting rooms are just behind you. If you decide to take it, I\'ll apply the refund from this coat, and you\'ll only pay the difference.'],
              ['NADIA', 'Great. Thank you so much.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Nadia at the store?', o: ['To return a coat with a broken zipper', 'To exchange a coat for a smaller size', 'To complain that a coat was cheaper online', 'To pick up a parka she ordered three weeks ago'] },
              { id: 'L2.2', q: 'How does Nadia show proof of purchase?', o: ['With an email receipt on her phone', 'With the paper receipt from her purse', 'With the credit card she used to pay', 'With the tag that is still attached to the coat'] },
              { id: 'L2.3', q: 'Why doesn\'t Nadia want the same coat again?', o: ['She is afraid the same problem will happen.', 'The store no longer sells that coat.', 'She would prefer a coat in a different colour.', 'She wants a coat that costs less than the original one.'] },
              { id: 'L2.4', q: 'What is true about the Northline parka?', o: ['It costs forty dollars more.', 'It is lighter than her coat.', 'It has a plastic zipper.', 'It is on sale this week.'] },
              { id: 'L2.5', q: 'What will Nadia most likely do next?', o: ['Try on the parka', 'Leave the store', 'Ask for a full refund', 'Speak to a manager'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#5d6d7e', style: 'bald' }, REBECCA: { name: 'Rebecca Ellis', g: 'f', skin: '#f0c9a6', hair: '#c49a42', shirt: '#7d3c98', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'Today I\'m speaking with Rebecca Ellis, who runs the new tool library at the Eastside Community Centre. Rebecca, what exactly is a tool library?'],
              ['REBECCA', 'It works just like a book library, except people borrow tools. Things like drills, ladders, lawn mowers, even pressure washers. Most people only need a tool like that once or twice a year, so it doesn\'t make sense for everyone to buy one.'],
              ['HOST', 'How did the idea start?'],
              ['REBECCA', 'A group of neighbours noticed that the same kinds of items kept getting thrown out on garbage day, often in perfect condition. We started collecting them in someone\'s garage, and within a year we had over four hundred tools. That\'s when the community centre offered us space.'],
              ['HOST', 'How does someone become a member?'],
              ['REBECCA', 'You need to live in the city and show a piece of identification with your address. Membership is twenty-five dollars a year, but it\'s free for students and seniors.'],
              ['HOST', 'And how long can people keep the tools?'],
              ['REBECCA', 'One week for most items. Larger equipment, like the lawn mowers, is limited to three days, because there\'s a waiting list all summer.'],
              ['HOST', 'What happens if something breaks?'],
              ['REBECCA', 'That\'s actually common, and we don\'t charge for normal wear. We hold volunteer repair nights every second Thursday, where retired tradespeople fix the tools and also teach members how to do basic repairs themselves.'],
              ['HOST', 'That sounds great. What\'s next for the library?'],
              ['REBECCA', 'We\'d like to open a second location in the north end next spring, but we need more volunteers first.']
            ],
            questions: [
              { id: 'L3.1', q: 'What is the main purpose of the tool library?', o: ['To let people borrow tools they rarely need', 'To sell used tools at low prices to residents', 'To train new tradespeople in basic repairs', 'To repair broken tools for people in the community'] },
              { id: 'L3.2', q: 'How did the tool collection begin?', o: ['Neighbours collected tools that people were throwing away.', 'A local hardware store donated its unsold equipment.', 'The community centre bought tools with a city grant.', 'Residents lent their own tools from their garages.'] },
              { id: 'L3.3', q: 'Who can join the library for free?', o: ['Students and seniors', 'Volunteers', 'Everyone in their first year', 'People who donate a tool'] },
              { id: 'L3.4', q: 'Why are lawn mowers limited to three days?', o: ['Many people want them in the summer.', 'They are expensive to repair.', 'They are only available on weekends.', 'They need to be cleaned after each use.'] },
              { id: 'L3.5', q: 'What happens on repair nights?', o: ['Retired tradespeople fix tools and teach skills.', 'Members pay a small fee to have broken tools repaired.', 'Volunteers decide which broken tools should be thrown out.', 'Students learn a trade from licensed instructors.'] },
              { id: 'L3.6', q: 'What does the library need before it can open a second location?', o: ['More volunteers', 'More money', 'Permission from the city', 'A larger garage'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#1f618d', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Commuters in the downtown core will see changes starting next Monday, as the city begins a six-month trial of bus-only lanes on Barrington Road.'],
              ['NEWS', 'During peak hours, from seven to nine in the morning and from four to six in the evening, the right-hand lane in both directions will be reserved for buses, taxis and bicycles. Outside those hours, the lanes will return to regular traffic and street parking.'],
              ['NEWS', 'City transit director Alan Brooks says buses on the route currently run an average of eleven minutes late during rush hour. He expects the dedicated lanes to cut those delays by more than half.'],
              ['NEWS', 'Drivers caught using the lanes during restricted hours will receive a warning for the first two weeks. After that, fines of one hundred and fifty dollars will apply.'],
              ['NEWS', 'Not everyone is pleased. The Barrington Business Association says the loss of parking during the afternoon rush could hurt shops that depend on customers stopping on their way home. The association has asked the city to shorten the evening restriction by one hour.'],
              ['NEWS', 'Councillors will review ridership numbers and business feedback at the end of the trial before deciding whether to make the lanes permanent.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A trial of bus-only lanes', 'A permanent change to downtown parking rules', 'A plan to close Barrington Road to traffic', 'An increase in fines for parking illegally'] },
              { id: 'L4.2', q: 'Who can use the special lanes during peak hours?', o: ['Buses, taxis and bicycles', 'Only buses', 'Delivery trucks', 'Any car with two passengers'] },
              { id: 'L4.3', q: 'According to Alan Brooks, what is the current problem?', o: ['Buses are about eleven minutes late at rush hour.', 'Buses are crowded because there are too few drivers.', 'Taxis and bicycles slow the buses down in the morning.', 'Buses take eleven minutes longer than cars on the route.'] },
              { id: 'L4.4', q: 'What will happen during the first two weeks of the trial?', o: ['Drivers will only receive warnings.', 'Drivers who use the lanes will be fined $150.', 'The lanes will be open to all traffic at rush hour.', 'Street parking will be free during the evening rush.'] },
              { id: 'L4.5', q: 'What does the business association want?', o: ['A shorter evening restriction', 'The cancellation of the six-month trial', 'More parking spaces for customers in the morning', 'Lower fines for drivers who use the bus lanes'] }
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
              { id: 'L5.1', q: 'What is the purpose of the meeting?', o: ['To decide how to spend a budget', 'To choose which staff will attend a training course', 'To review complaints about the new project software', 'To plan how to request more money from head office'] },
              { id: 'L5.2', q: 'Why does Raj want to spend money on training?', o: ['Team members have trouble with the new software.', 'Head office has asked every team to take the course.', 'The free online videos are no longer available.', 'He believes the course will help him get promoted.'] },
              { id: 'L5.3', q: 'What does Colette say about the online videos?', o: ['People do not take the time to watch them.', 'They do not explain the reporting features clearly.', 'They cost the company about eight hundred dollars each.', 'They are only available to people at head office.'] },
              { id: 'L5.4', q: 'According to Raj, what do the videos not cover?', o: ['Reporting features', 'Basic features', 'Security settings', 'How to install the software'] },
              { id: 'L5.5', q: 'Why does Colette want new furniture?', o: ['Several people have back pain.', 'The oldest chairs are broken and cannot be repaired.', 'Head office requires standing desks in every office.', 'Clients have complained about the look of the office.'] },
              { id: 'L5.6', q: 'What is Hannah\'s attitude toward Colette\'s proposal?', o: ['She supports it because health comes first.', 'She thinks it costs too much and wants a cheaper quote.', 'She agrees only if the training is cancelled completely.', 'She prefers to spend the whole budget on training.'] },
              { id: 'L5.7', q: 'What do they agree to do about training?', o: ['Send four people, who will then teach the others', 'Send all eight people, but later in the fall', 'Replace the course with the free online videos', 'Hire an outside trainer to teach the whole team at once'] },
              { id: 'L5.8', q: 'What will happen to the remaining money?', o: ['It will be kept in reserve until the fall.', 'It will pay for four more people to take the course.', 'It will be returned to head office at the end of the month.', 'It will buy additional chairs and standing desks.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Homework in elementary school?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#d6a07a', hair: '#4a3020', shirt: '#943126', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'A growing number of elementary schools across Canada are reducing or even eliminating homework, and the change has sparked strong opinions on both sides.'],
              ['NARR', 'Supporters of the change point to research suggesting that homework in the early grades has little effect on test scores. Doctor Felix Marchand, a child psychologist, argues that young children learn just as much through play, sports and family time.'],
              ['NARR', 'He says long evenings of worksheets often lead to stress and arguments at home, and can turn children against learning before they even reach high school. In his view, schools should focus on making class time more effective, rather than sending work home.'],
              ['NARR', 'Others are less convinced. Aisha Morgan has taught grade five for fifteen years. She agrees that hours of worksheets are not helpful, but she believes ten to twenty minutes of daily reading or practice builds habits that students will need later.'],
              ['NARR', 'She also worries that a no-homework policy hurts children whose parents cannot afford tutors, because families with more money will simply fill the gap with private lessons. Morgan suggests a middle path: short, optional assignments that families can complete together.'],
              ['NARR', 'For now, most school boards are leaving the decision to individual principals, and many say they will survey parents before the next school year.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['A debate over homework in elementary schools', 'Research showing homework improves test scores in early grades', 'A new provincial rule that bans homework in all schools', 'The rising cost of private tutoring for young children'] },
              { id: 'L6.2', q: 'According to Dr. Marchand, how do young children learn?', o: ['Through play, sports and family time as well as school', 'Mainly through short daily reading assignments at home', 'Best through worksheets completed with their parents', 'Mostly in class, so homework should replace play time'] },
              { id: 'L6.3', q: 'What negative effect of homework does Dr. Marchand mention?', o: ['Stress and arguments at home', 'Lower test scores in high school', 'Less time for teachers to plan their lessons', 'Higher costs for families who must buy materials'] },
              { id: 'L6.4', q: 'What does Aisha Morgan believe?', o: ['Short daily practice builds useful habits.', 'Homework should be banned.', 'Students need two hours of homework a night.', 'Reading at home is not important.'] },
              { id: 'L6.5', q: 'Why does Morgan worry about a no-homework policy?', o: ['It may disadvantage families who cannot pay for tutors.', 'It may cause families with more money to stop paying for tutors.', 'It may make children less interested in reading for fun.', 'It may lead principals to ignore what parents want.'] },
              { id: 'L6.6', q: 'Who will decide on homework policy for now?', o: ['Individual principals', 'The provincial government', 'Parents only', 'The students'] }
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
            { id: 'R1.1', q: 'Jenna\'s family slept on air mattresses because', o: ['bad weather held up the delivery of their belongings.', 'the building had not finished cleaning their new unit.', 'they wanted to save money before buying new furniture.', 'the children begged to camp out in the empty rooms.'] },
            { id: 'R1.2', q: 'The children probably saw their first few nights in Halifax as', o: ['an exciting experience.', 'an uncomfortable ordeal.', 'a frightening time.', 'a long and boring wait.'] },
            { id: 'R1.3', q: 'What does Jenna imply about the moving company?', o: ['She was not fully happy with its service.', 'She would gladly use it again for her next move.', 'It refused to give the family any money back.', 'It delivered the furniture earlier than promised.'] },
            { id: 'R1.4', q: 'About her job search, Jenna says that', o: ['one employer wants to meet with her again.', 'she has accepted a position at a firm downtown.', 'she would prefer to find work at the hospital.', 'she will start a new job next Tuesday morning.'] },
            { id: 'R1.5', q: 'Jenna now wears several layers of clothing because', o: ['the sea breeze in Halifax feels very cold.', 'the air in Halifax is drier than in Calgary.', 'the market is held outdoors every Saturday.', 'her back has been sore since the long move.'] },
            { id: 'R1.6', q: 'The main purpose of Jenna\'s message is to', o: ['give an update and ask her friends to stay.', 'ask Owen for advice about finding engineering work.', 'complain about the company that moved her family.', 'describe a trip she recently took to Peggy\'s Cove.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Jenna,</p><p>It was great to hear from you! I am sorry the first week was so rough. Five nights on an air mattress sounds like [[R1.7]], and I am glad the movers at least gave you some money back. Good luck on Tuesday. With your background, I am sure the [[R1.8]] will be impressed, and a longer trip to work is a small price to pay for interesting projects.</p><p>Priya and I would love to visit. She has [[R1.9]], so how about the 14th to the 21st? Because of [[R1.10]], we have stayed away from the first weekend. We will start looking for flights this weekend and send you our times once we book.</p><p>Please don\'t plan anything big. Honestly, we would be happy just walking by the water, wandering through the Saturday market and trying those famous blueberry scones. And thanks for the warning about the wind. I will make sure to pack [[R1.11]].</p><p>Give the kids a hug from us, and tell Michael we hope the night shifts get easier.</p><p>See you soon,<br>Owen</p>',
          blanks: [
            { id: 'R1.7', o: ['a tough way to begin', 'a fun treat for everyone', 'a clever way to save money', 'a relaxing first week'] },
            { id: 'R1.8', o: ['interviewers', 'hospital staff', 'market vendors', 'camp leaders'] },
            { id: 'R1.9', o: ['time off in the middle of July', 'already booked a tour of Peggy\'s Cove', 'a job at a day camp in July', 'no holidays until late August'] },
            { id: 'R1.10', o: ['your in-laws\' visit', 'the kids\' day camp', 'Michael\'s night shifts', 'your interview on Tuesday'] },
            { id: 'R1.11', o: ['clothes I can layer', 'only light summer shirts', 'an extra air mattress', 'a heavy snow shovel'] }
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
            '</tbody></table></div><ul class="notes"><li>Registration opens online on January 6 at 8:00 a.m.</li><li>Family discount: when two or more children from the same household register, take 10% off the lower-priced program.</li><li>Children under 8 must have an adult present on the pool deck.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Ben,</p><p>I have been looking at the swim programs at Lakeside. Since we live in the city, we pay the resident price. For Lucas, who is seven, the best option is [[R2.1]], and Maya, who just turned eleven, could do the stroke clinic on [[R2.2]]. Because Lucas is under eight, one of us will need to [[R2.3]] during his lessons. His classes start at 4:30, so I can take him straight there after I pick him up from school.</p><p>Maya\'s program would normally be $120, but with the family discount it comes to [[R2.4]]. I was also thinking of joining Aquafit myself, but the classes are on weekday mornings, when I am at work, so I will [[R2.5]].</p><p>Registration opens on January 6, so let\'s sign up first thing that morning before the spots fill up.</p><p>Carla</p>',
          blanks: [
            { id: 'R2.1', o: ['Junior Swim', 'Splash Starters', 'the Youth Stroke Clinic', 'Adult Learn-to-Swim'] },
            { id: 'R2.2', o: ['Wednesday evenings', 'Saturday mornings', 'Tuesday afternoons', 'Monday nights'] },
            { id: 'R2.3', o: ['stay on the pool deck', 'swim in the water with him', 'sign up for Adult Learn-to-Swim', 'wait in the parking lot until he finishes'] },
            { id: 'R2.4', o: ['$108', '$120', '$96', '$150'] },
            { id: 'R2.5', o: ['skip it for now', 'take it on Saturdays', 'pay the non-resident price', 'join the adult lessons instead'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A non-resident would pay this much for Splash Starters:', o: ['$80', '$64', '$8', '$96'] },
            { id: 'R2.7', q: 'A 15-year-old who cannot swim should register for', o: ['Adult Learn-to-Swim.', 'the Youth Stroke Clinic.', 'Junior Swim.', 'Splash Starters.'] },
            { id: 'R2.8', q: 'A resident who goes to Aquafit three times a week for four weeks will pay', o: ['$96.', '$120.', '$24.', '$80.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Bees in the City</h3><p><b>A.</b> Beekeeping is no longer limited to farms. In the past decade, hives have appeared on apartment balconies, restaurant rooftops and even office towers in cities such as Toronto, Vancouver and Montreal. Supporters say urban bees benefit from the wide variety of flowers in parks and gardens, which can provide a richer diet than large farms planted with a single crop. A few companies now rent hives to offices that want to show they care about the environment, sending a trained keeper to check on the colonies every two weeks.</p><p><b>B.</b> However, keeping bees in the city comes with rules. Most municipalities require hives to be registered and placed a minimum distance from property lines, often around three metres. Some cities also limit the number of hives per property, and many require a solid fence or hedge at least two metres high, which forces bees to fly upward, well above the heads of people walking by. New beekeepers are strongly encouraged to take a course before buying equipment, as poorly managed colonies are more likely to spread disease to neighbouring hives. Starting a single hive, including the bees, protective clothing and tools, typically costs several hundred dollars.</p><p><b>C.</b> Not everyone welcomes the trend. Some scientists warn that a sudden rise in honeybee hives may harm wild native bees, which compete for the same flowers. Unlike honeybees, which live in colonies of thousands, many native species live alone and nest in the ground, and they play an important role in pollinating local plants. In one Montreal study, researchers found that as the number of hives in the city grew, the variety of wild bees visiting urban gardens declined. They suggest that cities should plant more flowers, not simply add more hives.</p><p><b>D.</b> For people who want to help pollinators without the commitment of a hive, experts recommend simple steps: growing native plants, avoiding chemical pesticides and leaving small patches of bare soil for ground-nesting bees. Choosing plants that bloom at different times, from early spring to late fall, makes sure that food is available throughout the season. Several cities now offer free seed packets each spring to residents who want to turn part of their lawn into a pollinator garden, and some schools have planted similar gardens so that students can watch bees up close.</p>',
          questions: [
            { id: 'R3.1', q: 'Many wild species are solitary and make their homes underground.', fixed: true, a: 'C' },
            { id: 'R3.2', q: 'City plantings may offer bees a more varied food supply than some farmland.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'Some local governments hand out free seeds.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'A tall barrier can keep bees flying above pedestrians.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Selling honey can be a profitable side business for city beekeepers.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Beginners are advised to get some training first.', fixed: true, a: 'B' },
            { id: 'R3.7', q: 'Research in one city linked a growth in hives to fewer kinds of wild bees.', fixed: true, a: 'C' },
            { id: 'R3.8', q: 'Selecting flowers that open in different seasons keeps bees fed for longer.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Some businesses pay to have hives placed at their workplace and looked after.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Is the Four-Day Week Ready for Canada?</h3><p>When a mid-sized Ontario software company switched to a four-day work week last year, its owners expected some loss of productivity. Instead, they found the opposite. Over twelve months, the company reports that projects were completed on time more often, sick days fell by almost a third, and the number of job applications doubled. Employees kept their full salaries while working thirty-two hours instead of forty.</p><p>Not every employee was convinced at first. Project lead Lauren Moreau admits she expected the change to backfire. "I assumed I would be doing five days of work in four and going home exhausted," she says. What changed her mind was the company\'s decision to cancel most internal meetings and agree on a short list of goals at the start of each week. "Now I spend Fridays with my children, and on Monday I actually know what matters most."</p><p>Supporters argue that results like these are not unusual. Economist Dr. Sarah Lindqvist points to trials in several countries where most participating companies chose to keep the shorter week after the trial ended. "When people have a real weekend plus one extra day, they come back rested and more focused," she says. "Meetings get shorter because everyone knows time is limited." She also believes the model could help employers compete for skilled workers at a time when many industries face shortages.</p><p>Critics, however, say these success stories mostly come from office jobs. Retail manager Paul Okafor notes that a store must stay open six or seven days a week regardless of staff schedules. "For us, a four-day week just means hiring more people or paying more overtime," he explains. "That cost gets passed on to customers, and many small shops simply cannot afford it." He adds that several of his part-time employees have told him they would like more hours, not fewer, because they are saving for school. Hospitals, schools and factories face similar challenges, since their work cannot simply be compressed. Others worry that cramming forty hours of work into four ten-hour days, rather than truly reducing hours, could increase fatigue.</p><p>Lindqvist acknowledges that the model is not a universal solution. She suggests that industries unable to close for a day could still experiment with shorter shifts or rotating schedules. One small manufacturer she advised now runs two overlapping crews, so the plant stays open five days a week while each worker is on the floor for only four. "The goal is not a specific number of days," she says. "It is finding out whether we are measuring work by hours spent instead of results achieved."</p>',
          questions: [
            { id: 'R4.1', q: 'What can be concluded about the trial at the Ontario software company?', o: ['Staff were ill less often, and more people wanted to work there.', 'Projects took longer, but employees said they were much happier.', 'Employees accepted lower salaries in exchange for a shorter week.', 'The owners decided to return to a five-day schedule after a year.'] },
            { id: 'R4.2', q: 'Why did Lauren Moreau change her opinion of the shorter week?', o: ['Her employer cut back on meetings and set clear weekly priorities.', 'She found that she could finish five days of work in only four.', 'Her children started school and she needed Fridays to drive them.', 'The company agreed to pay her extra for working ten-hour days.'] },
            { id: 'R4.3', q: 'Paul Okafor is concerned that a four-day week would', o: ['leave his customers paying higher prices.', 'give his part-time staff too many hours.', 'force his store to close one day a week.', 'make it harder to find skilled office staff.'] },
            { id: 'R4.4', q: 'Dr. Lindqvist would most likely agree that', o: ['a shorter week could help firms attract scarce talent.', 'retail stores should be required to close one day a week.', 'ten-hour days are the best way to shorten the work week.', 'office workers already spend too few hours at their desks.'] },
            { id: 'R4.5', q: 'Dr. Lindqvist\'s final point is that', o: ['output should count for more than time on the job.', 'every industry should be required to adopt a four-day week.', 'stores and hospitals should close for one extra day each week.', 'shorter shifts are better than a four-day week for office workers.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I work as a nurse, so I read this article with mixed feelings. Like Mr. Okafor, I do not see how my workplace could [[R4.6]]. Patients need care around the clock, and our unit is already short of staff. Still, I agree with Dr. Lindqvist that [[R4.7]]. After a string of long shifts, I know I am not at my best. That is why I like her idea of [[R4.8]] for workplaces that cannot shut down.</p><p>What worries me is the idea of squeezing forty hours into four days. In healthcare, [[R4.9]] can lead to serious mistakes. I also noticed that Ms. Moreau only came around once her company [[R4.10]]. Hospital managers should learn from that before they change anyone\'s schedule. Simply moving the same workload into fewer days will not help anyone, least of all our patients.</p>',
          blanks: [
            { id: 'R4.6', o: ['close one extra day', 'hire fewer nurses each year', 'double its job applications', 'cut its meetings in half'] },
            { id: 'R4.7', o: ['well-rested staff concentrate better', 'nurses should work four ten-hour shifts', 'hospitals should hire more part-time staff', 'shorter meetings save the most time'] },
            { id: 'R4.8', o: ['shifts that rotate', 'longer but fewer shifts', 'paying staff more overtime', 'closing the ward on weekends'] },
            { id: 'R4.9', o: ['exhaustion', 'boredom', 'short meetings', 'extra vacation'] },
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
          prompt: '<p>You recently ordered a piece of furniture online. When it was delivered, it was damaged and some parts were missing.</p><p>Write an email to the company\'s customer service department. In your email, do the following:</p><ul><li>Describe what you ordered and when it arrived.</li><li>Explain what is wrong with the item.</li><li>Say what you would like the company to do.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city has an empty lot downtown and is asking residents how it should be used. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a public park with a playground, trees and an open lawn for events.' },
            { key: 'B', label: 'Option B', text: 'Build a parking garage with small shops and cafés on the ground floor.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe some things you enjoy doing with your friends.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is moving to a new city where he does not know anyone. Give him advice on how to meet people and settle in.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to learn something new very quickly. What was it, and how did you manage?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: PARK },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: PARK },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is planning a weekend activity. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Camping at Keji Lake', image: CAMP, facts: ['2 nights in a tent', 'Campsite: $90', '2-hour drive', 'Swimming, hiking, campfire'] },
            { key: 'B', title: 'City hotel weekend', image: HOTEL, facts: ['2 nights in a hotel', 'Cost: $320', '1-hour drive', 'Museums, restaurants, indoor pool'] }
          ],
          third: { key: 'C', title: 'Indoor water park', image: WATERPARK, facts: ['1 day only', 'Tickets: $150 for the family', '30-minute drive', 'Water slides, wave pool, arcade'] },
          persuade: 'Your family member suggests the indoor water park instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You promised to help your coworker move to a new apartment this Saturday. Today, your manager asked you to work on Saturday to meet an important client. Doing this could help you get a promotion.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your coworker. Explain why you cannot help on Saturday.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot work on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Should employers allow all staff to work from home at least two days a week? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a garage sale and see this unusual bicycle. Call your friend who collects bicycles. Describe the bicycle and explain whether you think your friend should buy it.', image: ODDBIKE }
      ]
    }
  });
})();
