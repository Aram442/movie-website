import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";

function App() {
  const [popular, setPopular] = useState([]); //popular = null ;
  const [filtered, setFiltered] = useState([]);

  const [activeGenre, setActiveGenre] = useState(0);
  //Genre number meains: 28 = Action , 12 = Adventure , 16 = Animation , 35 = Comedy , 80 = Crime etc ....;
  //we can see the All genra in React devtools in Hooks section or porpse => movie ;

  //Using useEffect to when the component gets renderd out  Run fetchPopular() fucntion.
  useEffect(() => {
    fetchPopular();
  }, []); //Empty [] means if we have a peaice of State to update Write here.

  const fetchPopular = async () => {
    // I used Async becuase I used External Link or API
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0f898ec93930a149724e4e4c3c310af8"
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
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />; // key , movie propse
        })}
      </div>
    </div>
  );
}

export default App;
