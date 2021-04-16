import { createAction } from "redux-actions";

export const getUser = createAction("GET_USER");
export const getUserAsync = createAction("GET_USER_ASYNC");
export const deleteUser = createAction("DELETE_USER");
