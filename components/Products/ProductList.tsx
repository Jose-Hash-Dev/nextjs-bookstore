import React from "react";
import Product from "./Product";
import { books } from "../../mock/Data";

const ProductList = () => {
  return (
    <>
      {books.map((book) => (
        <Product key={book.id} product={book} />
      ))}
    </>
  );
};

export default ProductList;
