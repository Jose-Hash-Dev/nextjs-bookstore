import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIconView = () => {
  return (
    <>
      <Link href={`/cart`} passHref>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Shopping Cart" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default CartIconView;
