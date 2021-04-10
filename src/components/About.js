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

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				<Typography variant="h3" component="h3">
					About the Interview App
				</Typography>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h4" component="h4">
							Product Concepts
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Tech hiring managers and recruiters need to make structured
							interview slates. The slates use different types of questions
							depending on level and candidate domain. Making slates consistent
							to the level and domain is important so candidates can be
							benchmarked. However, the questions need to be randomly chosen by
							a rubric engine so the same questions aren't asked each time.
							<Typography>
								The next step is organizing the slates by each candidate. Team
								members need to paste the code, write live notes during the
								interview and give a percentile score relative to other
								engineers they've seen at that level. The next steps will be
								adding auth and user profiles. The scoring will also be more
								complex to breakdown different types of scoring and calculate
								averages for each candidate. An email system needs to be added
								to send interviewers an invite.
							</Typography>
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h4" component="h4">
							Design
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>I used Material UI for the UI.</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h4" component="h4">
							Interview Science
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<p>More to come soon</p>
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h4" component="h4">
							About Daniel
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<p>More to come soon</p>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
