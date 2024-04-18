import movieReducer from "../reducers/movieReducers";
import { createStore } from "redux";

const store = createStore(movieReducer);
export default store;
