import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import CreditInfo from "../../components/CreditInfo";

const link = "https://image.tmdb.org/t/p/w500";

const MovieDetailPage = () => {
  const params = useParams();

  const {
    data: movie,
    isLoading: movieLoading,
    isError: movieError,
  } = useCustomFetch(`${params.movieId}?language=ko-KR`);

  const {
    data: credits,
    isLoading: creditsLoading,
    isError: creditsError,
  } = useCustomFetch(`${params.movieId}/credits?language=ko-KR`);

  if (movieLoading || creditsLoading) {
    return <Loading isLoading={true} />;
  }

  if (movieError || creditsError) {
    return <Error isError={true} />;
  }

  if (!movie?.data || !credits?.data) {
    return null;
  }

  console.log(credits);
  return (
    <div>
      <MovieInfoContainer
        style={{ backgroundImage: `url(${link}${movie.data.backdrop_path})` }}
      >
        <MovieDetailInfoContainer>
          <Title>{movie.data.title}</Title>
          <MovieDetailInfo>
            평균 {Math.round(movie.data.vote_average * 100) / 100}
          </MovieDetailInfo>
          <MovieDetailInfo>
            {movie.data.release_date.slice(0, 4)}
          </MovieDetailInfo>
          <MovieDetailInfo>{movie.data.runtime}분</MovieDetailInfo>
          <TagLine>{movie.data.tagline}</TagLine>
          <MovieDetailInfo>{movie.data.overview}</MovieDetailInfo>
        </MovieDetailInfoContainer>
      </MovieInfoContainer>

      <Title>감독/출연</Title>
      <CreditsContainer>
        {credits.data.cast.map((credit) => (
          <CreditInfo key={credit.id} credit={credit} />
        ))}
      </CreditsContainer>
    </div>
  );
};

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size: contain;
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
