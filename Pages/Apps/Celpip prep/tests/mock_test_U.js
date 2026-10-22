/* Rowe CELPIP Mock Exam: Test U content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/U/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'U',
    title: 'Mock Test U',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { LIONEL: { name: 'Lionel', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#2874a6', style: 'short' }, PETRA: { name: 'Petra', g: 'f', skin: '#f0c9a6', hair: '#6b4a2b', shirt: '#b9770e', style: 'bun' } },
        segments: [{
          lines: [
            ['LIONEL', 'These hiking boots are on sale for a hundred and twenty, but they\'ve only got them in a ten and a half.'],
            ['PETRA', 'You\'re usually an eleven, right? Try them with thin socks. Half a size might not matter.'],
            ['LIONEL', 'For walking around the mall, maybe. For a week in the mountains, my toes would be screaming by day two.'],
            ['PETRA', 'Fair enough. Ask if another branch can send a pair over. The sale price usually still counts.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why is Lionel unsure about buying the boots?', o: ['They could become painful on a long trip.', 'He thinks the sale price is still too high.', 'He normally wears a size smaller than these.', 'He only plans to wear them around the mall.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { YVETTE: { name: 'Yvette', g: 'f', skin: '#e8c3a0', hair: '#2a1b12', shirt: '#117864', style: 'long' }, CALLUM: { name: 'Callum', g: 'm', skin: '#f2cfb0', hair: '#c0392b', shirt: '#6c3483', style: 'short' } },
          segments: [
            {
              lines: [
                ['YVETTE', 'Callum, we\'ve got a problem. A couple just called from the highway. They\'re an hour out, and they have a booking for the Lake Room tonight.'],
                ['CALLUM', 'Tonight? The Lake Room\'s taken. The Adeyemis checked in at noon. They\'re here for the whole jazz festival.'],
                ['YVETTE', 'I know. I checked. The Adeyemis booked by phone back in March, and I put it in the calendar myself. These new people, the Brandts, booked on our website two weeks ago, and the website never blocked the dates.'],
                ['CALLUM', 'So the two systems didn\'t talk to each other. Great. And every other room\'s full, of course.'],
                ['YVETTE', 'All four. It\'s festival weekend. There isn\'t a spare bed in Nelson.'],
                ['CALLUM', 'Did the Brandts pay anything up front?'],
                ['YVETTE', 'A deposit of a hundred and twenty. The rest was due when they arrive. Two nights at a hundred and ninety a night.'],
                ['CALLUM', 'Okay. Well, it\'s not their fault, and it\'s not the Adeyemis\' fault either. We need a plan before they pull into the driveway.']
              ],
              questions: [
                { id: 'L1.1', q: 'What caused the double booking?', o: ['Two ways of taking reservations were not linked.', 'The Adeyemis arrived a day earlier than planned.', 'Yvette typed the phone booking in incorrectly.', 'The Brandts changed their dates two weeks ago.'] },
                { id: 'L1.2', q: 'How much did the Brandts still owe for their stay?', o: ['$260', '$380', '$190', '$120'] },
                { id: 'L1.3', q: 'What is Callum\'s attitude toward the two couples?', o: ['Neither should suffer for the owners\' mistake.', 'The Brandts should have phoned to confirm.', 'The Adeyemis should agree to change rooms.', 'The website company should deal with them.'] }
              ]
            },
            {
              lines: [
                ['YVETTE', 'What about the attic room? There\'s a bed up there, and the sheets are clean.'],
                ['CALLUM', 'There\'s a bed, a window that doesn\'t open, and a bathroom two floors down. We stopped renting it for a reason. I don\'t want a review saying we hid guests in the attic.'],
                ['YVETTE', 'Fair. Then we find them somewhere else. My cousin Dolores runs a B and B in Kaslo. It\'s forty-five minutes up the lake, but it\'s gorgeous, and she might have something.'],
                ['CALLUM', 'Kaslo\'s a long way from the festival, though. They\'re coming for the music.'],
                ['YVETTE', 'True, but there\'s a festival shuttle from Kaslo, isn\'t there? Every hour on Saturday?'],
                ['CALLUM', 'Actually, no, that was last year. This year it only runs from Castlegar.'],
                ['YVETTE', 'Oh. Well, I\'m calling Dolores anyway. A lovely room forty-five minutes away beats no room at all. And if hers costs more than ours, we cover the difference.'],
                ['CALLUM', 'Agreed. I\'ll phone the Brandts and warn them before they get here.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Callum reject the attic room?', o: ['Using it could damage the business\'s reputation.', 'The sheets in the attic have not been changed.', 'It is too far from where the festival is held.', 'It has already been promised to other guests.'] },
                { id: 'L1.5', q: 'What does Callum correct about the shuttle?', o: ['It no longer picks people up in Kaslo.', 'It only runs once an hour on Saturday.', 'It costs more than it did last year.', 'It leaves from Nelson, not Castlegar.'] },
                { id: 'L1.6', q: 'What does Yvette offer to do for the Brandts?', o: ['Pay any extra cost of a room elsewhere', 'Drive them to the festival on Saturday', 'Let them use the attic room for free', 'Return their deposit before they arrive'] }
              ]
            },
            {
              lines: [
                ['CALLUM', 'Okay, I talked to Mrs. Brandt. She was upset at first, which, fair enough. But here\'s the thing. They\'re here for one concert, Saturday night, and they hate driving in the dark.'],
                ['YVETTE', 'Then Kaslo\'s no good to them. Forty-five minutes each way, at night, on that road.'],
                ['CALLUM', 'Right. But listen. The band\'s playing again the following Saturday, and she said they\'d happily switch to next weekend if we could knock something off.'],
                ['YVETTE', 'The Lake Room\'s free next weekend. Let\'s give them both nights at half price and keep their deposit toward it.'],
                ['CALLUM', 'Half price? That\'s generous.'],
                ['YVETTE', 'It\'s cheaper than a one-star review. Wait, what about tonight, though? They\'re still out on the highway.'],
                ['CALLUM', 'Sorted. Her sister lives in Castlegar, so they\'ll stay there tonight and drive home tomorrow in daylight.'],
                ['YVETTE', 'Good. And whoever set up our booking website is going to hear from me before breakfast.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why would the room in Kaslo not suit the Brandts?', o: ['They want to avoid long drives after dark.', 'They would rather stay in Nelson itself.', 'They cannot afford the price in Kaslo.', 'The shuttle to the concert is already full.'] },
                { id: 'L1.8', q: 'What will Yvette probably do tomorrow morning?', o: ['Complain about the booking system to its provider', 'Reply to a one-star review posted by the Brandts', 'Move the Adeyemis into the Lake Room for next weekend', 'Give the Brandts back their deposit in full'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { MECH: { name: 'Bike mechanic', g: 'm', skin: '#c68642', hair: '#2a1b12', shirt: '#145a32', style: 'short' }, ODETTE: { name: 'Odette', g: 'f', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#2471a3', style: 'curly' } },
          segments: [{
            lines: [
              ['MECH', 'Hi there. Picking up or dropping off?'],
              ['ODETTE', 'Dropping off, I hope. I ride this to work every day, and for the past week the brakes have been squealing, and the gears keep slipping on the hill up Fort Street.'],
              ['MECH', 'Let\'s have a look. Okay, your brake pads are almost gone, and the chain\'s stretched. That\'s what\'s making the gears jump. When was it last serviced?'],
              ['ODETTE', 'Um, honestly? I bought it used two years ago, and I don\'t think anyone\'s touched it since.'],
              ['MECH', 'That explains a lot. New pads, a new chain and a full tune-up would come to about a hundred and forty with parts.'],
              ['ODETTE', 'Is it even worth it? I only paid two hundred for the whole bike.'],
              ['MECH', 'Oh, definitely. The frame\'s in great shape. A new bike like this would cost you eight hundred, easily.'],
              ['ODETTE', 'Okay, that\'s fine. When could it be ready?'],
              ['MECH', 'We\'re pretty backed up with the spring rush, so realistically, Thursday.'],
              ['ODETTE', 'Thursday? I need it to get to work tomorrow. There\'s no bus that goes anywhere near my office.'],
              ['MECH', 'I hear you. Here\'s what I can do. I\'ll swap the brake pads right now, it takes fifteen minutes, so at least it\'s safe to ride. The pads are part of that hundred and forty, so you won\'t pay for them twice. Then you bring it back Saturday morning and we\'ll do the rest while you wait.'],
              ['ODETTE', 'That would be amazing. Oh, while you\'re at it, my back wheel has a bit of a wobble.'],
              ['MECH', 'Let me spin it. Hmm. That\'s more than a wobble. The rim\'s cracked, right here, see? You don\'t want to ride on that, especially downhill.'],
              ['ODETTE', 'Oh no. So I need a whole new wheel?'],
              ['MECH', 'Afraid so. A good new rear wheel is about ninety. But I\'ve got a used one in the back that would fit, forty dollars, and that includes putting it on. It\'s not pretty, but it\'s solid.'],
              ['ODETTE', 'Used is fine. I\'m not trying to win any races. Can you put it on today too?'],
              ['MECH', 'Sure. Give me half an hour. There\'s a good coffee place next door.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why did Odette bring her bike to the shop?', o: ['It has trouble stopping and changing gears.', 'It was due for its yearly spring service.', 'She wants to sell it before the summer.', 'Its back wheel was damaged on Fort Street.'] },
              { id: 'L2.2', q: 'What does the mechanic suggest about the bike?', o: ['It has gone without care for too long.', 'It was damaged before Odette bought it.', 'Its parts are too old to be replaced.', 'It is not suited to riding up hills.'] },
              { id: 'L2.3', q: 'Why will the mechanic replace the brake pads today?', o: ['So Odette can ride safely to work tomorrow', 'Because the shop has the pads in stock today', 'Because it costs less than a full tune-up', 'So the bike will be ready before Thursday'] },
              { id: 'L2.4', q: 'About how much will Odette pay in total for all the work?', o: ['$180', '$230', '$140', '$130'] },
              { id: 'L2.5', q: 'Why does Odette choose the used wheel?', o: ['A basic but sound wheel is all she needs.', 'The new wheel would not arrive until Thursday.', 'The mechanic says it is stronger than a new one.', 'She rides only on flat roads to get to work.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#b07850', hair: '#1d1410', shirt: '#922b21', style: 'curly' }, BERNARD: { name: 'Bernard Laflamme', g: 'm', skin: '#f0c9a6', hair: '#bdc3c7', shirt: '#1a5276', style: 'bald' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Bernard Laflamme, a retired high school teacher in Sudbury who now tutors adults in French. Bernard, I\'d have thought retirement meant putting your feet up.'],
              ['BERNARD', 'So did I. It lasted about three months. Then a neighbour asked if I\'d help her prepare for a French test she needed for a promotion, and word spread. I have about twenty students now.'],
              ['HOST', 'Who are they, mostly?'],
              ['BERNARD', 'People who need French for work: nurses, government employees, a couple of police officers. And, to my surprise, more and more grandparents. Their children married into francophone families, and they want to be able to talk with their grandkids.'],
              ['BERNARD', 'One woman told me that the first time her granddaughter answered her in French, she cried right there at the dinner table.'],
              ['HOST', 'How is teaching adults different from teaching teenagers?'],
              ['BERNARD', 'Teenagers will try anything out loud, they just won\'t do the homework. Adults do every bit of the homework, but they\'re terrified of making mistakes out loud.'],
              ['BERNARD', 'So the first thing I do is make a few mistakes myself, in English, on purpose. Once they\'ve laughed at me, they relax.'],
              ['HOST', 'What does a typical session look like?'],
              ['BERNARD', 'Very little grammar, honestly. We pick something real: ordering at a restaurant, calling a pharmacy, chatting about last night\'s hockey game. If a rule comes up, I\'ll explain it, but I never start with one.'],
              ['HOST', 'And what do you charge?'],
              ['BERNARD', 'Forty dollars an hour. But a few of my students couldn\'t manage that, so they pay what they can. And the ones getting ready for work exams usually have their employer cover it.'],
              ['HOST', 'Do you meet in person?'],
              ['BERNARD', 'At first, always, at the public library. Now about half my students are online. One lives in a fly-in community up north, eight hundred kilometres from here. I didn\'t think video lessons could work, but she\'s one of my strongest students.'],
              ['HOST', 'Is it hard to find students?'],
              ['BERNARD', 'Not at all. There\'s a waiting list of about a dozen people. I could take more, but past twenty, I stop being a good teacher.'],
              ['HOST', 'So what\'s next?'],
              ['BERNARD', 'The library\'s asked me to run a free conversation group on Wednesday evenings this fall. I said yes, on one condition: no textbooks allowed.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Bernard begin tutoring?', o: ['A request from someone he knew led to others.', 'He advertised his lessons soon after retiring.', 'The library hired him to teach adult classes.', 'His former high school students asked him.'] },
              { id: 'L3.2', q: 'What has surprised Bernard about his students?', o: ['Many want French for family reasons.', 'Most of them are police officers.', 'Few of them need French for work.', 'Older students learn the fastest.'] },
              { id: 'L3.3', q: 'Why does Bernard make mistakes on purpose?', o: ['To ease his students\' fear of speaking up', 'To check whether his students are listening', 'To show how English differs from French', 'To make the homework seem less difficult'] },
              { id: 'L3.4', q: 'How does Bernard handle grammar in his lessons?', o: ['He explains rules only when they come up.', 'He begins every lesson with a short rule.', 'He never discusses grammar with adults.', 'He leaves grammar for the homework.'] },
              { id: 'L3.5', q: 'What does Bernard suggest about his student in the north?', o: ['She has proved his doubts about online lessons wrong.', 'She pays a lower rate than his other students.', 'She travels to Sudbury for some of her lessons.', 'She is preparing for a French test at work.'] },
              { id: 'L3.6', q: 'What condition has Bernard set for the new group?', o: ['Participants will not work from course books.', 'The group must meet at the library on weekends.', 'Each member must pay whatever they can afford.', 'Only adults preparing for exams may join it.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#f0c9a6', hair: '#5d4037', shirt: '#212f3d', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'More than sixty thousand homes and businesses in the Fredericton area are still without power this morning, two days after a storm coated the region in up to thirty millimetres of freezing rain.'],
              ['NEWS', 'The utility says about eighty percent of those customers should be reconnected by Friday evening.'],
              ['NEWS', 'Customers in rural areas along the Saint John River, however, may have to wait until early next week, because many of the damaged lines there run through thick forest that crews must clear before repairs can begin.'],
              ['NEWS', 'The utility is asking anyone who is still without power to report it online or by phone, rather than assume that a neighbour has already done so.'],
              ['NEWS', 'More than two hundred line workers are on the job, including crews from Nova Scotia and Quebec who arrived overnight.'],
              ['NEWS', 'The city has opened warming centres at two community centres and the downtown library, where residents can warm up, charge their phones and get a hot meal.'],
              ['NEWS', 'Officials are reminding people never to run generators, barbecues or camp stoves indoors. Several residents of one apartment building were treated in hospital yesterday after a neighbour ran a generator in a closed garage. All are expected to recover.'],
              ['NEWS', 'Schools in the area will stay closed until at least Thursday, and grocery stores with backup power are limiting customers to two bags of ice each.'],
              ['NEWS', 'Finally, residents who lost food during the outage may be able to claim up to two hundred dollars through their home insurance. Most insurers, however, will ask for receipts or photos of the spoiled items.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['The ongoing effects of a winter storm', 'A shortage of line workers in the province', 'The dangers of using generators indoors', 'A plan to move power lines underground'] },
              { id: 'L4.2', q: 'What share of affected customers may still lack power after Friday?', o: ['About 20%', 'About 80%', 'About 30%', 'About 60%'] },
              { id: 'L4.3', q: 'Why will some rural customers wait longer than others?', o: ['Trees must be cleared before crews can work.', 'Rural lines are repaired only after city lines.', 'Crews from other provinces have not arrived.', 'The river has flooded several rural roads.'] },
              { id: 'L4.4', q: 'Why does the news reader mention the apartment building?', o: ['To show what can happen when fuel-burning machines are used inside', 'To explain where one of the new warming centres has been opened', 'To describe a building that lost power for longer than others', 'To report on a fire that was caused by a fallen power line'] },
              { id: 'L4.5', q: 'What does the report suggest residents do before throwing out spoiled food?', o: ['Keep a record of it', 'Bring it to a warming centre', 'Return it to the store', 'Pack it in bags of ice'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Spring career fair', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { CATHERINE: { name: 'Catherine', g: 'f', skin: '#e3b28b', hair: '#6b4a2b', shirt: '#1f618d', style: 'bun' }, DOMINIC: { name: 'Dominic', g: 'm', skin: '#f2cfb0', hair: '#3b2a20', shirt: '#a04000', style: 'short' }, HAMZA: { name: 'Hamza', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#196f3d', style: 'curly' } },
          segments: [{
            lines: [
              ['CATHERINE', 'Thanks for coming. The career fair is six weeks away, and we still have three big decisions to make.'],
              ['DOMINIC', 'Let me guess. The room, the employers, and how we get students to actually show up.'],
              ['CATHERINE', 'Exactly. Let\'s start with the room. Last year we used the gym, and it looked half empty.'],
              ['HAMZA', 'It looked empty because we only had thirty employers. The gym holds about eighty tables.'],
              ['DOMINIC', 'So let\'s book the student lounge instead. It\'s smaller, so thirty booths would feel busy.'],
              ['HAMZA', 'The lounge only fits twenty-five tables. I measured it last week.'],
              ['CATHERINE', 'And we already have twenty-eight employers confirmed, with more replying every day.'],
              ['DOMINIC', 'Okay, the lounge is out. What about the gym with a curtain across the middle?'],
              ['HAMZA', 'That could work. We use half the gym and put a couple of food trucks outside the doors.'],
              ['CATHERINE', 'Food trucks? That sounds like a lot of money for a career fair.'],
              ['HAMZA', 'It wouldn\'t cost us anything. The trucks actually pay us a small fee to be there.'],
              ['CATHERINE', 'Oh. Well, in that case, I\'m all for it. Free samples always bring students in.'],
              ['DOMINIC', 'Speaking of students, last year most of them came in the last hour, after classes ended.'],
              ['DOMINIC', 'But half the employers had already packed up by then. Students walked into a room of empty tables.'],
              ['HAMZA', 'Then let\'s ask instructors to cancel afternoon classes, the way the nursing department does.'],
              ['CATHERINE', 'I doubt they\'d all agree. Some have labs that just can\'t be moved.'],
              ['CATHERINE', 'But we could run the fair from noon to six instead of nine to three.'],
              ['DOMINIC', 'Employers might not love staying until six. Most of them start their day early.'],
              ['HAMZA', 'So we tell them most students arrive after three. That\'s their busiest hour, not their quietest.'],
              ['DOMINIC', 'Fair point. One more thing. Last year, lots of students didn\'t even bring a résumé.'],
              ['CATHERINE', 'We could promote the résumé workshops the week before. The career centre already runs them.'],
              ['DOMINIC', 'It does, but only twelve students came to the last one. Nobody knows they exist.'],
              ['HAMZA', 'Then let\'s hold one in the student lounge at lunchtime, with pizza. Free food again.'],
              ['CATHERINE', 'You really believe in free food, don\'t you?'],
              ['HAMZA', 'So does every student I\'ve ever met.'],
              ['CATHERINE', 'Fine. Dominic, could you draft a message to the employers about the new hours?'],
              ['DOMINIC', 'Sure. I\'ll send it Friday, as soon as you\'ve confirmed the gym booking.']
            ],
            questions: [
              { id: 'L5.1', q: 'What was the problem with the gym last year?', o: ['It was far too big for the number of employers.', 'It was too small for all of the employers.', 'It was booked by another group that day.', 'It was too far from the student lounge.'] },
              { id: 'L5.2', q: 'Why is the student lounge rejected?', o: ['It cannot hold all the employers who are coming.', 'It is already booked for the résumé workshops.', 'Students dislike using it for formal events.', 'The food trucks would not be able to park there.'] },
              { id: 'L5.3', q: 'Why does Catherine change her mind about the food trucks?', o: ['She learns they would bring in money, not cost it.', 'Hamza offers to pay for the trucks himself.', 'Students asked for food at last year\'s fair.', 'Employers want to be able to eat on site.'] },
              { id: 'L5.4', q: 'How does Catherine\'s proposed schedule compare with last year\'s?', o: ['It is the same length but starts later.', 'It is longer and starts at the same time.', 'It is shorter and ends earlier in the day.', 'It is two hours longer and ends at six.'] },
              { id: 'L5.5', q: 'What problem does Dominic describe from last year?', o: ['Students and employers were not there at the same time.', 'Employers arrived later than the students expected.', 'Students left before the employers had finished setting up.', 'Classes were cancelled without warning on the day.'] },
              { id: 'L5.6', q: 'Why does Catherine doubt Hamza\'s idea about classes?', o: ['Some classes cannot be rescheduled.', 'The nursing department refused to help.', 'Students would skip the fair anyway.', 'Instructors dislike the career centre.'] },
              { id: 'L5.7', q: 'How does Hamza answer the concern about employers staying late?', o: ['He presents the later hours as good for them.', 'He suggests letting employers leave at three.', 'He offers to pay employers for the extra time.', 'He agrees the hours should stay as they were.'] },
              { id: 'L5.8', q: 'What is Catherine\'s tone when she asks about free food?', o: ['Friendly and teasing', 'Annoyed and impatient', 'Worried about the cost', 'Surprised and impressed'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'The cost of minor hockey',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#0e6655', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'For many Canadian families, winter means hockey. But the price of the game is climbing fast. A season on a competitive, or rep, team can now cost more than five thousand dollars once travel, tournaments and private coaching are added.'],
              ['NARR', 'Some minor hockey associations are now debating whether to put a limit on how much their rep teams can spend each season, and the debate is getting heated.'],
              ['NARR', 'Jolene Tremaine, a former coach with two children in the game in Sault Ste. Marie, supports a cap. Her first argument is about who gets to play.'],
              ['NARR', 'When costs rise that high, she says, talented children from lower-income families simply drop out, and the sport loses players it should be developing. In her city, she notes, the number of rep players has fallen by nearly a fifth in five years.'],
              ['NARR', '"I\'ve watched kids with real skill walk away at eleven because their parents couldn\'t keep up," she says. "That\'s not a choice. That\'s a price tag."'],
              ['NARR', 'Her second argument is that much of the spending does little to make players better. Out-of-town tournaments, she says, often mean ten hours in a car for two or three games, when the same money could buy extra practice time at the local rink.'],
              ['NARR', 'Tremaine admits that a cap would be hard to enforce, because families could still pay for private lessons outside the team. But she believes that limiting team costs alone would remove the biggest barrier for most families.'],
              ['NARR', 'Arvid Sandberg, who directs player development for a large association in Calgary, opposes a cap. His first argument is that the best young players need tougher opponents than they will find close to home, and that tournaments are where they find them.'],
              ['NARR', '"If we cancel the tournaments, we\'re telling our strongest players to settle for less," he says. "They deserve the same chances as kids anywhere else."'],
              ['NARR', 'His second point is that a cap would push wealthy families toward private academies and elite clubs that operate outside the association\'s rules altogether. That, he warns, would split the sport even further, with the richest players leaving community hockey entirely.'],
              ['NARR', 'Sandberg agrees that cost is a serious problem. But in his view, the answer is not to limit spending but to raise money for the families who need it.'],
              ['NARR', 'His association already runs a fund, paid for by sponsors and a yearly charity game, that covers fees for about one player in ten.'],
              ['NARR', 'He adds that teams often cover tournament costs through bottle drives and raffles, so parents do not pay for everything themselves.'],
              ['NARR', 'Tremaine responds that this kind of help depends on families asking for it, and that many proud parents never will. Sandberg replies that applications are kept confidential, and that most families who apply are approved.'],
              ['NARR', 'Both say they would welcome one change: more affordable house-league options, so that children who love the game can keep playing even if they never make a rep team.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether to limit spending in competitive youth hockey', 'How to make house-league hockey more competitive', 'Why fewer children are signing up to play hockey', 'How sponsors decide which minor hockey teams they will support'] },
              { id: 'L6.2', q: 'What is Tremaine\'s main concern about rising costs?', o: ['Skilled players from poorer families are lost to the game.', 'Parents spend far too many hours driving to out-of-town tournaments.', 'Coaches are leaving to work for private academies.', 'Children are put under too much pressure to win.'] },
              { id: 'L6.3', q: 'What does Tremaine say about out-of-town tournaments?', o: ['They offer little benefit for what they cost.', 'They help young players learn to face much stronger opponents.', 'They should be paid for by local sponsors.', 'They are popular with most hockey families.'] },
              { id: 'L6.4', q: 'What does Sandberg fear a spending cap would cause?', o: ['Wealthier families would turn to programs outside the association.', 'Volunteers would stop coaching the association\'s rep teams.', 'Sponsors would pull their support from the charity game.', 'Out-of-town tournaments would become even more expensive for families to attend.'] },
              { id: 'L6.5', q: 'What does Sandberg propose instead of a cap?', o: ['Financial help aimed at families in need', 'Fewer tournaments outside the local area', 'A limit on the price of private lessons', 'Separate leagues for wealthier players'] },
              { id: 'L6.6', q: 'Why is Tremaine doubtful about Sandberg\'s solution?', o: ['It relies on families coming forward, and many will not.', 'The fund covers only one player in ten.', 'Most applications to the fund are refused.', 'Sponsors may stop giving money to the fund in the future.'] }
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
          passage: '<h3>Message</h3><p>Hi Everett,</p><p>I promised to write after Mom\'s appointment, so here it is. The good news first: Dr. Ahmadi says her heart is fine and the new medication is working. The less good news is that she fell again last Tuesday. She was not hurt, but she lay on the kitchen floor for almost an hour before Mrs. Lacroix from next door heard her calling. That is her second fall since Christmas, and I do not think we can keep pretending everything is fine.</p><p>You know I live twenty minutes away and drop in most evenings, but with the twins starting high school and my new hours at the clinic, I cannot be there during the day. A home care worker comes twice a week to help Mom shower, but each visit is only forty-five minutes. The rest of the time she is on her own in that big house in Kelowna, with the steep stairs down to the laundry room.</p><p>I have looked at two options. The first is Okanagan Terrace, a seniors\' residence ten minutes from me. Mom would have her own apartment with a small kitchen, meals in the dining room when she wants them, and staff on call day and night. It costs $3,800 a month, which her pension could cover if she rented out the house. The second is keeping her at home with more care: a worker every weekday morning, plus an emergency button she would wear around her neck. That would add about $1,900 a month to what she spends now, and it would do nothing about those stairs.</p><p>Mom, of course, says she is fine and is not leaving her garden. But when I mentioned that Okanagan Terrace has raised flower beds that residents look after themselves, she went quiet, which for Mom is practically a yes.</p><p>I do not want to make this decision without you. Could you come out for a few days next month? The residence is holding an open house on the 18th, and I think it would mean a lot to Mom if you were there. If you cannot get away, could we at least set up a video call with her this weekend?</p><p>Love,<br>Priscilla</p>',
          questions: [
            { id: 'R1.1', q: 'Priscilla mentions Mrs. Lacroix to show that', o: ['help reached Mom only after a worrying delay.', 'the neighbours check on Mom every single day.', 'Mom was more seriously hurt than she admitted.', 'Mrs. Lacroix keeps a spare key to the house.'] },
            { id: 'R1.2', q: 'Priscilla cannot visit during the day because', o: ['her family and work duties have grown.', 'she lives too far from her mother.', 'the care worker comes at that time.', 'her mother prefers to have visitors in the evening.'] },
            { id: 'R1.3', q: 'The main weakness of Mom\'s current care is that', o: ['she spends most of her time without anyone nearby.', 'the worker does not help her with showering.', 'it costs more than the residence would.', 'the worker refuses to go down the stairs.'] },
            { id: 'R1.4', q: 'The residence would be affordable for Mom if', o: ['her house began earning money for her.', 'Everett agreed to pay half the monthly fee.', 'she gave up the kitchen in her apartment.', 'she ate all her meals in her own apartment.'] },
            { id: 'R1.5', q: 'Priscilla sees the second option as weaker partly because', o: ['a danger in the house would remain.', 'it would cost more than the residence.', 'Mom refuses to wear an emergency button.', 'the worker could only come on weekends.'] },
            { id: 'R1.6', q: 'Mom\'s reaction to the flower beds suggests that she', o: ['may be more open to moving than she admits.', 'is upset at the idea of leaving her own garden.', 'did not understand what Priscilla was describing.', 'would rather have a larger garden at home.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Priscilla,</p><p>Thank you for the update, and for everything you do for Mom. I had no idea she had fallen twice. The thought of her [[R1.7]] is awful, and I agree we cannot wait any longer.</p><p>I also agree that more home care is not enough. Even with someone there every weekday morning, Mom would still have to [[R1.8]] whenever she does a load of washing. Okanagan Terrace sounds much better, especially if [[R1.9]] can cover the monthly cost.</p><p>I have booked a flight that lands on [[R1.10]], so I will be there for the open house, and I will stay for four days. In the meantime, let\'s still [[R1.11]] this weekend, so that she hears from both of us before I arrive. And please tell her about the flower beds again. I think that might do more than anything we say. And give the twins a hug from their uncle.</p><p>Love,<br>Everett</p>',
          blanks: [
            { id: 'R1.7', o: ['waiting so long for someone to hear her', 'forgetting to take her heart medication', 'falling on the stairs to the laundry room', 'sitting alone at the clinic all day'] },
            { id: 'R1.8', o: ['manage those steep steps by herself', 'wait for Mrs. Lacroix to come over', 'press the button around her neck', 'pay the worker for an extra visit'] },
            { id: 'R1.9', o: ['renting out her house', 'my share of the costs', 'savings on her medication', 'eating in the dining room'] },
            { id: 'R1.10', o: ['the 17th of next month', 'the 18th of this month', 'the 19th of next month', 'the Tuesday after the open house'] },
            { id: 'R1.11', o: ['have a video chat with Mom', 'visit Mrs. Lacroix together', 'tour the residence online', 'call Dr. Ahmadi about her heart'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Marten Island Ferry, Georgian Bay: Return Fares</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Ticket</th><th>Off-season (October to May)</th><th>Summer (June to September)</th></tr></thead><tbody>' +
            '<tr><td>Adult (19 to 64)</td><td>$9.00</td><td>$12.00</td></tr>' +
            '<tr><td>Senior (65 and over)</td><td>$5.00</td><td>$8.00</td></tr>' +
            '<tr><td>Child (5 to 18)</td><td>$4.50</td><td>$6.00</td></tr>' +
            '<tr><td>Child under 5</td><td>Free</td><td>Free</td></tr>' +
            '<tr><td>Car (driver not included)</td><td>$28.00</td><td>$38.00</td></tr>' +
            '<tr><td>Motorcycle (driver not included)</td><td>$14.00</td><td>$19.00</td></tr>' +
            '<tr><td>Bicycle</td><td>$3.00</td><td>$3.00</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>All fares cover the return trip and are paid on the mainland side only.</li><li>Island residents who show a resident card pay half the adult fare and half the car fare all year.</li><li>Car reservations cost $10 and are recommended in summer. Cars without a reservation board in order of arrival.</li><li>Ten-ride passes: buy 10 adult or car fares at the current season\'s price and pay for only 8. Passes are valid for 12 months.</li><li>Vehicles over 6 metres long, including cars towing a trailer, pay twice the car fare.</li><li>Sailings leave the mainland every 45 minutes, starting at 6:30 a.m. all year.</li><li>Last sailing from the island: 9:30 p.m. in summer, 7:00 p.m. in the off-season.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Joaquin,</p><p>I have been planning our day on Marten Island for Saturday, July 12. If we take the car with you, me, your mother (she turned 70 in March), Lucas (7) and Emma (3), our fares will come to [[R2.1]]. Since it is the middle of summer, I would also pay for [[R2.2]] so that we are not stuck in a long lineup at the dock.</p><p>Your cousin Bastien lives on the island, so he [[R2.3]] when he comes over to the mainland. He has offered to make us dinner, but we will need to be on [[R2.4]] at the latest, or we will be spending the night on his sofa.</p><p>One other idea: we could leave the car at the dock and borrow Bastien\'s van on the island. That would save the car fare, but [[R2.5]]. Let me know what you think.</p><p>Maribel</p>',
          blanks: [
            { id: 'R2.1', o: ['$76', '$82', '$86', '$64'] },
            { id: 'R2.2', o: ['a car reservation', 'a ten-ride pass', 'a resident card', 'an extra senior fare'] },
            { id: 'R2.3', o: ['pays half the usual adult fare', 'travels on the ferry for free', 'pays the same fare as visitors', 'needs a reservation to board'] },
            { id: 'R2.4', o: ['the 9:30 p.m. sailing', 'the 7:00 p.m. sailing', 'the first morning sailing', 'the 12:00 noon sailing'] },
            { id: 'R2.5', o: ['we would still pay all of the passenger fares', 'Emma would then have to pay the child fare', 'we would still need to pay for a reservation', 'your mother would lose her senior discount'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A mainland worker buys a ten-ride adult pass in November to visit the island on foot. The pass costs', o: ['$72.', '$90.', '$96.', '$80.'] },
            { id: 'R2.7', q: 'A family drives to the terminal on an August afternoon without a reservation. They should expect to', o: ['wait their turn behind cars that got there first.', 'pay a $10 fee before driving on board.', 'be refused a place until the next day.', 'pay the off-season fare for their car.'] },
            { id: 'R2.8', q: 'A visitor who walks onto the ferry at the island dock to go home will', o: ['not be asked to pay at the island terminal.', 'pay half the adult fare at the island dock.', 'need to show a resident card to board.', 'pay the full return fare before boarding.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Night Shift at the Neighbourhood Bakery</h3><p><b>A.</b> For most people, a bakery is a place that smells wonderful at eight in the morning. For the bakers, the working day began long before that. At a typical neighbourhood bakery, the first staff arrive between two and four a.m. to mix the dough for the day\'s bread, which then rests while they shape the pastries prepared the evening before. Many bakers say they have come to enjoy those quiet hours, when the streets are empty and nobody calls on the phone. Others admit that, even after years in the trade, they have never really adjusted to sleeping during the day, and some eventually leave the job for that reason alone. Larger bakeries often run two or three shifts, so their ovens are almost never cold.</p><p><b>B.</b> Much of the work depends on time and temperature rather than speed. Bread dough rises because yeast, a tiny living organism, feeds on the sugars in flour and releases gas. The flour matters too: flour with more protein produces a chewier loaf that holds its shape better. In a warm kitchen this can happen in an hour or two; in a cool one, it may take all night. Many bakeries now deliberately slow the process by keeping dough in large refrigerators for twelve hours or more. Bakers say the slower rise gives bread a deeper flavour and a crust that stays crisp longer, and it also means less work has to be done in the middle of the night.</p><p><b>C.</b> Sourdough has become especially popular in recent years. Instead of using packaged yeast, sourdough bakers keep a "starter," a mixture of flour and water in which wild yeast and bacteria live together. The starter must be fed fresh flour and water every day, rather like a pet, and keeping one alive through a long holiday can be a challenge; some bakers ask a neighbour to feed theirs while they are away. Some bakeries proudly use starters that are decades old, and a few have been passed from one owner to the next when the business was sold. Customers often say sourdough is easier to digest than ordinary bread, although most bakers are careful not to make health claims.</p><p><b>D.</b> Running a small bakery is rarely a path to wealth. The prices of flour, butter and energy have all risen sharply, and ovens are expensive to buy and repair. Many owners have responded by narrowing their range, baking fewer kinds of bread but more of each. Others now take orders online the day before, so they know exactly how much to bake and throw less away at closing time. Unsold loaves are often given to food banks or turned into breadcrumbs and croutons the next day.</p>',
          questions: [
            { id: 'R3.1', q: 'Some bakers give up the work because they cannot get used to daytime sleep.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Letting dough rest in the cold for a long time can improve its taste.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'A starter needs regular attention to stay healthy.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'Knowing demand in advance helps some bakeries cut waste.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'Some bakers appreciate the calm of working before sunrise.', fixed: true, a: 'A' },
            { id: 'R3.6', q: 'Sourdough loaves usually sell for more than ordinary bread.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'Certain starters have been handed over along with the business.', fixed: true, a: 'C' },
            { id: 'R3.8', q: 'Many small bakeries now offer a smaller variety of products.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Bakery work often starts in the middle of the night.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>How Much Editing Is Too Much?</h3><p>When a photograph of a snowy owl in flight won first prize at an Ontario camera club competition last year, members were delighted, until the photographer mentioned that he had used an editing program to remove a fence post and add a little extra snow. The photographer said he had never tried to hide the changes; nobody had asked. Within days, the club was arguing about a question that amateur photographers across the country now face: how much editing is too much?</p><p>Hélène Marchetti, who has judged amateur competitions for twenty years, believes contests need clear limits. "A nature photograph is a promise that this moment happened," she says. Adjusting brightness or cropping an image has always been acceptable, she argues, but adding or removing objects turns a photograph into an illustration. She points out that some of the world\'s largest nature contests already require finalists to submit their original, unedited files so that judges can compare them. She adds that younger photographers are especially quick to edit, because many have never used a camera without software built in.</p><p>Wendell Boateng, a retired engineer who took up photography at sixty-five, sees things differently. "Film photographers spent hours in the darkroom changing their prints," he says. "Editing is part of the craft, and it always has been." He worries that strict rules will discourage newer members, especially older ones on fixed incomes, who cannot afford expensive lenses and rely on software to improve their pictures. Still, he agrees that entrants should be honest about what they have changed.</p><p>Some clubs have tried to satisfy both sides by creating separate categories. At one club in Saskatoon, members now choose between an "open" category, where any editing is allowed, and a "documentary" category limited to basic adjustments. The club\'s president, Farida Haque, says entries in the documentary category doubled in the first year, which surprised her. "People like knowing exactly what the rules are," she says. The open category still attracts many of the club\'s most experienced members, who see editing as an art form of its own.</p><p>The newest challenge comes from programs that can create or change large parts of an image automatically. Marchetti says judges are finding it harder and harder to tell what is real, and that asking for original files is becoming the only reliable check. Boateng accepts that images made entirely by a computer do not belong in a photography contest, but argues that tools which simply sharpen a picture or reduce grain are no different from owning a better camera.</p><p>Haque believes the debate has been good for her club. Meetings that used to focus on equipment now include discussions about honesty and storytelling, and several members have started writing short notes to go with their entries. "In the end, every photograph is a choice about what to show," she says. "We just want people to tell us which choices they made."</p>',
          questions: [
            { id: 'R4.1', q: 'The owl photograph caused debate because', o: ['the photographer had changed what was in the scene.', 'it had been taken without permission at a zoo.', 'the judges had not been shown the original file.', 'the photographer had used a very costly lens.'] },
            { id: 'R4.2', q: 'Marchetti believes that removing an object from a picture', o: ['turns it into a different kind of image.', 'is acceptable if the photographer admits it.', 'is no more serious than adjusting brightness.', 'should be allowed only in contests for beginners.'] },
            { id: 'R4.3', q: 'Boateng mentions the darkroom to suggest that', o: ['altering images is a long-standing practice.', 'film produces better pictures than digital cameras.', 'older members still prefer to work with film.', 'editing software is too expensive for most members.'] },
            { id: 'R4.4', q: 'What surprised Haque about the new categories?', o: ['How many members chose the stricter one', 'How strongly members objected to them', 'How quickly the judges learned the rules', 'How many members left the club because of them'] },
            { id: 'R4.5', q: 'Boateng would most likely agree that', o: ['some automatic tools are fair to use in contests.', 'computer-generated images should be able to win prizes.', 'all entrants should have to submit their original files.', 'nature photographs should never be edited at all.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I have belonged to a camera club in Moncton for six years, and this article describes our arguments almost word for word. I agree with Ms. Marchetti that a nature photograph should be [[R4.6]]. At the same time, Mr. Boateng has a point that [[R4.7]], and our club should not turn those members away.</p><p>Perhaps we could learn from the club in Saskatoon, which [[R4.8]]. Since judges now struggle to tell what has been changed, I also think we should [[R4.9]], at least for the finalists.</p><p>In the end, I share Ms. Haque\'s view that what matters most is [[R4.10]]. A short note beside each photo would cost us nothing and settle a lot of arguments.</p>',
          blanks: [
            { id: 'R4.6', o: ['a faithful record of a real moment', 'improved by the judges before display', 'entered in the open category only', 'taken with the best lens available'] },
            { id: 'R4.7', o: ['software helps those who cannot buy costly gear', 'judges can easily spot most kinds of changes', 'contests should ban every kind of editing tool', 'film photographers seldom changed their prints'] },
            { id: 'R4.8', o: ['lets members choose between two sets of rules', 'has banned editing in all of its categories', 'asks its members to vote on every photo', 'holds separate contests for older members'] },
            { id: 'R4.9', o: ['request the files straight from the camera', 'stop holding nature competitions', 'allow any editing in every category', 'hire judges from much larger contests'] },
            { id: 'R4.10', o: ['being open about how an image was made', 'the quality of the camera that was used', 'the number of entries the club receives', 'the number of categories a club offers'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You paid $390 for a ten-week evening Spanish conversation course at your local college, because you are visiting your partner\'s family in Mexico this summer. Since the third week, the class has had three different instructors, two classes were cancelled with less than an hour\'s notice, and the course was moved online without anyone asking the students. When you complained, the office offered you a credit toward a future course, but not a refund.</p><p>Write an email to the manager of the college\'s continuing education department. In your email, do the following:</p><ul><li>Explain why you signed up and what has gone wrong with the course.</li><li>Explain why the credit the office offered does not solve your problem.</li><li>Say what you would like the college to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer wants to encourage staff to leave their cars at home and has budget for one program. It is asking employees which option they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Give every employee a free monthly transit pass, worth about $100 a month. However, the nearest bus stop is a 10-minute walk from the office, buses run only every 30 minutes after 7:00 p.m., and about a third of staff live outside the transit area.' },
            { key: 'B', label: 'Option B', text: 'Build a secure bike room with showers and lockers, and give each employee $500 toward a bicycle or e-bike. However, it would mainly help people who live within cycling distance, and few would ride during the coldest winter months.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a meal that is special to you or your family, and explain why it matters to you.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has accepted a teaching job on a small island and will move there in August. The ferry runs only four times a day, the last one leaves the mainland at 8:00 p.m., and she does not know anyone on the island. She also has a tight budget, because her car needs expensive repairs. Give your friend advice on how to prepare for the move and settle into island life.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when a job interview or another important meeting did not go the way you expected. What happened, how did you handle it, and what would you do differently now?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/U/scene.jpg" alt="A busy outdoor market with a bakery stall and a food truck">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the woman carrying the boxes, the dog, and the people waiting at the food truck.', image: '<img src="tests/img/U/scene.jpg" alt="A busy outdoor market with a bakery stall and a food truck">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is planning a two-night stay in a small tourist town to celebrate your parents\' 40th wedding anniversary. Six adults will go. Choose the place to stay that you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Bed-and-breakfast', image: '<img src="tests/img/U/opt_A.jpg" alt="Photo: Bed-and-breakfast">', facts: ['$170 per room per night, 3 rooms needed', 'Home-cooked breakfast included', 'Five-minute walk to shops and restaurants', 'Quiet house rules: no guests in common areas after 10:00 p.m.'] },
            { key: 'B', title: 'Hotel', image: '<img src="tests/img/U/opt_B.jpg" alt="Photo: Hotel">', facts: ['$145 per room per night, 3 rooms needed', 'Indoor pool; breakfast $18 per person', 'On the highway, 15-minute drive to town', 'Free parking and 24-hour front desk'] }
          ],
          third: { key: 'C', title: 'Lakeside cottage', image: '<img src="tests/img/U/opt_C.jpg" alt="Photo: Lakeside cottage">', facts: ['$900 for 2 nights, plus $120 cleaning fee', 'Sleeps 6, with a kitchen and a dock', 'Must cook your own meals', '25-minute drive to town on a gravel road'] },
          persuade: 'A family member thinks the cottage would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Weeks ago, you promised your grandmother that you would go with her this Saturday morning to buy her first smartphone and help her learn to video call her family. She is nervous about the technology and has said she would not go alone. Today, your manager asked you to represent your company at a trade show on Saturday morning, because the coworker who was supposed to go is sick. Your manager mentioned that this would help your chances of a promotion.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your grandmother. Explain why you cannot go with her on Saturday.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot go to the trade show.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your local school board is reviewing its storm policy. At the moment, all schools close whenever a winter storm warning is issued, which happened eleven times last winter. Many working parents say the closures leave them scrambling for child care and cost students too much class time, and they would like schools to stay open and let families decide. Others, including many bus drivers, say safety must come first, especially on icy rural roads.</p><p>The board has asked parents and community members for their views before it decides. Should schools stay open during winter storm warnings? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a hardware store and see this unusual emergency gadget for $70. Call your friend, who lives in the country, loses power several times every winter and has only about $80 to spend. The gadget weighs almost two kilograms, and ten minutes of turning the handle gives about thirty minutes of light. Describe the gadget and explain whether you think your friend should buy it.', image: '<img src="tests/img/U/object.jpg" alt="An unusual emergency gadget in a hardware store">' }
      ]
    }
  });
})();
