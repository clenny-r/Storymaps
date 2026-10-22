/* Rowe CELPIP Mock Exam: Test T content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/T/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'T',
    title: 'Mock Test 20',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { NIKO: { name: 'Niko', g: 'm', skin: '#e8c39e', hair: '#3b2a20', shirt: '#117a65', style: 'short' }, ASTRID: { name: 'Astrid', g: 'f', skin: '#f2cfb0', hair: '#c49a42', shirt: '#cb4335', style: 'long' } },
        segments: [{
          lines: [
            ['NIKO', 'The parcel counter closes at six, and it\'s already twenty to. We\'ll never make it on foot.'],
            ['ASTRID', 'We could grab two of those share bikes by the library. It\'s five minutes, tops.'],
            ['NIKO', 'Sure, but the parcel\'s a whole microwave. How are we supposed to ride with that?'],
            ['ASTRID', 'Hmm, good point. Okay, I\'ll ride over and ask them to hold it till tomorrow, and we\'ll come back with the car.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Niko object to taking the share bikes?', o: ['The item is too bulky to carry on a bike.', 'The library is too far from the counter.', 'The counter has already closed for the day.', 'He would rather drive the car over now.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { EMEKA: { name: 'Emeka', g: 'm', skin: '#5c3a21', hair: '#120c08', shirt: '#1f618d', style: 'short' }, PHILIPPA: { name: 'Philippa', g: 'f', skin: '#f0c9a6', hair: '#8e5b33', shirt: '#7d3c98', style: 'curly' } },
          segments: [
            {
              lines: [
                ['EMEKA', 'Pip, the power company just texted. They\'re saying the outage could last until Thursday night. Not tonight. Thursday.'],
                ['PHILIPPA', 'Thursday? It\'s only Monday. Did they say why?'],
                ['EMEKA', 'The freezing rain brought down a big line out by the highway, and the crews can\'t get near it until the ice comes off the trees. Branches are still falling all over the place.'],
                ['PHILIPPA', 'Okay. So the house is going to get cold, fast. It\'s already down to sixteen in the kitchen, and that\'s with the fireplace going.'],
                ['EMEKA', 'And we\'ve got maybe two nights of wood left in the shed, if we\'re careful with it.'],
                ['PHILIPPA', 'Then there\'s the freezer. I just filled it with all that meat from the farm sale. That\'s, what, three hundred dollars\' worth?'],
                ['EMEKA', 'More like four, once you add the berries. If we keep the lid shut, it should stay frozen for about two days. After that, it\'s garbage.'],
                ['PHILIPPA', 'So the freezer can\'t wait until Thursday. We can always put on more sweaters, but the food has a deadline.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why will the power stay off for so long?', o: ['Crews cannot safely reach the damaged line yet.', 'The power company is short of repair workers.', 'The highway has been closed because of the ice.', 'Several lines near the house need to be replaced.'] },
                { id: 'L1.2', q: 'About how much is the frozen food worth?', o: ['Close to $400', 'About $300', 'Less than $200', 'More than $500'] },
                { id: 'L1.3', q: 'What does Philippa conclude?', o: ['The food needs a solution sooner than the house does.', 'They should leave the house before Thursday night.', 'The meat from the farm sale cost them too much.', 'The firewood will run out before the food spoils.'] }
              ]
            },
            {
              lines: [
                ['PHILIPPA', 'What about your sister\'s place in Smiths Falls? Didn\'t she say they never lost power?'],
                ['EMEKA', 'She did, and she\'d take the food in a heartbeat. But that\'s forty minutes on roads like skating rinks, and I\'d be doing it twice.'],
                ['PHILIPPA', 'Twice?'],
                ['EMEKA', 'Drop off the food, then come back to keep an eye on the pipes. If the house goes below zero and a pipe bursts, that\'s thousands, not a few steaks.'],
                ['PHILIPPA', 'Okay. The town opened the community centre as a warming centre this morning. It\'s got a generator.'],
                ['EMEKA', 'For people, sure. I doubt they\'d let us plug in a chest freezer.'],
                ['PHILIPPA', 'True. But Winifred next door bought a small generator after the last storm, and she\'s at her son\'s in Ottawa till the weekend. Could we borrow it, just for the freezer?'],
                ['EMEKA', 'Maybe. I\'ll text her. The catch is gas. The station on Main Street is closed, no power, no pumps. The one on the highway has its own generator, but that\'s twenty minutes away.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why is Emeka reluctant to take the food to his sister\'s?', o: ['It would mean two risky drives on icy roads.', 'His sister\'s freezer is already full of food.', 'His sister\'s home has also lost its power.', 'The roads to Smiths Falls have been closed.'] },
                { id: 'L1.5', q: 'Why does Emeka mention the pipes?', o: ['An empty, unheated house could suffer costly damage.', 'The pipes at his sister\'s house have already frozen.', 'The generator will also be needed to warm the pipes.', 'The warming centre asked residents to check them.'] },
                { id: 'L1.6', q: 'What problem remains with Philippa\'s idea?', o: ['Getting fuel for the generator will not be easy.', 'Winifred would have to come back from Ottawa first.', 'The generator is too small for a chest freezer.', 'The warming centre needs the generator for people.'] }
              ]
            },
            {
              lines: [
                ['EMEKA', 'Okay, Winifred says go ahead. The key to her garage is under the blue flowerpot, and there are two full cans of gas in there.'],
                ['PHILIPPA', 'Oh, thank goodness. How long does one can last?'],
                ['EMEKA', 'She says about five hours. So if we run it two hours in the morning and two at night...'],
                ['PHILIPPA', 'Then the gas lasts till about Wednesday night, and the power\'s supposed to be back Thursday. Tight, but okay.'],
                ['EMEKA', 'Ah, wait. She just texted again. Sorry, one of the cans is only half full. She forgot she used some on the snowblower.'],
                ['PHILIPPA', 'Hmm. Then we skip the morning run, and I\'ll throw the old sleeping bags over the freezer during the day to keep the cold in.'],
                ['EMEKA', 'And if the power\'s late?'],
                ['PHILIPPA', 'I\'ll walk over to the warming centre this afternoon. Somebody there must have a truck and a reason to head out to the highway.']
              ],
              questions: [
                { id: 'L1.7', q: 'How many hours can the generator run on the gas they have?', o: ['About seven and a half', 'About ten', 'About five', 'About four'] },
                { id: 'L1.8', q: 'What does Philippa hope to arrange at the warming centre?', o: ['A way to bring back more gas from an open station', 'A place to keep their frozen food until Thursday', 'A ride to Ottawa to return Winifred\'s generator', 'A spot where they can plug in the generator overnight'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLERK: { name: 'Registration clerk', g: 'f', skin: '#e3b28b', hair: '#5d4037', shirt: '#a93226', style: 'bun' }, GURPREET: { name: 'Gurpreet', g: 'm', skin: '#a9714b', hair: '#151515', shirt: '#2e4053', style: 'short' } },
          segments: [{
            lines: [
              ['CLERK', 'Hi there, welcome to Red Deer Minor Hockey. Are you here to register someone?'],
              ['GURPREET', 'Yes, my son, Arjun. He\'s nine, and he\'s never played on a team before. We just moved here from Surrey in August.'],
              ['CLERK', 'Well, welcome to Alberta! So at nine, he\'d be in our U11 house league. Registration for the season is six hundred and forty dollars.'],
              ['GURPREET', 'Oh. Okay. That\'s, um, quite a bit more than I\'d budgeted for. What does it cover?'],
              ['CLERK', 'Ice time, coaching, and a jersey and socks. Equipment is separate, and honestly, that\'s where it adds up. Skates, gloves, pads, a helmet. Buying everything new, you\'re looking at another five or six hundred.'],
              ['GURPREET', 'And he\'ll outgrow half of it by next fall.'],
              ['CLERK', 'Exactly. That\'s why I\'d send you to our equipment swap first. It\'s Saturday morning here at the arena. Families bring in what their kids have outgrown.'],
              ['CLERK', 'You can usually outfit a beginner for under a hundred and fifty. The one thing we tell parents to buy new is the helmet.'],
              ['GURPREET', 'That\'s really helpful. Is there any way to spread out the registration fee?'],
              ['CLERK', 'Yes, three instalments: September, October and November. There\'s also a fee assistance program through the city. If your household qualifies, it covers up to half of registration.'],
              ['GURPREET', 'How long does that take? I don\'t want him missing the first practices.'],
              ['CLERK', 'Usually two or three weeks. But you don\'t need to wait. Register him today with the first instalment, and if the assistance comes through, we take it off the later payments.'],
              ['GURPREET', 'Perfect. Oh, and my wife mentioned something about parents having to volunteer?'],
              ['CLERK', 'Right. Every family does ten hours over the season: timekeeping, running the canteen, that sort of thing. Families who\'d rather not can pay an extra two hundred dollars instead.'],
              ['GURPREET', 'I\'d rather do the hours. I work weekends at the hospital, but I\'m sure I can find some time during the week.'],
              ['CLERK', 'Most of our practices are weekday evenings, so you\'ll have plenty of chances.']
            ],
            questions: [
              { id: 'L2.1', q: 'How does Gurpreet first react to the registration fee?', o: ['He finds it higher than he had planned for.', 'He thinks it is lower than the fees in Surrey.', 'He is relieved that it includes the equipment.', 'He assumes it must cover a full set of gear.'] },
              { id: 'L2.2', q: 'Why does the clerk recommend the equipment swap?', o: ['Used gear costs far less and suits a growing child.', 'New helmets cannot be bought at the arena.', 'Beginners are not allowed to buy new skates.', 'The swap is held just before the first practice.'] },
              { id: 'L2.3', q: 'What does the clerk say about the fee assistance?', o: ['Arjun can be registered before it is approved.', 'It pays for the first of the three instalments.', 'Families must apply for it before registering.', 'It usually takes the city a week to approve.'] },
              { id: 'L2.4', q: 'If the family gets the most assistance possible, what will registration cost?', o: ['$320', '$640', '$440', '$213'] },
              { id: 'L2.5', q: 'How will Gurpreet most likely meet the volunteer requirement?', o: ['By helping out at weekday evening practices', 'By paying the extra fee to the association', 'By working shifts at the weekend games', 'By running the canteen at the equipment swap'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#c68642', hair: '#2a1b12', shirt: '#4a235a', style: 'short' }, CORINNE: { name: 'Corinne Haldane', g: 'f', skin: '#f2cfb0', hair: '#a0522d', shirt: '#148f77', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Corinne Haldane, who has lived on Denman Island for eleven years and takes the ferry to work every weekday. Corinne, what\'s that commute really like?'],
              ['CORINNE', 'Well, the crossing itself is only about ten minutes. But you can\'t just drive on. In summer, I\'m in the lineup forty minutes early, because if the boat fills up, you wait for the next sailing, and that\'s another hour.'],
              ['HOST', 'So a ten-minute crossing can turn into a two-hour trip.'],
              ['CORINNE', 'On a bad day, yes. Winter\'s much easier. Most mornings I could show up five minutes before and still get on.'],
              ['HOST', 'Why choose that life?'],
              ['CORINNE', 'Honestly, at first it wasn\'t really a choice. My husband and I were renting in Victoria and couldn\'t afford to buy anything.'],
              ['CORINNE', 'A small house here cost about the same as a one-bedroom condo there. We figured we\'d stay three or four years and move back.'],
              ['HOST', 'And eleven years later...'],
              ['CORINNE', 'Eleven years later, I can\'t picture leaving. You know every face on the ferry. One January my car wouldn\'t start, and three neighbours had offered me a ride before I\'d even picked up the phone.'],
              ['HOST', 'You\'ve also become a bit of a spokesperson for islanders.'],
              ['CORINNE', 'I chair our ferry advisory committee. We meet with the operator four times a year, and our big fight lately has been the last sailing at night.'],
              ['CORINNE', 'It leaves the other side at ten-thirty, which sounds fine until you\'re a nurse whose shift ends at eleven.'],
              ['HOST', 'Has anything changed?'],
              ['CORINNE', 'A little. Starting in April, there\'ll be a later sailing on Fridays and Saturdays. It\'s not what we asked for, which was every night of the week, but it\'s a foot in the door.'],
              ['HOST', 'And everyday things, like groceries?'],
              ['CORINNE', 'There\'s a general store, but it\'s pricey, so most of us do one big shop in town each week. You learn to keep a list on the fridge, and you never, ever run out of coffee.'],
              ['HOST', 'What would you tell someone thinking of moving to an island?'],
              ['CORINNE', 'Spend a winter first. Everybody falls in love in July. But in November, when the wind cancels three sailings in a row and you\'ve got a dentist appointment on the other side, that\'s when you find out if it\'s really for you.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why does Corinne join the ferry lineup early in summer?', o: ['Missing a full boat would mean a long delay.', 'The crossing itself takes longer in summer.', 'Summer sailings leave earlier than winter ones.', 'She has to buy her ticket at the terminal first.'] },
              { id: 'L3.2', q: 'Why did Corinne and her husband first move to the island?', o: ['Owning a home there was within their budget.', 'Her husband had been offered work on the island.', 'They wanted to raise a family in a small town.', 'Their landlord in Victoria had sold their condo.'] },
              { id: 'L3.3', q: 'Why does Corinne mention the morning her car would not start?', o: ['To show how much islanders look out for each other', 'To explain why she now prefers to take the bus', 'To describe how harsh the winters can be there', 'To point out that the ferry crew is very helpful'] },
              { id: 'L3.4', q: 'What has the committee been asking the operator for?', o: ['A late crossing seven days a week', 'More sailings on Friday and Saturday mornings', 'Reduced fares for nurses on night shifts', 'A sailing that leaves the island at ten-thirty'] },
              { id: 'L3.5', q: 'How does Corinne feel about the change starting in April?', o: ['It is a useful step, though it falls short.', 'It is exactly what the committee requested.', 'It will mostly benefit weekend tourists.', 'It comes too late to help the nurses.'] },
              { id: 'L3.6', q: 'Why does Corinne advise newcomers to spend a winter first?', o: ['The hardest parts of island life appear off-season.', 'Houses on the island are cheaper during winter.', 'Summer ferries are too crowded for newcomers.', 'Islanders tend to be more welcoming in the colder months.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1a5276', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Kitchener residents who would like to ride to work could soon get help paying for it. City council voted eleven to two last night to launch a rebate program for electric bicycles, the first of its kind in the region.'],
              ['NEWS', 'Starting May first, residents can apply for a rebate of up to six hundred dollars on a new e-bike, or up to three hundred on a used one bought from a registered dealer.'],
              ['NEWS', 'The program has a budget of two hundred and forty thousand dollars for its first year.'],
              ['NEWS', 'Households earning less than fifty thousand dollars a year will be able to apply two weeks before everyone else.'],
              ['NEWS', 'Councillor Anita Brzezinski, who proposed the program, says the goal is to take cars off the road at rush hour.'],
              ['NEWS', 'A city survey last fall found that four in ten residents would consider cycling to work if hills and longer distances were less of a challenge.'],
              ['NEWS', 'Not everyone on council was convinced. The two councillors who voted against the plan argued that the money should go into more protected bike lanes instead. Many residents, they said, feel unsafe riding next to traffic, whether their bike has a motor or not.'],
              ['NEWS', 'Brzezinski replied that the city needs both, and pointed out that spending on bike lanes was already increased in last year\'s budget.'],
              ['NEWS', 'Local bike shops welcomed the news. The owner of one downtown shop said customers often leave without buying once they see price tags of two thousand dollars or more.'],
              ['NEWS', 'Anyone who receives a rebate must keep the bike for at least one year and agree to complete two short surveys about how they use it. Application forms will be posted on the city\'s website next month.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A city plan to make electric bicycles more affordable', 'A council vote to build new protected bike lanes', 'A survey of how residents travel to their jobs', 'A program to help bike shops sell used bicycles'] },
              { id: 'L4.2', q: 'If every rebate paid the full amount for a new bike, how many people could the first-year budget help?', o: ['About 400', 'About 800', 'About 240', 'About 600'] },
              { id: 'L4.3', q: 'Who will be able to apply before other residents?', o: ['Households with lower incomes', 'People buying from registered dealers', 'Residents who took part in the survey', 'Workers who commute at rush hour'] },
              { id: 'L4.4', q: 'Why did two councillors vote against the program?', o: ['They saw road safety as the bigger barrier to cycling.', 'They felt e-bikes were too fast for the existing lanes.', 'They wanted the rebate limited to used bicycles only.', 'They doubted that many residents would want to cycle.'] },
              { id: 'L4.5', q: 'What does the bike shop owner\'s comment suggest?', o: ['Cost has been putting off many possible buyers.', 'Most customers would prefer a used bicycle.', 'Shops plan to raise prices once rebates begin.', 'Few local people are interested in e-bikes.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Camera club: spring plans', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { NATALIA: { name: 'Natalia', g: 'f', skin: '#e8c3a0', hair: '#4a2c17', shirt: '#b03a2e', style: 'long' }, MALCOLM: { name: 'Malcolm', g: 'm', skin: '#f2cfb0', hair: '#9c7a54', shirt: '#2e4053', style: 'short' }, JOSEPH: { name: 'Joseph', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#239b56', style: 'bald' } },
          segments: [{
            lines: [
              ['NATALIA', 'Okay, let\'s start. The arts council approved our grant, so we have three thousand dollars to spend before June.'],
              ['MALCOLM', 'That\'s great news. I\'m guessing everyone already has a favourite way to spend it.'],
              ['JOSEPH', 'I\'ll go first. Our projector is twelve years old. Half our film nights, the picture\'s too dark to enjoy.'],
              ['NATALIA', 'A new one is about eighteen hundred, right? That\'s more than half the grant on one item.'],
              ['JOSEPH', 'Actually, I checked again yesterday. The model we liked went up. It\'s two thousand now.'],
              ['MALCOLM', 'Hmm. And what about the spring exhibition? Printing and framing forty photos isn\'t cheap either.'],
              ['NATALIA', 'Last year the prints cost about fifteen hundred. Members paid half of that themselves.'],
              ['MALCOLM', 'Which is exactly why only twelve people entered. Some of our newer members just couldn\'t afford it.'],
              ['JOSEPH', 'So you\'d want the grant to cover all of the printing this year?'],
              ['MALCOLM', 'All of it, yes. The exhibition is how most new members find us in the first place.'],
              ['NATALIA', 'I hear you both. But remember, our application promised something else too. Workshops for beginners.'],
              ['JOSEPH', 'Oh, right. If we don\'t hold at least one, we can forget about next year\'s grant.'],
              ['NATALIA', 'Exactly. A good instructor charges about five hundred for a full Saturday.'],
              ['MALCOLM', 'So, the workshop, plus Joseph\'s projector. That leaves hardly anything for the prints.'],
              ['MALCOLM', 'What if we rent a projector instead? The library rents them for forty dollars a night.'],
              ['JOSEPH', 'We meet every second Friday. That adds up, and we\'d be hauling it back and forth every time.'],
              ['NATALIA', 'Okay, what about this? The library has a screening room with a projector already built in.'],
              ['NATALIA', 'If we moved film nights there, we wouldn\'t need our own projector at all.'],
              ['JOSEPH', 'It\'s a nice room, but the library closes at nine. Most of our films run past that.'],
              ['MALCOLM', 'Then we start at six-thirty instead of seven-thirty. Families with young kids might actually prefer that.'],
              ['JOSEPH', 'I suppose. I\'m not thrilled, but I\'d rather give up the late start than shrink the exhibition.'],
              ['NATALIA', 'Good. So, the workshop, all the printing, and the rest toward a shared lens kit?'],
              ['MALCOLM', 'Or keep some in reserve. Things always end up costing more than we plan.'],
              ['JOSEPH', 'Agreed. Natalia, can you ask the library about booking the room on Friday nights?'],
              ['NATALIA', 'I\'ll call first thing tomorrow. Fingers crossed the room is free on Fridays.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To agree on how to use some new funding', 'To choose the photos for the spring exhibition', 'To compare prices for a replacement projector', 'To prepare an application for an arts grant'] },
              { id: 'L5.2', q: 'What does Joseph correct about the projector?', o: ['It costs more than Natalia believed.', 'It is older than twelve years.', 'The library will lend it for free.', 'It is cheaper than the old model.'] },
              { id: 'L5.3', q: 'Why does Malcolm want the grant to pay for all of the printing?', o: ['Its cost kept some members from taking part.', 'Last year\'s prints were of poor quality.', 'The arts council asked for a larger exhibition.', 'Members asked for bigger frames this year.'] },
              { id: 'L5.4', q: 'Why does Natalia bring up the workshops?', o: ['The club had committed to them to get the money.', 'Beginners asked for them at the last meeting.', 'They cost much less than a new projector.', 'An instructor offered to teach on a Saturday.'] },
              { id: 'L5.5', q: 'If the club paid for the workshop and the projector, how much would be left for printing?', o: ['$500', '$700', '$1,000', '$1,200'] },
              { id: 'L5.6', q: 'Why does Joseph object to renting a projector?', o: ['It would be costly and awkward over many nights.', 'The library does not rent projectors on Fridays.', 'A rented projector would be as dim as the old one.', 'Film nights are held only a few times a year.'] },
              { id: 'L5.7', q: 'What is Joseph\'s attitude toward starting film nights earlier?', o: ['He accepts it without much enthusiasm.', 'He believes families will be unhappy.', 'He is excited about the screening room.', 'He insists on keeping the later start.'] },
              { id: 'L5.8', q: 'What can be inferred about the club\'s plan?', o: ['It depends on the library\'s answer.', 'The lens kit has already been ordered.', 'The exhibition will be smaller this year.', 'Film nights will move to Saturdays.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Caring for older adults',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#e0b48f', hair: '#4a3020', shirt: '#7b241c', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'In provinces across Canada, the number of people over eighty-five is growing faster than any other age group. That raises a hard question for governments: should new money go mainly into care at home, or into more beds in long-term care homes?'],
              ['NARR', 'Beatrice Mwangi manages a team of home care nurses in Regina. Her first argument is simply what older people want. In surveys, nearly nine in ten say they hope to stay in their own homes for as long as possible.'],
              ['NARR', '"Nobody dreams of moving into a facility," she says. "They want their own kitchen, their garden, their neighbours."'],
              ['NARR', 'Her second argument is cost. A single day in a long-term care bed, she points out, can cost the system more than a week of regular home visits.'],
              ['NARR', 'Putting money into home care, she says, lets a province help far more people with the same budget. She adds that seniors who stay at home tend to stay more active, because they keep doing small daily tasks like cooking and shopping.'],
              ['NARR', 'Mwangi admits that home care has a weakness. Some seniors who stay at home end up spending most days alone, and loneliness, she says, can harm health as much as a fall.'],
              ['NARR', 'Her answer is to fund more adult day programs, where seniors spend a few hours a week in company.'],
              ['NARR', 'Rémi Castonguay sees it differently. A researcher who studies aging in Sherbrooke, he says the shortage of long-term care beds is already causing a crisis in hospitals. In his region, the wait for a long-term care bed is now more than a year.'],
              ['NARR', 'In some regions, he notes, one hospital bed in seven is taken by an older patient who no longer needs hospital care but has nowhere suitable to go. The result is longer waits for surgery and emergency care for everyone else.'],
              ['NARR', 'His second concern is families. Home care visits are often short, sometimes only fifteen or twenty minutes, to help with bathing or medication. The rest of the day, he says, falls to spouses and grown children, many of whom work full time.'],
              ['NARR', '"We call home care cheaper," Castonguay says, "but only because we don\'t count the hours that daughters and sons put in for free." He has interviewed caregivers who left their jobs, or became ill themselves from the strain.'],
              ['NARR', 'He does not reject home care. For seniors who are still fairly independent, he agrees, it is often the best choice. But for people with advanced dementia, who may need help through the night, a few short visits cannot replace care around the clock.'],
              ['NARR', 'Mwangi responds that the solution is not more beds but better home care, with longer visits and overnight support where it is needed. Castonguay replies that in many areas such services exist only on paper, because there are not enough workers to provide them.'],
              ['NARR', 'On one point they agree: whichever direction governments choose, the shortage of personal support workers will have to be solved first.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['How public money for the care of seniors should be directed', 'Why older adults prefer to move in with their families', 'How hospitals are working to shorten their waiting lists', 'Why fewer young people are choosing to become home care nurses'] },
              { id: 'L6.2', q: 'What is Mwangi\'s second argument for home care?', o: ['It lets a fixed budget reach more seniors.', 'Older adults recover from falls much faster in their own homes.', 'Nurses would rather work in the community.', 'Families can share the cost of home visits.'] },
              { id: 'L6.3', q: 'What drawback of home care does Mwangi admit?', o: ['It can leave some seniors cut off from others.', 'Its visits are usually too short to be useful.', 'Seniors living at home tend to fall more often.', 'Adult day programs are expensive to run.'] },
              { id: 'L6.4', q: 'Why does Castonguay mention hospital beds?', o: ['To show that a lack of care spaces affects other patients', 'To argue that hospitals should care for seniors long term', 'To explain why the cost of surgery has risen sharply', 'To show that many seniors would rather stay in hospital'] },
              { id: 'L6.5', q: 'What does Castonguay suggest about claims that home care is cheaper?', o: ['They ignore the unpaid work done by relatives.', 'They exaggerate the price of long-term care beds.', 'They are based only on surveys of older adults.', 'They include too many hospital expenses.'] },
              { id: 'L6.6', q: 'How does Castonguay respond to Mwangi\'s call for better home care?', o: ['He says such services are often unavailable in practice.', 'He says it would cost more than building new beds.', 'He agrees it would suit people with advanced dementia.', 'He thinks families would refuse overnight visitors.'] }
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
          passage: '<h3>Message</h3><p>Hi Tobias,</p><p>It has been far too long since my last message, and I am sorry. As you can imagine, the past eight months have been a blur. When Martin and I signed the papers on the old farmhouse outside Picton last October, we thought we would have all winter to get it ready for guests. We were wrong. The roof alone took six weeks, and the electrician discovered that half the wiring was older than the two of us put together.</p><p>Still, we opened on schedule on the first of May, and so far it has gone better than we dared to hope. We have four guest rooms, and every one of them has been booked every weekend since we opened. Weekdays are quieter, which is honestly a relief, because breakfast for eight people at seven-thirty is a very different thing from breakfast for two. Martin bakes the bread, and I do everything else, including, it turns out, repairing the dishwasher at midnight.</p><p>The reviews have been kind. Guests love the garden and the fact that we are only ten minutes from three wineries and the sand dunes at the provincial park. The one complaint we keep hearing is about the stairs. The staircase to the second floor is steep and narrow, and two older guests have asked whether we have a room on the ground floor. We do not, at least not yet. We would like to turn the old summer kitchen into a fifth room with its own entrance, but that would cost about $40,000, and the bank wants to see a full season of bookings before it will lend us any more.</p><p>Now, the real reason I am writing. Our first wedding party has booked the whole house for the last weekend of June, and Martin\'s mother, who was going to help us, has just had knee surgery and cannot travel. I know you have just finished your culinary course, and I remember you saying you wanted to see Ontario someday. Would you consider coming for that week? We cannot pay much, but you would have a room of your own, all the meals you can eat, and the whole following week to explore the County on your own.</p><p>No pressure at all. Just let me know.</p><p>Love,<br>Delphine</p>',
          questions: [
            { id: 'R1.1', q: 'Delphine mentions the wiring to show that', o: ['getting the house ready took more work than expected.', 'the house was older than the seller had claimed.', 'the electrician had made several costly errors.', 'they had to put off opening the bed-and-breakfast until summer.'] },
            { id: 'R1.2', q: 'Delphine welcomes the quieter weekdays because', o: ['serving a full house every morning is demanding.', 'she needs that time to answer messages about weekend bookings.', 'Martin does all of the baking on weekdays.', 'the dishwasher usually breaks on weekends.'] },
            { id: 'R1.3', q: 'Delphine\'s remark about the dishwasher suggests that', o: ['her duties go well beyond what she had pictured.', 'she would rather bake the bread than Martin.', 'guests often complain that their dishes are not clean enough.', 'she has some training as a repair technician.'] },
            { id: 'R1.4', q: 'The guests who asked about a ground-floor room most likely', o: ['found the climb to the bedrooms difficult.', 'were hoping for a room with its own private entrance.', 'were members of the wedding party.', 'were bothered by noise from the kitchen.'] },
            { id: 'R1.5', q: 'The summer kitchen project is on hold mainly because', o: ['the couple must first show the business can succeed.', 'the bank has refused to lend them any more money.', 'Martin\'s mother will need that space while she recovers from surgery.', 'the roof repairs used up all of their savings.'] },
            { id: 'R1.6', q: 'Delphine thinks Tobias might accept because the visit', o: ['suits both his new skills and his wish to travel.', 'would pay him a good wage for a week of work in June.', 'would let him meet Martin\'s mother at last.', 'would count as practice for his course.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Delphine,</p><p>What a lovely surprise, and congratulations on the opening! A full house every weekend in your first month is something most new owners only dream of. I was sorry to hear about [[R1.7]], so please pass on my best wishes for a quick recovery.</p><p>The answer is yes. My last exam was on Friday, so I am completely free, and cooking breakfast for [[R1.8]] will be great practice before I start looking for a job. I will fly into Toronto and rent a car, because I would love to stay on afterward and visit the wineries and [[R1.9]] that are only ten minutes from you.</p><p>Please do not worry about paying me. A bed, good food and [[R1.10]] are more than enough. And if the bank agrees to your loan next spring, I would be happy to come back and help with [[R1.11]]. Your older guests will thank you for it.</p><p>See you in June,<br>Tobias</p>',
          blanks: [
            { id: 'R1.7', o: ['Martin\'s mother\'s operation', 'the long winter of repairs', 'the trouble with your staircase', 'your broken dishwasher'] },
            { id: 'R1.8', o: ['a house full of wedding guests', 'two people at half past seven', 'the staff at the local wineries', 'Martin\'s family for the summer'] },
            { id: 'R1.9', o: ['the sandy hills at the provincial park', 'the garden your guests praise', 'the farm where you first stayed', 'the bakery Martin works at'] },
            { id: 'R1.10', o: ['a free week to look around', 'a share of the wedding fees', 'a ride from the airport', 'a reference for my course'] },
            { id: 'R1.11', o: ['turning the old kitchen into a room', 'repairing the steep, narrow staircase', 'baking the bread every morning', 'replacing the rest of the old wiring'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Golden Crust Bakery, Saskatoon: Custom Cake Orders</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Cake</th><th>Serves</th><th>Price</th><th>Minimum notice</th><th>Flavours</th><th>Pickup or delivery</th></tr></thead><tbody>' +
            '<tr><td>8-inch round</td><td>10 to 12</td><td>$48</td><td>3 days</td><td>Vanilla, chocolate, lemon</td><td>Pickup, or delivery with a larger cake</td></tr>' +
            '<tr><td>10-inch round</td><td>16 to 20</td><td>$68</td><td>3 days</td><td>Vanilla, chocolate, lemon, carrot</td><td>Pickup or delivery</td></tr>' +
            '<tr><td>Quarter sheet</td><td>24 to 30</td><td>$85</td><td>5 days</td><td>Vanilla, chocolate</td><td>Pickup or delivery</td></tr>' +
            '<tr><td>Half sheet</td><td>48 to 60</td><td>$140</td><td>7 days</td><td>Vanilla, chocolate, marble</td><td>Pickup or delivery</td></tr>' +
            '<tr><td>Two-tier</td><td>40 to 50</td><td>$210</td><td>14 days</td><td>Any flavour</td><td>Delivery only</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Photo printed on top: add $15 per cake. Not available on two-tier cakes.</li><li>Gluten-free: available on 8-inch and 10-inch rounds only. Add 20% to the cake price and allow 7 days\' notice.</li><li>Writing on the cake (up to 25 letters) is free on every size.</li><li>Delivery within city limits: $20, between 10 a.m. and 6 p.m. Delivery is free when the order total is over $150. Photo and gluten-free charges count toward this total; the delivery fee itself does not.</li><li>Orders cancelled less than 48 hours before pickup or delivery are charged 50% of the price.</li><li>Closed Mondays: no pickups or deliveries.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Joel,</p><p>I have looked at the Golden Crust list for Hélène\'s retirement party. With about 25 people coming, the smallest cake that will feed everyone is [[R2.1]]. The problem is that Thaddeus cannot eat gluten, and gluten-free is [[R2.2]]. So I suggest the big cake for most of us, plus an 8-inch gluten-free round for Thaddeus and anyone else who wants it.</p><p>Today is Thursday and the party is a week from tomorrow, so we still have time to [[R2.3]]. If we add Hélène\'s photo to the big cake, the two cakes would come to [[R2.4]]. Since that is over $150, [[R2.5]], which is good news, because neither of us can leave work to collect them.</p><p>Let me know by tomorrow and I will place the order.</p><p>Rohini</p>',
          blanks: [
            { id: 'R2.1', o: ['a quarter sheet', 'a 10-inch round', 'a half sheet', 'a two-tier cake'] },
            { id: 'R2.2', o: ['limited to the round cakes', 'offered on sheet cakes only', 'available on every size', 'only possible with a photo'] },
            { id: 'R2.3', o: ['order the gluten-free cake', 'order a two-tier cake instead', 'ask for a Monday delivery', 'add a photo to a two-tier cake'] },
            { id: 'R2.4', o: ['$157.60', '$148.00', '$142.60', '$172.60'] },
            { id: 'R2.5', o: ['the delivery fee would be waived', 'we would pay $20 for delivery', 'the bakery would need more notice', 'the small cake would still need to be picked up'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A customer wants a carrot cake delivered for about 18 guests at the lowest possible cost. The customer should order', o: ['a 10-inch round and pay for delivery.', 'an 8-inch round and pick it up.', 'a quarter sheet with free delivery.', 'a two-tier cake with free delivery.'] },
            { id: 'R2.7', q: 'A customer cancels a half-sheet order the day before pickup. The customer will be charged', o: ['$70.', '$140.', '$0.', '$35.'] },
            { id: 'R2.8', q: 'On a Saturday, someone asks for a half sheet to be ready the following Friday. The bakery will most likely say that', o: ['the order needs one more day of notice.', 'the cake can be picked up but not delivered.', 'the order is too large for a Friday party.', 'a photo cannot be printed on that size.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Learning a New Language as an Adult</h3><p><b>A.</b> Many adults believe that once childhood is over, the window for learning a new language has closed. Researchers who study language learning say the picture is more complicated. Young children do have one clear advantage: if they start early and hear a language every day, they usually end up with an accent that sounds native. Adults, however, often make faster progress in the first months, because they can use grammar rules, take notes and draw on what they already know about their first language. They are also better at noticing patterns, such as the way verb endings change. In one long-term study of newcomers to Canada, adults who arrived in their thirties were ahead of children in vocabulary after the first year, although the children had caught up within about five years.</p><p><b>B.</b> What seems to matter most is not age but the amount and type of practice. Teachers often talk about "time on task," meaning the hours a learner actually spends listening, speaking, reading and writing in the new language. A two-hour weekly class adds up to fewer than one hundred hours a year, while experts estimate that an English speaker needs well over a thousand hours to feel comfortable in a language such as French. Short daily sessions also tend to work better than one long weekly session, because the brain holds on to new words more firmly when it meets them again after a day or two. A learner who spends just twenty minutes a day on a language will practise for more than one hundred and twenty hours over a year.</p><p><b>C.</b> Confidence is another factor that is easy to overlook. Many adult learners say they understand far more than they are willing to say aloud, because they are afraid of sounding foolish in front of others. Conversation groups, where mistakes are expected and nobody is graded, can lower this barrier. Some community centres pair newcomers with long-time residents for weekly coffee chats, and organizers report that the residents often enjoy the arrangement as much as the learners do. Several centres now run waiting lists for volunteers.</p><p><b>D.</b> Technology has widened the choices available to busy adults. Phone apps make it easy to practise for ten minutes on a bus, and video calls allow learners in small towns to work with tutors hundreds of kilometres away, and many public libraries now give card holders free access to language apps. Teachers caution, however, that apps are better at building vocabulary than at developing the ability to hold a real conversation. Their advice is to combine tools: an app for daily review, a class or tutor for structure, and as much real conversation as possible, even when it feels awkward at first.</p>',
          questions: [
            { id: 'R3.1', q: 'New words are remembered better when learners meet them again soon afterward.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'In the early stages, older beginners can move ahead faster than young children.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'People who volunteer to chat with newcomers also get something out of it.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'A weekly class on its own provides only a small part of the practice a learner needs.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Adults who rely on grammar rules make fewer errors than those who learn mainly by listening.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Mobile tools are more useful for learning words than for learning to converse.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'Starting young makes it more likely that a learner will sound like a native speaker.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Tutors who teach by video call usually charge less than those who teach in person.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'The number of hours spent actively using a language is a key factor in progress.', fixed: true, a: 'B' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Do Career Fairs Still Work?</h3><p>Every spring, college gyms and convention halls across Canada fill with rows of folding tables, company banners and nervous job seekers holding copies of their résumés. Yet as more hiring moves online, some employers are asking whether the traditional career fair is still worth the time and money. Renting a booth at a large fair can cost an employer $1,500 or more, before travel and staff time are counted.</p><p>Teodor Ivanescu, who hires for a mid-sized construction company in Winnipeg, stopped attending fairs two years ago. "We would come home with two hundred résumés and hire maybe one person," he says. Most of the people he met, he adds, were students looking for something to do over the summer rather than people ready to commit to a trade. His company now posts its openings online and holds short video interviews, which he says lets him reach applicants in small towns who could never have travelled to a fair in the city.</p><p>Lorna MacPhee, who directs the career centre at a Manitoba college, believes employers who judge fairs only by the number of résumés collected are missing the point. "A fair is not a hiring event. It is a first conversation," she says. Students learn things at a booth that they cannot learn from a job posting, she argues: what a company is really like, which skills it actually values, and whether they can picture themselves working there. She admits that attendance at her college\'s fair has dropped since 2019 and that some booths sit empty for long stretches. Her response has been to make the fair smaller and more focused, with separate events for health care, the trades and technology.</p><p>For Adaeze Nwosu, a fair made all the difference. After finishing a business program, she sent out more than forty online applications and heard back from three. At a fair in Regina, she spent ten minutes talking with a manager from a credit union about a volunteer project she had led. "That would never have shown up in a keyword search of my résumé," she says. She was invited to an interview the following week and started the job a month later.</p><p>Bryce Kowalchuk, a human resources consultant, says both sides have a point. Online tools are more efficient for filling large numbers of similar positions, he says, but meeting face to face helps employers judge qualities such as enthusiasm and communication. He warns, though, that video interviews in which applicants record their answers to a screen, with no person on the other side, often leave candidates feeling that nobody is listening. Several of his clients stopped using them after strong applicants withdrew.</p><p>Kowalchuk\'s advice to job seekers is to treat a fair as preparation rather than a lottery: research the employers beforehand, prepare a short introduction, and follow up by email within two days. Ivanescu, for his part, says he might return to fairs if organizers grouped employers by industry. "If I knew everyone walking past my table was interested in construction," he says, "I would be there in a heartbeat."</p>',
          questions: [
            { id: 'R4.1', q: 'Ivanescu stopped attending career fairs mainly because', o: ['the people he met there rarely became employees.', 'renting a booth had become far too expensive.', 'video interviews were attracting more students.', 'the fairs were held too far from his office.'] },
            { id: 'R4.2', q: 'MacPhee\'s remark that a fair "is a first conversation" suggests that fairs', o: ['should be judged by more than immediate hiring.', 'are mainly useful for practising job interviews.', 'work best when students bring many résumés.', 'are mostly attended by students seeking summer work.'] },
            { id: 'R4.3', q: 'Nwosu\'s experience shows that', o: ['meeting in person can reveal strengths that applications hide.', 'online applications usually lead quickly to interviews.', 'business graduates are most often hired by credit unions.', 'volunteer work matters more to employers than a college diploma does.'] },
            { id: 'R4.4', q: 'According to Kowalchuk, one-way recorded interviews', o: ['can drive strong candidates away.', 'are the most efficient way to hire.', 'help employers judge enthusiasm.', 'are popular with small-town applicants.'] },
            { id: 'R4.5', q: 'Ivanescu would most likely go back to career fairs if', o: ['visitors were sorted by their field of interest.', 'the cost of renting a booth were reduced.', 'more students attended during the summer.', 'colleges provided private rooms for recorded video interviews.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I recruit staff for a hospital in Saskatoon, and I recognized my own experience in this article. Like Mr. Ivanescu, I have driven home from fairs with a box of résumés from students who [[R4.6]]. Still, I think Ms. MacPhee is right that a fair should be measured by [[R4.7]], not by the number of people hired that day.</p><p>Her idea of [[R4.8]] is one our region should copy. Our own health care fair last fall was the busiest I have ever attended. Ms. Nwosu\'s story is also a good reminder that a written application can hide [[R4.9]].</p><p>To job seekers, I would repeat Mr. Kowalchuk\'s advice: learn about the employers before you arrive, and [[R4.10]]. Recruiters meet hundreds of people in a day, and a short note helps us remember you.</p>',
          blanks: [
            { id: 'R4.6', o: ['wanted a seasonal job rather than a career', 'had driven in from small towns', 'were already working full time in a trade', 'had applied online the week before'] },
            { id: 'R4.7', o: ['the conversations it starts', 'the number of booths filled', 'the price of renting a table', 'the résumés collected there'] },
            { id: 'R4.8', o: ['holding separate fairs for each field', 'moving career fairs entirely online', 'charging employers less for booths', 'holding fairs only in the spring'] },
            { id: 'R4.9', o: ['strengths that screening software would miss', 'mistakes that employers notice quickly', 'skills that only a video can show', 'how many places a person applied to'] },
            { id: 'R4.10', o: ['get in touch again shortly after the fair', 'record your answers to a screen', 'bring as many copies of your résumé as you can', 'try to visit every booth at the fair'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>For the past month, a popular food truck has parked on your quiet residential street every evening from 5:00 to 10:00 p.m. Your family enjoys the food, and your children love it. However, the truck\'s generator is loud enough to hear with the windows closed, customers often stand on your front lawn while they wait, and you have picked up napkins and containers from your garden several times. You would like the truck to stay in the neighbourhood, but things need to change.</p><p>Write an email to the owner of the food truck. In your email, do the following:</p><ul><li>Explain who you are and say what you appreciate about the business.</li><li>Describe the problems and how they have affected your household.</li><li>Suggest changes that would work for both the truck and the neighbours, and say what you will do if nothing improves.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city has $400,000 to help more children take part in sports and is asking residents which plan they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Pay up to $300 per child toward registration fees in organized sports such as hockey and soccer, for families with lower incomes. Coaching and equipment would be included, but families would need to apply each season and show proof of income, and the money would help about 1,300 children a year.' },
            { key: 'B', label: 'Option B', text: 'Build and maintain three free outdoor rinks and sports courts that anyone can use at any time, with lights for evening play. Every child in the city could use them, but there would be no coaches or organized teams, and the rinks would only be usable in cold weather.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood where you like to spend your free time, and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is going to a one-day hiring event at a new hospital next Thursday, hoping to find a job in accounting. More than 30 departments will be meeting applicants. He is quite shy, and his shift at his current job ends at 2:00 p.m., while the event closes at 4:00 p.m. Give your friend advice on how to prepare for the event and how to make the most of the short time he will have there.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when bad weather or a power outage disrupted your plans. What happened, how did you cope, and what would you do differently if the same thing happened again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/T/scene.jpg" alt="A busy ferry terminal as the ferry arrives">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/T/scene.jpg" alt="A busy ferry terminal as the ferry arrives">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You have started a new job 9 kilometres from your home, and you need a reliable way to get there all year. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Buy an e-bike', image: '<img src="tests/img/T/opt_A.jpg" alt="Photo: Buy an e-bike">', facts: ['Costs $2,200 up front, about $5 a month to charge', 'About 25 minutes each way', 'Showers and locked bike storage at work', 'Hard to use on icy roads in January and February'] },
            { key: 'B', title: 'Monthly bus pass', image: '<img src="tests/img/T/opt_B.jpg" alt="Photo: Monthly bus pass">', facts: ['$105 per month', 'About 45 minutes each way, with one transfer', 'Buses every 15 minutes at rush hour', 'Time to read or rest on the way'] }
          ],
          third: { key: 'C', title: 'Carpool with a coworker', image: '<img src="tests/img/T/opt_C.jpg" alt="Photo: Carpool with a coworker">', facts: ['$60 per month toward gas', 'About 20 minutes each way', 'Must leave home at 7:15 a.m. and leave work at 4:30 p.m.', 'Coworker may move to another office next year'] },
          persuade: 'A family member thinks carpooling with your coworker would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>For the past month, you have been tutoring your neighbour\'s teenage son in math every Saturday morning for free. His final exam is in nine days, and this Saturday\'s session was meant to be the last full review. Today, the leader of your photography club asked you to photograph a family reunion this Saturday morning in her place, because she is sick. The family will pay $300, and the club leader has helped you many times before.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot tutor her son this Saturday.</p><p><b>Option B:</b> Talk to the club leader. Explain why you cannot photograph the reunion.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town council is deciding whether to close the main street to cars on Saturdays and Sundays from May to October and turn it into a pedestrian zone. Several shop owners say customers who drive would simply go to the mall on the highway instead, and that they cannot afford to lose weekend sales. Supporters say more people on foot would bring more visitors downtown, which would help every business on the street.</p><p>The council has asked residents to share their views before it votes next month. Should the main street be closed to cars on weekends? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a second-hand shop and see this unusual camera for $85. Call your friend, who has just joined a photography club and wants a camera for a two-week cycling trip next month. The camera weighs almost two kilograms, and each printed photo costs about $2 in paper. Describe the camera and explain whether you think your friend should buy it.', image: '<img src="tests/img/T/object.jpg" alt="An unusual camera in a second-hand shop">' }
      ]
    }
  });
})();
