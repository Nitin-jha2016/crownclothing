import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
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
        // cartItems: [...state.cartItems, action.payload], // so existing cart item and adding new payload or item
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
