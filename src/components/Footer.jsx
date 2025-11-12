// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";// 🔹 Social icons
import logo from "../assets/al logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 border-t border-gray-300 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* 🔹 Left: Logo + Project Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="AI Model Inventory Logo"
            className="w-9 h-9 object-contain"
          />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            AI Model Inventory Manager
          </h2>
        </div>

        {/* 🔹 Center: Copyright */}
        <div className="text-sm text-gray-700 dark:text-gray-300 text-center">
          © {new Date().getFullYear()} AI Model Inventory — All Rights Reserved.
        </div>

        {/* 🔹 Right: Links (GitHub + Social Media) */}
        {/* 🔹 Right: Social & Repo Links */}
<div className="flex items-center space-x-5">
  {/* GitHub */}
  <a
    href="https://github.com/yourusername/ai-model-inventory-client"
    target="_blank"
    rel="noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
    title="GitHub Client"
  >
    <FontAwesomeIcon icon={faGithub} size="lg" />
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/yourprofile"
    target="_blank"
    rel="noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
    title="Facebook"
  >
    <FontAwesomeIcon icon={faFacebook} size="lg" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yourprofile"
    target="_blank"
    rel="noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition"
    title="LinkedIn"
  >
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/yourprofile"
    target="_blank"
    rel="noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition"
    title="X (Twitter)"
  >
    <FontAwesomeIcon icon={faXTwitter} size="lg" />
  </a>
</div>

      </div>
    </footer>
  );
}
