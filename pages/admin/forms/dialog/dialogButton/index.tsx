import React from "react";
import { Button } from "@mui/material";

type ButtonStyle = {
  buttonText: string;
  onClickFunction?: Function;
};

const DialogButton = ({ buttonText, onClickFunction }: ButtonStyle) => {
  return (
    <>
      <Button onClick={onClickFunction}>{buttonText}</Button>
    </>
  );
};

export default DialogButton;
