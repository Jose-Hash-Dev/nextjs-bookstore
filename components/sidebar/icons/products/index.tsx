import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const ProductsIconView = () => {
  return (
    <>
      <Link href={`/products`} passHref>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LibraryBooksIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default ProductsIconView;
