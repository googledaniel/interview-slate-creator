import React, { useEffect, useState } from 'react';

export default function Scorecard(props) {
	return (
		<div>
			<h3>Candidate: {props.slate.candidateName}</h3>
			<p>Coding Language: {props.slate.codingLanguage}</p>
			<p>Level: {props.slate.level}</p>
			<p>Domain: {props.slate.domain}</p>
			<p>
				<a href={`https://interview-creator.herokuapp.com/${props.slate._id}`}>
					Share Link
				</a>
			</p>

			<ul className="justify-content-start">
				{props.slate.questions.map((item, index) => {
					return (
						<div className="card padding">
							<div className="card-header text-center">
								Interview {index + 1}
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