import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Tshirts extends Component {


	render() {
		return (
			<div className="tshirts">
			   	<h2><span>Share With The World!</span></h2>
				<div className="tdiv">
				{/*<button className="btn btn-primary" id="ttshirt" type="">*/}
					<a href="https://teespring.com/trump-5000" target="_blank">
						<img className="RumpT" src={"../../images/TrumpTshirt.png"} alt="Trump Tshirt"/></a>
				{/*</button>*/}
				</div>
				<div className="tdiv"><h2 id="tshirts1"><span className="label" >TShirts!</span></h2></div>
				<div className="tdiv">
				{/*<button className="btn btn-primary" id="rshirt" type="">*/}
					<a href="https://teespring.com/get-rump"  target="_blank">
						<img className="RumpT" src={"../../images/RumpT.png"} alt="Rump Tshirt"/></a>
				{/*</button>*/}
				</div>				
			</div>
		)
	}
}