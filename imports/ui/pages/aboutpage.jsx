import React, { Component, PropTypes } from 'react'
import { FacebookButton, FacebookCount } from 'react-social'
import { TwitterButton, RedditButton, GooglePlusButton, TumblrButton } from 'react-social'

let url = "https://github.com";

export const Aboutpage = (props) => 
<div className="container-fluid" id="theA">
<div className="container-fluid secondary">
  <h1>About</h1>
</div>
<div className="foot">
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

