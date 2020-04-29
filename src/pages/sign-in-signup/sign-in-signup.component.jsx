import React from "react";
import "./sign-in-signup.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
const SignInSignUp = () => (
  <div className="sign-in-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
