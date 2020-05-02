import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hiddenValue }) => (
  <HeaderContainer>
    {/* {currentUser ? <div>value true</div> : <div> false value</div>} */}
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">Contact</OptionLink>
      {currentUser ? (
        // <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hiddenValue ? null : <CartDropDown />}
  </HeaderContainer>
);

// const mapStateToProps = (state) => { lets do destructuring here
// const mapStateToProps = ({ user: { currentUser }, cart: { hiddenValue } }) => {
const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser,
  currentUser: selectCurrentUser,
  hiddenValue: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
