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
import DialogButton from "./dialogButton";
import { DialogViewTypes } from "../../../types/types";

const DialogView = ({
  authors,
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
              <CreateProductView authorData={authors} />
            ) : (
              <CreateUserView roleData={roles} />
            )}
          </DialogContentText>
        </ContentStyle>
        <ActionStyle
          sx={{
            "& > :not(style)": { m: 1 },
          }}
        >
          <DialogButton buttonText="Submit" onClickFunction={handleClose} />
          <DialogButton buttonText="Cancel" onClickFunction={handleClose} />
        </ActionStyle>
      </Dialog>
    </Box>
  );
};

export default DialogView;
