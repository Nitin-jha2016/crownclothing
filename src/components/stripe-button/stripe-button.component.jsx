import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_cdN8MzeiQU83bJ6KwGdQj4KG00UJXszSwB";
  const onToken = (token) => {
    console.log(token);
    alert("Payment succesffull");
  };
  return (
    <StripeCheckout
      label="Pay NOw"
      name="Nitin clothing service"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/cUz.svg"
      description={`Your TOtal price value $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckout;
