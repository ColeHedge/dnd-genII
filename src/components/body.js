import React, { Component } from 'react';

import TestForm from './testForm.js';
import GroupInfo from './groupInfo.js';
import axios from 'axios';

import '../styles/Body.css';
class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {easy: [25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800,
			 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800],
			 med: [50, 100, 150, 250, 500, 600, 750, 900, 1100, 1400, 1600,
			2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700],
			hard: [75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400,
			3000, 3400, 3800, 4300, 3800, 4300, 4800, 5900, 6300, 7300, 8500],
			deadly: [100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600,
			4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700],
			size: 1,
			level: 1,
			environment: 'any',
			mincr: '',
			maxcr: '',
			encdiff: '',
			nummon:'',
			monsterlist: [{
				ac: 12,
				alignment: 'neutral good',
				cr: "1/4",
				environment: "mountain, planar",
				guid: "0cd9a2e0-16bc-4c84-86c8-feb035c0b5d6",
				hp: 13,
				init: 2,
				lair: '',
				legendary: '',
				name: 'Aarakocra',
				section: '',
				size: 'Medium',
				source: "Monster Manual: 12, Princes of the Apocalypse Online Supplement v1.0: 6",
				tags: "Aarakocra",
				type: "Humanoid",
				unique: ''
			},
			{
				ac: 19,
				alignment: "lawful good",
				cr: "15",
				environment: "coast",
				guid: "ac41ad48-6631-413e-8e68-6e29696c8f35",
				hp: 212,
				init: 0,
				lair: "lair",
				legendary: "legendary",
				name: "Adult Bronze Dragon",
				section: "Dragons",
				size: "Huge",
				source: "Monster Manual: 108, Princes of the Apocalypse Online Supplement v1.0: 7",
				tags: "",
				type: "Dragon",
				unique: ''			
			}],
			monsterarray: []
		}

		/*Binds 'this' to functions*/
		this.groupInfoCallBack = this.groupInfoCallBack.bind(this);
		this.encounterCallBack = this.encounterCallBack.bind(this);
		this.generateEncounter = this.generateEncounter.bind(this);
		this.displayEncounter = this.displayEncounter.bind(this);
		this.testAJAX = this.testAJAX.bind(this);

	}

	/*Takes in an json object parameter "data" and overwrites current state with data's properties*/
	/*TEST PURPOSES: logs changes to the console REMOVE WHEN TESTING IS COMPLETE*/
	groupInfoCallBack(data) {
		this.setState({level: data.level,
			size: data.size}, function() {
				console.log("The group level was changed to " + data.level + " The current saved level is " + this.state.level);
				console.log("The group size was changed to " + data.size + " The current saved size is " + this.state.size);
			});
	}
	/*Takes in an json object parameter "data" and overwrites current state with data's properties*/
	/*TEST PURPOSES: logs changes to the console REMOVE WHEN TESTING IS COMPLETE*/
	encounterCallBack(data) {
		this.setState({environment: data.environment,
			mincr: data.mincr,
			maxcr: data.maxcr,
			encdiff: data.encdiff,
			nummon: data.nummon
		}, function() {
			console.log("The environment was changed to " + data.environment + " The current saved environment is " + this.state.environment);
			console.log("The min Cr was changed to " + data.mincr + " The current saved minCr is " + this.state.mincr);
			console.log("The max Cr was changed to " + data.maxcr + " The current saved maxCr is " + this.state.maxcr);
			console.log("The encounter difficultly was changed to " + data.encdiff + " The current saved encounter difficultly is " + this.state.encdiff);
			console.log("The number of monsters was changed to " + data.nummon + " The current saved number of monsters is " + this.state.nummon);


		});
	}

	displayEncounter() {
		var monsterArray = [];
		var display = true;
		this.state.monsterlist.forEach(function(monster) {
			console.log("This monster's name is " + monster.name);
			monsterArray.push(
				<div class='monster-display'>
					<h3>{monster.name}</h3>
					<p>AC: {monster.ac}</p>
					<p>HP: {monster.hp}</p>
					<p>CR: {monster.cr}</p>
					<p>Environment: {monster.environment}</p>
					<p>size: {monster.size}</p>
					<p>Alignment: {monster.alignment}</p>
					<p>Source: {monster.source}</p>
				</div>
			);
		});

		this.setState({monsterarray: monsterArray}, function() {
         	console.log("Monster State has been updated to " + this.state.monsterarray);
 		});

	}

	testAJAX() {
		axios.get('https://www.us-central1-dnd-gen.cloudfunctions.net/helloWorld')
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	// determineCr(xpBudg, list) {

	// }

	generateEncounter() {
		if(this.state.encdiff === '' || this.state.mincr === '' || this.state.maxcr === '' || this.state.nummon == '') {
			console.log('Not all information was entered');
		} else if(this.state.mincr > this.state.maxcr) {
			console.log("This minimun cr is greater than the maximun cr");
		} else {
			console.log("Generate the encounter");
			//calculate xp budget
			console.log("Calculating xp budget");
			var xpBudg;
			if(this.state.encdiff == 'easy') {
				xpBudg = this.state.easy[this.state.level];
			} else if(this.state.encdiff == 'med') {
				xpBudg = this.state.med[this.state.level];
			} else if(this.state.encdiff == 'hard') {
				xpBudg = this.state.hard[this.state.level];
			} else {
				xpBudg = this.state.deadly[this.state.level];
			}

			xpBudg = xpBudg * this.state.size;
			console.log("the xp budget has been determined to be " + xpBudg);
			// determine number of monsters
			var numMonster = this.state.nummon;
			var multiplier;
			if(numMonster == 1) {
				multiplier = 1
			} else if(numMonster == 2) {
				multiplier = 1.5;
			} else if( numMonster > 2 && numMonster <= 6) {
				multiplier = 2;
			} else {
				multiplier = 2.5;
			}
 			//determine crs of monsters

			//send crs to server
			//server sends back monster details
			//display details
		}
	}

	render() {
		let multiplier = this.state.size * this.state.level
		return (
			<div className="Body">
				<GroupInfo callBack={this.groupInfoCallBack}></GroupInfo>
				<TestForm callBack={this.encounterCallBack}></TestForm>
				<div className="Display">
					<button className="Generate" onClick={this.generateEncounter}>Generate Encounter</button>
					<h2>Display Content Goest Here</h2>
					<button className="Generate" onClick={this.displayEncounter}>Test Display</button>
					{this.state.monsterarray}
					<button className="Generate" onClick={this.testAJAX}>AJAX Test</button>
				</div>
			</div>
		);
	}
}

export default Body;