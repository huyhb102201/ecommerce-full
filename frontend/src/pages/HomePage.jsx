import React from "react";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "HP Laptop, AMD Ryzen 5 5500U Processor",
    category: "Gadget Accessories",
    price: 1659,
    oldPrice: 1907.85,
    stock: 18,
    reviews: 5,
    image: "https://shoppers.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj9d7duit%2Fproduction%2F8a8fe9994292b7c9853b1e86c597bd7f28161d21-2000x2000.webp&w=1080&q=75",
  },
  {
    id: 2,
    name: "Mpow - CHE2S On-Ear Headphone with Mic for Kids",
    category: "Gadget Accessories",
    price: 550,
    oldPrice: 605,
    stock: 6,
    reviews: 5,
    image: "https://shoppers.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj9d7duit%2Fproduction%2F40e02d70c405b7faed14c62c9424515c0c853db7-600x600.webp&w=1080&q=75",
  },
  {
    id: 3,
    name: "Realme Note 60x (4/64GB)",
    category: "Gadget Accessories",
    price: 699,
    oldPrice: 768.9,
    stock: 10,
    reviews: 5,
    image: "https://shoppers.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj9d7duit%2Fproduction%2Fb875c6a5706795d1ffb810b2bd4f2d19ffc1ef11-500x500.webp&w=1080&q=75",
  },
  {
    id: 4,
    name: "Samsung Galaxy S25 Ultra 5G 12/256GB",
    category: "Gadget Accessories",
    price: 1659,
    oldPrice: 1907.85,
    stock: 13,
    reviews: 5,
    image: "https://shoppers.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj9d7duit%2Fproduction%2F5960832413f11f5a80d5044419831a5d9bd92e8d-1000x1000.jpg&w=1080&q=75",
  },
  {
    id: 5,
    name: "Sony WH-CH520 Wireless Headphones",
    category: "Gadget Accessories",
    price: 499,
    oldPrice: 613.77,
    stock: 7,
    reviews: 5,
    image: "https://shoppers.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fj9d7duit%2Fproduction%2F8c87adf129211c15ccd8b641c82a467b80b2a6e0-450x450.jpg&w=1080&q=75",
    isSale: true,
  },
];

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
