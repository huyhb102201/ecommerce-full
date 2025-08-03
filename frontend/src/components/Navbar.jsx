import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import {
  FaShoppingBag,
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaPhoneAlt,
} from "react-icons/fa";

const menuItems = [
  { name: "Trang chủ", icon: <FaHome /> },
  { name: "Sản phẩm", icon: <FaBoxOpen /> },
  { name: "Giỏ hàng", icon: <FaShoppingCart /> },
  { name: "Liên hệ", icon: <FaPhoneAlt /> },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <nav className="bg-white shadow-md px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 font-sans border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center gap-2 font-extrabold text-2xl uppercase bg-gradient-to-r from-black via-gray-600 to-white text-transparent bg-clip-text tracking-tight">
          <FaShoppingBag className="text-3xl text-black" />
          ShopNow
        </div>


        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-900 font-medium tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="group flex items-center gap-2 cursor-pointer hover:text-black transition relative"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 rounded-full"></span>
            </li>
          ))}
        </ul>

        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photo}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover border border-gray-400"
            />
            <span className="font-medium text-gray-900">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-black text-white px-5 py-2 rounded-full shadow hover:bg-gray-800 transition-all duration-300"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white px-5 py-2 rounded-full shadow hover:bg-gray-800 transition-all duration-300"
          >
            Đăng nhập
          </button>
        )}
      </nav>

      {/* Modal đăng nhập */}
      {showModal && (
        <LoginModal
          onClose={() => {
            setShowModal(false);
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
              setUser(JSON.parse(storedUser));
            }
          }}
        />
      )}
    </>
  );
};

export default Navbar;
