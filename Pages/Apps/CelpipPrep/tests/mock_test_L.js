/* Rowe CELPIP Mock Exam: Test L content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/L/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'L',
    title: 'Mock Test 12',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { VERA: { name: 'Vera', g: 'f', skin: '#f2cfb0', hair: '#7b4a2a', shirt: '#c0392b', style: 'bun' }, NIKO: { name: 'Niko', g: 'm', skin: '#d6a07a', hair: '#1d1410', shirt: '#2e86c1', style: 'short' } },
        segments: [{
          lines: [
            ['VERA', 'They\'re out of the small jars of honey. There are only the big ones left, and those are eighteen dollars.'],
            ['NIKO', 'The small ones were nine, and the big jar\'s twice the size, so it\'s really the same price.'],
            ['VERA', 'True, but we barely finished the last small jar before it went all grainy. I\'d rather come back next week.'],
            ['NIKO', 'Fair enough. She said she\'d have more on Saturday anyway.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Vera decide not to buy the large jar?', o: ['They would probably not finish it in time.', 'The large jar costs more for the amount.', 'The seller will lower the price on Saturday.', 'She prefers a different kind of honey.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { ROSA: { name: 'Rosa', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#8e44ad', style: 'long' }, CALLUM: { name: 'Callum', g: 'm', skin: '#f0c9a6', hair: '#a0522d', shirt: '#2c3e50', style: 'short' } },
          segments: [
            {
              lines: [
                ['ROSA', 'Callum, is it just me, or is it freezing in here? I\'ve had my coat on since I got home.'],
                ['CALLUM', 'It\'s not you. The thermostat says fourteen degrees. I think the furnace quit sometime this afternoon. It keeps clicking, but nothing actually comes on.'],
                ['ROSA', 'Fourteen? And it\'s supposed to drop to minus twenty-eight tonight. Did you call Gary?'],
                ['CALLUM', 'Twice. Straight to voicemail both times. His message says he\'s visiting family out west and won\'t be back until Sunday.'],
                ['ROSA', 'Sunday? It\'s Wednesday. We can\'t do four nights like this. And what about the pipes under the kitchen sink? If those freeze and burst, we\'re looking at a much bigger problem than a cold house.'],
                ['CALLUM', 'I know. I checked the lease, though. It says that in an emergency we can call a repair company ourselves, and he pays. But only up to five hundred dollars without his written okay.'],
                ['ROSA', 'Well, if this isn\'t an emergency, I don\'t know what is. Pass me the laptop, would you?']
              ],
              questions: [
                { id: 'L1.1', q: 'Why is Rosa especially worried about waiting until Sunday?', o: ['The cold could cause serious damage to the plumbing.', 'The landlord will refuse to pay for repairs after the weekend.', 'The lease does not allow any repairs on weekends.', 'The furnace will be harder to restart after that.'] },
                { id: 'L1.2', q: 'What does the lease allow the couple to do?', o: ['Arrange urgent repairs within a spending limit', 'Choose a company that the landlord approves', 'Take repair costs off their next rent payment', 'Wait until Sunday before calling anyone at all'] },
                { id: 'L1.3', q: 'What will Rosa most likely do next?', o: ['Look for someone who can fix the heating', 'Leave another message on Gary\'s voicemail', 'Read the lease to find Gary\'s other number', 'Book a hotel room until the landlord returns'] }
              ]
            },
            {
              lines: [
                ['CALLUM', 'Okay, I got through to Prairie Comfort Heating. They can send someone tonight, but the after-hours call-out fee is a hundred and eighty, and that\'s before parts or labour.'],
                ['ROSA', 'And the other place? Superior something?'],
                ['CALLUM', 'Superior Furnace. They can come tomorrow at eight, at their regular rate. That\'s ninety-five for the visit. So it\'s cheaper, but it means another night like this.'],
                ['ROSA', 'Hmm. Saving money is nice, but technically it\'s not our money. And if it\'s something big, we\'ll go over the five hundred either way.'],
                ['CALLUM', 'True. What about the two space heaters in the basement? If we put one in the kitchen and keep the doors shut, the pipes should be fine until morning.'],
                ['ROSA', 'Those old things? Last winter, one of them kept tripping the breaker every time the microwave was on. And it smelled like burning plastic. I\'m not leaving that running while we sleep.'],
                ['CALLUM', 'Okay, fair enough. I\'ll call Prairie back. Better to pay a bit extra than wake up to water all over the floor.']
              ],
              questions: [
                { id: 'L1.4', q: 'How much more is Prairie\'s call-out fee than Superior\'s visit fee?', o: ['$85', '$95', '$180', '$275'] },
                { id: 'L1.5', q: 'Why is Rosa not very concerned about the higher fee?', o: ['The landlord will be the one paying for it.', 'The morning company charges extra for parts.', 'She expects the repair to cost under a hundred dollars.', 'The evening company has better online reviews.'] },
                { id: 'L1.6', q: 'Why does Rosa reject the idea of using the space heaters?', o: ['She doubts they are safe to leave on overnight.', 'They would not keep the kitchen warm enough.', 'They would use far too much electricity overnight.', 'She thinks they are needed to heat the basement.'] }
              ]
            },
            {
              lines: [
                ['CALLUM', 'So the technician just left. Good news: it\'s working again. A small part called the igniter had cracked, and she had a spare in her van.'],
                ['ROSA', 'Oh, thank goodness. What did it all come to?'],
                ['CALLUM', 'Four hundred and twenty, including the call-out fee.'],
                ['ROSA', 'Well, at least that\'s under the limit. Anything else?'],
                ['CALLUM', 'But she also said there\'s rust on one of the main parts inside, and the furnace is about twenty-five years old. She wouldn\'t be surprised if Gary has to replace the whole thing within a year or two.'],
                ['ROSA', 'Well, that\'s his decision, not ours. But we should send him everything in writing, the bill and her notes, so he can\'t say later that nobody told him.'],
                ['CALLUM', 'Agreed. And I\'ll just take the four-twenty off next month\'s rent.'],
                ['ROSA', 'Hang on. Does the lease actually say we can do that? I\'d rather ask him first. We\'re going to need a good reference from him when we move out in the spring.']
              ],
              questions: [
                { id: 'L1.7', q: 'What did the technician suggest about the furnace?', o: ['It may need to be replaced fairly soon.', 'Its igniter is likely to crack again soon.', 'It is too old to be repaired safely now.', 'It needs a new main part right away.'] },
                { id: 'L1.8', q: 'Why does Rosa hesitate about Callum\'s plan for the rent?', o: ['She wants to stay on good terms with the landlord.', 'She thinks the bill is too high to claim back from him.', 'She believes Gary has already paid the bill.', 'She plans to renew the lease in the spring.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { PHARM: { name: 'Pharmacist', g: 'f', skin: '#e8c3a0', hair: '#4a3020', shirt: '#ecf0f1', style: 'bun' }, TEO: { name: 'Teodor', g: 'm', skin: '#f2cfb0', hair: '#5a3825', shirt: '#117864', style: 'short' } },
          segments: [{
            lines: [
              ['PHARM', 'Hi there, what can I do for you?'],
              ['TEO', 'Hi, I\'m picking up a refill for my blood pressure pills. I phoned it in on Monday. Last name\'s Novak.'],
              ['PHARM', 'Let me check. Okay, Teodor Novak. Hmm, I\'m sorry, it looks like you\'d used up all your refills. We faxed your doctor on Tuesday to ask for a renewal, but we haven\'t heard back yet.'],
              ['TEO', 'Oh, no. I\'ve only got two pills left, and her office is closed until Monday. She\'s away at a conference, I think.'],
              ['PHARM', 'That\'s okay, you\'ve got options. Pharmacists in this province can renew a regular medication like this one, as long as the dose hasn\'t changed recently. Has it?'],
              ['TEO', 'No, it\'s been the same for about three years.'],
              ['PHARM', 'Then I can give you a one-month supply today. I\'ll just need to check your blood pressure first, and I\'ll send your doctor a note so she knows.'],
              ['TEO', 'Only a month? Normally I get three at a time.'],
              ['PHARM', 'I know, but for this kind of renewal I\'d rather keep it short. That gives you time to see your doctor, and she can write you a longer prescription herself.'],
              ['TEO', 'Makes sense. Is there a charge for that?'],
              ['PHARM', 'Not for the renewal, no. You\'ll just pay your usual share for the pills. Oh, wait. It says here your coverage ended last month. Did you change jobs?'],
              ['TEO', 'Yeah, I did. I\'ve got a new card somewhere. Here it is.'],
              ['PHARM', 'Great, I\'ll update that now, so you\'re not charged the full price. The blood pressure machine\'s just over there by the window. Have a seat, and this should take about fifteen minutes.'],
              ['TEO', 'Perfect. Oh, while I\'m here, my wife wanted to know if you\'re doing flu shots yet.'],
              ['PHARM', 'We start on the first of the month. On weekdays you have to book online, but Saturday mornings are first come, first served.'],
              ['TEO', 'Okay, I\'ll let her know. She works downtown all week, so I\'m guessing a weekday won\'t really work for her.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why was Teodor\'s refill not ready?', o: ['His doctor had not yet approved more refills.', 'The pharmacy never received his phone call on Monday.', 'His insurance company refused to pay for it.', 'The pills will not be in stock until Monday.'] },
              { id: 'L2.2', q: 'Why does the pharmacist ask whether his dose has changed?', o: ['It decides whether she can renew it herself.', 'She needs it to work out his insurance share.', 'She is preparing a three-month supply for him.', 'His doctor asked her to check this in her fax.'] },
              { id: 'L2.3', q: 'Why does the pharmacist give only a one-month supply?', o: ['So that he arranges to see his own doctor', 'Because his new plan only covers one month', 'Because a longer renewal has a separate fee', 'So that she can recheck his blood pressure'] },
              { id: 'L2.4', q: 'What problem does the pharmacist notice in his file?', o: ['His insurance information is out of date.', 'He has taken the pills for only three months.', 'His doctor changed his dose a few weeks ago.', 'His pharmacy account shows an unpaid balance.'] },
              { id: 'L2.5', q: 'What will Teodor\'s wife probably do?', o: ['Come in on a weekend without an appointment', 'Book a weekday appointment on the pharmacy website', 'Visit the pharmacy downtown during work', 'Ask her own doctor to give her the shot'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'f', skin: '#a9714b', hair: '#1d1410', shirt: '#7d3c98', style: 'curly' }, BRAM: { name: 'Bram Hoekstra', g: 'm', skin: '#f2cfb0', hair: '#c49a42', shirt: '#6e2c00', style: 'short' } },
          segments: [{
            lines: [
              ['HOST', 'My guest this morning is Bram Hoekstra, who grows vegetables on a small farm outside Brandon and sells most of them through a weekly box program. Bram, how does it work?'],
              ['BRAM', 'Pretty simply. In the spring, families pay up front for the whole season, that\'s eighteen weeks. Then every Thursday from late June, they pick up a box of whatever\'s ready that week.'],
              ['HOST', 'Why ask people to pay so early?'],
              ['BRAM', 'Because spring is when all my bills arrive. Seed, fuel, hiring summer help. Before we started this, I put all of that on a line of credit and hoped August would pay it back. Now the money\'s there when I actually need it.'],
              ['HOST', 'But that means your customers are taking a risk, too.'],
              ['BRAM', 'They are, and I\'m honest with them about it. Two summers ago we had a hailstorm in July that flattened half the farm. The boxes were pretty thin for about three weeks.'],
              ['HOST', 'How did people react?'],
              ['BRAM', 'Honestly? Better than I expected. A few were disappointed, sure. But most said they knew what they\'d signed up for. One family even drove out and helped us replant.'],
              ['HOST', 'How many families are we talking about?'],
              ['BRAM', 'We started six years ago with thirty. This year it\'s a hundred and forty, and there\'s a waiting list. I could take more, but I\'d have to rent more land, and, well, I\'m not sure I want to get that big.'],
              ['HOST', 'What do people find hardest?'],
              ['BRAM', 'Not choosing. In August you might get eight zucchini, and in June it\'s mostly greens. So we tuck recipes into every box.'],
              ['HOST', 'That\'s a lot of zucchini.'],
              ['BRAM', 'And at the pickup there\'s a swap table now. If you can\'t stand beets, you leave them and grab something somebody else didn\'t want.'],
              ['HOST', 'Is it cheaper than the grocery store?'],
              ['BRAM', 'Over a whole season, about the same, maybe a little less. But that\'s not really why people join. They want to know who grew their food. A lot of them bring their kids out to walk the fields.'],
              ['HOST', 'And what\'s new this year?'],
              ['BRAM', 'A half-share. A full box was just too much for a lot of seniors and people living alone, so now they can pick one up every second week instead.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why does Bram ask customers to pay at the start of the season?', o: ['His biggest costs come before the harvest.', 'Customers get a discount for paying early.', 'His bank refused to extend his line of credit.', 'He needs to know how much land to rent.'] },
              { id: 'L3.2', q: 'What happened after the hailstorm two summers ago?', o: ['Members received less food than usual for a while.', 'Most families asked for part of their money back.', 'The farm stopped the Thursday pickups for a month.', 'Several families left the program the next spring.'] },
              { id: 'L3.3', q: 'What can be inferred about Bram\'s plans for the program?', o: ['He is reluctant to let it grow much larger.', 'He intends to rent more land next season.', 'He will soon close the program\'s waiting list.', 'He hopes to return to just thirty families.'] },
              { id: 'L3.4', q: 'What does Bram say members find hardest?', o: ['Taking whatever the farm happens to grow', 'Eating eight zucchini every week in August', 'Picking up their box every Thursday', 'Paying for the whole season in spring'] },
              { id: 'L3.5', q: 'According to Bram, why do most people join?', o: ['They want a personal connection with the farm behind their meals.', 'The boxes cost far less than vegetables at the store.', 'Their children enjoy helping to plant the fields.', 'They like being able to choose their own vegetables.'] },
              { id: 'L3.6', q: 'Who is the new option mainly meant for?', o: ['Small households that cannot use a weekly box', 'Families who would rather pay as they go', 'Customers who are still on the waiting list', 'Seniors who cannot drive out on Thursdays'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#8d5a3b', hair: '#120c08', shirt: '#1f3a5f', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Regina residents will see a different approach to snow clearing this winter, after city council approved changes to its snow plan on Tuesday night.'],
              ['NEWS', 'Until now, crews have cleared residential streets only after snowfalls of ten centimetres or more. Under the new plan, that threshold drops to five centimetres.'],
              ['NEWS', 'However, crews will plow a single lane down the middle of each street, rather than clearing it from curb to curb.'],
              ['NEWS', 'The city says the change will allow crews to finish every residential area within three days of a storm, instead of the five days it often took last winter.'],
              ['NEWS', 'Not everyone is pleased. Several residents told council that a single lane leaves a ridge of hard-packed snow along parked cars and across the ends of driveways. Under the plan, homeowners will remain responsible for clearing that snow themselves.'],
              ['NEWS', 'To help, the city is launching a program for seniors and people with disabilities. Volunteers from high schools and service clubs will be matched with households that need help, and the city will pay each volunteer group twenty-five dollars for every driveway it clears.'],
              ['NEWS', 'Council also approved an online map showing when a plow last passed each street and where crews are working now.'],
              ['NEWS', 'Staff say the map should reduce the flood of phone calls that follows every storm. After one blizzard last January, the city received more than eleven thousand calls in a single week.'],
              ['NEWS', 'The changes will add about one point two million dollars to this year\'s snow budget. Forecasters are calling for up to fifteen centimetres of snow by Friday, which may give the new plan its first real test.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the main change to residential snow clearing?', o: ['Crews will start sooner but clear less of each street.', 'Crews will now clear every street from curb to curb.', 'Residents will now have to plow their own streets.', 'Plowing will begin only after ten centimetres of snow.'] },
              { id: 'L4.2', q: 'According to the city, what is the main benefit of the change?', o: ['Neighbourhoods will be cleared more quickly.', 'There will be more room for parked cars.', 'Homeowners will have less snow to shovel.', 'The city will spend less money on snow clearing.'] },
              { id: 'L4.3', q: 'What complaint did some residents make?', o: ['The method leaves snow that they must remove.', 'The volunteers are too young to do the work safely.', 'The online map does not show their street.', 'Plows will no longer come to their area.'] },
              { id: 'L4.4', q: 'Who will receive money under the new driveway program?', o: ['The organizations whose members do the clearing', 'Seniors who hire someone to clear their driveway', 'Homeowners who remove the snow ridges themselves', 'High school students who sign up individually'] },
              { id: 'L4.5', q: 'Why does the report mention eleven thousand calls?', o: ['To show why the city expects the map to be useful', 'To show how many residents opposed the new plan', 'To explain why the snow budget has gone up', 'To show how many households asked for driveway help'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Spring show: pick one', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { HELEN: { name: 'Helen', g: 'f', skin: '#f0c9a6', hair: '#9c9c9c', shirt: '#1a5276', style: 'bun' }, PATRICK: { name: 'Patrick', g: 'm', skin: '#8d5a3b', hair: '#120c08', shirt: '#d35400', style: 'short' }, NATALIE: { name: 'Natalie', g: 'f', skin: '#e3b28b', hair: '#6b4a2b', shirt: '#27ae60', style: 'long' } },
          segments: [{
            lines: [
              ['HELEN', 'Okay, let\'s start. We need to choose the spring show tonight, because auditions have to be posted by March first.'],
              ['PATRICK', 'I still think we should do a musical. Our last musical sold out every single night.'],
              ['NATALIE', 'It did, but that was three years ago, before the rights went up.'],
              ['HELEN', 'How much are we talking about?'],
              ['NATALIE', 'The musical\'s rights are two thousand four hundred dollars for six shows. The comedy is only six hundred.'],
              ['PATRICK', 'Sure, but a musical brings in more. Tickets are twenty-five dollars instead of eighteen.'],
              ['NATALIE', 'And we\'d need musicians. A hired band alone would cost us about three thousand.'],
              ['PATRICK', 'Not if we ask the high school jazz band. Their teacher already offered, actually.'],
              ['HELEN', 'Wait, really? When did that happen?'],
              ['PATRICK', 'Last week. The students want stage experience. We\'d just make a donation to their music program.'],
              ['NATALIE', 'Okay, that changes things. But rehearsals are the other problem. Musicals need twice as many.'],
              ['HELEN', 'And we only have the hall three evenings a week. The yoga group has it the rest.'],
              ['PATRICK', 'Could we rehearse the songs somewhere else? My living room fits ten people easily.'],
              ['NATALIE', 'Ten, maybe. But the musical has a cast of twenty-two. The comedy needs eight.'],
              ['HELEN', 'Here\'s my real worry. Half our regular actors can\'t sing, and they\'d be left out.'],
              ['PATRICK', 'They could join the chorus. Plenty of people discover they can sing.'],
              ['NATALIE', 'Patrick, you said that last time, and two of them quit before opening night.'],
              ['PATRICK', 'Okay, fair point. That was a rough spring.'],
              ['HELEN', 'So what if we do the comedy this spring, and plan the musical for the fall?'],
              ['NATALIE', 'That gives us six months to raise money for the rights. I like that.'],
              ['PATRICK', 'And the jazz band could still join us, if their teacher is willing to wait.'],
              ['HELEN', 'Good. Patrick, could you talk to the teacher before he makes other plans?'],
              ['PATRICK', 'Sure, I\'ll call him tomorrow. But I\'m holding you both to the fall.'],
              ['NATALIE', 'Deal. I\'ll order the comedy scripts tonight, so the audition notice can say which play.'],
              ['HELEN', 'Perfect. Natalie, could you also check whether the hall is free on our opening weekend?'],
              ['NATALIE', 'I will. Last year the yoga group booked it before we did, remember?']
            ],
            questions: [
              { id: 'L5.1', q: 'What is the main purpose of the meeting?', o: ['To decide which production to stage in spring', 'To plan auditions for the school jazz band', 'To find a new place to hold rehearsals', 'To raise money for the high school music program'] },
              { id: 'L5.2', q: 'How much more would the musical\'s rights cost than the comedy\'s?', o: ['$1,800', '$2,400', '$3,000', '$600'] },
              { id: 'L5.3', q: 'What does Helen\'s question about the jazz band show?', o: ['She had not known about the teacher\'s offer.', 'She doubts the students are skilled enough.', 'She thinks the offer came too late to use.', 'She wants to know the size of the donation.'] },
              { id: 'L5.4', q: 'Why does Natalie think Patrick\'s living room would not solve the problem?', o: ['The musical needs far more performers than it can hold.', 'The yoga group already rehearses there in the evenings.', 'The comedy would need it more than the musical would.', 'The hall is closer to most of the cast members\' homes.'] },
              { id: 'L5.5', q: 'What is Helen\'s main concern about choosing the musical?', o: ['Some regular members might not get to perform.', 'The chorus would be too large for their stage.', 'Ticket prices would be too high for audiences.', 'The jazz band might quit before opening night.'] },
              { id: 'L5.6', q: 'Why does Natalie mention what happened last time?', o: ['To cast doubt on Patrick\'s point about the chorus', 'To remind them that the last musical sold out', 'To explain why the price of the rights went up', 'To show that the yoga group often books first'] },
              { id: 'L5.7', q: 'What is Patrick\'s attitude toward the final plan?', o: ['He agrees but wants a firm commitment for later.', 'He is upset that the musical has been cancelled.', 'He doubts the teacher will agree to the delay.', 'He would prefer to stage both shows in spring.'] },
              { id: 'L5.8', q: 'What does Natalie\'s last remark suggest?', o: ['The hall could be taken unless they book it soon.', 'The yoga group will share the hall on opening night.', 'The comedy will need to open a week later than planned.', 'The auditions will have to be held outside the hall.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Garbage pickup every two weeks?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#d6a07a', hair: '#333333', shirt: '#4a235a', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'A growing number of Canadian towns are considering picking up household garbage every two weeks instead of every week, while keeping weekly collection of green bins for food scraps.'],
              ['NARR', 'Supporters call it the simplest way to cut waste. Critics say it simply moves the problem somewhere else.'],
              ['NARR', 'Corinne Delorme coordinates waste reduction for a town in eastern Ontario that made the switch three years ago.'],
              ['NARR', 'Her first argument is about habits. When garbage day only comes twice a month, she says, people suddenly notice how much room food scraps take up in their garbage bin, and they start using the green bin instead.'],
              ['NARR', 'In her town, the amount of food waste collected in green bins rose by almost forty percent in the first year, while the weight of garbage sent to the landfill fell by about a quarter.'],
              ['NARR', 'Her second argument is about cost. Garbage trucks are expensive to run, and fewer trips mean lower fuel and staff costs.'],
              ['NARR', 'Delorme says her town saved enough in the first two years to extend the life of its landfill and to open a drop-off depot for old electronics and leftover paint.'],
              ['NARR', 'She admits the first summer was difficult. Residents complained about smells, especially from diapers, and the town received more complaints that July than in the whole previous year.'],
              ['NARR', 'The town\'s answer was to let families with babies, and people with certain medical needs, put out one extra bag every week at no charge. Complaints dropped sharply after that, she says.'],
              ['NARR', 'Malcolm Reyes is not persuaded. He manages six apartment buildings in the same region, and he believes the policy was designed with single-family homes in mind.'],
              ['NARR', 'In a large building, he explains, garbage from eighty or ninety units goes into one shared bin room. When pickup is cut in half, that room overflows, attracts pests and becomes a fire risk.'],
              ['NARR', 'His buildings now pay a private company to haul away the extra garbage, and that cost, he says, ends up in tenants\' rent.'],
              ['NARR', 'His second concern is illegal dumping. Since the change, his staff regularly find bags left beside the recycling bins or behind the buildings, and he says several local business owners tell similar stories.'],
              ['NARR', 'Reyes accepts that the landfill numbers have improved, and he does not dispute that many households were throwing out food that belonged in the green bin.'],
              ['NARR', 'But he argues that the figures do not show where the missing garbage went. Some of it, he believes, has simply moved into private bins, onto other people\'s property, or into the trunk of a car heading to the next town.'],
              ['NARR', 'Delorme replies that the town\'s bylaw officers have actually recorded fewer dumping complaints since the change, not more. She does agree, however, that apartment buildings need a different approach.'],
              ['NARR', 'She now supports weekly garbage pickup for large buildings, as long as they also have green bins, which many of them still lack. Reyes calls that a reasonable start, provided the town is willing to pay for the bins.']
            ],
            questions: [
              { id: 'L6.1', q: 'According to Delorme, why does less frequent pickup change people\'s habits?', o: ['Limited bin space makes them sort out food scraps.', 'It means they must pay for each extra bag of garbage.', 'It gives them more time to sort their recycling.', 'It reduces the number of garbage trucks on their street.'] },
              { id: 'L6.2', q: 'What did Delorme\'s town do with the money it saved?', o: ['It improved other waste services for residents.', 'It hired more staff to collect the green bins.', 'It lowered garbage fees for every household.', 'It bought a new fleet of garbage trucks.'] },
              { id: 'L6.3', q: 'How did the town respond to the complaints in the first summer?', o: ['It made an exception for certain households.', 'It returned to weekly garbage pickup during July.', 'It gave every family a second green bin.', 'It began charging for diaper collection.'] },
              { id: 'L6.4', q: 'Why does Reyes say tenants are affected by the change?', o: ['Extra collection costs are passed on to them.', 'They must carry garbage to a drop-off depot.', 'Their buildings no longer have a bin room.', 'They are fined when bags are left outside.'] },
              { id: 'L6.5', q: 'What does Reyes suggest about the town\'s landfill figures?', o: ['They may hide waste that was disposed of elsewhere.', 'They were calculated using the wrong weights.', 'They leave out food waste from the green bins.', 'They are lower than the town has publicly claimed.'] },
              { id: 'L6.6', q: 'On what point do Delorme and Reyes come closer together?', o: ['Large buildings need different collection rules.', 'Illegal dumping has risen since the change.', 'Houses should return to weekly garbage pickup too.', 'Private companies should collect all garbage.'] }
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
          passage: '<h3>Message</h3><p>Hi Ben,</p><p>Thanks for your message, and congratulations on the new apartment! I promised I would tell you how my first month of classes went, so here it is.</p><p>As you know, I never finished grade twelve back home, and it has always bothered me, even though nobody at work has ever asked about it. In September, I finally signed up for the adult upgrading program that the school division runs in a meeting room at the library branch near my office. Classes are on Tuesday and Thursday evenings from 6:30 to 9:00.</p><p>The first week very nearly put an end to the whole thing. Before we started, everyone took a placement test in math and English. The English part went fine, but my math score was so low that they put me in the foundation group. Honestly, I came within a hair of walking out that night. Then my instructor, Ms. Haldane, told me that most adults forget things like fractions simply because they never use them, not because they cannot learn them. She was right: after three weeks, I have already moved up a level.</p><p>The other students are a real mix. There is a retired truck driver who wants to be able to read to his grandchildren, two young mothers who bring their babies (the library lets them use the play area next door), and a man from Eritrea who speaks four languages but needs a Canadian diploma before he can apply to nursing school.</p><p>The program is free, but there are a few costs. I had to buy a calculator, and I pay for parking, since the library lot is not free after six. I am thinking of taking the bus on Thursdays, when I finish work early.</p><p>What I really miss is time. Between work and classes, I hardly see Shirin and the kids on weeknights. We have agreed that Saturdays are family days, with no homework allowed, so I study on Sunday mornings while they sleep in.</p><p>You mentioned that you have been thinking about a course yourself. If it is the bookkeeping one at the college, my advice is to ask whether a library branch offers it too. The library versions are often much cheaper, and you can borrow the textbooks instead of buying them. Also, book your skills assessment early. Mine took two weeks to arrange.</p><p>Write soon, and tell me how the new job is going.</p><p>Yusuf</p>',
          questions: [
            { id: 'R1.1', q: 'Yusuf decided to join the program because', o: ['not finishing high school had long troubled him.', 'his employer asked staff to complete a diploma.', 'the library offered free textbooks to students.', 'he hoped to apply to nursing school afterward.'] },
            { id: 'R1.2', q: 'After the placement test, Yusuf', o: ['seriously thought about dropping out.', 'was moved into a higher English group.', 'asked to retake the math section later.', 'joined the same group as the truck driver.'] },
            { id: 'R1.3', q: 'The instructor\'s comment suggests that Yusuf\'s math results', o: ['reflected a lack of practice rather than ability.', 'were typical of students who speak several languages.', 'would keep him in the foundation group all year.', 'showed that the placement test was badly designed.'] },
            { id: 'R1.4', q: 'Yusuf describes his classmates mainly to show that', o: ['people join for very different reasons.', 'most of them are recent newcomers to Canada.', 'the program prepares students for nursing.', 'many of them need help with child care.'] },
            { id: 'R1.5', q: 'Yusuf studies on Sunday mornings because', o: ['he has promised to keep Saturdays for his family.', 'the library branch is closed on Saturdays.', 'his children help him with his homework then.', 'his classes take up his Saturday mornings.'] },
            { id: 'R1.6', q: 'Yusuf advises Ben to', o: ['check whether the course is offered more cheaply elsewhere.', 'buy his textbooks well before the course begins.', 'take the bookkeeping course at the college instead.', 'wait for his skills assessment before he applies.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Yusuf,</p><p>Thanks for the long letter! I am so glad you did not give up after that first week. Moving up a level in only [[R1.7]] is impressive, and it sounds like your instructor was right that [[R1.8]].</p><p>I took your advice and called the library. They offer the same bookkeeping course at your branch, and it costs $120 instead of $480 at the college. Even better, I can [[R1.9]], which saves me another $90. The next session starts in three weeks, so I still have time to sign up.</p><p>The only catch is the schedule. It runs on the same evenings as your classes, so maybe we could ride together sometimes? You said you were thinking about [[R1.10]], so we could meet at the stop that day.</p><p>Finally, I followed your other tip and asked about [[R1.11]] right away, since you warned me it can take a while.</p><p>Say hello to Shirin and the kids, and enjoy those Saturdays.</p><p>Ben</p>',
          blanks: [
            { id: 'R1.7', o: ['three weeks', 'two weeks', 'one month', 'one semester'] },
            { id: 'R1.8', o: ['your skills were just rusty', 'math is harder than English', 'the test was not fair to adults', 'the first group was too easy'] },
            { id: 'R1.9', o: ['borrow the books rather than buy them', 'park in the library lot for free', 'skip the placement test entirely', 'use a calculator I already own'] },
            { id: 'R1.10', o: ['taking transit on Thursdays', 'driving in on Tuesday evenings', 'parking at the library after six', 'leaving work early every evening'] },
            { id: 'R1.11', o: ['booking a test of my current level', 'the cost of parking in the evening', 'using the play area for children', 'getting a refund from the college'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Okanagan Valley Coach Lines: Kelowna to Vancouver</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Trip</th><th>Leaves Kelowna</th><th>Arrives Vancouver</th><th>Runs</th><th>Stops on the way</th><th>Adult fare</th></tr></thead><tbody>' +
            '<tr><td>101 Express</td><td>6:00 a.m.</td><td>11:15 a.m.</td><td>Daily</td><td>Merritt</td><td>$72</td></tr>' +
            '<tr><td>103</td><td>8:30 a.m.</td><td>3:00 p.m.</td><td>Daily</td><td>Westbank, Merritt, Hope, Abbotsford</td><td>$64</td></tr>' +
            '<tr><td>105</td><td>12:45 p.m.</td><td>6:30 p.m.</td><td>Friday to Sunday</td><td>Merritt, Hope</td><td>$64</td></tr>' +
            '<tr><td>107 Night</td><td>10:30 p.m.</td><td>4:45 a.m. (next day)</td><td>Monday to Thursday</td><td>Merritt, Hope, Abbotsford</td><td>$48</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Children aged 2 to 11 pay half the adult fare. Children under 2 travel free on an adult\'s lap. Seniors (65 and over) and students with valid ID save 15% on any fare.</li><li>Each passenger may bring one checked bag (up to 23 kg) and one carry-on bag free of charge. Extra checked bags are $20 each.</li><li>Bicycles cost $25 and must be reserved at least 48 hours before departure. Bicycles are not carried on Express trips.</li><li>Only trained service animals are allowed on board.</li><li>Tickets may be changed to another trip up to 2 hours before departure for a $10 fee. Cancellations made at least 24 hours before departure are refunded, minus a $15 fee. No changes or refunds are possible after these times.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Simon,</p><p>I am booking our trip to Vancouver for Aunt Rosalind\'s retirement party, which starts at 2:00 p.m. on Saturday, March 14. Driving over the mountains in March makes me nervous, so I would rather take the coach. I work until 9:00 on Friday night, so we will have to travel on Saturday itself. The only bus that day that gets us there in time is [[R2.1]].</p><p>I know you wanted to bring your bike to ride the seawall on Sunday, but that will not work, because [[R2.2]]. You could rent one there instead.</p><p>Mom wants to come with us. She turned 65 in January, so her ticket will cost [[R2.3]]. She also asked about bringing Biscuit, but I had to tell her that [[R2.4]], so the dog will stay with the neighbours.</p><p>If the party is cancelled for any reason, we can still get most of our money back as long as we cancel before [[R2.5]]. I will book everything tonight unless you have any objections.</p><p>Talk soon,<br>Leanne</p>',
          blanks: [
            { id: 'R2.1', o: ['Trip 101', 'Trip 103', 'Trip 105', 'Trip 107'] },
            { id: 'R2.2', o: ['bicycles are not carried on that trip', 'bicycles must be booked two days ahead', 'bicycles count as an extra checked bag', 'bicycles cost $25 in each direction'] },
            { id: 'R2.3', o: ['$61.20', '$54.40', '$36.00', '$72.00'] },
            { id: 'R2.4', o: ['only service animals may ride the coach', 'pets must be reserved at least 48 hours ahead', 'animals count as an extra checked bag', 'pets are allowed only on the night bus'] },
            { id: 'R2.5', o: ['6:00 a.m. on Friday, March 13', '4:00 a.m. on Saturday, March 14', '2:00 p.m. on Friday, March 13', '9:00 p.m. on Friday, March 13'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Two adults travel on Trip 103 with their children, aged 8 and 1. The family\'s total fare is', o: ['$160.00', '$192.00', '$176.00', '$128.00'] },
            { id: 'R2.7', q: 'A student who must travel on a Wednesday and wants the lowest possible fare should choose', o: ['Trip 107, arriving very early the next morning.', 'Trip 105, which makes only two stops.', 'Trip 103, which leaves at 8:30 a.m.', 'Trip 101, since students save 15% on it.'] },
            { id: 'R2.8', q: 'A passenger booked on Trip 103 learns 3 hours before departure that she must travel later that day instead. She', o: ['can move to another trip by paying a small fee.', 'can cancel and receive a refund minus $15.', 'must buy a completely new ticket for Trip 105.', 'can switch to another trip at no extra cost.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Pop-Up Shops: Testing an Idea Before Signing a Lease</h3><p><b>A.</b> Walk down the main street of many Canadian towns and you will see at least one empty storefront with a "For Lease" sign in the window. Increasingly, some of those spaces are being filled by pop-up shops: stores that open for a short time, from a single weekend to a few months, before moving out again. The idea itself is hardly new, since holiday craft sales have appeared in church basements and community halls every December for generations. What has changed is the reason behind it. Landlords, towns and first-time business owners now see short-term shops as a way to try out an idea before anyone makes a serious commitment. A standard commercial lease often runs for five years or more, and that promise alone keeps many people with good ideas from ever opening a door.</p><p><b>B.</b> For new owners, the main attraction is information. One Saskatoon couple who make wooden toys rented a pop-up space for six weeks before Christmas, expecting their toy trains to sell best. Instead, shoppers kept asking for the simple wooden name puzzles that the couple had almost left at home. Within a year, the puzzles made up most of their sales. Other owners learn harder lessons: that the busy sidewalk they counted on is only busy on weekends, or that one person cannot make products and serve customers at the same time. Advisers who work with new businesses say that discovering this in eight weeks, rather than in the second year of a lease, can save an owner tens of thousands of dollars.</p><p><b>C.</b> Landlords have their own reasons to agree. An empty store earns nothing, and a dark window can make a whole block look neglected, which in turn makes it harder to attract a long-term tenant. A lively temporary shop shows people walking by that the space is usable. Some landlords charge pop-up tenants a share of their sales instead of a fixed rent, so the owner pays more only when business is good. A number of towns also offer small grants to cover insurance, which can otherwise be one of the largest costs for a shop that will be open for only a few weeks.</p><p><b>D.</b> Pop-ups are not without problems. Owners who stay only a short time rarely build a group of regular customers, and some shoppers are disappointed to come back and find the store gone. Short-term spaces often have no shelving, poor lighting or heating that has been switched off, so owners may spend part of their budget simply making the room usable. Advisers also warn that a successful pop-up is no guarantee of a successful permanent shop. Holiday shoppers, many of them buying gifts, spend more freely than customers do in February, so most advisers recommend testing an idea in more than one season before signing anything.</p>',
          questions: [
            { id: 'R3.1', q: 'Some owners discover that their most popular product is not the one they predicted.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Temporary sales are an old practice that is now being used for a different purpose.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'Owners may need to spend money on a space before it is ready for customers.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'Some property owners link the rent they charge to how well the shop performs.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'The length of a typical rental agreement discourages some would-be owners.', fixed: true, a: 'A' },
            { id: 'R3.6', q: 'Most pop-up owners go on to open a permanent shop within two years.', fixed: true, a: 'E' },
            { id: 'R3.7', q: 'A short trial may show an owner that running a shop alone is too much work.', fixed: true, a: 'B' },
            { id: 'R3.8', q: 'Some towns pay part of the rent for new pop-up shops.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Results from one time of year can give owners a misleading picture.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Condo Buildings Say Yes to Pets?</h3><p>Condominiums are now home to a growing share of Canadians, from first-time buyers to retirees who have sold the family house. Yet many condo buildings still limit pets, either by banning them outright or by setting strict rules on their size and number. A recent survey of condo owners in one large Canadian city found that about a third lived in buildings with some kind of pet restriction. As more people move into condos, the debate over those rules is growing louder.</p><p>Leonie Fairweather, who chairs a residents\' group campaigning for pet-friendly rules, says the bans fall hardest on older people. "We hear from seniors who want to downsize but would have to give up a dog they have had for twelve years," she says. "People are being asked to choose between a home and a member of the family." She points out that animal shelters in her city report a steady stream of pets surrendered by owners who are moving into buildings that will not accept them.</p><p>Gerald Mackintosh, president of the council in a 120-unit building that allows only one cat or one small dog per unit, insists the limits have nothing to do with disliking animals. Last year, his council spent $4,000 replacing hallway carpet damaged by a resident\'s dog, and the owner refused to pay. He also mentions barking from units where owners are at work all day, and residents with allergies or a fear of dogs who must share the same elevators. "In a house, your dog is your business," he says. "In a building, every hallway is shared."</p><p>Fairweather replies that such problems are caused by a small number of owners, and that rules should target behaviour rather than animals. Fines for damage or repeated barking, she argues, would deal with the real troublemakers without punishing everyone else.</p><p>Paulina Szabo, a property manager who oversees fifteen condo buildings, says that in her experience the most difficult buildings are not the ones with pets but the ones with vague rules. Her pet-friendly buildings require owners to register each animal, use one designated elevator and keep dogs leashed in all shared areas. Complaints there, she says, are no higher than in buildings that ban pets entirely. She notes, however, that changing a building\'s rules usually requires the support of three-quarters of the owners who vote. "That protects people from sudden changes," she says, "but it also means a determined minority can block almost anything."</p><p>Not everyone wants change. Tobias Lindgren, who has severe allergies, chose his building specifically because it did not allow pets. "I read every page of the rules before I bought," he says. "Now some neighbours want to rewrite them, and I would have no say about what moves in next door." He has no objection to pet-friendly buildings, he adds, as long as people like him can still find homes without animals.</p><p>On one point, everyone interviewed agrees: buyers should read a building\'s rules carefully before they sign anything, because those rules can be much harder to change than to accept.</p>',
          questions: [
            { id: 'R4.1', q: 'Fairweather believes that pet bans', o: ['force some people to give up an animal in order to move.', 'lower the value of homes in most condo buildings.', 'are seldom enforced by condo councils in practice.', 'lead to more complaints about noise than they prevent.'] },
            { id: 'R4.2', q: 'Mackintosh mentions the hallway carpet to show that', o: ['other residents can end up paying for one owner\'s pet.', 'dogs cause more damage in condos than cats usually do.', 'his council should have chosen a stronger type of carpet.', 'pet owners rarely follow the rules of their building.'] },
            { id: 'R4.3', q: 'According to Szabo, problems are most likely in buildings where', o: ['the rules about pets are unclear.', 'owners may keep more than one pet.', 'pets and people share every elevator.', 'owners vote often on new bylaws.'] },
            { id: 'R4.4', q: 'What can be inferred about the three-quarters voting rule?', o: ['It can make change difficult whichever side wants it.', 'It was introduced mainly to keep pets out of condos.', 'It allows councils to change rules without owners.', 'It applies only to buildings with over 100 units.'] },
            { id: 'R4.5', q: 'Lindgren\'s main objection is that', o: ['he relied on the existing rules when he bought.', 'he would like all condo buildings to ban pets.', 'his allergies are already made worse by elevators.', 'his building has already begun to accept dogs.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I have lived in condos for nine years, first in a building that banned pets and now in one that allows them. I agree with Ms. Fairweather that rules should focus on [[R4.6]] rather than on animals. Our current building fines owners whose dogs bark for long periods, and complaints have dropped noticeably.</p><p>Still, I understand Mr. Mackintosh\'s frustration about [[R4.7]]. Our council needed a lawyer\'s letter before one owner finally paid for a scratched door. Ms. Szabo\'s point about [[R4.8]] matches my own experience, since the rules in my first building were so loosely written that nobody knew what was allowed.</p><p>I also have some sympathy for Mr. Lindgren, because [[R4.9]] seems a reasonable thing to expect when you spend that much on a home. Perhaps the best answer is to let existing pets stay and [[R4.10]], so that nobody is surprised later.</p>',
          blanks: [
            { id: 'R4.6', o: ['how owners actually behave', 'which breeds people choose', 'the size of each animal', 'which elevators pets use'] },
            { id: 'R4.7', o: ['owners who will not pay for damage', 'residents who are afraid of dogs', 'the cost of cleaning the elevators', 'dogs barking late into the night'] },
            { id: 'R4.8', o: ['poorly defined rules causing trouble', 'pets needing their own elevator', 'registration being too expensive', 'voting rules being far too strict'] },
            { id: 'R4.9', o: ['rules staying as they were at purchase', 'a building with no noise at all', 'a say in who may buy next door', 'a guaranteed lower monthly condo fee'] },
            { id: 'R4.10', o: ['make sure every buyer sees the rules first', 'ban new pets wherever residents have allergies', 'hold a fresh vote on pets every single year', 'charge each pet owner an extra monthly fee'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>For the last three collection days, the city has not emptied your blue recycling bin. Each time, the crew left a sticker saying "Not collected: contains plastic bags," even though you are sure you have never put plastic bags in it. You live on a corner next to a busy bus stop, and you suspect that litter blows into your bin. Your bin is now overflowing, and the next collection day is two weeks away.</p><p>Write an email to the city\'s waste services department. In your email, do the following:</p><ul><li>Explain what has happened and why you believe the stickers are a mistake.</li><li>Describe how the situation is affecting your household.</li><li>Suggest what the city should do now, and how the problem could be prevented in the future.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your town owns an old fire hall downtown that has been empty for three years. Town council has enough money to renovate it for one new use and is asking residents for their opinion. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Turn it into a youth centre with a small gym, a games room and free homework help, open after school and on weekends. Teenagers would have a safe place to go downtown, but the town would have to pay two full-time staff, about $120,000 a year.' },
            { key: 'B', label: 'Option B', text: 'Turn it into a year-round indoor farmers\' market open Wednesday to Sunday, with space for 30 local vendors. It would bring shoppers downtown all week, but parking nearby is already limited, and some existing grocery shops worry about the competition.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a place in your neighbourhood where you like to spend time, and explain why you like it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours wants to start selling her homemade hot sauces at local markets. She has saved $2,000 for the business, but she plans to keep her full-time job, so she can only work on it in the evenings and on Sundays. Give your friend advice on how to get her small business started.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when something important in your home broke or stopped working. What happened, how did you deal with it, and what would you do differently if it happened again?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/L/scene.jpg" alt="A busy outdoor farmers market on a windy morning">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/L/scene.jpg" alt="A busy outdoor farmers market on a windy morning">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your family wants to sign up your ten-year-old for one activity this summer. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Theatre day camp', image: '<img src="tests/img/L/opt_A.jpg" alt="Photo: Theatre day camp">', facts: ['$340 for 2 weeks, Monday to Friday', '9:00 a.m. to 3:00 p.m., 25 minutes away by car', 'Ends with a show for families', 'Only 4 spots left; registration closes Friday'] },
            { key: 'B', title: 'Guitar lessons', image: '<img src="tests/img/L/opt_B.jpg" alt="Photo: Guitar lessons">', facts: ['$30 per lesson for 10 weeks', '45 minutes on Saturday mornings, 5-minute walk', 'Guitar rental: $15 per month', '20 minutes of practice at home every day'] }
          ],
          third: { key: 'C', title: 'Swimming lessons', image: '<img src="tests/img/L/opt_C.jpg" alt="Photo: Swimming lessons">', facts: ['$95 for 8 lessons', 'Tuesdays and Thursdays at 5:30 p.m.', 'Pool is 15 minutes away by bus', 'Children earn a swimming level certificate'] },
          persuade: 'A family member thinks swimming lessons would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>You volunteer as the organizer of the community garden behind your apartment building. There are 12 plots and a waiting list of 9 people. The garden rule, which every member signs, says that any plot not planted by June 1 goes to the next person on the list. It is now June 6. The plot of Walter, an elderly neighbour who has gardened there for six years, is still empty, because he spent most of May in hospital. The first family on the waiting list has already bought seeds and seedlings and is asking you when they can start.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to Walter. Explain that his plot will go to the family this year.</p><p><b>Option B:</b> Talk to the family. Explain why they will have to wait another year.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your public library plans to remove about a third of its bookshelves to make room for four bookable study rooms and a workshop with sewing machines and 3D printers. Supporters, including many students and small business owners, say fewer people borrow printed books and the library should offer what the community needs now. Opponents, many of them older residents, say that quiet reading space is disappearing and that books which are not on the shelves are much harder to discover.</p><p>The library board has asked residents to comment before it makes a final decision. Should the library go ahead with the plan? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a hardware store and see this unusual snow shovel for $89. Call your friend, who has just moved into a small house with a long driveway and has asked you to look for a shovel for her. The shovel weighs 9 kilograms, the battery lasts about 30 minutes, and your friend only has a small closet for storage. Describe the shovel and explain whether you think she should buy it.', image: '<img src="tests/img/L/object.jpg" alt="An unusual snow shovel in a hardware store">' }
      ]
    }
  });
})();
