const link = "https://image.tmdb.org/t/p/w500";

function MovieCard(props) {
  const { movie, isHovered, onMouseEnter, onMouseLeave } = props;

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "450px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: isHovered ? 0.7 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src={link + movie.poster_path}
        alt={movie.title}
      />
    </div>
  );
}

export default MovieCard;
