import React, { Component } from 'react';

import { moment } from 'meteor/momentjs:moment'

var today = moment().format('MMMM Do YYYY');
var winner = "";
/*
	So what I want to do here is total both the US and world Trumps and the US and world Rumps and
	depending on which is greater initiate a different animation.
	I could do this by assigning a className but There seems to be a timing question. The animation 
	needs to run after the modal is done, and only once. (meteor call?) This involves getting
	data from the app container where the sums trumps/wtrumps and rumps/wrumps already exist.
	So, I need a toggle there based on their values. 
*/

Mainanim = React.createClass({
componentDidMount() {	
	//console.log("votewinner = ");
	//console.log(this.props.votewinner);
	if (this.props.votewinner == 1) {
		winner = "Rump";
	}else{
		winner = "Trump";
	}

},	

	render() {
		return (
			<div>
				<h3 className="animtext">Today {today}</h3>
				<h4>{winner}</h4>
				<img className="mainimg shake-little shake-constant" id="trumpmainimg" src={"../../images/TrumpM.png"} alt="Trump"/>
				<img className="mainimg shake-little shake-constant" id="rumpmainimg" src={"../../images/RumpM.png"} alt="Rump"/>

			</div>
		)
	}
})
module.exports = Mainanim;