import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					JP. Morgan Chase Hackathon
				</NavLink>

				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/snacks">Solutions</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/drinks">Our Tools</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/new">Have a Suggestion</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
