import React, { useRef, useState } from 'react';
import textField from '@material-ui/core/TextField';
import rubricModel from '../../models/rubricModel';
import questionModel from '../../models/questionModel';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import SlateCreatorForm from '../components/SlateCreatorForm';
import BottomNavBar from '../components/BottomNavBar';
import NavBar from '../components/NavBar';

export default function NewSlate(props) {
	return (
		<>
			<div>
				<SlateCreatorForm />
			</div>
		</>
	);
}
