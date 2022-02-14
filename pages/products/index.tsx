import React, { useContext, useState } from "react";
import Link from "next/link";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WishlistIcon from "./icons/wishlist/wishlistIcon";
import {
  Details,
  Price,
  ProductListStyle,
  Title,
  IconsContainer,
  LinkContainer,
  Image,
} from "./styles/productListStyle";
import { Grid, Button } from "@mui/material";
import { BookType } from "../types";
import { GetServerSideProps } from "next";
import { Store } from "../../lib/Store";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      bookList: data,
    },
  };
};

const ProductListViewer = (props: { bookList: BookType[] }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product: any) => {
    const existItem = state.cart.cartItems.find(
      (x: any) => x._id === product._id
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  return (
    <Grid width={1000} container>
      {props.bookList.map((book: any) => (
        <Grid marginBottom={1.5} item md={3} xs={1.5} key={book.id}>
          <ProductListStyle>
            {book.title.length > 20 ? (
              <Title style={{ textDecoration: "none" }}>
                {book.title.substring(0, 20)}...
              </Title>
            ) : (
              <Title style={{ textDecoration: "none" }}>{book.title}</Title>
            )}
            <LinkContainer>
              <Link href={`/products/${book._id}`} passHref>
                <Image src={`${book.image}`} alt={book.alt} />
              </Link>
            </LinkContainer>
            <Details>
              <IconsContainer>
                <WishlistIcon />
              </IconsContainer>
              <Price>{book.price}$</Price>
            </Details>
            {cart.cartItems.find((item: any) => item._id === book._id) ? (
              <Button
                startIcon={<LocalMallIcon />}
                size="small"
                variant="outlined"
                sx={{ fontSize: 12.5 }}
                color="success"
              >
                Added
              </Button>
            ) : (
              <Button
                size="small"
                variant="outlined"
                sx={{ fontSize: 12.5 }}
                onClick={() => addToCartHandler(book)}
              >
                ADD
              </Button>
            )}
          </ProductListStyle>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListViewer;
