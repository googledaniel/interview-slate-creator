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
		display: 'flex',
		flex: 1,
		width: '100%',
		maxWidth: '900px',
		margin: 'auto'
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		width: '100%',
		'& > * + *': {
			marginTop: '20px'
		}
	},
	card: {}
}));

export default function HmDashboard(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				<Typography variant="h3" component="h3">
					Slate Dashboard
				</Typography>
				{props.slates.map(item => (
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="h4" component="h4">
								<Link to={`/${item._id}`}>{item.candidateName}</Link>
							</Typography>
							<Typography variant="h6" component="h6">
								{item.codingLanguage} | L{item.level} | {item.domain}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
