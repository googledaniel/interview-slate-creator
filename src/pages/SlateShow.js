import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlateCreator from '../components/SlateCreator';
import Dashboard from '../components/Dashboard';

export default function SlateShow(props) {
	const [slate, setSlate] = useState();
	console.log('slate show - pre useEffect');
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

	return (
		<>
			{slate && <Dashboard slate={slate} />}
			{!slate && <div>Slate not found</div>}
		</>
	);
}
