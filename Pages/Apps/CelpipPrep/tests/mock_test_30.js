/* Rowe CELPIP Mock Exam: Test 30 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/30/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '30',
    title: 'Mock Test 30',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { UMAR: { name: 'Umar', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#1f618d', style: 'short' }, VALENTINA: { name: 'Valentina', g: 'f', skin: '#f0c9a6', hair: '#3b2a20', shirt: '#a93226', style: 'long' } },
        segments: [{
          lines: [
            ['UMAR', 'This grey looked perfect on the little card, but on our living room wall it\'s practically blue.'],
            ['VALENTINA', 'Store lighting plays tricks on you. Before we fork out for four litres, why don\'t we grab a sample pot and paint a big square by the window?'],
            ['UMAR', 'And then wait a couple of days for it to dry? I wanted the room finished by the weekend.'],
            ['VALENTINA', 'Better two days late than living with a colour we can\'t stand for the next five years.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Valentina suggest buying a sample pot?', o: ['To check how the colour looks in their own home', 'To get the living room finished by the weekend', 'Because the store has run out of the larger cans', 'Because the colour card shows the wrong shade'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { TATIANA: { name: 'Tatiana', g: 'f', skin: '#e8c3a0', hair: '#5a3825', shirt: '#117864', style: 'curly' }, VAUGHN: { name: 'Vaughn', g: 'm', skin: '#5c3a21', hair: '#120c08', shirt: '#7d3c98', style: 'short' } },
          segments: [
            {
              lines: [
                ['VAUGHN', 'Tati, you look like somebody just cancelled Christmas. What\'s up?'],
                ['TATIANA', 'That was the property manager at the new building. The elevator\'s out of service. Some motor part burned out, and the replacement won\'t arrive until Monday at the earliest.'],
                ['VAUGHN', 'Monday? We move on Saturday. The truck\'s booked for eight, and the movers are showing up at nine.'],
                ['TATIANA', 'I know. And we\'re on the sixth floor. I asked if the movers could just take the stairs, and she said technically, yes, but the stairwell\'s narrow, with a tight turn at every landing.'],
                ['VAUGHN', 'So the couch isn\'t going up there. Neither is your grandmother\'s dresser.'],
                ['TATIANA', 'Not a chance. And I rang the moving company. They\'ll do stairs, but above the third floor they tack on thirty-five dollars an hour for each mover, and they\'re sending a crew of three.'],
                ['VAUGHN', 'Ouch. And we can\'t push the whole thing back a week, either. We\'ve got to hand in the keys here by Sunday at noon.'],
                ['TATIANA', 'Right. So whatever we come up with, it has to happen this weekend.']
              ],
              questions: [
                { id: 'L1.1', q: 'What has gone wrong at the new building?', o: ['The lift will not be working on moving day.', 'The stairs are too narrow for furniture.', 'The movers have cancelled the Saturday booking.', 'The new apartment will not be ready in time.'] },
                { id: 'L1.2', q: 'How much extra per hour would the movers charge to use the stairs?', o: ['$105', '$35', '$140', '$165'] },
                { id: 'L1.3', q: 'Why can\'t the couple delay their move?', o: ['They must leave their current home by Sunday.', 'The movers are fully booked the following week.', 'The truck rental cannot be moved to Monday.', 'The building only allows moves on Saturdays.'] }
              ]
            },
            {
              lines: [
                ['TATIANA', 'Ideas. What if the movers leave the big pieces in the lobby, and we haul them up ourselves once the elevator\'s fixed?'],
                ['VAUGHN', 'The manager would never go for it. And frankly, anybody wandering through could help themselves to our stuff.'],
                ['TATIANA', 'Fair enough. What about the party room on the ground floor? At least it locks. Oh, wait, no. I asked already. It\'s booked all weekend for somebody\'s family reunion.'],
                ['VAUGHN', 'Then how about this. My brother Uriel\'s garage is empty these days, and it\'s five minutes from the new place.'],
                ['VAUGHN', 'The movers drop the couch, the dresser and the bed frame there, and carry nothing but boxes up the stairs.'],
                ['TATIANA', 'Hmm. Boxes go quickly, so they\'d be on the stairs an hour or so, not all morning. That keeps the bill down. Mind you, the extra stop costs something too.'],
                ['VAUGHN', 'Half an hour, tops. Compared with wrestling a dresser up six flights, that\'s peanuts.'],
                ['TATIANA', 'And Saturday night? The bed frame\'s going to Uriel\'s.'],
                ['VAUGHN', 'Mattress on the floor for a couple of nights. It won\'t kill us.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Vaughn reject leaving the furniture in the lobby?', o: ['Their things could be taken by passers-by.', 'The movers will not leave items unattended.', 'The lobby is booked for a family reunion.', 'The furniture would block the elevator.'] },
                { id: 'L1.5', q: 'Why does Tatiana like Vaughn\'s plan?', o: ['It would reduce the costly time on the stairs.', 'Uriel has offered to carry the furniture upstairs.', 'The movers would not need to use the stairs at all.', 'The stop at the garage would cost them nothing.'] },
                { id: 'L1.6', q: 'What does Vaughn suggest about their first nights in the new home?', o: ['They will have to do without a proper bed.', 'They will sleep at Uriel\'s place.', 'They will sleep in the party room downstairs.', 'They will carry the bed frame up themselves.'] }
              ]
            },
            {
              lines: [
                ['TATIANA', 'Good news, sort of. The manager called back. The part might come in on Friday after all, and if it does, the technician could have the elevator running by Saturday afternoon.'],
                ['VAUGHN', '"Might" and "if" are doing a lot of heavy lifting in that sentence. I\'m not cancelling Uriel\'s garage on the strength of a maybe.'],
                ['TATIANA', 'No, me neither. We stick with the plan. If the elevator happens to be working when the truck shows up, great, the movers bring everything straight up.'],
                ['VAUGHN', 'Exactly. Oh, and didn\'t the building make us pay a hundred-dollar deposit to reserve the elevator for Saturday?'],
                ['TATIANA', 'Two hundred, actually. To reserve an elevator that doesn\'t work. You know what? Her number\'s still up on my screen.'],
                ['VAUGHN', 'Go for it. But keep it friendly. We\'ll be living down the hall from these people for a long time.']
              ],
              questions: [
                { id: 'L1.7', q: 'How does Vaughn feel about the manager\'s update?', o: ['It is too uncertain to change their plans.', 'It means they will no longer need Uriel\'s garage.', 'It shows the manager has been honest.', 'It will make the move more expensive.'] },
                { id: 'L1.8', q: 'What will Tatiana most likely do next?', o: ['Ask the building to give back the elevator fee', 'Cancel the arrangement for Uriel\'s garage', 'Call the movers to change their Saturday start time', 'Pay the building a second elevator deposit'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Phone company agent', g: 'f', skin: '#c68642', hair: '#2a1b12', shirt: '#145a32', style: 'bun' }, TRISTAN: { name: 'Tristan', g: 'm', skin: '#f2cfb0', hair: '#5d4037', shirt: '#2471a3', style: 'short' } },
          segments: [{
            lines: [
              ['AGENT', 'Thanks for calling Tidewell Mobile. How can I help you today?'],
              ['TRISTAN', 'Hi. I just got back from ten days in Greece, and my bill came in this morning. There\'s four hundred and twelve dollars in roaming charges on it. I nearly choked on my coffee.'],
              ['AGENT', 'Oh dear. Let me pull up your account. Okay, I see them. They\'re all pay-per-use data charges, roughly a gigabyte a day.'],
              ['TRISTAN', 'But that\'s the thing. I added a travel pass before I left. I did it in the app, right at the airport, specifically to avoid this.'],
              ['AGENT', 'I can see that. The trouble is, the pass you added was our U.S. pass. It only works in the States, so in Greece your phone went straight back to regular roaming rates.'],
              ['TRISTAN', 'Seriously? The app gave me two options, and I grabbed the cheaper one. Nothing jumped out at me saying it was only for the U.S.'],
              ['AGENT', 'The name does appear on the screen, but honestly, you\'re not the first person this month to mix them up.'],
              ['TRISTAN', 'And here\'s what gets me. My daughter was on the same trip, on the same family plan, and her bill\'s perfectly normal.'],
              ['AGENT', 'Right, she added the worldwide pass. That one\'s fourteen dollars a day, and it covers most countries, Greece included.'],
              ['TRISTAN', 'So if I\'d tapped the other button, I\'d have paid a fraction of this.'],
              ['AGENT', 'Exactly. So here\'s what I can do. I\'ll re-rate your ten days as if you\'d had the worldwide pass, and credit you the difference. It\'s a one-time courtesy, though, so I\'ll have to note it on your account.'],
              ['TRISTAN', 'That\'s more than fair. Should I pay the full bill in the meantime?'],
              ['AGENT', 'No, hold off. You\'ll get an updated bill by email, probably tomorrow, with the credit already applied. Just pay that one.'],
              ['TRISTAN', 'Great. And the U.S. pass, did that cost me anything on top?'],
              ['AGENT', 'No, it only charges for days you actually spend in the States. Next time, just make sure the screen says "worldwide" before you tap.'],
              ['TRISTAN', 'Believe me, I\'ll be reading every word from now on.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Tristan calling the phone company?', o: ['His bill has unexpected charges from his trip.', 'His travel pass did not work in the United States.', 'His daughter\'s phone was charged for roaming.', 'He wants to add a travel pass before a trip.'] },
              { id: 'L2.2', q: 'What caused the roaming charges?', o: ['He chose an option meant for another country.', 'He forgot to add a travel pass before leaving.', 'The app failed to switch on the pass he bought.', 'He used much more data than his pass allowed.'] },
              { id: 'L2.3', q: 'Why does Tristan mention his daughter?', o: ['Her bill shows that the problem could have been avoided.', 'She was the one who set up his travel pass.', 'She used his phone during part of the trip.', 'Her line is not on the same family plan.'] },
              { id: 'L2.4', q: 'How much will Tristan probably be credited?', o: ['$272', '$412', '$140', '$262'] },
              { id: 'L2.5', q: 'What does the agent suggest about Tristan\'s mistake?', o: ['Other customers have made it too.', 'It was caused by a fault in the app.', 'It will be charged again next month.', 'His daughter should have caught it.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#566573', style: 'bald' }, VALERIE: { name: 'Valérie Thorsen', g: 'f', skin: '#f0c9a6', hair: '#a0703a', shirt: '#b9770e', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Valérie Thorsen, who volunteers with a search and rescue team near Revelstoke, along with her partner, a four-year-old border collie named Tilly. Valérie, how did this start?'],
              ['VALERIE', 'Honestly, by accident. Tilly was a nightmare as a puppy. She herded the cat, the kids, the vacuum. A trainer told me she needed a job, not longer walks, and mentioned in passing that the local team was short of dogs.'],
              ['HOST', 'How long does it take to train a search dog?'],
              ['VALERIE', 'Close to two years before she was certified, and the training never really stops. We practise twice a week, rain or shine, and every year we have to pass the provincial test all over again.'],
              ['HOST', 'What does Tilly actually do on a search?'],
              ['VALERIE', 'She\'s what we call an air-scent dog. People assume search dogs follow footprints, but Tilly doesn\'t need to know who she\'s looking for.'],
              ['VALERIE', 'She works back and forth across the wind, and when she picks up human scent, she runs to the person, then comes back and leads me in.'],
              ['HOST', 'Is it mostly lost hikers?'],
              ['VALERIE', 'Hikers are maybe half. We also get mushroom pickers, hunters, and quite often older people with dementia who\'ve wandered off from home. Those are the calls that stay with you long after you\'ve gone to bed.'],
              ['HOST', 'Who pays for all of this?'],
              ['VALERIE', 'Mostly we do. The province covers fuel and insurance during an actual search, but Tilly\'s food, her vet bills, my gear, the training weekends, that\'s all out of my own pocket.'],
              ['VALERIE', 'I figure it runs about three thousand a year. My husband calls her the most expensive hobby in the house.'],
              ['HOST', 'And the calls can come at any hour?'],
              ['VALERIE', 'Any hour. I\'ve walked out of a birthday dinner before the cake came out. My employer is very understanding, thankfully. But I don\'t take every call. If I\'m running on empty, I\'m a liability to the whole team.'],
              ['HOST', 'What advice would you give hikers?'],
              ['VALERIE', 'Tell someone exactly where you\'re going and when you\'ll be back. And if you get lost, stay put.'],
              ['VALERIE', 'Someone who keeps walking can drift right out of the area we\'re searching. Someone who sits down beside a big tree is far easier for Tilly to find.'],
              ['HOST', 'So what\'s next for the two of you?'],
              ['VALERIE', 'Tilly has maybe five good working years left, so I\'ve started looking at puppies. My husband is absolutely thrilled, as you can imagine.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Valérie first become involved in search and rescue?', o: ['Her lively dog needed a demanding activity.', 'A neighbour of hers got lost while hiking.', 'A dog trainer offered her a paid position.', 'The team asked her to bring her dog to them.'] },
              { id: 'L3.2', q: 'What does Valérie explain about how Tilly searches?', o: ['She can find people without knowing their scent.', 'She follows the footprints that people leave behind.', 'She stays beside Valérie until she reaches someone.', 'She can only work when there is no wind at all.'] },
              { id: 'L3.3', q: 'Why does Valérie mention people with dementia?', o: ['Those searches are the hardest for her to forget.', 'They make up about half of all the team\'s searches.', 'They are usually found close to their homes.', 'They are the easiest people for Tilly to find.'] },
              { id: 'L3.4', q: 'What does Valérie say about the cost of this work?', o: ['Volunteers pay for most of it themselves.', 'The province pays for Tilly\'s vet bills.', 'Her employer covers her training weekends.', 'Each search costs the team three thousand dollars.'] },
              { id: 'L3.5', q: 'Why does Valérie sometimes turn down a call?', o: ['Being exhausted could put others in danger.', 'Her employer will not let her leave work early.', 'She refuses to miss family celebrations.', 'Tilly may only work twice a week.'] },
              { id: 'L3.6', q: 'How does Valérie\'s husband probably feel about a new puppy?', o: ['He is less pleased than she claims.', 'He is excited to help train it.', 'He thinks Tilly should retire now.', 'He has not heard about the plan.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#e3b28b', hair: '#2a1b12', shirt: '#212f3d', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Starting the first week of May, residents of Tillsonburg will be able to put large household items out at the curb for free, under a new bulky item pickup program approved by town council on Monday night.'],
              ['NEWS', 'Until now, residents had to haul couches, mattresses and other large items to the landfill themselves, or pay the town twenty-five dollars per item to collect them.'],
              ['NEWS', 'Under the new program, each household can book two free pickups a year, one in the spring and one in the fall, with up to three items each time.'],
              ['NEWS', 'Pickups must be booked online or by phone at least a week in advance. Items should be at the curb by seven in the morning on collection day, but not before six the evening before.'],
              ['NEWS', 'A few rules apply. Mattresses and box springs must be wrapped in plastic, to keep bedbugs from spreading in the truck.'],
              ['NEWS', 'Fridges, freezers and air conditioners will only be taken if they carry a sticker showing that a licensed technician has removed the coolant.'],
              ['NEWS', 'Renovation waste, such as drywall, shingles and old carpet, is not included and must still go to the landfill.'],
              ['NEWS', 'Council says the main reason for the change is illegal dumping. Last year, town crews removed more than two hundred items left in ditches, parks and the ravine behind the arena, at a cost of nearly forty thousand dollars.'],
              ['NEWS', 'Councillor Ugo Valcourt says he expects the program to pay for itself if even half of that dumping stops.'],
              ['NEWS', 'Residents who need more than three items taken away at once can still use the town\'s paid service.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A town\'s new free collection of large items', 'A new fee for dropping items at the landfill', 'A town campaign against bedbugs in homes', 'A plan to clean up the ravine behind the arena'] },
              { id: 'L4.2', q: 'Before the change, how much would a resident have paid to have four items collected?', o: ['$100', '$125', '$75', '$50'] },
              { id: 'L4.3', q: 'What must residents do before putting out an old freezer?', o: ['Have a trained expert drain it and tag it', 'Wrap it in plastic for the collection truck', 'Book its pickup at least two weeks ahead of time', 'Take it to the landfill on their own'] },
              { id: 'L4.4', q: 'Why did council approve the program?', o: ['To curb dumping in public places', 'To earn money from new pickup fees', 'To stop bedbugs spreading through town', 'To cut the cost of running the landfill'] },
              { id: 'L4.5', q: 'What can be inferred about a household with five items to remove at once?', o: ['It will need to pay for at least part of the pickup.', 'It can book both free pickups for the same day.', 'It must take every one of the items to the landfill itself.', 'It may put the items out two evenings early.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Carpool plan after Route 14', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { TABITHA: { name: 'Tabitha', g: 'f', skin: '#c98c64', hair: '#1d1410', shirt: '#1f618d', style: 'bun' }, VINCENT: { name: 'Vincent', g: 'm', skin: '#f2cfb0', hair: '#c0392b', shirt: '#196f3d', style: 'short' }, TRAVIS: { name: 'Travis', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#b9770e', style: 'bald' } },
          segments: [{
            lines: [
              ['TABITHA', 'So it\'s official. Transit is cutting the Route fourteen bus at the end of the month.'],
              ['TRAVIS', 'Which leaves me stranded. No licence, no car, and a forty-minute walk along the highway shoulder.'],
              ['VINCENT', 'Nobody\'s walking the highway. We all live within ten minutes of each other. Let\'s just carpool.'],
              ['TABITHA', 'I\'m in, but I drop my son at daycare at eight-fifteen. I can\'t leave the house any earlier.'],
              ['VINCENT', 'That works. We start at nine. Even with the daycare stop, you\'d get here by quarter to.'],
              ['TRAVIS', 'I can\'t drive, obviously, but I\'m happy to chip in for gas. Say twenty a week?'],
              ['VINCENT', 'Twenty\'s generous. Parking\'s the bigger cost for me, though. Twelve dollars a day in the garage.'],
              ['TABITHA', 'Then whoever drives, we split the parking three ways. That\'s only fair.'],
              ['TRAVIS', 'Agreed. So who drives when? I don\'t want either of you stuck doing it every single day.'],
              ['VINCENT', 'Alternate weeks? Tabitha one week, me the next. It\'s easier to keep straight than a daily rota.'],
              ['TABITHA', 'My van\'s roomier, but Vincent\'s car barely sips gas. Weekly turns sound good to me.'],
              ['TRAVIS', 'What about Mondays, though? Vincent, you have that seven-thirty call with head office.'],
              ['VINCENT', 'Right. On Mondays I\'ll drive in on my own, whichever week it is. You two ride with Tabitha.'],
              ['TABITHA', 'Fine by me. Now the tricky part: going home. Some days I\'m out the door at five sharp.'],
              ['TRAVIS', 'And I sometimes get stuck on calls until six. I really don\'t want to hold anyone up.'],
              ['VINCENT', 'Then let\'s set a rule. The driver leaves at ten past five. Miss it, and you find your own way.'],
              ['TRAVIS', 'Harsh, but fair. There\'s still the Route twenty bus. It just takes the long way round.'],
              ['TABITHA', 'And if the driver is the one stuck late? Then what happens?'],
              ['VINCENT', 'Then the driver texts by four, and the other two make other plans. No last-minute surprises.'],
              ['TRAVIS', 'Sounds good. Honestly, this beats an hour and a half on two different buses.'],
              ['TABITHA', 'One more thing. My son\'s car seat takes up half the back, so somebody\'s sitting up front.'],
              ['TRAVIS', 'I\'ll take the front. My knees will thank you for it.'],
              ['VINCENT', 'Let\'s try it for a month and see what breaks. We can tweak it in December.'],
              ['TABITHA', 'Deal. I\'ll put the schedule in a shared calendar, so nobody can claim they forgot.'],
              ['TRAVIS', 'And I\'ll set up an automatic transfer for my share of the parking every Friday.'],
              ['VINCENT', 'Perfect. Now all we have to agree on is the radio station.'],
              ['TABITHA', 'The driver picks. That one is not up for discussion.']
            ],
            questions: [
              { id: 'L5.1', q: 'Why is Travis especially affected by the bus cut?', o: ['He has no other practical way to get to work.', 'He lives the farthest away from the office.', 'He has to be at work by seven-thirty every day.', 'He must take his son to daycare each morning.'] },
              { id: 'L5.2', q: 'Why can\'t Tabitha leave home any earlier?', o: ['She has a child to drop off first.', 'She has to be at work by quarter to nine.', 'She starts work later than the others.', 'She has a call with head office.'] },
              { id: 'L5.3', q: 'How much will each person pay toward parking on a driving day?', o: ['$4', '$12', '$6', '$20'] },
              { id: 'L5.4', q: 'Why does Vincent suggest taking turns by the week?', o: ['It is simpler to keep track of.', 'His car uses less gas than the van.', 'Tabitha only wants to drive on Mondays.', 'It gives Travis time to get a licence.'] },
              { id: 'L5.5', q: 'What will happen on Mondays?', o: ['Tabitha will be the driver, whoever\'s week it is.', 'Travis will take the Route twenty bus to the office.', 'Vincent will drive everyone in for his early call.', 'Nobody will carpool because of the early call.'] },
              { id: 'L5.6', q: 'What does Travis\'s response to the ten-past-five rule show?', o: ['He accepts it, though it may cost him.', 'He wants the leaving time moved to six.', 'He thinks it is unfair to the driver.', 'He expects an exception on Mondays.'] },
              { id: 'L5.7', q: 'What must a driver who will be working late do?', o: ['Send word well before the usual leaving time', 'Pay for the others to take the bus home', 'Leave the car keys with one of the passengers', 'Call the others just before five o\'clock'] },
              { id: 'L5.8', q: 'What is Tabitha\'s tone in her final remark?', o: ['Playful but firm', 'Irritated and dismissive', 'Nervous and unsure', 'Teasing but hesitant'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should stores have to take cash?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c68642', hair: '#2a1b12', shirt: '#0e6655', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Try paying for a coffee with a twenty-dollar bill these days, and you may be turned away. A growing number of Canadian cafés, food trucks and parking lots now accept only cards and phones.'],
              ['NARR', 'Some cities are asking whether that should be allowed.'],
              ['NARR', 'Tamsin Vogel, who runs a seniors\' advocacy group in Miramichi, wants a law requiring shops that sell everyday goods to take cash. Her first argument is about who gets left behind.'],
              ['NARR', 'Most people, she says, pay with a tap without a second thought. But some older people have never owned a credit card, and many people on low incomes stick to cash because bank fees are beyond them.'],
              ['NARR', '"When a shop goes cashless," she says, "it isn\'t just choosing a payment method. It\'s quietly hanging a sign on the door that says certain customers need not apply."'],
              ['NARR', 'Her second argument is about what happens when technology fails. Last winter, an ice storm knocked out power and phone networks across parts of New Brunswick for two days.'],
              ['NARR', 'Card machines went dead, and the only people who could still buy bread or baby formula were the ones with bills tucked in their wallets.'],
              ['NARR', 'Vogel admits that counting it, storing it and taking it to the bank is a real burden for small businesses.'],
              ['NARR', 'But she says that burden is part of serving the whole public, in the same way that a ramp at the front door is.'],
              ['NARR', 'Victor Ueda, who owns three bakeries in Bathurst and speaks for a regional business group, opposes a cash requirement. His first argument is safety.'],
              ['NARR', 'Before his shops stopped handling cash, two of them were broken into in a single year, and a baker was threatened while locking up. Since the switch, nobody has bothered them.'],
              ['NARR', '"A till full of bills is a target," he says. "An empty one isn\'t worth smashing a window for."'],
              ['NARR', 'His second argument is time. Counting the drawer, chasing down mistakes and driving deposits to the bank used to eat up close to an hour a day at each shop, time better spent baking.'],
              ['NARR', 'Ueda insists he is not deaf to Vogel\'s concerns. His staff have never turned away a regular who had only a handful of coins. "A muffin on the house costs me a lot less than a robbery."'],
              ['NARR', 'But he argues that a law would be a blunt tool. A food truck at a summer festival and a national grocery chain should not face the same rule, and small owners would end up carrying costs that big chains barely notice.'],
              ['NARR', 'Vogel replies that a law could be limited to essentials, such as groceries, pharmacies and public transit, and leave festival food trucks alone.'],
              ['NARR', 'Ueda answers that such rules tend to grow, and that the real fix is to make basic bank accounts free, so that nobody has to depend on cash in the first place.'],
              ['NARR', 'Vogel calls that a fine idea for the long run. But, she says, someone who needs milk this afternoon can\'t wait years for the banks to change their minds.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether businesses should be required to accept cash', 'How an ice storm cut off card payments in New Brunswick', 'Why many seniors prefer to pay with a credit card', 'How bakery owners can keep staff safe at closing time'] },
              { id: 'L6.2', q: 'What does Vogel mean when she talks about a sign on the door?', o: ['Refusing cash shuts out some groups of people.', 'Shops should post their payment rules clearly.', 'Cashless shops attract fewer customers overall.', 'Businesses have a right to choose their customers.'] },
              { id: 'L6.3', q: 'Why does Vogel mention what happened last winter?', o: ['To show that cash keeps working during an outage', 'To explain why some stores had to close for two days', 'To argue that card machines should be able to run on batteries', 'To show that older people suffer most during storms'] },
              { id: 'L6.4', q: 'What does Vogel admit about cash?', o: ['Dealing with it costs small shops time and effort.', 'Keeping it in a till makes a shop a target.', 'It costs people on low incomes extra fees.', 'It is no longer useful during power outages.'] },
              { id: 'L6.5', q: 'Why does Ueda think a law would be unfair?', o: ['Small owners would feel its costs more.', 'Grocery chains already refuse to take cash.', 'Food trucks would have to close at festivals.', 'Banks would charge small bakeries higher fees.'] },
              { id: 'L6.6', q: 'How does Vogel react to Ueda\'s idea about bank accounts?', o: ['It would help eventually but not right now.', 'It would cost businesses more than taking cash.', 'It would make a cash law unnecessary at once.', 'It would only help people who live near a bank.'] }
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
          passage: '<h3>Message</h3><p>Hi Verna,</p><p>I could hardly believe it when Ulysses told me you had offered him your spare room for the summer. You are a lifesaver. As you know, his co-op placement at the seed research station starts on May 5 and runs for sixteen weeks, and every room he found online was either a basement with no window or cost more than half of what he will earn.</p><p>Before you commit, though, I want you to know what you are getting into. He is a good kid, but he is nineteen. He will eat everything in your fridge if you let him, and his idea of tidying up is moving the pile from the floor to the chair. I have told him that, in your house, he does his own laundry, and every Saturday he cleans the bathroom he uses, no exceptions.</p><p>We would also like to pay you. I know you said not to, but I would feel terrible otherwise. He is earning $19 an hour, and we thought $500 a month toward groceries and utilities would be fair. If you really will not take money, then at least let him cook dinner twice a week. He makes a decent curry, which is about the only thing his father ever taught him.</p><p>One more thing you should know: some days his placement starts at 6:00 a.m., because the team takes samples in the fields before the heat sets in, so he may be up and about very early. He has promised to tiptoe, but I know what a light sleeper you are, and I would rather you heard it from me now than at half past five on a Monday morning.</p><p>He will come up with his father on the Sunday before he starts. His father is driving our car straight back to Lindsay that same evening, so Ulysses will be cycling to work, which he says is about twenty minutes from your place.</p><p>Is there anything he should bring? I can send sheets and towels with him if that helps. And please, please, tell me honestly if any of this changes your mind. I will not be offended.</p><p>Love,<br>Trudy</p>',
          questions: [
            { id: 'R1.1', q: 'Trudy mentions the rooms Ulysses found online to show that', o: ['decent housing he could afford was hard to find.', 'he would prefer to live in a basement apartment.', 'Verna\'s spare room is larger than most rooms.', 'his placement pays less than he had expected.'] },
            { id: 'R1.2', q: 'Trudy describes her son\'s habits in order to', o: ['warn Verna what living with him may be like.', 'complain about the way his father has brought him up.', 'ask Verna to take care of his laundry for him.', 'explain why he is not able to cook for himself.'] },
            { id: 'R1.3', q: 'Each week, Ulysses is expected to', o: ['clean the bathroom that he uses.', 'do the grocery shopping for the house.', 'cook a curry for Verna on Saturday.', 'move the pile of clothes off his chair.'] },
            { id: 'R1.4', q: 'If Verna refuses money, Trudy hopes she will accept', o: ['some meals made by Ulysses instead.', 'a smaller amount every month.', 'help from his father with groceries.', 'payment at the end of the summer.'] },
            { id: 'R1.5', q: 'Trudy warns Verna about the early starts because Verna', o: ['is easily woken up.', 'gets up at six for work.', 'would need to drive him.', 'dislikes noisy guests.'] },
            { id: 'R1.6', q: 'Ulysses will get to work by bicycle because', o: ['the family car will not be staying with him.', 'the research station has no parking for staff.', 'his father wants him to get more exercise.', 'the buses do not run before six in the morning.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Trudy,</p><p>Nothing has changed my mind, I promise! After raising two boys of my own, a teenager who [[R1.7]] does not frighten me in the least. Your Saturday rule stands, and I may add the kitchen floor to it.</p><p>As for money, I will not take $500 a month, so let\'s go with your other idea. If Ulysses [[R1.8]], we will call it even, and I will buy the groceries. I am already looking forward to that curry.</p><p>Thank you for the warning about [[R1.9]]. I have bought earplugs, and I will put him in the room at the back of the house, so the creaky stairs should be the only thing I hear.</p><p>Since he will be [[R1.10]] every day, he can keep his bike in my garage, out of the rain. Please do send the towels, but no sheets: [[R1.11]].</p><p>See you both on the Sunday!</p><p>Verna</p>',
          blanks: [
            { id: 'R1.7', o: ['leaves clothes around and empties the fridge', 'gets up before six o\'clock every morning for work', 'cooks a curry a couple of times a week', 'cycles to the research station and back every day'] },
            { id: 'R1.8', o: ['makes supper a couple of evenings a week', 'pays a smaller share of the monthly utilities', 'does all of the laundry in the house', 'cleans the bathroom every Saturday'] },
            { id: 'R1.9', o: ['his very early mornings', 'his very large appetite', 'his weekend laundry', 'his ride home at night'] },
            { id: 'R1.10', o: ['riding to the research station', 'driving to the research station', 'taking the bus to the fields', 'working from my house'] },
            { id: 'R1.11', o: ['the spare bed is already made up', 'he can borrow his father\'s instead', 'his father is driving the car back', 'the curry might stain them'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Teal Lake Outfitters: Boat Rentals</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Boat</th><th>1 hour</th><th>Half day (4 hours)</th><th>Full day</th></tr></thead><tbody>' +
            '<tr><td>Single kayak</td><td>$25</td><td>$50</td><td>$70</td></tr>' +
            '<tr><td>Tandem kayak (2 people)</td><td>$35</td><td>$70</td><td>$95</td></tr>' +
            '<tr><td>Canoe (2 to 3 people)</td><td>$30</td><td>$60</td><td>$85</td></tr>' +
            '<tr><td>Stand-up paddleboard</td><td>$20</td><td>$40</td><td>$55</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Open 8:00 a.m. to 6:00 p.m. All boats must be back by 6:00 p.m. Late returns: $15 for each 30 minutes or part of 30 minutes.</li><li>Weekdays (Monday to Friday): 20% off full-day rentals only.</li><li>A boat returned more than 1 hour late loses the weekday discount, and the full-day price is charged in addition to the late fees.</li><li>Paddles and life jackets are included. A $50 deposit on a credit card is held for each boat.</li><li>Children under 12 may only ride in a tandem kayak or canoe with an adult (18 or over).</li><li>Renters must be 16 or older to take out a single kayak or a paddleboard on their own.</li><li>If winds above 30 km/h are forecast, the lake is closed to rentals. Prepaid renters receive a credit for another day. No cash refunds.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Tobin,</p><p>I have been looking at Teal Lake Outfitters for Saturday. Uriah keeps asking for a kayak of his own, but he only turned 15 in April, so [[R2.1]]. I suggest you take him in a tandem kayak, while Vada and I share a canoe. She is 9, and since [[R2.2]], that is allowed.</p><p>For a full day, the two boats will come to [[R2.3]]. I checked whether a Saturday booking gets any reduction, but [[R2.4]].</p><p>Please bring a credit card, because they will hold [[R2.5]] while we are out on the water. Let\'s also aim to be back well before six, since they charge for every half hour we are late. The kids are already arguing about who gets to steer.</p><p>Ulla</p>',
          blanks: [
            { id: 'R2.1', o: ['he cannot take one out alone yet', 'he would have to rent a paddleboard', 'he would be charged the adult price', 'he must wear a special life jacket'] },
            { id: 'R2.2', o: ['an adult will be in the boat with her', 'children of 9 may paddle a canoe alone', 'canoes are free for children under 12', 'she will be wearing her own life jacket'] },
            { id: 'R2.3', o: ['$180', '$144', '$165', '$155'] },
            { id: 'R2.4', o: ['the 20% discount is for weekdays only', 'the discount only applies to half days', 'weekend renters must pay a larger deposit', 'the lake is closed on windy Saturdays'] },
            { id: 'R2.5', o: ['a deposit on each boat', 'our life jackets as security', 'the full price until we return', 'a fee for every half hour'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Two adults rent a tandem kayak for a full day on a Wednesday and bring it back at 6:40 p.m. They pay', o: ['$106.', '$91.', '$125.', '$110.'] },
            { id: 'R2.7', q: 'Renters who have prepaid but find the lake closed because of strong wind will', o: ['be offered another day on the water.', 'get their money back in cash right away.', 'receive 20% off their next rental.', 'lose the deposit on their boat.'] },
            { id: 'R2.8', q: 'An 11-year-old and a 13-year-old want to share a canoe without their parents. They', o: ['will need an adult to come with them.', 'may go out if both of them wear life jackets.', 'may only go out on a weekday.', 'can rent a canoe but not a kayak.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Backyard Rink</h3><p><b>A.</b> For many Canadian families, winter is not complete without a patch of ice behind the house. Long before indoor arenas were common, children learned to skate on frozen ponds, rivers and flooded vacant lots. The backyard rink as we know it took off after the Second World War, when families moved into new suburbs where every house came with a flat lawn and an outdoor tap. Today the tradition supports a busy little industry: hardware stores sell complete kits with plastic liners, boards and brackets, and online forums are full of parents comparing notes. Some builders add lights, nets and even painted lines, while others are content with a rough rectangle of ice and a shovel.</p><p><b>B.</b> Building a good surface is mostly a matter of patience. The first step is to find the flattest part of the yard, since water always settles at the low end, and a slope of even a few centimetres can leave one corner dangerously thin. Most builders now lay a white plastic liner inside a frame of boards to hold the water while it freezes. Experienced builders flood the rink in many thin layers rather than one deep one, because deep water freezes slowly and tends to crack. They also prefer to add water late in the evening, when temperatures are lowest and the ice has all night to set. Some insist that hot water from the laundry tub gives a glassier finish, although others say it makes no difference at all.</p><p><b>C.</b> A rink is not free, and it is not without problems. A good liner costs a few hundred dollars and usually lasts only two or three seasons. Flooding uses a surprising amount of water, which shows up on the bill in towns where water is metered. After every snowfall, the surface must be cleared quickly, or the snow insulates the ice and leaves it lumpy. In spring, the grass under the liner often looks yellow and flattened, but in most cases it recovers within a few weeks. Neighbours are usually patient, although stray pucks and floodlights left on late can test that patience.</p><p><b>D.</b> There is also a scientific side to the hobby. Warmer winters have made the skating season shorter and less predictable in many regions, and some researchers have turned to backyard rink owners for help. Through a volunteer project, thousands of families have recorded the dates when their rinks were usable and posted them online. The results suggest that in parts of southern Canada, the number of skating days has dropped noticeably over the past few decades. For the volunteers, the project gives their hobby an extra purpose, and many say it has made them pay closer attention to the weather.</p>',
          questions: [
            { id: 'R3.1', q: 'Home rinks spread when families settled in places with level yards and a water supply outside.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Ice made from a single heavy flood is more likely to split.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Some rink owners support research by keeping track of their skating season.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'Shops now sell everything needed to set up a rink at home.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Uneven ground can leave part of the ice unsafe to skate on.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'Many towns charge a special rate for water used to flood a rink.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'Snow that is not removed promptly can ruin the smoothness of the ice.', fixed: true, a: 'C' },
            { id: 'R3.8', q: 'Builders do not agree on whether the temperature of the water matters.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'Most families with a home rink use it mainly for hockey practice.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Smoking Be Banned on Apartment Balconies?</h3><p>When a property company that owns twelve apartment buildings in Belleville announced last fall that smoking would no longer be allowed on balconies, it received more than three hundred emails in a single week. Roughly half thanked the company. The other half accused it of telling adults what they could do in their own homes. The rule, which covers tobacco and cannabis alike, applies immediately to new tenants, and to existing tenants when their leases come up for renewal.</p><p>Uma Tandon, who lives on the fourth floor of one of the buildings with her eight-year-old son, was among those who wrote to say thank you. Her son has asthma, and on warm evenings smoke from the balcony below drifts straight through their open windows. "All summer, we kept the windows shut and ran a fan," she says. "I pay rent for a balcony I cannot use." Health agencies across Canada advise that there is no safe level of second-hand smoke, and Tandon says she does not understand why her son\'s lungs should matter less than a neighbour\'s habit.</p><p>Vaclav Rook sees things very differently. The 71-year-old retired bus driver has lived in the same building for twenty-two years and has smoked since he was nineteen. "My balcony is part of my home," he says. "If I cannot smoke there, I have to ride the elevator down six floors and stand on the sidewalk, in January, with a bad hip." He says he would gladly follow rules about smoking only when neighbours are not outside, or using a set spot in the parking lot, "as long as it has a roof."</p><p>Vera Tadros, a lawyer who advises tenants, says landlords are generally free to add new rules to new leases. Changing the terms of an existing lease is harder, she explains, which is why the company waited for renewals. Her bigger concern is enforcement. "A rule like this often turns neighbours into police," she says. "Complaints are hard to prove, and they can poison relations in a building for years." She suggests that buildings with a ban also provide a covered smoking area well away from windows and doors.</p><p>The company points to its own figures. When a smoker moves out, it says, cleaning and repainting the unit costs between $3,000 and $5,000 more than usual, and the smell can keep a suite empty for weeks. It also says complaints about smoke were its single most common tenant complaint before the change.</p><p>Six months in, the company reports that smoke complaints have fallen by about a third. Two long-time tenants have moved out, and Rook says he is looking at a seniors\' residence that has a sheltered courtyard for smokers. Tandon, meanwhile, says she opened her windows in April for the first time in three years. The company says it has no plans to reverse the rule, but it is considering Tadros\'s idea of a covered smoking area.</p>',
          questions: [
            { id: 'R4.1', q: 'The company\'s announcement produced a response that was', o: ['large and sharply split.', 'mostly negative from tenants.', 'slow to arrive at first.', 'mainly about cannabis.'] },
            { id: 'R4.2', q: 'Tandon says "I pay rent for a balcony I cannot use" to suggest that', o: ['she is not getting what she pays for.', 'her rent should be reduced until the rule is changed.', 'she wants to move to a lower floor.', 'the balcony itself needs repairs.'] },
            { id: 'R4.3', q: 'Rook\'s main objection is that the rule would', o: ['push him outside in harsh conditions.', 'make him give up smoking altogether.', 'force him to move out of his apartment.', 'cost him more in rent each month.'] },
            { id: 'R4.4', q: 'According to Tadros, a rule like this is easiest to apply to', o: ['people signing a new lease.', 'tenants partway through a lease.', 'buildings with a smoking area.', 'neighbours who complain often.'] },
            { id: 'R4.5', q: 'Rook would most likely agree that', o: ['a covered place to smoke would be fair.', 'smokers should be allowed to smoke wherever they like.', 'second-hand smoke is harmless to other tenants.', 'the company should cancel the rule for all tenants.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I manage a small apartment building, and this article could have been written about us. I sympathize with Ms. Tandon, because no parent should have to [[R4.6]] to protect a child\'s health. At the same time, Mr. Rook\'s situation shows that a ban can be very hard on [[R4.7]].</p><p>Ms. Tadros is right that the real difficulty comes after the rule is written. If tenants are expected to [[R4.8]], the result may be years of bad feeling. That is why I like her idea of [[R4.9]], which might also have kept Mr. Rook in his home.</p><p>Finally, the company\'s numbers are worth noting. Landlords are not only thinking of health, but also of [[R4.10]] when a smoker leaves.</p>',
          blanks: [
            { id: 'R4.6', o: ['keep the windows closed all summer', 'move to a building with no balconies', 'complain to health agencies', 'use a set spot in the parking lot'] },
            { id: 'R4.7', o: ['older tenants with health problems', 'parents of children with asthma', 'landlords who own many buildings', 'tenants who have just signed leases'] },
            { id: 'R4.8', o: ['report on one another', 'pay for repainting', 'smoke only in winter', 'renew their leases early'] },
            { id: 'R4.9', o: ['a covered smoking spot far from windows', 'letting smokers use their balconies at night', 'raising the rent for every smoker', 'waiting for every lease to expire'] },
            { id: 'R4.10', o: ['the expense of preparing the unit again', 'the number of emails they receive from tenants', 'the length of the tenant\'s lease', 'complaints from neighbours about smoke'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Last spring, you signed a twelve-month contract with a fitness club, paying $55 a month. In August, your employer transferred you to a city more than 400 kilometres away, where the club has no locations. You emailed the club a copy of your transfer letter and asked to cancel, but it charged you a $199 early cancellation fee. Your contract says members who move more than 50 kilometres from the nearest club may cancel without a fee.</p><p>Write an email to the club\'s membership manager. In your email, do the following:</p><ul><li>Explain your situation and what the club did.</li><li>Explain why you believe the fee should not apply to you.</li><li>Say what you would like the club to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your neighbourhood association has $15,000 to spend on one project for the area and is asking residents which option they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Install outdoor fitness equipment, such as pull-up bars and balance beams, in the neighbourhood park. It would be free for everyone to use for many years. However, it would be little used in winter, and some residents worry it will attract noise late at night.' },
            { key: 'B', label: 'Option B', text: 'Run a free six-week summer day program for children aged 6 to 12, with crafts, sports and trips. It would help working parents a great deal. However, the money would only cover one summer, and there would be places for just 40 children.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your town or city where you like to spend time, and explain why you enjoy going there.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has just been told by her doctor to walk for at least thirty minutes every day. She works from home, it is the middle of winter, the sidewalks on her street are often icy, and she looks after her two-year-old at home two days a week. Give your friend advice on how she can build this habit and stick to it.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you tried to change a habit, such as how you eat, sleep, spend money or use your phone. Why did you want to change it, how hard was it, and what would you do differently if you tried again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/30/scene.jpg" alt="A busy hotel lobby at check-in time">', picture: 'A bright, busy hotel lobby in the afternoon at check-in time, drawn as a colourful comic-style scene with 15 people. At the front desk on the left, two clerks are working: one is handing a key card to a woman with a rolling suitcase, and the other is typing while a man in a business suit waits with his arms crossed. Two more guests wait in line behind them, and the last one, a young woman, is looking at her watch. In the centre, a bellhop is pushing a tall brass luggage cart piled very high with suitcases, and the top suitcase is clearly leaning and about to slide off. Near the elevators on the right, a small boy is pressing all of the elevator buttons while his father looks at his phone. A man is asleep in an armchair with a newspaper open on his chest. A teenage girl sits on the floor charging her phone at a wall outlet. A cleaner is mopping the shiny floor beside a yellow sign, and a tourist is walking backwards toward the wet patch while unfolding a large paper map, clearly about to step onto it. A concierge at a small desk is pointing at a city map for an older man with a backpack. Only two signs: a yellow floor sign that says WET FLOOR, and a small sign above the desk that says CHECK-IN 3 PM.' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/30/scene.jpg" alt="A busy hotel lobby at check-in time">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family of four, two adults and two children aged 8 and 12, wants to start a new activity to do together on weekends this winter. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Indoor climbing gym', image: '<img src="tests/img/30/opt_A.jpg" alt="Photo: Indoor climbing gym">', picture: 'A tall indoor climbing wall covered in brightly coloured plastic holds, with ropes hanging down and thick blue safety mats on the floor.', facts: ['Family membership: $95 per month', 'Children must first take a $30 safety class each', '25-minute drive from home', 'Open until 10:00 p.m., busy on weekends'] },
            { key: 'B', title: 'Family karate classes', image: '<img src="tests/img/30/opt_B.jpg" alt="Photo: Family karate classes">', picture: 'A bright martial arts studio with padded blue and red floor mats, a row of small white uniforms with coloured belts hanging on wall hooks, and a stack of foam practice pads in the corner.', facts: ['$220 for a 10-week session, all four people', 'Uniforms extra: $35 each', '10-minute walk from home', 'Saturdays at 9:00 a.m.; children and adults train in separate groups at first'] }
          ],
          third: { key: 'C', title: 'Board game café', image: '<img src="tests/img/30/opt_C.jpg" alt="Photo: Board game café">', picture: 'A cozy café table covered with colourful board game boxes without readable writing, dice, wooden game pieces and two mugs of hot chocolate, with tall shelves full of games behind it.', facts: ['$8 per person per visit, plus food and drinks', 'Over 600 games, and staff teach the rules', '15-minute drive from home', 'No reservations on weekends; waits can be over an hour'] },
          persuade: 'A family member thinks the board game café would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Two weeks ago, you promised your elderly neighbour, who moves into a seniors\' residence on Monday, that you would help him empty his garage this Saturday from 10:00 a.m. A charity truck is coming at 1:00 p.m. to collect the furniture and tools he is giving away, and he has no family nearby. Today, the coach of your daughter\'s swim club called. A volunteer is sick, and unless you help time races on Saturday from 9:00 a.m. to 1:00 p.m., the meet will have to be cancelled for 60 young swimmers.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot come on Saturday morning.</p><p><b>Option B:</b> Talk to the swim coach. Explain why you cannot help at the meet.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>The owner of your apartment building wants to install security cameras in the hallways, elevators, laundry room and parcel room. Many tenants support the idea, because several packages have been stolen this year and a car in the garage was broken into. Other tenants say cameras invade their privacy, and they are unhappy that the cost would add about $15 a month to everyone\'s rent.</p><p>The owner has asked all tenants to give their opinion before a vote next month. Should the building install the cameras? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a garden centre and see this unusual picnic table for $620. Call your friend, who has just bought a house with a small, sloped backyard and wants to host family barbecues this summer. She has a budget of about $500, and the table weighs almost 90 kilograms. Describe the table and explain whether you think she should buy it.', image: '<img src="tests/img/30/object.jpg" alt="An unusual picnic table at a garden centre">', picture: 'One unusual wooden picnic table standing alone on the floor of a garden centre, shown clearly from a three-quarter view. Its unusual features: a large striped umbrella rising from the centre of the table with a small solar panel on top and a string of little lights around its edge; a built-in cooler box sunk into the middle of the tabletop with a hinged lid; two large rubber wheels at one end and two long handles at the other end, like a wheelbarrow; one bench is shorter than the other, leaving an open space at the end for a wheelchair; a checkerboard painted on one corner of the tabletop; a small built-in charcoal grill attached to the far end with a short chimney. A large paper price tag hanging from the table reads $620.' }
      ]
    }
  });
})();
