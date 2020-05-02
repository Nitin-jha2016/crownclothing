import React from "react";
// import "./custom-button.styles.scss";
import { CustomerButtonContainer } from "./custom-button.styles";
// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
//   <button
//     className={`
//       ${inverted ? "inverted" : ""}
//       ${isGoogleSignIn ? "google-sign-in" : ""}  custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </button>
// );
const CustomButton = ({ children, ...props }) => (
  <CustomerButtonContainer {...props}>{children}</CustomerButtonContainer>
);

export default CustomButton;
