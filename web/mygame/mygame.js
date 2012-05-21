/*
 * Copyright 2010 by Dan Fabulich.
 * 
 * Dan Fabulich licenses this file to you under the
 * ChoiceScript License, Version 1.0 (the "License"); you may
 * not use this file except in compliance with the License. 
 * You may obtain a copy of the License at
 * 
 *  http://www.choiceofgames.com/LICENSE-1.0.txt
 * 
 * See the License for the specific language governing
 * permissions and limitations under the License.
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied.
 */


// Specify the list of scenes here, separated by commas, with no final comma

nav = new SceneNavigator([
	"0-intro",
	"1-well",
	"2-cave",
	"3-wedding",
	"98-game_over",
	"99-ending",
	"selector"
]);

// Specify the default starting stats here

stats = {
	next_scene: 0
	
	,disposition: 0
	
	,current_brother: "first"
	,first_name: "the eldest son"
	,second_name: "the middle son"
	,third_name: "the youngest son"
	,first_servitude: false
	,second_servitude: false
	,third_servitude: false
	
	,inv_money: true
	
	,king_he: 'he'
	,king_his: 'his'
	,king_name: 'the king'
	,king_desc: 'a wise and kindly king'
	,king_entrance1: '"Certainly," replied the spirit.\nJust then, the king happened to pass by. He saw the hunter\'s son near the well, and asked, "What business does this young man have with my well?"\nThe hunter\'s son bowed. "I humbly ask your permission to draw from this, your well," he said.\n"Many ask such a boon," mused the king. "Pray tell, why do you need the water so?"'
	,king_entrance1_disp: 1
	,king_entrance2: 'Just then, the king happened to pass by. He saw the hunter\'s son near the well, and asked, "What business does this young man have with my well?"\nThe spirit spoke up, as it was bound by duty to answer the well\'s owner truthfully. "The boy was trying to bargain with me in return for some water from the well," it said, abashed.\n"It is clear the well water is worth much to you, that you would bargain for it," said the king. "Why do you want it so badly?"'
	,king_entrance2_disp: 0
	,king_entrance3: 'The spirit, falling for the ruse, turned to chide the finch, and in that instant, the hunter\'s son snatched some water from the well and began to leave, when…\nThe spirit saw the hunter\'s son, and quickly snatched the water back from him.\nJust then, the king happened to pass by. He saw the hunter\'s son near the well, and asked, "What business does this young man have with my well?"\n"This boy stole water from your well!" cried the spirit angrily.\nThe king turned to the hunter\'s son. "You have stolen what is rightfully mine. Why should I let you leave with your ill gotten gains?"'
	,king_entrance3_disp: -1
	,king_response1: '"A noble reason," said the king. "Your devotion to your mother is admirable."'
	,king_response1_disp: 1
	,king_response2: '"How interesting," said the king. "I know much, but even I do not know of such a cure."'
	,king_response2_disp: 0
	,king_response3: '"A hollow lie," cried the king angrily. "I know such a spell cannot exist."'
	,king_response3_disp: -1
	,king_bargain: '"I don\'t often give my well water away for free," the king continued. "What would you offer me in return?"'
	,king_instareject: '"You are a base thief and liar," the king concluded. "I would not give this water to you for any reason. I shall have you thrown in my dungeons."\nThe hunter\'s son, fearing for his safety, fled as fast as he could.'
	,king_reject: '"I have no need for that," said the king.'
	,king_ending1: '"A fair trade. You may take the water and leave," said the king.\nThe hunter\'s son took the water and left.'
	,king_ending2: '"This is a fitting payment. You may take the water. However, be sure to return and fulfill your service to me once your mother is cured, or it will go badly for you," said the king.\nThe hunter\'s son took the water and left.'
	,king_ending3: '"It appears you have nothing of value to offer me. Be on your way." The king watched the hunter\'s son return to the woods.'
	,king_payment_servitude: true
	,king_payment_money: false
	,king_payment_gold: false
	,king_payment_cure: true
	,king_payment_loyalty: true
	
	,troll_he: 'he'
	,troll_his: 'his'
	,troll_name: 'the troll'
	,troll_desc: 'an unsightly and malevolent troll'
	,troll_entrance1: 'Just then, the troll happened to pass by. He saw the hunter\'s son near the well, and roared, "Who dares approach me well?"\nThe hunter\'s son bowed. "I humbly ask your permission to draw from this, your well," he said.\n"Many fools come wantin\' me water," replied the troll. "Why ya need it, eh?"'
	,troll_entrance1_disp: 1
	,troll_entrance2: 'Just then, the troll happened to pass by. He saw the hunter\'s son near the well, and roared, "Who dares approach me well?"\nThe spirit spoke up, as it was bound by duty to answer the well\'s owner truthfully. "The boy was trying to bargain with me in return for some water from the well," it said, abashed.\n"Ya want water so much ya be bargainin\' for it," replied the troll. "Why ya need it, eh?"'
	,troll_entrance2_disp: 0
	,troll_entrance3: 'The spirit, falling for the ruse, turned to chide the finch, and in that instant, the hunter\'s son snatched some water from the well and began to leave, when…\nThe spirit saw the hunter\'s son, and quickly snatched the water back from him.\nJust then, the troll happened to pass by. He saw the hunter\'s son near the well, and roared, "Who dares approach me well?"\n"This boy stole water from your well!" cried the spirit angrily.\nThe troll turned to the hunter\'s son. "Ya come to me home, stealin\' me water. Why meself let ya go, eh?"'
	,troll_entrance3_disp: -1
	,troll_response1: '"Ya mother, eh?" cackled the troll. "Me know no mother."'
	,troll_response1_disp: 0
	,troll_response2: '"Ya makin\' elixir?!" yelled the troll. "Ya tryin\' ta poison me?"'
	,troll_response2_disp: -1
	,troll_response3: '"Gold, eh?" smirked the troll. "Ya make gold from me water?"'
	,troll_response3_disp: 1
	,troll_bargain: '"Me water, me well. Meself no give me water to human fools," the troll continued. "What ya be givin\' me?"'
	,troll_instareject: '"Thief! Scum!" the troll bellowed. "Ya come to steal me water, I be havin\' ya for dinner!"\nThe hunter\'s son, fearing for his safety, fled as fast as he could.'
	,troll_reject: '"What? That not something I be needin\'," remarked the troll.'
	,troll_ending1: '"Fair\'s fair, eh. Ya be takin\' da water now, but ya better be comin\' back with me gold," smirked the troll.\nThe hunter\'s son took the water and left.'
	,troll_ending2: '"Fair\'s fair, eh. Ya be takin\' da water now. When ya mother be well, ya better be comin\' back to me," smirked the troll.'
	,troll_ending3: '"Ya fool be havin\' nothing worthwhile to offer! Leave me place, now!" The troll watched the hunter\'s son return to the woods.'
	,troll_payment_servitude: true
	,troll_payment_money: false
	,troll_payment_gold: true
	,troll_payment_cure: false
	,troll_payment_loyalty: false
	
	,witch_he: 'she'
	,witch_his: 'her'
	,witch_name: 'the witch'
	,witch_desc: 'a crafty and mysterious witch'
	,witch_entrance1: 'Just then, the witch happened by. "What are you doing near my well?" she asked, eyeing him suspiciously.\nThe hunter\'s son bowed. "I humbly ask your permission to draw from this, your well," he said.\n"Many come here to take my magical water," she spat. "But there are many ways to utilize it. What are you planning to do with my water?"'
	,witch_entrance1_disp: 0
	,witch_entrance2: 'Just then, the witch happened to pass by. "Why is this boy at my well?" asked the witch.\nThe spirit spoke up, as it was bound by duty to answer its master truthfully. "The boy was bargaining with me for some water."\n"Oh?" she asked smirking, "Trying to guile my faithful servant into betraying me? What a tricksy little child. Tell me boy, what do you hope to do with the magical properties of my precious water?"'
	,witch_entrance2_disp: 1
	,witch_entrance3: 'The spirit, falling for the ruse, turned to chide the finch, and in that instant, the hunter\'s son snatched some water from the well and turned to run…\nBut the spirit saw this and caught his hand.\nJust then the witch passed by and, seeing the commotion, asked," What\'s all this ballyhoo so close to my beautiful well?"\n"This boy stole from your well!" cried the spirit.\nThe witch\'s eyes darkened as she turned toward the hunter\'s son, radiating an aura of intense malevolence. "How dare you steal from me! I should turn you into a newt! Fortunately for you, I am in a good mood today. If your reason is interesting enough, I may let you keep it. So child, why are you stealing my water?"'
	,witch_entrance3_disp: -1
	,witch_response1: '"Do no waste my time with dull stories," the witch grumbled. "I do not care a bit about you or your mother."'
	,witch_response1_disp: 0
	,witch_response2: '"How interesting," said the witch. "I have been studying magic all my life, and had no idea that such a cure existed. This is quite interesting!" she said cackling happily.'
	,witch_response2_disp: 1
	,witch_response3: '"An obvious lie!" screeched the witch. "Did you really think you could lie to me about spells and magic? My life is devoted to their study, you foolish child."'
	,witch_response3_disp: -1
	,witch_bargain: '"I do not go about giving my water away to just anyone," the witch said, smirking. "However, I would let you have some if you could give me something in return."'
	,witch_instareject: '"You are a thief and a liar," crowed the witch. "And a pretty terrible one at that! You possess no wit and are not in the least bit clever. You will never touch the water from my well!" she screamed. Then raising her hands she began to mutter an incantation.\nThe hunter\'s son, fearing for his safety, fled as fast as he could.'
	,witch_reject: '"I have no use for such things," said the witch'
	,witch_ending1: '"Ahh! Yes, I am very intrigued by this spell of yours. You may take my water and be on your way," the witch said.\nThe hunter\'s son took the water and left.'
	,witch_ending2: '"I accept such a payment. You may take my water. Be sure to return and fulfill your pledge to me once your mother is cured, or I will kill you both," said the witch.\nThe hunter\'s son took the water and left.'
	,witch_ending3: '"It appears you have nothing I desire. Get lost, before I change you into a squirrel," The witch grumbled. Then she watched the hunter\'s son return to the woods.'
	,witch_payment_servitude: true
	,witch_payment_money: false
	,witch_payment_gold: false
	,witch_payment_cure: true
	,witch_payment_loyalty: false
	
	,wolf_he: 'he'
	,wolf_his: 'his'
	,wolf_name: 'the wolf'
	,wolf_desc: 'a big, bad wolf sleeping soundly in the shade'
	,wolf_entrance1: 'Just as he was about to escape, the hunter\'s son heard a deep growl behind him as something grabbed his foot.\n"Where are you headed with that bounty you\'ve stolen from my home?" barked the wolf.'
	,wolf_entrance1_disp: 1
	,wolf_entrance2: '"Get by?" snapped the wolf. "And why should I, after you\'ve ruined my nap, hmm? Where are you headed with those mushrooms, you little morsel? It must be important if you\'re willing to awaken a sleeping wolf to get there"'
	,wolf_entrance2_disp: 0
	,wolf_entrance3: 'Thinking he was safe to get by, the hunter\'s son began to skip out of the cave. Just then the wolf appeared from a clump of nearby bushes.\n"So," sneered the wolf,"Think you can just take what you like and hurt whatever stands in your way? Your quest must be an important one. Where is a tasty bite such as yourself off to in such a hurry with a bushel of glowing mushrooms?"'
	,wolf_entrance3_disp: -1
	,wolf_response1: '"Ahaaa," said the wolf, smirking. "So your mother is sick, huh? Well where is this dear mother of yours? I could help take care of her while you\'re gone," he smiled, a glint in his eye. "I will move, but only for a price."'
	,wolf_response1_disp: -1
	,wolf_response2: 'Bored at the prospect of a wedding, the wolf shrugged, "Alright, child. But you still woke me from my nap, to get by you must give me something for my troubles."'
	,wolf_response2_disp: 0
	,wolf_response3: '"What special rocks," said the wolf. "But I am not interested in your cavern adventures. You still interrupted my nap, and unless you compensate me for my troubles, I will not let you pass…instead I will eat you on the spot."'
	,wolf_response3_disp: 1
	,wolf_bargain: ''
	,wolf_instareject: '"You evil little wretch," barked the wolf, snatching the mushrooms from the hunter\'s son. "You\'re going nowhere with these mushrooms. Instead you will accompany them in a stew as my dinner."\nThe wolf lunged toward the hunter\'s son, but he was too quick for the wolf and dodged running away from the cave as fast as he could.'
	,wolf_reject: ''
	,wolf_ending1: '"A lovely offer. I will forgive your interruption and let you pass. Be on your way, child," the wolf said, as he began walking toward the soft moss to continue his nap.\nThe hunter\'s son took the mushrooms and left.'
	,wolf_ending2: '"I accept such a payment. You may be on your way with your mushrooms, but! You better return and do as you promised, or I will find you and eat your whole family for dinner," growled the wolf.\nThe hunter\'s son took the glowing mushrooms and left.'
	,wolf_ending3: '"This does not interest me," snapped the wolf, "I will just eat you and your mother instead."\nDodging the wolf\'s attacks, the hunter\'s son ran out of the cave and into the woods before the wolf could snap his powerful jaws around the hunter\'s son\'s jugular.'
	,wolf_ending4: '"A lovely offer. I will forgive your interruption and let you pass. Be on your way, child," the wolf said. "Don\'t forget to bring me back a piece of cake on your way home. I\'ll still be here, sleeping."\nThe hunter\'s son took the mushrooms and left.'
	,wolf_payment_servitude: true
	,wolf_payment_money: false
	,wolf_payment_cake: true
	,wolf_payment_moss: true
	,wolf_payment_loyalty: false
	
	,mouse_he: 'he'
	,mouse_his: 'his'
	,mouse_name: 'the mouse'
	,mouse_desc: 'a small and timid mouse sleeping soundly in the shade'
	,mouse_entrance1: 'Just as he was about to escape, the hunter\'s son heard a startled squeak from behind him. Looking behind him, the hunter\'s son saw the timid mouse was wide awake. "Sorry for waking you," he said.\n"Oh it\'s alright," squeaked the mouse, nervously, "I was just frightened by your sneaking. Where are you off to with that bushel of mushrooms?"'
	,mouse_entrance1_disp: 0
	,mouse_entrance2: '"Oh," said the mouse, "I am sorry I was in your way! I was just trying to get out of the sun so I could take a little nap. I hope I am not impeding your journey too much! But…may I ask where you\'re headed with those glowing mushrooms? They are so pretty!"'
	,mouse_entrance2_disp: 1
	,mouse_entrance3: 'The hunter\'s son began to skip out of the cave. Just then the mouse came scurrying out of the forest.\n"W-w-why did you hurt me? I would have moved if you had just asked," piped the mouse angrily. "Where are you going with those mushrooms that is so important that you don\'t care who you hurt on the way?"'
	,mouse_entrance3_disp: -1
	,mouse_response1: '"Ohh! I am so sorry!" cried the mouse, "You should hurry! But if I may…c-c-could you please give me something in exchange for interrupting my nap?"'
	,mouse_response1_disp: 1
	,mouse_response2: '"How exciting!" exclaimed the mouse. "Please give my best to the bride and groom. Before you leave might you help me out a bit since you interrupted my nap?"'
	,mouse_response2_disp: 0
	,mouse_response3: '"Those are not rocks," said the mouse, puzzled. "Those are mushrooms…I\'ve eaten them before. Why would you lie to me? Give me something to make up for my nap interruption, and your deceit or I will not let you pass."'
	,mouse_response3_disp: -1
	,mouse_bargain: ''
	,mouse_instareject: '"What a terrible child you are!" squeaked the mouse. Before the hunter\'s son could even realize what was happening the mouse had eaten all of his mushrooms. "Now get out of here, before I nibble off your ears!" he shrieked.\nThe hunter\'s son, afraid of losing his hearing forever, ran quickly into the woods.'
	,mouse_reject: ''
	,mouse_ending1: ''
	,mouse_ending2: '"I could really use someone as big and strong as yourself to help me out for a while! I accept your payment, young man. But please remember to return after you have cured your mother," said the mouse happily.\nThe hunter\'s son took the glowing mushrooms and left.'
	,mouse_ending3: ''
	,mouse_ending4: '"Cake is my FAVORITE!" said the mouse, excitedly. "It has been so long since I have had something so delicious to eat. Please make sure to stop by here on your way home to deliver my cake. I will probably still be napping." The mouse giggled and walked further into the cave to continue his nap.\nJoyful at successfully obtaining the mushrooms, the hunter\'s son skipped his way back to his brothers.'
	,mouse_payment_servitude: true
	,mouse_payment_money: false
	,mouse_payment_cake: true
	,mouse_payment_moss: false
	,mouse_payment_loyalty: false
	
	,fox_he: 'he'
	,fox_his: 'his'
	,fox_name: 'the fox'
	,fox_desc: 'a sly and smirking fox sleeping soundly in the shade'
	,fox_entrance1: 'Just as he was about to escape, the hunter\'s son heard a startled squeak from behind him. Looking behind him, the hunter\'s son saw the playful fox was wide awake. "Sorry for waking you," he said.\n"How dare you enter my lair without permission!" said the fox, puffing his chest up with pride. Then he smirked. "Got you there. Were you surprised? Wait, what are you doing with those mushrooms?"'
	,fox_entrance1_disp: 0
	,fox_entrance2: '"How dare you touch my fur!" barked the fox.  "Do you know how much time I spent on it today? Now it\'s all oily again. And stealing my mushrooms too! Explain yourself!"'
	,fox_entrance2_disp: -1
	,fox_entrance3: 'The hunter\'s son began to skip out of the cave. Just then the cunning fox jumped out from behind a bush.\n"Surprise!" smirked the fox. "Got you, didn\'t I? That was fun! Haven\'t played a prank like that for years! Thanks for that. But anyway, what are you doing with those mushrooms?"'
	,fox_entrance3_disp: 1
	,fox_response1: '"No no no, that\'s no good," frowned the fox in disapproval. "You need more dramatic emphasis! I\'m not giving them to a subpar performer without anything in return."'
	,fox_response1_disp: -1
	,fox_response2: '"Ooh! Pranking them, I see," smirked the fox, swishing his fluffy tail. "I approve. But that doesn\'t mean that I will just give them to you."'
	,fox_response2_disp: +1
	,fox_response3: '"Trying to lie, eh? You need to be better to fool me, boy," said the fox lazily. "Well, at least you\'re trying. Sadly, they\'re mine. What will you give me in exchange for them?"'
	,fox_response3_disp: 0
	,fox_bargain: ''
	,fox_instareject: '"Give those back, and I will let you leave with your life," scowled the fox, baring his sharp teeth. "I will count to three. If you are still here, perhaps I will change my mind. Three!"\nThe hunter\'s son ran away quickly into the woods, leaving the mushrooms behind.'
	,fox_reject: ''
	,fox_ending1: ''
	,fox_ending2: '"I see. That is good. I shall train you to be a prankster in exchange for your services! Take the mushrooms now, but return to me quickly."\nThe hunter\'s son took the glowing mushrooms and left.'
	,fox_ending3: '"But what shall I do with that?" asked the fox. "Leave, boy."\nThe hunter\'s son left the cave his head hanging in defeat.'
	,fox_ending4: '"Proof of a successful prank! I see," crowed the fox. "Go now, my disciple, and return to me in haste!"\nJoyful at successfully obtaining the mushrooms, the hunter\'s son skipped his way back to his brothers.'
	,fox_payment_servitude: true
	,fox_payment_money: false
	,fox_payment_cake: true
	,fox_payment_moss: false
	,fox_payment_loyalty: false
	
	,mayor_he: 'she'
	,mayor_his: 'her'
	,mayor_name: 'the mayor\'s daughter'
	,mayor_desc: 'a proud mayor, a man famed for his arrogance and vanity'
	,mayor_entrance1: '"I trust that you too see the work and craftsmanship that went into this beautiful veil," said the bride. "My dear father paid a large sum of money for it. Why, then, should I give it to you?"'
	,mayor_entrance1_disp: 0
	,mayor_entrance2: '"Do you see me the daughter of a poor merchant who needs to sell even her wedding veil?" said the bride, offended. "Still, I am curious as to why you would need it so."'
	,mayor_entrance2_disp: -1
	,mayor_entrance3: 'The bride blushed at the compliment. "Thank you for the offer," smiled the bride. "Yet, the veil is perfectly spotless, and I know that you are not one of my father\'s men. Do tell me the real reason why you asked for the veil."'
	,mayor_entrance3_disp: 1
	,mayor_response1: '"I see," said the bride flatly. "I am sorry to hear that. Yet this veil is of high quality, made from the best fabric and lace the seamstresses could find."'
	,mayor_response1_disp: 0
	,mayor_response2: '"Spells and potions?" scoffed the bride. "I have enough power and wealth. I do not need any magic spells."'
	,mayor_response2_disp: -1
	,mayor_response3: '"A fairy veil?" gasped the bride in delight. "Oh, how delightful would it be were I to possess one!"'
	,mayor_response3_disp: 1
	,mayor_bargain: '"Tell me now. My veil was made from the finest spider silk, by ten of the country\'s best tailors. What can you give me in exchange for such a valuable item?"'
	,mayor_instareject: '"You come to me, asking for me to sell my veil like I am some poor commoner," said the bride. "Leave, now, or I shall ask my father to throw you in jail."\nThe hunter\'s son returned to his brothers, dejected.'
	,mayor_reject: '"I do not think you have anything of value to me," said the bride.'
	,mayor_ending1: '"That is fair, I accept your offer. Take the veil, but remember to come back with what you promised."'
	,mayor_ending2: '"That is fair, and it shall be good to have more servants around my new house. Take the veil, but hurry back. There are many chores to be done."\n The hunter\'s son returned to his brothers, glad to have the veil, but heavy at heart to know that he would not see his mother for long.'
	,mayor_ending3: '"My veil is worth more than anything you could offer. Leave me now."\nThe hunter\'s son returned to his brothers, dejected.'
	,mayor_payment_servitude: true
	,mayor_payment_money: false
	,mayor_payment_veil: true
	,mayor_payment_cure: false
	,mayor_payment_loyalty: false
	
	,merchant_he: 'she'
	,merchant_his: 'her'
	,merchant_name: 'the merchant\'s daughter'
	,merchant_desc: 'a merchant, a man famed for his pragmatism and greed'
	,merchant_entrance1: '"Such a bold request with no explanation or offer of payment? I am not some simple girl," said the bride testily. "If I am to give you this veil, I should at least know why."'
	,merchant_entrance1_disp: -1
	,merchant_entrance2: '"I am intrigued by your offer, and am glad to see you understand the concept of fair trade," said the bride. "Still I am curious, what is it you want with my veil?"'
	,merchant_entrance2_disp: 1
	,merchant_entrance3: '"A clever ruse," said the bride. "But I have never seen you before, and cannot believe that you are servant or guest here. What is it you want with my veil?"'
	,merchant_entrance3_disp: 0
	,merchant_response1: '"A fair reason," said the bride. "But you seem poor, and have given no indication of greater payment. I don\'t see how I would benefit from giving you this veil."'
	,merchant_response1_disp: -1
	,merchant_response2: '"Such a spell or potion sounds wondrous indeed," said the bride, her eyes shining. "Would that I could have such a thing.'
	,merchant_response2_disp: +1
	,merchant_response3: '"I am no idle, silly girl," said the bride dismissively. "Such vanities do not appeal to me."'
	,merchant_response3_disp: 0
	,merchant_bargain: '"Speak plainly now. What are you offering me?"'
	,merchant_instareject: '"You show no understanding of fair trade, offering me nothing for my veil," said the bride. "Leave now, before I call out and have you removed forcibly."\nThe hunter\'s son returned to his brothers, dejected.'
	,merchant_reject: '"That does not seem like fair payment for my veil," said the bride.'
	,merchant_ending1: '"I accept your payment. Here is the veil. Just remember to give me what I am promised."\nThe hunter\'s son returned to his brothers with a glad heart.'
	,merchant_ending2: '"Only a fool would reject an offer for more help around the house. Take the veil, but remember to return to me and fulfill your terms of service."\nThe hunter\'s son returned to his brothers, glad to have the veil, but heavy at heart to know that he would not see his mother for long.'
	,merchant_ending3: '"I\'m done negotiating. Leave now."\nThe hunter\'s son returned to his brothers, dejected.'
	,merchant_payment_servitude: true
	,merchant_payment_money: false
	,merchant_payment_veil: false
	,merchant_payment_cure: true
	,merchant_payment_loyalty: false
	
	,carpenter_he: 'she'
	,carpenter_his: 'her'
	,carpenter_name: 'the carpenter\'s daughter'
	,carpenter_desc: 'a carpenter, a man famed for his intelligence and good will'
	,carpenter_entrance1: '"On this, such a happy day for me, I would be heartless to refuse to aid another," replied the bride. "But pray tell, why is it you want my veil?"'
	,carpenter_entrance1_disp: 1
	,carpenter_entrance2: '"A strange offer indeed," replied the bride. "I have never been fond of haggling, though I am intrigued. For what reason do you want my veil?"'
	,carpenter_entrance2_disp: 0
	,carpenter_entrance3: '"It is clear for anyone to see that my veil is not dirty," replied the bride. "Why the lie? What could you want with my veil?"'
	,carpenter_entrance3_disp: -1
	,carpenter_response1: '"Unhappy soul!" cried the bride. "Your devotion to your mother is moving."'
	,carpenter_response1_disp: 1
	,carpenter_response2: '"…that certainly sounds…interesting," said the bride, looking doubtful.'
	,carpenter_response2_disp: 0
	,carpenter_response3: '"I do not believe in such fairy magics," said the bride. "Please give me some credit for intelligence."'
	,carpenter_response3_disp: -1
	,carpenter_bargain: '"It is quite a request you make," said the bride. "I hate to ask, but do you have anything to offer me in return?"'
	,carpenter_instareject: '"To be honest, I\'m not sure I can trust your intentions," the bride continued. "Please leave me to my wedding. I\'d be more than willing to give my veil to one with good reason, but good reason you do not have."\nThe hunter\'s son returned to his brothers, dejected.'
	,carpenter_reject: '"I\'m not interested in that," said the bride.'
	,carpenter_ending1: '"I would be heartless to refuse such an earnest request. Take the veil, and may your mother be healthy once again."\nThe hunter\'s son returned to his brothers with a glad heart.'
	,carpenter_ending2: '"I know my father could always use an assistant," said the bride. "And perhaps you could learn some skills from him as well. Take the veil, but remember to return and fulfill your terms of service."\nThe hunter\'s son returned to his brothers, glad to have the veil, but heavy at heart to know that he would not see his mother for long.'
	,carpenter_ending3: '"I\'m sorry, but I have to go. The ceremony is beginning."\nThe hunter\'s son returned to his brothers, dejected.'
	,carpenter_payment_servitude: true
	,carpenter_payment_money: false
	,carpenter_payment_veil: false
	,carpenter_payment_cure: true
	,carpenter_payment_loyalty: true
};

// Specify the stats to use in debug mode

debugStats = stats;