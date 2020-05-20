import { CartActionTypes } from "./cart.types";
const INITIAL_STATE = {
  hidden: true, // this hidden is for cart drop down
  cartItems: [], // this is to carry items inside the cart
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // so existing cart item and adding new payload or item
      };

    default:
      return state;
  }
};
