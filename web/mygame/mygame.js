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
	
	,well_action1: "well_action1"
	,well_action2: "well_action2"
	,well_action3: "well_action3"
	,well_reason1: "well_reason1"
	,well_reason2: "well_reason2"
	,well_reason3: "well_reason3"
	
	,king_pronoun: "he"
	,king_name: "the King"
	,king_entrance1: "king_entrance1"
	,king_entrance1_disp: -1
	,king_entrance2: "king_entrance2"
	,king_entrance2_disp: 0
	,king_entrance3: "king_entrance3"
	,king_entrance3_disp: 1
	,king_response1: "king_response1"
	,king_response1_disp: -1
	,king_response2: "king_response2"
	,king_response2_disp: 0
	,king_response3: "king_response3"
	,king_response3_disp: 1
	,king_bargain: "king_bargain"
	,king_instareject: "king_insta-reject"
	,king_accept: "king_accept"
	,king_reject: "king_reject"
	,king_ending1: "king_ending1"
	,king_ending2: "king_ending2"
	,king_ending3: "king_ending3"
	,king_payment_servitude: false
	,king_payment_money: false
	,king_payment_gold: false
	,king_payment_cure: false
	,king_payment_loyalty: true
};

// Specify the stats to use in debug mode

debugStats = stats;