import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ProductsIconView from "./products";
import CategoriesIconView from "./categories";
import AudioBookView from "./audiobooks";
import CartIconView from "./cart";
import ProfileIconView from "./prodile";
import InboxIconView from "./inbox";

const IconListView = () => {
  return (
    <>
      <ProfileIconView />
      <Divider />
      <List>
        <ProductsIconView />
        <CategoriesIconView />
        <AudioBookView />
        <CartIconView />
      </List>
      <Divider />
      <List>
        <InboxIconView />
      </List>
    </>
  );
};

export default IconListView;
