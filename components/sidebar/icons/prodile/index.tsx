import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { Avatar } from "@mui/material";

const ProfileIconView = () => {
  return (
    <>
      <Link href={`/admin`} passHref>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar alt="YH" src="/static/images/avatar/1.jpg" />
            </ListItemIcon>
            <ListItemText primary="Yusif Hashimov" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default ProfileIconView;
