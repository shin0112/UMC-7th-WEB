import { localAxiosInstance } from "../../../apis/axios-instance.js";

const useGetUserInfo = async () => {
  const { data } = await localAxiosInstance("user/me");

  return data;
}

export { useGetUserInfo };