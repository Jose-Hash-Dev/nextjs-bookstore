import React from "react";
import { Button } from "@mui/material";
import { DeleteButtonStyle } from "./style";
import DeleteIcon from "../../../icons/remove";

const DeleteButton = () => {
  return (
    <DeleteButtonStyle>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </DeleteButtonStyle>
  );
};

export default DeleteButton;
