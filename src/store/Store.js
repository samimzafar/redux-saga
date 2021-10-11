import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/rootSage";
import UserStore from "./UserStore";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  user: UserStore,
});
const Store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
export default Store;

// then run the saga
sagaMiddleware.run(rootSaga);
