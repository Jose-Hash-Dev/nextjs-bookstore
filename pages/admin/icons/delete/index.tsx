import React from "react";
import { DeleteButtonStyle, ChipStyle } from "./style";

type IconType = {
  onClickFunction?: Function;
};

const DeleteIconView = ({ onClickFunction }: IconType) => {
  return (
    <>
      <ChipStyle
        onClick={onClickFunction}
        color="primary"
        clickable
        icon={<DeleteButtonStyle color="primary" />}
        label="Delete"
      />
      ;
    </>
  );
};

export default DeleteIconView;
