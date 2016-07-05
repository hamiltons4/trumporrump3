//import React from 'react'
import React, { Component, PropTypes } from 'react'
//import { createContainer } from 'meteor/react-meteor-data'
import { ReactDOM }  from 'react-dom'
import { Meteor } from 'meteor/meteor'

import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

import { Timeline } from 'react-twitter-widgets'
import { FacebookButton, FacebookCount } from "react-social"
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton } from 'react-social'


//components
import Vote from '../components/vote.jsx'
import Uline from '../components/uline.jsx'
import Ubar from '../components/ubar.jsx'
import Wline from '../components/wline.jsx'
import Wbar from '../components/wbar.jsx'
import Imod from '../components/intromodal.jsx'

//Data
import { LineData } from '../../../both/collections/tweets.js'

let url = "https://github.com";





//export const Homepage = (props) => 
export const Homepage = (props) => 
<div className="container-fluid" id="theone">
	<div className="container-fluid main">
			<div className="row">
				<div className="col-md-3" id="trumpbar">
					<h3>Tweets Trump!</h3>
					<Timeline 
						widgetId={'733155093067898880'}
						options={{
							username: 'TwitterDev',
							height: '550',
							chrome: 'noheader nofooter transparent'
						}}
						onload={() => console.log('Twitter Trump is loaded!')}
					/>
				</div>
				<div className="col-md-6" id="display">
					<div className="anim striped">
						<p></p>
						<img src={"../../images/laptop.png"} alt="Trump"/>
						<img src={"../../images/mobile.png"} alt="Rump"/>
					</div>
					<Vote />
				</div>
				<div className="col-md-3" id="rumpbar">
					<h3>Tweets Rump.</h3>
					<Timeline 
						widgetId={'731844971205165056'}
						options={{
							username: 'TwitterDev',
							height: '550',
							chrome: 'noheader nofooter transparent'
						}}
						onload={() => console.log('Twitter Rump is loaded!')}
					/>

				</div>

			</div>

	</div>
	<div className="data">
			<div className="uline">
				<Uline linedat={props.linedat}/>
			</div>
			<div className="ubar">
				<Ubar bardat={props.bardat}/>
			</div>
			<div className="wline">
				<Wline linedat={props.linedat}/>
			</div>
			<div className="wbar">
				<Wbar wbardat={props.wbardat}/>
			</div>
	</div>
	<div className="foot">
			{/*<Social />*/}
			<Imod />
			<div className="buttonholder">
				<FacebookButton url={url} className="btn btn-facebook">
					<i className="fa fa-facebook"></i>
					{" "}
					<FacebookCount url={url} />
				</FacebookButton>
				<TwitterButton url={url} className="btn btn-twitter">
					<i className="fa fa-twitter"></i>
				</TwitterButton>
				<RedditButton url={url} className="btn btn-reddit">
					<i className="fa fa-reddit-alien"></i>
				</RedditButton>
				<GooglePlusButton url={url} className="btn btn-google-plus">
					<i className="fa fa-google-plus"></i>
				</GooglePlusButton>
			</div>
			{/*
			<TumblrButton className="btn btn-tumblr">
				{"Tumblr"}
			</TumblrButton>
			*/}
	</div>
</div>

/*
export default createContainer((props) => {
	const handle = Meteor.subscribe('linedat');
	const loaded = handle.ready();
    //Meteor.subscribe('linedat');

	return { linedat: LineData.find({}).fetch() };

}, Homepage)
*/




