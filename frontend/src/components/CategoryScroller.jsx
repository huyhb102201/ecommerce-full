import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: "Game & Video", image: "../images/watch.webp" },
  { name: "Robot Clean", image: "../images/watch2.webp" },
  { name: "Sport Watches", image: "../images/tv.webp" },
  { name: "Smart Home", image: "../images/watch.webp" },
  { name: "Audio Devices", image: "../images/ps5.webp" },
  { name: "Laptop & PC", image: "../images/watch2.webp" },
  { name: "Accessories", image: "../images/tv.webp" },
  { name: "Accessories", image: "../images/ps5.webp" },
  { name: "Accessories", image: "../images/watch.webp" },
  { name: "Accessories", image: "../images/ps5.webp" },
];

// Nhân nhiều lần để tạo hiệu ứng vô hạn
const repeatedCategories = Array(10).fill(categories).flat();

const CategoryScroller = () => {
  const scrollRef = useRef(null);
  const itemWidth = 160;

  // Di chuyển trái/phải
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (!current) return;

    const middle = current.scrollWidth / 2;
    let intervalId;

    // Set scroll giữa sau khi DOM render
    const raf = requestAnimationFrame(() => {

      // Chờ một chút rồi mới auto scroll
      setTimeout(() => {
        intervalId = setInterval(() => {
          current.scrollBy({ left: itemWidth, behavior: 'smooth' });

          // Reset nếu gần cuối hoặc đầu
          if (
            current.scrollLeft + current.clientWidth >= current.scrollWidth - itemWidth * 2 ||
            current.scrollLeft <= itemWidth * 2
          ) {
          }
        }, 2000);
      }, 500); // Delay để tránh hiệu ứng cuốn nhanh
    });

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative my-4">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto px-8 hide-scrollbar scroll-smooth"
      >
        {repeatedCategories.map((category, index) => (
          <div
            key={index}
            className="min-w-max border border-gray-300 text-black bg-white px-4 py-2 rounded-full cursor-pointer whitespace-nowrap hover:bg-gray-100 transition flex items-center space-x-2"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CategoryScroller;
