import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlateCreator from '../components/SlateCreator';
import HmDashboard from '../components/HmDashboard';

export default function DashShow(props) {
	const [slates, setSlates] = useState([]);
	console.log('HM Dash show - pre useEffect');
	useEffect(() => {
		(async () => {
			try {
				// const response = await fetch(`/api/interview-app-test/${props.match.params.id}`);
				const response = await fetch(`/api/dashboards`);
				const data = await response.json();
				setSlates(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// {slates && <div> </>}
	// {!slates && <div>Dashboard not found</div>}
	//<HmDashboard slates={slates} />

	return (
		<>
			{slates && <HmDashboard slates={slates} />}
			{!slates && <div>Dashboard not found</div>}
		</>
	);
}
