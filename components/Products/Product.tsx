import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ProductItem = ({ product }: any) => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
            component="img"
            height={500}
            alt={product.alt}
            image={product.image}
        />
        <CardContent>
          <Typography>{product.title}</Typography>
          <Typography>{product.price}$</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductItem;
