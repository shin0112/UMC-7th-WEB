import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import CreditInfo from "../../components/movies/CreditInfo.jsx";
import {
  useGetCredits,
  useGetMovieDetails
} from "../../hooks/queries/movie/useGetMovies.js";

const link = "https://image.tmdb.org/t/p/w500";

const MovieDetailPage = () => {
  const params = useParams();

  const {
    data: movie,
    isPending: moviePending,
    isError: movieError,
  } = useQuery({
    queryFn: () => useGetMovieDetails({ movieId: params.movieId }),
    queryKey: ['movies', 'detail'],
    cacheTime: 10000,
    staleTime: 10000,
  });

  const {
    data: credits,
    isPending: creditsPending,
    isError: creditsError,
  } = useQuery({
    queryFn: () => useGetCredits({ movieId: params.movieId }),
    queryKey: ['credit'],
    cacheTime: 10000,
    staleTime: 10000,
  });

  if (moviePending || creditsPending) {
    return <Loading />;
  }

  if (movieError || creditsError) {
    return <Error isError={true} />;
  }

  if (!movie || !credits) {
    return null;
  }

  console.log(credits);
  return (
    <div>
      <MovieInfoContainer
        style={{ backgroundImage: `url(${link}${movie.backdrop_path})` }}
      >
        <MovieDetailInfoContainer>
          <Title>{movie.title}</Title>
          <MovieDetailInfo>
            평균 {Math.round(movie.vote_average * 100) / 100}
          </MovieDetailInfo>
          <MovieDetailInfo>
            {movie.release_date.slice(0, 4)}
          </MovieDetailInfo>
          <MovieDetailInfo>{movie.runtime}분</MovieDetailInfo>
          <TagLine>{movie.tagline}</TagLine>
          <MovieDetailInfo>{movie.overview}</MovieDetailInfo>
        </MovieDetailInfoContainer>
      </MovieInfoContainer>

      <Title>감독/출연</Title>
      <CreditsContainer>
        {credits.cast.map((credit) => (
          <CreditInfo key={credit.id} credit={credit} />
        ))}
      </CreditsContainer>
    </div>
  );
};

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Title = styled.div`
  color: white;
  font-weight: bolder;
  font-size: 30px;
  margin-bottom: 10px;
`;

const MovieDetailInfoContainer = styled.div`
  width: 40%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MovieDetailInfo = styled.div`
  color: white;
`;

const TagLine = styled.div`
  color: white;
  font-style: italic;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const CreditsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
`;

export default MovieDetailPage;
