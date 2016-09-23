import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Gps extends Component {


	render() {
		return (
			<div className="gps">
			   	<h2><span className="label">Having a hard time choosing? Use</span></h2>
				<div><button className="btn btn-primary" id="innergps" type="submit"><a href="#">Your Inner GPS</a></button></div>		
			</div>
		)
	}
}