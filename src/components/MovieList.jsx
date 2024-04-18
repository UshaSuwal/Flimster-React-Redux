import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieRequest } from "../redux/actions/movieActions";

import { Movie } from "./Movie";

export function MovieList() {

  const movies = useSelector((state) => state?.movie);
  const dispatch = useDispatch();


  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/all/movie_reviews")
      .then((response) => response.json())
      .then((data) => dispatch(fetchMovieRequest(data)));
  }, [dispatch]);

  return (
    <>
        {movies?.map((movie) => 
            <Movie movie={movie} key={movie.id} />
        )}
    </>
    
  );
}
