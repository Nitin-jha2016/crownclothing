import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hiddenValue }) => (
  <div className="header">
    {/* {currentUser ? <div>value true</div> : <div> false value</div>} */}
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hiddenValue ? null : <CartDropDown />}
  </div>
);

// const mapStateToProps = (state) => { lets do destructuring here
const mapStateToProps = ({ user: { currentUser }, cart: { hiddenValue } }) => {
  return {
    // currentUser: state.user.currentUser,
    currentUser,
    hiddenValue,
  };
};

export default connect(mapStateToProps)(Header);
