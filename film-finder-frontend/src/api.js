import axios from 'axios';

const FILM_FINDER_URL = 'http://localhost:3001/filmFinder/'

//API CALLS
async function getTitlesFromAPI(title) {
	const result = await axios.get(`${FILM_FINDER_URL}search/${title}`)
	return result.data;
}

async function getMovieFromAPI(id) {
	console.log('getting the detail>>>')
	const result = await axios.get (`${FILM_FINDER_URL}find/${id}`)
	return result.data;
}

//DB CALLS
async function getExistingMovies(){
	const result = await axios.get(FILM_FINDER_URL);
	return result.data;
}

async function addMovieToDB(movie){
	try{
		await axios.post(`${FILM_FINDER_URL}add`,{movie})
	} catch {
		console.debug('Failed to add movie to DB')
	}
}

async function updateVoteInDB(id, vote){
	try{
		await axios.post(`${FILM_FINDER_URL}vote/${id}`, {vote})
	} catch {
		console.debug('Failed to update Vote in DB')
	}
}


export { getTitlesFromAPI, getMovieFromAPI, addMovieToDB, updateVoteInDB, getExistingMovies}