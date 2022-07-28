import React from "react";
import { EditButtonStyle, ChipStyle } from "./style";

type IconProps = {
  onClickFunction?: Function;
  buttonName: string;
  color?: string;
};

const EditIconView = ({ onClickFunction, buttonName, color }: IconProps) => {
  return (
    <>
      <ChipStyle
        onClick={onClickFunction}
        clickable
        icon={<EditButtonStyle color="primary" />}
        label={buttonName}
        color={color}
      />
    </>
  );
};

export default EditIconView;
