import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { LayoutContainer, HomePageContainer } from "./style";
import SideBarView from "../sidebar";

const LayoutView = ({ children }: any) => {
  return (
    <>
      <LayoutContainer>
        <CssBaseline />
        <SideBarView />
        <HomePageContainer>{children} </HomePageContainer>
      </LayoutContainer>
    </>
  );
};

export default LayoutView;
