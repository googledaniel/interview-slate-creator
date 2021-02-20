import React from 'react';
import { Link } from 'react-router-dom';

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
