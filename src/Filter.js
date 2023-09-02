import { useEffect } from "react";

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) {
  return (
    <div className="filter-container">
      <button onClick={() => setActiveGenre(0)}>All</button>
      <button onClick={() => setActiveGenre(35)}>Comedy</button>
      <button onClick={() => setActiveGenre(28)}>Action</button>
      {/* F12 Components -> App -> Hooks -> 3 State when click on All state = 0 , click on Comedy = 35 ect...*/}
    </div>
  );
}
export default Filter;
