import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';

export default function SlateCreator(props) {
	return (
		<div>
			<h3>Candidate: {props.slate.candidateName}</h3>
			<p>Coding Language: {props.slate.codingLanguage}</p>
			<p>Level: {props.slate.level}</p>
			<p>Domain: {props.slate.domain}</p>
			<p>
				<a href={`http://localhost:3000/${props.slate._id}`}>Share Link</a>
			</p>

			<ul className="justify-content-start">
				{props.slate.questions.map((item, index) => {
					return (
						<div className="card padding">
							<div className="card-header">
								{/*add the scorecard show page in the link below later:*/}
								<Button
									startIcon={<DeveloperModeOutlinedIcon />}
									variant="outlined"
									size="small"
									href={`/${index}`}
								>
									Conduct Interview
								</Button>
								[Interviewer Name] | [Rubric Category]
							</div>
							<div className="card-body">
								<blockquote className="card-text">{item.question}</blockquote>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
