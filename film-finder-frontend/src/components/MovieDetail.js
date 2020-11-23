import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import './MovieDetail.css';
import { addMovieToDB, updateVoteInDB } from '../api/api'
import defaultPoster from '../noposter.jpg'

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

	let moviePoster;
	if (movie.Poster){
		moviePoster = movie.Poster === 'N/A' ? defaultPoster : movie.Poster;
	} else if (movie.poster){
		moviePoster = movie.poster === 'N/A' ? defaultPoster : movie.poster;
	}

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
			<div className='detailed-movie-container'>
				<img
					onClick={handleChoice}
					src={moviePoster}
					alt={movie.Title}></img>
				<div className='detailed-info-container'>
					<h4>{movie.Title}</h4>
					<p>Release Year: {movie.Year}</p>
					<p>Rating: {movie.imdbRating}</p>
					<i>{movie.Plot}</i>
					<div className='buttons'>
						<button className='btn btn-success' onClick={handleAdd}>Add to movie list</button>
						<Link to="/findMovies" className="btn btn-primary">Back to Movie List</Link>
					</div>
				</div>
			</div>
	} else if (type === 'list') {
		display =
			<div className='list-movie-container'>
				<h6>
					{movie.Title || movie.title}
				</h6>
				<div className='info-container'>
					<img
						onClick={handleChoice}
						src={moviePoster}
						alt={movie.Title || movie.title}>
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
							<button className='btn btn-sm btn-secondary' onClick={handleRemove}>Remove Movie</button>
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