import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './MovieDetail.css';
import { addMovieToDB, updateVoteInDB } from '../api/api'

/**
 * Renders information about one movie
 * 
 * {FindMovies, MoviePage} --> MovieDetail
 * 
 * State:
 *  - current vote count of a movie
 * 
 * Props:
 *  - movie (all information about the movie)
 *  - type (to determine what to show)
 *  - deleteMovie (fn to remove movie from savedMovies state)
 */
function MovieDetail({ movie, type, deleteMovie }) {
	const history = useHistory();
	const [votes, setVotes] = useState(movie.votes)

	//For search results, direct user to Movie Page
	function handleChoice(evt) {
		const movieID = movie.imdbID || movie.imdbid
		history.push(`/findMovies/${movieID}`)
	}

	function handleAdd(evt) {
		addMovieToDB(movie);
		history.push(`/findMovies`)
	}

	function handleRemove(evt) {
		deleteMovie(movie.imdbid)
	}

	//On click, change the vote in the DB and in state
	function doVote(id, direction) {
		let change = direction === 'up' ? 1 : -1
		setVotes(votes + change)
		updateVoteInDB(id, direction);
	}

	/**
	 * Show either detailed or limited movie info 
	 * based on where in the app the user is
	*/
	let display;
	if (type === 'detailed') {
		display =
			<>
				<p>{movie.Title}</p>
				<img
					onClick={handleChoice}
					src={movie.Poster}
					alt={movie.Title}
					width="100"></img>
				<p>{movie.Year}</p>
				<p>{movie.imdbRating}</p>
				<p>{movie.Plot}</p>
				<button onClick={handleAdd}>Add to movie list</button>
			</>
	} else if (type === 'list') {
		display =
			<div className='movie-container'>
				<h6>
					{movie.Title || movie.title}
				</h6>
				<div className='detail-container'>
					<img
						onClick={handleChoice}
						src={movie.Poster || movie.poster}
						alt={movie.Title || movie.title}
						height="200">
					</img>
					{deleteMovie &&
						<div>
							<div className="PostDisplay-votes">
								<b>{votes} votes:</b>
								<i className="fas fa-thumbs-up text-success"
									onClick={evt => doVote(movie.imdbid, "up")} />
								<i className="fas fa-thumbs-down text-danger"
									onClick={evt => doVote(movie.imdbid, "down")} />
							</div>
							<button className='btn btn-warning' onClick={handleRemove}>Remove Movie</button>
						</div>
					}
				</div>
			</div>
	}

	return (
		<div>
			{display}
		</div>
	)
}

export default MovieDetail;