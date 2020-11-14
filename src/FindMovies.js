import React, {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import NavBar from './NavBar'
import {getTitleFromAPI, getMovieDetail} from './actions/getTitle'

function FindMovies({getMovieDetails}){
	
	const [results, setResults] = useState([]);

	async function searchTitle({title}){
		let results = await getTitleFromAPI(title);
		setResults(results)
	}

	return(
		<>
			<NavBar />
			<p>This is the search movies page</p>
			<SearchForm searchTitle = {searchTitle} />
			<SearchResults results={results} getMovieDetails={getMovieDetails}/>
		</>
	)
}

export default FindMovies;