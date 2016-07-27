import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Tshirts extends Component {


	render() {
		return (
			<div className="tshirts">
			   	<span>Share With The World!</span>
				<div><button className="btn btn-primary" id="shirt" type="submit"><a href="#">Tshirts!</a></button></div>				
			</div>
		)
	}
}