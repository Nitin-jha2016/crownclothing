import { createStore, applyMiddleware } from "redux"; //middleware use before submitting to reducer from action
import logger from "redux-logger"; // this is middle ware for lodding an action done from component to reducer
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// const middlewares = [logger]; //you can add more middle ware here extending an array
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store); //persistant version of store

export default { store, persistor };
