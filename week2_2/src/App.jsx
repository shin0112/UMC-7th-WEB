import { useState } from "react";
import "./App.css";
import { MOVIES } from "./mocks/movies";
import MovieCard from "./components/MovieCard";

function App() {
  const [hoverId, setHoverId] = useState(0);

  const mouseOn = (id) => {
    setHoverId(id);
  };

  const mouseOff = () => {
    setHoverId(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {MOVIES.results.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isHovered={movie.id === hoverId}
          onMouseEnter={() => mouseOn(movie.id)}
          onMouseLeave={mouseOff}
        />
      ))}
    </div>
  );
}

export default App;
