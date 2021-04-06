import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/*
First Material UI work.

 */
export default function HmDashboard(props) {
	return (
		<Container maxWidth="md">
			<React.Fragment>
				{/*<Title>Recent Orders</Title>*/}
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
									<a href={`http://localhost:3000/${item._id}`}>
										{item.candidateName}
									</a>
								</TableCell>
								<TableCell>{item.level}</TableCell>
								<TableCell>{item.domain}</TableCell>
								<TableCell>{item.codingLanguage}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{/*<div className={classes.seeMore}>*/}
				{/*	<Link color="primary" href="#" onClick={preventDefault}>*/}
				{/*		See more orders*/}
				{/*	</Link>*/}
				{/*</div>*/}
			</React.Fragment>

			{/*<ul>*/}
			{/*	{props.slates.map(item => {*/}
			{/*		return (*/}
			{/*			<div>*/}
			{/*				<div>*/}
			{/*					<blockquote>*/}
			{/*						<a href={`http://localhost:3000/${item._id}`}>*/}
			{/*							{item.candidateName}*/}
			{/*						</a>*/}
			{/*					</blockquote>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		);*/}
			{/*	})}*/}
			{/*</ul>*/}
		</Container>
	);
}
