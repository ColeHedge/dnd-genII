import React, { Component } from 'react';

class GroupInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 1, /*Represents party level*/
			size: 1 /*Represents number of players in the party*/
		};

		/*Binds 'this' to functions*/
		this.handleChange = this.handleChange.bind(this);
		this.sendToParent = this.sendToParent.bind(this);
	}

	/*Sends state to parent component through callback prop*/
	sendToParent() {
		this.props.callBack(this.state);
	}

	/*Updates the current state with value inputed by the user
	Runs when user changes the size dropdown
	Sends current state of component to parent
	Requires data-key attribute from the event tag*/
	handleChange(event) {
		var key = event.target.getAttribute('data-key');
		var value = parseInt(event.target.value);
		if(key === "size") {
			this.setState({size: value}, function() {
				this.sendToParent();
			});
		} else {
			this.setState({level: value}, function() {
				this.sendToParent();
			});
		}
	}

	render() {
		let levelOptions = [];
		for(let i = 1; i <= 20; i++) {
			levelOptions.push(<option value={i}>{i}</option>);
		}

		let sizeOptions = [];
		for(let i = 1; i <= 12; i++) {
			sizeOptions.push(<option value={i}>{i}</option>);
		}

		return(
			<div>
				<h1>Group Info</h1>
				<label>
				Party Level:
					<select value={this.state.level} data-key="level" onChange={this.handleChange}>
		            	{levelOptions}
	            	</select>
				</label>
				<br />
				<label>
					Party Size:
					<select value={this.state.size} data-key="size" onChange={this.handleChange}>
		            	{sizeOptions}
	            	</select>
				</label>
			</div>
		);
	}
}

export default GroupInfo;