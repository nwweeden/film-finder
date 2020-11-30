CREATE TABLE films (
    imdbID text PRIMARY KEY,
    title text NOT NULL,
    poster text NOT NULL,
		director text NOT NULL,
		year text NOT NULL,
		plot text NOT NULL,
		imdbRating text NOT NULL,
		upvotes integer DEFAULT 0,
		downvotes integer DEFAULT 0
);

