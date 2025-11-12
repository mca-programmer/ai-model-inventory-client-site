// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Password toggle state
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Invalid email or password");
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">
        Login to <span className="text-yellow-300">AiModel</span> <span className="text-red-500">Inventory</span>   Manager
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gradient-to-br from-purple-200 via-indigo-100 to-blue-200 p-6 rounded shadow"
      >
        {/* Email input */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 text-gray-700 dark:text-gray-900 border rounded"
        />

        {/* Password input with toggle */}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 text-gray-700 dark:text-gray-900 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>

        {/* Links */}
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-red-400">
            Forget Password
          </a>
          <Link to="/register" className="text-sm text-purple-500">
            Register
          </Link>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full flex items-center justify-center border border-gray-300 py-3 text-gray-700 dark:text-gray-900 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="mr-2 text-lg" /> Sign in with Google
        </button>
      </form>
    </div>
  );
}
