import React, { useContext, useState } from "react";
import {
  AvatarTitle,
  BoxContainer,
  CartIconStyle,
  MenuItemContainer,
} from "./style";
import { Store } from "../../../../lib/Store";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import Link from "next/link";

function CartIcon() {
  const { state } = useContext(Store);
  const { cart } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton>
        <Badge badgeContent={cart.cartItems.length} color="error">
          <CartIconStyle onClick={handleClick} color="primary" />
        </Badge>
      </IconButton>
      <BoxContainer>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 5,
                height: 10,
                color: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {cart.cartItems.map((item: any) => (
            <MenuItemContainer key={item._id}>
              <AvatarTitle>
                <Avatar src={item.image} />
                <Link href={`/products/${item._id}`} passHref>
                  <Typography>{item.title}</Typography>
                </Link>
              </AvatarTitle>
              <Typography>x{item.quantity}</Typography>
            </MenuItemContainer>
          ))}
          <Divider />
          {cart.cartItems.length > 0 ? (
            <Link href={"/cart"}>
              <Button sx={{ fontSize: 11, marginLeft: 1.5 }}>Go to Cart</Button>
            </Link>
          ) : (
            <Typography
              sx={{
                marginLeft: 1,
                fontSize: 12.5,
                marginBottom: 1,
                marginTop: 1,
                marginRight: 2.5,
              }}
            >
              Cart is Empty
            </Typography>
          )}
        </Menu>
      </BoxContainer>
    </>
  );
}
export default CartIcon;
