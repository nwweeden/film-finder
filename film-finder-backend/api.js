const axios = require('axios');
const { IMDB_API_KEY } = require('./projectSecrets')

const IMDB_URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/'


//Request list of titles from IMDB Alternative API
async function getTitleFromAPI(title) {
	const result = await axios.get(`${IMDB_URL}?s=${title}`, {
		headers: {
			'x-rapidapi-key': IMDB_API_KEY
		}
	})
	return result.data.Search;
}

//Request movie detail of one specific movie from IMDB Alternative API
async function getMovieDetail(id) {
	const result = await axios (`${IMDB_URL}?i=${id}`, {
		headers: {
			'x-rapidapi-key': IMDB_API_KEY
		}
	})
	return result.data;
}

module.exports = { getTitleFromAPI, getMovieDetail }