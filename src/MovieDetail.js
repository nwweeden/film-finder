import React from 'react';
import { Link } from 'react-router-dom'

function MovieDetail({title, imageURL, id, key, getMovieDetails}){
	
	function handleChoice(evt){
		getMovieDetails(id);
	}
	
	return (
		<div>
			<p>{title}</p>
			<img onClick={handleChoice} src={imageURL} alt={title} width="100"></img>
		</div>
	)
}

export default MovieDetail;