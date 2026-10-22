/* Rowe CELPIP Mock Exam: Test 22 content.
   Original practice material written in the CELPIP-General format. Not official CELPIP content.
   Difficulty: slightly above the real test (CLB 9 to 11 items mixed with some CLB 7 to 8).
   Authoring rule: in every multiple-choice item, the CORRECT option is listed FIRST.
   The exam engine shuffles option order with a fixed seed, so the order on screen is stable.
   Items marked fixed:true keep their order and use "a" (a letter) for the answer. */
(function () {
  window.MOCK_TESTS = window.MOCK_TESTS || [];

  /* Speaking pictures are image files in tests/img/22/ (scene, object, opt_A to opt_C). */
  window.MOCK_TESTS.push({
    id: '22',
    title: 'Mock Test 22',
    note: 'Original practice content in the CELPIP-General format. Written slightly above real test difficulty.',

    /* =================== LISTENING =================== */
    listening: {
      practice: {
        id: 'LP', title: 'Practice Task', setting: 'store',
        instructions: 'This practice task will not be scored. Listen to the short conversation, then answer one question. Use it to check that you can hear the audio clearly.',
        cast: { AUGUSTIN: { name: 'Augustin', g: 'm', skin: '#c68642', hair: '#1d1410', shirt: '#1f618d', style: 'short' }, BREE: { name: 'Bree', g: 'f', skin: '#f2cfb0', hair: '#a0522d', shirt: '#7d3c98', style: 'long' } },
        segments: [{
          lines: [
            ['AUGUSTIN', 'Look, this ten-kilo bag of rice is on sale for eighteen dollars. That works out way cheaper per kilo.'],
            ['BREE', 'Sure, but where would it go? The pantry\'s jammed, and remember what happened to the last big bag?'],
            ['AUGUSTIN', 'Ugh, the little moths. I\'d honestly forgotten. Fine, two of the small ones, and we\'ll stock up again when we run low.'],
            ['BREE', 'Deal. And let\'s pick up a container with a proper lid before we buy in bulk again.']
          ],
          questions: [
            { id: 'LP.1', q: 'Why does Augustin decide against the large bag?', o: ['A similar purchase went badly before.', 'The sale price is about to end soon.', 'The small bags cost less per kilo.', 'They have already run low on rice.'] }
          ]
        }]
      },
      parts: [
        {
          id: 'L1', title: 'Part 1: Listening to Problem Solving', setting: 'office',
          instructions: 'In this section, you will hear a conversation in three sections. You will hear each section only once. After each section, you will hear two to three questions. Choose the best answer to each question.',
          cast: { BEATRIZ: { name: 'Beatriz', g: 'f', skin: '#d6a07a', hair: '#2a1b12', shirt: '#b03a2e', style: 'curly' }, ALASTAIR: { name: 'Alastair', g: 'm', skin: '#f0c9a6', hair: '#8b5a2b', shirt: '#1e8449', style: 'short' } },
          segments: [
            {
              lines: [
                ['BEATRIZ', 'Alastair, sit down for a sec. The builder just called about the townhouse. They\'re not handing over the keys on July second after all.'],
                ['ALASTAIR', 'Please tell me it\'s only a couple of days.'],
                ['BEATRIZ', 'It\'s nearly two weeks. The inspector flagged a problem with the stairs, and they can\'t get the final sign-off until it\'s fixed. They\'re saying July fifteenth now.'],
                ['ALASTAIR', 'And our buyers take this house on June thirtieth. So we\'re out on the street, with two kids and a dog, for over two weeks?'],
                ['BEATRIZ', 'Pretty much. Plus a houseful of furniture.'],
                ['ALASTAIR', 'Can\'t we just push our closing date back?'],
                ['BEATRIZ', 'I already asked our lawyer. The buyers\' mortgage is locked in for the thirtieth, and their bank won\'t move it. And if we dig our heels in, we\'re the ones breaking the contract.'],
                ['ALASTAIR', 'Okay. So neither date\'s budging. We\'ll have to find some way to bridge the gap in between.'],
                ['BEATRIZ', 'Exactly. And sooner rather than later, because everything around here gets snapped up in July.']
              ],
              questions: [
                { id: 'L1.1', q: 'Why has the move into the townhouse been delayed?', o: ['A building issue must be repaired before approval.', 'The inspector has not yet been able to visit the site.', 'The buyers have asked to move in two weeks later.', 'The lawyer found a mistake in the sale contract.'] },
                { id: 'L1.2', q: 'Why can the closing date for their house not be changed?', o: ['The buyers\' bank loan is tied to that exact date.', 'Their lawyer is away on holiday until the end of June.', 'The builder needs the money by that date.', 'The buyers want to move in even earlier.'] },
                { id: 'L1.3', q: 'What does Alastair conclude at the end of this section?', o: ['They must arrange a temporary place to live.', 'They should try to cancel the sale of their house.', 'They should ask the builder to finish the work much faster.', 'They will have to move into the townhouse early.'] }
              ]
            },
            {
              lines: [
                ['ALASTAIR', 'Okay, options. Your sister\'s got that big place in Antigonish. She\'s offered before.'],
                ['BEATRIZ', 'She has, and she means it. But it\'s an hour and a quarter each way, and the kids have day camp here until the twelfth. That\'s a lot of time in the car.'],
                ['ALASTAIR', 'True. What about one of those furnished rentals? Somewhere with a yard for Waffles.'],
                ['BEATRIZ', 'I looked last night. In July, anything that takes dogs is about two hundred a night, if you can find one at all. Most are booked solid.'],
                ['ALASTAIR', 'Ouch. And the furniture? We can\'t exactly haul the sectional to your sister\'s.'],
                ['BEATRIZ', 'The movers can hang on to it. They\'ll keep the truck loaded in their warehouse and deliver whenever we\'re ready. It\'s a flat fee, not by the day, so that part\'s easy.'],
                ['ALASTAIR', 'So the furniture\'s sorted. It\'s just us, the kids and the dog who need a roof.'],
                ['BEATRIZ', 'Wait, here\'s a thought. What if we ask the buyers to rent this place back to us for a couple of weeks?']
              ],
              questions: [
                { id: 'L1.4', q: 'Why is Beatriz reluctant to stay with her sister?', o: ['The children\'s plans would mean long daily drives.', 'Her sister does not have enough room for all of them.', 'The dog would not be welcome at her sister\'s.', 'Her sister has not offered to have them yet.'] },
                { id: 'L1.5', q: 'What does Beatriz say about short-term rentals?', o: ['Suitable ones are costly and hard to find.', 'Most of them do not allow dogs of any size.', 'They cost less if booked for two weeks.', 'They often include space for furniture.'] },
                { id: 'L1.6', q: 'How will the movers charge for keeping the furniture?', o: ['One set price, no matter how long it is kept', 'A daily rate charged until the new home is ready', 'Nothing, if it is delivered by the twelfth', 'About two hundred dollars for each night'] }
              ]
            },
            {
              lines: [
                ['BEATRIZ', 'Good news. Our agent talked to the buyers, and they\'re fine with it. Their apartment lease runs to the end of July anyway, so they\'re in no rush.'],
                ['ALASTAIR', 'What a relief. What do they want for it?'],
                ['BEATRIZ', 'A hundred a night. That basically covers their mortgage and insurance. I told them we\'d need fifteen nights.'],
                ['ALASTAIR', 'Didn\'t you see the builder\'s email this morning? The stairs are fixed already, so we get the keys a day early. Knock a night off that.'],
                ['BEATRIZ', 'Oh, I missed that. Even better. They did ask for one thing, though. Because of the dog, they want the carpets professionally cleaned before we hand the house over.'],
                ['ALASTAIR', 'That\'s fair, with Waffles shedding all over the place. Does anyone around here do that first thing in the morning?'],
                ['BEATRIZ', 'The place on Lansdowne opens at seven, I think. Their number\'s on the fridge.']
              ],
              questions: [
                { id: 'L1.7', q: 'How much will the couple pay the buyers in total?', o: ['$1,400', '$1,500', '$1,600', '$1,300'] },
                { id: 'L1.8', q: 'What will Alastair most likely do next?', o: ['Book a cleaning for their last morning', 'Ask his sister to look after the dog', 'Ask the movers to deliver a day sooner', 'Call the builder to confirm the new date'] }
              ]
            }
          ]
        },
        {
          id: 'L2', title: 'Part 2: Listening to a Daily Life Conversation', setting: 'store',
          instructions: 'You will hear a conversation followed by five questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { CLEANER: { name: 'Dry cleaner', g: 'f', skin: '#e3b28b', hair: '#3b2a20', shirt: '#117a65', style: 'bun' }, BILAL: { name: 'Bilal', g: 'm', skin: '#a9714b', hair: '#120c08', shirt: '#2c3e50', style: 'short' } },
          segments: [{
            lines: [
              ['CLEANER', 'Morning. Picking up?'],
              ['BILAL', 'Well, I picked this up yesterday, actually. It\'s my good wool coat. I brought it in because of a coffee stain on the sleeve, and, well, take a look.'],
              ['CLEANER', 'Oh dear. The stain\'s still there, and, hmm, the sleeves look shorter than they should.'],
              ['BILAL', 'They are shorter. It fit perfectly last week. Now my wrists stick out like I borrowed it from my little brother.'],
              ['CLEANER', 'Let me check the ticket. Okay, it was marked dry clean only, so it should never have gone near water. Somebody slipped up. I\'m really sorry.'],
              ['BILAL', 'I appreciate that. So what happens now? I paid four hundred and fifty dollars for it three years ago, and frankly, I\'d rather have the coat than the money.'],
              ['CLEANER', 'Unfortunately, once wool shrinks like this, there\'s no going back. What we do is pay the value of the item based on its age, and for a coat that\'s three years old, our policy is half the original price.'],
              ['BILAL', 'Half? I\'ve looked after it carefully. It was practically new.'],
              ['CLEANER', 'I understand. I can\'t bend the policy myself, but the owner sometimes makes exceptions. She\'s in on Thursday.'],
              ['BILAL', 'Thursday\'s fine. But there\'s a bigger problem. I\'m flying to Fort McMurray on Saturday for a job interview, and it\'s minus thirty up there this week. This was my only warm coat.'],
              ['CLEANER', 'Then let\'s not wait for Thursday on that part. I\'ll give you the standard payment now, and if the owner agrees to top it up, she can send you the difference.'],
              ['BILAL', 'That would help. Do I need the receipt from when I bought it?'],
              ['CLEANER', 'It\'d make it a lot easier for her to say yes. A photo of it, or a bank statement, would do.'],
              ['BILAL', 'It\'s probably buried in my email somewhere. And what about the cleaning I paid for? Twenty-two dollars, for a stain you didn\'t even get out.'],
              ['CLEANER', 'Of course. I\'ll add that to today\'s payment.'],
              ['BILAL', 'Okay. Thanks for being straight with me. Most places would\'ve just blamed the label.']
            ],
            questions: [
              { id: 'L2.1', q: 'Why has Bilal come back to the shop?', o: ['His coat came back in worse shape than before.', 'He forgot to pick up his coat the day before.', 'The shop gave him someone else\'s coat.', 'He wants the coat cleaned again before a trip.'] },
              { id: 'L2.2', q: 'What does the clerk say caused the damage?', o: ['The care instructions were not followed.', 'The coffee stain was too old to treat.', 'The wool in the coat was of poor quality.', 'Bilal had washed the coat at home before.'] },
              { id: 'L2.3', q: 'In total, how much will the shop give Bilal today?', o: ['$247', '$225', '$472', '$450'] },
              { id: 'L2.4', q: 'Why does the clerk decide not to wait for the owner?', o: ['Bilal needs a warm coat before his trip.', 'The owner will not be in until Saturday.', 'Bilal cannot find his original receipt.', 'The policy does not allow any exceptions.'] },
              { id: 'L2.5', q: 'What does Bilal\'s last remark suggest?', o: ['He values the way the clerk owned up to the mistake.', 'He thinks the label on the coat was wrong.', 'He plans to take his business elsewhere.', 'He expects the owner to turn him down.'] }
            ]
          }]
        },
        {
          id: 'L3', title: 'Part 3: Listening for Information', setting: 'studio',
          instructions: 'You will hear a conversation followed by six questions. You will hear the conversation only once. Choose the best answer to each question.',
          cast: { HOST: { name: 'Radio host', g: 'm', skin: '#8d5a3b', hair: '#1d1410', shirt: '#5d6d7e', style: 'bald' }, AGNIESZKA: { name: 'Agnieszka Wolanski', g: 'f', skin: '#f2cfb0', hair: '#d9b56a', shirt: '#a04000', style: 'long' } },
          segments: [{
            lines: [
              ['HOST', 'My guest today is Agnieszka Wolanski, who has spent nine years raising puppies that go on to become guide dogs. Agnieszka, how does that actually work?'],
              ['AGNIESZKA', 'The training school breeds the puppies, and at about eight weeks, each one goes to a volunteer family like mine. We keep them for roughly fourteen months. The formal training comes later. Our job is to show them the world.'],
              ['HOST', 'Show them the world?'],
              ['AGNIESZKA', 'Buses, elevators, crowded malls, a baby wailing in a restaurant. A guide dog can\'t flinch every time a hand dryer roars, so it needs to have seen it all, calmly, while it\'s young.'],
              ['HOST', 'Can you just walk into a restaurant with a puppy?'],
              ['AGNIESZKA', 'With the school\'s jacket on, most places welcome us. Every so often someone turns us away, and honestly, I don\'t make a fuss. The puppy\'s still learning, and a scene is the last thing it needs.'],
              ['HOST', 'What does it cost a family?'],
              ['AGNIESZKA', 'Very little in money. The school covers food and vet bills. What it costs you is time.'],
              ['AGNIESZKA', 'A young puppy can\'t be left alone for more than a couple of hours, so people who work full time usually need a flexible employer or someone at home.'],
              ['HOST', 'And after fourteen months, you hand the dog back. How do you do that?'],
              ['AGNIESZKA', 'Badly, the first time. I cried the whole drive home. But a few months later, I was invited to the graduation, and I watched my dog lead a young man across a busy intersection. After that, I understood what I\'d been part of.'],
              ['HOST', 'Does every puppy make it?'],
              ['AGNIESZKA', 'Not even close. Only about half pass the final assessment. Some are too easily distracted, some get jumpy in traffic.'],
              ['AGNIESZKA', 'But none of them go to waste. Many become therapy dogs in hospitals, and the rest are adopted, often by the families who raised them.'],
              ['HOST', 'Has that happened to you?'],
              ['AGNIESZKA', 'Once. Our third puppy, Pickle, simply could not ignore a squirrel. She\'s snoring under my desk as we speak.'],
              ['HOST', 'I hear the school is looking for more families.'],
              ['AGNIESZKA', 'Badly. They\'ve got more puppies than homes this spring. Anyone curious can come to an information evening at the Courtenay office next Tuesday. Bring your questions, but leave your own dog at home.']
            ],
            questions: [
              { id: 'L3.1', q: 'What does Agnieszka see as the main purpose of her role?', o: ['Getting puppies used to everyday surroundings', 'Teaching puppies how to guide people safely', 'Training puppies to obey formal commands', 'Choosing which puppies should be bred'] },
              { id: 'L3.2', q: 'Why does Agnieszka avoid arguing when a restaurant refuses her?', o: ['A tense situation could unsettle the puppy.', 'Most restaurants are allowed to refuse dogs.', 'The school has told her to leave quietly.', 'The puppy is not wearing its school jacket.'] },
              { id: 'L3.3', q: 'What does Agnieszka imply about people with full-time jobs?', o: ['They may need support from others to take part.', 'They are not permitted to raise these puppies.', 'They should pay for the puppy\'s food themselves.', 'They make better raisers because of their routines.'] },
              { id: 'L3.4', q: 'Why does Agnieszka mention the graduation?', o: ['It helped her accept giving the dog back.', 'It was where she first met the young man.', 'It was when she learned her dog had failed.', 'It was the reason she started volunteering.'] },
              { id: 'L3.5', q: 'What happens to puppies that fail the final assessment?', o: ['They are given other roles or new homes.', 'They are sent back for more formal training.', 'They are kept by the school for breeding.', 'They stay at the school\'s Courtenay office.'] },
              { id: 'L3.6', q: 'What can be inferred about Pickle?', o: ['She did not qualify and was kept by Agnieszka.', 'She is now being trained as a therapy dog.', 'She was Agnieszka\'s first puppy.', 'She works with the young man at the crossing.'] }
            ]
          }]
        },
        {
          id: 'L4', title: 'Part 4: Listening to a News Item', setting: 'news',
          instructions: 'You will hear a news item followed by five questions. You will hear the news item only once. Choose the best answer to each question.',
          cast: { NEWS: { name: 'News reader', g: 'f', skin: '#5c3a21', hair: '#120c08', shirt: '#4a235a', style: 'bun' } },
          segments: [{
            lines: [
              ['NEWS', 'Starting next Monday, the emergency department at Antler Lake District Hospital will close every night from eight in the evening until eight in the morning, for at least the rest of the summer.'],
              ['NEWS', 'The regional health authority says it simply does not have enough doctors and nurses to keep the department open around the clock. Two physicians retired this spring, and so far, recruitment efforts have brought in just one replacement.'],
              ['NEWS', 'During the overnight closure, the nearest open emergency department will be in Kestrel Falls, roughly forty-five minutes away by car.'],
              ['NEWS', 'Officials stress that anyone with a life-threatening emergency, such as chest pain or trouble breathing, should call nine-one-one rather than drive themselves. Paramedics will take patients directly to the nearest open hospital.'],
              ['NEWS', 'For less urgent problems, residents are urged to call the provincial health line at eight-one-one, where a nurse can give advice at any hour.'],
              ['NEWS', 'The town\'s walk-in clinic has also agreed to stay open two hours later on weekdays, until nine in the evening.'],
              ['NEWS', 'Local reaction has been swift and angry.'],
              ['NEWS', 'Mayor Audrey Kessler says a town of nine thousand, which swells to several times that size when cottagers arrive, cannot be left without overnight care. She points out that the highway to Kestrel Falls is regularly shut down by summer collisions.'],
              ['NEWS', 'The health authority insists the closure is temporary. It hopes to restore overnight service by the fall, once two newly hired nurses complete their orientation.'],
              ['NEWS', 'A public meeting on the changes will be held at the town hall on Thursday evening.']
            ],
            questions: [
              { id: 'L4.1', q: 'What is the news item mainly about?', o: ['Shorter emergency hours at a local hospital', 'A new walk-in clinic opening in the town', 'Problems with ambulance service on the highway', 'A plan to move a hospital to Kestrel Falls'] },
              { id: 'L4.2', q: 'Why is the emergency department closing at night?', o: ['The hospital is short of medical workers.', 'Two new nurses are still being trained.', 'The building needs repairs over the summer.', 'Paramedics now take patients elsewhere.'] },
              { id: 'L4.3', q: 'What are people with serious emergencies told to do?', o: ['Request an ambulance instead of driving', 'Phone a nurse before leaving their home', 'Visit the walk-in clinic in the evening', 'Drive straight to the hospital in Kestrel Falls'] },
              { id: 'L4.4', q: 'Why does the mayor mention the highway?', o: ['To suggest that reaching the other hospital may be unreliable', 'To explain why cottagers visit the town in the summer', 'To show where the walk-in clinic will be moved to', 'To argue that paramedics drive too fast on that road'] },
              { id: 'L4.5', q: 'What is the return of overnight service linked to?', o: ['New employees finishing their training', 'The town finding a second replacement doctor', 'The end of the summer cottage season', 'A vote at Thursday\'s public meeting'] }
            ]
          }]
        },
        {
          id: 'L5', title: 'Part 5: Listening to a Discussion', setting: 'meeting', board: 'House meeting: winter bills', video: true,
          instructions: 'You will watch a two to three minute video of a discussion, followed by eight questions. You will watch the video only once. Choose the best answer to each question.',
          cast: { ABIGAIL: { name: 'Abigail', g: 'f', skin: '#f0c9a6', hair: '#c0392b', shirt: '#1abc9c', style: 'long' }, BARNABY: { name: 'Barnaby', g: 'm', skin: '#e8c3a0', hair: '#4a3020', shirt: '#34495e', style: 'short' }, AYESHA: { name: 'Ayesha', g: 'f', skin: '#8d5a3b', hair: '#120c08', shirt: '#d68910', style: 'curly' } },
          segments: [{
            lines: [
              ['ABIGAIL', 'Okay, house meeting. The gas bill came, and it\'s three hundred and sixty dollars. For one month.'],
              ['BARNABY', 'Three sixty? Last January it was barely two hundred. What on earth changed?'],
              ['AYESHA', 'Well, the rate went up a little. But mostly, I think, it\'s me. I\'m home all day now.'],
              ['AYESHA', 'Since my company went remote in the fall, the heat\'s running from morning till night.'],
              ['ABIGAIL', 'Nobody\'s blaming you. But maybe splitting everything three ways doesn\'t quite work anymore.'],
              ['BARNABY', 'Agreed. Ayesha, what if you covered half the gas bill, and we split the other half?'],
              ['AYESHA', 'Half? That seems steep. The house still gets heated overnight for all three of us.'],
              ['ABIGAIL', 'She\'s got a point. Most of the heat goes into keeping this place warm at night anyway.'],
              ['BARNABY', 'Fair enough. Then an even three-way split, and Ayesha adds fifty a month on top?'],
              ['AYESHA', 'That I can live with. Honestly, my employer gives us a home office allowance. I could put it toward that.'],
              ['ABIGAIL', 'Great. But the bigger issue is that this house leaks heat like a sieve.'],
              ['ABIGAIL', 'There\'s a draft from the back door you could practically fly a kite in.'],
              ['BARNABY', 'Then let\'s ask the landlord for new windows. They\'re older than the three of us put together.'],
              ['AYESHA', 'He\'ll never pay for windows in the middle of a lease. But weatherstripping the doors costs maybe forty dollars.'],
              ['BARNABY', 'Forty dollars of our money, fixing his house? That doesn\'t sit right with me.'],
              ['AYESHA', 'Maybe not, but forty dollars once beats an extra hundred every month until April.'],
              ['ABIGAIL', 'And I\'ll still email him about the windows. Better to have it in writing, in case anything comes up later.'],
              ['BARNABY', 'Okay. What about one of those smart thermostats? My cousin swears his paid for itself in a single winter.'],
              ['AYESHA', 'They\'re about two hundred dollars, though. And who knows if we\'ll even be living here next year.'],
              ['ABIGAIL', 'We could take it with us when we go. They just unscrew from the wall.'],
              ['BARNABY', 'Or we turn the heat down to seventeen at night and grab an extra blanket. Costs nothing.'],
              ['AYESHA', 'Seventeen? I\'d be wearing a toque in bed. Can we meet somewhere in the middle?'],
              ['ABIGAIL', 'Eighteen at night, twenty during the day. And whoever\'s cold puts on a sweater before touching the dial.'],
              ['BARNABY', 'Deal. Let\'s try that for a month before we start spending money on gadgets.'],
              ['AYESHA', 'Fine by me. If next month\'s bill is still awful, we revisit the thermostat idea.'],
              ['ABIGAIL', 'Perfect. Barnaby, you\'re the handy one. Hardware store this weekend?'],
              ['BARNABY', 'I\'m there Saturday for paint anyway. Ayesha, since it was your bright idea, keep your Sunday free.']
            ],
            questions: [
              { id: 'L5.1', q: 'What does Ayesha see as the main reason the bill went up?', o: ['A change in her job keeps the heat on all day.', 'The gas company has doubled its rates since last year.', 'The landlord turned the heat up in the fall.', 'Barnaby has set the thermostat too high at night.'] },
              { id: 'L5.2', q: 'Why does Abigail support Ayesha\'s objection?', o: ['Much of the heating benefits everyone equally.', 'Ayesha already pays more rent than the others.', 'The house is coldest in the middle of the day.', 'Ayesha\'s employer will pay the whole gas bill.'] },
              { id: 'L5.3', q: 'How will the gas bill be shared from now on?', o: ['Equally, plus a set extra amount from Ayesha', 'Ayesha pays half and the others a quarter each', 'Ayesha\'s employer pays a third of the total', 'By how many hours each person is at home'] },
              { id: 'L5.4', q: 'How does Barnaby feel about paying for weatherstripping?', o: ['It seems unfair to pay for the landlord\'s repair.', 'He doubts it will do much to stop the draft.', 'He believes it will cost far more than forty dollars.', 'He would rather wait until the landlord replies.'] },
              { id: 'L5.5', q: 'Why does Abigail want to email the landlord?', o: ['To keep a record of the request', 'To ask him to pay for the weatherstripping', 'To complain about the higher gas rate', 'To find out when the lease will end'] },
              { id: 'L5.6', q: 'What is Ayesha\'s concern about the smart thermostat?', o: ['They may not stay long enough for it to pay off.', 'Her cousin\'s thermostat did not save any money.', 'It cannot be taken off the wall once installed.', 'The landlord might refuse to let them install it.'] },
              { id: 'L5.7', q: 'What do they agree about the night temperature?', o: ['It will be a little warmer than Barnaby proposed.', 'It will be seventeen degrees, as Barnaby said.', 'It will be the same as during the day.', 'It will be decided after the next bill.'] },
              { id: 'L5.8', q: 'What does Barnaby\'s last remark suggest?', o: ['He will buy the door seals and wants Ayesha\'s help.', 'He plans to paint the doors instead of sealing them.', 'He expects Ayesha to pay for Saturday\'s paint.', 'He would rather Abigail did the shopping.'] }
            ]
          }]
        },
        {
          id: 'L6', title: 'Part 6: Listening to Viewpoints', setting: 'classroom', board: 'Switching off after work',
          instructions: 'You will hear a report about a topic, followed by six questions. You will hear the report only once. Choose the best answer to each question.',
          cast: { NARR: { name: 'Reporter', g: 'm', skin: '#c98c64', hair: '#2a1b12', shirt: '#7b241c', style: 'short' } },
          segments: [{
            lines: [
              ['NARR', 'When the workday ends, does the work phone go quiet? For many Canadians, the answer is no. Emails, texts and messaging apps follow employees home, onto the sofa and sometimes into bed.'],
              ['NARR', 'One province already requires larger employers to have a written policy on disconnecting from work. Now some advocates want to go further, with a legal right to ignore work messages after hours, without consequences.'],
              ['NARR', 'Bethany Adjei, a workplace psychologist in Gananoque, strongly supports such a law. Her first argument is about health. Employees who keep checking messages in the evening, she says, never fully recover from the day, and over months, that wears people down.'],
              ['NARR', '"It isn\'t the message itself that does the damage," she explains. "It\'s the low hum of being on call, of wondering what might be waiting for you."'],
              ['NARR', 'Her second argument is that voluntary policies rarely hold up. When a manager sends an email at ten at night, even if nobody is required to answer, the most ambitious employees will. Before long, everyone feels they have to keep pace.'],
              ['NARR', 'A law, in her view, protects the people least able to say no, such as new hires and workers on short contracts.'],
              ['NARR', 'Adjei concedes that some jobs, from hospital work to emergency repairs, genuinely need people on call. But those workers, she argues, should be scheduled and paid for it, not simply expected to be reachable.'],
              ['NARR', 'Ambrose Tallis, who runs a small marketing agency with clients in several time zones, opposes a law. His first point is that flexibility cuts both ways.'],
              ['NARR', 'Several of his employees, he says, leave at three to collect their children and finish their work later in the evening. A strict after-hours rule could make that arrangement harder, not easier.'],
              ['NARR', '"My team didn\'t ask for a law," he says. "They asked to be trusted to manage their own time."'],
              ['NARR', 'His second point is that small businesses would bear the heaviest burden. A large company can hire an evening team, he notes.'],
              ['NARR', 'But when a client on the West Coast has an urgent problem after his staff have gone home, a firm of twelve people has nobody else to send.'],
              ['NARR', 'Tallis does acknowledge that some managers abuse after-hours messaging. His remedy is a cultural one: managers should schedule emails to arrive the next morning, and companies should spell out in writing which messages are truly urgent.'],
              ['NARR', 'Adjei replies that scheduled emails are a nice gesture, but that they depend entirely on the goodwill of each individual manager, which is precisely what a law is meant to replace.'],
              ['NARR', 'Tallis counters that rules written with large offices in mind rarely fit small firms, and that he would rather see a short list of clear expectations than a long list of penalties.'],
              ['NARR', 'Despite their differences, both agree on one point: no employee should ever be disciplined or passed over for failing to answer a message that happened to arrive at midnight, whatever the law ends up saying.']
            ],
            questions: [
              { id: 'L6.1', q: 'What is the report mainly about?', o: ['A proposed right to ignore work messages after hours', 'How managers can write clearer emails to employees', 'Why more Canadians are choosing to work from home these days', 'Whether small firms should hire evening staff'] },
              { id: 'L6.2', q: 'According to Adjei, what makes evening messages harmful?', o: ['Never being fully off duty stops proper rest.', 'Reading screens at night disturbs sleep.', 'Late messages are usually about problems.', 'Answering them takes up most of the evening.'] },
              { id: 'L6.3', q: 'Why does Adjei mention the most ambitious employees?', o: ['To show how optional replies become expected of everyone', 'To argue that they deserve to be paid extra for evening work', 'To suggest that they send most of the late messages', 'To explain why new hires work harder than others'] },
              { id: 'L6.4', q: 'What does Adjei accept about some jobs?', o: ['They truly require staff to be available.', 'They should be exempt from any new law.', 'They are already paid well for evening work.', 'They are mostly done by workers on contracts.'] },
              { id: 'L6.5', q: 'Why does Tallis mention employees who leave at three?', o: ['A strict rule could take away a schedule they value.', 'They are the ones who deal with West Coast clients.', 'Their early departures leave his office short-staffed.', 'They asked him to support the proposed new law.'] },
              { id: 'L6.6', q: 'What is Adjei\'s objection to Tallis\'s remedy?', o: ['It relies on each manager choosing to follow it.', 'Scheduled emails still arrive while people sleep.', 'It is too complicated for small businesses.', 'It makes urgent messages harder to notice.'] }
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
          passage: '<h3>Message</h3><p>Hi Benedict,</p><p>Great news, I think! You asked me to keep an ear to the ground for a place to rent before you start at the hospital in September, and something has turned up right under my nose. My next-door neighbours, the Ferraros, are renting out their basement suite. Their son lived there until he moved to Calgary last month, so it has just been repainted and is in very good shape.</p><p>Here is the scoop. It is a one-bedroom with its own entrance at the side of the house, a full kitchen and a small patio. Rent is $1,350 a month, which includes heat and water, but you would set up your own internet and pay the electricity, which Mrs. Ferraro says runs about $60 a month in winter. They want first and last month\'s rent up front. It is available from August 15, but they would hold it until September 1 if you paid an extra half month to keep it.</p><p>Now, the catches. The ceiling is on the low side; at six foot three, you would have to mind your head in the bathroom doorway. Also, the Ferraros are early risers, and their two young grandchildren visit most weekends, so it will not always be quiet upstairs. Since you will be on night shifts for your first three months, I thought you should know that before you get your hopes up. On the bright side, the number 14 bus stops at the end of our street and goes straight to the hospital in about twenty minutes, so you could leave the car at home.</p><p>The Ferraros are lovely, but they are cautious after a bad experience with a tenant years ago. They have asked for two references, ideally a past landlord and an employer, and they would like to meet you on a video call before deciding. Three other people have already called about the suite, so I would not sit on this for long.</p><p>If you want, I can walk through the suite with my phone on Thursday evening so you can see it properly. Just let me know, and send me your new number while you are at it, because my texts to your old one keep bouncing back.</p><p>Hugs,<br>Alma</p>',
          questions: [
            { id: 'R1.1', q: 'The suite has become available because', o: ['a member of the owners\' family moved away.', 'the Ferraros\' son is starting at the hospital.', 'the last tenant caused problems.', 'the Ferraros are planning to move to Calgary.'] },
            { id: 'R1.2', q: 'On top of the rent, Benedict would have to pay for', o: ['power and an internet connection.', 'heat during the colder winter months.', 'water and the use of the small patio.', 'a deposit before the video call.'] },
            { id: 'R1.3', q: 'If Benedict wants to move in on September 1, he will need to', o: ['pay more to have the suite kept for him.', 'pay his first month\'s rent by August 15.', 'stay somewhere else until the suite is painted.', 'send his references before the end of July.'] },
            { id: 'R1.4', q: 'Alma mentions Benedict\'s night shifts because', o: ['he may be trying to sleep while the house is noisy.', 'the bus does not run at the times he will need it.', 'the Ferraros would prefer a tenant who works days.', 'he will need to drive home late in the evening.'] },
            { id: 'R1.5', q: 'Alma suggests that the bus route', o: ['would make driving to work unnecessary.', 'only runs during the daytime hours.', 'takes longer than the trip by car.', 'stops right outside the suite\'s side entrance.'] },
            { id: 'R1.6', q: 'Alma advises Benedict to', o: ['move quickly because others are interested.', 'visit the suite before agreeing to a call.', 'ask the Ferraros to lower the monthly rent.', 'find references who live near the Ferraros.'] }
          ],
          reply: '<h3>Reply</h3><p>Hi Alma,</p><p>You are a star. The suite sounds ideal, and the price beats anything I have found online, especially since [[R1.7]] are already covered. I have done the math, and even with the electricity, it fits my budget.</p><p>I would love to start on September 1, so I am happy to pay [[R1.8]] to keep it for me. As for the noise, don\'t worry. I sleep with earplugs anyway, and by the time [[R1.9]], I will be on day shifts, so the grandchildren will hardly bother me.</p><p>I will ask my old landlord in Stephenville and [[R1.10]] to write the references this week. And yes, please do the tour on Thursday! I am especially curious about [[R1.11]]; I have hit my head on enough doorways for one lifetime.</p><p>My new number is below. Sorry about that! I changed providers last month and forgot to tell half the people I know.</p><p>Benedict</p>',
          blanks: [
            { id: 'R1.7', o: ['heating and water costs', 'internet and power costs', 'parking and laundry costs', 'the first and last month'] },
            { id: 'R1.8', o: ['an extra half month\'s rent', 'the full rent for August', 'the internet bill in advance', 'a second month\'s deposit'] },
            { id: 'R1.9', o: ['December comes', 'October comes', 'August is over', 'September ends'] },
            { id: 'R1.10', o: ['my current supervisor', 'the Ferraros\' son', 'my old university friend', 'a neighbour of yours'] },
            { id: 'R1.11', o: ['the headroom in the bathroom', 'the size of the side entrance', 'the view from the little patio', 'the walk to the bus stop'] }
          ]
        },
        {
          id: 'R2', title: 'Part 2: Reading to Apply a Diagram', minutes: 9,
          instructions: 'Read the following information. Complete the email by choosing the best option for each blank (1 to 5). Then answer questions 6 to 8.',
          passage: '<h3>Hollyhock Kennels, Arnprior: Daycare and Boarding Rates</h3><div class="tbl-wrap"><table class="diagram"><thead><tr><th>Service</th><th>Small dog (under 10 kg)</th><th>Large dog (10 kg and over)</th></tr></thead><tbody>' +
            '<tr><td>Daycare, full day (7:00 a.m. to 6:00 p.m.)</td><td>$32</td><td>$38</td></tr>' +
            '<tr><td>Daycare, half day (up to 5 hours)</td><td>$20</td><td>$24</td></tr>' +
            '<tr><td>Boarding, per night</td><td>$45</td><td>$55</td></tr>' +
            '<tr><td>Holiday boarding, per night (December 20 to January 3 and all long weekends)</td><td>$55</td><td>$65</td></tr>' +
            '<tr><td>Bath before pickup</td><td>$15</td><td>$25</td></tr>' +
            '<tr><td>10-day daycare pass (full days)</td><td>$280</td><td>$340</td></tr>' +
            '</tbody></table></div><ul class="notes"><li>Every new dog must attend a free temperament assessment (about 2 hours) at least one week before its first visit.</li><li>Proof of up-to-date vaccinations is required. Dogs under 16 weeks old may attend daycare but cannot stay overnight.</li><li>When two dogs from the same household share a room, the dog with the lower boarding rate gets 25% off. This discount does not apply to holiday boarding.</li><li>Holiday boarding requires a minimum stay of 3 nights.</li><li>Pickups after 6:00 p.m. are charged $20 for every 15 minutes or part of 15 minutes.</li><li>Daycare passes may be shared by dogs from the same household. Each dog uses one day of the pass per visit.</li><li>Boarding cancelled less than 48 hours before drop-off is charged one night.</li><li>Dogs with an active 10-day daycare pass get 10% off baths. This discount cannot be combined with any other offer and does not apply to holiday boarding stays.</li></ul>',
          reply: '<h3>Email</h3><p>Hi Bogdan,</p><p>I have found a kennel for the dogs while we are at your brother\'s wedding. We would drop them off on Friday, March 6, at 9:00 a.m. and pick them up on Monday morning, March 9. Chester (27 kg) and Mango (8 kg) can share a room, so three nights of boarding for both would come to [[R2.1]]. Chester stayed there last summer, but Mango has never been, so she will need [[R2.2]] before then. I will book it for this Saturday.</p><p>I would also like Chester to have a bath before we collect him, since he always comes home smelling like the other dogs. That would add [[R2.3]] to the bill. By the way, I am glad we did not choose the Easter long weekend. The nightly rates would have been higher, and we would also have lost [[R2.4]].</p><p>If anything changes, the latest we can cancel without being charged is [[R2.5]], so let\'s confirm our plans before then.</p><p>Alejandra</p>',
          blanks: [
            { id: 'R2.1', o: ['$266.25', '$300.00', '$258.75', '$225.00'] },
            { id: 'R2.2', o: ['a temperament assessment', 'a half day of daycare', 'a bath before her first visit', 'a 10-day daycare pass'] },
            { id: 'R2.3', o: ['$25', '$15', '$22.50', '$40'] },
            { id: 'R2.4', o: ['the discount for Mango', 'the free assessment for Mango', 'the bath for Chester', 'the shared room for both dogs'] },
            { id: 'R2.5', o: ['Wednesday at 9:00 a.m.', 'Thursday at 9:00 a.m.', 'Friday at 9:00 a.m.', 'Thursday at 6:00 p.m.'] }
          ],
          questions: [
            { id: 'R2.6', q: 'A family\'s puppy will be 15 weeks old on the night they hope to board it. The kennel will', o: ['not accept the puppy for an overnight stay.', 'charge the puppy the small dog boarding rate.', 'board the puppy after a temperament assessment.', 'board the puppy if it shares a room with another dog.'] },
            { id: 'R2.7', q: 'An owner buys one 10-day pass and brings both of her large dogs to daycare together each time. The pass will cover', o: ['5 full days of daycare for the two dogs.', '10 full days of daycare for the two dogs.', '10 full days for only one of the dogs.', '20 half days of daycare for the two dogs.'] },
            { id: 'R2.8', q: 'A man arrives at 6:20 p.m. to collect his small dog after a full day of daycare. In total, he will pay', o: ['$72.', '$52.', '$40.', '$62.'] }
          ]
        },
        {
          id: 'R3', title: 'Part 3: Reading for Information', minutes: 10,
          instructions: 'Read the following article. Decide which paragraph, A to D, contains the information in each statement. If the information is not given in any paragraph, choose E.',
          passage: '<h3>Highways Made of Ice</h3><p><b>A.</b> Every winter, for a few short weeks, roads appear in northern Canada where no road existed in summer. These winter roads, many of them built across frozen lakes, rivers and wetlands, link remote communities to the rest of the country. For the rest of the year, many of those communities can be reached only by air, which makes everything from groceries to building materials far more expensive. A single winter season allows trucks to bring in fuel, construction supplies and even ready-made houses at a fraction of the cost of flying them. In some places, residents also use the roads to drive out and visit relatives they have not seen since the previous winter.</p><p><b>B.</b> Building an ice road is slower and more careful work than many people imagine. Crews cannot simply wait for nature to do the job. They clear snow from the route, because snow acts like a blanket and keeps the ice beneath it from thickening. In some places, they also pump lake water onto the surface, adding layer after layer. The work often goes on around the clock, because crews have only a narrow window before the first trucks are due. Before any heavy truck is allowed on the road, workers drill test holes or use radar equipment to measure the thickness of the ice along the whole route. A fully loaded fuel truck may need ice more than a metre thick, while a pickup truck needs far less.</p><p><b>C.</b> Driving on the ice has its own rules. Trucks travel slowly, often no faster than twenty-five kilometres an hour, because a fast-moving vehicle pushes a wave through the water under the ice, and that wave can crack the surface ahead, particularly near the shore. Drivers keep long distances between vehicles for the same reason. Most travel in groups and carry emergency supplies, since help may be hours away. Many drivers describe the experience as peaceful, even beautiful, especially on clear nights, but they also admit that the sound of the ice cracking under their wheels takes some getting used to.</p><p><b>D.</b> Warmer winters are now putting this system under pressure. In several recent years, roads have opened weeks later than planned or closed early, leaving communities short of fuel and supplies until the following season. For families who depend on the roads, a short season can mean another year of paying air freight prices for basic goods. Some governments are responding by building permanent all-season roads to the largest communities, a project that can take a decade and cost hundreds of millions of dollars. Others are moving sections of the winter routes off the lakes and onto land, where the ground freezes more reliably.</p>',
          questions: [
            { id: 'R3.1', q: 'The weight of a vehicle affects how thick the ice under it must be.', fixed: true, a: 'B' },
            { id: 'R3.2', q: 'Drivers must complete a special course before making their first trip on the ice.', fixed: true, a: 'E' },
            { id: 'R3.3', q: 'The roads make it affordable to bring in items as large as whole homes.', fixed: true, a: 'A' },
            { id: 'R3.4', q: 'The period when the roads can be used has recently been cut short in some years.', fixed: true, a: 'D' },
            { id: 'R3.5', q: 'A vehicle\'s speed can create a hazard for the stretch of ice it is approaching.', fixed: true, a: 'C' },
            { id: 'R3.6', q: 'Some people use the roads to see family members they cannot easily reach at other times of year.', fixed: true, a: 'A' },
            { id: 'R3.7', q: 'Radar gives a more accurate measure of ice thickness than drilling test holes.', fixed: true, a: 'E' },
            { id: 'R3.8', q: 'Clearing the route of snow helps the ice underneath get thicker.', fixed: true, a: 'B' },
            { id: 'R3.9', q: 'Shifting parts of a route away from water is one response to milder weather.', fixed: true, a: 'D' }
          ]
        },
        {
          id: 'R4', title: 'Part 4: Reading for Viewpoints', minutes: 13,
          instructions: 'Read the following article. Answer questions 1 to 5 by choosing the best option. Then complete the reader\'s comment by choosing the best option for each blank (6 to 10).',
          passage: '<h3>Should Restaurants Charge for No-Shows?</h3><p>On a busy Saturday last spring, a small restaurant in St. Catharines held three tables for a party of fourteen who never arrived and never called. By the time the staff gave up waiting, the evening\'s second seating had already been turned away. The owner, Bartosz Nowicki, estimates the empty tables cost him about $1,100 in lost sales. The following week, he began asking customers for a credit card number when they book, and charging $25 a person to anyone who fails to show up without cancelling at least 24 hours ahead.</p><p>Nowicki is far from alone. A growing number of Canadian restaurants, especially small ones with fewer than forty seats, now charge no-show fees or require deposits for large groups. "People treat a reservation as a free option," Nowicki says. "But when you hold a table for someone, you are turning someone else away. On a slow Tuesday, that hardly matters. On a Saturday, it can be the difference between paying my staff and not."</p><p>Aurelio Santos, who writes a consumer column for a regional newspaper, has heard from many readers who see it differently. He accepts that restaurants lose money on no-shows, but believes fees punish the wrong people. "Most diners who miss a booking aren\'t careless," he says. "They\'re stuck at work, or their child has a fever." He also objects to the way the rules are presented. In his experience, the cancellation policy is often buried in the fine print of a booking website, and customers only learn about it when the charge appears on their statement. If restaurants want fees, he argues, they should state them plainly and send a reminder by text the day before.</p><p>Blessing Mensah, who has worked as a server for eleven years, sees the issue from the dining room floor. Servers earn much of their income through tips, she points out, so an empty table on a busy evening is money out of her pocket as much as the owner\'s. Still, she has mixed feelings. "When a fee is charged, it\'s usually me at the door explaining it, and the customer takes it out on me," she says. She would prefer that restaurants simply phone every booking that afternoon, which in her experience catches most no-shows before they happen.</p><p>Some evidence suggests fees do work. Nowicki says no-shows at his restaurant have dropped from about one table a night to one or two a month, and he has charged the fee only six times. In each case, he says, he refunded it when the customer explained a genuine emergency. Santos is not convinced such goodwill is common. "One owner\'s kindness is not a policy," he says. "Customers need rules they can count on, not the mood of whoever is running the place that night."</p><p>On one point, all three agree. The diners who cause the most trouble are those who book at several restaurants for the same evening and choose at the last minute. Nowicki calls them "table shoppers." Mensah says they are rarer than people think but do a great deal of damage, and even Santos admits he would not defend them in his column.</p>',
          questions: [
            { id: 'R4.1', q: 'Nowicki introduced his fee after', o: ['a large group failed to arrive on a busy night.', 'customers complained about waiting for tables.', 'a party of fourteen cancelled a day in advance.', 'his staff asked to be paid for empty tables.'] },
            { id: 'R4.2', q: 'According to Nowicki, an unused reservation hurts a restaurant mainly when', o: ['many other people want a table.', 'the group has more than forty people.', 'the customer pays by credit card.', 'the booking was made a day ahead.'] },
            { id: 'R4.3', q: 'Santos\'s main complaint about how fees are applied is that', o: ['diners often do not know about them until they are charged.', 'restaurants charge far more than a full meal would actually cost.', 'the money collected usually goes to the servers.', 'restaurants refuse to accept any excuse at all.'] },
            { id: 'R4.4', q: 'Mensah has mixed feelings about fees because', o: ['they protect her earnings but leave her facing upset diners.', 'she believes that most no-shows are caused by real emergencies.', 'the fees are taken out of the tips she would earn.', 'phoning every booking takes up too much of her time.'] },
            { id: 'R4.5', q: 'Santos would most likely say that Nowicki\'s refunds', o: ['are not something diners can rely on.', 'prove that the fees are fair to customers.', 'should be paid to servers instead.', 'show that emergencies are very rare.'] }
          ],
          reply: '<h3>Reader comment</h3><p>I run a twelve-table café, so this article hit close to home. I understand Mr. Santos\'s point that many people who miss a booking [[R4.6]], and I would never charge a parent whose child suddenly fell ill. But I side with Mr. Nowicki: on a Saturday night, a table held for nobody means [[R4.7]].</p><p>I also think Ms. Mensah\'s suggestion of [[R4.8]] deserves more attention. It costs nothing but a few minutes, and it would spare servers from [[R4.9]].</p><p>Finally, whatever owners decide, Mr. Santos is right that the rules [[R4.10]]. Hiding them in fine print only makes customers angrier.</p>',
          blanks: [
            { id: 'R4.6', o: ['have a good reason for it', 'book at several places', 'never read the fine print', 'are regular customers'] },
            { id: 'R4.7', o: ['another party turned away', 'more tips for the servers', 'a deposit kept by the owner', 'a quieter night for the staff'] },
            { id: 'R4.8', o: ['calling each booking that day', 'hiring more staff at the door', 'refusing bookings from groups', 'charging a fee for every table'] },
            { id: 'R4.9', o: ['having to defend a charge', 'working on Saturday nights', 'losing all of their tips', 'texting customers late at night'] },
            { id: 'R4.10', o: ['must be clear before people book', 'should allow for table shoppers', 'should apply only to large groups', 'must be set by the servers'] }
          ]
        }
      ]
    },

    /* =================== WRITING =================== */
    writing: {
      tasks: [
        {
          id: 'W1', title: 'Task 1: Writing an Email', minutes: 27, minWords: 150, maxWords: 200,
          prompt: '<p>Two months ago, your downstairs neighbour installed a bright motion-sensor security light after someone broke into his car. The light is aimed at the shared driveway, but it also shines straight into your bedroom window, and because cats and passing cars set it off, it switches on many times each night. You have been sleeping badly, and next week you start a new job with early shifts. You get along well with your neighbour and do not want to cause bad feelings.</p><p>Write an email to your neighbour. In your email, do the following:</p><ul><li>Explain the problem and how it is affecting you.</li><li>Show that you understand why he installed the light.</li><li>Suggest a change that would work for both of you.</li></ul><p class="muted">Write 150 to 200 words.</p>'
        },
        {
          id: 'W2', title: 'Task 2: Responding to Survey Questions', minutes: 26, minWords: 150, maxWords: 200,
          prompt: '<p>Your city has money to improve one of its large parks for winter use and is asking residents which project they prefer. Choose the option you prefer. Explain the reasons for your choice.</p><p class="muted">Write 150 to 200 words.</p>',
          options: [
            { key: 'A', label: 'Option A', text: 'Install lighting along the park\'s main 4-kilometre walking trail so people can use it safely after dark, since winter evenings begin before 5:00 p.m. However, the lights would cost about $40,000 a year to run, and some homeowners next to the park worry about light shining into their yards.' },
            { key: 'B', label: 'Option B', text: 'Groom 8 kilometres of cross-country ski trails and open a free lending shed with skis and snowshoes. However, the trails could only be used when there is enough snow, often just eight to ten weeks a winter, and volunteers would be needed to run the shed.' }
          ]
        }
      ]
    },

    /* =================== SPEAKING =================== */
    speaking: {
      practice: { id: 'SP', title: 'Practice Task', prep: 30, speak: 60, prompt: 'Describe a gift you gave someone that they really appreciated, and explain why it meant so much to them.' },
      tasks: [
        { id: 'S1', title: 'Task 1: Giving Advice', prep: 30, speak: 90, prompt: 'A friend of yours has a road test for her driver\'s licence in six weeks. She failed her first test last month mainly because she was nervous. She works evenings, and she can afford only about $300 for driving lessons. Give your friend advice on how to prepare so that she passes this time.' },
        { id: 'S2', title: 'Task 2: Talking about a Personal Experience', prep: 30, speak: 60, prompt: 'Talk about a time when you needed to ask someone for help, even though asking was difficult for you. What happened, how did the other person respond, and would you handle it differently today?' },
        {
          id: 'S3', title: 'Task 3: Describing a Scene', prep: 30, speak: 60, prompt: 'Describe some things that are happening in the picture below as well as you can. The person you are speaking to cannot see the picture.',
          image: '<img src="tests/img/22/scene.jpg" alt="A busy public library on a Saturday with a children\'s story corner">',
          picture: 'Comic style illustration, wide view of the inside of a bright public library on a rainy Saturday morning, seen from slightly above, with 14 people in total. Left side: a children\'s story corner on a round rug, where a smiling librarian with a dog puppet on one hand reads a large picture book to four small children sitting cross legged, while a fifth child, a toddler, has stood up and is clapping. Centre: the front desk, where a staff member scans a tall stack of picture books for a father who carries a baby in a front carrier. Right side: a man standing on a small step stool reaches up to put a book back on a high shelf; a woman pushes a library book cart piled far too high, and the top books on the cart are clearly tilting and about to slide off onto the floor; at a long study table, a university student types on a laptop, and her elbow is about to knock over an open coffee thermos standing right at the edge of the table; an elderly man reads a newspaper in an armchair with his reading glasses pushed up on his forehead. Near the entrance, a man shakes water off his wet umbrella onto the doormat. Rain is visible through the tall windows. Only two short signs: STORY TIME above the story corner, and QUIET PLEASE on the wall above the study table.'
        },
        { id: 'S4', title: 'Task 4: Making Predictions', prep: 30, speak: 60, prompt: 'In this picture, what do you think will most probably happen next? Describe at least two things that will probably happen, and explain what in the picture makes you think so.', image: '<img src="tests/img/22/scene.jpg" alt="A busy public library on a Saturday with a children\'s story corner">' },
        {
          id: 'S5', title: 'Task 5: Comparing and Persuading', type: 'compare', select: 60, prep: 60, speak: 60,
          prompt: 'Your child is turning eight, and you are planning a birthday party for twelve children on a Saturday afternoon in March. Choose the option you prefer. In the next section, you will need to persuade your partner that your choice is better.',
          choices: [
            { key: 'A', title: 'Trampoline park', image: '<img src="tests/img/22/opt_A.jpg" alt="Photo: Trampoline park">', picture: 'A bright, empty indoor trampoline park with rows of connected blue trampolines, padded walls and a large foam pit, photographed under even lighting.', facts: ['$28 per child for a 2-hour package', 'Party room and pizza included', 'Every child needs a waiver signed by a parent', '20-minute drive; next free Saturday is in 3 weeks'] },
            { key: 'B', title: 'Pottery painting studio', image: '<img src="tests/img/22/opt_B.jpg" alt="Photo: Pottery painting studio">', picture: 'A long craft studio table set with plain white ceramic mugs and plates, small pots of paint and brushes, with shelves of colourful finished pottery in the background.', facts: ['$22 per child, one piece each to paint', 'Pieces must be fired: pick up one week later', 'Bring your own food and cake', 'Walking distance from home; room holds exactly 12 children'] }
          ],
          third: { key: 'C', title: 'Party at home', image: '<img src="tests/img/22/opt_C.jpg" alt="Photo: Party at home">', picture: 'A small, cozy living room decorated with balloons and paper streamers, with a low table set with paper plates, cups and a frosted birthday cake.', facts: ['About $150 for food, decorations and loot bags', 'Magician: $180 for 45 minutes', 'Small living room; March weather is unpredictable', 'Two days of preparation and cleanup'] },
          persuade: 'Your partner prefers a party at home. Persuade your partner that your choice is better. Explain why.'
        },
        { id: 'S6', title: 'Task 6: Dealing with a Difficult Situation', prep: 60, speak: 60, prompt: '<p>Weeks ago, you agreed to drive four players from your daughter\'s soccer team to an all-day tournament in another town this Saturday. The coach is counting on you, because there are just enough drivers for the whole team. Today, your brother called. The friend who was going to help him move apartments on Saturday has hurt his back, and the moving truck is already paid for and cannot be rebooked.</p><p><b>Choose ONE:</b></p><p><b>Option A:</b> Talk to the coach. Explain why you cannot drive the players on Saturday.</p><p><b>Option B:</b> Talk to your brother. Explain why you cannot help him move on Saturday.</p>' },
        { id: 'S7', title: 'Task 7: Expressing Opinions', prep: 30, speak: 90, prompt: '<p>Your town council is considering a bylaw that would ban dogs from the main public beach from June to September. Supporters say dog waste is a hygiene problem where children play in the sand, that some families feel uneasy around loose dogs, and that dogs disturb nesting shorebirds. Dog owners reply that the beach is one of the few places their dogs can run and swim, that many summer tourists travel with their pets, and that the town would have to pay for extra bylaw officers to enforce the rule.</p><p>The council has asked residents for their views before it votes next month. Should dogs be banned from the main beach in summer? Explain your reasons.</p>' },
        {
          id: 'S8', title: 'Task 8: Describing an Unusual Situation', prep: 30, speak: 60, prompt: 'You are in a department store and see this unusual umbrella for $95. Call your friend, who walks twenty-five minutes to work in a rainy city, usually carries a laptop bag, and has said he will spend no more than $60 on a new umbrella. The umbrella weighs about one and a half kilograms, and its battery must be charged every night. Describe the umbrella and explain whether you think your friend should buy it.',
          image: '<img src="tests/img/22/object.jpg" alt="An unusual umbrella on a display stand in a store">',
          picture: 'One large umbrella standing open on a display stand in a store, with these unusual features: a canopy made of clear plastic panels alternating with bright yellow panels; a ring of small glowing lights along the outer edge of the canopy; a thick handle with a phone holder clipped to it and a small battery pack with a charging cable plugged in; a small cup holder ring sticking out from the shaft just above the handle; a padded shoulder harness attached to the shaft so it can be worn hands free; and a white price tag hanging from the handle that reads $95.'
        }
      ]
    }
  });
})();
