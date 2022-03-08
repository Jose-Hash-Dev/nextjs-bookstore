import React from "react";
import { Box, Tabs, Tab, Typography, Divider } from "@mui/material";
import Link from "next/link";
import Button from "./button";
import {
  BoxContainer,
  ForgotPassword,
  FormContainer,
  FormSummaryContainer,
  LoginContactContainer,
  LogRegContainer,
  OrderHeading,
  RegInfoText,
  RegisterContainer,
  SummaryContainer,
} from "./style";
import LoginFormView from "./forms/login";
import { Heading } from "./style";
import FormView from "./forms/contact";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CheckoutView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const registerText = "registration";
  const loginText = "login";

  return (
    <BoxContainer>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Register/Login" {...a11yProps(0)} />
          <Tab label="Contact" {...a11yProps(1)} />
          <Tab label="Summary" {...a11yProps(2)} />
          <Tab label="Payment" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <FormSummaryContainer>
        <FormContainer>
          <TabPanel value={value} index={0}>
            <LogRegContainer>
              <LoginContactContainer>
                <Heading>Login</Heading>
                <LoginFormView />
                <Link href={``} passHref>
                  <ForgotPassword>Forgot Password</ForgotPassword>
                </Link>
                <Button
                  login={true}
                  register={false}
                  proceed={false}
                  buttonName={loginText}
                />
              </LoginContactContainer>
              <RegisterContainer>
                <Heading>Not Registered?</Heading>
                <Divider />
                <RegInfoText>
                  Create a new account now for a fast and secure shopping!
                </RegInfoText>
                <Button
                  login={false}
                  register={true}
                  proceed={false}
                  buttonName={registerText}
                />
              </RegisterContainer>
            </LogRegContainer>
          </TabPanel>
          <TabPanel index={1} value={value}>
            <LoginContactContainer>
              <FormView />
            </LoginContactContainer>
          </TabPanel>
        </FormContainer>
        <SummaryContainer>
          <OrderHeading>Order Details</OrderHeading>
          <Divider />
        </SummaryContainer>
      </FormSummaryContainer>
    </BoxContainer>
  );
}
