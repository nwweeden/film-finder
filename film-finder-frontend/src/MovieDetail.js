import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './MovieDetail.css'

function MovieDetail({movie, getMovieDetails, doVote, type}){
	const history = useHistory();
	
	async function handleChoice(evt){
		await getMovieDetails(movie.id);
		history.push(`/findMovies/${movie.id}`)
	}

	let voting =
		<>
			<div className="PostDisplay-votes">
				<b>{movie.votes} votes:</b>
				<i className="fas fa-thumbs-up text-success"
						onClick={evt => doVote("up", movie.id)} />
				<i className="fas fa-thumbs-down text-danger"
				onClick={evt => doVote("down", movie.id)} />
			</div>
		</>

	let display;
	if (type === 'detailed'){
		display =
			<>
				<p>{movie.title}</p>
				<img onClick={handleChoice} src={movie.poster} alt={movie.title} width="100"></img>
				<p>{movie.year}</p>
				<p>{movie.rating}</p>
				<p>{movie.plot}</p>
				{voting}
			</>
	} else if (type === 'list'){
		display =
		<>
			<p>{movie.Title}</p>
			<img onClick={handleChoice} src={movie.Poster} alt={movie.Title} width="100"></img>
		</>
	} else if (type === 'home'){
		display =
		<>
			<p>{movie.Title}</p>
			<img onClick={handleChoice} src={movie.Poster} alt={movie.Title} width="100"></img>
			{voting}
		</>
	}
	return (
		<div>
			{display}
		</div>
	)
}

export default MovieDetail;