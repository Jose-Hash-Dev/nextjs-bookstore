import React from "react";
import ProductList from "../components/Products/ProductList";
import Navigation from "../components/Navigation/Navigation";

function HomePage() {
  return (
    <div>
      <Navigation />
      <ProductList />
    </div>
  );
}

export default HomePage;
