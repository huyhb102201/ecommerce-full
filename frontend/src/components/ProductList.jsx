import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-20 mr-20 mt-10">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
