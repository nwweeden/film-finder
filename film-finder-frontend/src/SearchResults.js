import React from 'react';
import MovieDetail from './MovieDetail'

function SearchResults ({searchResults, getMovieDetails}){
	
	let resultsDisplay = searchResults.map(m => {
		return <MovieDetail
					movie = {m}
					key={m.imdbID}
					getMovieDetails={getMovieDetails}
					type='list'
					/>
	})

	return (
		resultsDisplay
	)
}

export default SearchResults;