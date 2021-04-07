import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlateCreator from '../components/SlateCreator';
import HmDashboard from '../components/hmDashboard';
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
import TextField from '@material-ui/core/TextField';

export default function SlateShow(props) {
	const [slate, setSlate] = useState();
	console.log('slate show - pre useEffect');
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/slates/${props.match.params.id}`);
				const data = await response.json();
				setSlate(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			{slate && <SlateCreator slate={slate} />}
			{!slate && <div>Slate not found</div>}
		</>
	);
}
