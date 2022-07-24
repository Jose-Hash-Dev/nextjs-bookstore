import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { RoleType } from "../../../types/types";

const CreateUserView = (props: { roleData: RoleType[] }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    surname: "",
    email: "",
    role: "",
  });

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "250px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="Image"
          variant="outlined"
          type="text"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          value={formData.image}
        />
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="name"
          variant="outlined"
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <TextField
          required={true}
          id="outlined-required"
          label="surname"
          variant="outlined"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
          value={formData.surname}
        />
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="email"
          variant="outlined"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />

        <FormControl required={true} fullWidth>
          <InputLabel id="select-author">Role</InputLabel>
          <Select
            labelId="role-label-id"
            id="role-id"
            label="role"
            size="small"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            value={formData.role}
          >
            {props.roleData.map((role) => (
              <MenuItem key={role.id} value={role.name}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {/* <SubmitButton
        login={false}
        register={false}
        proceed={true}
        buttonName={proceedText}
      /> */}
    </>
  );
};
export default CreateUserView;
