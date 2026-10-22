/* Rowe CELPIP Mock Exam: Test D content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly harder than the real test (aimed at CLB 8 to 11).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/D/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'D',
    title: 'Mock Test 4',
    note: 'Original practice content in the CELPIP-General format. This test is slightly harder than the real exam.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'office',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { DEV: { name: 'Dev', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#5d6d7e', style: 'short' }, AMARA: { name: 'Amara', g: 'f', skin: '#7a4b31', hair: '#1d1410', shirt: '#d35400', style: 'curly' } },
        segments: [{
          lines: [
            ['AMARA', 'Dev, do you want to grab lunch? I was thinking of that noodle place on Quinpool.'],
            ['DEV', 'I\'d love to, but I\'ve only got about half an hour. I have a call with the Calgary office at one.'],
            ['AMARA', 'Then the noodle place is out. There\'s always a line out the door at lunchtime. What about the sandwich shop downstairs?'],
            ['DEV', 'Perfect. And if it\'s busy, we can just take the food back up to our desks.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Amara change her lunch suggestion?', o: ['Dev does not have time to wait in a long line.', 'The noodle place is too far from the office.', 'Dev has to eat at his desk during the call.', 'The sandwich shop is cheaper than the noodles.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#2e4053', style: 'short' }, FARAH: { name: 'Farah', g: 'f', skin: '#c98c64', hair: '#120c08', shirt: '#117a65', style: 'long' } },
          segments: [
            {
              lines: [
                ['FARAH', 'Owen, have you got a second? We\'ve got a real problem in Conference Room B.'],
                ['OWEN', 'What kind of problem? The people from Bayside Freight are coming in at two.'],
                ['FARAH', 'I know. I went in to test everything, and the projector won\'t turn on. There\'s just a little red light blinking on the side.'],
                ['OWEN', 'Great. And it\'s already ten past one.'],
                ['FARAH', 'It gets worse. My laptop decided to install an update while I was setting up, and now it\'s stuck on a black screen. The whole presentation is on it.'],
                ['OWEN', 'Okay, um, didn\'t you save a copy somewhere else?'],
                ['FARAH', 'I emailed myself a version last night, but that\'s the old draft. It doesn\'t have the new cost figures Mr. Tanaka asked for this morning, and honestly, those figures are the whole reason they\'re coming in.'],
                ['OWEN', 'How long has the laptop been stuck like that?'],
                ['FARAH', 'About fifteen minutes. The progress bar hasn\'t moved at all.']
              ],
              questions: [
                { id: 'L1.1', q: 'What did Farah find when she tested the room?', o: ['The projector would not start.', 'The projector light was not on.', 'The room was booked by Bayside.', 'The laptop cable was missing.'] },
                { id: 'L1.2', q: 'How much time is there before the clients arrive?', o: ['Less than an hour', 'About fifteen minutes', 'An hour and ten minutes', 'Just over two hours'] },
                { id: 'L1.3', q: 'Why is Farah especially worried about the emailed copy?', o: ['It lacks the figures the meeting is about.', 'It has figures Mr. Tanaka has not checked.', 'It is in a format her laptop cannot open.', 'It was sent to the clients by mistake.'] }
              ]
            },
            {
              lines: [
                ['OWEN', 'Right. Let\'s deal with the projector first. The IT desk is short-staffed today, but Kwame is upstairs on the fifth floor. I\'ll message him.'],
                ['FARAH', 'Good idea. He mentioned last month that there\'s a spare projector in the storage room, and he\'s the only one with a key.'],
                ['OWEN', 'Then he\'s our best bet. Now, the slides. Could you rebuild the cost section from the old draft?'],
                ['FARAH', 'I think so, if I can get the numbers. Mr. Tanaka sent them in a spreadsheet, so they\'re sitting in my email. I just need a computer that works.'],
                ['OWEN', 'Use mine. I don\'t need it until the meeting. Go to my office, though. You\'ll get more done there than in this room with people walking in and out.'],
                ['FARAH', 'Thanks. Updating four slides should take me half an hour, tops. That still leaves a few minutes for us to run through it together.'],
                ['OWEN', 'Oh, Kwame just replied. He\'s stuck in a training session until one thirty, but he says he\'ll bring the spare projector down right after that.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Owen call Kwame their "best bet"?', o: ['Kwame can reach equipment others cannot.', 'Kwame is the only IT worker in today.', 'Kwame knows how to repair the projector.', 'Kwame works on the same floor as Farah.'] },
                { id: 'L1.5', q: 'Why does Owen suggest that Farah work in his office?', o: ['It will be easier to concentrate there.', 'His office has a projector that works.', 'The clients will be waiting in Room B.', 'Kwame will need the room to set up.'] },
                { id: 'L1.6', q: 'What can be inferred about Farah\'s plan for the slides?', o: ['She expects to finish with a little time to spare.', 'She will need Kwame\'s help to update the figures.', 'She will rewrite the whole presentation from memory.', 'She will present the old draft without any changes.'] }
              ]
            },
            {
              lines: [
                ['OWEN', 'How\'s it going? It\'s twenty to two.'],
                ['FARAH', 'The slides are finished. And guess what, my own laptop finally came back on. But honestly, I don\'t trust it today. I\'d rather present from yours.'],
                ['OWEN', 'That\'s fine with me. Kwame\'s already set up the spare projector, and he said its cable only fits the older port on my laptop anyway, so that decides it.'],
                ['FARAH', 'Lucky us. Should we mention any of this to the clients?'],
                ['OWEN', 'No, I don\'t think so. If anything else goes wrong, we\'ve got a backup. I asked reception to print twelve copies of the slides, enough for everyone in the room plus a couple of spares.'],
                ['FARAH', 'Smart. I\'ll go put them on the table now.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why does Farah decide not to present from her own laptop?', o: ['She doubts it will work reliably today.', 'It is still stuck on a black screen.', 'Kwame says it overheats easily.', 'Owen insists that she use his laptop.'] },
                { id: 'L1.8', q: 'What is Owen\'s attitude toward telling the clients about the problems?', o: ['He sees no need, since they have a backup.', 'He wants to apologize before they start.', 'He would like reception to explain it.', 'He prefers to wait until something fails.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { ADVISOR: { name: 'Service advisor', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#1f618d', style: 'bald' }, LUCIA: { name: 'Lucia', g: 'f', skin: '#d6a07a', hair: '#3b2a20', shirt: '#943126', style: 'bun' } },
          segments: [{
            lines: [
              ['ADVISOR', 'Ms. Ferreira? Hi, I\'m calling about your car. We\'ve finished the oil change and the tire rotation you booked.'],
              ['LUCIA', 'Oh, great. So it\'s ready to go?'],
              ['ADVISOR', 'Almost. But while it was up on the lift, our technician noticed your front brake pads are pretty worn. They\'re down to about three millimetres, and we normally recommend replacing them at four.'],
              ['LUCIA', 'Hmm. I did hear a squeak last week, but I figured it was just the cold weather.'],
              ['ADVISOR', 'That squeak is often the first warning. Front pads, parts and labour, come to two hundred and forty... sorry, no, that\'s the price for the rear. The front is two hundred and twenty.'],
              ['LUCIA', 'Two twenty. Okay.'],
              ['ADVISOR', 'We also spotted a small leak from the water pump. That one isn\'t urgent, but it should be looked at in the next few months. It\'s about four hundred and fifty.'],
              ['LUCIA', 'Wow. My bill today was supposed to be ninety dollars. I wasn\'t expecting to hear about another six hundred and seventy.'],
              ['ADVISOR', 'I understand. If it were my car, I wouldn\'t put off the brakes, especially with winter coming. The water pump can wait. We could book it for later, whenever suits you.'],
              ['LUCIA', 'Okay. How long would the brakes take?'],
              ['ADVISOR', 'About an hour and a half. If you have somewhere to be, our shuttle can drop you off downtown.'],
              ['LUCIA', 'I have to pick up my son from school at three thirty. Will it be done by then?'],
              ['ADVISOR', 'It\'s just after twelve now, so yes, no problem at all. The only catch is that our driver is booked solid this afternoon, so you\'d have to find your own way back here.'],
              ['LUCIA', 'Then there\'s not much point going downtown. I\'ll just wait at the coffee shop across the street and answer some emails.'],
              ['ADVISOR', 'Sounds good. So I\'ll go ahead with the brakes, then?'],
              ['LUCIA', 'Yes, please. But could you write down the water pump price for me? I\'d like to see what a couple of other garages would charge before I decide.'],
              ['ADVISOR', 'Of course. I\'ll put it on your invoice as a recommendation.']
            ],
            questions: [
              { id: 'L2.1', q: 'How does Lucia react when she hears about the brake pads?', o: ['She remembers a noise she had dismissed.', 'She says the pads were replaced recently.', 'She blames cold weather for the damage.', 'She asks to see the worn pads herself.'] },
              { id: 'L2.2', q: 'What is true about Lucia\'s brake pads?', o: ['They are thinner than the shop advises.', 'They should be replaced within a few months.', 'They are leaking fluid from the front.', 'They are about four millimetres thick.'] },
              { id: 'L2.3', q: 'If the shop does only the work Lucia approves, how much will her bill be today?', o: ['$310', '$220', '$760', '$330'] },
              { id: 'L2.4', q: 'What is the advisor\'s view of the two repairs?', o: ['Only one of them should be done right away.', 'Both should be finished before winter starts.', 'Neither one is serious enough to do today.', 'The water pump is more urgent than the brakes.'] },
              { id: 'L2.5', q: 'Why does Lucia ask for the water pump price in writing?', o: ['She wants to compare it with other quotes.', 'She plans to pay for it on her next visit.', 'She needs to send it to her insurance company.', 'She thinks the advisor has quoted it wrongly.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#f0c9a6', hair: '#4a3020', shirt: '#5d6d7e', style: 'short' }, AMINA: { name: 'Amina Yusuf', g: 'f', skin: '#7a4b31', hair: '#120c08', shirt: '#b9770e', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Amina Yusuf, the founder of Open Field Soccer, a youth league here in Saskatoon for newcomer families. Welcome, Amina.'],
              ['AMINA', 'Thanks for having me.'],
              ['HOST', 'So, how did the league get started?'],
              ['AMINA', 'When my family arrived in Canada, my two boys had a really hard time making friends. Their English wasn\'t strong yet, and they were too shy to sign up for a regular team. But they would play soccer for hours. So one Saturday I brought a ball to the park near our building, and a few other newcomer kids joined in. By the end of that summer, twelve kids were coming every week.'],
              ['HOST', 'And today?'],
              ['AMINA', 'Today we have about three hundred players on twenty-four teams, from age six to fourteen.'],
              ['HOST', 'That\'s remarkable. What does it cost families?'],
              ['AMINA', 'Registration is twenty dollars a season. But, and this is important to me, no child is ever turned away. If a family can\'t pay, they just tell us, and nobody asks any questions. Local businesses sponsor the teams, and that money covers the field rental.'],
              ['HOST', 'What about equipment? Cleats aren\'t cheap.'],
              ['AMINA', 'No, and kids grow so fast. So at the end of every season we hold a boot swap. Families bring the cleats their kids have outgrown and take home a bigger pair. The provincial soccer association also donates shin guards.'],
              ['HOST', 'Who does the coaching?'],
              ['AMINA', 'Mostly volunteer parents, and many of them are newcomers themselves. Every coach takes a free weekend course before the season starts, so they know the safety rules and how to run a proper practice.'],
              ['HOST', 'I understand the league isn\'t only about the kids.'],
              ['AMINA', 'Exactly. While the children play, the parents sit together on the sidelines. We have volunteers there who chat with them so they can practise their English, and every few weeks someone from a settlement agency drops by to answer questions about housing, schools, that kind of thing.'],
              ['HOST', 'What\'s next for Open Field?'],
              ['AMINA', 'A lot of families have asked for a girls-only program, and we\'d love to start one next summer. The challenge is coaching. Right now, almost all of our coaches are dads, and some of those families would only feel comfortable with women coaching their daughters.']
            ],
            questions: [
              { id: 'L3.1', q: 'What led Amina to start the league?', o: ['Her sons were isolated but loved playing soccer.', 'Her sons had been turned away by a regular team.', 'Her neighbours asked her to coach their children.', 'The park near her building needed more visitors.'] },
              { id: 'L3.2', q: 'How has the league changed since its first summer?', o: ['It has grown about twenty-five times larger.', 'It has grown from twelve teams to twenty-four.', 'It now includes children as young as four.', 'It has doubled in size every single year.'] },
              { id: 'L3.3', q: 'What does Amina emphasize about the registration fee?', o: ['Families unable to pay are not asked to explain.', 'Sponsors pay it for families who are newcomers.', 'It covers the cost of renting the soccer fields.', 'It is lower for families with two or more children.'] },
              { id: 'L3.4', q: 'What is the purpose of the boot swap?', o: ['To let kids trade cleats that no longer fit', 'To collect shin guards for the newer players', 'To raise money for renting the soccer fields', 'To sell new cleats to families at low prices'] },
              { id: 'L3.5', q: 'What is suggested about the time parents spend at games?', o: ['It helps them adjust to life in Canada.', 'It is when they take the coaching course.', 'It is spent mostly cheering for their kids.', 'It is when they meet the team sponsors.'] },
              { id: 'L3.6', q: 'What does Amina imply about the girls-only program?', o: ['It depends on recruiting more female coaches.', 'It was her own idea rather than the families\'.', 'It will replace the current mixed teams.', 'It will start as soon as this season ends.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'The provincial government announced this morning that the minimum wage will rise in two steps over the coming year.'],
              ['NEWS', 'The current rate of fifteen dollars and twenty cents an hour will increase to fifteen dollars and ninety cents on April first, and then to sixteen dollars and fifty cents on October first.'],
              ['NEWS', 'An earlier version of this report gave the April rate as fifteen eighty. The correct figure is fifteen ninety.'],
              ['NEWS', 'Employers will have until the end of February to update their payroll systems before the first change takes effect.'],
              ['NEWS', 'According to the province, about forty-two thousand people currently earn the minimum wage, most of them in retail and food service. Close to a third of them are under the age of twenty-five.'],
              ['NEWS', 'Labour Minister Carla Dube said the two-step approach is meant to give employers time to plan. "We heard clearly that a single large jump would be hard on small businesses," she said.'],
              ['NEWS', 'After that, the wage will no longer depend on a government announcement. Starting in 2028, it will be adjusted every April to match the rise in the cost of living.'],
              ['NEWS', 'Reaction has been mixed. Anti-poverty groups welcomed the news, but they say sixteen fifty still falls well short of what it takes to cover rent in the province\'s larger cities.'],
              ['NEWS', 'Meanwhile, the Provincial Federation of Small Business warns that some owners may cut staff hours to cover the extra cost.'],
              ['NEWS', 'The federation is asking the government to lower the small business tax rate to help employers adjust, noting that many of its members are still recovering from several slow years.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Upcoming raises for the lowest-paid workers', 'A new tax break for owners of small businesses', 'The rising cost of rent in the province\'s cities', 'A plan to reduce working hours in retail stores'] },
              { id: 'L4.2', q: 'By how much will the hourly wage rise on October 1?', o: ['60 cents', '70 cents', '$1.30', '50 cents'] },
              { id: 'L4.3', q: 'Why is the increase being made in two steps?', o: ['So that employers have time to adjust their budgets', 'Because the first figure announced was wrong', 'So that it can be linked to living costs', 'Because small businesses asked for a tax cut'] },
              { id: 'L4.4', q: 'What will happen beginning in 2028?', o: ['Raises will be tied to living costs each year.', 'Small businesses will pay a lower rate of tax.', 'The wage will rise to $16.50 per hour.', 'Workers will be paid every two weeks.'] },
              { id: 'L4.5', q: 'What is the attitude of the anti-poverty groups?', o: ['Supportive, but they say it is still not enough.', 'Worried that workers will lose shifts.', 'Hopeful that business taxes will be cut.', 'Concerned that rents will rise because of it.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Agenda: Elm Street safety', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { DIANE: { name: 'Diane (chair)', g: 'f', skin: '#f0c9a6', hair: '#d8d8d8', shirt: '#34495e', style: 'short' }, VIKRAM: { name: 'Vikram', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#b03a2e', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#e8c4a0', hair: '#1d1410', shirt: '#16a085', style: 'long' } },
          segments: [{
            lines: [
              ['DIANE', 'Okay, let\'s get started. The main item tonight is Elm Street. We\'ve raised twelve thousand dollars from the spring yard sale and the bake sales, and the city has a program that will match whatever we put toward a safety project. But applications close on November thirtieth, so we need to decide tonight: speed bumps or the crosswalk.'],
              ['VIKRAM', 'I\'ll make the case for speed bumps. Ever since the bridge construction started, drivers have been using Elm as a shortcut. We put up that borrowed radar sign for two weeks, and the average speed was fifty-eight kilometres an hour. The limit is forty.'],
              ['MEI', 'Nobody disputes that people are speeding, Vikram. My worry is that bumps just push the problem somewhere else. Drivers will avoid Elm and cut through Birch instead, and Birch doesn\'t even have sidewalks.'],
              ['VIKRAM', 'That\'s possible, I suppose. But at least people on Elm would be safer.'],
              ['DIANE', 'What about the fire department? Last time this came up, people were worried that bumps would slow down ambulances and fire trucks.'],
              ['VIKRAM', 'The city doesn\'t use the old kind anymore. They install speed cushions now, with gaps that are just wide enough for the wheels of emergency vehicles. Regular cars still have to slow down. Three of them would cost about nine thousand.'],
              ['MEI', 'Okay, but think about who\'s actually at risk. Kids cross at Elm and Birch every single day to get to the playground, and there\'s nothing there, not even painted lines. A crosswalk with flashing lights costs twenty-four thousand dollars. With the city matching our money, we\'d pay half.'],
              ['VIKRAM', 'Which is every cent we have.'],
              ['MEI', 'It is. But it protects the people who are most likely to get hurt.'],
              ['DIANE', 'Here\'s what I\'m thinking. The crosswalk is the bigger project, and there\'s no guarantee the matching program will be offered again next year. So let\'s apply for the crosswalk now. Vikram, could we borrow the radar sign again and collect speed data through the winter? If the numbers stay high, we\'ll have a strong case for speed cushions next year.'],
              ['VIKRAM', 'Fine. I\'m not thrilled, but I can see the logic. I\'ll call the city about the sign tomorrow.'],
              ['MEI', 'And I\'ll draft the application and send it to you both by Friday.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To choose a safety project for Elm Street', 'To plan the next neighbourhood bake sale', 'To discuss the bridge construction delays', 'To elect a new chair for the association'] },
              { id: 'L5.2', q: 'According to Vikram, why are more drivers using Elm Street?', o: ['They are avoiding the bridge construction.', 'They are driving their children to the playground.', 'The speed limit on Elm Street was raised.', 'Birch Street has been closed for repairs.'] },
              { id: 'L5.3', q: 'How fast were drivers going, compared with the speed limit?', o: ['18 km/h above it on average', '58 km/h above it on average', '40 km/h above it on average', '8 km/h above it on average'] },
              { id: 'L5.4', q: 'What is Mei\'s main concern about speed bumps?', o: ['Drivers may switch to a street with no sidewalks.', 'They may slow down ambulances and fire trucks.', 'They are more expensive than a crosswalk.', 'Children may trip over them on the way to the park.'] },
              { id: 'L5.5', q: 'How does Vikram respond to the worry about emergency vehicles?', o: ['The new design has gaps for their wheels.', 'The fire department has approved the plan.', 'Emergency vehicles rarely use Elm Street.', 'The bumps would be removed in winter.'] },
              { id: 'L5.6', q: 'What does Vikram mean when he says, "Which is every cent we have"?', o: ['The crosswalk would use all of their savings.', 'The city would pay the full cost of the crosswalk.', 'Speed cushions would cost them nothing at all.', 'They will need to hold another yard sale soon.'] },
              { id: 'L5.7', q: 'Why does Diane choose the crosswalk for now?', o: ['The matching program may not return next year.', 'The speed data showed that drivers are slowing down.', 'Vikram agreed that speed bumps are not needed.', 'The city will not pay for speed cushions.'] },
              { id: 'L5.8', q: 'How does Vikram feel about the final decision?', o: ['He accepts it, though without enthusiasm.', 'He agrees because the data supports it.', 'He rejects it and plans to appeal to the city.', 'He is pleased that his idea was chosen.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should zoos exist?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#6c3483', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Few public places spark debate quite like the zoo. Supporters describe zoos as centres of conservation, while critics argue that keeping wild animals on display no longer makes sense.'],
              ['NARR', 'Doctor Ruth Abernathy, a conservation biologist who works with several Canadian zoos, says modern zoos are very different from the ones many adults remember.'],
              ['NARR', 'She points to breeding programs that have raised endangered frogs, turtles and birds in safe conditions and later released them into the wild. Some of those species, she says, had vanished completely from parts of their original range.'],
              ['NARR', 'Abernathy also stresses education. In her view, most children will never travel to see a tiger or a gorilla in its natural home. Seeing one in person, she says, can spark a lifelong interest in nature in a way that a video cannot.'],
              ['NARR', 'She adds that ticket sales at many zoos help pay for research projects in the wild, money that would be very hard to raise any other way.'],
              ['NARR', 'Simon Bergeron, who leads an animal welfare group, sees things differently. He argues that large animals such as elephants and polar bears travel enormous distances in the wild, and that even the best enclosure is tiny by comparison.'],
              ['NARR', 'Some animals, he says, walk the same short path back and forth for hours at a time. Keepers sometimes describe this as a harmless habit, but Bergeron sees it as proof that the enclosure itself is the problem.'],
              ['NARR', 'He is also unconvinced by the education argument. He cites visitor studies showing that most people spend less than a minute at each enclosure, and that many leave remembering the playground and the snack bar better than any message about wildlife.'],
              ['NARR', 'Bergeron also notes that most species kept in zoos are not endangered at all. He believes the money would do more good if it were spent protecting habitats directly.'],
              ['NARR', 'For animals that cannot return to the wild, he favours sanctuaries: large protected spaces that are mostly closed to visitors.'],
              ['NARR', 'He does give zoos some credit. He accepts that a few breeding programs have worked, but he points out that this kind of work could be done at research centres that do not sell tickets at all.'],
              ['NARR', 'Abernathy has an answer to the habitat argument. Protecting forests and wetlands is essential, she agrees, but it is not always enough. She describes a small frog that was wiped out by a disease in its streams, even though the streams themselves were untouched.'],
              ['NARR', 'Without a group of those frogs kept safe in zoos, she says, there would have been nothing left to return once scientists brought the disease under control.'],
              ['NARR', 'She also makes a concession. Not every animal belongs in a zoo, she admits, and some of the largest, most wide-ranging species may be better off elsewhere. Several Canadian zoos have already stopped keeping elephants for that reason.'],
              ['NARR', 'Despite their differences, both experts agree on one point: some species are now so rare that they may not survive without human help. The real question, it seems, is where that help should happen.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Disagreement over whether zoos still serve a purpose', 'Plans to move zoo animals into sanctuaries', 'How zoos raise money for research in the wild', 'Which species Canadian zoos should stop keeping'] },
              { id: 'L6.2', q: 'According to Dr. Abernathy, what sets modern zoos apart?', o: ['Some of the animals they raise end up back in nature.', 'They no longer keep any very large species.', 'They are funded mainly by research grants.', 'They teach children with videos as well as animals.'] },
              { id: 'L6.3', q: 'What does Bergeron suggest about the education argument?', o: ['Most visitors take in little about conservation.', 'Videos teach children more than zoo visits do.', 'Zoos should spend more on teaching staff.', 'Children learn best from zoo playgrounds.'] },
              { id: 'L6.4', q: 'Why does Bergeron mention animals walking back and forth?', o: ['To argue that the living space itself causes harm', 'To show that keepers ignore harmless habits', 'To suggest that the animals need more exercise', 'To show that the animals are bored by visitors'] },
              { id: 'L6.5', q: 'Why does Dr. Abernathy describe the frog?', o: ['To show that saving habitat alone can fall short', 'To show that zoos can cure disease in the wild', 'To show that frogs breed easily in captivity', 'To show that streams must be protected first'] },
              { id: 'L6.6', q: 'What concession does Bergeron make?', o: ['Some zoo breeding efforts have succeeded.', 'Zoos inspire children to care about nature.', 'Ticket sales pay for useful research.', 'Sanctuaries should be open to more visitors.'] }
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
          passage: '<h3>Message</h3><p>Hi Kofi,</p><p>I\'m sorry it has taken me so long to write back. You won\'t believe how busy the last month has been, but in the best possible way. The bakery is finally open!</p><p>We opened our doors three weeks ago in the old shoe repair shop on Lincoln Street. After twelve years of doing other people\'s taxes, it still feels strange to spend my days covered in flour instead of staring at spreadsheets. My old manager at the accounting firm told me I had lost my mind, and on some mornings I wonder whether he was right.</p><p>The hours are the hardest part. I start at four every morning so the bread is ready when we open at seven. Bread has to cool for half an hour before it can be sliced, so the last loaves must come out of the oven by six thirty. On the first Saturday, the cinnamon buns were completely gone by nine thirty, and I had to apologize to a long line of disappointed customers. Since then, I have been making double batches on weekends. My nephew Theo, who is in his last year of high school, works behind the counter on Saturdays and Sundays. I honestly don\'t know how I would manage without him.</p><p>There is one big headache: the oven. It came with the shop, and it is at least thirty years old. The back heats up much faster than the front, so I have to turn every tray around halfway through baking. I would love to replace it, but a new commercial oven costs around nine thousand dollars, so it will have to wait until I have saved enough, probably sometime next spring.</p><p>Now, the real reason I am writing. I am planning a proper grand opening party on Saturday the 22nd, with free samples and live music. The problem is that the old shoe repair sign is still hanging above the door! You are the most talented designer I know. Would you be willing to create a logo and a new sign for me? I can\'t pay you much, but I can promise you free bread for the rest of your life.</p><p>Let me know what you think. And of course, you are invited to the party.</p><p>Love,<br>Ines</p>',
          questions: [
            { id: 'R1.1', q: 'Ines suggests that her former manager', o: ['thought her career change was unwise.', 'helped her choose a spot for the bakery.', 'knew she disliked working with spreadsheets.', 'urged her to go into business for herself.'] },
            { id: 'R1.2', q: 'The first Saturday most likely showed Ines that', o: ['demand was greater than she had planned for.', 'customers preferred bread to cinnamon buns.', 'she needed to open well before seven o\'clock.', 'Theo could not handle the counter by himself.'] },
            { id: 'R1.3', q: 'Ines\'s attitude toward her nephew\'s help is one of', o: ['appreciation for support she depends on.', 'reliance mixed with worry about his schooling.', 'polite tolerance of a family favour.', 'pride in how fast he has learned to bake.'] },
            { id: 'R1.4', q: 'The oven is a problem mainly because', o: ['it does not cook evenly.', 'it is too small for double batches.', 'the trays no longer fit inside it.', 'it needs an hour to warm up each day.'] },
            { id: 'R1.5', q: 'Ines expects to replace the oven', o: ['once her savings allow it.', 'right after the grand opening.', 'with a loan from her former firm.', 'before the end of this month.'] },
            { id: 'R1.6', q: 'Ines mentions free bread in order to', o: ['compensate for a modest fee.', 'promote the samples at the party.', 'thank Kofi for visiting the shop.', 'show how much bread goes unsold.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Ines,</p><p>Congratulations! I always knew you would do it. I have to admit, I still can\'t quite picture you leaving [[R1.7]], but from your message it sounds like you made the right choice. Starting work [[R1.8]] before the doors open sounds exhausting, though, so please make sure you get some rest. My sister walked past the shop last week, by the way, and she says the smell alone nearly made her late for work.</p><p>I am not surprised that the cinnamon buns sold out. Yours were always the best. Maybe you should [[R1.9]] for the party as well, so nobody goes home disappointed this time.</p><p>And yes, of course I will design your sign. It is about time [[R1.10]] came down. I will send you a few logo ideas by next weekend, which should give the sign company enough time to have everything up before [[R1.11]]. As for payment, free bread for life sounds like an excellent deal to me.</p><p>See you on the 22nd!</p><p>Kofi</p>',
          blanks: [
            { id: 'R1.7', o: ['a steady office career', 'the shop on Lincoln Street', 'your nephew at the counter', 'the bakery so soon'] },
            { id: 'R1.8', o: ['three full hours', 'two and a half hours', 'two full hours', 'half an hour'] },
            { id: 'R1.9', o: ['bake twice the usual amount', 'turn every tray around', 'skip the free samples', 'open the doors at nine thirty'] },
            { id: 'R1.10', o: ['the previous owner\'s sign', 'your thirty-year-old oven', 'the price of a new oven', 'the line outside your door'] },
            { id: 'R1.11', o: ['your big celebration', 'next spring', 'Theo finishes school', 'the new oven arrives'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following price list. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Northwind Mobile: Monthly Plans</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Plan</th><th>Monthly price</th><th>Data</th><th>Calls within Canada</th><th>Calls and texts to the U.S.</th></tr></thead><tbody>' +
            '<tr><td>Starter</td><td>$25</td><td>2 GB</td><td>300 minutes</td><td>Not included</td></tr>' +
            '<tr><td>Everyday</td><td>$40</td><td>10 GB</td><td>Unlimited</td><td>Not included</td></tr>' +
            '<tr><td>Traveller</td><td>$55</td><td>15 GB</td><td>Unlimited</td><td>Included</td></tr>' +
            '<tr><td>Max</td><td>$75</td><td>50 GB</td><td>Unlimited</td><td>Included</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>All plans include unlimited texts within Canada.</li><li>Extra data: $10 for each GB above your plan\'s limit.</li><li>24-month agreement: save $5 per month on any plan except Starter.</li><li>Each additional line on the same account: 20% off that plan\'s regular monthly price. This discount cannot be combined with the 24-month agreement saving.</li><li>Students with a valid student card receive 5 GB of bonus data each month on the Everyday plan only.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Marisol,</p><p>I finally compared the plans at Northwind Mobile. I use about 12 GB of data a month, and since I call my brother in Seattle every Sunday, I need U.S. calling. That means the cheapest plan that works for me is [[R2.1]]. I don\'t mind signing a 24-month agreement, since it [[R2.2]].</p><p>For Ana, the Everyday plan looks perfect. She uses about 14 GB a month, but because she is [[R2.3]], she would get 15 GB in total. Her phone would be the second line on my account, so her plan would cost [[R2.4]] a month.</p><p>I also checked whether the cheaper Starter plan could work for her, but she would lose her bonus data, because [[R2.5]]. Paying for all that extra data would cost far more than Everyday, so Everyday it is.</p><p>Let me know what you think before I sign anything.</p><p>Rosa</p>',
          blanks: [
            { id: 'R2.1', o: ['Traveller', 'Everyday', 'Max', 'Starter'] },
            { id: 'R2.2', o: ['lowers the monthly price of every plan except the cheapest', 'adds five gigabytes of bonus data every month', 'can be combined with the second-line discount', 'includes calls to the U.S. on every plan'] },
            { id: 'R2.3', o: ['able to show proof of enrolment', 'the second line on my account', 'signing a 24-month agreement too', 'a new customer this month'] },
            { id: 'R2.4', o: ['$32', '$35', '$40', '$27'] },
            { id: 'R2.5', o: ['the student offer is limited to a single plan', 'Starter cannot be added as a second line', 'Starter includes only 300 minutes of calls', 'the bonus requires a 24-month agreement'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A college student wants bonus data and also needs to text her family in Chicago. Based on the price list, she', o: ['cannot get both of these on a single Northwind plan.', 'should choose the Traveller plan.', 'should add a second line to Everyday.', 'must sign a 24-month agreement.'] },
            { id: 'R2.7', q: 'A customer on a 24-month agreement for the Everyday plan who is not a student and uses 13 GB in one month will pay', o: ['$65.', '$70.', '$35.', '$45.'] },
            { id: 'R2.8', q: 'A customer adding a second Traveller line asks for both the 24-month saving and the second-line discount on it. The store will refuse because', o: ['the two savings cannot be applied to the same line.', 'the 24-month saving does not apply to the Traveller plan.', 'the second-line discount is offered only on Everyday.', 'second lines must be on a cheaper plan than the first.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Building the Trans-Canada Highway</h3><p><b>A.</b> In the early 1900s, driving from one side of Canada to the other was more of an expedition than a road trip. Paved roads were rare outside of cities, and in many regions there was simply no road at all. Motorists who attempted the journey sometimes had to load their cars onto trains to get past rivers, swamps and rocky stretches. Even into the 1940s, many drivers heading west from Ontario found it easier to cross into the United States and return to Canada farther along. The few people who completed the whole trip often wrote newspaper articles about it, which only added to the feeling that crossing the country by car was an achievement rather than an ordinary holiday.</p><p><b>B.</b> After the Second World War, pressure grew for a single national road that would connect every province. In 1949, Parliament passed the Trans-Canada Highway Act. Under the agreement, the federal government would share the cost of construction, originally paying half of each approved section, while each province would be responsible for building and maintaining its own section. Ottawa also set basic standards, such as minimum lane widths and gentle slopes, so that the road would feel consistent from one province to the next. Choosing the route was not easy. Some provinces pushed for the highway to pass through their largest towns, while others preferred the shortest and cheapest path, and negotiations sometimes dragged on for years.</p><p><b>C.</b> Construction proved to be just as difficult. In northern Ontario, crews had to blast through the hard granite of the Canadian Shield, one section at a time. In British Columbia, the route through Rogers Pass in the Selkirk Mountains crossed one of the most avalanche-prone areas in the country, so engineers built long concrete sheds to protect drivers from sliding snow. Soldiers were also brought in to fire artillery at loose snow on the slopes above, bringing it down before it could build up into a dangerous slide. The highway was officially opened at Rogers Pass in 1962, although some gaps remained, and it was not considered complete until 1971.</p><p><b>D.</b> Today, the main route stretches about 7,800 kilometres from Victoria, British Columbia, to St. John\'s, Newfoundland and Labrador, making it one of the longest national highways in the world. Ferries carry travellers across the water at both ends of the country. Drivers can recognize the route by its green and white signs featuring a maple leaf, and in Victoria a "Mile 0" marker shows where the journey begins. Although much of the highway is still only two lanes wide, several provinces are adding lanes to busy sections to improve safety. Each summer, cyclists and even a few runners attempt to cross the country along the route, often to raise money for charity.</p>',
          questions: [
            { id: 'R3.1', q: 'Some early travellers moved their vehicles by rail for parts of the trip.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Provincial governments were in charge of constructing their own stretches of road.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Explosives were needed to clear a path through rock.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'A complete cross-country trip on the route includes time on boats.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'The official opening had to be postponed because of avalanche danger.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'The road was formally opened before it was fully completed.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'Newspapers paid early motorists to write about crossing the country.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Several provinces plan to make the entire route four lanes wide.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Drivers once had to leave the country to get across it.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Has Tipping Gone Too Far?</h3><p>Not long ago, leaving a tip meant adding about fifteen percent to a restaurant bill. Today, customers are asked to tip almost everywhere, from coffee counters to self-serve frozen yogurt shops, and payment machines often suggest twenty or even twenty-five percent. In a recent survey of Canadian adults, nearly two thirds said they felt pressured to tip more than they wanted to, and many said they were eating out less often as a result. Some described feeling awkward when a worker turned the screen toward them and then stood waiting while they chose a percentage.</p><p>Restaurant owner Gabrielle Fournier decided to try something different. Two years ago, her Montreal bistro dropped tipping completely and raised menu prices by eighteen percent. The extra money pays every employee a higher hourly wage, including the cooks and dishwashers, who in many restaurants receive only a small share of tips. "Our kitchen staff work just as hard as our servers," Fournier says. "It never seemed right that their pay depended on what happened in the dining room." Since the change, she says, far fewer employees have quit, although some regular customers complained about the higher prices at first.</p><p>Not everyone in the industry is convinced. Jordan Pike, who has worked as a server in Winnipeg for nine years, says tips give servers a reason to go the extra mile. "On a busy Friday night, I can earn twice what I would on a flat wage," he explains. "If you take that away, a lot of experienced servers will leave for jobs with better hours." He also believes that many customers enjoy rewarding good service and would resent paying higher prices no matter what kind of experience they had. At his restaurant, Pike adds, servers already pass a portion of their tips to the kitchen at the end of each shift, so the cooks also benefit when the dining room is busy.</p><p>Priya Nair, who studies consumer behaviour at a university in Edmonton, sees the debate a little differently. In her view, the real issue is not tipping itself but the way the request is presented. Her research found that when the smallest button on a screen starts at twenty percent, people leave larger tips but feel more irritated afterward. "Most customers will simply press whatever is in the middle," she says. She recommends that machines offer a clear "no tip" button of the same size as the others, and that suggested amounts be calculated before tax. Banning tips outright, she argues, would only replace one frustration with another.</p><p>Still, Pike agrees that something has to change. He thinks tipping should be expected only where staff serve customers at the table, not when someone simply hands over a muffin at a counter. "When people are asked to tip for everything," he says, "they start to resent tipping the people who actually depend on it." Fournier, for her part, admits that a no-tipping model may not work for every restaurant, especially in smaller towns where customers are very sensitive to price.</p>',
          questions: [
            { id: 'R4.1', q: 'The writer mentions the survey mainly in order to', o: ['show that unease about tipping is widespread.', 'prove that most diners tip fifteen percent.', 'explain why coffee shops raised their prices.', 'argue that payment machines should be banned.'] },
            { id: 'R4.2', q: 'Fournier\'s decision was most likely driven by', o: ['a sense that her cooks were treated unfairly.', 'a decline in regular guests at the bistro.', 'the rising cost of hiring skilled servers.', 'customer complaints about the tip screens.'] },
            { id: 'R4.3', q: 'Nair would most likely agree that', o: ['customers are steered by how options are laid out.', 'tipping should be removed from all restaurants.', 'counter staff deserve the same tips as servers.', 'menu prices should rise by about eighteen percent.'] },
            { id: 'R4.4', q: 'Pike is concerned that ending tips would', o: ['cause veteran wait staff to look elsewhere for work.', 'make diners pay closer attention to the service.', 'give cooks a larger share of the restaurant income.', 'force many restaurants to close on busy weekends.'] },
            { id: 'R4.5', q: 'Pike\'s attitude toward tipping is best described as', o: ['broadly in favour, with reservations.', 'firmly against it in all cases.', 'uncertain and still undecided.', 'enthusiastic in every situation.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I run a small café in a town outside Halifax, so this article hit close to home. Like many of the people in the survey, my customers say they feel [[R4.6]] when the tip screen is turned toward them. I understand why Ms. Fournier decided to [[R4.7]], and I admire her for thinking about her kitchen staff. But as she admits herself, her model might not suit everyone. In a town like mine, people are [[R4.8]], and an eighteen percent jump on the menu would scare them away.</p><p>On the other hand, I agree with Mr. Pike that nobody should be expected to tip [[R4.9]], so last month I switched off the tip screen at my counter. My staff were worried at first, so I raised their hourly wage by two dollars. I am hoping that, as at Ms. Fournier\'s bistro, the result will be that [[R4.10]].</p>',
          blanks: [
            { id: 'R4.6', o: ['put on the spot', 'fairly rewarded', 'mostly ignored', 'pleasantly surprised'] },
            { id: 'R4.7', o: ['do away with gratuities', 'lower her menu prices', 'hire more servers', 'share tips with the kitchen'] },
            { id: 'R4.8', o: ['quick to notice any price increase', 'happy to tip generously at counters', 'used to eating out several times a week', 'unfamiliar with the custom of tipping'] },
            { id: 'R4.9', o: ['just for being handed a pastry', 'for a meal served at their table', 'on a busy Friday night', 'more than ten percent'] },
            { id: 'R4.10', o: ['my employees stay longer', 'servers collect more tips', 'cooks get a share of tips', 'working hours get shorter'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You have signed up for a college course that will help you in your career. The classes take place on Tuesday and Thursday mornings from 9:00 to 11:00 a.m., which is during your usual working hours. Your team is already one person short this season, and your manager has asked everyone to avoid taking time off until the spring.</p><p>Write an email to your manager. In your email, do the following:</p><ul><li>Explain why you want to take the course.</li><li>Describe the change to your work schedule that you are asking for.</li><li>Explain how you will make sure your work is not affected.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your local school board wants students to spend more time learning each year and is asking parents and community members for their opinion. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Make each school day one hour longer, from September to June. Students would finish at about 4:30 p.m., after many sports and music programs have started.' },
            { key: 'B', label: 'Option B', text: 'Shorten the summer break by three weeks and keep the school day the same length. Older students would lose part of their summer job season, and families would have less time for travel and camps.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has a job interview on Monday for a position she really wants, and she is very nervous about it. She works long shifts all weekend, so she has only about two hours to prepare. Give her advice on how to use that time well and how to stay calm.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you received some good news. What was the news, how did you find out, how did you react, and did it change any plans you had made?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/D/scene.jpg" alt="A busy beach on a very windy afternoon">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/D/scene.jpg" alt="A busy beach on a very windy afternoon">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You need a better way to get to your new job, which is 12 kilometres from your home. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Buy a used car', image: '<img src="tests/img/D/opt_A.jpg" alt="Photo: Buy a used car">', facts: ['2017 hatchback: $9,500', 'Insurance: about $150 a month', 'Parking at work: $60 a month', '25 minutes door to door'] },
            { key: 'B', title: 'Buy an e-bike', image: '<img src="tests/img/D/opt_B.jpg" alt="Photo: Buy an e-bike">', facts: ['Price: $2,200', 'Charging: about $5 a month', 'Free bike parking at work', '35 minutes door to door'] }
          ],
          third: { key: 'C', title: 'Car-share membership', image: '<img src="tests/img/D/opt_C.jpg" alt="Photo: Car-share membership">', facts: ['Membership: $12 a month', 'Driving: $15 per hour', 'Cars parked all around the city', 'Book ahead: few cars free at rush hour'] },
          persuade: 'Your family member suggests the car-share membership instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Your neighbour is going on vacation for two weeks, and you agreed to water her garden and feed her cat every day. Today, your manager told you that you must travel to another city for work during the second week of her vacation.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot help for the full two weeks.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot go on the work trip.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Your neighbours are trying to decide whether to pay their two children, aged nine and thirteen, for doing chores such as washing dishes and cleaning their rooms. One parent says a small weekly payment teaches children how to manage money. The other says helping at home is simply part of being a family and should not be paid. They have asked for your opinion. Should parents pay their children for doing chores? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are shopping for luggage and see this unusual suitcase. Call your friend who travels a lot for work. Your friend usually flies with only a carry-on bag, and most airlines limit carry-ons to 7 kilograms. Describe the suitcase and explain whether you think your friend should buy it.', image: '<img src="tests/img/D/object.jpg" alt="An unusual suitcase in a travel shop">' }
      ]
    }
  });
})();
