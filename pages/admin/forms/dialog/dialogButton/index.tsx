import React from "react";
import { Button } from "@mui/material";

type ButtonType = {
  buttonText: string;
  onClickFunction?: () => void;
  buttonType: string;
};

const DialogButton = ({
  buttonText,
  onClickFunction,
  buttonType,
}: ButtonType) => {
  return (
    <>
      <Button onClick={onClickFunction} type={buttonType}>
        {buttonText}
      </Button>
    </>
  );
};

export default DialogButton;
