import React from 'react';
import MovieDetail from './MovieDetail'

function SearchResults ({results, getMovieDetails}){
	
	let resultsDisplay = results.map(m => {
		return <MovieDetail
					movie = {m}
					key={m.imbdID}
					getMovieDetails={getMovieDetails}
					type='list'
					/>
	})

	return (
		resultsDisplay
	)
}

export default SearchResults;