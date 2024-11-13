import Error from "@/components/Error";
import Loading from "@/components/Loading";
import useMovieFetch from "@/hooks/useMovieFetch";
import { MovieContainer } from "../../components/movies/MovieCardContainer";

const MoviesPage = ({ url }) => {
  const { data: movies, isLoading, isError } = useMovieFetch(url);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log(url);

  return <MovieContainer movies={movies} />;
};

export default MoviesPage;
