import React from "react";
import { Button } from "@mui/material";
import { WishListButtonStyle } from "./style";
import WishListIcon from "../../../icons/wishlist";

const WishListButton = () => {
  return (
    <WishListButtonStyle>
      <Button variant="outlined" startIcon={<WishListIcon />}>
        Wishlist
      </Button>
    </WishListButtonStyle>
  );
};

export default WishListButton;
