import React, {useEffect, useState } from 'react';
import instance from '../axios'
import './Row.css';



const Row = ({title, fetchURL, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const pic_fetch_URL = "https://image.tmdb.org/t/p/original"
    
    useEffect(() => {
        const fetchData = async () => {

            
            const res = await instance.get(fetchURL)
            setMovies(res.data.results);
            
        }
        fetchData();
        
    }, [fetchURL])

        
    return ( 
        
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="movie_pics">
                {movies.map(movie => {
                        return <img src={`${pic_fetch_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="nothing" className={`${isLargeRow ? "bigmovie" : "movie_pic"}`}/>
                })}
            </div>
        </div>
        
     );
}
 
export default Row;
