/* Rowe CELPIP Mock Exam: Test H content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty target: slightly harder than the real test (CLB 8 to 11).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/H/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'H',
    title: 'Mock Test 8',
    note: 'Original practice content in the CELPIP-General format. Written to be slightly harder than the real test.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { OWEN: { name: 'Owen', g: 'm', skin: '#f0c9a6', hair: '#7a4a24', shirt: '#2e86c1', style: 'short' }, MEI: { name: 'Mei', g: 'f', skin: '#e8c39e', hair: '#120c08', shirt: '#d35400', style: 'bun' } },
        segments: [{
          lines: [
            ['OWEN', 'Hang on, Mei. Should I grab the umbrella? It\'s looking pretty grey out there.'],
            ['MEI', 'The forecast says the rain won\'t start until around four, and we\'ll be home from the bookstore long before that.'],
            ['OWEN', 'Forecasts aren\'t always right, though. It folds up small, so I\'ll just stick it in my backpack.'],
            ['MEI', 'Fair enough. As long as you\'re the one carrying it.']
          ],
          questions: [
            { id: 'LP.1', q: 'What does Owen decide to do?', o: ['Take the umbrella just in case', 'Leave the umbrella at home', 'Wait until the rain stops at four', 'Buy an umbrella at the bookstore'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { KWAME: { name: 'Kwame', g: 'm', skin: '#5c3a24', hair: '#0f0a07', shirt: '#4a6d8c', style: 'short' }, MARISOL: { name: 'Marisol', g: 'f', skin: '#d6a07a', hair: '#2a1b12', shirt: '#b03a2e', style: 'long' } },
          segments: [
            {
              lines: [
                ['KWAME', 'Marisol, have you been up to the fifth floor yet? The furniture truck showed up about twenty minutes ago.'],
                ['MARISOL', 'Not yet, I\'ve been stuck sorting out parking passes. Please tell me it\'s all set up. We\'ve got twenty-six people walking in at one o\'clock.'],
                ['KWAME', 'Well... it\'s set up. Just not with our furniture. There are tall stools and little round café tables everywhere. Honestly, it looks like a coffee shop. No desks, no proper chairs.'],
                ['MARISOL', 'You\'re joking. Did somebody change the order without telling us?'],
                ['KWAME', 'That was my first thought too, but no. Our order number\'s on the paperwork, but the packing slip is addressed to some law firm over in Dartmouth. My guess is the warehouse put the two orders on the wrong trucks.'],
                ['MARISOL', 'Which means that firm is probably staring at twenty-six of our desks right now.'],
                ['KWAME', 'Probably. And the driver says he can\'t take anything back until his dispatcher signs off, but the dispatcher isn\'t picking up.'],
                ['MARISOL', 'Okay. Deep breath. It\'s half past nine, so we still have some time. Not a lot, but some.']
              ],
              questions: [
                { id: 'L1.1', q: 'What most likely caused the problem?', o: ['The supplier mixed up two customers\' orders.', 'Someone changed the order without telling them.', 'The law firm cancelled its own order at the last minute.', 'The driver unloaded the order on the wrong floor.'] },
                { id: 'L1.2', q: 'Why can\'t the driver fix the situation right away?', o: ['He needs approval he has not yet received.', 'His truck is already full with another order.', 'He does not know where the law firm is located.', 'He has to finish a delivery in Dartmouth first.'] },
                { id: 'L1.3', q: 'What does Marisol mean when she says "Not a lot, but some"?', o: ['The situation is urgent but not yet hopeless.', 'Only some of the staff will arrive at one.', 'Some of the furniture can probably be used.', 'She expects the dispatcher to call back soon.'] }
              ]
            },
            {
              lines: [
                ['MARISOL', 'Right. I\'m going to skip the dispatcher and call the supplier\'s customer service line myself. Somebody there must be able to sort this out.'],
                ['KWAME', 'Worth a try. But let\'s be realistic. Even if they track down our desks, there\'s no way they\'ll get them here today.'],
                ['MARISOL', 'No, probably not. So the real question is what twenty-six people do this afternoon. They can\'t just stand around holding their boxes.'],
                ['KWAME', 'Well, we\'ve still got the old office until Friday. Couldn\'t people stay there one more day?'],
                ['MARISOL', 'In theory. But the movers brought nearly all the computers across this morning. Hauling them back for one day? I don\'t think so.'],
                ['KWAME', 'Fair. Okay, what about using what we\'ve got? Those café tables aren\'t that bad. Most people could manage with a laptop for a day or two.'],
                ['MARISOL', 'Actually, that\'s not a terrible idea. Except for finance. They work on two big monitors all day. They\'d never cope at a café table. But the training room on six already has twelve desks set up.'],
                ['KWAME', 'So finance goes up to the training room, and everyone else roughs it at the café tables. I\'ll get security to unlock the training room. They\'ve got the only key.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Marisol reject Kwame\'s first suggestion?', o: ['Moving everything back would be too much work.', 'The lease on the old office has already ended.', 'The staff have already packed their boxes.', 'The movers will not be available until Friday.'] },
                { id: 'L1.5', q: 'What is Marisol\'s opinion of the café tables?', o: ['They will do for most staff, but not for everyone.', 'They are fine for all staff for a day or two.', 'They look too much like a coffee shop to use.', 'They should be sent back to the supplier first.'] },
                { id: 'L1.6', q: 'What will Kwame most likely do next?', o: ['Arrange for a locked room to be opened', 'Call the supplier\'s customer service line', 'Set up laptops at the café tables', 'Carry the finance team\'s monitors upstairs'] }
              ]
            },
            {
              lines: [
                ['MARISOL', 'Good news, for once. I got through to a supervisor. She checked, and yes, the law firm got our order and we got theirs. They\'re swapping both deliveries tomorrow morning at eight.'],
                ['KWAME', 'Eight tomorrow? Honestly, I was bracing myself for next week. Are they charging us for the second delivery?'],
                ['MARISOL', 'Nope. And she\'s knocking a percentage off our invoice for the trouble. She started at ten percent, but when I mentioned twenty-six people with nowhere to sit, she went up to fifteen. On a twelve-thousand-dollar order, that\'s not nothing.'],
                ['KWAME', 'Not bad, all things considered. Do we tell people now, or let them find out when they get here?'],
                ['MARISOL', 'Now. I\'ll send an email before lunch so nobody walks in and panics. Could you stick a sign by the elevators telling finance to head up to six?'],
                ['KWAME', 'I\'m on it.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will the company save on its invoice?', o: ['$1,800', '$1,200', '$1,500', '$10,200'] },
                { id: 'L1.8', q: 'How does Kwame feel about the supplier\'s solution?', o: ['It is faster than he had expected.', 'It comes too late to help the staff today.', 'It is not generous enough for the trouble.', 'It depends on the law firm agreeing to it.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Check-in agent', g: 'f', skin: '#f2cfb0', hair: '#b5651d', shirt: '#1f618d', style: 'bun' }, TARIQ: { name: 'Tariq', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#7d6608', style: 'short' } },
          segments: [{
            lines: [
              ['AGENT', 'Good morning. Where are you headed today?'],
              ['TARIQ', 'Morning. Winnipeg, on the ten-fifteen. Here\'s my passport.'],
              ['AGENT', 'Thank you. Go ahead and put your suitcase on the scale for me. Hmm. It\'s showing twenty-six kilos, and your fare includes one checked bag up to twenty-three.'],
              ['TARIQ', 'Twenty-six? I weighed it on my bathroom scale last night and it said twenty-two. And I didn\'t add a single thing after that. So much for that scale.'],
              ['AGENT', 'You\'d be surprised how often I hear that. So, you have a few choices. There\'s an overweight fee, which used to be sixty dollars, but it went up this month to seventy-five.'],
              ['TARIQ', 'Seventy-five? For three kilos?'],
              ['AGENT', 'I know. Or, if you have something to split it into, you can check a second bag for forty. Or you take out three kilos, and there\'s no charge at all.'],
              ['TARIQ', 'I don\'t have a second bag, but I\'ve got this backpack as my carry-on. Could I just move some things into it?'],
              ['AGENT', 'Sure, as long as the backpack stays under ten kilos and you don\'t move any liquids over a hundred millilitres into it. We don\'t usually weigh carry-ons, but the gate staff do spot checks on full flights, and this one is full.'],
              ['TARIQ', 'No liquids. The heavy stuff is a stack of textbooks and my winter boots. The books can go in the backpack, and I\'ll wear the boots instead of these sneakers. It\'s minus fifteen in Winnipeg, so I\'ll want them the minute I land.'],
              ['AGENT', 'That\'s probably your best plan. Just keep an eye on the backpack, though. If all those books push it over ten kilos and the gate checks it, you\'d pay to check it there, and that costs more than doing it here.'],
              ['TARIQ', 'Good point. Maybe I\'ll leave the biggest textbook in the suitcase and put my heavy sweater in the backpack instead.'],
              ['AGENT', 'Smart. Could you step over to that table by the window to repack? That way I can keep the line moving. When you\'re done, come straight back to me. You won\'t have to queue again.'],
              ['TARIQ', 'Perfect. Thanks, I really appreciate it.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is Tariq\'s problem?', o: ['His checked luggage is over his allowance.', 'His carry-on is over the ten-kilo limit.', 'His fare does not include a checked bag.', 'His backpack contains too many liquids.'] },
              { id: 'L2.2', q: 'What does Tariq conclude about the difference in weight?', o: ['The scale he used at home gives false readings.', 'He added more things after weighing the bag.', 'The scale at the airport needs repair.', 'His textbooks are heavier than he thought.'] },
              { id: 'L2.3', q: 'If Tariq had a second bag, how much less would he pay than the overweight fee?', o: ['$35', '$20', '$40', '$75'] },
              { id: 'L2.4', q: 'Why does Tariq choose to wear his boots?', o: ['The weather at his destination calls for them.', 'They do not fit inside his backpack.', 'The agent tells him that he must.', 'His sneakers are too heavy to pack.'] },
              { id: 'L2.5', q: 'Why does Tariq change what he puts in the backpack?', o: ['To avoid a possible extra charge at the gate', 'To keep his liquids under the limit', 'To make room for his winter boots', 'So the agent can weigh it again now'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#7a4b31', hair: '#1d1410', shirt: '#7d3c98', style: 'curly' }, MATEO: { name: 'Mateo Fernandes', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#2874a6', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Mateo Fernandes, a third-year apprentice electrician. Mateo, thanks for coming in. How did you end up in the trades?'],
              ['MATEO', 'Thanks for having me. Honestly, it wasn\'t the plan. After high school I worked in a phone store for six years. I liked the customers, but I never felt like I was actually building anything. Then I spent a weekend helping a friend, who\'s an electrician, wire his garage, and I was hooked.'],
              ['HOST', 'So how does an apprenticeship actually work?'],
              ['MATEO', 'Most of the learning happens on the job. You work under a licensed electrician, what we call a journeyperson, and you log your hours. Then about once a year you go back to college for roughly eight weeks of classroom training. From start to finish it\'s around four years.'],
              ['HOST', 'Four years. That sounds like a long time.'],
              ['MATEO', 'It felt long in my first year, honestly. I was earning less than I had at the phone store, and I almost went back.'],
              ['HOST', 'So what kept you going?'],
              ['MATEO', 'The way the pay works, mostly. You start at about half of a journeyperson\'s wage, and it goes up every time you pass a level. And there\'s no tuition piling up, so I won\'t finish with a huge student loan hanging over me.'],
              ['HOST', 'What surprised you most?'],
              ['MATEO', 'Honestly, the math. People assume the trades are for kids who didn\'t do well in school, but I use formulas every single day. And the electrical code book is about as thick as an old phone book. You have to read it really carefully, because one mistake can start a fire.'],
              ['HOST', 'What\'s the toughest part of the job?'],
              ['MATEO', 'Probably winter. On a new construction site, the heat usually isn\'t on yet, so you\'re pulling wire in a freezing building at seven in the morning, and your fingers go numb. Good gloves help. You get used to it. Mostly.'],
              ['HOST', 'What would you say to someone who\'s thinking about it?'],
              ['MATEO', 'Don\'t just apply blindly. Take a short pre-apprenticeship course, or ask to shadow someone for a day. You\'ll find out pretty fast whether you like the work. And look for a patient mentor. Mine has made all the difference.'],
              ['HOST', 'And where do you see yourself in five years?'],
              ['MATEO', 'Licensed, hopefully, and specializing in solar installations. I think the demand is only going to grow.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why did Mateo leave his previous job?', o: ['He wanted work where he could make something.', 'He did not enjoy dealing with customers.', 'His friend offered him a job as an electrician.', 'He wanted to earn a higher wage.'] },
              { id: 'L3.2', q: 'How is an apprenticeship mainly organized?', o: ['Mostly paid work, plus yearly classroom blocks', 'Mostly classroom study, plus summer jobs', 'Four years of full-time college courses', 'Eight weeks of training, then a licence'] },
              { id: 'L3.3', q: 'What advantage of an apprenticeship does Mateo point out?', o: ['He can qualify without owing money for his schooling.', 'He earns the same wage as a journeyperson.', 'He earns more than he did at the phone store.', 'He can finish his training in eight weeks.'] },
              { id: 'L3.4', q: 'Why does Mateo mention the electrical code book?', o: ['To challenge a common belief about the trades', 'To explain why he did poorly in school', 'To complain about the cost of course materials', 'To describe how most electrical fires begin'] },
              { id: 'L3.5', q: 'What is Mateo\'s attitude toward working in winter?', o: ['It is unpleasant, but he has mostly adjusted.', 'It may be the reason he leaves the trade.', 'It is easy once you buy good gloves.', 'It is less difficult than the math.'] },
              { id: 'L3.6', q: 'What does Mateo recommend to people considering the trade?', o: ['Test whether they enjoy the work before committing', 'Apply to as many programs as possible at once', 'Choose a mentor who also teaches at a college', 'Plan to specialize in solar work from the start'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#e3b28b', hair: '#555555', shirt: '#2e4053', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Harbourton city council has approved new rules for short-term rentals, the homes and suites that visitors book online for a few nights at a time. The rules take effect on April first.'],
              ['NEWS', 'Under the new bylaw, owners may rent out a property for short stays only if it is their principal residence, meaning the place where they live for most of the year. Investors who own several units will no longer be allowed to list them for short stays.'],
              ['NEWS', 'Every host will also need a business licence. The fee was first proposed at one hundred dollars a year, but council raised it to two hundred and fifty to help pay for enforcement. The licence number must appear in every online listing.'],
              ['NEWS', 'Councillor Denise Arsenault, who led the change, estimates that about four hundred homes in the city are currently rented to visitors full time. She stresses that the council is not against tourism.'],
              ['NEWS', 'Instead, she says, the goal is to return some of those homes to residents, at a time when fewer than one in a hundred rental apartments in Harbourton is vacant.'],
              ['NEWS', 'Not everyone is pleased. Raymond Choi rents out the basement suite of the house he lives in, and he says the income helps him pay his mortgage. He supports limits on investors, but he worries that the yearly fee and the paperwork will push small hosts like him out of the market.'],
              ['NEWS', 'Hosts who break the rules could be fined up to one thousand dollars per day. The city says it will hire two more inspectors, bringing its bylaw team to five.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Limits on who may rent homes to visitors', 'A shortage of hotel rooms for tourists', 'A new tax on long-term rental apartments', 'Rising mortgage costs for local homeowners'] },
              { id: 'L4.2', q: 'Under the bylaw, who can no longer offer short stays?', o: ['Owners renting out homes they do not live in', 'Owners renting out a suite in their own home', 'Hosts who rent for more than a few nights', 'Hosts who post their listings online'] },
              { id: 'L4.3', q: 'What is Councillor Arsenault\'s main reason for the rules?', o: ['To make more homes available to residents', 'To reduce the number of tourists in the city', 'To raise money through the new licence fees', 'To protect local hotels from online competition'] },
              { id: 'L4.4', q: 'What can be inferred about Raymond Choi?', o: ['His suite meets the residence requirement.', 'He will have to stop renting his suite in April.', 'He owns several rental units in the city.', 'He opposes any limits on short-term rentals.'] },
              { id: 'L4.5', q: 'How will the city enforce the new rules?', o: ['By taking on extra staff to check compliance', 'By asking neighbours to report problem rentals', 'By removing listings that show no licence', 'By inspecting every home before April'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Grade 7: Term 1 conferences', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { TEACHER: { name: 'Ms. Desjardins (teacher)', g: 'f', skin: '#f0c9a6', hair: '#4a3020', shirt: '#34495e', style: 'long' }, AMARA: { name: 'Amara (mother)', g: 'f', skin: '#5c3a24', hair: '#0f0a07', shirt: '#c0392b', style: 'curly' }, FEMI: { name: 'Femi (father)', g: 'm', skin: '#4a2e1c', hair: '#0f0a07', shirt: '#117a65', style: 'bald' } },
          segments: [{
            lines: [
              ['TEACHER', 'Thanks for coming in, both of you. Let me start with the good news. Tobi\'s science project on wind turbines was one of the strongest in the class. He got ninety-two percent, and his explanation to the class was really clear.'],
              ['AMARA', 'Oh, that\'s wonderful. He spent weeks on that thing in our garage.'],
              ['TEACHER', 'It showed. Math is where I\'m concerned, though. His mark has slipped from a B-plus in October to a C. And it isn\'t that he doesn\'t understand the material. On tests, he does fine. The problem is homework. He\'s missing five of the last twelve assignments.'],
              ['AMARA', 'Five? But every night he tells us he finished his homework at school.'],
              ['FEMI', 'I think I know what\'s going on. He has basketball practice four nights a week now. By the time he\'s home and has eaten, it\'s nine o\'clock. Honestly, maybe he needs to take a break from basketball until his marks come back up.'],
              ['TEACHER', 'I understand, and of course that\'s your decision. But I\'d be careful. Basketball is a big part of why he enjoys coming to school. On game days, he\'s actually one of the most focused students in my class.'],
              ['FEMI', 'Hmm. So what would you suggest instead?'],
              ['TEACHER', 'We run a free homework club in the library on Tuesdays and Thursdays, from three-fifteen to four-fifteen. There\'s always a teacher there to help. His practice doesn\'t start until five, so he could manage both.'],
              ['AMARA', 'That could work. But how would we know whether he\'s actually doing the work?'],
              ['TEACHER', 'Every Friday, I post the coming week\'s assignments on the school\'s online portal, with due dates. It also shows what\'s been handed in. If you check it on the weekend, there won\'t be any surprises.'],
              ['AMARA', 'Then I\'ll check it every Sunday night, and we\'ll sit down with him and plan out the week.'],
              ['FEMI', 'All right. We\'ll keep basketball for now. But if his math mark hasn\'t improved by the February report card, we\'ll have to revisit it.'],
              ['TEACHER', 'That sounds fair. Let\'s book another meeting in January to see how it\'s going. And I\'ll let Tobi know we spoke, so he doesn\'t feel anything is happening behind his back.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To review Tobi\'s progress and agree on a plan', 'To choose a topic for Tobi\'s next science project', 'To discuss moving Tobi to another math class', 'To complain about the basketball practice schedule'] },
              { id: 'L5.2', q: 'What does the teacher suggest about Tobi\'s ability in math?', o: ['It is better than his current mark shows.', 'It has not kept up with the new material.', 'It is stronger in homework than on tests.', 'It is behind most of the class this term.'] },
              { id: 'L5.3', q: 'What can be inferred from Amara\'s reaction to the missing assignments?', o: ['Tobi has been misleading his parents.', 'The teacher had already emailed the parents.', 'Amara checks Tobi\'s homework every night.', 'Tobi left his finished work at home.'] },
              { id: 'L5.4', q: 'Why does Femi think Tobi is falling behind?', o: ['He has little free time left after practice.', 'He finds the math homework too difficult.', 'He spent too long on his science project.', 'He would rather watch basketball at home.'] },
              { id: 'L5.5', q: 'What is the teacher\'s attitude toward Femi\'s idea?', o: ['She accepts it is his choice but advises against it.', 'She agrees that basketball should stop for now.', 'She insists that Tobi must stay on the team.', 'She thinks Tobi should make the decision alone.'] },
              { id: 'L5.6', q: 'Why is the homework club a practical option for Tobi?', o: ['It finishes before his practice begins.', 'It is held on his days off from practice.', 'It is run by his basketball coach.', 'It replaces two practices each week.'] },
              { id: 'L5.7', q: 'What will Amara do each week?', o: ['Look over Tobi\'s upcoming work online and organize it with him', 'Email the teacher to ask about missing work', 'Attend the homework club together with Tobi', 'Post Tobi\'s assignments on the school portal'] },
              { id: 'L5.8', q: 'Under what condition might Tobi have to stop playing basketball?', o: ['His next report card shows no progress in math.', 'The January meeting does not go well.', 'He misses the homework club on Tuesdays.', 'He hands in fewer than twelve assignments.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Volunteer hours to graduate?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#943126', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Some Canadian high schools already require students to complete a set number of community service hours before they can graduate, and several more school boards are now considering the idea. The debate has revealed sharp differences of opinion.'],
              ['NARR', 'Supporters say the requirement connects teenagers with their communities in ways a classroom cannot.'],
              ['NARR', 'Leila Haddad, who coordinates volunteers at a large food bank, says that many students who first arrive simply to finish their forty required hours keep coming back long after the hours are done.'],
              ['NARR', 'She adds that volunteering gives young people references and real experience to list on their first job applications. That matters most, she says, for students whose families have no connections in the working world.'],
              ['NARR', 'Haddad\'s second argument is about who signs up. Before her board brought in its requirement, she says, nearly all her teenage volunteers came from the same few private schools. Now they come from every part of the city, and many are the first in their family to volunteer.'],
              ['NARR', 'Critics argue that compulsory volunteering defeats its own purpose. Professor Graham Whitfield, who studies youth employment, says that once service is required, many students treat it as a box to tick, choosing whatever is quickest rather than something that genuinely interests them.'],
              ['NARR', 'He points to a survey of graduates in a province that has had the rule for over twenty years. Adults who had been required to volunteer in high school were no more likely to volunteer today than adults who had grown up in provinces without the rule.'],
              ['NARR', 'He also raises a question of fairness. Students who work part-time to help support their families, or who look after younger brothers and sisters, may struggle to find spare hours, while students from wealthier homes can fit them in easily.'],
              ['NARR', 'Whitfield admits that the food bank\'s experience is real, and that some students do discover a lasting interest. But he believes most of those students would have found their way to volunteering anyway, if schools simply made opportunities easier to find.'],
              ['NARR', 'Instead of a requirement, he would rather see schools recognize volunteering through awards or optional credits, so that students who choose to serve are rewarded and no one is penalized for having less free time.'],
              ['NARR', 'Haddad is not convinced. Awards, she says, mostly go to students who already volunteer, the group that needs no encouragement. As for scheduling, she argues the problem can be solved by letting students spread their hours over four years, including summers.'],
              ['NARR', 'She does accept one of Whitfield\'s points. A placement chosen only because it is quick, such as handing out flyers for a single afternoon, teaches very little, and she would like schools to approve placements in advance.'],
              ['NARR', 'The local school board says it will gather feedback from students and parents this spring. If it approves the rule, it would apply only to students entering grade nine next fall, not to those already in high school.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether community service should be a condition of graduating', 'How food banks attract and keep young volunteers', 'Why teenagers find it hard to get part-time work', 'Whether volunteers should be chosen from private schools'] },
              { id: 'L6.2', q: 'What does Haddad\'s comment about returning students suggest?', o: ['Required service can grow into real interest.', 'Students rarely finish their required hours.', 'Food banks rely mainly on student volunteers.', 'Students prefer volunteering to paid work.'] },
              { id: 'L6.3', q: 'According to Haddad, how has the requirement changed her group of teenage volunteers?', o: ['They now come from a much wider range of backgrounds.', 'They now come mostly from a few private schools.', 'They tend to choose the quickest placements.', 'They are more likely to keep volunteering as adults.'] },
              { id: 'L6.4', q: 'What does Whitfield\'s survey of graduates suggest?', o: ['Required service does not build a lasting habit.', 'People from that province volunteer more as adults.', 'Wealthier students complete their hours more easily.', 'Most students never finish their required hours.'] },
              { id: 'L6.5', q: 'What fairness problem does Whitfield describe?', o: ['Family duties leave some students with less free time.', 'Rural students live too far from volunteer sites.', 'Wealthier students are given the easier volunteer placements.', 'Older students are required to do more hours.'] },
              { id: 'L6.6', q: 'On which point do Haddad and Whitfield partly agree?', o: ['Some quick, easy placements offer students little value.', 'Awards would encourage new students to volunteer.', 'Hours should be spread over all four years.', 'Students should earn optional credits instead.'] }
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
          passage: '<h3>Message</h3><p>Hi Ahmed,</p><p>I hope you and Farah are enjoying the summer. I am writing because a few of us on Larch Crescent have been talking about holding a block party this year, and I am hoping you will help me get it off the ground.</p><p>The plan is to close the street on Saturday, August 16, from noon until six. If the weather is bad, we will move everything to the following Saturday. To close the street, we need a permit from the city. The application costs only forty dollars, but it must include signatures from at least sixty percent of the households on the street. There are twenty-five homes on Larch, so we need signatures from fifteen households, one per home. So far nine households have signed, and the form is due at City Hall by July 25.</p><p>You may remember the potluck we tried in the park two summers ago. Everyone was generous, but we ended up with eleven desserts and almost nothing else. This time I will put a sign-up sheet on my porch so that people can choose a category: salads, main dishes, desserts or drinks.</p><p>The city has two other conditions. A lane at least four metres wide must stay open down the middle of the road the whole time so that fire trucks and ambulances can get through, which means tables and games will have to go on driveways and along the curbs. We also have to take down the barriers by seven, so the cleanup crew needs to start no later than six. On top of that, I would like us to keep the music low after four, because the Lindqvists at number 3 have a newborn who usually naps late in the afternoon.</p><p>Now for my requests. First, could you and Farah sign the petition? I will drop it off on Thursday evening. Second, I remember the big gas barbecue you used for your son\'s graduation. Would you be willing to lend it for the afternoon? I will make sure someone who knows what they are doing is in charge of it. Finally, you have already met the two new families at the end of the street, and I have not yet had a chance to introduce myself. Would you mind mentioning the party to them?</p><p>I would also love some ideas for the children. I was thinking about a sidewalk chalk contest, but I am open to anything.</p><p>Thanks so much,<br>Rosalind (number 14)</p>',
          questions: [
            { id: 'R1.1', q: 'If the weather is poor on August 16, the party will', o: ['take place on August 23 instead.', 'move to the park on the same day.', 'be called off until next summer.', 'begin later in the afternoon.'] },
            { id: 'R1.2', q: 'According to Rosalind, tables will have to stay off the centre of the road because', o: ['emergency vehicles must be able to pass.', 'the permit does not allow tables or games.', 'the cleanup crew begins its work at six.', 'the family at number 3 has asked for quiet.'] },
            { id: 'R1.3', q: 'Rosalind mentions the earlier potluck to explain why she', o: ['is changing how the meal will be planned.', 'would rather hold the party on the street.', 'needs a permit from the city this year.', 'would like to borrow a barbecue.'] },
            { id: 'R1.4', q: 'Rosalind probably mentions who will look after the barbecue in order to', o: ['reassure Ahmed about lending it.', 'suggest that Ahmed\'s son take charge.', 'explain why she needs it all afternoon.', 'avoid paying for the gas it uses.'] },
            { id: 'R1.5', q: 'Rosalind most likely asks Ahmed to approach the new families because', o: ['he already knows them and she does not.', 'they live right next door to him.', 'they have asked her about the party.', 'their children want to join a contest.'] },
            { id: 'R1.6', q: 'The main purpose of Rosalind\'s message is to', o: ['enlist a neighbour\'s help with an event.', 'invite a neighbour to a potluck in the park.', 'complain about the cost of a city permit.', 'welcome new families to the street.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Rosalind,</p><p>What a great idea! Farah and I will happily sign. We are home on Thursday evening, so [[R1.7]] whenever it suits you. With our household on the list, you will only need [[R1.8]] more before the deadline.</p><p>You are welcome to the barbecue, but to be honest, I would rather [[R1.9]] myself. It can be tricky to light, and I know its habits. Farah also says we can lend you folding tables and chairs if you need more places for people to sit. We have six of each in the garage, and since the middle of the road has to stay clear, we could set some of them up on our driveway.</p><p>By coincidence, I spoke to both new families yesterday. The Kowalskis have three young children, so they loved the [[R1.10]] and even offered to buy the supplies. The other family, the Osei-Martins, said they will bring a big salad.</p><p>One concern: our daughter is getting married on August 23, so if the party is moved because of rain, we [[R1.11]]. Let us hope for sunshine!</p><p>Ahmed</p>',
          blanks: [
            { id: 'R1.7', o: ['just knock on our door', 'email it to us instead', 'send it to City Hall', 'bring it to the barbecue'] },
            { id: 'R1.8', o: ['five', 'six', 'four', 'fifteen'] },
            { id: 'R1.9', o: ['take care of it', 'buy a new one', 'leave it at home', 'lend it to my son'] },
            { id: 'R1.10', o: ['chalk drawing idea', 'dessert table idea', 'sign-up sheet idea', 'rain date idea'] },
            { id: 'R1.11', o: ['will have to miss it', 'can host it in our yard', 'will bring extra desserts', 'will apply for a new permit'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following schedule. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Eastwood Community College: Fall Evening Courses</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Course</th><th>Day and time</th><th>Starts</th><th>Weeks</th><th>Tuition</th><th>Materials</th></tr></thead><tbody>' +
            '<tr><td>Conversational French I</td><td>Monday 6:30 to 8:30 p.m.</td><td>Sept. 15</td><td>10</td><td>$220</td><td>$35 (book)</td></tr>' +
            '<tr><td>Spreadsheets for Small Business</td><td>Monday 7:00 to 9:00 p.m.</td><td>Sept. 15</td><td>6</td><td>$180</td><td>None</td></tr>' +
            '<tr><td>Introduction to Bookkeeping</td><td>Tuesday and Thursday 7:00 to 9:00 p.m.</td><td>Sept. 16</td><td>8</td><td>$340</td><td>None</td></tr>' +
            '<tr><td>Digital Photography Basics</td><td>Wednesday 6:00 to 9:00 p.m.</td><td>Sept. 17</td><td>6</td><td>$260</td><td>$40 (lab fee)</td></tr>' +
            '<tr><td>Home Renovation Skills</td><td>Thursday 6:30 to 9:30 p.m.</td><td>Sept. 18</td><td>8</td><td>$310</td><td>$75 (supplies)</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Early registration: register on or before August 31 and take 10% off tuition. The discount does not apply to materials.</li><li>Seniors (65 and over) pay 50% of tuition. This cannot be combined with the early registration discount.</li><li>A course with fewer than 8 registered students one week before its start date will be cancelled, and all fees will be refunded.</li><li>Parking: $5 per evening, or $60 for a term pass.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dana,</p><p>I finally went through Eastwood\'s fall evening courses. My first choice was bookkeeping for the catering business, but since I work late every Tuesday, I have decided on [[R2.1]] instead. It is only six weeks long, and it should still help with our invoices. The downside is that I will have to give up on [[R2.2]] this fall, because the two class times overlap.</p><p>I am registering this week, well before the end of August, so my tuition will come to [[R2.3]]. I will drive, and since the course is so short, I will [[R2.4]].</p><p>Your mom asked me about Digital Photography. Since she is 68, she qualifies for the seniors\' rate, so including the lab fee she will pay [[R2.5]].</p><p>Talk soon,<br>Lena</p>',
          blanks: [
            { id: 'R2.1', o: ['Spreadsheets for Small Business', 'Introduction to Bookkeeping', 'Home Renovation Skills', 'Digital Photography Basics'] },
            { id: 'R2.2', o: ['French', 'bookkeeping', 'photography', 'renovation'] },
            { id: 'R2.3', o: ['$162', '$180', '$144', '$171'] },
            { id: 'R2.4', o: ['pay for parking each evening I attend', 'buy a term pass for parking', 'park for free as a registered student', 'share your mom\'s Wednesday parking pass'] },
            { id: 'R2.5', o: ['$170', '$157', '$130', '$300'] }
          ],
          questions: [
            { id: 'R2.6', q: 'If only seven students have registered for Digital Photography Basics by September 10, those students will', o: ['get all of their money back, lab fee included.', 'get their tuition back but lose the lab fee.', 'be moved to the same course next term.', 'have to pay more to keep the class running.'] },
            { id: 'R2.7', q: 'Lena most likely thinks a parking pass is poor value for her because', o: ['her course is short, so she will park on only a few evenings.', 'the pass cannot be used on Monday evenings.', 'passes are sold only to students who register early.', 'the seniors\' rate does not apply to parking.'] },
            { id: 'R2.8', q: 'A 70-year-old who registers for Conversational French I on August 20 can', o: ['claim only one of the two tuition discounts.', 'combine both discounts for 60% off tuition.', 'get both discounts on the tuition and the book.', 'pay the seniors\' rate for the book as well.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>How Habits Take Hold</h3><p><b>A.</b> Psychologists usually describe a habit as a simple loop. First comes a cue, such as a time of day, a place or a feeling. The cue triggers a routine, which is the behaviour itself, and the routine is followed by a reward that makes the brain more likely to repeat the sequence next time. Over many repetitions, control of the behaviour gradually shifts to parts of the brain that work largely outside conscious awareness. This is efficient: one frequently quoted estimate suggests that around forty percent of what people do each day is done out of habit, which leaves attention free for decisions that genuinely require it.</p><p><b>B.</b> A popular claim holds that a new habit takes twenty-one days to form. The figure appears to trace back to a 1960s book by a surgeon who noticed that patients needed about three weeks to adjust to changes in their appearance, an observation that had nothing to do with habits. When researchers in London followed ninety-six volunteers who were each trying to adopt a daily behaviour of their own choosing, such as drinking a glass of water with lunch, the average time before it felt automatic was sixty-six days, with individuals ranging from eighteen days to more than eight months. Most participants picked something related to eating, drinking or exercise. Encouragingly, missing an occasional day made little difference to the final result.</p><p><b>C.</b> Because willpower is unreliable, experts recommend designing habits that demand as little of it as possible. One approach is to attach a new behaviour to an existing one: "After I pour my morning coffee, I will write in my journal for two minutes." Another is to reduce the effort needed to begin. Someone who wants to run in the morning might lay out running clothes the night before, while a person hoping to eat better might keep washed fruit at eye level in the fridge. Starting with a version of the habit so small that it seems almost pointless can also help, since consistency matters more than intensity in the early weeks. Some people also tick off each day on a calendar, although researchers have not yet shown whether this improves the outcome.</p><p><b>D.</b> Breaking an unwanted habit is generally harder than building a new one, and many of the habits people most want to change, such as nail biting, began when they were young. Research suggests that old habits are not erased but remain stored, ready to return, which explains why people often slip back into them during periods of stress or fatigue. Rather than relying on resistance alone, specialists advise replacing the routine while keeping the cue and the reward, for example taking a short walk instead of snacking when work becomes frustrating. Adding obstacles also works: leaving a phone in another room makes late-night scrolling far less tempting.</p>',
          questions: [
            { id: 'R3.1', q: 'A well-known number about habit formation came from an observation unrelated to habits.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'At first, doing a tiny amount regularly may matter more than doing a lot.', fixed: true, a: 'C' },
            { id: 'R3.3', q: 'Behaviour that runs automatically allows the mind to focus on other choices.', fixed: true, a: 'A' },
            { id: 'R3.4', q: 'Being tired can lead people back to behaviour they had tried to give up.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'People who record their progress in a journal are more likely to succeed.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Exercise habits took longer to become automatic than eating habits.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'Habits picked up in childhood are the hardest ones to break.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'An emotion can be the signal that sets off a habitual behaviour.', fixed: true, a: 'A' },
            { id: 'R3.9', q: 'Connecting a new action to an established part of the day is recommended.', fixed: true, a: 'C' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Can Electric Cars Handle a Canadian Winter?</h3><p>Every winter, the same question comes up in online forums and around kitchen tables: can an electric car really cope with a Canadian winter? Sales of electric vehicles have climbed steadily in recent years, yet many drivers in colder regions still hesitate. Prices have fallen as more models reach the market, so for many buyers the price is no longer the main concern. The cold is. The answer, it turns out, depends a great deal on who is driving, and where.</p><p>Dr. Yusuf Rahimi, an energy researcher who has tested vehicles at temperatures as low as minus thirty, believes the fears are often exaggerated. "Yes, batteries lose range in the cold. At minus twenty, a typical car might travel about thirty percent less than it does in summer," he explains. "But most Canadians drive less than fifty kilometres a day. Even with that loss, they are well within the range of almost any model." He points out that newer cars use heat pumps, which warm the cabin far more efficiently than older heaters, and that owners can heat the car while it is still plugged in, so the battery is not drained before the trip begins. Rahimi adds that electric cars have one surprising winter advantage: they start instantly, without the struggle of a cold engine.</p><p>Colleen Mackay sees things differently. She works as a home-care nurse in rural northern Manitoba and drives about two hundred kilometres on a typical day, often on roads where the nearest charging station is an hour away. "On a minus-thirty morning, I cannot afford to wonder whether I will make it home," she says. Mackay also notes that a cold battery accepts a charge more slowly, so a stop that takes thirty minutes in July can take more than an hour in January. For drivers like her, she argues, a hybrid, which can fall back on gasoline, is the more realistic choice for now.</p><p>Arnaud Tremblay, who has run a repair garage in Thunder Bay for twenty years and now services both gasoline and electric cars, thinks the debate often misses the point. "People argue about batteries, but most of the winter trouble I see comes from tires," he says. Electric cars are heavier than gasoline cars of a similar size, he explains, so they need good winter tires to stop safely on ice, and those tires wear out faster. He also warns new owners not to judge their car by its first cold snap. "The range display adjusts to how you drive. Give it a couple of weeks before you panic." In his view, either kind of vehicle copes with winter if the owner prepares for it.</p><p>Both Rahimi and Mackay agree that location matters. Rahimi admits that people living in apartments, without a parking spot near an electrical outlet, face a real challenge, since charging overnight at home is what makes winter ownership easy. Mackay, for her part, says she would gladly consider an electric car once charging stations in the north become more common. "I am not against the technology," she says. "I just need it to reach the places where I work."</p>',
          questions: [
            { id: 'R4.1', q: 'The writer most likely mentions falling prices in order to show that', o: ['winter weather is now the chief obstacle.', 'electric cars now cost less than hybrids.', 'sales have climbed mainly in warm regions.', 'forums focus mostly on the cost of models.'] },
            { id: 'R4.2', q: 'Dr. Rahimi\'s attitude toward winter range loss is that it is', o: ['real but rarely serious for typical drivers.', 'a problem that newer batteries have removed.', 'a danger that most owners underestimate.', 'serious enough to rule out rural buyers.'] },
            { id: 'R4.3', q: 'Rahimi suggests warming the car before unplugging it because', o: ['driving power is not spent on heating.', 'heat pumps work only while connected.', 'the engine turns over more easily when warm.', 'a cold battery stores extra charge.'] },
            { id: 'R4.4', q: 'Mackay most likely mentions charging times in order to show that in winter', o: ['stops on long trips take far more time.', 'charging stations are poorly maintained.', 'hybrids recharge faster than electric cars.', 'summer driving can be just as difficult.'] },
            { id: 'R4.5', q: 'Tremblay would most likely agree that', o: ['careful preparation matters more than the type of car.', 'battery range causes most winter breakdowns he sees.', 'electric cars are too heavy for icy roads in the north.', 'owners should judge range during the first cold spell.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I live in Edmonton and my daily commute is roughly twenty kilometres, so if Dr. Rahimi is right, losing [[R4.6]] of my range on the coldest mornings would barely matter. I was also pleased to read that an electric car [[R4.7]], because my old sedan often refuses to start in January.</p><p>On the other hand, I rent an apartment and park in an outdoor lot [[R4.8]], which is exactly the situation Rahimi admits is difficult. Mr. Tremblay\'s point surprised me most. I had assumed the battery would be my biggest worry, but he made me realize I should budget for [[R4.9]] as well.</p><p>My sister is in a different position. Like Ms. Mackay, she covers long distances in the north for her job, so for now I think a car that [[R4.10]] is the sensible choice for her. Still, if more chargers are built along her routes, she may well change her mind.</p>',
          blanks: [
            { id: 'R4.6', o: ['nearly a third', 'roughly half', 'nearly a tenth', 'almost all'] },
            { id: 'R4.7', o: ['fires up without delay', 'never needs charging', 'heats up more slowly', 'charges faster in winter'] },
            { id: 'R4.8', o: ['with no power outlets', 'beside a heat pump', 'next to a charging station', 'with heated spaces'] },
            { id: 'R4.9', o: ['replacing winter tires sooner', 'a spare battery pack each year', 'a larger cabin heater', 'extra charging time'] },
            { id: 'R4.10', o: ['can also run on gasoline', 'heats the cabin with a heat pump', 'starts instantly on cold mornings', 'charges quickly in any weather'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Since the spring, several large potholes have appeared on your street. You reported them through the city\'s online form in May and received an automatic reply, but nothing has been fixed. Last week a neighbour\'s child fell off her bike after hitting one. A local news story says the city is short of road crews this year and has a long list of repairs waiting.</p><p>Write an email to your city councillor. In your email, do the following:</p><ul><li>Describe the potholes and what you have already done to report them.</li><li>Explain how they are affecting people on your street, including the recent accident.</li><li>Suggest what the city could do now, given that it cannot repair every road right away.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your public library has received extra funding for next year, but only enough for one new service. It is asking members which one it should choose. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Extend opening hours to 10:00 p.m. on weekday evenings, so that students and working adults can study and borrow books later. To pay for the extra staff, the library would close on Sunday mornings.' },
            { key: 'B', label: 'Option B', text: 'Start free weekend programs for children, such as story time, science clubs and reading help. The programs would fill the meeting rooms, so adult groups could no longer book them on Saturdays.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood that you like to visit, and explain why.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A close friend tells you that she has been feeling very stressed at work. She has too many tasks, often stays until eight and is sleeping badly. She cannot afford to quit, and her manager has just asked her to lead a new project starting next month. Give her advice on how to deal with the situation.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you tried a new food or a new activity for the first time. What was it, who or what convinced you to try it, how did you feel, and would you do it again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/H/scene.jpg" alt="An outdoor skating rink in a city park on a winter afternoon">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/H/scene.jpg" alt="An outdoor skating rink in a city park on a winter afternoon">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your partner want to take a weekend course together this winter. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Cooking class', image: '<img src="tests/img/H/opt_A.jpg" alt="Photo: Cooking class">', facts: ['6 Saturday mornings, 9:00 to 12:00', '$280 per person', 'Ingredients included; take home what you cook', 'Downtown: 40-minute drive, $12 parking each time'] },
            { key: 'B', title: 'Photography course', image: '<img src="tests/img/H/opt_B.jpg" alt="Photo: Photography course">', facts: ['4 Sundays, 1:00 to 5:00 p.m.', '$190 per person', 'Bring your own camera or phone', '2 of the 4 classes are outdoor walks, in any weather'] }
          ],
          third: { key: 'C', title: 'Dance lessons', image: '<img src="tests/img/H/opt_C.jpg" alt="Photo: Dance lessons">', facts: ['8 Friday evenings, 7:00 to 8:30', '$150 per couple', 'No experience needed', 'Ends with a dance party'] },
          persuade: 'Your partner suggests the dance lessons instead. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You and a coworker are presenting a project to your manager on Monday. Your coworker promised to finish his half of the slides by Thursday, but it is now Friday afternoon and he has not started. He says he has been too busy with other work.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your coworker. Explain why he must finish his part before Monday.</p><p><b>Option B:</b> Talk to your manager. Explain the situation and ask to move the presentation to later in the week.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: 'Your city is considering closing three downtown streets to private cars every Saturday and Sunday from May to October. Some shop and restaurant owners expect more people on foot and more outdoor seating. Others fear losing customers who drive in from the suburbs, and some residents worry about parking on nearby streets. The city has asked for public comments. Do you support the plan? Explain your reasons.' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are shopping for winter clothes and see this unusual coat. Your friend is planning a three-night winter camping trip and has about $300 to spend on new gear. Call your friend. Describe the coat and explain whether you think your friend should buy it.', image: '<img src="tests/img/H/object.jpg" alt="An unusual winter coat on display in a store">' }
      ]
    }
  });
})();
