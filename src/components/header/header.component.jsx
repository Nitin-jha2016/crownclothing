import React from "react";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import { connect } from "react-redux"; // it is HOC which help to connect redux
// import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase-utils";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/" className="logo-container">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {/* If current user get object here then we show signout button and onclick it do authsignout */}
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {/* // we place this out side the options div */}
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = (state, ownProps) => {  lets destructure this now
// const mapStateToProps = (state) => {
//   return {
//     // currentUser: state.user.currentUser,
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state),
//   };
//  or do belo as well};
const mapStateToProps = createStructuredSelector({
  //it pass state itself
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
