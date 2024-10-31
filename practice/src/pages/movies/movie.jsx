import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MovieCard from "@/components/MovieCard";
import useCustomFetch from "@/hooks/useCustomFetch";
import styled from "styled-components";

const MoviesPage = ({ url }) => {
  const { data: movies, isLoading, isError } = useCustomFetch(url);

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
