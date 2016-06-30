//import React from 'react'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { ReactDOM }  from 'react-dom'
import { Meteor } from 'meteor/meteor'

import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

import { Timeline } from 'react-twitter-widgets';

//components
import Vote from '../components/vote.jsx'
import Uline from '../components/uline.jsx'
import Ubar from '../components/ubar.jsx'

//Data
import { LineData } from '../../../both/collections/tweets.js'






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
				{/*<Wline />*/}
			</div>
			<div className="wbar">
				{/*<Wbar />*/}
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




