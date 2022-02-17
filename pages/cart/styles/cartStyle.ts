import styled from "styled-components";
import { TableRow, Typography, Card, CardActions } from "@mui/material";

export const CardContainer = styled(Card)`
  margin-top: 35px;
  justify-content: space-between;
  min-width: 1000px;
`;

export const CardActionsContainer = styled(CardActions)`
  justify-content: space-between;
`;
export const SubTotalContainer = styled(CardActions)`
  display: block;
`;
export const TextStyle = styled(Typography)`
  font-family: Verdana, serif;
  font-size: 16px;
`;
export const DetailTextStyle = styled(Typography)`
  font-family: Verdana, serif;
  font-size: 11px;
`;

export const Image = styled.img`
  height: 60px;
  width: 50px;
`;

export const StyledTableRow = styled(TableRow)``;

export const HeadingText = styled(Typography)`
  font-size: 25px;
  font-family: Verdana, serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const CostText = styled(Typography)`
  font-size: 20px;
  font-family: Verdana, serif;
`;
export const TitleLinkStyle = styled(Typography)`
  font-family: Verdana, serif;
  font-size: 16px;
  cursor: pointer;
`;
