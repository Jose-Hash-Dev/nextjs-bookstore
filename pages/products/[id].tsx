import React from "react";
import {
  ProductDetailContainer,
  Title,
  PriceAmountContainer,
  Price,
  Description,
  PriceRatingContainer,
  Amount,
} from "./styles/ProductDetailStyle";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import { Rating, Button, TextField } from "@mui/material";
import { Book } from "./types";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/books");
  const data = await res.json();

  const paths = data.map((book: Book) => {
    return {
      params: { id: book.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/books/" + id);
  const book = await res.json();

  return {
    props: { book },
  };
};

const ProductViewer = (props: {book: Book}) => {
  return (
    <>
      <Navigation />
      <ProductDetailContainer>
        <Title>{props.book.title}</Title>
        <Image src={props.book.image} alt={props.book.alt} width={350} height={500} />
        <Description>{props.book.description}</Description>
        <PriceAmountContainer>
          <Amount>
            <TextField
              label="Amount"
              id="outlined-size-small"
              defaultValue="1"
              size="small"
            />
          </Amount>
          <PriceRatingContainer>
            <Price>{props.book.price}$</Price>
            <Rating name="simple-controlled" />
          </PriceRatingContainer>
        </PriceAmountContainer>
        <Button variant="contained" >
          Add To Cart
        </Button>
      </ProductDetailContainer>
    </>
  );
};

export default ProductViewer;
