import Error from "@/components/Error";
import { useQuery } from "@tanstack/react-query";
import SkeletonCardList from "../../components/card/SkeletonList";
import { MovieContainer } from "../../components/movies/MovieCardContainer";
import { useGetMovies } from "../../hooks/queries/movie/useGetMovies.js";
import useGetInfiniteMovies
  from "../../hooks/queries/movie/useGetInfiniteMovies.js";

const MoviesPage = ({ category }) => {
  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => useGetMovies({ category: category, pageParam: 1 }),
    queryKey: ["movies", category],
    keepPreviousData: true,
    cacheTime: 10000,
    staleTime: 10000,
  });

  // const { data } = useGetInfiniteMovies(category);
  // console.log(data);

  if (isPending) {
    return <SkeletonCardList number={20}/>;
  }
  if (isError) return <Error />;

  return <MovieContainer movies={movies}/>;
};

export default MoviesPage;
