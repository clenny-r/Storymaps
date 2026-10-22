/* Rowe CELPIP Mock Exam: Test M content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/M/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'M',
    title: 'Mock Test M',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { ILSE: { name: 'Ilse', g: 'f', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#16a085', style: 'long' }, RAFAEL: { name: 'Rafael', g: 'm', skin: '#c98c64', hair: '#1d1410', shirt: '#922b21', style: 'short' } },
        segments: [{
          lines: [
            ['RAFAEL', 'The app says the 22 is running fifteen minutes late because of the snow.'],
            ['ILSE', 'Fifteen? The movie starts at seven-thirty. Let\'s just walk. It\'s only about twenty minutes.'],
            ['RAFAEL', 'In these boots, on that ice? I\'d rather miss the previews than spend the evening at a walk-in clinic.'],
            ['ILSE', 'Okay, okay, we\'ll wait. At least we already have our tickets.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Rafael not want to walk?', o: ['He is worried about falling and getting hurt.', 'He thinks walking would take longer than the bus.', 'He does not want to miss the start of the movie.', 'He needs to stop at a walk-in clinic on the way.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { IMOGEN: { name: 'Imogen', g: 'f', skin: '#f0c9a6', hair: '#7b3f1d', shirt: '#117864', style: 'curly' }, EZRA: { name: 'Ezra', g: 'm', skin: '#8d5a3b', hair: '#120c08', shirt: '#7d3c98', style: 'short' } },
          segments: [
            {
              lines: [
                ['IMOGEN', 'Ezra, before you start packing, could you weigh one of those bars for me?'],
                ['EZRA', 'Sure. Okay, a hundred and twenty-two grams. Why?'],
                ['IMOGEN', 'Because the labels say a hundred and fifty. I ordered them back in September, when the bars were fresh, and I completely forgot that soap loses water while it cures.'],
                ['EZRA', 'Oh, no. All five hundred labels? We only picked those up last week.'],
                ['IMOGEN', 'All five hundred. And we can\'t sell them like that. If a customer, or worse, an inspector, puts one on a scale, it looks like we\'re cheating people.'],
                ['EZRA', 'But the craft fair\'s on Saturday. That\'s three days from now. And the gift shop in Saint John wants two hundred bars by next Friday.'],
                ['IMOGEN', 'I know. I already called the printer this morning, hoping they could rush it. A reprint takes seven business days, plus shipping from Toronto.'],
                ['EZRA', 'Seven business days? And today\'s Wednesday.'],
                ['IMOGEN', 'Exactly. Do the math.']
              ],
              questions: [
                { id: 'L1.1', q: 'What is wrong with the labels?', o: ['They show a weight the bars no longer have.', 'They were printed with the wrong product name.', 'They were delivered too late for the craft fair.', 'They cover fewer bars than the two of them have made.'] },
                { id: 'L1.2', q: 'Why does Imogen say they cannot use the labels?', o: ['Buyers might feel they had been misled.', 'An inspector has already complained about them.', 'The printer has asked them to send the labels back.', 'The labels will peel off while the bars are curing.'] },
                { id: 'L1.3', q: 'What does Imogen\'s final remark suggest?', o: ['New labels would arrive too late for both deadlines.', 'The printer could rush the order before Saturday.', 'A reprint would be ready in time for the gift shop.', 'They should cancel the order from Saint John.'] }
              ]
            },
            {
              lines: [
                ['EZRA', 'Okay, what about stickers? We could print small ones on our own printer that say "net weight a hundred and twenty grams," and stick them over the old number.'],
                ['IMOGEN', 'I thought about that. For the fair, fine. People are buying from us face to face, and we can explain. But the gift shop owner was really clear that everything has to look professional. A sticker on top of a label looks homemade.'],
                ['EZRA', 'Well, it is homemade.'],
                ['IMOGEN', 'Ha. You know what I mean.'],
                ['EZRA', 'What about another printer? There\'s that print shop on King Street that does same-week jobs.'],
                ['IMOGEN', 'I called them this morning. They can have five hundred labels ready by Tuesday, but they charge two hundred and sixty. Our first order only cost a hundred and forty.'],
                ['EZRA', 'Ouch. But think about it. If we lose the gift shop, we lose a lot more than that. They could end up ordering from us every month.'],
                ['IMOGEN', 'True. Okay. Stickers for Saturday, and King Street for Saint John. I\'ll call them back.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Imogen think stickers are unsuitable for the gift shop?', o: ['The owner expects the product to look polished.', 'The stickers would not stay on the soap bars.', 'The gift shop only sells to people face to face.', 'Their own printer cannot print small stickers.'] },
                { id: 'L1.5', q: 'How much more does the King Street shop charge than the first printer?', o: ['$120', '$140', '$260', '$400'] },
                { id: 'L1.6', q: 'What is Ezra\'s attitude toward the higher price?', o: ['He thinks it is worth paying to keep a promising client.', 'He believes the King Street shop is overcharging them.', 'He wants the gift shop to share part of the extra cost.', 'He would rather use stickers for both of the orders.'] }
              ]
            },
            {
              lines: [
                ['IMOGEN', 'Bad news and good news. King Street can do the labels, but not by Tuesday after all. Their machine broke down, so it\'s Thursday at the earliest.'],
                ['EZRA', 'Thursday? The gift shop wants the bars on Friday, and Saint John\'s an hour and a half away. That\'s cutting it really close. And I can\'t take Friday off, I\'m covering a shift at the café.'],
                ['IMOGEN', 'That\'s the good news. I called the owner, Bernice, and explained everything. She said she\'d actually prefer Monday, because her holiday display won\'t be ready before then anyway. She was really nice about it.'],
                ['EZRA', 'Oh, perfect. So we label everything Thursday night, and I drive it over first thing Monday.'],
                ['IMOGEN', 'Yes. And from now on, we weigh the bars after they\'ve cured, not before, and only then do we order labels.'],
                ['EZRA', 'Agreed. Let\'s write that on the whiteboard, in big letters, so neither of us forgets.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why is the printer\'s delay no longer a serious problem?', o: ['The customer is happy to receive the order later.', 'The printer will deliver the labels to Saint John.', 'The machine at the print shop was quickly repaired.', 'The bars can be sold at the fair without labels.'] },
                { id: 'L1.8', q: 'What have Imogen and Ezra learned from this situation?', o: ['To confirm a product\'s final weight before ordering labels', 'To order labels from a local shop instead of a distant one', 'To ask every client for a later delivery date in the future', 'To keep a list of all their deadlines on the whiteboard'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { MGR: { name: 'Property manager', g: 'm', skin: '#d6a07a', hair: '#333333', shirt: '#1a5276', style: 'short' }, YOLANDA: { name: 'Yolanda', g: 'f', skin: '#a9714b', hair: '#2a1b12', shirt: '#c0392b', style: 'long' } },
          segments: [{
            lines: [
              ['MGR', 'Good morning, Bow River Property Management, Arturo speaking.'],
              ['YOLANDA', 'Hi, Arturo. My name\'s Yolanda Achterberg. I own unit fourteen-oh-six at Prairie Sky. I\'d like to replace the carpet in my living room with hardwood, and a friend told me I need permission first?'],
              ['MGR', 'Your friend\'s right. Any change to flooring needs written approval from the condo board. The main concern is noise for the unit below you.'],
              ['YOLANDA', 'Okay. How long does approval usually take?'],
              ['MGR', 'The board meets on the second Tuesday of every month, and requests have to be in a week before that. So if you get your form to me by this Friday, you\'ll hear right after next week\'s meeting.'],
              ['YOLANDA', 'Oh, good. Does the floor itself have to meet any rules?'],
              ['MGR', 'Yes. There\'s a minimum standard for the underlay, the soundproofing layer that goes under the wood. Your installer will know what that means.'],
              ['YOLANDA', 'Okay. Do you need proof of that?'],
              ['MGR', 'Yes, just attach the product sheet to your form. If it\'s missing, the request gets sent back, and then you\'re waiting another month.'],
              ['YOLANDA', 'Got it. And the work itself? My installer says it\'s about two days.'],
              ['MGR', 'Work is allowed on weekdays from nine to five, and on Saturdays from ten to four. No noisy work on Sundays at all. You\'ll also need to book the service elevator for the materials, and there\'s a two-hundred-dollar damage deposit for that.'],
              ['YOLANDA', 'Two hundred? Do I get it back?'],
              ['MGR', 'As long as the protective pads are hung in the elevator and nothing gets damaged, yes. It usually takes about two weeks.'],
              ['YOLANDA', 'Fair enough.'],
              ['MGR', 'Oh, and one more thing. I\'d let your downstairs neighbours know before the work starts. It\'s not required, but in my experience it saves a lot of complaints.'],
              ['YOLANDA', 'That\'s a good idea. Actually, the couple below me just had a baby, so I\'d better.'],
              ['MGR', 'Ah. Then you might want to ask them which hours are worst for them. If the baby naps in the afternoon, for example, your installer could do the cutting in the morning.'],
              ['YOLANDA', 'I will. Could you email me the form?'],
              ['MGR', 'Sending it now.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why does Yolanda need permission for her new floor?', o: ['Flooring changes can affect the people living below.', 'The building does not normally allow hardwood floors.', 'Her installer has not worked in the building before.', 'The board must approve the cost of every renovation.'] },
              { id: 'L2.2', q: 'What would happen if Yolanda sent the form without the product sheet?', o: ['Her approval would probably be delayed.', 'Her request would be refused permanently.', 'She would have to pay a larger deposit.', 'The board would choose the underlay itself.'] },
              { id: 'L2.3', q: 'Which of these work times would be allowed?', o: ['Saturday from 1:00 to 4:00 p.m.', 'Sunday from 10:00 a.m. to 2:00 p.m.', 'Saturday from 9:00 a.m. to noon', 'Friday from 4:00 to 7:00 p.m.'] },
              { id: 'L2.4', q: 'What does the manager say about the deposit?', o: ['She gets it back if she follows the elevator rules and nothing is harmed.', 'It must be paid before the board meets next week.', 'It is kept if the work takes longer than two days.', 'It is returned on the same day the work is finished.'] },
              { id: 'L2.5', q: 'Why does the manager suggest asking the neighbours about timing?', o: ['Their new baby may need quiet at certain times.', 'The building rules let them choose the work hours.', 'They complained about a renovation in the past.', 'They also need the service elevator that week.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#e8c39e', hair: '#151515', shirt: '#566573', style: 'short' }, PHILIPPA: { name: 'Philippa Nakamura', g: 'f', skin: '#f2cfb0', hair: '#1d1410', shirt: '#b03a2e', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Philippa Nakamura, who runs a monthly repair café at the downtown library in Lethbridge. Philippa, what exactly is a repair café?'],
              ['PHILIPPA', 'It\'s a free event where people bring in things that are broken, a toaster, a lamp, a torn jacket, and volunteers help them fix it.'],
              ['HOST', 'So the volunteers do the repairs?'],
              ['PHILIPPA', 'Not quite. The key word is help. We don\'t just take your toaster and hand it back. You sit beside the volunteer and do as much of the work as you can.'],
              ['HOST', 'Why does that matter?'],
              ['PHILIPPA', 'Because next time it breaks, you might not need us. Most people have never been shown how to open something up. They assume it\'s complicated, or dangerous. Once they see it\'s often just a loose wire or a worn-out belt, they get braver.'],
              ['HOST', 'Who are your volunteers?'],
              ['PHILIPPA', 'Mostly retired people. We\'ve got an electrician, a couple of tailors, a man who fixed sewing machines for forty years. But our best bike repairer is a fifteen-year-old who taught himself from online videos.'],
              ['HOST', 'How did you end up at the library?'],
              ['PHILIPPA', 'We started in a community hall, but it was hard to find, and the rent kept going up. Then the library offered us its big meeting room for free.'],
              ['HOST', 'And how has that worked out?'],
              ['PHILIPPA', 'It\'s been a great match. While people wait their turn, they wander over to the shelves and borrow the repair manuals. The librarians tell me those manuals went from collecting dust to being some of their most borrowed books.'],
              ['HOST', 'What can\'t you fix?'],
              ['PHILIPPA', 'Quite a lot, honestly. Some newer products are glued shut, so you can\'t open them without breaking them. And anything that runs on gas, like a barbecue or a furnace, we send to a licensed professional. It just isn\'t safe.'],
              ['HOST', 'Do you keep track of your success rate?'],
              ['PHILIPPA', 'We do. Last year we looked at about six hundred items, and roughly two-thirds left working again.'],
              ['HOST', 'That\'s better than I would have guessed.'],
              ['PHILIPPA', 'Mind you, it used to be lower. In our first year it was closer to half, but the volunteers have gotten much better at judging what\'s worth trying.'],
              ['HOST', 'So what\'s next?'],
              ['PHILIPPA', 'We\'d like to start sessions at the high school. Not to fix things for the students, but to train them, so they can run a repair café of their own someday.']
            ],
            questions: [
              { id: 'L3.1', q: 'What makes the repair café different from a repair shop?', o: ['Owners take part in fixing their own items.', 'Only retired electricians do the repairs.', 'Volunteers keep the items and fix them later.', 'People pay only when a repair is successful.'] },
              { id: 'L3.2', q: 'What does Philippa hope visitors will gain?', o: ['The confidence to try simple repairs on their own', 'A list of shops that will fix their items cheaply', 'The training needed to become café volunteers', 'The tools they need to repair items at home'] },
              { id: 'L3.3', q: 'Why does Philippa mention the fifteen-year-old?', o: ['To show that skill does not depend on age or formal training', 'To explain why most of the café\'s volunteers are retired', 'To show that bicycles are the most common item repaired', 'To encourage teenagers to spend more time on online videos'] },
              { id: 'L3.4', q: 'How has moving to the library helped?', o: ['Certain library books have become far more popular.', 'The café can now afford to pay rent for its room.', 'Library staff have started volunteering at the café.', 'The café can now be held every week instead.'] },
              { id: 'L3.5', q: 'Why does the café turn some items away?', o: ['They cannot be repaired safely or without damage.', 'They are too new to be worth repairing at all.', 'The volunteers do not have the right tools.', 'The library does not allow large appliances.'] },
              { id: 'L3.6', q: 'About how many items were repaired successfully last year?', o: ['About 400', 'About 300', 'About 600', 'About 200'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'A new regional bus service linking Prince Albert and Saskatoon will begin running next month, more than five years after the last private bus route in the area was cancelled.'],
              ['NEWS', 'The service will be run by a non-profit partnership of five towns along the route, with start-up money from the province.'],
              ['NEWS', 'Buses will make two round trips a day, Monday to Saturday, stopping in Duck Lake, Rosthern and Warman. A one-way ticket will cost twenty-eight dollars, while a book of ten tickets will sell for two hundred and thirty.'],
              ['NEWS', 'Organizers say the route is aimed largely at people travelling to medical appointments. Many residents of smaller towns have relied on family members, or paid more than a hundred dollars for a private ride, to see specialists at Saskatoon\'s hospitals.'],
              ['NEWS', 'Hospital volunteers will meet the morning buses and walk riders to their appointments if needed.'],
              ['NEWS', 'Students are another target. The first bus of the day will reach the university at eight-fifteen, in time for most morning classes.'],
              ['NEWS', 'The service is a two-year pilot. To continue after that, it must carry an average of at least sixty passengers a day.'],
              ['NEWS', 'Organizers admit that will not be easy. In a survey last spring, about half of residents said they would use the bus, but only a quarter said they would ride it more than once a month.'],
              ['NEWS', 'Tickets go on sale Monday at town offices and online. Organizers are also inviting residents to suggest a name for the service. The winner will receive a free book of ten tickets.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['The return of bus service between several communities', 'A new hospital that will open in Saskatoon next month', 'A survey of how local residents travel to work', 'A private company that is adding new bus routes'] },
              { id: 'L4.2', q: 'How much does a rider save by buying a book of ten tickets?', o: ['$50', '$28', '$230', '$58'] },
              { id: 'L4.3', q: 'Who is the service mainly designed to help?', o: ['People who must travel to the city for health care', 'Families who want to shop in Saskatoon on weekends', 'Drivers who offer private rides to the hospitals', 'University staff who live in the smaller towns'] },
              { id: 'L4.4', q: 'What does the survey suggest?', o: ['Many interested residents may not ride very often.', 'Most residents are against the new bus service.', 'Half of all residents already ride a bus monthly.', 'Sixty people a day have already bought tickets.'] },
              { id: 'L4.5', q: 'What will decide whether the service continues after two years?', o: ['Whether enough people use it on an average day', 'Whether the province agrees to raise ticket prices', 'Whether the five towns can find a new bus company', 'Whether students make up most of the passengers'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Winter market?', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { MARGARET: { name: 'Margaret', g: 'f', skin: '#f0c9a6', hair: '#a6a6a6', shirt: '#6c3483', style: 'short' }, DENNIS: { name: 'Dennis', g: 'm', skin: '#e3b28b', hair: '#5d4037', shirt: '#196f3d', style: 'short' }, CARMEN: { name: 'Carmen', g: 'f', skin: '#c98c64', hair: '#1d1410', shirt: '#cb4335', style: 'long' } },
          segments: [{
            lines: [
              ['MARGARET', 'Thanks for coming. The question tonight is simple: do we run a winter market this year, or not?'],
              ['DENNIS', 'I sent out the vendor survey. Twenty-two of our forty vendors said they\'d come.'],
              ['CARMEN', 'That\'s more than I expected. Most of the farmers have nothing to sell in February.'],
              ['DENNIS', 'True, but the bakers, the meat sellers, and the soap makers are all keen.'],
              ['MARGARET', 'Okay. So where would we hold it? Dennis, you looked at two places?'],
              ['DENNIS', 'Yes. The arena lobby is four hundred and fifty a day. The old school gym is three hundred.'],
              ['CARMEN', 'The gym\'s cheaper, but it\'s way out past the highway. No bus goes there on Saturdays.'],
              ['MARGARET', 'And a lot of our regulars don\'t drive. Some of them walk here every week.'],
              ['DENNIS', 'The gym does have more space, though. We could fit all twenty-two vendors comfortably.'],
              ['CARMEN', 'How many fit in the arena lobby?'],
              ['DENNIS', 'Eighteen, if the tables are small. Actually, wait, the manager said twenty with the side room.'],
              ['MARGARET', 'Twenty\'s close enough. A couple of vendors always cancel when it storms anyway.'],
              ['CARMEN', 'What about money? At twenty-five dollars a stall, we\'d barely cover the rent.'],
              ['DENNIS', 'We could raise the winter stall fee to thirty-five. Most vendors said they\'d accept a bit more.'],
              ['MARGARET', 'I\'m nervous about that. If even three vendors drop out, it feels like a half-empty room.'],
              ['CARMEN', 'Then let\'s try it for two months first. January and February, and see how it goes.'],
              ['DENNIS', 'A trial makes sense. The arena wants a two-month booking minimum anyway.'],
              ['MARGARET', 'Fine, I can live with thirty-five for a trial. But we need to promote it properly.'],
              ['CARMEN', 'I can handle that. The library lets community groups put up posters for free.'],
              ['DENNIS', 'And the radio station has a community events spot. I\'ll give them a call.'],
              ['MARGARET', 'Wait, Dennis, you\'ve already got a lot on your plate. Aren\'t you calling the arena first?'],
              ['DENNIS', 'Good point. Carmen, could you take the radio station too?'],
              ['CARMEN', 'Sure. Honestly, I\'d rather do all the promotion myself, so the message stays the same everywhere.'],
              ['MARGARET', 'Great. One more thing. Should we ask our customers what they want, not just the vendors?'],
              ['CARMEN', 'Yes. I\'ll put a short survey on the posters, with a code people can scan.'],
              ['DENNIS', 'Okay. I\'ll call the arena first thing tomorrow, before the hockey league grabs our Saturdays.'],
              ['MARGARET', 'Perfect. If January goes well, we might even keep it going until April.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To decide whether to hold a market in the cold months', 'To choose new vendors for next summer\'s market', 'To plan a fundraising event at the local arena', 'To survey customers about their shopping habits'] },
              { id: 'L5.2', q: 'Why is Carmen surprised by the survey result?', o: ['She assumed few vendors would have goods to sell then.', 'She expected the bakers to refuse to take part.', 'She thought more than twenty-two vendors would reply.', 'She did not know that Dennis had already sent out a survey.'] },
              { id: 'L5.3', q: 'Why do Carmen and Margaret lean toward the arena lobby?', o: ['Customers without cars can reach it more easily.', 'It costs less to rent than the old school gym.', 'It can hold every vendor who wants to take part.', 'It is closer to the highway than the gym is.'] },
              { id: 'L5.4', q: 'How many vendors can the arena lobby hold?', o: ['Twenty', 'Eighteen', 'Twenty-two', 'Forty'] },
              { id: 'L5.5', q: 'Why is Margaret nervous about raising the stall fee?', o: ['Losing a few vendors could make the market look empty.', 'Customers would have to pay much more for their food.', 'The vendors said they would not pay any more than now.', 'The arena might raise its rent again in February.'] },
              { id: 'L5.6', q: 'Why does Margaret interrupt Dennis?', o: ['She thinks he is taking on too much.', 'She believes the radio spot costs too much.', 'She wants to call the radio station herself.', 'She thinks the arena is already booked.'] },
              { id: 'L5.7', q: 'Why does Carmen offer to handle all the promotion?', o: ['To make sure the information is consistent', 'To save the group money on printing posters', 'Because she already works at the radio station', 'Because Dennis asked her to make the posters'] },
              { id: 'L5.8', q: 'What does Dennis\'s last remark suggest?', o: ['The arena\'s Saturdays could soon be booked by others.', 'The hockey league wants to share the lobby with them.', 'The arena manager would prefer weekday bookings.', 'The market will have to move again in the spring.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Pharmacists who prescribe?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#d6a07a', hair: '#3b2a20', shirt: '#1f618d', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'In several provinces, pharmacists can now assess and prescribe for common minor conditions, such as bladder infections, cold sores and seasonal allergies, without the patient seeing a doctor first.'],
              ['NARR', 'Supporters say the change saves time and money. Critics worry that something important is being lost.'],
              ['NARR', 'Harriet Lam owns a pharmacy in a small town in northern New Brunswick, where the nearest walk-in clinic is a forty-minute drive away. Her first argument is about access.'],
              ['NARR', 'Before the change, she says, people with a simple infection would often wait a week to see their own doctor, or spend half a day in a hospital emergency room.'],
              ['NARR', 'Now, most of them are in and out of her pharmacy within half an hour, often on the same day they first feel unwell.'],
              ['NARR', 'Her second argument is that the change frees up doctors for the patients who need them most. Every visit for a cold sore, she points out, is an appointment a family doctor could have given to someone with diabetes or heart disease.'],
              ['NARR', 'Lam admits that pharmacists do not have a patient\'s full history. She cannot see hospital test results, for example, and she relies on patients to tell her about their other conditions.'],
              ['NARR', 'But she says pharmacists are trained to recognize warning signs and to send patients to a doctor whenever something does not fit the usual pattern. In her pharmacy, she estimates, about one patient in eight is referred on rather than treated.'],
              ['NARR', 'Raymond Beaulieu, a family doctor in Moncton, sees things differently. His first concern is that minor symptoms sometimes hide something more serious.'],
              ['NARR', 'He describes a patient who was treated twice at a pharmacy for what seemed like a simple bladder infection.'],
              ['NARR', 'It turned out to be an early sign of a kidney problem, one that he believes a doctor who knew the patient\'s history might have caught sooner.'],
              ['NARR', 'His second concern is about continuity. When care is spread across different pharmacies and clinics, he says, nobody sees the whole picture.'],
              ['NARR', 'A family doctor who notices that a patient has had five infections in one year will ask why. A pharmacist who sees that patient only once may never know.'],
              ['NARR', 'Beaulieu accepts that the change has shortened waits, and he acknowledges that many rural patients have no family doctor at all. For them, he says, a pharmacist is far better than nothing.'],
              ['NARR', 'But he argues that the real solution is training more family doctors, not handing part of their work to someone else.'],
              ['NARR', 'He also wants pharmacies and doctors\' offices to share electronic records, so that every prescription a pharmacist writes appears automatically in the patient\'s file.'],
              ['NARR', 'On that last point, Lam agrees with him completely. She already faxes a note to the patient\'s doctor after every prescription, she says, but she has no way of knowing whether anyone ever reads it.'],
              ['NARR', 'Both of them agree on one thing: patients need to know when a symptom really is minor, and when it is time to see a doctor.']
            ],
            questions: [
              { id: 'L6.1', q: 'According to Lam, what has changed for patients with simple infections?', o: ['They can now be treated much sooner than before.', 'They now go to the walk-in clinic for treatment.', 'They pay less for their medication than they used to.', 'They can usually see their own doctor within a week.'] },
              { id: 'L6.2', q: 'Why does Lam mention patients with diabetes or heart disease?', o: ['To suggest that doctors\' time is better spent on them', 'To show which patients she usually sends to a doctor', 'To explain which conditions pharmacists cannot treat', 'To show that most of her customers are seriously ill'] },
              { id: 'L6.3', q: 'What does Lam\'s figure of one patient in eight show?', o: ['She does not treat everyone who comes to her.', 'Most of her patients return to their own doctor.', 'Few people in her area have a family doctor.', 'She can treat only eight common conditions.'] },
              { id: 'L6.4', q: 'Why does Beaulieu describe the patient with the bladder infection?', o: ['To show that a minor symptom can hide a bigger problem', 'To show that pharmacists often prescribe the wrong drug', 'To argue that kidney disease is increasing in his area', 'To explain why patients prefer to visit a pharmacy'] },
              { id: 'L6.5', q: 'What does Beaulieu concede?', o: ['For some patients, a pharmacist is the only realistic option.', 'Pharmacists are better trained than he first believed.', 'Family doctors are too busy to treat minor conditions.', 'Shared electronic records would not solve the problem.'] },
              { id: 'L6.6', q: 'What does Lam\'s comment about faxing suggest?', o: ['She would welcome a more reliable way to share information.', 'She believes doctors ignore pharmacists on purpose.', 'She has stopped sending notes after each prescription.', 'She thinks faxes are safer than electronic records.'] }
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
          passage: '<h3>Message</h3><p>Hi Bea,</p><p>I am so happy you have finally booked your flight! January 9 to 16 works perfectly, and the spare room is ready. Since you have never been to Edmonton in winter, though, I thought I had better warn you about a few things, especially because you mentioned renting a car.</p><p>First, the cold is real. The week you are coming, the average high is around minus ten, and some days get close to minus thirty. Bring your warmest coat, but more importantly, bring proper boots, a hat that covers your ears, and mittens rather than gloves. I laughed when my neighbour first told me that last one, but she was right.</p><p>About the car: please do not rent the cheapest one at the airport just to save money. I learned that the hard way. When we arrived in November, I rented the least expensive car I could find, and it came with all-season tires. On my second day, I slid straight through a stop sign on a quiet street near our house. Nobody was hurt, thank goodness, but it shook me badly. Since then, I have always paid the extra fifteen dollars a day for winter tires, and the difference is enormous.</p><p>The car should also have a block heater. That is an electric cord that comes out of the front of the car, and you plug it in overnight so the engine will start in the cold. Most rentals here have one, but check before you leave the lot. You can use the outlet in our driveway.</p><p>Honestly, though, you may not need a car at all. Our house is a five-minute walk from a bus stop, and the light rail train will take you downtown in about twenty minutes. Graham and I can drive you anywhere else in the evenings. The only time a car would really help is the trip to Elk Island Park to see the bison, and we were already planning to take you there on the Saturday.</p><p>One last thing. City crews plow the main roads first, and our street is usually one of the last to be cleared after a big snowfall. If it snows heavily while you are here, plan on a slow morning at home with a hot chocolate.</p><p>Cannot wait to see you!</p><p>Lorna</p>',
          questions: [
            { id: 'R1.1', q: 'Lorna is writing mainly to', o: ['help Bea get ready for an unfamiliar climate.', 'invite Bea to visit Edmonton in January.', 'ask Bea to rent a car at the airport.', 'tell Bea about a recent car accident.'] },
            { id: 'R1.2', q: 'Lorna mentions her neighbour\'s advice because', o: ['it proved more useful than she first thought.', 'her neighbour sells warm winter clothing.', 'Bea had asked her which gloves to buy.', 'it explains why gloves are warmer than mittens.'] },
            { id: 'R1.3', q: 'What does Lorna suggest about her experience in November?', o: ['Saving money on the rental turned out to be unwise.', 'She had been driving too fast on a quiet street.', 'The rental company gave her the wrong kind of car.', 'The stop sign near her house was hard to see.'] },
            { id: 'R1.4', q: 'Lorna tells Bea to check for a block heater before leaving the lot because', o: ['a few rental cars there may not come with one.', 'the airport charges extra to plug cars in overnight.', 'the outlet in her driveway does not suit every car.', 'cars without one are not allowed on city streets.'] },
            { id: 'R1.5', q: 'Lorna thinks Bea may not need a car because', o: ['she can reach most places easily without one.', 'rental cars rarely come with winter tires.', 'the park is closed to visitors in January.', 'Graham has offered to lend her his own car.'] },
            { id: 'R1.6', q: 'If it snows heavily, Lorna suggests that Bea', o: ['wait until later in the day to go out.', 'take the bus instead of driving herself.', 'help the family clear snow from the street.', 'drive only on the main roads that day.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Lorna,</p><p>Thank you for all the advice! I had no idea it could get that cold. I have already bought [[R1.7]], just as your neighbour suggested, and my brother is lending me his winter boots.</p><p>You have convinced me about the car. Since your house is [[R1.8]], I will get around on my own during the day and save the money. For the bison, I am more than happy to [[R1.9]], as you had planned.</p><p>If I do end up renting a car for a day, I promise I will [[R1.10]], and I will look for that cord before I drive off the lot.</p><p>And if a big storm comes, I will happily [[R1.11]]. It sounds like the perfect excuse to relax.</p><p>Please tell Graham he does not have to drive me around every evening, either. I would be just as happy staying in with you two, playing cards and catching up.</p><p>See you on the 9th!</p><p>Bea</p>',
          blanks: [
            { id: 'R1.7', o: ['a pair of warm mittens', 'a pair of thick gloves', 'a brand-new winter coat', 'a hat with a wide brim'] },
            { id: 'R1.8', o: ['so close to public transit', 'a short drive from downtown', 'right next to Elk Island Park', 'not far from the airport'] },
            { id: 'R1.9', o: ['ride out there with you on the Saturday', 'rent a car just for that one day', 'take the light rail train out there', 'go on my own during the week'] },
            { id: 'R1.10', o: ['pay extra for the proper tires', 'choose the least expensive model', 'pick it up at the airport counter', 'stay away from all quiet streets'] },
            { id: 'R1.11', o: ['spend the morning indoors', 'help shovel your driveway', 'take the bus downtown early', 'drive on the main roads only'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Hearthwise Energy Savings Program: Home Upgrade Rebates</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Upgrade</th><th>Rebate</th><th>Maximum per home</th><th>Home assessment needed before work?</th></tr></thead><tbody>' +
            '<tr><td>Attic insulation</td><td>$1.00 per square foot</td><td>$1,200</td><td>Yes</td></tr>' +
            '<tr><td>Wall insulation</td><td>$1.50 per square foot</td><td>$2,000</td><td>Yes</td></tr>' +
            '<tr><td>Basement insulation</td><td>$0.75 per square foot</td><td>$900</td><td>Yes</td></tr>' +
            '<tr><td>Cold-climate heat pump</td><td>$3,000</td><td>$3,000</td><td>Yes</td></tr>' +
            '<tr><td>High-efficiency windows</td><td>$100 per window</td><td>$1,000</td><td>Yes</td></tr>' +
            '<tr><td>Heat pump water heater</td><td>$500</td><td>$500</td><td>No</td></tr>' +
            '<tr><td>Smart thermostat</td><td>$75</td><td>$75</td><td>No</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>The program is open only to owners who live in the home. Landlords should apply to the separate rental housing program.</li><li>A home energy assessment costs $300. The full fee is refunded if you complete at least two upgrades within 12 months of the assessment.</li><li>Insulation rebates are available only for homes built before 2010.</li><li>For upgrades that need an assessment, work done before the assessment date is not eligible.</li><li>Heat pumps must be installed by a contractor on the program\'s registered list. Only one heat pump rebate is paid per home.</li><li>Window rebates apply only when existing windows are replaced, not when new openings are added.</li><li>Total rebates may not exceed $5,000 per home.</li><li>Apply within 90 days of finishing the work, with receipts.</li><li>Approved rebates are paid by cheque within 8 weeks.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dorota,</p><p>I have been reading about the energy rebate program for our house. Since it was built in 1985, we qualify for the insulation rebates. Our attic is 900 square feet, so insulating it would bring us [[R2.1]] back.</p><p>The heat pump is the big one, but there is a catch. The company that gave us that quote last week is not on the program\'s list, so [[R2.2]].</p><p>I already put in the smart thermostat last month, before booking anything, and luckily [[R2.3]]. If we also do the attic and the heat pump this year, the $300 assessment fee [[R2.4]].</p><p>We should not touch the walls until after the assessment, though. Remember Ahmad next door? His contractor started on his walls a week before his assessment, and he got [[R2.5]].</p><p>Shall I book the assessment for next week?</p><p>Wes</p>',
          blanks: [
            { id: 'R2.1', o: ['$900', '$1,200', '$1,350', '$450'] },
            { id: 'R2.2', o: ['we will need a different installer to get the rebate', 'we will receive only half of the usual rebate', 'we must apply within 90 days of the assessment', 'we will have to pay for a second assessment'] },
            { id: 'R2.3', o: ['that rebate does not depend on an assessment', 'that rebate is paid before any other upgrade', 'the assessment fee covers the thermostat', 'the thermostat has no limit on its rebate'] },
            { id: 'R2.4', o: ['will be paid back to us in full', 'will be added to our rebate total', 'will still be ours to pay ourselves', 'will be reduced to only $150'] },
            { id: 'R2.5', o: ['no rebate at all for that work', 'only half the usual wall rebate', 'the full rebate after all', 'his assessment fee refunded'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A homeowner adds insulation to 1,000 square feet of attic and 1,600 square feet of wall in a house built in 1978. The total insulation rebate is', o: ['$3,000.', '$3,400.', '$3,200.', '$2,600.'] },
            { id: 'R2.7', q: 'Which of these homeowners can receive a rebate?', o: ['One who installs a smart thermostat in a house built in 2015', 'One who insulated a 1990 attic the month before the assessment', 'One who adds wall insulation to a house built in 2012', 'One who applies for a heat pump rebate 8 months after the work'] },
            { id: 'R2.8', q: 'A homeowner who has already received $4,500 in rebates then replaces 8 windows after an assessment. The window rebate will be', o: ['$500.', '$800.', '$1,000.', '$0.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Show Must Go On: Community Theatre in Small Towns</h3><p><b>A.</b> In the decades before television, amateur theatre was one of the main forms of entertainment in many Canadian towns. Drama clubs performed in town halls and school gyms, and in the 1930s regional and national competitions began bringing the best groups together each spring. When television arrived in the 1950s, however, audiences stayed home, and many clubs quietly closed. The tradition never disappeared completely, and today there are hundreds of community theatre groups across the country, many of them in towns of fewer than ten thousand people. In some places, the spring play is still the biggest social event of the year.</p><p><b>B.</b> The people on stage are a varied group. A typical cast might include a retired teacher, a high school student and a car mechanic, and few of them have any formal training. Rehearsals usually take place two or three evenings a week for about three months, which is a serious commitment for people with jobs and families. Many members say the friendships matter more to them than the applause. For people who have just moved to a town, joining a production is one of the quickest ways to get to know their neighbours. Those who are too nervous to perform often start backstage, building sets, sewing costumes or running the lights.</p><p><b>C.</b> Most groups operate on very small budgets. Ticket sales usually cover only part of the costs, and the rest comes from bake sales, local business sponsors and small grants. Surprisingly, the largest single expense is often not the set or the costumes but the performance rights, the fee paid for permission to stage a play. Groups staging a well-known musical can pay far more than those choosing a little-known comedy. Depending on the play and the number of performances, the rights can cost anywhere from a few hundred to several thousand dollars. To save money, some groups choose older plays that no longer require a fee, while others write and perform their own scripts.</p><p><b>D.</b> A successful show can matter to a whole town. In a community of three thousand people, a single production may sell eight hundred tickets over two weekends, and restaurants near the hall often report their busiest nights of the season. Some towns have even built summer tourism around their local theatre. Yet many groups face an uncertain future. To cut costs, several groups now share costumes, props and even lighting equipment with theatres in neighbouring towns. Long-time volunteers are getting older, and younger people are not always stepping in to replace them. Older halls need costly repairs, and some groups have lost their space altogether when a building was sold or closed for safety reasons.</p>',
          questions: [
            { id: 'R3.1', q: 'Joining a production can help people who are new to a community form connections.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Permission to perform a play can cost more than anything else in a production.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Many community theatre actors go on to study drama at college or university.', fixed: true, a: 'E' },
            { id: 'R3.4', q: 'Local businesses can benefit when a show is running.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'The arrival of a new kind of home entertainment caused many groups to shut down.', fixed: true, a: 'A' },
            { id: 'R3.6', q: 'Some groups hire professional writers to create new scripts for them.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'People who are uneasy about performing can contribute in other ways.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'Some groups lend equipment to one another to keep their costs down.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Some groups are struggling to find new volunteers as current ones age.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Towns Pay the Rent for New Businesses?</h3><p>Across Canada, small towns are trying to bring life back to main streets where empty shops have become a familiar sight. One approach is spreading quickly: the town, sometimes working with landlords, pays part or all of a new business\'s rent for its first year. In one Manitoba town, a program like this has filled seven of eleven empty storefronts in just two years. But not everyone on Main Street is cheering.</p><p>Delphine Arsenault, the town\'s economic development officer, says the first year is the hardest for any new business. "Rent eats up the money a new owner needs for stock and advertising," she says. She argues that the benefits reach far beyond the new businesses themselves. A full main street draws people downtown, and those people spend money in every shop, including the established ones. "An empty window costs everyone on the block."</p><p>Kenji Watanabe is one of the program\'s success stories. He opened a bicycle repair shop with twelve months of free rent and says he would never have taken the risk without it. By his ninth month, the shop was making a small profit. Still, he admits he is nervous about the year ahead. "In January, I start paying full rent," he says. "Ask me again next summer."</p><p>Shirley MacAulay has run a clothing store on the same street for twenty-six years, and she sees the program differently. "Nobody paid my rent when I started," she says. She calls it unfair when tax money helps a new business compete with one that already exists. Last year, she says, a café that received free rent opened directly across from her friend\'s café, which lost a good share of its morning customers. She also points out that two of the first five businesses in the program closed within months of their free year ending.</p><p>Anand Krishnan, who studies small-town economies at a university in Saskatchewan, says the research on such programs is mixed. They work best, he says, when rent support comes with business advice, and when towns avoid funding businesses that simply duplicate existing ones. He also recommends reducing support gradually, for example full rent in the first year and half in the second, rather than ending it all at once. "The real measure of success is not how many shops open," he says. "It is how many are still open three years later."</p><p>Arsenault says the town has already learned from its early mistakes. It now turns down applications from businesses that would compete directly with an existing shop, and it requires every new owner to meet with a business mentor once a month. MacAulay calls those changes an improvement, but she would still prefer to see the money spent on things that help every business, such as better sidewalks, lighting and parking.</p><p>Town council will decide next spring whether to continue the program for another three years.</p>',
          questions: [
            { id: 'R4.1', q: 'According to Arsenault, the main wider benefit of the program is that', o: ['busier streets help every business on them.', 'new owners can afford to charge lower prices.', 'landlords can raise their rents after a year.', 'established shops spend less on advertising.'] },
            { id: 'R4.2', q: 'Watanabe\'s comments suggest that', o: ['the help was decisive, but its end worries him.', 'his shop is still losing money every month.', 'he would have opened the shop without help.', 'he plans to move when the free year ends.'] },
            { id: 'R4.3', q: 'MacAulay mentions her friend\'s café to show that', o: ['supported businesses can draw customers away from others.', 'cafés are the most common new businesses in small towns.', 'the program has also helped long-established shops.', 'most new businesses fail during their first year.'] },
            { id: 'R4.4', q: 'Krishnan believes such a program should mainly be judged by', o: ['how many businesses survive beyond the first few years.', 'how many empty storefronts are filled each year.', 'how little the rent support costs the town.', 'how many owners meet with a business mentor.'] },
            { id: 'R4.5', q: 'MacAulay would prefer the town to', o: ['spend the money on improvements that benefit all shops.', 'stop requiring new owners to meet with mentors.', 'offer free rent only to stores like her own.', 'give long-established owners a share of the rent support too.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I opened a small bakery on our main street four years ago without any help, so I read this article with mixed feelings. I agree with Ms. MacAulay that it feels unfair when [[R4.6]]. On the other hand, Ms. Arsenault\'s decision to [[R4.7]] seems to answer most of that concern.</p><p>Mr. Watanabe\'s worry about [[R4.8]] is exactly why I think Mr. Krishnan is right that [[R4.9]]. A shop that closes the month after its support ends has not really been saved.</p><p>Perhaps the town could [[R4.10]]. That way, new owners would have time to build up their sales before paying the full amount. I would also suggest that the mentors include owners like me who have already survived those difficult first years.</p>',
          blanks: [
            { id: 'R4.6', o: ['public money helps a rival open nearby', 'a landlord raises the rent every year', 'shops close for repairs to the sidewalk', 'new owners refuse to meet with mentors'] },
            { id: 'R4.7', o: ['reject businesses that copy existing ones', 'stop the program for at least three years', 'pay rent for established shops as well', 'cancel the monthly meetings with mentors'] },
            { id: 'R4.8', o: ['what happens when the free rent stops', 'whether his shop will ever make a profit', 'losing customers to a nearby café', 'finding a mentor for his business'] },
            { id: 'R4.9', o: ['long-term survival is the true test', 'filling storefronts quickly matters most', 'such programs never really work', 'only cafés should receive support'] },
            { id: 'R4.10', o: ['reduce the support in steps over two years', 'pay the full rent for three years instead', 'give each business a single cash payment', 'end the program as soon as possible'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You recently moved into a new apartment and booked home internet installation. On the first appointment, you took a morning off work without pay, but the technician never arrived and nobody called. On the second appointment, last Saturday, a technician came but left after ten minutes, saying the building\'s wiring needed a different team. You work from home three days a week and have been using expensive mobile data since you moved in.</p><p>Write an email to the internet company\'s customer service department. In your email, do the following:</p><ul><li>Explain what happened on both appointments.</li><li>Describe how these problems have affected you.</li><li>Say what you want the company to do now, and whether you plan to stay with it.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city\'s transit service has a limited budget for next year and is asking riders which change it should make. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Run buses every 10 minutes on the five busiest routes, instead of every 20 minutes. To pay for this, three quiet neighbourhood routes would be removed, and some riders would have to walk up to 15 minutes to reach a stop.' },
            { key: 'B', label: 'Option B', text: 'Keep every route and add Sunday service across the whole city for the first time. To pay for this, buses would still come only every 20 to 30 minutes, and the adult fare would rise from $3.00 to $3.25.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite way to spend a weekend morning, and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to go back to school to finish a college diploma that she started years ago. She works full time, has two young children, and has only $1,500 saved for tuition and books. The classes she needs are offered in the evenings or online. Give your friend advice on how to make this plan work.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had a disagreement with a neighbour or a roommate. What was the disagreement about, how was it resolved, and what would you do differently if it happened again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/M/scene.jpg" alt="A residential street the morning after a heavy snowfall">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the snowplow, the man who has just cleared his driveway, the roof of the red house, and what the other people are doing.', image: '<img src="tests/img/M/scene.jpg" alt="A residential street the morning after a heavy snowfall">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family wants to eat more fresh, local food this summer. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Weekly farm box', image: '<img src="tests/img/M/opt_A.jpg" alt="Photo: Weekly farm box">', facts: ['$38 per week, 16 weeks paid in advance', 'Pick up Thursdays, 6:00 to 7:00 p.m., 10 minutes away', 'The farmer chooses what goes in each box', 'No refunds for weeks when you are away'] },
            { key: 'B', title: 'Saturday farmers\' market', image: '<img src="tests/img/M/opt_B.jpg" alt="Photo: Saturday farmers&#x27; market">', facts: ['Choose exactly what you want, about $45 per week', 'Open Saturdays, 8:00 a.m. to 1:00 p.m., 25 minutes by bus', 'Meet the farmers and bakers in person', 'Popular items often sold out by 10:00 a.m.'] }
          ],
          third: { key: 'C', title: 'Grocery delivery', image: '<img src="tests/img/M/opt_C.jpg" alt="Photo: Grocery delivery">', facts: ['$9.99 delivery fee per order', 'Delivered to your door within a 2-hour window', 'Wide choice, but most produce is imported', 'Order by 9:00 p.m. for next-day delivery'] },
          persuade: 'A family member thinks grocery delivery would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Months ago, you agreed to run the stage lights for your friend\'s community theatre group on the opening night of its new play this Friday. You are the only volunteer who knows how to use the lighting board. Today, your brother called. His car has broken down, and he needs you to drive him to the airport on Friday evening for a flight to a job interview in another province.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot run the lights on Friday.</p><p><b>Option B:</b> Talk to your brother. Explain why you cannot drive him to the airport.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your city council is considering lowering the speed limit on all residential streets from 50 km/h to 30 km/h. Many parents and seniors support the idea, saying that slower cars give drivers more time to stop and make walking and cycling safer. Many commuters and delivery drivers are against it, saying that trips will take longer, that most streets are already safe, and that the police cannot enforce the new limit everywhere.</p><p>The council is holding an online survey before it votes next month. Should the city lower the speed limit on residential streets? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a home store and see this unusual sorting bin for $140. Call your friend, who wants to start composting and recycling more but lives in a small apartment with a narrow kitchen. The bin is 1.2 metres tall, and the solar lid only charges when it gets direct sunlight. Describe the bin and explain whether you think your friend should buy it.', image: '<img src="tests/img/M/object.jpg" alt="An unusual sorting bin in a home store">' }
      ]
    }
  });
})();
