import React from "react";
import { Button } from "@mui/material";
import { BackToShoppingStyle } from "./style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const BackToShopping = () => {
  return (
    <Link href={"/products/"}>
      <BackToShoppingStyle>
        <Button startIcon={<ArrowBackIosIcon />} variant="outlined">Back to Shopping</Button>
      </BackToShoppingStyle>
    </Link>
  );
};

export default BackToShopping;
