import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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

export default function NavBar(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Interview App
				</Typography>

				<div>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleMenu}
					>
						<MenuIcon />
					</IconButton>

					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						open={open}
						onClose={() => setAnchorEl(null)}
					>
						<MenuItem onClick={handleMenuClick}>
							<Link to="/">Home</Link>
						</MenuItem>
						<MenuItem onClick={handleMenuClick}>
							<Link to="/new">Make Slate</Link>
						</MenuItem>
						<MenuItem onClick={handleMenuClick}>
							<Link to="/contact">About</Link>
						</MenuItem>
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	);
}
