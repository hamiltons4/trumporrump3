import React, { Component, PropTypes } from 'react'
import { FacebookButton, FacebookCount } from 'react-social'
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton } from 'react-social'

import Tshirts from '../components/tshirts.jsx'
import Principles from '../components/principles.jsx'
import Gps from '../components/gps.jsx'
import Details from '../components/details.jsx'

let url = "https://github.com";

export const Aboutpage = (props) => 
<div className="container-fluid" id="theA">
<div className="container-fluid secondary">
	<h1>About</h1>
	<div className="row">
		<div className="col-md-4" id="shirty">
			<Tshirts />
		</div>
		<div className="col-md-8" id="aboutus">
			<Details />
		</div>		
	</div>
	<div className="row">
		<div className="onprinciple">
			<Principles/>
		</div>
		<div className="innerdirect">
			<Gps/>
		</div>
	</div>  


</div>
<div className="foot" id="aboutfoot">
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

