import React from "react";
function Movie({ movie }) {
  // movie = propce boya dabet lyer Accessy bkayn.
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="movie_Images"
        // natwanin rastawxo bnusin movie.backdrop dabet sarata away bo bnusin & w500 = width: 500;
      />
    </div>
  );
}
export default Movie;
