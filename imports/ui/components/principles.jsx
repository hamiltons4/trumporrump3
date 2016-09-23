import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Principles extends Component {


	render() {
		return (
			<div className="princip">
			   	<h2><span className="label">Election stressing you out? Try</span></h2>
				<div><button className="btn btn-primary" id="yoga" type="submit"><a href="#">Mind Yoga</a></button></div>
				<div><h2 id="orprinciples"><span className="label" >Or</span></h2></div>
				<div><button className="btn btn-primary" id="alchemy" type="submit"><a href="#">Alchemy</a></button></div>
			</div>
		)
	}
}
