import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const LoginModal = ({ onClose }) => {
  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await axios.post(`${process.env.REACT_APP_API_URL}/api/save-user`, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      });

      alert("Đăng nhập Google thành công!");
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));
      onClose();
    } catch (err) {
      console.error("Lỗi Google login:", err);
    }
  };

  // Facebook SDK init
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "711364211725720",
        cookie: true,
        xfbml: true,
        version: "v19.0",
      });
    };

    (function (d, s, id) {
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      const fjs = d.getElementsByTagName(s)[0];
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  // Facebook Login
  const handleFacebookLogin = () => {
    if (!window.FB) {
      alert("Facebook SDK chưa sẵn sàng");
      return;
    }

    window.FB.login(
      (response) => {
        if (response.authResponse) {
          window.FB.api("/me", { fields: "name,email,picture" }, async (userInfo) => {
            try {
              await axios.post(`${process.env.REACT_APP_API_URL}/api/save-user`, {
                name: userInfo.name,
                email: userInfo.email,
                photoURL: userInfo.picture.data.url,
                uid: userInfo.id,
              });

              alert("Đăng nhập Facebook thành công!");
              localStorage.setItem("user", JSON.stringify({
                name: userInfo.name,
                email: userInfo.email,
                photo: userInfo.picture.data.url,
              }));
              onClose();
            } catch (err) {
              console.error("Lỗi lưu user Facebook:", err);
            }
          });
        } else {
          alert("Đăng nhập Facebook bị huỷ");
        }
      },
      { scope: "email" }
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6 relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Tiêu đề */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
          Sign in to technox
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Welcome back! Please sign in to continue
        </p>

        {/* Nút Facebook + Google */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleFacebookLogin}
            className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>

          <button
            onClick={handleGoogleLogin}
            className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Email input */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Nút Continue */}
        <button className="w-full mt-4 bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800">
          Continue →
        </button>

        {/* Link Sign up */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-black hover:underline font-medium">
            Sign up
          </a>
        </p>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mt-6">
          <p>
            Secured by{" "}
            <span className="font-semibold text-gray-700">Duong Anh Van</span>
          </p>
          <p className="text-orange-600 font-semibold">Development mode</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
