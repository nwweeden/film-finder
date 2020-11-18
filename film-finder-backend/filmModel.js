const db = require('./db');

class Film {
	static async addMovie({title, poster, director, year, plot, imbdRating}, id) {
		const result = await db.query(
			`INSERT INTO films (id, title, poster, director, year, plot, imbdRating)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING id, title, poster, director, year, plot, imbdRating`,
				[id, title, poster, director, year, plot, imbdRating]);
		const film = result.rows[0];

		return film;
	}
}

module.exports = Film