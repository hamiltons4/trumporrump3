import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Gps extends Component {


	render() {
		return (
			<div className="gps">
			   	<span>Having a hard time choosing? Use</span>
				<div><button className="btn btn-primary" id="innergps" type="submit"><a href="#">Your Inner GPS</a></button></div>		
			</div>
		)
	}
}