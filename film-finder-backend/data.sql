CREATE TABLE films (
    imdbID text PRIMARY KEY,
    title text NOT NULL,
    poster text NOT NULL,
		director text NOT NULL,
		year text NOT NULL,
		plot text NOT NULL,
		imdbRating text NOT NULL,
		votes integer DEFAULT 0
);

