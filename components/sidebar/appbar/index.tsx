import React from "react";
import { AppBar } from "@mui/material";
import NavigationView from "../../navigation";

const AppBarView = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${240}px)`,
          ml: `${240}px`,
          color: "green",
        }}
      >
        <NavigationView />
      </AppBar>
    </div>
  );
};

export default AppBarView;
