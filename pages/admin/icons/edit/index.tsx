import React from "react";
import { EditButtonStyle, ChipStyle } from "./style";

const EditIconView = () => {
  return (
    <>
      <ChipStyle
        color="primary"
        clickable
        icon={<EditButtonStyle color="primary" />}
        label="Edit"
      />
      ;
    </>
  );
};

export default EditIconView;
