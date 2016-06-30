import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tweets } from './both/collections/tweets.js'
import { Tweets2 } from './both/collections/tweets.js'
import { Tweets3 } from './both/collections/tweets.js'
import { Tweets4 } from './both/collections/tweets.js'
import { TweetsTotal } from './both/collections/tweets.js'
import { VoteCount } from './both/collections/tweets.js'
import { LineData } from './both/collections/tweets.js'

//import { T } from 'meteor/mrt:twit'
//import { stream } from 'meteor/mrt:twit'
import { twit } from 'twit'
import { moment } from 'meteor/momentjs:moment'





if (Meteor.isClient) {
	Meteor.subscribe('tweets');
	Meteor.subscribe('tweets2');
	Meteor.subscribe('tweets3');
	Meteor.subscribe('tweets4');

   /*
	Meteor.startup(function () {
		
		}
	}) */
}


if (Meteor.isServer) {
	Meteor.startup(function () {
		
		// Insert sample data if the LineData collection is empty
		if (LineData.find().count() === 0) {
			JSON.parse(Assets.getText("linesamp.json")).daily.forEach(function(doc) {
				LineData.insert(doc);
			});
		}

		timeObj = JSON.parse(Assets.getText("linesamp.json")).daily.forEach(function(doc) {
			doc.day = new Date(doc.day);
			//console.log(doc);
			/*if (doc.rumps == 24) {
				console.log("Heidi Ho!");
			    //doc.day = new Date();
			    doc.day = moment().toDate();
			    console.log(doc.day);
				//lineData.insert(doc);
			}*/
		});

		console.log(moment().dayOfYear());
		
		var Twit = require('twit');

		var T = new Twit({
			consumer_key: "J0uGu8r2QFu9JEem7nX9zVK6J",
			consumer_secret: "hkMbfZyAhzp4Olw56OtmmTQxoctHDVykc8IrzaHt9Hl7PM76SG",
			access_token: "782337289-Y9EcjvhrPctZlAxhahNCQsEx4eeZn71G3tdIwECf",
			access_token_secret: "mjcMjMUvpFSNeyq3vavv5bs8rJa5w6ehEZqclqIZ1dAXb",
			timout_ms: 60*1000,
		});

		var stream = T.stream('statuses/filter', { track: 'chicken' });
		var stream2 = T.stream('statuses/filter', { track: 'pizza' });
		/* 
			For the line graphs:
			I want to  get all the relevant tweets for a specific day,
			count them
			insert the count for that day into a json object with the key 
			for that day,
			or do I want to go straight into mongo?
			ultimately I want an array of objects 
			[{day: 1 (through 7) trumps: # rumps: # }]
			so I can use a loop 1 through 7 and  on each pass
			I put the iterator into the day value and the length of that day into the
			trump or rump value as appropriate
			var TorRs = [];
			var tr, ru;
			for (var i= 6; i< 0; i--) {
				search for the day i ago;
				push the key for the day and length of values for that day into array
				insert this day into mongo

			}


			
		*/
		     T.get('search/tweets', {q: 'trump%3A%29; since:2016-06-22 until:2016-06-23', count: 100}, Meteor.bindEnvironment(function(err, data, response) {
		   // T.get('search/tweets', {q: 'chicken since:2016-04-11 until:2016-04-12', count: 100}, Meteor.bindEnvironment(function(err, data, response) {
			//console.log(data);
			//var g = "";
			//var h = "";
			//h = data.hashtags;
			
			var g = "";	
			g = data.statuses;
			i = g.length;
			var tweetDate = [];
			var userTweet = [];
			console.log(g[1].created_at);
			console.log(g[1].text); 

			while(i--) {
				/*console.log(g[i].created_at);
			    console.log(g[i].text); */
				
			
			tweetDate[i] = g[i].created_at;
			userTweet[i] = g[i].text;
			//console.log(tweetDate);
			//console.log(userTweet);

			testTime = moment().utc(tweetDate[i]);
			//console.log(userTweet[i]);
			//console.log(tweetDate[i]);
			//console.log(testTime);
			//console.log("=========================================================================================");

			
			    Tweets3.insert({ date: tweetDate[i], tweet: userTweet[i] } ,
				    function(error){
					    if(error)
						    console.log("in three" + error);
				    });
			
		    //return g.length;	
		   }
		    //restData();
		    })); // end first T.get //////////////////////////////
		    //restData();	
	        //var like = encodeURIComponent(':)');
	        //console.log(like);
	        searchstring = 'pizza &#58;&#40; since:2016-04-01 until:2016-04-03'; //this uses the html entity (hex char) for the emoticon mood search in twitter
	        searchstring2 = 'pizza%3A%28 since:2016-04-01 until:2016-04-03';
	        searchstring3 = 'trum%3A%28 since:2016-06-22'; //Keeping this within the twitter search date limits prevents 'can't read  created_at of undefined' error.
	        searchstring4 = 'until:2016-06-23';
	        T.get('search/tweets', {q: searchstring3 + searchstring4, count: 100}, Meteor.bindEnvironment(
	        	function(err, data, response) {

	        		var g2 = "";
	        		g2 = data.statuses;
	        		i = g2.length;
	        		//console.log(g2);
	        		//console.log(i);
	        		var tweetDate = [];
	        		var userTweet = [];
	        		//console.log(g2[1].created_at);
	        		//console.log(g2[1].text);
	        		while(i--) {
	        		//	console.log(g2[i].created_at);
	        		//	console.log(g2[i].text); 

	        			tweetDate[i] = g2[i].created_at;
	        			userTweet[i] = g2[i].text;

	        			Tweets4.insert({ date: tweetDate[i], tweet: userTweet[i] } ,
	        				function(error) {
	        					if(error)
	        						console.log("in four" + error);

	        				});
	        				
	        			

	        		}

	        	}));

		
		//restData();
/////////////////////////////////////////////////////////////////////////////////////////////////////
		var x = 0;
		var y = 0;

		stream.on('tweet', Meteor.bindEnvironment(function(tweet) {
			var userName = tweet.user.name;
			var userScreenName = tweet.user.screen_name;
			var userTweet = tweet.text;
			var tweetDate = tweet.created_at;
			var profileImg = tweet.user.profile_image_url;
			if (x < 20) {
				//console.log(userScreenName + "(" + userName + ")" + " said " + userTweet + " at " + tweetDate);
				//console.log(tweetDate);
			    //console.log("=====================================================");
			    Tweets.insert({user: userName, userscreen: userScreenName, tweet: userTweet, picture: profileImg, date: tweetDate},
			    	function(error){
			    		if(error)
			    			console.log("in one" + error);
			    	});
		    }
		    x++;
		}))

		

 
		stream2.on('tweet', Meteor.bindEnvironment(function(tweet) {
			var userName2 = tweet.user.name;
			var userScreenName2 = tweet.user.screen_name;
			var userTweet2 = tweet.text;
			var tweetDate2 = tweet.createt_at;
			var profileImg2 = tweet.user.profile_image_url;
			if (y < 10) {
				//console.log(userScreenName2 + "(" + userName2 + ")" + " said " + userTweet2 + " at " + tweetDate2);
			    //console.log("======================================");
			    Tweets2.insert({user: userName2, userscreen: userScreenName2, tweet: userTweet2, picture: profileImg2, date: tweetDate2},
			    	function(error){
			    		if(error)
			    			console.log("in two" + error);
			    	});
		    }
		    y++;
		}))
	});
}
