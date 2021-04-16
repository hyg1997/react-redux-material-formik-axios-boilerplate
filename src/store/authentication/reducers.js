import { handleActions } from "redux-actions";
import { authHelpers } from "../../utils";
import {
  signUpAsync,
  signUp,
  authFailed,
  auth,
  signOut,
  signIn,
  signInAsync,
} from "./actions";

const defaultState = {
  auth: !!authHelpers.getAccessToken(),
  loading: false,
  response: {},
};

export const authentication = handleActions(
  {
    [signUpAsync]: (state, action) => ({
      ...state,
      loading: false,
      response: action.payload,
    }),
    [signUp]: (state) => ({
      ...state,
      loading: true,
    }),
    [signInAsync]: (state, action) => ({
      ...state,
      loading: false,
      response: action.payload,
    }),
    [signIn]: (state) => ({
      ...state,
      loading: true,
    }),
    [authFailed]: () => defaultState,
    [auth]: (state, action) => {
      authHelpers.signIn(action?.payload?.accessToken);

      return {
        ...defaultState,
        auth: true,
      };
    },
    [signOut]: () => {
      authHelpers.signOut();

      return {
        ...defaultState,
        auth: false,
      };
    },
  },
  defaultState
);
