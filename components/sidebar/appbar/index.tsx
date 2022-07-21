import React from "react";
import NavigationView from "../../navigation";
import { AppBarStyle } from "./style";

const AppBarView = () => {
  return (
    <div>
      <AppBarStyle
        position="fixed"
        sx={{
          width: `calc(100% - ${240}px)`,
          ml: `${240}px`,
        }}
      >
        <NavigationView />
      </AppBarStyle>
    </div>
  );
};

export default AppBarView;
