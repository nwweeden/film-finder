import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import FindMovies from './FindMovies';
import MoviePage from './MoviePage';

function App() {
	
	return (
    <div className="App">
			<BrowserRouter>
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
			</BrowserRouter>
    </div>
  );
}

export default App;
