import React from "react";
import {
  ProductDetailContainer,
  Title,
  PriceAmountContainer,
  Price,
  Description,
  PriceRatingContainer,
  Amount,
} from "../../styles/products/ProductDetailStyle";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import { Rating, Button, TextField } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/books");
  const data = await res.json();

  const paths = data.map((book: any) => {
    return {
      params: { id: book.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/books/" + id);
  const data = await res.json();

  return {
    props: { book: data },
  };
};

const ProductDetail = ({ book }: any) => {
  return (
    <>
      <Navigation />
      <ProductDetailContainer>
        <Title>{book.title}</Title>
        <Image src={book.image} alt={book.alt} width={350} height={500} />
        <Description>{book.description}</Description>
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
            <Price>{book.price}$</Price>
            <Rating name="simple-controlled" />
          </PriceRatingContainer>
        </PriceAmountContainer>
        <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
          Add To Cart
        </Button>
      </ProductDetailContainer>
    </>
  );
};

export default ProductDetail;
