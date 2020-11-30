const db = require('../db');

class Film {

	//Get existing movies from db
	static async getCurrentMovies(){
		const result = await db.query(
			`SELECT imdbID, title, poster, director, year, plot, imdbRating, upvotes, downvotes
			FROM films`
		);
		const currentFilms = result.rows;

		return currentFilms;
	}

	//Add a movie to the DB
	static async addMovie({imdbID, Title, Poster, Director, Year, Plot, imdbRating}) {
		const result = await db.query(
			`INSERT INTO films (imdbid, title, poster, director, year, plot, imdbRating)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING imdbID, title, poster, director, year, plot, imdbRating, upvotes, downvotes`,
				[imdbID, Title, Poster, Director, Year, Plot, imdbRating]);
		const film = result.rows[0];
		
		return film;
	}

	//Vote on a movie in the DB
	static async vote(id, vote){
		let change = `${vote}votes`
		
		const result = await db.query(
			`UPDATE films
			SET ${change} = ${change} + 1
			WHERE imdbid = $1
			RETURNING imdbid, upvotes, downvotes`, [id]);
		const votes = result.rows[0];
		return votes;
	}

	//Remove movie from DB
	static async deleteMovie(id){
		await db.query(
			`DELETE FROM films
			WHERE imdbid = $1`, [id]
		);
		return;
	}
}

module.exports = Film