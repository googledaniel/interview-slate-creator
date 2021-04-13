import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlateCreator from '../components/SlateCreator';
import HmDashboard from '../components/HmDashboard';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexWrap: 'wrap',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		maxWidth: '900px',
		margin: 'auto'
	}
}));

export default function SlateShow(props) {
	const [slate, setSlate] = useState();
	const classes = useStyles();

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/slates/${props.match.params.id}`);
				const data = await response.json();
				setSlate(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	//can I use react switch or something similar here or in slate creator to show each interview?
	return (
		<div>
			{slate && <SlateCreator slate={slate} />}
			{!slate && <div>Slate not found</div>}
		</div>
	);
}
