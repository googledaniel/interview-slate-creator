import React, { useCallback, useEffect, useState } from 'react';
import InterviewEditComponent from '../components/InterviewEditComponent';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InterviewShowComponent from './InterviewShowComponent';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexWrap: 'wrap'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '25ch'
	}
}));

function valuetext(value) {
	return `${value}%`;
}

export default function SlateCreator(props) {
	const [slate, setSlate] = useState(props.slate);
	const classes = useStyles();
	const [showScoreCard, setShowScoreCard] = useState();

	const handleSave = useCallback((updatedItem, index) => {
		const questions = [...slate.questions];
		questions.splice(index, 1, updatedItem);

		const updatedSlate = {
			...slate,
			questions
		};
		setSlate(updatedSlate);
	}, []);

	return (
		<div>
			<h3>Candidate: {slate.candidateName}</h3>
			<p>Coding Language: {slate.codingLanguage}</p>
			<p>Level: {slate.level}</p>
			<p>Domain: {slate.domain}</p>
			<p>
				<a href={`http://localhost:3000/${props.slate._id}`}>Share Link</a>
			</p>

			<ul className="justify-content-start">
				{slate.questions.map((item, index) => {
					return (
						<>
							<div key={index} className="card padding">
								<div className="card-header">
									<Button
										startIcon={<DeveloperModeOutlinedIcon />}
										variant="outlined"
										size="small"
										disabled={showScoreCard == item._id}
										onClick={() => setShowScoreCard(item._id)}
									>
										Conduct Interview
									</Button>

									<div>
										Interviewer: {item.interviewerName} | {item.qSubDomain}
									</div>
								</div>
								<div className="card-body">
									{showScoreCard !== item._id && (
										<>
											<div>Main Question: {item.question}</div>
											<div>
												Interview type:
												{item.qSubDomain}
												{item.subLanguageBoolean && <>, {item.subLanguages}</>}
											</div>
											<div>What to look for: {item.lookFor}</div>
											<div>Candidate's code: {item.rawCode}</div>
											<div>Interviewer code notes: {item.notes}</div>
											<div>Post-interview summary: {item.summary}</div>
											<div>
												Scores:{' '}
												{item.scores.map((subItem, i) => {
													return (
														<div key={i}>
															{subItem.scoreType}: {subItem.percentile}%
														</div>
													);
												})}
											</div>
										</>
									)}
								</div>

								{showScoreCard === item._id && (
									<InterviewEditComponent
										item={item}
										onSave={updatedItem => handleSave(updatedItem, index)}
										onCancel={() => setShowScoreCard(0)}
									/>
								)}
							</div>
						</>
					);
				})}
			</ul>
		</div>
	);
}
