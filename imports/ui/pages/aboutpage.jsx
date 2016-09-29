import React, { Component, PropTypes } from 'react'
import { FacebookButton, FacebookCount } from 'react-social'
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton, EmailButton, VKontakteButton } from 'react-social'

import Tshirts from '../components/tshirts.jsx'
import Principles from '../components/principles.jsx'
import Gps from '../components/gps.jsx'
import Details from '../components/details.jsx'

let url = "www.trumporrump.com";
let appId = "144989435958633";
let message = "Trump or Rump?";

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
			
			
			<p className="copyright">&#169; 2016 Hamilton Smith</p>
</div>    

</div>

