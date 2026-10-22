/* Rowe CELPIP Mock Exam: Test E content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/E/ (scene, object, opt_A to opt_C). */
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
                ['ISABELLE', 'Couldn\'t she look it up by your phone number instead?'],
                ['KWAME', 'She tried that too. But I changed numbers in April, remember? So that was a dead end as well.'],
                ['ISABELLE', 'Great. And with Monday being a holiday, I bet every site in the park is taken.'],
                ['KWAME', 'She said they\'ve been full since Wednesday. People have been phoning all week hoping somebody cancels.']
              ],
              questions: [
                { id: 'L1.1', q: 'What problem do Kwame and Isabelle have?', o: ['The park has no record of their booking.', 'Their site was given to another group.', 'They booked for the wrong weekend.', 'Their booking was cancelled in March.'] },
                { id: 'L1.2', q: 'What does Kwame say about the price of the site?', o: ['It cost more than the year before.', 'It was less than he had expected.', 'It included a fee for the holiday.', 'It was charged twice in March.'] },
                { id: 'L1.3', q: 'Why does Isabelle expect the park to be full?', o: ['It is a long weekend.', 'The lakeside sites sold out in March.', 'The overflow area is already full.', 'Prices have gone up since last summer.'] }
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
                ['KWAME', 'Both nights. She even offered us site forty-four instead, because it has more shade, but I said no thanks. Forty-two has the little beach.'],
                ['ISABELLE', 'Good. I\'ve been thinking about that beach since March.'],
                ['KWAME', 'And she was so apologetic about the whole mix-up that she threw in a free bundle of firewood. She said it was the least she could do.'],
                ['ISABELLE', 'Well, that almost makes up for the last hour. It gets dark around eight thirty, so let\'s get the tent up first, and then I\'ll deal with the fire while you start dinner.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why couldn\'t the attendant find the booking at first?', o: ['His surname had been entered incorrectly.', 'His phone number had changed since booking.', 'The reservation number was wrong.', 'It was booked under Isabelle\'s name.'] },
                { id: 'L1.8', q: 'Why did the attendant give them firewood?', o: ['She felt bad about the error.', 'Firewood comes with site forty-two.', 'Their site has no fire pit of its own.', 'They had booked for two nights.'] }
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
              ['MEILIN', 'Twice. The lights flash, but nothing happens. And it had already taken two seventy-five off my laundry card. Then I tapped my card again, thinking that might restart it, and it charged me a second time.'],
              ['GORD', 'Oh, no. Okay, first things first. I\'ll go down and drain it by hand so you can get your things out. Give me about ten minutes.'],
              ['MEILIN', 'Thank you. Is someone actually going to fix it this time, though? I\'m pretty sure it did the exact same thing last month.'],
              ['GORD', 'The repair company came out and patched it, and clearly that didn\'t hold. I called them first thing this morning. The earliest they can come is Thursday, and this time I\'m asking them to swap out the whole control panel.'],
              ['MEILIN', 'That makes sense. And the money on my card?'],
              ['GORD', 'Leave me your card number and I\'ll put back everything it took this afternoon.'],
              ['MEILIN', 'Great. Honestly, I\'m not looking for money off my rent or anything. I just want my work clothes back before tomorrow. I\'ve got a big presentation in the morning.'],
              ['GORD', 'Ha, fair enough. Machine three is free right now, by the way. Once I\'ve drained number two, you can move everything straight over and rewash it there.'],
              ['MEILIN', 'Hmm, I think Mr. Okafor from the fourth floor just started a load in three. I saw him heading down with a basket.'],
              ['GORD', 'Then use the one by the window, number five. It\'s the oldest one down there, but it\'s never given me any trouble.'],
              ['MEILIN', 'Perfect. I\'ll run up and grab my detergent, and I\'ll meet you down there.']
            ],
            questions: [
              { id: 'L2.1', q: 'How much will Gord put back on Mei-Lin\'s card?', o: ['$5.50', '$2.75', '$8.25', '$3.75'] },
              { id: 'L2.2', q: 'What can be inferred about machine number two?', o: ['It has failed in the same way before.', 'It is newer than the other machines.', 'It charges more than the other machines.', 'It was repaired this morning.'] },
              { id: 'L2.3', q: 'Why does Gord want the control panel replaced?', o: ['The last repair did not last.', 'The panel is no longer made.', 'Tenants keep pressing restart.', 'The repair company suggested it.'] },
              { id: 'L2.4', q: 'What does Mei-Lin mean when she mentions her rent?', o: ['What matters most is getting her clothes back.', 'She expects money off her rent.', 'She thinks her rent is too high for the building.', 'She is unhappy about the price of laundry.'] },
              { id: 'L2.5', q: 'Where will Mei-Lin most likely rewash her clothes?', o: ['In the oldest machine in the room', 'In machine three', 'In machine two after Thursday', 'At a laundromat nearby'] }
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
              ['AMARA', 'No. I work three weeks in, and then I\'m home in Winnipeg for three weeks. Most of the communities I work in don\'t have a year-round road, so I fly in on a small plane.'],
              ['HOST', 'On your own?'],
              ['AMARA', 'Usually just me and a couple of boxes of medical supplies on the seat beside me. The pilots joke that the boxes are better company.'],
              ['HOST', 'What does a typical day look like?'],
              ['AMARA', 'There isn\'t really a typical day. There\'s no doctor living in the community, so the two of us at the nursing station handle almost everything.'],
              ['HOST', 'Such as?'],
              ['AMARA', 'In one morning I might give vaccines, stitch up a cut, check on a newborn and then talk to a doctor in the city by video about someone with chest pain.'],
              ['HOST', 'And if someone is seriously ill?'],
              ['AMARA', 'Then we arrange a medical flight to a hospital in the south. The hard part is the weather. If there\'s fog or a storm, the plane simply can\'t land, and we might be looking after that patient ourselves for twelve hours or more.'],
              ['HOST', 'Is language ever a barrier?'],
              ['AMARA', 'Sometimes. A lot of older patients are more comfortable in Cree. An elder named Rose volunteers at the station, and she interprets for us.'],
              ['HOST', 'Have you picked up any Cree yourself?'],
              ['AMARA', 'A fair number of phrases, thanks to Rose. And patients really light up when I try them, even when I get them wrong.'],
              ['HOST', 'What surprised you most when you started?'],
              ['AMARA', 'Honestly? The price of food. A small carton of juice that costs me three fifty in Winnipeg can be fourteen dollars up there. These days, half my suitcase is groceries before I even pack my clothes.'],
              ['HOST', 'And the hardest part?'],
              ['AMARA', 'Leaving, actually. After three weeks you know everyone, and then you fly out and wonder how your patients are doing. The nurse who replaces me always sends a quick update, which helps.'],
              ['HOST', 'What would you tell a nurse who\'s thinking about this kind of work?'],
              ['AMARA', 'Get at least two years in an emergency department first. Up there, you\'re often the one making the call, with nobody down the hall to ask. But I\'d also tell them it\'s the most rewarding job I\'ve ever had.']
            ],
            questions: [
              { id: 'L3.1', q: 'What can be inferred about the communities where Amara works?', o: ['Most are reached by air for much of the year.', 'Nurses there usually live in them full time.', 'Each one has a doctor who flies in weekly.', 'Supplies arrive by road every three weeks.'] },
              { id: 'L3.2', q: 'What does Amara\'s description of a morning show?', o: ['The nurses handle a very wide range of care.', 'A city doctor treats most patients by video.', 'Vaccines take up most of the nurses\' time.', 'Two doctors share the work at the station.'] },
              { id: 'L3.3', q: 'Why might nurses look after a very sick patient for many hours?', o: ['Conditions may keep a plane from reaching them.', 'Medical flights take twelve hours to arrive.', 'A doctor must approve each flight by video.', 'Hospitals in the south are often full.'] },
              { id: 'L3.4', q: 'How do patients react when Amara speaks Cree?', o: ['They are pleased that she makes the effort.', 'They ask Rose to correct her mistakes.', 'They find her errors hard to follow.', 'They answer her in English instead.'] },
              { id: 'L3.5', q: 'How does the juice price up north compare with Winnipeg?', o: ['It is about four times higher.', 'It is about fourteen dollars higher.', 'It is about three times higher.', 'It is about three fifty higher.'] },
              { id: 'L3.6', q: 'Why does Amara recommend emergency experience?', o: ['Nurses there must often decide alone.', 'It is the most rewarding kind of nursing.', 'Northern clinics will not hire without it.', 'Doctors visit too rarely to train new nurses.'] }
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
              ['NEWS', 'Each bus costs roughly one point two million dollars, close to double the price of a diesel model. The federal government will cover half of that through its green transit fund.'],
              ['NEWS', 'Transit manager Lena Sorensen says the city also expects to save about forty thousand dollars per bus every year on fuel and maintenance.'],
              ['NEWS', 'The buses can travel up to two hundred and fifty kilometres on a single charge, which Sorensen says is enough for a full day of service on most routes.'],
              ['NEWS', 'They will charge overnight at a new depot on Kent Street, now under construction beside the existing garage.'],
              ['NEWS', 'There is one open question. In extreme cold, battery range can fall by as much as thirty percent. Until the city has collected a full winter of data, diesel buses will stay on its two longest routes in January and February.'],
              ['NEWS', 'Not everyone is convinced the money is well spent. The Port Alder Riders\' Association says the city should first add more buses to its crowded north-side routes, where riders are often left waiting at stops during the morning rush.'],
              ['NEWS', 'Drivers who tested the buses last fall describe them as noticeably quieter and smoother. Riders will soon be able to judge for themselves: fares on every route served by the new buses will be waived on launch day, March third.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['New electric buses for the city', 'A new bus depot on Kent Street', 'Calls for more buses on busy routes', 'Free bus service for the winter'] },
              { id: 'L4.2', q: 'What does the report suggest about the cost of the electric buses?', o: ['They cost more to buy but less to run.', 'The federal government will pay the full price.', 'They will be paid for with higher fares.', 'Their purchase price will drop in two years.'] },
              { id: 'L4.3', q: 'How many of the electric buses will arrive after March?', o: ['16', '8', '24', '12'] },
              { id: 'L4.4', q: 'Why will diesel buses stay on two routes in January and February?', o: ['It is unclear how far the new buses can go in deep cold.', 'The electric buses cannot climb icy hills.', 'The new depot will not be finished by then.', 'Drivers find the diesel buses easier to handle.'] },
              { id: 'L4.5', q: 'What will happen on launch day?', o: ['Riders can try the new buses at no cost.', 'Drivers will test the buses for the first time.', 'The depot on Kent Street will open.', 'Extra buses will join the north-side routes.'] }
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
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To settle the club\'s summer arrangements', 'To plan the library\'s reopening in September', 'To choose a new leader for the club', 'To discuss why members did not finish a book'] },
              { id: 'L5.2', q: 'Why does the club need a new meeting place?', o: ['Their usual room will be closed for building work.', 'The library has started charging a fee.', 'The group has become too large for the room.', 'Harold cannot get into the library.'] },
              { id: 'L5.3', q: 'What is Lucia\'s main concern about The Glass Mountain?', o: ['Few members would finish it in time.', 'It is a type of book few members like.', 'Several members have already read it.', 'It is too expensive for some members.'] },
              { id: 'L5.4', q: 'How does Omar react to Beth\'s suggestion?', o: ['He welcomes it and fits it into a new plan.', 'He rejects it as too light for the group.', 'He says it should replace his book entirely.', 'He worries that it is too long to finish.'] },
              { id: 'L5.5', q: 'Why does Beth decide her home is not suitable?', o: ['Harold could not easily reach it.', 'Her living room is too small.', 'Her neighbours complain about noise.', 'She is having surgery in June.'] },
              { id: 'L5.6', q: 'What can be inferred about the café on Thursdays?', o: ['It has live performances.', 'The back room is booked by another club.', 'It is closed to the public that evening.', 'The owner charges for the back room.'] },
              { id: 'L5.7', q: 'What condition did the café owner set?', o: ['Each member has to buy something to drink.', 'The club has to pay a small room fee.', 'The group has to meet on Thursdays.', 'The club has to book a week ahead.'] },
              { id: 'L5.8', q: 'Why is The Glass Mountain scheduled later?', o: ['So members have twice as long to read it', 'Because the library reopens by then', 'Because Beth asked to have her book first', 'Because Harold has not finished it yet'] }
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
              ['NARR', 'Leblanc says the first thing that pushed him was sleep. His oldest daughter, he discovered, was messaging friends well past midnight and then struggling to stay awake in class.'],
              ['NARR', 'His second argument is about pressure. Most of the push to own a phone, he says, comes from classmates, so it largely disappears when an entire class waits together. "Nobody wants to be the only kid without one. So we made sure nobody is."'],
              ['NARR', 'He is quick to add that he is not against technology. He recommends a basic phone that can only make calls and send texts, so that children can still reach their parents after school.'],
              ['NARR', 'Leblanc does admit the plan has a cost. Some children in the group say they feel shut out of group chats that friends at other schools use, and a handful of families have quietly dropped out.'],
              ['NARR', 'Doctor Priya Raman, who studies child development at a university in Ottawa, sees things differently. She warns that simply delaying the phone does nothing to teach children how to use one well.'],
              ['NARR', 'In her research, teenagers who were handed full access all at once at thirteen or fourteen ran into more trouble online than those who had been introduced gradually, with clear rules and a parent close by.'],
              ['NARR', 'The teenagers who got everything at once were also less likely to tell a parent when something went wrong.'],
              ['NARR', 'She also questions the idea of a whole class waiting. In her view, the pressure does not vanish. It simply moves to grade eight, when the agreement ends and everyone gets a smartphone in the same month, with no practice at all.'],
              ['NARR', 'Leblanc\'s answer is that a basic phone is practice. Children learn to keep it charged, to answer when a parent calls and to put it away at dinner, long before they have to deal with social media.'],
              ['NARR', 'Raman points out that smartphones are genuinely useful, too. Children use them for maps and bus schedules, and in many newcomer families, a video call is the only way to see grandparents overseas.'],
              ['NARR', 'She does accept Leblanc\'s point about sleep. But she argues that a simple household rule solves that faster than a pact among two hundred families: the phone charges in the kitchen overnight, not in the bedroom.'],
              ['NARR', 'Raman suggests starting with a phone that holds only a few approved apps, then adding freedom, one step at a time, as the child shows responsibility.'],
              ['NARR', 'On one point, the two agree: parents should talk to other families before deciding, so that no child ends up feeling singled out.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether children are getting smartphones too young', 'How schools teach children to stay safe online', 'Whether basic phones are better than no phone', 'Why so many teenagers are losing sleep'] },
              { id: 'L6.2', q: 'What first led Leblanc to act?', o: ['His child\'s late-night messaging', 'Complaints from his children\'s teachers', 'A study from a university in Ottawa', 'Pressure from other parents at school'] },
              { id: 'L6.3', q: 'How does Raman respond to the idea of a whole class waiting?', o: ['It only postpones the pressure to a later grade.', 'It removes most of the pressure from classmates.', 'It is too hard for parents to organize.', 'It leaves children unable to call home.'] },
              { id: 'L6.4', q: 'What does Leblanc admit about his plan?', o: ['Some children feel left out because of it.', 'Most families have since left the group.', 'Basic phones have not improved sleep.', 'It gives children no practice with phones.'] },
              { id: 'L6.5', q: 'Why does Raman mention maps and video calls?', o: ['To show that smartphones have real benefits', 'To show that newcomers need cheaper plans', 'To argue that basic phones are enough', 'To list apps that children should avoid'] },
              { id: 'L6.6', q: 'What do Leblanc and Raman agree on?', o: ['Coordinating with other parents so no child is left out', 'Keeping phones in the kitchen overnight', 'Waiting until grade eight for a smartphone', 'Letting schools decide when phones are allowed'] }
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
            { id: 'R1.3', q: 'Natalie\'s comment about minus thirty-eight suggests that', o: ['low humidity makes it surprisingly bearable.', 'it is the coldest weather she has ever felt.', 'it keeps her from walking to work in December.', 'it is milder than she had been warned.'] },
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
          reply: '<h3>Email</h3><p>Hi Tomas,</p><p>I have been looking at the Northgate Museum for your mom\'s visit. I first thought of Monday the 9th, but that is not a holiday, so [[R2.1]]. Saturday it is, then.</p><p>For the two of us plus Ana (9) and Mateo (14), the cheapest choice is [[R2.2]]. Your mom turned 70 in the spring, so she will need [[R2.3]]. The kids are desperate to see the mammoths, so if all five of us add Ice Age Giants on Saturday, the total comes to [[R2.4]].</p><p>Here is another idea: we could go on Thursday evening after work instead. General admission would be free, and Ice Age Giants would cost [[R2.5]]. We would just need to get there before eight.</p><p>Let me know which you prefer.</p><p>Leila</p>',
          blanks: [
            { id: 'R2.1', o: ['we would find the doors locked', 'we would need a group booking', 'the museum would open late', 'admission would be free'] },
            { id: 'R2.2', o: ['a family ticket', 'four adult tickets', 'two adult and two youth tickets', 'a group booking'] },
            { id: 'R2.3', o: ['a senior ticket', 'an adult ticket', 'no ticket at all', 'a youth ticket'] },
            { id: 'R2.4', o: ['$106', '$98', '$80', '$110'] },
            { id: 'R2.5', o: ['the same flat price for every one of us', 'nothing for the two kids', 'less for your mom as a senior', 'the same as on Saturday'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A group of 12 adults who book three days ahead will pay this much for general admission:', o: ['$224.40', '$264.00', '$237.60', '$198.00'] },
            { id: 'R2.7', q: 'A full-time student with ID who arrives at 6:00 p.m. on a Thursday and wants to see Ice Age Giants will pay', o: ['$10.', '$23.', '$15.', '$8.'] },
            { id: 'R2.8', q: 'Leila most likely says they would need to arrive before eight because', o: ['nobody is admitted in the last hour.', 'the free admission period ends at eight.', 'Ice Age Giants is free only before eight.', 'the family ticket is not valid after eight.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Chasing the Northern Lights</h3><p><b>A.</b> For thousands of years, people in the North have looked up at shimmering curtains of green, pink and purple light. Today we know that the northern lights, or aurora borealis, begin about 150 million kilometres away, on the sun. The sun constantly releases a stream of electrically charged particles. When these particles reach Earth, the planet\'s magnetic field guides many of them toward the poles, where they collide with gases between 100 and 300 kilometres above the ground. Each collision releases a tiny burst of light. The colour depends on the gas involved: oxygen usually glows green, while nitrogen produces shades of blue and purple. The southern lights, seen from places such as New Zealand, form in exactly the same way.</p><p><b>B.</b> Canada is one of the best places in the world to see the aurora, because much of the North lies directly beneath the ring-shaped zone where the lights are most active. Yellowknife, Whitehorse and Churchill all see displays on many nights each year. Timing matters, however. In the far North, summer nights never become fully dark, so the viewing season runs roughly from late August to mid-April. The strongest displays usually appear between ten at night and two in the morning, and a clear sky is essential, since even thin cloud can hide a display completely. Experts also recommend driving at least a short distance out of town, since street lights can wash out all but the brightest shows.</p><p><b>C.</b> The lights have also become big business. Aurora tourism in the Northwest Territories has grown steadily over the past two decades. Churchill, long home to a research station where scientists study the lights, now also welcomes busloads of visitors, and some lodges now offer heated cabins with large windows, so that guests can watch the sky without standing outside at minus thirty. Many visitors rely on aurora forecasts, which are based on satellite measurements of activity on the sun. These forecasts are useful for planning a trip, but guides caution that they are only truly reliable an hour or two in advance, because conditions in space can change quickly.</p><p><b>D.</b> Photography has changed how people experience the aurora as well. Modern cameras, including those in many phones, can gather light for several seconds, so they often record stronger colours than the human eye can detect on a faint night. Amateur photographers have even contributed to science. Several years ago, a group of sky watchers in Alberta began sharing images of an unusual purple ribbon of light. Researchers studied the pictures and concluded that it was a different phenomenon from the ordinary aurora. The group gave it a playful name: Steve. It usually appears as a narrow ribbon running from east to west and fades in less than an hour.</p>',
          questions: [
            { id: 'R3.1', q: 'Different gases produce different colours.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Predictions of a display cannot be trusted far ahead of time.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Pictures taken by non-professionals helped researchers identify something new.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'The middle of the night is generally the best time to look up.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Some visitors can enjoy the lights without being exposed to the cold.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'Heated viewing cabins were first built for scientists studying the lights.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'What causes the lights originates far beyond Earth.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Artificial lighting can make the aurora harder to see.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'The purple ribbon nicknamed Steve can be seen only from Alberta.', fixed: true, a: 'E' }
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
          prompt: '<p>You recently flew home from a trip, but your suitcase did not arrive with you. The airline promised to deliver it within 24 hours. It has now been five days, and you still have not received it or any update. Your only suit, which you need for a job interview in two days, is inside it. The airline\'s website says it will pay up to $50 a day for necessary items, but only if customers send receipts. You have been borrowing clothes from a friend, so you have no receipts at all.</p><p>Write an email to the airline\'s customer service department. In your email, do the following:</p><ul><li>Describe your flight and your suitcase, including details that would help the airline find it.</li><li>Explain how the delay has affected you and why you have no receipts to send.</li><li>Say what you want the airline to do, given that you will have to buy a new suit tomorrow if the suitcase has not arrived.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your local community centre has received funding for one major addition and is asking residents which one it should build. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a new indoor swimming pool, with lessons and open swim times for all ages. Running costs would raise the yearly membership fee by about $40.' },
            { key: 'B', label: 'Option B', text: 'Build a new library wing, with study rooms, public computers and a children\'s reading area. The outdoor basketball court would be removed to make space for it.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and what you like to do during it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to save $3,000 by next summer for a trip home to see her family, but by the end of every month she has nothing left. She already works full time and does not want to give up her weekly dinner with friends. Give her advice on how she can reach her goal.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you felt proud of yourself. What did you do, what was the hardest part, and why did it make you feel proud?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/E/scene.jpg" alt="Moving day on a residential street">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the mover\'s stack of boxes, the couch, and the people and animals on the sidewalk.', image: '<img src="tests/img/E/scene.jpg" alt="Moving day on a residential street">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is planning a one-week summer vacation. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Pacific coast cruise', image: '<img src="tests/img/E/opt_A.jpg" alt="Photo: Pacific coast cruise">', facts: ['7 days at sea and in ports', 'Cost: $3,200 for the family', 'Meals and shows included', 'Fly to Vancouver to board'] },
            { key: 'B', title: 'Road trip through the Rockies', image: '<img src="tests/img/E/opt_B.jpg" alt="Photo: Road trip through the Rockies">', facts: ['7 days on the road', 'Cost: $2,100 for gas, motels and food', 'Stop wherever you like', 'About 5 hours of driving a day'] }
          ],
          third: { key: 'C', title: 'Staycation at home', image: '<img src="tests/img/E/opt_C.jpg" alt="Photo: Staycation at home">', facts: ['7 days at home', 'Cost: $600 for day trips', 'No travel time', 'Local beaches, parks and museums'] },
          persuade: 'Your family member would rather have a staycation at home. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Two months ago, you agreed to look after your neighbour\'s dog for a week while she is away. Yesterday, your closest friend asked you to be in her wedding party. The wedding is in another city during that same week.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you can no longer look after her dog.</p><p><b>Option B:</b> Talk to your friend. Explain why you cannot be in her wedding party.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'The high school in your neighbourhood is thinking about making uniforms mandatory. Some parents say uniforms would reduce pressure about clothing and save families money over time. Many students say uniforms take away a way to express themselves, and a full set costs about $250 at the start. The school council has asked local residents for their views. Should high school students be required to wear uniforms? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a sports store and see this unusual backpack. Call your friend, who is going on a ten-day hiking trip next month on rough, rocky mountain trails. The backpack weighs 4 kilograms empty, about twice as much as an ordinary hiking pack. Describe the backpack and explain whether you think your friend should buy it.', image: '<img src="tests/img/E/object.jpg" alt="An unusual backpack in a sports store">' }
      ]
    }
  });
})();
