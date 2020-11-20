import React from 'react';
import './Home.css'

/**
 * Renders welcome page
 * App --> Home
 * 
 * State: None
 * 
 * Props: None
 */
function Home (){
	return(
		<div className='container'>
			<p className="description">Find and rank your favorite movies!</p>
			<a className='btn btn-success' href = '/findMovies'>Get started</a>
			<div className ='posters'>
				<img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" alt="Avengers: Endgame"></img>
				<img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
 alt='"Star Wars: Episode IV - A New Hope"'></img>
				<img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" alt='Inception'></img>
				<img src="https://m.media-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_SX300.jpg" alt="Forgetting Sarah Marshall"></img>
				<img src="https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_SX300.jpg" alt="How to Lose a Guy in 10 Days"></img>
				<img src="https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg" alt="Inside Out"></img>
				<img src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg" alt='John Wick'></img>
				<div>
					<p>Click the Button Above to Get Started!</p>
				</div>
			</div>
		</div>
	)
}

export default Home;


