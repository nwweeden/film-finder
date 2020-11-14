import React from 'react';
import MovieDetail from './MovieDetail'

function SearchResults ({results, getMovieDetails}){
	
	let resultsDisplay = results.map(m => {
		return <MovieDetail
					title={m.title}
					imageURL={m.image} 
					id={m.id}
					key={m.key}
					getMovieDetails={getMovieDetails}
					/>
	})

	return (
		resultsDisplay
	)
}

export default SearchResults;