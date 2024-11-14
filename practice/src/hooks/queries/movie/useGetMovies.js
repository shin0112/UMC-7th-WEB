import { axiosInstance } from "../../../apis/axios-instance.js";

const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(
    `movie/${category}?language=ko-KR&page=${pageParam}`
  );

  return data;
};

const useGetMovieDetails = async ({ movieId }) => {
  const { data } = await axiosInstance.get(`movie/${movieId}?language=ko-KR`);

  return data;
};

const useGetCredits = async ({ movieId }) => {
  const { data } = await axiosInstance.get(
    `movie/${movieId}/credits?language=ko-KR`)
  return data;
}

export { useGetMovies, useGetMovieDetails, useGetCredits };
