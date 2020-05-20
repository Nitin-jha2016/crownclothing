import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon-styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon " onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }, ownProps) => {
  console.log("I am being trigerred");
  return {
    //here we need total of quantity to show a count in shopping icon cart
    itemCount: cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
