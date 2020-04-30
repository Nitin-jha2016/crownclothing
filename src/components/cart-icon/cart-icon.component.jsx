import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ toggleCartHidden, itemcount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemcount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => {
      dispatch(toggleCartHidden());
    },
  };
};
const mapStateToProps = createStructuredSelector({
  itemcount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
