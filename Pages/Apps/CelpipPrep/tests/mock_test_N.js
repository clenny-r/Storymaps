/* Rowe CELPIP Mock Exam: Test N content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly harder than the real test (CLB 8 to 11).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/N/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'N',
    title: 'Mock Test 14',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { YUSRA: { name: 'Yusra', g: 'f', skin: '#c98c64', hair: '#1d1410', shirt: '#16a085', style: 'long' }, LACHLAN: { name: 'Lachlan', g: 'm', skin: '#f2cfb0', hair: '#a0522d', shirt: '#34495e', style: 'short' } },
        segments: [{
          lines: [
            ['YUSRA', 'You\'re sending those boots back? I thought you loved them.'],
            ['LACHLAN', 'I do, but they pinch. I could swap them at the store downtown today, or mail them back from here for free.'],
            ['YUSRA', 'So why are we standing in the post office line?'],
            ['LACHLAN', 'Because the store only has my size in black, and I really want the brown ones.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why is Lachlan mailing the boots instead of exchanging them?', o: ['The colour he wants is not available at the store.', 'Mailing them back costs less than going downtown.', 'The store does not take back boots that pinch.', 'He has decided that he does not like the boots at all.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { EMEKA: { name: 'Emeka', g: 'm', skin: '#5c3a21', hair: '#120c08', shirt: '#2e86c1', style: 'short' }, MARGOT: { name: 'Margot', g: 'f', skin: '#f0c9a6', hair: '#8b5a2b', shirt: '#c0392b', style: 'bun' } },
          segments: [
            {
              lines: [
                ['EMEKA', 'Margot, come look at this. I went up to clear the eavestrough, and the roof\'s a mess. Most of the north side\'s shingles are cracked from last night\'s hail.'],
                ['MARGOT', 'Oh, no. Is that why there\'s a drip in the upstairs hallway?'],
                ['EMEKA', 'Probably. I already called the insurance company. The good news is, hail\'s covered. The bad news is, they\'re swamped. They\'d had something like four thousand calls from Airdrie alone by nine this morning.'],
                ['MARGOT', 'So when can someone come out and look at it?'],
                ['EMEKA', 'The adjuster can\'t get here until a week from Thursday. Until then, they want us to stop any more water from getting in, and to hang on to every receipt, because they\'ll pay us back for emergency work.'],
                ['MARGOT', 'Every receipt. Got it. But wait, isn\'t our deductible only a thousand dollars? That\'s not too bad.'],
                ['EMEKA', 'It was a thousand. When we renewed in March, we doubled it to bring the monthly payments down, remember? So a lot of the small stuff is going to come out of our own pocket.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why will the adjuster not come sooner?', o: ['The company is handling a huge number of claims.', 'The adjuster needs to see the receipts before the visit.', 'The roof has to dry out before it can be inspected.', 'The company only covers hail after a waiting period.'] },
                { id: 'L1.2', q: 'What has the insurance company asked the couple to do for now?', o: ['Limit further damage and keep proof of what they spend.', 'Replace the cracked shingles before the inspection.', 'Find out how many neighbours have made a claim.', 'Hire an adjuster of their own before Thursday.'] },
                { id: 'L1.3', q: 'Why might the couple have to pay for some repairs themselves?', o: ['They now pay the first two thousand dollars of any claim.', 'Hail damage on the north side is not covered.', 'Their monthly payments were not made in March.', 'The insurer only pays for repairs over four thousand.'] }
              ]
            },
            {
              lines: [
                ['MARGOT', 'Okay, so first, a tarp. Can you put one up yourself?'],
                ['EMEKA', 'On a roof that steep, with wet shingles? I\'d rather not. I phoned a roofing company, and they can tarp the whole north side tomorrow morning for four hundred and fifty dollars.'],
                ['MARGOT', 'Four fifty for a tarp? My brother would do it for a pizza.'],
                ['EMEKA', 'Your brother lives in Lethbridge. That\'s a three-hour drive each way. And the forecast says more rain on Saturday. I don\'t want to wait around for him.'],
                ['MARGOT', 'Fair enough. And I suppose if a company does it, we get a proper invoice to send in with the claim. What about inside?'],
                ['EMEKA', 'I put a bucket under the drip. But there\'s a brown stain on the hallway ceiling about the size of a dinner plate, and it feels soft when you press on it.'],
                ['MARGOT', 'Then stop pressing on it! Let\'s get the bookshelf out of the hallway, and take pictures of everything before we touch anything else. The adjuster will want to see it the way it was.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Emeka not want to wait for Margot\'s brother?', o: ['More wet weather is expected within days.', 'The roofing company has a cheaper offer.', 'Her brother has no experience with roofs.', 'The insurer only pays for licensed roofers.'] },
                { id: 'L1.5', q: 'What advantage of hiring the company does Margot point out?', o: ['It will provide paperwork that supports the claim.', 'It can repair the hallway ceiling at the same time.', 'It charges less than most other roofers in the area.', 'It will contact the adjuster for them right away.'] },
                { id: 'L1.6', q: 'What does Margot want done before the damage is disturbed?', o: ['Make a visual record of the damage.', 'Test how soft the ceiling has become.', 'Empty the bucket under the leak.', 'Ask the adjuster to come out sooner.'] }
              ]
            },
            {
              lines: [
                ['EMEKA', 'So the roofers came at eight, and the tarp\'s on. But the guy said the hail cracked the skylight frame, not just the glass, so that\'ll be a separate job.'],
                ['MARGOT', 'Did you let the insurance company know?'],
                ['EMEKA', 'I did, and here\'s the interesting part. Because the ceiling\'s wet, we\'re allowed to bring in a drying company right away, without waiting for the adjuster, as long as we pick one from their approved list.'],
                ['MARGOT', 'Good. If that ceiling stays wet for another week and a half, we\'ll have mould on top of everything else. Which company are you calling?'],
                ['EMEKA', 'There are three on the list. The first one can\'t come until Monday. I was going to try the other two after lunch.'],
                ['MARGOT', 'Try them now. The skylight\'s covered by the tarp, so it can wait a few days. The ceiling can\'t.']
              ],
              questions: [
                { id: 'L1.7', q: 'What has the insurance company allowed the couple to do?', o: ['Start drying work before the adjuster visits.', 'Choose any company to fix the skylight frame.', 'Skip the inspection of the hallway ceiling.', 'Replace the skylight glass before Monday.'] },
                { id: 'L1.8', q: 'What does Margot\'s last remark show?', o: ['She sees the wet ceiling as the more urgent problem.', 'She thinks the skylight should be repaired first.', 'She is willing to wait until Monday for the drying.', 'She wants Emeka to call the roofers back today.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { RECEP: { name: 'Receptionist', g: 'f', skin: '#e3b28b', hair: '#6b4a2b', shirt: '#117864', style: 'long' }, DEVRAJ: { name: 'Devraj', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#5b2c6f', style: 'short' } },
          segments: [{
            lines: [
              ['RECEP', 'Good morning, Lakefield Road Eye Care, this is Paloma.'],
              ['DEVRAJ', 'Hi, Paloma. It\'s Devraj Sandhu. My daughter Kiran has an eye exam with you this Friday at three-thirty, but her school just told us that\'s the afternoon of her class trip.'],
              ['RECEP', 'No problem, let me pull that up. Kiran, age nine. Hmm, Friday\'s full otherwise. I could do next Tuesday at four-fifteen, or Wednesday at eight in the morning.'],
              ['DEVRAJ', 'Tuesday, she has swimming until four, and the pool\'s right across town. Wednesday at eight means she\'d miss the start of school, but only a bit. Let\'s do Wednesday.'],
              ['RECEP', 'Done. You\'ll get a reminder text the evening before. Now, I see she\'s been wearing glasses for about a year. Any trouble seeing the board lately?'],
              ['DEVRAJ', 'Actually, yes. Her teacher moved her up to the front row last month, and she\'s been getting headaches after reading.'],
              ['RECEP', 'I\'ll make a note of that for the doctor. Just so you know, the exam includes drops that widen the pupils, so things will be blurry for a few hours, and bright light might bother her.'],
              ['DEVRAJ', 'Oh. So reading at school that morning won\'t really work.'],
              ['RECEP', 'Probably not. Some parents keep the child home until lunch. And bring sunglasses if she has them.'],
              ['DEVRAJ', 'Okay. And the cost? I think the exam was covered last time.'],
              ['RECEP', 'It is. Exams for children are covered by the provincial plan. New lenses are separate, though. Your workplace plan might help with those.'],
              ['DEVRAJ', 'Mine pays two hundred dollars every two years. But we used it last September for her first pair.'],
              ['RECEP', 'Then it won\'t renew until next September. But if she keeps her current frames, new children\'s lenses are ninety dollars.'],
              ['DEVRAJ', 'That\'s reasonable. Oh, and one arm of her frames snapped last week. We taped it.'],
              ['RECEP', 'Bring them along. We do small repairs like that at no charge, usually while you wait.'],
              ['DEVRAJ', 'Perfect. That saves me hunting for a new pair at the mall this weekend. Thanks so much, Paloma.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why does Devraj call the clinic?', o: ['To move an appointment that clashes with a school event.', 'To book an eye exam for his daughter\'s first glasses.', 'To ask why his daughter has headaches after reading.', 'To complain that the clinic changed Kiran\'s booking.'] },
              { id: 'L2.2', q: 'Why does Devraj not choose the Tuesday appointment?', o: ['Kiran could not arrive on time after another activity.', 'Kiran would miss the first part of her school day that morning.', 'The clinic only has morning times on Tuesdays.', 'Kiran has her class trip on that afternoon.'] },
              { id: 'L2.3', q: 'Why does the receptionist mention sunglasses?', o: ['The drops will make Kiran\'s eyes sensitive to light.', 'Kiran\'s new lenses will be tinted against the sun.', 'The exam rooms at the clinic use very bright lights.', 'Kiran gets headaches when she reads outdoors.'] },
              { id: 'L2.4', q: 'Why can Devraj\'s workplace plan not help with new lenses now?', o: ['The benefit has already been used in this period.', 'It only pays for exams and not for lenses.', 'It does not cover children under nineteen.', 'Its limit is lower than the cost of lenses.'] },
              { id: 'L2.5', q: 'What can be inferred about the broken frames?', o: ['Fixing them will probably cost the family nothing.', 'They will have to be replaced with a new pair.', 'The clinic will need to send them away for repair.', 'They are the most likely cause of the headaches.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#d6a07a', hair: '#3b2a20', shirt: '#566573', style: 'short' }, TESSA: { name: 'Tessa Kowalchuk', g: 'f', skin: '#f2cfb0', hair: '#c49a42', shirt: '#a93226', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Tessa Kowalchuk, deputy chief of the volunteer fire department in Lumsden, just north of Regina. Tessa, a lot of people don\'t realize their fire department might be all volunteers.'],
              ['TESSA', 'That\'s right. In Lumsden we have twenty-two members, and nobody sits at the station waiting. When a call comes in, our pagers go off, and whoever\'s free drops what they\'re doing and drives in.'],
              ['HOST', 'Drops what they\'re doing. What about their regular jobs?'],
              ['TESSA', 'That\'s the hardest part. I\'m a pharmacist, and my boss is great, but not every employer is. And a lot of our members work in Regina, forty minutes away, so on a weekday afternoon maybe six or seven of us can respond.'],
              ['HOST', 'Six or seven people for a whole town and the farms around it. Is that really enough?'],
              ['TESSA', 'For most calls, yes. People picture us putting out house fires, but those are maybe one call in ten. Most of what we do is highway collisions and medical calls, plus the odd grass fire in the spring.'],
              ['HOST', 'What kind of training do new members get?'],
              ['TESSA', 'More than people expect. Recruits train two evenings a week for about eight months before they\'re allowed into a burning building. Until then, they still help, directing traffic or running the pumps outside.'],
              ['HOST', 'And are you paid anything at all?'],
              ['TESSA', 'About twenty dollars a call. It mostly covers gas. Nobody does this for the money.'],
              ['HOST', 'So why do you do it?'],
              ['TESSA', 'Honestly? Because of my dad. He was on the department for thirty years, and I swore I never would be, because he missed half my birthday parties.'],
              ['TESSA', 'Then, after he retired, our neighbour\'s barn caught fire, and I watched the crew save the house right next to it. I signed up the next week.'],
              ['HOST', 'Are you finding enough new people?'],
              ['TESSA', 'It\'s getting harder. We used to get farmers who lived ten minutes from the hall. Now younger people commute, so we\'ve started visiting the high school.'],
              ['TESSA', 'We\'re also holding an open house on the twelfth. Kids can climb into the truck, and adults can try on the gear and ask us anything. We\'re hoping a few of them will fill out a form before they leave.']
            ],
            questions: [
              { id: 'L3.1', q: 'What does Tessa say about who responds to a call?', o: ['It depends on which members happen to be free.', 'A small team waits at the station during the day.', 'Only members living within ten minutes respond.', 'Members who work in Regina are called first.'] },
              { id: 'L3.2', q: 'Why does Tessa mention members who work in Regina?', o: ['To explain why fewer people can respond on weekdays.', 'To show that employers there support the volunteers.', 'To explain why some calls take forty minutes to reach.', 'To show how large an area the department covers.'] },
              { id: 'L3.3', q: 'Why does Tessa say house fires are maybe one call in ten?', o: ['To correct a common belief about their work', 'To show that the town has very few older buildings', 'To explain why six or seven members are not enough', 'To show that grass fires have become more common'] },
              { id: 'L3.4', q: 'What can new members do before their training is finished?', o: ['Help with jobs outside the burning building.', 'Enter buildings with an experienced partner.', 'Respond to medical calls on their own.', 'Train on weekends instead of evenings.'] },
              { id: 'L3.5', q: 'Why did Tessa first decide against joining?', o: ['Her father\'s duties had kept him from family events.', 'She was frightened after seeing a neighbour\'s barn burn.', 'Her employer would not allow her to leave work for calls.', 'The pay for each call was not enough to cover her gas.'] },
              { id: 'L3.6', q: 'What does Tessa hope the open house will do?', o: ['Encourage some visitors to become volunteers.', 'Teach children about fire safety at home.', 'Raise money to replace the department\'s gear.', 'Thank the farmers who served for many years.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f3a5f', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Starting next month, hikers heading for the popular Painted Ridge lookout in Juniper Bluffs Regional Park, near Kamloops, will need to book a free time slot online before they go.'],
              ['NEWS', 'Park officials say the trail, which climbs about four hundred metres to a view over the Thompson River valley, has become a victim of its own success.'],
              ['NEWS', 'On busy summer weekends last year, more than two thousand people used it in a single day, roughly four times the number it was designed to handle.'],
              ['NEWS', 'Rangers reported cars parked along the shoulder of the highway, trampled plants beside the trail, and long lines for the single outhouse at the top.'],
              ['NEWS', 'Under the new system, which runs from June fifteenth to Labour Day, visitors will reserve a two-hour arrival window, and only three hundred and fifty people may start the hike in each window.'],
              ['NEWS', 'Reservations open seven days in advance, and a small number of same-day spots will be released each morning at seven. Hikers who arrive before six in the morning or after six in the evening won\'t need a booking at all.'],
              ['NEWS', 'Not everyone is pleased. Kamloops resident Brenda Thiessen, who walks the trail several times a week, says she now has to plan her exercise days in advance, as if she were booking a dentist.'],
              ['NEWS', 'The park\'s manager, Andrew Lefebvre, responds that regular users can avoid the system entirely by going early, and that a similar approach has already eased crowding at several mountain parks in Alberta.'],
              ['NEWS', 'A weekend shuttle bus from downtown Kamloops will also run this summer, and its riders will have a guaranteed spot on the trail. Officials will review the program in the fall.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A booking system to control crowds on a park trail', 'The opening of a new lookout in a regional park', 'Damage caused by drivers parking on a highway', 'A new shuttle bus service for Kamloops hikers'] },
              { id: 'L4.2', q: 'According to the report, the trail has been used by', o: ['far more people than it was built for.', 'about three hundred and fifty people a day.', 'mostly visitors coming from parks in Alberta.', 'fewer hikers than in earlier summers.'] },
              { id: 'L4.3', q: 'A hiker can avoid making a reservation by', o: ['setting out at the very start or end of the day.', 'arriving at the trailhead by seven in the morning.', 'parking along the shoulder of the highway.', 'booking a spot seven days in advance.'] },
              { id: 'L4.4', q: 'Brenda Thiessen\'s comment suggests that she', o: ['dislikes losing the freedom to go when she wants.', 'finds it hard to get an appointment with a dentist.', 'believes hikers have damaged the plants on the trail.', 'plans to stop hiking at the park this summer.'] },
              { id: 'L4.5', q: 'The manager mentions parks in Alberta to', o: ['show that the plan has worked in other places.', 'suggest that hikers visit those parks instead.', 'explain where the shuttle bus idea came from.', 'compare the size of the crowds in each park.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Fall program planning', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { BRONWYN: { name: 'Bronwyn', g: 'f', skin: '#f0c9a6', hair: '#7b4a26', shirt: '#2874a6', style: 'bun' }, JOAQUIN: { name: 'Joaquin', g: 'm', skin: '#c98c64', hair: '#1d1410', shirt: '#239b56', style: 'short' }, PRISCILLA: { name: 'Priscilla', g: 'f', skin: '#6b4226', hair: '#120c08', shirt: '#cb4335', style: 'curly' } },
          segments: [{
            lines: [
              ['BRONWYN', 'Okay, let\'s start. We have thirty kids enrolled and eighteen on the waiting list. That\'s the main problem tonight.'],
              ['JOAQUIN', 'The gym room next door is free after three. If we open it, we could take twelve more kids.'],
              ['PRISCILLA', 'Twelve more means another staff member. The rule for school-age kids is one adult for every fifteen.'],
              ['BRONWYN', 'Right, and hiring takes at least a month with the background checks. September\'s only five weeks away.'],
              ['JOAQUIN', 'What about Ana from the summer camp? Her check is already done, and she asked about fall hours.'],
              ['PRISCILLA', 'Ana\'s great with kids. But she has university classes until four on Tuesdays and Thursdays.'],
              ['BRONWYN', 'So she\'s free three days a week. We could open the gym room Monday, Wednesday and Friday only.'],
              ['JOAQUIN', 'Parents need care every day, though. Half a spot isn\'t much use to someone working full time.'],
              ['PRISCILLA', 'Some families only want part-time care. The Ngs asked for exactly three days last spring.'],
              ['BRONWYN', 'Let\'s offer the part-time spots to the waiting list first and see who takes them. Agreed?'],
              ['JOAQUIN', 'Fine by me. Next thing: late pickups. Last week, four parents came after six.'],
              ['PRISCILLA', 'And one of them came at six-forty. Our staff aren\'t paid past six-fifteen.'],
              ['BRONWYN', 'Other centres charge a dollar for every minute after closing. Should we do the same?'],
              ['JOAQUIN', 'I\'d rather not. Most of these parents are stuck on the highway, not careless.'],
              ['PRISCILLA', 'Then a warning first. The fee only starts on the third late pickup in a month.'],
              ['JOAQUIN', 'I could live with that. It\'s fair to staff without punishing one bad traffic day.'],
              ['BRONWYN', 'Good, I\'ll put it in the parent handbook. Last item: homework time. Priscilla, you raised this.'],
              ['PRISCILLA', 'Yes. Several parents want a quiet hour for homework. Right now it\'s mostly games and crafts.'],
              ['JOAQUIN', 'These kids sit at desks all day. Honestly, they need to run around after school.'],
              ['BRONWYN', 'Both are true. What if the first hour is outdoor play, then homework from four-thirty to five-fifteen?'],
              ['PRISCILLA', 'That works, but the little ones in grade one don\'t really get homework.'],
              ['JOAQUIN', 'They could read with the older kids. Buddy reading. The grade fives would love being in charge.'],
              ['BRONWYN', 'I like that. Priscilla, could you draft a weekly schedule? We\'ll look at it next Tuesday.'],
              ['PRISCILLA', 'Sure. I\'ll also ask Ana whether she\'d lead the reading group on her three days.'],
              ['JOAQUIN', 'And I\'ll phone the families on the list tomorrow. Some may have found other care already.']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main problem the group discusses first?', o: ['More families want places than the program can offer.', 'The gym room next door is not available after three.', 'Staff members are leaving before parents arrive.', 'Parents are asking for more time for homework.'] },
              { id: 'L5.2', q: 'Why does Bronwyn mention background checks?', o: ['A new hire would probably not be ready in time.', 'Ana has not yet finished her own check.', 'Parents have asked to see staff records.', 'The ratio rule requires a second check.'] },
              { id: 'L5.3', q: 'What limits Ana\'s availability?', o: ['Her own studies on two afternoons a week', 'Her work at the summer camp this fall', 'A background check that is not finished', 'Her classes on Monday, Wednesday and Friday'] },
              { id: 'L5.4', q: 'What is Joaquin\'s concern about part-time places?', o: ['They may not suit parents with full-time jobs.', 'They would require hiring a third staff member.', 'They would cost the centre more money to run.', 'They have already been promised to the Ngs.'] },
              { id: 'L5.5', q: 'How does Priscilla respond to Joaquin\'s concern?', o: ['She notes that some families want fewer days.', 'She suggests asking Ana to work every day.', 'She agrees that half a place is of little use.', 'She proposes accepting only full-time children.'] },
              { id: 'L5.6', q: 'Why does Joaquin oppose a per-minute late fee?', o: ['He thinks most late parents cannot help it.', 'He thinks a dollar a minute is far too little.', 'He worries that staff would not be paid.', 'He knows other centres have dropped it.'] },
              { id: 'L5.7', q: 'What is decided about late pickups?', o: ['A charge will apply only after repeated lateness.', 'Parents will pay a dollar for every minute they are late.', 'Staff will now be paid until six-forty.', 'Closing time will move to six-fifteen.'] },
              { id: 'L5.8', q: 'What can be inferred about the buddy reading idea?', o: ['It gives the youngest children something useful to do.', 'It will replace outdoor play for the older children.', 'It was first suggested by several of the parents.', 'Ana has already agreed to lead it on her three days.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Safety training for teen workers?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#7d3c98', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'Every spring, thousands of Canadian teenagers start their first part-time or summer jobs. Now some safety groups want every new young worker to complete a paid safety course before their very first shift.'],
              ['NARR', 'Supporters point to a worrying pattern: young workers are much more likely to be hurt during their first month in a job than at any later point.'],
              ['NARR', 'Renata Szabo trains young workers in Halifax and has spent fifteen years looking into workplace injuries. She says most of the teenage injuries she sees are not caused by careless kids, but by tasks that nobody explained.'],
              ['NARR', '"A sixteen-year-old is told to clean the meat slicer, or to lift boxes off a high shelf, on day one," she says. "They don\'t ask how, because they don\'t want to look foolish in front of a new boss."'],
              ['NARR', 'A course before the first shift, Szabo argues, would teach young people that asking questions and refusing unsafe work are rights, not favours.'],
              ['NARR', 'Her second argument is about money. A single serious injury, she says, can cost an employer far more in lost time and higher insurance rates than training an entire summer staff.'],
              ['NARR', 'Szabo admits that a course cannot replace training on the job. Every workplace is different, she says, and a general course will never teach someone how to run a particular machine.'],
              ['NARR', 'But she believes it gives teenagers the confidence to ask for that training, instead of guessing.'],
              ['NARR', 'Glen MacPhail is not convinced. He runs a family garden centre outside Brandon, Manitoba, and hires about twenty students every spring.'],
              ['NARR', 'MacPhail says he already walks every new hire through the site himself, showing them how to use each piece of equipment and where the first aid kit is kept.'],
              ['NARR', 'A general course, he says, would repeat much of that, at his expense, and many of his students already covered the basics in a high school safety unit.'],
              ['NARR', 'His bigger worry is timing. Most of his students are hired in late April, just weeks before the busy season. If each one first had to finish an eight-hour course, he says, some would start after the rush had already begun.'],
              ['NARR', 'He also argues that small businesses would be hit hardest. A large chain can train fifty people in one session, while a garden centre pays for each student separately.'],
              ['NARR', 'MacPhail does accept that some teenagers are put in danger at work. But in his view, the answer is tougher inspections of the employers who cut corners, not new rules for everyone.'],
              ['NARR', 'Szabo replies that inspections tend to find problems only after someone has been hurt, and that the course is a one-time cost of about one hundred and twenty dollars per worker.'],
              ['NARR', 'MacPhail answers that, for a business like his, that one-time cost comes around again every single spring, because most of his students do not return the following year.'],
              ['NARR', 'Several provinces are expected to discuss the proposal this fall.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether young workers should be trained before starting work', 'How employers can lower the cost of workplace injuries', 'Why teenagers are now hired later in the spring', 'Whether inspectors should visit small businesses more often than now'] },
              { id: 'L6.2', q: 'According to Szabo, why are many teenagers injured?', o: ['They are given unfamiliar tasks without guidance.', 'They are careless during their first month at work.', 'They refuse to follow instructions from new bosses.', 'They use machines that have not been maintained.'] },
              { id: 'L6.3', q: 'Why does Szabo mention lost time and insurance rates?', o: ['To argue that training could save employers money', 'To show that insurance companies support the course', 'To explain why employers dislike hiring teenagers', 'To show how much a course for one worker costs'] },
              { id: 'L6.4', q: 'What does Szabo concede about the course?', o: ['It cannot cover the details of each workplace.', 'It may not make teenagers feel more confident.', 'It costs more than most employers can afford.', 'It would repeat what most employers already teach.'] },
              { id: 'L6.5', q: 'Why is MacPhail especially worried about timing?', o: ['New staff might not be ready when they are most needed.', 'His students are usually hired after the busy season.', 'The course is only offered at the end of April.', 'He has no time to show new staff around himself.'] },
              { id: 'L6.6', q: 'Why does MacPhail say the cost comes around every spring?', o: ['He must train a mostly new group of students each year.', 'The course fee goes up again at the start of each spring.', 'Students have to repeat the course every single year.', 'Inspections of his garden centre take place each spring.'] }
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
          passage: '<h3>Message</h3><p>Hi Rohan,</p><p>I know, I know: it has been ages, and you are probably wondering whether I fell off the face of the earth. In a way, I did. Three weeks ago I adopted a dog, and my life has not been the same since.</p><p>Her name is Pepper, and she is a four-year-old mix of something small and something stubborn. You may remember that my old building did not allow pets, which is partly why I moved across Guelph in the spring. The new place does, but with conditions. Dogs must weigh less than fifteen kilograms, I had to pay a $300 pet deposit, and I signed a form promising to use the side door rather than the front lobby whenever she is with me. Pepper weighs eleven kilograms, so we squeaked in.</p><p>The first week was harder than I expected. Every time I left for work, she barked, and on the third day a note appeared under my door. It was polite, but it said the barking had gone on "most of the afternoon." I felt awful. The shelter suggested leaving her alone for short periods at first and slowly making them longer, and I also hired a dog walker, Silas, who comes at noon. He charges $20 a visit, which is more than I usually spend on lunch, but there have been no more notes, and Pepper is much calmer when I get home.</p><p>What surprised me most is how many neighbours I have met. Before Pepper, I knew the superintendent and nobody else. Now I chat with people at the park every evening, and an older man on the fourth floor, Mr. Aldous, has offered to look after her whenever I travel. He had a dog for twelve years and says he misses having one around.</p><p>Now for the real reason I am writing. You mentioned that you might visit Ontario in October, and I would love for you to stay with me. But I remember that you are allergic to dogs. Pepper sheds less than most, but I cannot promise the apartment will be free of hair. If that is a problem, there is a small hotel two blocks away, and I would be happy to help with the cost.</p><p>Write back and tell me what you think. Pepper sends a wet nose.</p><p>Tamsin</p>',
          questions: [
            { id: 'R1.1', q: 'Tamsin says she "fell off the face of the earth" to', o: ['admit that she has been out of touch.', 'explain that she recently moved away.', 'describe how tiring her new job has been.', 'complain that Rohan stopped writing to her.'] },
            { id: 'R1.2', q: 'One reason Tamsin left her previous apartment was that', o: ['she could not keep an animal there.', 'it had no separate side entrance.', 'its pet deposit was far too high.', 'her neighbours complained about noise.'] },
            { id: 'R1.3', q: 'The rules in Tamsin\'s new building suggest that it', o: ['tries to keep dogs out of the main entrance area.', 'allows larger dogs if the owner pays a deposit.', 'requires all tenants to use the side door.', 'does not let pets stay alone during the day.'] },
            { id: 'R1.4', q: 'Tamsin\'s reaction to the note shows that she', o: ['felt bad about the trouble Pepper had caused.', 'thought the complaint was greatly exaggerated.', 'was upset that the writer did not sign it.', 'planned to return Pepper to the shelter.'] },
            { id: 'R1.5', q: 'Tamsin mentions what she spends on lunch to show that', o: ['the dog walker is a real cost she is willing to pay.', 'she now goes home at noon to have lunch with Pepper.', 'the shelter suggested a cheaper way to stop the barking.', 'she can no longer afford to keep paying the dog walker.'] },
            { id: 'R1.6', q: 'Mr. Aldous offered to help because he', o: ['would enjoy having a dog around again.', 'has a dog of his own at home.', 'is the building\'s superintendent.', 'meets Tamsin at the park each night.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Tamsin,</p><p>What wonderful news! I always said you were a dog person. Eleven kilograms sounds tiny to me, but I am glad Pepper was [[R1.7]] for your building. I am also relieved that the barking is under control. Paying someone to visit her every day sounds expensive, but [[R1.8]], so it seems worth every dollar.</p><p>It is lovely that Pepper has introduced you to so many people. Mr. Aldous sounds like a gem, and since he [[R1.9]], I think Pepper would be in good hands whenever you are away.</p><p>About October: thank you for remembering my allergy. I have been taking a new medication for two years now, and it works well, so a little dog hair should not be a problem. Still, I do not want you to [[R1.10]], so please do not book anything for me. If I start sneezing, I will move myself.</p><p>One last question: when I arrive with my suitcase, should I come in through [[R1.11]], or is that rule only for Pepper?</p><p>Love,<br>Rohan</p>',
          blanks: [
            { id: 'R1.7', o: ['light enough to be allowed', 'quiet enough to be accepted', 'old enough to be adopted', 'small enough for the lobby'] },
            { id: 'R1.8', o: ['there have been no complaints since', 'it costs less than the pet deposit did', 'Mr. Aldous offered to walk her for free', 'it means that you can skip your lunch'] },
            { id: 'R1.9', o: ['looked after his own dog for years', 'lives on the same floor as you do', 'takes care of the whole building', 'walks Pepper every day at noon'] },
            { id: 'R1.10', o: ['pay for a hotel room on my account', 'send Pepper to Mr. Aldous for a week', 'clean the whole apartment every day', 'change the dates of your own plans'] },
            { id: 'R1.11', o: ['the side door as well', 'the main lobby instead', 'the park entrance too', 'the fourth floor first'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Nashwaak Valley Motors, Fredericton: Pre-Owned Vehicles</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Vehicle</th><th>Year</th><th>Seats</th><th>Kilometres</th><th>Fuel use (L/100 km)</th><th>Certified</th><th>Price</th></tr></thead><tbody>' +
            '<tr><td>Compact hatchback</td><td>2019</td><td>5</td><td>88,000</td><td>6.8</td><td>No</td><td>$14,900</td></tr>' +
            '<tr><td>Mid-size sedan</td><td>2020</td><td>5</td><td>64,000</td><td>7.4</td><td>Yes</td><td>$18,500</td></tr>' +
            '<tr><td>Small SUV</td><td>2018</td><td>7</td><td>112,000</td><td>8.9</td><td>No</td><td>$16,200</td></tr>' +
            '<tr><td>Minivan</td><td>2017</td><td>7</td><td>131,000</td><td>10.8</td><td>Yes</td><td>$15,800</td></tr>' +
            '<tr><td>Pickup truck</td><td>2019</td><td>5</td><td>97,000</td><td>12.5</td><td>No</td><td>$24,900</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Certified vehicles have passed a 120-point inspection and come with a free first oil change.</li><li>A documentation fee of $399 is added to every sale. Prices and fees do not include sales tax.</li><li>The agreed value of a trade-in is subtracted from the vehicle price before the documentation fee is added.</li><li>Extended warranty (2 years): $1,200. Available only on vehicles with fewer than 100,000 km.</li><li>Winter tire package: $650, installed. Free with any vehicle whose listed price (before any trade-in) is over $18,000, when bought before November 30.</li><li>A refundable deposit of $500 holds any vehicle for up to 3 days.</li><li>Test drives are available Monday to Saturday. Please bring a valid driver\'s licence.</li><li>Trade-in values are set by our service manager after a short inspection and are valid for 7 days.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Callum,</p><p>I stopped at the used car lot in Fredericton on my way home. With the twins, your parents when they visit, and the two of us, we need room for six, and after what happened with our last car I only want something certified. That leaves just one choice: the [[R2.1]]. It has more kilometres than I would like, and because of that we could not add [[R2.2]]. On the plus side, it is [[R2.3]], so it has already passed a full inspection.</p><p>The salesperson offered us $3,500 for our old car as a trade-in. With the documentation fee, we would pay [[R2.4]] before tax.</p><p>We would also need winter tires. Even though we would be buying well before the end of November, [[R2.5]], because of the van\'s price.</p><p>Can we go and look at it together on Saturday?</p><p>Fiona</p>',
          blanks: [
            { id: 'R2.1', o: ['minivan', 'small SUV', 'mid-size sedan', 'pickup truck'] },
            { id: 'R2.2', o: ['the extended warranty', 'the winter tire package', 'the free first oil change', 'the trade-in credit'] },
            { id: 'R2.3', o: ['on the certified list', 'under 100,000 kilometres', 'still under the factory warranty', 'eligible for the free tires'] },
            { id: 'R2.4', o: ['$12,699', '$12,300', '$16,199', '$11,901'] },
            { id: 'R2.5', o: ['we would have to pay $650 for them', 'they would be included at no charge', 'we would have to wait until December', 'the dealer could not install them'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A customer trades in a car valued at $4,000 and buys the mid-size sedan in October. Not counting tax, the customer pays', o: ['$14,899, with winter tires included.', '$15,549, including the winter tires.', '$14,500, with winter tires included.', '$14,899, plus $650 for the tires.'] },
            { id: 'R2.7', q: 'A customer can spend at most $16,000 on the vehicle itself and wants the extended warranty. The customer should choose the', o: ['compact hatchback, which meets both needs.', 'minivan, which is also under the price limit.', 'small SUV, which costs just a little more.', 'pickup truck, which is under 100,000 km.'] },
            { id: 'R2.8', q: 'A driver who wants a free oil change and the lowest possible fuel use should choose the', o: ['mid-size sedan, though another car uses less fuel.', 'compact hatchback, the most fuel-efficient vehicle.', 'minivan, the oldest of the certified vehicles.', 'small SUV, which costs less than the sedan.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Festivals That Light Up the Long Nights</h3><p><b>A.</b> Canadians have always looked for ways to make the darkest months easier to bear, but festivals built around light rather than snow are a fairly recent idea. Most of them began within the last twenty years, often as a way to bring people back downtown after the holidays, when shops and restaurants usually have their quietest weeks. In several cities, organizers started with a handful of glowing sculptures in a single park. Today some events stretch across entire neighbourhoods and draw hundreds of thousands of visitors over a few weeks. The timing is deliberate: most run in late January or February, when the excitement of the holidays has faded and spring still feels very far away.</p><p><b>B.</b> Behind the glow are many months of work. Most festivals select their artists the previous spring, through open competitions that invite proposals from around the world. Designers must plan for conditions that indoor artists never face. Electronics have to keep working at minus thirty, wiring must be protected from snow and road salt, and every structure has to stand up to strong winds. Many installations now use low-energy bulbs, which give off almost no heat. That keeps power bills down, but it also means snow no longer melts off the lights on its own, so it must be cleared by hand after every storm. Volunteers often do this work, walking the site each morning with soft brushes.</p><p><b>C.</b> Cities support these festivals largely because of what visitors spend. One study of a festival found that each visitor from out of town spent an average of about $180 on meals, hotel rooms and shopping. Businesses close to the festival sites often report their best winter evenings of the year, and some cities now spend part of the festival budget on free shuttle buses from parking lots on the edge of town. Not everyone benefits, however. Restaurants just outside the festival area sometimes say they lose customers to the food trucks brought in for the event, and residents complain about traffic and a lack of parking on their streets.</p><p><b>D.</b> For visitors, a little planning makes a big difference. The most popular installations can have long lines on weekend evenings, so weeknights are usually more pleasant. Families with young children often find that the first hour after dark works best. Dressing in layers matters more than many people expect, because walking a full festival route can take two hours or more, much of it spent standing still. Many sites are free to enter, but some charge admission for special areas, and tickets for these often sell out. Photographers are advised to bring spare batteries, which drain quickly in the cold, and to keep them in an inside pocket.</p>',
          questions: [
            { id: 'R3.1', q: 'Some events grew out of a small number of displays in one location.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Using lights that stay cool has created extra work after snowfalls.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Artists are paid more when their work can survive harsh weather.', fixed: true, a: 'E' },
            { id: 'R3.4', q: 'Not every business near the festival gains from it.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'The festivals are scheduled for a time when people\'s spirits are often low.', fixed: true, a: 'A' },
            { id: 'R3.6', q: 'Low temperatures shorten the life of the power supplies visitors carry.', fixed: true, a: 'D' },
            { id: 'R3.7', q: 'Most people who attend these festivals travel from outside the city.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'The festivals were partly designed to help businesses during a slow period.', fixed: true, a: 'A' },
            { id: 'R3.9', q: 'Artists are selected many months before the festival opens.', fixed: true, a: 'B' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Is the Era of Free Returns Ending?</h3><p>For years, free returns were one of the biggest selling points of online shopping. Order three sizes, keep the one that fits and send the rest back at no cost. But a growing number of online retailers have begun charging customers to return items, usually a flat fee of between $5 and $10, and the change has sparked strong reactions.</p><p>Bettina Kraus runs a small online clothing shop in Winnipeg. Last year, she started charging $8 per return. "Some customers were ordering five dresses for one event, wearing one, and sending everything back," she says. "Each return costs me shipping both ways, plus the time to inspect, steam and repackage the item. On a $60 dress, that can wipe out my entire profit." Since introducing the fee, her return rate has fallen from about one order in three to one in five, and she says most of her regular customers did not object. She still offers free exchanges, however, because "an exchange means I keep the sale."</p><p>Consumer advocate Adebayo Nwosu sees it differently. He argues that when shoppers cannot touch or try on a product, the risk of a poor fit or a misleading photo falls on them, and a free return is the only fair way to share that risk. "In a store, you can try on a jacket in thirty seconds. Online, the seller saves the cost of a fitting room and a salesperson. Return shipping is the least it can offer." He also worries that fees hit rural shoppers hardest, since many have no store nearby and must buy online. Nwosu admits that some customers abuse generous policies, but he believes retailers should deal with those few, for example by limiting returns on accounts with unusually high return rates, instead of charging everyone.</p><p>Shirin Rahimi manages a warehouse near Laval that handles returns for several online sellers. She points to a cost that customers rarely see. "People imagine their return goes straight back on a shelf," she says. "Often it doesn\'t. Items that are damaged, out of season or simply too costly to check are sold in bulk for a fraction of their value, and some end up in landfill." She estimates that roughly one item in four that passes through her building is never sold again as new. In her view, a modest fee encourages shoppers to think before they click, which is better for businesses and for the environment.</p><p>Kraus and Rahimi both say that clearer product information could reduce returns more than any fee. Kraus now lists each model\'s height and the size she is wearing, and says questions about fit have dropped noticeably since then. Nwosu agrees that better sizing information would help, but says sellers should also prove that fees are not simply a new source of profit. "If a company charges for returns," he says, "it should show customers where that money goes."</p><p>For now, shoppers who want to avoid fees still have options: many retailers waive them for exchanges, for store credit, or for items dropped off at a physical location.</p>',
          questions: [
            { id: 'R4.1', q: 'According to Kraus, the main problem with free returns was that', o: ['some shoppers ordered far more than they meant to keep.', 'her regular customers had stopped buying from her online shop.', 'exchanges were costing her more than returns did.', 'she could no longer sell a dress after steaming it.'] },
            { id: 'R4.2', q: 'Kraus still allows free exchanges because', o: ['she does not lose the sale when an item is swapped.', 'her regular customers insisted that she keep them.', 'exchanges cost less to ship than ordinary returns.', 'rural shoppers have no other way to get the right size.'] },
            { id: 'R4.3', q: 'Nwosu mentions fitting rooms to make the point that', o: ['online sellers already avoid costs that stores must pay.', 'shoppers should try clothes on in a store before buying.', 'physical stores should also offer free return shipping.', 'fitting rooms are the main reason stores get few returns.'] },
            { id: 'R4.4', q: 'What does Rahimi suggest about returned items?', o: ['Many of them cannot be offered at full price again.', 'Most of them are thrown away after inspection.', 'Most of them go quickly back onto store shelves.', 'They are usually checked by the original seller.'] },
            { id: 'R4.5', q: 'Which idea would all three people most likely accept?', o: ['Sellers should give shoppers more help choosing the right size.', 'Return fees mainly serve to increase company profits.', 'Customers who abuse returns should be refused service.', 'A flat fee of $8 is fair to most online shoppers.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I live two hours from the nearest mall, so I do nearly all of my shopping online, and I agree with Mr. Nwosu that return fees [[R4.6]]. Last winter, I ordered boots in two sizes because the website gave no sizing information at all. Paying to send one pair back would have felt like being punished for [[R4.7]].</p><p>That said, Ms. Rahimi\'s point about [[R4.8]] made me stop and think. I had always assumed my returns were simply put back on sale.</p><p>I also like Ms. Kraus\'s idea of [[R4.9]]. It costs the seller almost nothing, and it would have saved me from guessing.</p><p>If companies decide to charge anyway, I hope they take Mr. Nwosu\'s advice and [[R4.10]].</p>',
          blanks: [
            { id: 'R4.6', o: ['fall hardest on people far from stores', 'are fair to sellers with small profits', 'should only apply to clothing orders', 'mostly affect people who order too much'] },
            { id: 'R4.7', o: ['the store\'s own missing information', 'my own careless shopping habits', 'living too far from the post office', 'ordering during a winter sale'] },
            { id: 'R4.8', o: ['what really happens to returned goods', 'the cost of running a fitting room', 'how fees lower the number of returns', 'customers who wear things only once'] },
            { id: 'R4.9', o: ['showing the size that each model wears', 'offering exchanges at no extra cost', 'charging eight dollars for each return', 'limiting accounts with many returns'] },
            { id: 'R4.10', o: ['explain how the fee money is used', 'limit how many sizes people order', 'drop the fee for rural customers', 'offer better sizing charts first'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You have been a patient at the same dental clinic for six years. Last month, you phoned two days ahead to cancel a cleaning appointment, which follows the clinic\'s 24-hour cancellation policy. This week, you received a bill for a $75 missed-appointment fee. When you called about it, the receptionist also told you that the clinic will no longer bill your insurance company directly, so you must now pay the full $210 at each visit and wait for your insurer to pay you back.</p><p>Write an email to the clinic\'s office manager. In your email, do the following:</p><ul><li>Explain why you believe the $75 fee is a mistake.</li><li>Describe how the new payment policy will affect you.</li><li>Say what you would like the clinic to do, and what you may do if the situation is not resolved.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city has $400,000 to spend on one improvement to its largest park and is asking residents which project they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Install lighting along the 5-kilometre riverside trail so that people can walk, run and cycle safely on winter evenings. The city would pay about $18,000 a year for electricity and repairs, and some homes beside the river would have lights near their windows at night.' },
            { key: 'B', label: 'Option B', text: 'Build a large fenced off-leash dog area with benches, shade and a water station. It would take over part of an open field now used for casual soccer and picnics, and only residents with dogs would use it regularly.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood where you like to spend time, and explain why you enjoy going there.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has had a painful tooth for two weeks but keeps putting off going to the dentist. She is nervous about dental visits, and she has no dental insurance until she starts a new job with benefits in three months. A first visit and X-rays at a nearby clinic would cost about $250. Give your friend advice about what she should do.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you bought something that turned out to be disappointing. What was it, what did you do about it, and what would you do differently if it happened again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/N/scene.jpg" alt="A busy city park on a summer afternoon as a rain cloud approaches">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/N/scene.jpg" alt="A busy city park on a summer afternoon as a rain cloud approaches">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your eight-year-old needs care after school this year, from 3:15 p.m. until you or your partner can pick her up, usually around 5:45 p.m. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Community centre program', image: '<img src="tests/img/N/opt_A.jpg" alt="Photo: Community centre program">', facts: ['$420 a month', 'Staff walk the children from school', 'Groups of about 25 children; closes at 6:00 p.m. sharp', 'Waiting list: a place may not open until October'] },
            { key: 'B', title: 'Home daycare next door', image: '<img src="tests/img/N/opt_B.jpg" alt="Photo: Home daycare next door">', facts: ['$520 a month', 'At most 6 children, with a quiet homework corner', 'Pickup any time until 6:30 p.m.', 'Closed when the caregiver is sick, with no backup'] }
          ],
          third: { key: 'C', title: 'Nanny share', image: '<img src="tests/img/N/opt_C.jpg" alt="Photo: Nanny share">', facts: ['$750 a month per family', 'Care in your own home, alternating weeks with the other family', 'Nanny can help with homework and dinner', 'Both families must agree on rules and holidays'] },
          persuade: 'Your partner thinks the nanny share would be better. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You are a volunteer with your town\'s fire department, and months ago you agreed to run the grill at its pancake breakfast this Saturday morning. The breakfast is the department\'s biggest fundraiser of the year. Today, you learned that your daughter\'s soccer team has reached the provincial final at the same time, two hours away, and her coach has asked you to drive three of the players.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to the fire chief. Explain why you cannot run the grill on Saturday.</p><p><b>Option B:</b> Talk to the coach. Explain why you cannot drive the players to the final.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your apartment building currently allows cats and small caged pets, but not dogs. The owner has asked tenants to vote next month on whether to allow dogs under 15 kilograms. Some tenants say that dogs would make the building more attractive to new renters and help people who live alone feel less lonely. Others worry about barking, allergies, and damage to the hallway carpets that were replaced last year.</p><p>Should the building allow dogs? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a pet supply store and see this unusual pet carrier. Call your friend, who has just adopted a cat, lives on the fourth floor of a building with no elevator, and takes the bus to the vet. The carrier costs $129, weighs 3 kilograms when empty, and can hold a pet of up to 7 kilograms. Her cat weighs 6 kilograms. Describe the carrier and explain whether you think your friend should buy it.', image: '<img src="tests/img/N/object.jpg" alt="An unusual pet carrier backpack in a pet supply store">' }
      ]
    }
  });
})();
