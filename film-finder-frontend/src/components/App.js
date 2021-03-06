import React from 'react'
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import FindMovies from './FindMovies';
import MoviePage from './MoviePage';

/**
 * Overall site application
 * 
 *  - Renders header, nav links, and contains routes to:
 * 		- Welcome Page (Home)
 * 		- Current Movie List (FindMovies)
 * 		- Movie detail page (MoviePage)
 */
function App() {
	
	return (
    <div className="App-container">
			<header className="App-header">
				<h1>Film Finder</h1>
				<nav className='navbar-expand-lg'>
					<NavLink to="/" className="nav-item nav-link active">Welcome Page</NavLink>
					<NavLink to="/findMovies" className="nav-item nav-link">Find Movies</NavLink>
				</nav>
			</header>

					<Switch>
						<Route exact path = '/'>
							<Home />
						</Route>
						<Route exact path = '/findMovies'>
							<FindMovies />
						</Route>
						<Route path = '/findMovies/:id'>
							<MoviePage />
						</Route>
						<Route>
							<p>Unfortunately I couldn't find that</p>
						</Route>
					</Switch>	
    </div>
  );
}

export default App;
