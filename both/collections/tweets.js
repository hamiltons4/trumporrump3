import { Mongo } from 'meteor/mongo';


export const Tweets = new Mongo.Collection("tweets");
Tweets.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
});

export const Tweets2 = new Mongo.Collection("tweets2");
Tweets2.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
});

export const Tweets3 = new Mongo.Collection("tweets3");
Tweets3.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
});

export const Tweets4 = new Mongo.Collection('tweets4');
Tweets4.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
});

export const TweetsTotal = new Mongo.Collection("tweetstot");
TweetsTotal.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
});

export const VoteCount = new Mongo.Collection("votes");
VoteCount.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
});

export const LineData = new Mongo.Collection("linedat");
LineData.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
	
});

export const WLineData = new Mongo.Collection("wlinedat");
LineData.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	}
	
});

if (Meteor.isServer) {
	//Meteor.publish('linedat', function() {
		//return LineData.find();
	//});
//};

Meteor.methods({

	increTrumps:function(vote, date) {
		var oldTValue = 0;
		vote = parseInt(vote); // this gives the ability to weight the vote..


		check(vote, Number);
		check(date, Number); //this was Number when it was isoWeekday
		
		if (LineData.find({"day": date}).count() === 0) {
			//I want to remove the oldest day and get its' value and put it
			//into previousTrumps
			//console.log(LineData.findOne({},{day: 1}));
			console.log("increTRumps if check");
			LineData.insert({"day": date,
									"rumps": 0,
									"trumps": 0});  //this creates a new day at midnight
			oldTValue = LineData.findOne().trumps;  //this stores the old value
			//Session.set("oldT", "oldTValue"); //only on the client, use methods
			console.log(oldTValue);
			LineData.remove({"day": (date-11)}); // this removes the oldest day and keeps the # days at 12 for d3

		}
		LineData.update({day: date}, {$inc: {trumps: vote}}, {upsert: true});

		//return LineData.update({day: date}, {$inc: {trumps: vote}}, {upsert: true}); 
		return oldTValue;
	},	

	increRumps:function(vote, date) {
		var oldRValue = 0;
		vote = parseInt(vote);


		check(vote, Number);
		check(date, Number); // this was Number when it was isoWeekday

		if (LineData.find({"day": date}).count() === 0) {
			//I want to remove the oldest day and get its' value and put it
			//into previousTrumps
			//console.log(LineData.findOne({},{day: 1}));
			console.log("increRumps if check");
			LineData.insert({"day": date,
									"rumps": 0,
									"trumps": 0});
			//console.log(LineData.findOne());
			oldRValue = LineData.findOne().rumps;
			console.log(oldRValue);
			//Session.set("oldR", "oldRValue");
			//LineData.findAndModify({query :{}, sort:{"_id": 1}, remove:true });
			LineData.remove({ "day": (date - 11)});
		}
		LineData.update({day: date}, {$inc: {rumps: vote}}, {upsert: true});

		//return LineData.update({day: date}, {$inc: {rumps: vote}}, {upsert: true});
		return oldRValue;
	},	
	
	WIncreTrumps:function(vote, date) {
		var oldWTValue = 0;
		vote = parseInt(vote); // this gives the ability to weight the vote..


		check(vote, Number);
		check(date, Number); //this was Number when it was isoWeekday

		if (WLineData.find({"day": date}).count() === 0) {
			//I want to remove the oldest day and get its' value and put it
			//into previousTrumps
			//console.log(WLineData.findOne({},{day: 1}));
			console.log("increWTRumps if check");
			WLineData.insert({"day": date,
									"rumps": 0,
									"trumps": 0});
			oldWTValue = WLineData.findOne().trumps;
			console.log(oldWTValue);
			//Session.set("oldWT", "oldWTValue");
			WLineData.remove({"day": (date-11)});

		}
		//console.log("increRumps if check");
		WLineData.update({day: date}, {$inc: {trumps: vote}}, {upsert: true}); 	
		

		//return WLineData.update({day: date}, {$inc: {trumps: vote}}, {upsert: true}); 
		return oldWTValue;
	},

	WIncreRumps:function(vote, date) {
		var oldWRValue = 0;
		vote = parseInt(vote);


		check(vote, Number);
		check(date, Number); // this was Number when it was isoWeekday

		if (WLineData.find({"day": date}).count() === 0) {
			//I want to remove the oldest day and get its' value and put it
			//into previousTrumps
			//console.log(LineData.findOne({},{day: 1}));
			console.log("increWRumps if check");
			WLineData.insert({"day": date,
									"rumps": 0,
									"trumps": 0});
			oldWRValue = WLineData.findOne().rumps;
			console.log(oldWRValue);
			//Session.set("oldWR", "oldWRValue"); //only on the client, will pass with methods
			WLineData.remove({"day": (date-11)});
		}

		WLineData.update({day: date}, {$inc: {rumps: vote}}, {upsert: true});

		//return WLineData.update({day: date}, {$inc: {rumps: vote}}, {upsert: true});
		return oldWRValue;
	}			

	})


};




