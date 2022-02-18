import React from "react";
import { ProfileIconStyle } from "./style";
import { Badge, IconButton } from "@mui/material";

function ProfileIcon() {
  return (
    <>
      <IconButton>
        <Badge badgeContent={0} color="error">
          <ProfileIconStyle color="primary"/>
        </Badge>
      </IconButton>
    </>
  );
}
export default ProfileIcon;
