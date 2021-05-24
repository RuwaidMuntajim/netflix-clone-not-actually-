import React from 'react';

const MovieList = ({ movies, pic_fetch_URL }) => {
    return ( 
        <div className="movie_pics">
                {movies.map(movie => {
                    return <img src={pic_fetch_URL + movie.backdrop_path} alt="nothing" className="movie_pic"/>
                })}
            </div>
     );
}


 
export default MovieList; 