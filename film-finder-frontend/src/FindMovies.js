import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import NavBar from './NavBar'
import {getTitlesFromAPI, getMovieDetail, getExistingMovies, updateVoteInDB} from './api'
import MovieDetail from './MovieDetail';

function FindMovies({getMovieDetails}){

	const [searchResults, setSearchResults] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	useEffect(function populateMovies() {
		update();
	}, []);

	function update(){
		setIsLoading(true);
		async function handlePopulate() {
      try {
				const moviesResult = await getExistingMovies();
        setSavedMovies(moviesResult);
        setIsLoading(false);
      } catch (err) {
        throw new Error("No movies found.")
      }
		}
		handlePopulate();
	}

	async function searchTitle({title}){
		let results = await getTitlesFromAPI(title);
		// console.log('searchResultsAre,', results)
		setSearchResults(results);
	}

	// function doVote(id, direction){
	// 	// console.log('voting with', id, direction)
	// 	// const currentMovie = savedMovies.filter(m => m.imdbid = id);
	// 	// console.log('movie is', currentMovie[0])
	// 	// console.log('with votes', currentMovie[0].votes)
	// 	// if (direction === 'up') currentMovie[0].votes ++;
	// 	// else currentMovie[0].votes --;

	// 	// setSavedMovies(curr => curr.forEach(m => {
	// 	// 		if(m.imdbid === id) m.votes = currentMovie.votes
	// 	// }))

	// 	updateVoteInDB(id, direction);
	// }

	const displaySavedMovies = isLoading ?
		<h1>Loading Movies...</h1> :
		savedMovies.map(movie =>
			<MovieDetail
				movie = {movie}
				key={movie.imdbid}
				// doVote={doVote}
				type='home'
			/>)

	return(
		<>
			<NavBar />
			<p>This is the search movies page</p>
			<SearchForm searchTitle = {searchTitle} />
			<SearchResults searchResults={searchResults}/>
			<ul>
				{displaySavedMovies}
			</ul>
		</>
	)
}

export default FindMovies;