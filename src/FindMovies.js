import React, {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import NavBar from './NavBar'
import {getTitleFromAPI, getMovieDetail} from './actions/getTitle'
import MovieDetail from './MovieDetail';

function FindMovies({searchedMovies, getMovieDetails, doVote}){
	
	const [results, setResults] = useState([]);

	async function searchTitle({title}){
		let results = await getTitleFromAPI(title);
		setResults(results)
	}

	const displaySearchedMovies = Object.keys(searchedMovies).map(key => {
		return (
			<MovieDetail
						title={searchedMovies[key].title}
						imageURL={searchedMovies[key].poster}
						votes={searchedMovies[key].votes}
						id={key}
						key={key}
						getMovieDetails={getMovieDetails}
						doVote={doVote}/>
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