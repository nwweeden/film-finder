const db = require('../db');

class Film {

	//Get existing movies from db
	static async getCurrentMovies(){
		const result = await db.query(
			`SELECT imdbID, title, poster, director, year, plot, imdbRating, votes
			FROM films`
		);
		const currentFilms = result.rows;

		return currentFilms;
	}

	//Add a movie to the DB
	static async addMovie({imdbID, Title, Poster, Director, Year, Plot, imdbRating}) {
		const result = await db.query(
			`INSERT INTO films (imdbID, title, poster, director, year, plot, imdbRating)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING imdbID, title, poster, director, year, plot, imdbRating, votes`,
				[imdbID, Title, Poster, Director, Year, Plot, imdbRating]);
		const film = result.rows[0];

		return film;
	}

	//Vote on a movie in the DB
	static async vote(id, vote){
		const voteChange = vote === 'up' ? 1 : -1;
		const result = await db.query(
			`UPDATE films
			SET votes = votes + $1
			WHERE imdbID = $2
			RETURNING votes`, [voteChange, id]);
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