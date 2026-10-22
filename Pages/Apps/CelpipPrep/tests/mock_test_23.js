/* Rowe CELPIP Mock Exam: Test 23 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/23/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '23',
    title: 'Mock Test 23',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { DALIA: { name: 'Dalia', g: 'f', skin: '#c68642', hair: '#1d1410', shirt: '#cb4335', style: 'bun' }, CYRUS: { name: 'Cyrus', g: 'm', skin: '#e8c3a0', hair: '#3b2a20', shirt: '#2471a3', style: 'short' } },
        segments: [{
          lines: [
            ['DALIA', 'Cyrus, that sign says two-hour parking until six. We parked at half past two, and the movie\'s nearly three hours long.'],
            ['CYRUS', 'They hardly ever check on a Sunday, though. I\'ve parked here all afternoon before.'],
            ['DALIA', 'Maybe, but last time my sister tried that, she came back to a seventy-dollar ticket. The garage around the corner is only eight dollars for the evening.'],
            ['CYRUS', 'Okay, okay. Eight dollars beats seventy. I\'ll move it while you grab the tickets.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Cyrus agree to move the car?', o: ['Paying a little now seems wiser than risking a fine.', 'The parking sign says the street closes at six.', 'Dalia\'s sister needs the parking space later.', 'The garage is closer to the movie theatre.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { DELIA: { name: 'Delia', g: 'f', skin: '#f2cfb0', hair: '#6b4a2b', shirt: '#148f77', style: 'long' }, CONRAD: { name: 'Conrad', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#7d6608', style: 'bald' } },
          segments: [
            {
              lines: [
                ['DELIA', 'Conrad, have you got a minute? I was double-checking the entry rules for our trip, and I think we\'ve got a problem. It\'s my passport.'],
                ['CONRAD', 'What about it? You renewed it, didn\'t you?'],
                ['DELIA', 'Five years ago, yes. It\'s good until the end of March. But the airline\'s website says you need at least six months left on it when you land, or they won\'t even let you board.'],
                ['CONRAD', 'We fly out December twelfth. So, end of March, that\'s what, three and a half months?'],
                ['DELIA', 'Barely. I\'d be turned away at the gate, and the tickets are non-refundable. We\'re talking almost three thousand dollars.'],
                ['CONRAD', 'Okay, deep breath. Mine\'s fine, I checked in the summer. How long does a renewal take?'],
                ['DELIA', 'By mail, twenty business days, and that\'s if nothing goes sideways. Today\'s the eighteenth of November.'],
                ['CONRAD', 'So it might not even show up before we leave. That\'s cutting it far too fine. I wouldn\'t bet three thousand dollars on the mail.']
              ],
              questions: [
                { id: 'L1.1', q: 'What problem has Delia discovered?', o: ['Her passport will not be valid for long enough.', 'Her passport expired at the end of March.', 'The airline has changed the date of their flight.', 'Conrad\'s passport also needs to be renewed.'] },
                { id: 'L1.2', q: 'Why is Delia especially worried?', o: ['The money spent on the flights cannot be recovered.', 'Their tickets would cost more if they changed them.', 'The airline website does not list the exact rules.', 'Conrad would have to travel on the trip by himself.'] },
                { id: 'L1.3', q: 'Why does Conrad reject renewing by mail?', o: ['It may not be ready before they fly.', 'It costs more than applying in person.', 'He would have to renew his own as well.', 'It takes twenty weeks to be processed.'] }
              ]
            },
            {
              lines: [
                ['CONRAD', 'What about going to the passport office in the city in person? They do faster service there, don\'t they?'],
                ['DELIA', 'They do. The fastest kind, next-day pickup, is only for people travelling within two days, so that\'s out. But there\'s express service, ready in two to nine business days.'],
                ['CONRAD', 'Nine days, worst case. That still gets it here with time to spare. What\'s the damage?'],
                ['DELIA', 'The regular renewal fee is a hundred and sixty. And express adds, um, a hundred and ten on top.'],
                ['CONRAD', 'Are you sure? I could\'ve sworn it was less than that.'],
                ['DELIA', 'Oh, you\'re right, I was reading the wrong line. A hundred and ten is for next-day pickup. Express is only seventy extra.'],
                ['CONRAD', 'Still cheaper than losing the flights. Can you just walk in?'],
                ['DELIA', 'No, you need an appointment, and the earliest one online is next Wednesday at nine. The office is over an hour from here, and I\'m working that morning.'],
                ['CONRAD', 'Then swap the shift. This matters more. I\'ll drive you, and we\'ll get your photos taken tomorrow.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why can Delia not use the fastest service?', o: ['Her departure date is still too far away.', 'It is offered only in a different city.', 'Her flight leaves within two days.', 'It cannot be booked as an appointment.'] },
                { id: 'L1.5', q: 'How much will Delia pay in total for the renewal?', o: ['$230', '$270', '$160', '$180'] },
                { id: 'L1.6', q: 'What does Conrad suggest Delia do about her shift?', o: ['Rearrange it so she can attend the appointment', 'Ask her manager whether she can start later', 'Work the shift and take a later appointment', 'Leave work early and take the bus to the city'] }
              ]
            },
            {
              lines: [
                ['DELIA', 'Okay, update. Nobody can cover my Wednesday shift, but somebody cancelled, so I grabbed Monday at two instead.'],
                ['CONRAD', 'Even better, it\'s sooner. Anything else we need to bring?'],
                ['DELIA', 'Two photos and my old passport. If I qualify for the simple renewal, I don\'t need a guarantor. That\'s only if the old one\'s in good condition, though.'],
                ['CONRAD', 'Is it? In good condition, I mean.'],
                ['DELIA', 'Well. It did go through the washing machine in my jeans in July. The cover\'s a bit wavy, and one page is stuck.'],
                ['CONRAD', 'Oh, Delia. Then don\'t gamble on it. If they reject it at the counter, we lose the whole day. Can\'t I sign as your guarantor?'],
                ['DELIA', 'Not according to this. It can\'t be a family member. But Dolores at the pharmacy has been my boss for six years.'],
                ['CONRAD', 'Perfect. And you did cover all those Saturdays for her last spring.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why might Delia need a guarantor after all?', o: ['Her old passport may be too damaged to qualify.', 'Her old passport was issued over fifteen years ago.', 'The Monday appointment requires different forms.', 'Simple renewals are not offered on short notice.'] },
                { id: 'L1.8', q: 'What will Delia most likely do next?', o: ['Ask her manager to sign a form for her', 'Ask Conrad to act as her guarantor', 'Wash and dry her old passport again', 'Book a second appointment for Wednesday'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { RECEP: { name: 'Vet receptionist', g: 'm', skin: '#d6a07a', hair: '#2a1b12', shirt: '#2e86c1', style: 'curly' }, CHANTAL: { name: 'Chantal', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#af7ac5', style: 'long' } },
          segments: [{
            lines: [
              ['RECEP', 'Good afternoon, Whitecap Animal Hospital. How can I help?'],
              ['CHANTAL', 'Hi, it\'s Chantal Dupuis. Doctor Ingram saw my cat, Dumpling, last week and said she needs her teeth cleaned. I\'m calling to book it, but honestly, I nearly fell over when I saw the estimate.'],
              ['RECEP', 'I understand. Let me pull it up. Okay, the cleaning itself is four hundred and eighty, and the estimate goes up to nine hundred, because she may need a couple of teeth pulled. We won\'t know until she\'s asleep and we can take X-rays.'],
              ['CHANTAL', 'So it could be four eighty, or it could be nearly double.'],
              ['RECEP', 'That\'s right. But the doctor always calls you before doing any extractions, so there are no nasty surprises.'],
              ['CHANTAL', 'Okay, that helps. Would my pet insurance cover any of it?'],
              ['RECEP', 'It depends on your plan. Most only cover dental work after an accident, like a broken tooth. A routine cleaning usually isn\'t included. I\'d check with them before you book, just so you know where you stand.'],
              ['CHANTAL', 'I will. What dates do you have?'],
              ['RECEP', 'Next Tuesday or the Thursday after. Because Dumpling is nine, she\'ll also need a blood test beforehand to make sure she\'s safe to put under. We can do it the same morning, but then she\'d have to be here by seven-thirty.'],
              ['CHANTAL', 'Seven-thirty\'s tough. I start work at eight on the other side of town. Could I drop her off the night before?'],
              ['RECEP', 'You could, but there\'s an overnight fee of thirty-five dollars. Or you could bring her in for the blood test any day this week, and then drop her off at nine on the day.'],
              ['CHANTAL', 'Oh, that\'s much better. I\'m off on Friday, so I\'ll come in then. And she shouldn\'t eat breakfast that morning, right?'],
              ['RECEP', 'No food after midnight, but water\'s fine. One more thing: we ask for a deposit of half the low end of the estimate when you book.'],
              ['CHANTAL', 'Half the low end, okay. Can I pay that on Friday, while I\'m there anyway?'],
              ['RECEP', 'Of course. I\'ll pencil her in for next Tuesday, and we\'ll see you both on Friday.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why is Chantal calling the clinic?', o: ['To arrange a procedure the vet recommended', 'To complain about a bill she has received', 'To ask why her cat has stopped eating', 'To get a second opinion on her cat\'s teeth'] },
              { id: 'L2.2', q: 'Why is the estimate given as a range?', o: ['Extra work may only become clear during the procedure.', 'The price of the anesthetic changes from week to week.', 'Her insurance company may agree to pay part of it.', 'The blood test might show that surgery is unsafe.'] },
              { id: 'L2.3', q: 'What does the receptionist suggest about Chantal\'s insurance?', o: ['It probably will not pay for routine dental care.', 'It covers most dental work for older cats.', 'It must be confirmed before any X-rays are taken.', 'It will pay for extractions but not the cleaning.'] },
              { id: 'L2.4', q: 'How much will Chantal pay as a deposit?', o: ['$240', '$450', '$480', '$120'] },
              { id: 'L2.5', q: 'Why will Chantal go to the clinic on Friday?', o: ['To have a required test done ahead of time', 'To leave her cat overnight before the cleaning', 'To collect her cat after the dental procedure', 'To have her cat\'s teeth X-rayed in advance'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#f0c9a6', hair: '#a04000', shirt: '#196f3d', style: 'bun' }, DEEPAK: { name: 'Deepak Malhotra', g: 'm', skin: '#a9714b', hair: '#151515', shirt: '#7b241c', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Deepak Malhotra, who runs what he calls a barbershop on wheels out of Okotoks, Alberta. Deepak, what exactly does that mean?'],
              ['DEEPAK', 'It means I go to the people who can\'t come to me. Seniors\' homes, hospital wards, people recovering from surgery at home. I carry everything in two rolling cases: clippers, scissors, a cape, even a folding sink for shampoos.'],
              ['HOST', 'How did you get started?'],
              ['DEEPAK', 'I had a regular shop for twelve years. One of my oldest customers, a retired farmer, stopped coming in after a stroke.'],
              ['DEEPAK', 'His daughter called and asked, half joking, whether I made house calls. I thought, why not? That one visit turned into a whole new business.'],
              ['HOST', 'What\'s different about cutting hair in someone\'s bedroom?'],
              ['DEEPAK', 'Everything. In a shop, the customer sits in a chair that goes up and down.'],
              ['DEEPAK', 'At home, they might be in a wheelchair or propped up in bed, so I\'m the one who has to bend. My back lets me know about it, believe me.'],
              ['DEEPAK', 'And you slow right down. A cut that takes twenty minutes in the shop can take an hour, because the conversation is half the reason I\'m there.'],
              ['HOST', 'Half the reason?'],
              ['DEEPAK', 'For a lot of my clients, I\'m the only visitor all week who isn\'t a nurse or a relative.'],
              ['DEEPAK', 'They tell me about the dances they went to as teenagers. One gentleman insists on a proper hot towel shave every Friday, exactly like the one he had on his wedding day.'],
              ['HOST', 'Is it a decent living?'],
              ['DEEPAK', 'Better than you\'d think. I charge more for a house call than I did in the shop, because of the driving. In the care homes, I can see eight or ten people in a morning, so I charge them less.'],
              ['HOST', 'Any challenges?'],
              ['DEEPAK', 'Winter. Some of my clients live on farms twenty kilometres down gravel roads. Last January I spent two hours in a ditch waiting for a tow truck. Now there\'s a shovel and a sleeping bag in the van at all times.'],
              ['HOST', 'So what\'s next?'],
              ['DEEPAK', 'I\'m training two young barbers so we can take on clients in the next county. And I\'ve started showing the staff at one care home how to do simple trims between my visits.'],
              ['DEEPAK', 'A friend told me I was talking myself out of work. I don\'t see it that way at all.']
            ],
            questions: [
              { id: 'L3.1', q: 'What is Deepak\'s business mainly about?', o: ['Bringing haircuts to people who cannot travel', 'Teaching care home staff how to give simple haircuts', 'Running a barbershop inside a hospital', 'Selling barber equipment to care homes'] },
              { id: 'L3.2', q: 'How did Deepak\'s mobile business begin?', o: ['A request from a former client\'s relative', 'An advertisement placed by a care home', 'A suggestion from a nurse at a hospital', 'A stroke that forced him to close his shop'] },
              { id: 'L3.3', q: 'Why does Deepak mention his back?', o: ['He must adjust to the way his clients are seated.', 'He has to lift his rolling cases in and out of the van.', 'The chairs in his old shop were badly designed.', 'Long drives on gravel roads cause him pain.'] },
              { id: 'L3.4', q: 'What does Deepak suggest about talking with his clients?', o: ['It meets a need for company in their lives.', 'It slows him down more than he would like.', 'It is mainly about the news of the week.', 'It is what nurses ask him to focus on.'] },
              { id: 'L3.5', q: 'Why does Deepak charge care homes less?', o: ['He can serve many people in a single visit.', 'The care homes provide the chairs and sinks.', 'The residents need only simple trims.', 'The staff do part of the work for him.'] },
              { id: 'L3.6', q: 'Why does Deepak mention his friend\'s comment?', o: ['To show he does not see training others as a threat', 'To admit that teaching staff has cost him clients', 'To explain why he plans to retire in a few years', 'To suggest that the care home staff are not skilled'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#e3b28b', hair: '#5d4037', shirt: '#1b2631', style: 'short' } },
          segments: [{
            lines: [
              ['NEWS', 'Shared electric scooters are coming to Kincardine. Town council has approved a one-year pilot project that will put about two hundred rentable e-scooters on local streets starting the first of May.'],
              ['NEWS', 'Riders will unlock the scooters with a phone app and pay by the minute. Top speed will be limited to twenty kilometres an hour, and the scooters may be ridden on roads and in bike lanes, but not on sidewalks.'],
              ['NEWS', 'Riders must be at least sixteen. Helmets will be strongly recommended, but not required, for adults, a decision that drew criticism from several councillors.'],
              ['NEWS', 'To avoid a problem seen in other cities, where scooters end up scattered across sidewalks, riders will have to end every trip inside a marked parking zone. Anyone who doesn\'t will keep being charged until the scooter is properly parked.'],
              ['NEWS', 'Councillor Cecilia Lachance, who voted against the pilot, says residents who use wheelchairs and walkers have told her that abandoned scooters in other cities have become dangerous obstacles. She also has concerns about late-night riders who have been drinking.'],
              ['NEWS', 'Supporters argue that scooters can replace short car trips downtown and help people reach bus stops that are a little too far to walk.'],
              ['NEWS', 'The scooters will be available from six in the morning until eleven at night. The operator will pay the town a fee for every trip, and that money will go toward building new bike lanes.'],
              ['NEWS', 'After six months, council will review figures on injuries, complaints and ridership before deciding whether the program continues.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A trial of shared scooters in the town', 'New rules for cyclists on local roads', 'A plan to build more parking downtown', 'Complaints about scooters on sidewalks'] },
              { id: 'L4.2', q: 'What does the report suggest about the helmet decision?', o: ['Not everyone on council agreed with it.', 'It also applies to riders under sixteen.', 'It was made to keep top speeds lower.', 'It was requested by the scooter operator.'] },
              { id: 'L4.3', q: 'What will happen to riders who leave a scooter outside a parking zone?', o: ['They will continue to be billed.', 'They will be banned from the app.', 'They will receive a fine by mail.', 'They will lose their deposit.'] },
              { id: 'L4.4', q: 'Why does Councillor Lachance mention residents who use wheelchairs?', o: ['To show how badly parked scooters can create hazards', 'To argue that the scooters should be made easier to ride', 'To explain why the age limit was set at sixteen', 'To ask for the scooters to be allowed on sidewalks'] },
              { id: 'L4.5', q: 'How will the town use the money from each trip?', o: ['To make more room for cycling', 'To hire staff to move parked scooters', 'To buy helmets for younger riders', 'To pay for the six-month review'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Street sale planning', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { CORDELIA: { name: 'Cordelia', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#884ea0', style: 'bun' }, DUNCAN: { name: 'Duncan', g: 'm', skin: '#f2cfb0', hair: '#bdc3c7', shirt: '#1f618d', style: 'bald' }, CLARISSA: { name: 'Clarissa', g: 'f', skin: '#e8c39e', hair: '#d9b56a', shirt: '#239b56', style: 'long' } },
          segments: [{
            lines: [
              ['CORDELIA', 'Thanks for coming. If we want a street-wide garage sale this spring, we need a date tonight.'],
              ['DUNCAN', 'Last year\'s was the third Saturday in May, and it poured. Half the tables never came out.'],
              ['CLARISSA', 'So let\'s go earlier. The first Saturday in May, before everyone heads to the cottage for the long weekend.'],
              ['CORDELIA', 'Earlier is colder, though. Nobody browses for long when their fingers are numb.'],
              ['DUNCAN', 'What if we pick a date and a backup? If it rains, we just slide everything to Sunday.'],
              ['CLARISSA', 'I like that, as long as the rain date is on the flyers from day one.'],
              ['CORDELIA', 'Fine. First Saturday, Sunday as backup. Now, the city wants us to close the street to traffic.'],
              ['DUNCAN', 'Close it? That means a permit, insurance and barriers. That\'s a mountain of paperwork.'],
              ['CORDELIA', 'It is. But last year a car nearly backed into a little boy who was looking at bikes.'],
              ['CLARISSA', 'Honestly, that alone settles it for me. I\'ll handle the permit. I did it for the block party.'],
              ['DUNCAN', 'Okay, I\'ll stop grumbling. How do we get the word out? Last year it was mostly just us.'],
              ['CLARISSA', 'We post it on the community page and put signs up at both ends of the street.'],
              ['CORDELIA', 'Signs, yes. But the people who drive by on weekends are the ones who actually spend money.'],
              ['DUNCAN', 'Then one big sign on the main road on Friday. Bright colours, big arrows.'],
              ['CLARISSA', 'And can we ask everyone to price things beforehand? Haggling over every teacup slows everything down.'],
              ['DUNCAN', 'People will haggle anyway. That\'s half the fun of a garage sale.'],
              ['CORDELIA', 'True, but a sticker gives them a starting point. Otherwise sellers just stand there guessing.'],
              ['CORDELIA', 'Last thing. What happens to everything that doesn\'t sell? Last year, most of it ended up at the curb.'],
              ['CLARISSA', 'The thrift store on the corner will collect donations, but only if everything\'s boxed and sorted.'],
              ['DUNCAN', 'Sorted how? Some people will just dump a box of mismatched dishes.'],
              ['CLARISSA', 'Clothes in one box, kitchen things in another. No broken electronics. They were very firm about that.'],
              ['CORDELIA', 'Then we need a drop-off spot. Duncan, your garage is right in the middle of the street.'],
              ['DUNCAN', 'My garage? It\'s already crammed with my own junk. Which, I suppose, is the whole point.'],
              ['CLARISSA', 'Exactly. You sell your junk, and suddenly there\'s room for everyone else\'s.'],
              ['CORDELIA', 'Should sellers give a share of their earnings to the school playground fund?'],
              ['CLARISSA', 'Let\'s keep it voluntary. A jar on each table. Some folks are counting on this money.'],
              ['CORDELIA', 'Agreed. I\'ll draft the flyer tonight and send it to you both before printing.']
            ],
            questions: [
              { id: 'L5.1', q: 'Why does Clarissa suggest an earlier date?', o: ['Many people will be away later in the month.', 'It usually rains on the third Saturday in May.', 'Sellers need more time to price their items.', 'The weather is warmer at the start of May.'] },
              { id: 'L5.2', q: 'How do they deal with the risk of bad weather?', o: ['They name a second day in case of rain.', 'They move the sale into a large garage.', 'They hold it on the third Saturday instead.', 'They put tents up over all of the tables.'] },
              { id: 'L5.3', q: 'What convinces Clarissa that the street should be closed?', o: ['A child nearly being hit at last year\'s sale', 'The city offering to pay for all the barriers', 'Her experience with the block party permit', 'The need for more room for sellers\' tables'] },
              { id: 'L5.4', q: 'What is Duncan\'s first reaction to closing the street?', o: ['It would take too much effort to organize.', 'It would keep buyers from driving to the sale.', 'It is too late to ask the city for permission.', 'It would cost more than the sale would earn.'] },
              { id: 'L5.5', q: 'What point does Cordelia make about advertising?', o: ['People from outside the street are the best customers.', 'Signs on the community page are often ignored.', 'Neighbours need reminding the day before the sale.', 'Drivers need directions to the thrift store.'] },
              { id: 'L5.6', q: 'What is Duncan\'s view on pricing items in advance?', o: ['Bargaining will happen no matter what.', 'Sellers should set their prices high.', 'Price stickers make buyers feel rushed.', 'Pricing is the best way to stop haggling.'] },
              { id: 'L5.7', q: 'What does Duncan\'s comment about his junk suggest?', o: ['He accepts the plan to use his garage.', 'He refuses to let anyone use his garage.', 'He thinks most donations will be junk.', 'He plans to give his things to the thrift store.'] },
              { id: 'L5.8', q: 'Why does Clarissa want the donation jar to be voluntary?', o: ['Some sellers need everything they earn.', 'Sellers already give items to the thrift store.', 'A jar on each table slows down sales.', 'Buyers would rather donate than sellers.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should school start later?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#b07850', hair: '#1d1410', shirt: '#2e4053', style: 'curly' } },
          segments: [{
            lines: [
              ['NARR', 'Most high schools in Canada start somewhere between eight and nine in the morning.'],
              ['NARR', 'But a growing number of parents and researchers argue that for teenagers, that is simply too early, and some school boards are now considering pushing the first bell back to nine-thirty or later.'],
              ['NARR', 'Dagmar Solheim, a sleep researcher at a university in Chicoutimi, is one of the strongest voices for change.'],
              ['NARR', 'Her first argument is biological. During adolescence, she explains, the body\'s internal clock shifts, so most teenagers simply do not feel sleepy until eleven at night or later.'],
              ['NARR', '"Asking a sixteen-year-old to be sharp at eight is like asking an adult to do algebra at five in the morning," she says. "It isn\'t laziness. It\'s timing."'],
              ['NARR', 'Her second argument is about results. In districts that have moved start times later, she says, students sleep longer, attendance in first period has improved, and fewer teenage drivers have been involved in crashes on the way to school.'],
              ['NARR', 'Solheim acknowledges that later starts can be hard on families with rigid work schedules. But she argues that a teenager who can get to school on their own does not need a parent at the door, so the inconvenience is smaller than many expect.'],
              ['NARR', 'Donovan Pryce, who manages student transportation for a large school board, sees the issue differently. His first concern is buses.'],
              ['NARR', 'Most boards, he explains, use the same buses for several runs each morning: high school students first, then elementary students. If high schools start later, the order must be flipped, and young children end up waiting at bus stops in the dark in December.'],
              ['NARR', 'The only alternative, he says, is buying more buses and hiring more drivers, at a time when drivers are already hard to find.'],
              ['NARR', 'His second concern is what happens after school. A later dismissal means less daylight for sports practices and less time for the part-time jobs many students depend on.'],
              ['NARR', 'Some teenagers also look after younger brothers and sisters in the afternoon, and a later finish could make that impossible.'],
              ['NARR', '"The research on sleep is real," Pryce says. "But a school timetable is a puzzle with many pieces, and moving one piece moves all the others."'],
              ['NARR', 'Solheim responds that the bus problem is a question of budget, not of science, and that a board that truly values student health will find the money.'],
              ['NARR', 'She adds that some districts have avoided the problem altogether by spacing out their bell times by just twenty minutes, rather than reversing the whole bus schedule.'],
              ['NARR', 'Pryce concedes that the safety figures Solheim cites are hard to argue with.'],
              ['NARR', 'He also says he is not opposed in principle. But he believes boards should try later start times at one or two schools first, and measure the results carefully, before changing an entire system.'],
              ['NARR', 'Both agree on one thing: whatever time the bell rings, teenagers would benefit from less homework late at night and fewer screens in the bedroom.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether high school classes should begin later', 'How much homework teenagers should be given each night', 'Why school bus drivers are hard to find', 'How screens affect teenagers\' sleep'] },
              { id: 'L6.2', q: 'According to Solheim, why do teenagers struggle in early classes?', o: ['Changes in their bodies push bedtime later.', 'They stay up far too late doing their homework.', 'They spend too long on screens at night.', 'They work at part-time jobs in the evening.'] },
              { id: 'L6.3', q: 'Why does Solheim mention adults doing algebra?', o: ['To show the problem lies in the hour, not the student\'s attitude', 'To argue that maths should be taught later in the day', 'To suggest that adults also need more sleep than they get', 'To explain why teenagers dislike morning classes'] },
              { id: 'L6.4', q: 'How does Solheim answer concerns about family schedules?', o: ['Older students rarely need a parent to get them to school.', 'Most parents already start work after nine in the morning.', 'Schools could offer supervision before the first bell.', 'Families will adjust once they see better grades.'] },
              { id: 'L6.5', q: 'What does Pryce say would happen if bus runs were reversed?', o: ['Younger pupils would wait outside before sunrise.', 'High school students would miss their first class.', 'Drivers would refuse to work the earlier routes.', 'Elementary schools would also have to start later.'] },
              { id: 'L6.6', q: 'What does Pryce\'s final position suggest?', o: ['He favours a careful test before any wider change.', 'He believes the sleep research is not reliable.', 'He will oppose later start times in every case.', 'He thinks the cost should be paid by the province.'] }
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
          passage: '<h3>Message</h3><p>Hi Darius,</p><p>Of course you can stay with us! I am thrilled the interview came through, and it would be a crime for you to pay for a motel when our spare room is sitting empty. Well, "spare room" might be overselling it. We are halfway through turning it into an office, so at the moment it holds a desk, a pile of paint cans and the sofa bed. The sofa bed is more comfortable than it looks, I promise, and I will clear the paint cans out before you arrive.</p><p>Here is the awkward part. You arrive on Wednesday evening, but Colin and I leave for my sister\'s in Digby early Thursday morning, and we will not be back until Saturday afternoon. So you will have the house to yourself for two days. Our neighbour, Mrs. Pellerin, has a spare key, and she is home all day, so just knock on the blue door to the left of ours.</p><p>The only real job I am handing over is Pumpkin. She is eleven now and takes medication for her thyroid: half a tablet, morning and evening, hidden in a spoonful of wet food. She will try to eat around it, so stand there and watch until the bowl is licked clean. And whatever she tells you, she has already been fed.</p><p>As for getting here, the airport shuttle stops at the gas station on Main Street, a ten-minute walk from our house. The last shuttle leaves the airport at 9:45 p.m., and a taxi would cost you about $120, so text me your flight number and I will keep an eye on it.</p><p>Your interview at the college is on Friday at ten, right? The campus is only fifteen minutes away on foot, but take an umbrella, because the forecast is miserable. Afterward, there is a lovely café on Gaspereau Avenue where you can celebrate, or drown your sorrows, though my money is on celebrating.</p><p>Let\'s have dinner together on Saturday night when we get back. Colin wants to hear all about it.</p><p>Love,<br>Clementine</p>',
          questions: [
            { id: 'R1.1', q: 'Clementine says "spare room" might be overselling it because', o: ['the room is only partly converted into an office.', 'the sofa bed is uncomfortable to sleep on.', 'Colin already uses the room as his office.', 'the paint cans cannot be moved out before he arrives.'] },
            { id: 'R1.2', q: 'Darius will be alone in the house because', o: ['his hosts will be visiting a relative.', 'Clementine has to work late all week.', 'his interview has been moved to Saturday.', 'Mrs. Pellerin will be away at the time.'] },
            { id: 'R1.3', q: 'When feeding Pumpkin, Darius must make sure that', o: ['the medicine has really been eaten.', 'she is fed only once in the evening.', 'she gets a whole tablet each time.', 'Mrs. Pellerin has fed her already.'] },
            { id: 'R1.4', q: 'The comment "whatever she tells you" suggests that Pumpkin', o: ['may act hungry when she is not.', 'refuses to eat wet food at all.', 'is unfriendly toward visitors.', 'meows loudly when she is ill.'] },
            { id: 'R1.5', q: 'Clementine wants Darius\'s flight number so that she can', o: ['see if a delay might make him miss the shuttle.', 'book a taxi for him well before he lands.', 'ask Mrs. Pellerin to meet him at the airport.', 'tell the shuttle driver to wait for his flight.'] },
            { id: 'R1.6', q: 'Clementine expects that Darius\'s interview will', o: ['end with good news worth celebrating.', 'be cancelled because of the weather.', 'go on until late in the afternoon.', 'take place at the café on Gaspereau Avenue.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Clementine,</p><p>You are the best. Please do not worry about the [[R1.7]]; I have slept on far worse, and a few paint cans are a small price to pay for your company.</p><p>Do not worry about Pumpkin either. I looked after my aunt\'s dog when he was on pills, so I already know the trick of [[R1.8]], and I promise not to fall for any of her acting.</p><p>My flight is due to land at 9:20, which leaves me very little time to catch [[R1.9]], so I will text you the flight number tonight. If it is late, I will just take a taxi and not make a fuss.</p><p>I will collect the key from [[R1.10]] on Wednesday evening. And thank you for the umbrella tip. I will be walking to [[R1.11]] on Friday morning in my only suit, so staying dry matters!</p><p>See you Saturday for dinner,</p><p>Darius</p>',
          blanks: [
            { id: 'R1.7', o: ['sofa bed', 'office desk', 'shuttle times', 'taxi fare'] },
            { id: 'R1.8', o: ['hiding a pill in some food', 'cutting each pill in half', 'feeding a pet twice a day', 'keeping a pet off the furniture'] },
            { id: 'R1.9', o: ['the last shuttle of the night', 'the first bus on Thursday', 'a taxi at the gas station', 'a ride from your neighbour next door'] },
            { id: 'R1.10', o: ['the neighbour on your left', 'the neighbour on your right', 'your sister in Digby', 'the café on Gaspereau Avenue'] },
            { id: 'R1.11', o: ['the campus for my interview', 'the café on Gaspereau Avenue to celebrate', 'the shuttle stop on Main Street', 'Mrs. Pellerin\'s blue door for the key'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Hoodoo Tire Centre, Drumheller: Seasonal Tire Services</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Service</th><th>Cars and minivans</th><th>SUVs and trucks</th></tr></thead><tbody>' +
            '<tr><td>Seasonal changeover, tires already on rims</td><td>$70</td><td>$90</td></tr>' +
            '<tr><td>Seasonal changeover, tires not on rims (mount and balance)</td><td>$120</td><td>$150</td></tr>' +
            '<tr><td>Tire storage, one season</td><td>$80</td><td>$100</td></tr>' +
            '<tr><td>Season package: fall changeover, storage over winter and spring changeover (tires on rims only)</td><td>$135</td><td>$170</td></tr>' +
            '<tr><td>Wheel alignment</td><td>$110</td><td>$130</td></tr>' +
            '<tr><td>Flat tire repair (per tire)</td><td>$35</td><td>$35</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Customers aged 65 and over save 10% on changeovers and season packages. The discount does not apply to storage, alignments or repairs.</li><li>Appointments are required from October 15 to December 15 and from March 15 to May 15. At all other times, drop-ins are welcome.</li><li>Vehicles with locking wheel nuts must have the lock key in the vehicle. If the key is missing, a $30 removal fee applies.</li><li>Season packages are paid in full at the fall visit.</li><li>Stored tires are inspected free of charge, and customers are told if the tread is worn.</li><li>When an alignment is done on the same visit as a changeover, the alignment costs $15 less. This saving does not apply to flat tire repairs or to tire storage.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Dinah,</p><p>I have booked Dad\'s SUV into Hoodoo Tire for November 8. His winter tires are already on rims, so the cheapest way to cover the fall changeover, storage and the spring changeover is the season package. Since he only turns 65 in January, he will pay [[R2.1]] for it. His SUV has locking wheel nuts, so please remind him to [[R2.2]] that morning.</p><p>Your car is a different story. Your new winter tires are not on rims yet, so you cannot get the package, and the fall changeover alone will cost you [[R2.3]]. You said you are taking your car in on December 20, after your exams, so you [[R2.4]]. If you would also like them to keep your summer tires over the winter, that would add another [[R2.5]].</p><p>Talk soon,<br>Cosimo</p>',
          blanks: [
            { id: 'R2.1', o: ['$170', '$153', '$280', '$189'] },
            { id: 'R2.2', o: ['leave the lock key in the car', 'bring his proof of age', 'pay for the spring visit', 'book his wheel alignment'] },
            { id: 'R2.3', o: ['$120', '$135', '$70', '$150'] },
            { id: 'R2.4', o: ['can simply drop in without a booking', 'must book at least a week in advance', 'will pay the busy-season price', 'will miss the storage deadline'] },
            { id: 'R2.5', o: ['$80', '$100', '$72', '$135'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A 70-year-old customer buys the season package for her minivan. She will pay', o: ['$121.50.', '$135.00.', '$113.50.', '$127.00.'] },
            { id: 'R2.7', q: 'A 68-year-old customer has one flat tire repaired on his car. He will pay', o: ['$35, because repairs are not discounted.', '$31.50, after the seniors\' discount.', '$20, after the same-visit saving.', '$0, because repairs come with a package.'] },
            { id: 'R2.8', q: 'A driver whose winter tires are not on rims wants them put on and his summer tires stored. He should', o: ['pay for the changeover and storage separately.', 'buy the season package at the fall visit.', 'wait until the tires are worn before booking.', 'pay for both changeovers in the spring.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Curling Club: A Small Town\'s Living Room</h3><p><b>A.</b> In many small Canadian towns, the curling club is one of the busiest buildings in winter, even though the sport itself can look puzzling to outsiders. Two teams of four take turns sliding heavy granite stones down a long sheet of ice toward a target painted at the far end, while teammates sweep the ice in front of each stone to help it travel farther and straighter. The game rewards patience and planning more than strength, and a single game usually lasts about two hours. That is one reason players often continue well into their seventies and eighties. Many clubs proudly display photographs of members who have curled for more than half a century.</p><p><b>B.</b> For much of the twentieth century, a town without a curling rink was hard to imagine on the Prairies. Clubs were usually built by volunteers, often with donated lumber, and many began with natural ice that formed only during the coldest months. Before artificial ice became common, a mild spell in January could bring the season to an early end. Farmers, whose work slowed in winter, made up a large share of early members, and bonspiels, or curling tournaments, sometimes lasted a full week and drew teams from dozens of towns. Local shops sometimes closed early on bonspiel days so that staff could watch the final games.</p><p><b>C.</b> Today, many clubs face serious money problems. Keeping a sheet of ice at the right temperature requires expensive refrigeration equipment, and the machinery in older buildings is reaching the end of its life. Replacing it can cost several hundred thousand dollars, a huge sum for a club with only a few hundred members. Some clubs have merged with those in neighbouring towns, while others now rent out their lounges for weddings and birthday parties to bring in extra income. Volunteers do much of the upkeep themselves, from painting lines to patching roofs. A few clubs have closed their doors entirely, and members who once walked to the rink now drive half an hour to play.</p><p><b>D.</b> At the same time, clubs are working hard to attract new players. Many now offer short learn-to-curl sessions for adults, where beginners are given borrowed shoes and brooms and are on the ice within an hour. Stick curling, in which players push the stone with a long handle instead of crouching, has opened the game to people with sore knees or poor balance. Some clubs have started evening leagues for people who cannot play during the day, and others run school programs so that children can try the sport during gym class. Club managers say the social side is often what keeps people coming back: in many towns, the lounge after a game is where news is shared and friendships are made.</p>',
          questions: [
            { id: 'R3.1', q: 'Some clubs earn extra money by hosting private celebrations.', fixed: true, a: 'C' },
            { id: 'R3.2', q: 'Beginners must buy their own shoes and brooms after their first session.', fixed: true, a: 'E' },
            { id: 'R3.3', q: 'Careful thinking counts for more in the game than physical power.', fixed: true, a: 'A' },
            { id: 'R3.4', q: 'Warm weather once could cut short the time when people were able to play.', fixed: true, a: 'B' },
            { id: 'R3.5', q: 'Provincial governments often help clubs pay for new cooling equipment.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'A different way of delivering the stone makes the sport easier for people with physical limits.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'Some people have played the sport for most of their lives.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Early bonspiels offered cash prizes to the winning teams.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Games have been scheduled at times that suit people with daytime jobs.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Children Walk to School on Their Own?</h3><p>A generation ago, most Canadian children walked or cycled to school, often without an adult. Today, according to several surveys, fewer than one in four do, and in many suburbs the morning drop-off line stretches around the block. Some parents and experts now argue that children have lost something important along the way, while others say the world outside the school gate has simply become more dangerous.</p><p>Corbin Ashworth, a father of three in Cranbrook, began letting his nine-year-old daughter walk the 800 metres to school alone last fall. "She practised the route with me for two weeks, then with her older cousin, and then on her own," he says. "The first morning, I watched from the porch until she turned the corner. Now she would be mortified if I did." Ashworth says the change has made his daughter more confident and more alert to her surroundings. He admits, however, that not every neighbour approves. One called the school to report a child walking unsupervised.</p><p>Damaris Adewale, a child psychologist who works with school boards, supports gradual independence. Children who are always driven, she says, miss chances to solve small problems on their own, such as what to do when the usual path is blocked or a friend is running late. "Independence is a skill, and like any skill, it has to be practised," she says. She does not recommend a particular age, arguing that a mature eight-year-old on a quiet street may be more ready than a distracted twelve-year-old on a busy one.</p><p>Colm Doherty, a traffic safety officer with a municipal police service, is more cautious. He points out that the main danger to young walkers is not strangers, as many parents fear, but cars. Most collisions involving child pedestrians happen within a few blocks of schools, often during drop-off, when drivers are rushed and children dart out between parked vehicles. "Ironically, the parents who drive because the streets feel unsafe are part of what makes them unsafe," he says. He recommends that children under ten cross busy roads only where there is a crossing guard or a traffic light.</p><p>Some schools are trying to make walking easier. In several cities, "walking school buses" let a group of children walk a set route together, led by a parent volunteer who picks up children at stops along the way. Other schools close the street in front of the building to cars for fifteen minutes before the bell. Adewale likes both ideas, though she notes that a walking school bus still keeps an adult in charge, so it builds less independence than walking alone.</p><p>Doherty believes the most effective single change would be lower speed limits near schools, which he says reduce both the number and the severity of collisions. Ashworth agrees, but adds that no rule will help unless parents trust their children enough to let them try. "At some point," he says, "you have to open the door."</p>',
          questions: [
            { id: 'R4.1', q: 'The first paragraph suggests that', o: ['far fewer children now get to school on their own.', 'most children today live too far from school to walk.', 'school drop-off lines have become shorter in suburbs.', 'experts agree that streets are more dangerous now.'] },
            { id: 'R4.2', q: 'Ashworth describes watching from the porch to show', o: ['how much his daughter\'s confidence has grown since.', 'that he still does not trust the walking route.', 'why a neighbour reported his daughter to the school.', 'that his daughter prefers to walk with her cousin.'] },
            { id: 'R4.3', q: 'Adewale believes readiness to walk alone depends mainly on', o: ['the child and the route rather than age.', 'whether the child is at least twelve.', 'how far away the school is from the family home.', 'how often the parents drive.'] },
            { id: 'R4.4', q: 'Doherty\'s comment about parents who drive suggests that', o: ['their way of protecting children adds to the risk.', 'they should park farther away from the school.', 'they are more careful than other drivers nearby.', 'their fear of strangers near schools is completely justified.'] },
            { id: 'R4.5', q: 'Adewale has a reservation about walking school buses because', o: ['children are still supervised by an adult.', 'too few parents are willing to volunteer as leaders.', 'they move too slowly to arrive on time.', 'they only work on streets closed to cars.'] }
          ],
          reply: '<h3>Reader comment</h3><p>As a parent of two, I found this article both reassuring and uncomfortable. Like Mr. Ashworth, I believe children should [[R4.6]] before they are sent off alone, and practising the route first seems sensible. Ms. Adewale is also right that independence [[R4.7]], so keeping children in the back seat until high school does them no favours.</p><p>Still, Officer Doherty\'s comments worried me. I had always assumed the biggest risk to my children was [[R4.8]], not the traffic near their own school. Our school already has a walking school bus, and while it may not build as much independence as walking alone, it [[R4.9]].</p><p>Finally, I hope our council listens to Officer Doherty\'s call for [[R4.10]] around schools. Every parent on our street would sleep better.</p>',
          blanks: [
            { id: 'R4.6', o: ['build up to it in stages', 'be at least twelve years old', 'carry a phone', 'walk with a crossing guard'] },
            { id: 'R4.7', o: ['improves with practice', 'comes naturally with age', 'is mostly luck', 'should be taught at school'] },
            { id: 'R4.8', o: ['strangers', 'bad weather', 'bullies', 'older children'] },
            { id: 'R4.9', o: ['still gets more children walking', 'lets children walk alone sooner', 'removes the need for adult volunteers', 'keeps all cars away from school'] },
            { id: 'R4.10', o: ['reduced speed limits', 'more crossing guards', 'street closures', 'more traffic lights'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Your ten-year-old son takes the school bus every morning. This year, to shorten the route, the school board moved his bus stop from the corner of your street to a spot 1.2 kilometres away. To get there, he now has to walk along a busy road with no sidewalk, and in winter he will be walking in the dark. You start work at 6:30 a.m. and cannot drive him to the stop or to school.</p><p>Write an email to the school board\'s transportation office. In your email, do the following:</p><ul><li>Describe the change and explain why it worries you.</li><li>Explain why you are not able to drive your son yourself.</li><li>Suggest what the board could do to solve the problem.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your community centre has received funding for one new program for local teenagers aged 13 to 17 and is asking residents which program it should offer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Open the gym and games room every Friday and Saturday night from 7:00 to 11:00 p.m., free for all teens, with two staff members on duty. However, some neighbours are worried about noise and late-night crowds, and the funding would cover only one year.' },
            { key: 'B', label: 'Option B', text: 'Run a paid summer job training program in which teens learn skills such as first aid, customer service and basic carpentry, then work for 6 weeks at local businesses. However, there would be only 30 places, chosen by application, and the program would run only in July and August.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a skill you would like to learn in the next few years, and explain why it interests you.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has just agreed to work night shifts at a hospital for the next three months, starting next week. She has two children in elementary school, her husband works during the day, and she is worried about getting enough sleep and still seeing her family. Give your friend advice on how to manage the next three months.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you had to say no to someone you cared about. What did they ask, how did they react, and would you handle the situation the same way today?' },
        {
          id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.',
          image: '<img src="tests/img/23/scene.jpg" alt="An indoor community swimming pool during a public swim">',
          picture: 'Comic style illustration, wide view of a bright indoor community swimming pool during a public swim, seen from the side of the pool deck, with 14 people in total. In the shallow end, a father holds his small daughter, who wears orange water wings and is kicking and splashing; two girls throw a beach ball to each other; two teenage boys sit on the edge of the pool with their feet in the water, chatting. A lifeguard in a red shirt sits on a tall lifeguard chair, blowing a whistle and pointing at a boy who is running fast along the wet pool deck toward the water. In the lap lanes, a woman in a swim cap and goggles swims front crawl, and an older man walks slowly through the water holding a foam noodle. At the deep end, a teenage girl stands at the end of the diving board, arms raised, ready to dive. On a bench by the wall, a young mother wraps her toddler in a large striped towel. A pool staff member carries a tall stack of kickboards that blocks his view, and he is about to step onto a bright yellow pool toy lying on the deck in front of him. Only two short signs: NO RUNNING on the wall behind the running boy, and DEEP END painted at the far end of the pool.'
        },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/23/scene.jpg" alt="An indoor community swimming pool during a public swim">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your partner have just moved into an unfurnished apartment and have about $1,500 to furnish the living room. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'New flat-pack furniture', image: '<img src="tests/img/23/opt_A.jpg" alt="Photo: New flat-pack furniture">', picture: 'A neat stack of plain flat cardboard furniture boxes beside a partly assembled light wooden bookshelf, with a small hex key and screws on a bare wooden floor.', facts: ['$1,450 for a sofa, coffee table and shelves', 'Delivered in 2 weeks; you assemble it yourselves', '1-year warranty; returns accepted within 30 days', 'Lightweight materials that may not last many years'] },
            { key: 'B', title: 'Second-hand solid wood', image: '<img src="tests/img/23/opt_B.jpg" alt="Photo: Second-hand solid wood">', picture: 'A sturdy dark wooden coffee table and a slightly worn brown fabric sofa standing in a tidy garage, ready to be picked up.', facts: ['About $900 from three online sellers', 'Rent a van ($95) and collect from 3 different homes', 'Sold as is: no returns', 'Very sturdy, but the sofa needs professional cleaning'] }
          ],
          third: { key: 'C', title: 'Furniture rental', image: '<img src="tests/img/23/opt_C.jpg" alt="Photo: Furniture rental">', picture: 'A bright living room staged like a showroom, with a matching grey sofa and armchair, a round coffee table and a soft rug.', facts: ['$85 a month, 12-month minimum', 'Delivery and setup included next week', 'Swap items once a year at no charge', 'You never own the furniture'] },
          persuade: 'Your partner would rather rent the furniture. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Your uncle does not speak much English, and weeks ago you promised to go with him to an important appointment with a medical specialist on Tuesday morning to help him understand what the doctor says. The appointment took him four months to get. Today, your manager told you that you must lead a meeting with a new client on Tuesday morning, because your coworker who was supposed to lead it has quit.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your uncle. Explain why you cannot go with him on Tuesday.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot lead the meeting on Tuesday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town council is considering a bylaw that would list about 120 older homes in the historic downtown neighbourhood as heritage properties. Owners would need the town\'s permission before replacing windows, siding or porches, and could not tear their houses down. Supporters say the old streets give the town its character, attract tourists and help local shops, and that once a historic house is gone, it is gone for good. Owners reply that approved materials such as wooden windows can cost twice as much, that people should decide what to do with their own property, and that the rules would slow the building of badly needed new housing.</p><p>The council has asked residents for their views before it votes next month. Should these homes be protected as heritage properties? Explain your reasons.</p>' },
        {
          id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in an office supply store and see this unusual desk chair for $380. Call your friend, who works from home in a small one-bedroom apartment and has a budget of about $300 for a new chair. Most of the chair\'s features only work when it is plugged into the wall, and it weighs almost 30 kilograms. Describe the chair and explain whether you think your friend should buy it.',
          image: '<img src="tests/img/23/object.jpg" alt="An unusual office desk chair in a store">',
          picture: 'One office desk chair on display in a store, with these unusual features: a tall padded back with massage rollers visible through a mesh panel; a small speaker built into each side of the headrest; a footrest sliding out from under the front of the seat; a swing arm tray table attached to one armrest, holding a laptop; a cup holder on the other armrest; a thick power cord running from the base of the chair to a wall socket; bright red wheels; and a white price tag on the armrest that reads $380.'
        }
      ]
    }
  });
})();
