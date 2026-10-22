/* Rowe CELPIP Mock Exam: Test 25 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/25/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '25',
    title: 'Mock Test 25',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'outdoor',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { GEMMA: { name: 'Gemma', g: 'f', skin: '#c68642', hair: '#1d1410', shirt: '#8e44ad', style: 'curly' }, HUGO: { name: 'Hugo', g: 'm', skin: '#f2cfb0', hair: '#5d4037', shirt: '#117864', style: 'short' } },
        segments: [{
          lines: [
            ['GEMMA', 'The post office left a card. The parcel was too big for our mailbox, so we have to collect it at the counter.'],
            ['HUGO', 'The counter\'s only open till five on weekdays, and I never get home before half past.'],
            ['GEMMA', 'It says they\'ll bring it back for free if we book online. But somebody has to be home to sign for it.'],
            ['HUGO', 'Then let\'s have it sent to the pharmacy down the street instead. They\'re open till ten every night.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Hugo suggest the pharmacy?', o: ['Its hours fit better with his workday.', 'It offers free redelivery if booked online.', 'It can hold larger parcels than the mailbox.', 'Nobody needs to sign for parcels there.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'outdoor',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { GILLIAN: { name: 'Gillian', g: 'f', skin: '#e8c3a0', hair: '#a04000', shirt: '#2471a3', style: 'long' }, HECTOR: { name: 'Hector', g: 'm', skin: '#a9714b', hair: '#1d1410', shirt: '#7b241c', style: 'short' } },
          segments: [
            {
              lines: [
                ['HECTOR', 'Gillian, the car won\'t start. I turn the key and it just clicks. I think the battery\'s dead.'],
                ['GILLIAN', 'Today? Hector, the citizenship ceremony is at ten. They told us to be there half an hour early, or we might not get in.'],
                ['HECTOR', 'I know, I know. I left the inside light on last night when I was hunting for the folder. That one\'s on me.'],
                ['GILLIAN', 'Okay. Don\'t panic. Can we get a boost? Henrik next door has cables, doesn\'t he?'],
                ['HECTOR', 'He does, but his car\'s gone. He drives his mother to her appointments on Saturday mornings.'],
                ['GILLIAN', 'What about roadside assistance? We pay for it with our insurance.'],
                ['HECTOR', 'Already called. Since it\'s not an emergency, the wait is about ninety minutes.'],
                ['GILLIAN', 'Ninety minutes? It\'s already quarter past eight, and it\'s a forty-minute drive downtown on a good day. We\'ve waited three years for this morning.']
              ],
              questions: [
                { id: 'L1.1', q: 'What does Hector admit?', o: ['He left something switched on overnight.', 'He forgot to renew their roadside assistance.', 'He let the gas tank run nearly empty.', 'He misplaced the keys to the car.'] },
                { id: 'L1.2', q: 'Why can the neighbour not help right now?', o: ['His car is not at home.', 'He has no booster cables.', 'He is at a medical appointment himself.', 'He is away for the whole weekend.'] },
                { id: 'L1.3', q: 'Why is roadside assistance not a good option?', o: ['Help would come too late for the ceremony.', 'Their insurance does not cover dead batteries.', 'It only answers calls about real emergencies.', 'The company will not drive them downtown.'] }
              ]
            },
            {
              lines: [
                ['GILLIAN', 'Okay, a taxi, then. I just checked the app. Eighty-five dollars to downtown, and the nearest car is twenty minutes away.'],
                ['HECTOR', 'Eighty-five. That\'s steep, but it\'s one day. What about the bus?'],
                ['GILLIAN', 'The express leaves the corner at eight-thirty and gets downtown at nine-twenty. Then it\'s a ten-minute walk to the citizenship office.'],
                ['HECTOR', 'That\'s cutting it awfully fine. If the bus is even a couple of minutes late, we miss the cut-off.'],
                ['GILLIAN', 'And I\'m wearing heels. I am not sprinting through downtown.'],
                ['HECTOR', 'Then it\'s the taxi. Book it now, and I\'ll grab the folder. Have you got the letter with our appointment time?'],
                ['GILLIAN', 'It\'s in the folder, with our permanent resident cards and the photos. Wait. The folder. Where did you leave it last night?'],
                ['HECTOR', 'On the back seat of the car. That\'s why the light was on in the first place.'],
                ['GILLIAN', 'Well, at least something in that car is still useful.']
              ],
              questions: [
                { id: 'L1.4', q: 'If they took the express bus, when would they arrive at the office?', o: ['9:30', '9:20', '9:00', '10:00'] },
                { id: 'L1.5', q: 'What worries Hector about taking the bus?', o: ['Any small delay could make them too late.', 'Gillian would have to walk there in heels.', 'The bus does not stop near the office.', 'The express bus may already have left.'] },
                { id: 'L1.6', q: 'What does Gillian\'s last comment show?', o: ['She can still joke under pressure.', 'She wants to sell the car soon.', 'She blames Hector for losing the folder.', 'She thinks they should drive anyway.'] }
              ]
            },
            {
              lines: [
                ['HECTOR', 'Okay, the taxi\'s here. Folder, cards, letter. Have we got everything?'],
                ['GILLIAN', 'Yes. Oh, and I just noticed. The letter says each of us needs two pieces of ID, and at least one has to have a photo.'],
                ['HECTOR', 'Two each? I thought the resident card was enough on its own. What else, our health cards?'],
                ['GILLIAN', 'Health cards are fine. Mine\'s in my wallet. Where\'s yours?'],
                ['HECTOR', 'Right here, in my back pocket. Okay, breathe. The driver says traffic\'s light, so we\'ll be there in plenty of time.'],
                ['GILLIAN', 'Good. And when we get home, you\'re calling a mechanic. That battery is six years old, and it struggled all last week in the cold. Last night was just the final straw.'],
                ['HECTOR', 'Deal. I\'ll call first thing Monday. And tonight we celebrate. I won\'t even complain about the eighty-five dollars.'],
                ['GILLIAN', 'You just did.'],
                ['HECTOR', 'Fair. But I said it with a smile.']
              ],
              questions: [
                { id: 'L1.7', q: 'What does each of them need besides the resident card?', o: ['A second piece of identification', 'A copy of the appointment letter', 'Two photos of themselves', 'A letter from their employer'] },
                { id: 'L1.8', q: 'What does Gillian suggest about the battery?', o: ['It was already weak before last night.', 'It was damaged by the cold this morning.', 'It is still under its six-year warranty.', 'It was replaced only last week.'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { COBBLER: { name: 'Shoe repair clerk', g: 'f', skin: '#f0c9a6', hair: '#d9b56a', shirt: '#196f3d', style: 'bun' }, HIROSHI: { name: 'Hiroshi', g: 'm', skin: '#e3b28b', hair: '#120c08', shirt: '#5d6d7e', style: 'short' } },
          segments: [{
            lines: [
              ['COBBLER', 'Morning. What have you brought me?'],
              ['HIROSHI', 'These winter boots. The left sole has split right across the bottom, and my sock was soaked by the time I got to work.'],
              ['COBBLER', 'Let\'s have a look. Oh, yes. The rubber\'s cracked all the way through. How old are they?'],
              ['HIROSHI', 'Six winters, I think. They weren\'t cheap when I bought them, so I\'d rather fix them than throw them out.'],
              ['COBBLER', 'They\'re good boots, too. The leather on top is in great shape. I can put on a whole new sole, but on both boots, not just the left.'],
              ['COBBLER', 'The right one\'s worn thin at the heel, and if I only do one, you\'ll be walking lopsided.'],
              ['HIROSHI', 'Makes sense. How much are we talking?'],
              ['COBBLER', 'Ninety for the pair, glue and stitching included. A new pair of boots this quality would run you well over three hundred.'],
              ['HIROSHI', 'Okay, that\'s fair. And how long will it take?'],
              ['COBBLER', 'The glue needs two full days to cure before they\'re waterproof. With what\'s ahead of you on the shelf, realistically, next Wednesday.'],
              ['HIROSHI', 'Wednesday? They\'re calling for fifteen centimetres of snow on Monday, and these are my only winter boots.'],
              ['COBBLER', 'I hear you. But if I rush the glue, the sole will peel off by February, and you\'ll be back here, unhappy. What I can do is lend you a pair from our unclaimed shelf. People drop boots off and never come back for them.'],
              ['HIROSHI', 'Really? What sizes have you got?'],
              ['COBBLER', 'There\'s a ten and an eleven. You look like an eleven.'],
              ['HIROSHI', 'Ten and a half, but I\'ll take the eleven with thick socks. Anything I should do with these once they\'re fixed?'],
              ['COBBLER', 'Keep the salt off the leather. Wipe them with a damp cloth when you come in, and rub in some waterproofing wax once a month. It\'s twelve dollars a tin, and it\'ll add years.'],
              ['HIROSHI', 'Sold. I\'ll take a tin now and settle up for the soles when I pick them up.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why does Hiroshi want to repair the boots?', o: ['He would rather not waste a good pair.', 'He cannot find new boots in his size.', 'His feet got wet on the way to the shop.', 'The shop offered him a discount on soles.'] },
              { id: 'L2.2', q: 'Why does the clerk recommend resoling both boots?', o: ['Doing only one would leave them uneven.', 'The leather on both of the boots is cracked.', 'It costs the same as fixing just one.', 'The right boot has also split open.'] },
              { id: 'L2.3', q: 'Why will the boots not be ready before Monday?', o: ['Other jobs are ahead, and the glue must cure.', 'The new soles have to be ordered from a supplier.', 'The shop is closed for the whole weekend.', 'The snow is expected to delay a delivery.'] },
              { id: 'L2.4', q: 'How much will Hiroshi spend in total at the shop?', o: ['$102', '$90', '$12', '$312'] },
              { id: 'L2.5', q: 'What does the clerk suggest about rushing the repair?', o: ['It would probably fail before long.', 'It would cost an extra fee to finish quickly.', 'It would only be possible for the left boot.', 'It would damage the leather on top.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#8d5a3b', hair: '#120c08', shirt: '#1a5276', style: 'short' }, HUGH: { name: 'Hugh Gallant', g: 'm', skin: '#f2cfb0', hair: '#bdc3c7', shirt: '#935116', style: 'bald' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Hugh Gallant, who restores old wooden canoes in a workshop behind his house in Kenora. Hugh, how did all this start?'],
              ['HUGH', 'With a canoe I found upside down in a farmer\'s field. Cedar ribs, canvas rotting off it, a young tree growing right through one end. The farmer said I could have it if I hauled it away before haying.'],
              ['HOST', 'And you knew how to fix it?'],
              ['HUGH', 'Not a clue. I taught high school shop, so I could handle tools, but canoes are a different animal. I spent that whole first winter reading old manuals and making mistakes.'],
              ['HUGH', 'It took me two years to finish. These days a canoe takes me about two months.'],
              ['HOST', 'Who brings you canoes?'],
              ['HUGH', 'Mostly families. Someone\'s grandfather paddled it, and it\'s been sitting in a boathouse for forty years. They don\'t want a new canoe. They want that one, with the initials carved into the seat.'],
              ['HOST', 'Do you ever turn a job down?'],
              ['HUGH', 'Sometimes I warn people off. If the hull is mostly rot, I\'ll be honest and tell them it\'ll cost more than a brand-new canoe. Most of them go ahead anyway, which tells you it was never really about the money.'],
              ['HOST', 'What does a restoration cost?'],
              ['HUGH', 'Usually between three and five thousand dollars. The canvas and paint are cheap. What people are paying for is time: replacing ribs one at a time, steaming each strip of cedar so it\'ll bend without cracking.'],
              ['HOST', 'Is wood still practical, compared with modern canoes?'],
              ['HUGH', 'A plastic canoe is tougher, I\'ll grant you that. You can drag it over rocks all day. But a wooden one is quieter on the water, and if you damage it, you can fix it with your own two hands. Try that with plastic.'],
              ['HOST', 'Are there many people still doing this kind of work?'],
              ['HUGH', 'Fewer every year. Most of the builders I learned from are in their eighties, and that worries me more than anything.'],
              ['HUGH', 'So every summer I take on two apprentices, usually university students, and I pay them, because I won\'t ask young people to work for nothing.'],
              ['HOST', 'And the canoe from the farmer\'s field?'],
              ['HUGH', 'Still mine. My granddaughter paddled it across the lake last August. She\'s decided it\'s hers now.']
            ],
            questions: [
              { id: 'L3.1', q: 'How did Hugh get his first canoe?', o: ['A farmer let him take a damaged one for free.', 'He bought an old one from a local farmer.', 'His grandfather left it to him in a boathouse.', 'He built it as a project for his shop class.'] },
              { id: 'L3.2', q: 'What does Hugh suggest about his first restoration?', o: ['He learned largely by trial and error.', 'His teaching background made it easy.', 'A local builder showed him what to do.', 'It took him about two months to finish.'] },
              { id: 'L3.3', q: 'Why do families want their old canoes restored rather than replaced?', o: ['The canoes carry personal and family meaning.', 'Restoring is cheaper than buying a new canoe.', 'Old wooden canoes are lighter than new ones.', 'New canoes cannot be carved with initials.'] },
              { id: 'L3.4', q: 'Why does Hugh mention that most customers go ahead anyway?', o: ['To show feelings matter more to them than cost', 'To show that his prices are very reasonable', 'To explain why he almost never turns down any job', 'To suggest that rot is fairly easy to repair'] },
              { id: 'L3.5', q: 'What does Hugh admit about plastic canoes?', o: ['They stand up better to rough use.', 'They are quieter on the water.', 'They are easier to repair at home.', 'They cost about as much as wood.'] },
              { id: 'L3.6', q: 'Why does Hugh take on apprentices?', o: ['He fears the skills will disappear.', 'He needs help with too many orders.', 'He wants to slow down in his eighties.', 'Students will work for free in summer.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#d4a373', hair: '#3b2a20', shirt: '#212f3d', style: 'long' } },
          segments: [{
            lines: [
              ['NEWS', 'Tenants in Sarnia will soon have a legal right to a cooler home. City council voted last night to require landlords to keep rental units at or below twenty-six degrees from the start of June to the end of September.'],
              ['NEWS', 'The rule takes effect next June. Buildings that already have central air conditioning will have to keep it running and in good repair all summer.'],
              ['NEWS', 'Landlords without central air will not be forced to install it. Instead, each unit must have at least one room, usually a bedroom, that can be kept below the limit, whether with a window unit, a heat pump or some other method.'],
              ['NEWS', 'To help with the cost, the city will offer landlords a grant of up to four hundred dollars per unit, for a maximum of ten units in any one building.'],
              ['NEWS', 'Tenants who believe their unit is too hot can call the city\'s three-one-one line. During a heat warning, an inspector must visit within two days.'],
              ['NEWS', 'Landlords who fail to fix a problem after an inspection could face fines starting at five hundred dollars a day.'],
              ['NEWS', 'Tenant groups welcomed the decision, pointing out that many older apartment buildings trap heat, and that upper floors can stay above thirty degrees well into the night.'],
              ['NEWS', 'The association representing local landlords, however, warned that some older buildings would need electrical upgrades before they could handle new air conditioners, and that the cost could eventually show up in higher rents.'],
              ['NEWS', 'Council members say they will review the bylaw after its first summer.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['A new rule limiting indoor heat in rentals', 'A program to install air conditioning for free', 'A rise in complaints from tenants in the city', 'Changes to the way rents are calculated'] },
              { id: 'L4.2', q: 'What must landlords without central air do?', o: ['Make sure one room per unit stays cool', 'Install central air before next June', 'Give each tenant a free window air conditioner', 'Lower the rent during the summer months'] },
              { id: 'L4.3', q: 'What is the most a landlord could receive in grants for one building?', o: ['$4,000', '$400', '$5,000', '$10,000'] },
              { id: 'L4.4', q: 'Why is the landlords\' association concerned?', o: ['Old wiring could mean expensive work.', 'Inspectors may not respond quickly enough.', 'The grant is only available for ten units.', 'Tenants could call three-one-one too often.'] },
              { id: 'L4.5', q: 'Why does the report mention upper floors?', o: ['To show why tenant groups support the rule', 'To explain where inspectors will visit first', 'To show where window units work best', 'To explain why some buildings need new wiring'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'Speeding on Garnet Street', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { GLORIA: { name: 'Gloria', g: 'f', skin: '#8d5a3b', hair: '#1d1410', shirt: '#a93226', style: 'curly' }, HENRY: { name: 'Henry', g: 'm', skin: '#f2cfb0', hair: '#bdc3c7', shirt: '#1f618d', style: 'bald' }, HAZEL: { name: 'Hazel', g: 'f', skin: '#e8c3a0', hair: '#6b4a2b', shirt: '#117864', style: 'long' } },
          segments: [{
            lines: [
              ['GLORIA', 'Thanks for coming. Twenty-three households signed our petition about speeding on Garnet Street. Now we need an actual plan.'],
              ['HENRY', 'Speed bumps. That\'s the plan. The city puts them in, and drivers slow down. Simple.'],
              ['HAZEL', 'I called the city. Speed bumps need two-thirds of the households on the street to sign a formal request.'],
              ['GLORIA', 'How many households are there?'],
              ['HAZEL', 'Sixty. And every one of our twenty-three signatures counts, but we\'re well short.'],
              ['HENRY', 'Then we knock on doors. Most people hate the speeding as much as we do.'],
              ['HAZEL', 'Not everyone. The families at the far end told me bumps would wreck their backs on the way to work.'],
              ['GLORIA', 'And there\'s a catch. Even with enough signatures, the city\'s waiting list for speed bumps is two years.'],
              ['HENRY', 'Two years? Someone could get hurt long before then, especially with the school right there.'],
              ['HAZEL', 'Which is why I\'d start with something faster. The city lends out radar signs that flash your speed.'],
              ['HENRY', 'Those signs? Drivers ignore them after a week. My brother-in-law has one on his street.'],
              ['HAZEL', 'Maybe, but the sign also records speeds. That data could move us up the waiting list.'],
              ['GLORIA', 'Oh, that\'s clever. Real numbers would be much harder for the city to brush off.'],
              ['HENRY', 'Fine. I\'ll admit that\'s a decent use for it. How long can we borrow one?'],
              ['HAZEL', 'A month. And it\'s free, as long as someone checks the battery every week.'],
              ['GLORIA', 'I can do that. It would go right outside my house anyway, near the school crossing.'],
              ['HENRY', 'What about planters? Some streets put big flower boxes in the road to make it narrower.'],
              ['GLORIA', 'I like the look of them, but who waters them? Who pays when a snowplow hits one?'],
              ['HENRY', 'The association could. We\'ve got eight hundred dollars left from the spring yard sale.'],
              ['HAZEL', 'Eight hundred buys maybe two planters. And the city needs a permit before anything goes on the road.'],
              ['HENRY', 'Okay, okay. So planters are a someday idea. What do we do this week?'],
              ['GLORIA', 'Three things. Hazel books the radar sign. Henry and I start knocking on doors this weekend.'],
              ['HAZEL', 'And we keep the far end in the loop. If they feel ignored, they\'ll never sign.'],
              ['HENRY', 'Good point. I\'ll bring coffee and listen to them first, before I even mention bumps.'],
              ['GLORIA', 'Perfect. And let\'s spend the yard sale money on lawn signs. Slow down, kids at play.'],
              ['HENRY', 'Lawn signs. My brother-in-law has one of those too.'],
              ['HAZEL', 'Henry, maybe your brother-in-law should just move.']
            ],
            questions: [
              { id: 'L5.1', q: 'Why can the group not ask for speed bumps yet?', o: ['Too few households have signed.', 'The city has stopped installing them.', 'The far end of the street refused.', 'The school must approve them first.'] },
              { id: 'L5.2', q: 'How many more households need to sign before the group can make a formal request?', o: ['17', '23', '40', '37'] },
              { id: 'L5.3', q: 'Why do some families oppose speed bumps?', o: ['Their commute would become uncomfortable.', 'They would slow down the city\'s snowplows in winter.', 'They would take two years to install.', 'They would cost the families money.'] },
              { id: 'L5.4', q: 'What changes Henry\'s mind about the radar sign?', o: ['It could provide evidence to support their case.', 'It has worked well on his brother-in-law\'s street.', 'It can be borrowed for free for a whole year.', 'Drivers keep paying attention to it for months.'] },
              { id: 'L5.5', q: 'What does Gloria offer to do?', o: ['Look after the sign once it is installed', 'Pay for the battery for the radar sign', 'Ask the city to move the school crossing', 'Water the planters outside her house'] },
              { id: 'L5.6', q: 'Why does Hazel doubt the planter idea?', o: ['The money is too little and approval is needed.', 'Snowplows have damaged planters on other streets.', 'Planters do not actually slow drivers down.', 'Nobody on the street has offered to water them.'] },
              { id: 'L5.7', q: 'Why does Hazel want to keep the far end of the street informed?', o: ['They may only sign if they feel included.', 'They complained the most about the speeding.', 'They live closest to the school crossing.', 'They have offered to pay for the planters.'] },
              { id: 'L5.8', q: 'What is Hazel\'s tone in her final comment?', o: ['Playful and teasing', 'Angry and impatient', 'Worried and serious', 'Confused and unsure'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Should lawn watering stop?',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'f', skin: '#b07850', hair: '#2a1b12', shirt: '#6c3483', style: 'bun' } },
          segments: [{
            lines: [
              ['NARR', 'Every summer, many Canadian cities limit when residents can water their lawns, usually to one or two mornings a week. Now some are asking whether those limits go far enough, or whether lawn watering should be banned altogether in July and August.'],
              ['NARR', 'Geraldine Hume, a water engineer who has advised several municipalities, supports a summer ban. Her first argument is simple arithmetic.'],
              ['NARR', 'On a hot day, she says, lawn watering can account for up to half of all the water a city delivers. That peak, not the average, is what decides how large a city\'s treatment plants and pipes must be.'],
              ['NARR', '"Cities are spending millions to expand plants that sit half idle for ten months of the year," she says. "We\'re building for the lawn, not for the people."'],
              ['NARR', 'Her second argument is that a lawn does not actually need summer watering to survive. Grass naturally goes dormant in a drought, turning brown, and in most cases it recovers within a few weeks of the first good rain.'],
              ['NARR', 'She notes that many lawns on her own street went brown last August and were green again by late September.'],
              ['NARR', 'Hume admits that a brown lawn is a hard sell, and that many homeowners see it as a sign of neglect.'],
              ['NARR', 'A ban, she accepts, would need a public campaign to change those expectations. But the alternative, higher water bills to pay for bigger plants, would be even less popular.'],
              ['NARR', 'Gideon Ghosh, who runs a garden centre and chairs a regional landscaping association, opposes a full ban. His first argument is about trees.'],
              ['NARR', 'Lawns are rarely watered on their own, he says. The same sprinkler keeps young trees and shrubs alive, and a street tree that dies in its first dry summer costs hundreds of dollars to replace and years of shade to regrow.'],
              ['NARR', '"A ban written for lawns will end up killing trees," he says. "And trees are exactly what we need more of in a hotter city."'],
              ['NARR', 'His second argument is about fairness. Homeowners with private wells would be untouched by a city ban, while a family on a small city lot could be fined for watering the very same grass.'],
              ['NARR', '"Rules should treat neighbours the same way, whatever pipe their water comes through," he adds.'],
              ['NARR', 'Ghosh agrees that much of the water now sprayed on lawns is wasted, running into gutters or evaporating at midday. But his answer is smarter rules, not a ban: water only by hand or with drip hoses, and only in the early morning.'],
              ['NARR', 'Hume replies that rules like these are hard to enforce, since few cities have staff to check sprinklers at five in the morning. Ghosh counters that smart water meters, which several cities are already installing, can show exactly when a household is using water.'],
              ['NARR', 'Both, however, agree that the cheapest drop of water is the one that never needs to be treated, and both encourage residents to collect rainwater in barrels for their gardens.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['Whether summer lawn watering should be prohibited', 'How cities can pay for larger water treatment plants', 'Why lawns turn brown during hot, dry summers', 'Whether private wells should be regulated by cities'] },
              { id: 'L6.2', q: 'Why does Hume say cities are "building for the lawn"?', o: ['Watering on hot days decides how big systems must be.', 'Most of a city\'s water is used on lawns all year round.', 'Cities pay to water the lawns in public parks every day.', 'Treatment plants are sized for average daily use.'] },
              { id: 'L6.3', q: 'Why does Hume mention the lawns on her own street?', o: ['To show that dormant lawns usually bounce back', 'To show that homeowners there ignore the rules', 'To show how much water her neighbours used', 'To show that brown lawns lower house prices'] },
              { id: 'L6.4', q: 'What does Ghosh fear a lawn-watering ban would cause?', o: ['Trees would suffer along with the grass.', 'Garden centres would lose many of their customers.', 'Homeowners would dig private wells.', 'Lawns would never recover from drought.'] },
              { id: 'L6.5', q: 'What point does Ghosh make about private wells?', o: ['A ban would not be applied evenly.', 'Wells use more water than city connections.', 'Well owners should pay for smart meters.', 'Wells are usually found on small city lots.'] },
              { id: 'L6.6', q: 'How does Ghosh answer the concern about enforcement?', o: ['Technology could reveal when water is used.', 'Cities could hire staff to work early mornings.', 'Residents could report neighbours who break rules.', 'Rain barrels would make enforcement unnecessary.'] }
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
          passage: '<h3>Message</h3><p>Hi Garth,</p><p>Thanks for the birthday call last week, and sorry I sounded so distracted. Harvey had told us his news about an hour before, and my head was still spinning. He has finished his engineering degree, which we are thrilled about, but the job he was counting on in Waterloo fell through at the last minute, when the company froze all hiring for six months. So, as of the first of next month, he is moving back home.</p><p>Do not get me wrong, I am glad to have him. But he is twenty-three, not thirteen, and Howard and I have grown used to our quiet house. I keep picturing his size-twelve boots in the hallway and the fridge empty by Tuesday. Howard thinks we should charge him rent from day one, "so he learns that nothing in life is free." I worry that rent would only slow down his saving for a place of his own, which is the whole point.</p><p>We have agreed on a compromise of sorts: no rent for the first three months while he looks for work, but he does his own laundry, cooks dinner twice a week and keeps his old room tidy. After that, if he has a job, he pays $400 a month. What I have not told Howard yet is that I plan to put that money aside and hand it back to Harvey when he moves out, to help with a deposit.</p><p>You went through all this with your twins two years ago. How did you keep the peace? I remember you saying the hardest part was not the money but remembering that they were adults now. Did you set a curfew, or did you just ask them to text if they would be late? I suspect Harvey will laugh at the very word curfew.</p><p>Also, one practical question. Our driveway only fits two cars, and Harvey still has his old hatchback. He may take a part-time job at the hardware store in your neighbourhood while he searches for something in his field. Could he park at your place on the days he works?</p><p>Love,<br>Hilary</p>',
          questions: [
            { id: 'R1.1', q: 'Hilary apologizes for sounding distracted because', o: ['she had only just learned about Harvey\'s situation.', 'she was busy getting ready for her own birthday party.', 'Harvey had lost the job he held in Waterloo for a year.', 'she had been arguing with Howard about money.'] },
            { id: 'R1.2', q: 'The job in Waterloo did not happen because', o: ['the employer stopped hiring for a period.', 'Harvey had not yet finished his degree.', 'the company moved its office to another city.', 'Harvey decided to move back home instead.'] },
            { id: 'R1.3', q: 'Hilary mentions the boots and the fridge to show that', o: ['having an adult at home will change daily life.', 'Harvey is still as messy as he was at thirteen.', 'the family will need to spend more money on groceries.', 'Harvey\'s old room is too small for his things.'] },
            { id: 'R1.4', q: 'Hilary disagrees with Howard because she thinks rent would', o: ['delay the day he can afford to move out.', 'teach Harvey that nothing is free.', 'be unfair while he is still studying.', 'make Harvey less likely to cook dinner.'] },
            { id: 'R1.5', q: 'Hilary has not yet told Howard that she', o: ['means to save Harvey\'s rent for him.', 'has agreed to let Harvey live rent-free.', 'wants Harvey to do his own laundry.', 'plans to ask Garth for some advice.'] },
            { id: 'R1.6', q: 'Hilary expects that Harvey will', o: ['find the idea of a curfew funny.', 'refuse to text when he is going to be late.', 'find a job within three months.', 'want to live with Garth instead.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Hilary,</p><p>Congratulations to Harvey on the degree! What bad luck about Waterloo, but six months goes by quickly, and [[R1.7]] might well open up again by then.</p><p>I think your compromise is fair, and I love your secret plan. Howard gets his lesson, since Harvey will [[R1.8]], and Harvey gets a head start on [[R1.9]] when he moves out. Just make sure Howard hears about it from you before he hears about it from Harvey.</p><p>As for the twins, you remembered correctly. We never had a curfew. We only asked them to [[R1.10]], and it worked better than I expected. Treat him like a roommate you love, not a teenager.</p><p>And yes, of course Harvey can park in our driveway. In fact, if he gets that job at [[R1.11]], he could walk there from our place in five minutes.</p><p>Love,<br>Garth</p>',
          blanks: [
            { id: 'R1.7', o: ['the job he was hoping for', 'the job at the hardware store', 'a room in our house', 'a place at the university'] },
            { id: 'R1.8', o: ['still pay something each month', 'keep all the money he saves', 'never have to pay any rent', 'pay rent from his very first day'] },
            { id: 'R1.9', o: ['a deposit on a place of his own', 'buying a newer car of his own', 'paying off his student loans', 'a move to Waterloo early next year'] },
            { id: 'R1.10', o: ['let us know if they would be home late', 'be home by midnight unless we agreed otherwise', 'cook dinner for us twice a week', 'pay us back for their groceries'] },
            { id: 'R1.11', o: ['the hardware store', 'an engineering firm', 'the company in Waterloo', 'the garden centre'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Glenhaven Bike Share: Plans and Prices</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Plan</th><th>Price</th><th>Classic bike</th><th>E-bike</th></tr></thead><tbody>' +
            '<tr><td>Single ride</td><td>$3.50 per ride</td><td>One ride of up to 30 minutes</td><td>$3.50 plus $0.20 per minute</td></tr>' +
            '<tr><td>Day pass</td><td>$15</td><td>Unlimited rides of up to 45 minutes</td><td>$0.20 per minute</td></tr>' +
            '<tr><td>Monthly</td><td>$32</td><td>Unlimited rides of up to 45 minutes</td><td>$0.15 per minute</td></tr>' +
            '<tr><td>Annual</td><td>$120</td><td>Unlimited rides of up to 45 minutes</td><td>$0.10 per minute</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Classic rides that go over the time limit cost $2 for each extra 15 minutes or part of 15 minutes.</li><li>E-bike rides are charged by the minute from the start of each ride, on top of the plan price.</li><li>Riders aged 65 and over and full-time students pay half price for Monthly and Annual plans. The discount does not apply to single rides, day passes or e-bike minutes.</li><li>Bikes must be returned to a station. A bike left anywhere else is charged a $25 fee.</li><li>If a station is full, riders can tap the station screen to receive 15 extra minutes at no charge to reach another station.</li><li>All stations close from December 1 to March 31. Annual plans are paused during this time and extended by four months.</li><li>Riders must be at least 16. Riders aged 16 and 17 need a parent\'s permission to register.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Giselle,</p><p>Happy early birthday! I still cannot believe you turn 65 this September. You asked about bike share for your summer in Glenhaven. Since you will be riding a classic bike to work every weekday in June and July, about 25 minutes each way, the [[R2.1]] makes the most sense for you. Sadly, you will not get the half price, because [[R2.2]] until September.</p><p>On Saturdays you said you would like to take an e-bike to the market, about 20 minutes each way. With your plan, each Saturday trip there and back would add [[R2.3]] to your costs.</p><p>Be careful with the long river trail, though. It takes a full hour on a classic bike, so riding it without a stop at a station would cost you [[R2.4]] extra.</p><p>Finally, my son Hayden would love to ride with you. He is 16, so he [[R2.5]] before he can sign up.</p><p>Holly</p>',
          blanks: [
            { id: 'R2.1', o: ['Monthly plan', 'Annual plan', 'Day pass option', 'Single ride option'] },
            { id: 'R2.2', o: ['you will not turn 65', 'the plan will not be paid in full', 'the stations stay closed', 'the discount is for e-bikes'] },
            { id: 'R2.3', o: ['$6.00', '$8.00', '$4.00', '$3.00'] },
            { id: 'R2.4', o: ['$2', '$4', '$6', '$25'] },
            { id: 'R2.5', o: ['will need a parent\'s permission', 'is too young to use the service', 'can ride at half price', 'may ride only classic bikes'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A full-time student buys an Annual plan in May. She will pay', o: ['$60.', '$120.', '$16.', '$30.'] },
            { id: 'R2.7', q: 'A rider who leaves a bike on a street corner because the nearest station is full will', o: ['be charged $25.', 'lose her Annual plan.', 'pay $2 for each extra 15 minutes.', 'pay no fee, since the station was full.'] },
            { id: 'R2.8', q: 'In January, a rider with an Annual plan will', o: ['not be able to use the service.', 'pay half price for e-bike rides.', 'be charged for the unused months.', 'need to renew the plan early.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Bridges with Roofs</h3><p><b>A.</b> Covered bridges were once a common sight across eastern Canada. In the nineteenth and early twentieth centuries, hundreds were built in New Brunswick and Quebec alone, most of them by local crews using timber cut nearby. Builders often worked from simple patterns passed from one crew to the next, and many bridges were finished in a single summer. Their roofs and walls were not added for decoration, or to give travellers shelter from the rain, as many people assume. They were there to protect the wooden structure underneath. An uncovered timber bridge might begin to rot within fifteen years, while a covered one could last for eighty years or more. In a sense, the roof was the cheapest repair a community would ever make.</p><p><b>B.</b> Covered bridges also earned some colourful nicknames. In many places they were called "kissing bridges," because couples travelling by horse and buggy could enjoy a few private moments inside. Farmers complained that their cattle refused to enter the dark tunnel, so builders cut windows into the walls to let in light. In winter, workers had to shovel snow onto the bare wooden floors, because sleighs could not glide over dry planks. Local councils often posted signs at the entrance warning drivers not to cross faster than a walk. For children, the echo of hooves and wagon wheels inside the long wooden tunnel was part of the fun of a trip to town.</p><p><b>C.</b> As roads were improved for cars and heavy trucks, most covered bridges were replaced with steel and concrete. Many were lost to floods, ice jams and fires, and others were simply taken down when they were no longer considered safe. Most of these losses happened quietly, with little public attention, until only a handful were left. In New Brunswick, where there were once more than three hundred, only about fifty remain today. The longest of them, at Hartland, stretches nearly four hundred metres across a wide river and is still open to traffic, although large trucks must now use a newer bridge nearby. Many visitors stop to walk across it on foot.</p><p><b>D.</b> Today, many communities treat their covered bridges as treasures. Volunteer groups raise money for repairs, and some bridges have been strengthened with modern materials hidden inside the old frame. Tourism offices publish maps that lead visitors from one bridge to the next, and photographers arrive each fall to capture them against the changing leaves. In some villages, the local bridge appears on everything from town signs to the labels of homemade jam. Not everyone is convinced the effort is worthwhile, however. Restoring a single bridge can cost more than building a modern one, and some residents would rather see the money spent on roads they use every day.</p>',
          questions: [
            { id: 'R3.1', q: 'The main purpose of the roof was to keep the bridge from decaying.', fixed: true, a: 'A' },
            { id: 'R3.2', q: 'Openings were added so that animals would be less reluctant to cross.', fixed: true, a: 'B' },
            { id: 'R3.3', q: 'Only a small share of one province\'s covered bridges still stand.', fixed: true, a: 'C' },
            { id: 'R3.4', q: 'Some people question whether restoring old bridges is good value.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'Covered bridges in Quebec were usually longer than those in New Brunswick.', fixed: true, a: 'E' },
            { id: 'R3.6', q: 'Snow was sometimes deliberately spread over bridge floors.', fixed: true, a: 'B' },
            { id: 'R3.7', q: 'A covered bridge could last several times longer than an open one.', fixed: true, a: 'A' },
            { id: 'R3.8', q: 'Fire was the most common reason covered bridges were lost.', fixed: true, a: 'E' },
            { id: 'R3.9', q: 'Couples were once charged a small toll to cross some covered bridges.', fixed: true, a: 'E' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Going Around in Circles?</h3><p>When the town of Hollybrook announced plans to replace the four-way stop at Main and Mill Streets with a roundabout, the reaction was swift. More than six hundred residents signed a petition against it in a single week. Similar fights have broken out in towns across Canada, where roundabouts, long common in Europe, are still unfamiliar to many drivers.</p><p>Hendrik Vos, the traffic engineer who designed Hollybrook\'s plan, says the safety case is clear. In a roundabout, all traffic moves in the same direction at low speed, so the most dangerous kinds of crashes, head-on and side-impact collisions, become almost impossible. "People will still bump fenders," he says, "but they will rarely be badly hurt." He adds that roundabouts keep traffic moving, so drivers spend less time idling at stop signs, which saves fuel. Vos acknowledges that the first year is usually messy, with confused drivers and more minor collisions, but says those numbers drop quickly once people get used to it. He points to towns in other provinces that have built dozens of roundabouts over the past twenty years and kept every one.</p><p>Ginette Lacasse, who has taught driving lessons in Hollybrook for twenty-two years, is not convinced. Her concern is less about drivers than about people on foot. "At a four-way stop, every car comes to a full stop. In a roundabout, drivers are watching the cars to their left, not the pedestrian stepping off the curb," she says. She worries especially about older residents and about children walking to the elementary school two blocks away. She does not oppose roundabouts everywhere, she says, but believes this intersection is the wrong place for one.</p><p>Harjit Dhillon, who drives a delivery truck through the intersection several times a day, has mixed feelings. Small roundabouts can be difficult for long vehicles, he says, and he has seen trucks in other towns climb the curb in the centre. But he admits that the current four-way stop backs up badly at rush hour, sometimes for several blocks. "Every minute I sit in that line is a minute I am late for my next drop-off," he says. "If they build it big enough for trucks, I will be the first to say thank you."</p><p>The town\'s plan includes a raised centre area that large vehicles can drive over at low speed, and crosswalks set back from the circle so that drivers have time to see pedestrians before entering. The project is expected to cost $1.8 million, about $600,000 more than installing traffic lights, although Vos says the roundabout would cost much less to maintain because it has no signals to power or repair.</p><p>Council has delayed its final vote until after a public information evening next month, where residents can try a driving simulator. Councillors say they especially want to hear from people who walk and cycle through the intersection, not only those who drive. Lacasse says she will attend, but that no simulator can show what happens on a dark, icy morning in January.</p>',
          questions: [
            { id: 'R4.1', q: 'According to Vos, roundabouts are safer mainly because', o: ['they rule out the worst kinds of crashes.', 'drivers come to a full stop before entering.', 'they reduce the number of minor collisions right away.', 'drivers spend less time waiting at stop signs.'] },
            { id: 'R4.2', q: 'Lacasse\'s main concern is that', o: ['drivers may overlook people on foot.', 'older drivers will not learn the new rules.', 'roundabouts are too expensive for a small town.', 'trucks will not fit through the circle.'] },
            { id: 'R4.3', q: 'Lacasse would most likely support', o: ['a roundabout at a different intersection.', 'a ban on roundabouts across the province.', 'a lower speed limit near the school.', 'a simulator at every driving school.'] },
            { id: 'R4.4', q: 'Dhillon\'s support for the roundabout depends on', o: ['whether it is designed for long vehicles.', 'how much it costs compared with lights.', 'whether rush-hour traffic gets any worse.', 'how quickly drivers get used to it.'] },
            { id: 'R4.5', q: 'Lacasse\'s comment about January suggests that', o: ['a simulator misses real winter dangers.', 'the vote should be held in the winter instead.', 'she will not attend the information evening.', 'drivers make fewer mistakes in the dark.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I have lived two streets from Main and Mill for thirty years, and I signed the petition. After reading this article, I am less sure of myself. Mr. Vos makes a good point that roundabouts [[R4.6]], and I had not realized that the town\'s design includes [[R4.7]] for delivery trucks like Mr. Dhillon\'s.</p><p>Still, Ms. Lacasse\'s worry about [[R4.8]] is the one that keeps me up at night, since my grandchildren walk that way every morning. I am glad the plan places the crosswalks [[R4.9]].</p><p>I also wish the article had said more about cost. Spending an extra $600,000 is a lot for a town our size, even if [[R4.10]]. I will be at the information evening, and I hope my neighbours will be too.</p>',
          blanks: [
            { id: 'R4.6', o: ['make serious crashes very rare', 'stop drivers from ever bumping fenders', 'are cheaper to build than traffic lights', 'are already common in most Canadian towns'] },
            { id: 'R4.7', o: ['a centre area they can drive over', 'a separate lane around the circle', 'traffic lights at every entrance', 'a wider road along Mill Street'] },
            { id: 'R4.8', o: ['people walking near the circle', 'trucks climbing over the curb', 'the cost of the simulator', 'confused drivers in the first year'] },
            { id: 'R4.9', o: ['a short distance back from the circle', 'right beside the elementary school gate', 'inside the raised centre area', 'only on the Main Street side'] },
            { id: 'R4.10', o: ['upkeep would be cheaper over time', 'the province pays for most of it', 'drivers would save time at rush hour', 'the simulator is free to use'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>You live on the sixth floor of a large apartment building and work evening shifts at a hospital, finishing at 11:30 p.m. You ride your bicycle to work and have always kept it in the building\'s secure bike room. Last week, without any notice to tenants, the new building manager began locking the bike room at 8:00 p.m. every night. Bikes are not allowed in the elevator, so twice now you have had to carry your bike up six flights of stairs and keep it in your small apartment overnight.</p><p>Write an email to the property management company. In your email, do the following:</p><ul><li>Explain your situation and how the new rule affects you.</li><li>Describe how the change was introduced and why that concerns you.</li><li>Suggest a solution that would still keep the bike room secure.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your employer wants to give all staff one new benefit next year and is asking employees which option they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'An extra paid day off on each employee\'s birthday. However, staff would have to arrange their own coverage with coworkers, and the day would be lost if the birthday falls on a weekend or a holiday.' },
            { key: 'B', label: 'Option B', text: 'A $300 yearly wellness allowance for a gym membership, sports equipment or fitness classes. However, receipts must be handed in within 30 days, and the money cannot be used for anything else, such as massage or counselling.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe your favourite season of the year and explain why you enjoy it.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours says her sixteen-year-old son wants a part-time job at a grocery store, working three evenings a week and all day Saturday. He wants to save money for a car, but his marks in math and science have dropped this year, and he has final exams in two months. Your friend cannot decide whether to let him take the job. Give your friend advice about what she should do.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you helped raise money for a cause or took part in a fundraiser. What did you do, how did it go, and what would you do differently next time?' },
        {
          id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.', image: '<img src="tests/img/25/scene.jpg" alt="A charity car wash in a supermarket parking lot">',
          picture: 'Comic style scene of a charity car wash run by teenagers in a supermarket parking lot on a sunny Saturday morning. One hand painted banner hangs between two poles and reads exactly: CHARITY CAR WASH $10. 13 people in total. Activities: 1. A teenage boy sprays a red car with a garden hose. 2. Two teenage girls scrub a blue minivan with big soapy sponges, with buckets of suds at their feet. 3. A girl dries the side mirror of a silver car with a towel. 4. A man sits in a lawn chair at a folding table with a cash box, taking money. 5. An older man stands at the table handing the man a bill. 6. A woman at the edge of the road holds up a cardboard arrow sign and waves at passing cars. 7. A driver sits in the red car with his window rolled down, talking on his phone. 8. A woman stands on a small stepladder washing the roof of a tall white van. 9. A boy kneels and scrubs a tire with a brush. 10. A teenager carries a tall stack of folded towels. 11. A small child holds a dog on a leash, and the dog is drinking from a soapy bucket. About to happen cues: the boy with the hose is turning toward the open car window where the driver is on his phone and has not noticed; a full bucket of soapy water is balanced on the top step of the stepladder, right at the edge.'
        },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/25/scene.jpg" alt="A charity car wash in a supermarket parking lot">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your parents, both in their mid-seventies, are selling their farmhouse and moving to your town. They have asked you to help them choose where to live. Choose the option you prefer. In the next section, you will need to persuade a family member that your choice is better.',
          choices: [
            { key: 'A', title: 'Apartment in a seniors\' building', image: '<img src="tests/img/25/opt_A.jpg" alt="Photo: Apartment in a seniors\' building">', picture: 'A modern four storey apartment building with balconies and a covered front entrance, surrounded by neat flower beds.', facts: ['$2,100 a month; meals in the dining room are extra', 'Elevator, social room and a weekly bus to the shops', 'No pets allowed', 'Next opening in 4 months'] },
            { key: 'B', title: 'Small rented bungalow', image: '<img src="tests/img/25/opt_B.jpg" alt="Photo: Small rented bungalow">', picture: 'A small one storey brick bungalow with a single garage, a short driveway and a vegetable garden at the side.', facts: ['$1,700 a month', 'Garden and garage; pets welcome', 'They would handle snow and yard work themselves', '10-minute drive from your house'] }
          ],
          third: { key: 'C', title: 'Basement suite in your house', image: '<img src="tests/img/25/opt_C.jpg" alt="Photo: Basement suite in your house">', picture: 'A bright basement apartment with small high windows and its own outside door, reached by a steep set of concrete stairs.', facts: ['$900 a month, paid to you', 'Separate entrance; shared laundry room', 'Steep stairs down to the suite', 'Available next month'] },
          persuade: 'A family member thinks the basement suite would be better. Persuade this family member that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Two months ago, you promised your neighbour, who is overseas for her granddaughter\'s wedding, that you would be at her house this Sunday from 6:00 a.m. to 9:00 a.m. to let in a crew replacing her broken furnace. The crew\'s next opening after that is in five weeks, in the middle of winter. Today, your manager called. A major computer system update at work has been moved to this Sunday from 4:00 a.m. to 9:00 a.m., and you are the only person on your team who has been trained to run it.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to your neighbour. Explain why you cannot let the furnace crew in on Sunday morning.</p><p><b>Option B:</b> Talk to your manager. Explain why you cannot run the update on Sunday morning.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town is considering a bylaw that would require pet cats to be kept indoors or on a leash when they are outside, with a $100 fine for owners whose cats roam. Supporters, including many birdwatchers and gardeners, say free-roaming cats kill large numbers of songbirds and dig up flower beds. Many cat owners say their pets are happier outdoors and that the rule would be almost impossible to enforce.</p><p>Town council has asked residents for their views before it votes next month. Should the town require cats to be kept indoors or on a leash? Explain your reasons.</p>' },
        {
          id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are at a garden centre and see this unusual bird feeder for $95. Call your friend, who lives in a tenth-floor apartment with a small balcony and has a curious cat. The building\'s rules do not allow anything to hang outside a balcony railing. Describe the bird feeder and explain whether you think your friend should buy it.', image: '<img src="tests/img/25/object.jpg" alt="An unusual bird feeder shaped like a small barn">',
          picture: 'One wooden bird feeder shaped like a small red barn, standing on a display table in a garden centre with a price tag that reads $95. Unusual features, all clearly visible: 1. a small camera lens set into the peak of the roof; 2. a solar panel covering one side of the roof; 3. a tiny bird bath built into the top of the roof; 4. a long metal chain with a big hook for hanging it; 5. a perch bar that spins when a heavy animal lands on it; 6. a clear seed tank in the middle showing the seed level; 7. a small bell hanging under the floor.'
        }
      ]
    }
  });
})();
