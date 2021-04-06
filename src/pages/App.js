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

import { TextField, FormControl, Radio, Box } from '@material-ui/core';

//style created on https://codesandbox.io/s/1l8ej?file=/demo.js:27-382
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const question = questionModel;

export default function App(props) {
	const [slate, setSlate] = useState();

	return (
		<>
			<div className="container-fluid ">
				<div className="jumbotron">
					<h4 className="display-4">Interview App</h4>
					<p className="lead">
						A software engineering slate creator for hiring managers.
					</p>
				</div>

				<div>
					<SlateCreatorForm />
				</div>
				{slate && <SlateCreator slate={slate} />}
			</div>
		</>
	);
}
