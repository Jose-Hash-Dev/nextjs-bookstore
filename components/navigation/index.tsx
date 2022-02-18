import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import {
  NavigationContainer,
  LogoBackContainer,
  ProfileText,
  IconContainer,
} from "./style";
import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import NotificationIcon from "./icons/notification";
import CartIcon from "./icons/cart";
import ProfileIcon from "./icons/profile";
import History from "./buttons/history";

const NavigationView = () => {
  return (
    <NavigationContainer>
      <LogoBackContainer>
        <History />
        <Link href={"/products"}>
          <Typography sx={{ fontSize: 25 }}>BookStore</Typography>
        </Link>
      </LogoBackContainer>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <IconContainer>
        <ProfileIcon />
        <ProfileText>Register/Login</ProfileText>
        <Divider orientation="vertical" variant="middle" flexItem />
        <NotificationIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <CartIcon />
      </IconContainer>
    </NavigationContainer>
  );
};

export default NavigationView;
