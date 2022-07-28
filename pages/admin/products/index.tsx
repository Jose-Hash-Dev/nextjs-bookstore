import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetServerSideProps } from "next";
import AdminProductView from "./[id]";
import { BookType } from "../../types/types";
import axios from "axios";
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      bookList: res.data,
    },
  };
};

const AdminProducListtView = (props: { bookList: BookType[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
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
        {props.bookList.map((book) => (
          <>
            <AdminProductView book={book} />
          </>
        ))}
      </Table>
    </TableContainer>
  );
};

export default AdminProducListtView;
