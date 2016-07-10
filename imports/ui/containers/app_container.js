import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout } from '../layouts/app_layout'

import { LineData } from '../../../both/collections/tweets.js'
import { WLineData } from '../../../both/collections/tweets.js'

//var lindat = [];
var trumps = 0;
var rumps = 0;
var wtrumps = 0;
var wrumps = 0;
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
	Meteor.subscribe('wlinedat');
	const linedat = LineData.find().fetch();
	const wlinedat = WLineData.find().fetch();
	trumps = 0;
	rumps = 0;
	wtrumps = 0;
	wrumps = 0;

	for (i=0; i<linedat.length; i++) {
			trumps = trumps + linedat[i].trumps;
			rumps = rumps + linedat[i].rumps;
			//console.log("totalT = " + trumps);
			//console.log("totalR =" + rumps);
		};
 	
 	for (i=0; i<wlinedat.length; i++) {
			wtrumps = wtrumps + wlinedat[i].trumps;
			wrumps = wrumps + wlinedat[i].rumps;
			//console.log("totalT = " + trumps);
			//console.log("totalR =" + rumps);
		};

	return {
		//loaded,
		//linedat:loaded?LineData.find().fetch():[], 
		//linedat: LineData.find().fetch(), // this line alone worked with uline
		linedat: LineData.find().fetch(),
		wlinedat: WLineData.find().fetch(),
		bardat: [{qty: trumps, xlabel: "USATrumps"},
				  {qty: rumps, xlabel: "USARumps"}],
		wbardat: [{qty: wtrumps, xlabel: "USATrumps"},
				   {qty: wrumps, xlabel: "USARumps"}],		  
	};
		


	
}, AppLayout) 