import React from "react";
import { Box } from "@mui/material";
import { TextFieldStyle } from "./style";

const LoginFormView = () => {
  return(
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "300px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextFieldStyle
        size="small"
        required={true}
        id="outlined-required"
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextFieldStyle
        size="small"
        required={true}
        id="outlined-required"
        label="Password"
        variant="outlined"
        type="password"
      />
    </Box>
  )
}

export default LoginFormView;
