import {  createStore } from "redux";
import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
});

const store = createStore(rootReducer);
export default store;
