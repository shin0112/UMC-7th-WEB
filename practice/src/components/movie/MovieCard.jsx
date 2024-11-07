import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const link = "https://image.tmdb.org/t/p/w500";

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
  }).isRequired,
  isHovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

function MovieCard(props) {
  const navigate = useNavigate();
  const { movie } = props;

  return (
    <MovieContainer>
      <ImgContainer>
        <StyledHoverImg
          onClick={() => {
            navigate(`/movies/${movie?.id}`);
          }}
          src={link + movie?.poster_path}
          alt={movie?.title}
        />
      </ImgContainer>
      <MovieInfo>
        <MovieName>{movie.title}</MovieName>
        <MovieDate>{movie.release_date}</MovieDate>
      </MovieInfo>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  width: 180px;
  height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 1.5vh;
  object-fit: cover;
  overflow: hidden;
  background-color: black;
`;

const StyledHoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.5;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieName = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;

const MovieDate = styled.div`
  color: white;
  font-size: 15px;
`;

export default MovieCard;
