import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import DropDown from "./Buttons/DropDown/DropDown";
import ShoppingCartButton from "./Buttons/ShoppingCart/ShoppingCart";
import NavigateBack from "./Buttons/NavigateBack/NavigateBack";
import logo from "/mock/Images/logo.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardContent>
          <Typography>
            <Image src={logo} width={70} height={30} alt="logo" />
          </Typography>
          <NavigateBack />
          <ShoppingCartButton />
          <DropDown />
        </CardContent>
      </Card>
    </div>
  );
};

export default Navigation;
