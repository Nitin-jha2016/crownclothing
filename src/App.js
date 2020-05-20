import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/signin-sign-up.component";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase-utils";

import "./App.css";

class App extends Component {
  // I removed this as i am getting now as i will set currentUser state via redux function now
  // constructor() {
  //   super();
  //   this.state = { currentUser: null };
  // }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props; // my function name
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("User exist ?? ", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // it check if user is signed in or singout (null)
        console.log(" reference at firestore Now ", userRef);
        userRef.onSnapshot((snapShot) => {
          // it will take snapshot of that useref data and tell if it exist is true or false and snapshot.date() wont give u id only
          // give u data
          console.log("data is ", snapShot.id, "  ", snapShot.data());
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
        // console.log(this.state.currentUser);
      }
      // this.setState({ currentUser: userAuth }); //it means it is null
      setCurrentUser(userAuth);
    });
  }
  //if window close then close session as well
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* Now inside header for sign out and sign in i have to pass current user status pass null or object */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// const mapStateToProps = ({ user }, ownProps) => {
//   return {
//     currentUser: user.currentUser,
//   };
// };
const mapStateToProps = createStructuredSelector({
  //it pass state itself
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
