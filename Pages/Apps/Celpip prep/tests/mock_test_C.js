/* Rowe CELPIP Mock Exam: Test C content.
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
  function suitcase(x, y, c) {
    return '<rect x="' + x + '" y="' + (y - 26) + '" width="18" height="26" rx="3" fill="' + c + '"/><line x1="' + (x + 9) + '" y1="' + (y - 26) + '" x2="' + (x + 9) + '" y2="' + (y - 40) + '" stroke="#555" stroke-width="2"/>';
  }

  var AIRPORT = (function () {
    var p = '';
    p += '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A busy airport departure area with a flight delay">';
    p += '<rect width="640" height="400" fill="#e6eaf0"/>';
    p += '<rect y="250" width="640" height="150" fill="#c3c7cd"/>';
    /* big window with a plane outside */
    p += '<rect x="250" y="25" width="380" height="150" fill="#a9d4f0" stroke="#7b8794" stroke-width="5"/>';
    p += '<g stroke="#7b8794" stroke-width="4"><line x1="377" y1="25" x2="377" y2="175"/><line x1="503" y1="25" x2="503" y2="175"/></g>';
    p += '<rect x="252" y="150" width="376" height="23" fill="#8a9099"/>';
    p += '<ellipse cx="440" cy="130" rx="100" ry="14" fill="#ffffff"/><polygon points="340,130 325,95 355,118" fill="#d0462f"/><polygon points="430,132 395,160 420,160 460,134" fill="#dfe4ea"/>';
    p += '<g fill="#5a6b7c"><circle cx="470" cy="127" r="3"/><circle cx="485" cy="127" r="3"/><circle cx="500" cy="127" r="3"/><circle cx="515" cy="127" r="3"/></g>';
    /* departures board */
    p += '<rect x="18" y="20" width="215" height="112" rx="4" fill="#1f2a36"/>';
    p += '<text x="125" y="40" font-size="13" text-anchor="middle" fill="#f6d55c" font-family="sans-serif">DEPARTURES</text>';
    p += '<g font-size="11" font-family="sans-serif" fill="#ffffff">' +
      '<text x="28" y="65">TORONTO</text><text x="118" y="65">10:15</text>' +
      '<text x="28" y="88">CALGARY</text><text x="118" y="88">10:40</text>' +
      '<text x="28" y="111">REGINA</text><text x="118" y="111">11:05</text></g>';
    p += '<g font-size="11" font-family="sans-serif"><text x="158" y="65" fill="#ff5a4a">DELAYED</text><text x="158" y="88" fill="#6fdc8c">ON TIME</text><text x="158" y="111" fill="#6fdc8c">ON TIME</text></g>';
    /* gate sign */
    p += '<rect x="50" y="150" width="100" height="26" rx="3" fill="#2e5d9a"/><text x="100" y="168" font-size="13" text-anchor="middle" fill="#fff" font-family="sans-serif">GATE 12</text>';
    /* row of seats with two travellers */
    p += '<rect x="255" y="268" width="170" height="10" fill="#4a5662"/><g fill="#5f6f80"><rect x="258" y="240" width="38" height="28" rx="4"/><rect x="300" y="240" width="38" height="28" rx="4"/><rect x="342" y="240" width="38" height="28" rx="4"/><rect x="384" y="240" width="38" height="28" rx="4"/></g><rect x="268" y="278" width="5" height="22" fill="#4a5662"/><rect x="405" y="278" width="5" height="22" fill="#4a5662"/>';
    p += person(286, 290, { shirt: '#8e44ad', sit: true, skin: '#f0c9a6', hair: '#c49a42', arms: 'right' });
    p += '<rect x="302" y="248" width="14" height="11" fill="#f4f1ea" stroke="#999"/>';
    p += person(362, 290, { shirt: '#2f8f83', sit: true, skin: '#8d5a3b', hair: '#1d1410' });
    p += '<g stroke="#1d1410" stroke-width="1.5"><line x1="357" y1="245" x2="361" y2="245"/><line x1="364" y1="245" x2="368" y2="245"/></g>';
    p += '<text x="374" y="225" font-size="13" fill="#555" font-family="sans-serif">z z z</text>';
    /* traveller on the phone */
    p += person(450, 300, { shirt: '#c0392b', skin: '#c98c64', hair: '#2a1b12', arms: 'up' });
    p += suitcase(462, 300, '#34495e');
    /* cafe */
    p += '<rect x="510" y="186" width="120" height="22" rx="3" fill="#7a4b2a"/><text x="570" y="202" font-size="13" text-anchor="middle" fill="#fff" font-family="sans-serif">CAFE</text>';
    p += person(585, 262, { shirt: '#ffffff', skin: '#e3b28b', hair: '#3b2a20', arms: 'left' });
    p += '<rect x="520" y="235" width="110" height="60" fill="#a8743e"/><rect x="520" y="230" width="110" height="7" fill="#7a4b2a"/>';
    p += '<rect x="545" y="219" width="8" height="11" fill="#fff" stroke="#999"/>';
    p += person(500, 318, { shirt: '#16a085', skin: '#7a4b31', hair: '#120c08', arms: 'right' });
    /* traveller pulling a suitcase in the background */
    p += person(185, 285, { shirt: '#d35400', skin: '#e0b48f', hair: '#555', arms: 'right', s: .9 });
    p += suitcase(203, 285, '#7f8c8d');
    /* moving walkway */
    p += '<polygon points="10,335 230,335 250,385 10,385" fill="#58626d"/><rect x="10" y="325" width="225" height="8" rx="3" fill="#2c3e50"/>';
    p += '<g fill="#f6d55c"><polygon points="40,355 55,360 40,365"/><polygon points="90,355 105,360 90,365"/><polygon points="140,355 155,360 140,365"/><polygon points="190,355 205,360 190,365"/></g>';
    p += '<text x="120" y="320" font-size="11" text-anchor="middle" fill="#2c3e50" font-family="sans-serif">MOVING WALKWAY</text>';
    /* child running toward the walkway, parent reaching after */
    p += person(282, 382, { shirt: '#f1c40f', skin: '#a9714b', hair: '#120c08', arms: 'left', s: .7 });
    p += '<g fill="#a5713f"><circle cx="318" cy="380" r="6"/><circle cx="314" cy="373" r="2.5"/><circle cx="322" cy="373" r="2.5"/></g>';
    p += person(370, 390, { shirt: '#3d7cc9', skin: '#a9714b', hair: '#120c08', arms: 'left' });
    p += suitcase(388, 390, '#9b59b6');
    /* cleaner with wet floor sign */
    p += person(590, 388, { shirt: '#7f8c8d', skin: '#f0c9a6', hair: '#d8d8d8', arms: 'left' });
    p += '<line x1="566" y1="352" x2="556" y2="392" stroke="#7a5233" stroke-width="3"/><rect x="546" y="388" width="20" height="6" fill="#bdc3c7"/>';
    p += '<polygon points="510,392 522,350 534,392" fill="#f1c40f"/><text x="522" y="383" font-size="7" text-anchor="middle" fill="#333" font-family="sans-serif">WET</text>';
    p += '</svg>';
    return p;
  })();

  var RESTAURANT = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#3b2f3f"/><rect y="78" width="200" height="42" fill="#5a4636"/><ellipse cx="100" cy="80" rx="70" ry="16" fill="#f4f1ea"/><rect x="96" y="56" width="8" height="18" fill="#fdf3d6"/><path d="M100 46 q5 6 0 10 q-5 -4 0 -10z" fill="#f6d55c"/><g fill="#ffffff" stroke="#bbb"><ellipse cx="62" cy="80" rx="13" ry="5"/><ellipse cx="138" cy="80" rx="13" ry="5"/></g><g fill="#c0392b"><rect x="76" y="66" width="5" height="12" rx="2"/><rect x="119" y="66" width="5" height="12" rx="2"/></g><text x="100" y="24" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#f6d55c">RESTAURANT</text></svg>';
  var HOMEPARTY = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#d8eefa"/><rect y="98" width="200" height="22" fill="#79b86a"/><rect x="50" y="52" width="100" height="56" fill="#f4e3c3"/><polygon points="40,54 100,16 160,54" fill="#b5523b"/><rect x="88" y="78" width="22" height="30" fill="#7a4b2a"/><rect x="60" y="64" width="18" height="16" fill="#a9d4f0"/><rect x="122" y="64" width="18" height="16" fill="#a9d4f0"/><g stroke="#666" stroke-width="1"><line x1="28" y1="60" x2="40" y2="100"/><line x1="18" y1="48" x2="40" y2="100"/><line x1="172" y1="58" x2="160" y2="100"/></g><circle cx="28" cy="52" r="10" fill="#e74c3c"/><circle cx="16" cy="40" r="9" fill="#f1c40f"/><circle cx="174" cy="50" r="10" fill="#3498db"/><text x="100" y="12" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#2c3e50">PARTY AT HOME</text></svg>';
  var BOWLING = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" fill="#2c3e50"/><polygon points="70,120 130,120 115,40 85,40" fill="#d9b382"/><g fill="#ffffff"><ellipse cx="100" cy="46" rx="4" ry="8"/><ellipse cx="92" cy="50" rx="4" ry="8"/><ellipse cx="108" cy="50" rx="4" ry="8"/><ellipse cx="86" cy="54" rx="4" ry="8"/><ellipse cx="114" cy="54" rx="4" ry="8"/></g><g fill="#c0392b"><rect x="97" y="43" width="6" height="2"/><rect x="89" y="47" width="6" height="2"/><rect x="105" y="47" width="6" height="2"/></g><circle cx="100" cy="102" r="12" fill="#2980b9"/><g fill="#1b4f72"><circle cx="96" cy="98" r="2"/><circle cx="103" cy="97" r="2"/><circle cx="100" cy="103" r="2"/></g><text x="100" y="24" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#f6d55c">BOWLING</text></svg>';

  var ODDCHAIR = '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An unusual armchair in a used furniture store">' +
    '<rect width="640" height="400" fill="#f1ece4"/><rect y="320" width="640" height="80" fill="#b9a68f"/>' +
    '<rect x="455" y="30" width="165" height="56" rx="6" fill="#fff" stroke="#c9bfae"/><text x="537" y="54" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#7a4b2a">USED</text><text x="537" y="74" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#7a4b2a">FURNITURE</text>' +
    /* umbrella on a pole */
    '<line x1="205" y1="215" x2="175" y2="65" stroke="#555" stroke-width="5"/><path d="M80 85 Q170 0 270 60 Q225 52 175 64 Q125 62 80 85z" fill="#16a085"/>' +
    /* backrest with speakers */
    '<rect x="215" y="95" width="210" height="140" rx="22" fill="#c0392b"/>' +
    '<circle cx="255" cy="130" r="20" fill="#2c3e50"/><circle cx="255" cy="130" r="9" fill="#7f8c8d"/><circle cx="385" cy="130" r="20" fill="#2c3e50"/><circle cx="385" cy="130" r="9" fill="#7f8c8d"/>' +
    '<g stroke="#2c3e50" stroke-width="2" fill="none"><path d="M226 116 q-8 14 0 28"/><path d="M219 110 q-12 20 0 40"/><path d="M414 116 q8 14 0 28"/><path d="M421 110 q12 20 0 40"/></g>' +
    /* seat and arms */
    '<rect x="215" y="225" width="210" height="45" rx="10" fill="#a93226"/>' +
    '<rect x="190" y="190" width="38" height="80" rx="10" fill="#922b21"/><rect x="412" y="190" width="38" height="80" rx="10" fill="#922b21"/>' +
    /* cup holder on right arm */
    '<rect x="450" y="200" width="34" height="14" rx="4" fill="#7f8c8d"/><rect x="456" y="178" width="20" height="24" rx="3" fill="#f4f1ea" stroke="#999"/>' +
    /* footrest sticking out */
    '<line x1="300" y1="270" x2="320" y2="300" stroke="#555" stroke-width="5"/><rect x="290" y="298" width="110" height="14" rx="5" fill="#922b21"/>' +
    /* legs with wheels */
    '<g stroke="#555" stroke-width="6"><line x1="225" y1="270" x2="225" y2="318"/><line x1="415" y1="270" x2="415" y2="318"/></g>' +
    '<g fill="#222"><circle cx="225" cy="326" r="11"/><circle cx="415" cy="326" r="11"/></g><g fill="#999"><circle cx="225" cy="326" r="4"/><circle cx="415" cy="326" r="4"/></g>' +
    /* price tag */
    '<line x1="190" y1="240" x2="140" y2="262" stroke="#666" stroke-width="1.5"/><rect x="70" y="250" width="80" height="40" rx="5" fill="#f6d55c"/><text x="110" y="277" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#333">$249</text>' +
    '</svg>';

  window.MOCK_TESTS.push({
    id: 'C',
    title: 'Mock Test C',
    note: 'Original practice content in the CELPIP-General format. Pitched slightly above the real test (about CLB 8 to 11).',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { DEV: { name: 'Dev', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#2e86c1', style: 'short' }, ANITA: { name: 'Anita', g: 'f', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#27ae60', style: 'curly' } },
        segments: [{
          lines: [
            ['DEV', 'Morning, Anita. Sorry to bother you, but do you still have that tall ladder? I want to clear the leaves out of my gutters before the rain on Thursday.'],
            ['ANITA', 'Sure, it\'s in the shed. Just so you know, one of the rubber feet came off when my husband used it last weekend, so it wobbles a bit.'],
            ['DEV', 'Ah, thanks for the warning. I\'ve got a spare one in my toolbox, I think. I\'ll put it on before I climb anything.'],
            ['ANITA', 'Perfect. Keep it as long as you need, just not past Saturday.']
          ],
          questions: [
            { id: 'LP.1', q: 'What will Dev probably do before using the ladder?', o: ['Fix the problem with its foot', 'Wait until the rain on Thursday', 'Ask Anita\'s husband to hold it', 'Clean the leaves out of the shed'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { KEMI: { name: 'Kemi', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#8e44ad', style: 'bun' }, JONAH: { name: 'Jonah', g: 'm', skin: '#e3b28b', hair: '#b5651d', shirt: '#27ae60', style: 'short' } },
          segments: [
            {
              lines: [
                ['JONAH', 'Morning! I brought coffee. Wait, why do you look like that?'],
                ['KEMI', 'Okay, don\'t panic, but we have a problem. Look at the truck.'],
                ['JONAH', 'Huh. That\'s... smaller than I pictured.'],
                ['KEMI', 'That\'s because it\'s not the one I booked. I reserved the twenty-foot truck online two weeks ago, and when I showed up this morning, the guy at the counter said someone else had driven it away yesterday. This ten-footer was all they had left.'],
                ['JONAH', 'You\'re kidding. Did they at least do something about it?'],
                ['KEMI', 'They knocked thirty percent off the hundred-dollar rate, which is nice, I guess. But it doesn\'t change the fact that the couch, the bed and the dining table aren\'t all going to fit in there, never mind forty-odd boxes.'],
                ['JONAH', 'Yeah, the couch alone will eat up half of it. Can\'t you just push the move to tomorrow and get a bigger one then?'],
                ['KEMI', 'I wish. The new tenants are moving in here tonight, and the landlord\'s coming at four to do the final inspection. Whatever\'s still here at four is my problem.'],
                ['JONAH', 'And it\'s already half past nine. Okay. How far is the new place again?'],
                ['KEMI', 'Twenty minutes, if the bridge isn\'t backed up.']
              ],
              questions: [
                { id: 'L1.1', q: 'What has gone wrong for Kemi?', o: ['The rental company did not honour her reservation.', 'The rental company charged her for a larger truck.', 'The truck she booked online broke down overnight.', 'She reserved a truck that was too small for her things.'] },
                { id: 'L1.2', q: 'How much will Kemi pay for the truck?', o: ['$70', '$100', '$30', '$130'] },
                { id: 'L1.3', q: 'Why can the move not be put off until tomorrow?', o: ['Someone else is moving into the unit tonight.', 'The rental truck has to be back by four.', 'Jonah is only available for one day.', 'The landlord will charge her for an extra day.'] }
              ]
            },
            {
              lines: [
                ['JONAH', 'What if we just do two runs? Load half, drive over, come back, load the rest.'],
                ['KEMI', 'I thought about it. But I\'ve only got the truck for five hours, and after that it\'s twenty-five dollars for every extra hour. And carrying that couch down three flights of stairs once is bad enough.'],
                ['JONAH', 'Okay, fair. So we need a second vehicle. My cousin Theo has a pickup. If he took the bed frame and the table, the couch and most of the boxes would probably fit in yours.'],
                ['KEMI', 'On a Saturday morning, though? I barely know him.'],
                ['JONAH', 'Oh, he\'ll say yes. I spent two whole weekends helping him rebuild his deck last summer. He\'s been looking for a way to pay me back.'],
                ['KEMI', 'Okay, that would be amazing. What about the books? There are maybe seven boxes, and they weigh a ton, but they\'re small.'],
                ['JONAH', 'Throw those in your car. The back seat and the trunk can take seven easily, and then they\'re not using up truck space.'],
                ['KEMI', 'Good thinking. Can you text Theo? He\'ll answer you faster than me.'],
                ['JONAH', 'Already typing.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Kemi reject the idea of two trips?', o: ['It would cost more and mean moving the couch twice.', 'The new apartment is too far away to drive there twice.', 'Jonah has to leave before a second trip is finished.', 'The rental company does not allow any extra hours.'] },
                { id: 'L1.5', q: 'Why is Jonah confident that Theo will agree?', o: ['Theo owes him for past help.', 'Theo has been promised payment.', 'Theo wants to see the new place.', 'Theo is free all Saturday morning.'] },
                { id: 'L1.6', q: 'What does Kemi decide about the boxes of books?', o: ['To take them separately in her car', 'To pack them into the pickup with the bed', 'To leave them behind until another day', 'To load them first because they are heavy'] }
              ]
            },
            {
              lines: [
                ['JONAH', 'Okay, Theo\'s in. The catch is he can\'t get here until eleven. He\'s dropping his daughter off at swimming first. So maybe we just wait for him? Then everybody loads up and drives over together.'],
                ['KEMI', 'Hmm, I\'d rather not. If we wait, that\'s three of us plus two vehicles all fighting for the same narrow hallway and one elevator. Let\'s spread it out instead.'],
                ['KEMI', 'Here\'s my plan. You and I load the couch and the boxes into the rental right now. I drive it over, and my sister meets me there to help unload. You stay here, and when Theo shows up, the two of you do the bed and the table.'],
                ['JONAH', 'Makes sense. And the books go in your car last, once you\'re back.'],
                ['KEMI', 'Exactly. Then I\'ll do a quick clean before the inspection. And Jonah, lunch is on me. You and Theo both.'],
                ['JONAH', 'I\'m holding you to that.']
              ],
              questions: [
                { id: 'L1.7', q: 'What will Jonah do while Kemi is driving the rental truck?', o: ['Wait for Theo and load furniture with him', 'Drive the books over in Kemi\'s car', 'Clean the apartment for the inspection', 'Help Kemi\'s sister unload the couch'] },
                { id: 'L1.8', q: 'Why does Kemi reject Jonah\'s idea of waiting for Theo?', o: ['Everyone loading at once would be too crowded.', 'Her sister cannot stay at the new place for long.', 'Theo might arrive later than he has promised.', 'The landlord wants the furniture out by noon.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { RECEP: { name: 'Receptionist', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#1abc9c', style: 'long' }, OMAR: { name: 'Omar', g: 'm', skin: '#b07d56', hair: '#1d1410', shirt: '#34495e', style: 'short' } },
          segments: [{
            lines: [
              ['RECEP', 'Good morning, Northgate Physiotherapy, Lina speaking.'],
              ['OMAR', 'Hi, I\'d like to book an appointment, please. I hurt my shoulder playing volleyball about a week ago, and it\'s not getting any better.'],
              ['RECEP', 'Sorry to hear that. Have you been to us before?'],
              ['OMAR', 'No, never.'],
              ['RECEP', 'Okay, then you\'d start with an initial assessment. That\'s an hour long and it\'s a hundred and ten dollars. After that, follow-ups are thirty minutes at eighty-five.'],
              ['OMAR', 'I\'m covered through my wife\'s plan at work, Coastline Benefits. Can you bill them directly, or do I pay and send in the receipt?'],
              ['RECEP', 'We bill Coastline directly, so that\'s easy. One thing, though: a lot of their plans won\'t pay for physio unless a doctor has referred you. It\'s worth checking before you come in, or you could end up paying the whole amount yourself.'],
              ['OMAR', 'Oh, good to know. I actually saw my doctor on Monday, and she gave me a note saying I should try physio. I just didn\'t think I\'d need it.'],
              ['RECEP', 'Hang on to that, then. Now, the earliest openings I have are Thursday at eight a.m. or Friday at two-fifteen.'],
              ['OMAR', 'Friday afternoon\'s tough. I\'m downtown at the office until five. Thursday at eight works, though. My manager\'s fine with me coming in a bit late now and then.'],
              ['RECEP', 'Great, you\'re booked for Thursday at eight with Michel. Could you get here about fifteen minutes early? There are a few forms to fill out. And wear a T-shirt or something loose so he can see how the shoulder moves.'],
              ['OMAR', 'Will do. Thanks for your help.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Omar calling the clinic?', o: ['To arrange his first visit for an injury', 'To move an appointment he already has', 'To ask about a bill from a recent visit', 'To get a referral from a clinic doctor'] },
              { id: 'L2.2', q: 'How much will Omar\'s first appointment cost before insurance?', o: ['$110', '$85', '$195', '$60'] },
              { id: 'L2.3', q: 'Why does the receptionist mention a referral?', o: ['His plan might not pay without one.', 'The clinic only treats referred patients.', 'His doctor has to approve the times.', 'Without one, the first visit is shorter.'] },
              { id: 'L2.4', q: 'Why is Thursday more convenient for Omar?', o: ['He is allowed to start work later.', 'He does not work on Thursdays.', 'His wife can drive him that day.', 'Michel only works on Thursdays.'] },
              { id: 'L2.5', q: 'What will Omar most likely bring to the clinic?', o: ['The note from his doctor', 'A cheque for the full fee', 'A copy of his X-ray results', 'A form from his manager'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#7d3c98', style: 'bun' }, GORDON: { name: 'Gordon Pike', g: 'm', skin: '#f0c9a6', hair: '#d8d8d8', shirt: '#1f618d', style: 'bald' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today spent twenty-six years as a lighthouse keeper on the South Shore, and these days he takes visitors out to those same lighthouses. Gordon Pike, welcome.'],
              ['GORDON', 'Thanks. Nice to be somewhere that doesn\'t move under my feet.'],
              ['HOST', 'How does someone end up as a lighthouse keeper?'],
              ['GORDON', 'In my case, by accident. I was fishing in my twenties and I wrecked my knee on deck. The doctor said no more boats. A buddy mentioned the coast guard needed an assistant keeper, so I applied, figuring it\'d tide me over for a year or so.'],
              ['HOST', 'And a year turned into twenty-six. What did a typical day involve?'],
              ['GORDON', 'Everybody pictures you sitting there gazing at the sea. Truth is, it was mostly upkeep. Polishing the lens, scraping and painting, keeping the generator alive. And every three hours, day and night, you sent the weather to the forecasters. That part never stopped.'],
              ['HOST', 'It sounds isolating.'],
              ['GORDON', 'Less than you\'d expect. My wife was out there with me most of those years, and the supply boat came every two weeks. What really got to you was the winter storms. Sometimes you couldn\'t get off the island for a month.'],
              ['HOST', 'Then the lights were automated.'],
              ['GORDON', 'Ours was, in ninety-eight. I won\'t pretend it didn\'t sting. But I can\'t argue with it, either. Those automatic lights are very dependable.'],
              ['HOST', 'So where did the tours come from?'],
              ['GORDON', 'Then one summer, long after the light went automatic, a carload of tourists knocked on my door asking about the old tower. I talked their ears off for two hours. Afterwards my daughter said, Dad, people would pay to hear that. So in 2015 we bought a boat and started with four trips a week.'],
              ['HOST', 'And now?'],
              ['GORDON', 'Two boats, three lighthouses per trip, about three hours out and back, June through September. One rule: if the swell is over two metres, we don\'t go. So call us the morning of your trip before you drive down.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Gordon come to work as a keeper?', o: ['An injury ended his career at sea.', 'His father had been a keeper before him.', 'He wanted to live somewhere quiet.', 'The coast guard paid more than fishing.'] },
              { id: 'L3.2', q: 'What does Gordon suggest about people\'s idea of a keeper\'s work?', o: ['It makes the job seem easier than it was.', 'It is accurate about the weather reports.', 'It overstates the amount of upkeep.', 'It ignores the danger of fishing boats.'] },
              { id: 'L3.3', q: 'According to Gordon, what was the most difficult part of the job?', o: ['Being stuck there in winter storms', 'Living far away from his wife', 'Waiting two weeks for the supply boat', 'Sending weather reports in the night'] },
              { id: 'L3.4', q: 'How did Gordon feel about the automation of his lighthouse?', o: ['Hurt, but accepting of the decision', 'Relieved to finally be able to retire', 'Angry that the coast guard had lied', 'Worried that the new light would fail'] },
              { id: 'L3.5', q: 'Who first came up with the idea of charging for tours?', o: ['His daughter', 'His wife', 'A group of tourists', 'A friend from the coast guard'] },
              { id: 'L3.6', q: 'Why should people phone on the morning of a tour?', o: ['Rough water may cancel the trip.', 'Only four trips run each week.', 'The departure time often changes.', 'They must confirm the boat they want.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Households in the Town of Riverbend will soon be able to set their food scraps out at the curb, as the town prepares to launch its first compost collection program in the first week of May.'],
              ['NEWS', 'Every home will receive a green cart and a small kitchen container at no charge. Deliveries begin in April, and carts will be emptied weekly, on the same day as household garbage.'],
              ['NEWS', 'There is a trade-off, however. Garbage pickup will drop from every week to every second week. Town staff say food waste makes up roughly forty percent of what residents currently throw out, so most families should find they have plenty of room.'],
              ['NEWS', 'Fruit and vegetable peels, coffee grounds, eggshells, meat, bones and paper towels can all go in the cart. Plastic bags, including those labelled compostable, cannot, because they wrap around the equipment at the processing site.'],
              ['NEWS', 'Public works manager Denise Arsenault estimates the program will cost about three hundred and twenty thousand dollars a year. She says a large share of that will be recovered because the regional landfill charges the town by the tonne, and far less will be going there.'],
              ['NEWS', 'Some residents have raised concerns about odours and raccoons. The town recommends keeping meat scraps in the freezer until collection day and rinsing carts with water and baking soda. Information sessions will be held at the public library on April eighth and fifteenth.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A new service for collecting food waste', 'A plan to close the regional landfill', 'A new bylaw on raccoon control', 'A rise in garbage collection fees'] },
              { id: 'L4.2', q: 'What change to household garbage pickup is mentioned?', o: ['It will happen half as often.', 'It will move to a different day.', 'It will stop during the winter.', 'It will require new green carts.'] },
              { id: 'L4.3', q: 'Why will compostable plastic bags be refused?', o: ['They cause trouble for the machinery.', 'They take too long to break down.', 'They make the carts smell worse.', 'They attract raccoons and other animals.'] },
              { id: 'L4.4', q: 'What can be inferred about the program\'s cost?', o: ['Lower landfill fees will offset part of it.', 'Residents will pay for it through taxes.', 'It will be covered by selling compost.', 'The green carts make up most of it.'] },
              { id: 'L4.5', q: 'What does the town advise residents to do with meat scraps?', o: ['Keep them frozen until pickup day', 'Put them in the garbage bin instead', 'Rinse them with baking soda first', 'Wrap them in compostable bags'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Mom: next steps', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { RUTH: { name: 'Ruth', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#2e4053', style: 'bun' }, DANIEL: { name: 'Daniel', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#b03a2e', style: 'short' }, LEILA: { name: 'Leila', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#16a085', style: 'curly' } },
          segments: [{
            lines: [
              ['RUTH', 'Thanks for coming over, both of you. So, Mom called me again on Sunday, and I think she\'s serious this time. She says the stairs and the yard are too much now, and she wants to sell before winter.'],
              ['DANIEL', 'Honestly, I\'m relieved. Ever since she slipped on the back steps in March, I hold my breath every time she goes down to the basement to do laundry.'],
              ['LEILA', 'I get that, but I don\'t want us to rush her. She\'s been on Birch Street for forty-one years. Her whole social life is within a few blocks: the garden club, her walking group, the neighbours.'],
              ['RUTH', 'Which is exactly why I think a condo nearby makes sense. There\'s a new building on Elm Avenue, two blocks from the house. One-bedrooms are going for about three hundred and eighty thousand, and the house should bring in at least six hundred.'],
              ['DANIEL', 'Have you seen the condo fees, though? Five hundred and fifty a month. And she\'d still be on her own if her health changes.'],
              ['LEILA', 'So what\'s your alternative?'],
              ['DANIEL', 'There\'s a retirement residence ten minutes from my place in Bedford. Meals included, a nurse on site, outings every week. A one-bedroom suite runs about four thousand a month.'],
              ['LEILA', 'Four thousand a month adds up fast. And she\'d be forty minutes from everyone she knows. Daniel, she still drives, she cooks every single day. She\'s not ready for that.'],
              ['RUTH', 'I\'m with Leila on that one. Maybe in five or ten years. Not now.'],
              ['DANIEL', 'Okay, fair. But if it\'s the condo, I want it on the ground floor or near the elevator. And I want one of us checking in on her every week, no exceptions.'],
              ['LEILA', 'That\'s reasonable. I\'m ten minutes away, so I can take Wednesdays.'],
              ['RUTH', 'And I\'ll do weekends. Daniel, would you handle the sale? You did so well with your own house.'],
              ['DANIEL', 'Sure, I\'ll call an agent. But hang on. We\'ve spent twenty minutes deciding her life for her. Shouldn\'t she be in this conversation?'],
              ['LEILA', 'You\'re right. Let\'s all go over for dinner on Sunday, lay out both options, and let her choose.'],
              ['RUTH', 'Agreed. I\'ll call her tonight.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To consider where their mother should live', 'To plan a dinner for their mother\'s birthday', 'To decide which sibling will buy the house', 'To arrange repairs on their mother\'s house'] },
              { id: 'L5.2', q: 'Why is Daniel relieved that his mother wants to move?', o: ['He is afraid she could fall at home.', 'He wants to buy her house himself.', 'He thinks the yard costs too much to maintain.', 'He would like her to move in with him.'] },
              { id: 'L5.3', q: 'Why does Leila not want to rush the decision?', o: ['Her mother\'s friends all live nearby.', 'She expects house prices to rise soon.', 'She has not seen the condo building yet.', 'Her mother has already refused to move.'] },
              { id: 'L5.4', q: 'According to Ruth, how much is the house expected to sell for?', o: ['At least $600,000', 'At most $380,000', 'Just under $550,000', 'Around $400,000'] },
              { id: 'L5.5', q: 'What is Daniel\'s concern about the condo?', o: ['The monthly costs are high.', 'It is too far from her friends.', 'The building has no elevator.', 'It is too close to busy roads.'] },
              { id: 'L5.6', q: 'Why do Ruth and Leila reject the retirement residence for now?', o: ['Their mother is still quite independent.', 'It does not have a nurse working on site.', 'It is too close to Daniel\'s house.', 'There is a long waiting list for suites.'] },
              { id: 'L5.7', q: 'What will Leila\'s role be if their mother moves to the condo?', o: ['Visiting her once a week', 'Visiting her on weekends', 'Helping to sell the house', 'Driving her to the garden club'] },
              { id: 'L5.8', q: 'What do the siblings finally agree on?', o: ['Their mother should make the choice.', 'Daniel will tour the residence first.', 'An agent should value the house now.', 'They will make an offer on the condo.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should tuition be free?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#d6a07a', hair: '#4a3020', shirt: '#943126', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Every fall, thousands of Canadian students begin college or university knowing they may graduate with tens of thousands of dollars in debt. Now some student groups are calling for tuition to be eliminated altogether, an idea that has divided educators and economists.'],
              ['NARR', 'Marisol Duarte, who leads a national student association, says the price tag discourages capable young people before they even apply. In her experience, students from low-income families rarely lack ability. What they lack is the confidence to borrow money they are not sure they can repay.'],
              ['NARR', 'Duarte also notes that graduates with large loans tend to put off buying a home or starting a family. Because university graduates go on to pay more in income tax over their careers, she argues, the public already benefits from their education and should share the cost from the start.'],
              ['NARR', 'Economist Graham Whitfield sees it differently. He points out that students from higher-income households are more likely to attend university in the first place, so making tuition free for everyone would direct much of the money to families who could already afford it. The cost, he says, would run into the billions.'],
              ['NARR', 'Whitfield would rather see larger grants aimed at students in financial need, combined with tutoring and mentoring that begin in high school or earlier. By the time students fill out university applications, he says, many of the gaps between rich and poor are already in place.'],
              ['NARR', 'He also cautions that if governments covered the full cost, schools might have to cap enrolment or cut programs to stay within budget.'],
              ['NARR', 'On one point, both agree: the current mix of loans, grants and bursaries is confusing, and families need much clearer information about the help that already exists.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether students should pay tuition at all', 'How universities decide which students to admit', 'Why the cost of student housing keeps rising', 'How student loans are repaid after graduation'] },
              { id: 'L6.2', q: 'According to Duarte, why do some capable students not apply?', o: ['They are afraid of taking on debt.', 'Their grades are not high enough.', 'They would rather start working.', 'They cannot find suitable programs.'] },
              { id: 'L6.3', q: 'Why does Duarte believe the public should share the cost?', o: ['Graduates later contribute more in taxes.', 'Universities already have more money than they need.', 'Students cannot find part-time jobs.', 'Other countries already offer free tuition.'] },
              { id: 'L6.4', q: 'What is Whitfield\'s main objection to free tuition for all?', o: ['Better-off families would gain the most.', 'Low-income students would gain the most.', 'It would lower the quality of high schools.', 'It would cost less than the current system.'] },
              { id: 'L6.5', q: 'Why does Whitfield support help that starts earlier?', o: ['Inequality appears well before students apply.', 'High school students need tuition grants.', 'Universities prefer students who have tutors.', 'Mentoring is cheaper than paying for loans.'] },
              { id: 'L6.6', q: 'What do the two sides agree on?', o: ['Families need clearer information about aid.', 'Tuition should be raised gradually.', 'Universities should accept more students every year.', 'Student loans should be cancelled.'] }
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
          passage: '<h3>Message</h3><p>Dear Ms. Farah,</p><p>I am writing to give you advance notice of some work that will affect your unit and the building over the next two months. As you may remember, several tenants complained last winter that cold air was leaking in around their windows. After a long search, I have finally arranged the financing, so every original window in the building will be replaced, starting on the third floor and working down.</p><p>The work in your apartment (unit 304) is booked for Tuesday, May 13, and should take one full day, from roughly 8:00 a.m. to 5:00 p.m. The crew will need clear access to every window, so please move furniture and plants at least one metre away from the outside walls the evening before. You do not need to be home, since our superintendent, Mr. Okafor, will let the installers in. However, if you have a pet, it must be kept in a closed room or a crate, because the openings will be left uncovered for long periods. The crew will take down your blinds and curtain rods and put them back up afterwards, but they cannot be responsible for anything left on the windowsills.</p><p>At the same time, the basement laundry room will be closed from May 5 to May 16 while the old coin-operated machines are swapped for ones that accept a payment card. In the meantime, the laundromat on Queen Street has agreed to give our tenants 20% off if they show a copy of their lease. Cards for the new machines will be available from Mr. Okafor starting May 15.</p><p>I realize all of this is inconvenient. To thank you for your patience, I will take $50 off your June rent. Please note that the increase I mentioned in January will still begin in July as planned, although I expect the new windows to reduce your heating bills noticeably.</p><p>If May 13 does not work for you, please tell me by April 30 and I will try to find another date. The installers still have a few openings on May 20 and 21, but once those are gone, their next available days are not until late June.</p><p>Best regards,<br>Peter Lindgren<br>Owner, Maplewood Apartments</p>',
          questions: [
            { id: 'R1.1', q: 'The windows are probably being replaced now, rather than earlier, because', o: ['the money for the project has only just been secured.', 'tenants first raised the problem with him this spring.', 'the installers had openings in May and late June.', 'the third floor windows were badly damaged this winter.'] },
            { id: 'R1.2', q: 'Ms. Farah does not have to stay home on May 13 because', o: ['another person will let the workers into her unit.', 'the crew will work only from outside the building.', 'Mr. Lindgren will look after her pet during the day.', 'the work in her unit should be done before noon.'] },
            { id: 'R1.3', q: 'Mr. Lindgren mentions the windowsills most likely in order to', o: ['encourage her to clear them before the work begins.', 'explain that the crew will take down her blinds.', 'ask her to measure them for the new windows.', 'promise that the crew will repaint them afterwards.'] },
            { id: 'R1.4', q: 'A tenant who wants to use the new laundry machines will probably need to', o: ['pick up a card from Mr. Okafor first.', 'show a copy of the lease in the basement.', 'pay 20% less than with the old machines.', 'start using them as early as May 5.'] },
            { id: 'R1.5', q: 'Mr. Lindgren suggests that the July rent increase', o: ['may be partly offset by cheaper heating.', 'will not apply to tenants on the third floor.', 'has been put off until the work is complete.', 'will be reduced by $50 to thank tenants.'] },
            { id: 'R1.6', q: 'If Ms. Farah wants a different date, she should most likely reply soon because', o: ['the few remaining May slots could be taken.', 'the installers will charge extra after April 30.', 'Mr. Okafor will be away for most of June.', 'the third floor must be finished before May 13.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Mr. Lindgren,</p><p>Thank you for the advance notice. I am delighted the windows are finally being replaced. My living room was so chilly last February that I [[R1.7]] most evenings, so I am sure the new ones will be worth a day of disruption.</p><p>Unfortunately, May 13 is difficult for me. My cat panics around strangers, and I would rather be at home to [[R1.8]] while the openings are uncovered. I work from home on Wednesdays, so could the crew come on [[R1.9]] instead? I understand that the alternative would mean waiting until summer, which I would prefer to avoid.</p><p>I have already moved my bookshelf, but my piano is far too heavy for me to shift [[R1.10]] on my own. Perhaps the crew could help, or simply work around it. I have also cleared [[R1.11]], so nobody will have to worry about breaking anything there.</p><p>Finally, thank you for arranging the discount on Queen Street. It is a small gesture, but it shows that you are thinking about your tenants, and I appreciate it.</p><p>Kind regards,<br>Amina Farah, Unit 304</p>',
          blanks: [
            { id: 'R1.7', o: ['wore a heavy sweater inside', 'opened the windows wide', 'stayed on the third floor', 'went down to the basement'] },
            { id: 'R1.8', o: ['keep her calm behind a door', 'take down the blinds myself', 'move the furniture back myself', 'pay the installers in cash'] },
            { id: 'R1.9', o: ['May 21', 'May 20', 'May 14', 'April 30'] },
            { id: 'R1.10', o: ['the distance you requested', 'two metres from the wall', 'down to the basement', 'onto the windowsill'] },
            { id: 'R1.11', o: ['the ledges beneath each window', 'the crate in the bedroom', 'the laundry in the basement', 'the shelf above the radiator'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Northgate Community Centre: Winter Swim Lessons</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Level</th><th>Ages</th><th>Day and time</th><th>First lesson</th><th>Weeks</th><th>Fee (residents)</th></tr></thead><tbody>' +
            '<tr><td>Splash 1</td><td>3 to 5</td><td>Saturday, 9:00 to 9:30 a.m.</td><td>Jan 11</td><td>8</td><td>$64</td></tr>' +
            '<tr><td>Splash 2</td><td>4 to 6</td><td>Saturday, 9:45 to 10:15 a.m.</td><td>Jan 11</td><td>8</td><td>$64</td></tr>' +
            '<tr><td>Swimmer 1</td><td>6 to 9</td><td>Tuesday, 5:30 to 6:15 p.m.</td><td>Jan 14</td><td>10</td><td>$95</td></tr>' +
            '<tr><td>Swimmer 2</td><td>7 to 10</td><td>Thursday, 5:30 to 6:15 p.m.</td><td>Jan 16</td><td>10</td><td>$95</td></tr>' +
            '<tr><td>Swimmer 3</td><td>8 to 12</td><td>Saturday, 10:30 to 11:15 a.m.</td><td>Jan 11</td><td>8</td><td>$80</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Non-residents pay 25% more than the fees shown.</li><li>When a second child from the same household registers, $10 is taken off the lower of the two fees.</li><li>Children who have not passed the level below must first take a free 15-minute swim test (Sunday, January 5, 1:00 to 3:00 p.m.). Splash 1 has no test.</li><li>No lessons on Saturday, February 15 (pool closed for a swim meet). Saturday classes will hold a make-up lesson on March 8.</li><li>Registration opens December 2 for residents and December 9 for non-residents.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Priya,</p><p>I finally sorted out winter swimming for the kids. Noor, who turned eight in the fall, passed Swimmer 1 last month, so her new class will be on [[R2.1]]. Karim is five and has never had a lesson. I did not want to deal with [[R2.2]], so he will simply start in Splash 1 rather than Splash 2. With the discount for a second child, we will pay [[R2.3]] altogether.</p><p>You asked about Eli. He is nine and has already passed Swimmer 2, so the Saturday class at the next level would suit him. Because you live outside the city, it would cost you [[R2.4]], and you will not be able to sign him up before [[R2.5]], so set a reminder! Spaces in the Saturday classes usually fill up within a day or two.</p><p>Talk soon,<br>Hana</p>',
          blanks: [
            { id: 'R2.1', o: ['Thursday evenings', 'Tuesday evenings', 'Saturday mornings', 'Sunday afternoons'] },
            { id: 'R2.2', o: ['an assessment beforehand', 'a make-up lesson in March', 'paying the higher rate', 'a class on a weeknight'] },
            { id: 'R2.3', o: ['$149', '$159', '$139', '$144'] },
            { id: 'R2.4', o: ['$100', '$80', '$105', '$120'] },
            { id: 'R2.5', o: ['December 9', 'December 2', 'January 5', 'January 11'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Hana will most likely have to take her children to the pool separately because', o: ['their lessons fall on different days of the week.', 'Karim\'s class begins two hours after Noor\'s does.', 'the pool is closed on Saturday, February 15.', 'their classes start in different months of the year.'] },
            { id: 'R2.7', q: 'The final Swimmer 3 lesson of the session will take place on', o: ['March 8.', 'March 1.', 'February 22.', 'March 15.'] },
            { id: 'R2.8', q: 'For a resident, each Swimmer 1 lesson works out to', o: ['$9.50.', '$9.00.', '$11.88.', '$12.00.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>What Happens While We Sleep</h3><p><b>A.</b> Sleep is not a single, uniform state. Over the course of a typical night, the brain moves through a series of stages in cycles that last roughly ninety minutes. Light sleep comes first, followed by deep sleep, during which the body repairs tissue and the immune system is strengthened. Then comes rapid eye movement, or REM, sleep, when most vivid dreaming occurs. Deep sleep is concentrated in the early part of the night, while REM periods grow longer toward morning. As a result, someone who sets an alarm two hours earlier than usual loses a surprisingly large share of their REM sleep.</p><p><b>B.</b> One of sleep\'s most important jobs appears to be helping the brain hold on to what it learned during the day. In a common type of experiment, volunteers practise a list of words or a new physical skill, such as a typing sequence, and are tested again several hours later. Those who sleep between practice and testing consistently outperform those who stay awake for the same length of time. Scientists have also observed that fluid flows through the brain more quickly during deep sleep, which may help flush out waste products that build up during waking hours.</p><p><b>C.</b> Naps can offer some of the same benefits, but timing matters a great deal. A nap of ten to twenty minutes usually keeps the sleeper in light sleep, so they wake up feeling refreshed. A nap of forty-five minutes to an hour is more likely to end in deep sleep, producing a heavy, confused feeling known as sleep inertia that can last for half an hour. Experts generally recommend napping in the early afternoon, when most people experience a natural dip in alertness, and avoiding naps after about 3 p.m., since they can make it harder to fall asleep at bedtime.</p><p><b>D.</b> Despite this evidence, many adults treat sleep as something they can cut when life gets busy. Surveys suggest that about one in three adults regularly sleeps less than the recommended seven hours. Over time, too little sleep has been linked to weight gain, high blood pressure and a weaker response to infection. A few employers have started to pay attention, setting aside quiet rooms where staff can rest during their breaks. Sleep specialists insist, however, that the single most effective habit is consistency: going to bed and getting up at the same times every day, weekends included.</p>',
          questions: [
            { id: 'R3.1', q: 'Getting up much earlier than normal can cut into the stage when people dream most.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Some workplaces provide a place for employees to rest.', fixed: true, a: 'D' },
            { id: 'R3.3', q: 'Sleeping too long during the day can leave a person feeling foggy for a while.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'People who sleep after practising something tend to do better when tested on it.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Teenagers naturally fall asleep later than adults do.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'The body heals itself during one particular stage of sleep.', fixed: true, a: 'A' },
            { id: 'R3.7', q: 'The brain may clear away unwanted material while we sleep.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'Keeping the same sleep routine on days off is strongly advised.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Resting late in the day can interfere with sleep at night.', fixed: true, a: 'C' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Self-Checkouts: Convenience or Cost-Cutting?</h3><p>Walk into almost any large grocery store in Canada and you will find a row of self-checkout machines where cashiers once stood. Retailers say shoppers like them. Critics say they quietly shift work onto customers. As more stores add machines, the argument is getting louder.</p><p>Lena Kowalczyk, operations director for a regional chain with forty stores in Ontario, says the machines are simply a response to what customers asked for. "Our surveys show that people buying a handful of items don\'t want to wait behind someone with a full cart," she says. Since her chain installed self-checkouts, average waits at peak hours have fallen from about eight minutes to under three. She insists that no cashiers were laid off: staff who once worked the registers now restock shelves, help customers find products and assemble online orders, a part of the business that has tripled in five years.</p><p>Desmond Achterberg, a consumer advocate in Winnipeg, is not persuaded. In his view, self-checkouts turn shoppers into unpaid employees. "The store saves on wages, but have you noticed prices going down?" he asks. He also points to older shoppers and people with disabilities, who may struggle with touchscreens, barcode scanners and the scales used to weigh produce. When a machine freezes, which he says happens often, customers must wait for a single attendant who may be watching six or eight machines at once. In some stores, he adds, the line for the one staffed register is now longer than any line used to be. "Speed for some customers should not mean longer waits for others."</p><p>Then there is theft. Some retailers have reported higher losses at self-checkouts, whether from deliberate shoplifting or honest mistakes such as entering the wrong type of apple. A few chains in other countries have removed machines for this reason, while others switch them off in the evenings, when fewer staff are on the floor. Kowalczyk says her stores have brought losses down by adding cameras and limiting self-checkout to fifteen items.</p><p>Rosalind Hartley, who researches retail design at a college in Halifax, thinks both sides are partly right. In her studies, shoppers with small baskets clearly prefer the machines, but satisfaction drops sharply once an order passes about twenty items. The real problem, she argues, is not the technology itself but how stores introduce it. "When a store converts every lane at once, the customers who were already struggling get left behind," she says. Stores that phase machines in gradually, and keep an employee nearby during the first few months, receive far fewer complaints.</p><p>Achterberg stresses that he is not asking stores to get rid of the machines. What he wants is a guarantee that at least one staffed checkout will always be open, and he would like stores to share their savings through lower prices. Kowalczyk replies that grocery profit margins are already thin, but she agrees that "nobody should be forced to use a machine they find difficult."</p>',
          questions: [
            { id: 'R4.1', q: 'Kowalczyk mentions online orders most likely in order to', o: ['show that former cashiers were given new duties.', 'explain why waits at busy times have fallen.', 'prove that customers prefer shopping from home.', 'suggest that machines will soon handle them too.'] },
            { id: 'R4.2', q: 'What is Achterberg\'s attitude toward the claim that the machines save time?', o: ['He doubts the benefit is shared by everyone.', 'He accepts it without any reservations.', 'He believes the machines are slower for all.', 'He thinks theft makes the figures unreliable.'] },
            { id: 'R4.3', q: 'Hartley would most likely agree that', o: ['a slow rollout reduces shopper frustration.', 'self-checkout should be limited to fifteen items.', 'the technology itself is the main problem.', 'shoppers with full carts prefer the machines.'] },
            { id: 'R4.4', q: 'The article suggests that some stores turn the machines off at night because', o: ['there are fewer workers available to watch them.', 'customers buy many more items in the evening.', 'the machines freeze more often after dark.', 'older shoppers tend to visit at that time.'] },
            { id: 'R4.5', q: 'Kowalczyk responds to the call for lower prices by', o: ['noting that grocers earn little on each sale.', 'promising to share savings with her customers.', 'agreeing to keep every register staffed.', 'arguing that the machines cost more than wages.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I worked as a cashier for six years, so this article hit close to home. Like the staff Ms. Kowalczyk describes, I was moved to [[R4.6]] when my store brought in the machines, and frankly, I do not miss standing in one spot all day.</p><p>Still, Mr. Achterberg makes a fair point about [[R4.7]]. My father is eighty and avoids the machines because he can never work out how to [[R4.8]] when he buys fruit. Last week he waited twenty minutes to pay because [[R4.9]]. Our store replaced all of its lanes over a single weekend, which, if Ms. Hartley is right, would explain [[R4.10]]. I think a sensible rule would be to always keep a cashier on duty, and if the savings were passed on to customers as well, even better. That seems a fair trade for the work we now do ourselves.</p>',
          blanks: [
            { id: 'R4.6', o: ['packing groceries bought over the internet', 'supervising the self-checkout area alone', 'watching the cameras for shoplifters', 'clearing snow from the parking lot'] },
            { id: 'R4.7', o: ['customers who find the technology hard', 'losses from theft at the machines', 'the thin profit margins of grocers', 'how much faster the lines have become'] },
            { id: 'R4.8', o: ['use the scale properly', 'pay with a coupon', 'carry his own bags', 'find a cashier for help'] },
            { id: 'R4.9', o: ['the lone cashier had a long line', 'one attendant was watching eight machines', 'the machines were switched off that evening', 'his order was over the fifteen-item limit'] },
            { id: 'R4.10', o: ['why so many shoppers there still complain', 'why losses at the store have dropped', 'why waits at peak hours have fallen', 'why prices there have not gone down'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>During a windstorm last weekend, several large branches from your neighbour\'s tree fell into your yard and broke part of your fence. Your neighbour has not mentioned it.</p><p>Write an email to your neighbour. In your email, do the following:</p><ul><li>Describe what happened and the damage it caused.</li><li>Explain why you are worried about the tree in the future.</li><li>Suggest how the two of you could deal with the repair and its cost.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer wants to add one new benefit for all staff next year and is asking employees which one they would prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'A free yearly membership at a gym located near the office.' },
            { key: 'B', label: 'Option B', text: 'One extra paid vacation day each year.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your town or city where you like to spend free time.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to start running, but she has never exercised regularly before. Give her advice on how to get started safely and how to stay motivated.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when something did not go as planned while you were on a trip. What happened, and how did you deal with it?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: AIRPORT },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: AIRPORT },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is planning how to celebrate your father\'s 60th birthday. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Dinner at a restaurant', image: RESTAURANT, facts: ['Private table for 8 people', 'About $45 per person', 'Saturday, 7:00 to 9:00 p.m.', 'No cooking or cleaning up'] },
            { key: 'B', title: 'Party at home', image: HOMEPARTY, facts: ['Up to 20 guests', 'Food and cake: about $200', 'Any time, no time limit', 'Music, games and decorations'] }
          ],
          third: { key: 'C', title: 'Bowling alley', image: BOWLING, facts: ['2 lanes for 2 hours', '$180, shoe rental included', 'Sunday, 2:00 to 4:00 p.m.', 'Pizza and snacks available'] },
          persuade: 'Your family member suggests the bowling alley instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>For the past month, a coworker on your team has often left early and asked you to finish his tasks. Because of this, your own work has fallen behind. Today your manager asked you why your reports are late.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your manager. Explain why your work is late without causing serious trouble for your coworker.</p><p><b>Option B:</b> Talk to your coworker. Explain why you cannot keep doing his tasks.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Should stores be allowed to open on public holidays? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a used furniture store and see this unusual chair. Call your friend, who is looking for a chair for his new apartment. Describe the chair and explain whether you think he should buy it.', image: ODDCHAIR }
      ]
    }
  });
})();
