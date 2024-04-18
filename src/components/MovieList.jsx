import React, { useEffect, useState } from "react";

import { Movie } from "./Movie";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/all/movie_reviews")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
        {movies?.map((movie) => 
            <Movie movie={movie} key={movie.id} />
        )}
    </>
    
  );
}
