import styled from "styled-components";
import { Box, Card, Typography } from "@mui/material";

export const BoxContainer = styled(Card)`
  padding: 5px;
`;
export const FormSummaryContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
export const FormContainer = styled.div`
  width: 700px;
`;
export const SummaryContainer = styled.div`
  width: 270px;
  margin-top: 24px;
  height: 190px;
  margin-right: 20px;
  padding: 10px;
  min-height: 190px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;
export const LogRegContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LoginContactContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  padding: 10px;
`;
export const RegisterContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  width: 500px;
  margin-left: 25px;
  padding: 10px;
`;

export const Heading = styled(Typography)`
  font-family: Verdana, serif;
  font-size: 18px;
  margin-left: 8px;
`;
export const RegInfoText = styled(Typography)`
  margin-left: 9px;
  margin-top: 9px;
  font-family: Verdana,serif;
  font-size: 13px;
`;
export const ForgotPassword = styled(Typography)`
  margin-left: 15px;
  margin-top: 5px;
  font-size: 11px;
  font-family: Verdana,serif;
  text-decoration: underline;
`;
export const OrderHeading = styled(Typography)`
  font-family: Verdana, serif;
  font-size: 18px;
`;
