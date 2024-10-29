import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const params = useParams();

  return <h1>영화 상세 페이지 {params.movieId}</h1>;
};

export default MovieDetailPage;
