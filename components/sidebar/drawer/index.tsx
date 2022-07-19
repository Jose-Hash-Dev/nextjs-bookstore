import React from "react";
import { Drawer, Toolbar, Divider } from "@mui/material";
import IconListView from "../icons";

const DrawerView = () => {
  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <IconListView />
      </Drawer>
    </>
  );
};

export default DrawerView;
