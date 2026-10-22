/* Rowe CELPIP Mock Exam: Test 26 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/26/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '26',
    title: 'Mock Test 26',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { JUN: { name: 'Jun', g: 'm', skin: '#e8c39e', hair: '#151515', shirt: '#1f618d', style: 'short' }, ILONA: { name: 'Ilona', g: 'f', skin: '#f2cfb0', hair: '#8e5a2b', shirt: '#7d3c98', style: 'long' } },
        segments: [{
          lines: [
            ['JUN', 'The ten past seven showing only has seats left in the front row. The twenty to ten one has plenty in the middle.'],
            ['ILONA', 'The front row, for a three-hour movie? My neck would never forgive me.'],
            ['JUN', 'Sure, but with the late one we won\'t be out until nearly one, and I\'m on the early shift tomorrow.'],
            ['ILONA', 'Then let\'s give tonight a miss altogether and book Saturday afternoon. We\'d have our pick of seats.']
          ],
          questions: [
            { id: 'LP.1', q: 'What does Ilona suggest they do?', o: ['See the movie on a different day', 'Sit in the front row this evening', 'Go to the later showing tonight', 'Ask for seats near the middle'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { IMANI: { name: 'Imani', g: 'f', skin: '#7a4a2a', hair: '#120c08', shirt: '#c0392b', style: 'curly' }, JASPER: { name: 'Jasper', g: 'm', skin: '#f0c9a6', hair: '#a0703a', shirt: '#2e4053', style: 'short' } },
          segments: [
            {
              lines: [
                ['IMANI', 'Jasper, the car\'s gone. I\'m standing exactly where we left it last night, behind the pharmacy on Carlton Street, and there\'s nothing here but a puddle.'],
                ['JASPER', 'Gone? Are you sure it\'s the right spot? We were in a hurry after the concert.'],
                ['IMANI', 'Positive. And there\'s a sign on the fence I didn\'t notice last night. Customer parking only, eight to nine. Violators towed at owner\'s expense.'],
                ['JASPER', 'Oh, come on. We got there after ten. The pharmacy was already closed.'],
                ['IMANI', 'Read the small print, though. No overnight parking at any time. So, yeah, we\'re in the wrong. I\'ve called Ridgeway Towing, out by the airport.'],
                ['JASPER', 'How bad is the damage?'],
                ['IMANI', 'The tow itself is a hundred and sixty. On top of that, storage is twenty-five dollars for each day or part of a day, starting from when it reached the yard.'],
                ['JASPER', 'So if we get it out today, we\'re only paying for the one day.'],
                ['IMANI', 'That\'s how I understood it. But it\'s cash or debit only. No credit cards.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why was the car towed?', o: ['The lot cannot be used by cars staying the night.', 'The pharmacy closed earlier than it usually does.', 'They parked in a space kept for pharmacy staff.', 'The sign allowed customers to stay until ten.'] },
                { id: 'L1.2', q: 'How much do they expect to pay if they collect the car today?', o: ['$185', '$160', '$210', '$135'] },
                { id: 'L1.3', q: 'What is Imani\'s attitude toward the tow?', o: ['She admits they broke the rules.', 'She thinks the sign was placed unfairly.', 'She blames Jasper for choosing that spot.', 'She plans to refuse to pay the charges.'] }
              ]
            },
            {
              lines: [
                ['JASPER', 'Okay, problem number two. The ownership papers are in the glove box. In the car. At the tow yard.'],
                ['IMANI', 'I asked about that. They\'ll walk one person out to the car to get them, as long as that person has photo ID and is named on the insurance.'],
                ['JASPER', 'Then it has to be you. I\'m still not on the policy. We kept meaning to add me and never got around to it.'],
                ['IMANI', 'I know, I know. Okay, I\'ll go. But I\'m working twelve to eight today, and the yard closes at six.'],
                ['JASPER', 'Could you swap shifts with someone? Or take a long lunch?'],
                ['IMANI', 'A long lunch, maybe. Inga owes me a favour. But the yard\'s a forty-minute bus ride, and that route only runs every half hour.'],
                ['JASPER', 'Then forget the bus and grab a cab out there. I\'ll cover it. Otherwise you\'ll spend your whole break at bus stops.'],
                ['IMANI', 'A cab out there will be forty dollars, easily, on top of everything else.'],
                ['JASPER', 'Then it\'s money well spent. Every extra day costs another twenty-five, and we need the car Friday anyway.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why must Imani be the one to collect the car?', o: ['Only she is covered by the insurance.', 'Only she has photo identification today.', 'Jasper has lost the key to the glove box.', 'Jasper is working until the yard closes.'] },
                { id: 'L1.5', q: 'Why does Jasper want Imani to take a taxi?', o: ['The bus would use up too much of her break.', 'The bus does not go as far as the tow yard.', 'A taxi would cost less than the bus fare.', 'Inga can only cover her shift for an hour.'] },
                { id: 'L1.6', q: 'What can be inferred about adding Jasper to the insurance?', o: ['They have been putting it off for a while.', 'The insurance company turned down his request.', 'It would cost them forty dollars more a month.', 'Imani did not know that it was necessary.'] }
              ]
            },
            {
              lines: [
                ['IMANI', 'Okay, update. I\'ve got the car, but you won\'t believe this. They charged me storage for two days, not one.'],
                ['JASPER', 'Two? You were there by two o\'clock.'],
                ['IMANI', 'That\'s what I said. It turns out they count storage by the calendar day, and the car reached the yard at eleven last night. So last night counts as a whole day.'],
                ['JASPER', 'That\'s ridiculous. One hour before midnight costs us an extra twenty-five?'],
                ['IMANI', 'Apparently. But here\'s better news. I went back to photograph the sign, and the pharmacy manager came out. She\'s had a dozen complaints, because from the street, the sign\'s hidden behind a hedge.'],
                ['JASPER', 'So what, is she going to refund us?'],
                ['IMANI', 'Not exactly. The pharmacy can\'t cancel the fee. But she gave me the property manager\'s email, and she said a written complaint with photos usually gets people half the tow fee back.'],
                ['JASPER', 'Half of a hundred and sixty is better than nothing. Send me those photos, and leave the rest to me tonight. You\'ve done more than enough today.']
              ],
              questions: [
                { id: 'L1.7', q: 'What did Imani learn about the storage charge?', o: ['A short time before midnight counted as a full day.', 'Storage is charged for every twelve hours.', 'The car was towed at six in the morning.', 'Paying by debit costs an extra day of storage.'] },
                { id: 'L1.8', q: 'What will Jasper probably do this evening?', o: ['Write to ask for part of the fee back', 'Go back to the lot to photograph the hidden sign', 'Ask the pharmacy manager to cancel the towing fee', 'Pay the extra storage charge by debit'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { TAILOR: { name: 'Tailor', g: 'm', skin: '#c68642', hair: '#bdc3c7', shirt: '#566573', style: 'bald' }, JOELLE: { name: 'Joelle', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#117a65', style: 'bun' } },
          segments: [{
            lines: [
              ['TAILOR', 'Good afternoon. Picking something up?'],
              ['JOELLE', 'Dropping off, I hope. I\'ve got a job interview a week from Thursday, and this is the only decent suit I own. The trousers are too long, and the jacket feels a bit loose.'],
              ['TAILOR', 'Let\'s have you slip it on. Okay. The trousers are easy, I\'ll take them up about three centimetres. The jacket, though. It\'s not a bit loose, it\'s swimming on you.'],
              ['JOELLE', 'I\'ve lost about ten kilos since last winter. I took up running.'],
              ['TAILOR', 'Good for you, bad for the jacket. Taking in the sides and the back is a big job. That\'s ninety dollars, and the hem on the trousers is another twenty-five.'],
              ['JOELLE', 'Ninety? I only paid a hundred and fifty for the whole suit, on sale.'],
              ['TAILOR', 'I hear that a lot. Honestly, at that price, you might be better off buying a jacket in your size and letting me do just the trousers.'],
              ['JOELLE', 'Except I\'d never find one that matches these trousers.'],
              ['TAILOR', 'Fair point. Then here\'s another thought. Plenty of people wear a dark blazer with lighter trousers these days, unless it\'s a very formal office. What\'s the job?'],
              ['JOELLE', 'Event coordinator at a conference centre. They seem fairly relaxed, from their website, but I don\'t want to take any chances.'],
              ['TAILOR', 'Then nobody\'s going to bat an eye at a navy blazer and grey trousers. But it\'s your call.'],
              ['JOELLE', 'Hmm. I think I\'d still feel more confident in a proper suit. How long would all of it take?'],
              ['TAILOR', 'Normally ten days. We\'re swamped with graduation season. For an extra thirty, I can have it ready by Monday.'],
              ['JOELLE', 'Ten days from today puts me past the interview. I guess I\'m paying for the rush, then.'],
              ['TAILOR', 'Fair enough. Oh, and one of the sleeve buttons is hanging by a thread. I\'ll sew that back on, no charge.'],
              ['JOELLE', 'Thank you. Can I pay when I pick it up?'],
              ['TAILOR', 'Half now, please, and the rest on Monday. And try everything on before you leave the shop, just in case.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why does the jacket no longer fit Joelle well?', o: ['She has become slimmer through exercise.', 'It was bought on sale in the wrong size.', 'It stretched after being cleaned last winter.', 'It was made for someone much taller.'] },
              { id: 'L2.2', q: 'Why does the tailor suggest buying a new jacket?', o: ['The repair would cost a lot for such a cheap suit.', 'The jacket cannot be taken in any further.', 'Matching jackets are easy to find in stores.', 'He has no time to alter it before Monday.'] },
              { id: 'L2.3', q: 'What does the tailor imply about a blazer?', o: ['It would be suitable for the job she wants.', 'It is only acceptable in very formal offices.', 'Most employers find it too casual for interviews.', 'It would cost more than altering the suit.'] },
              { id: 'L2.4', q: 'Why does Joelle choose the faster service?', o: ['The usual wait would be too long.', 'She wants to wear the suit to a graduation.', 'The rush price includes the button repair.', 'She will be out of town for ten days.'] },
              { id: 'L2.5', q: 'How much will Joelle pay in total?', o: ['$145', '$115', '$120', '$175'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#943126', style: 'short' }, JESSAMYN: { name: 'Jessamyn Quill', g: 'f', skin: '#f5d6bc', hair: '#d9b56a', shirt: '#1a5276', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Jessamyn Quill, a sign language interpreter in Owen Sound who works mostly at medical appointments and public events. Jessamyn, what drew you to the job?'],
              ['JESSAMYN', 'My parents are both Deaf, so sign language was really my first language. For years I interpreted for them at the bank or the doctor\'s office, but I never thought of it as a career. It was just something I did on Saturdays.'],
              ['HOST', 'So when did it become one?'],
              ['JESSAMYN', 'In my late twenties. A clinic called my mother at the last minute because their interpreter had cancelled, and she asked me to fill in.'],
              ['JESSAMYN', 'Afterward, the nurse took me aside and said I should get certified, because good interpreters were so hard to find. That stuck with me.'],
              ['HOST', 'What does certification involve?'],
              ['JESSAMYN', 'Two years of college, then an exam that plenty of people fail the first time round, and I was no exception.'],
              ['JESSAMYN', 'Being fluent isn\'t enough. You have to keep up with someone talking quickly, in real time, without slipping in your own opinions.'],
              ['HOST', 'Medical appointments must be tricky.'],
              ['JESSAMYN', 'They\'re the hardest part of my week. A doctor might use a term I\'ve never come across, and I can\'t just guess. So I stop and ask for an explanation. Some doctors get impatient, but I\'d much rather be slow than wrong.'],
              ['HOST', 'And public events?'],
              ['JESSAMYN', 'A completely different animal. Town meetings, concerts, even a comedy show once. Jokes are the worst, because a pun in English almost never works in sign. I\'ve got about two seconds to come up with something that gets a laugh in the right place.'],
              ['HOST', 'I imagine audiences often watch you rather than the speaker.'],
              ['JESSAMYN', 'Hearing people do, yes. They find it fascinating. But my job is to be close to invisible. If people remember me more than the speaker, I\'ve done something wrong.'],
              ['HOST', 'Is there enough work?'],
              ['JESSAMYN', 'Far too much. Outside the big cities, there are only a handful of us, so I sometimes drive two hours for a single appointment.'],
              ['JESSAMYN', 'Video interpreting has helped, but many Deaf patients still want someone in the room, especially when the news might be bad.'],
              ['HOST', 'If you could change one thing, what would it be?'],
              ['JESSAMYN', 'I\'d like every hospital to book an interpreter as automatically as it books an examining room.'],
              ['JESSAMYN', 'Right now, it\'s usually up to the patient to ask, and far too often they end up bringing along a son or a daughter instead. Which, of course, is exactly how I got started.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Jessamyn first learn sign language?', o: ['She grew up using it with her family.', 'She studied it at college in her twenties.', 'A nurse taught her at a local clinic.', 'She picked it up while working at a bank.'] },
              { id: 'L3.2', q: 'What made Jessamyn think about getting certified?', o: ['A nurse\'s advice after she helped out', 'A request from her mother to take the exam', 'A job offer from the clinic that called her', 'A shortage of other work in her town'] },
              { id: 'L3.3', q: 'What does Jessamyn imply about her own exam?', o: ['She did not pass it on her first attempt.', 'She found it easier than most people do.', 'She took it before going to college.', 'She passed it without any formal training.'] },
              { id: 'L3.4', q: 'Why does Jessamyn stop to question doctors?', o: ['She puts accuracy ahead of speed.', 'Patients ask her to slow the doctor down.', 'Doctors prefer to explain every term twice.', 'She wants patients to learn medical words.'] },
              { id: 'L3.5', q: 'Why does Jessamyn mention the comedy show?', o: ['To show how hard it is to carry humour into sign', 'To explain why she prefers working at concerts', 'To describe an event where she was not needed', 'To show that audiences often watch the interpreter'] },
              { id: 'L3.6', q: 'What does Jessamyn suggest about family members interpreting?', o: ['It happens often but is not the best solution.', 'It works better than video interpreting does.', 'Hospitals now require it for most patients.', 'It is the best way to train new interpreters.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#b07850', hair: '#2a1b12', shirt: '#1b2631', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Snowmobilers heading out on the provincial trail network this winter will face new rules, as the province tightens safety and permit requirements after one of the busiest seasons on record.'],
              ['NEWS', 'Starting December first, every snowmobile on the network must display a trail permit. A seasonal permit will cost two hundred and ten dollars if it is bought before November first, and fifty dollars more after that date.'],
              ['NEWS', 'Day permits will also be sold for visitors who only plan to ride once or twice.'],
              ['NEWS', 'Money from permits pays for grooming, signs and the work of the volunteers who look after more than thirty thousand kilometres of trail.'],
              ['NEWS', 'The province is also lowering the speed limit from fifty to forty kilometres an hour within five hundred metres of homes. Riders caught without a permit could be fined up to one thousand dollars.'],
              ['NEWS', 'For the first time, riders aged twelve to fifteen will have to complete an online safety course, and they must be accompanied by an adult whenever they are on the trail.'],
              ['NEWS', 'Club volunteers in the Haliburton area say the changes are long overdue. Last winter, speeding near cottages and riders cutting across private land without permission led to a string of complaints.'],
              ['NEWS', 'Some landowners even threatened to close sections of trail that cross their property. Because so many trails run over private land, clubs depend entirely on the goodwill of the owners.'],
              ['NEWS', 'Riders are also being reminded to check ice conditions before crossing any lake, and to carry a fully charged phone, since cell coverage is patchy on many trails.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Stricter rules for trail riders', 'A shortage of volunteers to groom trails', 'A plan to build trails on private land', 'Unsafe ice on lakes across the province'] },
              { id: 'L4.2', q: 'How much will a seasonal permit cost if it is bought in mid-November?', o: ['$260', '$210', '$250', '$50'] },
              { id: 'L4.3', q: 'What is the permit money used for?', o: ['Keeping the trails in good condition', 'Paying for the online safety course', 'Buying private land for new trails', 'Hiring officers to hand out fines'] },
              { id: 'L4.4', q: 'Why does the report mention landowners?', o: ['Clubs could lose trails on their land.', 'They asked for the speed limit to be raised.', 'They will sell day permits to visitors.', 'They are paid for each rider who crosses.'] },
              { id: 'L4.5', q: 'What must riders aged twelve to fifteen now do?', o: ['Take a course and always ride with an adult', 'Buy a cheaper youth trail permit', 'Stay at least five hundred metres from homes', 'Ride only on weekends during daylight'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Moving to the third floor', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { JACQUELINE: { name: 'Jacqueline', g: 'f', skin: '#5c3a21', hair: '#120c08', shirt: '#7b241c', style: 'bun' }, KEITH: { name: 'Keith', g: 'm', skin: '#f2cfb0', hair: '#6b4a2b', shirt: '#1f618d', style: 'short' }, IRIS: { name: 'Iris', g: 'f', skin: '#e8c39e', hair: '#2a1b12', shirt: '#196f3d', style: 'long' } },
          segments: [{
            lines: [
              ['JACQUELINE', 'Okay, let\'s get going. We move up to the third floor in two months, and it has thirty desks.'],
              ['KEITH', 'Thirty desks for forty-five people. I still can\'t believe head office signed that lease.'],
              ['JACQUELINE', 'Well, they did, so we have to make it work. Iris, you looked at how other offices handle this?'],
              ['IRIS', 'Most use hot desking. Nobody owns a desk; you book one in an app the day before.'],
              ['KEITH', 'And every morning you\'re hunting for a spot that isn\'t next to the printer. No thanks.'],
              ['IRIS', 'Not if it\'s done properly. On a typical day, only about twenty-five of us are actually in the office.'],
              ['JACQUELINE', 'Actually, that\'s out of date. Since the new attendance policy, we\'re averaging quite a bit more.'],
              ['KEITH', 'Which means that on some days there won\'t be enough desks, whatever system we pick.'],
              ['IRIS', 'Unless each team gets set office days. Sales Monday to Wednesday, finance Wednesday to Friday, something like that.'],
              ['KEITH', 'Then Wednesday\'s a free-for-all. Both teams in at once, people eating lunch on windowsills.'],
              ['IRIS', 'Okay, fair. So nobody comes in on Wednesdays. It becomes a work-from-home day for everyone.'],
              ['JACQUELINE', 'I like that. And as a bonus, the cleaners would get one quiet day a week to do the carpets.'],
              ['KEITH', 'My bigger worry is all our stuff. I\'ve got binders, a plant, and about two years of coffee mugs.'],
              ['IRIS', 'Lockers. The landlord\'s offered forty of them, free, along the back wall. Your mugs can live in there.'],
              ['KEITH', 'And the plant?'],
              ['IRIS', 'The plant becomes office property, Keith. Somebody will water it.'],
              ['KEITH', 'Somebody. That\'s exactly what worries me.'],
              ['JACQUELINE', 'Moving on. Several people have asked for somewhere they can make private phone calls.'],
              ['KEITH', 'The floor plan shows two meeting rooms. Couldn\'t we keep one of them for calls?'],
              ['JACQUELINE', 'Those are booked solid by clients most afternoons. I\'d rather turn the little storage room into a phone booth.'],
              ['IRIS', 'It has no window, though. Nobody\'s going to want to spend an hour shut in there.'],
              ['JACQUELINE', 'They won\'t need an hour. We\'ll set a fifteen-minute limit and add a fan.'],
              ['KEITH', 'Fine. But what about the managers? Do they get to keep their own offices?'],
              ['JACQUELINE', 'No. Head office was very clear: managers hot desk too. I\'m giving up my own office as well.'],
              ['IRIS', 'Honestly, that\'ll make the whole thing much easier to sell to everyone else.'],
              ['KEITH', 'I\'ll admit, I didn\'t see that coming. Okay. So who\'s breaking the news to staff?'],
              ['JACQUELINE', 'I will, at Friday\'s meeting. Iris, could you try out a couple of booking apps before then?'],
              ['IRIS', 'Sure. I\'ll find two with free trials and let a few volunteers test them.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main problem the group is discussing?', o: ['The new space has fewer desks than there are staff.', 'Head office wants everyone in the office every day.', 'The lease for the third floor ends in two months.', 'Too few employees come into the office each day.'] },
              { id: 'L5.2', q: 'What does Jacqueline correct about Iris\'s figure?', o: ['More people come in each day than Iris said.', 'Fewer than twenty-five people come in each day.', 'Only thirty people now work in the office.', 'Attendance has fallen since the new policy.'] },
              { id: 'L5.3', q: 'What is Keith\'s first reaction to hot desking?', o: ['He doubts it will work well in daily practice.', 'He thinks it will save the company money.', 'He prefers it to having team office days.', 'He is worried about how much the app costs.'] },
              { id: 'L5.4', q: 'Why does the group make Wednesday a work-from-home day?', o: ['To avoid a day when both teams would be in', 'Because the cleaners asked for a quiet day', 'Because head office wanted one remote day', 'To give staff time to try the booking app'] },
              { id: 'L5.5', q: 'Why is Keith worried about his plant?', o: ['He fears nobody will look after it.', 'It will not fit inside one of the lockers.', 'Plants are not allowed on the new floor.', 'He will have to buy the office a new one.'] },
              { id: 'L5.6', q: 'Why does Jacqueline reject using a meeting room for calls?', o: ['Clients use those rooms heavily.', 'The rooms do not have windows.', 'Calls there would be time-limited.', 'The rooms are too big for one person.'] },
              { id: 'L5.7', q: 'How does Jacqueline answer Iris\'s concern about the storage room?', o: ['She says people will only use it briefly.', 'She agrees to look for a room with a window.', 'She suggests making calls at desks instead.', 'She offers to give up her office for calls.'] },
              { id: 'L5.8', q: 'Why does Iris think Jacqueline\'s decision about her office matters?', o: ['Staff will accept the change more readily.', 'It will free up a third meeting room.', 'Managers need private space for calls.', 'Head office will reward the team for it.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Ban gas leaf blowers?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#d6a07a', hair: '#333333', shirt: '#0e6655', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'Every fall, as the leaves come down, a familiar sound fills Canadian neighbourhoods: the high whine of gas-powered leaf blowers. Several cities are now considering a ban, and the debate has been surprisingly heated.'],
              ['NARR', 'Jovana Marsh, a retired nurse who leads a neighbourhood association in Nanaimo, is pushing for a ban. Her first argument is about noise, and not only how loud the machines are, but how long they run.'],
              ['NARR', 'A single gas blower, she says, can be heard several houses away, and in a dense neighbourhood, crews move from yard to yard all day. For people working from home, night-shift workers or parents with a newborn, there is no escape.'],
              ['NARR', '"It\'s not one neighbour making noise for ten minutes," she says. "It\'s the whole street, every weekday, from September to December."'],
              ['NARR', 'Her second argument is about the air. Many older blowers use small two-stroke engines that burn fuel mixed with oil, releasing more pollution in an hour than a modern car on a long drive.'],
              ['NARR', 'The workers holding them, she notes, breathe that exhaust all day.'],
              ['NARR', 'Marsh is not asking anyone to rake every leaf by hand. Battery-powered blowers are far quieter and produce no exhaust at all, and she believes a ban on gas models would simply push the industry to switch sooner.'],
              ['NARR', 'Kasimir Holt, who runs a landscaping company with twelve employees near Peterborough, says a ban sounds simple, but it would hit small businesses like his hardest.'],
              ['NARR', 'His first argument is cost. A commercial battery blower, with enough spare batteries to last a full working day, costs several times as much as a gas machine, and the batteries wear out within a few years.'],
              ['NARR', 'Those costs, he says, would be passed on to customers. Many of his clients are seniors on fixed incomes who can no longer do the work themselves, and a large price increase could put the service out of their reach.'],
              ['NARR', 'His second argument is about time. Battery blowers, in his experience, are still less powerful, especially on wet leaves, so a one-hour job can stretch to an hour and a half.'],
              ['NARR', '"In the fall, we\'re racing the snow," he says. "Every extra half hour per yard adds up fast."'],
              ['NARR', 'Holt does accept that the noise is a genuine problem. His crews no longer start before eight in the morning, and he would support a bylaw limiting the hours when blowers can be used.'],
              ['NARR', 'Rules on hours, he argues, would deal with most complaints without forcing companies to scrap equipment that still works.'],
              ['NARR', 'Marsh replies that limits on hours have been tried elsewhere and are almost impossible to enforce, because by the time a bylaw officer arrives, the crew has moved on.'],
              ['NARR', 'She adds that some cities planning bans are offering rebates to help businesses buy battery equipment. Holt responds that the rebates he has seen cover only a small share of the cost, and often only for homeowners.'],
              ['NARR', 'Both agree on one thing: many leaves don\'t need to be blown anywhere. Left on garden beds, they protect plants through the winter and feed the soil in the spring.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether gas-powered leaf blowers should be banned', 'How cities pay for collecting leaves in the fall', 'Why the cost of yard care has risen so sharply', 'Whether people should go back to raking leaves'] },
              { id: 'L6.2', q: 'What bothers Marsh most about the noise?', o: ['It carries on daily through the whole fall.', 'It is louder than any other garden machine.', 'It usually begins too early in the morning.', 'It mainly affects people who work at night.'] },
              { id: 'L6.3', q: 'Why does Marsh mention the workers who hold the blowers?', o: ['To show that the operators are harmed too', 'To argue that workers need ear protection', 'To suggest that crews work too many hours', 'To explain why older machines are so loud'] },
              { id: 'L6.4', q: 'What does Holt fear would happen to some of his clients?', o: ['They could no longer afford to hire his crews.', 'They would have to rake their own yards.', 'They would need to buy battery blowers.', 'They would face longer waits for service.'] },
              { id: 'L6.5', q: 'Why does Holt mention the snow?', o: ['To stress that slower work in the fall is costly', 'To explain why battery blowers fail in winter', 'To argue that leaves can be left until spring', 'To show that his crews also clear snow in winter'] },
              { id: 'L6.6', q: 'Why does Marsh doubt Holt\'s proposal?', o: ['Time limits are very hard to actually police.', 'Crews already ignore the eight o\'clock start.', 'Rebates already make battery blowers cheap.', 'Most complaints are about work on weekends.'] }
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
          passage: '<h3>Message</h3><p>Hi Jude,</p><p>It feels like ages since you packed up and moved to Gander, and the Kempenfelt Community Choir has not been the same without your voice. I am writing with news and, I will admit, with a favour up my sleeve.</p><p>First, the news. The choir turns twenty-five this spring, and we are marking it with a concert at the Lakeshore Arts Centre in Barrie on Saturday, May 16. Josiane, who has conducted us since the very first rehearsal, has decided that this will be her last concert before she retires. She has not made any fuss about it, which is so typical of her, but I know it would mean the world to her if some familiar faces turned up.</p><p>Now the favour. Josiane has chosen to end the evening with "Northern Lullaby," the piece you sang the solo in at our tenth anniversary. Nobody in the current choir can reach those low notes the way you did, and when I mentioned your name at our last rehearsal, half the room burst into applause. Would you consider coming back to sing it?</p><p>I realize Gander is not exactly around the corner, so here is what I have in mind. You would learn the music at home from a recording I will send you. Our regular rehearsals are on Tuesday evenings with Josiane, but you would skip those. Instead, our accompanist, Kamal, has offered to practise with you privately at his house on the Wednesday and Thursday before the concert. That means arriving by May 13 at the latest. You are very welcome to stay in our spare room; the kids have already been told that our guest will be a famous singer, so be prepared.</p><p>As for costs, the choir committee has agreed to pay for your return flight out of the anniversary fund. Unfortunately, they cannot stretch to anything else, so any meals out would be on you, although I suspect you will be too busy eating my cooking to need them.</p><p>Here is the best part: Josiane knows nothing about any of this, and I would love to keep it that way. In the printed programme, the soloist would be listed only as "a special guest," and you would stay backstage until you walk on for the last piece.</p><p>Could you let me know by the end of the month? The programmes go to the printer on April 3.</p><p>Warmly,<br>Kendra</p>',
          questions: [
            { id: 'R1.1', q: 'Kendra describes how Josiane is treating her retirement in order to suggest that Josiane', o: ['would quietly appreciate a special gesture.', 'is unhappy about having to leave the choir.', 'has asked former members to come back.', 'is planning a large farewell party.'] },
            { id: 'R1.2', q: 'The choir members\' reaction to Jude\'s name shows that they', o: ['would be glad to have him sing with them again.', 'want Kendra to find a different soloist.', 'have been practising the low notes themselves.', 'voted to change the piece that ends the concert.'] },
            { id: 'R1.3', q: 'Kendra\'s plan would save Jude from travelling every week because he could', o: ['prepare the music on his own first.', 'join the Tuesday rehearsals online.', 'sing a shorter version of the solo.', 'stay in Barrie for the whole spring.'] },
            { id: 'R1.4', q: 'The practices at Kamal\'s house are planned so that', o: ['the conductor will not find out too soon.', 'Jude can rehearse with the whole choir.', 'Kamal has time to learn the piece himself.', 'Kendra\'s children can hear Jude sing.'] },
            { id: 'R1.5', q: 'If Jude agrees to come, he would be expected to pay for', o: ['his own food at restaurants.', 'his return flight to Barrie.', 'a room in a nearby hotel.', 'part of the printing costs.'] },
            { id: 'R1.6', q: 'Kendra needs an answer by the end of the month because', o: ['the programme must be finalized soon.', 'flights become more expensive in April.', 'Josiane will announce her plans in April.', 'Kamal is only free until early April.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Kendra,</p><p>What a lovely surprise to hear from you, and what news about Josiane! I can hardly believe she is finally stepping down. Of course I will come. I would not miss the chance to [[R1.7]].</p><p>Since I cannot get away from work for weeks at a time, I am relieved that I can [[R1.8]] and only join you in person at the very end. I have already looked at flights, and I can land in Toronto on [[R1.9]], which leaves me plenty of time to get up to Barrie before my first practice with Kamal.</p><p>Thank you for the offer of your spare room. Please warn the children that [[R1.10]]; they may be disappointed when an ordinary man with a suitcase walks through the door.</p><p>Finally, I love the idea of the surprise. Just make sure that my name does not appear anywhere in the programme, and that it says only [[R1.11]], or the secret could be out before the first note.</p><p>See you in May,<br>Jude</p>',
          blanks: [
            { id: 'R1.7', o: ['help give her the send-off she deserves', 'conduct the choir one last time', 'sing at the tenth anniversary again', 'join the choir committee once more'] },
            { id: 'R1.8', o: ['learn my part from the recording', 'attend the Tuesday rehearsals', 'rehearse with Josiane by phone', 'skip the practices with Kamal'] },
            { id: 'R1.9', o: ['Tuesday, May 12', 'Thursday, May 14', 'Friday, May 15', 'Saturday, May 16'] },
            { id: 'R1.10', o: ['they should not expect anyone famous', 'I will be bringing my own recording', 'I would rather stay in a hotel', 'Josiane must not hear me practise'] },
            { id: 'R1.11', o: ['"a special guest"', '"the soloist from Gander"', '"Jude, a former member"', '"our retiring conductor"'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Orchard Valley Storage, Kentville: Unit Sizes and Monthly Prices</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Unit</th><th>Size</th><th>Usually holds</th><th>Monthly price</th></tr></thead><tbody>' +
            '<tr><td>Locker</td><td>1.5 m by 1.5 m</td><td>Boxes, a bicycle, seasonal items</td><td>$45</td></tr>' +
            '<tr><td>Small</td><td>1.5 m by 3 m</td><td>Furniture from a studio apartment</td><td>$80</td></tr>' +
            '<tr><td>Medium</td><td>3 m by 3 m</td><td>Furniture from a one-bedroom apartment</td><td>$125</td></tr>' +
            '<tr><td>Large</td><td>3 m by 6 m</td><td>Furniture from a three-bedroom house</td><td>$210</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Climate control (heated in winter, dry all year) is available for Medium and Large units only, for $20 more per month.</li><li>Pay 6 months in advance and the sixth month is free.</li><li>A one-time $25 administration fee is charged at move-in. It is waived for customers who pay 6 months in advance.</li><li>Students with valid ID save 10% on the monthly price of any unit rented between May 1 and August 31. The discount does not apply to climate control or insurance.</li><li>Insurance on stored items is required: $12 per month, unless you show a home or tenant insurance policy that covers items in storage.</li><li>To move out, give at least 15 days\' written notice. Otherwise, one extra month is charged.</li><li>Free use of our moving truck on move-in day with any Medium or Large unit. Book it at least 48 hours ahead.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Ignacio,</p><p>Good news: I have found somewhere to keep my things while I am away at my co-op placement in Iqaluit from May 5 to August 28. All I own is a bed, a desk, a bookcase and about fifteen boxes, which the staff at Orchard Valley say will fit in [[R2.1]]. I would have liked climate control for my books, but [[R2.2]], so I will pack them in plastic bins instead.</p><p>With my student card, the rent will come to [[R2.3]] a month. I also checked my tenant insurance, and it covers items in storage, so [[R2.4]].</p><p>I was hoping to borrow their free truck on move-in day, but [[R2.5]]. Could I borrow your van on the morning of May 2? I will buy lunch.</p><p>Ivy</p>',
          blanks: [
            { id: 'R2.1', o: ['a Small unit', 'a Locker', 'a Medium unit', 'a Large unit'] },
            { id: 'R2.2', o: ['it is not offered for a unit that size', 'my things will be stored for only four months', 'students cannot add it during the summer', 'it costs more than the unit itself'] },
            { id: 'R2.3', o: ['$72', '$80', '$84', '$68'] },
            { id: 'R2.4', o: ['I will not have to pay the $12 fee', 'I need to buy extra coverage from them', 'I get 10% off the insurance as well', 'I must keep my boxes somewhere else'] },
            { id: 'R2.5', o: ['my unit is too small to qualify', 'it must be paid for in advance', 'it is not available to students', 'it is only free from May to August'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Ivy wants to empty her unit and stop renting on August 31. To avoid an extra charge, she must give notice no later than', o: ['August 16.', 'August 31.', 'August 1.', 'July 31.'] },
            { id: 'R2.7', q: 'A family stores the furniture from their three-bedroom house in a climate-controlled unit, pays for 6 months in advance and shows proof that their home insurance covers stored items. They will pay', o: ['$1,150.', '$1,380.', '$1,175.', '$1,260.'] },
            { id: 'R2.8', q: 'A college student with valid ID rents a Medium unit from September to December. Her monthly rent will be', o: ['$125, as the discount does not apply.', '$112.50, because she has a student card.', '$145, because climate control is included.', '$100, because she is renting for four months.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Behind the Weather Forecast</h3><p><b>A.</b> Every forecast begins with measurements. Across Canada, hundreds of automatic stations record temperature, wind, humidity and air pressure every minute, and their readings are shared with weather services around the world almost at once. Twice a day, at the same hour everywhere on the planet, staff at selected sites release balloons that climb more than twenty kilometres, sending back readings as they rise until they finally burst. Satellites and radar fill in much of the rest, but large gaps remain, especially over the oceans and in the far North, where stations can be hundreds of kilometres apart. For that reason, readings from ships and passenger aircraft are also collected, and in some rural areas, volunteers still measure snowfall with a ruler each morning and report it online.</p><p><b>B.</b> These measurements are fed into computer models: programs that divide the atmosphere into millions of boxes and calculate how the air in each box will change over the next few minutes, then repeat the process thousands of times to look days ahead. Because a tiny error at the start can grow into a large one, forecasters rarely rely on a single run. Instead, they run the same model dozens of times, each with slightly different starting values. If most runs agree, confidence is high; if they spread out in every direction, the forecast is uncertain. This is why forecasts for the next two days are usually reliable, while those more than a week away are little better than an educated guess.</p><p><b>C.</b> Computers do not have the final word. Human forecasters compare models, which often disagree, and adjust them using what they know about local conditions. A model may not "see" that a particular valley traps cold air overnight, or that a large lake will add moisture to passing clouds and turn light flurries into heavy snow along its eastern shore. Forecasters also decide how to describe risk. A "forty percent chance of rain" is widely misunderstood: it does not mean rain for forty percent of the day, but that on days like this one, measurable rain falls at a given spot about four times in ten.</p><p><b>D.</b> The final challenge is getting people to act. Weather services now issue colour-coded alerts and send warnings directly to phones, but experts say that too many alerts can backfire, as people learn to tune them out. Studies of severe storms have found that people are more likely to take shelter when a warning describes what will happen to them, such as roads becoming impassable, rather than simply listing wind speeds. Some services have also begun explaining their uncertainty more openly, on the theory that the public will trust a forecast more if it admits what it does not know.</p>',
          questions: [
            { id: 'R3.1', q: 'Information from planes helps to cover areas with few weather stations.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Forecasts for a week ahead are now as accurate as next-day forecasts used to be.', fixed: true, a: 'E' },
            { id: 'R3.3', q: 'Repeating a calculation with small changes shows how sure a prediction is.', fixed: true, a: 'B' },
            { id: 'R3.4', q: 'Local features such as a lake can lead a computer model to underestimate snowfall.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'Warnings that explain practical effects are more likely to be followed.', fixed: true, a: 'D' },
            { id: 'R3.6', q: 'Volunteers who measure snowfall are paid a small amount for each report.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'A common way of stating the likelihood of rain is often taken to mean how long it will last.', fixed: true, a: 'C' },
            { id: 'R3.8', q: 'Balloons are launched on a worldwide schedule and send data until they break.', fixed: true, a: 'A' },
            { id: 'R3.9', q: 'Most Canadians now check the weather on phone apps rather than on television.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Hospitals Charge for Parking?</h3><p>When Ingeborg Rask\'s husband spent five weeks in a regional hospital in northern Ontario last winter, she visited him every day. By the time he came home, she had paid more than $600 for parking, at $18 a day. "I would have paid anything to be with him," she says, "but I should not have had to." Rask now leads a volunteer campaign calling for free parking at hospitals across the province, and she is far from alone. Parking fees are among the most common complaints hospitals receive, yet most hospitals say they cannot afford to give up the money.</p><p>Rask argues that parking fees are a tax on being sick. Patients with long-term illnesses, such as those who need cancer treatment or dialysis several times a week, pay again and again, often while they are unable to work. Families who live far from the hospital, she adds, have no choice but to drive, because there is little or no public transit in rural areas. She points out that several other provinces have already eliminated or sharply reduced hospital parking fees.</p><p>Jethro Kincaid, the chief financial officer of a mid-sized hospital, understands the frustration but says the numbers tell a different story. Parking brings his hospital about $3 million a year, money that helps pay for equipment the government does not fully fund, such as new beds and monitors. The lots themselves also cost money to plow, light and patrol. "If parking were free, that money would have to come from somewhere," he says, "and I would rather not take it from patient care." He adds that free lots near a hospital tend to fill up with people who are not visiting at all, such as nearby office workers and shoppers.</p><p>Kincaid\'s hospital already offers some relief. Patients and families who visit often can buy a 30-day pass for $75, and families of patients receiving end-of-life care park for free. Rask says such programs are poorly advertised. "Nobody told me about the pass until my third week," she says. Kincaid admits that awareness is a problem, and his hospital has begun printing the information on admission forms.</p><p>Kelvin Ashdown, a health economist who has studied parking fees in several provinces, takes a middle position. Completely free parking, he says, mostly benefits occasional visitors who could easily afford to pay, while the people who truly struggle are a relatively small group of frequent patients. He recommends a weekly cap, so that no one pays more than a set amount in a single week, and discounts that are applied automatically rather than something families must know to ask for. "Nobody should have to choose between their budget and a visit," he says.</p><p>Rask welcomes a cap as a first step but says she will keep pushing for free parking. Kincaid says a cap is something his hospital could live with, provided the government helps cover the lost income.</p>',
          questions: [
            { id: 'R4.1', q: 'Rask\'s experience is described at the start to show', o: ['how quickly fees build up during a long stay.', 'why her husband had to stay in hospital so long.', 'that northern hospitals charge the highest rates.', 'that she could not afford to visit every day.'] },
            { id: 'R4.2', q: 'Rask mentions rural areas to argue that', o: ['many families have no option but to drive.', 'rural hospitals should charge lower fees.', 'public transit should stop at every hospital.', 'rural patients visit less often than others.'] },
            { id: 'R4.3', q: 'Kincaid\'s remark about office workers and shoppers suggests that free parking could', o: ['leave fewer spaces for the people who need them.', 'bring more business to shops near the hospital.', 'make the lots more expensive to plow and light.', 'encourage staff to drive to work instead of walking.'] },
            { id: 'R4.4', q: 'Rask\'s comment about the pass shows that', o: ['existing help is not reaching people.', 'the pass costs more than paying the daily rate.', 'only families of very ill patients can buy a pass.', 'the hospital refused to sell her a pass at first.'] },
            { id: 'R4.5', q: 'Ashdown would most likely agree that', o: ['help should target frequent visitors.', 'parking should be free for everyone who visits.', 'hospitals should end their 30-day passes.', 'fees should rise for people who visit rarely.'] }
          ],
          reply: '<h3>Reader comment</h3><p>My father had dialysis three times a week for two years, so this article struck a nerve. Like Ms. Rask, I feel that parking fees punish people for [[R4.6]]. At the same time, Mr. Kincaid makes a fair point that [[R4.7]], and I would not want to see fewer nurses or beds.</p><p>We only found out about the [[R4.8]] from another family in the waiting room, which shows that hospitals should [[R4.9]]. Mr. Ashdown\'s idea of [[R4.10]] would have saved us a great deal of money and worry, and it seems fair to everyone.</p><p>People go to hospital on some of the worst days of their lives. The parking machine should not make those days any harder.</p>',
          blanks: [
            { id: 'R4.6', o: ['needing care over and over', 'living close to the hospital', 'visiting only in the evening', 'not using public transit'] },
            { id: 'R4.7', o: ['the fees pay for things patients rely on', 'most visitors could easily pay much more', 'plowing the lots is the province\'s job', 'the passes are printed on admission forms'] },
            { id: 'R4.8', o: ['30-day pass', 'free evening rate', 'weekly cap', 'staff discount'] },
            { id: 'R4.9', o: ['apply discounts automatically', 'raise the daily parking rate', 'close the lots to shoppers only', 'stop selling monthly passes'] },
            { id: 'R4.10', o: ['limiting what anyone pays in a week', 'making parking free for every visitor', 'letting nearby workers use the lots', 'charging occasional visitors more'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You have rented the same apartment for two years and generally get along well with your landlord, and you would like to renew your lease in the spring. Last Tuesday, while you were at work, your landlord entered your apartment without telling you, so that a contractor could measure the windows. You only found out because there were muddy footprints on your carpet and your desk had been moved.</p><p>Write an email to your landlord. In your email, do the following:</p><ul><li>Describe what you found and how you realized someone had been inside.</li><li>Explain why this concerns you, even though you value your good relationship.</li><li>Say what you would like your landlord to do the next time someone needs to enter.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your neighbourhood association has $12,000 left in this year\'s budget and is asking residents which project it should fund. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Install a community bike repair station in the local park, with tools and an air pump that anyone can use for free, plus monthly repair workshops run by volunteers. However, outdoor tools are often stolen or damaged, and the station would mainly help people who already cycle.' },
            { key: 'B', label: 'Option B', text: 'Hold free outdoor movie nights every Friday in July and August, with a large screen, a sound system and free popcorn. However, all the money would be spent in a single summer, and rainy or mosquito-filled evenings could keep the crowds small.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your area where you like to spend time on weekends, and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours retired last month after thirty years with the same company. He says he feels bored and a little lonely, because most of his social life was at work. He lives on a fixed pension, has a bad knee that makes long walks difficult, and does not like driving after dark. Give your friend advice on how to build a satisfying new routine.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you learned a new skill as an adult, such as driving, cooking, swimming or a new language. How did you learn it, what was the hardest part, and what would you do differently if you were learning it now?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/26/scene.jpg" alt="A busy apple orchard on a pick-your-own weekend">', picture: 'A sunny autumn afternoon at a family apple orchard on a pick your own weekend, drawn as a busy, colourful comic scene. Rows of apple trees full of red apples fill the left and middle; a small red barn with an open farm stand is on the right, and a fenced goat pen sits in the front right corner. There are 14 people. Clearly visible activities: (1) a man standing on a short wooden ladder, reaching up to pick apples high in a tree; (2) a woman holding the bottom of that ladder steady with both hands; (3) a father carrying a young girl on his shoulders while she picks an apple from a branch; (4) two teenagers taking a selfie together under a tree, holding up apples; (5) a cashier at the farm stand weighing a bag of apples on a hanging scale for a customer, who is (6) paying with a card; (7) an elderly couple sitting side by side on a hay bale, each eating a caramel apple; (8) a farmer driving a small green tractor that pulls a hay wagon, with (9) one small boy in the wagon waving; (10) a worker pushing a wheelbarrow full of orange pumpkins along the path; (11) a woman sitting on a bench beside the goat pen, studying a paper map of the orchard. About to happen cues for Task 4: a boy of about ten is carrying a wicker basket piled far too high with apples, the handle is visibly tearing on one side and two apples are already rolling off the top; and a goat is stretching its neck over the low pen fence toward the open tote bag on the bench next to the woman with the map, which has a loaf of bread and apples sticking out of it, while she is not looking. One sign on the barn: PICK YOUR OWN APPLES.' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/26/scene.jpg" alt="A busy apple orchard on a pick-your-own weekend">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family\'s washing machine has broken down, and the repair would cost almost as much as a new machine. Your family of five does about eight loads of laundry a week. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'New front-loading machine', image: '<img src="tests/img/26/opt_A.jpg" alt="Photo: New front-loading machine">', picture: 'A brand new white front-loading washing machine with a round glass door, standing in a bright, clean laundry room with a tiled floor.', facts: ['$1,150, including delivery and removal of the old machine', 'Earliest delivery in 3 weeks', '10-year warranty on the motor', 'Uses about half the water of your old machine'] },
            { key: 'B', title: 'Refurbished machine', image: '<img src="tests/img/26/opt_B.jpg" alt="Photo: Refurbished machine">', picture: 'An older white top-loading washing machine with a few small scratches on its sides, standing on the concrete floor of a small repair workshop.', facts: ['$420 from a local repair shop', 'Delivered and installed tomorrow', '6-month warranty', 'About 9 years old, with a smaller drum than your old machine'] }
          ],
          third: { key: 'C', title: 'Rent-to-own machine', image: '<img src="tests/img/26/opt_C.jpg" alt="Photo: Rent-to-own machine">', picture: 'A modern silver top-loading washing machine with its lid open, standing in a showroom next to a row of similar machines.', facts: ['$39 a month, delivered in 2 days', 'You own it after 36 months ($1,404 in total)', 'Repairs included while you are renting', 'Cancel any time, but you lose what you have paid'] },
          persuade: 'A family member thinks the rent-to-own machine would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Weeks ago, you agreed to cover your coworker\'s Saturday shift so that she could attend her son\'s high school graduation. She has already told her family she will be there. This morning, your landlord told you that the only day the plumber can fix the leak in your bathroom ceiling is this Saturday, and that someone must be home to let him in. If the leak is not fixed soon, the ceiling could be badly damaged.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your coworker. Explain why you cannot cover her shift on Saturday.</p><p><b>Option B:</b> Talk to your landlord. Explain why you cannot be home on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town council is proposing a summer pilot that would allow adults to drink beer and wine in three large public parks between 11:00 a.m. and 9:00 p.m., from June to September. Supporters say families and friends should be able to enjoy a quiet drink with a picnic, as many people quietly do already, and that several other Canadian cities have tried it without major problems. Opponents, including some parents and police officers, worry about noise, litter, broken glass and people driving home after drinking.</p><p>Council has asked residents for their views before it votes next month. Should the town allow drinking in some public parks this summer? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in an electronics store and see this unusual alarm clock for $95. Call your friend, who has trouble getting up in the morning, has been late for work three times this month and has about $100 to spend. Your friend shares a bedroom with a partner who works night shifts and sleeps until noon. Describe the alarm clock and explain whether you think your friend should buy it.', image: '<img src="tests/img/26/object.jpg" alt="An unusual alarm clock on a store shelf">', picture: 'One strange alarm clock sitting alone on an electronics store shelf, with a small paper price tag reading $95. Unusual features, all clearly visible: (1) two large rubber wheels on its sides, so it can roll away across the floor; (2) a round glowing lamp on top that looks like a small rising sun; (3) a small screen on the front showing a maths puzzle, such as 7 times 8, above a number keypad; (4) a long cord leading to a flat round vibrating pad meant to go under a pillow; (5) two large old style metal bells on top, beside a small loudspeaker grille; (6) a tiny projector lens on the back that shines the time in large numbers onto the wall behind it.' }
      ]
    }
  });
})();
