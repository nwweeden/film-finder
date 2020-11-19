import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import MovieDetail from './MovieDetail';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import NavBar from './NavBar'
import { getMovieFromAPI } from './api'

function MoviePage({searchedMovies, addMovie}){

	const { id } = useParams();

	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(function getMovieDetailOnMount(){
		async function getMovieDetail(){
			try {
				const result = await getMovieFromAPI(id);
				setMovie(result);
				setIsLoading(false);
			} catch (err){
				console.debug("Error Retrieving Movie Detail")
			}
		}
		getMovieDetail();
	}, [id]);

	const movieDetailDisplay = (isLoading ?
		<h1>Movie Details Loading...</h1> :
		<div>
			<MovieDetail movie={movie} addMovie={addMovie} type='detailed'/>
		</div>)
	
	return (
		<>
			<NavBar />
			<SearchForm />
			{movieDetailDisplay}
		</>
	)
}

export default MoviePage;