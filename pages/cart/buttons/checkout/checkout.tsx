import React from "react";
import { Button } from "@mui/material";
import { CheckoutStyle } from "./checkoutStyle";
import Link from "next/link";

const Checkout = () => {
  return (
    <Link href={"/checkout/"}>
      <CheckoutStyle>
        <Button variant="contained">Checkout</Button>
      </CheckoutStyle>
    </Link>
  );
};

export default Checkout;
