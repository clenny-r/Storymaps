/* Rowe CELPIP Mock Exam: Test 31 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/31/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '31',
    title: 'Mock Test 31',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { ZAINAB: { name: 'Zainab', g: 'f', skin: '#8d5a3b', hair: '#120c08', shirt: '#7d3c98', style: 'bun' }, WYATT: { name: 'Wyatt', g: 'm', skin: '#f2cfb0', hair: '#a0703a', shirt: '#2e86c1', style: 'short' } },
        segments: [{
          lines: [
            ['ZAINAB', 'Turkeys are two dollars off a kilo this week. Thanksgiving\'s only three weeks away, so let\'s grab one now.'],
            ['WYATT', 'And put it where? Our freezer\'s jammed full of the blueberries your mom picked.'],
            ['ZAINAB', 'Hmm. Your sister has that huge chest freezer in her garage. She\'d let us borrow a corner of it.'],
            ['WYATT', 'Probably. I\'ll text her before we get to the checkout, just to be sure.']
          ],
          questions: [
            { id: 'LP.1', q: 'What is Wyatt\'s concern about buying a turkey now?', o: ['They have no room to store it at home.', 'Thanksgiving is still three weeks away.', 'The sale will end before they reach the till.', 'His sister has already bought one for them.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { YASMIN: { name: 'Yasmin', g: 'f', skin: '#c98c64', hair: '#1d1410', shirt: '#a04000', style: 'long' }, WARREN: { name: 'Warren', g: 'm', skin: '#e8c39e', hair: '#5d4037', shirt: '#1a5276', style: 'short' } },
          segments: [
            {
              lines: [
                ['WARREN', 'Yas, have you seen the email from the daycare? They\'re closing for two weeks, starting Monday.'],
                ['YASMIN', 'What? Why?'],
                ['WARREN', 'A pipe burst in the ceiling above the toddler room over the weekend. The whole floor has to come up, and public health won\'t let them reopen until the mould tests come back clean.'],
                ['YASMIN', 'Two weeks. That\'s ten working days. I\'m doing the year-end audit at a client\'s office all next week, and there\'s no way I can pull that off from our kitchen table.'],
                ['WARREN', 'And I can only work from home three days a week. The other two, I have to be out on the job site.'],
                ['YASMIN', 'Are they at least refunding us?'],
                ['WARREN', 'They\'re crediting half the fees for the days they\'re closed. They say their insurance should cover the rest eventually, but not to expect it any time soon.'],
                ['YASMIN', 'Half? At sixty dollars a day? Well, I suppose it beats a kick in the teeth.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why is the daycare closing?', o: ['Water damage must be repaired and checked for safety.', 'Public health inspectors found mould in the toddler room.', 'The staff are taking two weeks of holidays together.', 'Its insurance policy has run out for the year.'] },
                { id: 'L1.2', q: 'Why can\'t Yasmin work from home next week?', o: ['Her job requires her to be at a client\'s premises.', 'She has to be on a job site two days that week.', 'Her kitchen is being repaired after a flood upstairs.', 'Her manager does not allow working from home.'] },
                { id: 'L1.3', q: 'For now, how much in fees will the family lose because of the closure?', o: ['$300', '$600', '$60', '$30'] }
              ]
            },
            {
              lines: [
                ['YASMIN', 'Okay. My mom would come in a heartbeat, but she\'s only six weeks out from knee surgery. She can\'t lift a two-year-old, and Wren wants to be carried everywhere.'],
                ['WARREN', 'Right, so that\'s out. My work has that emergency backup care benefit. Ten days a year, and we\'d only pay fifteen dollars a day.'],
                ['YASMIN', 'That\'s a steal. What\'s the catch?'],
                ['WARREN', 'You have to book forty-eight hours ahead, and they send whoever\'s free. It could be a different stranger every day.'],
                ['YASMIN', 'Wren took three weeks to stop crying at drop-off, and that was with people she sees every day. A new face every morning would be rough on her.'],
                ['WARREN', 'What about Zelda next door? She taught kindergarten for thirty years, and Wren adores her. Didn\'t she say she was going stir-crazy since she retired?'],
                ['YASMIN', 'She did, but she also mentioned heading to her sister\'s cottage sometime this month. I\'ll pop over and ask her tonight.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Yasmin rule out her mother\'s help?', o: ['Her mother is still healing and cannot lift Wren.', 'Her mother lives too far away to come at short notice.', 'Wren does not get along well with her grandmother.', 'Her mother has knee surgery booked this month.'] },
                { id: 'L1.5', q: 'What worries Yasmin about the backup care?', o: ['Wren would be upset by strangers.', 'It would cost more than their usual daycare.', 'It must be booked weeks ahead.', 'It is only offered three days a week.'] },
                { id: 'L1.6', q: 'Why does Warren think Zelda might help?', o: ['She knows children well and has time on her hands.', 'She runs a small home daycare for the neighbourhood.', 'She has looked after Wren many times in the past.', 'She has offered to help them this month.'] }
              ]
            },
            {
              lines: [
                ['YASMIN', 'Good news. Zelda said yes, and she won\'t take a cent. She leaves for the cottage on Friday morning, though, so she can only do Monday to Thursday next week.'],
                ['WARREN', 'So Friday\'s the gap. And of course, Friday\'s one of my site days.'],
                ['YASMIN', 'Could you swap it for another day?'],
                ['WARREN', 'Maybe. Yuri sets the site schedule, and he owes me one after I covered for him in March. Leave it with me.'],
                ['YASMIN', 'And the second week?'],
                ['WARREN', 'I work from home Monday, Wednesday and Friday, and we book backup care for Tuesday and Thursday. If we book today, we\'re well ahead of the deadline.'],
                ['YASMIN', 'Two days with a stranger, I can live with. Maybe Zelda would drop by the first morning to help Wren settle in.'],
                ['WARREN', 'I bet she\'d love that. And we\'re buying her a very nice bottle of something.']
              ],
              questions: [
                { id: 'L1.7', q: 'What problem remains with Zelda\'s offer?', o: ['She is not free on one of the days needed.', 'She wants to be paid for every day.', 'She can only help during the second week of the closure.', 'She leaves for the cottage on Monday.'] },
                { id: 'L1.8', q: 'What will Warren most likely do?', o: ['Try to get his Friday site day changed', 'Book backup care for Friday of next week', 'Pay Zelda for looking after Wren on Friday', 'Work from home all five days next week'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Courier agent', g: 'f', skin: '#b07850', hair: '#2a1b12', shirt: '#922b21', style: 'curly' }, ZACHARY: { name: 'Zachary', g: 'm', skin: '#f0c9a6', hair: '#3b2a20', shirt: '#196f3d', style: 'short' } },
          segments: [{
            lines: [
              ['AGENT', 'Thanks for calling Quickstep Couriers. This is Willa. How can I help?'],
              ['ZACHARY', 'Hi. I\'m calling about a parcel. Your tracking page says it was delivered yesterday at two-fifteen, but I was home all afternoon, and nothing came. Nobody knocked, nothing on the step.'],
              ['AGENT', 'I\'m sorry to hear that. Could I have the tracking number?'],
              ['ZACHARY', 'Sure, it\'s Z Q four four eight one seven.'],
              ['AGENT', 'Thanks. Bear with me a second, the system\'s a little slow this morning.'],
              ['AGENT', 'Thank you. Okay, our driver uploaded a delivery photo, and I\'m looking at it now. It shows the box on a doormat in front of a blue door, with a brass number twelve beside it.'],
              ['ZACHARY', 'Well, there\'s your problem. My door\'s red, and I\'m at number twenty-one. Sounds like somebody got their digits flipped.'],
              ['AGENT', 'That does look like a mix-up. Is there a number twelve on your street?'],
              ['ZACHARY', 'Yeah, right across the road, I think. But I\'ve never met them, and honestly, it\'s been a whole day. Anyone could have walked off with it.'],
              ['AGENT', 'Here\'s what I\'d suggest. First, it\'s worth knocking over there this evening. Most people are happy to hand a parcel over. If it isn\'t there, call us back and we\'ll open a claim. That usually takes five business days.'],
              ['ZACHARY', 'Five business days? It\'s my daughter\'s birthday present. Her party\'s on Saturday. And it wasn\'t cheap, either. It\'s a karaoke machine she\'s been begging for since March.'],
              ['AGENT', 'I understand. In that case, the quickest route is often the seller. Most online stores will ship a replacement right away once we confirm a delivery error, and I can email you that confirmation now.'],
              ['ZACHARY', 'Okay, please do. And could you make sure the driver hears about this? It\'s the second time this year.'],
              ['AGENT', 'I\'ll add a note to the driver\'s file and flag your address, so future deliveries need a photo that shows your house number. That should stop it from happening a third time.'],
              ['ZACHARY', 'Thanks. Right, I\'d better go put my shoes on.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is Zachary\'s problem?', o: ['A parcel listed as delivered never reached him.', 'A driver damaged a box that was left at his door.', 'His parcel was sent back to the online seller.', 'He missed a delivery while he was out.'] },
              { id: 'L2.2', q: 'What does the delivery photo suggest?', o: ['The box was left at the wrong house.', 'The box was handed to a neighbour.', 'The driver could not find the street.', 'The box was too big for the step.'] },
              { id: 'L2.3', q: 'Why is Zachary unhappy about the claim process?', o: ['It may not be finished before an important day.', 'He has already made two claims about this driver.', 'It requires him to speak to his neighbours.', 'The agent refuses to email him the details.'] },
              { id: 'L2.4', q: 'What does the agent suggest about the seller?', o: ['It may replace the order faster than a claim.', 'It needs five business days to reply to him.', 'It wrote the wrong street address on the parcel.', 'It must open a claim with the courier first.'] },
              { id: 'L2.5', q: 'What will Zachary probably do next?', o: ['Go across the street to ask about the box', 'Call the seller to cancel his order', 'Wait at home for the driver to come back again', 'Buy a different birthday present'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#e3b28b', hair: '#6b4a2b', shirt: '#117864', style: 'bun' }, WINSTON: { name: 'Winston Ybarra', g: 'm', skin: '#a9714b', hair: '#bdc3c7', shirt: '#6c3483', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Winston Ybarra, a piano technician in Trois-Rivières who has made a second career out of rescuing pianos nobody wants. Winston, how many pianos are we talking about?'],
              ['WINSTON', 'This year alone, about forty. People call me when they\'re moving, or clearing out a parent\'s house, and the piano is the one thing nobody will buy. Most of them would gladly pay me just to haul it away.'],
              ['HOST', 'Why is it so hard to sell a piano these days?'],
              ['WINSTON', 'Partly space. Apartments are smaller, and an upright piano takes up as much room as a sofa and weighs as much as four grown men.'],
              ['WINSTON', 'And partly digital keyboards. They\'re cheap, they never need tuning, and you can practise with headphones on at midnight without the neighbours banging on the wall.'],
              ['HOST', 'So what happens to the pianos you collect?'],
              ['WINSTON', 'I\'m upfront with people. Maybe a third are too far gone. The soundboard\'s cracked, or the frame has shifted, and fixing them would cost more than a new one.'],
              ['WINSTON', 'Those I take apart. The keys and hammers become spare parts, and a local furniture maker turns the nicer wood into shelves and cutting boards.'],
              ['HOST', 'And the rest?'],
              ['WINSTON', 'The rest I restore, slowly, in my garage, and give away to schools, seniors\' homes and community centres. Never to individuals, though. Otherwise, I\'d just be running a free piano shop.'],
              ['HOST', 'That must cost you a fortune.'],
              ['WINSTON', 'The parts are cheap. Moving is the expensive bit, three or four hundred dollars for a proper piano move. A moving company here now does it for me at cost, in exchange for a little sign with their name on each piano.'],
              ['HOST', 'Is there one piano that stands out?'],
              ['WINSTON', 'There\'s an upright I placed at a seniors\' home last year. One resident had hardly spoken since her stroke. The staff told me that the very first afternoon, she sat down and played a waltz from start to finish, from memory.'],
              ['WINSTON', 'Her daughter cried. Honestly, so did I when they told me.'],
              ['HOST', 'And what do the schools say?'],
              ['WINSTON', 'They\'re delighted, but I set one condition. Each school has to budget for a tuning once a year. A piano that\'s never tuned ends up as a very large shelf for lost mittens.'],
              ['HOST', 'What\'s next for you?'],
              ['WINSTON', 'My wife would like her garage back. So I\'m teaching two retired carpenters to handle the basic repairs. If it works out, maybe one day I\'ll get to retire too.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why do people usually contact Winston?', o: ['They own a piano that no one wants to buy.', 'They want an old piano tuned before they move.', 'They are looking for a cheap piano to buy.', 'They want him to give a piano to a school.'] },
              { id: 'L3.2', q: 'According to Winston, why are digital keyboards popular?', o: ['They need little upkeep and can be played quietly.', 'They sound much better than most older pianos do.', 'Schools prefer them for their music classes.', 'They take up about as much room as a sofa.'] },
              { id: 'L3.3', q: 'What happens to pianos that cannot be repaired?', o: ['Their parts and wood are given new uses.', 'They are sold to a local furniture maker.', 'They go to seniors\' homes as decoration.', 'They are kept in his garage as spares.'] },
              { id: 'L3.4', q: 'Why does the moving company help Winston?', o: ['It gets advertising on every piano it moves.', 'Its owner learned to play on a donated piano.', 'Winston pays it four hundred dollars a move.', 'It receives a tax receipt for each move.'] },
              { id: 'L3.5', q: 'Why does Winston tell the story about the seniors\' home?', o: ['To show how deeply a piano can affect people', 'To explain why he only gives pianos to schools', 'To describe how he learned to play the waltz', 'To show how difficult moving a piano can be'] },
              { id: 'L3.6', q: 'Why does Winston make schools agree to a yearly tuning?', o: ['A piano left untuned soon stops being played.', 'Tuning is included in the price of the piano.', 'Students keep leaving their mittens inside it.', 'He wants to be paid to do the tuning himself.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#6b4226', hair: '#1d1410', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Starting next month, firefighters in the Town of Westlock will install smoke and carbon monoxide alarms free of charge in any home whose owners or tenants ask for them.'],
              ['NEWS', 'The program is paid for by a provincial safety grant, and crews will carry out the visits on weekday afternoons, fitting them in between their regular calls.'],
              ['NEWS', 'Each home can receive up to three combined alarms, one for each floor, at no cost. Homes that need more can buy extra units from the department at cost, for about forty dollars apiece.'],
              ['NEWS', 'Under a provincial rule that took effect last year, every home with a gas furnace, a wood stove or an attached garage must have a working carbon monoxide alarm.'],
              ['NEWS', 'Fire Chief Wynton Zahradnik says many residents are unaware of the rule, and a recent spot check found that about one home in three had no carbon monoxide alarm at all.'],
              ['NEWS', 'He also points out that alarms do not last forever. Most should be replaced after about ten years, yet many families have kept the same ones for decades.'],
              ['NEWS', 'During each visit, firefighters will also test existing alarms, swap out dead batteries, and help families plan two ways out of every room.'],
              ['NEWS', 'Renters are welcome to apply, but the department will contact the landlord first, since landlords are legally responsible for alarms in rental units.'],
              ['NEWS', 'Bookings open on Monday, by phone or online. Homes with young children, seniors or anyone with limited mobility will be visited first.'],
              ['NEWS', 'The grant covers roughly two thousand alarms, and the chief says that once they are gone, the program will wind down unless more funding turns up.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A free home alarm program run by firefighters', 'A new law requiring alarms in rental homes', 'A rise in house fires caused by gas furnaces', 'A fire department hiring extra staff for inspections'] },
              { id: 'L4.2', q: 'A homeowner who needs five alarms would pay', o: ['$80', '$200', '$120', '$40'] },
              { id: 'L4.3', q: 'The fire chief mentions how long alarms last because', o: ['many families are relying on worn-out devices.', 'the free alarms will need replacing next year.', 'gas furnaces must be replaced every ten years.', 'the province has changed its rules on batteries.'] },
              { id: 'L4.4', q: 'When a tenant applies for the program,', o: ['the building owner will be contacted first.', 'the tenant will be charged for each alarm.', 'the tenant will be put at the end of the list.', 'the visit will take place on a weekend.'] },
              { id: 'L4.5', q: 'Residents who wait a long time to book', o: ['may miss out if the supply runs out.', 'will be charged the full price for alarms.', 'will have to install their own alarms.', 'will be visited on weekday mornings instead.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Relay team: who runs what', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { WENDY: { name: 'Wendy', g: 'f', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#1f618d', style: 'long' }, WILLIAM: { name: 'William', g: 'm', skin: '#e8c39e', hair: '#5d4037', shirt: '#a04000', style: 'short' }, YOSEF: { name: 'Yosef', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#196f3d', style: 'curly' } },
          segments: [{
            lines: [
              ['WENDY', 'Okay, entries for the October river relay close Friday. Are we doing this, or just talking about it again?'],
              ['WILLIAM', 'We\'re doing it. But a team needs four runners, and there are only three of us.'],
              ['YOSEF', 'My sister-in-law, Zara, runs half marathons for fun. She\'s been dropping hints for weeks.'],
              ['WENDY', 'Then Zara\'s in. The team fee is two hundred and forty dollars, so we\'d split that four ways.'],
              ['WILLIAM', 'Not anymore. Early-bird pricing ended Sunday. I checked this morning, and it\'s two hundred and eighty now.'],
              ['YOSEF', 'Still a bargain. And we each have to raise a hundred dollars in pledges.'],
              ['WENDY', 'That part doesn\'t worry me. My office will throw money at anything with a finish line.'],
              ['WILLIAM', 'Now the legs. They\'re not equal. The first is five kilometres, then eight, then five, and the last is twelve.'],
              ['YOSEF', 'Zara should take the last one. Twelve kilometres is a warm-up for her.'],
              ['WENDY', 'Agreed. I\'ll take the eight. The second leg is dead flat, and hills and I don\'t get along.'],
              ['WILLIAM', 'Then I\'m on the opening leg. I like starting with the crowd. It gets the adrenalin going.'],
              ['YOSEF', 'Which leaves me the third leg, with that nasty hill by the bridge. Lucky me.'],
              ['WENDY', 'You did join the hill training group all summer, Yosef. This is your big moment.'],
              ['YOSEF', 'Fine, fine. But my knee\'s been grumbling since the trail run. I\'m seeing a physio on Thursday.'],
              ['WILLIAM', 'If the physio says no, we need a plan B. Could Zara just run two legs?'],
              ['WENDY', 'The rules don\'t allow it. One leg per runner. We\'d have to find someone else, and fast.'],
              ['YOSEF', 'My neighbour Zoltan has been training for a ten-K. I\'ll sound him out, just in case.'],
              ['WILLIAM', 'Good. Now, getting around. The handoff points are strung out along the river. How do we get between them?'],
              ['WENDY', 'The organizers run shuttle buses, but last year people stood around forty minutes waiting for them.'],
              ['YOSEF', 'Then I\'ll drive. My car seats five, and I\'m not running till the third leg anyway.'],
              ['WILLIAM', 'And team shirts? I vote for something bright, so the photographers can actually find us.'],
              ['WENDY', 'Bright is fine. Just nothing with our names on the back. Last time, they spelled mine Windy.'],
              ['YOSEF', 'Then let\'s just put the charity\'s logo on them. It\'s for the children\'s hospital, after all.'],
              ['WILLIAM', 'Perfect. I\'ll register us tonight and pay the fee, and you can all send me your share.'],
              ['WENDY', 'And I\'ll draw up a training calendar. Three runs a week, starting Monday. No excuses.'],
              ['YOSEF', 'Three a week? I thought this was supposed to be fun.'],
              ['WENDY', 'Oh, it will be. Right after the finish line.']
            ],
            questions: [
              { id: 'L5.1', q: 'Why does Wendy ask if they are really doing it?', o: ['They have discussed it before without acting.', 'Entries for the relay closed earlier this week.', 'William has been training without the others.', 'She does not want to collect pledges again.'] },
              { id: 'L5.2', q: 'How much will each runner pay toward the team fee?', o: ['$70', '$60', '$100', '$80'] },
              { id: 'L5.3', q: 'Why does Wendy choose the second leg?', o: ['It has no climbs to slow her down.', 'It is the shortest leg of the race.', 'She likes starting with the crowd.', 'Zara asked her to run that leg.'] },
              { id: 'L5.4', q: 'What does Wendy suggest about Yosef and the third leg?', o: ['He has prepared well for it.', 'He asked to run it months ago.', 'It is the easiest leg of the race.', 'His knee will not let him run it.'] },
              { id: 'L5.5', q: 'Why might the team need another runner?', o: ['Yosef may not be fit to race.', 'Zara wants to run two legs.', 'The rules require five runners.', 'William may have to drive instead.'] },
              { id: 'L5.6', q: 'Why does Yosef offer to drive the team?', o: ['He runs later, and the shuttles can be slow.', 'His car is the only one that can seat four people.', 'The organizers have stopped running shuttle buses.', 'His sore knee means he will not be running at all.'] },
              { id: 'L5.7', q: 'Why does Wendy object to names on the shirts?', o: ['A mistake was made with her name before.', 'Photographers cannot read names on shirts.', 'The charity does not allow names on shirts.', 'Names cost extra to print on the back.'] },
              { id: 'L5.8', q: 'What does Wendy imply in her final remark?', o: ['The fun part comes after all the effort.', 'The race will not be enjoyable for anyone.', 'Yosef should not take part in the training.', 'The training plan will be relaxed after the first week.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should city buses be free?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#c98c64', hair: '#3b2a20', shirt: '#5b2c6f', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'When one small Prairie city stopped charging bus fares three years ago, ridership roughly doubled within a year. Now several larger Canadian cities are asking whether they should follow suit.'],
              ['NARR', 'Wanda Zielinski, an urban planner who has advised a number of municipalities, says they should. Her first argument is that fares cost more to collect than most people realize.'],
              ['NARR', 'Fare boxes, ticket machines, card systems and the staff who count and check the money all eat into what fares bring in. In some smaller systems, close to a third of fare revenue vanishes this way.'],
              ['NARR', 'Buses also move faster, she adds, when nobody is digging for change at the front. Passengers board at every door, and routes run closer to schedule.'],
              ['NARR', 'Her second argument is about who rides. "The people who need the bus most are the people for whom a three-dollar fare is a real decision," she says.'],
              ['NARR', '"A mother choosing between a bus ticket and a carton of milk isn\'t making a lifestyle choice."'],
              ['NARR', 'Free buses, she argues, put jobs, clinics and classes within reach for people who are now shut out, and they take cars off the road without forcing anyone to give one up.'],
              ['NARR', 'Zielinski concedes that free transit is not free for the city. The money must come from property taxes or elsewhere, and councils should say so plainly.'],
              ['NARR', 'Yannick Wolfe, who spent twenty years managing a mid-sized transit system, thinks free fares are the wrong priority. His first argument is that the fare is rarely what keeps people off the bus.'],
              ['NARR', 'Ask riders what they want, he says, and they talk about buses that come every ten minutes instead of every forty, routes that reach the newer suburbs, and shelters that keep out the wind. Price comes well down the list.'],
              ['NARR', '"If the bus doesn\'t show up, it hardly matters that it\'s free," he says. Every dollar given up in fares, in his view, is a dollar that could have paid for more frequent service.'],
              ['NARR', 'His second argument is about who the new riders turn out to be. In cities that dropped fares, he says, much of the extra ridership came from people who used to walk or cycle short distances, not from drivers leaving their cars at home.'],
              ['NARR', 'And on the busiest routes, he adds, buses became so packed at rush hour that regular riders were left standing at stops as full buses rolled past.'],
              ['NARR', 'Wolfe does not dismiss the needs of people on low incomes. He supports discounted passes for anyone who qualifies, which he says put the money where it is actually needed.'],
              ['NARR', 'Zielinski replies that discount programs come wrapped in paperwork, and that many people who qualify never sign up, either because they have never heard of the program or because the forms defeat them.'],
              ['NARR', 'Wolfe answers that fares also give a transit system a steady income that does not depend on the mood of council at budget time.'],
              ['NARR', 'Zielinski, for her part, grants that a city with poor service should fix that first. Free fares, she says, work best where the buses are already worth waiting for.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether city buses should stop charging fares', 'How cities can make their buses run on time', 'Why fewer people ride the bus in winter', 'How transit systems decide where to build routes'] },
              { id: 'L6.2', q: 'Why does Zielinski mention ticket machines and staff?', o: ['To show that fare collection is costly', 'To argue that drivers should stop handling cash', 'To explain why riders board through every door', 'To show how many jobs free transit would create'] },
              { id: 'L6.3', q: 'What does Zielinski suggest with the example of the mother?', o: ['Fares force hard choices on people with little money.', 'Parents with children should get cheaper bus tickets.', 'Many families prefer to drive to the grocery store.', 'Some people take the bus because of their own lifestyle.'] },
              { id: 'L6.4', q: 'According to Wolfe, what matters most to riders?', o: ['How often the buses run and where they go', 'How much a monthly pass is going to cost them', 'Whether the buses are warm in winter', 'Whether drivers are able to make change'] },
              { id: 'L6.5', q: 'What does Wolfe say about new riders in free-fare cities?', o: ['Many used to get around on foot or by bike.', 'Most of them had given up driving their cars.', 'Many were students travelling to classes.', 'Most of them rode only outside rush hour.'] },
              { id: 'L6.6', q: 'What does Zielinski\'s final comment suggest?', o: ['She partly accepts Wolfe\'s point about service.', 'She now opposes free transit in large cities.', 'She thinks discounts work better than free fares.', 'She believes fares should rise to pay for buses.'] }
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
          passage: '<h3>Message</h3><p>Hi Zeke,</p><p>You will laugh, but I have finally done it: I sold the car. After you told me at Christmas that I was paying a small fortune to let it sit in the driveway, I actually sat down and added up what it cost me last year. Insurance, gas, winter tires, parking at work and that nasty surprise repair in September came to just over $7,400, and I drove it fewer than six thousand kilometres. I nearly fell off my chair.</p><p>So far, I am managing better than I expected. The bus to the office takes twenty-five minutes, only ten more than driving, and I get to read on the way instead of crawling along in traffic. For big grocery runs, I joined a car-share program, which costs me about $60 in a typical month. Saturdays are the trickiest. The bus to the farmers\' market runs only once an hour on weekends, so I have learned the hard way to check the schedule before I leave the house, not after.</p><p>The one thing I really miss is being able to go on the spur of the moment. Last Sunday, a friend called to say the strawberries were ripe at the farm outside town, and by the time I had booked a car and picked it up, the best ones were gone. I am also a little nervous about winter. Standing at a bus stop at minus twenty-five is a different story from a sunny morning in May.</p><p>That brings me to a favour. You mentioned that you were thinking of getting rid of your old bike trailer now that the girls have outgrown it. Would you consider selling it to me? Pulling groceries home behind my bike would save me a lot of car-share trips in the warmer months, and I would happily pay whatever you think is fair.</p><p>I also need your advice. Should I buy a monthly bus pass, or keep paying per ride? I take the bus about thirty times a month. The pass is $95, and a single ride is $3.25.</p><p>Write back when you have a minute, and give the girls a hug from their favourite aunt.</p><p>Love,<br>Winnie</p>',
          questions: [
            { id: 'R1.1', q: 'Winnie mentions Zeke\'s comment at Christmas because it', o: ['led her to work out what the car really cost.', 'convinced her to buy a newer, cheaper car.', 'reminded her to put winter tires on the car.', 'showed that he wanted to buy the car himself.'] },
            { id: 'R1.2', q: 'Winnie was shocked to discover that', o: ['the car cost a lot for how little she drove it.', 'the repair in September cost over $7,400.', 'parking at work cost more than her car insurance.', 'she drove far less than her brother does.'] },
            { id: 'R1.3', q: 'Winnie now checks the bus schedule before going out on Saturdays because', o: ['missing a bus means a long wait.', 'the trip takes ten minutes longer.', 'the car-share must be booked early.', 'she likes to read on the way.'] },
            { id: 'R1.4', q: 'The story about the strawberries shows that', o: ['last-minute plans are harder without a car.', 'the car-share program costs too much to use.', 'her friend no longer invites her on outings.', 'the farm cannot be reached by bus at all.'] },
            { id: 'R1.5', q: 'Winnie\'s concern about winter is that', o: ['waiting outdoors may be very unpleasant.', 'buses run less often when it snows.', 'the car-share cars lack winter tires.', 'she will have to stop reading on the bus.'] },
            { id: 'R1.6', q: 'Winnie wants the bike trailer so that she can', o: ['carry shopping home without booking a car.', 'take Zeke\'s daughters on rides around town.', 'get to the bus stop more quickly each day.', 'use it instead of the bus in winter.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Winnie,</p><p>I am not laughing at all. I am impressed! Paying over $7,400 for [[R1.7]] is exactly the kind of number I was worried about.</p><p>Of course you can have the trailer, and I will not take a penny for it. The girls are delighted that it will [[R1.8]] instead of gathering dust in our shed. Just keep in mind that it will be most useful [[R1.9]]. Once the snow arrives, you will be back to booking cars.</p><p>As for your question, at thirty rides a month, [[R1.10]], so I would buy the pass. It also means you will not have to [[R1.11]] each time you get on, which is one less thing to think about on a freezing morning.</p><p>And next time the strawberries are ripe, call me. I will drive you.</p><p>Zeke</p>',
          blanks: [
            { id: 'R1.7', o: ['a car you hardly ever drove', 'one expensive surprise repair in September', 'a year of insurance and parking', 'a twenty-five-minute bus ride'] },
            { id: 'R1.8', o: ['help bring your groceries home', 'carry the girls around town again', 'replace your trips to the office', 'save you money on bus passes'] },
            { id: 'R1.9', o: ['from spring until the fall', 'on weekday trips to work', 'when the buses are not running', 'for trips to the farm in winter'] },
            { id: 'R1.10', o: ['the pass works out slightly cheaper', 'single rides would save you a little money', 'both choices cost exactly the same', 'the pass costs twice as much'] },
            { id: 'R1.11', o: ['pay a separate fare', 'check the timetable', 'book a shared car', 'wait for an hour'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Zephyr Home Comfort: Furnace and Duct Services</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Service</th><th>Price</th><th>Time needed</th></tr></thead><tbody>' +
            '<tr><td>Furnace tune-up (one furnace)</td><td>$129</td><td>1 hour</td></tr>' +
            '<tr><td>Duct cleaning: home up to 1,500 sq. ft.</td><td>$349</td><td>3 hours</td></tr>' +
            '<tr><td>Duct cleaning: home of 1,501 to 2,500 sq. ft.</td><td>$449</td><td>4 hours</td></tr>' +
            '<tr><td>Duct cleaning: home over 2,500 sq. ft.</td><td>$549</td><td>5 hours</td></tr>' +
            '<tr><td>Dryer vent cleaning</td><td>$79</td><td>30 minutes</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Book a furnace tune-up and a duct cleaning for the same visit and save $50.</li><li>Seniors (65 and over): 10% off any one service. This cannot be combined with other discounts.</li><li>Homes with indoor pets: add $40 to duct cleaning for extra filter changes.</li><li>Add a dryer vent cleaning to any duct cleaning visit for $49 instead of $79. This reduced price cannot be combined with the seniors\' discount.</li><li>Book at least 3 business days ahead. Visits booked on shorter notice cost $75 extra.</li><li>If a problem appears within 30 days of a tune-up, we return at no charge.</li><li>We recommend a tune-up every fall and duct cleaning every 3 to 5 years.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Wim,</p><p>I called Zephyr about all the dust in the house. Our place is 1,520 square feet, so we just miss the smallest size, and duct cleaning would cost us [[R2.1]]. Because of our cat, Olive, we would also have to pay [[R2.2]]. If they tune up the furnace during the same visit, the total comes to [[R2.3]].</p><p>Your mother asked about having her own furnace done. She is 66 and only needs a tune-up, so [[R2.4]].</p><p>I wanted them to come this Friday, but today is already Wednesday, so [[R2.5]]. Let\'s book for next week instead. I would also like them to clean the dryer vent at some point, but that can wait until the spring.</p><p>Zuzana</p>',
          blanks: [
            { id: 'R2.1', o: ['$449', '$349', '$549', '$399'] },
            { id: 'R2.2', o: ['an extra charge for pet owners', 'a fee for booking on short notice', 'the price of a dryer vent cleaning', 'a second tune-up for the furnace'] },
            { id: 'R2.3', o: ['$568', '$618', '$528', '$478'] },
            { id: 'R2.4', o: ['her visit would cost about $116', 'her tune-up would be free of charge', 'she would save $50 on her visit', 'she would need to book a week ahead'] },
            { id: 'R2.5', o: ['a visit that soon would cost us more', 'they do not take bookings for Fridays', 'tune-ups are only done in the fall', 'the pet charge doubles on short notice'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A homeowner notices a problem with her furnace two weeks after a tune-up. She should', o: ['ask Zephyr to come back for free.', 'pay for a second tune-up.', 'book a duct cleaning instead.', 'pay the $75 short-notice fee.'] },
            { id: 'R2.7', q: 'A 70-year-old books a tune-up and a duct cleaning for the same visit. He will', o: ['receive only one of the two discounts.', 'receive both discounts on one bill.', 'not be eligible for any discount.', 'pay the short-notice fee automatically.'] },
            { id: 'R2.8', q: 'A family that had its ducts cleaned two years ago should, according to the notes,', o: ['wait at least one more year.', 'have them cleaned again before winter.', 'book a dryer vent cleaning first.', 'add the pet charge every single year.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Where Lost Things Go</h3><p><b>A.</b> Every day, thousands of Canadians step off a bus or train and leave something behind. In a large city, the transit system\'s lost and found office may receive several hundred items in a single day. Umbrellas top the list by a wide margin, followed by phones, keys, gloves and water bottles. Staff also see stranger things: wedding dresses, hockey sticks, a set of false teeth and, on one memorable occasion, a live turtle in a shoebox. The busiest days are easy to predict. The first rainy morning after a dry spell brings a flood of umbrellas, and the days after a long weekend are always heavy. Gloves tend to arrive one at a time, which staff say makes them almost impossible to match.</p><p><b>B.</b> The journey of a lost item usually begins at the end of a driver\'s shift, when anything found on board is bagged and sent to a central office. There, each item is entered into a database with a short description, the date, and the route or station where it turned up. Owners can search the database online or phone the office, but they must show identification before anything is handed back. Wallets, passports and other valuables are kept in a locked safe, and phones are switched off to protect their owners\' data. In some cities, staff also check social media, where riders often post photos of things they have lost.</p><p><b>C.</b> Space is limited, so nothing stays forever. Most items are kept for thirty to ninety days, depending on their value, while food and anything else that could spoil is thrown out the same day. After that, unclaimed items begin a second life. Warm coats, hats and mittens are often given to shelters as winter approaches. Phones and laptops are wiped clean and recycled. In some cities, bicycles, jewellery and other valuable items are sold at public auctions, and the money goes back into running the transit system. Umbrellas, by far the most common item, are sometimes handed out free to riders on rainy days.</p><p><b>D.</b> Perhaps the most surprising fact is how few things are ever collected. Staff estimate that only about one item in four makes it back to its owner. Phones are the exception: because owners notice quickly and can describe them precisely, most are reclaimed within a day or two. Many people, however, simply assume their belongings are gone for good and never think to ask. Others wait too long. Staff have a few simple tips: write your name and phone number inside anything you carry often, report a loss as soon as possible, and give a detailed description, including the route and the time of day. "The more we know, the faster we can match it," one supervisor says.</p>',
          questions: [
            { id: 'R3.1', q: 'Things that could go bad are not kept at all.', fixed: true, a: 'C' },
            { id: 'R3.2', q: 'People have to prove who they are before taking an item home.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Owners who cannot come in person can have their items mailed to them.', fixed: true, a: 'E' },
            { id: 'R3.4', q: 'The weather can affect how many items are handed in.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Most lost belongings never return to the people who lost them.', fixed: true, a: 'D' },
            { id: 'R3.6', q: 'Marking your belongings with contact details makes them easier to return.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'Each item is logged along with where and when it was found.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'Unclaimed winter clothing may end up with people who need it.', fixed: true, a: 'C' },
            { id: 'R3.9', q: 'Riders who lose a phone can borrow one from the lost and found office.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Candy Leave the Checkout?</h3><p>Last spring, a regional grocery chain in Manitoba quietly removed chocolate bars, candy and sugary drinks from the checkout lanes of its thirty stores. In their place, shoppers now find fruit cups, unsalted nuts and bottled water. The sweets are still sold elsewhere in the stores. Other chains are watching closely, and a handful of countries overseas have already made similar rules law.</p><p>For Zora Mbeki, a mother of three in Winkler, the change could not have come soon enough. "The checkout lane used to be the battle zone," she says. "You have been shopping for an hour, the kids are tired, you are tired, and there it all is, right at their eye level." Mbeki stresses that she is not against treats. "I am not asking anyone to ban chocolate. I am asking them not to put it in front of my children at the exact moment I have the least patience left."</p><p>Yuna Park, a registered dietitian, says the research supports at least part of Mbeki\'s view. Studies in stores that removed sweets from checkouts found that sales of those items at the till dropped sharply, although some shoppers simply picked them up in another aisle instead. The overall effect on what families eat is modest, she says, but she believes it still matters. "Small changes repeated across millions of shopping trips add up." She adds that the effect seems strongest with young children, who are the ones most likely to ask. At the same time, Park warns against treating the checkout as the main cause of children\'s eating habits. What is served at home and at school, she says, matters far more.</p><p>Wilfred Lindahl, who owns two independent grocery stores in rural Manitoba, sees the issue from the other side of the till. Checkout candy, he explains, is among the most profitable things he sells, and small grocers like him work on very thin margins. "Those chocolate bars help keep the lights on in a town of nine hundred people," he says. He also argues that parents are adults who can say no. Still, Lindahl admits he has moved the candy in his own stores to the top shelves, out of reach of small hands, which he considers a reasonable middle ground.</p><p>The chain itself reports mixed results. Total sales have not fallen, and the fruit cups have sold better than expected. However, some customers have complained about losing what one called "the little reward at the end of a long week," and a few have said they now buy their chocolate at the gas station next door.</p><p>Mbeki says higher shelves are a start, but that children quickly learn to point. Park suggests another compromise that some stores already offer: a single candy-free lane, clearly marked, so that parents can choose it when they need to. Lindahl says he would consider that, as long as it was his decision and not a rule imposed by government.</p>',
          questions: [
            { id: 'R4.1', q: 'According to the article, the chain\'s decision', o: ['is being followed with interest by other grocers.', 'was required by a new law in the province.', 'caused a sharp drop in the chain\'s total weekly sales.', 'removed sweets from its stores altogether.'] },
            { id: 'R4.2', q: 'Mbeki makes it clear that she', o: ['objects to where candy is placed, not to candy.', 'wants chocolate taken out of grocery stores entirely.', 'has stopped buying sweets for her three children.', 'prefers to shop at small independent grocery stores.'] },
            { id: 'R4.3', q: 'Park believes that removing checkout candy', o: ['helps a little but is not the main answer.', 'has no real effect on what families buy.', 'matters more than what children eat at school.', 'should be required in all grocery stores.'] },
            { id: 'R4.4', q: 'Lindahl mentions the size of his town to suggest that', o: ['his business needs every source of profit.', 'few children ever shop in his stores.', 'rural customers prefer chocolate to fresh fruit.', 'larger chains can afford to pay higher wages.'] },
            { id: 'R4.5', q: 'Which change has Lindahl already made in his stores?', o: ['Placing sweets beyond the reach of small children', 'Opening one clearly marked candy-free checkout lane', 'Selling fruit cups beside the chocolate bars', 'Moving all sugary drinks to the back of the store'] }
          ],
          reply: '<h3>Reader comment</h3><p>As a grandmother who does the weekly shopping with two lively grandsons, I read this article with a smile. Like Ms. Mbeki, I have nothing against [[R4.6]]; my problem is with where they are placed.</p><p>That said, I understand Mr. Lindahl\'s position. For a small-town grocer, [[R4.7]] may be what keeps the doors open. I also think Ms. Park is wise to remind us that [[R4.8]] shapes children\'s habits far more than the last few metres of a shopping trip.</p><p>The best solution, in my view, is [[R4.9]]. It lets parents and grandparents avoid the battle without taking anything away from other shoppers. And as the chain discovered, people who really want a chocolate bar will [[R4.10]] anyway.</p>',
          blanks: [
            { id: 'R4.6', o: ['the occasional treat', 'grocery chains in general', 'fruit cups and nuts', 'long shopping trips'] },
            { id: 'R4.7', o: ['the money made on checkout sweets', 'the wages paid to cashiers', 'selling more fruit cups', 'a new law banning candy at the checkout'] },
            { id: 'R4.8', o: ['what kids eat each day, at home and in class', 'the price of chocolate in stores', 'the height of the shelves in each grocery store', 'the number of checkout lanes'] },
            { id: 'R4.9', o: ['a single marked lane with no candy', 'a government ban on all checkout candy', 'moving candy to the bottom shelves', 'selling candy only at gas stations'] },
            { id: 'R4.10', o: ['find one somewhere else', 'stop shopping at the chain', 'complain to the dietitian', 'buy fruit cups instead'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>During a windstorm two weeks ago, a large branch from a city-owned tree on the boulevard in front of your home fell onto your parked car, cracking the windshield and denting the roof. The repair estimate is $2,300. You sent the city\'s claims office photos, the estimate and a neighbour\'s statement that the tree had been dropping dead branches for months. Yesterday, the office sent a one-line letter refusing your claim, with no explanation.</p><p>Write an email to the manager of the city\'s claims office. In your email, do the following:</p><ul><li>Describe what happened and what you sent to the claims office.</li><li>Explain why you believe the city should pay for the repair.</li><li>Say what you would like the city to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer is deciding how to handle the winter holiday period next year and is asking all staff which option they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Close the whole office from December 24 to January 1, so everyone gets a real break at the same time. However, each employee would have to use three of their own vacation days for the closure, and customers could not reach anyone during that week.' },
            { key: 'B', label: 'Option B', text: 'Keep the office open, and let employees choose their own days off. Nobody would have to use vacation days they did not plan to take. However, people would have to compete for popular dates, and those who work would have to cover for absent coworkers.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a gift that you gave or received that you still remember well, and explain why it was special.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is forty and is thinking about quitting her steady office job to study full time for two years at a college, so that she can become a dental hygienist. She has some savings and a mortgage, and her son will start university in three years. Give your friend advice about whether to make this change and how to prepare for it.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to give someone bad or disappointing news. What was the news, how did you tell them, and what would you do differently now?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/31/scene.jpg" alt="A ski hill lodge cafeteria at lunchtime">', picture: 'The inside of a warm wooden ski lodge at lunchtime, drawn as a colourful comic-style scene with 15 people. Large windows at the back show snowy slopes and a moving chairlift. On the left, a cook in a white hat is flipping burgers on a grill behind a counter, and a cashier is taking money from a woman in a pink ski jacket while one more skier waits in line with a tray. In the centre, two parents sit at a long wooden table eating bowls of chili, and their toddler is reaching up toward a plate of fries that sits right at the edge of the table, clearly about to pull it off. A teenage boy is walking toward the tables carrying a tray stacked high with bowls and drinks, and he is about to trip over a ski boot lying on the floor in his path. A man sits on a bench pulling off his ski boots. A woman warms her hands in front of a stone fireplace. A snowboarder is asleep on a bench with his helmet still on. A young girl is drawing a smiley face on a fogged-up window. A ski instructor in a red jacket is talking to two small children in helmets near the door. Only two signs: one above the counter that says CAFETERIA, and one by the door that says PLEASE KNOCK SNOW OFF BOOTS.' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/31/scene.jpg" alt="A ski hill lodge cafeteria at lunchtime">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You are on your workplace\'s social committee, which is choosing a winter outing for 20 employees on a Friday afternoon. Choose the option you prefer. In the next section, you will need to persuade another committee member that your choice is better.',
          choices: [
            { key: 'A', title: 'Snowshoe tour', image: '<img src="tests/img/31/opt_A.jpg" alt="Photo: Snowshoe tour">', picture: 'A snowy forest trail at the edge of a frozen lake, with several pairs of snowshoes standing upright in a snowbank and a steaming thermos beside them.', facts: ['$35 per person, hot chocolate included', 'Two hours outdoors, 40-minute bus ride each way', 'Cancelled if colder than minus 25 or if there is too little snow', 'Suitable for most fitness levels'] },
            { key: 'B', title: 'Escape room', image: '<img src="tests/img/31/opt_B.jpg" alt="Photo: Escape room">', picture: 'A small, dimly lit puzzle room decorated like an old library, with a locked wooden chest, a padlocked bookcase and a large clock on the wall.', facts: ['$28 per person', 'Groups of 5, so 4 separate rooms', 'One hour, 10-minute walk from the office', 'Indoors, so the weather does not matter'] }
          ],
          third: { key: 'C', title: 'Curling lesson', image: '<img src="tests/img/31/opt_C.jpg" alt="Photo: Curling lesson">', picture: 'A bright indoor curling sheet with red and yellow curling stones resting near the painted blue and red rings, and brooms leaning against the boards.', facts: ['$30 per person, coach included', 'Two hours on the ice, rink is quite cold', '20-minute drive from the office', 'Some balance needed; sliders and helmets provided'] },
          persuade: 'Another committee member thinks the curling lesson would be better. Persuade this person that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>A month ago, you promised to drive your close friend to the hospital at 7:00 a.m. this Thursday for day surgery on her knee, and to bring her home afterward, because she will not be allowed to drive. She lives alone and has already booked the time off work. Today, your child\'s school announced that the spring concert has been moved to Thursday at 9:00 a.m., and your child has a solo.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot drive her on Thursday morning.</p><p><b>Option B:</b> Talk to your child. Explain why you cannot come to the concert.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town council is considering banning overnight parking on all streets from December to March, so that snowplows can clear roads from curb to curb. Supporters, including emergency services, say parked cars leave streets narrow and icy for weeks. Residents of older neighbourhoods, where many homes have no driveway, say they would have nowhere to park, and the proposed $75 fine worries them.</p><p>The council has asked residents for their views before it votes. Should the town ban overnight street parking in winter? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a sports store and see this unusual children\'s sled for $280. Call your friend, who has two children, aged 4 and 7, and wants to buy one sled that they can share this winter. He has about $200 to spend, the sled holds only one child at a time, and it weighs 12 kilograms. Describe the sled and explain whether you think he should buy it.', image: '<img src="tests/img/31/object.jpg" alt="An unusual children\'s sled in a sports store">', picture: 'One unusual bright red plastic children\'s snow sled shaped like a small race car, standing alone on the floor of a sports store, shown clearly from a three-quarter view. Its unusual features: a small black steering wheel at the front; a seat belt across the single padded seat; a round headlight on the nose; a clear plastic windshield; small wheels mounted beside the runners so it can also roll on pavement; a cup holder beside the seat; a long yellow tow rope with a handle at the front, and a small battery box with a switch at the back. A large paper price tag hanging from the steering wheel reads $280.' }
      ]
    }
  });
})();
