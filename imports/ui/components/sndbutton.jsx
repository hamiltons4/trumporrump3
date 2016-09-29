import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { Buzz } from 'meteor/brentjanderson:buzz';

Sndbutton = React.createClass({
	//var s = new buzz.sound('');

	playSound(e) {
		var s = new buzz.sound('../../sounds/TorR2.wav');
		console.log("sound");
		s.play();
	},

	render() {
		return (
			<div className="sndsound">
				<button onClick={this.playSound} id="soundbutton" className="btn btn-primary" type="submit">
					Play Sound
				</button>	
			</div>
		)
	}
})

module.exports = Sndbutton;

