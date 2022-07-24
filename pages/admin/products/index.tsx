import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIconView from "../icons/delete";
import EditIconView from "../icons/edit";

import { Image } from "./style";
import { BookType } from "../../types/types";
import { Typography } from "@mui/material";
import axios from "axios";

const AdminProductView = (props: { bookList: BookType[] }) => {
  const handleDelete = async (id: Number) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
    } catch (err) {
      window.alert("Can not delete");
    }
    return window.alert("Product was Deleted"), window.location.reload();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Categories</TableCell>
            <TableCell align="left">Languages</TableCell>
            <TableCell align="left">Authors</TableCell>
            <TableCell align="left">Stock</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Pages</TableCell>
            <TableCell align="center">Control</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.bookList.map((book) => (
            <TableRow
              key={book.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ width: 5 }} align="left">
                <Image src={book.image} />
              </TableCell>

              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell align="left">Click to View/Edit</TableCell>
              <TableCell align="left">
                {book.categories.map((category) => (
                  <Typography>{category.name}</Typography>
                ))}
              </TableCell>
              <TableCell align="left">
                {book.languages.map((language) => (
                  <Typography>{language.name}</Typography>
                ))}
              </TableCell>
              <TableCell align="left">
                {book.authors.map((author) => (
                  <Typography>{author.name}</Typography>
                ))}
              </TableCell>
              <TableCell align="left">{book.stock}</TableCell>
              <TableCell align="left">{book.price}</TableCell>
              <TableCell align="left">{book.pages}</TableCell>
              <TableCell align="center">
                <DeleteIconView onClickFunction={() => handleDelete(book.id)} />
                <EditIconView />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminProductView;
