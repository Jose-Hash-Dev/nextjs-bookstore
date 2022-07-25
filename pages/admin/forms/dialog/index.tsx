import React, { useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateProductView from "../createProduct";
import CreateUserView from "../createUser";

import { ActionStyle, ContentStyle } from "./style";
import { DialogViewTypes } from "../../../types/types";

const DialogView = ({
  authors,
  languages,
  categories,
  roles,
  dialogTitle,
  isProductRendered,
}: DialogViewTypes) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        startIcon={<AddIcon />}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Create
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <ContentStyle>
          <DialogContentText>
            {isProductRendered ? (
              <CreateProductView
                authorData={authors}
                languageData={languages}
                categoryData={categories}
              />
            ) : (
              <CreateUserView roleData={roles} />
            )}
          </DialogContentText>
        </ContentStyle>
        <ActionStyle
          sx={{
            "& > :not(style)": { m: 1 },
          }}
        ></ActionStyle>
      </Dialog>
    </Box>
  );
};

export default DialogView;
