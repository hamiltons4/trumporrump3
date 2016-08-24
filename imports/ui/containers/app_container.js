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
var votewinner = 0; // votewinner is 0 if trump and 1 if rump

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
	//trumpWin = 0;
	//rumpWin = 0;

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

	if (trumps+wtrumps > rumps+wrumps) {
		console.log("Trump wins!");
		//trumpWin = 1;
		//rumpWin = 0;
		votewinner = 0;

		//console.log(trumpWin, rumpWin);
	}else{
		console.log("Rump wins!");
		//trumpWin = 0;
		//rumpWin = 1;
		votewinner = 1;
		//console.log(trumpWin, rumpWin);

	}	

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
		votewinner: votewinner,		   


	};
		


	
}, AppLayout) 