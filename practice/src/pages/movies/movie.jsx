import Error from "@/components/Error";
import useMovieFetch from "@/hooks/useMovieFetch";
import { MovieContainer } from "../../components/movies/MovieCardContainer";
import SkeletonCardList from "../../components/card/SkeletonList";

const MoviesPage = ({ url }) => {
  const { data: movies, isLoading, isError } = useMovieFetch(url);

  if (isLoading) return <SkeletonCardList number={20} />;
  if (isError) return <Error />;

  console.log(url);

  return <MovieContainer movies={movies} />;
};

export default MoviesPage;
