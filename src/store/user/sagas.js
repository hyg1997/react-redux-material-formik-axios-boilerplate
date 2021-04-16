import { put, takeLatest } from "redux-saga/effects";
import { user } from "../../network/mappers/user";
import { getUserProvider } from "./providers";

const getUserAsync = function* () {
  try {
    const response = yield getUserProvider();
    const mappedResponse = user.responseMapper(response);

    yield put({ type: "GET_USER_ASYNC", payload: mappedResponse });
  } catch (error) {
    yield put({ type: "SIGN_OUT" });
  }
};

export const watchMultipleActions = function* () {
  yield takeLatest("GET_USER", getUserAsync);
};
