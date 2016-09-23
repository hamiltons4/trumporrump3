import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

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
			 <h4>If you need some coding done</h4>
			   
				<div id="aboutcontact"><button className="btn btn-primary" id="contact" type="submit"><a href="#">Contact Me</a></button></div>				
			</div>
		)
	}
}