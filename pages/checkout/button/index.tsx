import React from "react";
import { ButtonStyle } from "./style";

type ButtonProps = {
  buttonName?: string;
  login: boolean;
  proceed: boolean;
  register: boolean;
};

const Button = ({ buttonName, proceed, register, login }: ButtonProps) => {
  return (
    <ButtonStyle
      login={login}
      register={register}
      proceed={proceed}
      variant="outlined"
      name={buttonName}
    >
      {buttonName}
    </ButtonStyle>
  );
};

export default Button;
