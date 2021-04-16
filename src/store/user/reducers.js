import { handleActions } from "redux-actions";
import { getUser, getUserAsync, deleteUser } from "./actions";

const defaultState = {
  loading: false,
  response: {},
};

export const user = handleActions(
  {
    [getUserAsync]: (state, action) => ({
      ...state,
      loading: false,
      response: action?.payload,
    }),
    [getUser]: (state) => ({
      ...state,
      loading: true,
    }),
    [deleteUser]: () => defaultState,
  },
  defaultState
);
