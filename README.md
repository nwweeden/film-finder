# Film Finder

## About the Application

This is a full stack application that has a few different features:

 - A welcome page for users
<img src="/screenshots/homepage.png" alt="Welcome Page" width="500"/>

 - The ability to search for movies
<img src="/screenshots/search.png" alt="Search For Movies" width="500"/>

 - Users can view detail about a specific movie
<img src="/screenshots/movieDetail.png" alt="View Movie Detail" width="500"/>

 - Users can also save certain movies and vote on them
<img src="/screenshots/vote.png" alt="Vote On Saved Movies" width="500"/>

This repository contains two separate applications: film-finder-frontend which is a Create React App for the frontend and film-finder-backend which is a Node API for the backend.

## Getting Started
1. Clone the repository
2. `cd film-finder-backend`
3. `npm run seed` to create and set up your db
4. `npm install` to install dependencies
5. Visit https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative to set up an account and obtain a custom RapidAPI key
6. create a `projectSecrets.js` file and assign and export a variable `IMDB_API_KEY` equal to your custom key
7. `npm start`
8. `cd film-finder-frontend`
9. `npm install` to install dependencies
10. `npm start` to launch the application


Have Fun!
