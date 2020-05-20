import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import { connect } from "react-redux"; // it is HOC which help to connect redux
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase-utils";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {/* If current user get object here then we show signout button and onclick it do authsignout */}
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
      {/* // we place this out side the options div */}
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {  lets destructure this now
const mapStateToProps = (
  { user: { currentUser }, cart: { hidden } },
  ownProps
) => {
  return {
    // currentUser: state.user.currentUser,
    currentUser,
    hidden,
  };
};
export default connect(mapStateToProps)(Header);
