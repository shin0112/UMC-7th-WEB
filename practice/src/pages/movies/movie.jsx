import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MovieCard from "@/components/movie/MovieCard";
import useMovieFetch from "@/hooks/useMovieFetch";
import styled from "styled-components";

const MoviesPage = ({ url }) => {
  const { data: movies, isLoading, isError } = useMovieFetch(url);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log(url);

  return (
    <MovieContainer>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export default MoviesPage;
