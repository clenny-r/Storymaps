/* Rowe CELPIP Mock Exam: Test 27 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/27/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '27',
    title: 'Mock Test 27',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { MINH: { name: 'Minh', g: 'm', skin: '#e3b28b', hair: '#151515', shirt: '#a04000', style: 'short' }, LISETTE: { name: 'Lisette', g: 'f', skin: '#f2cfb0', hair: '#c0392b', shirt: '#1a5276', style: 'curly' } },
        segments: [{
          lines: [
            ['MINH', 'The colour on the card is called Harbour Fog, but on our wall it\'ll come out darker. Paint always does.'],
            ['LISETTE', 'So we buy a sample pot first? That\'s eight dollars, and we\'d lose the whole weekend waiting for it to dry.'],
            ['MINH', 'Still better than four big cans of the wrong grey and repainting the entire living room.'],
            ['LISETTE', 'True. Okay, one sample pot. We\'ll try it on the wall by the window.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Minh want to buy a sample pot first?', o: ['To avoid a costly mistake with the colour', 'Because sample pots are on sale this week', 'To finish painting before the weekend', 'Because the living room has no window'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { MAEVE: { name: 'Maeve', g: 'f', skin: '#f5d6bc', hair: '#a0522d', shirt: '#117864', style: 'long' }, LORENZO: { name: 'Lorenzo', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#6c3483', style: 'short' } },
          segments: [
            {
              lines: [
                ['MAEVE', 'Lorenzo, please tell me you know something about ovens. I turned it on to bake the pies, and nothing. The light\'s on, the fan\'s running, but it\'s stone cold inside.'],
                ['LORENZO', 'Uh oh. Is the element at the bottom glowing at all? That\'s usually the first thing to go.'],
                ['MAEVE', 'Not even a little. And of course it picks the Saturday of Thanksgiving weekend, with fourteen people coming for dinner tomorrow.'],
                ['LORENZO', 'Okay, okay. Did you call the repair place, the one that fixed the dishwasher?'],
                ['MAEVE', 'I did. The earliest they can come is Tuesday, after the long weekend. And the part alone is ninety dollars, plus a hundred and twenty for the visit.'],
                ['LORENZO', 'Tuesday\'s no use to us. What about the turkey? It\'s nine kilos. That\'s, what, four hours in the oven?'],
                ['MAEVE', 'At least. And the pies need an hour each, and I was planning to do them this afternoon so the oven would be free tomorrow.'],
                ['LORENZO', 'Right. So really we\'ve got two separate problems here: the pies today and the turkey tomorrow.']
              ],
              questions: [
                { id: 'L1.1', q: 'What is wrong with the oven?', o: ['It switches on but does not get hot.', 'Its light and fan have both stopped.', 'Only the top element is heating up.', 'It turns itself off after preheating.'] },
                { id: 'L1.2', q: 'How much will the repair cost altogether?', o: ['$210', '$120', '$90', '$180'] },
                { id: 'L1.3', q: 'What does Lorenzo do at the end of this section?', o: ['He breaks the situation into two parts.', 'He offers to phone the repair company.', 'He suggests cancelling tomorrow\'s dinner.', 'He agrees to bake the pies himself.'] }
              ]
            },
            {
              lines: [
                ['LORENZO', 'For the pies, what about Mirela next door? She\'s always offering to help.'],
                ['MAEVE', 'She\'s at her daughter\'s in Kemptville until Monday. But she left us her key so we could water her plants.'],
                ['LORENZO', 'You mean use her oven while she\'s away? Without asking? That feels like crossing a line.'],
                ['MAEVE', 'I\'d text her first, obviously. But even if she says yes, her oven\'s tiny. A nine-kilo bird won\'t fit in it.'],
                ['LORENZO', 'Then we cut it up. My uncle always does his turkey on the barbecue, in pieces. Breasts, legs, thighs. It cooks in half the time.'],
                ['MAEVE', 'On the barbecue? In October? And the propane tank\'s nearly empty.'],
                ['LORENZO', 'I\'ll get it filled this afternoon. The hardware store does refills until five. And honestly, if it\'s cooked in pieces, nobody will miss the big carving moment.'],
                ['MAEVE', 'My mother will. She\'s carved the turkey at our family dinners for thirty years. It\'s her moment.'],
                ['LORENZO', 'Then we\'ll save her the breasts to carve at the table. She can still make her speech.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why is Lorenzo uneasy about using Mirela\'s oven at first?', o: ['It seems wrong to use it without her permission.', 'He believes her oven is too small for the pies.', 'He thinks she will be home again on Monday.', 'He does not know where she keeps her key.'] },
                { id: 'L1.5', q: 'What does Lorenzo plan to do this afternoon?', o: ['Get more fuel for the barbecue', 'Buy a new barbecue at the hardware store', 'Pick up a smaller turkey for the dinner', 'Ask his uncle to cook the turkey'] },
                { id: 'L1.6', q: 'Why does Maeve mention her mother?', o: ['Her mother may feel left out of a family tradition.', 'Her mother has a bigger oven they could use.', 'Her mother usually cooks turkey on a barbecue.', 'Her mother does not like food from the barbecue.'] }
              ]
            },
            {
              lines: [
                ['MAEVE', 'Good news and bad news. Mirela texted back. She says use the oven, no problem, and help ourselves to her roasting pans.'],
                ['LORENZO', 'Great. And the bad news?'],
                ['MAEVE', 'The hardware store\'s out of propane until Tuesday. The guy said the long weekend cleaned them out.'],
                ['LORENZO', 'Ugh. What about the gas station on Pitt Street?'],
                ['MAEVE', 'Already called. They only swap tanks, and ours is the old kind they won\'t take.'],
                ['LORENZO', 'Hmm. Okay, so Mirela\'s oven can\'t take the whole bird. But it could take it in pieces, couldn\'t it? Two batches.'],
                ['MAEVE', 'Two batches, roughly two hours each. If we start at ten, we\'re done by two, and dinner isn\'t until five. That actually works. And the pies can go in over there tonight.'],
                ['LORENZO', 'Perfect. And next year, remind me to borrow my uncle\'s barbecue. Or we could just buy an oven that works.'],
                ['MAEVE', 'Let\'s get through tomorrow first.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why can they no longer use the barbecue?', o: ['They cannot get the fuel they need.', 'The hardware store is closed until Tuesday.', 'It is too small for the turkey pieces.', 'It would take too long to cook the bird.'] },
                { id: 'L1.8', q: 'How will they most likely cook the turkey?', o: ['In parts, in the neighbour\'s oven', 'Whole, in the neighbour\'s oven', 'In pieces, on the uncle\'s barbecue', 'Whole, after the repair on Tuesday'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { STAFF: { name: 'Garden centre worker', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#145a32', style: 'curly' }, MUSTAFA: { name: 'Mustafa', g: 'm', skin: '#c68642', hair: '#2a1b12', shirt: '#2874a6', style: 'short' } },
          segments: [{
            lines: [
              ['STAFF', 'Hi there. Oh, that\'s a sad-looking little tree. What\'s going on with it?'],
              ['MUSTAFA', 'That\'s what I\'m hoping you\'ll tell me. I bought this lemon tree here in May. All summer it was fine on the balcony, but since I brought it inside last month, it\'s been dropping leaves like crazy.'],
              ['STAFF', 'Very common. Citrus hates being moved. Where is it now?'],
              ['MUSTAFA', 'In the living room, next to the heating vent, so it stays warm.'],
              ['STAFF', 'Ah. That\'s probably half your problem. Warm, dry air blowing on it all day long. Can I feel the soil? Oh, it\'s soaking.'],
              ['MUSTAFA', 'I water it every morning. I figured with the heat on, it would get thirsty.'],
              ['STAFF', 'And that\'s the other half. In winter, citrus needs far less water. Every ten days or so, once the top few centimetres feel dry. Roots that sit in water start to rot.'],
              ['MUSTAFA', 'So I\'ve basically been loving it to death.'],
              ['STAFF', 'Pretty much. The good news is the stems are still green, so it\'s not too late. Move it away from that vent and into your brightest window. South-facing, ideally.'],
              ['MUSTAFA', 'Our only south window is in the bedroom, and it gets pretty chilly in there at night.'],
              ['STAFF', 'Chilly is fine, as long as it stays above about ten degrees. Light matters much more than warmth. If that doesn\'t work, a grow light would do the job. We have a small one for forty-five dollars.'],
              ['MUSTAFA', 'Let\'s try the bedroom first. And should I repot it? The pot looks a bit small.'],
              ['STAFF', 'Not now. Repotting a stressed tree in winter just piles on more stress. Wait until spring.'],
              ['STAFF', 'But this pot has no drainage holes, which is a problem. For now, fill the saucer with gravel and stand the pot on top, so the roots aren\'t sitting in water.'],
              ['MUSTAFA', 'Got it. Is there anything I can feed it, to help it recover?'],
              ['STAFF', 'There\'s a citrus fertilizer, twelve dollars, but don\'t use it until March. Feeding a tree that isn\'t growing does more harm than good.'],
              ['MUSTAFA', 'Then I\'ll leave it for now. How long before new leaves appear?'],
              ['STAFF', 'Give it six weeks. If you see little green shoots, you\'re on the right track.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why did the tree start losing its leaves?', o: ['It was moved indoors and then cared for badly.', 'It was left outside too long in the fall.', 'It had a disease when it was bought in May.', 'It has not been given enough water.'] },
              { id: 'L2.2', q: 'What does Mustafa mean when he says he has been "loving it to death"?', o: ['His extra attention has hurt the tree.', 'He has become too attached to the tree.', 'He worries the tree is already dead.', 'He gave the tree too much fertilizer.'] },
              { id: 'L2.3', q: 'According to the worker, what matters most in the tree\'s new spot?', o: ['Getting plenty of sunlight', 'Staying as warm as possible', 'Being near the heating vent', 'Being kept in a quiet room'] },
              { id: 'L2.4', q: 'Why does the worker suggest gravel in the saucer?', o: ['To let extra water drain off the roots', 'To make the pot heavier and more stable', 'To add minerals to the soil over time', 'To replace the need for a bigger pot'] },
              { id: 'L2.5', q: 'Why does Mustafa decide not to buy the fertilizer today?', o: ['It should not be used for several months.', 'It costs more than the grow light does.', 'The tree already has too much fertilizer.', 'He plans to repot the tree first.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#e8c3a0', hair: '#5d4037', shirt: '#922b21', style: 'bun' }, MIKAEL: { name: 'Mikael Strand', g: 'm', skin: '#f0c9a6', hair: '#bdc3c7', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Mikael Strand, who spent twenty years as a bank branch manager in Timmins before, at forty-five, he earned his commercial licence and started driving a transport truck.'],
              ['HOST', 'Mikael, people must have thought you\'d lost your mind.'],
              ['MIKAEL', 'My brother-in-law certainly did. But when the branch closed, I thought, if I\'m starting over anyway, why not start over properly? I\'d spent two decades behind a desk telling people they couldn\'t have loans.'],
              ['HOST', 'How long did the training take?'],
              ['MIKAEL', 'The course itself was eight weeks, and it wasn\'t cheap, about eight thousand dollars. My severance from the bank covered it.'],
              ['MIKAEL', 'Then the company that hired me paired me with an experienced driver for three months before they let me go out on my own.'],
              ['HOST', 'What surprised you most?'],
              ['MIKAEL', 'Backing up. Honestly. Driving forward on the highway is the easy part. Reversing a fifteen-metre trailer into a loading dock while someone watches? The first few times, I was sweating right through my shirt.'],
              ['HOST', 'And the lifestyle? You must be away a lot.'],
              ['MIKAEL', 'At first I did long runs out west, five or six days at a time. My wife was patient, but when I missed my daughter\'s school play, that was it.'],
              ['MIKAEL', 'Now I do regional routes. I\'m home most nights, though the pay is about fifteen percent lower.'],
              ['HOST', 'Was that a hard trade to make?'],
              ['MIKAEL', 'Easiest decision I\'ve ever made.'],
              ['HOST', 'Truckers have a reputation for not eating very well. Is that fair?'],
              ['MIKAEL', 'Mostly, yes. Truck-stop food is fried, and you\'re sitting ten hours a day. I put on eight kilos my first year.'],
              ['MIKAEL', 'Now I pack a cooler every morning, and I walk laps around the truck whenever I stop for fuel. The other drivers tease me, but my blood pressure\'s back to normal.'],
              ['HOST', 'Would you recommend the job to people your age?'],
              ['MIKAEL', 'To the right people. There\'s a real shortage of drivers, so the work is there. But if you can\'t stand your own company, you\'ll go stir-crazy. Some days I don\'t talk to anyone for six hours straight.'],
              ['MIKAEL', 'And talk it over with your family first, because they\'re making the change too.'],
              ['HOST', 'Any regrets?'],
              ['MIKAEL', 'Only that I didn\'t do it ten years sooner. Although my back might disagree.']
            ],
            questions: [
              { id: 'L3.1', q: 'What led Mikael to change careers?', o: ['Losing his job let him start fresh.', 'His brother-in-law urged him to try driving.', 'He was tired of driving to the bank each day.', 'His wife encouraged him to try trucking.'] },
              { id: 'L3.2', q: 'How did Mikael pay for his training?', o: ['With money he received when his job ended', 'With a loan from the bank where he worked', 'The trucking company paid the full cost', 'His wife covered it from her own savings'] },
              { id: 'L3.3', q: 'Why does Mikael mention sweating through his shirt?', o: ['To show how stressful reversing was at first', 'To describe how hot the trucks can become', 'To explain why highway driving is so tiring', 'To complain about the driver who trained him'] },
              { id: 'L3.4', q: 'Why did Mikael switch to regional routes?', o: ['Being away made him miss family events.', 'Long-distance routes paid less than he hoped.', 'His company stopped sending trucks out west.', 'His wife asked him to give up driving.'] },
              { id: 'L3.5', q: 'What does Mikael imply about many other drivers?', o: ['They do not look after their health on the road.', 'They bring their own meals from home each day.', 'They walk around their trucks while refuelling.', 'They earn more money than regional drivers do.'] },
              { id: 'L3.6', q: 'What does Mikael say a driver needs to be comfortable with?', o: ['Spending long stretches alone', 'Reversing a truck in front of others', 'Being away from home for six days', 'Eating fried food at truck stops'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#212f3d', style: 'bald' } },
          segments: [{
            lines: [
              ['NEWS', 'Residents of Camrose are being told to boil their tap water before drinking it, after a major water main burst under the town\'s main street early Tuesday morning.'],
              ['NEWS', 'The break caused water pressure to drop across much of the town for about six hours. Officials say that when pressure falls that low, dirt and bacteria can get into the pipes, so the advisory is a precaution. No illnesses have been reported.'],
              ['NEWS', 'Until further notice, water used for drinking, making baby formula, brushing teeth or washing fruit and vegetables should be brought to a rolling boil for at least one minute and allowed to cool.'],
              ['NEWS', 'Showering is considered safe for adults. Parents, however, are asked to give small children a sponge bath instead of putting them in the tub, since young children often swallow bath water.'],
              ['NEWS', 'The advisory will stay in place until two sets of water samples, taken twenty-four hours apart, both come back clean. Because each test takes a full day to process, officials say Friday is the earliest the advisory could be lifted.'],
              ['NEWS', 'Free bottled water is being handed out at the arena from eight in the morning until eight at night, with a limit of one case per household per day. Residents who cannot leave home can call the town office to arrange a delivery.'],
              ['NEWS', 'Restaurants and cafés may stay open, but they must use bottled or boiled water, and they have been told to switch off ice machines and self-serve drink fountains.'],
              ['NEWS', 'Repairs to the main street could take up to two weeks, and drivers are being asked to use the bypass in the meantime.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A temporary warning about the town\'s tap water', 'An outbreak of illness caused by tap water', 'A plan to replace the town\'s old water pipes', 'A shortage of bottled water in local stores'] },
              { id: 'L4.2', q: 'Why was the advisory issued?', o: ['Low pressure may have let germs into the pipes.', 'Several people became ill after drinking water.', 'Bacteria were found in a sample on Tuesday.', 'A road crew damaged the pipes by mistake.'] },
              { id: 'L4.3', q: 'What are parents of young children asked to do?', o: ['Wash them with a cloth, not in a tub', 'Boil their bath water for one minute', 'Bring them to the arena to be bathed', 'Have them shower instead of bathing'] },
              { id: 'L4.4', q: 'Why is Friday the earliest the advisory could end?', o: ['Two clean results are needed, a day apart.', 'The street repairs will take until Friday.', 'Water will be handed out until Friday only.', 'The pipes cannot be tested until Friday.'] },
              { id: 'L4.5', q: 'What does the report suggest about ice machines?', o: ['Their ice could contain unsafe water.', 'They must be cleaned before Friday.', 'They were damaged when the pressure dropped.', 'They use up too much bottled water.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'New hire mentoring', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { LYDIA: { name: 'Lydia', g: 'f', skin: '#a9714b', hair: '#120c08', shirt: '#7d3c98', style: 'curly' }, MATTHEW: { name: 'Matthew', g: 'm', skin: '#f2cfb0', hair: '#c0392b', shirt: '#2e4053', style: 'short' }, LORRAINE: { name: 'Lorraine', g: 'f', skin: '#e8c39e', hair: '#bdc3c7', shirt: '#b9770e', style: 'bun' } },
          segments: [{
            lines: [
              ['LYDIA', 'Okay, let\'s start. Last year we hired thirty people, and eleven of them were gone within six months.'],
              ['MATTHEW', 'Eleven? Are you sure? I thought it was nine.'],
              ['LYDIA', 'Nine quit on their own. The other two didn\'t make it through probation. Either way, it\'s far too many.'],
              ['LORRAINE', 'And in the exit interviews, the same complaint kept coming up. Nobody had time for them.'],
              ['MATTHEW', 'So, mentors. Do we ask for volunteers, or do managers pick people?'],
              ['LORRAINE', 'Volunteers. If you force someone to mentor, the new hire can tell within a day.'],
              ['LYDIA', 'Agreed. But volunteers tend to be the same five keen people who sign up for everything.'],
              ['MATTHEW', 'Then we put a cap on it. Nobody mentors more than one person at a time.'],
              ['LORRAINE', 'Should mentors come from the same department? They\'d actually understand the job.'],
              ['MATTHEW', 'I\'d say a different department. People won\'t admit they\'re struggling to someone who sits beside their boss.'],
              ['LYDIA', 'Hmm, I hadn\'t thought of that. But a mentor from accounting can\'t explain the warehouse system.'],
              ['MATTHEW', 'That\'s what the trainers are for. The mentor\'s there for everything else, the awkward questions.'],
              ['LORRAINE', 'Like where people eat lunch, or whether it\'s okay to leave right at five.'],
              ['LYDIA', 'Fine, you\'ve convinced me. Different departments. Now, time. When do they actually meet?'],
              ['LORRAINE', 'One paid hour a week. Ask people to give up their lunch break, and the whole thing dies by March.'],
              ['MATTHEW', 'Supervisors will grumble about losing an hour, though. Especially in the warehouse during the holiday rush.'],
              ['LYDIA', 'Then it\'s weekly for the first two months, and every second week after that.'],
              ['MATTHEW', 'That, I can sell to the supervisors.'],
              ['LORRAINE', 'And what do mentors get out of it? A gift card seems a bit cheap.'],
              ['MATTHEW', 'How about a training budget? Five hundred dollars toward any course they like.'],
              ['LYDIA', 'Head office would never approve that much per person. I\'ll ask, but expect a lower number.'],
              ['LORRAINE', 'Honestly, most mentors just want public thanks. A mention at the staff meeting goes a long way.'],
              ['MATTHEW', 'Then let\'s do both. The thank-you costs us nothing.'],
              ['LYDIA', 'Last thing. How will we know, a year from now, whether any of this is working?'],
              ['LORRAINE', 'We compare how many new hires stay past six months this year with last year\'s figure.'],
              ['MATTHEW', 'And we ask the new hires directly. A percentage won\'t tell us why someone decided to stay.'],
              ['LYDIA', 'Good. Lorraine, could you draft the sign-up form? I\'d like it out before the April hires start.'],
              ['LORRAINE', 'I\'ll have a draft on your desk by Thursday morning.']
            ],
            questions: [
              { id: 'L5.1', q: 'What problem is the group trying to solve?', o: ['Too many new employees leave soon after starting.', 'Managers have no time to interview new employees.', 'The company cannot find enough people to hire.', 'New employees are not finishing their training.'] },
              { id: 'L5.2', q: 'What does Lydia clarify about the employees who left?', o: ['Not all of them chose to leave.', 'Only nine of them were new hires.', 'Most left during their probation.', 'Two of them were later rehired.'] },
              { id: 'L5.3', q: 'Why does Lorraine prefer volunteer mentors?', o: ['New staff quickly sense when a mentor is unwilling.', 'Managers do not know which staff would be suitable.', 'Volunteers are usually the most experienced staff.', 'The same keen people would sign up for the role.'] },
              { id: 'L5.4', q: 'Why does Matthew want mentors from other departments?', o: ['New staff will speak more openly to them.', 'They have more free time than supervisors.', 'They understand the warehouse system better.', 'Managers in the same department are too busy.'] },
              { id: 'L5.5', q: 'How is Lydia\'s concern about the warehouse system answered?', o: ['Job skills will be taught by other people.', 'Mentors will be given extra system training.', 'Only warehouse staff will become mentors.', 'New hires will learn it from their supervisor.'] },
              { id: 'L5.6', q: 'Why does Lydia reduce the number of meetings after two months?', o: ['To make the plan easier for supervisors to accept', 'To give mentors more time for their own courses', 'Because new hires will no longer need any help', 'Because mentors asked to meet less often'] },
              { id: 'L5.7', q: 'What does Lorraine suggest about rewarding mentors?', o: ['Recognition may matter more to them than money.', 'A gift card would be the most practical reward.', 'A training budget should replace public thanks.', 'Head office should decide what mentors receive.'] },
              { id: 'L5.8', q: 'Why does Matthew want to ask new hires directly?', o: ['Figures alone will not explain their reasons.', 'The exit interviews were not done properly.', 'Supervisors may not report the results honestly.', 'Last year\'s figures are no longer available.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Speed cameras near schools',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#c98c64', hair: '#3b2a20', shirt: '#5b2c6f', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'Across Canada, a growing number of cities are installing automated speed cameras in school zones. The cameras photograph the licence plates of speeding vehicles, and the owner receives a ticket in the mail, with no police officer involved.'],
              ['NARR', 'Supporters say the cameras save lives. Critics say they have more to do with raising money than with keeping children safe.'],
              ['NARR', 'Lars Whitaker, a road safety researcher based in Squamish, supports the cameras. His first argument comes down to simple physics: the faster a car is travelling, the longer it takes to stop and the harder it hits.'],
              ['NARR', 'A child struck at thirty kilometres an hour will usually survive, he says. At fifty, the odds drop sharply.'],
              ['NARR', '"Drivers always think they\'re only going a little over," he says. "In a school zone, a little over can be the difference between a near miss and a tragedy."'],
              ['NARR', 'His second argument is that police simply cannot be everywhere. An officer with a radar gun can watch one street for an hour or two; a camera watches all day, every school day, and drivers know it.'],
              ['NARR', 'He points to cities where, within a year of cameras going up, the share of drivers speeding in school zones fell by more than half.'],
              ['NARR', 'Whitaker does concede that some cities have handled the cameras badly, placing them where they catch the most drivers rather than where children actually cross. Cities, he says, should be required to publish where every camera is and why it was put there.'],
              ['NARR', 'Magdalena Oyelaran, who speaks for a drivers\' association in Brockville, opposes the cameras as they are used today. Her first argument is that a ticket arriving in the mail two or three weeks later does little to change how people drive.'],
              ['NARR', 'An officer who pulls a driver over, she says, can explain the danger on the spot, and the driver remembers that conversation. A letter weeks later feels like a bill, not a lesson.'],
              ['NARR', 'Her second argument is about fairness. Because the ticket goes to the vehicle\'s owner rather than the driver, a parent can be fined for something their teenager did.'],
              ['NARR', 'And because no demerit points are given, a wealthy driver can simply keep paying and keep speeding.'],
              ['NARR', 'Oyelaran agrees that speeding near schools is a serious problem. But she argues that changes to the road itself, such as speed bumps, narrower lanes and raised crosswalks, slow drivers down every single time, whether or not anyone is watching.'],
              ['NARR', 'She also notes that in some cities, money from the cameras goes into the general budget, which she says makes it hard to believe safety is the only goal.'],
              ['NARR', 'Whitaker replies that speed bumps and narrower lanes do work well, but they cost far more and can take years to build, while a camera can be up and running within a week.'],
              ['NARR', 'And if cities are worried about how it looks, he says, they could promise to spend every dollar the cameras bring in on safety projects near schools.'],
              ['NARR', 'Oyelaran says she could accept cameras under those conditions, as long as clear warning signs are posted well before each one.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether cameras should enforce speed limits near schools', 'How cities decide where to build new raised crosswalks', 'Why fewer police officers now patrol school zones', 'Whether demerit points should be given for speeding'] },
              { id: 'L6.2', q: 'Why does Whitaker compare thirty and fifty kilometres an hour?', o: ['To show that a small rise in speed can be deadly', 'To argue that school zones need lower speed limits', 'To explain how radar guns measure a car\'s speed', 'To show that most drivers speed only a little'] },
              { id: 'L6.3', q: 'What does Whitaker admit about some cities?', o: ['They chose some locations for the wrong reasons.', 'They have not seen any drop in speeding near schools.', 'They pay more for cameras than for speed bumps.', 'They let police officers turn the cameras off at night.'] },
              { id: 'L6.4', q: 'Why does Oyelaran prefer a police stop to a mailed ticket?', o: ['Talking in person leaves a stronger mark.', 'Police officers can give out larger fines.', 'Mailed tickets often go to the wrong address.', 'Drivers can argue their case on the spot.'] },
              { id: 'L6.5', q: 'What is Oyelaran\'s point about wealthy drivers?', o: ['Without points, fines alone may not stop them.', 'They are more likely to own several vehicles.', 'They usually let their teenagers drive.', 'They are rarely caught by the cameras.'] },
              { id: 'L6.6', q: 'What would make Oyelaran more willing to accept the cameras?', o: ['Fines spent on school safety, plus signs', 'Cameras placed only where children cross the road', 'A promise to install speed bumps within a week', 'Tickets sent to drivers rather than to owners'] }
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
          passage: '<h3>Message</h3><p>Hi Moira,</p><p>I hope the Arizona sunshine is treating you well, because it has been a grey, slushy February here in Midland. Everything at your place is fine. The furnace is running, I have been bringing in your mail, and Linus has cleared your driveway after every snowfall, so nobody walking past would ever guess the house is empty.</p><p>I am writing, though, because something has come up that cannot wait until you are back in April. On Monday, two people from the city knocked on my door looking for you. They have been checking all the elms on our street, and they believe the big one on the boulevard in front of your house has Dutch elm disease. They have marked it with a ring of orange paint and left a letter, which I have photographed and attached.</p><p>In short, the city plans to cut the tree down within the next six weeks, before the beetles that spread the disease become active in spring. Because the tree stands on city land, the city pays for the removal. However, the owner of the house beside it gets to choose what happens afterward. The first choice is to have the city plant a young maple in the same spot next fall, free of charge. The second is to have the stump ground out and the area grassed over, which would leave room to park a second car but no tree.</p><p>I know how much that elm means to you. You once told me your father planted it the year you were born. I did not say a word about that to the workers, because it is your story, not mine. I did ask whether the tree could be saved. One of them, a very kind young woman named Mercy, said that once the leaves start to curl and turn yellow, as they did last August, it is far too late for the injections that sometimes work.</p><p>The form must be returned by March 15, and it has to be signed by you as the owner. I can print it, scan it, whatever helps. If you would rather call the city yourself, the number is at the top of the letter.</p><p>Also, would you like me to ask them to save a piece of the trunk? Linus says he could make you something from it.</p><p>Love,<br>Lucinda</p>',
          questions: [
            { id: 'R1.1', q: 'Lucinda mentions that Linus has cleared the driveway to show that', o: ['the house does not look as if it is empty.', 'Linus expects to be paid for his work.', 'there has been more snow than usual.', 'the city asked people to clear their driveways.'] },
            { id: 'R1.2', q: 'The city wants to remove the tree soon because it', o: ['hopes to act before insects can spread the disease.', 'is afraid the elm could fall onto Moira\'s house.', 'knows that Moira will be away until April.', 'finds the ground easier to work on in winter.'] },
            { id: 'R1.3', q: 'Moira will not have to pay for the removal because', o: ['the tree is growing on public property.', 'she has chosen to accept the free maple.', 'Lucinda has offered to cover the cost.', 'the disease was caused by city workers.'] },
            { id: 'R1.4', q: 'If Moira picks the second choice, she would', o: ['gain parking space but lose any tree.', 'receive a young maple the following fall.', 'have to pay to grind out the stump.', 'be able to keep the trunk of the elm.'] },
            { id: 'R1.5', q: 'Lucinda did not tell the workers about Moira\'s father because she', o: ['felt it was for Moira to share.', 'forgot about it until much later.', 'thought Mercy already knew it.', 'did not speak to the workers.'] },
            { id: 'R1.6', q: 'According to Mercy, treating the tree would no longer help because', o: ['signs of the disease appeared months ago.', 'the city has stopped using injections.', 'the tree has been marked with paint.', 'the beetles are already active this winter.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Lucinda,</p><p>Thank you for keeping such a close eye on everything, and please thank Linus for me. I had a little cry when I read your message, but you were right to tell me straight away. When I think about it, the poor tree has been sick since [[R1.7]], so I suppose I should not be surprised.</p><p>I have made up my mind about the two choices. Dad would much rather see [[R1.8]] in front of the house than an extra parking spot, so please let the city know which one I want.</p><p>Since I will not be home before the deadline and the form needs my own signature, could you [[R1.9]]? I will send it straight back the same day.</p><p>And yes, please ask them to keep a piece of the trunk. Tell Linus I would treasure [[R1.10]], whatever it turns out to be.</p><p>Finally, the city will want the work finished before [[R1.11]], so if they need to get into the driveway with their trucks, please tell them they have my permission.</p><p>With love from the desert,<br>Moira</p>',
          blanks: [
            { id: 'R1.7', o: ['last summer', 'last spring', 'early this year', 'the day it was marked'] },
            { id: 'R1.8', o: ['something growing again', 'a neat patch of grass', 'the old elm saved', 'a wider driveway'] },
            { id: 'R1.9', o: ['email me a copy to sign', 'sign it on my behalf', 'call the city for me', 'give it to Mercy instead'] },
            { id: 'R1.10', o: ['anything he makes from it', 'a ride home from the airport', 'a photo of the orange ring', 'his help with the snow'] },
            { id: 'R1.11', o: ['the beetles wake up in spring', 'the maple goes in next fall', 'I get home again in April', 'the form is due on March 15'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Red Sands Driving School, Summerside: Packages</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Package</th><th>In-car lessons (1 hour each)</th><th>Online classroom course</th><th>Car for the road test</th><th>Price</th></tr></thead><tbody>' +
            '<tr><td>Basic</td><td>6</td><td>No</td><td>Not included</td><td>$420</td></tr>' +
            '<tr><td>Standard</td><td>10</td><td>20 hours</td><td>Not included</td><td>$780</td></tr>' +
            '<tr><td>Complete</td><td>10</td><td>20 hours</td><td>Included</td><td>$890</td></tr>' +
            '<tr><td>Refresher (licensed drivers only)</td><td>3</td><td>No</td><td>Not included</td><td>$225</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Learners under 25 who complete the online classroom course receive a certificate that most insurance companies accept for a lower rate.</li><li>Car for the road test: $95, including a 45-minute warm-up lesson just before the test. The Complete package already includes both.</li><li>Extra in-car lessons: $70 each, or $60 each when 5 or more are bought at the same time.</li><li>Learners aged 16 or 17 need a parent or guardian to sign the registration form.</li><li>Pickup and drop-off at home are free within city limits, and $15 per lesson outside city limits.</li><li>Lessons cancelled with less than 24 hours\' notice are charged in full.</li><li>Each package includes one free change of lesson time, as long as the school is told at least 24 hours ahead. Further changes cost $15 each.</li><li>Drivers aged 70 and over save 10% on the Refresher package.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Mehmet,</p><p>I have been comparing the packages at Red Sands for Lamar. Since he is only sixteen, I think we should pick one with the online classroom course, because the [[R2.1]] he would get afterward could lower the cost of insuring him.</p><p>I first assumed Complete was the obvious choice, but Standard plus the car for the road test comes to [[R2.2]], which is $15 less, and it includes the same warm-up lesson. Also, because of his age, [[R2.3]] will have to sign his registration form.</p><p>One catch: we live just past the city limits, so [[R2.4]]. Over ten lessons, that adds up.</p><p>Your mother is also thinking about the Refresher, to get her confidence back on the highway. She turns 70 on June 2, so if she starts in May, she [[R2.5]]. It might be worth waiting a few weeks.</p><p>Lourdes</p>',
          blanks: [
            { id: 'R2.1', o: ['certificate', 'warm-up lesson', 'road test car', 'pickup service'] },
            { id: 'R2.2', o: ['$875', '$890', '$780', '$860'] },
            { id: 'R2.3', o: ['one of us', 'Lamar himself', 'his instructor', 'your mother'] },
            { id: 'R2.4', o: ['each lesson will cost us $15 more', 'the school will not pick him up', 'each lesson will cost only $60', 'we must drive him to every test'] },
            { id: 'R2.5', o: ['would pay the full price', 'would get 10% off', 'could not take the Refresher', 'would need someone to sign for her'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A learner cancels a 2:00 p.m. lesson at 8:00 a.m. on the same day. The learner will', o: ['still pay for the lesson.', 'pay a $15 fee instead.', 'get the lesson moved for free.', 'be charged half the price.'] },
            { id: 'R2.7', q: 'A 22-year-old who lives downtown buys the Basic package and, at the same time, 5 extra lessons. The total is', o: ['$720.', '$770.', '$750.', '$815.'] },
            { id: 'R2.8', q: 'A 30-year-old who finishes the Standard package will', o: ['not receive the insurance certificate.', 'receive a certificate for cheaper insurance.', 'need a parent to sign the registration form.', 'get the car for the road test at no charge.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Growing Food in the Far North</h3><p><b>A.</b> In many remote northern communities, fresh fruit and vegetables arrive the same way as almost everything else: by plane. A head of lettuce may travel for days and pass through several warehouses before it reaches a store shelf, and by then it is often wilted as well as expensive. Bad weather can hold up a shipment for days, and the produce keeps ageing while it waits. Families in some fly-in communities pay two or three times what shoppers in southern cities pay for the same groceries, even with government programs that reduce the cost of shipping healthy food. The outdoor growing season is short, and in many places the ground stays frozen just below the surface all year. Yet northern summers have one great advantage: in June and July, the sun barely sets.</p><p><b>B.</b> Community greenhouses try to make the most of that light. In one Northwest Territories town, residents turned an old hockey arena with a broken cooling system into a greenhouse, keeping the roof and replacing the walls with clear panels. Families rent raised beds for a small fee and grow lettuce, carrots, herbs and even strawberries, while one section is set aside for the local school and for elders who can no longer garden on their own. Because the building traps heat, the season runs from May to late September, about two months longer than outdoors. Volunteers run the place, and there has been a waiting list for beds almost since it opened.</p><p><b>C.</b> Other projects rely on technology rather than sunshine. Shipping containers fitted with shelves, LED lights and systems that feed plants through water instead of soil can grow greens all year round, even at forty below. A single container can produce several hundred heads of lettuce a week. Most containers grow leafy greens and herbs, because root vegetables need far more space. The catch is energy. Many northern communities make their electricity with diesel generators, so running lights and heaters through the winter is costly, and some early projects closed when their funding ran out. The more successful ones have trained local residents to run the farms, rather than relying on staff flown in from the south.</p><p><b>D.</b> Supporters admit that none of these projects will feed a community on its own. Even the busiest greenhouse supplies only a small share of the vegetables people eat, and traditional foods from hunting and fishing remain far more important in many households. But organizers say the benefits go well beyond the harvest, and several schools now use the produce in their breakfast programs. Children who grow a carrot are more likely to eat one, they note, and the greenhouses have become social places, where neighbours who rarely meet in winter spend long summer evenings working side by side.</p>',
          questions: [
            { id: 'R3.1', q: 'Fresh produce often loses quality during its long trip north.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Part of one greenhouse is kept for people who cannot manage a garden alone.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Indoor farms in containers can keep producing in extreme cold.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'Government programs have cut the price of northern groceries in half.', fixed: true, a: 'E' },
            { id: 'R3.5', q: 'A former sports building lets plants be grown for a longer part of the year.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'Young people who help grow vegetables tend to eat more of them.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'Container farms use less electricity than greenhouses do.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Summer daylight in the North lasts for almost the whole night.', fixed: true, a: 'A' },
            { id: 'R3.9', q: 'More families have wanted space in the arena than it could offer from early on.', fixed: true, a: 'B' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Dogs Come to the Office?</h3><p>When a software company in Corner Brook began letting staff bring their dogs to work two years ago, it expected a handful of occasional visitors. Within a month, eleven dogs were coming in regularly, and the human resources manager, Mariko Hayashi, was writing a twelve-page policy. Pet-friendly offices are spreading across Canada, especially among smaller companies competing for young workers, but the trend is raising questions about who benefits and who pays the price.</p><p>Hayashi is a firm supporter. Since the program began, she says, fewer employees have left, and in exit surveys, several people who moved to other jobs listed the dogs among the things they would miss. She believes dogs also change the mood of a workplace in ways that are hard to measure. "People who would never talk to each other in the kitchen will stop and chat over a dog," she says. "That kind of conversation is how problems get solved." Even so, she insists the program works only because of strict rules: every dog must pass a behaviour assessment, owners must take their dogs outside at least every three hours, and any dog that barks repeatedly or jumps on people is sent home for a week.</p><p>Leopold Gagnier, a payroll specialist at a different company with a similar program, sees things differently. He has a moderate dog allergy, and although his employer moved his desk to the far side of the floor, his eyes still itch by mid-afternoon, because dog hair travels on clothing and through the ventilation. "I didn\'t want to be the person who ruined it for everyone," he says, "so for a year I just took allergy pills and said nothing." Gagnier argues that in most pet-friendly offices, the burden falls on the people who object, who must either speak up and look unfriendly or quietly put up with the problem. In his view, a program should need the agreement of every employee in the space before it begins.</p><p>Melvin Lavigne, a dog trainer who helps companies set up such programs, takes a middle position. Many dogs, he says, do not actually enjoy offices. Strange noises, crowds and long hours in a small space can leave them stressed, even when they look calm. He recommends starting with one dog-friendly day a week and a separate area with doors, rather than allowing dogs everywhere at once. He also points out that employees who are afraid of dogs, not only those with allergies, are often overlooked when policies are written.</p><p>Hayashi agrees that the program is not right for every workplace. Her company surveyed all staff anonymously before starting and set up a dog-free floor, which about a fifth of employees now use. But she rejects the idea that a single objection should be enough to stop a program. "If we needed everyone to agree on everything," she says, "we would still be arguing about the thermostat."</p>',
          questions: [
            { id: 'R4.1', q: 'The opening paragraph suggests that the Corner Brook program', o: ['grew faster than the company had expected.', 'was set up mainly to please older workers.', 'had a long written policy from the start.', 'was copied from a much larger company.'] },
            { id: 'R4.2', q: 'Hayashi mentions people chatting over a dog to suggest that dogs', o: ['can help colleagues work through problems.', 'make it harder for staff to stay focused.', 'should be kept out of the office kitchen.', 'are the main reason people join the company.'] },
            { id: 'R4.3', q: 'Gagnier kept quiet about his allergy for a year because he', o: ['feared being blamed for ending the program.', 'expected his symptoms to improve over time.', 'had been promised a desk on a separate floor.', 'did not realize the dogs were the cause.'] },
            { id: 'R4.4', q: 'Lavigne would most likely advise a company to', o: ['introduce dogs slowly and in a limited space.', 'allow dogs only for staff without allergies.', 'let dogs move freely so they stay calm.', 'test employees before letting dogs in.'] },
            { id: 'R4.5', q: 'Hayashi\'s remark about the thermostat suggests that', o: ['requiring everyone to agree is unrealistic.', 'staff argue more about heating than about dogs.', 'the dog-free floor is kept at a cooler temperature.', 'a single complaint is usually easy to settle.'] }
          ],
          reply: '<h3>Reader comment</h3><p>Our office began allowing dogs last spring, and this article could have been written about us. Like Ms. Hayashi, I have seen how a dog can [[R4.6]]; two coworkers who had not spoken in years now walk a beagle together at lunch.</p><p>But I also recognize myself in Mr. Gagnier\'s story. I am not allergic, but I have been nervous around dogs since I was a child, and as Mr. Lavigne says, people like me are [[R4.7]]. I would never ask to cancel the program, yet I agree with Mr. Gagnier that it is unfair when [[R4.8]].</p><p>A [[R4.9]], like the one at Ms. Hayashi\'s company, would help a great deal, and beginning with [[R4.10]] would give everyone, dogs included, time to adjust.</p>',
          blanks: [
            { id: 'R4.6', o: ['get quiet coworkers chatting together', 'cut down the number of meetings we hold', 'lower the cost of heating the office', 'replace the need for a staff survey'] },
            { id: 'R4.7', o: ['often forgotten when the rules are made', 'usually given a floor of their own', 'asked to take a behaviour assessment', 'the first to complain about anything'] },
            { id: 'R4.8', o: ['the objectors carry the whole burden', 'dogs are sent home for barking once', 'owners walk their dogs every three hours', 'a trainer is not hired from the start'] },
            { id: 'R4.9', o: ['floor kept free of dogs', 'twelve-page policy', 'weekly assessment', 'separate dog room'] },
            { id: 'R4.10', o: ['one dog day a week', 'eleven dogs at once', 'a vote of all staff', 'dogs on every floor'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Two weeks ago, you bought a $1,650 refrigerator from a local appliance store and paid an extra $80 for delivery and installation. You are happy with the refrigerator itself. However, while carrying it into your kitchen, the delivery crew left a long, deep scratch in your hardwood floor and drove away without mentioning it. When you phoned the store, a staff member said that delivery is handled by a separate company and gave you a phone number that nobody answers.</p><p>Write an email to the store manager. In your email, do the following:</p><ul><li>Describe what happened and what you have done about it so far.</li><li>Explain why the store\'s response is not acceptable to you.</li><li>Say what you would like the store to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer is closing the small coffee counter in your building, which about 60 staff use, and has a budget to replace it with one of two options. It is asking employees which one they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Bring in a catering company to serve a hot lunch every weekday, which the employer would subsidize so that each meal costs staff $6. However, there would be only two dishes a day, and orders must be placed by 10:00 a.m.' },
            { key: 'B', label: 'Option B', text: 'Renovate the staff room into a full kitchen with two fridges, three microwaves, a sink and seating for 20, free for everyone to use. However, it would be crowded at noon, and staff would have to take turns cleaning it.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a skill you would like to learn in the next few years, and explain why it interests you.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has just been promoted to supervise the team she has worked on for four years, and she starts in two weeks. One of the people she will now supervise is her closest friend at work, and another applied for the same job and did not get it. She is also expected to cut the team\'s overtime by a third. Give your friend advice on how to make a good start in her new role.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when someone else\'s opinion made you change your mind about something important. What was the situation, what did they say, and would you make the same decision again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/27/scene.jpg" alt="Volunteers at work in a busy food bank warehouse">', picture: 'The inside of a large, brightly lit food bank warehouse on a busy morning, drawn as a busy, colourful comic scene. Tall metal shelves full of cans and boxes line the back wall, a long sorting table stands in the middle, and a wide loading door on the right is open, with a white delivery van backed up to it. There are 14 people, most wearing matching aprons. Clearly visible activities: (1) a volunteer standing on a step stool, placing cans on the highest shelf; (2) and (3) two volunteers at the long table sorting donated cans into plastic crates; (4) a teenager taping shut a full cardboard box; (5) a worker driving a small forklift that carries a pallet of flour bags; (6) a woman weighing a box on a floor scale and writing the weight on a clipboard; (7) a man unloading boxes from the back of the delivery van; (8) an older volunteer holding a cereal box close to her glasses, checking the date on it; (9) and (10) two volunteers filling mesh bags with potatoes from a large bin; (11) a coordinator at the sign in table handing an apron to (12) a newly arrived volunteer. About to happen cues for Task 4: (13) a young volunteer is pushing a hand truck stacked with five tall boxes around the end of a shelf while looking back over her shoulder to talk, and the top box is clearly tipping over; and (14) a volunteer carrying a large tray of eggs with both hands is about to step on a can that has rolled off the table onto the floor in front of her. One sign above the table by the door: VOLUNTEERS SIGN IN HERE.' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/27/scene.jpg" alt="Volunteers at work in a busy food bank warehouse">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You want to get fit this year and can spend about $600 over the next twelve months. You work full time and have a one-year-old at home. Choose the option you prefer. In the next section, you will need to persuade a friend that your choice is better.',
          choices: [
            { key: 'A', title: 'Community centre pass', image: '<img src="tests/img/27/opt_A.jpg" alt="Photo: Community centre pass">', picture: 'A bright indoor community centre pool with lane ropes, seen from the side, with an indoor walking track running along a balcony above it and no people in view.', facts: ['$240 for a full year', 'Pool, weight room and indoor walking track', 'Fitness classes cost $5 extra each time', 'Free child-minding, weekday mornings only'] },
            { key: 'B', title: 'Private gym with classes', image: '<img src="tests/img/27/opt_B.jpg" alt="Photo: Private gym with classes">', picture: 'A modern private gym studio with rows of exercise bikes facing a wall of mirrors, lit with soft coloured lights, with no people in view.', facts: ['$55 a month, plus a $99 joining fee', 'Unlimited classes and one personal trainer session a month', 'Open 5:00 a.m. to 11:00 p.m.', '20-minute drive from home; no child-minding'] }
          ],
          third: { key: 'C', title: 'Home exercise equipment', image: '<img src="tests/img/27/opt_C.jpg" alt="Photo: Home exercise equipment">', picture: 'A used treadmill and a small rack of dumbbells set up in a cramped spare bedroom at home, next to a folded baby crib.', facts: ['Used treadmill and weights: $550', 'Exercise any time without leaving home', 'No classes or coaching', 'Takes up most of the spare room'] },
          persuade: 'Your friend thinks buying home exercise equipment would be better. Persuade your friend that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Months ago, you promised your sister that you would paint her baby\'s room with her this Saturday. The baby is due in three weeks, and her doctor has told her not to do the painting herself. Today, a close friend called. The drummer in his band is sick, and the band has a paid show at a wedding on Saturday afternoon. You are the only other drummer he knows, and the couple has already paid a deposit.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your sister. Explain why you cannot help her paint on Saturday.</p><p><b>Option B:</b> Talk to your friend. Explain why you cannot play with his band on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Every summer, more travellers in motorhomes and camper vans park overnight in the free public lot beside your town\'s waterfront. Local business owners say these visitors spend money in shops and restaurants and should be welcomed. Many residents complain about noise, litter and the loss of parking for people who live in town, and the owner of the local campground says the visitors are simply avoiding his fees.</p><p>Town council will vote next month on banning overnight parking in the lot, and it has asked residents for their opinions. Should the town ban overnight parking at the waterfront? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a garden centre and see this unusual garden hose reel for $189. Call your friend, who has just moved into a townhouse with a small backyard and a front flower bed, and who has said she can spend about $150 on garden equipment. The reel is very heavy to pull when the hose is full of water. Describe the hose reel and explain whether you think your friend should buy it.', image: '<img src="tests/img/27/object.jpg" alt="An unusual garden hose reel in a garden centre">', picture: 'One strange garden hose reel standing alone on the floor of a garden centre, with a small paper price tag reading $189. Unusual features, all clearly visible: (1) four large rubber wheels, like a small wagon, with a long pulling handle; (2) a flat solar panel on top of the frame; (3) a small digital timer screen with buttons on one side; (4) a padded seat cushion fixed on top of the reel, so a person could sit on it; (5) a long green hose wound on the reel, ending in a nozzle shaped like a big flower; (6) a cup holder and a small round loudspeaker on the handle.' }
      ]
    }
  });
})();
