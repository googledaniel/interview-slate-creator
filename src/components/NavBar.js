import React from 'react';
import { Link } from 'react-router-dom';
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
import { TextField, FormControl, Radio } from '@material-ui/core';

const NavBar = props => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
			<div className="container-fluid justify-content-start">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						{props.routes
							.filter(item => !item.path.includes(':'))
							.map(({ key, path }) => (
								<li className="nav-item">
									<Link className="nav-link" key={key} to={path}>
										{key}
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
