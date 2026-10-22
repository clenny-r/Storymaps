/* Rowe CELPIP Mock Exam: Test B content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer.
   Difficulty target: slightly harder than the real test (about CLB 8 to 11). */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/B/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'B',
    title: 'Mock Test B',
    note: 'Original practice content in the CELPIP-General format. Written slightly harder than the real test.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { KOFI: { name: 'Kofi', g: 'm', skin: '#7a4b31', hair: '#120c08', shirt: '#2e86c1', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#f0d0b0', hair: '#1d1410', shirt: '#d35400', style: 'bun' } },
        segments: [{
          lines: [
            ['KOFI', 'Hey Mei, are we still on for the movie tonight? It\'s playing at seven fifteen and again at nine forty.'],
            ['MEI', 'Let\'s do the early one. I start work at six tomorrow morning, so I can\'t be out too late.'],
            ['KOFI', 'Sure. Then let\'s meet in the lobby at seven, so we have time to grab popcorn.'],
            ['MEI', 'Perfect. See you then.']
          ],
          questions: [
            { id: 'LP.1', q: 'What time will Kofi and Mei meet?', o: ['7:00', '7:15', '9:40', '6:00'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { ANJALI: { name: 'Anjali', g: 'f', skin: '#a9714b', hair: '#120c08', shirt: '#7d3c98', style: 'long' }, MARCUS: { name: 'Marcus', g: 'm', skin: '#f0c9a6', hair: '#6b4423', shirt: '#4a6d8c', style: 'short' } },
          segments: [
            {
              lines: [
                ['ANJALI', 'Marcus, wake up. You need to come downstairs. There\'s water all over the basement floor.'],
                ['MARCUS', 'What? How much water?'],
                ['ANJALI', 'A lot. It\'s at least five centimetres deep by the laundry room. I assumed it was the rain at first, since it poured all night, but I checked the window wells and they\'re bone dry.'],
                ['MARCUS', 'Okay, hang on. Oh, I see it. It\'s coming from under the laundry sink. The pipe has split right along the side.'],
                ['ANJALI', 'Can you stop it?'],
                ['MARCUS', 'I\'m shutting off the main valve now. There. That should stop it, but it also means we\'ve got no water anywhere in the house until it\'s fixed. No showers, no dishes, nothing.'],
                ['ANJALI', 'Well, at least the sump pump is still running. But look at the storage area. The boxes with my grandmother\'s photo albums were sitting right on the floor.'],
                ['MARCUS', 'Oh no. Those are the boxes we kept saying we\'d put up on the shelves.'],
                ['ANJALI', 'I know, I know. The couch and the guest bed can be replaced. Those pictures can\'t.']
              ],
              questions: [
                { id: 'L1.1', q: 'What told Anjali that the rain was not the cause?', o: ['The window wells had no water in them.', 'The sump pump was still running.', 'The water was coming from the laundry sink.', 'The rain had stopped before midnight.'] },
                { id: 'L1.2', q: 'What drawback of his action does Marcus point out?', o: ['Nobody in the house can use water for now.', 'The sump pump will no longer have power.', 'The pipe will need to be fully replaced.', 'The water will rise further in the laundry room.'] },
                { id: 'L1.3', q: 'What can be inferred about the photo albums?', o: ['Moving them earlier would have kept them safe.', 'They had been placed on shelves last month.', 'They belonged to Marcus\'s late grandmother.', 'Anjali values them less than the furniture.'] }
              ]
            },
            {
              lines: [
                ['MARCUS', 'Okay. First things first. Do I call the insurance company or a plumber?'],
                ['ANJALI', 'Both, but let\'s not touch anything yet. When my sister had a leak, her insurer wanted photos and video of everything before she moved a single item. Otherwise it was her word against theirs.'],
                ['MARCUS', 'Makes sense. I\'ll go around with my phone. And I just pulled up the policy. Sudden pipe bursts are covered, but there\'s a thousand-dollar deductible.'],
                ['ANJALI', 'A thousand? I thought it was five hundred.'],
                ['MARCUS', 'It was. We bumped it up last spring to bring our monthly payments down, remember?'],
                ['ANJALI', 'Right, right. Okay, what about a plumber? Can Dave come?'],
                ['MARCUS', 'I texted him. He can\'t get here until tomorrow afternoon. There\'s an emergency service that could be here by ten this morning, but they charge a hundred and eighty dollars just to walk through the door, plus their hourly rate.'],
                ['ANJALI', 'That hurts. But a day and a half with no water? We can\'t cook, we can\'t wash anything. I don\'t think we have a choice.'],
                ['MARCUS', 'Agreed. I\'ll book them, and then I\'ll phone the insurance company while we wait.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Anjali mention her sister?', o: ['To support documenting the damage first', 'To suggest asking her sister\'s plumber', 'To show that leaks are common in old homes', 'To warn that her sister\'s claim was refused'] },
                { id: 'L1.5', q: 'What do we learn about the deductible?', o: ['It was raised to reduce their premiums.', 'It is lower than Anjali believed.', 'It does not apply to burst pipes.', 'It was recently lowered to five hundred dollars.'] },
                { id: 'L1.6', q: 'Why do they agree to pay for the emergency plumber?', o: ['Waiting would leave them without water too long.', 'Their regular plumber charges a higher hourly rate.', 'The insurer will only pay an emergency service.', 'The damage will get worse by tomorrow afternoon.'] }
              ]
            },
            {
              lines: [
                ['ANJALI', 'Okay, the photos of the damage are done. Now, the albums. Should we just try the hair dryer on them?'],
                ['MARCUS', 'Actually, I texted my cousin Lena. She works in the archives at the university, and she said absolutely no heat. It makes the prints curl and stick together.'],
                ['ANJALI', 'So what are we supposed to do?'],
                ['MARCUS', 'She said to put the wettest ones in freezer bags and freeze them. That stops the damage where it is, and then they can be thawed and air-dried slowly, a few at a time. She even offered to come help.'],
                ['ANJALI', 'Strange, but okay. Meanwhile, the whole basement needs to dry out, or we\'ll have mould by next week. The hardware store rents dehumidifiers for forty-five dollars a day.'],
                ['MARCUS', 'How long would we need one?'],
                ['ANJALI', 'The guy on the phone first said two days, but once I mentioned the carpet, he said three for a basement our size.'],
                ['MARCUS', 'Fine. Just hang on to the receipt. The insurance might cover that too.']
              ],
              questions: [
                { id: 'L1.7', q: 'What is Lena\'s advice about the wettest photos?', o: ['Stop the damage now and dry them gradually later.', 'Dry them right away with gentle heat.', 'Bring them to the university to be restored.', 'Separate them before putting them in bags.'] },
                { id: 'L1.8', q: 'How much will the dehumidifier cost in total?', o: ['$135', '$90', '$45', '$180'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { TELLER: { name: 'Bank teller', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#1f618d', style: 'short' }, FARAH: { name: 'Farah', g: 'f', skin: '#c98c64', hair: '#3b2a20', shirt: '#16a085', style: 'curly' } },
          segments: [{
            lines: [
              ['TELLER', 'Good morning. What can I do for you today?'],
              ['FARAH', 'Hi. I think I lost my debit card yesterday. I\'ve gone through my whole apartment, and I called the gym, because that\'s the last place I remember using it, but nobody\'s turned it in.'],
              ['TELLER', 'Sorry to hear that. Have you done anything to block it yet?'],
              ['FARAH', 'I locked it in the mobile app last night, as soon as I noticed it was gone. Then I lay awake wondering if that was enough.'],
              ['TELLER', 'Honestly, I wish everyone thought that fast. That\'s what we tell everyone to do first. Let me take a look at your recent activity. Okay, the last purchase made with the card was thirty-two dollars at a grocery store on Tuesday. Was that you?'],
              ['FARAH', 'Yes, that was me. But the app shows something from this morning, too. Eleven ninety-nine. That\'s after I locked it.'],
              ['TELLER', 'That\'s a monthly payment to a music service. Automatic payments like that can still go through on a locked card. Does it sound familiar?'],
              ['FARAH', 'Oh. Yes, that\'s mine. I forgot it even came out of this account.'],
              ['TELLER', 'Then nothing unusual has gone through. I\'ll cancel the old card for good and print you a new one right here. It only takes a few minutes.'],
              ['FARAH', 'Oh, great. I thought I\'d have to wait a week for one in the mail. Is there a charge?'],
              ['TELLER', 'Your package includes one free replacement a year, and I see you already had one in February. Normally that would mean the ten-dollar fee, but since you reported this so quickly, I\'ll waive it.'],
              ['FARAH', 'Thanks, I appreciate that. February was when a parking machine swallowed it.'],
              ['TELLER', 'You\'ll need to choose a new PIN on this keypad. And just so you know, tap won\'t work until you make one purchase with the chip and your PIN.'],
              ['FARAH', 'Good to know. Will the card number be the same?'],
              ['TELLER', 'No, it\'ll be a new number. So any monthly payments set up with the old card, like your phone bill or that music service, you\'ll need to update.'],
              ['FARAH', 'Ugh, I have a few of those. I guess I know what I\'m doing tonight.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why did Farah call the gym?', o: ['She thought she might have left her card there.', 'She wanted to update the card linked to her membership.', 'The gym had charged her card that morning.', 'Staff had found a wallet in the locker room.'] },
              { id: 'L2.2', q: 'How does the teller react to what Farah did the night before?', o: ['The teller approves of it.', 'The teller says it was not enough.', 'The teller is surprised by it.', 'The teller asks her to undo it.'] },
              { id: 'L2.3', q: 'Why does the teller ask about the grocery purchase?', o: ['To confirm no one else has used the card', 'To check how much money is left in the account', 'To find out where she lost the card', 'To explain the charge from this morning'] },
              { id: 'L2.4', q: 'What does the teller decide about the replacement fee?', o: ['Farah will not be charged this time.', 'Farah must pay ten dollars for a second card this year.', 'There is no fee because it is her first replacement.', 'Farah will pay the fee when the card arrives by mail.'] },
              { id: 'L2.5', q: 'What will Farah most likely do this evening?', o: ['Give her new card details to several companies', 'Cancel the music service she forgot about', 'Choose a new PIN using the mobile app', 'Search her apartment once more for the card'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#f0c9a6', hair: '#b5651d', shirt: '#5d6d7e', style: 'bun' }, GABRIEL: { name: 'Gabriel Okoye', g: 'm', skin: '#5c3a24', hair: '#120c08', shirt: '#c0392b', style: 'bald' } },
          segments: [{
            lines: [
              ['HOST', 'My guest this morning is Gabriel Okoye, who spends his winter weekends as a volunteer ski patroller at Pine Ridge. Gabriel, thanks for coming in.'],
              ['GABRIEL', 'Thanks for having me.'],
              ['HOST', 'So how did you end up on ski patrol?'],
              ['GABRIEL', 'Honestly, it started with an accident. About ten years ago, I fell and broke my wrist on a hill out west. The patroller who looked after me was so calm, and so kind, that I remember thinking, I want to be able to do that for someone.'],
              ['HOST', 'And what does it take? I\'m guessing you have to be a pretty good skier.'],
              ['GABRIEL', 'You do need to be a strong intermediate skier or snowboarder, but believe it or not, that\'s the easy part. The real hurdle is first aid.'],
              ['HOST', 'How so?'],
              ['GABRIEL', 'New patrollers take an advanced course that runs about eighty hours, mostly on weeknights. Then there\'s on-snow training, where you learn to bring an injured person down the hill in a toboggan.'],
              ['HOST', 'And does the course cost anything?'],
              ['GABRIEL', 'About four hundred dollars. That scares some people off, but the patrol pays back half once you finish your first full season.'],
              ['HOST', 'That\'s a big commitment for a volunteer.'],
              ['GABRIEL', 'It is. We used to ask for ten days a season, but this year it went up to twelve. In return, volunteers get a season pass worth around six hundred dollars, so most people feel it\'s a fair trade.'],
              ['HOST', 'What does a typical day look like?'],
              ['GABRIEL', 'We\'re there at seven thirty, before the lifts open, checking every trail for hazards, things like ice patches or fallen branches. During the day we respond to calls.'],
              ['HOST', 'And when the lifts close?'],
              ['GABRIEL', 'Then we do what\'s called a sweep: we ski every run one last time to make sure nobody\'s still out there.'],
              ['HOST', 'What kinds of injuries do you see most?'],
              ['GABRIEL', 'For skiers, it\'s mostly knees. Snowboarders tend to hurt their wrists, because they put their hands out when they fall. And a lot of it doesn\'t need to happen. A lesson or two, wrist guards for new boarders, staying on runs that match your level. Simple things.'],
              ['HOST', 'And if listeners want to get involved?'],
              ['GABRIEL', 'We\'re holding an information session at the public library on November twelfth. Come by, ask questions, and if you start the course right away, you could be on the hill by January.']
            ],
            questions: [
              { id: 'L3.1', q: 'What made Gabriel want to become a patroller?', o: ['The way a patroller treated him after a fall', 'The chance to earn a free season pass', 'A friend who already worked on the patrol', 'A first aid course he took on a hill out west'] },
              { id: 'L3.2', q: 'What does Gabriel suggest about the skiing requirement?', o: ['It is less demanding than the first aid training.', 'It is the hardest part for most new volunteers.', 'Only expert skiers can meet it.', 'It is tested during the toboggan training.'] },
              { id: 'L3.3', q: 'How does Gabriel describe the season pass arrangement?', o: ['Most volunteers see it as a reasonable exchange.', 'It goes only to volunteers who give ten days.', 'It pays back half the cost of the first aid course.', 'It is the main reason most people volunteer.'] },
              { id: 'L3.4', q: 'What happens at the end of each day?', o: ['Patrollers make a final pass to be sure the hill is empty.', 'Patrollers clear ice patches and fallen branches.', 'Patrollers check the lifts before they close.', 'Patrollers write reports on all injuries.'] },
              { id: 'L3.5', q: 'What does Gabriel imply about many injuries?', o: ['Some could be prevented with basic precautions.', 'Most happen on the easier trails.', 'Snowboarders are hurt more often than skiers.', 'Knee injuries are the most serious kind.'] },
              { id: 'L3.6', q: 'Why does Gabriel mention January?', o: ['New recruits could start patrolling by then.', 'The information session takes place then.', 'The ski season usually begins then.', 'Training courses are held in that month.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#2e4053', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'The province has confirmed that a new ferry route between Tidewater Point and Gull Island will begin service on the first of next month.'],
              ['NEWS', 'Until now, island residents without their own boat have relied on a private water taxi that runs only from May to September. The new ferry will operate year-round.'],
              ['NEWS', 'The vessel, the Harbour Light, can carry sixty vehicles and three hundred passengers. It will make four round trips a day, and the crossing will take about fifty minutes.'],
              ['NEWS', 'Fares are slightly lower than first proposed. In the spring, officials suggested twenty dollars for adult passengers, but that figure was cut after public meetings on both sides of the crossing.'],
              ['NEWS', 'Adult passengers will now pay eighteen dollars, and a car and driver forty-five. Island residents who register for a resident card will pay half the regular fare.'],
              ['NEWS', 'Reservations open online next Monday, and officials are urging drivers to book ahead for weekend sailings, which are expected to fill quickly in the summer months.'],
              ['NEWS', 'Not everyone in Tidewater Point is celebrating. Some residents near the terminal worry about traffic and parking on their narrow streets. In response, the province says a new one-hundred-and-twenty-space parking lot beside the terminal will open before the first sailing.'],
              ['NEWS', 'On Gull Island, however, business owners say year-round service could finally make it possible to keep their doors open through the winter, instead of closing every fall.'],
              ['NEWS', 'The ferry operator also expects the route to create about forty jobs, and says most of them will go to people who live on the island.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the main topic of the report?', o: ['A ferry route opening next month', 'A water taxi ending its service', 'A bridge being built to an island', 'An increase in ferry fares'] },
              { id: 'L4.2', q: 'What is the main advantage of the ferry over the water taxi?', o: ['It will offer service in winter as well.', 'Its fares will be lower for everyone.', 'Its crossing will take less time.', 'It will carry island residents for free.'] },
              { id: 'L4.3', q: 'How much will an adult island resident with a resident card pay to cross on foot?', o: ['$9', '$10', '$18', '$22.50'] },
              { id: 'L4.4', q: 'How has the province responded to concerns in Tidewater Point?', o: ['By providing off-street spaces for ferry users', 'By reducing the number of weekend sailings', 'By widening the narrow streets near the dock', 'By delaying the first sailing by a month'] },
              { id: 'L4.5', q: 'What do Gull Island business owners expect?', o: ['To earn enough to operate all year', 'To attract more visitors in the summer', 'To pay half the fare with a resident card', 'To hire forty new workers from the island'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Summer picnic: 45 staff', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { SIOBHAN: { name: 'Siobhan', g: 'f', skin: '#f2cfb0', hair: '#a0522d', shirt: '#34495e', style: 'long' }, MATEO: { name: 'Mateo', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#d35400', style: 'curly' }, WEI: { name: 'Wei', g: 'm', skin: '#e8c39e', hair: '#120c08', shirt: '#27ae60', style: 'short' } },
          segments: [{
            lines: [
              ['SIOBHAN', 'Okay, we\'ve got about fifteen minutes. I need to book a spot for the summer picnic this week. We\'ve got forty-five staff signed up, plus families.'],
              ['MATEO', 'I\'ll be honest, I think Riverside Park is the obvious choice. It\'s a ten-minute walk from the office, it\'s free, and nobody has to drive.'],
              ['WEI', 'It\'s convenient, sure, but last year half the people left after an hour. There\'s hardly any shade, and the playground is right next to the road. With kids running around, a lot of parents were on edge the whole time.'],
              ['MATEO', 'Fair enough. What were the other options?'],
              ['SIOBHAN', 'Two more. Maple Hollow Farm, about forty minutes out. They handle everything: a barbecue lunch, wagon rides, strawberry picking. But it\'s twenty-five dollars a head.'],
              ['WEI', 'And with families, we could easily have a hundred and fifty people. That\'s nearly four thousand dollars, and we\'ve got two thousand.'],
              ['SIOBHAN', 'Right. The third option is Clearwater Provincial Park. It\'s a thirty-minute drive. We\'d rent the big covered shelter for a hundred and fifty dollars, and there\'s a beach with lifeguards on weekends.'],
              ['MATEO', 'Thirty minutes is fine if you have a car, but at least ten of our people take the bus to work. How would they get there?'],
              ['WEI', 'We could charter a school bus. When my son\'s soccer team did that, it was about four hundred for the day.'],
              ['SIOBHAN', 'So the shelter and the bus together leave us plenty for food. And the picnic\'s on a Saturday, so the lifeguards will be there.'],
              ['MATEO', 'Okay, I\'m sold. But we need a rain plan. That shelter only holds about sixty people.'],
              ['WEI', 'Good point. If the forecast looks bad, we could push it back a week. I\'ll find out whether the park lets us change the date without losing the fee.'],
              ['SIOBHAN', 'Perfect. I\'ll book the shelter today, Wei will check the rain policy, and Mateo, could you look into the bus?'],
              ['MATEO', 'Sure. I\'ll get a couple of quotes so we\'re not just going on Wei\'s number.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the discussion?', o: ['To pick a location for an event', 'To set the budget for an event', 'To plan the menu for an event', 'To decide who is invited to an event'] },
              { id: 'L5.2', q: 'Why does Wei object to Riverside Park?', o: ['It was uncomfortable and worrying for parents.', 'It is too far for people to walk from work.', 'It charges a fee that is over the budget.', 'It was too crowded with other groups last year.'] },
              { id: 'L5.3', q: 'What can be concluded about the farm option?', o: ['It would cost more than the budget allows.', 'It is closer to the office than the provincial park.', 'It does not offer any food.', 'It is only open on weekdays.'] },
              { id: 'L5.4', q: 'Why does Mateo raise a concern about the provincial park?', o: ['Some staff do not drive to work.', 'The drive would take over an hour.', 'The beach has no lifeguards.', 'The shelter costs too much.'] },
              { id: 'L5.5', q: 'About how much will the shelter and the bus cost together?', o: ['$550', '$400', '$150', '$2,000'] },
              { id: 'L5.6', q: 'Why does Siobhan mention that the picnic is on a Saturday?', o: ['Swimming will be supervised that day.', 'More employees can come on weekends.', 'The school bus is cheaper on Saturdays.', 'The shelter fee is lower on weekends.'] },
              { id: 'L5.7', q: 'What is Mateo\'s concern about rain?', o: ['The shelter is too small for everyone.', 'The bus company might cancel the trip.', 'The beach would be closed.', 'The forecast is often wrong.'] },
              { id: 'L5.8', q: 'Why does Mateo want more than one quote?', o: ['To check the price Wei mentioned', 'To find a bus with more seats', 'To compare it with the farm', 'To prove the park is too far'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Winter tires: required?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#943126', style: 'curly' } },
          segments: [{
            lines: [
              ['NARR', 'As temperatures drop and the first snow reaches much of the country, a familiar debate is returning: should winter tires be required by law in every province and territory?'],
              ['NARR', 'Right now, the rules vary widely. Quebec requires winter tires on passenger vehicles for part of the year, while most other provinces leave the decision up to drivers.'],
              ['NARR', 'Among those calling for a national rule is Doctor Miriam Castellano, a road safety researcher. She explains that all-season tires begin to stiffen at around seven degrees Celsius, while winter tires stay flexible and grip far better on ice and snow.'],
              ['NARR', 'Castellano also points to Quebec\'s experience. Studies carried out after its rule took effect found fewer winter crashes causing serious injury, and she says she has not seen a single study suggesting the rule made roads less safe.'],
              ['NARR', 'Because so many Canadians drive between provinces, she argues, one national standard would be simpler and fairer. A crash caused by poor tires, she points out, affects everyone on the road, not just the driver who decided to save money.'],
              ['NARR', 'Not everyone agrees. Owen Fitzgerald, who runs a driving school in Victoria, says a one-size-fits-all rule makes little sense in a country this large. In parts of coastal British Columbia, he notes, snow may fall only a handful of days a year.'],
              ['NARR', 'He is also cautious about the Quebec figures. The same years, he says, brought anti-lock brakes and electronic stability control to most new cars, so it is hard to know how much of the improvement came from the tires alone.'],
              ['NARR', 'Then there is the cost. A set of winter tires on separate rims can run from eight hundred to twelve hundred dollars, plus storage and a change twice a year.'],
              ['NARR', 'For students and low-income families, Fitzgerald says, that money might do more good if it went toward brakes and regular maintenance. A car with worn brakes, he adds, is dangerous in every season, not only in January.'],
              ['NARR', 'Fitzgerald is careful to say he is not against winter tires. Every car in his own school switches to them in November. What he objects to is a law that treats a Victoria commuter like a driver in northern Manitoba.'],
              ['NARR', 'Castellano accepts that the cost is a real burden for some households. Her answer is a provincial rebate for low-income drivers, and she notes that a set of winter tires usually lasts four or five winters, which spreads out the expense.'],
              ['NARR', 'Fitzgerald believes that driver education, such as teaching people to slow down and leave more space, would save more lives than a new law. Castellano\'s response is that good habits and good tires are not an either-or choice.'],
              ['NARR', 'Even the most careful driver, she says, cannot stop safely on ice with tires that have gone hard in the cold.'],
              ['NARR', 'For now, the provinces will continue to set their own rules, although transportation ministers are expected to discuss the issue at their meeting next spring.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether winter tires should be required everywhere', 'How Quebec enforces its winter tire rule', 'Whether driving schools should teach winter skills', 'Who should pay for winter tire rebates'] },
              { id: 'L6.2', q: 'Why does Castellano mention Quebec?', o: ['To show that a rule there has made winter roads safer', 'To show that many drivers cross into Quebec', 'To show that its rule applies all year round', 'To show that Quebec drivers pay less for tires'] },
              { id: 'L6.3', q: 'Why does Castellano favour one national standard?', o: ['Travel between provinces is common.', 'Rebates would be easier to pay out nationally.', 'Winter tires would be cheaper if everyone bought them.', 'Insurance companies have asked for it.'] },
              { id: 'L6.4', q: 'How does Fitzgerald respond to the Quebec findings?', o: ['Other safety improvements may explain them.', 'Quebec gets far more snow than the coast.', 'The studies were paid for by tire makers.', 'They prove the rule costs drivers too much.'] },
              { id: 'L6.5', q: 'What is Fitzgerald\'s point about low-income families?', o: ['Their money could do more good on other car safety needs.', 'They should receive a provincial rebate for winter tires.', 'They should buy all-season tires instead.', 'They rarely need to drive in snow.'] },
              { id: 'L6.6', q: 'How does Castellano respond to Fitzgerald\'s view on education?', o: ['She rejects the idea that it must be one or the other.', 'She agrees that education alone is enough.', 'She says driving schools should teach tire care.', 'She says laws work better than good habits.'] }
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
          passage: '<h3>Message</h3><p>Dear Ethan,</p><p>By the time this letter reaches you, you will have finished your first week in Saskatoon. I hope your residence room is not too small and that your roommate does not snore! Your mother tells me the drive across the Prairies took three full days and that you slept through most of it in the back seat while she and your father took turns at the wheel. Some things never change.</p><p>I have been thinking about my own first year away from home. I was eighteen when I left our farm to study nursing in Halifax, and I cried myself to sleep every night for the first two weeks. What saved me was joining the choir. I could not sing very well, and the director politely placed me in the very back row, but I met my best friend there, and she is still my best friend sixty years later. So my one piece of advice is this: find one group outside your classes and stay with it, even in the weeks when you are busy and it feels like a chore.</p><p>I have mailed you a small package. Inside you will find the blue quilt from the cedar chest, since your mother says the heating in your building is unreliable, and a tin of the oatmeal cookies you like. Please share them. It is the quickest way I know to make friends. There is also a cheque for two hundred dollars. Your mother says textbooks are terribly expensive these days, so use it for those and not for pizza.</p><p>As you know, I am having my knee operation on October 8, so I will not be able to travel for Thanksgiving this year. The surgeon says it will be about six weeks before I can manage stairs again. Instead, my neighbour Mrs. Dube has been teaching me to use video calls on my tablet. I am improving, although last week I spent ten minutes talking to the ceiling. Could we try a call on Sunday evenings? Any time after seven o\'clock my time is best, once my television program is over. Remember that I am two hours ahead of you.</p><p>I am so proud of you, my dear. Study hard, but remember to sleep.</p><p>With all my love,<br>Grandma Lucille</p>',
          questions: [
            { id: 'R1.1', q: 'Lucille\'s remark "Some things never change" suggests that Ethan', o: ['has always tended to doze off on long car journeys.', 'still complains about long drives across the Prairies.', 'has never enjoyed travelling with his parents.', 'has always disliked sitting in the back seat.'] },
            { id: 'R1.2', q: 'Lucille most likely mentions where the choir director placed her to show that', o: ['she was not one of the stronger singers in the group.', 'the director was unkind to new members.', 'she preferred to stand at the back.', 'the choir was very large that year.'] },
            { id: 'R1.3', q: 'The main advice Lucille gives Ethan is to', o: ['keep attending one non-academic group through busy periods.', 'join a choir in his first year, just as she did.', 'make friends by sharing food with his classmates.', 'put his classes ahead of clubs when he is busy.'] },
            { id: 'R1.4', q: 'Lucille sent the quilt because', o: ['Ethan\'s building may not stay warm enough.', 'Ethan\'s roommate needed an extra blanket.', 'the cedar chest had no more room in it.', 'Ethan\'s mother forgot to pack his bedding.'] },
            { id: 'R1.5', q: 'Lucille implies that the cheque', o: ['is intended for course materials, not treats.', 'should be shared with the students on his floor.', 'will help pay for a trip home at Thanksgiving.', 'is partly a gift from Ethan\'s mother as well.'] },
            { id: 'R1.6', q: 'Lucille will probably not visit Ethan this autumn because she', o: ['will need several weeks to recover after her operation.', 'is still learning how to use her tablet.', 'has promised to help her neighbour.', 'does not enjoy long journeys by car.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Grandma,</p><p>Thank you so much for the package! It arrived yesterday, and the quilt is already on my bed. Mom was right to worry, because [[R1.7]]. The cookies lasted about an hour. I did what you suggested and offered them to everyone on my floor, and now I know almost all of their names.</p><p>I followed your other advice too. You will laugh, but I have signed up for [[R1.8]], even though I am probably about as musical as you were at eighteen. We rehearse every Thursday night, and I promise to keep going [[R1.9]].</p><p>Don\'t worry, your cheque went exactly where you wanted. I bought [[R1.10]] at the campus bookstore, and I still have a little left over. I resisted the pizza, I promise.</p><p>Good luck with your operation. I hope the six weeks pass quickly. Sunday evenings are perfect for me. Since you are ahead of me, I will call [[R1.11]], so you won\'t miss the end of your program. And please try to point the tablet at your face this time!</p><p>Love,<br>Ethan</p>',
          blanks: [
            { id: 'R1.7', o: ['the radiator in my room barely works', 'the residence heating is far too strong', 'my roommate snores loudly every night', 'my mother forgot to pack my blankets'] },
            { id: 'R1.8', o: ['the university singing group', 'the campus hiking club', 'a first-year nursing course', 'a weekly cooking class'] },
            { id: 'R1.9', o: ['even when I would rather skip it', 'until I find a better group to join', 'only when my classes are not busy', 'as long as my roommate comes too'] },
            { id: 'R1.10', o: ['two books for my chemistry course', 'pizza for everyone on my floor', 'a new tablet for our video calls', 'a bus ticket home for Thanksgiving'] },
            { id: 'R1.11', o: ['shortly after five o\'clock my time', 'shortly after seven o\'clock my time', 'just before five o\'clock my time', 'just before seven o\'clock your time'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following price list. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Northgate Fitness: Membership Plans</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Plan</th><th>Monthly fee</th><th>Joining fee</th><th>Gym hours</th><th>Group classes</th><th>Pool access</th></tr></thead><tbody>' +
            '<tr><td>Basic</td><td>$29</td><td>$49</td><td>6:00 a.m. to 10:00 p.m.</td><td>Not included</td><td>No</td></tr>' +
            '<tr><td>Flex</td><td>$45</td><td>$49</td><td>24 hours</td><td>4 per month</td><td>No</td></tr>' +
            '<tr><td>Premium</td><td>$65</td><td>None</td><td>24 hours</td><td>Unlimited</td><td>Yes</td></tr>' +
            '<tr><td>Student</td><td>$25</td><td>$25</td><td>6:00 a.m. to 10:00 p.m.</td><td>2 per month</td><td>Weekends only</td></tr>' +
            '<tr><td>Family</td><td>$110</td><td>$75</td><td>24 hours</td><td>Unlimited</td><td>Yes</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Pay for a full year in advance and pay for only 10 months. Joining fees still apply.</li><li>Group classes beyond those included in your plan cost $12 each.</li><li>Student plan: a valid full-time student card is required, and members must be 25 or younger.</li><li>Family plan: two adults and up to three children under 18 living at the same address. Members under 14 must be accompanied by an adult at all times.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dana,</p><p>I picked up the price list from Northgate Fitness. Since neither of us is a student and I really want to start swimming again, the only individual plan that works for me is [[R2.1]]. For you, since you only want the weight room and two yoga classes a month, [[R2.2]] would cost the least.</p><p>Here is the funny part. If we each bought those two plans, we would pay [[R2.3]] a month, which is exactly the price of the Family plan. The Family plan would also cover Theo. Because he is sixteen, he could [[R2.4]], which he would love.</p><p>If we choose the Family plan and pay for the whole year up front, the total for the first twelve months, including the joining fee, would be [[R2.5]]. I think that is a good deal. Let\'s talk about it tonight.</p><p>Jordan</p>',
          blanks: [
            { id: 'R2.1', o: ['the Premium plan', 'the Student plan', 'the Flex plan', 'the Family plan'] },
            { id: 'R2.2', o: ['the Flex plan', 'the Basic plan', 'the Student plan', 'the Premium plan'] },
            { id: 'R2.3', o: ['$110', '$94', '$74', '$130'] },
            { id: 'R2.4', o: ['work out without one of us beside him', 'join at half the usual monthly price', 'swim only on Saturdays and Sundays', 'bring along a friend at no extra cost'] },
            { id: 'R2.5', o: ['$1,175', '$1,100', '$1,395', '$1,320'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Why would the Student plan not suit a 21-year-old full-time student who wants to swim on weekday evenings?', o: ['Its swimming is limited to Saturdays and Sundays.', 'Its members have to be at least 25 years old.', 'It offers just two group classes each month.', 'It does not accept a full-time student card.'] },
            { id: 'R2.7', q: 'A Flex member who takes six group classes in one month will pay extra because', o: ['the plan covers only some of the classes each month.', 'group classes are not part of the Flex plan.', 'the joining fee is charged again that month.', 'Flex members pay $12 for every class they attend.'] },
            { id: 'R2.8', q: 'A Student plan member who wants to train at 11:00 p.m. would need to', o: ['move to a different membership.', 'pay an extra $12 late fee.', 'show a valid student card.', 'come on a weekend instead.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>From Tree to Table: The Story of Maple Syrup</h3><p><b>A.</b> Long before European settlers arrived, Indigenous peoples in what is now eastern Canada and the northeastern United States collected the sweet sap of maple trees each spring. They cut into the bark, gathered the sap in containers made of birch bark and concentrated it into syrup and sugar, using methods such as dropping heated stones into the liquid. Many early settlers learned the process from Indigenous communities, and by the 1800s maple sugar was a common sweetener on rural farms, where imported cane sugar was expensive and often hard to find. Some communities still hold spring gatherings to mark the first run of sap.</p><p><b>B.</b> Sap only runs under particular weather conditions. Producers need a pattern of nights below freezing followed by days above zero. The repeated freezing and thawing builds pressure inside the tree, which pushes sap out through a small hole drilled into the trunk. In most years, this window lasts only four to six weeks, usually from early March to mid-April. Trees are generally not tapped until they are about 25 centimetres across, which can take forty years. A very large maple may carry two taps, but producers limit the number so the tree is not weakened, and a healthy tree can be tapped every spring for generations without lasting harm.</p><p><b>C.</b> Fresh sap looks almost like water and contains only about two percent sugar. To turn it into syrup, producers boil it in a long, shallow pan called an evaporator, often for many hours at a time. It takes roughly forty litres of sap to make a single litre of syrup. Producers watch the temperature closely: the syrup is ready when it boils at about four degrees above the boiling point of water. Taken off the heat too early, it stays thin and may spoil; boiled too long, it starts to form crystals. The finished product is graded by colour and taste, from golden syrup with a delicate flavour to very dark syrup with a strong one. Sap collected toward the end of the season usually produces the darker grades. Dark syrup is a favourite with bakers, while the golden grade is more often poured over pancakes.</p><p><b>D.</b> Today, few producers carry buckets from tree to tree. Most sugar bushes now rely on networks of plastic tubing, first tested in the 1950s, which carry sap directly to the sugar shack, sometimes with vacuum pumps to increase the flow. Quebec produces the large majority of the world\'s maple syrup, and producers there keep a strategic reserve of syrup to protect buyers against poor harvests. Researchers are also watching the effects of a warming climate, which in some regions is causing the season to start earlier and become harder to predict.</p>',
          questions: [
            { id: 'R3.1', q: 'Sap flow depends on temperatures swinging above and below freezing.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'A tree must reach a certain size before sap is taken from it.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Sap is mostly water when it leaves the tree.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'Maple sugar was once popular partly because other sweeteners were costly.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Many producers no longer gather sap by hand.', fixed: true, a: 'D' },
            { id: 'R3.6', q: 'Syrup made late in the season tends to have a stronger colour.', fixed: true, a: 'C' },
            { id: 'R3.7', q: 'The darkest grades of syrup sell for the highest prices.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Syrup removed from the heat too soon may go bad.', fixed: true, a: 'C' },
            { id: 'R3.9', q: 'Newcomers to North America were taught how to make maple sugar.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Phones in the Classroom: Ban or Teach?</h3><p>When Westbrook Secondary School told students last fall that phones must stay in their lockers during class, many expected protests. A year later, principal Danielle Fortin calls the change "the best decision we have made in a decade." Teachers report that students take part more in discussions, and the number of online bullying incidents during school hours has fallen by almost half. "The phones were not just a distraction for the student holding one," Fortin says. "They pulled the attention of everyone sitting nearby." She adds that students may still use their phones at lunch and between classes, so the rule is far less strict than its critics claim.</p><p>Child psychologist Dr. Arjun Mehta supports similar policies. He notes that many teenagers say they find it almost impossible to ignore a notification, even when they want to. Taking the phone out of the room, he argues, removes the temptation altogether, which works far better than asking young people to rely on willpower alone. He is more cautious about the figures, however. "One year of data from one school is encouraging, but it is not proof," he says. "Bullying numbers rise and fall for many reasons."</p><p>Not everyone is convinced. Kwame Asante, who teaches computer science at another high school, believes a ban avoids the real problem. "These students will have phones in their pockets for the rest of their lives, at university and at work," he says. "If we simply take them away, we never teach them how to manage them." In his classroom, phones stay face down on the desk unless he asks students to use them, for example to record an experiment or check a source. Students who misuse the privilege lose it for a week, and he says few repeat the mistake.</p><p>Some parents have raised safety concerns. Lisa Moreau, a mother of two teenagers, says she wants to be able to reach her children quickly in an emergency. Fortin responds that the school office can contact any student within minutes, and that during a real emergency, hundreds of students calling home at once could actually make it harder for emergency services to communicate. Moreau is not fully satisfied. "The office is fine for a forgotten lunch," she says, "but I would like to see the emergency plan in writing."</p><p>Asante admits that a ban may be the most practical option for schools with very large classes, where one teacher cannot watch every desk. Still, he hopes schools will eventually see phones as "a tool to be taught, not a toy to be confiscated."</p><p>Students themselves are divided. Grade eleven student Maya Lindgren admits that she concentrates better without her phone, but says the rule felt like a punishment for the whole school when only a few students were causing problems. "Some of us were using our phones responsibly," she says. She would like seniors with a clean record to earn back limited use in class.</p>',
          questions: [
            { id: 'R4.1', q: 'Fortin most likely mentions students "sitting nearby" in order to show that', o: ['the harm went beyond the person using the device.', 'students were copying answers from classmates.', 'classrooms had become too crowded for discussion.', 'most of the bullying took place during lessons.'] },
            { id: 'R4.2', q: 'Dr. Mehta\'s attitude toward the Westbrook results is best described as', o: ['hopeful, but careful not to overstate them.', 'doubtful, since he opposes such bans.', 'enthusiastic, as they prove the rule works.', 'critical of how the school gathered them.'] },
            { id: 'R4.3', q: 'Asante\'s main point about bans is that they', o: ['leave young people unprepared for lifelong device use.', 'punish responsible students for the mistakes of a few.', 'are too difficult to enforce in very large classes.', 'make it harder for parents to reach their children.'] },
            { id: 'R4.4', q: 'Moreau\'s reaction to Fortin suggests that she', o: ['wants the school\'s emergency arrangements set out formally.', 'now accepts that phones should stay in the lockers.', 'plans to phone the school office much more often.', 'thinks students need phones to replace forgotten lunches.'] },
            { id: 'R4.5', q: 'Maya Lindgren would probably support a rule that', o: ['lets trusted older students regain some phone use.', 'allows every student to use a phone at lunch.', 'applies the ban only to students in grade eleven.', 'takes phones away for a week after any misuse.'] }
          ],
          reply: '<h3>Reader comment</h3><p>As the parent of a grade ten student, I read this article with great interest. At first I sided with Ms. Moreau, because my daughter takes two buses to school and I want to [[R4.6]]. Still, I have to admit Principal Fortin has a point: if every student phoned home during a crisis, [[R4.7]].</p><p>What I liked most was Mr. Asante\'s classroom. Rather than locking phones away, he [[R4.8]], which seems much closer to what our children will face at work. I also appreciated that Dr. Mehta did not oversell the Westbrook numbers, since a drop in bullying [[R4.9]].</p><p>My own view is that both sides could meet in the middle. A full ban might be sensible in [[R4.10]], while smaller schools could try Mr. Asante\'s method, perhaps combined with Maya\'s idea of rewarding students who have earned some trust.</p>',
          blanks: [
            { id: 'R4.6', o: ['know I can get hold of her fast if something goes wrong', 'collect her phone myself at the end of each school day', 'drive her to school on the days when the weather is bad', 'check everything she posts online during school hours'] },
            { id: 'R4.7', o: ['emergency responders might struggle to get their own calls through', 'parents would reach the school too slowly', 'the office could not contact any students', 'students would all forget their own numbers'] },
            { id: 'R4.8', o: ['has students keep devices idle until a task calls for them', 'takes every phone away for a week at the start of term', 'lets students use phones freely once their work is done', 'permits phones only at lunch and between their classes'] },
            { id: 'R4.9', o: ['could have causes other than the new rule', 'shows that the lockers have solved the issue', 'happened mainly among the senior students', 'was caused mostly by constant notifications'] },
            { id: 'R4.10', o: ['crowded rooms where one teacher cannot see every desk', 'computer science classes that use phones for experiments', 'schools where parents want written emergency plans', 'senior grades where students have a clean record'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Last weekend you stayed two nights at a hotel in another city while attending a family wedding. When you unpacked at home, you realized that a watch your grandfather gave you was missing; you last remember taking it off in the hotel room. You also noticed that your credit card was charged for three nights, not two. When you phoned the front desk, the clerk told you that lost items are kept for only 14 days and that billing questions must be sent to the manager in writing.</p><p>Write an email to the hotel manager. In your email, do the following:</p><ul><li>Describe the watch and where in the room you think you left it.</li><li>Explain the billing mistake and how you know it is a mistake.</li><li>Say what you want the hotel to do about both problems, keeping in mind that you cannot travel back to the city within the next 14 days.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your company is planning its end-of-year holiday celebration and has asked employees which event they would prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'A Thursday evening dinner for employees and their partners at a downtown restaurant, with a three-course meal and a short awards presentation. It would end around 11:00 p.m., and staff with young children would need to arrange their own babysitters.' },
            { key: 'B', label: 'Option B', text: 'A Saturday family day at an indoor play centre 45 minutes outside the city, with lunch, games and activities for employees\' children. It would take up part of a weekend, and staff without children may feel the event is not really for them.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you like to visit.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'Your cousin has received two job offers and must answer both by Friday. One pays $8,000 a year more, but it is a 75-minute bus ride each way, and she does not own a car. The other pays less, but it is a 10-minute walk from home and has flexible hours, which matters because she must pick up her son from daycare by 5:30 p.m. Give your cousin advice on how to choose.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you helped a stranger. What happened, how did you feel afterward, and is there anything you would do differently if it happened again today?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/B/scene.jpg" alt="A busy outdoor farmers market on a sunny morning">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next?', image: '<img src="tests/img/B/scene.jpg" alt="A busy outdoor farmers market on a sunny morning">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family has decided to get a pet. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Adopt a cat', image: '<img src="tests/img/B/opt_A.jpg" alt="Photo: Adopt a cat">', facts: ['Adoption fee: $150', 'Food and litter: about $60 a month', 'Can stay alone during a workday', 'One family member has a mild cat allergy'] },
            { key: 'B', title: 'Adopt a dog', image: '<img src="tests/img/B/opt_B.jpg" alt="Photo: Adopt a dog">', facts: ['Adoption fee: $350', 'Food and care: about $120 a month', 'Needs two 30-minute walks a day', 'Dog walker on long workdays: $20 a day'] }
          ],
          third: { key: 'C', title: 'Aquarium fish', image: '<img src="tests/img/B/opt_C.jpg" alt="Photo: Aquarium fish">', facts: ['Tank and equipment: $250', 'Food and supplies: about $20 a month', 'Tank cleaning: 1 hour a week', 'Quiet and takes little space'] },
          persuade: 'Your family member suggests getting aquarium fish instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Your best friend is moving overseas for work and is holding a farewell dinner next Saturday evening. You have just learned that your sister has planned a surprise party for your parents\' 35th wedding anniversary on the same evening, and she is counting on you to give a speech.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot come to the farewell dinner.</p><p><b>Option B:</b> Talk to your sister. Explain why you cannot come to the anniversary party.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Your city council is considering making public transit free for everyone. Supporters say it would reduce traffic and help people with low incomes. Opponents say the cost, about $40 million a year, would mean higher property taxes or cuts to other services such as snow clearing. A local radio show has asked listeners to call in with their views. Should the city make public transit free? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a kitchen store and see this unusual appliance. It is the last one, it is a display model, and display models cannot be returned. Call your friend who loves kitchen gadgets but has a very small kitchen with little counter space. Describe the appliance and explain whether you think your friend should buy it.', image: '<img src="tests/img/B/object.jpg" alt="An unusual kitchen appliance in a store">' }
      ]
    }
  });
})();
