import { Session } from 'meteor/session'
import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

var hasnotbeenopened = true;


Imod = React.createClass({
	getInitialState: function() {
		Session.set("modalopen", "true");
		return{

			showModal: hasnotbeenopened,
		};
			
	},

	componentDidMount: function() {
		this.state = {
			showModal: true,
		};

	},

	getDefaultProps: function() {
		this.state = {
			showModal: true,
		};
	},

	close() {
		Session.set("modalopen", "false");
		hasnotbeenopened = false;
		this.setState({ showModal: false });
	},	

	open() {
		console.log("open");
		this.setState({ showModal: true });
	},

	render() {
		return (
			<div>
				<Button
		 			bsStyle="primary"
		 			bsSize="large"
		 			//onClick={this.open.bind(this)}
		 			onClick={this.open}
	 			>
	 			    Show Intro
 				</Button>
 				<Modal dialogClassName="md-content" show={this.state.showModal} onHide={this.close}>
		 			{/*
		 			<Modal.Header dialogClassName="md-content" closeButton>
		 				<Modal.Title>Modal Heading</Modal.Title>
		 				<h4>Some text</h4>
		 				<div className="myrect">Hi there!</div>
		 			</Modal.Header>    
					*/}
            		
            		<Modal.Body closeButton>
            			<a className="close" onClick={this.close}>×</a>
            			<h1>So, Which is it?</h1>
            			<p></p>
            			<img className="logo" src={"images/TorRLogo3.png"} alt="Trump or Rump"/>
            		</Modal.Body>

            		{/*	
            		<Modal.Footer>
            			<Button onClick={this.close.bind(this)}>Close</Button>
            		</Modal.Footer>	 */}
          		</Modal>

			</div>
		)
	}

})

module.exports = Imod;