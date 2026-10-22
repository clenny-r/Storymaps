/* Rowe CELPIP Mock Exam: Test 24 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/24/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '24',
    title: 'Mock Test 24',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { EAMON: { name: 'Eamon', g: 'm', skin: '#d8a47f', hair: '#3b2a20', shirt: '#1e8449', style: 'short' }, FRIDA: { name: 'Frida', g: 'f', skin: '#f3d3b8', hair: '#e0c27a', shirt: '#a93226', style: 'long' } },
        segments: [{
          lines: [
            ['EAMON', 'How about this one? It\'s full all the way round, and it\'s only fifty-five dollars.'],
            ['FRIDA', 'It\'s gorgeous, but look at the tag. Two point eight metres. Our living room ceiling is two point four, and that\'s before the stand and the star.'],
            ['EAMON', 'They\'ll cut a bit off the bottom for free. We just have to ask.'],
            ['FRIDA', 'Off the bottom, sure, but then it\'s all trunk and no branches down low. Let\'s find a shorter one and save ourselves the hassle.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Frida not want to buy the tree Eamon likes?', o: ['Trimming it would leave the bottom bare.', 'It costs more than they planned to spend.', 'The stall charges extra to cut the trunk.', 'It is too wide for their living room.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { ESME: { name: 'Esme', g: 'f', skin: '#c68e6a', hair: '#1d1410', shirt: '#7d3c98', style: 'bun' }, FABIAN: { name: 'Fabian', g: 'm', skin: '#f0c9a6', hair: '#8e5a2b', shirt: '#2e86c1', style: 'curly' } },
          segments: [
            {
              lines: [
                ['FABIAN', 'Esme, bad news about tonight. Freya Osterberg just called from the ferry terminal on the island. Every sailing\'s been cancelled because of the wind.'],
                ['ESME', 'Tonight? Her book talk starts at seven. Is there a later boat?'],
                ['FABIAN', 'Not until six tomorrow morning. She\'s stuck. Honestly, she sounded more upset about it than we are.'],
                ['ESME', 'I doubt that. We\'ve got eighty people registered, and the waiting list is longer than I\'ve ever seen for an author.'],
                ['FABIAN', 'Could we just cancel and send everyone an email?'],
                ['ESME', 'Half of them signed up at the front desk, and a lot of those are seniors who gave us a phone number, not an email. We\'d be on the phone all afternoon.'],
                ['FABIAN', 'And a few would turn up anyway, no matter what we told them. Okay, so cancelling isn\'t as simple as it sounds.'],
                ['ESME', 'No. But what if she doesn\'t have to be here in person? She could join us on a video call.'],
                ['FABIAN', 'Maybe. I\'ll ask her. She\'s looking for a café near the terminal, and she\'ll call me back.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why can the author not come to the library tonight?', o: ['Bad weather has stopped the boats.', 'She missed the last ferry of the day.', 'She is feeling unwell after her trip.', 'The terminal closed early for repairs.'] },
                { id: 'L1.2', q: 'Why does Esme think cancelling would be difficult?', o: ['Many people could only be reached by phone.', 'The waiting list has never been so long.', 'The author would be upset by a cancellation.', 'The library has no email list for the event.'] },
                { id: 'L1.3', q: 'What does Fabian suggest about some of the people registered?', o: ['They might come even if told not to.', 'They would prefer a video call.', 'They only signed up for the waiting list.', 'They would ask for their money back.'] }
              ]
            },
            {
              lines: [
                ['FABIAN', 'Good news and bad news. Freya\'s happy to do it by video. The bad news is our projector. The bulb went last week, remember?'],
                ['ESME', 'Right, and the new one won\'t get here until Thursday. What about the big TV in the teen room? It\'s on a cart.'],
                ['FABIAN', 'It\'s fine for ten teenagers playing games. For eighty people in the program room, the back rows would be squinting at a postage stamp.'],
                ['ESME', 'Then let\'s ask the community centre next door. They lend us chairs all the time. They might lend us a projector.'],
                ['FABIAN', 'Already did. They\'ll walk it over at five. And speaking of chairs, the program room only has fifty.'],
                ['ESME', 'There are another twenty stacked in storage. I\'ll set those out, and anyone left over can stand at the back. It won\'t be pretty, but it\'ll work.'],
                ['FABIAN', 'Hopefully not too many standing. Everyone on the waiting list will be hoping for no-shows.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Fabian reject the TV in the teen room?', o: ['It is too small for a large audience.', 'The teenagers are using it this evening.', 'It cannot be moved to another room.', 'It does not work with video calls.'] },
                { id: 'L1.5', q: 'How many people can be seated once the extra chairs are added?', o: ['70', '50', '80', '20'] },
                { id: 'L1.6', q: 'Where will the projector for tonight come from?', o: ['A building next door will lend one.', 'A new bulb will arrive in time.', 'Freya will bring one from the island.', 'The teen room has a spare one.'] }
              ]
            },
            {
              lines: [
                ['ESME', 'Fabian, I just did a test call with Freya. The picture keeps freezing. She says the café\'s internet is terrible.'],
                ['FABIAN', 'Can she go somewhere else? Somewhere with a decent connection?'],
                ['ESME', 'Her sister lives on the island, about ten minutes from the terminal, and she has a good connection. Freya\'s heading there now.'],
                ['FABIAN', 'And if it still drops halfway through? Eighty people staring at a frozen screen.'],
                ['ESME', 'I thought of that. She\'s emailing me the opening chapter. If we lose her, you can read it aloud while she reconnects. You\'ve got the best reading voice on staff.'],
                ['FABIAN', 'Me? I\'ll do my best impression of a famous author. What about the book signing, though? People always want that.'],
                ['ESME', 'She\'s offered to come back next month for a proper signing, no charge. I\'ll put a sheet by the door tonight.'],
                ['FABIAN', 'Perfect. Then nobody goes home empty-handed, even if the video doesn\'t cooperate.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why is Freya going to her sister\'s home?', o: ['To get a steadier video link', 'To pick up copies of her new book', 'To wait there for the morning ferry', 'To email the opening chapter to Esme'] },
                { id: 'L1.8', q: 'What is the sheet by the door probably for?', o: ['To gather names for a future signing', 'To find out who will need a seat tonight', 'To collect emails for future library events', 'To choose who will read the opening chapter'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { FLORIST: { name: 'Florist', g: 'f', skin: '#8d5a3b', hair: '#120c08', shirt: '#c0392b', style: 'curly' }, EDWIN: { name: 'Edwin', g: 'm', skin: '#e8c3a0', hair: '#bdc3c7', shirt: '#34495e', style: 'short' } },
          segments: [{
            lines: [
              ['FLORIST', 'Good morning, Bloom and Bramble. How can I help?'],
              ['EDWIN', 'Hi. I\'d like to send something to my mother. She turns eighty on Friday, and I\'m stuck on a job site up north until next week, so I can\'t be there.'],
              ['FLORIST', 'Oh, that\'s a big one. Where would it be going?'],
              ['EDWIN', 'Birchmount Lodge, on Brock Street. She moved in there in the spring.'],
              ['FLORIST', 'We deliver there all the time. Just so you know, the Lodge stopped allowing glass vases last year, after a resident cut her hand on a broken one. So we\'d put the arrangement in a basket or a ceramic pot.'],
              ['EDWIN', 'A pot sounds better, actually. She could hang on to it afterward. She always had plants on every windowsill.'],
              ['FLORIST', 'Then can I suggest something? Cut flowers last a week, ten days at best. A potted orchid could keep blooming for months.'],
              ['EDWIN', 'Hmm. Her eyesight isn\'t what it was, and I\'m not sure she\'d keep up with watering. Although my sister drops by every Sunday. She could keep an eye on it.'],
              ['FLORIST', 'Orchids are pretty forgiving. A splash of water once a week is plenty. The orchid in a ceramic pot is sixty-five, and delivery to the Lodge is twelve.'],
              ['EDWIN', 'Let\'s do that. Can it get there in the morning? They\'re throwing her a little party at two.'],
              ['FLORIST', 'Our driver does the north end in the afternoon, so it would normally arrive between one and four. A morning delivery is an extra fifteen.'],
              ['EDWIN', 'If it turns up at three, she\'ll have missed the chance to show it off. Okay, put me down for the morning.'],
              ['FLORIST', 'Will do. And what would you like on the card?'],
              ['EDWIN', 'Something like, happy eightieth, Mom, sorry I can\'t be there, see you next Saturday, love, Edwin. Oh, and could the writing be large? She won\'t wear her glasses in front of people.'],
              ['FLORIST', 'Of course. I\'ll print it in big, clear letters rather than writing it by hand. Now, I just need a card number.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Edwin ordering a gift by phone?', o: ['His work keeps him too far away to attend.', 'His sister usually handles family gifts.', 'His mother asked for flowers for her party.', 'The Lodge does not allow visitors on Friday.'] },
              { id: 'L2.2', q: 'Why can the arrangement not come in a glass vase?', o: ['The care home banned them after an accident.', 'Glass might break on the drive to the north end.', 'His mother wants a pot she can keep afterward.', 'Glass vases cost more than ceramic pots.'] },
              { id: 'L2.3', q: 'Why does Edwin hesitate about the orchid?', o: ['He doubts his mother could care for it alone.', 'He thinks it would be too expensive to deliver.', 'He knows his mother prefers cut flowers.', 'He worries it will not arrive before the party.'] },
              { id: 'L2.4', q: 'How much will Edwin pay in total?', o: ['$92', '$77', '$80', '$65'] },
              { id: 'L2.5', q: 'What does Edwin suggest about his mother?', o: ['She is self-conscious about needing glasses.', 'She can no longer read handwritten notes.', 'She would much prefer cut flowers to a plant.', 'She will not be able to attend her party.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#f2cfb0', hair: '#6b4a2b', shirt: '#117a65', style: 'long' }, EDGAR: { name: 'Edgar Fontaine', g: 'm', skin: '#b07850', hair: '#5d4037', shirt: '#7b241c', style: 'bald' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Edgar Fontaine, who has been making the ice at the community arena in Pembroke for twenty-two years. Edgar, most people assume ice just sort of happens.'],
              ['EDGAR', 'Everybody does. They picture us flooding the floor and waiting. In fact, it takes about a week every fall, and we start with less than a centimetre of water at a time.'],
              ['HOST', 'Why so little?'],
              ['EDGAR', 'Thin layers freeze hard and flat. Pour too much at once and you get soft spots and bumps, and hockey players notice. Once there\'s a thin base, we paint the whole surface white, paint the lines and logos, and keep building on top.'],
              ['HOST', 'So the white isn\'t the ice itself?'],
              ['EDGAR', 'No, real ice is grey, almost see-through. Without the paint, the puck practically disappears against the concrete, and the whole building looks gloomy.'],
              ['HOST', 'How did you get into this line of work?'],
              ['EDGAR', 'I was a rink rat. As a teenager, I\'d shovel snow off the ice between periods in exchange for free skating time. The old manager eventually let me drive the resurfacer, and I guess I never got off it.'],
              ['HOST', 'What\'s the toughest part of the job?'],
              ['EDGAR', 'Spring. When it\'s warm and muggy outside and you\'ve got a packed building for a tournament final, all that body heat and moisture works against you. The ice gets soft and slow, and every coach in the place blames me.'],
              ['HOST', 'Do people complain much?'],
              ['EDGAR', 'Mostly parents. A figure skater wants softer ice, a hockey player wants it hard and fast, and they\'re on the same surface an hour apart. I keep a notebook of every adjustment I make, so at least I can explain myself.'],
              ['HOST', 'Is the ice you make at home any different?'],
              ['EDGAR', 'Ha. Every winter I flood a little rink in my backyard for the neighbourhood kids. No paint, no lines, lumpy in places. And honestly, it gets more use per square metre than the arena does.'],
              ['HOST', 'Is it hard to find people to do your job?'],
              ['EDGAR', 'Very. The hours are early mornings and late nights, and the pay isn\'t great. The town is sending two young staff on a training course this spring, which is a start, but I\'d like to see a proper apprenticeship.']
            ],
            questions: [
              { id: 'L3.1', q: 'What does Edgar say about how arena ice is made?', o: ['It is formed gradually, a bit at a time.', 'It is formed by one large flood of water.', 'It takes about a day to prepare.', 'It is painted white once it is finished.'] },
              { id: 'L3.2', q: 'Why is the ice painted white?', o: ['So the puck stands out clearly', 'To protect the concrete floor underneath', 'To help the ice freeze harder and faster', 'To cover up bumps and soft spots'] },
              { id: 'L3.3', q: 'How did Edgar start working with ice?', o: ['He traded unpaid work for time on the ice.', 'He took a training course as a teenager.', 'He was hired to drive the resurfacer at sixteen.', 'He played hockey for the town\'s junior team.'] },
              { id: 'L3.4', q: 'Why does Edgar mention tournament finals in spring?', o: ['To describe conditions that soften the ice', 'To explain why coaches respect his work', 'To show when the arena earns the most money', 'To suggest that tournaments should move to winter'] },
              { id: 'L3.5', q: 'Why does Edgar keep a notebook?', o: ['To justify the changes he makes to the ice', 'To record complaints from figure skaters', 'To plan the schedule for hockey and skating', 'To track how many people use the arena'] },
              { id: 'L3.6', q: 'What does Edgar suggest about his backyard rink?', o: ['It is rough but very popular.', 'It is better made than the arena\'s ice.', 'It is painted the same way as the arena.', 'It is used mostly by figure skaters.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#a9714b', hair: '#2a1b12', shirt: '#1a5276', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Swimmers in Port Esker will be able to jump into the harbour this weekend for the first time in more than fifty years, when the city opens a new swimming area beside the old ferry terminal.'],
              ['NEWS', 'For decades, the harbour was considered too dirty for swimming, because a fish plant and the city\'s own sewer pipes emptied straight into the water. The plant closed in the nineteen nineties, and a new treatment system was finished three years ago.'],
              ['NEWS', 'The swimming area includes a floating dock, two ladders and a small sandy beach. Lifeguards will be on duty from eleven in the morning until seven in the evening, every day until Labour Day.'],
              ['NEWS', 'The water will be tested every morning, and the results will be posted online and on a sign at the entrance by nine a.m.'],
              ['NEWS', 'After heavy rain, however, the area will close for two days, because storm drains can still overflow into the harbour during a downpour.'],
              ['NEWS', 'Children under twelve must be with an adult, and dogs, glass bottles and alcohol are not allowed.'],
              ['NEWS', 'The project cost two point four million dollars. The federal government paid one million, the province contributed eight hundred thousand, and the city covered the rest.'],
              ['NEWS', 'Not everyone is pleased. Some owners of boats moored nearby worry that swimmers will drift into the channel, and the city has promised to mark the edge of the swimming area with a line of buoys.'],
              ['NEWS', 'The mayor says she hopes the new beach will help residents think of the harbour as a place to enjoy, rather than a place to avoid.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['The return of swimming to a city harbour', 'A new treatment system for the city\'s sewage', 'The closing of a fish plant near the harbour', 'New rules for boats using the harbour channel'] },
              { id: 'L4.2', q: 'Why was swimming in the harbour unsafe in the past?', o: ['Waste was released directly into the water.', 'Too many boats used the channel nearby.', 'There were no lifeguards on duty there.', 'The water was too cold for most of the year.'] },
              { id: 'L4.3', q: 'Why will the area close after heavy rain?', o: ['Storm runoff may make the water unsafe.', 'The floating dock becomes too slippery.', 'Lifeguards cannot see swimmers clearly.', 'Water tests cannot be done in a storm.'] },
              { id: 'L4.4', q: 'How much did the city itself pay for the project?', o: ['$600,000', '$800,000', '$1 million', '$1.4 million'] },
              { id: 'L4.5', q: 'What does the mayor hope will change?', o: ['How residents see the harbour', 'How many boats use the harbour', 'How often the water is tested', 'How much the city spends on parks'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Umpire shortage', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { FRANCINE: { name: 'Francine', g: 'f', skin: '#f0c9a6', hair: '#c0392b', shirt: '#1f618d', style: 'bun' }, EMMETT: { name: 'Emmett', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#b9770e', style: 'short' }, ELOISE: { name: 'Eloise', g: 'f', skin: '#d4a373', hair: '#3b2a20', shirt: '#196f3d', style: 'curly' } },
          segments: [{
            lines: [
              ['FRANCINE', 'Okay, let\'s start. We\'ve lost twelve umpires since last season. That leaves nineteen for over two hundred games.'],
              ['EMMETT', 'Twelve? I knew it was bad, but not that bad. Did any of them actually say why they left?'],
              ['ELOISE', 'I called every one of them. Most said the same thing: parents yelling from the stands.'],
              ['FRANCINE', 'One of them is sixteen. A parent shouted at her all the way to the parking lot.'],
              ['EMMETT', 'That\'s awful. Okay, so first, we raise the pay. Twenty-five dollars a game is nothing these days.'],
              ['ELOISE', 'I\'m not against more money, but money won\'t fix the yelling. They didn\'t quit over pay.'],
              ['EMMETT', 'Maybe not, but better pay brings in new people, and right now we badly need more bodies on the field.'],
              ['FRANCINE', 'Raising it to thirty-five would cost about two thousand dollars a season. We can just about manage that.'],
              ['EMMETT', 'Then let\'s do it. What about the yelling, though? We can\'t ban parents from their own kids\' games.'],
              ['ELOISE', 'Why not? Some leagues make every parent sign a code of conduct when they register.'],
              ['ELOISE', 'Break it once, you get a warning. Break it twice, you sit out the next game.'],
              ['EMMETT', 'And who enforces that? The umpire? That\'s exactly the person they\'re yelling at.'],
              ['FRANCINE', 'Good point. We\'d need a volunteer at each field, someone in a vest whose only job is the stands.'],
              ['ELOISE', 'I\'d happily take a few Saturdays myself. And honestly, a calm adult nearby changes how people behave.'],
              ['EMMETT', 'Okay, I\'m convinced. Code of conduct, plus a volunteer at each field.'],
              ['FRANCINE', 'Now, the other problem. Even if nobody else quits, nineteen umpires just isn\'t enough.'],
              ['ELOISE', 'What about the older players? Fourteen and fifteen-year-olds could umpire the little kids\' games.'],
              ['EMMETT', 'Kids umpiring kids? Some of these parents would eat them alive by the second inning.'],
              ['ELOISE', 'Not if each one is paired with an adult for their first season. A mentor standing right beside them.'],
              ['FRANCINE', 'I like that. They\'d be learning, and we\'d be growing our own umpires instead of begging for them.'],
              ['EMMETT', 'Fine, but the pairing has to be real. I don\'t want a mentor sitting in his truck.'],
              ['FRANCINE', 'Agreed. I\'ll draft the code of conduct this week, and we\'ll vote on the pay increase Thursday.'],
              ['ELOISE', 'And I\'ll ask the coaches of the older teams which players might be interested.'],
              ['EMMETT', 'Let\'s also put a sign at every field. Our umpires are learning. So are you.'],
              ['FRANCINE', 'I love that. Short, friendly, and just a little bit pointed.'],
              ['ELOISE', 'A little bit? I think it\'s perfect.']
            ],
            questions: [
              { id: 'L5.1', q: 'How many umpires did the league have last season?', o: ['31', '19', '12', '25'] },
              { id: 'L5.2', q: 'According to Eloise, why did most umpires quit?', o: ['Spectators kept treating them badly.', 'The pay was too low for the work.', 'They had too many games to cover.', 'They were not given enough training.'] },
              { id: 'L5.3', q: 'What is Eloise\'s view on raising the pay?', o: ['It does not address why people left.', 'It is the most important change to make.', 'It would cost the league far too much.', 'It should apply only to new umpires.'] },
              { id: 'L5.4', q: 'Why does Emmett question the code of conduct at first?', o: ['Umpires would be left to enforce it.', 'Parents would refuse to sign it.', 'It would stop parents from attending games.', 'It would cost too much to set up.'] },
              { id: 'L5.5', q: 'What is Eloise\'s point about having a volunteer at each field?', o: ['A steady presence helps parents act better.', 'Volunteers could step in for the missing umpires.', 'Parents would rather talk to volunteers.', 'It would free up umpires on Saturdays.'] },
              { id: 'L5.6', q: 'Why does Francine like the idea of young umpires?', o: ['The league could develop its own officials.', 'Young umpires would cost the league less to pay.', 'Older players need something to do.', 'Parents trust players they already know.'] },
              { id: 'L5.7', q: 'What condition does Emmett set for the mentor plan?', o: ['Mentors must actually be present on the field.', 'Mentors must be paid thirty-five dollars a game.', 'Young umpires must be at least sixteen.', 'Young umpires must work only on Saturdays.'] },
              { id: 'L5.8', q: 'What does Francine think of the sign Emmett suggests?', o: ['It is polite but sends a clear message.', 'It is too harsh for a children\'s league.', 'It is too long for parents to read.', 'It would only work at the older games.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Grass or turf?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#0e6655', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'When a Canadian city builds a new sports field, it now faces a choice before the first shovel goes in: natural grass or artificial turf.'],
              ['NARR', 'A turf field can cost one and a half million dollars, roughly three times as much as grass. Supporters say it pays for itself. Critics say the real costs come later.'],
              ['NARR', 'Eleanor Vasquez, who chairs a youth soccer association with more than two thousand players, is firmly on the side of turf. Her first argument is about playing time.'],
              ['NARR', 'A grass field, she explains, needs to rest. Use it more than about twenty hours a week and it turns to mud, and after heavy rain it has to close altogether.'],
              ['NARR', '"Last spring we cancelled nine Saturdays of games because of soggy fields," she says. "A turf field would have been open every one of those days, and for three times as many hours a week."'],
              ['NARR', 'Her second argument is about money over time. Grass needs mowing, watering, fertilizer and reseeding every year, while turf needs little more than brushing. Spread across years of heavy use, she says, turf costs less per hour of play.'],
              ['NARR', '"Every hour a child spends playing instead of sitting at home is worth something," she adds.'],
              ['NARR', 'Vasquez concedes that turf has drawbacks. It gets uncomfortably hot in July, and her association now schedules midday summer games on grass. But she argues that cancelled seasons hurt children far more than a few hot afternoons.'],
              ['NARR', 'Errol Buckingham, an environmental scientist who has studied sports surfaces for fifteen years, sees it differently. His first concern is heat.'],
              ['NARR', 'On a sunny day, he says, a turf surface can be twenty to thirty degrees hotter than the air, hot enough to burn bare skin.'],
              ['NARR', 'As summers grow hotter, he expects turf fields to be unusable on many afternoons, just when children are out of school.'],
              ['NARR', 'His second concern is what happens to the field itself. Most turf contains small rubber pellets that wash into storm drains and streams, and the carpet must be replaced roughly every ten years, usually ending up in a landfill.'],
              ['NARR', '"People compare the price of building turf with the price of building grass," he says. "They forget that in ten years, they\'ll be paying for a whole new carpet."'],
              ['NARR', 'Buckingham agrees that ordinary grass fields close too often. But he argues the answer is better grass, not plastic.'], ['NARR', 'Fields built with proper drainage and sand underneath can handle far more use and reopen within hours of a storm, at a fraction of the price.'],
              ['NARR', 'Vasquez replies that even those fields need several weeks of rest each year, and that in a city with more teams than fields, every week counts.'],
              ['NARR', 'Both agree on one point. Before any city decides, it should count how many hours its fields are actually booked. A field that sits empty most evenings, they say, does not need to be turf or anything else expensive.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether new fields should use grass or turf', 'How to reduce the cost of youth soccer for families', 'Why sports fields close after rain', 'How cities decide when to book their sports fields'] },
              { id: 'L6.2', q: 'Why does Vasquez mention last spring\'s Saturdays?', o: ['To show how often grass fields become unplayable', 'To show that turf fields can get too hot in summer', 'To explain why her association has so many players', 'To argue that games should move to weekday evenings'] },
              { id: 'L6.3', q: 'According to Vasquez, why is turf cheaper in the long run?', o: ['It needs little upkeep and can be used heavily.', 'It costs about a third as much as grass to build.', 'It lasts much longer than grass before it needs replacing.', 'It lets the association charge higher fees.'] },
              { id: 'L6.4', q: 'What concession does Vasquez make?', o: ['Turf can become too hot for some summer games.', 'Grass fields are cheaper to build than she thought.', 'Children prefer playing on natural grass.', 'Turf fields must be replaced every ten years.'] },
              { id: 'L6.5', q: 'Why does Buckingham mention a new carpet?', o: ['To point out a future cost people overlook', 'To explain how rubber pellets reach local streams', 'To show that turf fields stay hot after sunset', 'To argue that grass needs replacing more often'] },
              { id: 'L6.6', q: 'How does Vasquez respond to the idea of better grass fields?', o: ['Even improved grass would lose valuable playing weeks.', 'Well-drained grass would cost more than turf to build.', 'Sand under a field makes it unsafe for young players.', 'Her association has already tried drained fields.'] }
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
          passage: '<h3>Message</h3><p>Dear Elspeth,</p><p>You will never guess what Fergus and I have done. After years of talking about it over your kitchen table, we have finally bought a sailboat. She is twenty-eight feet long, thirty-one years old and called <i>Fair Wind</i>, although Fergus has taken to calling her "the money pit" when he thinks I cannot hear. We paid $9,000, which is far less than we had budgeted, mainly because the sails are worn out and will cost about $2,400 to replace before we take her anywhere serious.</p><p>We both passed the basic sailing course in May, so we can now tie knots, read a chart and, most of the time, bring the boat back to the dock without hitting anything. But I know perfectly well that a weekend course is no substitute for years on the water, which is where you come in.</p><p>Our big plan is a week on the Bras d\'Or Lakes at the beginning of August. The lakes are sheltered, which is why everyone recommends them for beginners, but the marina owner warned us that the afternoon winds can pick up without much warning, and that the channels between the islands are narrow. Would you consider joining us for the first three or four days? You would have the front cabin to yourself, and Fergus has promised to do all the cooking, which, frankly, is the only reason I agreed to this trip in the first place.</p><p>I know your knee is still recovering from the surgery, so please say no if climbing in and out of a boat would be too much. Even an hour on the phone going over our route would help enormously.</p><p>One more thing. The marina charges $1,800 for a summer mooring, or $1,100 if we keep the boat on a trailer in their yard and launch it each time we go out. Fergus thinks the trailer is a bargain. I think it means a lot of Saturday mornings spent backing a trailer down a ramp while half the marina watches. What would you do?</p><p>With love,<br>Frances</p>',
          questions: [
            { id: 'R1.1', q: 'Frances mentions the name Fergus uses for the boat to suggest that', o: ['he is worried about how much it will cost.', 'he did not want to buy a boat at all.', 'the boat has already broken down twice.', 'he would like to give the boat a new name.'] },
            { id: 'R1.2', q: 'The boat cost less than expected because', o: ['part of its equipment needs replacing.', 'it is smaller than most sailboats.', 'the seller wanted to sell it quickly.', 'Frances bargained with the marina owner.'] },
            { id: 'R1.3', q: 'Frances believes that the sailing course', o: ['was useful but not enough on its own.', 'was too difficult for complete beginners.', 'taught them nothing about reading charts.', 'should have lasted longer than a weekend.'] },
            { id: 'R1.4', q: 'According to the marina owner, sailors on the lakes should be ready for', o: ['sudden changes in the wind.', 'storms that last several days.', 'busy docks at the marina.', 'very shallow water near the islands.'] },
            { id: 'R1.5', q: 'Frances suggests that she agreed to the trip mainly because', o: ['someone else will do the cooking.', 'Elspeth promised to come along.', 'the marina owner recommended it.', 'Fergus offered to pay for the sails.'] },
            { id: 'R1.6', q: 'Frances is reluctant to keep the boat on a trailer because', o: ['launching it often would be awkward and public.', 'it would cost more than a summer mooring.', 'the marina yard is too far from the lakes.', 'Fergus does not know how to drive with a trailer.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Frances,</p><p>Congratulations! I laughed out loud at "the money pit," but honestly, $9,000 for a boat that size is a fair price, as long as you remember to budget for [[R1.7]] before August.</p><p>I would love to come. My physiotherapist says my knee will be fine by then, as long as I [[R1.8]]. Put me in that front cabin, and I will hold Fergus to his promise about the meals.</p><p>As for the route, the lakes are a good place to start, but take the marina owner seriously. Plan to [[R1.9]], so that you are tied up somewhere safe before the wind picks up. And go slowly through [[R1.10]] until you know them well.</p><p>On the mooring question, I am on your side. The difference is only [[R1.11]] for the whole summer, and you would earn it back in saved time and temper within a month. Let Fergus win the next argument.</p><p>Love,<br>Elspeth</p>',
          blanks: [
            { id: 'R1.7', o: ['new sails', 'a new trailer', 'a summer mooring', 'another sailing course'] },
            { id: 'R1.8', o: ['take care getting on and off the boat', 'stay in the front cabin for the whole week', 'leave before the afternoon winds', 'do all of the cooking on board'] },
            { id: 'R1.9', o: ['do most of your sailing in the mornings', 'sail only on the widest parts of the lakes', 'spend every night back at the marina', 'avoid the lakes in early August'] },
            { id: 'R1.10', o: ['the narrow channels', 'the open water of the lakes', 'the docks at the marina', 'the ramp for the trailer'] },
            { id: 'R1.11', o: ['$700', '$1,100', '$1,800', '$2,400'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Fieldstone Snow Services, Elora: Seasonal Plans</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Plan</th><th>What is cleared</th><th>Single driveway</th><th>Double driveway</th></tr></thead><tbody>' +
            '<tr><td>Basic</td><td>Driveway only</td><td>$320</td><td>$420</td></tr>' +
            '<tr><td>Standard</td><td>Driveway and front walkway</td><td>$390</td><td>$490</td></tr>' +
            '<tr><td>Complete</td><td>Driveway, front walkway, front steps, plus salt</td><td>$470</td><td>$570</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Prices are for the full season, November 15 to April 15.</li><li>Crews come out once 5 cm of snow has fallen. Smaller amounts are not cleared.</li><li>If snow stops falling overnight, driveways are cleared by 7:00 a.m. If it stops during the day, clearing is done within 6 hours.</li><li>Customers who sign up before October 31 save $40.</li><li>Customers aged 65 and over save 10% on the Complete plan only.</li><li>The seniors\' discount cannot be combined with the early sign-up saving. Customers who qualify for both receive whichever saving is larger.</li><li>The season price may be paid in full or in two equal payments, on November 15 and January 15.</li><li>One-time visits for non-customers, or any visit outside the season: $60 each.</li><li>Crews clear around parked cars. Snow left beside a parked car is the customer\'s responsibility.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dad,</p><p>I looked into Fieldstone Snow Services for you and Mom this winter. With your knee surgery booked for December, you should not be shovelling at all. You have the double driveway and the front walkway, and you said you would rather salt the steps yourself, so the [[R2.1]] plan would be enough. I know you were hoping for a discount now that you are 67, but the seniors\' discount [[R2.2]].</p><p>Today is October 20, so if you sign up this week, the season would cost [[R2.3]] in total. If that is too much at once, you could pay [[R2.4]] in November and the same again in January.</p><p>One thing to remember: since Mom\'s car usually stays in the driveway overnight, [[R2.5]]. Maybe she could park on the street when a big storm is coming.</p><p>Love,<br>Fern</p>',
          blanks: [
            { id: 'R2.1', o: ['Standard', 'Basic', 'Complete', 'one-time visit'] },
            { id: 'R2.2', o: ['does not apply to that plan', 'is only for single driveways', 'starts when you turn 70', 'cannot be split into two payments'] },
            { id: 'R2.3', o: ['$450', '$490', '$441', '$410'] },
            { id: 'R2.4', o: ['$225', '$245', '$220.50', '$250'] },
            { id: 'R2.5', o: ['the snow beside it will be yours to clear', 'the crew will not clear the driveway at all', 'you will be charged for an extra visit', 'it will have to be moved before 7:00 a.m.'] }
          ],
          questions: [
            { id: 'R2.6', q: 'If 3 cm of snow falls overnight, a customer on the Basic plan can expect', o: ['no visit from the crew.', 'the driveway to be cleared by 7:00 a.m.', 'a visit within 6 hours.', 'to pay $60 for the clearing.'] },
            { id: 'R2.7', q: 'A Basic plan customer asks for her driveway to be cleared after a 10 cm snowfall on April 20. She will', o: ['pay $60 for the visit.', 'have it cleared at no extra cost.', 'have it cleared by 7:00 a.m. for free.', 'not be able to get a visit at all.'] },
            { id: 'R2.8', q: 'A 70-year-old who signs up in November for the Complete plan on a single driveway will pay', o: ['$423.', '$430.', '$470.', '$387.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>A Country of Lakes</h3><p><b>A.</b> Fly over northern Ontario, Quebec or Manitoba on a clear day, and the ground below looks less like land than like a sheet of broken glass. By some estimates, Canada holds more than half of all the lakes on Earth, from vast inland seas to ponds too small to have a name. Ontario alone is often said to have about a quarter of a million. Nobody has ever managed to count them all; new satellite surveys keep finding thousands that do not appear on older maps. For many Canadians, a lake is not a special destination but simply part of the landscape, as ordinary as a field or a hill. Some lakes are so large that they shape the local weather, while others freeze right to the bottom every winter.</p><p><b>B.</b> The main reason for this abundance lies in the last ice age. Until roughly twelve thousand years ago, most of the country was buried under ice up to three kilometres thick. As these enormous glaciers crept across the land, they scraped away the soil and carved hollows into the hard rock beneath. When the climate warmed and the ice melted, water filled those hollows. In other places, the retreating glaciers left behind long ridges of sand and gravel that blocked rivers and created lakes behind them. Because the hard, ancient rock across much of the country does not let water drain away easily, many of these basins have stayed full ever since.</p><p><b>C.</b> Lakes are not permanent, however. Rivers carry mud and sand into them year after year, and dead plants settle on the bottom. Over thousands of years, a shallow lake slowly fills in, becoming first a marsh and eventually dry land. These slowly changing wetlands are some of the richest wildlife habitat in the country, home to frogs, ducks and moose. At the same time, new lakes are still being made. Beavers, which build dams across streams, can flood a small valley within a single season, and the ponds they create may last for decades after the animals have moved on.</p><p><b>D.</b> Canadians depend on their lakes for drinking water, fishing, electricity and recreation, and that dependence brings responsibility. In the past, acid rain caused by factory smoke damaged thousands of lakes in Ontario and Quebec, killing fish and plants. Since stricter pollution rules were introduced, many of those lakes have slowly recovered, although some have not. Today, scientists worry more about warmer summers and about plants and animals carried from one lake to another on the bottoms of boats. Many provinces now ask boaters to clean, drain and dry their boats before moving them to a new lake. In cottage country, volunteers also help by measuring how clear the water is each summer and sharing the results with scientists.</p>',
          questions: [
            { id: 'R3.1', q: 'The total number of lakes in the country is still unknown.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Moving ice wore away the rock beneath it.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Some lakes formed where material left by melting ice dammed rivers.', fixed: true, a: 'B' },
            { id: 'R3.4', q: 'A lake can gradually turn into solid ground.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Water bodies made by animals can outlast the animals\' presence.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'Not every lake harmed by pollution has fully recovered.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'The ice that covered Canada was thickest in the far North.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Beavers are now protected by law in most provinces.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'The type of rock in much of the country helps explain why many lakes are still full today.', fixed: true, a: 'B' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Parents Have to Volunteer?</h3><p>When the Fallbrook Youth Soccer Club announced that every family would have to give twelve hours of volunteer time next season, or pay an extra $150, the reaction online was immediate. Some parents called it overdue. Others called it a tax on busy families. The club, which has about nine hundred players between the ages of five and seventeen, is one of a growing number of community sports groups across Canada facing the same question: what happens when the volunteers run out?</p><p>Faye Robichaud, the club\'s president, says the rule was not her first choice. For years, she explains, the same thirty or forty parents coached, ran the canteen, lined the fields and organized tournaments, while hundreds of others simply dropped their children off. "Many of those core volunteers have kids who have now aged out," she says. "When they leave, there is nobody behind them." She argues that twelve hours over a season, roughly one hour a week, is a modest request, and that the $150 option exists for families who truly cannot help. Last season, she adds, two teams came close to being cancelled because no adult would agree to coach.</p><p>Everton Blake, a single father of two who works rotating shifts at a distribution centre, sees it differently. "I would love to coach, but I never know my schedule more than two weeks ahead," he says. For him, the choice is not really between volunteering and paying; it is between paying and not registering his children at all. He also questions whether forced volunteers are good volunteers. "Someone who is there only because they have to be is not going to make the canteen a happy place," he says. Blake does agree that the club has a real problem, and says he would gladly help with tasks that could be done from home, such as updating the website or making phone calls.</p><p>Fiorella Mancini, who studies volunteering in community sport at a university in Ontario, says both sides have a point. Her research suggests that required hours do increase the number of people who help, at least in the first year. However, families with lower incomes and irregular work are more likely to pay the fee or quietly drop out, which can make a club less diverse over time. She recommends that clubs offer a wide range of tasks, including short ones that can be done at any time, and that the fee be reduced or waived for families who already receive help paying for registration.</p><p>Robichaud says the club is listening. After a heated meeting last month, the board agreed that tasks done from home will count toward the twelve hours, and that families receiving help with fees will not have to pay the $150. Blake calls the changes "a good start," but says he will wait to see the actual list of tasks before he is convinced. The new rule takes effect in April.</p>',
          questions: [
            { id: 'R4.1', q: 'The club introduced the new rule mainly because', o: ['its volunteers were not being replaced.', 'it needed to raise its registration fees.', 'parents complained about poor coaching.', 'two teams were cancelled last season.'] },
            { id: 'R4.2', q: 'Robichaud describes the $150 fee as', o: ['an option for those unable to give time.', 'a way to pay for new playing fields.', 'a penalty for parents who skip meetings.', 'a temporary charge for one season only.'] },
            { id: 'R4.3', q: 'For Blake, the new rule could mean that', o: ['his children might not play at all.', 'he would have to coach a team.', 'he would lose shifts at work.', 'he would pay twice as much as others.'] },
            { id: 'R4.4', q: 'According to Mancini, required hours can lead to', o: ['a less varied membership over time.', 'fewer volunteers in the first year.', 'higher costs for the whole club.', 'better coaching for older players.'] },
            { id: 'R4.5', q: 'Blake\'s response to the board\'s changes can best be described as', o: ['cautiously hopeful.', 'completely satisfied.', 'openly hostile.', 'mostly indifferent.'] }
          ],
          reply: '<h3>Reader comment</h3><p>As a parent with a son in Fallbrook\'s under-eleven division, I have mixed feelings about this. Ms. Robichaud is right that the club cannot keep relying on [[R4.6]], and I was shocked to read that two teams nearly [[R4.7]].</p><p>Still, Mr. Blake\'s situation is common. Many parents work schedules that [[R4.8]], and for them, the fee is not really a choice. I am glad the board listened and agreed that [[R4.9]], which is close to what Ms. Mancini recommends.</p><p>Personally, I will happily give my twelve hours. I have already signed up to line the fields on Saturday mornings, and I might even try a shift in the canteen. But the club should take Ms. Mancini\'s warning seriously: if families with less money [[R4.10]], everyone loses.</p>',
          blanks: [
            { id: 'R4.6', o: ['a small group of the same parents', 'parents who coach two teams at once', 'the money from the canteen', 'players who have aged out'] },
            { id: 'R4.7', o: ['went without a coach', 'lost every game', 'ran out of players', 'missed their tournaments'] },
            { id: 'R4.8', o: ['change from week to week', 'end early on weekends', 'include working from home', 'are posted months ahead'] },
            { id: 'R4.9', o: ['work done from home will count', 'the fee will be raised next year', 'only coaches need to volunteer', 'the rule will start in the fall'] },
            { id: 'R4.10', o: ['end up leaving the club', 'volunteer more than twelve hours', 'join the board of the club', 'receive help with their fees'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Two weeks ago, you paid a local tree service $1,200 to remove a dead maple tree from your backyard. The written quote said the price included grinding the stump and cleaning up the yard. The crew cut the tree down, but they left a large stump, piles of sawdust and branches all over your lawn. You have called the office three times and left messages, but nobody has called you back. Your daughter\'s graduation party is in your backyard in ten days.</p><p>Write an email to the owner of the tree service. In your email, do the following:</p><ul><li>Describe what the quote promised and what the crew left behind.</li><li>Explain why the timing makes this a serious problem for you.</li><li>Say what you want the company to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>A local business has given $30,000 to your child\'s elementary school, and the parent council is asking families how the money should be spent. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Replace the old playground equipment with a new climbing structure. However, the playground would be closed for most of the fall while it is built, and the new equipment would mainly be used by the younger grades.' },
            { key: 'B', label: 'Option B', text: 'Start a free breakfast program for every student, five mornings a week, for the next two years. However, it would need about eight parent volunteers every morning, and after two years the school would have to find new money to keep it going.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a game or sport you enjoyed as a child, and explain why you liked it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has signed up for a 100-kilometre charity bike ride in three months to raise money for a children\'s hospital. She has never cycled more than 20 kilometres at once, she works rotating shifts, and her only bike is an old one with heavy tires. Give your friend advice on how to prepare for the ride.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to speak or perform in front of a group of people. How did you prepare, how did it go, and what would you do differently if you did it again?' },
        {
          id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/24/scene.jpg" alt="An elementary school sports day on a playing field">',
          picture: 'Comic style scene of an elementary school sports day on a sunny grass field in June, with a brick school building and a chain link fence in the background. 14 people in total. Activities: 1. Two children hop in a sack race, and one of them is falling forward onto the grass. 2. A woman teacher with a whistle in her mouth and a clipboard stands at a finish line, which is a ribbon tied between two poles. 3. Two children walk carefully in an egg and spoon race; one egg is wobbling on the edge of its spoon. 4. A father kneels on the grass taking a photo with his phone. 5. A woman volunteer pours water from a large orange jug into paper cups at a folding table covered with cups. 6. A small girl sits on the grass holding her scraped knee and crying, while a man teacher with a red first aid kit crouches beside her. 7. An older boy pulls a wagon loaded with water bottles toward the table. 8. A mother holds a toddler on her shoulders so the toddler can watch the races. 9. A grandmother sits in a lawn chair under a small umbrella, clapping and cheering. 10. A boy kicks a soccer ball near the table. About to happen cues: the soccer ball is rolling fast straight toward the table of full water cups, and the volunteer pouring water has her back to it; dark rain clouds are moving in from one side of the sky while nobody looks up. One banner on the fence reads exactly: SPORTS DAY.'
        },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/24/scene.jpg" alt="An elementary school sports day on a playing field">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family wants to celebrate the end of the school year with a day trip. There are four of you: two adults and two children, aged 7 and 12. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Amusement park', image: '<img src="tests/img/24/opt_A.jpg" alt="Photo: Amusement park">', picture: 'A colourful amusement park on a sunny day with a roller coaster, a Ferris wheel and a long water slide, seen from a distance.', facts: ['$58 per person; children under 10 pay $38', 'Rides, a water slide and live shows', '90-minute drive each way', 'Lines of up to an hour for popular rides'] },
            { key: 'B', title: 'Horseback trail ride', image: '<img src="tests/img/24/opt_B.jpg" alt="Photo: Horseback trail ride">', picture: 'Three saddled horses tied to a wooden rail at the start of a forest trail, with a picnic table beside a river in the background.', facts: ['$45 per rider for a 2-hour guided ride', 'Riders must be at least 8 years old', 'Picnic area by a river; bring your own lunch', '40-minute drive each way'] }
          ],
          third: { key: 'C', title: 'Beach at a provincial park', image: '<img src="tests/img/24/opt_C.jpg" alt="Photo: Beach at a provincial park">', picture: 'A wide sandy beach on a calm blue lake with an empty lifeguard chair, and a parking lot full of cars at the edge of the trees.', facts: ['$18 per car for a day pass', 'Lifeguards on weekends only', 'Bring all your own food and beach gear', 'Parking lot often full by 11:00 a.m.'] },
          persuade: 'A family member thinks the beach would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>A month ago, you promised the parent council at your child\'s school that you would be the announcer at the school\'s sports day this Friday from 11:00 a.m. to 2:00 p.m., using your own portable sound system. Nobody else has equipment loud enough for the field, and the principal has already told 400 families that results and medals will be announced over your speakers. Today, your manager told you that an important client has moved a meeting to Friday at noon and wants you there, because you handled most of the client\'s project.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to the head of the parent council. Explain why you cannot be the announcer on Friday.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot attend the client meeting.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town\'s hockey arena needs about $3 million in repairs. A local car dealership has offered to pay $60,000 a year for ten years if the arena is renamed after its business, with the new name on the building, the scoreboard and the ice. Supporters say the money would keep ice fees for families from going up. Others say the arena has carried the name of a much-loved local doctor for fifty years, and that a public building should not become an advertisement.</p><p>Town council has asked residents for their views before it votes next month. Should the town accept the offer and rename the arena? Explain your reasons.</p>' },
        {
          id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a children\'s store and see this unusual lunchbox for $64. Call your friend, whose six-year-old son starts grade one next month and often loses his things. His school does not allow electronic devices in class. Describe the lunchbox and explain whether you think your friend should buy it.', image: '<img src="tests/img/24/object.jpg" alt="An unusual child\'s lunchbox shaped like a fire truck">',
          picture: 'One child\'s lunchbox shaped like a small red fire truck, standing on a store shelf with a price tag that reads $64. Unusual features, all clearly visible: 1. four small wheels and a pull out handle, like a rolling suitcase; 2. a number keypad lock on the front; 3. a small speaker grille on the side with a round record button; 4. a clear see through lid showing three food compartments inside; 5. a small solar panel on the roof; 6. a flashing light on top like a siren; 7. a name tag holder on the side.'
        }
      ]
    }
  });
})();
