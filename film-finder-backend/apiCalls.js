const axios = require('axios');
const { IMBD_API_KEY } = require('./projectSecrets')

const IMBD_URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/'

async function getTitleFromAPI(title) {
	const result = await axios.get(`${IMBD_URL}?s=${title}`, {
		headers: {
			'x-rapidapi-key': IMBD_API_KEY
		}
	})
	return result.data.Search;
}

async function getMovieDetail(id) {
	const result = await axios (`${IMBD_URL}?i=${id}`, {
		headers: {
			'x-rapidapi-key': IMBD_API_KEY
		}
	})
	return result.data;
}

module.exports = { getTitleFromAPI, getMovieDetail }