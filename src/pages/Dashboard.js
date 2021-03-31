import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlateCreator from '../components/SlateCreator';
import HmDashboard from '../components/HmDashboard';

export default function DashShow(props) {
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
			{slate && <SlateCreator slate={slate} />}
			{!slate && <div>Slate not found</div>}
		</>
	);
}