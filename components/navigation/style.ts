import styled from "styled-components";
import { Typography } from "@mui/material";

export const NavigationContainer = styled.div`
  height: 60px;
  //width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 10px;
  //box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;

export const LogoBackContainer = styled.div`
  justify-content: space-between;
  display: flex;
  justify-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkTextStyle = styled(Typography)`
  font-size: 16px;
  font-family: "Roboto Light", serif;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 2px;
`;

export const Image = styled.img`
  width: 100px;
  height: 50px;
`;

export const ProfileText = styled(Typography)`
  font-size: 16px;
  font-family: Verdana,serif;
  margin-right: 10px;
  
`;
