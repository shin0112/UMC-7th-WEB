import { useState } from "react";
import "./App.css";
import { MOVIES } from "./mocks/movies";

const link = "https://image.tmdb.org/t/p/w500";

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
      {MOVIES.results.map((movie, _) => (
        <div
          key={movie.id}
          onMouseEnter={() => {
            mouseOn(movie.id);
          }}
          onMouseLeave={() => {
            mouseOff();
          }}
          style={{
            position: "relative",
            width: "300px",
            height: "450px",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: movie.id === hoverId ? "black" : "transparent",
              opacity: movie.id === hoverId ? 0.7 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
          <img
            style={{
              width: "300px",
              height: "450px",
            }}
            src={link + movie.poster_path}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
