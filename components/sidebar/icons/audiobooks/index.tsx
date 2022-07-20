import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import HeadsetIcon from "@mui/icons-material/Headset";

const AudioBookView = () => {
  return (
    <>
      <Link href={``} passHref>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HeadsetIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Audio Books" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default AudioBookView;
