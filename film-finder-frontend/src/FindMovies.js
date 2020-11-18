import React, {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import NavBar from './NavBar'
import {getTitlesFromAPI, getMovieDetail} from './api'
import MovieDetail from './MovieDetail';

function FindMovies({searchedMovies, getMovieDetails, doVote}){

	const [results, setResults] = useState([]);
	// const [showSearch, setSearch] = useState(false);

	async function searchTitle({title}){
		
		let results = await getTitlesFromAPI(title);
		setResults(results);
	}

	const displaySearchedMovies = Object.keys(searchedMovies).map(key => {
		console.log('current movie is', searchedMovies[key])
		return (
			<MovieDetail
						movie = {searchedMovies[key]}
						key={searchedMovies[key].id}
						getMovieDetails={getMovieDetails}
						doVote={doVote}
						type='home'/>
		)}
	)

	return(
		<>
			<NavBar />
			<p>This is the search movies page</p>
			<SearchForm searchTitle = {searchTitle} />
			<SearchResults results={results} getMovieDetails={getMovieDetails}/>
			<ul>
				{displaySearchedMovies}
			</ul>
		</>
	)
}

export default FindMovies;