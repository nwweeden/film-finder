import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import { getTitlesFromAPI, getExistingMovies, deleteMovieFromDB } from '../api/api'
import MovieDetail from './MovieDetail';

/**
 * Renders a page with saved movies and ability to search for new movies
 * 
 * App --> MoviePage --> {SearchForm, MovieDetail}
 * 
 * State:
 *  - Search Results (Array of movie titles)
 *  - savedMovies (Array of saved movies)
 *  - isLoading (boolean for backend calls)
 * 
 * Props: none
 */
function FindMovies() {

	const [searchResults, setSearchResults] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	//On page load, populate saved movies and save to state
	useEffect(function populateMovies() {
		update();
	}, []);

	function update() {
		setIsLoading(true);
		async function handlePopulate() {
			try {
				const moviesResult = await getExistingMovies();
				setSavedMovies(moviesResult);
				setIsLoading(false);
			} catch (err) {
				throw new Error("Error loading movies")
			}
		}
		handlePopulate();
	}

	//Call backend to search for movie titles
	async function searchTitle({ title }) {
		let results = await getTitlesFromAPI(title);
		setSearchResults(results);
	}

	//Remove movie from DB and update state
	function deleteMovie(id) {
		deleteMovieFromDB(id);
		setSavedMovies(curr => curr.filter(m => m.imdbid !== id))
	}

	const displaySavedMovies = isLoading ?
		<h1>Loading Saved Movies...</h1> :
		savedMovies.map(m =>
			<MovieDetail
				movie={m}
				key={m.imdbid}
				deleteMovie={deleteMovie}
				type='list'
			/>)
	
	const displaySearchedTitles =
		searchResults.map(m =>
			<MovieDetail
				movie={m}
				key={m.imdbID}
				type='list'
			/>)

	return (
		<>
			<SearchForm searchTitle={searchTitle} />
			<ul>
				{displaySearchedTitles}
			</ul>
			<ul>
				{displaySavedMovies}
			</ul>
		</>
	)
}

export default FindMovies;