import React, { useContext } from "react";
import {
  Image,
  TextStyle,
  StyledTableRow,
  HeadingText,
  DetailTextStyle,
  CardContainer,
  CardActionsContainer,
  SubTotalContainer,
  CostText,
} from "./styles/cartStyle";
import Checkout from "./buttons/checkout/checkout";
import { Store } from "../../lib/Store";
import { BookType } from "../types";
import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
import RemoveProductIcon from "./icons/remove";
import WishListButton from "./buttons/actionButtons/wishlist";
import BackToShopping from "./buttons/backToShopping";

const CartView = (props: { cart: BookType[] }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item: { _id: any }, quantity: any) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${item._id}`
    );
    dispatch({ type: "UPDATE_CART", payload: { ...item, quantity: quantity } });
  };

  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <>
      <HeadingText>Shopping Cart</HeadingText>
      {cartItems.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 1000 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <StyledTableRow>
                  <TableCell>
                    <TextStyle>PRODUCT</TextStyle>
                  </TableCell>
                  <TableCell>
                    <TextStyle />
                  </TableCell>
                  <TableCell align="center">
                    <TextStyle>PRICE</TextStyle>
                  </TableCell>
                  <TableCell align="center">
                    <TextStyle>QUANTITY</TextStyle>
                  </TableCell>
                  <TableCell align="center">
                    <TextStyle>SUBTOTAL</TextStyle>
                  </TableCell>
                  <TableCell align="center">
                    <TextStyle>ACTION</TextStyle>
                  </TableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {cart.cartItems.map((item: any) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ width: 5 }} align="left">
                      <Image src={item.image} />
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      <TextStyle>{item.title}</TextStyle>
                      <DetailTextStyle>{item.author}</DetailTextStyle>
                    </TableCell>

                    <TableCell align="center">
                      <TextStyle>{item.price}€</TextStyle>
                    </TableCell>
                    <TableCell align="center">
                      <Select
                        sx={{ width: 70, height: 35 }}
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.stock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <TextStyle>{item.price * item.quantity}€</TextStyle>
                    </TableCell>
                    <TableCell align="center">
                      <WishListButton />
                      <Button
                        onClick={() => removeItemHandler(item)}
                        color="warning"
                        variant="outlined"
                        startIcon={<RemoveProductIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <CardContainer>
            <SubTotalContainer>
              <CostText>
                Total Price:{" "}
                {cartItems.reduce(
                  (a: number, c: { quantity: number; price: number }) =>
                    a + c.quantity * c.price,
                  0
                )}{" "}
                €
              </CostText>
              <CostText>
                Quantity:{" "}
                {cartItems.reduce(
                  (a: any, c: { quantity: any }) => a + c.quantity,
                  0
                )}{" "}
                items
              </CostText>
            </SubTotalContainer>
            <CardActionsContainer>
              <BackToShopping />
              <Checkout />
            </CardActionsContainer>
          </CardContainer>
        </>
      ) : (
        <CardContainer>
          <TextStyle>Cart is Empty</TextStyle>
        </CardContainer>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(CartView), { ssr: false });
