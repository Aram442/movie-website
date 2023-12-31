import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
  console.log(apiKey);

  const [popular, setPopular] = useState([]); //popular = null ;
  const [filtered, setFiltered] = useState([]);

  const [activeGenre, setActiveGenre] = useState(0); //activeGenre = 0
  //Genre number meains: 28 = Action , 12 = Adventure , 16 = Animation , 35 = Comedy , 80 = Crime etc ....;
  //we can see the All genra in React devtools in Hooks section or porpse => movie ;

  //Using useEffect to when the component gets renderd out  Run fetchPopular() fucntion.
  useEffect(() => {
    fetchPopular();
  }, []); //Empty [] means if we have a peaice of State to update Write here.

  const fetchPopular = async () => {
    // I used Async becuase I used External Link or API
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    //fetch = henan
    const movies = await data.json();
    // after each thing we should find out if our link work or not => console.log(movies);
    console.log(movies);
    setPopular(movies.results); //popular = movie.results ;
    setFiltered(movies.results); // feltered = movice.results ;
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered ? (
            filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })
          ) : (
            <p>Loading...</p> // You can add a loading indicator here
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
