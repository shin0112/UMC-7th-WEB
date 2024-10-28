import styled from "styled-components";

const link = "https://image.tmdb.org/t/p/w500";

function MovieCard(props) {
  const { movie, isHovered, onMouseEnter, onMouseLeave } = props;

  return (
    <ImgContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <StyledHoverImg src={link + movie.poster_path} alt={movie.title} />
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  width: 150px;
  height: 225px;
  border-radius: 20px;
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

export default MovieCard;
