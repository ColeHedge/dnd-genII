import React, { Component } from 'react';

import TestForm from './testForm.js';
import GroupInfo from './groupInfo.js';
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
			encdiff: ''
		}

		/*Binds 'this' to functions*/
		this.groupInfoCallBack = this.groupInfoCallBack.bind(this);
		this.encounterCallBack = this.encounterCallBack.bind(this);
		this.generateEncounter = this.generateEncounter.bind(this);

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
			encdiff: data.encdiff
		}, function() {
			console.log("The environment was changed to " + data.environment + " The current saved environment is " + this.state.environment);
			console.log("The min Cr was changed to " + data.mincr + " The current saved minCr is " + this.state.mincr);
			console.log("The max Cr was changed to " + data.maxcr + " The current saved maxCr is " + this.state.maxcr);
			console.log("The encounter difficultly was changed to " + data.encdiff + " The current saved encounter difficultly is " + this.state.encdiff);


		});
	}

	generateEncounter() {
		if(this.state.encdiff === '' || this.state.mincr === '' || this.state.maxcr === '') {
			console.log('Not all information was entered');
		} else {
			console.log("Generate the encounter");
		}
	}

	render() {
		let multiplier = this.state.size * this.state.level
		return (
			<div class="container">
				<GroupInfo callBack={this.groupInfoCallBack}></GroupInfo>
				<TestForm callBack={this.encounterCallBack}></TestForm>
				<p>The current multiplier is {multiplier}</p>
				<button onClick={this.generateEncounter}>Generate Encounter</button>
			</div>
		);
	}
}

export default Body;