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

export default function InterviewShow(props) {
	// const [slate, setSlate] = useState();
	console.log('slate show - pre useEffect');
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch(`/api/slates/${props.match.params.id}/`);
	// 			const data = await response.json();
	// 			setSlate(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, []);

	// I think this doesn't need a page but rather a component which is shown in the SlateShow page.
	return (
		<>
			<h2>No slates working</h2>
			{/*{slate && <div>Interview Found</div>}*/}
			{/*{!slate && <div>Interview not found</div>}*/}
		</>
	);
}
