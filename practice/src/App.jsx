import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/signup";
import SearchPage from "@/pages/search";
import MoviesPage from "@/pages/movies/movie";
import CategoryPage from "@/pages/movies/category";
import MovieDetailPage from "@/pages/movies/movie-detail";

const nowPlayingUrl = `movie/${import.meta.env.VITE_NOW_PLAYING_URL}`;
const popularUrl = `movie/${import.meta.env.VITE_POPULAR_URL}`;
const topRatedUrl = `movie/${import.meta.env.VITE_TOP_RATED_URL}`;
const upComingUrl = `movie/${import.meta.env.VITE_UP_COMING_URL}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "movies",
        element: <CategoryPage />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetailPage />,
      },
      {
        path: "/movies/now-playing",
        element: <MoviesPage url={nowPlayingUrl} />,
      },
      {
        path: "/movies/popular",
        element: <MoviesPage url={popularUrl} />,
      },
      {
        path: "/movies/top-rated",
        element: <MoviesPage url={topRatedUrl} />,
      },
      {
        path: "/movies/up-coming",
        element: <MoviesPage url={upComingUrl} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
