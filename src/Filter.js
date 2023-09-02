import { useEffect } from "react";

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) => {
      return movie.genre_ids.includes(activeGenre); //filtary Hamu Movie akan dakat harkamy genre_ids = activeGenre = 0 , awa returne dakat
      // wa Anjamy Filter krdnaka dakata naw filtered variable.
    });
    setFiltered(filtered); //filter variable.
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      {/* F12 Components -> App -> Hooks -> 3 State when click on All state = 0 , click on Comedy = 35 ect...*/}
    </div>
  );
}
export default Filter;
