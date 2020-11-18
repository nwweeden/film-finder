import axios from 'axios';

const FILM_FINDER_URL = 'http://localhost:3001/filmFinder/'

async function getTitlesFromAPI(title) {
	const result = await axios.get(`${FILM_FINDER_URL}search/${title}`)
	return result.data;
}

async function getMovieDetail(id) {
	const result = await axios.get (`${FILM_FINDER_URL}find/${id}`)
	return result.data;
}


export { getTitlesFromAPI, getMovieDetail }