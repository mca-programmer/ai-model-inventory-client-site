// src/components/Header.jsx
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/al logo.png";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="hidden md:inline-block font-bold text-lg text-gray-800 dark:text-gray-100">
            AI Model Inventory
          </span>
        </Link>
      </div>

      {/* Center: Desktop Navigation */}
      <div className="hidden lg:flex gap-6 flex-none absolute left-1/2 transform -translate-x-1/2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add-model"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
          }
        >
          Add Model
        </NavLink>
        <NavLink
          to="/models"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
          }
        >
          All Models
        </NavLink>
      </div>

      {/* Right: Theme Toggle, Profile, Login */}
      <div className="flex items-center gap-2 md:gap-4 flex-none">
        {/* Theme Toggle */}
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* User Profile or Login */}
        {!user ? (
          <button
            className="btn btn-sm btn-primary bg-purple-500"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${user.displayName || user.email}`
                  }
                  alt="avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 dark:bg-gray-800 rounded-box w-52"
            >
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {user.displayName}
                </span>
              </li>
              <li>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {user.email}
                </span>
              </li>
              <li>
                <button onClick={() => navigate("/my-purchases")}>
                  My Purchases
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/my-models")}>My Models</button>
              </li>
              <li>
                <button className="text-red-500" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}