import React from "react";
import ProductCard from "./ProductCard";
import CategoryScroller from "./CategoryScroller";

const ProductList = ({ products }) => {
  return (
    <div className="">
      {/* Thanh danh mục danh mục nằm trên */}
      <div className="ml-20 mr-20">
        <CategoryScroller />
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-20 mr-20 mt-10 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
