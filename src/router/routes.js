import React from 'react';
import App from '../pages/App';
import SlateShow from '../pages/SlateShow';
import Contact from '../pages/Contact';
import HowTo from '../pages/HowTo';
import DashShow from '../pages/DashShow';
const routes = [
	{
		Component: DashShow,
		key: 'Dashboard',
		path: '/dashboard'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: SlateShow,
		key: 'SlateShow',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];
export default routes;
