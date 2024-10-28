import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import styled from "styled-components";

const MoviesPage = () => {
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
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
          },
        }
      );
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
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;
export default MoviesPage;
