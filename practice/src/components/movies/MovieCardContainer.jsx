import { useSearchParams } from "react-router-dom";
import useMovieFetch from "../../hooks/useMovieFetch";
import * as S from "../../pages/search/search.style";
import Error from "../Error";
import MovieCard from "./MovieCard";
import SkeletonCardList from "../card/SkeletonList";

export const MovieContainer = ({ movies }) => {
  return (
    <S.MovieContainer>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </S.MovieContainer>
  );
};

export const SearchMovieCardContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");

  const {
    data: movies,
    isLoading,
    isError,
  } = useMovieFetch(`/search/movie?query=${mq}&language=ko-KR`);

  if (isLoading) return <SkeletonCardList number={20} />;
  if (isError) return <Error />;

  if (mq && movies.data?.results.length === 0) {
    return <S.Text>검색어 {mq}에 해당하는 데이터가 없습니다.</S.Text>;
  }

  return <MovieContainer movies={movies} />;
};
