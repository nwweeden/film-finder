import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import './MovieDetail.css';
import {addMovieToDB, updateVoteInDB} from './api'

function MovieDetail({movie, type}){
	const history = useHistory();
	const [votes, setVotes] = useState(movie.votes)

	function handleChoice(evt){
		history.push(`/findMovies/${movie.imdbID}`)
	}

	function handleAdd(evt){
		addMovieToDB(movie);
		history.push(`/findMovies`)
	}

	function doVote(id, direction){
		let change = direction === 'up' ? 1 : -1
		setVotes(votes + change)
		updateVoteInDB(id, direction);
	}

	let voting =
		<>
			<div className="PostDisplay-votes">
				<b>{votes} votes:</b>
				<i className="fas fa-thumbs-up text-success"
						onClick={evt => doVote(movie.imdbid, "up")} />
				<i className="fas fa-thumbs-down text-danger"
				onClick={evt => doVote(movie.imdbid, "down")} />
			</div>
		</>

	let display;
	if (type === 'detailed'){
		display =
			<>
				<p>{movie.Title}</p>
				<img onClick={handleChoice} src={movie.Poster} alt={movie.Title} width="100"></img>
				<p>{movie.Year}</p>
				<p>{movie.imdbRating}</p>
				<p>{movie.Plot}</p>
				<button onClick={handleAdd}>Add to movie list</button>
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
			<p>{movie.title}</p>
			<img onClick={handleChoice} src={movie.poster} alt={movie.title} width="100"></img>
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