import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/signin-sign-up.component";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase-utils";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("User exist ?? ", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // it check if user is signed in or singout (null)
        console.log(" reference at firestore Now ", userRef);
        userRef.onSnapshot((snapShot) => {
          // it will take snapshot of that useref data and tell if it exist is true or false and snapshot.date() wont give u id only
          // give u data
          console.log("data is ", snapShot.id, "  ", snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        // console.log(this.state.currentUser);
      }
      this.setState({ currentUser: userAuth }); //it means it is null
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
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
