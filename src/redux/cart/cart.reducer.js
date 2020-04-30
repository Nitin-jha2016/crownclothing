import CartActionTypes from "./cart.types";
import "./cart.utils";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  hiddenValue: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddenValue: !state.hiddenValue,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
export default cartReducer;
