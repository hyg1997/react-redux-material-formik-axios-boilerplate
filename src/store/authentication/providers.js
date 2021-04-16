import { axiosInstance } from "../../network";
import { signUp, signIn } from "../../network/mappers";

const handlerEnabled = false;

export const signUpProvider = async (body) =>
  axiosInstance.post("/users/", signUp.requestMapper(body), {
    handlerEnabled,
  });

export const signInProvider = async (body) =>
  axiosInstance.post("/login/", signIn.requestMapper(body), {
    handlerEnabled,
  });
