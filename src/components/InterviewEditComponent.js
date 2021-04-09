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
			<h2>Conduct Interview</h2>
			<div>Main Question: {item.question}</div>
			<div>
				Interview type:
				{item.qSubDomain}
				{item.subLanguageBoolean && <>, {item.subLanguages}</>}
			</div>
			<div>What to look for: {item.lookFor}</div>
			<div>
				<TextField
					id="outlined-full-width"
					label="Paste Candidate's Code"
					style={{ margin: 8 }}
					value={rawCode}
					onChange={e => setRawCode(e.target.value)}
					helperText=""
					fullWidth
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
					margin="normal"
					InputLabelProps={{
						shrink: true
					}}
					variant="filled"
				/>
			</div>
			<div>
				<Typography id="discrete-slider" gutterBottom>
					Percentile relative to others at same level
				</Typography>
				<Slider
					defaultValue={item.scores.percentile}
					getAriaValueText={valuetext}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={10}
					marks
					min={0}
					max={90}
				/>
			</div>

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
		</FormControl>
	);
}
