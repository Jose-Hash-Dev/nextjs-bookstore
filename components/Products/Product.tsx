import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function ProductItem({ product }: any) {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height={500}
          image={product.image}
          alt={product.alt}
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
