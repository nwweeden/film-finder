import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem } from 'reactstrap'

/**
 * Navigation apparing on each page
 * 
 * App --> {Navbar, Router}
 * 
 */
function NavBar(){
	return (
		<div>
			<Navbar>
        
				<NavLink exact to="/" className="navbar-brand">
          Film Finder
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/findMovies">Find Movies</NavLink>
          </NavItem>
        </Nav>

      </Navbar>
		</div>
	);
}

export default NavBar;