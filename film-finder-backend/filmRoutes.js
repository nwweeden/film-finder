const express = require('express');
const Film = require('./filmModel');
const { getTitleFromAPI, getMovieDetail, getCurrentMovies } = require('./apiCalls')

const router = new express.Router();

//Get existing movies from db
router.get('/', async function (req, res, next){
	try{
		const currentMovies = await Film.getCurrentMovies();
		return res.json(currentMovies)
	} catch(err) {
		next(err);
	}
})

//Get list of titles
router.get('/search/:title', async function(req, res, next){
	const title = req.params.title
	try {
		const movieInfo = await getTitleFromAPI(title);
		return res.json(movieInfo)
	} catch(err){
		next(err)
	}
})

//Get information on one movie
router.get('/find/:id', async function(req, res, next){
	const id = req.params.id
	try {
		const movieInfo = await getMovieDetail(id);
		return res.json(movieInfo)
	} catch(err){
		next(err)
	}
})

//add a movie to your list
router.post('/add', async function(req, res, next){
	const movie = req.body.movie;
	console.log('movie is', movie)
	try {
		const movieInfo = await Film.addMovie(movie);
		console.debug("Movie successfully added to the db")
		return res.json({movieInfo})
	} catch(err){
		next(err)
	}
})

//vote on a movie in your
router.post('/vote/:id', async function(req, res, next){
	const id = req.params.id;
	const vote = req.body.vote;
	console.log('updated vote with', id, vote)
	try {
		const updatedVotes = await Film.vote(id, vote);
		return res.json({"Vote Count": updatedVotes})
	} catch(err){
		next(err)
	}
})

module.exports = router;