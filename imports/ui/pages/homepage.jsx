//import React from 'react'
import React, { Component, PropTypes } from 'react'
//import { createContainer } from 'meteor/react-meteor-data'
import { ReactDOM }  from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { csshake } from 'csshake'

import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'


import { Timeline } from 'react-twitter-widgets'
import { FacebookButton, FacebookCount } from "react-social"
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton, VKontakteButton } from 'react-social'


//components
import Vote from '../components/vote.jsx'
import Uline from '../components/uline.jsx'
import Ubar from '../components/ubar.jsx'
import Wline from '../components/wline.jsx'
import Wbar from '../components/wbar.jsx'
import Imod from '../components/intromodal.jsx'
import Mainanim from '../components/mainanim.jsx'
import SndButton from '../components/sndbutton.jsx'

//Data
//import { LineData } from '../../../both/collections/tweets.js'

//let url = "http://github.com";
let url = "www.trumporrump.com";
let appId = "144989435958633";
let message = "Trump or Rump?";

var today = moment().format('MMMM Do YYYY');



//export const Homepage = (props) => 
export const Homepage = (props) => 
<div className="container-fluid" id="theone">
	<div className="container-fluid main">
			<div className="row">
				<div className="col-md-6 col-md-push-3" id="display">
					<div className="anim striped">
						<p></p>
						<Mainanim votewinner={props.votewinner} votewinnerword={props.votewinnerword} animclass={props.animclass}/>
						{/*<img className="mainimg" src={"../../images/TrumpM.png"} alt="Trump"/>
						<img className="mainimg" src={"../../images/RumpM.png"} alt="Rump"/>*/}
					</div>
					<Vote />
				</div>
				<div className="col-md-3 col-md-pull-6" id="trumpbar">
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
				<Uline linedat={props.linedat} width={props.ulsizer}/>
			</div>
			<div className="ubar">
				<Ubar bardat={props.bardat} width={props.ubsizer}/>
			</div>
			<div className="wline">
				<Wline linedat={props.wlinedat} width={props.wlsizer}/>
			</div>
			<div className="wbar">
				<Wbar wbardat={props.wbardat} width={props.wbsizer}/>
			</div>
	</div>
	<div className="foot">
			{/*<Social />*/}
			<p className="copyright">&#169; 2016 Hamilton Smith</p>
			<SndButton />
			<Imod />
			<div className="buttonholder">
				<FacebookButton url={url} message={message} appId={appId} className="btn btn-facebook">
					<i className="fa fa-facebook-square"></i>
					{" Share "}
					<FacebookCount url={url} />
					{/*{" "}*/}
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
				<VKontakteButton title="Share via VKontakte" message={message} url={url} element="a" className="btn btn-vkontakte">
                    <i className="fa fa-vk"/>
				</VKontakteButton>
				<TumblrButton title="Share via Tumblr" message={message} url={url} className="btn btn-tumblr">
					<i className="fa fa-tumblr"></i>
				</TumblrButton>
			</div>
			
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




