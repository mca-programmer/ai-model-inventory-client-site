// src/pages/Register.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
  const { register, loginWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Password toggle state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password, photoURL });
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err.message || "Registration failed");
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/", { replace: true });
    } catch (err) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        Register for AI Model Inventory Manager
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />

        {/* Email */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />

        {/* Photo URL */}
        <input
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
          className="w-full p-2 border rounded"
        />

        {/* Password input with toggle */}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
          <span className="text-xs text-red-400">
            Password: min 6, 1 uppercase, 1 lowercase
          </span>
          <Link to="/login" className="text-sm text-purple-600">
            Login
          </Link>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="w-full bg-purple-400 text-gray-50 py-2 rounded"
        >
          Register
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full flex items-center justify-center border border-gray-300 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="mr-2 text-lg" /> Sign up with Google
        </button>
      </form>
    </div>
  );
}
