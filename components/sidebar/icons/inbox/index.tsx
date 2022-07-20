import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";

const InboxIconView = () => {
  return (
    <>
      <Link href={``} passHref>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contact Store" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default InboxIconView;
