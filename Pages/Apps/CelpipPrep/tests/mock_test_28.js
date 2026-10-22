/* Rowe CELPIP Mock Exam: Test 28 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/28/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '28',
    title: 'Mock Test 28',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { NOLAN: { name: 'Nolan', g: 'm', skin: '#c68642', hair: '#2a1b12', shirt: '#1f618d', style: 'short' }, PILAR: { name: 'Pilar', g: 'f', skin: '#e3b28b', hair: '#1d1410', shirt: '#a93226', style: 'long' } },
        segments: [{
          lines: [
            ['NOLAN', 'It\'s pouring out there. The taxi app says twenty-two dollars to get home, and about a fifteen-minute wait.'],
            ['PILAR', 'It\'s only a twenty-minute walk, and I\'ve got an umbrella. We could squeeze under it together.'],
            ['NOLAN', 'One umbrella for two people, in this wind? We\'d both show up soaked to the knees. I\'d rather wait and stay dry.'],
            ['PILAR', 'Fine, but the taxi\'s on you. You\'re the one who picked a restaurant with no parking.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Nolan want to take a taxi?', o: ['He thinks walking would leave them both wet.', 'He thinks the taxi will arrive very soon.', 'He does not want to pay for parking.', 'He left his umbrella at the restaurant.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { OKSANA: { name: 'Oksana', g: 'f', skin: '#f2cfb0', hair: '#c9a04e', shirt: '#117864', style: 'bun' }, PRAKASH: { name: 'Prakash', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#6c3483', style: 'short' } },
          segments: [
            {
              lines: [
                ['PRAKASH', 'Oksana, before you load anything, come and look at the van. The fridge unit\'s dead. The display\'s blank, and it\'s as warm in there as in here.'],
                ['OKSANA', 'You\'re kidding. Today of all days? We\'ve got the Delacroix anniversary lunch at noon. A hundred and twenty people, and half the menu is cold.'],
                ['PRAKASH', 'The food itself is fine, though. It spent the night in the walk-in, so nothing\'s been sitting out.'],
                ['OKSANA', 'Okay. Well, that\'s something. Can the van be fixed this morning?'],
                ['PRAKASH', 'I called the repair shop. The earliest they can even look at it is two o\'clock, and that\'s just to figure out what\'s wrong.'],
                ['OKSANA', 'Two hours after the guests sit down. And the golf club\'s fifty minutes out. The salads, the shrimp, the cheesecakes, none of that can ride that far in a warm van in July.'],
                ['PRAKASH', 'A health inspector would have a field day. Okay, the hot food goes in the insulated boxes like always. It\'s just the cold stuff we have to sort out.'],
                ['OKSANA', 'And we leave at ten. So, think fast.']
              ],
              questions: [
                { id: 'L1.1', q: 'What is the main problem the caterers face?', o: ['They cannot keep part of the order cold on the way.', 'Some of the food was left out of the fridge overnight.', 'The van will not start on the morning of the event.', 'The golf club has cancelled the anniversary lunch.'] },
                { id: 'L1.2', q: 'Why is the repair shop no help this morning?', o: ['It cannot check the van until after the meal starts.', 'It does not repair the fridge units on delivery vans.', 'It wants the van brought in before ten o\'clock.', 'It needs two full hours just to find the fault.'] },
                { id: 'L1.3', q: 'Why does Prakash mention a health inspector?', o: ['To stress that the cold food must not travel warm', 'To suggest asking an inspector for some advice', 'To explain why the hot food needs insulated boxes', 'To warn that their kitchen will be inspected soon'] }
              ]
            },
            {
              lines: [
                ['OKSANA', 'Okay, options. Could we rent a refrigerated van somewhere?'],
                ['PRAKASH', 'Already tried. The only place in town that rents them wants three days\' notice. They laughed at me, politely.'],
                ['OKSANA', 'Fine. What about coolers and ice? We\'ve got six big coolers in the basement from the summer barbecues.'],
                ['PRAKASH', 'Six won\'t hold it all. The cheesecakes alone take up two. We\'d need ten, at least, and a mountain of ice.'],
                ['OKSANA', 'Hmm. Or, wait. What if the cold food doesn\'t sit in coolers for long at all? The golf club has a full kitchen, right?'],
                ['PRAKASH', 'They do, but their chef told me last week they\'re slammed with a tournament today. I doubt he\'d hand over half his kitchen.'],
                ['OKSANA', 'Not half. Just room in his walk-in fridge for a few hours. We drive the cold stuff out early, in two trips if we have to, and it waits in his fridge till noon.'],
                ['PRAKASH', 'That\'s actually not bad. Two loads means the six coolers we\'ve got are enough. I\'ll call Pierre. He owes me a favour anyway.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why can they not rent a refrigerated van?', o: ['The rental company needs to be told well in advance.', 'Every refrigerated van in town is already booked.', 'The rental company only rents vans for three days.', 'A rental van would cost more than the whole lunch earns.'] },
                { id: 'L1.5', q: 'What is Prakash\'s concern about the golf club\'s kitchen?', o: ['It will already be busy with another event.', 'It is too small for a lunch of that size.', 'Its chef refused to help them last week.', 'Its fridge is too small for the cheesecakes.'] },
                { id: 'L1.6', q: 'How does Oksana\'s plan solve the cooler problem?', o: ['The coolers they already own can be used twice.', 'The golf club will lend them some of its own extra coolers.', 'The cheesecakes will be made at the golf club.', 'They can buy enough ice to fill ten coolers.'] }
              ]
            },
            {
              lines: [
                ['PRAKASH', 'Good news and bad news. Pierre says yes to the fridge, but he can only give us one shelf. The tournament food\'s taking up the rest.'],
                ['OKSANA', 'One shelf. Well, the shrimp and the salads would fit on one shelf. But then what do we do with the cheesecakes?'],
                ['PRAKASH', 'Here\'s the thing. They\'re frozen solid right now. If they go into a cooler at ten, they\'ll thaw out just in time for dessert. Better than a fridge, honestly.'],
                ['OKSANA', 'Perfect. So I take the first load out at half past eight, shrimp and salads to Pierre\'s shelf, and you follow at ten with the hot boxes and the cheesecakes.'],
                ['PRAKASH', 'Deal. And the van?'],
                ['OKSANA', 'Keep the two o\'clock appointment. But after today, I want a price on a second van, even an old one. One breakdown shouldn\'t be able to sink a whole event.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why can the cheesecakes stay in a cooler all morning?', o: ['They start out frozen and will thaw slowly.', 'They will be served before the hot food.', 'Pierre has offered to lend them a few ice packs.', 'They only need to stay cold for an hour.'] },
                { id: 'L1.8', q: 'What does Oksana\'s final comment suggest?', o: ['She wants a backup in case this happens again.', 'She plans to cancel the van repair appointment.', 'She blames Prakash for not checking the van.', 'She thinks the lunch will have to be moved.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLERK: { name: 'Utility clerk', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#2471a3', style: 'curly' }, OBINNA: { name: 'Obinna', g: 'm', skin: '#5c3a21', hair: '#120c08', shirt: '#b9770e', style: 'short' } },
          segments: [{
            lines: [
              ['CLERK', 'Town of Cobourg utilities, this is Pauline. How can I help?'],
              ['OBINNA', 'Hi. I just opened my water bill, and I think there\'s been a mistake. It\'s three hundred and forty dollars for two months. It\'s usually around ninety.'],
              ['CLERK', 'That is a big jump. Can I have the service address?'],
              ['OBINNA', 'Eighteen Elgin Lane. The name\'s Obinna Eze.'],
              ['CLERK', 'Thanks, Mr. Eze. Okay, I\'ve got it. The meter was actually read this time, not estimated, and it shows almost four times your usual use. Has anything changed at home? Guests staying over, a new pool, watering the garden?'],
              ['OBINNA', 'Nothing. It\'s just me and my wife, and we were away for two weeks in June. If anything, we used less.'],
              ['CLERK', 'Hmm. When a bill jumps like that and nobody\'s home much, the usual suspect is a running toilet. If the rubber seal in the tank wears out, it can waste hundreds of litres a day, and you\'d barely hear a thing.'],
              ['OBINNA', 'Seriously? A toilet?'],
              ['CLERK', 'You\'d be surprised. Here\'s a trick. Put a few drops of food colouring in the tank, wait twenty minutes without flushing, and see whether the colour shows up in the bowl.'],
              ['OBINNA', 'Okay. And if it does, am I stuck paying the whole thing?'],
              ['CLERK', 'Not necessarily. We offer a one-time leak adjustment. If you fix the leak within thirty days and send us a receipt, from a plumber or for the part, we\'ll take half of the extra amount off.'],
              ['OBINNA', 'Only half?'],
              ['CLERK', 'I know. And it\'s once per account, ever, so most people save it for exactly this kind of thing.'],
              ['OBINNA', 'I can probably swap the part myself. It\'s a ten-dollar piece, isn\'t it?'],
              ['CLERK', 'Usually. A hardware store receipt is fine. Just make sure the date\'s on it.'],
              ['OBINNA', 'And the bill\'s due on the fifteenth. Do I pay the whole thing now and wait for the credit?'],
              ['CLERK', 'No need. Pay what you\'d normally pay by the fifteenth, and I\'ll put a note on the account so there\'s no late fee on the rest while we wait for your receipt.'],
              ['OBINNA', 'That\'s a relief. Thanks, Pauline. I\'m off to find some food colouring.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Obinna calling the utility office?', o: ['His bill is far higher than he expected.', 'His meter was not read by the town.', 'He was charged while he was away in June.', 'He wants to set up a payment plan.'] },
              { id: 'L2.2', q: 'Why does the clerk ask about changes at home?', o: ['To rule out an ordinary reason for the higher use', 'To check whether the bill was based on an estimate', 'To find out how many people live in the house', 'To decide whether he qualifies for a credit'] },
              { id: 'L2.3', q: 'What is the food colouring meant to show?', o: ['Whether water is escaping without being noticed', 'Whether the toilet tank needs a good cleaning', 'Whether the water meter is working properly', 'Where a plumber should look for a broken pipe'] },
              { id: 'L2.4', q: 'If the leak is confirmed and fixed, about how much could Obinna save?', o: ['$125', '$250', '$170', '$45'] },
              { id: 'L2.5', q: 'What will Obinna probably do before the fifteenth?', o: ['Pay only the amount he usually owes', 'Pay the whole bill and wait for a refund', 'Hire a plumber to replace the toilet', 'Send the town a photo of the meter'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#f0c9a6', hair: '#4a3020', shirt: '#566573', style: 'short' }, PASCALE: { name: 'Pascale Nyberg', g: 'f', skin: '#f2cfb0', hair: '#bdc3c7', shirt: '#922b21', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Pascale Nyberg, who runs a small business in Uxbridge helping older people move out of the family home. Pascale, how did you get into this line of work?'],
              ['PASCALE', 'Honestly, by accident. When my parents sold their farmhouse, I took three weeks off to help, and by the end I realized I\'d enjoyed it far more than my actual job.'],
              ['PASCALE', 'I was an insurance adjuster, so I was used to walking into houses full of other people\'s belongings.'],
              ['HOST', 'Who usually calls you? The seniors themselves?'],
              ['PASCALE', 'Less often than you\'d think. Nine times out of ten it\'s an adult child who lives in another province and can\'t keep flying in. The parent is usually the last one to be won over.'],
              ['HOST', 'Where do you start?'],
              ['PASCALE', 'With a floor plan of the new place, never with the old house. If the new apartment has one closet, we measure that closet. It turns every argument into a question of space, not of how much someone loved their grandmother\'s china.'],
              ['HOST', 'Is that where the tears come in?'],
              ['PASCALE', 'Sometimes. But what surprises people is that the big furniture is easy. It\'s the small stuff that bogs everything down: birthday cards, children\'s drawings, a drawer full of old keys. I once watched a man spend an entire afternoon on one shoebox of letters.'],
              ['HOST', 'So how do you keep things moving?'],
              ['PASCALE', 'I set a timer. Twenty minutes on a box, then we stop, whether it\'s finished or not. And for photos and papers, we often scan them, so the memories come along even if the paper doesn\'t.'],
              ['HOST', 'What happens to everything that\'s left over?'],
              ['PASCALE', 'People assume their furniture is worth a fortune. Unfortunately, heavy dark wood is very hard to sell these days. Younger families just don\'t want it.'],
              ['PASCALE', 'So we sell what we can, donate a great deal, and family members get first pick before anything leaves the house.'],
              ['HOST', 'And what do you charge?'],
              ['PASCALE', 'Sixty dollars an hour, and a typical move takes me about forty hours, spread over a month or so. The first visit is free, and I always give a written estimate after it.'],
              ['HOST', 'Any advice for listeners who aren\'t moving yet?'],
              ['PASCALE', 'Start now, while it\'s still your choice. One drawer a week. And if you want to give something to your kids, give it while you\'re around to tell them the story behind it.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Pascale come to start her business?', o: ['Helping her own parents showed her what she enjoyed.', 'She lost her earlier job as an insurance adjuster.', 'Her parents asked her to help their friends move.', 'She needed extra income after selling a farmhouse.'] },
              { id: 'L3.2', q: 'What does Pascale suggest about the seniors she works with?', o: ['They are often the most reluctant to move.', 'They usually live in a different province.', 'They usually contact her themselves first.', 'They are eager to sell their furniture.'] },
              { id: 'L3.3', q: 'Why does Pascale begin with the floor plan of the new home?', o: ['It makes choices about space rather than feelings.', 'It helps her estimate how long the move will take.', 'It shows family members which furniture to choose.', 'It lets her measure the old house more accurately.'] },
              { id: 'L3.4', q: 'What does Pascale find slows the work down most?', o: ['Sorting small items with personal meaning', 'Moving large and heavy pieces of furniture', 'Waiting for family to fly in from far away', 'Scanning old photographs and documents'] },
              { id: 'L3.5', q: 'Why does Pascale mention heavy dark wood?', o: ['To show that owners often overvalue their things', 'To explain why she charges clients by the hour', 'To describe what younger families like to buy', 'To argue that it should always be donated'] },
              { id: 'L3.6', q: 'About how much does a typical move with Pascale cost?', o: ['$2,400', '$1,600', '$2,000', '$240'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#e8c3a0', hair: '#5d4037', shirt: '#212f3d', style: 'long' } },
          segments: [{
            lines: [
              ['NEWS', 'People in Chilliwack who have gone years without a family doctor will soon have a new place to turn. A clinic run entirely by nurse practitioners opens next Monday in a former bank building on Wellington Avenue.'],
              ['NEWS', 'Nurse practitioners are registered nurses with advanced training. They can diagnose illnesses, order tests and prescribe medication, and at this clinic they will be the main health providers for every patient.'],
              ['NEWS', 'The clinic will start with five nurse practitioners and expects to take on about four thousand patients in its first year.'],
              ['NEWS', 'Patients will not be accepted at the door. Instead, residents must first sign up for the provincial waitlist for a family doctor, and the clinic will contact people from that list in order, starting with those who have waited longest.'],
              ['NEWS', 'Officials say roughly eleven thousand people in the area are on the list right now.'],
              ['NEWS', 'Unlike a walk-in clinic, the new centre will not offer one-time visits. Patients who join will be expected to come back for regular checkups, and their records will stay with the clinic.'],
              ['NEWS', 'Local doctors have largely welcomed the clinic, although some say it is only a stopgap, and that the province must also do more to attract new physicians to the valley.'],
              ['NEWS', 'The clinic will be open weekdays from eight in the morning until six, and until eight on Thursdays. A pharmacy and a lab for blood tests are expected to open in the same building this fall.'],
              ['NEWS', 'Officials remind residents that the clinic does not handle emergencies. Anyone with chest pain or trouble breathing should still go straight to the hospital.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A new way for residents to get ongoing care', 'A shortage of nurses at the local hospital', 'A walk-in clinic opening in a former bank', 'A plan to bring more doctors to the region'] },
              { id: 'L4.2', q: 'How will the clinic choose its patients?', o: ['From an existing list, by how long people have waited', 'By seeing whoever arrives first on opening day', 'By asking local doctors to send their patients', 'By accepting people who need urgent treatment'] },
              { id: 'L4.3', q: 'What does the report suggest about people on the waitlist?', o: ['Many will still be waiting a year from now.', 'All of them will be contacted before the fall.', 'Most of them already have a family doctor.', 'Many of them prefer to visit on Thursdays.'] },
              { id: 'L4.4', q: 'How is the clinic different from a walk-in clinic?', o: ['Patients are expected to keep coming back.', 'It stays open later on weekday evenings.', 'It already has a pharmacy in the building.', 'Patients can see a doctor without waiting.'] },
              { id: 'L4.5', q: 'What reservation do some local doctors have?', o: ['The clinic will not solve the shortage on its own.', 'Nurse practitioners should not prescribe medicine.', 'The clinic will take patients away from them.', 'The clinic ought to treat emergencies as well.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Norbert\'s send-off', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { NATASHA: { name: 'Natasha', g: 'f', skin: '#f2cfb0', hair: '#8e3b1f', shirt: '#1f618d', style: 'long' }, OSCAR: { name: 'Oscar', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#a04000', style: 'short' }, POOJA: { name: 'Pooja', g: 'f', skin: '#b07850', hair: '#120c08', shirt: '#196f3d', style: 'bun' } },
          segments: [{
            lines: [
              ['NATASHA', 'Okay, Norbert retires at the end of June, and we\'ve got three weeks to plan his send-off.'],
              ['OSCAR', 'Thirty-one years in this office. We can\'t just do cake in the lunchroom and call it a day.'],
              ['POOJA', 'Agreed. But let\'s talk money first. The manager says the company will put in three hundred dollars.'],
              ['NATASHA', 'And there are about forty of us. If people chip in a little, we\'ll have plenty.'],
              ['OSCAR', 'Some people won\'t want to be asked for money, though. Especially the summer students.'],
              ['POOJA', 'Then we make it optional. A sealed envelope at reception, and no list of names.'],
              ['NATASHA', 'Good. Now, where? I was thinking of that Italian place on Front Street. It has a private room.'],
              ['OSCAR', 'Norbert would hate that. He\'s told me twice that restaurants make him feel like he\'s on display.'],
              ['POOJA', 'Then why not here, in the boardroom, after work? People could drop in without booking anything.'],
              ['NATASHA', 'Hmm. The boardroom feels like a meeting, not a party.'],
              ['OSCAR', 'Not if we push the big table aside and bring in food from his favourite deli.'],
              ['NATASHA', 'Fine, you\'ve won me over. It saves us a deposit, too. Which day, though?'],
              ['POOJA', 'His last day is Friday the twenty-seventh. But half the office leaves early on summer Fridays.'],
              ['OSCAR', 'So the Thursday before? Wait, no. Thursday\'s the quarterly audit. Nobody will be in a party mood.'],
              ['NATASHA', 'Then Wednesday. It\'s the only day that week without something big going on.'],
              ['POOJA', 'Wednesday works. Now, the gift. I heard he\'s planning to sail around Lake Huron next summer.'],
              ['OSCAR', 'A good pair of marine binoculars? The ones I looked at were about two hundred.'],
              ['NATASHA', 'Lovely idea, but he already has a pair. He brought them on the bird-watching day last spring.'],
              ['POOJA', 'What about a framed map of the lake, with all our names signed around the border?'],
              ['OSCAR', 'Oh, I like that. It\'s personal, and he\'d actually hang it on his wall.'],
              ['NATASHA', 'And it\'s cheaper, which leaves more for the food. Does anyone know a framing shop?'],
              ['POOJA', 'My sister-in-law runs one. She\'ll need about ten days, so we should order this week.'],
              ['OSCAR', 'And the speeches? At the last send-off, they dragged on for forty-five minutes.'],
              ['NATASHA', 'Two speakers, five minutes each. I\'ll ask his first manager, if she\'s willing to come.'],
              ['POOJA', 'Didn\'t she retire to the east coast? That\'s a long trip for one afternoon.'],
              ['NATASHA', 'Then she could record a short video. Norbert would love that more than another speech.'],
              ['OSCAR', 'Perfect. I\'ll book the boardroom and call the deli. Pooja, the map. Natasha, the speakers.']
            ],
            questions: [
              { id: 'L5.1', q: 'Why does Oscar want more than cake in the lunchroom?', o: ['Norbert\'s long service deserves a bigger occasion.', 'The company has already paid for a restaurant.', 'Norbert asked for a party away from the office.', 'The lunchroom is much too small for all forty of them.'] },
              { id: 'L5.2', q: 'How does Pooja respond to Oscar\'s concern about money?', o: ['She makes giving private and voluntary.', 'She asks the manager to cover everything.', 'She excuses the summer students from paying.', 'She sets the same amount for everyone.'] },
              { id: 'L5.3', q: 'Why does Oscar reject the restaurant?', o: ['Norbert would feel uncomfortable as the centre of attention.', 'The private room is already booked that week.', 'The deposit would use up most of the money they have.', 'It is too far from the office for most people.'] },
              { id: 'L5.4', q: 'What changes Natasha\'s mind about the boardroom?', o: ['A few changes would make it feel like a party.', 'The boardroom is the only room that is free.', 'Norbert prefers to celebrate after work hours.', 'The deli has offered to deliver for free.'] },
              { id: 'L5.5', q: 'Why is the Thursday ruled out?', o: ['Another demanding event is happening then.', 'Many of the staff tend to leave early on that day.', 'It is Norbert\'s last day at the office.', 'The boardroom is booked for a meeting.'] },
              { id: 'L5.6', q: 'Why is the binoculars idea dropped?', o: ['He would end up with two pairs.', 'They would use up most of the money.', 'Norbert no longer goes bird-watching.', 'They would not be useful when sailing.'] },
              { id: 'L5.7', q: 'What is one reason Natasha likes the framed map?', o: ['It costs less than the first gift idea.', 'Pooja\'s sister-in-law will frame it free of charge.', 'Norbert has asked for a map of the lake.', 'It can be ready in less than a week.'] },
              { id: 'L5.8', q: 'Why does Natasha suggest a video from Norbert\'s first manager?', o: ['Travelling to the party would be hard for her.', 'Norbert dislikes long speeches at parties.', 'She has already refused to give a speech at the party.', 'The boardroom has no room for more guests.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Calories on every menu?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#0e6655', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'In several provinces, large restaurant chains must already post the number of calories beside every item on their menus. Now other provinces are debating whether to require the same, and some want the rule to cover smaller, independent restaurants as well.'],
              ['NARR', 'Nanette Okoro, a registered dietitian in Stratford, supports the idea. Her first argument is that most people have very little sense of how much energy is in a restaurant meal.'],
              ['NARR', 'In her experience, she says, people routinely guess that a large muffin or a fancy coffee drink has about half the calories it really does. "You can\'t make a choice about something you can\'t see," she says.'],
              ['NARR', 'She also notes that many people with diabetes or heart conditions rely on this kind of information to manage their health, and at the moment they are left to guess.'],
              ['NARR', 'Her second argument is about the restaurants themselves. When chains know the numbers will be printed on the wall, she says, many quietly change their recipes or add smaller portions.'],
              ['NARR', 'That means even customers who never read the labels end up eating a little less.'],
              ['NARR', 'Okoro admits that a calorie count is not the whole story. A number says nothing about salt or vitamins, and the studies she has read show only modest changes in what people order.'],
              ['NARR', 'But modest changes, she argues, add up across millions of meals.'],
              ['NARR', 'Pasquale Ricci, who runs two family restaurants in the same city, opposes extending the rule to businesses like his. His first argument is cost.'],
              ['NARR', 'A chain sells the same burger in a thousand locations, so it can pay a lab once and print the number everywhere. Ricci\'s menu changes with the seasons, and his kitchen offers a different special every day.'],
              ['NARR', 'Some days, he adds, the soup depends on whatever the farmer down the road brought in that morning.'],
              ['NARR', '"Having every dish tested would cost me thousands of dollars a year," he says. "For a big company, that\'s pocket change. For me, it\'s a cook\'s wages."'],
              ['NARR', 'His second argument is that a single number can mislead. A bowl of lentil soup with olive oil and fresh bread may show more calories than a diet soft drink and a small order of fries.'],
              ['NARR', 'Yet few people, he points out, would call the second meal the healthier one.'],
              ['NARR', 'Ricci does not reject the idea altogether. He accepts that large chains, with identical recipes everywhere, should post the numbers, and he says his staff are always happy to tell customers what goes into a dish.'],
              ['NARR', 'Okoro replies that free online calculators now let small kitchens estimate calories cheaply, without any lab. Ricci counters that an estimate is only as good as the cook\'s measuring, and that a wrong number on a menu could bring him complaints, or worse.'],
              ['NARR', 'Both agree that asking a server for nutrition information should always be an option, and that no one wants calorie counts to take the pleasure out of a meal out.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether more restaurants should post calorie counts', 'How restaurants decide on the size of their portions', 'Why chain restaurants are healthier than small ones', 'How dietitians help people with heart conditions'] },
              { id: 'L6.2', q: 'Why does Okoro mention the muffin and the coffee drink?', o: ['To show that diners misjudge what is in their food', 'To argue that these items should be taken off menus', 'To show that chains now offer smaller portions', 'To explain why bakeries should post calories first'] },
              { id: 'L6.3', q: 'According to Okoro, how can posted calories help people who never read them?', o: ['Dishes may be made lighter without notice.', 'Servers will point out the healthier choices.', 'Their friends will encourage them to order less.', 'Prices will rise for high-calorie dishes.'] },
              { id: 'L6.4', q: 'Why does Ricci mention the farmer down the road?', o: ['To show how often his dishes change', 'To explain where he buys his olive oil', 'To argue that local food is healthier', 'To show that his costs keep rising'] },
              { id: 'L6.5', q: 'What is Ricci\'s point about the lentil soup?', o: ['One number may not reflect how healthy a meal is.', 'Soup has more calories than most people expect.', 'Diet drinks should not be sold with fries.', 'Customers prefer fries to traditional dishes.'] },
              { id: 'L6.6', q: 'What does Ricci fear about using online calculators?', o: ['A mistaken estimate could get him into trouble.', 'The calculators are too costly for his kitchen.', 'His cooks would refuse to measure ingredients.', 'Customers would trust them more than his staff.'] }
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
          passage: '<h3>Message</h3><p>Hi Nkechi,</p><p>I hope the new job is treating you well. I have some news, and I am afraid it comes with a favour attached. Pavel has been offered a position in Grande Prairie, and we move at the end of March. I am thrilled for him, but it means someone has to take over the walking school bus, and you were the first person who came to mind.</p><p>In case you have never seen it in action, it is simple: a parent volunteer walks a group of children to Elmhurst Elementary along a fixed route, picking them up at set "stops" along the way. We have two routes. The Tamarack route has nine children and leaves the corner of Tamarack and Sorrel at 8:10. The Willow route is shorter, with five children, and leaves the footbridge at 8:20. Both arrive by 8:35, ten minutes before the bell. There is no afternoon walk, because the after-school program keeps most of the children until five.</p><p>Most of the work happens behind the scenes. Every Sunday evening I send out the week\'s schedule, so each volunteer knows which mornings they are walking. We have eleven volunteers on paper, but realistically only seven of them can be relied on, so I always line up a back-up for each day. When nobody can cover, I walk the route myself, which happens about once a month.</p><p>There is one thing I have been putting off, and I would rather not drop it in your lap without warning. The school has told me that the crossing guard at Sorrel Street will be gone from April because of budget cuts. That is the busiest crossing on the Tamarack route. I have asked the city for a guard twice and heard nothing back. One option is to move the route one block over, to the traffic lights at Poplar Street, which adds about five minutes. The parents I have asked are split on it.</p><p>I know you have a lot on your plate, so please say no if this is too much. If it helps, I am happy to walk both routes with you during my last two weeks so you can meet the families. Could you let me know by Friday?</p><p>With thanks,<br>Ophelia</p>',
          questions: [
            { id: 'R1.1', q: 'Ophelia says her news "comes with a favour attached" because', o: ['her move leaves a role that someone must fill.', 'Pavel needs help packing before the end of March.', 'she wants Nkechi to help her find work in Grande Prairie.', 'the school asked her to find a new crossing guard.'] },
            { id: 'R1.2', q: 'There is no afternoon walk because', o: ['most children stay at school until later on.', 'the volunteers all work in the afternoons.', 'the crossing guard only works in the morning.', 'the parents prefer to drive their children home.'] },
            { id: 'R1.3', q: 'Compared with the Tamarack route, the Willow route', o: ['leaves later and serves fewer children.', 'reaches the school ten minutes earlier.', 'has more stops along the way to school.', 'already uses the traffic lights on Poplar.'] },
            { id: 'R1.4', q: 'Ophelia arranges a back-up volunteer each day because', o: ['not everyone on the list can be counted on.', 'the school requires two adults on each route.', 'she can no longer walk the routes herself.', 'the volunteers prefer to walk in pairs.'] },
            { id: 'R1.5', q: 'Ophelia\'s feelings about the Sorrel Street problem suggest that she', o: ['has avoided dealing with it and feels uneasy.', 'expects the city to solve it before April.', 'believes the parents have already agreed.', 'sees it as too minor to worry Nkechi about.'] },
            { id: 'R1.6', q: 'Moving the Tamarack route to Poplar Street would', o: ['avoid the risky crossing but take a little longer.', 'allow the two routes to be combined into one.', 'let the children reach school ten minutes sooner.', 'bring the crossing guard back after April.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Ophelia,</p><p>Congratulations to Pavel! Grande Prairie is lucky to be getting you both. Of course I will take over the walking school bus. My new job does not start until 9:30, so even on the mornings when I have to cover a route myself, I can [[R1.7]] and still get to work on time.</p><p>I would love to take you up on your offer to [[R1.8]] before you go. It will be much easier to meet the children and their parents with you beside me.</p><p>About Sorrel Street: I would rather not wait for the city. Since the guard will be gone [[R1.9]], I think we should switch to the Poplar Street lights from the first day of that month. Five extra minutes is a small price, and the children would still arrive [[R1.10]].</p><p>One request: could you send me the contact list and mark which volunteers [[R1.11]]? I want to know who I can count on before I make my first Sunday schedule.</p><p>Nkechi</p>',
          blanks: [
            { id: 'R1.7', o: ['see the children safely to school', 'walk the children home after school', 'drive the children to the footbridge', 'meet the crossing guard at lunch'] },
            { id: 'R1.8', o: ['walk both routes together', 'write to the city together', 'meet the new crossing guard', 'post a notice in the newsletter'] },
            { id: 'R1.9', o: ['from April', 'from May', 'after the school year', 'from the Willow route'] },
            { id: 'R1.10', o: ['before the bell rings', 'well before 8:30', 'at the same time as now', 'in time for the after-school program'] },
            { id: 'R1.11', o: ['are the dependable ones', 'live near the footbridge', 'have children on the Tamarack route', 'have already spoken to the city'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Ridgeline Truck Rental, Portage la Prairie: Local Rates</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Vehicle</th><th>Suits</th><th>Daily rate, Monday to Thursday</th><th>Daily rate, Friday to Sunday</th><th>Per km after the free kilometres</th></tr></thead><tbody>' +
            '<tr><td>Cargo van</td><td>A few items or a studio</td><td>$39</td><td>$49</td><td>$0.39</td></tr>' +
            '<tr><td>3.5 m truck</td><td>One-bedroom apartment</td><td>$59</td><td>$79</td><td>$0.59</td></tr>' +
            '<tr><td>5 m truck</td><td>Two-bedroom apartment</td><td>$79</td><td>$99</td><td>$0.69</td></tr>' +
            '<tr><td>6.5 m truck</td><td>House with three or more bedrooms</td><td>$99</td><td>$129</td><td>$0.79</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>The first 50 km of each rental day are free.</li><li>Damage protection: $25 per day (optional). Without it, the renter pays the first $2,000 of any damage. Most credit cards do not cover trucks.</li><li>All drivers must be 21 or older. Drivers aged 21 to 24 pay a young driver fee of $15 per day.</li><li>Return the vehicle with the same fuel level as at pickup, or pay $3.50 per litre to refill it.</li><li>Moving pads: $12 per dozen. Hand truck (dolly): $10 per day.</li><li>Renters with a valid student ID save 10% on the daily rate, Monday to Thursday only. The saving does not apply to kilometre charges or extras.</li><li>One-way rentals to another Ridgeline branch: add $150.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Nils,</p><p>I checked the rates for moving day, Saturday, May 3. Since we are moving everything from our two-bedroom apartment, we will need [[R2.1]]. The new house is 35 km away, so with the drive back to return the truck, we will cover about 70 km. My credit card does not cover trucks, so I want damage protection. The truck, the kilometres and the protection will come to [[R2.2]], not counting fuel.</p><p>You will be doing the driving, and since you do not turn 25 until July, you [[R2.3]]. Remember, too, that we must [[R2.4]], or they will charge us $3.50 a litre.</p><p>For your mother\'s piano and the heavy oak dresser, I think we should also get [[R2.5]]. Let me know if I have missed anything.</p><p>Penelope</p>',
          blanks: [
            { id: 'R2.1', o: ['the 5 m truck', 'the 3.5 m truck', 'the 6.5 m truck', 'the cargo van'] },
            { id: 'R2.2', o: ['$137.80', '$172.30', '$117.80', '$112.80'] },
            { id: 'R2.3', o: ['will add $15 to the cost of the day', 'will not be allowed to drive it', 'can drive it at no extra cost', 'will need to buy your own insurance'] },
            { id: 'R2.4', o: ['refill it to where the gauge started', 'return it with a completely full tank', 'pay for the fuel when we pick it up', 'buy our fuel at a Ridgeline branch'] },
            { id: 'R2.5', o: ['a hand truck and some pads', 'a second truck for the day', 'damage protection for a week', 'the one-way rental option'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A customer takes the cargo van on a Tuesday, drives exactly 50 km and adds no extras. The cost is', o: ['$39.00.', '$58.50.', '$49.00.', '$35.10.'] },
            { id: 'R2.7', q: 'A 20-year-old who wants to drive a rented truck', o: ['cannot be the driver at all.', 'pays a $15 young driver fee each day.', 'must buy damage protection first.', 'may only drive the cargo van.'] },
            { id: 'R2.8', q: 'Someone rents the 3.5 m truck from Friday to Sunday (3 days), drives 120 km in total and declines damage protection. The rental costs', o: ['$237.', '$307.80.', '$312.', '$177.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Return of Home Delivery</h3><p><b>A.</b> For much of the twentieth century, the day in many Canadian towns began with the sound of glass bottles clinking on the front step. The milkman, usually working for a local dairy, arrived before dawn, collected the empty bottles that families had rinsed and left out, and replaced them with full ones. In the early decades, his wagon was pulled by a horse that knew the route so well it would stop at each house without being told. Customers left notes in the empty bottles to order extra cream or butter, and in winter the milk sometimes froze so hard that it pushed the cardboard cap right off the bottle. Children often waited at the window to feed the horse a carrot or an apple as the wagon went by.</p><p><b>B.</b> Groceries came to the door too. A family could telephone the corner store with an order in the morning, and a delivery boy on a bicycle would bring the box that afternoon, with the bill added to an account that was settled at the end of the month. For shopkeepers, the service was a way to keep loyal customers at a time when most households did not own a car. Many delivery boys were teenagers earning their first wages, and some went on to run the stores themselves. Regular customers often knew the delivery boy by name and tipped him at Christmas.</p><p><b>C.</b> The decline came gradually after the Second World War. Refrigerators let families keep milk for a week, so daily deliveries were no longer needed. Large supermarkets offered lower prices and far more choice, and with a car in the driveway, a weekly trip to stock up became the new habit. As suburbs spread outward, delivery routes grew longer and less profitable. Plastic jugs and waxed cartons, which did not need to be collected and washed, finally replaced the glass bottle in most homes. By the 1970s, the milkman had become a memory in most Canadian cities.</p><p><b>D.</b> Today, the delivery van is back, although it now usually arrives after an order placed on a phone. Online grocery shopping grew slowly for years and then jumped sharply during the pandemic, when many people wanted to avoid crowded stores. A handful of small dairies have even revived doorstep delivery in returnable glass bottles, often for customers who want to reduce packaging waste. Not everyone is convinced. Delivery fees and tips can add a significant amount to a weekly bill, and some shoppers complain that the person filling the order never picks the ripest fruit. Grocers, for their part, say that delivery is costly to run and that few of them earn much profit from it.</p>',
          questions: [
            { id: 'R3.1', q: 'Customers could ask for additional products without speaking to anyone.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Shoppers could pay for their groceries some weeks after receiving them.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Shopkeepers used delivery to keep shoppers coming back in an era before most families could drive to a store.', fixed: true, a: 'B' },
            { id: 'R3.4', q: 'Buying larger amounts less often took the place of daily deliveries.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Milkmen usually earned more than the workers inside the dairy.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Containers that did not have to be returned took over from glass.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'Worry about packaging has helped bring back an older way of getting milk.', fixed: true, a: 'D' },
            { id: 'R3.8', q: 'Greater distances between homes made delivery less worthwhile.', fixed: true, a: 'C' },
            { id: 'R3.9', q: 'Most online grocery orders today are delivered by the store\'s own employees.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Cities Ban New Drive-Throughs?</h3><p>At lunchtime on most weekdays, the line of cars waiting at the coffee shop on Holloway Road stretches out of the parking lot and into the right lane of the street, blocking traffic and forcing buses to swing around it. Scenes like this have led a growing number of Canadian municipalities to stop approving new drive-throughs, at least in some neighbourhoods. This fall, council in the city of Port Hallam will decide whether to do the same.</p><p>Councillor Noreen Callaghan, who brought the proposal forward, says drive-throughs were designed for highways, not for the walkable main streets the city is trying to build. "A drive-through puts a ring of asphalt around a building and turns the sidewalk into a driveway," she says. Pedestrians, including children walking to school, must cross a stream of cars entering and leaving the lane. She also points to idling: a car waiting ten minutes in line burns fuel and releases exhaust while going nowhere. Callaghan stresses that the ban would apply only to new drive-throughs, and only downtown and along two main streets; existing ones would stay open.</p><p>Osvaldo Quintero, who owns three fast-food franchises in the region, says the proposal ignores how customers actually live. At his busiest location, more than seventy percent of sales come through the window. "People are not going to park and walk in because a bylaw says so," he says. "They will drive to the next town." He argues that the real problem on Holloway Road is poor design, not drive-throughs themselves, and that longer lanes built entirely on private property would keep cars off the street. He admits, though, that some older locations were squeezed onto lots that were simply too small.</p><p>For Penny Mathers, the debate is personal. Mathers, who uses a wheelchair, says a drive-through is often the only way she can buy a coffee on her own in winter, when snowbanks and icy curbs make many entrances impossible to reach. Parents with sleeping babies in car seats say much the same. "Before we take something away, I want to know what will replace it," she says. She would be more comfortable with a ban if new businesses were required to offer curbside pickup or accessible parking right at the door.</p><p>Callaghan says she has listened to these concerns, and that the latest version of the proposal requires new restaurants downtown to provide accessible parking spaces close to the entrance. Quintero is not satisfied. A parking space, he says, does nothing for someone who cannot get out of the car in the first place.</p><p>Some residents see the issue more simply. A survey by a local business group found that most people liked the convenience of drive-throughs but also complained about the lineups they cause. Council is expected to vote in November, after a final public meeting where residents from all three groups are expected to speak.</p>',
          questions: [
            { id: 'R4.1', q: 'The description of Holloway Road shows that', o: ['waiting cars can spill out and block traffic.', 'the coffee shop is the busiest in the city.', 'buses no longer stop near the coffee shop.', 'the road is too narrow for two lanes of cars.'] },
            { id: 'R4.2', q: 'Callaghan mentions children walking to school to show that', o: ['drive-throughs can make walking less safe.', 'schools are too close to the main streets.', 'children often buy food at drive-throughs.', 'idling cars mostly affect young people.'] },
            { id: 'R4.3', q: 'Quintero believes the problem on Holloway Road could be solved by', o: ['redesigning lanes so cars stay on private land.', 'asking customers to park their cars and walk inside.', 'closing all of the drive-throughs downtown.', 'moving the restaurant to the next town.'] },
            { id: 'R4.4', q: 'Mathers would be more willing to accept the ban if', o: ['new businesses had to offer other easy access.', 'existing drive-throughs were also closed.', 'the city cleared snowbanks more quickly.', 'restaurants hired staff to carry orders inside.'] },
            { id: 'R4.5', q: 'Quintero\'s reply to the accessible parking requirement suggests that he', o: ['believes it overlooks the customers who most need a drive-through.', 'believes it would cost restaurant owners too much to build.', 'agrees it fully answers Mathers\'s concerns.', 'wants it to apply to existing restaurants too.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I walk to work along Holloway Road every day, and I have lost count of the times I have had to wait while cars [[R4.6]]. So I understand why Councillor Callaghan wants to stop new drive-throughs downtown, especially since the ban would [[R4.7]].</p><p>Still, Ms. Mathers makes a point I had never considered: for some people, a drive-through is [[R4.8]]. Mr. Quintero is right that a parking space [[R4.9]], so I hope council adds curbside pickup to its plan.</p><p>Before the vote in November, I plan to attend [[R4.10]] and say so in person. A ban that works for walkers but shuts out people like Ms. Mathers would not be a success. A good plan should make the street safer for everyone, not just for some of us.</p>',
          blanks: [
            { id: 'R4.6', o: ['crossed the sidewalk to join the line', 'parked in the accessible spaces', 'stopped at the bus shelter', 'waited at the school crossing for the guard'] },
            { id: 'R4.7', o: ['leave existing drive-throughs open', 'apply to the whole region', 'close the busy coffee shop on Holloway Road', 'start before the public meeting'] },
            { id: 'R4.8', o: ['the only practical way to shop alone', 'a faster way to reach the highway', 'cheaper than eating inside', 'mainly used by parents with sleeping babies'] },
            { id: 'R4.9', o: ['is of no use to someone who must stay in the vehicle', 'will only make the lineups out on the street even worse', 'costs more than a curbside pickup service', 'should be kept for delivery drivers'] },
            { id: 'R4.10', o: ['the final public meeting', 'the business group survey', 'the opening of a new drive-through', 'a council vote in the fall'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Three weeks ago, you ordered a $780 dining table and four chairs from an online furniture store. When the boxes arrived, the tabletop had a deep crack across one corner and two of the chair legs were split. You emailed photos to the seller the same day, but the seller says the damage must have happened after delivery and refuses to give a refund, offering only a 10% discount code for your next order.</p><p>Write an email to the store\'s customer service manager. In your email, do the following:</p><ul><li>Describe what you ordered and the condition it arrived in.</li><li>Explain why you believe the damage was not your fault.</li><li>Say what you want the store to do, and by when.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>The owner of your apartment building has money for one improvement this year and is asking tenants which option they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Replace the old washers and dryers in the shared laundry room with new, energy-efficient machines that you pay for with a phone app. However, the price would rise from $2.50 to $3.25 a load, and the laundry room would be closed for about three weeks during the work.' },
            { key: 'B', label: 'Option B', text: 'Turn an unused storage room into a locked parcel room, so deliveries are no longer left in the lobby. However, tenants would need an app to collect their parcels, and the bicycles now kept in that room would move to an outdoor rack.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood where you like to spend time, and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has offered to host her family\'s holiday dinner for the first time this year. Fourteen people are coming, but she lives in a small one-bedroom apartment, has only four chairs and a small oven, and can spend about $200. She also works until 4:00 p.m. the day before. Give your friend advice on how to plan and host the dinner.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you made a new friend in an unexpected place or situation. How did you meet, what brought you together, and what would you say to someone who finds it hard to make new friends?' },
        {
          id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.',
          image: '<img src="tests/img/28/scene.jpg" alt="A busy laundromat on a Sunday morning">',
          picture: 'Comic style scene inside a bright, busy neighbourhood laundromat on a Sunday morning, seen from the front so the whole room is visible. A row of front loading washers runs along the left wall and a stack of dryers along the back wall, with a long folding table in the middle and plastic chairs by the front window. 13 people. Activities: 1) a woman in a red sweater pulling wet clothes out of a washer into a wheeled laundry cart; 2) a man in a blue shirt folding T shirts into neat piles on the folding table; 3) a teenage boy with earbuds sitting on a plastic chair reading a thick book; 4) an elderly woman with glasses feeding a bill into a change machine on the wall; 5) two young women standing at the end of the folding table laughing as they match socks from a big pile; 6) a girl of about ten buying a small box of detergent from a vending machine; 7) a man asleep on a bench with his head resting on a stuffed laundry bag; 8) a woman talking on her phone while loading coins into a dryer; 9) an attendant in a green apron mopping the floor at the far back corner; 10) a father pushing an empty stroller toward the door while looking at a receipt. About to happen cue 1: one washer near the front has too much soap, and white foam is pouring out of its door and spreading across the floor, while a young man carrying a paper cup of coffee walks straight toward the foam with his eyes on his phone. About to happen cue 2: a toddler (the father\'s child) is standing on tiptoe at the edge of the folding table, pulling at the bottom towel of a tall stack of folded towels that is starting to tip over. Signs: one sign on the wall above the washers reading "PLEASE DO NOT OVERLOAD MACHINES".'
        },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/28/scene.jpg" alt="A busy laundromat on a Sunday morning">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'This summer is expected to be very hot, and your family\'s two-bedroom apartment on the top floor already gets uncomfortably warm. You can afford only one solution. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Window air conditioner', image: '<img src="tests/img/28/opt_A.jpg" alt="Photo: Window air conditioner">', picture: 'A realistic photo of a white window air conditioner fitted into the lower half of an open apartment window, seen from inside a bedroom with light curtains pulled to the side.', facts: ['$420, cools one room very well', 'Building rules require a support bracket ($60)', 'Fairly noisy at night', 'Uses a lot of electricity'] },
            { key: 'B', title: 'Portable air conditioner', image: '<img src="tests/img/28/opt_B.jpg" alt="Photo: Portable air conditioner">', picture: 'A realistic photo of a tall white portable air conditioner on wheels standing on a wooden living room floor, with a wide exhaust hose running to a panel in a nearby window.', facts: ['$550, rolls from room to room', 'Hose must vent through a window panel', 'Cools less than a window unit', 'Takes up floor space'] }
          ],
          third: { key: 'C', title: 'Ceiling fans', image: '<img src="tests/img/28/opt_C.jpg" alt="Photo: Ceiling fans">', picture: 'A realistic photo of a simple white ceiling fan with five wooden blades and a light in the middle, mounted on the ceiling of a bright bedroom.', facts: ['$180 each (2 needed), plus $250 for an electrician', 'Very quiet and cheap to run', 'Moves air but does not cool it', 'Landlord\'s written permission needed'] },
          persuade: 'A family member thinks ceiling fans would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>A month ago, you agreed to lend your car to your brother this Saturday so he can move into his new apartment. He has already asked three friends to help him carry furniture. Today, your partner told you that her mother must go to a medical appointment on Saturday in a town two hours away, where no bus goes, and she asked you to drive them there in your car.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your brother. Explain why he cannot borrow your car on Saturday.</p><p><b>Option B:</b> Talk to your partner. Explain why you cannot drive her and her mother on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>In your town, many condominium buildings and some neighbourhood associations do not allow residents to dry laundry on outdoor clotheslines or balconies, saying it looks untidy and lowers property values. Some residents want the town to pass a bylaw allowing clotheslines everywhere, because drying clothes outside saves energy and money. Others say each building should be free to make its own rules.</p><p>The town council has asked residents for their views before it votes. Should the town allow clotheslines everywhere, whatever a building\'s own rules say? Explain your reasons.</p>' },
        {
          id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60,
          prompt: 'You are in a home renovation store and see this unusual bathtub on sale for $1,450. Call your friend, who is renovating the only bathroom in her small apartment, has a bad knee, and has $1,500 to spend on a new tub. The tub holds about 300 litres of water, and the store will not take it back once it has been installed. Describe the bathtub and explain whether you think your friend should buy it.',
          image: '<img src="tests/img/28/object.jpg" alt="An unusual bathtub in a home renovation store">',
          picture: 'One strange bathtub standing alone on the floor of a home renovation store, shown from a front three quarter angle. It is short (about 1.2 metres long) but very deep, white with chrome details. Unusual features: 1) a small hinged door in the front side of the tub, shown slightly open, so a person can walk in instead of climbing over the edge; 2) a built in seat moulded into the inside at one end; 3) a wooden tray laid across the top with a round cup holder and a slot holding a tablet; 4) four short legs that end in wheels, each with a small red brake lever; 5) a small digital panel on the rim showing the water temperature "38" with two buttons; 6) a handheld shower head on a long hose clipped to a tall chrome grab bar fixed to one end. A large price tag hangs from the grab bar reading "SALE $1,450".'
        }
      ]
    }
  });
})();
