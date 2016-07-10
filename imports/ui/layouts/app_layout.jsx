import React from 'react'
import { Navbar } from 'react-bootstrap'

//export const AppLayout = ({content}) => 
export const AppLayout = (props) => {
	return (
	<div>
	<div className="container-fluid">
		<Navbar className="topnav" fixedTop>
			{/*<div className="container-fluid" id="toppynav">*/}
				<Navbar.Header>
						<a className="navbar-brand" href="/"><img src={"../../images/TorRLogo6.png"} alt="Trump Or Rump"/></a>
				</Navbar.Header>
				<ul className="nav navbar-nav navbar-right">
					<li><a href="/trump"><img className="imnav" src={"../../images/TLogo.png"} alt="Trump"/></a></li>
					<li><a href="/rump"><img className="imnav" src={"../../images/RLogo.png"} alt="Rump"/></a></li>
					<li><a href="/about"><img className="imnav" id="aboutim" src={"../../images/AboutLogo.png"} alt="About"/></a></li>
				</ul>
			{/*</div>*/}
		</Navbar>
	</div>
	{props.content(props)}
	{/*{content}*/}
	</div>
	)
}