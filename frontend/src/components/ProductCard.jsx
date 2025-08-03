import React from "react";
import { AiOutlineHeart } from "react-icons/ai"; // icon trái tim rỗng
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between text-center text-sm h-[500px] mx-auto w-[95%] mb-5">

      {/* Image + Heart */}
      <div className="relative p-3">
        <a href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-[300px] h-[300px] object-contain mx-auto"
          />
        </a>

        {/* Nút trái tim yêu thích */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:text-red-500 transition">
          <AiOutlineHeart className="w-5 h-5" />
        </button>
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            fill={i < product.reviews ? "#facc15" : "#e5e7eb"}
            className="w-3.5 h-3.5"
          >
            <path d="M10 1.5l2.39 6.91h7.26L13.64 12.9l2.39 6.9L10 16.3l-6.03 3.5 2.39-6.9L.35 8.41h7.26L10 1.5z" />
          </svg>
        ))}
      </div>

      {/* Info */}
      <p className="uppercase text-xs text-rose-500 font-semibold mb-2 mt-2">{product.category}</p>
      <h3 className="font-bold text-gray-800">{product.name}</h3>
      <p className="text-xs text-gray-500 line-clamp-2 px-2 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Price */}
      <div className="flex justify-center gap-2 mt-1">
        <span className="text-base font-bold text-red-500">${product.price.toFixed(2)}</span>
        <span className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
      </div>

      {/* Button */}
      <div className="mt-3">
        <button className="w-full bg-black text-white py-2 rounded-b-md hover:bg-gray-900 transition flex items-center justify-center gap-2">
          <FaShoppingCart className="w-4 h-4" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
