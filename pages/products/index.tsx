import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Details,
  Price,
  ProductListStyle,
  Title,
} from "../../styles/products/ProductListStyle";
import Navigation from "../../components/Navigation/Navigation";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/books");
  const data = await res.json();

  return {
    props: { books: data },
  };
};

const ProductList = ({ books }: any) => {
  return (
    <div>
      <Navigation />
      {books.map((book: any) => (
        <div key={book.id}>
          <ProductListStyle>
            <Link href={'/products/' +book.id} key={book.id}>
              <Image src={book.image} alt={book.alt} width={350} height={500} />
            </Link>
            <Details>
              <Title>{book.title}</Title>
              <Price>{book.price}$</Price>
            </Details>
          </ProductListStyle>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
