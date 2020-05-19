// root reducer who combine all states together

import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
