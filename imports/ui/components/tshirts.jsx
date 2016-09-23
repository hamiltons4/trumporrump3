import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Tshirts extends Component {


	render() {
		return (
			<div className="tshirts">
			   	<h4><span>Share With The World!</span></h4>
				<div><button className="btn btn-primary" id="shirt" type="submit"><a href="#">Tshirts!</a></button></div>				
			</div>
		)
	}
}