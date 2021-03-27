import React, { useEffect, useState } from 'react';

/*
This dash holds ALL interview slates for the HM to see. It will lead to SlateCreator
for each individual slate for a candidate's interview day.

test show page:
http://localhost:3000/605f6fd1a51485760b10b777
 */
export default function Dashboard(props) {
	return (
		<div>
			<h3>Candidate: {props.slate.candidateName}</h3>
			<p>Coding Language: {props.slate.codingLanguage}</p>
			<p>Level: {props.slate.level}</p>
			<p>Domain: {props.slate.domain}</p>
			<p>
				<a href={`localhost3000/${props.slate._id}`}>Share Link</a>
			</p>

			<ul className="justify-content-start">
				{props.slate.questions.map((item, index) => {
					return (
						<div className="card padding">
							<div className="card-header">
								{/*add the scorecard show page in the link below later:*/}
								<a href={`localhost3000/}`}>Interview {index + 1}</a>
								[Interviewer Name] | [Rubric Category]
							</div>
							<div className="card-body">
								<blockquote className="card-text">{item}</blockquote>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
