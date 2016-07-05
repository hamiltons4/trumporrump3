import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages
//import { AppLayout } from '../../ui/layouts/app_layout'
import { Homepage } from '../../ui/pages/homepage'
import { Trumppage } from '../../ui/pages/trumppage'
import { Rumppage } from '../../ui/pages/rumppage'
import { Aboutpage } from '../../ui/pages/aboutpage'

import AppContainer from '../../ui/containers/app_container'



FlowRouter.route('/', {
	name: 'homepage',
	action() {
		mount(AppContainer, {
			content: (props) => <Homepage {...props} />
		})
	}
});


/*
FlowRouter.route('/', {
	name: 'homepage',
	action() {
		mount(AppLayout, {
			content: <Homepage />
		})
	}
})
*/

FlowRouter.route('/trump', {
	name: 'trumppage',
	action() {
		mount(AppContainer, {
			content: (props) => <Trumppage {...props} />
		})
	}
});

FlowRouter.route('/rump', {
	name: 'rumppage',
	action() {
		mount(AppContainer, {
			content: (props) => <Rumppage {...props} />
		})
	}
});

FlowRouter.route('/about', {
	name: 'aboutpage',
	action() {
		mount(AppContainer, {
			content: (props) => <Aboutpage {...props} />
		})
	}
});
