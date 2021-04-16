import { authHelpers } from "../utils";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    const accesssToken = authHelpers.getAccessToken();

    request.headers.get["Authorization"] = accesssToken;
  }
  return request;
};

export const successHandler = (response) => {
  return response;
};

export const errorHandler = (error) => {
  return Promise.reject({ ...error });
};
