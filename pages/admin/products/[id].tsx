import React, { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import {
  TableRow,
  TableCell,
  FormControl,
  Select,
  MenuItem,
  ListItemText,
  InputLabel,
  ListSubheader,
  Checkbox,
  Button,
} from "@mui/material";
import { BookType } from "../../types/types";
import { TextFieldInput } from "./style";
import DeleteIconView from "../icons/delete";
import EditIconView from "../icons/edit";
import { FormDataType } from "../forms/types";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);

  return {
    props: {
      book: res.data,
    },
  };
};

const handleDelete = async (id: Number) => {
  try {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
  } catch (err) {
    window.alert("Can not delete");
  }
  return window.alert("Product was Deleted"), window.location.reload();
};

const updateList = (listToCheck: number[], dataId: number) => {
  listToCheck.includes(dataId)
    ? listToCheck.splice(listToCheck.indexOf(dataId), 1)
    : listToCheck.push(dataId);
};

const AdminProductView = (props: { book: BookType }) => {
  const handleSubmit = async () => {
    const {
      title,
      description,
      price,
      stock,
      pages,
      authorIds,
      categoryIds,
      languageIds,
    } = formData;

    try {
      const updateData = {
        title,
        description,
        price,
        stock,
        pages,
        authorIds,
        categoryIds,
        languageIds,
      };
      await axios.put(
        `http://localhost:3000/api/products/${props.book.id}`,
        updateData
      );
    } catch (err) {
      window.alert("Can not update");
    }
    return window.location.reload();
  };

  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState(false);
  const [authorNameData, setAuthorNameData] = useState<string[]>([]);
  const [languageNameData, setLanguageNameData] = useState<string[]>([]);
  const [categoryNameData, setCategoryNameData] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormDataType>({
    image: props.book.image,
    title: props.book.title,
    description: props.book.description,
    price: props.book.price,
    stock: props.book.stock,
    pages: props.book.pages,
    authorIds: [2, 3],
    languageIds: [2, 3],
    categoryIds: [2, 3],
  });

  const handleNameChange = (
    event: { target: { value: string[] } },
    actionInput: any
  ) => {
    actionInput(event.target.value);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <TableRow
        key={props.book.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <Checkbox
            size="small"
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
        </TableCell>

        <TableCell sx={{ width: 20 }} component="th" scope="row">
          {edit === true ? (
            <form onSubmit={handleSubmit}>
              <TextFieldInput
                size="small"
                required={true}
                id="1"
                label="Title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </form>
          ) : (
            props.book.title
          )}
        </TableCell>
        <TableCell align="left">Click to View/Edit</TableCell>
        <TableCell align="left">
          <FormControl
            size="small"
            sx={{ width: "125px" }}
            required={true}
            fullWidth
          >
            <InputLabel id="select-author">Category</InputLabel>
            <Select
              labelId="category-label-id"
              id="category-id"
              label="Categories"
              multiple
              value={categoryNameData}
              renderValue={(selected) => selected.join(", ")}
              onChange={(e) => handleNameChange(e, setCategoryNameData)}
            >
              <ListSubheader>Selected</ListSubheader>
              {props.book.categories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  <ListItemText
                    onClick={() =>
                      updateList(formData.categoryIds, category.id)
                    }
                    primary={category.name}
                  />
                </MenuItem>
              ))}
              <ListSubheader>Add New</ListSubheader>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="left">
          <FormControl
            size="small"
            sx={{ width: "125px" }}
            required={true}
            fullWidth
          >
            <InputLabel id="select-language">Language</InputLabel>
            <Select
              labelId="language-label-id"
              id="language-id"
              label="Languages"
              multiple
              value={languageNameData}
              renderValue={(selected) => selected.join(", ")}
              onChange={(e) => handleNameChange(e, setLanguageNameData)}
            >
              <ListSubheader>Selected</ListSubheader>
              {props.book.languages.map((language) => (
                <MenuItem key={language.id} value={language.name}>
                  <ListItemText
                    onClick={() =>
                      updateList(formData.languageIds, language.id)
                    }
                    primary={language.name}
                  />
                </MenuItem>
              ))}
              <ListSubheader>Add New</ListSubheader>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="left">
          <FormControl
            size="small"
            sx={{ width: "125px" }}
            required={true}
            fullWidth
          >
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
              <ListSubheader>Selected</ListSubheader>
              {props.book.authors.map((author) => (
                <MenuItem key={author.id} value={author.name}>
                  <ListItemText
                    onClick={() => updateList(formData.authorIds, author.id)}
                    primary={author.name}
                  />
                </MenuItem>
              ))}
              <ListSubheader>Add New</ListSubheader>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="left">
          {edit === true ? (
            <form onSubmit={handleSubmit}>
              <TextFieldInput
                size="small"
                required={true}
                id="4"
                label="Stock"
                type="number"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            </form>
          ) : (
            props.book.stock
          )}
        </TableCell>
        <TableCell align="left">
          {edit === true ? (
            <form onSubmit={handleSubmit}>
              <TextFieldInput
                size="small"
                required={true}
                id="4"
                label="Price"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </form>
          ) : (
            props.book.price
          )}
        </TableCell>
        <TableCell align="left">
          {edit === true ? (
            <form onSubmit={handleSubmit}>
              <TextFieldInput
                size="small"
                required={true}
                id="4"
                label="Pages"
                type="number"
                value={formData.pages}
                onChange={(e) =>
                  setFormData({ ...formData, pages: e.target.value })
                }
              />
            </form>
          ) : (
            props.book.pages
          )}
        </TableCell>
        <TableCell align="center">
          {edit === false ? (
            <>
              <DeleteIconView
                buttonText="Delete"
                onClickFunction={() => handleDelete(props.book.id)}
              />

              <EditIconView
                color="primary"
                onClickFunction={handleEdit}
                buttonName="Edit"
              />
            </>
          ) : (
            <>
              <DeleteIconView
                buttonText="Cancel"
                onClickFunction={handleEdit}
              />
              <EditIconView
                color="success"
                onClickFunction={handleSubmit}
                buttonName="Save"
              />
            </>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default AdminProductView;
