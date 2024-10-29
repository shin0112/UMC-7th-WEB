import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import styled from "styled-components";

const MoviesPage = ({ url }) => {
  const [hoverId, setHoverId] = useState(0);

  const mouseOn = (id) => {
    setHoverId(id);
  };

  const mouseOff = () => {
    setHoverId(0);
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
        },
      });
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <MovieContainer>
      {movies.data?.results.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isHovered={movie.id === hoverId}
          onMouseEnter={() => mouseOn(movie.id)}
          onMouseLeave={mouseOff}
        />
      ))}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1vw;
`;
export default MoviesPage;
