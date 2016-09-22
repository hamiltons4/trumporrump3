import React, { Component } from 'react';
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker'
import { moment } from 'meteor/momentjs:moment'
//import { classNames } from 'classnames'

var classNames = require('classnames');
var today = moment().format('MMMM Do YYYY');
var winner = "";
var nonwinner = "";

/*
	So what I want to do here is total both the US and world Trumps and the US and world Rumps and
	depending on which is greater initiate a different animation.
	I could do this by assigning a className but There seems to be a timing question. The animation 
	needs to run after the modal is done, and only once. (meteor call?) This involves getting
	data from the app container where the sums trumps/wtrumps and rumps/wrumps already exist.
	So, I need a toggle there based on their values. 
*/

Mainanim = React.createClass({
/*startComputation() {
		var animclass = 'mainimg';	
		Tracker.autorun(function () {
            if (! Session.equals("modalopen", false))
         		return;
  			console.log("Trackerfirst");
  			animclass += ' shake-little shake-constant';

		}); 
},	
*/

componentDidMount() {	
	//console.log("votewinner = ");
	//console.log(this.props.votewinner);
	//setTimeout(this.startComputation, 0);

	if (this.props.votewinner == 1) {
		winner = "Rump";
	}else{
		winner = "Trump";
	}

	/* 	i want the second moving animation to start after the modal is closed so from here that means animclass = 
		the shaking one.. so if animclass is shaking then a delay. turn off animclasss and the winner based on 
		votewinner move up and the other move right. So to do this I could write my own shake animation and then 
		run it in series with the rest or I could turn off the shake after about 1.5 seconds and then turn off the
		shake hopefully using the custom shake.  It appears the app container cannot go down into functions only
		if, then, for in the container. So, given the shake runs for a certain duration I could set a delay on what
		ever following animation. I would need four following animations, for each svg depending on whether it wins
		or loses. I already have the ids. And I have votewinner inside the mainimg component. But I can make a 
		session variable based on votewinner. So I can leave the shake classname and based on votewinner send a
		session that is in an if in the container so the id is appended with winner or loser and then I have four
		animations based on the trumpwinner trumploser rumpwinner and rumploser ids!
	*/

	//var animclass = 'mainimg';
	//Session.set("test", "mainimg  shake-little shake-constant");
	/*
	Tracker.autorun(function () {
			//var animclass = 'mainimg';
            if (! Session.equals("modalopen", false))
         		return;
         	//classyset;
  			//c.stop();
  			alert("Oh no!");
  			animclass += ' shake-little shake-constant';

		}); 
	*/
},	

	
	render() {
		/*
		function startComputation() {
		var animclass = 'mainimg';	
		Tracker.autorun(function () {
            if ( Session.equals("modalopen", false))
         		return;
  			console.log("Trackersecond");
  			animclass += ' shake-little shake-constant';


		}); 
		return animclass;
		}
		*/	
		/*
		var animclass = classNames({
			'mainimg': true,
			'shake-little': !Session.get("modalopen"),
			'shake-constant': !Session.get("modalopen"),
			'test': !Session.get("modalopen") && hasnotbeenopened,



		}); 
		*/
		//var animclass = 'mainimg';
		//if (!Session.get("modalopen")) animclass += ' shake-little shake-constant';
		/*startComputation() {
		var animclass = 'mainimg';	
		Tracker.autorun(function () {
            if (! Session.equals("modalopen", false))
         		return;
         	//classyset;
  			//c.stop();
  			console.log("Trackerthird");
  			animclass += ' shake-little shake-constant';

		}); 
		}*/
		return (
			<div>
				<h3 className="animtext">Today {today}</h3>
				<h4>{winner}</h4>
				{/*<img className="mainimg shake-little shake-constant" id="trumpmainimg" src={"../../images/TrumpM.png"} alt="Trump"/>
				<img className="mainimg shake-little shake-constant" id="rumpmainimg" src={"../../images/RumpM.png"} alt="Rump"/>*/}
				{/*<img className="mainimg" id="trumpmainimg" src={"../../images/TrumpM.png"} alt="Trump"/>
				<img className="mainimg"  id="rumpmainimg" src={"../../images/RumpM.png"} alt="Rump"/>*/}
				{/*<img className={startComputation()} id="trumpmainimg" src={"../../images/TrumpM.png"} alt="Trump"/>
				<img className={startComputation()} id="rumpmainimg" src={"../../images/RumpM.png"} alt="Rump"/>*/}
				<img className={this.props.animclass} id={"trumpmainimg"+this.props.votewinner} src={"../../images/TrumpM2.png"} alt="Trump"/>
				<img className={this.props.animclass} id={"rumpmainimg"+this.props.votewinner} src={"../../images/RumpM2.png"} alt="Rump"/>
				{/*<img className={Session.get("sesanimclass")} id="trumpmainimg" src={"../../images/TrumpM.png"} alt="Trump"/>
				<img className={Session.get("sesanimclass")} id="rumpmainimg" src={"../../images/RumpM.png"} alt="Rump"/>*/}
				


			</div>
		)
	}
})
module.exports = Mainanim;