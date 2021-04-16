import { createAction } from "redux-actions";

export const signUpAsync = createAction("SIGN_UP_ASYNC");
export const signUp = createAction("SIGN_UP");
export const signInAsync = createAction("SIGN_IN_ASYNC");
export const signIn = createAction("SIGN_IN");
export const authFailed = createAction("AUTH_FAILED");
export const auth = createAction("AUTH");
export const signOut = createAction("SIGN_OUT");
