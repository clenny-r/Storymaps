/* Rowe CELPIP Mock Exam: Test I content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty target: slightly harder than the real test (CLB 8 to 11).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/I/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'I',
    title: 'Mock Test 9',
    note: 'Original practice content in the CELPIP-General format. Written slightly harder than the real test.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#1f618d', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#e8c39e', hair: '#120c08', shirt: '#d35400', style: 'long' } },
        segments: [{
          lines: [
            ['OWEN', 'Hey Mei, want to watch the hockey game at my place Thursday night? Puck drops at seven.'],
            ['MEI', 'I\'d love to, but my evening class doesn\'t finish until eight. I\'d only catch the end.'],
            ['OWEN', 'No problem. I\'ll record it from the start, and we can watch the whole thing when you get here. Just stay off your phone so you don\'t see the score.'],
            ['MEI', 'Deal. I\'ll bring the snacks.']
          ],
          questions: [
            { id: 'LP.1', q: 'What does Owen offer to do?', o: ['Record the game so they can watch it later', 'Text Mei the score after each period', 'Pick Mei up as soon as her class ends', 'Buy snacks before the game starts at seven'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { JUNO: { name: 'Juno', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#7d3c98', style: 'curly' }, ARIF: { name: 'Arif', g: 'm', skin: '#c98c64', hair: '#120c08', shirt: '#2e4053', style: 'short' } },
          segments: [
            {
              lines: [
                ['JUNO', 'Arif, look at the departures board. Our Moncton flight just switched to cancelled.'],
                ['ARIF', 'You\'re kidding. Hang on, I just got a text from the airline. It says there\'s a mechanical problem with the aircraft, and they don\'t have a replacement plane available tonight. The weather in Moncton is fine, apparently, so it\'s just bad luck.'],
                ['JUNO', 'This cannot be happening. Camille\'s wedding is tomorrow at two, and I\'m supposed to be at the salon with the other bridesmaids at ten in the morning. She\'s been planning our hair for months.'],
                ['ARIF', 'Okay, the text says they\'ve automatically moved us to tomorrow\'s eleven-forty flight.'],
                ['JUNO', 'Eleven forty? When does that get in?'],
                ['ARIF', 'Um, five past three, local time.'],
                ['JUNO', 'So we\'d walk in after the vows are over. That\'s not an option, Arif. I\'m standing up there next to her.'],
                ['ARIF', 'I know, I know. They\'re also offering us fifteen-dollar meal vouchers, for whatever that\'s worth.'],
                ['JUNO', 'A sandwich isn\'t going to get us to New Brunswick. Let\'s get to the service desk before that line gets any longer.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why was the original flight cancelled?', o: ['A faulty plane could not be replaced in time.', 'A storm in Moncton grounded the evening flights.', 'Too few passengers had booked seats that night.', 'The crew had already worked their maximum hours.'] },
                { id: 'L1.2', q: 'What can be inferred about Juno?', o: ['She has a role in the wedding itself.', 'She is the one getting married tomorrow.', 'She booked the flights for both of them.', 'She works at a hair salon in Moncton.'] },
                { id: 'L1.3', q: 'Why does Juno reject the airline\'s new booking?', o: ['They would miss the ceremony entirely.', 'It does not leave until the afternoon.', 'The meal vouchers would not cover lunch.', 'Arif would arrive later than she would.'] }
              ]
            },
            {
              lines: [
                ['ARIF', 'Well, that was quicker than I expected. So, the agent can\'t get us to Moncton tonight, and there\'s no connection from Halifax to Moncton until tomorrow afternoon. But she can put us on the nine-fifteen to Halifax, and since it\'s the same airline, there\'s no extra charge.'],
                ['JUNO', 'Halifax? How far is that from Moncton?'],
                ['ARIF', 'About two and a half hours by car.'],
                ['JUNO', 'Hmm. What if we just rented a car here and drove the whole way?'],
                ['ARIF', 'From Toronto? That\'s fourteen hours, minimum. Even taking turns, we\'d show up wrecked, and you\'d be yawning in every photo.'],
                ['JUNO', 'Fair. What about a bus from Halifax? I\'d rather not be on the highway in the middle of the night.'],
                ['ARIF', 'Let me look. Okay, the first bus to Moncton leaves at seven in the morning and gets in at eleven fifteen.'],
                ['JUNO', 'So I\'d miss the salon completely. No good.'],
                ['ARIF', 'Then it has to be a rental car from the Halifax airport. I\'ll do the driving, if that helps.'],
                ['JUNO', 'It does. Tell her we\'ll take the Halifax seats before somebody else grabs them.']
              ],
              questions: [
                { id: 'L1.4', q: 'What does Arif think about driving from Toronto?', o: ['They would arrive too worn out to enjoy it.', 'It would be cheaper if they shared the driving.', 'It would be faster than waiting for tomorrow\'s flight.', 'The highways would be too icy overnight.'] },
                { id: 'L1.5', q: 'What does the agent arrange for them?', o: ['A change of destination at no extra cost', 'A refund for the cancelled Moncton flight', 'A free night at a Toronto airport hotel', 'A connecting flight from Halifax to Moncton'] },
                { id: 'L1.6', q: 'Why is the bus from Halifax unsuitable?', o: ['Juno would miss an earlier commitment.', 'It leaves Halifax before their plane even lands.', 'It does not stop in Moncton.', 'Arif prefers not to drive at night.'] }
              ]
            },
            {
              lines: [
                ['JUNO', 'Okay, we\'re officially on the Halifax flight. Now the car. The website showed a compact at fifty-five a day, but that\'s gone, so it\'s a mid-size at sixty-five.'],
                ['ARIF', 'And we\'d leave it in Moncton, right? Since we\'re flying home from there on Sunday.'],
                ['JUNO', 'Right, so there\'s a forty-dollar fee for dropping it off somewhere else. And we\'d have it for two days.'],
                ['ARIF', 'Split between us, that\'s not terrible. But the rental counter closes at one a.m., and we land at twelve thirty-five. That\'s tight.'],
                ['JUNO', 'I\'ll call and ask them to hold the car. But here\'s my other idea. Instead of driving to Moncton half asleep at one in the morning, let\'s book the hotel right next to the airport, get a few hours of sleep, and head out at six.'],
                ['ARIF', 'So we\'d roll into Moncton around eight thirty. That still gives you an hour and a half before the salon.'],
                ['JUNO', 'Exactly. And I\'m texting Camille right now, before she hears about the cancellation from someone else and panics.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will each of them pay for the rental car?', o: ['$85', '$75', '$170', '$105'] },
                { id: 'L1.8', q: 'Why does Juno suggest the airport hotel?', o: ['To avoid driving to Moncton overnight', 'To give the rental counter time to open', 'To be closer to the bus station', 'To meet Camille early in the morning'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { LIB: { name: 'Librarian', g: 'f', skin: '#f2cfb0', hair: '#555555', shirt: '#117a65', style: 'bun' }, TOMAS: { name: 'Tomas', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#a04000', style: 'short' } },
          segments: [{
            lines: [
              ['LIB', 'Hi there. What can I help you with?'],
              ['TOMAS', 'Hi. I just moved into the neighbourhood, and I\'d like to get a library card.'],
              ['LIB', 'Welcome! Cards are free for anyone who lives in the city. I\'ll need a photo ID and something showing your current address.'],
              ['TOMAS', 'Here\'s my driver\'s licence, but it still has my old address in Winnipeg. Would my lease work? It\'s on my phone.'],
              ['LIB', 'As long as your name and the new address are on it, that\'s fine. Okay, you\'re all set. You can have up to thirty items out at once.'],
              ['TOMAS', 'Thirty? I won\'t need that many. How long can I keep things?'],
              ['LIB', 'Books are three weeks. DVDs and video games are one week. You can renew online twice, and each renewal gives you another full loan period. The only exception is when someone else has put a hold on the item. Then it has to come back on the due date.'],
              ['TOMAS', 'And late fees? At my old library they added up fast.'],
              ['LIB', 'We got rid of daily fines a couple of years ago. But once something is thirty days overdue, it\'s considered lost, and you\'re billed for the replacement cost.'],
              ['TOMAS', 'Do I have to bring everything back to this branch?'],
              ['LIB', 'No, any of our nine branches will take it. There\'s also a drop box by the front doors if you come by after we close.'],
              ['TOMAS', 'Good to know. Oh, one more thing. I need to improve my French for work. Is there anything for that?'],
              ['LIB', 'There is. Your card gives you free access to a language-learning app, and there\'s a French conversation circle here every Tuesday at six thirty. It\'s drop-in, so you don\'t have to sign up.'],
              ['TOMAS', 'Tuesdays are perfect. I\'m off early that day.'],
              ['LIB', 'Oh, wait, I\'m sorry. I\'m looking at last year\'s calendar. The circle moved to Thursdays this fall. Same time, same room.'],
              ['TOMAS', 'Thursdays. Hmm. That\'s my late shift. I don\'t finish until seven.'],
              ['LIB', 'Well, the group runs until eight, and people come and go. Lots of them show up partway through.'],
              ['TOMAS', 'Then I\'ll set up the app tonight and come for the second half on Thursday. Thanks for your help.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Tomas\'s licence not enough on its own?', o: ['It shows an address he no longer uses.', 'It does not show his full legal name.', 'It has already expired.', 'It is not accepted as photo identification.'] },
              { id: 'L2.2', q: 'If no one reserves it, what is the longest Tomas could keep a video game?', o: ['Three weeks', 'One week', 'Two weeks', 'Nine weeks'] },
              { id: 'L2.3', q: 'In which situation must an item be returned on its due date?', o: ['Another member is waiting for it.', 'It has already been renewed once.', 'It is a DVD or a video game.', 'The member has thirty items out.'] },
              { id: 'L2.4', q: 'What is the library\'s current policy on late items?', o: ['Members are charged only when an item is so late it is written off.', 'Small daily fines are charged after thirty days.', 'Members are blocked from borrowing after one week.', 'Fines were removed for children but not adults.'] },
              { id: 'L2.5', q: 'What will Tomas probably do on Thursday evening?', o: ['Join the French group after it has started', 'Attend the French circle from six thirty', 'Leave work early to reach the library', 'Sign up for the French conversation circle'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#e3b28b', hair: '#3b2a20', shirt: '#566573', style: 'short' }, IVANA: { name: 'Ivana Petrovic', g: 'f', skin: '#f0c9a6', hair: '#6e2c00', shirt: '#1a5276', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Ivana Petrovic, a settlement counsellor at the Northshore Newcomer Centre. Ivana, welcome.'],
              ['IVANA', 'Thanks for having me.'],
              ['HOST', 'So what does a settlement counsellor actually do?'],
              ['IVANA', 'In short, I help people who\'ve just arrived in Canada get on their feet, and that usually comes down to two things: work and housing. I arrived as a newcomer myself eighteen years ago, so I still remember how overwhelming it all felt, not knowing where to even start.'],
              ['HOST', 'Let\'s start with work. What\'s the biggest barrier?'],
              ['IVANA', 'Honestly, the phrase "Canadian experience." People with ten or fifteen years in their profession apply for jobs and are told they need it, but of course they can\'t get it until someone gives them a first job here. It goes round and round.'],
              ['HOST', 'How do you help people get out of that loop?'],
              ['IVANA', 'Mainly through mentorship. We pair each newcomer with a volunteer who works in the same field here, so an accountant with an accountant, a nurse with a nurse.'],
              ['HOST', 'And what does a mentor actually do?'],
              ['IVANA', 'They explain how hiring really works in that industry, what employers look for that isn\'t in the job posting, and they often introduce them to people. About two-thirds of our mentees are working in their field within a year.'],
              ['HOST', 'And people in regulated professions, like engineers or doctors?'],
              ['IVANA', 'They need their credentials assessed, and my advice is to start before you even land. The process can easily take six months or more, and every month you wait is a month you might spend in a job well below your skills.'],
              ['HOST', 'Now, housing. Why is that so hard?'],
              ['IVANA', 'A lot of landlords ask for a credit history, and newcomers simply don\'t have one yet. We write reference letters and explain tenants\' rights. And I always give one warning: never send a deposit for an apartment you haven\'t seen in person. Fake rental ads target newcomers constantly, because the scammers know they can\'t easily check.'],
              ['HOST', 'Are your services free?'],
              ['IVANA', 'For permanent residents and their families, completely. Some temporary residents qualify for part of what we offer, too, so it\'s always worth asking.'],
              ['HOST', 'Anything new coming up?'],
              ['IVANA', 'Yes. Starting next month, we\'ll stay open until eight on Wednesdays, because so many of our clients work day shifts and simply can\'t come in during office hours.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why does Ivana mention her own arrival in Canada?', o: ['To show she understands her clients\' confusion', 'To explain why she chose to study counselling', 'To point out how much easier settling has become', 'To encourage listeners to volunteer as mentors'] },
              { id: 'L3.2', q: 'What point does Ivana make about "Canadian experience"?', o: ['It creates a cycle that is hard to break.', 'Most employers have stopped asking for it.', 'Professionals with long careers rarely need it.', 'It matters more in regulated professions.'] },
              { id: 'L3.3', q: 'What is suggested about the mentors?', o: ['They share inside knowledge of their industry.', 'They are usually retired professionals paid by the centre.', 'They hire most of their own mentees.', 'They must have been newcomers themselves.'] },
              { id: 'L3.4', q: 'Why does Ivana advise starting the credential assessment early?', o: ['The process can delay a career for months.', 'It is cheaper to complete it from abroad.', 'Employers will not interview people without it.', 'It cannot be started once you live in Canada.'] },
              { id: 'L3.5', q: 'Why does Ivana warn newcomers about deposits?', o: ['They are a common target of rental fraud.', 'Landlords rarely return deposits to tenants.', 'Deposits are illegal for most apartments.', 'Newcomers often pay more than the legal limit.'] },
              { id: 'L3.6', q: 'What change is the centre making next month?', o: ['Staying open later on one weekday', 'Opening on weekends for shift workers', 'Offering some services to temporary residents', 'Hiring more counsellors for day shifts'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#7a4b31', hair: '#120c08', shirt: '#283747', style: 'bald' } },
          segments: [{
            lines: [
              ['NEWS', 'Commuters who rely on the Harbourgate Bridge should prepare for longer trips, as a fourteen-month repair project gets underway this Saturday.'],
              ['NEWS', 'Crews will replace the bridge\'s concrete deck, which has not been fully rebuilt since the bridge opened in 1968. Throughout the project, two of the bridge\'s four lanes will be closed, leaving a single lane in each direction.'],
              ['NEWS', 'Officials estimate that about forty thousand vehicles cross the bridge on an average weekday.'],
              ['NEWS', 'The bridge will also close completely on Friday and Saturday nights, from eleven p.m. to six a.m., while heavy equipment is moved into place. During those closures, drivers will be sent to the Mill Road crossing, a detour that adds roughly twenty minutes.'],
              ['NEWS', 'Emergency vehicles will still be let through during the overnight closures. Trucks weighing more than ten tonnes will be banned from the bridge until the work is finished.'],
              ['NEWS', 'To ease the pressure, the regional transit authority will run the harbour ferry every fifteen minutes during rush hour, instead of every thirty. Monthly bus passes will be accepted on the ferry for as long as the work continues.'],
              ['NEWS', 'The sidewalk on the east side of the bridge will remain open to pedestrians and cyclists, although cyclists will be asked to walk their bikes across whenever crews are working close by.'],
              ['NEWS', 'Project engineer Diane Fortier admits the disruption will be frustrating. She says the schedule was stretched from twelve months to fourteen so that crews can avoid pouring concrete in the coldest weeks of winter.'],
              ['NEWS', 'But she says putting the work off would only raise the cost. "If we wait, we risk emergency repairs that could shut the bridge with no warning at all," she said.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Disruption expected from a long bridge project', 'A plan to build a second harbour bridge', 'A temporary ferry service for commuters', 'Complaints from drivers about the Mill Road detour'] },
              { id: 'L4.2', q: 'How many lanes of the bridge will be open on a weekday morning?', o: ['Two', 'Four', 'One', 'None'] },
              { id: 'L4.3', q: 'What will drivers have to do just after midnight on Saturday night?', o: ['Take a slower route across the harbour', 'Wait for crews to move their equipment', 'Share a single lane in each direction', 'Pay a toll to use the Mill Road crossing'] },
              { id: 'L4.4', q: 'Why will the ferry run more often?', o: ['To give commuters another way to cross', 'Because cyclists will not be allowed on the bridge', 'To carry trucks that are banned from the bridge', 'Because Mill Road will close at rush hour'] },
              { id: 'L4.5', q: 'What is Diane Fortier\'s view of the project?', o: ['Short-term inconvenience is better than a sudden failure later.', 'The schedule was set mainly to suit commuters.', 'The work should have been kept to twelve months.', 'The work could be finished faster with more crews.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Group project: proposal due Fri', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { ELODIE: { name: 'Elodie', g: 'f', skin: '#f0c9a6', hair: '#b5651d', shirt: '#c0392b', style: 'long' }, KWAME: { name: 'Kwame', g: 'm', skin: '#5e3a24', hair: '#120c08', shirt: '#2471a3', style: 'short' }, JIN: { name: 'Jin', g: 'm', skin: '#e8c39e', hair: '#1d1410', shirt: '#7f8c8d', style: 'short' } },
          segments: [{
            lines: [
              ['ELODIE', 'Okay, so Professor Grant wants our topic by Friday, and the one firm rule is that we have to use data we gather ourselves, here in the city. No just pulling national statistics off a website.'],
              ['KWAME', 'Right. So I keep thinking about food waste in the campus cafeteria. Every lunch I watch people throw out half a tray. We could literally weigh what gets thrown away.'],
              ['ELODIE', 'That\'s interesting, but I was really hoping we could do the electric scooters downtown. Everyone has an opinion about them, and the city still hasn\'t decided whether to keep the program.'],
              ['JIN', 'Scooters would be fun, but where would our numbers come from? The city only publishes scooter data once a year, and the latest report is almost two years old.'],
              ['ELODIE', 'We could survey students who ride them.'],
              ['JIN', 'Remember our survey last semester, though? We sent it to the whole program and got twelve replies. Twelve. Professor Grant said you can\'t conclude anything from that.'],
              ['ELODIE', 'Ugh. Don\'t remind me.'],
              ['KWAME', 'Here\'s the thing. I already spoke to the cafeteria manager, and she said we can weigh the bins at lunch for two weeks. So the data is basically guaranteed.'],
              ['JIN', 'That\'s a big deal. Real numbers, collected by us. That\'s exactly what Grant asked for.'],
              ['ELODIE', 'Okay, I\'m mostly convinced. But numbers alone won\'t tell us why people waste food. What if I go table to table with three or four quick questions while people are eating? It\'s a lot harder to ignore someone standing right in front of you than an email.'],
              ['KWAME', 'I love that. It gives us the reasons behind the numbers.'],
              ['JIN', 'And I\'ll turn it all into charts. Honestly, I\'d much rather sit with a spreadsheet than walk up to strangers.'],
              ['KWAME', 'Then I\'ll confirm the two weeks with the manager. Should we meet Thursday after class and write up the proposal?'],
              ['ELODIE', 'Let\'s do it at the library. I\'ll book one of the study rooms for three.']
            ],
            questions: [
              { id: 'L5.1', q: 'What are the students mainly trying to do?', o: ['Choose a topic for their project', 'Prepare for an exam on Friday', 'Plan a survey about scooters', 'Write a report on last semester'] },
              { id: 'L5.2', q: 'What did the professor require for the project?', o: ['The data must be collected locally.', 'Students must use national statistics.', 'The project must include a survey.', 'The topic must be about the campus.'] },
              { id: 'L5.3', q: 'Why does Jin have doubts about the scooter topic?', o: ['The available city data is out of date.', 'Most students do not use the scooters.', 'The city has already ended the program.', 'Scooters are not allowed on the campus.'] },
              { id: 'L5.4', q: 'Why does Jin mention last semester\'s survey?', o: ['To show a survey alone may not be reliable', 'To suggest they reuse the same questions', 'To remind Elodie that it was her idea', 'To argue that the professor dislikes all surveys'] },
              { id: 'L5.5', q: 'Why is Kwame\'s idea attractive to the group?', o: ['They already have permission to gather data.', 'The cafeteria manager will write the report.', 'Food waste is the professor\'s favourite topic.', 'It requires less work than the other ideas.'] },
              { id: 'L5.6', q: 'Why does Elodie think her survey will work better this time?', o: ['Students find a person harder to brush off than a message.', 'The questions will be sent to more students.', 'The cafeteria manager will hand it out.', 'It will offer a prize for completing it.'] },
              { id: 'L5.7', q: 'What can be inferred about Jin?', o: ['Jin is more at ease with numbers than with face-to-face contact.', 'Jin thinks the survey will fail again.', 'Jin wants to change the topic back to scooters.', 'Jin has already written part of the proposal.'] },
              { id: 'L5.8', q: 'What will happen on Thursday?', o: ['The three will write up their plan at the library.', 'Kwame will begin weighing the bins.', 'Jin will present the first charts.', 'They will meet the cafeteria manager.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Bike lanes or parking?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#a9714b', hair: '#2a1b12', shirt: '#6c3483', style: 'bun' } },
          segments: [{
            lines: [
              ['NARR', 'Across the country, cities are adding protected bike lanes, and very often the space comes from removing street parking. On busy main streets, that trade has become one of the most heated local debates.'],
              ['NARR', 'Urban planner Doctor Mateo Silva supports the change. He points to a study of one mid-sized Canadian city, where the number of people cycling on a downtown street tripled within two years of a protected lane opening, while car traffic on that street barely changed.'],
              ['NARR', 'Silva argues that many people would happily cycle but feel unsafe sharing the road with cars, and that a physical barrier gives them the confidence to try. Painted lines alone, he says, did almost nothing in the same study.'],
              ['NARR', 'He also rejects the idea that cyclists are bad for business. In his research, customers who arrived by bike spent less on each visit, but they came back more often, so over a month they spent at least as much as drivers.'],
              ['NARR', 'Silva\'s second argument is about safety for everyone. Streets with protected lanes, he says, tend to have slower traffic and fewer serious collisions, including those involving pedestrians, because drivers handle narrower lanes more carefully.'],
              ['NARR', 'Bakery owner Joanne Lister is not persuaded. Under the city\'s current plan, her shop on Queen Street would lose eight of the twelve parking spaces out front.'],
              ['NARR', 'Many of her regulars are seniors, she says, and others pick up large cake orders that simply cannot go home on a bicycle.'],
              ['NARR', 'Lister also points out that cycling drops sharply in winter, when, she says, the lanes sit mostly empty while drivers circle the block looking for a spot.'],
              ['NARR', 'Her second concern is deliveries. Trucks that bring flour and other supplies to the shops on Queen Street would have nowhere to stop, she says, and would end up double-parking in the one remaining traffic lane.'],
              ['NARR', 'Silva answers that winter cycling is lower but far from zero, and that it grows in cities that clear the lanes of snow. He also suggests that a few parking spaces could become loading zones in the morning, when most deliveries arrive.'],
              ['NARR', 'Lister admits that Silva\'s spending figures may hold for cafés and clothing shops. But a bakery, she says, depends on customers who buy a lot at once, and those are exactly the customers who drive.'],
              ['NARR', 'She insists she is not against bike lanes. She would just like the city to put them on quieter side streets that run parallel to the main road.'],
              ['NARR', 'Silva doubts that would work. Cyclists, he says, want to reach the same shops and offices as everyone else, and lanes on side streets tend to be ignored because they add distance to every trip.'],
              ['NARR', 'The city will hold a public meeting early next month, and council expects to vote on the plan in the spring. Until then, residents can share their views through an online survey, which closes at the end of this month.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Giving up parking spaces to make room for cyclists', 'The rising cost of parking downtown', 'Safety rules for city cyclists', 'Delivery problems on Queen Street'] },
              { id: 'L6.2', q: 'Why does Dr. Silva mention the study?', o: ['To show that safer lanes can attract riders', 'To prove that cycling reduces downtown car traffic', 'To show that painted lines work well enough', 'To compare Canadian and foreign cities'] },
              { id: 'L6.3', q: 'According to Silva, how do customers who cycle behave?', o: ['Their smaller purchases are balanced by more frequent visits.', 'They spend more on each visit than drivers do.', 'They visit less often than drivers.', 'They shop mostly at cafés and clothing stores.'] },
              { id: 'L6.4', q: 'Why does Lister mention seniors and cake orders?', o: ['To show that many customers depend on driving', 'To explain why she wants loading zones', 'To show that her sales have fallen recently', 'To argue that parking fees are too high'] },
              { id: 'L6.5', q: 'What is Lister\'s overall position?', o: ['She accepts bike lanes, but not on her street.', 'She opposes cycling infrastructure entirely.', 'She wants loading zones instead of bike lanes.', 'She thinks bike lanes should be removed every winter.'] },
              { id: 'L6.6', q: 'What can residents do at this point?', o: ['Submit their views before the end of the month', 'Attend the public meeting later this month', 'Vote on the plan next month', 'Email Dr. Silva with questions'] }
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
          passage: '<h3>Message</h3><p>Hi Andre,</p><p>I hope you, Kezia and the boys are doing well! I\'m writing because I\'ve finally done it: the Campbell family reunion is booked. After three years of everyone saying "we should really do this," it\'s actually happening, and I can stop feeling guilty every time someone brings it up.</p><p>We\'ll be at Pine Hollow Camp near Huntsville over the August long weekend, from Friday afternoon until Monday morning. I\'ve rented three large cabins right on the lake, and we\'ll have the screened-in dining hall to ourselves for meals. It works out to $120 per person aged twelve and over for the whole weekend, and children under twelve stay free. The camp needs full payment from me by June 20, so please send me your share by e-transfer no later than June 15. If anyone has to cancel after that, I\'m afraid I can\'t give the money back, because the camp won\'t refund me either.</p><p>The date isn\'t a coincidence. Grandpa Leon turns ninety that Saturday, and I\'d like to surprise him with a slideshow after dinner. This is where you come in. Aunt Rose told me her old photo albums went to your place when she moved into the seniors\' residence, and I know you have a scanner. Could you scan some pictures of Grandpa as a young man, especially from his years working on the railway? He talks about those days more than anything else. And please don\'t breathe a word of this to him! He hates any fuss, and if he hears about it, he\'ll insist that we cancel the whole thing.</p><p>For Saturday dinner, I\'m thinking potluck: each family brings one main dish and one dessert. I\'m secretly hoping your mom will make her coconut bread, since nobody has tasted it since the last reunion.</p><p>Sadly, Uncle Desmond can\'t make it. He\'s having knee surgery in July and won\'t be cleared to travel by then, so we\'ll set up a video call during the party so he can still be part of it.</p><p>One last thing, and feel free to say no: could you drive Grandpa up from Toronto? Yours is the only van in the family, and he says the bus is hard on his back. If it doesn\'t suit you, I\'ll find another way.</p><p>Talk soon,<br>Marisol</p>',
          questions: [
            { id: 'R1.1', q: 'The opening of Marisol\'s message suggests that she', o: ['feels a weight has lifted now that the event is set.', 'expects few relatives to come after so many years.', 'is annoyed that no one else offered to organize it.', 'still feels guilty that the plans took three years.'] },
            { id: 'R1.2', q: 'Marisol asks for the money by June 15 most likely in order to', o: ['collect it before her own deadline with the camp.', 'get a lower price per person from the camp.', 'give relatives time to cancel for a full refund.', 'find out how many children under twelve will come.'] },
            { id: 'R1.3', q: 'A relative who drops out of the reunion in early July would probably', o: ['not get back what they paid.', 'get a refund directly from the camp.', 'lose only a small part of their share.', 'have to pay Marisol a second time.'] },
            { id: 'R1.4', q: 'Marisol especially wants pictures from Grandpa\'s working years because', o: ['he enjoys recalling that period most.', 'Aunt Rose took most of her photos then.', 'he has asked to see them at the party.', 'Andre has already scanned the others.'] },
            { id: 'R1.5', q: 'Marisol is concerned that if Grandpa Leon learns of the plan, he will', o: ['ask for the celebration to be dropped.', 'refuse to travel to the camp by bus.', 'want to choose the photos himself.', 'tell Uncle Desmond about the surprise.'] },
            { id: 'R1.6', q: 'The tone of Marisol\'s final request is best described as', o: ['considerate, leaving Andre free to decline.', 'urgent, since the bus is already full.', 'apologetic, as she feels she asks too much.', 'firm, because Andre owns the only van.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Marisol,</p><p>This is fantastic news, and congratulations on finally pinning everyone down! Kezia and I will definitely be there with both boys. Since Theo turned fourteen in March and Sam is nine, I\'ll send you [[R1.7]] by e-transfer this week, well before your deadline.</p><p>I\'d be happy to help with the slideshow. I\'ve still got [[R1.8]] in boxes in the basement, so I\'ll start scanning this weekend. I\'m fairly sure I saw a picture of Grandpa in uniform, which would be perfect, since you said [[R1.9]] is what he loves talking about. Don\'t worry, my lips are sealed.</p><p>As for food, I asked Mom about [[R1.10]]. She laughed and said it was about time someone did, and she\'s planning to bake two loaves.</p><p>Of course I\'ll drive Grandpa. There\'s lots of room in the van, and a long ride on the bus would be [[R1.11]]. I\'ll pick him up Friday morning so we arrive in the afternoon. The boys are already asking whether the camp has canoes, so I suspect we won\'t see much of them all weekend.</p><p>See you in August,<br>Andre</p>',
          blanks: [
            { id: 'R1.7', o: ['$360', '$240', '$480', '$120'] },
            { id: 'R1.8', o: ['the collection Rose left with us', 'Grandpa\'s letters from his youth', 'the pictures from our last reunion', 'Uncle Desmond\'s old camera slides'] },
            { id: 'R1.9', o: ['his time with the trains', 'his ninetieth birthday', 'his first trip to Huntsville', 'his move to the residence'] },
            { id: 'R1.10', o: ['that treat you were hoping for', 'our family\'s main dish', 'a cake for Grandpa\'s birthday', 'cooking for the whole potluck'] },
            { id: 'R1.11', o: ['too uncomfortable for him', 'too expensive for him', 'too slow for the boys', 'too risky for his knee'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Westbrook Language Centre: Fall Classes</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Class</th><th>Level</th><th>Day and time</th><th>Weeks</th><th>Class fee</th><th>Materials</th></tr></thead><tbody>' +
            '<tr><td>Italian Conversation</td><td>Beginner</td><td>Monday and Wednesday 6:00 to 7:30 p.m.</td><td>10</td><td>$280</td><td>$35</td></tr>' +
            '<tr><td>Italian Conversation</td><td>Intermediate</td><td>Tuesday and Thursday 6:00 to 7:30 p.m.</td><td>10</td><td>$280</td><td>$35</td></tr>' +
            '<tr><td>English for the Workplace</td><td>CLB 5 to 7</td><td>Saturday 9:30 a.m. to 12:30 p.m.</td><td>8</td><td>$240</td><td>Included</td></tr>' +
            '<tr><td>Spanish for Travellers</td><td>Beginner</td><td>Thursday 7:00 to 8:30 p.m.</td><td>6</td><td>$150</td><td>$20</td></tr>' +
            '<tr><td>Mandarin Basics</td><td>Beginner</td><td>Saturday 1:00 to 3:00 p.m.</td><td>8</td><td>$220</td><td>$40</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Register on or before August 31 to save 15% on the class fee. Materials are not discounted.</li><li>Seniors (65 and over) pay half the class fee. The senior rate cannot be combined with the early registration discount.</li><li>Intermediate classes require a free 20-minute placement test before registration.</li><li>Withdraw before the second class for a refund of the class fee, minus a $25 administration fee.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Joon,</p><p>I picked up the fall schedule from Westbrook. You said your shifts only leave you free on weekends, so English for the Workplace on [[R2.1]] looks perfect, and you won\'t need to buy a book.</p><p>As for me, I want to get back into Italian. I took two years of it in high school, so I\'d like to skip the beginner level, but first I have to [[R2.2]]. If I register before the end of August, the class itself will cost me [[R2.3]], plus $35 for the book.</p><p>My mom, who is 67, wants to try Spanish before her trip to Mexico. Even if she registers early, the senior rate works out better for her, so she\'ll pay [[R2.4]] for the class.</p><p>And don\'t worry if you\'re not sure about committing. If you decide after the first class that it\'s not for you, you\'ll get your class fee back except for [[R2.5]].</p><p>Helena</p>',
          blanks: [
            { id: 'R2.1', o: ['Saturday mornings', 'Saturday afternoons', 'weekday evenings', 'Thursday evenings'] },
            { id: 'R2.2', o: ['have my level checked', 'buy the Italian book', 'register before August', 'finish the beginner class'] },
            { id: 'R2.3', o: ['$238', '$280', '$273', '$140'] },
            { id: 'R2.4', o: ['$75', '$95', '$127.50', '$150'] },
            { id: 'R2.5', o: ['a $25 charge', 'the book cost', '15 percent', 'the first class'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Someone who is free on only one weekday evening per week would most likely choose', o: ['Spanish for Travellers.', 'Italian Conversation (Beginner).', 'English for the Workplace.', 'Mandarin Basics.'] },
            { id: 'R2.7', q: 'A 70-year-old who registers for Mandarin Basics on August 15 will', o: ['pay half the class fee and the full price for materials.', 'get 15% off and then half off the class fee.', 'pay half price for both the class and the materials.', 'have to choose the early discount, since it is larger.'] },
            { id: 'R2.8', q: 'A student in Italian Conversation (Beginner) decides after the second class that it is not for her. Based on the notes, she', o: ['no longer qualifies for a refund of the class fee.', 'gets her class fee back, minus $25.', 'gets back only the $35 she paid for the book.', 'can get a refund if she takes the placement test.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Tides of the Bay of Fundy</h3><p><b>A.</b> The Bay of Fundy, which lies between New Brunswick and Nova Scotia, is known for having the highest tides on Earth. At Burntcoat Head, near the eastern end of the bay, the difference between low and high tide has been measured at more than sixteen metres, roughly the height of a five-storey building. Twice a day, about 160 billion tonnes of seawater flow into and out of the bay, which is more than the combined flow of all the freshwater rivers in the world. Tide tables for the bay are published a year in advance, and many local businesses plan their days around them.</p><p><b>B.</b> Scientists explain these extreme tides with two features of the bay. The first is its shape. The bay is long, and it becomes both narrower and shallower toward its end, so the incoming water is squeezed and forced upward. Near the mouth of the bay, by contrast, the tide rises only a few metres. The second is a natural effect called resonance. Water in the bay rocks back and forth in a cycle of about thirteen hours, which is very close to the twelve-and-a-half-hour cycle of the ocean tides. Like a child on a swing who is pushed at just the right moment, each tide adds to the motion of the one before.</p><p><b>C.</b> The tides shape daily life along the shore. At low tide, visitors to places such as the Hopewell Rocks can walk on the ocean floor among tall rock formations, some shaped like giant flowerpots, which the rising water covers to a depth of more than ten metres a few hours later, but they are warned to keep an eye on the clock, because the water returns quickly and can cut off anyone who wanders too far. In some fishing villages, boats sit on the mud twice a day, waiting for the sea to come back. The wide mud flats left by the falling tide also matter to wildlife. Every summer, huge numbers of small shorebirds stop here on their long migration to South America, feeding on tiny shrimp in the mud until they have nearly doubled their weight.</p><p><b>D.</b> Because so much water moves so quickly, the bay has long attracted interest as a source of clean energy. A tidal power station at Annapolis Royal, which trapped water behind a dam and released it through a single large turbine, produced electricity for more than thirty years before it closed in 2019. More recently, companies have tested underwater turbines in the Minas Passage, where the currents are especially strong. Progress has been slow: the powerful currents have damaged equipment, and fishing groups have raised concerns about how turbines might affect fish. Supporters believe that if these problems can be solved, the bay could one day supply power to thousands of homes.</p>',
          questions: [
            { id: 'R3.1', q: 'The natural rhythm of the water in the bay closely matches that of the ocean tides.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Some animals use the area to build up energy before a long journey.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Newer attempts to generate electricity have run into practical problems.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'The volume of water moving in the bay exceeds that of all the world\'s rivers together.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'The tides at the Hopewell Rocks rise even higher than those at Burntcoat Head.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'People exploring the exposed sea floor need to pay attention to the time.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'The water gets less deep the farther it travels into the bay.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'The tidal power station at Annapolis Royal was shut down because of its effect on fish.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'At one site, the rise of the water can equal the height of a building several storeys high.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should We Tax Sugary Drinks?</h3><p>Several Canadian communities are considering a tax on sugar-sweetened beverages such as soft drinks, energy drinks and sweetened iced teas. One proposal under discussion would add twenty cents to the price of every litre, raising the cost of a two-litre bottle by forty cents. Both sides of the debate accept that many Canadians consume far more sugar than health guidelines recommend. Where they part ways is on whether a tax is the right response.</p><p>Supporters see the tax as a simple way to improve public health. Dr. Amara Okeke, a nutrition researcher, notes that sugary drinks are the largest single source of added sugar in many people\'s diets, and that calories in liquid form do not make people feel full the way solid food does. "When a drink becomes more expensive, people buy less of it," she says. "We saw it with tobacco, and early results from other countries show the same pattern with soft drinks." She adds that the money raised could pay for programs such as free fruit and vegetables in schools or new water fountains in parks.</p><p>Opponents argue that the tax would hit the wrong people. Gord Michaud, who owns three convenience stores in a small town, says lower-income families spend a larger share of their budget on groceries, so they would feel any price increase the most. "A family that\'s already stretched doesn\'t need another forty cents on every bottle," he says. He also worries that shoppers living near a border would simply drive to the next town or province to stock up, taking the rest of their shopping with them. Unlike large supermarket chains, he adds, small stores like his cannot afford to absorb a price increase to keep customers happy. In his view, clear labels and education in schools would change habits without punishing anyone.</p><p>Dr. Okeke responds that lower-income households are also more likely to suffer from diabetes and dental disease, so they have the most to gain from drinking less sugar. She agrees, however, that a tax by itself is not enough. "Labels and education help, but they work best when the healthy choice is also the cheaper choice," she says.</p><p>Priya Raman, a health economist who has studied similar taxes abroad, takes neither side on whether a tax should exist, but she believes the current proposal is poorly designed. "A flat charge per litre treats a lightly sweetened iced tea exactly like an energy drink with three times the sugar," she points out. Where governments have instead set higher rates for drinks with more sugar, she says, manufacturers quietly changed their recipes before the tax even started, so shoppers barely noticed a difference in price.</p><p>Michaud remains doubtful that the money would be spent as promised. "Once a government gets used to a new source of income, it rarely ends up where people were told it would go," he says. If a tax is introduced anyway, he would like it to be reviewed after three years to see whether people are actually drinking less.</p>',
          questions: [
            { id: 'R4.1', q: 'The main purpose of the first paragraph is to', o: ['outline the plan and what both camps accept.', 'argue that Canadians should drink less soda.', 'explain why the tax has already been approved.', 'compare drink prices in several communities.'] },
            { id: 'R4.2', q: 'Dr. Okeke mentions tobacco in order to', o: ['show that higher prices have cut demand before.', 'claim that soft drinks are as harmful as smoking.', 'propose that the tax fund programs to quit smoking.', 'point out that tobacco taxes hurt small stores.'] },
            { id: 'R4.3', q: 'Michaud is most likely concerned that, under the tax, his stores will', o: ['lose customers to nearby areas without it.', 'be forced to stop selling energy drinks.', 'pay a higher rate than supermarket chains.', 'have to print new labels for every bottle.'] },
            { id: 'R4.4', q: 'Dr. Okeke responds to the claim that the tax is unfair to poorer families by saying that', o: ['those families stand to benefit most.', 'they would pay only forty cents more.', 'they should be exempt from paying it.', 'they already drink less soda than others.'] },
            { id: 'R4.5', q: 'Both Okeke and Michaud would agree that', o: ['teaching people about sugar is worthwhile.', 'a review after three years is essential.', 'the money will reach the promised programs.', 'flat rates per litre are the fairest design.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I work as a dental hygienist, and I see the effects of sugary drinks every day, so I lean toward Dr. Okeke\'s side. Her point that liquid calories [[R4.6]] matches what my patients tell me: they finish a large soda and are hungry again an hour later. I also like her idea of using the revenue for [[R4.7]], so that people have a free and healthy option when they are out for a walk.</p><p>That said, Mr. Michaud raises a fair concern. In my town, the next province is only fifteen minutes away, and I can easily imagine families [[R4.8]]. If a tax goes ahead, I agree with him that [[R4.9]] after a few years. I would also borrow Ms. Raman\'s idea and [[R4.10]], since a flat charge per litre seems unfair to people who already choose lightly sweetened drinks. With those conditions attached, I would support the tax.</p>',
          blanks: [
            { id: 'R4.6', o: ['fail to satisfy hunger as meals do', 'cost less than other sweet snacks', 'are mostly bought by schoolchildren', 'cause more harm than cigarettes do'] },
            { id: 'R4.7', o: ['drinking water in public spaces', 'discounts at small corner stores', 'dental clinics in poorer areas', 'clearer labels on every bottle'] },
            { id: 'R4.8', o: ['crossing over to do all their errands', 'switching to cheaper bottled water', 'cutting back on fruit and vegetables', 'asking local stores to absorb the cost'] },
            { id: 'R4.9', o: ['its impact on habits should be checked', 'the rate should be raised gradually', 'the revenue should go to store owners', 'the labels should be redesigned again'] },
            { id: 'R4.10', o: ['tie the rate to each product\'s sweetness', 'apply one rate to every litre sold', 'exempt iced teas from the tax entirely', 'let manufacturers set their own rates'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Your eight-year-old\'s class is going to a farm and corn maze next Thursday. The permission form says that lunch will be served by the farm\'s snack bar and must be signed and returned by Monday. Your child has a serious nut allergy. You work that day, so you cannot go along as a volunteer, and your child is very excited about the trip.</p><p>Write an email to your child\'s teacher. In your email, do the following:</p><ul><li>Say which trip you are writing about and what the form told you.</li><li>Explain your concern and why you cannot simply join the trip yourself.</li><li>Suggest how the school could keep your child safe without making them feel singled out.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city\'s transit service will have extra money in next year\'s budget and is asking riders how it should be used. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Make buses more frequent, so that most routes run every 10 minutes instead of every 20 minutes. Fares would stay the same, and two little-used late-night routes would be cut.' },
            { key: 'B', label: 'Option B', text: 'Lower fares, so that a single ride costs $2.00 instead of $3.25 and a monthly pass costs $60 instead of $95. Buses would still run every 20 minutes, and rush-hour crowding would likely get worse.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you enjoy visiting.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to buy their first car but does not know much about cars. They have saved $8,000 and need the car within three weeks to start a new job outside the city, where there is no bus service. Give your friend advice on how to choose and buy one.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you met someone who had a strong influence on you. Who was this person, how did they influence you, and what is one thing you do differently today because of them?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/I/scene.jpg" alt="A busy grocery store on a weekend afternoon">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/I/scene.jpg" alt="A busy grocery store on a weekend afternoon">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family is deciding what to do for dinner this Friday. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Cook at home', image: '<img src="tests/img/I/opt_A.jpg" alt="Photo: Cook at home">', facts: ['Groceries: about $35', '1.5 hours to shop and cook after work', 'Healthy recipe of your choice', 'Someone still has to do the dishes'] },
            { key: 'B', title: 'Order takeout', image: '<img src="tests/img/I/opt_B.jpg" alt="Photo: Order takeout">', facts: ['About $70 with delivery and tip', 'Up to 60 minutes on Friday nights', 'Healthy bowls and salads available', 'No cooking and no dishes'] }
          ],
          third: { key: 'C', title: 'Buffet restaurant', image: '<img src="tests/img/I/opt_C.jpg" alt="Photo: Buffet restaurant">', facts: ['$28 per adult, $14 per child', '15-minute drive', 'Over 60 dishes and a dessert bar', 'Busy on Fridays: up to a 30-minute wait'] },
          persuade: 'Your family member wants to go to the buffet restaurant instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You borrowed your sister\'s expensive camera for a weekend trip. While you were hiking, you dropped it, and now the lens is cracked. Your sister needs the camera next Saturday, because she has been paid to take photos at a friend\'s wedding.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your sister. Explain what happened and what you will do about it.</p><p><b>Option B:</b> Talk to a friend who owns a similar camera. Ask your friend to lend it to your sister for the wedding.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Your company is reviewing its retirement policy. Some long-serving employees want to keep working past 65 because they enjoy their jobs and need the income. Younger employees say that senior positions almost never open up, so they leave for other companies. Your manager has asked for your opinion: should workers be expected to retire at 65, or keep working for as long as they are able and want to? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at an outdoor equipment store and see this unusual tent displayed on top of a car. Call your friend who loves camping. Your friend drives a small hatchback with no roof rack and has about $1,000 to spend on new gear. Describe the tent and explain whether you think your friend should buy it.', image: '<img src="tests/img/I/object.jpg" alt="An unusual tent mounted on top of a car outside an outdoor equipment store">' }
      ]
    }
  });
})();
