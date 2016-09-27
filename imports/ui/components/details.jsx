import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { EmailButton } from 'react-social';

let message = "Trump or Rump?";
let url = "www.trumporrump.com";

export default class Details extends Component {


	render() {
		return (
			<div className="details">
				<h2>All about me</h2>
				<h4>My name is Hamilton Smith and I built this.
				 I thought this would be fun, so I did it.
			    It's my first web app. I used Meteor, D3, and React. 
			    I'm teaching myself to code and 
			    I'm interested in politics. I hope you enjoyed it.
			    God Bless America.
			    We're going to be alright.
			 </h4>
			 <h4>If you need some coding done, contact me</h4>
			   <EmailButton title="Share via E-Mail" message={message} url={url} id="contact1"className="btn btn-primary">
                    <i className="fa fa-at"/> trumporrump@gmail.com
				</EmailButton>
				{/*<div id="aboutcontact"><button className="btn btn-primary" id="contact" type="submit"><a href="#">Contact Me</a></button></div>*/}				
			</div>
		)
	}
}