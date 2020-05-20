import { createSelector } from "reselect";

//slicing only cart state from whole state hidden,cart,user
const selectCart = (state) => state.cart; // so fetching only cart State inside selectCart

// we are normally here destructuring state from whole state to one state and from one state to the array inside

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //picked cartItems Array here to selectCartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
