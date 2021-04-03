import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlateCreator from '../components/SlateCreator';
import HmDashboard from '../components/HmDashboard';

export default function DashShow(props) {
	const [slates, setSlates] = useState();
	console.log('HM Dash show - pre useEffect');
	useEffect(() => {
		(async () => {
			try {
				// const response = await fetch(`/api/interview-app-test/${props.match.params.id}`);
				const response = await fetch(`/api/slates`);
				const data = await response.json();
				setSlates(data);
			} catch (ersror) {
				console.error(error);
			}
		})();
	}, []);

	// {slates && <div> </>}
	// {!slates && <div>Dashboard not found</div>}

	return (
		<>
			{slates && (
				<ul className="justify-content-start">
					{slates.candidateName.map(item => {
						return (
							<div className="card padding">
								<div className="card-body">
									<blockquote className="card-text">{item}</blockquote>
								</div>
							</div>
						);
					})}
				</ul>
			)}
			{!slates && <div>Dashboard not found</div>}
		</>
	);
}
