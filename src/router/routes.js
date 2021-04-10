import React from 'react';
import App from '../pages/App';
import SlateShow from '../pages/SlateShow';
import Contact from '../pages/Contact';
import NewSlate from '../pages/NewSlate';

const routes = [
	{
		Component: Contact,
		key: 'About',
		path: '/contact'
	},
	{
		Component: NewSlate,
		key: 'Create Slate',
		path: '/new'
	},
	{
		Component: SlateShow,
		key: 'SlateShow',
		path: '/:id'
	},
	{
		Component: App,
		key: 'Home',
		path: '/'
	}
];
export default routes;
