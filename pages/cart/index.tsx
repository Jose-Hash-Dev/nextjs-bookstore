import React from "react";
import {
  Card,
  CardDetails,
  TitleButton,
  PriceSpinner,
  Spinner,
  Price,
} from "./CartStyle";
import CloseIcon from "@mui/icons-material/Close";
import { BookType } from "../types";
import Image from "next/image";
import { ButtonGroup, Button, Typography } from "@mui/material";
import CheckoutButton from "./CheckoutButton/CheckoutButton";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/cart");
  const cartItem = await res.json();

  return {
    props: { cartItem },
  };
};

const CartView = (props: { cartItem: BookType[] }) => {
  return (
    <>
      {props.cartItem.map((cartItem: BookType) => (
        <Card key={cartItem.id}>
          <Image src={cartItem.image} width={100} height={100} />
          <CardDetails>
            <TitleButton>
              <Typography>{cartItem.title}</Typography>
              <CloseIcon />
            </TitleButton>
            <PriceSpinner>
              <Price>
                <Typography variant="h6">{cartItem.price}$</Typography>
              </Price>
              <Spinner>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  size="small"
                >
                  <Button>+</Button>
                  <Button>1</Button>
                  <Button>-</Button>
                </ButtonGroup>
              </Spinner>
            </PriceSpinner>
          </CardDetails>
        </Card>
      ))}
      <CheckoutButton />
    </>
  );
};

export default CartView;
