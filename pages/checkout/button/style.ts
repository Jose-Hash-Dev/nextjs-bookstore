import styled from "styled-components";
import { Button } from "@mui/material";

type Props = {
  login: boolean;
  register: boolean;
  proceed: boolean;
};

export const ButtonStyle = styled(Button)<Props>`
  width: 120px;
  height: 30px;
  font-size: 12px;
  margin-left: 9px;
  margin-top: ${(props) =>
    props.login ? "20px" : props.register ? "90px" : "20px"};
  background-color: ${(props) => (props.proceed ? "#1976d1" : "")};
  color: ${(props) => (props.proceed ? "white" : "")};
`;
