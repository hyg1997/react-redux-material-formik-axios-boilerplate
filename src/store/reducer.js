import { combineReducers } from "redux";
import { authentication } from "./authentication/reducers";
import { user } from "./user/reducers";

export const rootReducer = combineReducers({ authentication, user });
