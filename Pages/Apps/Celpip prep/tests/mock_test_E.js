/* Rowe CELPIP Mock Exam: Test E content.
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

  function box(x, y, w, h, extra) {
    return '<g' + (extra || '') + '><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#c99a5b" stroke="#8a6331" stroke-width="2"/><line x1="' + x + '" y1="' + (y + h / 2) + '" x2="' + (x + w) + '" y2="' + (y + h / 2) + '" stroke="#e8d3a8" stroke-width="3"/></g>';
  }

  var MOVING = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moving day on a residential street">';
    p += '<rect width="640" height="400" fill="#cbe7f6"/>';
    p += '<circle cx="590" cy="45" r="24" fill="#f7d35c"/>';
    p += '<g fill="#fff" opacity=".9"><ellipse cx="300" cy="50" rx="45" ry="16"/><ellipse cx="335" cy="42" rx="30" ry="14"/></g>';
    /* lawn, sidewalk, road */
    p += '<rect y="220" width="640" height="90" fill="#8cc56d"/>';
    p += '<rect y="300" width="640" height="26" fill="#c9c6bf"/>';
    p += '<rect y="326" width="640" height="74" fill="#6b6e73"/>';
    p += '<g fill="#f1f1f1"><rect x="30" y="368" width="50" height="5"/><rect x="290" y="368" width="50" height="5"/><rect x="420" y="368" width="50" height="5"/><rect x="550" y="368" width="50" height="5"/></g>';
    /* the new house */
    p += '<rect x="430" y="125" width="160" height="110" fill="#e9dcc3" stroke="#9b8a6a" stroke-width="2"/>';
    p += '<polygon points="420,128 510,70 600,128" fill="#a0443a"/>';
    p += '<rect x="495" y="175" width="30" height="60" fill="#5b3a29"/><circle cx="519" cy="207" r="2.5" fill="#f2d16b"/>';
    p += '<g fill="#bfe1f2" stroke="#fff" stroke-width="3"><rect x="445" y="150" width="34" height="30"/><rect x="545" y="150" width="34" height="30"/></g>';
    p += '<rect x="503" y="235" width="14" height="66" fill="#d8cfbf"/>';
    /* SOLD sign */
    p += '<rect x="400" y="200" width="4" height="40" fill="#555"/><rect x="380" y="186" width="46" height="22" fill="#fff" stroke="#c0392b" stroke-width="2"/><text x="403" y="202" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#c0392b">SOLD</text>';
    /* neighbour's house on the far right, partly visible */
    p += '<rect x="610" y="140" width="40" height="95" fill="#c7d6e6"/><polygon points="600,142 640,110 640,142" fill="#4d6a8a"/>';
    /* moving truck (cab on the left, cargo box with open back on the right) */
    p += '<rect x="80" y="190" width="170" height="125" fill="#f4f4f4" stroke="#999" stroke-width="2"/>';
    p += '<rect x="215" y="196" width="30" height="113" fill="#4a3b2f"/>';
    p += '<text x="150" y="245" font-size="20" text-anchor="middle" font-family="sans-serif" fill="#2e86c1" font-weight="bold">MOVING</text>';
    p += '<text x="150" y="268" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#2e86c1">TRUCK RENTAL</text>';
    p += '<path d="M80 230 L48 230 L22 262 L22 315 L80 315 Z" fill="#2e86c1"/><rect x="34" y="238" width="34" height="22" fill="#bfe1f2"/>';
    p += '<g fill="#222"><circle cx="50" cy="322" r="16"/><circle cx="130" cy="322" r="16"/><circle cx="215" cy="322" r="16"/></g><g fill="#aaa"><circle cx="50" cy="322" r="6"/><circle cx="130" cy="322" r="6"/><circle cx="215" cy="322" r="6"/></g>';
    /* ramp from the back of the truck */
    p += '<polygon points="245,309 300,324 300,328 245,315" fill="#9a9a9a"/>';
    /* boxes waiting inside the truck */
    p += box(220, 280, 22, 26) + box(220, 252, 22, 26);
    /* mover with a stack of boxes, top box about to fall */
    p += person(290, 322, { shirt: '#2f8f83', skin: '#7a4b31', hair: '#120c08', arms: 'up' });
    p += box(272, 246, 34, 24) + box(274, 222, 30, 24);
    p += box(288, 194, 28, 22, ' transform="rotate(28 302 205)"');
    p += '<g stroke="#555" stroke-width="2" stroke-linecap="round"><line x1="324" y1="190" x2="334" y2="184"/><line x1="328" y1="202" x2="340" y2="200"/><line x1="322" y1="178" x2="328" y2="170"/></g>';
    /* two people carrying a couch toward the house */
    p += person(340, 300, { shirt: '#c0504d', skin: '#f0c9a6', hair: '#7a4a24', arms: 'right' });
    p += person(430, 296, { shirt: '#3d5a99', skin: '#c98c64', hair: '#2a1b12', arms: 'left' });
    p += '<rect x="352" y="252" width="66" height="18" rx="4" fill="#7d6bb0"/><rect x="352" y="240" width="66" height="14" rx="4" fill="#6a589c"/><rect x="346" y="244" width="10" height="26" rx="4" fill="#5a4a88"/><rect x="414" y="244" width="10" height="26" rx="4" fill="#5a4a88"/>';
    /* woman with a clipboard on the front path */
    p += person(478, 286, { shirt: '#f2a33a', skin: '#e3b28b', hair: '#3b2a20', arms: 'left' });
    p += '<rect x="446" y="242" width="14" height="18" fill="#fff" stroke="#7a5233" stroke-width="2"/>';
    /* child sitting in an empty box on the lawn */
    p += '<rect x="548" y="262" width="40" height="30" fill="#c99a5b" stroke="#8a6331" stroke-width="2"/><polygon points="548,262 536,250 548,252" fill="#d9ac6c"/><polygon points="588,262 600,250 588,252" fill="#d9ac6c"/>';
    p += person(568, 286, { shirt: '#e74c3c', skin: '#8d5a3b', hair: '#1d1410', s: .7, arms: 'up' });
    p += '<rect x="548" y="270" width="40" height="22" fill="#c99a5b" stroke="#8a6331" stroke-width="2"/>';
    /* neighbour bringing a tray of lemonade */
    p += person(626, 300, { shirt: '#9b59b6', skin: '#d6a07a', hair: '#dcdcdc', arms: 'left' });
    p += '<rect x="586" y="260" width="26" height="4" fill="#888"/><g fill="#f7e36b" stroke="#bbb"><rect x="589" y="250" width="6" height="10"/><rect x="599" y="250" width="6" height="10"/></g>';
    /* child on a scooter on the sidewalk, with a dog running beside */
    p += '<line x1="388" y1="324" x2="420" y2="324" stroke="#16a085" stroke-width="4"/><line x1="418" y1="324" x2="414" y2="290" stroke="#16a085" stroke-width="3"/><circle cx="390" cy="326" r="4" fill="#222"/><circle cx="418" cy="326" r="4" fill="#222"/>';
    p += person(400, 322, { shirt: '#f4d03f', skin: '#f2cfb0', hair: '#c49a42', s: .7, arms: 'right' });
    p += '<g fill="#a5713f"><ellipse cx="462" cy="314" rx="13" ry="6"/><circle cx="476" cy="308" r="6"/><rect x="452" y="317" width="3" height="8"/><rect x="467" y="317" width="3" height="8"/></g><path d="M449 312 q-6 -6 -2 -10" stroke="#a5713f" stroke-width="2" fill="none"/>';
    /* lamp and plant waiting on the sidewalk */
    p += '<rect x="325" y="290" width="4" height="34" fill="#555"/><polygon points="317,290 337,290 332,276 322,276" fill="#f6e7a6" stroke="#b9a75a"/>';
    p += '<rect x="352" y="306" width="16" height="16" fill="#b5651d"/><g fill="#3f8f3a"><ellipse cx="356" cy="298" rx="6" ry="10"/><ellipse cx="365" cy="298" rx="6" ry="10"/></g>';
    p += '</svg>';
    return p;
  })();

  var CRUISE = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#cfeaf7"/><rect y="82" width="200" height="38" fill="#3b8fd0"/><circle cx="170" cy="22" r="11" fill="#f6d55c"/><path d="M28 70 L172 70 L158 94 L42 94 Z" fill="#fff" stroke="#2c3e50" stroke-width="2"/><rect x="52" y="52" width="96" height="18" fill="#fff" stroke="#2c3e50" stroke-width="2"/><rect x="70" y="38" width="56" height="14" fill="#fff" stroke="#2c3e50" stroke-width="2"/><rect x="104" y="22" width="12" height="16" fill="#c0392b"/><g fill="#2e86c1"><circle cx="60" cy="80" r="3"/><circle cx="76" cy="80" r="3"/><circle cx="92" cy="80" r="3"/><circle cx="108" cy="80" r="3"/><circle cx="124" cy="80" r="3"/><circle cx="140" cy="80" r="3"/></g><path d="M10 104 q10 -5 20 0 q10 5 20 0 M140 108 q10 -5 20 0 q10 5 20 0" stroke="#fff" stroke-width="2" fill="none"/></svg>';
  var ROADTRIP = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e3f1f9"/><polygon points="0,80 45,30 90,80" fill="#8fa3b8"/><polygon points="60,80 115,20 170,80" fill="#7a8fa6"/><polygon points="103,34 115,20 127,34" fill="#fff"/><rect y="78" width="200" height="42" fill="#7fbf6a"/><path d="M60 120 C80 100 130 98 150 78" stroke="#555" stroke-width="18" fill="none"/><path d="M60 120 C80 100 130 98 150 78" stroke="#f6e7a6" stroke-width="2" stroke-dasharray="6 6" fill="none"/><rect x="88" y="88" width="34" height="14" rx="4" fill="#e74c3c"/><rect x="95" y="81" width="20" height="9" rx="3" fill="#e74c3c"/><rect x="92" y="76" width="26" height="5" fill="#8a6331"/><circle cx="96" cy="103" r="4" fill="#222"/><circle cx="114" cy="103" r="4" fill="#222"/></svg>';
  var STAYCATION = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#e8f4fb"/><rect y="84" width="200" height="36" fill="#86c66f"/><rect x="24" y="44" width="80" height="50" fill="#f2e3c6" stroke="#9b8a6a"/><polygon points="16,46 64,14 112,46" fill="#a0443a"/><rect x="56" y="66" width="16" height="28" fill="#5b3a29"/><rect x="34" y="56" width="14" height="12" fill="#bfe1f2"/><rect x="80" y="56" width="14" height="12" fill="#bfe1f2"/><path d="M128 98 L170 98 L162 84 L136 84 Z" fill="#f39c12"/><line x1="134" y1="98" x2="130" y2="108" stroke="#8a6331" stroke-width="3"/><line x1="164" y1="98" x2="168" y2="108" stroke="#8a6331" stroke-width="3"/><line x1="150" y1="84" x2="150" y2="40" stroke="#555" stroke-width="2"/><path d="M122 46 Q150 18 178 46 Z" fill="#e74c3c"/><text x="64" y="10" font-size="9" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">HOME</text></svg>';

  var BACKPACK = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual backpack in a sports store">' +
    '<rect width="640" height="400" fill="#eef1ec"/><rect y="340" width="640" height="60" fill="#b9b2a6"/>' +
    '<rect x="20" y="130" width="150" height="40" rx="6" fill="#2f6f4f"/><text x="95" y="156" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#fff">OUTDOOR GEAR</text>' +
    /* telescoping pull handle behind the bag */
    '<rect x="372" y="40" width="8" height="120" fill="#888"/><rect x="342" y="34" width="44" height="12" rx="6" fill="#444"/>' +
    /* umbrella attached to the left side */
    '<line x1="232" y1="170" x2="196" y2="48" stroke="#555" stroke-width="5"/><path d="M120 76 Q170 -6 262 30 Q236 34 214 50 Q190 50 168 62 Q144 62 120 76z" fill="#2e86c1"/>' +
    /* backpack body */
    '<rect x="230" y="90" width="170" height="240" rx="34" fill="#e67e22" stroke="#a65410" stroke-width="4"/>' +
    '<path d="M240 140 Q315 100 390 140 L390 170 L240 170 Z" fill="#d35400"/>' +
    /* solar panels on the top flap */
    '<g stroke="#9fc0ea" stroke-width="1.5"><rect x="262" y="118" width="106" height="44" fill="#1f3b73"/><line x1="288" y1="118" x2="288" y2="162"/><line x1="315" y1="118" x2="315" y2="162"/><line x1="342" y1="118" x2="342" y2="162"/><line x1="262" y1="140" x2="368" y2="140"/></g>' +
    /* front light with beams */
    '<circle cx="315" cy="215" r="18" fill="#f6f6f6" stroke="#555" stroke-width="4"/><circle cx="315" cy="215" r="9" fill="#f7e36b"/>' +
    '<g stroke="#f1c40f" stroke-width="3" stroke-linecap="round"><line x1="290" y1="200" x2="276" y2="192"/><line x1="340" y1="200" x2="354" y2="192"/><line x1="315" y1="190" x2="315" y2="178"/></g>' +
    /* front pocket */
    '<rect x="258" y="250" width="114" height="56" rx="12" fill="#ca6a16" stroke="#a65410" stroke-width="3"/><line x1="268" y1="262" x2="362" y2="262" stroke="#7a3d0b" stroke-width="3"/>' +
    /* water bottle holder on the right */
    '<rect x="398" y="210" width="34" height="70" rx="8" fill="#555"/><rect x="404" y="176" width="22" height="80" rx="6" fill="#5dade2"/><rect x="408" y="166" width="14" height="12" fill="#2c3e50"/>' +
    /* wheels */
    '<circle cx="262" cy="340" r="18" fill="#222"/><circle cx="262" cy="340" r="7" fill="#aaa"/><circle cx="368" cy="340" r="18" fill="#222"/><circle cx="368" cy="340" r="7" fill="#aaa"/>' +
    /* price tag */
    '<line x1="400" y1="110" x2="470" y2="96" stroke="#555" stroke-width="2"/><polygon points="470,80 540,80 552,98 540,116 470,116" fill="#f6d55c" stroke="#b9962a" stroke-width="2"/><circle cx="476" cy="98" r="4" fill="#eef1ec"/><text x="510" y="106" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#333">$189</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'E',
    title: 'Mock Test E',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty (about CLB 8 to 11).',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'office',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { DARNELL: { name: 'Darnell', g: 'm', skin: '#6b4329', hair: '#120c08', shirt: '#2e86c1', style: 'short' }, SOPHIE: { name: 'Sophie', g: 'f', skin: '#f2cfb0', hair: '#8a5a2b', shirt: '#8e44ad', style: 'bun' } },
        segments: [{
          lines: [
            ['DARNELL', 'Sophie, we\'re almost out of milk and eggs. Any chance you could stop at the grocery store on your way home?'],
            ['SOPHIE', 'I\'d like to, but I\'ve got a dentist appointment at five thirty, and it\'s clear across town. Could you go instead?'],
            ['DARNELL', 'Sure, I\'m off at four today anyway. Just text me the list.'],
            ['SOPHIE', 'Thanks. Then I\'ll take care of dinner when I get back.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why will Darnell do the grocery shopping?', o: ['Sophie has to see the dentist.', 'Sophie forgot the shopping list.', 'Darnell starts work at four.', 'The store is close to his office.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { KWAME: { name: 'Kwame', g: 'm', skin: '#5a3825', hair: '#120c08', shirt: '#27ae60', style: 'short' }, ISABELLE: { name: 'Isabelle', g: 'f', skin: '#f0c9a6', hair: '#a0522d', shirt: '#2c6fb0', style: 'curly' } },
          segments: [
            {
              lines: [
                ['ISABELLE', 'So? What did the woman at the gate say? You were in there forever.'],
                ['KWAME', 'She says there\'s no reservation under my name. Not for this weekend, not for any weekend.'],
                ['ISABELLE', 'What? But you booked it ages ago, didn\'t you?'],
                ['KWAME', 'Back in March. Site forty-two, right on the water, two nights. Seventy-eight dollars. I remember, because I was annoyed it had gone up since last summer.'],
                ['ISABELLE', 'Okay, so just show her the confirmation email.'],
                ['KWAME', 'That\'s the thing. I\'ve got no bars out here at all. My inbox won\'t even load, and of course I never took a screenshot.'],
                ['ISABELLE', 'Great. And with Monday being a holiday, I bet every site in the park is taken.'],
                ['KWAME', 'She said they\'ve been full since Wednesday. People have been phoning all week hoping somebody cancels.']
              ],
              questions: [
                { id: 'L1.1', q: 'What problem do Kwame and Isabelle have?', o: ['The park cannot find their booking.', 'Their lakeside campsite has been flooded.', 'They have driven to the wrong park.', 'The park has closed for the season.'] },
                { id: 'L1.2', q: 'What does Kwame say about the price of the site?', o: ['It cost more than the year before.', 'It was less than he had expected.', 'It included a fee for the holiday.', 'It was charged twice in March.'] },
                { id: 'L1.3', q: 'Why does Isabelle expect the park to be full?', o: ['It is a long weekend.', 'The weather is perfect.', 'A festival is on nearby.', 'Many sites are closed.'] }
              ]
            },
            {
              lines: [
                ['ISABELLE', 'Okay, let\'s not panic. Did she give us any options at all?'],
                ['KWAME', 'Two. There\'s an overflow area beside the main parking lot. Twenty-five a night, but no fire pit and no picnic table.'],
                ['ISABELLE', 'Beside the parking lot? With car doors slamming until midnight? I\'d honestly rather sleep in the car.'],
                ['KWAME', 'Fair. The other option is a private campground about twenty minutes back down the highway. She thinks they still have room, and they\'ve got hot showers.'],
                ['ISABELLE', 'Hot showers would be nice, I\'ll admit. But the whole point was waking up next to the lake.'],
                ['KWAME', 'Hang on. Wait a second. I don\'t think I booked with my personal email. I did it on my lunch break, so I would have been logged into my work account.'],
                ['ISABELLE', 'So the booking could be attached to a completely different address. Do you know the reservation number?'],
                ['KWAME', 'No, but it\'ll be in that email. Remember that lookout we passed, maybe five minutes back? There was a sign for a cell service area.'],
                ['ISABELLE', 'Then let\'s go. I\'m not giving up on site forty-two just yet.']
              ],
              questions: [
                { id: 'L1.4', q: 'How does Isabelle feel about the private campground?', o: ['It has one appeal, but she prefers the lake.', 'It is too far down the highway for her.', 'She doubts it will still have any room.', 'She would rather stay in the overflow area.'] },
                { id: 'L1.5', q: 'Why does Kwame think he used his work email?', o: ['He made the booking while at work.', 'His personal account was full.', 'The park asked for a work address.', 'His company paid for the site.'] },
                { id: 'L1.6', q: 'What will Kwame and Isabelle most likely do next?', o: ['Go back to where a phone works', 'Drive to the private campground', 'Set up in the overflow area', 'Wait at the gate for a cancellation'] }
              ]
            },
            {
              lines: [
                ['KWAME', 'Okay, we\'re back in business. She found it the second I read her the number.'],
                ['ISABELLE', 'So what on earth happened?'],
                ['KWAME', 'My last name. Whoever entered it typed Asanti, with an "i" at the end instead of an "e". So every time she searched for Asante, nothing came up.'],
                ['ISABELLE', 'Unbelievable. So forty-two is still ours? Both nights?'],
                ['KWAME', 'Both nights. And she was so apologetic that she threw in a free bundle of firewood. She said it was the least she could do.'],
                ['ISABELLE', 'Well, that almost makes up for the last hour. It gets dark around eight thirty, so let\'s get the tent up first, and then I\'ll deal with the fire while you start dinner.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why couldn\'t the attendant find the booking at first?', o: ['Kwame\'s last name was misspelled.', 'It was made under Isabelle\'s name.', 'The reservation number was wrong.', 'It was booked for a different site.'] },
                { id: 'L1.8', q: 'Why did the attendant give them firewood?', o: ['To make up for the problem', 'Because firewood comes with the site', 'Because the overflow area has none', 'To thank them for being patient'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { MEILIN: { name: 'Mei-Lin', g: 'f', skin: '#efd2b4', hair: '#120c08', shirt: '#16a085', style: 'long' }, GORD: { name: 'Gord (superintendent)', g: 'm', skin: '#e3b28b', hair: '#8a8a8a', shirt: '#5d6d7e', style: 'bald' } },
          segments: [{
            lines: [
              ['MEILIN', 'Hi Gord, sorry to bother you. Have you got a second?'],
              ['GORD', 'Sure, Mei-Lin. What\'s up?'],
              ['MEILIN', 'It\'s the laundry room. Machine number two stopped halfway through the cycle, and my clothes are stuck inside. The door\'s locked, and there\'s still water sitting in the drum.'],
              ['GORD', 'Ah, number two. Of course it is. Did you try the restart button on the front panel?'],
              ['MEILIN', 'Twice. The lights flash, but nothing happens. And it had already taken two seventy-five off my laundry card.'],
              ['GORD', 'Okay. First things first, I\'ll go down and drain it by hand so you can get your things out. Give me about ten minutes.'],
              ['MEILIN', 'Thank you. Is someone actually going to fix it this time, though? I\'m pretty sure it did the exact same thing last month.'],
              ['GORD', 'It did. The repair company came out and patched it, and clearly that didn\'t hold. I called them first thing this morning. The earliest they can come is Thursday, and this time I\'m asking them to swap out the whole control panel.'],
              ['MEILIN', 'That makes sense. And the two seventy-five?'],
              ['GORD', 'Leave me your card number and I\'ll put it back on this afternoon.'],
              ['MEILIN', 'Great. Honestly, I\'m not looking for money off my rent or anything. I just want my work clothes back before tomorrow.'],
              ['GORD', 'Ha, fair enough. Machine three is free right now, by the way. Once I\'ve drained number two, you can move everything straight over and rewash it there.'],
              ['MEILIN', 'Perfect. I\'ll run up and grab my detergent, and I\'ll meet you down there.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why does Mei-Lin come to see Gord?', o: ['A washer broke with her clothes in it.', 'The laundry room door is stuck shut.', 'Her laundry card has no money left.', 'A dryer has damaged her favourite shirt.'] },
              { id: 'L2.2', q: 'What can be inferred about machine number two?', o: ['It has broken down before.', 'It is the newest machine.', 'It only accepts coins.', 'It was repaired this morning.'] },
              { id: 'L2.3', q: 'Why does Gord want the control panel replaced?', o: ['The last repair did not last.', 'The panel is no longer made.', 'Tenants keep pressing restart.', 'The repair company suggested it.'] },
              { id: 'L2.4', q: 'What does Mei-Lin mean when she mentions her rent?', o: ['Her main concern is her clothes.', 'She expects money off her rent.', 'She thinks her rent is too high.', 'She wants Gord to pay her back.'] },
              { id: 'L2.5', q: 'What will Mei-Lin most likely do next?', o: ['Get detergent and go downstairs', 'Wait in her apartment until Thursday', 'Drain machine two herself', 'Take her clothes to a laundromat'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#d6a07a', hair: '#3b2a20', shirt: '#34495e', style: 'short' }, AMARA: { name: 'Amara Bello', g: 'f', skin: '#4e3020', hair: '#120c08', shirt: '#1abc9c', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Amara Bello, a registered nurse who works in remote communities in northern Manitoba. Amara, welcome.'],
              ['AMARA', 'Thanks for having me.'],
              ['HOST', 'Let\'s start with your schedule. You don\'t live up north full time, right?'],
              ['AMARA', 'No. I work three weeks in, and then I\'m home in Winnipeg for three weeks. Most of the communities I work in don\'t have a year-round road, so I fly in on a small plane, usually with a couple of boxes of medical supplies on the seat beside me.'],
              ['HOST', 'What does a typical day look like?'],
              ['AMARA', 'There isn\'t really a typical day. There\'s no doctor living in the community, so the two of us at the nursing station handle almost everything. In one morning I might give vaccines, stitch up a cut, check on a newborn and then talk to a doctor in the city by video about someone with chest pain.'],
              ['HOST', 'And if someone is seriously ill?'],
              ['AMARA', 'Then we arrange a medical flight to a hospital in the south. The hard part is the weather. If there\'s fog or a storm, the plane simply can\'t land, and we might be looking after that patient ourselves for twelve hours or more.'],
              ['HOST', 'Is language ever a barrier?'],
              ['AMARA', 'Sometimes. A lot of older patients are more comfortable in Cree. An elder named Rose volunteers at the station, and she interprets for us. She\'s also taught me a fair number of phrases, and patients really light up when I try them, even when I get them wrong.'],
              ['HOST', 'What surprised you most when you started?'],
              ['AMARA', 'Honestly? The price of food. A small carton of juice can be fourteen dollars. These days, half my suitcase is groceries before I even pack my clothes.'],
              ['HOST', 'What would you tell a nurse who\'s thinking about this kind of work?'],
              ['AMARA', 'Get at least two years in an emergency department first. Up there, you\'re often the one making the call, with nobody down the hall to ask. But I\'d also tell them it\'s the most rewarding job I\'ve ever had.']
            ],
            questions: [
              { id: 'L3.1', q: 'What can be inferred about the communities where Amara works?', o: ['Most are reached by air for much of the year.', 'Each one has its own small hospital.', 'They are all a short drive from Winnipeg.', 'They have a doctor living there in winter.'] },
              { id: 'L3.2', q: 'What does Amara\'s description of a morning show?', o: ['Nurses there do many kinds of work.', 'Most patients come in for vaccines.', 'Doctors visit the station by plane.', 'The station is open only in mornings.'] },
              { id: 'L3.3', q: 'Why might nurses look after a very sick patient for many hours?', o: ['Bad weather can stop planes from landing.', 'Patients often refuse to leave home.', 'Hospitals in the south are often full.', 'Medical flights only operate at night.'] },
              { id: 'L3.4', q: 'How do patients react when Amara speaks Cree?', o: ['They appreciate her effort.', 'They correct her right away.', 'They ask Rose to interpret.', 'They prefer to use English.'] },
              { id: 'L3.5', q: 'Why does Amara fill her suitcase with groceries?', o: ['Food up north costs a great deal.', 'The local store is often closed.', 'She follows a special diet.', 'Her clothes are kept at the station.'] },
              { id: 'L3.6', q: 'Why does Amara recommend emergency experience?', o: ['Nurses there must often decide alone.', 'Northern clinics require it to hire.', 'It pays better in remote places.', 'It helps nurses cope with the cold.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'The City of Port Alder is going electric. Starting in March, the first eight of twenty-four battery-electric buses will join the city\'s transit fleet, with the rest arriving over the following two years.'],
              ['NEWS', 'Each bus costs roughly one point two million dollars, close to double the price of a diesel model. However, transit manager Lena Sorensen says the city expects to save about forty thousand dollars per bus every year on fuel and maintenance.'],
              ['NEWS', 'The buses can travel up to two hundred and fifty kilometres on a single charge, which Sorensen says is enough for a full day of service on most routes. They will charge overnight at a new depot on Kent Street, now under construction beside the existing garage.'],
              ['NEWS', 'There is one open question. In extreme cold, battery range can fall by as much as thirty percent. Until the city has collected a full winter of data, diesel buses will stay on its two longest routes in January and February.'],
              ['NEWS', 'Drivers who tested the buses last fall describe them as noticeably quieter and smoother. Riders will soon be able to judge for themselves: fares on every route served by the new buses will be waived on launch day, March third.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['New electric buses for the city', 'A new bus garage being built downtown', 'A rise in diesel fuel prices', 'Free bus service for the winter'] },
              { id: 'L4.2', q: 'What does the report suggest about the cost of the electric buses?', o: ['They cost more to buy but less to run.', 'They are cheaper than diesel buses.', 'They will be paid for with higher fares.', 'Their purchase price will drop in two years.'] },
              { id: 'L4.3', q: 'How many of the electric buses will arrive after March?', o: ['16', '8', '24', '2'] },
              { id: 'L4.4', q: 'Why will diesel buses stay on two routes in January and February?', o: ['Range in the cold is still uncertain.', 'The electric buses cannot climb icy hills.', 'The new depot will not be finished.', 'Drivers find the diesel buses easier.'] },
              { id: 'L4.5', q: 'What will happen on launch day?', o: ['Riders can use the new buses free.', 'Drivers will test the buses for the first time.', 'The depot on Kent Street will open.', 'All diesel buses will be retired.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Book club: summer planning', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { LUCIA: { name: 'Lucia', g: 'f', skin: '#d9a77c', hair: '#3b2a20', shirt: '#c0392b', style: 'long' }, OMAR: { name: 'Omar', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#2c3e50', style: 'short' }, BETH: { name: 'Beth', g: 'f', skin: '#f2d3bd', hair: '#d8d8d8', shirt: '#7d3c98', style: 'bun' } },
          segments: [{
            lines: [
              ['LUCIA', 'Okay, everyone, let\'s get started. We\'ve got two things to settle tonight: what we\'re reading next, and where we\'re meeting. As you know, the library\'s meeting room closes for renovations at the end of the month.'],
              ['OMAR', 'For how long?'],
              ['LUCIA', 'At least until September, they said. So we need somewhere for June, July and August.'],
              ['OMAR', 'Well, let me start with the book, then. I\'d love for us to do The Glass Mountain. It\'s technically fantasy, but it\'s really about family and loyalty. Everyone I know who\'s read it can\'t stop talking about it.'],
              ['LUCIA', 'I\'ve heard great things. Isn\'t it enormous, though?'],
              ['OMAR', 'About seven hundred pages.'],
              ['LUCIA', 'That\'s what worries me. Half the group didn\'t finish last month\'s book, and that was barely three hundred pages. In four weeks, I just don\'t see people getting through it.'],
              ['BETH', 'Could I suggest something lighter? There\'s a memoir by a chef from Moncton called Salt and Smoke. She opened a restaurant with almost no savings, and it\'s hilarious. It\'s about two hundred pages.'],
              ['OMAR', 'That actually sounds good. What if we did Beth\'s book for June, and then gave ourselves both July and August for mine?'],
              ['LUCIA', 'I like that. Okay, location. Beth, you offered your place?'],
              ['BETH', 'I did, but I\'ve been thinking it over. My living room\'s up a full flight of stairs, and Harold\'s using a walker since his knee surgery. I don\'t want him to be the one who misses out.'],
              ['OMAR', 'No, that wouldn\'t be right. What about the café on Water Street? The one with the big back room.'],
              ['BETH', 'On a Thursday? That\'s open mic night. We wouldn\'t hear ourselves think.'],
              ['LUCIA', 'True, but who says it has to be Thursday? I actually called the owner last week. She said the back room is ours on Tuesday evenings, no charge, as long as everybody orders at least one drink.'],
              ['OMAR', 'That\'s hardly a sacrifice. I\'d be ordering a coffee anyway.'],
              ['BETH', 'Tuesdays suit me. And the café\'s all on one level, so Harold can get in easily.'],
              ['LUCIA', 'Wonderful. I\'ll email the whole group tonight with the June book and the new day, and I\'ll check with Harold myself that Tuesdays work for him.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To pick a book and a place to meet', 'To plan a party for the library staff', 'To vote for a new club leader', 'To review last month\'s book'] },
              { id: 'L5.2', q: 'Why does the club need a new meeting place?', o: ['The library room is being renovated.', 'The library has started charging a fee.', 'The group has become too large.', 'Harold cannot get into the library.'] },
              { id: 'L5.3', q: 'What is Lucia\'s main concern about The Glass Mountain?', o: ['Few members would finish it in time.', 'It is a type of book few members like.', 'Several members have already read it.', 'It is too expensive for some members.'] },
              { id: 'L5.4', q: 'How does Omar respond to Lucia\'s concern?', o: ['He proposes giving his book more time.', 'He agrees to drop his book completely.', 'He argues that his book is a fast read.', 'He offers to lend copies to everyone.'] },
              { id: 'L5.5', q: 'Why does Beth decide her home is not suitable?', o: ['Harold could not easily reach it.', 'Her living room is too small.', 'Her neighbours complain about noise.', 'She is having surgery in June.'] },
              { id: 'L5.6', q: 'What can be inferred about the café on Thursdays?', o: ['It has live performances.', 'It closes too early.', 'The back room is booked.', 'Prices are much higher.'] },
              { id: 'L5.7', q: 'What condition did the café owner set?', o: ['Every member must buy a drink.', 'The club must pay a small fee.', 'The group must meet on Thursdays.', 'The club must leave before nine.'] },
              { id: 'L5.8', q: 'When will the group read The Glass Mountain?', o: ['During July and August', 'Starting in early June', 'After the library reopens', 'Once Harold has finished it'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Smartphones before 13?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#e3b28b', hair: '#5a3a22', shirt: '#943126', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Most Canadian children now get their first smartphone at around eleven or twelve. But a growing number of parents are asking whether that is simply too early.'],
              ['NARR', 'Marcus Leblanc, a father of three in Kelowna, started a group in which parents at his children\'s school agree not to give their kids a smartphone before grade eight. More than two hundred families have signed on so far.'],
              ['NARR', 'Leblanc says the first thing that pushed him was sleep. His oldest daughter, he discovered, was messaging friends well past midnight. He also argues that most of the pressure to own a phone comes from classmates, so it largely disappears when an entire class waits together.'],
              ['NARR', 'He is quick to add that he is not against technology. He recommends a basic phone that can only make calls and send texts, so that children can still reach their parents after school.'],
              ['NARR', 'Doctor Priya Raman, who studies child development at a university in Ottawa, sees things differently. She warns that simply delaying the phone does nothing to teach children how to use one well.'],
              ['NARR', 'In her research, teenagers who were handed full access all at once at thirteen or fourteen ran into more trouble online than those who had been introduced gradually, with clear rules and a parent close by.'],
              ['NARR', 'Raman suggests beginning with a phone that sleeps in the kitchen overnight and holds only a few approved apps, then adding freedom as the child shows responsibility.'],
              ['NARR', 'On one point, the two agree: parents should talk to other families before deciding, so that no child ends up feeling singled out.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['The right age for a first smartphone', 'How schools teach online safety skills', 'The cost of smartphones for families', 'Why teenagers need more sleep'] },
              { id: 'L6.2', q: 'What first led Leblanc to act?', o: ['His daughter was losing sleep.', 'His school banned all phones.', 'His son had trouble online.', 'Other parents asked for help.'] },
              { id: 'L6.3', q: 'According to Leblanc, why does pressure to own a phone fade?', o: ['Nobody in the class has one yet.', 'Children start to prefer basic phones.', 'Teachers stop allowing phones.', 'Parents explain the risks clearly.'] },
              { id: 'L6.4', q: 'What is Leblanc\'s attitude toward technology?', o: ['He accepts it with limits.', 'He opposes all devices for children.', 'He thinks it is mainly harmless.', 'He leaves it entirely to schools.'] },
              { id: 'L6.5', q: 'What is Dr. Raman\'s main objection to delaying phones?', o: ['It does not build good habits.', 'It makes children feel isolated.', 'It is impossible for parents to enforce.', 'It leaves children unable to call home.'] },
              { id: 'L6.6', q: 'What do Leblanc and Raman agree on?', o: ['Parents should consult other families.', 'Phones should be kept in the kitchen every night.', 'Children should get phones in grade eight.', 'Schools should set the rules for phone use.'] }
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
          passage: '<h3>Message</h3><p>Hi Andre,</p><p>I can\'t believe it has already been three months since I left Ottawa for Yellowknife. Sorry I haven\'t written sooner. Between starting a new job and turning an empty apartment into a home, the weeks just vanished.</p><p>Work is going well. The pharmacy is far busier than I expected, because it also serves people from several smaller communities who fly in for medical appointments and fill their prescriptions before flying home. My manager, Doris, has lived here for thirty years, and she has taught me more about the North in three months than every guidebook I read before moving.</p><p>Prices took some getting used to. A carton of milk is nearly double what I paid in Ottawa, so Doris showed me how to order dry goods in bulk once a month and split the boxes with two coworkers. My grocery bill has dropped by about a third since then.</p><p>You asked about the cold. Yes, it is as extreme as you imagine. Last week it was minus thirty-eight in the morning. The strange part is that it does not feel as miserable as Ottawa at minus fifteen, because the air here is so dry. What I find much harder is the darkness. In December, the sun is only up for about five hours, so I walk to work in the dark and walk home in the dark.</p><p>The upside of those long nights is the northern lights. A few nights ago, the whole sky turned green and purple, and I stood on my balcony in my parka until I could no longer feel my toes.</p><p>I have also done something you will never believe: I joined a curling league. I had never even held a broom, but Doris needed a fourth player for her team. We lost our first three games, but last night we finally won!</p><p>Now, two favours. First, could you look for my old hiking boots? I think I left them in the basement at Mom\'s. I want them for the spring. Second, and more importantly, will you come up and visit? March would be ideal. The days are much longer by then, it is still cold enough for the ice road, and there is a winter festival on the bay with an enormous snow castle.</p><p>Let me know what you think. And tell Mom I am wearing my hat.</p><p>Love,<br>Natalie</p>',
          questions: [
            { id: 'R1.1', q: 'Natalie suggests that Doris', o: ['has given her valuable local knowledge.', 'wrote one of the guidebooks Natalie read.', 'moved north from Ottawa thirty years ago.', 'is planning to leave the pharmacy soon.'] },
            { id: 'R1.2', q: 'The pharmacy is busier than Natalie expected mainly because', o: ['patients from outlying towns use it too.', 'it is the only pharmacy in the city.', 'several staff members quit this winter.', 'it fills orders for the local hospital.'] },
            { id: 'R1.3', q: 'Natalie\'s comment about minus thirty-eight suggests that', o: ['low humidity makes it surprisingly bearable.', 'it is the coldest weather she has ever felt.', 'it keeps her from walking to work in December.', 'it bothers her more than the lack of daylight.'] },
            { id: 'R1.4', q: 'Natalie implies that, compared with the cold, the darkness is', o: ['harder for her to handle.', 'easier to get used to.', 'a reason to stay indoors.', 'the best part of winter.'] },
            { id: 'R1.5', q: 'Natalie most likely orders dry goods in bulk in order to', o: ['spend less on food.', 'avoid shopping in the dark.', 'help Doris run the pharmacy.', 'supply her curling team.'] },
            { id: 'R1.6', q: 'Natalie thinks March would suit a visit partly because', o: ['there will be more sunshine by then.', 'the ice road will have melted away.', 'the aurora is brightest in the spring.', 'her job will be much quieter then.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Nat,</p><p>It was so good to hear from you. I laughed out loud at the curling story. You, of all people, with a broom! Congratulations on [[R1.7]]. Doris sounds like a great person to have on your side up there, especially if she is also cutting your grocery costs.</p><p>I still cannot understand how minus thirty-eight could feel better than an Ottawa winter, but I suppose I will find out for myself, because yes, I am coming! My boss has approved a week off in mid-March. I would love to see [[R1.8]] at the festival, and I am hoping for at least one clear night so we can stand on your balcony and watch [[R1.9]] together, even if I lose a few toes in the process.</p><p>As for your other request, I went over to Mom\'s on Sunday and found [[R1.10]] in the basement, right where you said. I will pack them in my suitcase.</p><p>Oh, and I passed on your message to Mom: you are [[R1.11]]. She said she does not believe you for a second.</p><p>See you in March,<br>Andre</p>',
          blanks: [
            { id: 'R1.7', o: ['that long-awaited victory', 'your promotion at the pharmacy', 'finishing your first season', 'moving into a bigger apartment'] },
            { id: 'R1.8', o: ['the huge frozen fortress', 'the curling league final', 'the pharmacy you work at', 'the new houses by the lake'] },
            { id: 'R1.9', o: ['the glowing colours overhead', 'the curling final on television', 'the trucks on the ice road', 'the fireworks over the bay'] },
            { id: 'R1.10', o: ['the footwear you wanted for spring', 'the winter hat Mom knitted for you', 'your old curling broom', 'the warm parka you left behind'] },
            { id: 'R1.11', o: ['keeping your head warm', 'eating proper meals every day', 'going to bed at a decent hour', 'calling Grandma every weekend'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following price list. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Northgate Museum of Natural History: Admission</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Ticket</th><th>Who</th><th>General admission</th><th>General admission plus Ice Age Giants exhibit</th></tr></thead><tbody>' +
            '<tr><td>Adult</td><td>18 to 64</td><td>$22</td><td>$30</td></tr>' +
            '<tr><td>Senior</td><td>65 and over</td><td>$18</td><td>$26</td></tr>' +
            '<tr><td>Student</td><td>Full-time, with valid student ID</td><td>$15</td><td>$23</td></tr>' +
            '<tr><td>Youth</td><td>6 to 17</td><td>$12</td><td>$17</td></tr>' +
            '<tr><td>Child</td><td>5 and under</td><td>Free</td><td>Free</td></tr>' +
            '<tr><td>Family</td><td>2 adults and up to 3 youth from one household</td><td>$60</td><td>$80</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Open Tuesday to Sunday, 10:00 a.m. to 5:00 p.m., and Thursdays until 9:00 p.m. Closed on Mondays, except holiday Mondays.</li><li>Last entry is one hour before closing.</li><li>Thursday evenings, 5:00 to 9:00 p.m.: general admission is free for everyone. Ice Age Giants costs $10 per person aged 6 and over during these hours.</li><li>Groups of 10 or more save 15% on general admission when they book at least 48 hours in advance.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Tomas,</p><p>I have been looking at the Northgate Museum for your mom\'s visit. I first thought of Monday the 9th, but since that is not a holiday, it won\'t work, because the museum [[R2.1]]. Saturday it is, then.</p><p>For the two of us plus Ana (9) and Mateo (14), the cheapest choice is [[R2.2]]. Your mom turned 70 in the spring, so she will need [[R2.3]]. The kids are desperate to see the mammoths, so if all five of us add Ice Age Giants on Saturday, the total comes to [[R2.4]].</p><p>Here is another idea: we could go on Thursday evening after work instead. General admission would be free, and Ice Age Giants for all five of us would cost only [[R2.5]]. We would just need to get there before eight.</p><p>Let me know which you prefer.</p><p>Leila</p>',
          blanks: [
            { id: 'R2.1', o: ['is closed on regular Mondays', 'is too crowded on Mondays', 'opens late on Mondays', 'only opens for groups that day'] },
            { id: 'R2.2', o: ['a family ticket', 'four adult tickets', 'two adult and two youth tickets', 'a group booking'] },
            { id: 'R2.3', o: ['a senior ticket', 'an adult ticket', 'no ticket at all', 'a youth ticket'] },
            { id: 'R2.4', o: ['$106', '$98', '$80', '$110'] },
            { id: 'R2.5', o: ['$50', '$40', '$80', '$0'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A group of 12 adults who book three days ahead will pay this much for general admission:', o: ['$224.40', '$264.00', '$237.60', '$198.00'] },
            { id: 'R2.7', q: 'A full-time student with ID who visits on a Sunday and sees Ice Age Giants will pay', o: ['$23.', '$15.', '$30.', '$10.'] },
            { id: 'R2.8', q: 'Leila most likely says they would need to arrive before eight because', o: ['nobody is admitted in the last hour.', 'the free admission period ends at eight.', 'Ice Age Giants is free only before eight.', 'the family ticket is not valid after eight.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Chasing the Northern Lights</h3><p><b>A.</b> For thousands of years, people in the North have looked up at shimmering curtains of green, pink and purple light. Today we know that the northern lights, or aurora borealis, begin about 150 million kilometres away, on the sun. The sun constantly releases a stream of electrically charged particles. When these particles reach Earth, the planet\'s magnetic field guides many of them toward the poles, where they collide with gases between 100 and 300 kilometres above the ground. Each collision releases a tiny burst of light. The colour depends on the gas involved: oxygen usually glows green, while nitrogen produces shades of blue and purple.</p><p><b>B.</b> Canada is one of the best places in the world to see the aurora, because much of the North lies directly beneath the ring-shaped zone where the lights are most active. Yellowknife, Whitehorse and Churchill all see displays on many nights each year. Timing matters, however. In the far North, summer nights never become fully dark, so the viewing season runs roughly from late August to mid-April. The strongest displays usually appear between ten at night and two in the morning. Experts also recommend driving at least a short distance out of town, since street lights can wash out all but the brightest shows.</p><p><b>C.</b> The lights have also become big business. Aurora tourism in the Northwest Territories has grown steadily over the past two decades, and some lodges now offer heated cabins with large windows, so that guests can watch the sky without standing outside at minus thirty. Many visitors rely on aurora forecasts, which are based on satellite measurements of activity on the sun. These forecasts are useful for planning a trip, but guides caution that they are only truly reliable an hour or two in advance, because conditions in space can change quickly.</p><p><b>D.</b> Photography has changed how people experience the aurora as well. Modern cameras, including those in many phones, can gather light for several seconds, so they often record stronger colours than the human eye can detect on a faint night. Amateur photographers have even contributed to science. Several years ago, a group of sky watchers in Alberta began sharing images of an unusual purple ribbon of light. Researchers studied the pictures and concluded that it was a different phenomenon from the ordinary aurora. The group gave it a playful name: Steve.</p>',
          questions: [
            { id: 'R3.1', q: 'Different gases produce different colours.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Predictions of a display cannot be trusted far ahead of time.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Pictures taken by non-professionals helped researchers identify something new.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'The middle of the night is generally the best time to look up.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Some visitors can enjoy the lights without being exposed to the cold.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'Tour operators usually refund guests when no lights appear.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'What causes the lights originates far beyond Earth.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Artificial lighting can make the aurora harder to see.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'A photo may show the aurora as more colourful than it appears in person.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Time to Stop Changing the Clocks?</h3><p>Twice a year, most Canadians change their clocks: forward one hour in March and back one hour in November. The practice, known as daylight saving time, spread widely in the twentieth century as a way to make better use of evening daylight. Today, however, a growing number of people are asking whether the twice-yearly switch is still worth the trouble.</p><p>Dr. Helen Fraser, a sleep researcher, is among the loudest critics. "The spring change is the real problem," she says. "Losing an hour of sleep sounds trivial, but studies consistently find more car accidents and workplace injuries in the days that follow." Fraser wants clocks to stay on standard time all year. Standard time, she explains, lines up more closely with the sun, so mornings are brighter, which helps the body wake up naturally. The effect of the spring change, she adds, is hardest on teenagers, whose internal clocks already run late, and on shift workers, who may lose far more than a single hour of rest. She points out that Saskatchewan has kept the same time all year for decades without serious difficulty.</p><p>Luc Bergeron sees it very differently. He runs a golf course and kayak rental business near Kingston, and he would like to keep the current system. "Long summer evenings are when families come out for a round or rent a kayak after work," he says. "Stay on standard time, and the sun sets an hour earlier all summer. That costs us customers." He also likes that falling back in November brightens winter mornings, when children are walking to school. "People grumble for a few days, and then they adjust. Why give up the best of both seasons?"</p><p>Some have proposed a third path: staying on daylight time permanently, so that summer evenings stay long without any switching. Fraser is firmly opposed. In parts of Canada, she notes, the sun would not rise until after 9:30 on December mornings. "That is the worst of both worlds," she says. "You keep the dark mornings and simply make them permanent."</p><p>Anika Haugen, who milks sixty cows on a farm outside Red Deer, cares less about which time wins than about ending the switch itself. Her animals expect to be milked at the same hour every day, so each change forces her to move their routine a few minutes at a time over two weeks. "Pick one and leave it alone," she says. "Honestly, I could live with permanent daylight time, even if the sleep doctors would not be happy."</p><p>Even Bergeron admits the spring change has a cost. He no longer schedules early shifts on the Monday after the clocks go forward, because too many of his staff arrived late or exhausted. "I\'m not pretending it\'s painless," he says. "I just think the summer evenings are worth one rough week." And on one point, the two agree: any change should be made together with neighbouring provinces and states. If nearby regions end up on different times, they say, everything from flight schedules to business calls could become confusing.</p>',
          questions: [
            { id: 'R4.1', q: 'Why does Dr. Fraser prefer standard time?', o: ['It is better aligned with the sun\'s cycle.', 'It reduces car accidents in November.', 'It gives teenagers more evening light.', 'It makes summer evenings last longer.'] },
            { id: 'R4.2', q: 'Fraser most likely mentions Saskatchewan in order to', o: ['show that a fixed time is workable.', 'warn that its winters are very dark.', 'prove that standard time saves lives.', 'argue that farmers prefer one time.'] },
            { id: 'R4.3', q: 'Bergeron is concerned that year-round standard time would', o: ['reduce his after-work trade in summer.', 'make children walk to school in the dark.', 'force him to close the course in November.', 'confuse customers who book kayaks online.'] },
            { id: 'R4.4', q: 'Which statement would Haugen most likely agree with?', o: ['Consistency counts more than the option chosen.', 'Standard time is clearly the healthier choice for all.', 'Farmers should be exempt from any clock changes.', 'The spring change is harmless for farm animals.'] },
            { id: 'R4.5', q: 'What does Bergeron\'s Monday scheduling decision suggest?', o: ['He realizes his crew pays a price for the lost hour.', 'He expects standard time to bring him more customers.', 'He believes his staff should start earlier on Mondays.', 'He plans to close the business every Monday morning.'] }
          ],
          reply: '<h3>Reader comment</h3><p>As a school bus driver, I read this article with great interest. Mr. Bergeron is right that families enjoy [[R4.6]], but I side with Dr. Fraser that [[R4.7]] in March is genuinely dangerous. Every year, in the week after the spring change, I see more drowsy drivers making mistakes on the road, and the teenagers I drive are half asleep until lunch.</p><p>That said, Ms. Haugen\'s willingness to accept the third path worries me. I could never support [[R4.8]], because I would be collecting children in pitch darkness until well after nine on winter mornings. That is why I favour [[R4.9]], which keeps mornings brighter and has worked for years in at least one province. Still, I share the view of Fraser and Bergeron that [[R4.10]], or we will all be checking which time zone our appointments are in.</p>',
          blanks: [
            { id: 'R4.6', o: ['a bright sky well past supper', 'brighter mornings in winter', 'early shifts on Mondays', 'golf games in November'] },
            { id: 'R4.7', o: ['cutting a night short', 'falling back an hour', 'having brighter mornings', 'switching to standard time'] },
            { id: 'R4.8', o: ['keeping summer hours year-round', 'standard time in every season', 'the current pair of switches', 'a fixed schedule for farms only'] },
            { id: 'R4.9', o: ['the November setting for all twelve months', 'the March setting for all twelve months', 'the twice-yearly switch we have now', 'whichever option farmers prefer most'] },
            { id: 'R4.10', o: ['nearby jurisdictions must act in unison', 'business owners should make the final call', 'one city should test the idea first', 'farmers deserve a special exemption'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You recently flew home from a trip, but your suitcase did not arrive with you. The airline promised to deliver it within 24 hours. It has now been five days, and you still have not received it or any update.</p><p>Write an email to the airline\'s customer service department. In your email, do the following:</p><ul><li>Describe your flight and your suitcase.</li><li>Explain how the delay has affected you.</li><li>Say what you want the airline to do.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your local community centre has received funding for one major addition and is asking residents which one it should build. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a new indoor swimming pool, with lessons and open swim times for all ages.' },
            { key: 'B', label: 'Option B', text: 'Build a new library wing, with study rooms, public computers and a children\'s reading area.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and what you like to do during it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to save money, but by the end of every month she has nothing left. Give her advice on how she can save money.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you felt proud of yourself. What did you do, and why did it make you feel proud?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: MOVING },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: MOVING },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is planning a one-week summer vacation. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Pacific coast cruise', image: CRUISE, facts: ['7 days at sea and in ports', 'Cost: $3,200 for the family', 'Meals and shows included', 'Fly to Vancouver to board'] },
            { key: 'B', title: 'Road trip through the Rockies', image: ROADTRIP, facts: ['7 days on the road', 'Cost: $2,100 for gas, motels and food', 'Stop wherever you like', 'About 5 hours of driving a day'] }
          ],
          third: { key: 'C', title: 'Staycation at home', image: STAYCATION, facts: ['7 days at home', 'Cost: $600 for day trips', 'No travel time', 'Local beaches, parks and museums'] },
          persuade: 'Your family member would rather have a staycation at home. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Two months ago, you agreed to look after your neighbour\'s dog for a week while she is away. Yesterday, your closest friend asked you to be in her wedding party. The wedding is in another city during that same week.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you can no longer look after her dog.</p><p><b>Option B:</b> Talk to your friend. Explain why you cannot be in her wedding party.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Should high school students be required to wear school uniforms? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a sports store and see this unusual backpack. Call your friend, who is going on a long hiking trip next month. Describe the backpack and explain whether you think your friend should buy it.', image: BACKPACK }
      ]
    }
  });
})();
