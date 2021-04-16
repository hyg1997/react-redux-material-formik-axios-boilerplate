import { all, fork } from "redux-saga/effects";
import { watchSignUp, watchSignIn } from "./authentication/sagas";
import { watchMultipleActions } from "./user/sagas";

export const rootSagas = function* () {
  yield all([fork(watchSignUp), fork(watchSignIn), fork(watchMultipleActions)]);
};
