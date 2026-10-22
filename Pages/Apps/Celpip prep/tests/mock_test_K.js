/* Rowe CELPIP Mock Exam: Test K content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly harder than the real test (CLB 8 to 11).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/K/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: 'K',
    title: 'Mock Test K',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { MATEO: { name: 'Mateo', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#2e86c1', style: 'short' }, INGRID: { name: 'Ingrid', g: 'f', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#8e44ad', style: 'long' } },
        segments: [{
          lines: [
            ['MATEO', 'Ugh, we just missed the 14. The next one isn\'t for another twenty minutes.'],
            ['INGRID', 'The 9 stops across the street in five minutes. We\'d have to switch buses at the mall, but we\'d probably still get home sooner.'],
            ['MATEO', 'Maybe, but with all these grocery bags? I\'m not running between stops at the mall. I\'d rather wait and get a seat the whole way.'],
            ['INGRID', 'Fair enough. At least the shelter has a bench.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Mateo prefer to wait for the 14?', o: ['He does not want to change buses while carrying bags.', 'The 9 bus does not stop near their home.', 'The 14 bus will arrive in about five minutes.', 'He needs to buy more groceries at the mall.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { KWAME: { name: 'Kwame', g: 'm', skin: '#6b4226', hair: '#120c08', shirt: '#27ae60', style: 'short' }, DANA: { name: 'Dana', g: 'f', skin: '#e8c3a0', hair: '#5a3825', shirt: '#d35400', style: 'curly' } },
          segments: [
            {
              lines: [
                ['KWAME', 'Dana, got a second? I just got off the phone with the city\'s special events office. It\'s about the permit for the run.'],
                ['DANA', 'For the Harbourfront 5K? That\'s on the twenty-seventh. Please tell me it\'s good news.'],
                ['KWAME', 'Not exactly. Our application\'s still under review. Because the route crosses Water Street, they need a traffic plan signed by the police before they can approve anything. And the officer who signs those is on vacation until next Monday.'],
                ['DANA', 'So when would we hear?'],
                ['KWAME', 'They said they can\'t promise anything before the twenty-fourth.'],
                ['DANA', 'The twenty-fourth? That\'s three days before the race. We\'ve got two hundred and ten people registered, and every one of them has already paid. If the answer turns out to be no at that point, I don\'t even want to think about the refunds.'],
                ['KWAME', 'I know. And there\'s another thing. The printer needs the T-shirt order confirmed by this Friday, which is almost a week before we\'d even hear from the city.'],
                ['DANA', 'Okay. Let\'s not panic. So the only thing actually missing is the traffic plan?'],
                ['KWAME', 'That\'s what they told me. Everything else in the application is fine.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why has the permit not been approved yet?', o: ['A required approval is still waiting for a signature.', 'The city has rejected the route along Water Street.', 'The police officer lost the original application.', 'Too many runners registered for the space available.'] },
                { id: 'L1.2', q: 'Why is Dana especially worried about the timing?', o: ['A late refusal would affect people who have already paid.', 'The printer needs three days to finish the T-shirts.', 'The runners expect to receive the route a week ahead.', 'The police will be on vacation on the day of the race.'] },
                { id: 'L1.3', q: 'What can be inferred about the T-shirt order?', o: ['It must be confirmed before they know if the permit is approved.', 'The printer has already started making the shirts for the race.', 'It will be cancelled automatically if the permit is delayed.', 'It can easily be changed after the city gives its answer.'] }
              ]
            },
            {
              lines: [
                ['DANA', 'What if we change the route so it doesn\'t touch Water Street at all? No street crossing, no traffic plan.'],
                ['KWAME', 'I actually looked at that last night. The boardwalk loop along the harbour is exactly two and a half kilometres. Two laps and you\'ve got your five K.'],
                ['DANA', 'But is it wide enough? Two hundred people all trying to start at once on a boardwalk sounds like a mess.'],
                ['KWAME', 'It\'s tight right at the start, yeah. But if we send people out in three waves, five minutes apart, it spreads out pretty quickly. Fast runners first, walkers last.'],
                ['DANA', 'Hmm, I like that. Here\'s the catch, though: the boardwalk isn\'t city property. The marina association runs it, so it\'s their permission we\'d need, not the city\'s.'],
                ['KWAME', 'Right, and that might actually work in our favour. Their manager, Lucille, helped us with the food drive last year. I\'ll email her this afternoon.'],
                ['DANA', 'Great. I\'ll hold off on changing the route map on our website until she says yes. The last thing I want is to send two hundred people an update and then take it back.']
              ],
              questions: [
                { id: 'L1.4', q: 'Why does Dana suggest using a different route?', o: ['It would remove the need for one approval.', 'The boardwalk is wider than the city streets.', 'Runners prefer a course beside the harbour.', 'The city can approve the boardwalk faster.'] },
                { id: 'L1.5', q: 'How does Kwame respond to Dana\'s concern about space?', o: ['He proposes spreading out the start times.', 'He suggests limiting the number of runners.', 'He says the boardwalk is wider than it looks.', 'He offers to shorten each lap of the loop.'] },
                { id: 'L1.6', q: 'Why will Dana wait before updating the website?', o: ['The new route has not been approved yet.', 'Lucille asked her to keep the plan private.', 'The marina will draw the new map for them.', 'Runners have not been told about the waves.'] }
              ]
            },
            {
              lines: [
                ['KWAME', 'Okay, Lucille got back to me. We can use the boardwalk, but there\'s a condition. Everyone has to be off the course by ten-thirty, because the weekend market starts setting up on the boardwalk at eleven.'],
                ['DANA', 'We were starting at nine. With three waves, the last group leaves at ten past. Even the slowest walkers should be done within the hour, so that\'s fine.'],
                ['KWAME', 'She also wants a two-hundred-dollar damage deposit. We get it back as long as the boardwalk\'s left clean.'],
                ['DANA', 'That\'s fair. I\'ll ask the high school volunteers to do a cleanup sweep right behind the last walker. And let\'s not withdraw the city application. Even if it\'s too late for this year, having a traffic plan approved will make next year a lot easier.']
              ],
              questions: [
                { id: 'L1.7', q: 'Why must the race be over by 10:30?', o: ['The course will be needed for another activity.', 'The volunteers must leave for the market at eleven.', 'Lucille will close the boardwalk for cleaning then.', 'The damage deposit is only valid until that time.'] },
                { id: 'L1.8', q: 'What does Dana\'s decision about the city application show?', o: ['She is planning ahead for future races.', 'She expects the permit to arrive in time.', 'She wants to avoid paying the deposit.', 'She would rather use the street route this year.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'office',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { AGENT: { name: 'Support agent', g: 'm', skin: '#d6a07a', hair: '#333333', shirt: '#1a5276', style: 'short' }, FARAH: { name: 'Farah', g: 'f', skin: '#b07850', hair: '#1d1410', shirt: '#a93226', style: 'long' } },
          segments: [{
            lines: [
              ['AGENT', 'Thanks for calling technical support, my name is Diego. How can I help you today?'],
              ['FARAH', 'Hi, Diego. My internet\'s been cutting out all week. It works for ten minutes or so, then drops for a few minutes, then comes back. I work from home, and I\'ve been kicked out of three video meetings today alone.'],
              ['AGENT', 'I\'m sorry, that sounds really frustrating. Can I get the phone number on the account?'],
              ['FARAH', 'Sure. It\'s under my husband\'s name, Victor Haddad. The number is 902 555 0148. And I should mention I called last Tuesday, and someone told me it was an outage in my area.'],
              ['AGENT', 'Okay, I see that. There was an outage last Tuesday, but it was fixed the same afternoon. What you\'re describing sounds different. Have you been restarting the modem?'],
              ['FARAH', 'Twice a day at least. It helps for maybe an hour.'],
              ['AGENT', 'Right. I\'m running a test on the line now. Okay, the line itself looks healthy, but your modem is one of our older units, about six years old. Those have a habit of overheating. Where do you keep it?'],
              ['FARAH', 'In a cabinet under the TV. With the doors closed, so you can\'t see the wires.'],
              ['AGENT', 'That could be part of it. They need air around them. Honestly, though, the real fix is a new modem. Since you\'ve been with us for over five years, I can send you one at no charge.'],
              ['FARAH', 'Oh, that would be great. How long does that take?'],
              ['AGENT', 'Two to three business days by courier, and someone will need to sign for it.'],
              ['FARAH', 'That\'s fine, I\'m home all day. Do I have to send the old one back?'],
              ['AGENT', 'Yes, there\'s a prepaid return label in the box. Until the new one arrives, try taking the old one out of the cabinet and putting it somewhere open. It may not solve everything, but it should help.'],
              ['AGENT', 'I\'ve also added a fifteen-dollar credit to your next bill for the trouble.'],
              ['FARAH', 'Thank you, Diego. You\'ve been much more helpful than the last person.']
            ],
            questions: [
              { id: 'L2.1', q: 'What is Farah\'s main concern?', o: ['The unstable connection is disrupting her work.', 'Her husband cannot get into the account online.', 'Her modem was installed in the wrong cabinet.', 'Restarting the modem takes too long each day.'] },
              { id: 'L2.2', q: 'Why does the agent ask where the modem is kept?', o: ['He suspects it may be getting too hot.', 'He believes there is an outage in her area.', 'He thinks the TV is causing interference.', 'He needs to send a technician to that room.'] },
              { id: 'L2.3', q: 'Why is the replacement offered free of charge?', o: ['Farah has been a customer for a long time.', 'The modem is still covered by its warranty.', 'The last agent gave Farah wrong information.', 'Farah agreed to sign a longer contract.'] },
              { id: 'L2.4', q: 'What does the agent imply about moving the modem?', o: ['It is a partial measure rather than a full fix.', 'It should fix the problem without a replacement.', 'It could damage the older modem if done wrong.', 'It needs to be done by a trained technician.'] },
              { id: 'L2.5', q: 'What does Farah\'s last remark suggest?', o: ['Her earlier call did little to solve her problem.', 'She plans to complain about last Tuesday\'s agent.', 'She expected to pay for the new modem herself.', 'She thinks the fifteen-dollar credit is too small.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#f0c9a6', hair: '#4a3020', shirt: '#566573', style: 'short' }, MARISOL: { name: 'Marisol Bergeron', g: 'f', skin: '#c98c64', hair: '#2a1b12', shirt: '#117864', style: 'bun' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is chef Marisol Bergeron, who opened a small restaurant called Low Tide in Lunenburg three years ago. Marisol, your menu changes every single day. Why?'],
              ['MARISOL', 'Because I only cook what comes off the local boats that morning. If they land haddock, we serve haddock. If the weather\'s bad and nobody goes out, it might be mussels from the farm down the road, or a vegetable dish. People have learned to trust us.'],
              ['HOST', 'That must have been a risk when you started.'],
              ['MARISOL', 'Oh, a huge one. Those first few months, people would walk in asking for lobster, and if we didn\'t have it, some of them just turned around and left.'],
              ['MARISOL', 'It was close to a year before we had regulars who came in precisely because they didn\'t know what they\'d get.'],
              ['HOST', 'And you\'re not even from the coast, are you?'],
              ['MARISOL', 'No, I grew up in Alberta. I hardly ate fish as a kid. I actually trained as a pastry chef in Montreal.'],
              ['MARISOL', 'Then, to pay off my student loans, I took a summer job on a fishing boat out of Yarmouth, and I just fell in love with the whole thing. That\'s also where I saw how much good fish gets sold for almost nothing.'],
              ['HOST', 'What do you mean?'],
              ['MARISOL', 'Well, take mackerel, or sea cucumber. The boats catch plenty, but there\'s not much demand here, so most of it gets shipped off cheaply or ends up as bait. I\'d say half of what we serve is something our customers have never tried.'],
              ['HOST', 'So how do you get people to order it?'],
              ['MARISOL', 'We have a tasting plate, eight dollars, three of the less familiar fish. If you don\'t like it, you don\'t pay. In three years, I can count on one hand the people who\'ve taken us up on that.'],
              ['HOST', 'And how do the fishermen feel about all this?'],
              ['MARISOL', 'They\'re thrilled, honestly. One captain started keeping his mackerel separate just for us, on ice, and now he gets about three times what the bait buyers were paying him. A couple of other boats have asked to do the same.'],
              ['HOST', 'What\'s next for you?'],
              ['MARISOL', 'We close for two months every winter. This year, I\'ll be running free classes at the community school for families who want to cook local fish at home without spending much.']
            ],
            questions: [
              { id: 'L3.1', q: 'Why does the restaurant\'s menu change daily?', o: ['It depends on what is available locally each morning.', 'The chef prefers to experiment with new recipes daily.', 'Customers asked for more variety in the dishes offered.', 'Fishermen only sell to the restaurant on certain days.'] },
              { id: 'L3.2', q: 'What does Marisol say about the restaurant\'s early months?', o: ['Some customers were unhappy with what was available.', 'Regular customers came in specifically to be surprised.', 'Local fishermen refused to sell her their catch.', 'Lobster was the most popular dish on the menu.'] },
              { id: 'L3.3', q: 'What is surprising about Marisol\'s background?', o: ['She was originally trained to make desserts.', 'She grew up in a family of Alberta fishermen.', 'She first learned to cook seafood in Montreal.', 'She started cooking to pay off her student loans.'] },
              { id: 'L3.4', q: 'According to Marisol, what often happens to fish like mackerel?', o: ['They are undervalued and sold off cheaply.', 'They are too expensive for local restaurants.', 'They are rarely caught by the local boats.', 'They are mostly eaten by local families.'] },
              { id: 'L3.5', q: 'What does Marisol imply about the tasting plate?', o: ['Very few customers have disliked it.', 'Most customers ask for their money back.', 'It is the most expensive item on the menu.', 'It always includes lobster and two other fish.'] },
              { id: 'L3.6', q: 'What will Marisol do while the restaurant is closed?', o: ['Show families affordable ways to cook local fish', 'Open a second restaurant for the winter season', 'Return to work on a fishing boat for two months', 'Take a pastry course at the community school'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#1f3a5f', style: 'bald' } },
          segments: [{
            lines: [
              ['NEWS', 'A team of students from Cedar Ridge High School in Moncton is celebrating after taking first place at the national high school robotics championship, held this past weekend in Winnipeg.'],
              ['NEWS', 'The eight-member team finished ahead of forty-one other schools from across the country. Their robot, which the students nicknamed Moose, had to sort a pile of mixed recycling into the correct bins in under three minutes, with no human control at all.'],
              ['NEWS', 'Team captain Leila Osei, who is in grade eleven, says the turning point came during the semi-final, when one of Moose\'s wheels snapped. The team had just fifteen minutes to replace it.'],
              ['NEWS', 'Luckily, they had printed a spare on the school\'s 3D printer the night before, just in case.'],
              ['NEWS', 'Coach Daniel Fortier, who teaches physics at the school, points out that just two years ago, Cedar Ridge didn\'t even have a robotics club. It began with four students eating lunch in his classroom and taking apart an old vacuum cleaner.'],
              ['NEWS', 'The win comes with a five-thousand-dollar prize, which under competition rules must be spent on equipment for the school. It also earns the team a place at the international finals in Singapore next April.'],
              ['NEWS', 'However, travel for the eight students and two teachers is expected to cost about thirty-two thousand dollars. A bottle drive run by the students has brought in about four thousand so far, and the school is now appealing to local businesses and residents for help.'],
              ['NEWS', 'A fundraising barbecue will be held at the school next Saturday, where the public can watch Moose in action.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A school team\'s win and the challenge it now faces', 'The start of a new robotics club at a local school', 'A recycling program designed by high school students', 'An international robotics contest held in Winnipeg'] },
              { id: 'L4.2', q: 'What did the robot have to do in the competition?', o: ['Work on its own to separate recyclables', 'Race other robots while students controlled it', 'Collect garbage from around the school grounds', 'Print its own replacement parts in three minutes'] },
              { id: 'L4.3', q: 'Why does the captain mention the semi-final?', o: ['It showed that planning ahead had paid off.', 'The team was penalized for a broken wheel.', 'A teacher had to step in and repair the robot.', 'The team printed a whole new robot overnight.'] },
              { id: 'L4.4', q: 'What does the coach\'s comment suggest?', o: ['The program has grown very quickly.', 'The club has always had many members.', 'Students should not work during lunch.', 'The team relies on donated old machines.'] },
              { id: 'L4.5', q: 'Why does the school need help from the community?', o: ['The trip is costly, and the prize cannot pay for it.', 'The team must buy new equipment before April.', 'The barbecue costs more than the school expected.', 'The competition asked schools to raise $5,000.'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Our food truck plan', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { AMA: { name: 'Ama', g: 'f', skin: '#5c3a21', hair: '#120c08', shirt: '#f39c12', style: 'curly' }, TOMASZ: { name: 'Tomasz', g: 'm', skin: '#f2cfb0', hair: '#a0703a', shirt: '#2c3e50', style: 'short' }, HYUN: { name: 'Hyun-woo', g: 'm', skin: '#e8c39e', hair: '#151515', shirt: '#c0392b', style: 'short' } },
          segments: [{
            lines: [
              ['AMA', 'Okay. We\'ve all agreed we\'re really doing this, so tonight I want to settle three things: the truck, the menu, and where we park it. Tomasz, you looked at trucks?'],
              ['TOMASZ', 'I did. A brand-new truck with a full kitchen is around a hundred and twenty thousand. The used one I found is fifty-five thousand, but it needs a new fryer and some electrical work, so add about ten.'],
              ['HYUN', 'So sixty-five for the used one, all in. That\'s still roughly half the price. I vote used.'],
              ['TOMASZ', 'My worry is this: if an old truck breaks down in July, we lose our busiest weeks of the year. A new one comes with a three-year warranty.'],
              ['AMA', 'That\'s fair, but we\'re each putting in twenty thousand. That\'s sixty total. Either way, we\'re borrowing, and I\'d much rather owe the bank five thousand than sixty.'],
              ['TOMASZ', 'Okay, that\'s hard to argue with. Used it is, as long as a mechanic goes over it first.'],
              ['HYUN', 'Agreed. Now, the menu. I know Ama wants a bit of everything, but I really think we need to focus. Korean-style fried chicken, three sauces, a couple of sides. People remember a truck that does one thing really well.'],
              ['AMA', 'I get that. But what about people who don\'t eat meat? Any group with one vegetarian in it is going to walk right past us.'],
              ['HYUN', 'Okay, fair. What if we do a crispy tofu version with the same sauces? Same fryer, same prep, nothing extra to buy.'],
              ['AMA', 'Now that I can live with.'],
              ['TOMASZ', 'Last thing, location. The waterfront gets the most foot traffic, but the city charges eighteen hundred a month for a spot, and there\'s a waiting list until spring anyway.'],
              ['HYUN', 'What about the business park out by the highway? Three office towers, hundreds of people, and almost nowhere to grab lunch.'],
              ['AMA', 'Oh, that\'s smart for weekdays. And on weekends, we could book farmers\' markets and festivals instead.'],
              ['TOMASZ', 'Good. I\'ll call the property manager out there tomorrow, and my cousin\'s a mechanic, so I\'ll ask him to look at the truck on Saturday.']
            ],
            questions: [
              { id: 'L5.1', q: 'What had the friends already decided before this conversation?', o: ['To go into business together', 'To buy a used truck', 'To park at the waterfront', 'To sell Korean-style chicken'] },
              { id: 'L5.2', q: 'Why does Ama favour the used truck?', o: ['It would keep their debt to the bank small.', 'It would need less repair work than expected.', 'A new truck would not come with a kitchen.', 'Each partner could then put in less money.'] },
              { id: 'L5.3', q: 'Why is Tomasz hesitant about a used truck?', o: ['A breakdown could cost them their best sales period.', 'The repairs would cost more than the seller claimed.', 'A mechanic has already found problems with the fryer.', 'The bank will not lend money for older trucks.'] },
              { id: 'L5.4', q: 'What is Ama\'s main argument for the used truck?', o: ['It keeps their debt as low as possible.', 'It comes with a three-year warranty.', 'Her cousin can inspect it for free.', 'It already has a brand-new fryer.'] },
              { id: 'L5.5', q: 'Why does Hyun-woo want a limited menu?', o: ['A clear specialty makes a truck memorable.', 'Fried chicken is the cheapest food to make.', 'The truck only has room for one fryer.', 'Ama does not know how to cook many dishes.'] },
              { id: 'L5.6', q: 'How does Hyun-woo respond to Ama\'s objection?', o: ['By offering a meat-free option using the same equipment', 'By agreeing to serve a little bit of everything instead', 'By suggesting a separate truck for vegetarian customers', 'By arguing that vegetarian customers are a small market'] },
              { id: 'L5.7', q: 'Why does Hyun-woo suggest the business park?', o: ['Workers there have few places to buy lunch.', 'It is closer to the mechanic\'s shop.', 'It has the most foot traffic in the area.', 'Festivals are held there on the weekends.'] },
              { id: 'L5.8', q: 'What is Ama\'s attitude toward the business park idea?', o: ['She approves and adds a plan for weekends.', 'She would rather wait for a waterfront spot.', 'She worries the office towers are too far away.', 'She thinks it should be used on weekends only.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should museums be free?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#5b2c6f', style: 'long' } },
          segments: [{
            lines: [
              ['NARR', 'Several Canadian cities are debating whether public museums should stop charging admission. It sounds like a simple question, but it is dividing museum professionals, city councillors and taxpayers alike.'],
              ['NARR', 'Supporters of free entry argue that ticket prices keep many families away. Lucia Ferreira directs a history museum that dropped its fees four years ago. Attendance has nearly tripled since then, she says, but that number is not what she is proudest of.'],
              ['NARR', 'What matters more to her is who is coming through the doors: far more newcomers to Canada and families with low incomes, groups her staff rarely saw before, even on discount days.'],
              ['NARR', 'One recent Saturday, she says, a family of six told staff it was their first museum visit since arriving in Canada.'],
              ['NARR', 'Ferreira\'s second argument is about fairness. Museum collections belong to the public, she says, so people should not have to pay twice, once through their taxes and again at the door.'],
              ['NARR', 'She adds that free entry changes how people use a museum. Instead of feeling they must see everything to get their money\'s worth, visitors drop in for half an hour on a lunch break and come back another day.'],
              ['NARR', 'Ferreira admits the change was not painless. In the first year, her museum postponed two travelling exhibits while it waited for the city to increase its grant.'],
              ['NARR', 'But she says donations have grown since then, partly because visitors who get in for free often choose to leave something in the box on their way out.'],
              ['NARR', 'Not everyone is convinced. Gordon Achebe, an accountant who once sat on a museum board, points out that admission fees can cover as much as a quarter of the operating costs at a mid-sized museum.'],
              ['NARR', 'If that money disappears, he says, either taxes go up, or museums cut staff, opening hours and new exhibits. Donations, in his experience, are far too unpredictable to fill that gap year after year.'],
              ['NARR', 'Achebe also questions who really benefits. He cites visitor surveys suggesting that when fees are removed, most of the extra visits come from people who were already regular museum-goers, not the new audiences supporters hoped to attract.'],
              ['NARR', 'He does accept that cost is a real barrier for some families. But he argues that dropping fees for everyone also means waiving them for tourists and well-off visitors who would happily pay.'],
              ['NARR', 'In some cities, he notes, more than a third of summer visitors come from out of town, and none of them pay local taxes.'],
              ['NARR', 'Rather than free entry for all, he favours targeted programs, such as museum passes that families can borrow from public libraries, or one free evening each week.'],
              ['NARR', 'Ferreira replies that programs like these still require people to plan ahead, or to admit that they cannot afford a ticket, and that many families simply will not do either.'],
              ['NARR', 'Both sides agree on one thing: whatever cities decide, museums will need to explain clearly where their money comes from.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether museums should charge for admission', 'How museums decide which exhibits to show', 'Why museum attendance has been falling', 'How public libraries lend free museum passes'] },
              { id: 'L6.2', q: 'For Ferreira, what is the most important result of free entry?', o: ['The museum now reaches a wider range of people.', 'The number of visitors has nearly tripled.', 'The museum receives a larger grant from the city.', 'Visitors now spend less time in each exhibit.'] },
              { id: 'L6.3', q: 'Why does Ferreira say the public should not pay at the door?', o: ['They already help fund museums through taxes.', 'Most visitors stay for only half an hour or so.', 'Many newcomers cannot afford the ticket prices.', 'Tickets cover only a small part of the costs.'] },
              { id: 'L6.4', q: 'What does Ferreira admit about dropping fees?', o: ['Some of the museum\'s plans had to be delayed at first.', 'Donations from visitors fell during the first year.', 'Most of the new visits came from regular museum-goers.', 'The museum had to shorten its opening hours.'] },
              { id: 'L6.5', q: 'What does Achebe conclude from the visitor surveys?', o: ['Free entry may not reach the people it was meant for.', 'Most new visitors are newcomers to Canada.', 'Regular visitors stop coming when fees are removed.', 'Donations rise when museums stop charging.'] },
              { id: 'L6.6', q: 'What is Ferreira\'s objection to Achebe\'s alternative?', o: ['Many of the families it targets would not take advantage of it.', 'Library passes would cost the city more than free entry.', 'Tourists would no longer be willing to pay for tickets.', 'One free evening a week would overcrowd the museum.'] }
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
          passage: '<h3>Message</h3><p><b>Subject:</b> Welcome to the team!</p><p>Hi Nikhil,</p><p>On behalf of everyone in the finance department at Seaview Logistics, welcome! We are delighted that you accepted our offer, and I wanted to share a few details before your first day on Monday, March 3.</p><p>Please arrive at 9:30 rather than at 8:30, our usual start time. Our building manager needs the first hour of the day to set up your security pass, so there is really no point in coming earlier. When you get here, go to the reception desk on the second floor and ask for Bernadette. She will take your photo for the pass and hand you your laptop. Our technicians have already installed most of what you need, but you will have to choose a new password at your desk, so allow a few extra minutes for that.</p><p>Your first week will be mostly training. On Monday and Tuesday, you will shadow Felipe. He has been with us for eight years and understands our payment system better than anyone, myself included. He can seem a little quiet at first, but do not let that put you off; he enjoys questions far more than he lets on. On Wednesday afternoon, you will complete the company\'s online safety course, which takes about three hours. It is required before anyone can enter the warehouse, even though you will probably only go there a few times a year.</p><p>On Thursday, our department has its monthly team lunch. We take turns choosing the restaurant, and since it is your first week, everyone has agreed that you should pick. Please send me your choice by Tuesday so I can reserve a table for the nine of us. One colleague does not eat dairy, so somewhere with a varied menu would be ideal. Do not worry about the bill: the company covers it.</p><p>A couple of practical notes. Our parking lot is small and is usually full by 8:15, but there is a bus stop right outside the main entrance. The dress code is business casual from Monday to Thursday, and jeans are fine on Fridays.</p><p>Finally, I will be at a conference in Toronto on Friday, so our first one-on-one meeting will be the following Monday. If anything comes up before then, my cell number is in my signature below.</p><p>See you Monday,<br>Gwen Tremblay<br>Finance Manager</p>',
          questions: [
            { id: 'R1.1', q: 'Gwen most likely asks Nikhil to arrive at 9:30 because', o: ['turning up sooner would only mean waiting around.', 'the reception desk is closed until that time.', 'Bernadette begins her own shift at that hour.', 'the building manager is often late in the morning.'] },
            { id: 'R1.2', q: 'Gwen describes Felipe\'s manner in order to', o: ['encourage Nikhil to approach him freely.', 'warn Nikhil that Felipe dislikes interruptions.', 'explain why Felipe was picked as a trainer.', 'suggest that Felipe may be hard to learn from.'] },
            { id: 'R1.3', q: 'What does Gwen imply about the payment system?', o: ['Her own grasp of it is weaker than Felipe\'s.', 'It is about to be replaced by a newer one.', 'Nikhil will learn it during the safety course.', 'It is used mainly by the warehouse staff.'] },
            { id: 'R1.4', q: 'The safety course is mandatory for Nikhil although he', o: ['will rarely have any reason to visit the warehouse.', 'finished a similar course at his last job.', 'will work in the warehouse on Wednesdays.', 'has not yet been given a company laptop.'] },
            { id: 'R1.5', q: 'When choosing a restaurant, Nikhil should probably', o: ['avoid places that offer only a few dishes.', 'pick somewhere the team has used before.', 'check that the bill will stay under budget.', 'find a place that seats exactly eight people.'] },
            { id: 'R1.6', q: 'What can be concluded about parking at the office?', o: ['A free space is unlikely at Nikhil\'s arrival time.', 'Staff must pay a monthly fee to use the lot.', 'New employees get the spaces nearest the door.', 'Most of the department travels in by bus.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Gwen,</p><p>Thank you so much for the warm welcome. I am really looking forward to Monday. I will turn up at the later time you suggested, head straight to [[R1.7]] and ask for the person who will be taking my photo.</p><p>I am glad I will be learning from [[R1.8]]. My last company used a completely different payment system, so two days of shadowing will be very helpful, and I promise to ask plenty of questions.</p><p>For Thursday, may I suggest Saffron House on King Street? Its menu has many choices made without milk or cheese, so it should suit [[R1.9]]. I called them, and they can seat our whole group at noon. I will confirm my final choice [[R1.10]], as you asked.</p><p>Also, since I do not drive yet, [[R1.11]] works perfectly for me. I live on the same route, so my trip should take about twenty minutes.</p><p>Enjoy the conference, and I will see you for our meeting when you are back. And thank you for the note about Fridays; I will happily leave my tie at home.</p><p>Best regards,<br>Nikhil</p>',
          blanks: [
            { id: 'R1.7', o: ['the front desk upstairs', 'the warehouse entrance', 'the parking office', 'the bus shelter outside'] },
            { id: 'R1.8', o: ['such a seasoned coworker', 'the finance manager herself', 'the person who issues passes', 'an outside safety trainer'] },
            { id: 'R1.9', o: ['the teammate you told me about', 'Bernadette at reception', 'Felipe after his training', 'staff from the warehouse'] },
            { id: 'R1.10', o: ['no later than my second day', 'before the end of the week', 'on the morning of the lunch', 'once you are back from Toronto'] },
            { id: 'R1.11', o: ['having transit right at the door', 'the staff lot filling up early', 'the relaxed Friday dress code', 'starting an hour after the others'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Riverbend Community Centre: Summer Day Camps</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Camp</th><th>Ages</th><th>Weeks offered</th><th>Daily hours</th><th>Price per week</th><th>Extended care</th></tr></thead><tbody>' +
            '<tr><td>Little Explorers</td><td>4 to 6</td><td>July 7 to August 15</td><td>9:00 a.m. to 12:00 p.m.</td><td>$120</td><td>Not available</td></tr>' +
            '<tr><td>Outdoor Adventure</td><td>7 to 10</td><td>July 7 to August 22</td><td>9:00 a.m. to 4:00 p.m.</td><td>$210</td><td>Available</td></tr>' +
            '<tr><td>Science and Robotics</td><td>8 to 12</td><td>July 14 to August 8</td><td>9:00 a.m. to 3:00 p.m.</td><td>$245</td><td>Available</td></tr>' +
            '<tr><td>Art Studio</td><td>6 to 12</td><td>July 7 to August 22</td><td>10:00 a.m. to 3:00 p.m.</td><td>$180</td><td>Not available</td></tr>' +
            '<tr><td>Leaders in Training</td><td>13 to 15</td><td>July 21 to August 15</td><td>8:30 a.m. to 4:30 p.m.</td><td>$150</td><td>Not available</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Extended care runs from 7:30 a.m. until camp begins and from the end of camp until 5:30 p.m. It costs $35 per child per week.</li><li>Register a child for 3 or more weeks of the same camp and save 10% on that camp\'s fees. The discount does not apply to extended care.</li><li>Sibling discount: $15 off per week for each additional child from the same household registered in the same camp in the same week.</li><li>Cancellations made at least 14 days before a camp week begins receive a full refund minus a $25 processing fee. No refunds are given after that.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Marcus,</p><p>I have been going through the summer camps at Riverbend. Zoe is nine and loves building things, so [[R2.1]] looks like the best fit for her. It ends at 3:00, though, and neither of us finishes work before 5:00, so we would also need [[R2.2]].</p><p>If we sign her up for three weeks, the camp fees alone would come to [[R2.3]] after the multi-week discount, plus $105 for the extra care. We could book two July weeks now. The third would ideally be the first week of August, but that is still uncertain because of your work trip, and I do not want to risk paying for a week she might miss.</p><p>Sam is only five, so his only option is [[R2.4]]. Unfortunately, it finishes at noon and has no extended care, so [[R2.5]] on the days he attends. My mother has offered to help on Tuesdays and Thursdays. We will not get the sibling discount either, since the two of them would be in different camps.</p><p>Let\'s decide this weekend.</p><p>Priya</p>',
          blanks: [
            { id: 'R2.1', o: ['Science and Robotics', 'Outdoor Adventure', 'Art Studio', 'Leaders in Training'] },
            { id: 'R2.2', o: ['paid after-hours supervision', 'a second camp for the afternoons', 'the sibling price reduction', 'a shorter camp day'] },
            { id: 'R2.3', o: ['$661.50', '$735.00', '$766.50', '$630.00'] },
            { id: 'R2.4', o: ['Little Explorers', 'Art Studio', 'Outdoor Adventure', 'Science and Robotics'] },
            { id: 'R2.5', o: ['someone must pick him up at lunchtime', 'he could stay in extended care until 5:30', 'he could join Zoe\'s camp in the afternoons', 'we would pay an extra $35 for each week'] }
          ],
          questions: [
            { id: 'R2.6', q: 'Priya probably prefers to wait before booking the August week because', o: ['a late cancellation would bring no money back.', 'Science and Robotics does not run that week.', 'extended care is not offered during August.', 'the camp fee goes up after the end of July.'] },
            { id: 'R2.7', q: 'A parent cancels one week of Art Studio three weeks before it begins. The refund will be', o: ['$155.', '$180.', '$0.', '$145.'] },
            { id: 'R2.8', q: 'A parent wants a 7-year-old and a 12-year-old in the same camp so that the family gets the sibling discount. The parent should choose', o: ['Art Studio, although neither child could stay past 3:00.', 'Science and Robotics, with extended care until 5:30.', 'Outdoor Adventure, which has the longest camp day.', 'Leaders in Training, which starts earliest in the morning.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>The Wild Horses of Sable Island</h3><p><b>A.</b> About 300 kilometres southeast of Halifax, a thin crescent of sand rises out of the Atlantic Ocean. Sable Island is roughly 40 kilometres long but, at its widest point, only slightly more than a kilometre across. There are no trees, only grasses, low shrubs and shifting dunes. For centuries, the shallow sandbars around it were feared by sailors, and hundreds of vessels have been wrecked on them, earning the area the nickname "Graveyard of the Atlantic." Today the island is protected as a national park reserve. It is also home to the world\'s largest breeding colony of grey seals, which crowd its beaches each winter.</p><p><b>B.</b> The island is best known for its wild horses. Historians generally believe that the first horses were brought there in the 1700s, although exactly who brought them is still debated. A popular legend says they swam ashore from shipwrecks, but there is little evidence to support it. Over the following two centuries, people regularly rounded up horses and shipped them to the mainland for sale. When a plan to remove the remaining herd became public around 1960, letters of protest poured in from across the country, and the horses were granted legal protection soon afterward. Since then, the rule has been simple: no one feeds them, treats them or interferes with them in any way.</p><p><b>C.</b> Living without human help is not easy. The horses form small family groups, usually one stallion with several mares and their young. They graze mainly on the tough grass that holds the dunes together, and in dry summers they dig holes in the sand to reach fresh water beneath the surface. Winters are long and stormy, and in harsh years many animals die. Scientists who study the herd recognize individual horses from photographs of their markings, which allows them to follow each animal over its lifetime. They also collect samples of dung to learn what the horses have been eating. Most foals are born in late spring, when food is easiest to find. In recent years, the population has been estimated at around five hundred.</p><p><b>D.</b> Seeing the horses in person takes planning. The island can only be reached by small aircraft or by boat, and fog or high winds often delay arrivals for days. Most visitors travel with a licensed tour operator, which arranges the flight or boat. All visitors must register with park staff in advance and attend a short orientation when they land. Once on the island, they are required to stay at least 20 metres away from the horses, and they may not bring any plants, seeds or animals with them. There are no hotels or campsites for the public, so most visits last only a single day. As a result, only a few hundred people make the trip each year.</p>',
          questions: [
            { id: 'R3.1', q: 'Researchers can identify particular animals by their appearance in pictures.', fixed: true, a: 'C' },
            { id: 'R3.2', q: 'Many ships have been lost in the waters near the island.', fixed: true, a: 'A' },
            { id: 'R3.3', q: 'People who come to the island must keep a set distance from the animals.', fixed: true, a: 'D' },
            { id: 'R3.4', q: 'The horses feed largely on plants that keep the sand in place.', fixed: true, a: 'C' },
            { id: 'R3.5', q: 'In some seasons, the horses must work to find something to drink.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'Public opinion played a role in saving the herd.', fixed: true, a: 'B' },
            { id: 'R3.7', q: 'Scientists count the whole herd each spring when the new foals arrive.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Visitors pay a fee to the park when they register.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Weather can force travellers to wait before reaching the island.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should City Residents Be Allowed to Keep Chickens?</h3><p>When one Canadian city launched a two-year pilot project last spring allowing households to keep up to four hens, all sixty available permits were claimed within a week. Similar pilots have since appeared in cities across the country, and so has a lively debate over whether chickens belong in urban backyards.</p><p>Ingrid Solberg, who runs a community garden program and keeps three hens of her own, believes they reconnect city families with where their food comes from. "My kids collect the eggs every morning before school," she says. "They have learned more about responsibility from those birds than from any chore chart." She adds that hens eat kitchen scraps and garden pests, and that their droppings make excellent compost. Because most pilot rules ban roosters, she says noise is rarely an issue: "A hen is quieter than a barking dog."</p><p>Carol Whitfield, president of a neighbourhood association, is not convinced. She says her concern is not well-run coops like Solberg\'s, but the ones that are neglected once the excitement wears off. "Spilled feed attracts rats, and rats don\'t respect property lines." In the pilot city, she notes, bylaw officers received eleven complaints in the first year, most of them about smell and pests rather than noise. She also points out that hens lay far fewer eggs after three or four years but can live for eight or more, and that animal shelters in several pilot cities have reported a rise in surrendered chickens.</p><p>Solberg answers that rats are already common in neighbourhoods full of compost bins and bird feeders. In her view, a well-built coop with a solid floor and sealed feed containers attracts no more pests than an ordinary vegetable garden. "The problem is careless owners," she says, "not chickens."</p><p>Veterinarian Dr. Rahim Dossou sees merit on both sides. He says the risk of illness spreading from a small backyard flock to people is low when owners wash their hands and keep coops clean. His bigger worry is that very few city vets treat chickens, so sick birds often go without care. He recommends that cities require new owners to complete a short course before receiving a permit, something a few cities already do.</p><p>Marc Thibault, a bylaw officer who handled many of the pilot city\'s complaints, says most were solved with a single visit. "Usually the owner had simply let the coop get dirty," he says. "Once we explained the rules, we rarely heard about that address again." He worries, though, that his small team could not keep up if the number of permits were unlimited.</p><p>Cost is another factor that newcomers tend to underestimate. Solberg spent about $900 on her coop, fencing and first birds, and she estimates that feed and bedding add roughly $25 a month. At current grocery prices, she admits, her eggs are not cheaper than the ones in stores. "If you are doing this to save money, don\'t," she says with a laugh. "You do it for the experience."</p><p>Solberg welcomes the idea of training, and even Whitfield says she could accept a permanent program with firm limits and regular inspections. "If the city is willing to enforce the rules, and not just write them," she says, "I would feel much better about it."</p>',
          questions: [
            { id: 'R4.1', q: 'What does the opening paragraph suggest about the pilot project?', o: ['Residents were eager to take part in it.', 'It allowed more birds than most cities do.', 'It has already been made permanent.', 'It was cancelled before the two years ended.'] },
            { id: 'R4.2', q: 'Solberg compares hens to dogs in order to', o: ['play down worries about disturbance.', 'argue that hens make better pets than dogs.', 'explain why roosters have been banned.', 'suggest that dogs should also be limited.'] },
            { id: 'R4.3', q: 'Whitfield is mainly concerned that', o: ['some owners will lose interest over time.', 'roosters will wake neighbours too early.', 'egg prices in city stores will rise.', 'skilled owners will build oversized coops.'] },
            { id: 'R4.4', q: 'What does Solberg most likely mean by "You do it for the experience"?', o: ['The rewards of keeping hens are not financial.', 'Only experienced owners should receive permits.', 'New owners should expect to make many mistakes.', 'Hens become easier to keep after the first year.'] },
            { id: 'R4.5', q: 'Dr. Dossou would most likely agree that', o: ['getting help for an ailing hen can be difficult.', 'backyard flocks pose a serious danger to people.', 'cities should stop issuing new chicken permits.', 'most city vets are happy to treat chickens.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I have kept four hens for two years, so I read this article with great interest. I agree with Ms. Solberg that hens are [[R4.6]]: my neighbours did not even know I had them until I offered them eggs. Still, Ms. Whitfield makes a fair point about [[R4.7]]. When I visited our local shelter last month, there were a dozen hens waiting for new homes, most of them too old to lay much anymore.</p><p>That is why I support Dr. Dossou\'s idea of [[R4.8]]. Many people simply do not realize how much work hens are, and a few hours of instruction could prevent a lot of problems. I would also tell anyone thinking of getting hens that, as Ms. Solberg warns, they should not expect [[R4.9]]. My own feed bills alone are higher than what I used to spend on eggs.</p><p>Finally, I share Ms. Whitfield\'s view that rules only matter if the city [[R4.10]]. Otherwise, careless owners will simply ignore them.</p>',
          blanks: [
            { id: 'R4.6', o: ['far less noisy than people assume', 'louder than most neighbours would like', 'hard to keep clean in winter', 'happy living indoors'] },
            { id: 'R4.7', o: ['pets dropped once the novelty fades', 'roosters disturbing the neighbours', 'the price of supermarket eggs', 'vets lacking proper training'] },
            { id: 'R4.8', o: ['required lessons for new keepers', 'banning backyard flocks entirely', 'free vet visits for every hen', 'building more animal shelters'] },
            { id: 'R4.9', o: ['to cut their grocery costs', 'their birds to live very long', 'to need much outdoor space', 'any visits from bylaw officers'] },
            { id: 'R4.10', o: ['truly follows through on them', 'puts them in writing', 'charges owners a yearly fee', 'limits the number of roosters'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You pay $480 a year for a membership at your local recreation centre. For the past six weeks, two treadmills and the rowing machine in the fitness room have had "out of order" signs on them, and the change room floor is often wet and slippery. When you mentioned this at the front desk last month, you were told the repairs would happen "soon."</p><p>Write an email to the manager of the recreation centre. In your email, do the following:</p><ul><li>Describe the problems and what you have already done about them.</li><li>Explain how these problems have affected you or other members.</li><li>Say what you would like the centre to do, and what you will do if nothing changes before your membership renews next month.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your provincial government has money to improve travel between two large cities in the province and is asking residents for their opinion. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Build a new four-lane highway between the two cities to reduce traffic and cut driving time by about 40 minutes. It would take six years to build, with long construction delays on the existing road in the meantime.' },
            { key: 'B', label: 'Option B', text: 'Improve passenger rail service between the two cities with more frequent, faster and more comfortable trains. A one-way ticket would cost about $45, and both stations are downtown, so many people would still need a car or bus to reach them.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and what you like to do during it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours is starting a new job next week and is feeling nervous about it. The job is in a field she has never worked in, and for the first two weeks she will work from home, meeting her team only on video calls. Give your friend advice on how to make a good start in the new workplace.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you lost something that was important to you. What was it, what happened, how did you feel, and did the experience change how you look after important things?' },
        { id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/K/scene.jpg" alt="A busy campground by a lake in the evening as a storm moves in">' },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Think about the sky, the campers who are not ready for the night, and what is going on around the campsite.', image: '<img src="tests/img/K/scene.jpg" alt="A busy campground by a lake in the evening as a storm moves in">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'You and your partner are going to a cousin\'s wedding in another city, about 650 kilometres away, for three days. Choose the way of travelling you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Rent a car', image: '<img src="tests/img/K/opt_A.jpg" alt="Photo: Rent a car">', facts: ['Rental: $240 for 3 days, plus about $110 for gas', 'About 7 hours of driving each way', 'Leave whenever you want and stop along the way', 'Drive right to the wedding venue'] },
            { key: 'B', title: 'Take the train', image: '<img src="tests/img/K/opt_B.jpg" alt="Photo: Take the train">', facts: ['Return ticket: $180 per person', 'About 9 hours each way', 'Free Wi-Fi, dining car and room to relax', 'Station is 15 minutes from the venue'] }
          ],
          third: { key: 'C', title: 'Fly', image: '<img src="tests/img/K/opt_C.jpg" alt="Photo: Fly">', facts: ['Return flight: $420 per person', '1.5-hour flight, plus about 2 hours at the airport', 'Airport is 1 hour from the venue', 'Checked bag: $35 each way'] },
          persuade: 'Your partner thinks flying would be better. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Weeks ago, you promised to drive your close friend to the airport at 6:00 a.m. this Saturday for an important trip. Today, your sister called. Her babysitter has cancelled, and she asked you to look after her two young children on Saturday morning so she can attend a job interview.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your friend. Explain why you cannot drive them to the airport.</p><p><b>Option B:</b> Talk to your sister. Explain why you cannot look after her children.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your local minor soccer league is voting on whether to stop keeping score and naming winners in games for players under 10. Some coaches say that losing by eight goals makes young players quit, and that the early years should be about learning skills. Many parents reply that the children keep score in their heads anyway, and that they need to learn how to lose as well as how to win.</p><p>The league has asked parents and community members for their input before the vote. Should the league keep score in under-10 games? Explain your reasons.</p>' },
        { id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a gift shop and see this unusual hat. Call your friend, who is going to a three-day outdoor summer music festival next month and has said she has only $60 left to spend on anything for the trip. The fan and radio need four AA batteries, and the hat weighs almost a kilogram. Describe the hat and explain whether you think your friend should buy it.', image: '<img src="tests/img/K/object.jpg" alt="An unusual hat in a gift shop">' }
      ]
    }
  });
})();
