// root reducer who combine all states together

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { shopReducer } from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //only cart we want to store
};

//assigning combine reducer as a const
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });
