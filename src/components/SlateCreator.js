/*
1. I need help with CRUD. I can't remember how to send data
to mongo and get the URI endpoint back with routes.
I have create and read routes made plus the Schema
but I don't remember how to get my form to submit the
data and then render a unique page with the URI.

2. How do I customize Bootstrap in Saas? I added the package
and it's in package-json but it's still not letting
me customize.
*/

import React, { useEffect, useState } from 'react';

export default function SlateCreator(props) {
	return (
		<div>
			<br></br>
			<div className="card">
				<p>Candidate: {props.slate.candidateName}</p>
				<p>Coding Language: {props.slate.codingLanguage}</p>
				<p>Level: {props.slate.level}</p>
				<p>Domain: {props.slate.domain}</p>
			</div>
			<br></br>
			<ul>
				{props.slate.questions.map((item, index) => {
					return (
						<div>
							<div className="card">
								<div className="card-header">Interview {index + 1}</div>
								<div className="card-body">
									<blockquote className="blockquote mb-sm-1">
										<h4>{item}</h4>
									</blockquote>
								</div>
							</div>
							<br></br>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
