import React from "react";
import { NotificationStyle } from "./style";
import { Badge, IconButton } from "@mui/material";

function NotificationIcon() {
  return (
    <>
      <IconButton>
        <Badge badgeContent={4} color="error">
          <NotificationStyle color="primary"/>
        </Badge>
      </IconButton>
    </>
  );
}
export default NotificationIcon;
