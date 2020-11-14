import axios from 'axios';
import {IMBD_API_KEY} from '../projectSecrets'

const IMBD_URL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/'

async function getTitleFromAPI(title) {
	const result = await axios.get(`${IMBD_URL}search/${title}`, {
		headers: {
			'x-rapidapi-key': IMBD_API_KEY
		}
	})
	return result.data.titles;
}

async function getMovieDetail(id) {
	const result = await axios (`${IMBD_URL}film/${id}`, {
		headers: {
			'x-rapidapi-key': IMBD_API_KEY
		}
	})
	console.log('result is', result)
	return result.data;
}

export {getTitleFromAPI, getMovieDetail}