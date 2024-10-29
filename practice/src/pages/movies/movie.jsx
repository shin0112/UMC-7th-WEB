import MovieCard from "@/components/MovieCard";
import useCustomFetch from "@/hooks/useCustomFetch";
import styled from "styled-components";

const MoviesPage = ({ url }) => {
  const { data: movies, isLoading, isError } = useCustomFetch(url);

  if (isLoading) {
    return (
      <div>
        <h1>로딩 중...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>에러 </h1>
      </div>
    );
  }

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
