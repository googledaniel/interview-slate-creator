import React, { useEffect, useState } from 'react';

export default function ScorecardComponent(props) {
	return (
		<div>
			<h3>Candidate: {props.slate.candidateName}</h3>
			<p>Coding Language: {props.slate.codingLanguage}</p>
			<p>Level: {props.slate.level}</p>
			<p>Domain: {props.slate.domain}</p>
			//I need to get the index of the question for this page.


		</div>
	);
}