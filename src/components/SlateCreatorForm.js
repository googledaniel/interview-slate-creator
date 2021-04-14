import React, { useRef, useState } from 'react';
import SlateCreator from './SlateCreator';
import textField from '@material-ui/core/TextField';
import rubricModel from '../../models/rubricModel';
import questionModel from '../../models/questionModel';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import BottomNavBar from './BottomNavBar';

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

const marks = [
	{
		value: 0,
		label: '0%'
	},
	{
		value: 20,
		label: '20%'
	},
	{
		value: 50,
		label: '50%'
	},
	{
		value: 80,
		label: '80%'
	},
	{
		value: 100,
		label: '100%'
	}
];

function valuetext(value) {
	return `${value}%`;
}

const question = questionModel;

export default function SlateCreatorForm(props) {
	const [dash, setDash] = useState();
	const [slate, setSlate] = useState();
	const refCandidateName = useRef('');
	const refCodingLanguage = useRef('');
	const refLevel = useRef('');
	const refDomain = useRef('');
	const classes = useStyles();

	const handleSubmit = async e => {
		e.preventDefault();

		const slateMap =
			rubricModel[refLevel.current.value][refDomain.current.value];

		let num = 0;
		const usedQuestion = [''];

		const newSlate = slateMap.map(item => {
			//This is a recursive callback to make sure each question is unique for this slate:
			const getNum = () => {
				num = Math.floor(Math.random() * question[item].length);
				const uniqueItem = item + num;
				if (usedQuestion.indexOf(uniqueItem) >= 0) {
					getNum();
				} else {
					usedQuestion.push(uniqueItem);
				}
			};

			getNum();
			//!! in order to save which type of question is being asked, I need to refactor this part:
			return question[item][num];
			// return ({question[item][num], slateMap[item][num]});
		});

		try {
			const response = await fetch('/api/slates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					candidateName: refCandidateName.current.value,
					codingLanguage: refCodingLanguage.current.value,
					domain: refDomain.current.value,
					level: refLevel.current.value,
					questions: newSlate,
					active: true
				})
			});
			const data = await response.json();
			await setSlate(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				{!slate && (
					<FormControl onSubmit={handleSubmit}>
						<Card className={classes.root}>
							<CardContent>
								<Typography variant="h6" component="h6">
									Candidate Name{' '}
								</Typography>
								<input type="text" ref={refCandidateName} />
							</CardContent>

							<CardContent>
								<Typography variant="h6" component="h6">
									Coding Language{' '}
								</Typography>
								<input type="text" ref={refCodingLanguage} />
							</CardContent>
							<CardContent>
								<Typography variant="h6" component="h6">
									Level
									<select aria-label="Default select example" ref={refLevel}>
										<option defaultValue>Experience Level</option>
										<option value="3">Level 3 (Jr SWE)</option>
										<option value="4">Level 4 (Mid SWE)</option>
										<option value="5">Level 5 (Sr SWE)</option>
									</select>
								</Typography>
							</CardContent>
							<CardContent>
								<Typography variant="h6" component="h6">
									Domain
									<select aria-label="Default select example" ref={refDomain}>
										<option defaultValue>SWE Domain</option>
										<option value="FE">Frontend</option>
										<option value="BE">Backend</option>
										<option value="Infra">Infra</option>
									</select>
								</Typography>
							</CardContent>
							<CardContent>
								<Button
									startIcon={<SaveIcon />}
									variant="outlined"
									size="small"
									type="submit"
									onClick={handleSubmit}
								>
									Make Slate
								</Button>
							</CardContent>
						</Card>
					</FormControl>
				)}
				<div>{slate && <SlateCreator slate={slate} />}</div>
			</div>
		</div>
	);
}
