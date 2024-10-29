import MoviesPage from "./movies/movie";

// home.jsx
const HomePage = () => {
  return <MoviesPage url={import.meta.env.VITE_POPULAR_URL} />;
};

export default HomePage;
