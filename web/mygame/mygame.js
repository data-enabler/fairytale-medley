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
	"selector"
]);

// Specify the default starting stats here

stats = {
	next_scene: 0
	
	,disposition: 0
	
	,current_brother: "none"
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
	,king_entrance1: '"Certainly," replied the spirit.\nJust then, the king happened to pass by. He saw the first brother near the well, and asked, "What business does this young man have with my well?"\nThe first brother bowed. "I humbly ask your permission to draw from this, your well," he said.\n"Many ask such a boon," mused the king. "Pray tell, why do you need the water so?"'
	,king_entrance1_disp: +1
	,king_entrance2: 'Just then, the king happened to pass by. He saw the first brother near the well, and asked, "What business does this young man have with my well?"\nThe spirit spoke up, as it was bound by duty to answer the well\'s owner truthfully. "The boy was trying to bargain with me in return for some water from the well," it said, abashed.\n"It is clear the well water is worth much to you, that you would bargain for it," said the king. "Why do you want it so badly?"'
	,king_entrance2_disp: 0
	,king_entrance3: 'The spirit, falling for the ruse, turned to chide the finch, and in that instant, the first brother snatched some water from the well and began to leave, when…\nThe spirit saw the first brother, and quickly snatched the water back from him.\nJust then, the king happened to pass by. He saw the first brother near the well, and asked, "What business does this young man have with my well?"\n"This boy stole water from your well!" cried the spirit angrily.\nThe king turned to the first brother. "You have stolen what is rightfully mine. Why should I let you leave with your ill gotten gains?"'
	,king_entrance3_disp: -1
	,king_response1: '"A noble reason," said the king. "Your devotion to your mother is admirable."'
	,king_response1_disp: 1
	,king_response2: '"How interesting," said the king. "I know much, but even I do not know of such a cure."'
	,king_response2_disp: 0
	,king_response3: '"A hollow lie," cried the king angrily. "I know such a spell cannot exist."'
	,king_response3_disp: -1
	,king_bargain: '"I don\'t often give my well water away for free," the king continued. "What would you offer me in return?"'
	,king_instareject: '"You are a base thief and liar," the king concluded. "I would not give this water to you for any reason. I shall have you thrown in my dungeons."\nThe first brother, fearing for his safety, fled as fast as he could.'
	,king_reject: '"I have no need for that," said the king.'
	,king_ending1: '"A fair trade. You may take the water and leave," said the king.\nThe first brother took the water and left.'
	,king_ending2: '"This is a fitting payment. You may take the water. However, be sure to return and fulfill your service to me once your mother is cured, or it will go badly for you," said the king.\nThe first brother took the water and left.'
	,king_ending3: '"It appears you have nothing of value to offer me. Be on your way." The king watched the first brother return to the woods.'
	,king_payment_servitude: true
	,king_payment_money: false
	,king_payment_gold: false
	,king_payment_cure: true
	,king_payment_loyalty: true
	
	,troll_he: 'he'
	,troll_his: 'his'
	,troll_name: 'the troll'
	,troll_desc: 'an unsightly and malevolent troll'
	,troll_entrance1: 'Just then, the troll happened to pass by. He saw the first brother near the well, and roared, "Who dares approach me well?"\nThe first brother bowed. "I humbly ask your permission to draw from this, your well," he said.\n"Many fools come wantin’ me water," replied the troll. "Why ya need it, eh?"'
	,troll_entrance1_disp: +1
	,troll_entrance2: 'Just then, the troll happened to pass by. He saw the first brother near the well, and roared, "Who dares approach me well?"\nThe spirit spoke up, as it was bound by duty to answer the well\'s owner truthfully. "The boy was trying to bargain with me in return for some water from the well," it said, abashed.\n"Ya want water so much ya be bargainin’ for it," replied the troll. "Why ya need it, eh?"'
	,troll_entrance2_disp: 0
	,troll_entrance3: 'The spirit, falling for the ruse, turned to chide the finch, and in that instant, the first brother snatched some water from the well and began to leave, when…\nThe spirit saw the first brother, and quickly snatched the water back from him.\nJust then, the troll happened to pass by. He saw the first brother near the well, and roared, "Who dares approach me well?"\n"This boy stole water from your well!" cried the spirit angrily.\nThe troll turned to the first brother. "Ya come to me home, stealin’ me water. Why meself let ya go, eh?"'
	,troll_entrance3_disp: -1
	,troll_response1: '"Ya mother, eh?" cackled the troll. "Me know no mother."'
	,troll_response1_disp: 0
	,troll_response2: '"Ya makin’ elixir?!" yelled the troll. "Ya tryin’ ta poison me?"'
	,troll_response2_disp: -1
	,troll_response3: '"Gold, eh?" smirked the troll. "Ya make gold from me water?"'
	,troll_response3_disp: 1
	,troll_bargain: '"Me water, me well. Meself no give me water to human fools," the troll continued. "What ya be givin’ me?"'
	,troll_instareject: '"Thief! Scum!" the troll bellowed. "Ya come to steal me water, I be havin’ ya for dinner!"\nThe first brother, fearing for his safety, fled as fast as he could.'
	,troll_reject: '"What? That not something I be needin\'," remarked the troll.'
	,troll_ending1: '"Fair’s fair, eh. Ya be takin’ da water now, but ya better be comin’ back with me gold," smirked the troll.\nThe first brother took the water and left.'
	,troll_ending2: '"Fair’s fair, eh. Ya be takin’ da water now. When ya mother be well, ya better be comin’ back to me," smirked the troll.'
	,troll_ending3: '"Ya fool be havin’ nothing worthwhile to offer! Leave me place, now!" The troll watched the first brother return to the woods.'
	,troll_payment_servitude: true
	,troll_payment_money: false
	,troll_payment_gold: true
	,troll_payment_cure: false
	,troll_payment_loyalty: false
	
	,witch_he: 'she'
	,witch_his: 'her'
	,witch_name: 'the witch'
	,witch_desc: ''
	,witch_entrance1: ''
	,witch_entrance1_disp: +1
	,witch_entrance2: ''
	,witch_entrance2_disp: 0
	,witch_entrance3: ''
	,witch_entrance3_disp: -1
	,witch_response1: ''
	,witch_response1_disp: 1
	,witch_response2: ''
	,witch_response2_disp: 0
	,witch_response3: ''
	,witch_response3_disp: -1
	,witch_bargain: ''
	,witch_instareject: ''
	,witch_reject: ''
	,witch_ending1: ''
	,witch_ending2: ''
	,witch_ending3: ''
	,witch_payment_servitude: true
	,witch_payment_money: false
	,witch_payment_gold: false
	,witch_payment_cure: true
	,witch_payment_loyalty: true
};

// Specify the stats to use in debug mode

debugStats = stats;