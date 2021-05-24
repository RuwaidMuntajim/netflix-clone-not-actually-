import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Banner.css';



const Banner = ({fetchURL}) => {
    const [movie, setMovie] = useState([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://api.themoviedb.org/3" + fetchURL);
            const res1 = res.data.results[Math.floor(Math.random() * res.data.results.length - 1)];
            
            
            setMovie(res1);
        }
        fetchData();
    }, [fetchURL])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    

    // useEffect(() => {
    //   console.log(movie);
    //   console.log(`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`);
    // }, [movie])

    
    return ( 
      <header 
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundPosition: "center center"
        }}
        >
        {/* Background image */}
        
          <div className="banner_contents">
            {/* title */}
            <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/* Buttons */}
            <div className="banner_buttons">
              <button className="banner_button">Play Now</button>
              <button className="banner_button">My List</button>
            </div>

            {/*  description */}
            <h1 className="banner_description">
              {truncate(movie?.overview, 121)}
            </h1>
            
  
          </div>
        </header>
     );
}
 
export default Banner;
