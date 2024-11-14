import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import CategoryPage from "@/pages/movies/category";
import MoviesPage from "@/pages/movies/movie";
import MovieDetailPage from "@/pages/movies/movie-detail";
import SearchPage from "@/pages/search/search";
import SignUpPage from "@/pages/signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/root-layout";

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
        element: <MoviesPage category={"now_playing"}/>,
      },
      {
        path: "/movies/popular",
        element: <MoviesPage category={"popular"}/>,
      },
      {
        path: "/movies/top-rated",
        element: <MoviesPage category={"top_rated"}/>,
      },
      {
        path: "/movies/up-coming",
        element: <MoviesPage category={"upcoming"}/>,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>;
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
