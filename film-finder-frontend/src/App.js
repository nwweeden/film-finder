import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import FindMovies from './FindMovies';
import MoviePage from './MoviePage';
import {getTitleFromAPI, getMovieDetail} from './api';

function App() {

	
	const [searchedMovies, setSearchedMovies] = useState({});
	
	async function getMovieDetails(id){
		if (searchedMovies[id]) return;

		let results = await getMovieDetail(id);
		results.votes = 0;

		setSearchedMovies(curr => {
			return {...curr, [id]: results}
		})
	}

	function doVote(direction, id){
		console.log('doing vote', direction, id)

		const currentMovie = searchedMovies[id];
		if (direction === 'up') currentMovie.votes = currentMovie.votes += 1;
		else currentMovie.votes = currentMovie.votes -= 1;

		setSearchedMovies(curr => {
			return {...curr, [id]: currentMovie}
		})
	}
	
	return (
    <div className="App">
			<BrowserRouter>
					<Switch>
						<Route exact path = '/'>
							<Home />
						</Route>
						<Route exact path = '/findMovies'>
							<FindMovies searchedMovies = {searchedMovies} getMovieDetails={getMovieDetails} doVote={doVote}/>
						</Route>
						<Route path = '/findMovies/:id'>
							<MoviePage searchedMovies = {searchedMovies} />
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
