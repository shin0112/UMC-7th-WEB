import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
  },
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export { axiosInstance };
