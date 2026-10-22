/* Rowe CELPIP Mock Exam: Test 29 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/29/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '29',
    title: 'Mock Test 29',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { SVEN: { name: 'Sven', g: 'm', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#2e86c1', style: 'short' }, QUINN: { name: 'Quinn', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#8e44ad', style: 'curly' } },
        segments: [{
          lines: [
            ['SVEN', 'This ticket machine keeps rejecting my card. I think the chip\'s finally given up.'],
            ['QUINN', 'Try mine, then. You can pay me back at lunch.'],
            ['SVEN', 'Thanks, but look, the bus is already pulling in. I\'ll just pay the driver. I\'ve got coins in here somewhere.'],
            ['QUINN', 'Hope they add up. The drivers don\'t give change.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Sven turn down Quinn\'s offer?', o: ['There is no time left to use the machine.', 'He does not want to owe Quinn any money.', 'Quinn\'s card does not work in the machine.', 'The driver will give him change for a bill.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'store',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { RANIA: { name: 'Rania', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#117864', style: 'long' }, STEFAN: { name: 'Stefan', g: 'm', skin: '#f0c9a6', hair: '#6b4a2b', shirt: '#a04000', style: 'short' } },
          segments: [
            {
              lines: [
                ['RANIA', 'Stefan, stop the cutter for a second. Have you looked closely at these wedding invitations? The Albright order?'],
                ['STEFAN', 'I printed them first thing this morning. Three hundred, on the heavy cream card. What\'s wrong with them?'],
                ['RANIA', 'The date. They say Saturday, June fourteenth. June fourteenth is a Friday this year.'],
                ['STEFAN', 'Oh no. Did I type it in wrong?'],
                ['RANIA', 'No, I checked the file. That\'s exactly what the bride approved. Signed and everything. The mistake\'s in her proof, not in our printing.'],
                ['STEFAN', 'Well, that\'s something. So, technically, it\'s not on us.'],
                ['RANIA', 'Technically. But she\'s picking them up at four, she\'s going to be crushed, and she\'s been telling everyone we\'re the best shop in town. I\'d rather fix this than argue about whose fault it is.'],
                ['STEFAN', 'Fair. But do we even know which part is right? The Saturday or the fourteenth?'],
                ['RANIA', 'No idea. I\'ll have to call her and ask. Until then, don\'t cut another sheet.']
              ],
              questions: [
                { id: 'L1.1', q: 'What is wrong with the invitations?', o: ['The day of the week does not match the date.', 'They were printed on the wrong kind of card.', 'Stefan typed the wrong date into the file.', 'Fewer than three hundred copies were printed.'] },
                { id: 'L1.2', q: 'Why does Rania want to fix a mistake that was not the shop\'s?', o: ['Keeping the bride happy matters more to her.', 'The bride has refused to pay for the order.', 'The shop has already been paid for a reprint.', 'The bride will probably take the shop to court.'] },
                { id: 'L1.3', q: 'What does Rania need to find out from the bride?', o: ['Which detail of the date she intended', 'Whether she really approved the proof', 'When she will pick up the order', 'How many invitations she needs'] }
              ]
            },
            {
              lines: [
                ['RANIA', 'Okay, I reached her. She was mortified. It\'s the Saturday. The fourteenth was just a slip on her end.'],
                ['STEFAN', 'Right. So we reprint all three hundred? Problem is, we\'re out of that cream card, and the supplier won\'t have more until Thursday.'],
                ['RANIA', 'And she wants to mail them tomorrow. Her aunt in Chile needs time to sort out flights.'],
                ['STEFAN', 'What about a correction card, then? A little slip in each envelope with the right date on it.'],
                ['RANIA', 'She hated that idea. She said it makes it look like she can\'t plan her own wedding, and she\'d rather die than have her guests think that.'],
                ['STEFAN', 'Okay. Then a different paper? We\'ve got the white linen in stock. Same weight, just a different colour.'],
                ['RANIA', 'Hmm. The envelopes are cream, though. White cards inside cream envelopes might look a bit off.'],
                ['STEFAN', 'Honestly? Nobody holds them side by side. Show her a sample. If she says yes, I can have them done by six.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why can they not reprint the invitations on the same paper?', o: ['More of that paper will not arrive in time.', 'The bride wants a heavier card this time.', 'The printer cannot handle three hundred cards.', 'The cream card is too expensive to reorder.'] },
                { id: 'L1.5', q: 'Why does the bride reject the correction card?', o: ['She worries about how it would make her look.', 'It would arrive later than the invitations.', 'Her aunt would not receive it in time.', 'It would cost more than reprinting them all.'] },
                { id: 'L1.6', q: 'What is Rania\'s concern about the white linen?', o: ['It may not go well with the envelopes.', 'It is lighter than the cream card.', 'It will not be ready until six.', 'The bride has never seen a sample.'] }
              ]
            },
            {
              lines: [
                ['STEFAN', 'So? What did she think of the white? Be honest, was she upset?'],
                ['RANIA', 'She loved it, actually. Said it looks crisper than the cream. Then she asked what the reprint would cost her, and I told her it\'s on us.'],
                ['STEFAN', 'All of it? That\'s about two hundred dollars in paper alone. And it wasn\'t even our mistake.'],
                ['RANIA', 'I know. But she\'s already ordered the programs and the place cards from us, and her sister\'s getting married next spring. Two hundred dollars is cheap advertising.'],
                ['RANIA', 'Besides, if she tells her friends we saved her wedding, that\'s worth more than any ad we could buy.'],
                ['STEFAN', 'Fair enough. I\'ll start the run now and have them boxed before she gets here. Oh, and the cream ones? Straight into recycling?'],
                ['RANIA', 'Most of them. But keep a few, will you? Next time a customer tells me they don\'t need to read a proof carefully, I\'m handing them one of those.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why does Rania decide not to charge for the reprint?', o: ['She expects more business from the family.', 'She admits the shop caused the first error.', 'The white paper costs less than the cream.', 'The bride refused to pay twice for one order.'] },
                { id: 'L1.8', q: 'Why does Rania want to keep some of the cream invitations?', o: ['To show customers why checking proofs matters', 'To sell them as note cards at the counter', 'To give them to the bride\'s sister next spring', 'To return them to the paper supplier for credit'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLERK: { name: 'Postal clerk', g: 'f', skin: '#e8c3a0', hair: '#5a3825', shirt: '#c0392b', style: 'bun' }, RASHID: { name: 'Rashid', g: 'm', skin: '#b07850', hair: '#120c08', shirt: '#1a5276', style: 'short' } },
          segments: [{
            lines: [
              ['CLERK', 'Next, please. Hi there, what are we sending today?'],
              ['RASHID', 'This box, to my mother in Lebanon. It\'s some clothes for my nieces and a few bottles of maple syrup.'],
              ['CLERK', 'Lovely. Before I print a label, I need you to fill out this customs form, listing each item and what it\'s worth.'],
              ['RASHID', 'What it\'s worth? They\'re gifts. Do I really have to say what they cost?'],
              ['CLERK', 'Even for gifts, yes. And be realistic, because if customs over there thinks the value looks too low, they can hold the box until your mother pays duty.'],
              ['RASHID', 'Got it. Now, the syrup\'s in glass bottles. Is that a problem?'],
              ['CLERK', 'Liquids are allowed, but glass is risky. If a bottle breaks and leaks onto other mail, the whole box can be pulled and sent back to you, at your cost.'],
              ['RASHID', 'Oh. I wrapped them in a couple of sweaters.'],
              ['CLERK', 'Sweaters won\'t cut it, honestly. Each bottle should be sealed in a plastic bag and padded on all sides. I can sell you bubble wrap and bags for about six dollars.'],
              ['RASHID', 'Sure, let\'s do that. And how much is the shipping?'],
              ['CLERK', 'Two options. Standard is sixty-two dollars and takes four to six weeks. Express is a hundred and forty, and it\'s there in about a week, with tracking the whole way.'],
              ['RASHID', 'Four to six weeks? My niece\'s birthday is in three weeks. I wanted the dress to get there in time for it.'],
              ['CLERK', 'Then standard probably won\'t make it. Here\'s a thought, though. The dress is light. Send just the dress express, in a small envelope, and the heavy things standard.'],
              ['RASHID', 'Would that really come out cheaper?'],
              ['CLERK', 'Much. A small express envelope is about forty-five. And the box without the dress would come to around sixty by standard.'],
              ['RASHID', 'Okay, let\'s split it. My mother can wait for her syrup. She\'s waited years for me to visit, after all.'],
              ['CLERK', 'Ha. Alright, here\'s an envelope. Take the dress out, and I\'ll get the paperwork started.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why must Rashid give a realistic value for his items?', o: ['A low value could cause problems at customs.', 'Gifts are charged at a special lower rate.', 'The value decides how fast the box travels.', 'His mother must pay for anything over a limit.'] },
              { id: 'L2.2', q: 'What does the clerk suggest about the way the syrup was packed?', o: ['It would not stop a leak from spreading.', 'It is fine for liquids sent by express.', 'Glass bottles are not allowed in the box.', 'The sweaters will make the box too heavy.'] },
              { id: 'L2.3', q: 'Why is standard shipping unsuitable for the dress?', o: ['It would probably arrive after a family event.', 'It does not include tracking for clothing.', 'The dress is too light for such a big box.', 'Customs would hold the dress for weeks.'] },
              { id: 'L2.4', q: 'About how much will Rashid pay to post both items, not counting packing supplies?', o: ['$105', '$140', '$202', '$111'] },
              { id: 'L2.5', q: 'What does Rashid imply about his mother?', o: ['She has had to be patient with him before.', 'She does not like maple syrup very much.', 'She is planning to visit him later this year.', 'She will have to pay duty on the syrup.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#5c3a21', hair: '#120c08', shirt: '#566573', style: 'bald' }, SHAUNA: { name: 'Shauna Quigley', g: 'f', skin: '#f2cfb0', hair: '#a0522d', shirt: '#b9770e', style: 'curly' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Shauna Quigley, who has driven a school bus in Quesnel for nineteen years. Shauna, I imagine most people assume the hard part is the driving.'],
              ['SHAUNA', 'Everybody does. Honestly, the road\'s the easy part, even in January. The hard part is keeping order behind you while your eyes are on the road. You\'ve got forty-eight kids and one mirror.'],
              ['HOST', 'So how do you manage it?'],
              ['SHAUNA', 'Seating plans, mostly. The little ones sit up front, where I can see them. And I learn every name in the first week. A kid who knows you know his name behaves a whole lot better than one who thinks he\'s invisible.'],
              ['HOST', 'What made you take the job in the first place?'],
              ['SHAUNA', 'The hours, if I\'m honest. My own kids were small, and the split shift meant I could drop them at school, drive my route and be home by nine.'],
              ['SHAUNA', 'Then I\'d do it all again in the afternoon. I figured I\'d stick with it for two or three years.'],
              ['HOST', 'And here you are, nineteen years later.'],
              ['SHAUNA', 'Here I am. Some of the kids I used to drive now have kids on my bus. That\'s when you know you\'ve been around a while.'],
              ['HOST', 'What about the winters up here?'],
              ['SHAUNA', 'We do a full inspection every morning before we leave the yard: lights, brakes, tires, the emergency exits. In deep cold, that alone can take half an hour. And the bus has to be plugged in overnight, or it just won\'t start.'],
              ['HOST', 'Who decides when the buses don\'t run?'],
              ['SHAUNA', 'The transportation manager makes the call by six. Drivers on the rural routes phone in road conditions from about five. I\'m on a gravel route east of town, so I\'m usually one of those calls.'],
              ['HOST', 'There\'s been a lot of talk about a shortage of drivers.'],
              ['SHAUNA', 'Oh, it\'s real. We\'ve had routes cancelled for whole weeks because nobody was free. The hourly pay isn\'t bad, but you only get about five hours a day, and not many people can live on that.'],
              ['SHAUNA', 'A lot of drivers here also work at the ski hill or drive for seniors\' programs in between runs.'],
              ['HOST', 'Would you recommend the job?'],
              ['SHAUNA', 'To the right person, absolutely. You need patience and a sense of humour. And you have to be the kind of person who doesn\'t mind being up before the sun.']
            ],
            questions: [
              { id: 'L3.1', q: 'According to Shauna, what is the hardest part of her job?', o: ['Keeping control of the children while driving', 'Driving safely on icy roads in January', 'Learning dozens of new names every year', 'Getting the bus started on the coldest winter mornings'] },
              { id: 'L3.2', q: 'Why does Shauna learn every child\'s name early?', o: ['Children behave better when they feel noticed.', 'The school requires her to keep a list of every rider.', 'It helps her to plan where everyone sits.', 'Parents expect her to know their children.'] },
              { id: 'L3.3', q: 'Why did Shauna first choose this job?', o: ['Its schedule fitted around her young family.', 'She wanted a job she could keep for years.', 'It paid more per hour than the job she had before.', 'She enjoyed driving on rural gravel roads.'] },
              { id: 'L3.4', q: 'Why does Shauna mention the children of former riders?', o: ['To show she stayed much longer than planned', 'To show that local families rarely move away', 'To explain why she prefers younger riders', 'To suggest that parents ask for her by name'] },
              { id: 'L3.5', q: 'What is Shauna\'s role on stormy mornings?', o: ['She helps inform the decision about buses.', 'She decides by herself whether the buses will run.', 'She inspects every bus in the yard.', 'She phones parents on the gravel routes.'] },
              { id: 'L3.6', q: 'Why, according to Shauna, is it hard to find drivers?', o: ['The short daily shifts do not add up to a full income.', 'The hourly pay is lower than other jobs.', 'Few people want to work at the ski hill.', 'Rural routes are too dangerous in winter.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Campers hoping to book a summer site in Manitoba\'s provincial parks will have to try their luck this year. The province announced today that reservations at the busiest parks will be handed out by lottery, replacing the first-come, first-served system.'],
              ['NEWS', 'Under the old system, bookings opened at seven in the morning on a single day in April. Last year, more than nine thousand people were waiting online when the site opened, and the most popular lakeside sites were gone in under four minutes.'],
              ['NEWS', 'Officials say they also found evidence that some sites were snapped up by automated programs and then resold online at much higher prices.'],
              ['NEWS', 'Under the new system, campers will have two weeks in March to enter. Each household may enter once and list up to five choices of park and dates. Winners will be drawn at random and notified by email.'],
              ['NEWS', 'To discourage reselling, the name on the booking must match the identification of the person checking in at the park, and bookings cannot be transferred.'],
              ['NEWS', 'Any sites that are not claimed in the lottery, along with cancellations, will be released on the first of May, the old way, to whoever books first.'],
              ['NEWS', 'The lottery applies only to the six busiest parks, during July and August. Bookings for other parks, and for spring and fall, will carry on as before.'],
              ['NEWS', 'Not everyone is pleased. Some families who say they have camped at the same site for years worry that they could now lose it to chance. A campers\' association has asked the province to give priority to people who were shut out last year.'],
              ['NEWS', 'The province says it will review the system after its first summer.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A change in how popular campsites are booked', 'A sharp rise in the price of provincial campsites', 'The opening of six new provincial parks', 'A new limit on how long people can camp'] },
              { id: 'L4.2', q: 'What was one problem with the old system?', o: ['Some sites ended up being sold on for profit.', 'Bookings opened too late in the spring.', 'The website could not take bookings online.', 'Families were only allowed to book one site each.'] },
              { id: 'L4.3', q: 'How will the province try to stop reselling?', o: ['By refusing to let bookings change hands', 'By letting each household enter just once', 'By releasing cancelled sites on May first', 'By notifying all winners by email instead'] },
              { id: 'L4.4', q: 'What can be inferred about campers who are not drawn in the lottery?', o: ['They may still get a site by booking fast.', 'They will be entered in a second draw in April.', 'They will get priority for next summer.', 'They cannot camp in any provincial park this summer.'] },
              { id: 'L4.5', q: 'Why are some longtime campers unhappy?', o: ['Their usual spot may now go to someone else.', 'The lottery is open for only two weeks.', 'They cannot list more than five choices.', 'They must now pay a fee to enter the lottery draw.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'outdoor', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { RACHEL: { name: 'Rachel', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#1f618d', style: 'long' }, QUENTIN: { name: 'Quentin', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#145a32', style: 'bald' }, STELLA: { name: 'Stella', g: 'f', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#922b21', style: 'bun' } },
          segments: [{
            lines: [
              ['RACHEL', 'Thanks for coming over. So, the snowblower idea. Are we really sharing one between three houses?'],
              ['QUENTIN', 'I\'m in. I spent forty minutes shovelling every morning last winter, and my back still hasn\'t forgiven me.'],
              ['STELLA', 'Same here. But before we buy anything, we need some ground rules. Sharing things between neighbours can sour fast.'],
              ['RACHEL', 'Agreed. First, which machine? The good two-stage model at the hardware store is about fourteen hundred dollars.'],
              ['QUENTIN', 'There\'s a used one online for six hundred. Three years old, and apparently it\'s barely been used.'],
              ['STELLA', '"Apparently" is doing a lot of work there. A tired old engine could leave us stranded in February.'],
              ['RACHEL', 'And the new one comes with a five-year warranty. Split three ways, it isn\'t that much more each.'],
              ['QUENTIN', 'Okay, you\'ve talked me into it. New it is. But where does it live?'],
              ['STELLA', 'My garage has the most room, and I\'m in the middle house, so nobody has far to push it.'],
              ['RACHEL', 'Perfect. Now, the order. Who does their driveway first after a big storm?'],
              ['QUENTIN', 'I leave for work at half past six, so I really need mine cleared before then.'],
              ['STELLA', 'I work from home, so I\'m flexible. Put me down for last.'],
              ['RACHEL', 'What about the sidewalks? The city fines us if they\'re not cleared within a day.'],
              ['QUENTIN', 'Easy. Whoever has the machine does the sidewalk in front of their own house.'],
              ['STELLA', 'And what about Roland next door? He\'s eighty-four and still out there with a shovel every morning.'],
              ['RACHEL', 'Oh, I hadn\'t even thought of him. We could do his walk too. It\'s only a few extra minutes.'],
              ['QUENTIN', 'Happy to. Now, gas and repairs. How do we split those?'],
              ['STELLA', 'A jar on the shelf in my garage. Everyone puts twenty dollars in at the start of the season.'],
              ['RACHEL', 'And if it breaks because somebody runs over a rock or a newspaper?'],
              ['QUENTIN', 'Then that person pays for it. Fair is fair.'],
              ['STELLA', 'Hmm. It isn\'t always obvious who broke it, though. Let\'s just split repairs three ways, no blame.'],
              ['RACHEL', 'I prefer that. I don\'t want to fall out with my neighbours over a snowblower.'],
              ['QUENTIN', 'Alright, I can live with that. And what happens if one of us moves away?'],
              ['STELLA', 'The other two buy out their share, based on what the machine is worth at the time.'],
              ['RACHEL', 'Let\'s put all of this in writing. One page, signed. It sounds formal, but it saves arguments later.'],
              ['QUENTIN', 'I\'ll type it up tonight. Stella, could you keep an eye on the hardware store\'s sale this weekend?'],
              ['STELLA', 'Already on it. The flyer comes out Thursday. If the price drops, we pounce.']
            ],
            questions: [
              { id: 'L5.1', q: 'Why does Stella want rules before they buy anything?', o: ['Sharing can easily lead to conflict.', 'She has had problems with Quentin before.', 'The city has rules about using snowblowers.', 'She wants the machine stored in her garage.'] },
              { id: 'L5.2', q: 'Why does Stella doubt the used snowblower?', o: ['Its good condition has not been proven.', 'It is too old to come with any kind of warranty.', 'Its price is higher than a new one\'s.', 'It is too small for three driveways.'] },
              { id: 'L5.3', q: 'What persuades Quentin to buy a new machine?', o: ['The extra cost per person is fairly small.', 'The used machine has already been sold.', 'Stella offers to pay a larger share of the cost.', 'The store is having a sale this weekend.'] },
              { id: 'L5.4', q: 'Why will the snowblower be kept in Stella\'s garage?', o: ['It is roomy and central to the three homes.', 'She is the one who will use it most often.', 'She works from home and can watch over it.', 'The other two have no garage of their own.'] },
              { id: 'L5.5', q: 'Why does Quentin want to go first?', o: ['He has to leave the house early.', 'His driveway is the longest of the three.', 'He wants to avoid the city\'s fine.', 'He hurt his back shovelling last winter.'] },
              { id: 'L5.6', q: 'What does Rachel\'s reply about Roland show?', o: ['She is happy to include an older neighbour.', 'She thinks Roland should join and pay a share.', 'She worries the city might fine Roland.', 'She would rather Roland hired someone.'] },
              { id: 'L5.7', q: 'Why does Stella reject Quentin\'s rule about repairs?', o: ['Blame could be hard to assign fairly.', 'Repairs would be covered by the warranty.', 'The repair jar already holds enough money.', 'Quentin is the most likely to hit a rock.'] },
              { id: 'L5.8', q: 'What is Rachel\'s view of a written agreement?', o: ['It is worth the formality to avoid future quarrels.', 'It is unnecessary among close neighbours.', 'It should be checked by a lawyer first.', 'It should only cover who pays for repairs and gas.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Road tests after eighty?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#c68642', hair: '#2a1b12', shirt: '#5b2c6f', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'In most provinces, a driver\'s licence can last a lifetime, as long as the driver passes regular eye tests and no doctor raises concerns.'],
              ['NARR', 'But as Canada\'s population ages, some safety groups are calling for every driver over eighty to pass a road test every two years.'],
              ['NARR', 'The proposal is dividing families as well as experts.'],
              ['NARR', 'Sadia Karimi is an occupational therapist in Rimouski who assesses drivers referred by their doctors. She supports regular road tests. Her first argument is that the skills driving depends on tend to fade slowly, and that people rarely notice their own decline.'],
              ['NARR', '"By the time a family finally takes the keys away, there\'s often already been a near miss, or a dented bumper nobody talks about," she says.'],
              ['NARR', 'A short road test with a trained examiner, she adds, is far less upsetting than losing a licence suddenly after a crash.'],
              ['NARR', 'Her second argument is that the current system leans too heavily on doctors. A family doctor sees a patient for fifteen minutes in an office, she points out, not behind the wheel.'],
              ['NARR', 'Many doctors, she adds, are reluctant to report a long-time patient, because they fear damaging the relationship.'],
              ['NARR', 'Karimi admits that drivers over eighty are not the most dangerous group on the road. Young men under twenty-five have far more crashes.'],
              ['NARR', 'But she argues that older drivers are much more likely to be seriously hurt when a crash does happen, so the cost of missing a problem is higher.'],
              ['NARR', 'Reuben Ndlovu, who speaks for a seniors\' advocacy group, opposes testing based on age. His first argument is that age is a poor guide to ability. Some people are unsafe at seventy, he says, while others drive perfectly well at ninety.'],
              ['NARR', 'Testing everyone at eighty, in his view, would waste resources on capable drivers while missing younger ones with health problems.'],
              ['NARR', 'His second argument is about what happens after a licence is lost. Outside the big cities, he says, there is often no bus at all.'],
              ['NARR', 'For many older people, giving up driving means giving up the grocery store, the clinic and their friends, and that isolation carries real health risks of its own.'],
              ['NARR', '"We would never accept a test that singled out drivers by gender or by background," he says. "So why is it acceptable to do it by birthday?"'],
              ['NARR', 'Ndlovu does agree that families need better tools.'],
              ['NARR', 'He supports making it easier for relatives and police to request an assessment of a particular driver, and he would like more provinces to offer restricted licences, allowing someone to drive only in daylight, or only close to home.'],
              ['NARR', 'Karimi says restricted licences are a good idea, but that they still depend on someone noticing a problem first. Ndlovu replies that a road test every two years cannot catch a sudden change in health either.'],
              ['NARR', 'Both agree that no one should be left stranded, and that any change must come with better transportation in rural areas.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether drivers over eighty should be retested', 'How doctors decide who is fit to keep a licence', 'Why young male drivers cause the most crashes', 'How rural seniors can find other ways to travel'] },
              { id: 'L6.2', q: 'Why does Karimi mention the dented bumper?', o: ['To suggest that problems are noticed too late', 'To show that older drivers cause costly damage', 'To argue that families should report small crashes', 'To explain why insurance costs rise with age'] },
              { id: 'L6.3', q: 'What is Karimi\'s criticism of relying on doctors?', o: ['They do not see how patients actually drive.', 'They refuse to assess patients over eighty.', 'They spend too much time with each patient.', 'They report too many of their older patients.'] },
              { id: 'L6.4', q: 'What does Karimi concede?', o: ['Another age group is involved in more crashes.', 'Older drivers are rarely hurt in crashes.', 'Road tests are too costly for most provinces.', 'Restricted licences would not be useful.'] },
              { id: 'L6.5', q: 'Why does Ndlovu compare age to gender and background?', o: ['To argue that judging drivers by age is unfair', 'To show that women drive more safely than men', 'To suggest that tests should be the same everywhere', 'To explain why some seniors stop driving early'] },
              { id: 'L6.6', q: 'How does Ndlovu answer Karimi\'s final objection?', o: ['Her own plan would also miss sudden changes.', 'Restricted licences are already very common.', 'Families notice problems before doctors do.', 'Rural areas need more frequent road tests.'] }
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
          passage: '<h3>Message</h3><p>Hi Rory,</p><p>I am so glad the cabin worked out for your family. August 9 to 16 is all yours, and I promise the place is in better shape than when you saw it three summers ago. Here is everything you need to know, so that you never have to call me from the dock.</p><p>The key is in a lockbox beside the back door; the code is the last four digits of my phone number. Please do not use the front door at all. It sticks so badly in humid weather that the last guest pulled the handle clean off.</p><p>Now the less fun part. The township has put our well under a boil-water advisory until further notice, after a routine test in June. The water is fine for showers and dishes, but anything you drink or cook with has to be boiled for at least a minute first. There is a big pot on the stove for exactly that. If boiling pots all week sounds like more trouble than it is worth, the general store in Sioux Narrows, a fifteen-minute drive away, sells water by the jug.</p><p>Also, the spring storms took a bite out of the dock. The first half has been rebuilt, but the far end is still missing boards, and the contractor will not be back until September. The swimming is still lovely from the little beach, so please keep the kids off the end of the dock. I have tied a rope across it, but you know how kids treat ropes.</p><p>Quincy, who lives two cabins down, keeps an eye on the place. If anything goes wrong, he is far handier than I am, and he is expecting you. He also has a spare canoe paddle, since one of ours somehow drifted off in July.</p><p>Finally, my cleaner arrives at noon on the 16th, so please be gone by then. Just strip the beds and leave the sheets in the laundry basket; she will take care of the rest. Oh, and the fire ban was lifted last week, so marshmallows are back on the menu. Enjoy every minute!</p><p>Selma</p>',
          questions: [
            { id: 'R1.1', q: 'Selma gives detailed instructions so that Rory', o: ['will not need to contact her during the stay.', 'can explain everything to the next set of guests.', 'knows how to repair the dock by himself.', 'can pass them on to Quincy if needed.'] },
            { id: 'R1.2', q: 'Rory should avoid the front door because', o: ['it tends to jam when the air is muggy.', 'the lockbox is only at the front.', 'the last guest took the handle home.', 'it opens straight onto the broken dock.'] },
            { id: 'R1.3', q: 'The water from the well', o: ['can be used for washing but not drunk unboiled.', 'was declared safe to drink after a test in June.', 'must be boiled before anyone showers.', 'should be replaced by jugs for the dishes.'] },
            { id: 'R1.4', q: 'Selma mentions "how kids treat ropes" to suggest that', o: ['the rope alone may not stop the children.', 'the children might use the rope to swing.', 'the rope will be taken down in September.', 'Rory\'s children have damaged ropes before.'] },
            { id: 'R1.5', q: 'Quincy will be useful to Rory mainly because he', o: ['is better at fixing things than Selma.', 'is the contractor rebuilding the dock.', 'sells drinking water at the general store.', 'can drive the family to Sioux Narrows.'] },
            { id: 'R1.6', q: 'Before leaving on the 16th, Rory\'s family must', o: ['take the bedding off and leave before midday.', 'wash the sheets and clean the whole cabin themselves.', 'hand the key to the cleaner at noon.', 'return a canoe paddle to Quincy.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Selma,</p><p>Thank you so much! The kids have been counting down the days since you said yes. I have saved your instructions on my phone, and I will make sure we only ever use [[R1.7]].</p><p>Thanks for the warning about the water. To save ourselves from boiling pots all week, we will stop at [[R1.8]] on the way in and stock up. We are also bringing our own paddles, since I gather you are [[R1.9]] at the moment.</p><p>I have already told the kids that the end of the dock is off limits, and Rosie has promised to keep her little brother in line. Honestly, though, the news that [[R1.10]] got the biggest cheer of all; Rosie has been practising her marshmallow technique since June.</p><p>We will strip the beds and be out [[R1.11]] on our last day. Thanks again for trusting us with your favourite place.</p><p>Rory</p>',
          blanks: [
            { id: 'R1.7', o: ['the back entrance', 'the front door', 'the door facing the lake', 'the dock gate'] },
            { id: 'R1.8', o: ['the shop in Sioux Narrows', 'Quincy\'s cabin down the road', 'the township office', 'the contractor\'s yard'] },
            { id: 'R1.9', o: ['a paddle short', 'out of canoes', 'missing a rope', 'low on firewood'] },
            { id: 'R1.10', o: ['campfires are allowed again', 'the dock has been repaired', 'the water is safe to drink again', 'the little beach has reopened'] },
            { id: 'R1.11', o: ['before the cleaner arrives', 'only after the cleaner has left', 'after we wash the sheets', 'when Quincy has checked'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Sawbuck Tool and Equipment Rental, Salmon Arm: Rates</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Item</th><th>4 hours</th><th>Day (24 hours)</th><th>Weekend (Friday 4:00 p.m. to Monday 9:00 a.m.)</th><th>Deposit</th></tr></thead><tbody>' +
            '<tr><td>Carpet cleaner</td><td>$29</td><td>$42</td><td>$63</td><td>$50</td></tr>' +
            '<tr><td>Pressure washer (gas)</td><td>$45</td><td>$65</td><td>$98</td><td>$100</td></tr>' +
            '<tr><td>Rototiller (gas)</td><td>$55</td><td>$80</td><td>$120</td><td>$150</td></tr>' +
            '<tr><td>Tile saw (electric)</td><td>$40</td><td>$58</td><td>$87</td><td>$100</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Deposits are refunded when the item comes back clean and undamaged. A $25 cleaning fee is taken from the deposit for any item returned dirty.</li><li>Late returns are charged the day rate for each extra day or part of a day.</li><li>All renters must be 18 or older and show photo ID. Gas-powered equipment may only be rented by people 21 or older.</li><li>Seniors (65 and over) save 15% on rentals from Monday to Thursday.</li><li>Carpet cleaning solution: $15 a bottle. One bottle cleans about two rooms.</li><li>Delivery and pickup within town: $30 each way. Both are free when the rental itself comes to $100 or more, not counting deposits.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Rhys,</p><p>Before we list the house, I want to clean the carpets in all four bedrooms and power-wash the deck. Rather than paying a company, I looked at Sawbuck Rentals. For four rooms, we will need [[R2.1]] for the carpet cleaner. The carpet cleaner and the pressure washer for the weekend, with the solution, come to [[R2.2]] before deposits.</p><p>I was going to send Ronan to pick everything up, but he is only 20, so he [[R2.3]] the pressure washer. One of us will have to go.</p><p>Please remember to wipe both machines down before we take them back, because otherwise [[R2.4]]. And we must return everything by [[R2.5]], or we will be charged for an extra day.</p><p>Sabine</p>',
          blanks: [
            { id: 'R2.1', o: ['two bottles of solution', 'one bottle of solution', 'four bottles of solution', 'no extra solution at all'] },
            { id: 'R2.2', o: ['$191', '$161', '$137', '$221'] },
            { id: 'R2.3', o: ['cannot be the person who rents', 'can rent it if he shows photo ID', 'must leave a larger deposit for', 'needs a parent\'s signature to rent'] },
            { id: 'R2.4', o: ['$25 will come out of each deposit', 'we will be charged for another day', 'they will keep the whole deposit', 'we will pay the delivery fee'] },
            { id: 'R2.5', o: ['9:00 a.m. on Monday', '4:00 p.m. on Monday', 'noon on Sunday', 'the end of the day on Monday'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A 70-year-old rents the tile saw for one full day on a Saturday. She pays', o: ['$58.', '$49.30.', '$87.', '$40.'] },
            { id: 'R2.7', q: 'A customer who brings back a one-day rental six hours late will be charged', o: ['for one more full day.', 'for an extra four hours.', 'a $25 cleaning fee.', 'nothing if the item is clean.'] },
            { id: 'R2.8', q: 'A customer without a car rents the rototiller for one day and has it delivered and picked up in town. Not counting the deposit, she pays', o: ['$140.', '$110.', '$290.', '$80.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Under the Stars: The Drive-In Theatre Returns</h3><p><b>A.</b> In the years after the Second World War, a new kind of entertainment spread across Canada. Families could pile into the car, park in a field in front of a giant screen, and watch a film without ever leaving their seats. Drive-in theatres suited a country where more and more households owned a car, and they were especially popular with young parents, who could bring sleeping children along in their pyjamas instead of paying a babysitter. At their peak, there were several hundred drive-ins across the country, many of them on the edges of small towns, where land was cheap and the night sky was dark. On busy summer weekends, cars sometimes lined up along the highway long before the gates opened.</p><p><b>B.</b> The decline was almost as fast as the rise. As towns grew outward, the land under the screens became far more valuable as space for housing or shopping centres, and many owners simply sold. Home video gave families a cheaper way to watch films, and indoor cinemas with several screens offered more choice on a single night. Canadian drive-ins faced an extra problem: in much of the country, summer nights are short, so films often could not start until well after nine o\'clock, which made a school night outing difficult. By the early 2000s, only a few dozen remained.</p><p><b>C.</b> In recent years, however, many of the survivors have enjoyed a second life. Interest jumped sharply during the pandemic, when indoor gatherings were restricted and a film watched from your own car felt safe. Some owners say that a good share of those new customers have kept coming back, drawn partly by nostalgia and partly by the relaxed atmosphere. A few new drive-ins have even opened, often as seasonal businesses on farms. Staying open has not been cheap, though. When film studios stopped sending movies on reels, every drive-in had to buy a digital projector, a cost that forced several small operators to close for good.</p><p><b>D.</b> A visit today looks surprisingly similar to one in the 1960s. Sound now comes through the car radio rather than speakers hung on the window, but many drive-ins still show two films for the price of one, and the snack bar remains essential, since it often earns more than ticket sales. Most also ask guests not to bring their own food, a rule that some regulars quietly ignore. Visitors are asked to turn off their headlights once the show begins and to park so that taller vehicles do not block the view of smaller cars. To make the most of their land, some owners also rent it out during the day for flea markets, car shows and even graduation ceremonies.</p>',
          questions: [
            { id: 'R3.1', q: 'Drive-ins let parents go out without finding someone to look after the children.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Rising land values persuaded many owners to give up their theatres.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Late sunsets made evening shows less practical for families during the school year.', fixed: true, a: 'B' },
            { id: 'R3.4', q: 'A required change of equipment put some theatres out of business.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Food sales often matter more to a drive-in than admission does.', fixed: true, a: 'D' },
            { id: 'R3.6', q: 'Drive-in tickets usually cost less than tickets at indoor cinemas.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'Some people who first came during the pandemic have continued to visit.', fixed: true, a: 'C' },
            { id: 'R3.8', q: 'Most drive-ins today belong to large cinema chains.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Several provinces now offer grants to help drive-ins stay open.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should New Buildings Still Need Parking?</h3><p>For decades, most Canadian cities have required developers to include a minimum number of parking spaces with every new building, often at least one for each apartment. Several large cities have recently scrapped these rules, and this spring, council in the mid-sized city of Port Calder will vote on whether to follow. The debate has turned a dry planning question into one of the most talked-about issues in town.</p><p>Qadira Mansour, a city planner who helped draft the proposal, argues that parking requirements quietly drive up the cost of housing. An underground parking space can cost $60,000 or more to build, she says, and that cost is passed on to every buyer or tenant, whether they own a car or not. "We are asking a nurse who takes the bus to pay for a parking spot she will never use," she says. Mansour adds that the rules make many small projects impossible: on a narrow lot, there is simply no room for a ramp down to an underground garage, so the lot stays empty.</p><p>Sergio Batista, who has built apartment buildings in the region for twenty years, mostly agrees, though for different reasons. Removing the minimum would not mean buildings with no parking, he says, but buildings with the amount of parking buyers actually want. "No developer is going to put up a family building in the suburbs without parking. We would go out of business," he says. "But near the college and the new rapid bus line, half my spaces sit empty." He admits, however, that his company would save money, and that there is no guarantee those savings would reach buyers.</p><p>Not everyone is convinced. Rosemary Sherwood, president of a residents\' association in the city\'s older east end, says the streets in her neighbourhood are already full by evening. "People do not stop owning cars because a building has no garage," she says. "They park in front of my house." She points out that Port Calder\'s buses run only every half hour in the evenings and not at all after eleven, which makes life without a car unrealistic for shift workers. "It is the people with the least choice who would pay the price," she says. Sherwood says she could accept the change in a few areas with frequent transit, but not across the whole city.</p><p>Mansour responds that the city can manage street parking with permits for residents, as many cities already do. She also notes that the proposal would not ban parking; it would simply let builders decide how much to provide. Sherwood is unmoved. Permits, she says, cost money, need enforcement, and would arrive only after the problem appears.</p><p>Both sides agree on one point: the decision is tied to transit. Council is also considering adding evening bus service on two main routes next year, and several councillors have said that their vote on parking will depend on whether that money is approved. A decision is expected before the end of June.</p>',
          questions: [
            { id: 'R4.1', q: 'Mansour mentions the nurse who takes the bus to show that', o: ['residents without cars still carry the cost of parking.', 'nurses deserve cheaper housing near hospitals.', 'buses are the best way to travel to work.', 'parking spaces should be sold separately by law.'] },
            { id: 'R4.2', q: 'According to Mansour, parking rules affect narrow lots because', o: ['an underground garage will not fit on them.', 'their owners cannot afford parking permits.', 'the city refuses to approve buildings there.', 'nobody wants to live on such small lots.'] },
            { id: 'R4.3', q: 'Batista suggests that, without the minimum, developers would', o: ['match parking to what buyers in each area want.', 'stop building family homes in the suburbs entirely.', 'leave parking out of all new buildings.', 'be required to pass their savings on to buyers.'] },
            { id: 'R4.4', q: 'Sherwood mentions the evening bus schedule to show that', o: ['some residents still depend on having a car.', 'buses are too crowded during the evening.', 'the city has already cut its bus service.', 'shift workers prefer to live in the east end.'] },
            { id: 'R4.5', q: 'Which statement would Sherwood most likely agree with?', o: ['The change might work near frequent transit.', 'Parking permits would solve the problem quickly.', 'Developers should build more parking in the east end.', 'The rules should be removed across the whole city.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I live near the college, and I have watched the garage under my building sit half empty for years, so I understand Mr. Batista\'s point that [[R4.6]]. Ms. Mansour is also right that [[R4.7]]; my rent certainly helps pay for spaces nobody uses.</p><p>Still, Ms. Sherwood raises a fair concern. If people keep their cars, they will simply [[R4.8]]. Ms. Mansour\'s answer, [[R4.9]], sounds fine on paper, but I agree with Ms. Sherwood that it would come too late to help.</p><p>In the end, I think council should [[R4.10]] first. Without buses in the evening, many of my neighbours have no real choice but to drive, and no parking rule will change that.</p>',
          blanks: [
            { id: 'R4.6', o: ['demand for parking varies a lot by area', 'all new buildings should be car-free', 'developers always pass on their savings', 'family buildings never need any parking'] },
            { id: 'R4.7', o: ['parking costs are built into what residents pay', 'underground garages are always half empty', 'parking rules make the streets less crowded', 'nurses should live closer to their hospitals'] },
            { id: 'R4.8', o: ['leave them on nearby streets', 'sell them to other residents', 'pay more for underground spaces', 'move out to the suburbs'] },
            { id: 'R4.9', o: ['a permit system for residents', 'more frequent evening buses', 'a ban on street parking', 'larger underground garages'] },
            { id: 'R4.10', o: ['approve more evening bus service', 'ban parking in the east end', 'require two spaces per apartment', 'build a new garage near the college'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Three weeks ago, you paid $620 for custom-made blinds for your living room windows from a local home décor store. One of the store\'s employees came to your home to measure the windows. When the blinds were installed last week, each one was about four centimetres too narrow, leaving strips of light on both sides. The store now says its measurements were correct and that you must pay $300 if you want new blinds made.</p><p>Write an email to the store manager. In your email, do the following:</p><ul><li>Explain what you ordered and what went wrong.</li><li>Explain why you do not believe you should pay more.</li><li>Say what you would like the store to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your town has money for one new outdoor facility in its main park and is asking residents which one they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a splash pad with water sprays and fountains for children. It would be free to use and open from June to early September. However, it would mostly serve families with young children, and it would be closed on cool or rainy days.' },
            { key: 'B', label: 'Option B', text: 'Build a refrigerated outdoor skating rink that could be used for ball hockey and basketball in the summer. However, it would cost three times as much to run each year, and skating would cost $4 a visit to help pay for it.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a holiday or celebration that is important to you, and explain how you usually spend it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has been asked to give a short speech at her sister\'s wedding in three weeks. About 150 guests will be there. She is very shy, has never spoken in front of a large group, and works long hours, so she has little time to prepare. Give your friend advice on how to prepare and deliver the speech.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you took part in a public celebration or community event, such as a parade, a festival or a fundraiser. What did you do, what did you enjoy or not enjoy, and what would you do differently next time?' },
        {
          id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.',
          image: '<img src="tests/img/29/scene.jpg" alt="A Canada Day parade on a small-town main street">',
          picture: 'Comic style scene of a Canada Day street parade on a sunny small town main street lined with shops, decorated with red and white bunting and maple leaf flags. The parade moves from left to right down the middle of the street, with spectators along the sidewalk in front. 14 people. Activities: 1) a marching band drummer in a red uniform beating a large bass drum; 2) a firefighter standing on the back of a red fire truck tossing small candies to the crowd; 3) a man on tall stilts in a red and white striped costume waving to the crowd; 4) a little girl sitting on her father\'s shoulders waving a small Canadian flag; 5) a woman at a small table on the sidewalk painting a red maple leaf on a boy\'s cheek; 6) a vendor holding a big bunch of red and white balloons; 7) an older couple sitting on folding lawn chairs at the curb, the woman fanning herself with a paper fan; 8) a teenage girl filming the parade with her phone held high; 9) a young man in a wheelchair clapping and cheering; 10) a woman on a sidewalk bench eating an ice cream cone. About to happen cue 1: a big golden dog on a leash held by a distracted woman is pulling hard toward a hot dog that someone dropped in the street, right in the path of the marching band that is coming toward it. About to happen cue 2: a volunteer in a red T shirt is carrying a large cardboard box overflowing with small paper flags, and the bottom of the box is visibly tearing open. Signs: a banner across the street reading "HAPPY CANADA DAY" and a small sign on the face painting table reading "FACE PAINTING $3".'
        },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/29/scene.jpg" alt="A Canada Day parade on a small-town main street">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Two of your relatives are coming to stay with you for two weeks this summer, and you live in a small two-bedroom apartment. The second bedroom is your home office. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Buy a sofa bed', image: '<img src="tests/img/29/opt_A.jpg" alt="Photo: Buy a sofa bed">', picture: 'A realistic photo of a grey sofa bed in a small living room, pulled out into a made up double bed with pillows and a folded blanket.', facts: ['$650, delivered in 1 week', 'Replaces your old couch', 'Guests sleep in the living room, with little privacy', 'Useful for future visits'] },
            { key: 'B', title: 'Book a nearby motel', image: '<img src="tests/img/29/opt_B.jpg" alt="Photo: Book a nearby motel">', picture: 'A realistic photo of a tidy, simple motel room with two double beds, a small table by the window and a door open to a bathroom.', facts: ['$110 per night for 14 nights', '5-minute drive from your apartment', 'Private bathroom for your guests', 'Free breakfast included'] }
          ],
          third: { key: 'C', title: 'Buy an air mattress', image: '<img src="tests/img/29/opt_C.jpg" alt="Photo: Buy an air mattress">', picture: 'A realistic photo of an inflated double air mattress with sheets and pillows on the floor of a small home office, next to a desk with a computer.', facts: ['$90, ready the same day', 'Fits in your home office', 'Can slowly lose air during the night', 'You cannot use your office for 2 weeks'] },
          persuade: 'A family member thinks the air mattress would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>A month ago, you promised your sister that you would look after her four-year-old son this Friday afternoon while she writes the final exam to become a licensed electrician. She has no one else to ask. Today, your manager asked you to join an important visit from your company\'s biggest client on Friday afternoon, because you know the project better than anyone else on the team.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your sister. Explain why you cannot look after her son on Friday.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot join the client visit on Friday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town\'s main beach is free for everyone, but on summer weekends its small parking lot is full by 9:00 a.m., and many visitors park illegally on nearby residential streets. The town council is considering charging people who do not live in the town $20 a day to park at the beach, while residents would park for free. Local business owners worry that visitors will go elsewhere, while many residents say they can no longer enjoy their own beach.</p><p>The council has asked residents for their views before it votes. Should the town charge visitors for beach parking? Explain your reasons.</p>' },
        {
          id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60,
          prompt: 'You are in a furniture store and see this unusual table lamp for $95. Call your friend, who is starting an evening college program. She studies at a small desk in the bedroom she shares with her sister, and she needs a desk lamp that costs less than $100. The lamp has only one brightness setting, which is very bright, and its cord is just one metre long. Describe the lamp and explain whether you think your friend should buy it.',
          image: '<img src="tests/img/29/object.jpg" alt="An unusual table lamp in a furniture store">',
          picture: 'One strange table lamp standing alone on a wooden display table in a furniture store, shown clearly from the front. Unusual features: 1) the base is a round ceramic flowerpot with a small green leafy plant growing out of the top of it; 2) two bendable silver arms rise from the base like flexible necks, each ending in its own small bell shaped yellow lampshade, both switched on; 3) a digital clock showing "9:41" built into the front of the base; 4) a flat round phone charging pad on top of the base beside the plant, with a phone lying on it; 5) a small pull out drawer in the base, slightly open, with two pens inside; 6) a round magnifying glass on a folding hinge attached to one of the arms; 7) a short black cord with a plug lying on the table. A price tag on the base reads "$95".'
        }
      ]
    }
  });
})();
