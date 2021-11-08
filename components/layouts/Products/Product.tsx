import React from "react";
import { books } from "../../../assets/Data";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function ProductItem() {
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              height={500}
              image={book.image}
              alt={book.alt}
            />
            <CardContent>
              <Typography>{book.title}</Typography>
              <Typography>{book.price}$</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
