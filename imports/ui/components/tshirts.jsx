import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Tshirts extends Component {


	render() {
		return (
			<div className="tshirts">
			   	<h4><span>Share With The World!</span></h4>
				<div><button className="btn btn-primary" id="ttshirt" type="submit"><a href="#"><img className="RumpT" src={"../../images/TRumpT.png"} alt="TRump Tshirt"/></a></button></div>
				<div><h2 id="tshirts1"><span className="label" >TShirts!</span></h2></div>
				<div><button className="btn btn-primary" id="rshirt" type="submit"><a href="#"><img className="RumpT" src={"../../images/RumpT.png"} alt="Rump Tshirt"/></a></button></div>				
			</div>
		)
	}
}