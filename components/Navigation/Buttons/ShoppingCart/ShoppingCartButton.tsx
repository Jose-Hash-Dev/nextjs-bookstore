import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartStyle } from "./ShoppingCartStyle";
import Link from "next/link";

const ShoppingCartButton = () => {
  return (
    <ShoppingCartStyle>
      <Link href={"/cart"}>
        <ShoppingCartIcon />
      </Link>
    </ShoppingCartStyle>
  );
}
export default ShoppingCartButton;
