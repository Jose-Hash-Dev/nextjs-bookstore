import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Details,
  Price,
  ProductListStyle,
  Title,
} from "./styles/ProductListStyle";
import Navigation from "../../components/Navigation/Navigation";
import { Book } from "./types";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/books");
  let books = await res.json();
  console.log(books);

  return {
    props: { books },
  };
};

const ProductListViewer = (props: { books: Book[] }) => {
  return (
    <div>
      <Navigation />
      {props.books.map((book: Book) => (
        <div key={book.id}>
          <ProductListStyle>
            <Link href={"/products/" + book.id} key={book.id}>
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

export default ProductListViewer;
