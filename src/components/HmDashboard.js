import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexWrap: 'wrap',
		width: '850px',
		maxWidth: '900px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function HmDashboard(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card className={classes.root}>
				<CardContent fullWidth>
					<Typography variant="h3" component="h3">
						Slate Dashboard
					</Typography>
				</CardContent>
			</Card>
			{props.slates.map(item => (
				<Card className={classes.root}>
					<CardContent>
						<Paper>
							<Typography variant="h4" component="h4">
								<Link to={`/${item._id}`}>{item.candidateName}</Link>
							</Typography>
							<Typography variant="h6" component="h6">
								{item.codingLanguage} | L{item.level} | {item.domain}
							</Typography>
						</Paper>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
