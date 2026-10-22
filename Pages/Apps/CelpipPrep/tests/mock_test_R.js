/* Rowe CELPIP Mock Exam: Test R content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (mix of CLB 9 to 11 items with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/R/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'R',
    title: 'Mock Test R',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { ROHAN: { name: 'Rohan', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#1e88e5', style: 'short' }, BIANCA: { name: 'Bianca', g: 'f', skin: '#f0c9a6', hair: '#6d4c41', shirt: '#d81b60', style: 'long' } },
        segments: [{
          lines: [
            ['ROHAN', 'Look, tomato plants, three for ten dollars. Should we grab some for the balcony?'],
            ['BIANCA', 'Our balcony only gets sun after four o\'clock. They\'d hardly ripen. What about herbs? Basil and parsley don\'t mind a bit of shade.'],
            ['ROHAN', 'Fine by me. But let\'s skip those big clay pots. Carrying them up three floors would be a nightmare.'],
            ['BIANCA', 'Agreed. The plastic ones look almost the same anyway.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Bianca not want to buy the tomato plants?', o: ['Their balcony gets too little sunlight.', 'They cost more than the herbs do.', 'They need very large clay pots.', 'They are too heavy to carry upstairs.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { NADINE: { name: 'Nadine', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#7b1fa2', style: 'curly' }, CALLUM: { name: 'Callum', g: 'm', skin: '#f2cfb0', hair: '#a0522d', shirt: '#2e7d32', style: 'short' } },
          segments: [
            {
              lines: [
                ['NADINE', 'Callum, the parks office just emailed. You know the gazebo at Waterfront Park we booked for the ceremony? They\'re closing it. The roof failed a safety inspection.'],
                ['CALLUM', 'What? The wedding\'s in five weeks. Did they say when it reopens?'],
                ['NADINE', 'Not before the end of August, so, no help to us. They\'re offering a full refund, or the lawn beside the rose garden instead, same date, same time.'],
                ['CALLUM', 'Huh. The lawn could actually be nice. Is there any kind of shelter there?'],
                ['NADINE', 'Nothing. That\'s what worries me. If it rains, we\'ve got eighty guests standing on wet grass with nowhere to go. At least the gazebo had a roof.'],
                ['CALLUM', 'And my grandmother can\'t stand for more than a few minutes. We\'d need chairs either way.'],
                ['NADINE', 'Well, that\'s the other thing. The gazebo came with benches built in all the way around. The lawn comes with, um, grass. We\'d be renting every single seat.'],
                ['CALLUM', 'Okay. Before we panic, let me find out what a tent would cost. Maybe it\'s not as bad as we think.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why can the couple no longer use the gazebo?', o: ['It was found to be unsafe and must be repaired.', 'Another couple has booked it for the same date.', 'The parks office has closed it for the whole year.', 'The rose garden beside it is being expanded.'] },
                { id: 'L1.2', q: 'What is Nadine\'s main concern about the lawn?', o: ['Guests would have no protection from bad weather.', 'It cannot hold all eighty guests at the same time.', 'Callum\'s grandmother would have to walk too far.', 'It is only available at a different time of day.'] },
                { id: 'L1.3', q: 'What can be inferred about the original booking?', o: ['It already provided seating for the guests.', 'It cost much more than the lawn would cost.', 'It was made only five weeks before the event.', 'It required them to rent a tent for rain.'] }
              ]
            },
            {
              lines: [
                ['CALLUM', 'So, I called two rental companies. The first one charges nine hundred for a tent that holds eighty people, chairs included.'],
                ['NADINE', 'Nine hundred? That\'s almost our whole flower budget.'],
                ['CALLUM', 'Sorry, I got that wrong. Nine hundred is just the tent. The chairs are two dollars each on top of that.'],
                ['NADINE', 'And the second company?'],
                ['CALLUM', 'Cheaper. Seven-fifty for the tent. But they only deliver on weekdays, so it would go up on the Friday and sit in the park overnight.'],
                ['NADINE', 'That won\'t work. The parks email says nothing can be set up before eight a.m. on the day of the event.'],
                ['CALLUM', 'Right. So it\'s the first company or nothing. Unless, hmm, my uncle has that big canopy he uses for his market stall.'],
                ['NADINE', 'That fits about twenty people. Lovely for the cake table, not for a ceremony.'],
                ['CALLUM', 'Fair enough. First company, then. I\'ll ask if they\'d knock something off if we kept the chairs for the reception too.'],
                ['NADINE', 'Good idea. The hall only has sixty chairs anyway, so we were going to be short.']
              ],
              questions: [
                { id: 'L1.4', q: 'From the first company, what would a tent and chairs for eighty guests cost?', o: ['$1,060', '$900', '$910', '$750'] },
                { id: 'L1.5', q: 'Why do they reject the second rental company?', o: ['Its delivery days conflict with a park rule.', 'Its tent is far too small for all of the guests.', 'It does not rent out any chairs.', 'It charges extra to deliver on Fridays.'] },
                { id: 'L1.6', q: 'Why will Callum ask about keeping the chairs for the reception?', o: ['He hopes to get a better overall price.', 'He wants seats for his uncle\'s market stall.', 'He needs the chairs to arrive a day early.', 'He wants to replace the chairs at the hall.'] }
              ]
            },
            {
              lines: [
                ['NADINE', 'I just got off the phone with the hall manager about the reception, and there\'s some good news, actually.'],
                ['CALLUM', 'I could really use some.'],
                ['NADINE', 'They\'ve had a cancellation, so the hall\'s free in the afternoon too. She said we could hold the ceremony inside at three and go straight into dinner.'],
                ['CALLUM', 'No tent, no rain worries, no chairs to rent. But, wait. The photos. You\'ve wanted pictures by the water since the day we got engaged.'],
                ['NADINE', 'I know. But the hall\'s only a ten-minute walk from the waterfront. We could slip out for photos while everyone has drinks. And the afternoon only adds three hundred dollars.'],
                ['CALLUM', 'Compared to what we were about to spend on a tent? Easy decision. Let\'s just not cancel anything with the rental place until the hall puts it in writing.'],
                ['NADINE', 'Agreed. And I\'ll make sure the parks office sends that refund.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why does Callum hesitate about holding the ceremony in the hall?', o: ['He knows Nadine wanted photos near the water.', 'He thinks the hall is too far from the park.', 'He feels three hundred dollars is too much.', 'He would prefer to have dinner somewhere else.'] },
                { id: 'L1.8', q: 'Why does Callum mention the tent?', o: ['To show that the hall offer is much better value', 'To suggest they still book it as a backup plan', 'To argue that the photos are worth the extra cost', 'To ask Nadine to find a cheaper rental company'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Airline agent', g: 'f', skin: '#e8c39e', hair: '#151515', shirt: '#283593', style: 'bun' }, KIRAN: { name: 'Kiran', g: 'm', skin: '#8d5a3b', hair: '#120c08', shirt: '#00838f', style: 'short' } },
          segments: [{
            lines: [
              ['AGENT', 'Thanks for holding. This is Mireille in customer care. How can I help?'],
              ['KIRAN', 'Hi. I got an email saying my flights have been changed, and honestly, I can\'t make sense of it. I\'m flying from Kelowna to Fredericton on the twelfth for my sister\'s graduation.'],
              ['AGENT', 'Let me pull that up. Okay, your first flight, Kelowna to Calgary, was moved from eleven-fifteen to one-forty. That left you only twenty-five minutes to connect in Calgary, and our minimum there is forty-five. So the system rebooked you automatically.'],
              ['KIRAN', 'Onto what, though? The email just says "see attached itinerary," and the attachment won\'t open on my phone.'],
              ['AGENT', 'You\'re now on the Calgary to Fredericton flight the next morning, landing at two p.m. on the thirteenth.'],
              ['KIRAN', 'The thirteenth? The ceremony is at ten that morning. That\'s no good at all.'],
              ['AGENT', 'I understand. Let me look. There\'s a six-ten a.m. departure from Kelowna through Toronto that lands in Fredericton at, um, four-fifty. Sorry, no, that\'s Moncton. Fredericton is ten past six, same evening.'],
              ['KIRAN', 'Six in the morning. So I\'d be leaving the house at four. But I\'d get there the night before. Is there a charge to switch?'],
              ['AGENT', 'No. Since the change came from our side, there\'s no fee and no difference in fare. One thing, though: the Toronto to Fredericton plane is small, so larger carry-on bags are taken at the door of the aircraft.'],
              ['KIRAN', 'That\'s fine. I\'ve only got a backpack and a garment bag for my suit.'],
              ['AGENT', 'Hmm, the garment bag would probably go underneath on that leg. Some people just wear the suit jacket on board.'],
              ['KIRAN', 'Good tip. Okay, let\'s do the six-ten.'],
              ['AGENT', 'Done. You\'ll get a new confirmation in a few minutes. I\'ll send it as plain text this time, so you can read it on your phone.'],
              ['AGENT', 'Also, I see you\'d paid for an extra-legroom seat on the original flights. The new ones don\'t have that option, so I\'ll refund the thirty-five dollars.'],
              ['KIRAN', 'Oh, I\'d completely forgotten about that. Thanks, Mireille.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why was Kiran rebooked automatically?', o: ['His connection became shorter than the airline allows.', 'His first flight, to Calgary, was cancelled.', 'His first flight was moved to an earlier time.', 'His sister\'s graduation date was changed.'] },
              { id: 'L2.2', q: 'What problem does Kiran have with the airline\'s email?', o: ['He cannot see the details of his new trip.', 'It gives the wrong date for the ceremony.', 'It was sent to his sister instead of him.', 'It does not explain why the flight changed.'] },
              { id: 'L2.3', q: 'Why does Kiran accept the early flight?', o: ['It gets him there in time for the event.', 'It costs less than his original booking.', 'It lets him keep his suit with him on board.', 'It lands in Moncton earlier in the evening.'] },
              { id: 'L2.4', q: 'Why does the agent suggest wearing the suit jacket?', o: ['His bag may be stored away from him on one flight.', 'The early flight to Toronto will be very cold.', 'There is a fee for checking a garment bag.', 'He will go straight to the ceremony after landing.'] },
              { id: 'L2.5', q: 'Why will Kiran get thirty-five dollars back?', o: ['He will lose a seat upgrade he had paid for.', 'The airline is charging him no change fee.', 'His garment bag must be checked on one flight.', 'The new flights are cheaper than the old ones.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#e0b48f', hair: '#4a3020', shirt: '#455a64', style: 'short' }, THANDIWE: { name: 'Thandiwe Mokoena', g: 'f', skin: '#5c3a21', hair: '#120c08', shirt: '#2e7d32', style: 'curly' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Thandiwe Mokoena, who coordinates the Maple Lane Community Garden in Brampton. It\'s on a strip of land under the power lines, of all places. Welcome.'],
              ['THANDIWE', 'Thanks for having me. And yes, people laugh when I tell them where it is. But nobody\'s allowed to build on that land, so it was just sitting there, full of weeds.'],
              ['HOST', 'How did it start?'],
              ['THANDIWE', 'Six years ago, a few of us from the apartment towers across the road asked the city if we could borrow it. We started with twelve plots. Today there are a hundred and forty, and there\'s still a waiting list.'],
              ['HOST', 'So how do you decide who gets one?'],
              ['THANDIWE', 'We used to go first come, first served. Then one spring, people lined up from five in the morning in the rain, and an older man got sick waiting.'],
              ['THANDIWE', 'So now it\'s a draw, and people without a yard of their own get two entries instead of one.'],
              ['HOST', 'Is there a fee?'],
              ['THANDIWE', 'Forty dollars a season, but nobody\'s turned away. If you can\'t pay, you put in extra volunteer hours instead. Everyone does six hours anyway, weeding the paths, fixing the fence, that kind of thing.'],
              ['HOST', 'What do people grow?'],
              ['THANDIWE', 'Oh, everything. Tomatoes, of course. But a lot of our gardeners are newcomers, so you\'ll see bitter melon, callaloo, peppers I can\'t pronounce.'],
              ['THANDIWE', 'People swap seeds and recipes over the fence. Honestly, I thought this was a food project. It turned out to be about neighbours.'],
              ['HOST', 'Any big challenges?'],
              ['THANDIWE', 'Water, definitely. There\'s no tap. We collect rain in barrels, and the city sends a water truck twice a week. But last July it barely rained for a month, the truck couldn\'t keep up, and we lost about a third of our vegetables.'],
              ['HOST', 'That must have been discouraging.'],
              ['THANDIWE', 'It was. But it pushed us to apply for a grant, and this spring we\'re putting in a drip system that waters the roots directly. It uses a fraction of the water.'],
              ['HOST', 'And what\'s next?'],
              ['THANDIWE', 'The elementary school down the street has asked for a plot for its grade four classes. I\'d love that. But school\'s out all summer, which is exactly when the work happens, so we\'re still figuring out who\'d look after it in July.']
            ],
            questions: [
              { id: 'L3.1', q: 'What does Thandiwe say about the garden\'s location?', o: ['The land could not be used for much else.', 'Gardeners had to buy the land from the city.', 'It was chosen because it gets the most sun.', 'It is too far from the apartment towers.'] },
              { id: 'L3.2', q: 'Why did the garden change how it gives out plots?', o: ['The old method put someone\'s health at risk.', 'Too many people with their own yards were applying.', 'The city asked the garden to hold a draw.', 'People were lining up for two plots each.'] },
              { id: 'L3.3', q: 'What happens if a gardener cannot pay the fee?', o: ['They give more of their time to the garden.', 'They receive two entries in the yearly draw.', 'They must wait a season before getting a plot.', 'They share a plot with another gardener.'] },
              { id: 'L3.4', q: 'What surprised Thandiwe about the project?', o: ['Its greatest benefit has turned out to be social.', 'Newcomers grew more food than all the other gardeners.', 'Most gardeners chose to grow only tomatoes.', 'People did not want to share their seeds.'] },
              { id: 'L3.5', q: 'Why is the garden installing a new watering system?', o: ['A dry summer showed the old method was not enough.', 'The city has decided to stop its water truck.', 'The rain barrels were damaged last July.', 'A tap will finally be added to the site.'] },
              { id: 'L3.6', q: 'What is Thandiwe\'s attitude toward the school\'s request?', o: ['Keen, but unsure how it would work in summer', 'Doubtful, because there are no free plots left', 'Excited, since students will garden in July', 'Opposed, because children might damage plots'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#d6a07a', hair: '#3b2a20', shirt: '#37474f', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Residents of Lethbridge who drive electric cars but have nowhere to plug them in at home may soon find a charger right outside their front door.'],
              ['NEWS', 'City council voted eight to one on Tuesday to install forty chargers on existing streetlight poles in three older neighbourhoods, where most houses have no driveway or garage.'],
              ['NEWS', 'The new chargers are much slower than the fast chargers found along highways. A typical car would need about eight hours to fill its battery, which is why the city expects most drivers to plug in overnight.'],
              ['NEWS', 'Charging will cost about the same as at home. But to stop drivers leaving cars at a charger for days, a fee of two dollars an hour will apply once a car has been fully charged for over an hour.'],
              ['NEWS', 'The project is expected to cost three hundred and twenty thousand dollars. Half will come from a federal grant. The city\'s share will be paid out of parking revenue rather than property taxes.'],
              ['NEWS', 'Councillor Rosalind Petrie, who cast the only vote against the plan, says she supports electric cars but questions the timing.'],
              ['NEWS', 'She points out that fewer than two percent of vehicles registered in the city are electric, and argues that the money should go toward repairing sidewalks first.'],
              ['NEWS', 'Supporters, however, say the chargers will remove one of the main reasons people give for not buying an electric car.'],
              ['NEWS', 'The first chargers are expected by the end of June. If they are well used after one year, the city plans to add sixty more.']
            ],
            questions: [
              { id: 'L4.1', q: 'The new chargers are mainly intended for', o: ['drivers who cannot charge on their own property.', 'drivers making long trips along the highway.', 'city workers who park downtown at night.', 'homeowners whose garages have no electrical outlet.'] },
              { id: 'L4.2', q: 'The city expects people to charge overnight because', o: ['filling a battery will take several hours.', 'electricity is cheaper late in the evening.', 'the streetlights only work after dark.', 'street parking is free during the night.'] },
              { id: 'L4.3', q: 'The extra hourly fee is meant to', o: ['keep the chargers free for other drivers.', 'pay back the money from the federal grant.', 'make charging cheaper than doing it at home.', 'cover repairs to the streetlight poles.'] },
              { id: 'L4.4', q: 'The amount the city itself will pay for the project is', o: ['$160,000.', '$320,000.', '$80,000.', '$240,000.'] },
              { id: 'L4.5', q: 'Councillor Petrie voted against the plan because she', o: ['thinks other repairs should come first.', 'is opposed to electric cars in general.', 'believes the chargers will be too slow.', 'wants the chargers in newer neighbourhoods.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Running club: three decisions', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { ESTHER: { name: 'Esther', g: 'f', skin: '#a9714b', hair: '#1d1410', shirt: '#c62828', style: 'bun' }, PAOLO: { name: 'Paolo', g: 'm', skin: '#e3b28b', hair: '#2a1b12', shirt: '#1565c0', style: 'short' }, GRACE: { name: 'Grace', g: 'f', skin: '#f2cfb0', hair: '#c49a42', shirt: '#558b2f', style: 'long' } },
          segments: [{
            lines: [
              ['ESTHER', 'Thanks for coming early. We\'ve got three things tonight: insurance, our meeting spot, and the bigger crowds.'],
              ['PAOLO', 'Insurance first, then. The provincial athletics association will cover us, but only if every runner registers.'],
              ['GRACE', 'And registration is twenty-five dollars a year. Right now the club is completely free. That\'s our identity.'],
              ['PAOLO', 'I know. But if someone trips on the trail and decides to sue, the three of us are responsible.'],
              ['ESTHER', 'Could the club pay instead? We\'ve got about nine hundred dollars left from the spring race.'],
              ['GRACE', 'We\'ve got nearly ninety regulars, though. At twenty-five each, that\'s way more than we have.'],
              ['PAOLO', 'Actually, it\'s not that bad. I checked, and clubs get a group rate of fifteen dollars a head.'],
              ['ESTHER', 'That\'s still more than our savings. What if the club pays ten, and each runner pays the other five?'],
              ['GRACE', 'Five dollars I can live with. Nobody\'s going to quit over the price of a coffee.'],
              ['PAOLO', 'Speaking of coffee, the café on Victoria Street wants us to find somewhere else to meet.'],
              ['ESTHER', 'Seriously? We\'ve started from their patio every Tuesday for three years.'],
              ['PAOLO', 'Ninety people lining up for one washroom, and maybe ten buy anything. I can see their side.'],
              ['GRACE', 'What about the rec centre by the river? Big washrooms, lots of parking, and it opens at five-thirty.'],
              ['ESTHER', 'It\'s three kilometres east, though. Half of our usual route would have to change.'],
              ['GRACE', 'Honestly, the trail from there is much flatter. Our newer runners would probably thank us.'],
              ['PAOLO', 'Works for me. I\'ll talk to the café owner myself. I don\'t want to leave on bad terms.'],
              ['ESTHER', 'Good. Last item, the crowds. On Tuesday, a cyclist nearly hit two of our runners on the bridge.'],
              ['GRACE', 'The trouble is, we all set off at once. Ninety people on a narrow path is basically a wall.'],
              ['PAOLO', 'So split us into pace groups. Fast, medium and easy, each leaving five minutes apart.'],
              ['ESTHER', 'I like it, but who leads them? Right now I\'m the only one who really knows the routes.'],
              ['GRACE', 'I\'ll take the easy group. I\'m still coming back from my knee injury anyway.'],
              ['PAOLO', 'And I\'ll lead the fast one, as long as somebody reminds me to slow down on hills.'],
              ['ESTHER', 'Ha. Then I\'ll take the middle group and draw up new route maps this weekend.'],
              ['GRACE', 'Should we tell everyone before Tuesday, or just announce it at the start of the run?'],
              ['PAOLO', 'Tell them early. Nobody wants a surprise like that at six in the morning.'],
              ['ESTHER', 'Agreed. I\'ll email everyone tonight, but I\'ll leave out the fee until that group rate is confirmed.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To settle several changes facing the club', 'To plan the route for the spring race', 'To choose new leaders for the club', 'To find a cheaper insurance company'] },
              { id: 'L5.2', q: 'Why is Paolo worried about running without insurance?', o: ['The organizers could be held personally responsible.', 'Runners could be fined for using the trail.', 'The café will not host running groups that lack insurance.', 'The rec centre requires it before groups can meet.'] },
              { id: 'L5.3', q: 'Why does Esther suggest that the club pay ten dollars per runner?', o: ['It is roughly what the club can afford.', 'It matches the price of full registration.', 'Runners refused to pay more than five dollars.', 'The association charges clubs ten dollars.'] },
              { id: 'L5.4', q: 'What does Grace mean when she mentions the price of a coffee?', o: ['The new cost is too small to drive runners away.', 'Runners should buy something at the café.', 'The club should spend its savings on drinks.', 'Members already pay for coffee after runs.'] },
              { id: 'L5.5', q: 'Why does the café want the club to leave?', o: ['The runners use its facilities but spend little.', 'The runners leave its patio in a mess.', 'The café will open later in the morning.', 'The café needs its patio for its own regular customers.'] },
              { id: 'L5.6', q: 'How does Grace feel about moving to the rec centre?', o: ['She thinks it could suit less experienced runners.', 'She worries that half of the route will change.', 'She thinks it has too little parking for the club.', 'She would rather stay at the café for now.'] },
              { id: 'L5.7', q: 'Why does Esther mention the cyclist?', o: ['To show that the group has become unsafe as it is', 'To argue that the club should avoid the bridge', 'To suggest that cyclists should join the club', 'To explain why the café asked them to leave'] },
              { id: 'L5.8', q: 'Why will Esther not mention the fee in her email yet?', o: ['The lower price still has to be confirmed.', 'She wants to announce it at Tuesday\'s run.', 'Grace asked her to wait until after the race.', 'The members must vote on it first.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should towns fund the news?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#4e342e', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'In towns across Canada, local newspapers are disappearing. Hundreds of community papers have closed over the past fifteen years, and some towns now have no local reporter at all.'],
              ['NARR', 'That has led a few councils to ask an unusual question: should the town itself help pay for its newspaper?'],
              ['NARR', 'Marguerite Gauthier, who has published a weekly paper in Wetaskiwin, Alberta, for twenty years, says yes. Her first argument is about accountability.'],
              ['NARR', 'When nobody covers council meetings, she says, nobody notices when a budget quietly grows or a decision is made behind closed doors.'],
              ['NARR', 'She points to research suggesting that in towns that lose their paper, fewer people run for council and fewer people vote.'],
              ['NARR', 'Her second argument is practical. Towns already pay to place public notices, such as road closures and zoning changes, in the local paper.'],
              ['NARR', 'A modest yearly grant, she argues, would simply put that spending on a steady footing, so that papers could plan ahead instead of scrambling from week to week.'],
              ['NARR', 'Gauthier admits there is an obvious risk: a paper paid by council might go easy on council.'],
              ['NARR', 'Her answer is that the money should be handed out by an independent board, never by the mayor or councillors, and that every grant should be made public.'],
              ['NARR', 'Hamid Rahimi, a former councillor from Kamloops, British Columbia, strongly disagrees. His first concern is exactly the one Gauthier raised.'],
              ['NARR', 'Independent board or not, he says, an editor always knows where the money comes from. Over time, he believes, papers would steer away from stories that might put next year\'s grant at risk.'],
              ['NARR', 'He also doubts that a grant would save the papers at all. In his view, the real problem is that readers and advertisers have moved online, and no grant can change that.'],
              ['NARR', 'Public money, he says, would only delay the closing of papers that readers have already left behind.'],
              ['NARR', 'Rahimi accepts that losing a local paper hurts a community, and he agrees that someone should be watching council.'],
              ['NARR', 'But he would rather see towns stream every meeting online and post all their documents in one place that is easy to search, so residents can keep an eye on council themselves.'],
              ['NARR', 'Gauthier replies that a video of a four-hour meeting is not journalism. Most residents, she says, will never watch it. A reporter watches for them, asks questions afterward, and explains what a decision will actually mean for their property taxes or their street.'],
              ['NARR', 'Rahimi, for his part, says that if residents truly value their paper, they can show it by subscribing. He points to a nearby town where readers bought the paper together and now run it as a co-operative, without any money from council.'],
              ['NARR', 'Gauthier\'s answer is that co-operatives can work in some places, but most small towns simply do not have enough readers who are willing to pay.'],
              ['NARR', 'The debate is far from settled. Wetaskiwin\'s council is expected to vote on a three-year trial grant this fall.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether councils should help pay for local papers', 'Why newspapers have moved their stories online', 'How towns decide where to post public notices', 'Whether council meetings should be filmed'] },
              { id: 'L6.2', q: 'According to Gauthier, what happens when a town loses its paper?', o: ['Residents take less part in local democracy.', 'Councils stop publishing their yearly budgets.', 'Towns pay more to place public notices.', 'Councils hold more meetings in private.'] },
              { id: 'L6.3', q: 'Why does Gauthier mention public notices?', o: ['Towns already spend money on local papers.', 'Notices are the most widely read pages.', 'Papers charge towns too much to print them.', 'Notices could be moved online to save money.'] },
              { id: 'L6.4', q: 'How does Gauthier respond to the risk that papers will favour council?', o: ['She would keep elected officials out of funding choices.', 'She argues that editors would refuse any money from towns.', 'She suggests that grants be kept confidential.', 'She says the mayor should approve each grant.'] },
              { id: 'L6.5', q: 'What does Rahimi see as the main reason papers are closing?', o: ['Their audience and advertisers have gone elsewhere.', 'Councils no longer pay for public notices.', 'Editors refuse to cover council decisions.', 'Too few people want to work as reporters.'] },
              { id: 'L6.6', q: 'Why does Rahimi mention the paper in a nearby town?', o: ['To show that readers can keep a paper alive themselves', 'To argue that co-operatives deserve public grants', 'To prove that streaming meetings works better', 'To suggest that papers should cover several towns'] }
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
          passage: '<h3>Message</h3><p><b>Subject:</b> A small favour (I promise)</p><p>Hi Gustavo,</p><p>Thanks again for joining the parent council last month. You told me you wanted to "start small," so I feel a little guilty about what I am going to ask, but here goes.</p><p>As you may have heard, both grade 5 classes are going to the science centre on Thursday, May 22. That is 52 students. The bus leaves the school at 8:45 and is back by 2:30. The school board requires one adult for every eight students on any trip, and the teachers count toward that number. With Mr. Bello and Ms. Okafor and the three parents who have already signed up, we are still two adults short. Would you be willing to be one of them?</p><p>There is one catch. Anyone supervising children needs a police record check that is less than three years old. Since you only moved here in January, I doubt you have one. You can apply online, and it takes up to three weeks. It costs $25, but the council will pay you back if you keep the receipt. The trip is just over four weeks away, so applying by this Friday would be safe.</p><p>The job itself is not hard. Each adult looks after a group of seven or eight children and follows a printed schedule. The planetarium show at 11:00 is the only part of the visit with a fixed time; the rest of the morning, groups can explore the exhibits in any order they like. Since your Maya is in grade 3, you would not be supervising your own child, which, believe me, makes things much easier. Kids listen far better to someone else\'s parent.</p><p>One more piece of news. The bus company has raised its price by $180 since we planned the trip. Rather than ask families for more, the council has agreed to cover the difference with money from the spring bake sale, so each family still pays $12. We need to approve that formally at our meeting on the 14th, so please come if you can. Every vote counts when only six or seven of us show up.</p><p>If you know anyone else who might help, please send them my way. I would much rather not have to call the trip off.</p><p>Thanks so much,<br>Ines</p>',
          questions: [
            { id: 'R1.1', q: 'Ines feels uneasy making her request because Gustavo', o: ['had hoped to take on very little at first.', 'has already agreed to help on another trip.', 'cannot afford the cost of a record check.', 'missed the last parent council meeting.'] },
            { id: 'R1.2', q: 'For this trip, the school board rule means the group needs', o: ['seven adults in total.', 'five adults in total.', 'eight adults in total.', 'six adults in total.'] },
            { id: 'R1.3', q: 'Ines assumes that Gustavo has no record check because he', o: ['has not been living in the area for long.', 'did not help on last year\'s school trip.', 'has never joined a parent council before.', 'has only one child at the school.'] },
            { id: 'R1.4', q: 'During the visit, volunteers can be flexible about everything except', o: ['an activity that begins at 11:00.', 'the order in which they see exhibits.', 'the number of children in their group.', 'the time when lunch will be served.'] },
            { id: 'R1.5', q: 'Ines suggests that supervising will be easier for Gustavo because', o: ['his daughter will not be in his group.', 'each group has only three or four children.', 'the teachers will lead every activity.', 'Maya has visited the science centre before.'] },
            { id: 'R1.6', q: 'The council chose to pay the higher bus price so that', o: ['families would not be asked for more money.', 'more parents would agree to volunteer.', 'the bake sale money could be saved for later.', 'the trip could be moved to an earlier date.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Ines,</p><p>No need to feel guilty! I would be glad to help on the 22nd. You guessed correctly that I do not have [[R1.7]], so I applied online last night. I printed the receipt so that [[R1.8]].</p><p>I also asked my wife, Anouk, and she would love to come too. She applied for her own check this morning, which means [[R1.9]]. She works from home and has a client call at 11:00 that she cannot move, though, so she will need to step outside during [[R1.10]]. Anouk also asked whether she should bring anything for her group, such as name tags. I hope her call will not be a problem. Perhaps another adult could watch her group for those forty minutes.</p><p>Finally, I will definitely be at the meeting on the 14th to vote on [[R1.11]]. It seems like a good use of the bake sale money, and I know several families are already finding the spring months expensive.</p><p>Thanks for thinking of me,<br>Gustavo</p>',
          blanks: [
            { id: 'R1.7', o: ['a recent police check', 'a child in grade 5', 'a copy of the schedule', 'a ticket for the bus'] },
            { id: 'R1.8', o: ['the council can pay me back', 'the school can print my schedule', 'the police can contact you directly', 'the bus company will have my name'] },
            { id: 'R1.9', o: ['the trip will have enough adults', 'Maya can join the grade 5 trip', 'one of the teachers can stay at school', 'we will need a second bus'] },
            { id: 'R1.10', o: ['the planetarium show', 'the bus ride home', 'the morning bus ride', 'the bake sale'] },
            { id: 'R1.11', o: ['paying the extra bus cost', 'the date of the trip', 'a new council chair', 'raising the trip fee'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Prairie Light Art Gallery, Regina: Membership Levels</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Membership</th><th>Price per year</th><th>Who is covered</th><th>Guest passes per year</th><th>Discount on classes</th><th>Members\' previews</th></tr></thead><tbody>' +
            '<tr><td>Individual</td><td>$65</td><td>1 adult</td><td>None</td><td>10%</td><td>No</td></tr>' +
            '<tr><td>Dual</td><td>$110</td><td>2 adults at the same address</td><td>2</td><td>10%</td><td>No</td></tr>' +
            '<tr><td>Family</td><td>$140</td><td>2 adults and their children under 18 living in the same household</td><td>2</td><td>15%</td><td>Yes</td></tr>' +
            '<tr><td>Patron</td><td>$250</td><td>Same as Family, plus free parking</td><td>6</td><td>20%</td><td>Yes</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Regular admission: adults $18, youth aged 6 to 17 $10, children under 6 free.</li><li>Students and seniors (65 and over) receive 20% off Individual and Dual memberships only.</li><li>Guest passes cannot be used during the first two weeks of any special exhibition.</li><li>Members may upgrade at any time by paying the difference between the two prices.</li><li>Class discounts apply to adult classes only, not to children\'s camps.</li><li>All memberships include free general admission for 12 months from the date of purchase.</li><li>Members\' preview evenings are held the night before each special exhibition opens to the public.</li><li>Patron members may also reserve two seats at each evening lecture at no charge.</li><li>Lost membership cards are replaced for $5.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Ray,</p><p>I have been comparing memberships at the gallery. We go about four times a year with Lily, who is nine, and Theo, who is four. Paying at the door, each visit costs the four of us [[R2.1]], so a year of visits adds up quickly. A membership that covers all of us, the [[R2.2]], would already save us money by our fourth visit.</p><p>Your mother comes from Moose Jaw to stay with us every Christmas and loves the gallery. Sadly, we cannot simply add her to our membership, because [[R2.3]]. I had also hoped a membership would make Lily\'s summer art camp cheaper, but [[R2.4]].</p><p>One more thing: your sister wants to see the new photography exhibition, which opens on March 1. I was going to give her one of our guest passes, but she can only come on March 8, so [[R2.5]].</p><p>Can we decide this weekend?</p><p>Wen</p>',
          blanks: [
            { id: 'R2.1', o: ['$46', '$56', '$36', '$64'] },
            { id: 'R2.2', o: ['Family', 'Patron', 'Dual', 'Individual'] },
            { id: 'R2.3', o: ['she does not live in our household', 'she is over the age of 65', 'Family plans have no guest passes', 'she would need a Patron plan'] },
            { id: 'R2.4', o: ['member discounts do not cover camps', 'camps are offered to Patrons only', 'Lily is too old for the summer camp', 'the discount applies only to Theo'] },
            { id: 'R2.5', o: ['she will have to pay the regular price', 'she will need her own membership', 'she can only come to a members\' preview', 'she will have to bring her own ID'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Wen\'s neighbours, a retired couple who live together, both want to attend members\' previews. The cheapest membership that allows this is', o: ['Family.', 'Dual.', 'Patron.', 'Individual.'] },
            { id: 'R2.7', q: 'A retired couple, both aged 70, live together and want the cheapest way to become members. They will pay', o: ['$88.', '$104.', '$110.', '$130.'] },
            { id: 'R2.8', q: 'A Dual member wants to bring a friend to a special exhibition that opened 20 days ago. The friend', o: ['can get in free with one of the member\'s guest passes.', 'must pay the regular adult price at the door.', 'can only enter during a members\' preview evening.', 'needs to buy an Individual membership first.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Neither Renting nor Buying: Housing Co-operatives</h3><p><b>A.</b> Most Canadians assume there are only two ways to have a home: rent one from a landlord or buy one with a mortgage. Yet more than two thousand housing co-operatives across the country offer a third path. In a co-op, the building belongs to a non-profit organization made up of the people who live there. Residents, called members, do not own their individual units. Instead, they usually buy a share when they move in, often worth a few thousand dollars, and get it back when they leave. Each month they pay a "housing charge" rather than rent. Because no one is trying to make a profit, the members themselves set this charge each year at a general meeting, based on what it actually costs to run and maintain the building.</p><p><b>B.</b> Most of Canada\'s co-ops were built in the 1970s and 1980s, when the federal government offered low-cost loans and other support to groups that wanted to create them. Churches, unions and groups of neighbours formed many of the early projects, often in older parts of large cities. When most of that support ended in the early 1990s, construction slowed to a trickle, and for about twenty years very few new co-ops opened. Recently, some provinces and cities have started offering land or funding again, and a small number of new buildings are now under way. Meanwhile, many of the older buildings are more than forty years old and need costly repairs, such as new roofs and windows.</p><p><b>C.</b> Living in a co-op is different from renting in one important way: members are expected to help run the place. They sit on committees that handle tasks such as maintenance, finances and choosing new members, and they vote on major decisions, with one vote per household no matter how large the unit. Members cannot be forced out simply because someone wants the unit, but they can lose their home for failing to pay or for repeatedly refusing to take part. Many co-ops also set aside some units for lower-income households, whose monthly charge is based on what they earn.</p><p><b>D.</b> For people interested in joining, patience is essential. Because monthly charges are often well below local rents, waiting lists in large cities can run for several years, and some co-ops have closed their lists entirely. Applicants usually attend an information session and an interview, where they are asked how they would contribute to the community. Experts suggest applying to several co-ops at once. Some co-ops also give priority to people who already volunteer in the neighbourhood or who need a unit designed for a wheelchair. Experts also point out a trade-off: unlike homeowners, members do not gain anything when property values rise, so a co-op is a place to live, not an investment.</p>',
          questions: [
            { id: 'R3.1', q: 'Residents decide together how much they will pay each month.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'The money members pay when they arrive is returned when they move out.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'Few co-ops were built for two decades after government help was reduced.', fixed: true, a: 'B' },
            { id: 'R3.4', q: 'Every household has an equal say, whatever the size of its home.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Some members pay an amount linked to their income.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'A member who will not do their share of the work may have to leave.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'People hoping to join are encouraged to put their names on more than one list.', fixed: true, a: 'D' },
            { id: 'R3.8', q: 'Applicants must have lived in the same city for at least a year.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Living in a co-op will not help a person build wealth through property.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>One Phone or Two?</h3><p>When the work phones at a mid-sized Winnipeg engineering firm reached the end of their contract last year, the company faced a choice that many employers now face: buy new devices for its 140 staff, or let employees use the phones already in their pockets. The firm chose the second option and now pays each worker a $40 monthly allowance. A year later, not everyone is happy with the result.</p><p>Supporters of "bring your own phone" policies say the benefits are obvious. Jae-min Park, who runs a landscaping company in Kelowna with 25 seasonal workers, stopped buying phones three years ago. "My crews were carrying two phones and leaving the work one in the truck," he says. "Now they answer, because it\'s their own phone." He estimates that he saves about $9,000 a year, even after paying allowances, and says his workers like choosing their own model.</p><p>Svetlana Morozova, the IT manager at the Winnipeg firm, sees a different side. Her help desk now supports more than 30 phone models instead of one, and problems that once took five minutes to fix can take an hour. Security worries her most. "When a company phone is lost, we erase it remotely," she says. "When a personal phone is lost, it has someone\'s family photos on it, and people hesitate to let us wipe it." Before the change, the firm reported about two lost devices a year. Last year it had six, and two of them contained client files.</p><p>Park accepts that security is harder but argues that most risks can be handled with software that keeps work apps separate from personal ones. "It\'s like having a locked drawer in your desk," he says. Morozova replies that such software only works if every employee installs it and keeps it updated, and that after six months, roughly one in five of her staff still had not done so.</p><p>For many workers, the main issue is neither cost nor security, but time. Aisha Rahman, who advises employees on workplace rights in Toronto, says that once work email lives on a personal phone, the line between working hours and free time starts to fade. "People tell me they check messages at their kids\' soccer games because the phone is right there," she says. Some provinces now require larger employers to have a written policy on disconnecting from work after hours. However, Rahman notes, those rules do not limit when managers may actually send messages.</p><p>Lena Kowalczyk, a help-desk technician at the Winnipeg firm, suggests a middle path: provide company phones to staff who handle sensitive client information, and let everyone else choose. "One rule for everybody is simple," she says, "but simple isn\'t always smart."</p><p>The Winnipeg firm will review its policy this spring, and Morozova plans to recommend company phones for at least its project managers. Park, meanwhile, has no plans to change. "For a crew that cuts grass, the risk is a lost schedule," he says. "For an engineering firm, it might be a lost contract."</p>',
          questions: [
            { id: 'R4.1', q: 'The opening paragraph suggests that the Winnipeg firm\'s decision', o: ['has had mixed results so far.', 'was rejected by most of its staff.', 'saved the company $9,000 a year.', 'required it to buy 140 new phones.'] },
            { id: 'R4.2', q: 'Park\'s comment about the truck shows that his workers', o: ['respond more reliably on their own devices.', 'often lose equipment that the company owns.', 'prefer to carry two separate phones.', 'are not allowed to use phones while driving.'] },
            { id: 'R4.3', q: 'Morozova mentions family photos to explain why', o: ['employees resist having a lost phone erased.', 'personal phones take longer to repair.', 'staff use their phones mainly for personal reasons.', 'the help desk supports so many phone models.'] },
            { id: 'R4.4', q: 'Morozova\'s reply to Park suggests that the protective software', o: ['is only as good as staff\'s willingness to use it.', 'is too expensive for a small business to buy and run.', 'cannot keep work and personal apps apart.', 'slows down most employees\' personal phones.'] },
            { id: 'R4.5', q: 'In his final comment, Park most likely means that', o: ['the right policy depends on what a company could lose.', 'engineering firms should copy his own approach.', 'losing a schedule has already cost his business a great deal.', 'he will soon buy company phones for his crew leaders.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I do the accounts at a dental clinic, and we switched to our own phones two years ago. Like Mr. Park\'s crews, I now [[R4.6]], mostly because my phone is always with me. But Ms. Rahman\'s point hit home: I have caught myself [[R4.7]] more often than I would like to admit.</p><p>I also think Ms. Morozova is right that [[R4.8]]. At our clinic, several people ignored the update reminders for months. Since we hold patient records, Ms. Kowalczyk\'s idea of [[R4.9]] makes the most sense to me.</p><p>Finally, our clinic did write a policy on switching off after hours, but as Ms. Rahman says, it means little when [[R4.10]]. My manager still sends questions at ten at night, and it is hard not to answer.</p>',
          blanks: [
            { id: 'R4.6', o: ['reply to work messages far more quickly', 'carry two phones with me every day', 'leave my phone in the car at work', 'choose a phone that the clinic pays for'] },
            { id: 'R4.7', o: ['reading work email during family time', 'erasing my phone after losing it', 'calling the help desk at weekends', 'buying a second phone for work'] },
            { id: 'R4.8', o: ['security tools fail if people skip them', 'personal phones are always less secure', 'one phone model is enough for any office', 'allowances should be higher than $40'] },
            { id: 'R4.9', o: ['company phones only for sensitive roles', 'letting every worker choose a model', 'ending all monthly phone allowances', 'hiring more help-desk technicians'] },
            { id: 'R4.10', o: ['managers can still message at any hour', 'staff are not asked to sign it', 'it applies only to large employers', 'the province does not check it'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You pay $60 a season for a plot at your neighbourhood community garden. Before leaving on a two-week work trip, you told one member of the garden committee that you would be away. When you came back, you found that half of your plot had been given to a new member because it "looked abandoned." The garden rules say a plot can only be reassigned after two written warnings, and you received none. The new member has already planted seeds.</p><p>Write an email to the garden committee. In your email, do the following:</p><ul><li>Explain what happened and why you think the decision was unfair.</li><li>Describe how this situation has affected you.</li><li>Suggest a fair solution that also considers the new member.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer has a one-time budget to improve technology at work and is asking staff which option they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Replace every employee\'s computer with a new, faster laptop next year. Staff could work more easily from home, but to pay for it, the company would cancel all training courses for one year.' },
            { key: 'B', label: 'Option B', text: 'Keep the current computers for two more years and hire a second full-time help-desk technician, so most problems would be fixed on the same day instead of in two days. The old computers would stay slow, and some new programs would not run on them.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood where you like to spend time, and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has signed up for a 10-kilometre race in eight weeks, but she has never run more than three kilometres at a time. She works twelve-hour shifts at a hospital, including some nights, and she has only about $100 to spend on running gear. Give your friend advice on how to get ready for the race.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when your travel plans changed suddenly, for example because of a delayed flight, a cancelled bus or bad weather. What happened, how did you deal with it, and what would you do differently if it happened again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/R/scene.jpg" alt="A busy community garden on a Saturday morning as rain clouds approach">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the sprinkler, the dog, the man carrying the pots and the sky.', image: '<img src="tests/img/R/scene.jpg" alt="A busy community garden on a Saturday morning as rain clouds approach">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your best friend turns 40 next month, and you and your partner are planning a surprise party for about 30 guests. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Community hall', image: '<img src="tests/img/R/opt_A.jpg" alt="Photo: Community hall">', facts: ['Rental: $350 for the evening, plus about $500 for food', 'Kitchen, tables and chairs included', 'You set up and clean up yourselves', 'Everyone must leave by 11:00 p.m.'] },
            { key: 'B', title: 'Restaurant private room', image: '<img src="tests/img/R/opt_B.jpg" alt="Photo: Restaurant private room">', facts: ['$40 per guest, food included', 'No setup or cleanup needed', 'Room is next to the busy main dining area', 'Must be booked and paid for 3 weeks ahead'] }
          ],
          third: { key: 'C', title: 'Backyard party', image: '<img src="tests/img/R/opt_C.jpg" alt="Photo: Backyard party">', facts: ['Tent rental: $280, plus about $25 per guest for catering', 'Stay as late as you like', 'Hard to keep the party secret from your friend\'s neighbours', 'If it rains, 30 guests move into a small house'] },
          persuade: 'Your partner thinks a backyard party would be better. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Months ago, you agreed to be a pace leader for your running club\'s 10-kilometre race this Sunday morning. Fifteen new runners are counting on you to help them finish in under an hour. Today, the chair of your child\'s parent council called. The volunteer who was going to run Sunday\'s pancake breakfast fundraiser is sick, and you are the only other person trained to use the school kitchen.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to the running club organizer. Explain why you cannot lead your group on Sunday.</p><p><b>Option B:</b> Talk to the parent council chair. Explain why you cannot run the breakfast.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your city council is considering a rule that every new apartment building must have electric vehicle chargers for at least half of its parking spaces. Supporters say chargers cost far less to install during construction than to add later, and that renters should not be left behind as more people switch to electric cars. Builders reply that the rule would add about $4,000 to the cost of each apartment at a time when rents are already too high, and that most tenants do not own an electric car.</p><p>The council has asked residents for their views before it votes next month. Should the city adopt this rule? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a hardware store and see this unusual wheelbarrow. Call your friend, who has just started a plot at a community garden. The garden is a fifteen-minute walk from her apartment, she lives on the third floor of a building with no elevator, and she has said she can spend about $150. Describe the wheelbarrow and explain whether you think your friend should buy it.', image: '<img src="tests/img/R/object.jpg" alt="An unusual wheelbarrow in a hardware store">' }
      ]
    }
  });
})();
