import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_cdN8MzeiQU83bJ6KwGdQj4KG00UJXszSwB";
  const onToken = (token) => {
    console.log(token);
    alert("payment successfull");
  };
  return (
    <StripeCheckOut
      label="Pay Now"
      name="Nitin Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckOutButton;
