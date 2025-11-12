// src/components/Header.jsx
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/al logo.png"; 

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white dark:bg-gray-100 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* 🔹 Left: Logo + Project Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="AI Model Inventory Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-900">
            AI Model Inventory
          </span>
        </Link>

        {/* 🔹 Center: Navigation Links */}
        <nav className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-brand-500 font-semibold"
                : "text-gray-800 dark:text-gray-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add-model"
            className={({ isActive }) =>
              isActive
                ? "text-brand-500 font-semibold"
                : "text-gray-800 dark:text-gray-900"
            }
          >
            Add Model
          </NavLink>
          <NavLink
            to="/models"
            className={({ isActive }) =>
              isActive
                ? "text-brand-500 font-semibold"
                : "text-gray-800 dark:text-gray-900"
            }
          >
            View Models
          </NavLink>
        </nav>

        {/* 🔹 Right: Theme + User/Login */}
        <div className="flex items-center gap-4">
          <button
            id="theme-toggle"
            className="px-3 py-1 text-sm rounded border-2 border-indigo-500/50 transition-colors hover:bg-indigo-500 hover:text-white"
            onClick={() => {
              const root = document.documentElement;
              const isDark = root.getAttribute("data-theme") === "dark";
              const newTheme = isDark ? "light" : "dark";
              root.setAttribute("data-theme", newTheme);
              localStorage.setItem("theme", newTheme);
            }}
          >
            {document.documentElement.getAttribute("data-theme") === "dark"
              ? "🌙 Dark"
              : "☀️ Light"}
          </button>

          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-purple-500 text-white px-5 py-1 rounded"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              <img
                src={
                  user.photoURL ||
                  `https://ui-avatars.com/api/?name=${
                    user.displayName || user.email
                  }`
                }
                onClick={() => setOpen(!open)}
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 border rounded shadow p-3">
                  <div className="text-sm text-gray-200 font-medium">
                    {user.displayName}
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{user.email}</div>
                  <hr className="my-2 " />
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/my-purchases");
                    }}
                    className="w-full text-gray-200 text-left py-1"
                  >
                    My Purchases
                  </button>
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/my-models");
                    }}
                    className="w-full text-gray-200 text-left py-1"
                  >
                    My Models
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full text-left text-red-500 mt-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
