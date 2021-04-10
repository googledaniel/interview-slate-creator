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

export default function App(props) {
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

	return <>{slates && <HmDashboard slates={slates} />}</>;
}
