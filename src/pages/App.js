import React, { useState, useEffect, useRef } from 'react';
//import rubricModel from '../models/rubricModel';
import SlateCreator from '../components/SlateCreator';
import OurContext from '../context';
import SlateCreatorForm from '../components/SlateCreatorForm';
import HmDashboard from '../components/HmDashboard';
import rubricModel from '../../models/rubricModel';
import questionModel from '../../models/questionModel';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import Container from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { TextField, FormControl, Radio, Box } from '@material-ui/core';

//Material UI style created in sandbox templates: https://codesandbox.io/s/1l8ej?file=/demo.js:27-382

const question = questionModel;

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px',
		width: '-webkit-fill-available',
		maxWidth: '900px',
		alignItems: 'center',
		'& > * + *': {
			marginTop: '25px'
		}
	}
}));

export default function App(props) {
	const classes = useStyles();
	const [slate, setSlate] = useState();
	const [slates, setSlates] = useState();

	//UseEffect might solve the issue getting HmDashboard to load on start. Set slates on start

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://localhost:3000/api/dashboards');
				const data = await response.json();
				setSlates(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			<div className={classes.root}>
				<Grid container spacing={12}>
					<Grid item xs={9}>
						<Paper className={classes.paper}>
							{slates && <HmDashboard slates={slates} />}
						</Paper>
					</Grid>
				</Grid>

				{/*<div>*/}
				{/*	<SlateCreatorForm />*/}
				{/*</div>*/}
			</div>
		</>
	);
}
