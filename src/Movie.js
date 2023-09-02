import { motion } from "framer-motion";

function Movie({ movie }) {
  // movie = propce boya dabet lyer Accessy bkayn.
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="movie_Images"
        // natwanin rastawxo bnusin movie.backdrop dabet sarata away bo bnusin & w500 = width: 500;
      />
    </motion.div>
  );
}
export default Movie;
