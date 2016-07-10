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
		vote = parseInt(vote); // this gives the ability to weight the vote..


		check(vote, Number);
		check(date, Number); //this was Number when it was isoWeekday
		
		

		return LineData.update({day: date}, {$inc: {trumps: vote}}, {upsert: true}); 
	},	

	increRumps:function(vote, date) {
		vote = parseInt(vote);


		check(vote, Number);
		check(date, Number); // this was Number when it was isoWeekday
		

		return LineData.update({day: date}, {$inc: {rumps: vote}}, {upsert: true});
	},	
	
	WIncreTrumps:function(vote, date) {
		vote = parseInt(vote); // this gives the ability to weight the vote..


		check(vote, Number);
		check(date, Number); //this was Number when it was isoWeekday
		
		

		return WLineData.update({day: date}, {$inc: {trumps: vote}}, {upsert: true}); 
	},

	WIncreRumps:function(vote, date) {
		vote = parseInt(vote);


		check(vote, Number);
		check(date, Number); // this was Number when it was isoWeekday
		

		return WLineData.update({day: date}, {$inc: {rumps: vote}}, {upsert: true});
	}			

	})


};




