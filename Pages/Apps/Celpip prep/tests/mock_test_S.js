/* Rowe CELPIP Mock Exam: Test S content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (mix of CLB 9 to 11 items with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/S/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'S',
    title: 'Mock Test S',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { FELIX: { name: 'Felix', g: 'm', skin: '#f2cfb0', hair: '#8d5a2b', shirt: '#5e35b1', style: 'short' }, YARA: { name: 'Yara', g: 'f', skin: '#c98c64', hair: '#1d1410', shirt: '#00897b', style: 'curly' } },
        segments: [{
          lines: [
            ['FELIX', 'The farmers\' market closes at one. If we drive, we\'ll be there in ten minutes.'],
            ['YARA', 'And then spend twenty minutes looking for parking. Last Saturday I gave up and came home.'],
            ['FELIX', 'So we walk? That\'s forty minutes each way, and we\'re buying a whole week of groceries.'],
            ['YARA', 'Let\'s take the bikes and the trailer. It holds more than we ever buy, and there\'s a bike rack right at the entrance.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Yara not want to drive to the market?', o: ['Finding a parking spot takes too long.', 'The market closes before they could arrive.', 'The car is too small for a week of groceries.', 'She would rather walk than ride a bicycle.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { CHIAMAKA: { name: 'Chiamaka', g: 'f', skin: '#6b4226', hair: '#120c08', shirt: '#00695c', style: 'bun' }, BENOIT: { name: 'Benoit', g: 'm', skin: '#e8c3a0', hair: '#5a3825', shirt: '#ef6c00', style: 'short' } },
          segments: [
            {
              lines: [
                ['CHIAMAKA', 'Benoit, thanks for coming in. I\'ve got bad news about Friday\'s trip to the nature museum. The bus company called this morning. They\'ve double-booked our bus.'],
                ['BENOIT', 'Double-booked? We reserved that bus back in September.'],
                ['CHIAMAKA', 'I know. Apparently a new dispatcher put a hockey tournament on top of us. They apologized, but they don\'t have another driver free until next Wednesday.'],
                ['BENOIT', 'Can we just move the trip to Wednesday, then?'],
                ['CHIAMAKA', 'I already asked the museum. Wednesday\'s full with other schools. Their next opening for a group our size is in June, and by then the dinosaur exhibit will be gone. It closes at the end of May.'],
                ['BENOIT', 'So June\'s out. The kids have spent the whole unit getting ready for that exhibit.'],
                ['CHIAMAKA', 'Exactly. And all forty-eight permission forms say Friday. Parents have booked time off to volunteer. Honestly, whatever we come up with, I\'d really like to keep the date.'],
                ['BENOIT', 'Okay. Then we need another way to get there. Give me a minute to think.']
              ],
              questions: [
                { id: 'L1.1', q: 'What has caused the problem with Friday\'s trip?', o: ['The bus company made a scheduling mistake.', 'The museum cancelled the class\'s booking.', 'A hockey tournament has closed the museum.', 'The usual bus driver is away until Wednesday.'] },
                { id: 'L1.2', q: 'Why is a visit in June not a good option?', o: ['The exhibit the class prepared for will have closed.', 'The museum is fully booked with other schools all month.', 'The permission forms would expire before then.', 'The bus company has no drivers free in June.'] },
                { id: 'L1.3', q: 'What does Chiamaka want to do?', o: ['Find another way to travel on the original day', 'Move the trip to the following Wednesday', 'Send new permission forms home for June', 'Ask another school to share its bus with them on Friday'] }
              ]
            },
            {
              lines: [
                ['BENOIT', 'What about city transit? The number seven stops right outside the school, and it goes downtown.'],
                ['CHIAMAKA', 'I thought about that. But it\'s forty-eight kids on a regular bus with regular passengers. And the stop at the other end is a fifteen-minute walk from the museum.'],
                ['BENOIT', 'Fifteen minutes is nothing for grade fours. And transit has a group fare for schools. I think it\'s two dollars a student, and adults ride free with a group.'],
                ['CHIAMAKA', 'It was two dollars last year. They raised it in January, so it\'s two-fifty now. And that\'s per ride, so we\'d pay it going there and again coming back.'],
                ['BENOIT', 'Still cheaper than the bus company. But isn\'t the board\'s rule stricter for transit trips? One adult for every six kids instead of one for every ten?'],
                ['CHIAMAKA', 'Right. So we\'d need eight adults, and right now I have five, counting me.'],
                ['BENOIT', 'Leave that with me. Three more parents is doable. Our parent group chat is pretty active, and a couple of people already asked if we needed extra help.']
              ],
              questions: [
                { id: 'L1.4', q: 'What will the student fares cost for the whole trip?', o: ['$240', '$120', '$192', '$96'] },
                { id: 'L1.5', q: 'Why is Chiamaka unsure about taking city transit?', o: ['The students would ride with the public and still need to walk.', 'The bus stop outside the school is no longer in service.', 'Adults would have to pay the full price to ride with a group.', 'The transit company does not normally accept school groups.'] },
                { id: 'L1.6', q: 'What does Benoit offer to do?', o: ['Look for more adults to join the trip', 'Pay the transit fares for the adults', 'Ask the school board to change its supervision rule', 'Drive some of the students himself'] }
              ]
            },
            {
              lines: [
                ['CHIAMAKA', 'Okay, I just spoke to the transit office. There\'s good news and bad news.'],
                ['BENOIT', 'Bad news first.'],
                ['CHIAMAKA', 'Groups can\'t board between eight and nine-thirty, because that\'s rush hour. So we\'d leave at nine-forty instead of nine.'],
                ['BENOIT', 'And the good news?'],
                ['CHIAMAKA', 'If we book ahead, they\'ll send an extra bus just for us on the way back. No other passengers. So at least the trip home will be calmer.'],
                ['BENOIT', 'That\'s something. But leaving at nine-forty, will we still have time to see everything?'],
                ['CHIAMAKA', 'Not everything. We\'ll have to skip the mineral gallery and go straight to the dinosaurs. Honestly, that\'s all they talk about anyway.'],
                ['BENOIT', 'And lunch? I assume we can\'t eat on a city bus.'],
                ['CHIAMAKA', 'No, but the museum has a lunchroom for school groups. I\'ll book it for noon.'],
                ['BENOIT', 'Then let\'s do it. Can I write to the families about the change, though? I don\'t want anyone hearing about city buses from a nine-year-old first.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why will the group leave later than planned?', o: ['Groups cannot use transit at the busiest time.', 'The extra bus is only free after nine-thirty.', 'The museum does not open until nine-forty.', 'The students must walk to a different stop.'] },
                { id: 'L1.8', q: 'Why does Benoit want to write to the families?', o: ['He would rather parents not learn of the change secondhand.', 'He thinks the children will be upset about missing the gallery.', 'Families must sign new forms for the transit trip.', 'The teacher has asked him to collect more money.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { TECH: { name: 'Help desk technician', g: 'm', skin: '#d6a07a', hair: '#333333', shirt: '#37474f', style: 'short' }, FATIMA: { name: 'Fatima', g: 'f', skin: '#b07850', hair: '#1d1410', shirt: '#ad1457', style: 'long' } },
          segments: [{
            lines: [
              ['FATIMA', 'Hi, is this the help desk? I\'m locked out of my laptop, and I\'m presenting to a client in forty minutes.'],
              ['TECH', 'Okay, let\'s get you sorted. I\'m Desmond. Can I have your employee number?'],
              ['FATIMA', 'Four, four, seven, one, nine. Fatima Hassan, in the Calgary office.'],
              ['TECH', 'Thanks. I see the account locked at eight fifty-two after five failed sign-ins. Did you change your password recently?'],
              ['FATIMA', 'Yesterday. The system made me. And this morning I typed the old one out of habit, a few times, I guess.'],
              ['TECH', 'That\'d do it. Okay, I\'ve unlocked it. Just so you know, the system won\'t accept any of your last five passwords, so the old one is gone for good.'],
              ['TECH', 'Now, when you sign in, it\'ll ask for a code from the authenticator app on your phone.'],
              ['FATIMA', 'Ah. That\'s my other problem. I got a new phone on the weekend, and the app didn\'t come over. The old phone\'s in a drawer at home, and I don\'t drive.'],
              ['TECH', 'No panic. I can give you a one-time code that works for twelve hours. But first I have to confirm who you are. Who\'s your manager?'],
              ['FATIMA', 'Deborah Lam.'],
              ['TECH', 'Great. And what floor do you sit on?'],
              ['FATIMA', 'The sixth. Well, no, actually, we moved last month. I\'m on the fourth now.'],
              ['TECH', 'Fourth, yes, that matches what I have. Here\'s your code: eight, two, six, four, one, nine.'],
              ['FATIMA', 'Okay, typing it in. And I\'m in! Thank you so much.'],
              ['TECH', 'You\'re welcome. But that code only gets you through today. Tomorrow, you\'ll need the app working on the new phone. If you bring it to the help desk on the second floor, it takes about five minutes.'],
              ['FATIMA', 'I\'ve got meetings for the rest of the morning. Could I come over at lunch today?'],
              ['TECH', 'Sorry, we close from twelve to one. But we\'re open again until five.'],
              ['FATIMA', 'Then I\'ll come down once my two o\'clock is over. It never runs long.'],
              ['TECH', 'Perfect. I\'ll make a note on your file so whoever\'s here knows what you need.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Fatima calling the help desk?', o: ['She is locked out shortly before a client meeting.', 'She cannot remember the password she created.', 'Her new phone will not connect to the office network.', 'Her laptop stopped working during a presentation.'] },
              { id: 'L2.2', q: 'What caused Fatima\'s account to be locked?', o: ['She kept entering a password that no longer worked.', 'The system forced her to change her password today.', 'Someone else tried several times to sign in as her.', 'Her new phone sent the wrong code five times.'] },
              { id: 'L2.3', q: 'Why can Fatima not use the authenticator app?', o: ['It is not set up on the phone she now carries.', 'She left her new phone in a drawer at home.', 'The app does not work properly on the office network.', 'Her manager has not approved the app yet.'] },
              { id: 'L2.4', q: 'Why does the technician ask which floor Fatima sits on?', o: ['To make sure he is talking to the right person', 'To send someone up to her desk to fix the laptop', 'To tell her where the help desk can be found', 'To check whether she is near her meeting room'] },
              { id: 'L2.5', q: 'When will Fatima probably visit the help desk?', o: ['In the afternoon, after one of her meetings', 'Late in the morning, between two meetings', 'During her lunch hour, from twelve to one', 'Tomorrow morning, before her first meeting'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#f0c9a6', hair: '#6d4c41', shirt: '#6a1b9a', style: 'long' }, EWAN: { name: 'Ewan MacLeod', g: 'm', skin: '#e3b28b', hair: '#a0522d', shirt: '#33691e', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Ewan MacLeod, who hosts the overnight show on Whitehorse\'s community radio station. Ewan, thanks for coming in at a normal hour for once.'],
              ['EWAN', 'Ha, yes, it\'s strange seeing daylight. I\'m on from midnight to three, four nights a week.'],
              ['HOST', 'And you\'re a volunteer.'],
              ['EWAN', 'Everyone is. There are about forty of us. During the day I repair heavy equipment for a road crew.'],
              ['EWAN', 'The station runs on listener donations and a bingo night every second Thursday, which, believe it or not, brings in more than the donations do.'],
              ['HOST', 'Your show is best known for the messages. How do those work?'],
              ['EWAN', 'Well, a lot of people up here work in places with no cell service, at mining camps or out on the land. But most of them have a radio.'],
              ['EWAN', 'So people call in, and I read the messages out. "Tell Marie at the camp her daughter passed her driving test." That kind of thing.'],
              ['HOST', 'In the age of smartphones, that still happens?'],
              ['EWAN', 'More than you\'d think. Some nights I read thirty messages. Satellite phones exist, sure, but they\'re expensive, and a radio costs fifty bucks.'],
              ['HOST', 'You were on the air during the wildfire evacuation two summers ago.'],
              ['EWAN', 'I was. We stayed on for thirty hours straight. The power went out in our building the first night, and we kept going on a generator that a listener drove over from his farm.'],
              ['EWAN', 'People were calling in to say which roads were open and who had room for families to stay. I don\'t think I\'ve ever felt so useful.'],
              ['HOST', 'Are younger people still listening?'],
              ['EWAN', 'Honestly, fewer of them. They stream everything. So last year we started putting our shows online as podcasts. At first I hated the idea. It felt like giving up on radio.'],
              ['EWAN', 'But a group of high school students now hosts a Saturday show, and their podcast gets more downloads than anything else we make. So, I\'ve come around.'],
              ['HOST', 'What\'s next for the station?'],
              ['EWAN', 'I\'d like to start a training program, so anyone who wants to try radio can learn the equipment in a weekend. Half our volunteers are over sixty. If we don\'t bring new people in, there won\'t be anyone left to read the messages.']
            ],
            questions: [
              { id: 'L3.1', q: 'What does Ewan say about how the station is funded?', o: ['A regular social event earns more than direct gifts.', 'Most of its money comes from the road crew.', 'Its volunteers pay a fee to host their shows.', 'Listeners mostly donate during the night.'] },
              { id: 'L3.2', q: 'Why are the radio messages still needed?', o: ['Some listeners work where phones do not reach.', 'Most listeners cannot afford a smartphone.', 'The station also reads them during the day.', 'Satellite phones are not allowed at most mining camps.'] },
              { id: 'L3.3', q: 'Why does Ewan mention the price of a radio?', o: ['To explain why people choose it over other options', 'To show how cheaply the station manages to run', 'To ask listeners to donate their old radios', 'To compare it with the cost of a podcast'] },
              { id: 'L3.4', q: 'What does Ewan suggest about the wildfire evacuation?', o: ['It showed how much people relied on the station.', 'The station had to stop broadcasting for a night.', 'A listener drove him to safety on the first night.', 'The station lost its building and equipment.'] },
              { id: 'L3.5', q: 'How has Ewan\'s view of podcasts changed?', o: ['He opposed them at first but now sees their value.', 'He liked them at first but now thinks they hurt radio.', 'He always expected them to replace radio completely.', 'He still refuses to put his own show online.'] },
              { id: 'L3.6', q: 'Why does Ewan want to start a training program?', o: ['The station needs people to replace older volunteers.', 'High school students asked to learn the equipment.', 'Volunteers keep making mistakes while they are on the air.', 'The station plans to add a new daytime show.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Residents of Thunder Bay will soon be able to take home an original painting. Not to buy it, but to borrow it.'],
              ['NEWS', 'Starting March first, the Lakehead Regional Art Gallery will lend works by local artists to the public, much the way a library lends books.'],
              ['NEWS', 'For a fee of twenty dollars, gallery members will be able to borrow one piece for three months. People who are not members will pay forty-five dollars.'],
              ['NEWS', 'About sixty paintings, prints and photographs will be available in the first year. All of them come from a collection the gallery put together decades ago for rental to local businesses, which has been sitting largely unused in storage.'],
              ['NEWS', 'Gallery director Paulette Okonkwo says the goal is to bring art into homes where it might otherwise never appear. Many people, she says, still feel that galleries are not meant for them.'],
              ['NEWS', 'Borrowers must sign an agreement to keep the work away from direct sunlight, fireplaces and bathrooms, where heat or moisture could damage it.'],
              ['NEWS', 'The gallery\'s insurance covers accidental damage, but borrowers will be responsible for the first two hundred dollars of any claim.'],
              ['NEWS', 'Artists whose work is borrowed will receive half of each lending fee. Painter Anders Lindgren, who has four works in the program, welcomes the extra income, but admits he was nervous at first.'],
              ['NEWS', '"You hand over something you spent months on," he says, "and it goes off to a stranger\'s living room."'],
              ['NEWS', 'Reservations open online next Monday. The gallery expects strong demand, and borrowers will be limited to one work at a time.']
            ],
            questions: [
              { id: 'L4.1', q: 'The news item is mainly about', o: ['a new way for the public to enjoy local art at home.', 'the sale of artworks kept in a gallery\'s storage.', 'a public library that will start displaying art.', 'an exhibition of paintings owned by local businesses.'] },
              { id: 'L4.2', q: 'The works being lent', o: ['had been used very little in recent years.', 'were bought for the program last year.', 'are mostly by artists from other cities.', 'have never been shown to the public.'] },
              { id: 'L4.3', q: 'A person who is not a gallery member and borrows two works, one after the other, will pay a total of', o: ['$90.', '$45.', '$40.', '$65.'] },
              { id: 'L4.4', q: 'If a borrowed work is accidentally damaged, the borrower', o: ['pays a limited part of the cost.', 'pays the full value of the work.', 'loses their gallery membership.', 'is not responsible for any cost.'] },
              { id: 'L4.5', q: 'Lindgren\'s comment suggests that', o: ['letting his work out of his care was hard at first.', 'he is unhappy with the share of the fee he receives.', 'he would rather sell his paintings than lend them.', 'strangers rarely appreciate the work of local artists.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Garage chargers: board vote', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { PATRICIA: { name: 'Patricia', g: 'f', skin: '#f2cfb0', hair: '#9e9e9e', shirt: '#6a1b9a', style: 'bun' }, JONAS: { name: 'Jonas', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#0277bd', style: 'short' }, FARIDA: { name: 'Farida', g: 'f', skin: '#a9714b', hair: '#120c08', shirt: '#2e7d32', style: 'long' } },
          segments: [{
            lines: [
              ['PATRICIA', 'Okay, let\'s start. The main item tonight is chargers in the garage. Jonas, you got the electrician\'s quote?'],
              ['JONAS', 'I did. Two options. Option one: six chargers, one for each owner with an electric car, three thousand each.'],
              ['FARIDA', 'So eighteen thousand. And right now those six are running extension cords from the wall outlets?'],
              ['JONAS', 'Most of them, yes. The fire inspector flagged that last month. It has to stop by June.'],
              ['PATRICIA', 'And option two?'],
              ['JONAS', 'We upgrade the electrical system for the whole garage. Forty-five thousand. Then any owner can add a charger later.'],
              ['FARIDA', 'Forty-five thousand? There are sixty units here. Most people don\'t even want an electric car.'],
              ['PATRICIA', 'Not yet. But in last spring\'s survey, almost half the owners said their next car might be electric.'],
              ['FARIDA', 'Might. That\'s a big word to build forty-five thousand dollars on.'],
              ['JONAS', 'Here\'s the thing, though. With option one, every new electric car means calling the electrician back.'],
              ['JONAS', 'And after about ten chargers, the old system can\'t handle any more. We\'d end up paying for the upgrade anyway.'],
              ['PATRICIA', 'So option one is cheaper today, but probably more expensive in five years.'],
              ['FARIDA', 'Okay, I see that. But who pays? Our reserve fund is meant for the roof, not for people\'s cars.'],
              ['JONAS', 'There\'s a provincial rebate for buildings that do the full upgrade. It covers half, up to twenty-five thousand.'],
              ['PATRICIA', 'Wait, I thought the rebate was capped at twenty thousand.'],
              ['JONAS', 'It was. They raised it in January. I checked again this morning.'],
              ['FARIDA', 'Then the building\'s share drops a lot. Split sixty ways, that\'s much easier to explain to owners.'],
              ['PATRICIA', 'And anyone who installs a charger pays for the unit and their own electricity. Nobody else covers that.'],
              ['FARIDA', 'That has to be in writing. Otherwise the owners\' meeting will turn into a shouting match.'],
              ['JONAS', 'Agreed. The electricity part is easy. Each charger can have its own meter.'],
              ['PATRICIA', 'What about timing? The fire inspector\'s deadline is June.'],
              ['JONAS', 'The rebate application takes about six weeks. The work itself, maybe four.'],
              ['FARIDA', 'That\'s ten weeks. If owners only vote at the regular meeting in mid-April, that\'s cutting it very close.'],
              ['PATRICIA', 'Then we call a special meeting in March. I\'ll ask the manager about booking the party room.'],
              ['FARIDA', 'And until the work\'s done, no more extension cords. Those six owners will need another option.'],
              ['JONAS', 'There\'s a public charger at the library, two blocks away. I\'ll make sure they know about it.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main decision the group must make?', o: ['How to provide charging in the garage', 'Whether to repair the building\'s roof', 'Where to hold the owners\' meeting', 'Which owners may park in the garage'] },
              { id: 'L5.2', q: 'Why must something change by June?', o: ['A safety problem has been officially reported.', 'The provincial rebate program ends in June.', 'Six more owners are buying electric cars then.', 'The reserve fund has to be spent by June.'] },
              { id: 'L5.3', q: 'What is Farida\'s first reaction to option two?', o: ['She questions spending so much for a minority.', 'She thinks it is cheaper than option one.', 'She wants the reserve fund to pay for it.', 'She believes most owners want chargers now.'] },
              { id: 'L5.4', q: 'What does Farida mean when she says "Might. That\'s a big word"?', o: ['A possible future need is a weak reason to spend.', 'The owners\' survey asked the wrong questions.', 'Owners are very likely to buy electric cars soon.', 'Half of the owners already drive electric cars.'] },
              { id: 'L5.5', q: 'Why does Jonas think option one could cost more in the end?', o: ['The building would eventually need the upgrade anyway.', 'Each charger would need its own electricity meter.', 'The electrician raises his prices every year.', 'The rebate only covers the cost of the first ten chargers.'] },
              { id: 'L5.6', q: 'After the rebate, how much will the building pay for option two?', o: ['$22,500', '$25,000', '$20,000', '$18,000'] },
              { id: 'L5.7', q: 'Why does Farida want the rules about costs put in writing?', o: ['To prevent arguments among the owners', 'To satisfy the fire inspector by June', 'To apply for the provincial rebate', 'To charge owners for the new meters'] },
              { id: 'L5.8', q: 'What will the six electric car owners probably do until the work is finished?', o: ['Charge their cars somewhere outside the building', 'Keep using extension cords until June', 'Install their own chargers right away', 'Pay for the special meeting in March'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Paid time to exercise?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#5b2c6f', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'Many Canadians say they would exercise more if they only had the time. Now some employers are offering a surprising solution: paid time during the workday to go for a run, take a class or simply walk.'],
              ['NARR', 'Some companies have even built fitness rooms in their offices. The idea is spreading, but not everyone thinks it belongs at work.'],
              ['NARR', 'Linnea Berg, who studies workplace health at a university in Saskatoon, is a strong supporter. Her first argument is about health and absence.'],
              ['NARR', 'She followed an insurance office where staff were given thirty minutes, three times a week, to be active. Within a year, sick days had dropped by about a fifth, and the office saved more on replacement staff than the program cost in working hours.'],
              ['NARR', 'Her second argument may surprise managers. Berg says the time is not really lost. People who move at midday, she says, come back more focused, and they make fewer mistakes in the afternoon, when energy usually drops.'],
              ['NARR', 'Berg admits the idea is easier in an office than on a factory floor or in a hospital ward, where someone has to cover for anyone who steps away.'],
              ['NARR', 'For those workplaces, she suggests other options, such as shorter shifts on exercise days or passes to a nearby pool.'],
              ['NARR', 'Victor Almeida, who owns a bakery with sixty employees in Sherbrooke, Quebec, sees things differently. His first concern is cost.'],
              ['NARR', 'On a production line, he explains, if one baker leaves for half an hour, another has to be paid to replace them. In effect, the company pays twice for the same thirty minutes.'],
              ['NARR', 'At a small business with tight margins, he says, that cost can be the difference between a good year and a bad one.'],
              ['NARR', 'His second concern is fairness. Not everyone can or wants to exercise at work, he says. An employee with a disability, or a parent who uses lunch to call a child\'s school, would get nothing from the program.'],
              ['NARR', 'Meanwhile, their colleagues would receive what is really extra paid time off.'],
              ['NARR', 'Almeida also questions the sick-day figures. In his view, the people who sign up for these programs are usually those who were already active, so the results may say more about who joins than about the exercise itself.'],
              ['NARR', 'He does accept that a healthier workforce benefits everyone. Rather than paid exercise time, he offers flexible hours, so that staff can start early and leave in time for an evening run or a class.'],
              ['NARR', 'Berg answers that flexible hours tend to help the people who need help least. Workers with long commutes or young children, she says, rarely have a free evening, and the paid half hour may be the only exercise they get all week.'],
              ['NARR', 'Both agree on one point: any program should be voluntary, and employers should measure the results honestly before deciding whether to continue. Nobody, they say, should feel pressured to sweat in front of the boss.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether staff should be paid while they exercise', 'How offices can design better fitness rooms', 'Why sick days have risen across Canada', 'Whether bakeries should offer flexible hours'] },
              { id: 'L6.2', q: 'Why does Berg say the time spent exercising is not really lost?', o: ['Workers perform better for the rest of the day.', 'Staff make up the time by starting earlier.', 'Most people exercise during their own lunch break.', 'Classes are usually held outside working hours.'] },
              { id: 'L6.3', q: 'What does Berg admit about her proposal?', o: ['It is harder to apply where absent staff must be replaced.', 'It led to more afternoon mistakes in some offices.', 'It works best in factories and in hospital wards.', 'It costs more than giving each worker a pool pass.'] },
              { id: 'L6.4', q: 'Why does Almeida say the company "pays twice"?', o: ['Another worker must be paid to cover the absence.', 'Staff are paid both for exercise and for overtime.', 'The company also pays for gym memberships.', 'Bakers are paid more than most office workers.'] },
              { id: 'L6.5', q: 'How does Almeida challenge the sick-day results?', o: ['He suggests the people who took part were healthier to begin with.', 'He says the insurance office counted sick days incorrectly.', 'He argues that one year is far too short to measure results.', 'He claims that sick days rose again soon after the program came to an end.'] },
              { id: 'L6.6', q: 'What is Berg\'s view of flexible hours?', o: ['They do little for the workers who most need support.', 'They are the best solution for shift workers.', 'They should replace paid exercise time entirely.', 'They help parents of young children the most.'] }
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
          passage: '<h3>Message</h3><p><b>Subject:</b> A big favour for August 16</p><p>Hi Declan,</p><p>I hope Toronto is treating you well! I have news, and a favour to ask. As you know, Teodor and I are getting married on Saturday, August 16, in my aunt\'s garden in Victoria. It will be small, about sixty guests, with the ceremony at 4:00 and dinner at 6:00.</p><p>Here is the favour. My brother Chidi was going to host the reception, introducing the speeches and keeping everything on schedule. Last week, his company sent him to work on a project in Norway until September, so he cannot be there at all. He still plans to send a short video. Would you take his place? You are the most organized person I know, and you are calm when things go wrong. Each speech is limited to four minutes. My father has never given a four-minute speech in his life, so I need someone firm but kind.</p><p>Some practical things. Flights from Toronto straight to Victoria are very expensive in August, so most of our Ontario guests are flying to Vancouver and taking the ferry across. The crossing takes about an hour and a half, and the last ferry leaves at 8:00 p.m. Summer weekends sell out, so reserve a spot online. We have also held a block of rooms at the Cedar Cove Inn for $189 a night. Just mention our names when you book. The inn will release any rooms that are not booked by June 30, and after that the price goes up to about $260. Their front desk is open until midnight.</p><p>The ceremony and dinner are both outside on the lawn, so please warn anyone you bring not to wear high heels; they sink straight into the grass. Victoria evenings can be cool, even in August. I have already told the caterer that you do not eat meat, so do not worry about dinner.</p><p>Finally, please, no gifts. Teodor and I have lived together for three years and already have more kitchen gadgets than cupboards. If people really want to give something, we have suggested a donation to the community garden where we met.</p><p>Let me know what you think. No pressure, but also, please say yes.</p><p>Love,<br>Ifeoma</p>',
          questions: [
            { id: 'R1.1', q: 'Ifeoma asks Declan to host the reception because', o: ['the person who planned to do it will be away.', 'her father has asked her to choose him.', 'he has hosted many weddings in the past.', 'her brother would prefer to give a speech instead.'] },
            { id: 'R1.2', q: 'Ifeoma suggests flying to Vancouver because', o: ['it costs less than flying directly to Victoria.', 'there are no flights from Toronto to Victoria.', 'the ferry is included in the price of the flight.', 'most of the guests live near Vancouver.'] },
            { id: 'R1.3', q: 'Ifeoma\'s comment about her father suggests that he', o: ['may speak for longer than he is allowed.', 'does not want to give a speech at all.', 'disapproves of having such a small wedding.', 'will refuse to follow the dinner schedule.'] },
            { id: 'R1.4', q: 'To pay the lower room rate, Declan should', o: ['book his room before the end of June.', 'stay at least two nights at the inn.', 'arrive before the front desk closes.', 'pay for the room when he reserves it.'] },
            { id: 'R1.5', q: 'Ifeoma mentions the grass in order to', o: ['help guests choose suitable shoes.', 'explain why dinner will be inside.', 'warn guests about the cool evenings.', 'describe her aunt\'s favourite garden.'] },
            { id: 'R1.6', q: 'Ifeoma asks guests not to bring gifts because', o: ['the couple already own more than enough.', 'there is no room for gifts at the inn.', 'the couple will be moving overseas soon.', 'gifts are difficult to carry on the ferry.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Ifeoma,</p><p>Congratulations to you both! Of course I will host. I am sorry Chidi cannot be there, but I will make sure his video is played right after dinner. And do not worry, I will politely hold everyone, even your dad, to [[R1.7]].</p><p>I have booked my flight to Vancouver. Unfortunately, it lands at 7:30 p.m. on the Friday, which is too late for [[R1.8]], so I will stay near the terminal and take the first sailing on Saturday morning. I have also reserved a room at the inn under your names, well before [[R1.9]], so I got the lower price.</p><p>Thank you for telling the caterer about [[R1.10]]. You know me too well. I will bring [[R1.11]] for the evening, and I will leave my good leather shoes at home.</p><p>Instead of a gift, I have made a small donation in your names. I am already working on some notes for my introductions. I promise to keep the jokes short.</p><p>See you in August,<br>Declan</p>',
          blanks: [
            { id: 'R1.7', o: ['the four-minute limit', 'the guest list of sixty', 'the 6:00 dinner time', 'a single short video'] },
            { id: 'R1.8', o: ['the last ferry crossing', 'the start of the ceremony', 'the dinner on the lawn', 'the speeches after dinner'] },
            { id: 'R1.9', o: ['the June 30 deadline', 'the wedding in August', 'my Friday flight', 'the ferry booking'] },
            { id: 'R1.10', o: ['my vegetarian diet', 'my late arrival', 'my fear of boats', 'my long speech'] },
            { id: 'R1.11', o: ['something warm to wear', 'a wrapped gift for you both', 'a folding chair for the lawn', 'a printed copy of the menu'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Aurora Skies Airlines: Economy Fare Options (example: Calgary to Halifax, one way)</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Fare</th><th>Example price</th><th>Carry-on bag</th><th>First checked bag</th><th>Seat selection</th><th>Changes</th><th>Cancellation</th></tr></thead><tbody>' +
            '<tr><td>Basic</td><td>$219</td><td>Not allowed (small personal item only)</td><td>$35</td><td>$25, or free at check-in</td><td>Not allowed</td><td>No refund</td></tr>' +
            '<tr><td>Standard</td><td>$279</td><td>Included</td><td>$35</td><td>Free</td><td>$75 fee plus any fare difference</td><td>Travel credit minus $75</td></tr>' +
            '<tr><td>Flex</td><td>$359</td><td>Included</td><td>Free</td><td>Free</td><td>No fee; fare difference applies</td><td>Full refund to original payment</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Any booking changed or cancelled within 24 hours of purchase gets a free change or a full refund, as long as the flight leaves at least 7 days later.</li><li>Same-day change to an earlier flight on the same route (no fare difference charged): $50 for Standard, free for Flex, not available for Basic.</li><li>Travel credits must be used within 12 months of the original booking date.</li><li>Children under 2 may travel free on an adult\'s lap.</li><li>A second checked bag costs $50 on every fare.</li><li>Basic and Standard passengers who miss their flight lose the full fare. Flex passengers may take the next flight that has a free seat.</li><li>Prices include taxes and change with demand.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Leona,</p><p>I finally booked my flight to Halifax for Grandma\'s 90th on May 20, five weeks from now! I want to bring my small suitcase on board, so I chose [[R2.1]], since it is the cheapest fare that lets me do that. Mom thinks I should have paid for Flex in case my dates change, but I am also checking one bag, and I worked out that Flex would only cost me [[R2.2]] more in total.</p><p>Since I booked only this morning, [[R2.3]] if I change my mind tonight. As for you and Nico, he will still be 14 months old in May, so [[R2.4]].</p><p>One problem: Uncle Rafael booked a Basic fare last week and now wants to fly home a day earlier. I had to tell him [[R2.5]]. He was not pleased.</p><p>Talk soon,<br>Mateus</p>',
          blanks: [
            { id: 'R2.1', o: ['Standard', 'Basic', 'Flex', 'Basic with a seat'] },
            { id: 'R2.2', o: ['$45', '$80', '$35', '$115'] },
            { id: 'R2.3', o: ['I could still cancel and get all my money back', 'I would have to pay the $75 change fee', 'I could only receive a travel credit', 'I would lose the full price of the ticket'] },
            { id: 'R2.4', o: ['he can sit on your lap at no charge', 'he will need a Basic seat of his own', 'he must travel on a Flex fare', 'he can fly for half the adult price'] },
            { id: 'R2.5', o: ['his ticket cannot be changed at all', 'he will have to pay a $75 change fee', 'he can switch flights on the day for $50', 'he will receive a credit for a new flight'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A passenger cancels a $279 Standard fare three weeks after booking it. She will receive', o: ['a $204 credit, usable for 12 months from her booking date.', 'a $279 refund to the card she used to pay.', 'a $204 refund to the card she used to pay.', 'a $279 credit, usable for 12 months from her booking date.'] },
            { id: 'R2.7', q: 'On the day of travel, a Flex passenger asks to take an earlier flight on the same route. The change will cost', o: ['nothing.', '$50.', '$75.', 'the difference in fare.'] },
            { id: 'R2.8', q: 'Which passenger will get money back on the original payment card?', o: ['A Flex passenger who cancels a month before flying', 'A Standard passenger who cancels three days after booking', 'A Basic passenger who cancels two days after booking', 'A Standard passenger who misses the flight'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Borrow a Seed, Return a Seed</h3><p><b>A.</b> On a shelf near the entrance of many Canadian public libraries, there is now something unexpected: an old wooden card catalogue filled not with index cards but with small paper envelopes of seeds. These seed libraries offer free packets of vegetables, herbs and flowers to anyone who wants to grow them. Most were started by gardening clubs or by librarians who had read about similar projects elsewhere. In the past fifteen years, hundreds have opened in libraries, schools and community centres across the country. Most ask for nothing more than a library card, and many do not even ask for that. The idea is simple. Gardeners "borrow" seeds in spring, grow the plants, and at the end of the season save seeds from their healthiest plants to return to the collection.</p><p><b>B.</b> Saving seeds is not equally easy for every crop. Beans, peas, lettuce and tomatoes are usually recommended for beginners, because their flowers normally pollinate themselves, so the seeds grow into plants much like the parent. Squash, cucumbers and corn are another matter. They cross easily with related plants nearby, and the next generation can be a surprise, such as a squash that looks partly like a pumpkin. For this reason, many seed libraries label their packets "easy," "intermediate" or "advanced." Returned seeds must also be completely dry, since a single damp envelope can spread mould through an entire drawer.</p><p><b>C.</b> Supporters say the real value of a seed library grows over time. When gardeners keep returning seeds from plants that did well in local conditions, the collection slowly adapts to the area\'s soil and weather. A library in Prince George, where the growing season is short, now offers several tomato varieties that reliably ripen before the first frost. Seed libraries also help keep older varieties alive after seed companies stop selling them. Donors often attach notes explaining where a seed came from, such as a bean a grandmother carried from Portugal sixty years ago. Some libraries even hold an evening each fall where donors share the stories behind their seeds.</p><p><b>D.</b> The biggest challenge is that most borrowers never bring anything back. Some organizers estimate that fewer than one borrower in five returns seeds at the end of the season. As a result, many collections depend on leftover stock donated by seed companies and on local growers who give seeds each fall. Volunteers spend much of the winter sorting and packing envelopes, and some test each batch by placing ten seeds on a wet paper towel to see how many sprout. Organizers say all of this effort is worth it, but they would warmly welcome more borrowers who complete the full cycle.</p>',
          questions: [
            { id: 'R3.1', q: 'Some collections do not require borrowers to show any card.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Certain plants may produce unexpected results when grown near similar plants.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Borrowers who do not return seeds can lose their library privileges.', fixed: true, a: 'E' },
            { id: 'R3.4', q: 'Over the years, a collection can become better suited to the local climate.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Packets are often marked to show how hard it is to save their seeds.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'Collections rely on outside donors because few borrowers give seeds back.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'Seeds that are not properly dried can harm the rest of the collection.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'The first seed libraries were started by farmers who could not afford to buy seed.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Such collections can now be found in many kinds of public buildings.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Is Buying a Home Still the Smart Move?</h3><p>For generations, Canadians have been told that paying rent is "throwing money away" and that buying a home is the surest path to financial security. But with prices in many cities now far beyond what typical incomes can support, a growing number of people are questioning that advice, and some are choosing to rent for good.</p><p>Danielle Fortin, a financial planner in Ottawa, says the usual comparison is unfair. "People compare their rent with a mortgage payment and stop there," she says. Owners also pay property tax, insurance and repairs, which she estimates add up to one to two percent of a home\'s value every year. On a $600,000 house, that can mean $6,000 to $12,000 a year that never appears in the mortgage payment. "A renter who invests the difference every month can end up just as well off," she says, "but only if they actually invest it."</p><p>That condition is exactly what worries Colleen Murphy, a real estate agent in Moncton. In her experience, most renters do not invest the money they save; it disappears into holidays, restaurants and new phones. "A mortgage is a savings plan you can\'t skip," she says. "After twenty-five years, you own something." She also points out that a fixed-rate mortgage payment stays the same for years at a time, while rent can go up every year.</p><p>Siddharth Rao, a 34-year-old software tester in Vancouver, knows that risk well. When his building was sold two years ago, his rent rose by 18 percent within two years. Still, he has no plans to buy. His employer has moved him twice in five years, and selling a home, with agent fees and taxes, can cost tens of thousands of dollars. "Renting lets me say yes to opportunities," he says. "I would rather have that than a backyard."</p><p>Economist Hélène Bouchard of Montreal argues that the answer depends heavily on where you live. She compares a home\'s price with the yearly rent for a similar home. In some large cities, it would take more than 30 years of rent to equal the purchase price, which usually makes renting the cheaper choice. In many smaller cities, the figure is closer to 15 years, and buying tends to come out ahead. "There is no single right answer for the whole country," she says.</p><p>Bouchard adds that people often forget about time. Because buying and selling a home are expensive, ownership makes the most sense for someone who expects to stay at least five to seven years, so those costs are spread over a longer period.</p><p>Murphy agrees that buying is not for everyone, but she worries that young people are giving up too early. "Ownership often starts small," she says, "a condo first, then a house." Fortin, for her part, says the most important thing is to make a plan and stick to it. "Whether you rent or buy, the worst choice is the one you make only because your parents told you to."</p>',
          questions: [
            { id: 'R4.1', q: 'The first paragraph suggests that', o: ['a long-held belief about renting is being questioned.', 'most Canadians now plan to rent for their whole lives.', 'home prices have recently fallen in many cities.', 'renters now spend more on housing than owners do.'] },
            { id: 'R4.2', q: 'According to Fortin, people comparing renting with owning often', o: ['leave out several costs that owners must pay.', 'overestimate how much home insurance costs.', 'forget that rent already includes property tax.', 'compare homes that are in different cities.'] },
            { id: 'R4.3', q: 'Murphy calls a mortgage "a savings plan you can\'t skip" because', o: ['the payments build ownership even without discipline.', 'banks require owners to save a fixed amount.', 'mortgage payments are usually lower than most monthly rents.', 'renters are not able to open savings plans.'] },
            { id: 'R4.4', q: 'Rao\'s experience shows that', o: ['renting can bring sharp increases in cost.', 'new owners rarely renovate older buildings.', 'buying a home is easier in Vancouver.', 'his employer helps him pay his rent.'] },
            { id: 'R4.5', q: 'Bouchard would most likely advise someone who expects to move in three years to', o: ['think carefully before buying a home.', 'buy a condo first rather than a house.', 'look for a home in a smaller city.', 'invest their savings only in property.'] }
          ],
          reply: '<h3>Reader comment</h3><p>My partner and I rent in Kingston, and this article captured our debate perfectly. Like Ms. Fortin, I realized we had never added up [[R4.6]] before comparing our options. But I have to admit that Ms. Murphy described us well: the money we "save" by renting usually [[R4.7]].</p><p>We may also be moving soon, since my partner could be transferred within two years. If Ms. Bouchard is right, that means [[R4.8]]. We would also lose thousands on agent fees and taxes if we had to sell in a hurry. And like Mr. Rao, we value [[R4.9]] more than a backyard.</p><p>Still, Ms. Fortin\'s point about making a plan stayed with me. We have agreed to [[R4.10]], so that renting actually helps us get ahead.</p>',
          blanks: [
            { id: 'R4.6', o: ['the yearly costs that owners carry', 'the total rent we pay each year', 'the price of our phone plans', 'the fees agents charge renters'] },
            { id: 'R4.7', o: ['ends up being spent rather than invested', 'goes straight into a fixed-rate mortgage', 'pays the property tax on our building', 'covers the rent increases each year'] },
            { id: 'R4.8', o: ['buying now would probably not pay off', 'we should look in a smaller city', 'renting will cost more than owning', 'we will need a thirty-year plan'] },
            { id: 'R4.9', o: ['the freedom to move for work', 'a rent that never goes up', 'living close to our parents', 'owning something after 25 years'] },
            { id: 'R4.10', o: ['invest a set amount automatically each month', 'buy a small condo before the end of the year', 'ask our parents which choice they would make', 'stop comparing our rent with mortgage costs'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You rent an apartment with an underground parking spot for $120 a month. When you signed your lease last year, the building manager told you in an email that tenants could install an electric car charger at their own cost. Last month, you bought an electric car. Now a new property management company has taken over and says no chargers are allowed, so you are charging at a public station 20 minutes from home.</p><p>Write an email to the new property management company. In your email, do the following:</p><ul><li>Explain your situation and what you were told before.</li><li>Describe the problems the new rule is causing you.</li><li>Propose a solution that would also address the company\'s likely concerns.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city owns an empty lot on a busy residential street and is asking residents how it should be used. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Create a community garden with 60 plots that residents can rent for $40 a season. It would bring neighbours together and keep the street green, but only 60 households could take part, and the city would have to spend $50,000 to bring water to the site.' },
            { key: 'B', label: 'Option B', text: 'Build a small parking lot with 20 spaces, including 8 public fast chargers for electric cars, paid for mostly by a federal grant. It would ease parking on the street, but it would remove the last green space on the block, and few residents own electric cars today.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a hobby you would like to try in the future, and explain why it interests you.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is getting married in four months. She and her partner have saved $8,000 for the wedding and would like about 50 guests, but her parents want to invite 150 people and expect a large celebration. Give your friend advice on how to plan the wedding and how to handle the disagreement with her parents.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when technology let you down at an important moment, for example a computer that crashed, a phone that died or a file that disappeared. What happened, how did you solve the problem, and what would you do differently now?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/S/scene.jpg" alt="A busy airport departure gate during a flight delay">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the man looking at his phone, the small child near the table and the departures board.', image: '<img src="tests/img/S/scene.jpg" alt="A busy airport departure gate during a flight delay">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You are a member of your child\'s parent council, which must choose an end-of-year trip for 60 grade 5 students. Choose the option you prefer. In the next section, you will need to persuade another council member that your choice is better.',
          choices: [
            { key: 'A', title: 'Science centre', image: '<img src="tests/img/S/opt_A.jpg" alt="Photo: Science centre">', facts: ['$14 per student, plus $600 for the bus', 'Indoors, so the weather does not matter', 'Many students visited a similar centre last year', 'Back at school by 2:30 p.m.'] },
            { key: 'B', title: 'Overnight outdoor camp', image: '<img src="tests/img/S/opt_B.jpg" alt="Photo: Overnight outdoor camp">', facts: ['$65 per student, meals included', 'Canoeing, hiking and a campfire', 'Needs 8 parent volunteers to stay overnight', 'Some families may find the cost too high'] }
          ],
          third: { key: 'C', title: 'Working farm', image: '<img src="tests/img/S/opt_C.jpg" alt="Photo: Working farm">', facts: ['$8 per student, plus $450 for the bus', 'Students feed animals and plant crops', 'Mostly outdoors, with no shelter if it rains', '45 minutes each way by bus'] },
          persuade: 'Another council member thinks the farm would be better. Persuade this person that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Six months ago, you promised your close friend that you would take the photos at her small wedding this Saturday, so she did not hire a photographer. Today, your manager asked you to work all day Saturday. The company is moving to a new computer system that weekend, and you are the only person who understands how the old system stores client records.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot take the photos at her wedding.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot work on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>The regional airport near your city wants permission to allow flights between midnight and 6:00 a.m. Airport managers say night flights would attract new airlines, create about 300 jobs and make cheaper fares possible. Residents who live under the flight path say the noise would wake them several times a night, and some say they would have to move.</p><p>City council has asked residents for their opinion before it decides. Should the airport be allowed to operate night flights? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a sports store and see this unusual running stroller. Call your friend, who has a one-year-old son and wants to start running again. She lives in a small apartment, her car has a small trunk, and she has said she can spend about $300. Describe the stroller and explain whether you think your friend should buy it.', image: '<img src="tests/img/S/object.jpg" alt="An unusual three-wheeled running stroller with a baby seat and sun canopy in a sports store">' }
      ]
    }
  });
})();
