import { axiosInstance } from "../../network";

const handlerEnabled = true;

export const getUserProvider = async () =>
  axiosInstance.get("/users/", {
    handlerEnabled,
  });
