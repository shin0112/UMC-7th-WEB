import { localAxiosInstance } from "./axios-instance.js";

export const login = async ({ email, password }) => {
  const { data } = await localAxiosInstance
  .post(
    "/auth/login",
    { email, password }
  );

  return data;
}

export const signup = async ({ email, password, passwordCheck }) => {
  const { data } = await localAxiosInstance
  .post(
    "/auth/register",
    { email, password, passwordCheck }
  );

  return data;
}