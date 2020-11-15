import React from 'react';
import { useParams } from 'react-router-dom';

import MovieDetail from './MovieDetail';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import NavBar from './NavBar'

function MoviePage({searchedMovies}){

	const { id } = useParams();

	let movie = searchedMovies[id]
	
	return (
		<>
			<NavBar />
			<SearchForm />
			{/* <SearchResults /> */}
			<MovieDetail />
			<p>This is the movie page for {movie.title}, {movie.year}, {movie.rating}, votes: {movie.votes} </p>
		</>
	)
}

export default MoviePage;