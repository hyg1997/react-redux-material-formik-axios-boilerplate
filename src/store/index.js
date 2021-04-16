import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import { rootSagas } from "./sagas";

const saga = createSagaMiddleware();

//Devtools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(rootReducer, enhancer);

saga.run(rootSagas);

export default store;
