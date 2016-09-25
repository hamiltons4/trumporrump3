import React, { Component, PropTypes } from 'react';

import { Button } from 'react-bootstrap';
import { moment } from 'meteor/momentjs:moment'
import { flowkey } from 'meteor/flowkey:user-location'

//var userloc = {};
var councode = "US"; //flowkey doesn't always work default to us.
var councodeR = "US";// I could also if us or ""

export default class Vote extends Component {
		handleTSubmit(e) {
			//e.preventDefault();
			//userloc = UserLocation.get();
			Meteor.call('UserLocation/get', function(err, res) {
				if(res) {console.log(res);
				//councode = res.country_code;
				councode = "SP";
				console.log(councode);
				}	
			});
			//councode = userloc.country_code;
			//var newcouncode = councode;
			//console.log(userloc.country_code);
			//console.log(councode);
			//console.log(newcouncode);
			var scaleMult = 5; // scale multiplier for display
			var vote = 1 * scaleMult; 
			//var parseDate = d3.time.format("%a %b %d %Y").parse;
			console.log('Trump Vote!');
			// If trump button is pressed increment trumps for that day
			// If rump button is pressed increment rumps for that day	
			/*Meteor.call("increTrumps", vote, moment().isoWeekday(), function(e, r) {
				if (e) alert(e.reason)
			}); */
		    /*
			Meteor.call("increTrumps", vote, moment().utc().startOf('day').toDate(), function(e, r) {
				if (e) alert(e.reason)
			});
			*/
			//dateString = new Date;
			//dateString = parseDate(dateString);
			if (councode == "US") {
				/* So what I want to do in here is call UincreTrumps if it is a us press and 
				WIncreTrumps if it is a world press. This necessitates switch from LineData to
				ULineData and WLineData as well as new publications and subscriptions.. */
				console.log("Trump pressed");
				Meteor.call("increTrumps", vote, moment().dayOfYear(), function(e, r) {
					if (e) alert(e.reason)
					Session.set("oldT", r);	//this is a pattern to use session variables initiated on the server
				});
			}else {
				Meteor.call("WIncreTrumps", vote, moment().dayOfYear(), function(e, r) {
					if (e) alert(e.reason)
					Session.set("oldWT", r);	
				});
			}
			/*Meteor.call("increTrumps", vote, moment().dayOfYear(), function(e, r) {
				if (e) alert(e.reason)
			});*/

		}

		handleRSubmit(e) {
			//e.preventDefault();
			Meteor.call('UserLocation/get', function(err, res) {
				if(res) {console.log(res);
				//councodeR = res.country_code;
				councodeR = "SP";
				console.log(councodeR);

				}	
			});

			var scaleMult = 5; // scale multiplier for display
			var vote = 1* scaleMult;
			console.log('Rump Vote!');	
			/*Meteor.call("increRumps", vote, moment().isoWeekday(), function(e, r) {
				if (e) alert(e.reason)
			});*/
			if (councodeR == "US") {
			console.log("Rump pressed");	
			Meteor.call("increRumps", vote, moment().dayOfYear(), function(e,r) {
				if (e) alert(e.reason)
				Session.set("oldR", r); //this is a pattern to use session variables initiated on the server	
			});
			} else {
				Meteor.call("WIncreRumps", vote, moment().dayOfYear(), function(e, r) {
					if (e) alert(e.reason)
					Session.set("oldWR", r);	
				});
			}
		}
		
	render() {
		return (
			<div className="vote">
				<div><button onClick={this.handleTSubmit} className="btn btn-primary" id="tbutton" type="submit">Trump</button></div>
				<div><h1><span className="label" id="vlabel">VOTE!</span></h1></div>
				<div><button onClick={this.handleRSubmit} className="btn btn-primary" id="rbutton" type="submit">Rump</button></div>
			</div>
		)
	}
}
