export const addItemToCart = (cartItems, cartItemToAdd) => {
  //checking if cart item exist
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //if exist then then id match and it will incresae quantity to +1 with the current item else if not exist then same cart item return
  if (existingCartItem) {
    console.log(" existingCartItem ", existingCartItem);
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; //if noe exit then existint cartItems + new cart item to add with one more field qunatity to 1
};
