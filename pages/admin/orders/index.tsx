import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrderType } from "../../types/types";
import axios from "axios";

import DeleteIconView from "../icons/delete";
import EditIconView from "../icons/edit";

const AdminOrderView = (props: { orderList: OrderType[] }) => {
  const handleDelete = async (id: Number) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
    } catch (err) {
      window.Error("Can not delete");
    }
    return window.alert("Order was Deleted!"), window.location.reload();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">User</TableCell>
            <TableCell align="left">Delivery Method</TableCell>
            <TableCell align="left">Order Status</TableCell>
            <TableCell align="left">Payment Method</TableCell>
            <TableCell align="left">Order Date</TableCell>
            <TableCell align="center">Control</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orderList.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.id}
              </TableCell>
              <TableCell align="left">
                {order.user.name} {order.user.surname}
              </TableCell>
              <TableCell align="left">{order.deliveryMethod.name}</TableCell>
              <TableCell align="left">{order.orderStatus.name}</TableCell>
              <TableCell align="left">{order.paymentMethod.name}</TableCell>
              <TableCell align="left">{order.createdAt.slice(0, 10)}</TableCell>
              <TableCell align="center">
                <DeleteIconView buttonText="Delete"
                  onClickFunction={() => handleDelete(order.id)}
                />
                <EditIconView color="primary" buttonName="Edit"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminOrderView;
