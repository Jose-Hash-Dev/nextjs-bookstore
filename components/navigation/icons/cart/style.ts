import styled from "styled-components";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, MenuItem } from "@mui/material";

export const CartIconStyle = styled(LocalMallIcon)`
  font-size: 22px;
`;
export const BoxContainer = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
  
`;
export const MenuItemContainer = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  //justify-content: space-between;
`;
