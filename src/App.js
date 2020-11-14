import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';
import FindMovies from './FindMovies';
import MoviePage from './MoviePage';
import {getTitleFromAPI, getMovieDetail} from './actions/getTitle';

function App() {

	const history = useHistory();
	
	const [searchedMovies, setSearchedMovies] = useState([]);

	async function getMovieDetails(id){
		let results = await getMovieDetail(id);
		setSearchedMovies(curr => {
			return {
				...curr,
				id: results
			}
		})
		console.log('we should be redirecting')
		
		// history.push(`/findMovies/${id}`)
	}
	
	return (
    <div className="App">
			<BrowserRouter>
					<Switch>
						<Route exact path = '/'>
							<Home />
						</Route>
						<Route exact path = '/findMovies'>
							<FindMovies getMovieDetails={getMovieDetails}/>
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
