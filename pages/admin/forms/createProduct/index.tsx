import React, { useState } from "react";

import {
  Box,
  FormControl,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Chip,
  ListItemText,
} from "@mui/material";
import { DialogViewTypes } from "../../../types/types";
import axios from "axios";

interface FormDataType {
  image: string;
  title: string;
  description: string;
  price: string;
  stock: string;
  pages: string;
  authorIds: number[];
  languageIds: number[];
  categoryIds: number[];
}

const CreateProductView = (props: {
  authorData: DialogViewTypes["authors"];
  languageData: DialogViewTypes["languages"];
  categoryData: DialogViewTypes["categories"];
}) => {
  const [authorNameData, setAuthorNameData] = useState<string[]>([]);
  const [languageNameData, setLanguageNameData] = useState<string[]>([]);
  const [categoryNameData, setCategoryNameData] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    image: "",
    title: "",
    description: "",
    price: "",
    stock: "",
    pages: "",
    authorIds: [],
    languageIds: [],
    categoryIds: [],
  });

  const updateList = (listToCheck: number[], dataId: number) => {
    listToCheck.includes(dataId)
      ? listToCheck.splice(listToCheck.indexOf(dataId), 1)
      : listToCheck.push(dataId);
  };

  const handleNameChange = (
    event: { target: { value: string[] } },
    actionInput: any
  ) => {
    actionInput(event.target.value);
  };

  const submitForm = async () => {
    try {
      await axios.post(`http://localhost:3000/api/products`, formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={submitForm}
      sx={{
        "& > :not(style)": { m: 1, width: "420px" },
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
        multiline
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
          value={authorNameData}
          renderValue={(selected) => selected.join(", ")}
          onChange={(e) => handleNameChange(e, setAuthorNameData)}
        >
          {props.authorData.map((author) => (
            <MenuItem key={author.id} value={author.name}>
              <ListItemText
                onClick={() => updateList(formData.authorIds, author.id)}
                primary={author.name}
              />
            </MenuItem>
          ))}
        </Select>
        <Box>
          {authorNameData.map((author: string) => (
            <Chip sx={{ marginTop: 0.5 }} label={author} />
          ))}
        </Box>
      </FormControl>
      <FormControl required={true} fullWidth>
        <InputLabel id="select-author">Language</InputLabel>
        <Select
          labelId="language-label-id"
          id="language-id"
          label="Languages"
          multiple
          value={languageNameData}
          renderValue={(selected) => selected.join(", ")}
          onChange={(e) => handleNameChange(e, setLanguageNameData)}
        >
          {props.languageData.map((language) => (
            <MenuItem key={language.id} value={language.name}>
              <ListItemText
                onClick={() => updateList(formData.languageIds, language.id)}
                primary={language.name}
              />
            </MenuItem>
          ))}
        </Select>
        <Box>
          {languageNameData.map((language: string) => (
            <Chip sx={{ marginTop: 0.5 }} label={language} />
          ))}
        </Box>
      </FormControl>
      <FormControl required={true} fullWidth>
        <InputLabel id="select-author">Categories</InputLabel>
        <Select
          labelId="category-label-id"
          id="category-id"
          label="Categories"
          multiple
          value={categoryNameData}
          renderValue={(selected) => selected.join(", ")}
          onChange={(e) => handleNameChange(e, setCategoryNameData)}
        >
          {props.categoryData.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              <ListItemText
                onClick={() => updateList(formData.categoryIds, category.id)}
                primary={category.name}
              />
            </MenuItem>
          ))}
        </Select>
        <Box>
          {categoryNameData.map((category: string) => (
            <Chip sx={{ marginTop: 0.5 }} label={category} />
          ))}
        </Box>
      </FormControl>

      <Button type="submit">Submit</Button>
      <Button type="reset">Cancel</Button>
    </Box>
  );
};
export default CreateProductView;
