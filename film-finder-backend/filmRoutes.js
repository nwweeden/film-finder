const express = require('express');
const Film = require('./filmModel');
const { getTitleFromAPI, getMovieDetail } = require('./apiCalls')

const router = new express.Router();

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
router.post('/:id', async function(req, res, next){
	const id = req.params.id;
	const movieData = req.body;
	try {
		const movieInfo = await Film.addMovie(movieData, id);
		return res.json(movieInfo)
	} catch(err){
		next(err)
	}
})

//vote on a movie in your
router.post('/:id/:vote', async function(req, res, next){
	const id = req.params.id;
	const vote = req.params.id;
	const movieData = req.body;
	try {
		const vote = await Film.vote(movieData, id, vote);
		return res.json({"Voted":vote})
	} catch(err){
		next(err)
	}
})

module.exports = router;