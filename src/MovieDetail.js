import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './MovieDetail.css'

function MovieDetail({title, imageURL, id, getMovieDetails, votes, doVote}){
	
	const history = useHistory();

	async function handleChoice(evt){
		await getMovieDetails(id);
		history.push(`/findMovies/${id}`)
	}

	return (
		<div>
			<p>{title}</p>
			<img onClick={handleChoice} src={imageURL} alt={title} width="100"></img>
			{doVote &&
			<div className="PostDisplay-votes">
            <b>{votes} votes:</b>
            <i className="fas fa-thumbs-up text-success"
                onClick={evt => doVote("up", id)} />
            <i className="fas fa-thumbs-down text-danger"
                onClick={evt => doVote("down", id)} />
      </div>}
		</div>
	)
}

export default MovieDetail;