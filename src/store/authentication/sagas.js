import { put, takeLatest, delay } from "redux-saga/effects";
import { signInProvider, signUpProvider } from "./providers";
import { signIn, signUp } from "../../network/mappers";

const delayTime = 2000;

const signUpAsync = function* (action) {
  try {
    const response = yield signUpProvider(action.value);
    const mappedResponse = signUp.responseMapper(response);

    yield put({ type: "SIGN_UP_ASYNC", payload: mappedResponse });
    yield delay(delayTime);
    yield put({
      type: "AUTH",
      payload: { accessToken: mappedResponse.accessToken },
    });
  } catch (error) {
    const mappedResponse = signUp.responseMapper(error.response);

    yield put({ type: "SIGN_UP_ASYNC", payload: mappedResponse });
    yield delay(delayTime);
    yield put({ type: "AUTH_FAILED" });
  }
};

const signInAsync = function* (action) {
  try {
    const response = yield signInProvider(action.value);
    const mappedResponse = signIn.responseMapper(response);

    yield put({ type: "SIGN_IN_ASYNC", payload: mappedResponse });
    yield delay(delayTime);
    yield put({
      type: "AUTH",
      payload: { accessToken: mappedResponse.accessToken },
    });
  } catch (error) {
    const mappedResponse = signIn.responseMapper(error.response);

    yield put({ type: "SIGN_IN_ASYNC", payload: mappedResponse });
    yield delay(delayTime);
    yield put({ type: "AUTH_FAILED" });
  }
};

export const watchSignUp = function* () {
  yield takeLatest("SIGN_UP", signUpAsync);
};

export const watchSignIn = function* () {
  yield takeLatest("SIGN_IN", signInAsync);
};
