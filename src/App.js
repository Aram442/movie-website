import { useEffect, useState } from "react";

function App() {
  const [popular, setPopular] = useState([]);

  //Using useEffect to when the component gets renderd out  Run fetchPopular() fucntion.
  useEffect(() => {
    fetchPopular();
  }, []); //Empty [] means if we have a peaice of State to update Write here.

  const fetchPopular = async () => {
    // I used Async becuase I used External Link or API
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0f898ec93930a149724e4e4c3c310af8"
    );
    //fetch henan
    const movies = await data.json();
    // after each thing we should find out if our link work or not => console.log(movies);
    setPopular(movies.results);
  }; 

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
