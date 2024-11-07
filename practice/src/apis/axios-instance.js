import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
  },
  baseURL: "https://api.themoviedb.org/3/movie/",
});

const localAxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  baseURL: "http://localhost:3000/",
});

export { axiosInstance, localAxiosInstance };
