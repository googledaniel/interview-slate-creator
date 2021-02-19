import React from 'react';
import App from '../pages/App';
import SlateShow from '../pages/SlateShow';
import Contact from '../pages/Contact';
import HowTo from '../pages/HowTo';
const routes = [
	{
		Component: SlateShow,
		key: 'SlateShow',
		path: '/:id/slate'
	},
	{
		Component: HowTo,
		key: 'HowTo',
		path: '/howto'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];
export default routes;
