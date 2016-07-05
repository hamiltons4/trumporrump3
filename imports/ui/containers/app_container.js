import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout } from '../layouts/app_layout'

import { LineData } from '../../../both/collections/tweets.js'
//var lindat = [];
var trumps = 0;
var rumps = 0;
var bardat = [];
var wbardat = [];
/*
const linedat = LineData.find().fetch();
for (i=0; i<linedat.length; i++) {
			trumps = trumps + linedat[i].trumps;
			rumps = rumps + linedat[i].rumps;
			console.log("totalT = " + trumps);
			console.log("totalR =" + rumps);
	};
*/
export default createContainer(() => {
	//const handle = Meteor.subscribe('linedat');
	//const loaded = handle.ready();
	//const linedat = LineData.find().fetch();
	Meteor.subscribe('linedat');// this line alone worked with uline
	const linedat = LineData.find().fetch();
	trumps = 0;
	rumps = 0;
	for (i=0; i<linedat.length; i++) {
			trumps = trumps + linedat[i].trumps;
			rumps = rumps + linedat[i].rumps;
			//console.log("totalT = " + trumps);
			//console.log("totalR =" + rumps);
		};
 	
	return {
		//loaded,
		//linedat:loaded?LineData.find().fetch():[], 
		//linedat: LineData.find().fetch(), // this line alone worked with uline
		linedat: LineData.find().fetch(),
		bardat: [{qty: trumps, xlabel: "USATrumps"},
				  {qty: rumps, xlabel: "USARumps"}],
		wbardat: [{qty: trumps, xlabel: "USATrumps"},
				   {qty: rumps, xlabel: "USARumps"}],		  
	};
		


	
}, AppLayout) 