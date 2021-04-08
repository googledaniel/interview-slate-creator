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

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
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
			<Container maxWidth="lg">
				<React.Fragment>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>Candidate</TableCell>
								<TableCell>Level</TableCell>
								<TableCell>Domain</TableCell>
								<TableCell>Main Language</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{props.slates.map(item => (
								<TableRow key={item.id}>
									<TableCell>
										<Link to={`/${item._id}`}>{item.candidateName}</Link>
									</TableCell>
									<TableCell>{item.level}</TableCell>
									<TableCell>{item.domain}</TableCell>
									<TableCell>{item.codingLanguage}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</React.Fragment>
			</Container>
		</div>
	);
}
