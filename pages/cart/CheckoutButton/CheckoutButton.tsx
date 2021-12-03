import React from "react";
import { Button } from "@mui/material";
import { CheckoutButtonStyle } from "./CheckoutButtonStyle";

const CheckoutButton = () => {
  return (
    <CheckoutButtonStyle>
      <Button variant="contained">Checkout</Button>
    </CheckoutButtonStyle>
  );
};

export default CheckoutButton;
