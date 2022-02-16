import React, { useContext } from "react";
import { ShoppingCartStyle } from "./ShoppingCartStyle";
import { Store } from "../../../../lib/Store";
import { Badge } from "@mui/material";

function ShoppingCart() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Badge badgeContent={cart.cartItems.length} color="secondary">
        <ShoppingCartStyle color="primary" />
      </Badge>
    </>

  );
}
export default ShoppingCart;
