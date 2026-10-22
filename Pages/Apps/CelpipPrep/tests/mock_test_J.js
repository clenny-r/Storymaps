/* Rowe CELPIP Mock Exam: Test J content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/J/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'J',
    title: 'Mock Test J',
    note: 'Original practice content in the CELPIP-General format.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'office',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { MARISOL: { name: 'Marisol', g: 'f', skin: '#d6a07a', hair: '#2a1b12', shirt: '#8e44ad', style: 'long' }, DEV: { name: 'Dev', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#2471a3', style: 'short' } },
        segments: [{
          lines: [
            ['MARISOL', 'Dev, do you want to grab a coffee? I could really use a break.'],
            ['DEV', 'I\'d love to, but I\'ve got a call with a client at ten thirty. Could we go after that, around eleven?'],
            ['MARISOL', 'Sure. Actually, eleven is better anyway. The café downstairs is a lot less crowded by then.'],
            ['DEV', 'Perfect. I\'ll stop by your desk as soon as I\'m off the phone.']
          ],
          questions: [
            { id: 'LP.1', q: 'When will Marisol and Dev take their break?', o: ['At about eleven', 'Right away', 'At ten thirty', 'At lunchtime'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { TARIQ: { name: 'Tariq', g: 'm', skin: '#b07a52', hair: '#1d1410', shirt: '#117a65', style: 'short' }, SOLENE: { name: 'Solène', g: 'f', skin: '#f2d2b6', hair: '#8e5a2b', shirt: '#cb4335', style: 'curly' } },
          segments: [
            {
              lines: [
                ['TARIQ', 'Solène, did you see the letter from the landlord? It was under the door this morning.'],
                ['SOLENE', 'No, I left early for my shift. What does it say?'],
                ['TARIQ', 'Our rent\'s going up when the lease renews on September first. From sixteen hundred a month to eighteen hundred. No, wait, sorry, I read that wrong. Eighteen hundred and fifty.'],
                ['SOLENE', 'Wow. That\'s a big jump. Can he even do that?'],
                ['TARIQ', 'I checked. He gave us the three months\' notice he has to give, so, yeah, it\'s allowed.'],
                ['SOLENE', 'Great. And since we split everything down the middle, it comes straight out of both our pockets, every month.'],
                ['TARIQ', 'Yep. And he wants to know by the end of June whether we\'re staying. So we\'ve got about five weeks to decide.'],
                ['SOLENE', 'Okay. Well, I\'m not saying no right away. I really like this place. The bus stop is right outside, and I can get to the hospital in fifteen minutes.'],
                ['TARIQ', 'I know. It\'s not like my commute is bad either. I just don\'t want to pay more than we have to.']
              ],
              questions: [
                { id: 'L1.1', q: 'What problem are Tariq and Solène dealing with?', o: ['They face a higher monthly cost for their home.', 'Their landlord gave them too little notice.', 'Their lease will not be renewed in September.', 'Solène\'s trip to work is getting longer.'] },
                { id: 'L1.2', q: 'Under the landlord\'s proposal, how much more would each roommate pay per month?', o: ['$125', '$250', '$100', '$200'] },
                { id: 'L1.3', q: 'What is Solène\'s attitude toward the increase at this point?', o: ['She is willing to consider staying.', 'She wants to start looking for a new place.', 'She believes the landlord broke a rule.', 'She expects Tariq to cover the difference.'] }
              ]
            },
            {
              lines: [
                ['TARIQ', 'So I\'ve been looking online. There\'s a two-bedroom near the university for seventeen hundred. That\'s a hundred and fifty less than what he\'s asking.'],
                ['SOLENE', 'Hmm. But are utilities included? Here, heat and hot water are covered.'],
                ['TARIQ', 'Good question. The ad says tenants pay for heat, and it\'s electric. My cousin lives in the same building, and he says heating runs about a hundred a month in the winter.'],
                ['SOLENE', 'So for half the year, we\'d barely be ahead. And then we\'d have to pay for movers.'],
                ['TARIQ', 'True. Last time it cost us about six hundred dollars, and I had to take two days off work without pay.'],
                ['SOLENE', 'Honestly, I\'d rather not go through that again unless the savings are real. Could we talk to the landlord first? Maybe he\'d agree to a smaller increase if we sign for longer, like two years.'],
                ['TARIQ', 'It\'s worth a try. He\'s always telling us we\'re the easiest tenants he\'s ever had. He said it again just last month, when he came by to fix the sink.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why might the cheaper apartment not save them much money?', o: ['Extra costs could wipe out much of the saving.', 'Its rent is higher than their landlord is now asking.', 'Heating there costs about a hundred dollars all year.', 'Hot water there would be billed separately.'] },
                { id: 'L1.5', q: 'Why does Tariq mention their last move?', o: ['To show that relocating costs both money and time', 'To suggest that they hire the same movers again', 'To explain why his cousin chose that building', 'To complain that his employer refused him leave'] },
                { id: 'L1.6', q: 'Why does Tariq think Solène\'s idea might work?', o: ['The landlord is pleased with them as renters.', 'The landlord owes them a favour for the sink.', 'Two-year leases are required by law.', 'The landlord cannot find new tenants.'] }
              ]
            },
            {
              lines: [
                ['TARIQ', 'Okay, I called him on my lunch break. He says he can\'t go back to sixteen hundred, but if we sign for two years, he\'ll make it seventeen fifty.'],
                ['SOLENE', 'Seventeen fifty. So that\'s a hundred and fifty more a month than now, instead of two-fifty.'],
                ['TARIQ', 'Right. And he promised the rent won\'t change again until the two years are up. I asked about the parking spot too, but he wouldn\'t budge on that. It stays at forty a month.'],
                ['SOLENE', 'That\'s actually fair. Once you add heat at the other place, and the movers, we\'d barely save anything by moving. I say we stay.'],
                ['TARIQ', 'Agreed. But I don\'t want to rely on a phone call. I\'ll email him tonight and ask him to confirm all of it, and then we can both sign the new lease this weekend.'],
                ['SOLENE', 'Good idea. Last time, he somehow forgot what he\'d promised us about the dishwasher.']
              ],
              questions: [
                { id: 'L1.7', q: 'Compared with the landlord\'s first proposal, how much will each roommate save per month under the new deal?', o: ['$50', '$75', '$100', '$150'] },
                { id: 'L1.8', q: 'What does Tariq want to make sure of?', o: ['That the agreement is on record', 'That Solène signs the lease first', 'That the rent returns to $1,600', 'That the parking fee is dropped'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLERK: { name: 'Front desk staff', g: 'f', skin: '#e8c4a0', hair: '#d4a017', shirt: '#1abc9c', style: 'bun' }, DESMOND: { name: 'Desmond', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#34495e', style: 'bald' } },
          segments: [{
            lines: [
              ['CLERK', 'Hi there, welcome in. Are you checking in for a class?'],
              ['DESMOND', 'Not today, actually. I\'d like to cancel my membership.'],
              ['CLERK', 'Oh, I\'m sorry to hear that. Do you mind if I ask why you\'re leaving?'],
              ['DESMOND', 'Not at all. My company is transferring me to our Moncton office next month, so I won\'t be living here anymore.'],
              ['CLERK', 'I see. Well, we do have a location in Moncton. I could transfer your membership there at no charge.'],
              ['DESMOND', 'Really? I didn\'t know that. But I\'ll be living outside the city, about a forty-minute drive away, so I honestly don\'t think I\'d use it. I\'ll probably just run on the country roads.'],
              ['CLERK', 'That makes sense. Okay, so you\'re on the monthly plan, which needs thirty days\' notice. Your next payment comes out on the fifteenth, and that will be your last one.'],
              ['DESMOND', 'So I still pay for one more month? I was hoping today would be the end of it.'],
              ['CLERK', 'I understand. But you can keep using the gym until the fifteenth of next month, so you won\'t lose anything. Oh, and I see you still have two personal training sessions on your account.'],
              ['DESMOND', 'Right, I\'d forgotten about those. Can I get my money back for them?'],
              ['CLERK', 'Unfortunately, prepaid sessions aren\'t refundable. You can give them to a family member, though, or use them before your last day.'],
              ['DESMOND', 'My wife\'s already moving out there ahead of me, so that won\'t work. I\'ll book them both for next week, then. Might as well get my money\'s worth.'],
              ['CLERK', 'Good plan. And the locker you rent, do you want to cancel that today too?'],
              ['DESMOND', 'Yes, please. There\'s not much in it. I\'ll clear it out before I leave today.'],
              ['CLERK', 'Perfect. I just need your signature on this form, and I\'ll email you a confirmation. Hang on to that email, just in case there\'s ever a question about your billing.'],
              ['DESMOND', 'Will do. Thanks for making this so easy. I was expecting a sales pitch.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Desmond cancelling his membership?', o: ['His employer is sending him to another city.', 'His new office has a gym of its own.', 'He finds the monthly plan too costly.', 'He would rather join a gym near his new home.'] },
              { id: 'L2.2', q: 'Why does Desmond turn down the transfer?', o: ['The gym would be inconvenient to reach from his home.', 'The transfer would cost him an extra fee.', 'His wife already has a membership there.', 'He wants to keep renting his current locker.'] },
              { id: 'L2.3', q: 'What can be inferred about Desmond\'s final payment?', o: ['It covers another month of gym access.', 'It will be refunded once he signs the form.', 'It is a penalty for giving short notice.', 'It is waived because he is moving away.'] },
              { id: 'L2.4', q: 'What will Desmond do with his training sessions?', o: ['Use them himself before he leaves', 'Pass them on to his wife', 'Ask for a refund later by email', 'Transfer them to the Moncton gym'] },
              { id: 'L2.5', q: 'Why does the clerk tell Desmond to keep the email?', o: ['It could settle a future question about charges.', 'He will need it to enter the Moncton gym.', 'It proves that his training sessions were used.', 'He must show it to cancel the locker.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#c98c64', hair: '#3b2a20', shirt: '#7d3c98', style: 'long' }, OWEN: { name: 'Owen Mackenzie', g: 'm', skin: '#f0c9a6', hair: '#a04000', shirt: '#1f618d', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Owen Mackenzie, an amateur astronomer who runs free stargazing nights at Birchwood Provincial Park. Owen, how did you first get into astronomy?'],
              ['OWEN', 'It started when I was about ten. My grandfather gave me a pair of old binoculars, and one night he pointed them at the moon. I could see the craters. I\'m an electrician by trade, so this has always been a hobby.'],
              ['HOST', 'And how did the public nights begin?'],
              ['OWEN', 'About six years ago, I set up my telescope at a campground, and people kept wandering over to ask what I was looking at. By midnight, twenty people were lined up. The park staff noticed and asked if I\'d do it regularly.'],
              ['HOST', 'What happens on a typical night?'],
              ['OWEN', 'We start at sunset with a short talk about what\'s in the sky that month. Then, once it\'s properly dark, people take turns at four telescopes. Volunteers from our astronomy club help run them. Saturn\'s rings are always the favourite. People actually gasp.'],
              ['HOST', 'How many people usually come out?'],
              ['OWEN', 'Usually around eighty. Except last August, during the meteor shower, we had over three hundred, and cars were parked along the highway. So now that one night needs online registration. Every other night, you just show up.'],
              ['HOST', 'Do people need to bring anything?'],
              ['OWEN', 'Just warm clothes, even in July, because it gets cold once you\'re sitting still. And we ask people to use red flashlights, or put red tape over a regular one. White light ruins everyone\'s night vision for about twenty minutes.'],
              ['HOST', 'What if it\'s cloudy?'],
              ['OWEN', 'That\'s the hardest part. We decide by four in the afternoon and post it on the club website. If we cancel, we try to reschedule for the next clear night that week.'],
              ['HOST', 'Any advice for someone who wants to start?'],
              ['OWEN', 'Don\'t rush out and buy an expensive telescope. Start with binoculars and a star map, and learn the sky first. A lot of people spend a thousand dollars, and then the equipment sits in the closet because it\'s too complicated.'],
              ['OWEN', 'And come to one of our nights before you buy anything. You can try four different telescopes and ask the volunteers what they actually like using.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Owen become interested in astronomy?', o: ['A relative introduced him to the night sky.', 'His work as an electrician led to it.', 'A school course sparked his interest.', 'He saw craters through a telescope at ten.'] },
              { id: 'L3.2', q: 'How did the public stargazing nights start?', o: ['Campers became curious about his equipment.', 'The park wanted to attract more tourists.', 'His club needed to raise money.', 'Park staff hired him to give talks at sunset.'] },
              { id: 'L3.3', q: 'What does Owen mean when he says, "People actually gasp"?', o: ['Visitors are amazed by what they see.', 'Visitors find the cold hard to bear.', 'Visitors are shocked by the long lines.', 'Visitors struggle to use the telescopes.'] },
              { id: 'L3.4', q: 'What would probably happen if a visitor used a white flashlight?', o: ['Others would struggle to see the sky for a while.', 'The telescopes would need to be refocused.', 'Park staff would ask the visitor to leave.', 'Saturn would be hidden for the rest of the night.'] },
              { id: 'L3.5', q: 'How are cloudy nights handled?', o: ['A decision is shared online during the afternoon.', 'Visitors must register online to hear about changes.', 'The park office phones each visitor.', 'Events always move to the following weekend.'] },
              { id: 'L3.6', q: 'What is Owen\'s view of buying costly equipment early?', o: ['Complicated gear often ends up unused by beginners.', 'It is a wise long-term investment.', 'The club should lend equipment instead.', 'Binoculars are harder to learn than telescopes.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#943126', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Weather officials have issued a heat warning for the region, with daytime highs expected to reach thirty-four degrees starting tomorrow. With the humidity, it will feel closer to forty.'],
              ['NEWS', 'The warning is expected to last at least three days. Overnight temperatures are forecast to stay above twenty degrees, which means homes without air conditioning will not cool down at night.'],
              ['NEWS', 'During a similar stretch of heat last summer, local emergency rooms reported more than sixty heat-related visits in just four days.'],
              ['NEWS', 'In response, the city will open cooling centres beginning tomorrow at noon. The centres will be set up in community centres and public libraries, and will stay open until nine p.m. each day.'],
              ['NEWS', 'The city had planned to open four centres, but a fifth was added this afternoon at the Westside Arena after the forecast worsened. Residents who cannot get to a centre on their own can call the city\'s information line to book a free ride.'],
              ['NEWS', 'The city\'s medical officer of health, Doctor Hélène Bouchard, is urging residents to check on older neighbours and anyone who lives alone, as they face the greatest risk. She also reminds parents never to leave children or pets in a parked car.'],
              ['NEWS', 'Bottled water will be available at every centre, and pets on a leash are welcome. Outdoor public pools will also extend their hours until ten p.m. while the warning is in effect.'],
              ['NEWS', 'A full list of locations, including the new arena, is available on the city\'s website, or by calling the same information line.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['How the city is responding to a period of extreme heat', 'Why community centres will close early this week', 'The opening of a new arena on the west side', 'A shortage of bottled water across the region'] },
              { id: 'L4.2', q: 'Why are the nights a concern?', o: ['Some homes will get no relief after dark.', 'Power may be shut off overnight.', 'Cooling centres will close at sunset.', 'Humidity will be highest after dark.'] },
              { id: 'L4.3', q: 'How many hours a day will the cooling centres be open?', o: ['Nine', 'Ten', 'Twelve', 'Five'] },
              { id: 'L4.4', q: 'Who does Dr. Bouchard say is most at risk?', o: ['Older adults and people without company at home', 'Parents with young children', 'People who leave pets in cars', 'Residents without air conditioning'] },
              { id: 'L4.5', q: 'Which statement about the city\'s measures is true?', o: ['Some pools will stay open later than usual.', 'The number of centres was later reduced.', 'Pets are not allowed in the centres.', 'Rides to the centres must be paid for.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Hospital fundraiser: ideas', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { AMARA: { name: 'Amara (coordinator)', g: 'f', skin: '#5c3a21', hair: '#120c08', shirt: '#d4ac0d', style: 'curly' }, LUC: { name: 'Luc', g: 'm', skin: '#f2d2b6', hair: '#4a3020', shirt: '#2e86c1', style: 'short' }, NOOR: { name: 'Noor', g: 'f', skin: '#c68e63', hair: '#2a1b12', shirt: '#a93226', style: 'long' } },
          segments: [{
            lines: [
              ['AMARA', 'Okay, thanks for coming, both of you. So, the hospital foundation asked if our volunteer group could raise money for the new children\'s playroom on the third floor. Our goal is eight thousand dollars, and we have until the end of November.'],
              ['LUC', 'I\'ve been thinking about a fun run. Families love them, and we organized one at my old job that raised over five thousand dollars in one morning.'],
              ['NOOR', 'A run is great, but November\'s tricky. It could be icy, or pouring rain, and then half the people won\'t show up. Plus we\'d need a permit to close the roads, and that takes about six weeks.'],
              ['LUC', 'Hmm. I didn\'t think about the permit. Okay, that\'s fair.'],
              ['NOOR', 'What about a dinner with a silent auction? It\'s all indoors, and local businesses are usually happy to donate prizes, especially for kids.'],
              ['AMARA', 'I like that. The community centre on Maple Avenue rents its main hall for three hundred dollars an evening, and it holds about a hundred and twenty people.'],
              ['LUC', 'So if we sell tickets at fifty dollars each and fill the room, that\'s six thousand right there. The auction could cover the rest.'],
              ['NOOR', 'Except the dinner itself costs money. Catering is usually at least twenty dollars a person.'],
              ['AMARA', 'Actually, my sister-in-law manages a restaurant downtown, and they\'ve offered to provide the food at cost. That\'s about twelve dollars a person.'],
              ['LUC', 'Great. Then let me take care of asking businesses for auction prizes. I know most of the shop owners on Main Street from my old delivery job.'],
              ['NOOR', 'Perfect. I\'ll do the posters and the online ticket sales. Honestly, I\'d much rather do that than ask people for things. I\'m terrible at it.'],
              ['LUC', 'And maybe we could still do a small run in the spring, as a second event.'],
              ['AMARA', 'Let\'s not get ahead of ourselves. One event at a time. I\'ll call the community centre this afternoon and try to book a Saturday in mid-November.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To choose a fundraising event', 'To plan a party for hospital staff', 'To decorate a children\'s playroom', 'To hire a caterer for the hospital'] },
              { id: 'L5.2', q: 'Why does Amara mention her sister-in-law?', o: ['To show that the cost of the meal can be reduced', 'To suggest a place to hold the dinner', 'To offer a prize for the silent auction', 'To recommend a caterer charging $20 a person'] },
              { id: 'L5.3', q: 'Why does Luc suggest a fun run?', o: ['His old workplace raised money with one.', 'He is training for a marathon himself.', 'Runs are cheaper than other events.', 'The hospital asked for a sports event.'] },
              { id: 'L5.4', q: 'What concerns does Noor have about the run?', o: ['Unreliable weather and a slow approval', 'The high cost of renting the roads', 'Too few families willing to take part', 'The difficulty of finding enough prizes'] },
              { id: 'L5.5', q: 'How does Luc react to Noor\'s point about the permit?', o: ['He accepts that she is right.', 'He says he can get one quickly.', 'He thinks a permit is not needed.', 'He becomes annoyed with her.'] },
              { id: 'L5.6', q: 'If the hall is full and the restaurant supplies the food, about how much will the meals cost?', o: ['$1,440', '$2,400', '$6,000', '$1,200'] },
              { id: 'L5.7', q: 'Why does Noor choose to handle posters and ticket sales?', o: ['She feels uncomfortable requesting favours.', 'She already knows the community centre staff.', 'She knows many shop owners on Main Street.', 'She thinks the auction prizes are already arranged.'] },
              { id: 'L5.8', q: 'What does Amara\'s reply to Luc\'s last suggestion show?', o: ['She wants to focus on one event first.', 'She thinks a spring run is a bad idea.', 'She would rather hold the run in November.', 'She is annoyed that Luc changed his mind.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Tourism in coastal towns',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#e3b28b', hair: '#5d4037', shirt: '#117864', style: 'bun' } },
          segments: [{
            lines: [
              ['NARR', 'Every summer, thousands of visitors pour into small fishing villages along Canada\'s coasts. For some residents, tourism is a lifeline. For others, it is changing their communities in ways they never asked for.'],
              ['NARR', 'Marguerite Doucet owns a bakery and café in a village of about nine hundred people. She remembers the years after the fish plant closed, when half the shops on the main street had boards over their windows.'],
              ['NARR', 'Today, she says, those same buildings hold a gift shop, a kayak rental and two restaurants. In her view, visitors brought work at exactly the moment the fishery stopped providing it, and without them, her own business would have closed long ago.'],
              ['NARR', 'Doucet\'s second argument is about the whole community. Money from visitors helped pay for a new walking trail and the restored wharf, projects she says a village this size could never have afforded on its own.'],
              ['NARR', 'She also points to young people. When she was a teenager, almost everyone in her class left for Halifax or Toronto after graduation. Now, she says, many stay at least into their early twenties, because they can earn decent money each summer.'],
              ['NARR', 'Doucet admits that tourism has its costs. Traffic in July can be terrible, she agrees, and some outsiders buy houses they use for only a few weeks a year. But she sees these as problems to manage, not reasons to turn visitors away.'],
              ['NARR', 'Graham Whitley sees things very differently. A retired fisherman who now sits on town council, he says housing has become the village\'s most urgent problem.'],
              ['NARR', 'As more homes are rented to tourists by the night, fewer are left for people who live and work here all year. Last fall, the village school nearly lost its new teacher because she could not find an apartment for the winter.'],
              ['NARR', 'A nurse at the local clinic, he adds, now drives forty minutes each way from the next county, because there was nothing for her to rent in the village.'],
              ['NARR', 'Whitley\'s second concern is the kind of work tourism offers. Most of the jobs are seasonal and poorly paid, and they disappear by Thanksgiving. Young people may stay for a summer or two, he says, but nobody can build a life on five months of work.'],
              ['NARR', 'He does not deny that visitors have brought money into the village, and he gives Doucet credit for pushing to get the wharf restored. But he believes the town now depends far too heavily on a few busy months.'],
              ['NARR', 'Whitley would like council to cap the number of short-term rentals, and to offer tax breaks to businesses that operate all year, such as a boat repair shop that is thinking of moving to the area.'],
              ['NARR', 'Doucet worries that a cap would simply push visitors, and their spending, to the next town along the coast. Still, the two agree that leaving things exactly as they are is not an option.'],
              ['NARR', 'Council will hold a public meeting next month to hear from residents before any new rules are drafted.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['How tourism is reshaping small coastal communities', 'The closing of a fish plant in a small village', 'Plans to build a new walking trail for visitors', 'Rising housing prices in large Canadian cities'] },
              { id: 'L6.2', q: 'According to Doucet, what has tourism done for jobs?', o: ['It filled a gap left by a shrinking industry.', 'It created year-round jobs in fishing.', 'It kept older workers employed.', 'It paid for the wharf repairs.'] },
              { id: 'L6.3', q: 'Why does Whitley mention the teacher and the nurse?', o: ['To show that the housing shortage affects essential workers', 'To argue that teachers and nurses are paid too little', 'To show that the school and clinic need more staff', 'To complain that driving from the next county is costly'] },
              { id: 'L6.4', q: 'How does Whitley answer Doucet\'s point about young people?', o: ['Summer earnings alone are not enough to settle down on.', 'Most graduates still leave for Halifax or Toronto.', 'Young people would rather work in the fishery.', 'Teenagers should not have jobs during the summer.'] },
              { id: 'L6.5', q: 'Which proposal would Whitley most likely support?', o: ['Support for a business that would employ people outside the tourist season', 'A larger summer festival to draw more visitors', 'More vacation rentals near the restored wharf', 'Extra spending to extend the walking trail'] },
              { id: 'L6.6', q: 'On what do Doucet and Whitley agree?', o: ['The current situation should not simply continue.', 'Short-term rentals should be limited.', 'Tourism keeps young people at home.', 'Seasonal jobs are the main problem.'] }
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
          passage: '<h3>Message</h3><p>Dear Diane and Paul,</p><p>I arrived home in Bogotá on Sunday night, and after sleeping for almost fourteen hours, the first thing I wanted to do was write to you. Thank you for the most wonderful three months of my life.</p><p>When I first arrived in Saskatoon in September, I was very nervous. My English was not as good as I had hoped, and I was afraid I would not understand anyone. You were so patient with me. I still remember Paul drawing pictures on a napkin at dinner to explain the word "toboggan." And Diane, your idea of watching the evening news together with the subtitles on helped me more than any textbook.</p><p>I also want to thank Émile for teaching me to skate. I fell at least thirty times on the outdoor rink, but by December I could go all the way around without holding on to the boards. He was a much stricter teacher than anyone at my language school!</p><p>My mother asked me to tell you how grateful she is that you took care of me when I had the flu in November. She was so worried, but when I told her that Diane made me soup every day and called the clinic for me, she said she could finally sleep.</p><p>Now I have some news. The language school has offered me a place in its summer program for university students, from July 2 to August 15. If I accept, I will need a homestay again. I know it is a lot to ask, and please say no if it is not possible, but I would love to stay with you again. This time I could also help more around the house, maybe by cooking some Colombian dishes for all of you.</p><p>There is one complication. The cheapest flight I can find lands on June 28, four days before classes begin. The school says it can put me in a student residence for those nights, so please do not feel that you have to take me early.</p><p>I have mailed a small package with coffee from my uncle\'s farm and a scarf for Diane. It should arrive in about three weeks. The school wants my answer within two weeks of its letter, which arrived on February 15, so I will wait to hear from you before I reply to them.</p><p>With love and gratitude,<br>Lucía</p>',
          questions: [
            { id: 'R1.1', q: 'Lucía most likely wrote so soon after getting home because she', o: ['was eager to say how much the visit meant.', 'was worried the package had gone missing.', 'had promised her mother to write at once.', 'needed to book her flight that same week.'] },
            { id: 'R1.2', q: 'Paul\'s napkin drawings suggest that, at first, Lucía', o: ['sometimes needed new words shown to her in pictures.', 'enjoyed drawing more than speaking English.', 'could not read the menu at dinner.', 'preferred to speak Spanish at meals.'] },
            { id: 'R1.3', q: 'Lucía suggests that Diane\'s idea worked well because it', o: ['let her hear and read English together.', 'replaced the textbook used in her classes.', 'taught her to draw pictures of new words.', 'kept her up to date on local events.'] },
            { id: 'R1.4', q: 'Lucía\'s tone when she describes Émile\'s lessons is', o: ['playful and fond.', 'quietly critical.', 'mostly apologetic.', 'rather anxious.'] },
            { id: 'R1.5', q: 'Lucía\'s mother felt relieved once she learned that', o: ['someone was looking after her daughter.', 'Lucía had fully recovered from the flu.', 'the clinic had phoned Diane every day.', 'Diane would call her with any news.'] },
            { id: 'R1.6', q: 'Lucía mentions the student residence in order to', o: ['avoid putting pressure on the family.', 'explain why her flight is so cheap.', 'show she would prefer to live with students.', 'ask the family to pay for those nights.'] }
          ],
          reply: '<h3>Reply</h3><p>Dear Lucía,</p><p>We were so happy to read your email. The house has been very quiet without you. Émile keeps asking when you will [[R1.7]], because he says nobody else listens to his instructions on the ice.</p><p>Paul says you should not thank him for the [[R1.8]]. He insists his drawings were terrible and that you learned the words because you worked hard.</p><p>Of course you can stay with us again! Please give the school your answer before [[R1.9]]. And forget the student residence: we would much rather [[R1.10]], so we will meet your plane ourselves. Émile has promised to keep your old room tidy until then.</p><p>Please also tell your mother that [[R1.11]]. You were never any trouble, even when you were sick, and Diane says the soup was a good excuse to try new recipes.</p><p>We will watch for the package and send you a photo of Diane wearing her new scarf. Paul has already cleared a shelf in the kitchen for the coffee, and he wants to know whether your uncle sells it in larger bags. He also says he will happily wash the dishes after every Colombian dinner.</p><p>Hugs from all of us,<br>Diane, Paul and Émile</p>',
          blanks: [
            { id: 'R1.7', o: ['be back on skates beside him', 'teach him some Spanish words', 'send another bag of coffee', 'visit him at the language school'] },
            { id: 'R1.8', o: ['vocabulary help at mealtimes', 'soup you had while you were ill', 'lessons on the outdoor rink', 'rides you got to the clinic'] },
            { id: 'R1.9', o: ['March 1', 'June 28', 'July 2', 'August 15'] },
            { id: 'R1.10', o: ['have you here from your first night', 'collect you on the day classes begin', 'let the school find you a room', 'pay to change your flight to July'] },
            { id: 'R1.11', o: ['looking after you was a pleasure', 'she should have phoned us sooner', 'we hope to visit Bogotá next year', 'we still owe the clinic for your visit'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following rate table. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Coastline Car Rentals: Summer Rates</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Vehicle</th><th>Seats</th><th>Daily rate</th><th>Weekly rate (7 days)</th><th>Kilometres included</th><th>Each extra km</th></tr></thead><tbody>' +
            '<tr><td>Economy</td><td>4</td><td>$45</td><td>$270</td><td>200 per day</td><td>$0.25</td></tr>' +
            '<tr><td>Compact</td><td>5</td><td>$55</td><td>$330</td><td>200 per day</td><td>$0.25</td></tr>' +
            '<tr><td>Mid-size SUV</td><td>5</td><td>$78</td><td>$470</td><td>Unlimited</td><td>None</td></tr>' +
            '<tr><td>Minivan</td><td>7</td><td>$95</td><td>$570</td><td>Unlimited</td><td>None</td></tr>' +
            '<tr><td>Pickup truck</td><td>3</td><td>$85</td><td>$510</td><td>150 per day</td><td>$0.35</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>The weekly rate applies only to rentals of exactly 7 days. Shorter rentals are charged the daily rate.</li><li>Drivers under 25 pay an extra $20 per day.</li><li>Each additional driver costs $10 per day. There is no charge for the main driver\'s spouse.</li><li>Child car seats: $12 per seat per day, up to a maximum of $60 per seat for the whole rental.</li><li>Vehicles must be returned with a full tank, or a $40 refuelling charge applies.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Sunita,</p><p>I checked the rental rates for our trip to Cape Breton in August. Since there will be six of us, the only vehicle big enough is the [[R2.1]]. We need it for exactly one week, so the base price will be [[R2.2]].</p><p>Your son Ravi, who is 22, wants to share the driving with me. He is not my spouse, so we will pay $10 a day for him as an additional driver, and on top of that, [[R2.3]] because of his age.</p><p>The twins will both need car seats. For the full week, the two seats will cost [[R2.4]], which is less than I expected.</p><p>The good news is that the van comes with [[R2.5]], so we will not have to worry about how far we drive around the Cabot Trail.</p><p>Love,<br>Meera</p>',
          blanks: [
            { id: 'R2.1', o: ['minivan', 'mid-size SUV', 'compact car', 'pickup truck'] },
            { id: 'R2.2', o: ['$570', '$665', '$470', '$95'] },
            { id: 'R2.3', o: ['$20 a day', '$10 a day', '$12 a day', '$40 in total'] },
            { id: 'R2.4', o: ['$120', '$168', '$60', '$84'] },
            { id: 'R2.5', o: ['no limit on distance', '200 free kilometres a day', 'a full tank of gas', 'free child car seats'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Five friends, two of them under 25, want a car for 4 days and expect to drive about 1,200 km in total. The cheapest suitable choice is', o: ['the mid-size SUV.', 'the compact car.', 'the economy car.', 'the minivan.'] },
            { id: 'R2.7', q: 'A 23-year-old who rents a compact car for 6 days and drives 1,500 km will pay a total of', o: ['$525.', '$450.', '$405.', '$600.'] },
            { id: 'R2.8', q: 'A 45-year-old rents a minivan for 5 days and will share the driving with his wife and his 30-year-old brother. The extra driver charges will total', o: ['$50.', '$100.', '$0.', '$150.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Lobster Seasons in the Maritimes</h3><p><b>A.</b> Many visitors to the Maritimes are surprised to learn that lobster cannot be caught whenever a fisher wishes. The coastline is divided into dozens of lobster fishing areas, and the federal government sets a separate season for each one. Most seasons last only about two months. Limiting the fishing period protects lobsters during sensitive times in their life cycle, such as the weeks when they shed their old shells and grow new ones. Because the seasons are spread across the calendar, however, lobster is being landed somewhere in the region during most of the year. Prices at the wharf rise and fall with the seasons, often peaking when few areas are open. This steady supply allows processing plants and buyers to keep operating for much longer than any single season would allow.</p><p><b>B.</b> The largest and most valuable areas, in southwestern Nova Scotia, are an exception. Their season opens in late November and runs until the end of May. Opening day there is known locally as "Dumping Day," when hundreds of boats leave the harbours at dawn, loaded with traps, while families and neighbours wave from the wharves. In some towns, schools once closed for the morning so that children could watch the boats leave. Winter fishing is cold and dangerous work, and if strong winds are forecast, officials may postpone the opening until conditions are safer. Even after the season begins, crews often stay in port for days at a time when storms move through.</p><p><b>C.</b> In the southern Gulf of St. Lawrence, which includes the waters around Prince Edward Island and parts of New Brunswick and northern Nova Scotia, most areas fish in the spring, usually from late April or May until late June or early July. One area along the Northumberland Strait has a season from August to October instead. In several Island harbours, the spring season begins with a blessing of the fleet. Since a season may cover only eight or nine weeks, many fishers in these communities also farm, build boats or work in other trades for the rest of the year.</p><p><b>D.</b> Several rules apply in every area. Each lobster must be measured along its shell, from the eye socket to the back of the body, and any lobster below the legal minimum size must be released. Females carrying eggs must also go back into the water. The number of traps per licence is limited, each trap must carry a tag showing which licence it belongs to, and traps must include an opening that allows small lobsters to escape. Scientists say these measures have helped keep catches high in recent years, although they continue to study how warmer ocean temperatures may affect lobster in the future.</p>',
          questions: [
            { id: 'R3.1', q: 'The first day of the season in one area has a special local name.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Some fishers earn a living in other ways when their season is over.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Lobsters that are too small have to be put back.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'Fishing dates are not the same in every part of the coast.', fixed: true, a: 'A' },
            { id: 'R3.5', q: 'Bad weather can delay the start of fishing.', fixed: true, a: 'B' },
            { id: 'R3.6', q: 'Opening day in southwestern Nova Scotia is an official public holiday.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'Traps are built so that young lobsters can get out.', fixed: true, a: 'D' },
            { id: 'R3.8', q: 'Researchers are examining how changing sea temperatures could affect lobster.', fixed: true, a: 'D' },
            { id: 'R3.9', q: 'Seasons are timed to protect lobsters while they are changing shells.', fixed: true, a: 'A' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Libraries Stop Charging Late Fees?</h3><p>When the public library in a mid-sized Manitoba city stopped charging overdue fines two years ago, some staff expected the shelves to empty as borrowers kept books for months. That did not happen. According to the library\'s own figures, 94 per cent of items are still returned within two weeks of their due date, about the same rate as before. Meanwhile, the number of active library cards rose by 18 per cent, and many of the new members were people who had stopped visiting years earlier because they owed money.</p><p>Library director Janelle Osei says this is exactly the point. "Fines were never a big source of income for us. We collected about thirty thousand dollars a year, but staff spent hours processing small payments and arguing with patrons over a dollar or two." More importantly, she says, fines hit hardest the people who need the library most. "A family with three children can easily build up a fifty-dollar debt. When their card is blocked, the kids lose access to books and homework help. A wealthy family just pays and moves on." She adds that staff now spend that time running reading programs instead, and that the library has made up part of the lost money by renting out its meeting rooms in the evenings.</p><p>Not everyone is convinced. Harold Kowalski, who chairs a volunteer group called Friends of the Library, worries that removing fines sends the wrong message. "Borrowing is a responsibility. When there is no consequence, people get careless, and the person on the waiting list pays the price." He points out that waiting times for new bestsellers have grown at some branches, sometimes to several months, and that he hears complaints about this from older members almost every week. Kowalski also argues that thirty thousand dollars is not a small amount for a public library. "That money could buy a lot of children\'s books or keep a branch open on Sundays."</p><p>Rosalind Tremblay, who studies public services at a university in Winnipeg, thinks both sides are partly right. Her research suggests that return rates depend less on fines than on reminders. "Libraries that send a text message two days before the due date see most items come back on time, with or without penalties." At the same time, she warns that the jump in membership may not last. "New members often sign up while a policy is in the news and then drift away. I would want to see three or four years of figures before calling this a success."</p><p>Some libraries have tried to find a middle ground. Many now renew items automatically if no one else is waiting for them, and they still charge borrowers the full cost of items that are never returned. Osei supports both measures. Kowalski says he could accept the change if libraries also bought more copies of popular titles to shorten the waiting lists. "I am not against helping families," he says. "I just want the system to be fair to everyone who is waiting."</p>',
          questions: [
            { id: 'R4.1', q: 'The library\'s figures suggest that ending fines', o: ['did not make borrowers slower to bring things back.', 'caused many items to vanish from the shelves.', 'led several staff members to leave their jobs.', 'reduced the number of people holding cards.'] },
            { id: 'R4.2', q: 'Ms. Osei mentions a wealthy family in order to show that fines', o: ['weigh far more heavily on poorer households.', 'are an important way to raise extra money.', 'are paid quickly by most library users.', 'should be set higher for people with money.'] },
            { id: 'R4.3', q: 'Mr. Kowalski is most concerned that, with no penalties,', o: ['careless borrowers make others wait longer.', 'older members will stop visiting branches.', 'the library will lose its volunteer group.', 'children will borrow fewer books than before.'] },
            { id: 'R4.4', q: 'Ms. Tremblay would most likely agree that', o: ['a timely nudge matters more than a penalty.', 'the rise in membership proves the policy works.', 'fines are the surest way to get books returned.', 'libraries should wait four years to end fines.'] },
            { id: 'R4.5', q: 'What can be concluded about Mr. Kowalski\'s position?', o: ['He is open to a compromise.', 'He opposes any help for families.', 'He wants Sunday hours to be cut.', 'He favours automatic renewals.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I am a mother of four, and I stopped using our library three years ago because our card was blocked over [[R4.6]]. So I understand Ms. Osei\'s point that fines [[R4.7]]. When our library finally dropped them last spring, my kids were thrilled to get their cards back, and I have since joined an evening reading group that the staff now have time to run.</p><p>At the same time, Mr. Kowalski is right that [[R4.8]]. My daughter has been on a waiting list for a popular fantasy novel since January, and she checks it every morning. I was also struck by Ms. Tremblay\'s research. Our branch already [[R4.9]], and in our house that does more to get books back on time than any fine ever did.</p><p>I think the best solution is to buy extra copies of the titles everyone wants and to keep charging people for [[R4.10]]. That way, families are not shut out, and the shelves still fill up again.</p>',
          blanks: [
            { id: 'R4.6', o: ['charges we could not afford to pay', 'a card one of the children had lost', 'a laptop that had come back damaged', 'a complaint from another member'] },
            { id: 'R4.7', o: ['shut out households that rely on them most', 'teach young readers to be responsible', 'raise useful money for new books', 'should be paid only by wealthy patrons'] },
            { id: 'R4.8', o: ['sought-after titles can take ages to arrive', 'staff spend too long processing payments', 'thirty thousand dollars is a small sum', 'volunteers are leaving the library'] },
            { id: 'R4.9', o: ['texts us shortly before things are due', 'renews every item without asking us', 'blocks cards after one late return', 'opens on Sunday afternoons now'] },
            { id: 'R4.10', o: ['anything that goes missing for good', 'books returned a day or two late', 'renewals of popular titles', 'using the homework help'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You are applying to a college program that requires a recommendation letter from a former teacher. The teacher who knew your work best taught you five years ago, and you have not been in touch since. The application deadline is only ten days away.</p><p>Write an email to your former teacher. In your email, do the following:</p><ul><li>Remind the teacher who you are, including something about your work they may remember.</li><li>Explain what you are applying for and why it matters to you now.</li><li>Acknowledge the short notice and say what you can send to make the letter easier to write.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your company has a budget for one special staff event this year and is asking employees which type of event they would prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'A two-day team-building retreat at a lakeside lodge, with workshops, group activities and shared meals. The lodge is a three-hour drive away, and staff would spend one night away from home.' },
            { key: 'B', label: 'Option B', text: 'A one-day charity volunteer event, where staff help a local food bank and a youth centre. Most of the day would be physical work, such as sorting and moving boxes, in small groups with people from the same department.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours often feels tired because she does not get enough sleep. She works until 11 p.m. three nights a week, has to be up at 6:30 a.m. to take her son to school, and says she cannot afford to see a sleep specialist. Give her advice on how to get more and better sleep.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to work as part of a team. What was the task, what was your role, how did the team work together, and what would you change if you did it again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/J/scene.jpg" alt="A busy train station platform as a train arrives">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the child near the edge of the platform, the arriving train, and the ticket in the air.', image: '<img src="tests/img/J/scene.jpg" alt="A busy train station platform as a train arrives">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family has saved money for one home improvement project this year. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'New kitchen', image: '<img src="tests/img/J/opt_A.jpg" alt="Photo: New kitchen">', facts: ['New cabinets, counters and stove', 'Cost: $28,000', 'Takes 6 weeks', 'No cooking at home during the work'] },
            { key: 'B', title: 'Backyard deck', image: '<img src="tests/img/J/opt_B.jpg" alt="Photo: Backyard deck">', facts: ['Wooden deck with railing', 'Cost: $12,000', 'Takes 2 weeks', 'Usable only from May to October'] }
          ],
          third: { key: 'C', title: 'New roof', image: '<img src="tests/img/J/opt_C.jpg" alt="Photo: New roof">', facts: ['Replace old shingles', 'Cost: $16,000', 'Takes 4 days', 'Current roof is 22 years old'] },
          persuade: 'Your family member suggests replacing the roof instead. Persuade them that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Your neighbour is going away for one week and asked you to look after her dog in your apartment. You agreed. Today, your roommate told you that he is allergic to dogs and does not want the dog in the apartment.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you can no longer look after her dog.</p><p><b>Option B:</b> Talk to your roommate. Explain why you want to keep your promise to your neighbour.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your local school board is deciding whether high school cafeterias and vending machines should stop selling junk food, such as chips, candy and soft drinks. A parents\' group says the change would improve students\' health. The student council says students would simply buy the same snacks at the store across the street, and the school would lose about $15,000 a year that now pays for sports equipment.</p><p>Should schools stop selling junk food to students? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a home and garden show and see this unusual mailbox. Call a family member who needs a new mailbox. Their house is on a windy street near the ocean, and they wanted to spend no more than $100. Describe the mailbox and explain whether you think they should buy it.', image: '<img src="tests/img/J/object.jpg" alt="An unusual fish-shaped mailbox at a home and garden show">' }
      ]
    }
  });
})();
