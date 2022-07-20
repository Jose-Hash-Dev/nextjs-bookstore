import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";

const CategoriesIconView = () => {
  return (
    <>
      <Link href={``} passHref>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CategoryRoundedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default CategoriesIconView;
