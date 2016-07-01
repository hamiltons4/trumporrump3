import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


Imod = React.createClass({
	getInitialState: function() {
		return{
			showModal: true,
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
		 			onClick={this.open.bind(this)}
	 			>
	 			    Show Intro
 				</Button>
 				<Modal dialogClassName="md-content" show={this.state.showModal} onHide={this.close.bind(this)}>
		 			{/*
		 			<Modal.Header dialogClassName="md-content" closeButton>
		 				<Modal.Title>Modal Heading</Modal.Title>
		 				<h4>Some text</h4>
		 				<div className="myrect">Hi there!</div>
		 			</Modal.Header>    
					*/}
            		
            		<Modal.Body closeButton>
            			<a className="close" onClick={this.close.bind(this)}>×</a>
            			<h1>So, Which is it?</h1>
            			<p></p>
            			<img className="logo" src={"images/TorRLogo.png"} alt="Trump or Rump"/>
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