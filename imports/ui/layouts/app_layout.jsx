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
						<a className="navbar-brand" href="#"><img src={"../../images/TorRLogo.png"} alt="Trump Or Rump"/></a>
				</Navbar.Header>
			{/*</div>*/}
		</Navbar>
	</div>
	{props.content(props)}
	{/*{content}*/}
	</div>
	)
}