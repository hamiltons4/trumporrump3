import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages
//import { AppLayout } from '../../ui/layouts/app_layout'
import { Homepage } from '../../ui/pages/homepage'
import AppContainer from '../../ui/containers/app_container'


FlowRouter.route('/', {
	name: 'homepage',
	action() {
		mount(AppContainer, {
			content: (props) => <Homepage {...props} />
		})
	}
})


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

