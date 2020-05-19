import { createStore, applyMiddleware } from "redux"; //middleware use before submitting to reducer from action
import logger from "redux-logger"; // this is middle ware for lodding an action done from component to reducer
import rootReducer from "./root-reducer";

const middlewares = [logger]; //you can add more middle ware here extending an array
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
