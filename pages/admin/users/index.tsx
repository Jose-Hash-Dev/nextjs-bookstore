import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIconView from "../icons/delete";
import EditIconView from "../icons/edit";
import { UserType } from "../../types/types";
import axios from "axios";

const AdminUsersView = (props: { userList: UserType[] }) => {
  const handleDelete = async (id: Number) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
    } catch (err) {
      window.alert("Can not delete");
    }
    return window.alert("User was Deleted"), window.location.reload();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Surname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="left">Registration Date</TableCell>
            <TableCell align="left">Orders</TableCell>
            <TableCell align="left">Active Orders</TableCell>
            <TableCell align="left">Reviews</TableCell>
            <TableCell align="center">Control</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userList.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{user.id}</TableCell>

              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="left">{user.surname}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="left">{user.createdAt.slice(0, 10)}</TableCell>
              <TableCell align="left">No Orders</TableCell>
              <TableCell align="left">No Orders</TableCell>
              <TableCell align="left">No Reviews</TableCell>
              <TableCell align="center">
                <DeleteIconView buttonText="Delete" onClickFunction={() => handleDelete(user.id)} />
                <EditIconView buttonName="Edit" color="primary"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminUsersView;
