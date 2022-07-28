import React from "react";
import { DeleteButtonStyle, ChipStyle } from "./style";

type IconType = {
  onClickFunction?: Function;
  buttonText: string;
};

const DeleteIconView = ({ onClickFunction, buttonText }: IconType) => {
  return (
    <>
      <ChipStyle
        onClick={onClickFunction}
        color="primary"
        clickable
        icon={<DeleteButtonStyle color="primary" />}
        label={buttonText}
      />
    </>
  );
};

export default DeleteIconView;
