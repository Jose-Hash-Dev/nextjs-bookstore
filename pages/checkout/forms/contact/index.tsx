import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SubmitButton from "../../button/index";
import { data } from "../lib/data";
import { Heading } from "./style";

const FormView = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    apartment: "",
    postcode: "",
    delivery: "",
  });
  const proceedText = "Proceed";

  return (
    <>
      <Heading>Personal Details</Heading>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "300px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="First Name"
          variant="outlined"
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="Last Name"
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
          label="Email"
          variant="outlined"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          // type="number"
          label="Phone"
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
          inputProps={{ maxlength: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+371</InputAdornment>
            ),
          }}
        />
        <Heading>Address Details</Heading>
        <FormControl required={true} style={{}} fullWidth>
          <InputLabel id="select-city">City</InputLabel>
          <Select
            labelId="city-label-id"
            id="city-id"
            label="City"
            size="small"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            value={formData.city}
          >
            {data.cities.map((city: any) => (
              <MenuItem key={city.id} value={city.name}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="Street"
          variant="outlined"
          type="text"
          onChange={(e) => setFormData({ ...formData, street: e.target.value })}
          value={formData.street}
        />
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="Apartment Number"
          variant="outlined"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, apartment: e.target.value })
          }
          value={formData.apartment}
        />
        <FormControl>
          <TextField
            size="small"
            required={true}
            id="outlined-required"
            label="Post Code"
            variant="outlined"
            type="text"
            aria-valuemax={3}
            onChange={(e) =>
              setFormData({ ...formData, postcode: e.target.value })
            }
            value={formData.postcode}
            inputProps={{ maxlength: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">LV-</InputAdornment>
              ),
            }}
          />
        </FormControl>

        <Heading>Delivery Details</Heading>
        <FormControl style={{}} fullWidth>
          <InputLabel id="select-delivery">Delivery</InputLabel>
          <Select
            labelId="delivery-label-id"
            id="delivery-id"
            label="Delivery"
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, delivery: e.target.value })
            }
            value={formData.delivery}
          >
            {data.shipments.map((method: any) => (
              <MenuItem key={method.id} value={method.name}>
                {method.name} - {method.price} € - {method.time} days
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <SubmitButton
        login={false}
        register={false}
        proceed={true}
        buttonName={proceedText}
      />
    </>
  );
};
export default FormView;
