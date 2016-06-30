import React, { Component, PropTypes } from 'react';

import { Button } from 'react-bootstrap';

export default class Vote extends Component {
	render() {
		return (
			<div className="vote">
				<div><button className="btn btn-primary" id="tbutton" type="submit">Trump</button></div>
				<div><h1><span className="label" id="vlabel">VOTE!</span></h1></div>
				<div><button className="btn btn-primary" id="rbutton" type="submit">Rump</button></div>
			</div>
		)
	}
}
