import React, { useEffect, useState, useCallback } from 'react';
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
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexWrap: 'wrap',
		width: '100%',
		maxWidth: '900px',
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		},
		margin: 'auto'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	margin: {
		height: theme.spacing(3)
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

export default function InterviewEditComponent({ item, onCancel, onSave }) {
	const classes = useStyles();
	const [rawCode, setRawCode] = useState(item.rawCode);
	const [notes, setNotes] = useState(item.notes);
	const [summary, setSummary] = useState(item.summary);
	const [scores, setScores] = useState(item.scores);

	const handleSave = useCallback(() => {
		const updatedItem = {
			...item,
			rawCode,
			notes,
			summary,
			scores
		};
		onSave(updatedItem);
	}, [rawCode, notes, summary, scores]);

	return (
		<FormControl>
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
				<div>
					<TextField
						id="outlined-full-width"
						label="Paste Candidate's Code"
						style={{ margin: 8 }}
						value={rawCode}
						onChange={e => setRawCode(e.target.value)}
						helperText=""
						fullWidth
						multiline
						rows={8}
						margin="normal"
						InputLabelProps={{
							shrink: true
						}}
						variant="filled"
					/>
				</div>
				<div>
					<TextField
						id="outlined-full-width"
						label="Live Interview Notes"
						style={{ margin: 8 }}
						value={notes}
						onChange={e => setNotes(e.target.value)}
						helperText=""
						fullWidth
						multiline
						rows={8}
						margin="normal"
						InputLabelProps={{
							shrink: true
						}}
						variant="filled"
					/>
				</div>
				<div>
					<TextField
						id="outlined-full-width"
						label="Post-interview Summary"
						style={{ margin: 8 }}
						value={summary}
						onChange={e => setSummary(e.target.value)}
						helperText=""
						fullWidth
						multiline
						rows={8}
						margin="normal"
						InputLabelProps={{
							shrink: true
						}}
						variant="filled"
					/>
				</div>
				<CardContent>
					<Typography id="discrete-slider-custom" gutterBottom>
						Percentile relative to others at same level:{' '}
						{item.scores[0].percentile}
					</Typography>
					<Slider
						defaultValue={item.scores[0].percentile}
						getAriaValueText={valuetext}
						aria-labelledby="discrete-slider-custom"
						valueLabelDisplay="true"
						step={10}
						marks={marks}
					/>
				</CardContent>
				<CardContent>
					<Button
						startIcon={<SaveIcon />}
						variant="outlined"
						size="small"
						onClick={handleSave}
					>
						Save
					</Button>
					<Button
						startIcon={<DeleteIcon />}
						variant="outlined"
						size="small"
						onClick={() => onCancel(false)}
					>
						Close
					</Button>
				</CardContent>
			</Card>
		</FormControl>
	);
}
