import axios from 'axios';

const FILM_FINDER_URL = 'http://localhost:3001/filmFinder/'

//************Calls to backend specific to API*************/

//Retrieve list of movie titles
async function getTitlesFromAPI(title) {
	try {
		const result = await axios.get(`${FILM_FINDER_URL}search/${title}`)
		return result.data;
	} catch (err) {
		console.debug('Failed to get movie titles from API', err)
	}
}

//Retrieve detailed information on one movie
async function getMovieFromAPI(id) {
	try {
		const result = await axios.get(`${FILM_FINDER_URL}find/${id}`)
		return result.data;
	} catch (err) {
		console.debug('Failed to get movie detail from API', err)
	}
}

//************Calls to backend specific to the DB*************

//Get information from movies saved to the DB
async function getExistingMovies() {
	try {
		const result = await axios.get(FILM_FINDER_URL);
		return result.data;
	} catch (err) {
		console.debug('Failed to get existing movies', err)
	}
}

//Add a new movie to the DB
async function addMovieToDB(movie) {
	try {
		await axios.post(`${FILM_FINDER_URL}add`, { movie })
	} catch (err) {
		console.debug('Failed to add movie to DB', err)
	}
}

//Update a saved movies votes in the DB
async function updateVoteInDB(id, vote) {
	try {
		await axios.post(`${FILM_FINDER_URL}vote/${id}`, { vote })
	} catch (err) {
		console.debug('Failed to update votes in DB', err)
	}
}

//Remove a movie from the DB
async function deleteMovieFromDB(id) {
	try {
		await axios.delete(`${FILM_FINDER_URL}delete/${id}`)
	} catch (err) {
		console.debug('Failed to delete movie from DB', err);
	}
}


export {
	getTitlesFromAPI,
	getMovieFromAPI,
	addMovieToDB,
	updateVoteInDB,
	getExistingMovies,
	deleteMovieFromDB
}