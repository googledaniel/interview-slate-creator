import React, { useEffect, useState } from 'react';

export default function SlateCreator(props) {
	return (
		<div>
			<div className="card padding align-content-start justify-content-start">
				<p>Candidate: {props.slate.candidateName}</p>
				<p>Coding Language: {props.slate.codingLanguage}</p>
				<p>Level: {props.slate.level}</p>
				<p>Domain: {props.slate.domain}</p>

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
		</div>
	);
}
