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
	"selector"
]);

// Specify the default starting stats here

stats = {
	next_scene: 0
	
	,inv_money: true
	
	,well_action1: '"May I speak to the king and ask his permission?" asked the first brother.'
	,well_action2: '"I do not have much, but if you let me draw some water, perhaps I could find a way to free you of your duty to the king." said the first brother.'
	,well_action3: 'The first brother feigned a look of concern. "If none may draw from the well but its owner, then how is it that finch is carrying water away in a nutshell?"'
	,well_reason1: '"Please," said the first brother. "My mother is deathly ill, and I need this well water to cure her."'
	,well_reason2: '"This well water is one of several ingredients in a magical nostrum," said the first brother. "The making of which is known only to an acquaintance of mine. I am gathering the ingredients for her."'
	,well_reason3: '"I know of a spell that may turn this particular water to gold," said the first brother. "If you let me have this water, I can make it worth your while."'
	
	,king_pronoun: "he"
	,king_name: "the King"
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
};

// Specify the stats to use in debug mode

debugStats = stats;