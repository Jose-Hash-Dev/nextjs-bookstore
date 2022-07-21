import React, { useState } from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Chip,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { DialogViewTypes } from "../../../types/types";
import { SelectChangeEvent } from "@mui/material/Select";

const CreateProductView = (props: {
  authorData: DialogViewTypes["authors"];
}) => {
  const [listData, setListData] = React.useState<string[]>([]);

  const handleListChange = (event: SelectChangeEvent<typeof listData>) => {
    const {
      target: { value },
    } = event;
    setListData(typeof value === "string" ? value.split(",") : value);
  };

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    stock: "",
    // authors: [""],
    // categories: [""],
    // languages: [""],
    pages: 0,
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
          label="Title"
          variant="outlined"
          type="text"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
        <TextField
          rows={6}
          required={true}
          id="outlined-required"
          label="Description"
          variant="outlined"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
        />
        <TextField
          size="small"
          minRows={4}
          required={true}
          id="outlined-required"
          label="Price"
          variant="outlined"
          type="number"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          value={formData.price}
        />
        <TextField
          size="small"
          required={true}
          id="outlined-required"
          label="Stock"
          type="number"
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          value={formData.stock}
          inputProps={{ maxlength: 8 }}
        />
        <FormControl required={true} fullWidth>
          <InputLabel id="select-author">Author</InputLabel>
          <Select
            labelId="author-label-id"
            id="author-id"
            label="Authors"
            multiple
            value={listData}
            renderValue={(selected) => selected.join(", ")}
            onChange={handleListChange}
          >
            {props.authorData.map((author) => (
              <MenuItem key={author.id} value={author.name}>
                <Checkbox checked={listData.indexOf(author.name) > -1} />
                <ListItemText primary={author.name} />
              </MenuItem>
            ))}
          </Select>
          <Box>
            {listData.map((listItem) => (
              <Chip sx={{ marginTop: 0.5 }} label={listItem} />
            ))}
          </Box>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="select-author">Category</InputLabel>
          <Select
            labelId="category-label-id"
            id="category-id"
            label="Category"
            type="text"
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, categories: e.target.value })
            }
            value={formData.categories}
          >
            {/* {categoryData.map((category: any) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="select-author">Language</InputLabel>
          <Select
            labelId="language-label-id"
            id="language-id"
            label="Language"
            type="text"
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, languages: e.target.value })
            }
            value={formData.languages}
          >
            {/* {languageData.map((language: any) => (
              <MenuItem key={language.id} value={language.name}>
                {language.name}
              </MenuItem>
            ))} */}
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
export default CreateProductView;
