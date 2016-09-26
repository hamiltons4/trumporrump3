import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class Gps extends Component {


	render() {
		return (
			<div className="gps">
			   	<h2><span className="label">Having a hard time choosing? Use</span></h2>
				{/*<div><button className="btn btn-primary" id="innergps" type="submit"><a href="#">Your Inner GPS</a></button></div>*/}
				<div>
					<div>
					{/*<button className="btn btn-primary" id="innergps" type="submit">*/}
						<a href="https://www.amazon.com/gp/product/1608684121/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1608684121&linkCode=
						as2&tag=trumporrump-20&linkId=01352b657bb7d5b8613591f4ab95f662" target="_blank"><img border="0" src=
						"//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1608684121&ServiceVersion=20070822&ID=
						AsinImage&WS=1&Format=_SL160_&tag=trumporrump-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=trumporrump-20&l=am2&o=
						1&a=1608684121" width="1" height="1" border="0" alt="" style={{border:'none !important', margin:'0px !important'}} />
					{/*</button>*/}
					</div>
					
				</div>
			</div>	
		)
	}
}