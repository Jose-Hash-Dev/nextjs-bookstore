import React, { useState, useContext } from "react";
import {
  ProductDetailContainer,
  Title,
  Price,
  Description,
  DividerStyle,
  Image,
  TitleDescPriceContainer,
  AmountAddContainer,
  BookDetailContainer,
  BookInfoContainer,
  BookInfoText,
} from "./styles/productDetailStyle";
import {
  Button,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Store } from "../../lib/Store";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  return {
    props: {
      book: res.data,
    },
  };
};

const ProductViewer = (props: { book: any }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(Store);
  const { state } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${props.book._id}`
    );
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...props.book, quantity: quantity },
    });
  };

  const onChangeHandler = (event: { target: { value: any } }) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <Grid height={500} width={1000} container>
      <ProductDetailContainer>
        <Image src={`${props.book.image}`} alt={props.book.alt} />
        <BookDetailContainer>
          <TitleDescPriceContainer>
            <Title>{props.book.title}</Title>
            <Price>{props.book.price}$</Price>
            <Description>{props.book.description}</Description>
            <DividerStyle />
          </TitleDescPriceContainer>
          <BookInfoContainer>
            <BookInfoText>Author: {props.book.author}</BookInfoText>
            <BookInfoText>Language:</BookInfoText>
            <BookInfoText>Category:</BookInfoText>
            <BookInfoText>Stock: {props.book.stock}</BookInfoText>
            <BookInfoText>Release Year:</BookInfoText>
          </BookInfoContainer>
          <DividerStyle />
          <AmountAddContainer>
            <Select
              sx={{ width: 60, height: 35 }}
              value={quantity}
              onChange={onChangeHandler}
            >
              {[...Array(props.book.stock).keys()].map((x) => (
                <MenuItem key={x + 1} value={x + 1}>
                  {x + 1}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              onClick={addToCartHandler}
              sx={{ marginLeft: 3, width: 110, height: 35 }}
            >
              Add To Cart
            </Button>
          </AmountAddContainer>
        </BookDetailContainer>
      </ProductDetailContainer>
    </Grid>
  );
};

export default ProductViewer;
