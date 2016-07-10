import { Tweets } from '../../both/collections/tweets.js'
import { Tweets2 } from '../../both/collections/tweets.js'
import { Tweets3 } from '../../both/collections/tweets.js'
import { Tweets4 } from '../../both/collections/tweets.js'
import { TweetsTotal } from '../../both/collections/tweets.js'
import { VoteCount } from '../../both/collections/tweets.js'
import { LineData } from '../../both/collections/tweets.js'
import { WLineData } from '../../both/collections/tweets.js'




Meteor.publish('tweets', function() {
	return Tweets.find();
});

Meteor.publish('tweets2', function() {
	return Tweets2.find();
});

Meteor.publish('tweets3', function() {
	return Tweets3.find();
});

Meteor.publish('tweets4', function() {
	return Tweets4.find();
});

Meteor.publish('tweetstot', function() {
	return TweetsTotal.find();
});

Meteor.publish('votes', function() {
	return VoteCount.find();
});

Meteor.publish('linedat', function() {
	return LineData.find();
});

Meteor.publish('wlinedat', function() {
	return WLineData.find();
});
