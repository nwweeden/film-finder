const express = require('express');
const Film = require('../models/filmModel');
const { getTitleFromAPI, getMovieDetail, getCurrentMovies } = require('../api')

const router = new express.Router();

/*********************Requests to the DB************* */

//Get existing movies from db
router.get('/', async function (req, res, next){
	try{
		const currentMovies = await Film.getCurrentMovies();
		return res.json(currentMovies)
	} catch(err) {
		next(err);
	}
})

//Add a movie to the DB
router.post('/add', async function(req, res, next){
	const movie = req.body.movie;
	try {
		const movieInfo = await Film.addMovie(movie);
		console.debug("Movie successfully added to the db")
		return res.json({movieInfo})
	} catch(err){
		next(err)
	}
})

//Vote on a movie in the DB
router.post('/vote/:id', async function(req, res, next){
	const id = req.params.id;
	const vote = req.body.vote;
	try {
		const updatedVotes = await Film.vote(id, vote);
		return res.json({"Vote Count": updatedVotes})
	} catch(err){
		next(err)
	}
})

//Remove movie from DB
router.delete('/delete/:id', async function(req, res, next){
	const id = req.params.id;
	try {
		await Film.deleteMovie(id);
		return res.json({message: `Removed ${id} from the db`})
	} catch(err){
		next(err);
	}
})

/*********************Requests to IMDB API************* */

//Get list of titles matching search item
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

module.exports = router;