/* Rowe CELPIP Mock Exam: Test Q content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (mix of CLB 9 to 11 items with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/Q/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'Q',
    title: 'Mock Test Q',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { PHOEBE: { name: 'Phoebe', g: 'f', skin: '#e8c3a0', hair: '#3b2a20', shirt: '#c0392b', style: 'curly' }, TERRENCE: { name: 'Terrence', g: 'm', skin: '#5c3a21', hair: '#120c08', shirt: '#2e86c1', style: 'short' } },
        segments: [{
          lines: [
            ['PHOEBE', 'Ugh, these seats are right behind the net. We won\'t see a thing at the other end.'],
            ['TERRENCE', 'There are two empty ones up near the press box, but they\'re in the very top row.'],
            ['PHOEBE', 'I don\'t mind. And my brother\'s team always scores more later in the game, after they switch ends.'],
            ['TERRENCE', 'Okay, let\'s grab them before somebody else does.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Phoebe want to move?', o: ['She wants to see the whole ice better.', 'She prefers to sit close to the net.', 'Her brother saved seats near the press box.', 'The top row seats are less expensive.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { MARIBEL: { name: 'Maribel', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#16a085', style: 'long' }, WESLEY: { name: 'Wesley', g: 'm', skin: '#f2cfb0', hair: '#a0703a', shirt: '#d35400', style: 'short' } },
          segments: [
            {
              lines: [
                ['MARIBEL', 'Wes, can you pull over at the next lookout? That was Lorna on the phone, the woman who owns the cottage.'],
                ['WESLEY', 'Uh oh. What\'s wrong? We\'re, what, forty minutes away?'],
                ['MARIBEL', 'A pipe burst under the kitchen sink last night. The floors are soaked, and the plumber can\'t get there until Wednesday. She says it won\'t be livable this week.'],
                ['WESLEY', 'You\'re kidding. The kids have been counting down for a month.'],
                ['MARIBEL', 'I know. She\'s offering us a full refund, or we can stay at her sister\'s place near Souris for the same price.'],
                ['WESLEY', 'Souris? That\'s the far end of the island. Like an hour and a half from the beaches we picked.'],
                ['MARIBEL', 'And we\'ve got those theatre tickets in Charlottetown on Thursday night. That\'s a long drive back in the dark with two sleepy kids.'],
                ['WESLEY', 'Okay. So, the refund, then? And we find something ourselves?'],
                ['MARIBEL', 'Probably. But it\'s the middle of July. Everything near the north shore has been booked since March.']
              ],
              questions: [
                { id: 'L1.1', q: 'What has happened to the cottage?', o: ['Water damage has made it unusable for now.', 'The owner rented it to another family.', 'The plumber will not be done until Thursday.', 'It is being repaired by the owner\'s sister.'] },
                { id: 'L1.2', q: 'Why is Maribel unsure about the place near Souris?', o: ['It would make an evening outing difficult.', 'It would cost more than the original cottage.', 'It is not available until Wednesday.', 'The children would rather stay near Charlottetown.'] },
                { id: 'L1.3', q: 'What does Maribel imply about finding another place?', o: ['The time of year will make it hard.', 'The owner will help them look for one.', 'Places near Souris will be cheaper.', 'They will need to wait until March.'] }
              ]
            },
            {
              lines: [
                ['WESLEY', 'Okay, I\'m looking on my phone. There\'s a campground near Cavendish with little cabins. One\'s free from Monday to Saturday.'],
                ['MARIBEL', 'Cabins? Do they have bathrooms?'],
                ['WESLEY', 'Shared washrooms, but each cabin has a kitchenette and a deck. And it\'s a five-minute walk to the beach. The kids would think it\'s an adventure.'],
                ['MARIBEL', 'Fine, but that still leaves tonight and tomorrow night. Saturday and Sunday.'],
                ['WESLEY', 'There\'s a hotel in Charlottetown with an indoor pool. A hundred and forty a night. Oh, wait, no, that\'s weekdays. Weekends it\'s a hundred and seventy.'],
                ['MARIBEL', 'Still better than driving home. And a pool might buy us some goodwill with the kids.'],
                ['WESLEY', 'Plus we\'d be near the theatre if anything changes. Should I book both now?'],
                ['MARIBEL', 'Book the cabin first. If we lose that, there\'s no point in the hotel. We\'d just turn around and go home on Monday.']
              ],
              questions: [
                { id: 'L1.4', q: 'What is one drawback of the cabins?', o: ['Guests must use bathrooms outside the cabin.', 'They are a long walk from the beach.', 'They have no space for cooking meals.', 'They are not free until the weekend.'] },
                { id: 'L1.5', q: 'How much will the two hotel nights cost in total?', o: ['$340', '$280', '$170', '$310'] },
                { id: 'L1.6', q: 'Why does Maribel want the cabin booked first?', o: ['The rest of the plan depends on getting it.', 'It is cheaper than the hotel in Charlottetown.', 'The children would prefer the cabin to the pool.', 'The hotel has plenty of rooms on weekends.'] }
              ]
            },
            {
              lines: [
                ['MARIBEL', 'Done. The cabin\'s booked, and the hotel too. Oh, and Lorna called back.'],
                ['WESLEY', 'Let me guess. She feels terrible.'],
                ['MARIBEL', 'She does. She sounded really upset, actually. She\'s refunding everything today, and she\'s offering us the first two weeks of next July at twenty percent off.'],
                ['WESLEY', 'That\'s generous. Although after this, I\'m not sure I want to trust her plumbing again.'],
                ['MARIBEL', 'Come on, that could happen anywhere. And honestly, she handled it well. She called the minute she found out, not when we were standing at the door with our suitcases.'],
                ['WESLEY', 'True. Okay, tell her we\'ll think about it. Now, who\'s going to explain to the kids that the cottage has turned into a hotel?'],
                ['MARIBEL', 'Oh, that part\'s easy. You start with the pool, and then you mention the cabin by the beach. By the time you get to the cottage, they won\'t even care.']
              ],
              questions: [
                { id: 'L1.7', q: 'What does Lorna offer in addition to the refund?', o: ['A discount on a stay next summer', 'Two free weeks at the cottage next July', 'Payment for their nights at the hotel', 'A room at her sister\'s place next year'] },
                { id: 'L1.8', q: 'What is Maribel\'s attitude toward Lorna?', o: ['She appreciates how promptly Lorna told them.', 'She blames Lorna for not fixing the pipes sooner.', 'She doubts that Lorna will really refund them.', 'She thinks Lorna\'s new offer is too small.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Restaurant host', g: 'm', skin: '#d6a07a', hair: '#1d1410', shirt: '#1c2833', style: 'short' }, ROSALIE: { name: 'Rosalie', g: 'f', skin: '#f0c9a6', hair: '#6b4a2b', shirt: '#2874a6', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'Good morning, Driftwood Kitchen, this is Andrés speaking.'],
              ['ROSALIE', 'Hi, I\'m calling about your private room. We\'re planning a retirement dinner for a coworker on Friday the twenty-second, for about twenty-five people.'],
              ['HOST', 'Let me check. The room seats up to thirty, so that works. On Fridays, though, there\'s a minimum spend of fifteen hundred dollars before tax and tip.'],
              ['ROSALIE', 'Okay, that\'s probably fine with twenty-five people. Between food and drinks, we\'ll easily pass that. Can everyone order whatever they like?'],
              ['HOST', 'For groups over twenty, we ask for a set menu. You pick two starters, three mains and one dessert, and guests choose from those on the night. Otherwise the kitchen falls behind.'],
              ['ROSALIE', 'Makes sense. One of the guests has a serious nut allergy. Is that a problem?'],
              ['HOST', 'Not at all, as long as we know ahead of time. Our pastry chef uses almond flour in a couple of desserts, so we\'d just choose one that\'s nut-free for everybody. That\'s safer than preparing one plate separately.'],
              ['ROSALIE', 'Great. And can we bring our own cake? His daughter\'s baking one.'],
              ['HOST', 'You can. There\'s a cake-cutting fee of three dollars a person. Some groups skip our dessert altogether, and in that case we waive the fee.'],
              ['ROSALIE', 'Oh, then we\'ll skip dessert. That\'s an easy decision.'],
              ['HOST', 'Sure. Will you need any audiovisual equipment? There\'s a screen and a microphone in the room, and you can plug in a laptop.'],
              ['ROSALIE', 'Yes, actually. A few people want to give speeches, and we\'ve put together a slideshow of his thirty years with the company. It runs about fifteen minutes.'],
              ['HOST', 'Lovely. To hold the date, we need a two-hundred-dollar deposit, which comes off the final bill. If you cancel less than a week before, it isn\'t refunded.'],
              ['ROSALIE', 'Understood. Can I call back with a card later today? I need to get the company card from my manager, and she\'s in meetings until three.'],
              ['HOST', 'Of course. I\'ll pencil you in until five o\'clock. After that, I\'m afraid I\'ll have to release the room. Friday nights in December go very quickly.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is the main reason for Rosalie\'s call?', o: ['To reserve a space for a workplace celebration', 'To order a cake for a coworker\'s daughter', 'To ask about the restaurant\'s Friday menu', 'To change the date of an existing booking in December'] },
              { id: 'L2.2', q: 'Why does the restaurant require a set menu?', o: ['To help the kitchen keep up with a large group', 'To make sure the group spends at least $1,500', 'To avoid serving dishes that contain nuts', 'To allow guests to bring their own dessert'] },
              { id: 'L2.3', q: 'How does the host suggest handling the guest\'s allergy?', o: ['By choosing one safe dessert for the whole group', 'By preparing a separate plate just for that guest', 'By asking the pastry chef to avoid almond flour', 'By letting the guest bring a dessert from home'] },
              { id: 'L2.4', q: 'Why does Rosalie decide not to order the restaurant\'s dessert?', o: ['It means the group will not pay to have the cake cut.', 'Several desserts on the menu contain almond flour.', 'The minimum spend can easily be reached without dessert.', 'The guest of honour does not like sweet food.'] },
              { id: 'L2.5', q: 'Why does the host mention Friday nights in December?', o: ['To explain why he cannot hold the room for long', 'To suggest that Rosalie choose another night', 'To explain why the minimum spend is so high', 'To warn her that the restaurant may be noisy'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#e3b28b', hair: '#4a3020', shirt: '#566573', style: 'short' }, PARVEEN: { name: 'Parveen Gill', g: 'f', skin: '#a9714b', hair: '#1d1410', shirt: '#7d3c98', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Parveen Gill, who runs a volunteer driving program for newcomer women in Brampton. Parveen, why driving?'],
              ['PARVEEN', 'Because in a city built like ours, not driving can shrink your whole world. Many of the women we meet arrived with their families, and the husband takes the only car to work.'],
              ['PARVEEN', 'So she waits. For groceries, for appointments, for job interviews she can\'t get to.'],
              ['HOST', 'How did the program start?'],
              ['PARVEEN', 'Almost by accident. Six years ago, I was teaching an English class, and one student asked if I could help her study for the written test.'],
              ['PARVEEN', 'Then her cousin asked, then her neighbour. By spring, I had eleven women in my living room on Sunday afternoons.'],
              ['HOST', 'And now?'],
              ['PARVEEN', 'Now we have about forty volunteer instructors. Actually, I should be careful there. They aren\'t instructors, they\'re coaches. Licensed instructors teach the actual lessons.'],
              ['PARVEEN', 'Our volunteers help with the written test, and once the women have their beginner\'s licence, they take them out for extra practice.'],
              ['HOST', 'Why does that difference matter?'],
              ['PARVEEN', 'Insurance, mostly, and safety. Lessons with a licensed instructor cost about sixty dollars an hour, and most women need at least ten. So we raise money to cover half, and the women pay the rest, at whatever pace they can manage.'],
              ['HOST', 'How long does it usually take someone to get a full licence?'],
              ['PARVEEN', 'It varies a lot. Some women finish in four months. Others take two years, because they\'re fitting it around work and children.'],
              ['HOST', 'What\'s the hardest part for the women?'],
              ['PARVEEN', 'Honestly, it\'s not the driving. It\'s confidence. Many have never been behind the wheel at all. The first time on a highway ramp, some of them grip the wheel so hard their knuckles go white.'],
              ['HOST', 'Do you keep track of how many pass?'],
              ['PARVEEN', 'We do. Last year, about seventy percent passed their road test on the first try. But what I really watch is what happens afterward. Several have gone on to jobs that required a licence, and one now drives a school bus.'],
              ['HOST', 'What do you need most right now?'],
              ['PARVEEN', 'Cars, believe it or not. Our coaches use their own, and some are understandably nervous about a beginner driving them. If a local business lent us two vehicles, we could easily double our practice hours.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why does Parveen think driving matters so much for these women?', o: ['Without it, they rely on others to get around.', 'Their husbands want them to share the driving.', 'Most of their new jobs require a licence.', 'Public transit is too costly for their families.'] },
              { id: 'L3.2', q: 'How did the program begin?', o: ['One student\'s request led to more and more requests.', 'Parveen started it as part of her English class.', 'A group of women asked her to teach them to drive.', 'A neighbour offered her living room for lessons.'] },
              { id: 'L3.3', q: 'Why does Parveen correct herself about the volunteers?', o: ['They do not give the formal driving lessons.', 'There are fewer of them than she first said.', 'They are all fully licensed instructors.', 'They only help with the written test.'] },
              { id: 'L3.4', q: 'How much does a woman usually pay for her lessons?', o: ['About $300', 'About $600', 'About $60', 'About $30'] },
              { id: 'L3.5', q: 'What does Parveen see as the biggest challenge for learners?', o: ['A lack of self-belief behind the wheel', 'Learning to drive on highway ramps', 'Passing the written test the first time', 'Finding time to practise on weekends'] },
              { id: 'L3.6', q: 'What would help the program most at the moment?', o: ['More vehicles for learners to practise in', 'More coaches to help with the written test', 'More money to pay for licensed instructors', 'More businesses willing to hire new drivers'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#f0c9a6', hair: '#5a3a22', shirt: '#1f3a5f', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Drivers on the highway between Saint John and Moncton have been watching something unusual take shape near Sussex: a wide bridge covered in soil, shrubs and young trees. This week it officially opened, but it was not built for people.'],
              ['NEWS', 'The structure is New Brunswick\'s first wildlife overpass, designed to let moose, deer and other animals cross the highway safely. It is fifty metres wide and cost about fourteen million dollars.'],
              ['NEWS', 'Along this stretch of road, police respond to roughly forty collisions with moose every year, and officials say those crashes are often serious because of the animal\'s height and weight.'],
              ['NEWS', 'The overpass works together with twelve kilometres of tall fencing on both sides of the highway. The fence keeps animals off the pavement and gradually steers them toward the crossing.'],
              ['NEWS', 'Cameras on the bridge have already recorded the first visitor. Officials had hoped it would be a moose, but it was actually a red fox, which crossed on the second night.'],
              ['NEWS', 'Biologist Hélène Thibodeau says that is perfectly normal. Larger animals, she explains, often take months, or even a few years, to trust a new route.'],
              ['NEWS', 'Not everyone is convinced the money was well spent. Some drivers\' groups argue that a lower speed limit and more warning signs would have cost far less.'],
              ['NEWS', 'Thibodeau responds that signs have been tried for decades with little effect, because drivers quickly stop noticing them.'],
              ['NEWS', 'The province says it will decide on a second overpass, closer to Moncton, after studying three years of collision data. If crashes on this stretch fall by at least half, the next one is expected to go ahead.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A new structure meant to make a highway safer', 'A plan to lower the speed limit near Sussex', 'A study of moose populations in the province', 'A new bridge for walkers and cyclists'] },
              { id: 'L4.2', q: 'What is the purpose of the fencing?', o: ['To direct animals toward a safe place to cross', 'To protect the young trees planted on the bridge', 'To keep drivers from stopping to watch wildlife', 'To hold cameras that record passing animals'] },
              { id: 'L4.3', q: 'What does the biologist say about the first recordings?', o: ['Big animals are often slow to start using it.', 'Foxes are the animals most often hit by cars.', 'The cameras were placed in the wrong spot.', 'Moose avoid any structure covered in plants.'] },
              { id: 'L4.4', q: 'What do some drivers\' groups believe?', o: ['Simpler measures aimed at drivers would have cost less.', 'The overpass should have been built closer to Moncton.', 'Warning signs have caused more collisions than before.', 'The fencing should be extended for another twelve kilometres.'] },
              { id: 'L4.5', q: 'What will decide whether a second overpass is built?', o: ['How much crashes on this stretch decline', 'How quickly moose begin to use the bridge', 'How many drivers support the project', 'How much the first overpass finally costs'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Spring money workshops', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { CHARLOTTE: { name: 'Charlotte', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#117864', style: 'bun' }, PATRICK: { name: 'Patrick', g: 'm', skin: '#f2cfb0', hair: '#c49a42', shirt: '#2c3e50', style: 'short' }, MALIK: { name: 'Malik', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#b9770e', style: 'short' } },
          segments: [{
            lines: [
              ['CHARLOTTE', 'Thanks for staying late. Head office gave us money for a workshop series this spring. Let\'s plan it.'],
              ['PATRICK', 'Great. How much are we working with?'],
              ['CHARLOTTE', 'Four thousand dollars. It was meant to cover six sessions, but they cut one last week.'],
              ['MALIK', 'Okay. And who are we aiming at? Last year\'s workshop was mostly retirees, which wasn\'t the idea.'],
              ['CHARLOTTE', 'Exactly. This time, I want newcomers and young adults. People opening their first Canadian account.'],
              ['PATRICK', 'Then weeknights won\'t work for everyone. Lots of newcomers work evening shifts, especially in their first year.'],
              ['MALIK', 'What about online? People join from home, and we save on the room and the snacks.'],
              ['CHARLOTTE', 'I thought about that. But half the value is people asking questions they\'d never type into a chat box.'],
              ['PATRICK', 'Could we do both? Run it in person on Saturday mornings and record it for anyone who can\'t come.'],
              ['MALIK', 'Recording\'s fine, but then nobody shows up. I\'ve seen it happen with the library\'s talks.'],
              ['CHARLOTTE', 'Hmm. What if the recordings go up a week later? Come in person, and you get it first.'],
              ['MALIK', 'That could work. Now, topics. I\'d start with credit scores. Newcomers arrive with no credit history at all.'],
              ['PATRICK', 'And scams. Two of our members lost money this winter to fake phone calls.'],
              ['CHARLOTTE', 'Agreed, scams go early. But budgeting should come first. Everything else builds on it.'],
              ['MALIK', 'Fair. Budgeting, then credit, then scams. Then maybe saving for a home, and sending money abroad.'],
              ['PATRICK', 'Sending money home is huge for newcomers. The fees can be shocking if you don\'t compare.'],
              ['CHARLOTTE', 'Good. Now, how do we get people through the door? Posters alone won\'t do it.'],
              ['MALIK', 'Last time, we gave a twenty-dollar gift card just for showing up. Attendance doubled, but most never came back.'],
              ['PATRICK', 'Then reward finishing instead. Attend four of the sessions, and we put fifty dollars into a new account.'],
              ['CHARLOTTE', 'I like that. It rewards sticking with it, and it gets them banking with us.'],
              ['MALIK', 'Fifty each, though. If thirty people finish, that\'s over a third of our budget gone.'],
              ['CHARLOTTE', 'True, but the community room downstairs is free for members. That saves us a lot.'],
              ['PATRICK', 'We could even offer childcare in the room next door. That alone might double our numbers.'],
              ['MALIK', 'Okay, I\'m convinced. As long as head office agrees the reward comes from this budget.'],
              ['CHARLOTTE', 'I\'ll ask them tomorrow. And I want the newcomer centre involved from the start.'],
              ['PATRICK', 'Good. Their clients trust them a lot more than they trust a bank, at least at first.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To plan a series of money workshops', 'To review last year\'s workshop for retirees', 'To respond to members who lost money to scams', 'To decide how to spend the branch\'s yearly budget'] },
              { id: 'L5.2', q: 'How many sessions will the series have?', o: ['Five', 'Six', 'Four', 'Thirty'] },
              { id: 'L5.3', q: 'Why does Patrick have doubts about weeknight sessions?', o: ['Many people in the target group work at those times.', 'Weeknight sessions would cost more for the room.', 'Young adults prefer to learn online in the evening.', 'The library already holds talks on those nights.'] },
              { id: 'L5.4', q: 'Why does Charlotte hesitate about holding the workshops online?', o: ['People speak up more freely face to face.', 'Online sessions would be more expensive to run.', 'Most newcomers do not have home internet.', 'Recordings are often of poor quality.'] },
              { id: 'L5.5', q: 'Why does Charlotte suggest delaying the recordings?', o: ['To give people a reason to attend in person', 'To allow time to edit out personal questions', 'To match the library\'s schedule for its talks', 'To keep people from sharing them with friends'] },
              { id: 'L5.6', q: 'Why does Patrick suggest a reward for finishing?', o: ['A reward for attending once did not keep people coming.', 'Gift cards are no longer allowed by head office.', 'Fifty dollars is cheaper than twenty-dollar gift cards.', 'Members asked for money instead of gift cards.'] },
              { id: 'L5.7', q: 'What is Malik\'s concern about the fifty-dollar reward?', o: ['It could use up a large share of their funds.', 'Participants might not open an account with them.', 'It would only attract people who are already members.', 'Head office has already refused to pay for it.'] },
              { id: 'L5.8', q: 'Why does Patrick support involving the newcomer centre?', o: ['It is more trusted by the people they want to reach.', 'It can provide childcare in the room next door.', 'It has more space than the community room.', 'It will pay for part of the fifty-dollar reward.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Backyard homes: faster permits?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#943126', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'Across Canada, cities short on housing are looking at an unusual source of new homes: the backyard. Garden suites are small, separate homes built behind an existing house.'],
              ['NARR', 'Many cities now allow them, but getting a permit can be slow and expensive, and some people want to make the process much simpler.'],
              ['NARR', 'Siddharth Rao, a housing researcher at a university in Vancouver, strongly supports making it easier. His first argument is that garden suites add homes without new roads, new pipes or new land.'],
              ['NARR', 'Every one of them, he says, is built on a lot that is already served by a street, a bus route and a water line.'],
              ['NARR', 'That makes them one of the cheapest ways for a city to add housing where people already want to live.'],
              ['NARR', 'His second argument is about families. Many owners build garden suites for an aging parent or for adult children who cannot afford rent, and the extra income can help homeowners keep up with rising mortgage payments.'],
              ['NARR', 'He adds that a suite lets an older parent live close to family while keeping some independence, something an apartment across town cannot offer.'],
              ['NARR', 'Rao does accept one criticism. In some cities, a number of new suites ended up being rented to tourists by the night, rather than to local residents. He supports a clear ban on short-term rentals in garden suites.'],
              ['NARR', 'Maureen Szabo, a retired city planner who now chairs a neighbourhood association in Toronto, is more cautious. Her first concern is what lies underground.'],
              ['NARR', 'Many older neighbourhoods, she says, have sewer pipes that are close to a hundred years old and were designed for one household per lot.'],
              ['NARR', 'Doubling the number of homes on a street without checking those pipes, she warns, could lead to backups and costly repairs that every taxpayer would share.'],
              ['NARR', 'Her second concern is the character of the neighbourhood. A two-storey suite can look directly into several neighbours\' yards, and building one often means cutting down mature trees that took decades to grow.'],
              ['NARR', 'She also points out that each suite usually adds at least one more car to streets where parking is already scarce.'],
              ['NARR', 'Szabo stresses that she is not against garden suites, and she agrees the housing shortage is real. But she believes each application should still be reviewed individually, with neighbours given a chance to comment before a permit is issued.'],
              ['NARR', 'Rao says that is exactly the problem. Reviews like that, he argues, can take six months or more and cost owners thousands of dollars in drawings and fees, so many simply give up.'],
              ['NARR', 'He points to one Canadian city where the number of suites approved each year rose from about thirty to more than four hundred after the rules were simplified.'],
              ['NARR', 'Szabo replies that faster approval only counts as a success if the city also invests in the pipes and trees that those new homes depend on.'],
              ['NARR', 'For now, most cities are trying to find a middle path between speed and caution, and the debate is far from over.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether it should be easier to build homes in backyards', 'Whether old sewer pipes should be replaced citywide', 'How short-term rentals affect city neighbourhoods', 'How homeowners can lower their mortgage payments'] },
              { id: 'L6.2', q: 'Why does Rao mention streets, bus routes and water lines?', o: ['To show that suites rely on services already in place', 'To argue that cities must improve public transit first', 'To explain why garden suites are expensive to build', 'To list the costs owners pay when they apply'] },
              { id: 'L6.3', q: 'What does Rao concede?', o: ['Some suites have housed visitors instead of residents.', 'Garden suites are too small for most families.', 'Building permits should include a review by neighbours.', 'Older neighbourhoods need new sewer pipes first.'] },
              { id: 'L6.4', q: 'What worries Szabo about older neighbourhoods?', o: ['Their underground systems may not cope with more homes.', 'Their mature trees make it hard to find room to build suites.', 'Their residents are mostly against new housing.', 'Their streets are too narrow for more traffic.'] },
              { id: 'L6.5', q: 'What does Szabo propose?', o: ['Continuing to examine each project and consult neighbours', 'Banning two-storey suites in all older neighbourhoods', 'Allowing suites only for family members of owners', 'Charging owners for any mature trees removed during building'] },
              { id: 'L6.6', q: 'Why does Rao give the example of one Canadian city?', o: ['To show that simpler rules led to far more suites', 'To show that reviews protect neighbours\' privacy', 'To show that most owners give up on applications', 'To show that the city invested in its sewer pipes'] }
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
          passage: '<h3>Message</h3><p>Dear Rohan,</p><p>Your mother tells me your nursing exams went well. I am not at all surprised, but I am very proud. I have some news of my own: after forty years of telling other people what to do in a classroom, I am finally taking instructions myself. Three weeks ago, I started volunteering at the hospital here in St. John\'s.</p><p>It was my friend Doreen who talked me into it. She has volunteered there for years and kept insisting that I would be good at it. I resisted for months, mostly because I go weak at the knees at the sight of a needle. She finally convinced me that most volunteers never go near one.</p><p>I work in the emergency department waiting room on Tuesday and Friday mornings. I push a cart with blankets, water, puzzles and colouring books, and I try to make the wait a little easier. People can sit there for six or seven hours, so a warm blanket and a few kind words mean more than you might think. I am not allowed to tell anyone how long they will wait, or why someone who arrived later was seen first, which is, of course, exactly what everyone asks me.</p><p>The training was more serious than I expected: a full day on privacy rules, hand washing and what to do in an emergency, plus a flu shot, which Doreen had cleverly forgotten to mention. On my first morning, I got lost twice trying to find the supply room. A porter finally walked me there and told me it had taken him a month to learn the building.</p><p>The most useful thing I have learned is to say, "I don\'t know, but I will find someone who does." As a teacher, I always felt I had to have the answer. Here, nobody expects me to, and it is a surprising relief.</p><p>I will be in Vancouver for the first week of May, as planned. The volunteer office needs two weeks\' notice to find someone to cover my shifts, so I have already let them know.</p><p>Since you know far more about hospitals than I do, I would love any advice you have. What do people in a waiting room really want?</p><p>With love,<br>Aunt Philippa</p>',
          questions: [
            { id: 'R1.1', q: 'Philippa put off volunteering for months because she', o: ['feels uneasy around certain medical procedures.', 'did not want to volunteer alongside her friend Doreen.', 'had never worked with the public before.', 'was still teaching full time at a school.'] },
            { id: 'R1.2', q: 'What does Philippa suggest about Doreen?', o: ['She left out a detail that might have put Philippa off.', 'She found the volunteer training far too demanding herself.', 'She regrets persuading Philippa to volunteer.', 'She helped Philippa find the supply room.'] },
            { id: 'R1.3', q: 'Philippa believes that the items on her cart', o: ['are worth more to patients than they seem.', 'are mostly used by the children in the room.', 'should include something to read for adults.', 'keep people from asking how long they will wait.'] },
            { id: 'R1.4', q: 'The questions Philippa hears most often are ones that she', o: ['is not permitted to answer.', 'can answer from her training.', 'passes on to the porters.', 'finds rude and unpleasant.'] },
            { id: 'R1.5', q: 'Philippa mentions the porter\'s remark to show that', o: ['getting lost in the building was nothing unusual.', 'the hospital staff were not very welcoming.', 'she should have attended more of the training.', 'porters are the best people to ask for help.'] },
            { id: 'R1.6', q: 'When she compares volunteering with teaching, Philippa suggests that she', o: ['no longer feels she must know everything.', 'misses being the person in charge of a room.', 'finds volunteering harder than teaching was.', 'wants to train new volunteers in the future.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Aunt Philippa,</p><p>What wonderful news! I can already picture you and your cart. I laughed out loud when I read that Doreen never mentioned [[R1.7]]. Given how you feel about needles, it is probably a good thing that you are [[R1.8]] and not helping in the treatment rooms.</p><p>You asked what people in a waiting room really want. From my placements, I would say they mostly want to feel that someone has noticed them. Even though you cannot tell them how long they will wait, you can [[R1.9]]. That small thing makes a huge difference.</p><p>Also, your habit of [[R1.10]] is exactly what our instructors teach us. A confident wrong answer in a hospital can cause real harm.</p><p>Finally, thank you for arranging cover for your [[R1.11]] so early. Mom and I have already planned your week in Vancouver, and we are not letting anything get in the way.</p><p>Love,<br>Rohan</p>',
          blanks: [
            { id: 'R1.7', o: ['the flu shot', 'the privacy rules', 'the supply room', 'the hand washing'] },
            { id: 'R1.8', o: ['out with the people who are waiting', 'in the supply room for most shifts', 'working beside Doreen every morning', 'in the hospital only on weekends'] },
            { id: 'R1.9', o: ['check on them every so often', 'explain why others were seen first', 'tell them which doctor they will see', 'bring them their test results early'] },
            { id: 'R1.10', o: ['admitting when you are unsure', 'always having the right answer', 'walking people to the supply room', 'telling patients how long they will wait'] },
            { id: 'R1.11', o: ['Tuesday and Friday mornings', 'weekend afternoon shifts', 'first week of training', 'Monday and Thursday mornings'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Bow Ridge Arena, Calgary: Ice Rental Rates (September to March)</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Time slot</th><th>Days</th><th>Adult rate per hour</th><th>Youth rate per hour</th><th>Minimum booking</th></tr></thead><tbody>' +
            '<tr><td>Early morning, 6:00 to 8:00 a.m.</td><td>Mon to Fri</td><td>$180</td><td>$120</td><td>1 hour</td></tr>' +
            '<tr><td>Daytime, 8:00 a.m. to 4:00 p.m.</td><td>Mon to Fri</td><td>$160</td><td>$110</td><td>1 hour</td></tr>' +
            '<tr><td>Prime time, 4:00 to 11:00 p.m.</td><td>Mon to Fri</td><td>$280</td><td>$210</td><td>1.5 hours</td></tr>' +
            '<tr><td>Weekend, 7:00 a.m. to 11:00 p.m.</td><td>Sat and Sun</td><td>$300</td><td>$225</td><td>2 hours</td></tr>' +
            '<tr><td>Late night, 11:00 p.m. to 1:00 a.m.</td><td>Every day</td><td>$150</td><td>Not offered</td><td>1 hour</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Season bookings (the same slot every week for at least 20 weeks) receive 15% off the hourly rate.</li><li>Youth rates apply only when every skater on the ice is under 18 and the booking is made by a registered youth organization.</li><li>Bookings cancelled less than 72 hours before the start time are charged in full.</li><li>Skate sharpening costs $8 per pair. Groups bringing 10 or more pairs at once pay $6 per pair.</li><li>Changing rooms open 30 minutes before each booking and must be empty 30 minutes after it ends.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Annika,</p><p>I checked the rates at Bow Ridge for our Thursday hockey group. Most of us finish work at 5:00 and start again early the next morning, so our only realistic option is [[R2.1]]. The catch is that we cannot book just one hour in that slot; we would have to take at least [[R2.2]].</p><p>If we book the same Thursday time from September to March and play the minimum each week, every session would cost [[R2.3]] after the season discount. Split sixteen ways, that is not bad at all.</p><p>Tobias asked whether his son\'s under-16 team could share our ice and save us money. Unfortunately, that would not lower our rate, because [[R2.4]].</p><p>One more thing: before the first game, twelve of us want our skates sharpened. If we bring them in together, it will cost [[R2.5]] in total.</p><p>Let me know what you think.</p><p>Declan</p>',
          blanks: [
            { id: 'R2.1', o: ['prime time', 'late night', 'the weekend slot', 'daytime'] },
            { id: 'R2.2', o: ['an hour and a half', 'two full hours', 'one hour', 'twenty weeks'] },
            { id: 'R2.3', o: ['$357', '$420', '$238', '$280'] },
            { id: 'R2.4', o: ['adults would be on the ice with them', 'the youth rate is not offered on Thursdays', 'his son\'s team has fewer than 16 players', 'we would need to cancel 72 hours ahead'] },
            { id: 'R2.5', o: ['$72', '$96', '$60', '$80'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A group books the ice on a Saturday from 9:00 to 10:00 a.m. What is the problem with this booking?', o: ['It is shorter than that slot allows.', 'Saturday ice is not available that early.', 'It would require a season booking.', 'The weekend slot is only for youth teams.'] },
            { id: 'R2.7', q: 'A team cancels its Tuesday 7:00 p.m. booking at 9:00 a.m. on the Monday before. The team will', o: ['still have to pay the full price.', 'get the money back minus a small fee.', 'receive a full refund of its booking.', 'be moved to the late-night slot instead.'] },
            { id: 'R2.8', q: 'A group has ice from 9:30 to 11:00 p.m. on a Wednesday. Its players may use the changing room', o: ['from 9:00 p.m. until 11:30 p.m.', 'from 9:30 p.m. until 11:00 p.m.', 'from 8:30 p.m. until midnight.', 'from 9:00 p.m. until 11:00 p.m.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>How Canadian Cities Battle Snow</h3><p><b>A.</b> For many Canadian cities, winter is one of the largest items in the yearly budget. Large municipalities can spend well over a hundred million dollars in a single season on plowing, salting and hauling snow, and a few big storms in a row can use up a year\'s funds by February. How the job is done also varies. In most cities, plows simply push snow to the sides of the road, where it stays until it melts. Montreal, by contrast, is known for loading much of its snow into trucks and carrying it away, because its narrow streets and dense neighbourhoods leave little room to pile it up. Cities with milder winters, such as Vancouver, face a different challenge: snow is rare, so they keep fewer plows, and a single heavy snowfall can bring traffic to a standstill.</p><p><b>B.</b> Salt remains the most common tool for keeping roads safe. It lowers the temperature at which water freezes, turning ice into slush that plows can scrape away. However, salt works more and more slowly as the temperature drops, so in deep cold, crews often switch to sand, which melts nothing but gives tires something to grip. Many cities now spray salty water, called brine, on roads before a storm arrives. This thin layer stops ice from bonding to the pavement and makes cleanup far easier. Crews also wet rock salt as they spread it, so that it sticks to the road instead of bouncing into the ditch.</p><p><b>C.</b> All that salt comes at a cost. When snow melts, the salt washes into streams, lakes and groundwater, where it can harm fish and other wildlife. It also rusts cars, damages bridges and concrete, and kills trees and grass along busy roads. In some areas, it even draws deer and moose onto highways, where they lick the salt from the pavement. To reduce the amount they use, some municipalities have tested mixtures that include liquid made from sugar beets, which helps salt keep working at colder temperatures. Others fit their trucks with sensors that measure road temperature and adjust how much salt is spread.</p><p><b>D.</b> When a storm hits, not every street is treated equally. Plows usually clear highways, main roads and bus routes first, along with streets leading to hospitals and fire stations. Quiet residential streets may wait a day or more. Where snow is hauled away, it is often taken to large storage sites, where the biggest piles can last well into summer. Residents are expected to help: on nights when removal is scheduled, cars left on the street may be towed. Many cities now post online maps showing where plows have been, so people can see when their street is likely to be done.</p>',
          questions: [
            { id: 'R3.1', q: 'A thin liquid layer applied in advance can prevent ice from sticking to roads.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'People can check on the internet which streets have already been cleared.', fixed: true, a: 'D' },
            { id: 'R3.3', q: 'Some collected snow does not fully melt until the warm months.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'A run of severe weather can exhaust a city\'s winter money early.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Some places have tried an ingredient from a farm crop to help salt perform better.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'Vehicles parked in the wrong place during snow removal may be taken away.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'One material spread on icy roads improves traction without melting anything.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'Trucks fitted with road sensors have cut salt use by about half.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'The layout of one city explains why it removes snow rather than piling it.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Grocery Prices Change During the Day?</h3><p>Walk into some Canadian grocery stores today and the paper price tags are gone. In their place are small electronic screens that can be updated from a computer in seconds. Retailers say the labels save time and reduce waste. Critics worry they could lead to prices that rise and fall with demand, as airline tickets and ride-hailing fares already do.</p><p>Gerald Fitzpatrick, who owns an independent grocery store in Moncton, installed electronic labels last year. Before that, he says, two employees spent about thirty hours every week changing paper tags by hand. Now those hours go to stocking shelves and helping customers. He also uses the system to cut prices automatically on bread, meat and produce as they approach their best-before dates, usually in the late afternoon. "Our food waste is down by almost a fifth," he says. "Food that would have gone in the bin is going home with someone at half price."</p><p>Fitzpatrick insists he has never raised a price during the day and never will. "My customers would notice, and they would never forgive me," he says. He admits, however, that some shoppers remain suspicious. "People see a screen and assume the worst. I understand why."</p><p>Nadine Kerr, who leads a consumer advocacy group in Halifax, is one of those suspicious people. She does not doubt that honest grocers use the technology well, but she argues that the tool itself creates a temptation. "Once a large chain can change thousands of prices with one click, what stops it from charging more for bottled water during a heat wave?" She also worries about people who cannot easily shop around, such as seniors without a car, who may have no choice but to pay whatever the screen says.</p><p>Kerr\'s second concern is planning. Shoppers who check flyers or apps before leaving home, she says, may arrive to find a different price on the shelf. "Budgeting depends on prices you can predict," she says. She wants provinces to require stores to keep a public record of every price change.</p><p>Yolanda Ruiz, an economist at a university in Winnipeg, says the evidence so far is mixed. Electronic labels have been common in parts of Europe for years, and studies there suggest stores mostly use them for markdowns and efficiency rather than sudden increases. Ironically, she notes, end-of-day discounts tend to benefit lower-income shoppers, who are more likely to shop in the evening after work.</p><p>Still, Ruiz does not think good behaviour should be left to chance. She suggests a simple rule: prices could fall at any time, but could rise only once a week, and never in the middle of a day. "That keeps the benefits of the technology," she says, "while giving shoppers the predictability they need."</p><p>Fitzpatrick says he could easily live with that rule. Kerr calls it a good start, but only if someone actually checks that stores are following it.</p>',
          questions: [
            { id: 'R4.1', q: 'Fitzpatrick mentions the thirty hours a week in order to show that the labels', o: ['let staff spend their time on more useful tasks.', 'were too expensive for a small store to install.', 'are mainly used to lower prices in the afternoon.', 'allowed him to reduce the number of employees.'] },
            { id: 'R4.2', q: 'What does Fitzpatrick admit?', o: ['Some customers do not trust the new screens.', 'He has raised prices during busy afternoons.', 'His food waste has not changed very much.', 'Large chains use the labels more honestly.'] },
            { id: 'R4.3', q: 'Kerr gives the example of bottled water during a heat wave to', o: ['show how the technology could be misused.', 'prove that a large chain has done this before.', 'argue that seniors buy more water in summer.', 'explain why the labels should be removed.'] },
            { id: 'R4.4', q: 'Ruiz finds it ironic that', o: ['shoppers with less money often gain the most from the system.', 'European stores have used electronic labels for many years.', 'stores mostly use the screens to raise prices in the evening.', 'customers who shop after work pay the highest prices.'] },
            { id: 'R4.5', q: 'Kerr\'s reaction to Ruiz\'s rule suggests that she', o: ['doubts it would work without someone enforcing it.', 'thinks it would make prices rise once a week.', 'believes stores should not use screens at all.', 'feels it goes much further than is necessary.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I do the grocery shopping for my father, who is eighty-three and no longer drives, so I read this article with real interest. Like Ms. Kerr, I worry about people like him, who [[R4.6]].</p><p>At the same time, Mr. Fitzpatrick makes a fair point about [[R4.7]]. I often pick up marked-down bread on my way home from my evening shift, which supports Ms. Ruiz\'s point that [[R4.8]].</p><p>What bothers me most is the gap between [[R4.9]]. I plan our meals every Sunday from the flyer, and a few surprises at the shelf can wreck my budget.</p><p>I like Ms. Ruiz\'s idea of [[R4.10]], but I agree with Ms. Kerr that a rule nobody checks is not worth much.</p>',
          blanks: [
            { id: 'R4.6', o: ['cannot easily go to another store', 'shop mainly in the late afternoon', 'prefer paper tags to screens', 'buy bottled water every week'] },
            { id: 'R4.7', o: ['food being saved from the garbage', 'employees spending time on paper tags', 'prices rising during a heat wave', 'stores keeping a record of changes'] },
            { id: 'R4.8', o: ['late shoppers can benefit from the screens', 'European stores rarely raise their prices', 'markdowns are mostly used by older people', 'evening prices are usually much higher'] },
            { id: 'R4.9', o: ['the advertised price and the shelf price', 'the morning price and the evening price', 'the cost of the screens and of paper tags', 'the prices in Moncton and in Halifax'] },
            { id: 'R4.10', o: ['allowing increases only once a week', 'banning electronic labels entirely', 'publishing every price on an app', 'letting prices fall only at night'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>For the past three months, your next-door neighbour has been building a large addition to her house. Her contractor\'s dumpster has twice blocked the shared lane to your garage for a whole day, and the workers often start using power tools at 7:00 a.m. on Saturdays, although the city bylaw allows noisy work on weekends only after 9:00 a.m. Your neighbour is a kind, elderly woman who looked after your children last winter, and you do not want to damage your friendship.</p><p>Write an email to your neighbour. In your email, do the following:</p><ul><li>Explain the problems politely and say how often they have happened.</li><li>Describe how they have affected you and your family.</li><li>Suggest what could be done, without making her feel blamed.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your province has money to improve camping in one of its most popular provincial parks and is asking residents for their opinion. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Add 200 new campsites with electricity, water and modern shower buildings. More families and older campers could stay in comfort, but part of the forest would be cleared, and the nightly fee would rise by about $8 for everyone.' },
            { key: 'B', label: 'Option B', text: 'Protect the forest and add 40 walk-in campsites reached by trails of 1 to 3 kilometres, with only basic toilets. The cost would be low and the park would stay quiet, but fewer people could camp there, and the sites would be hard to reach for young children and people with limited mobility.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite meal and explain when you usually eat it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is moving to Canada next month with his wife and young son. His new job starts three weeks after they arrive, and they have about $2,000 to live on until his first paycheque. He has asked you what they should do first. Give your friend advice on how to settle in during those first weeks.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to save money for something important. What were you saving for, how did you manage it, and what would you do differently if you had to do it again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/Q/scene.jpg" alt="A busy café patio on a city sidewalk as rain clouds arrive">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the waiter and what is on the ground in front of him, the dog near the table, and the sky.', image: '<img src="tests/img/Q/scene.jpg" alt="A busy café patio on a city sidewalk as rain clouds arrive">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your eight-year-old daughter wants to try a new winter activity, and you can afford only one. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Join a hockey league', image: '<img src="tests/img/Q/opt_A.jpg" alt="Photo: Join a hockey league">', facts: ['Registration: $480, plus about $350 for equipment', 'Two practices a week, one at 6:30 a.m.', 'Games most weekends, sometimes out of town', 'Builds teamwork and close friendships'] },
            { key: 'B', title: 'Swimming lessons', image: '<img src="tests/img/Q/opt_B.jpg" alt="Photo: Swimming lessons">', facts: ['$140 for 10 weekly lessons', 'Sundays at 4:00 p.m., indoor pool 25 minutes away', 'Teaches an important safety skill', 'Spaces are limited: she may be put on a waiting list'] }
          ],
          third: { key: 'C', title: 'Learn-to-skate classes', image: '<img src="tests/img/Q/opt_C.jpg" alt="Photo: Learn-to-skate classes">', facts: ['$95 for 8 Saturday morning classes', 'Outdoor rink, a 5-minute walk from home', 'Classes are cancelled if the ice is too soft', 'Skates can be rented for $5 a class'] },
          persuade: 'Your partner thinks the learn-to-skate classes would be better. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>This winter, you promised your elderly neighbour that you would clear the snow from her front steps and walkway after every snowfall, because she uses a walker and has a medical appointment every Friday morning. A big storm is forecast for Thursday night. This afternoon, your manager asked you to drive to a client in another city on Friday, leaving at 5:00 a.m., because your coworker who usually goes is sick.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot clear the snow on Friday morning.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot leave early on Friday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>In your town, a growing number of deer now live inside town limits, and some residents feed them in their backyards. Supporters of a feeding ban say that feeding draws deer onto busy streets, increases car accidents, damages gardens and can spread disease among the animals. Opponents say that feeding helps deer survive harsh winters, that watching wildlife is one of the joys of living there, and that a ban would be impossible to enforce.</p><p>The town council has asked residents to share their views before it votes. Should the town ban residents from feeding deer? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in an outdoor store and see this unusual cooler for $129. Call your friend, who is going on a four-day canoe trip next month and will have to carry everything along several long trails between lakes. The cooler weighs 14 kilograms when it is empty, and the solar panel takes a full sunny day to charge the speaker. Describe the cooler and explain whether you think your friend should buy it.', image: '<img src="tests/img/Q/object.jpg" alt="An unusual picnic cooler in an outdoor store">' }
      ]
    }
  });
})();
