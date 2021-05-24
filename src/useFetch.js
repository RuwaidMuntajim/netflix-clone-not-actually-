import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            
            setMovies(data.results);
            
            
        })
        .catch(err => {
            console.log(err);
        })
    }, [URL, movies]);
     
    return ( movies );

}
 
export default useFetch;