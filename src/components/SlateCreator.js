import React, { useCallback, useEffect, useState } from 'react';
import InterviewEditComponent from '../components/InterviewEditComponent';
import Button from '@material-ui/core/Button';

import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexWrap: 'wrap',
		width: '100%',
		maxWidth: '900px',
		margin: 'auto'
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
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	margin: {
		height: theme.spacing(3)
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		width: '100%',
		'& > * + *': {
			marginTop: '20px'
		}
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
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				<Card className={classes.root}>
					<CardContent>
						<Typography variant="h2" component="h2">
							{slate.candidateName}
						</Typography>
						<Typography variant="h4" component="h4">
							{slate.codingLanguage} | L{slate.level} | {slate.domain}
						</Typography>
					</CardContent>
				</Card>
				<div>
					{slate.questions.map((item, index) => {
						return (
							<>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography variant="h5" component="h5">
											{index + 1} | Interviewer:{' '}
											{!item.interviewerName && <> No interviewer assigned </>}
											{item.interviewerName} | {item.qSubDomain}
											{item.subLanguageBoolean && <>, {item.subLanguages}</>}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div key={index}>
												<div>
													{showScoreCard !== item._id && (
														<Card className={classes.root}>
															<CardContent>
																<Typography variant="h6" component="h6">
																	Main Question: {item.question}
																</Typography>
															</CardContent>
															<CardContent>
																<Typography variant="h6" component="h6">
																	What to look for: {item.lookFor}
																</Typography>
															</CardContent>
															<CardContent>
																<Typography variant="h6" component="h6">
																	Candidate's code: {item.rawCode}
																</Typography>
															</CardContent>
															<CardContent>
																<Typography variant="h6" component="h6">
																	Interviewer code notes: {item.notes}
																</Typography>
															</CardContent>
															<CardContent>
																<Typography variant="h6" component="h6">
																	Post-interview summary: {item.summary}
																</Typography>
															</CardContent>
															<CardContent>
																<Typography variant="h6" component="h6">
																	{item.scores[0].scoreType} Score:{' '}
																	{item.scores[0].percentile}%
																</Typography>
															</CardContent>
															<CardContent>
																<Button
																	startIcon={<DeveloperModeOutlinedIcon />}
																	variant="outlined"
																	size="small"
																	disabled={showScoreCard == item._id}
																	onClick={() => setShowScoreCard(item._id)}
																>
																	Conduct Interview
																</Button>
															</CardContent>
														</Card>
													)}
												</div>

												{showScoreCard === item._id && (
													<InterviewEditComponent
														item={item}
														onSave={updatedItem =>
															handleSave(updatedItem, index)
														}
														onCancel={() => setShowScoreCard(0)}
													/>
												)}
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
