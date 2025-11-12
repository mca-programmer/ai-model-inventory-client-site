// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
          alt="AI Robot Lost"
          className="w-60 mb-8 animate-bounce"
        />
      </div>
        
        
      <h2 className="text-3xl font-bold">404 — Oops! This AI model doesn’t exist.</h2>
      <p className="mt-4">The page you’re looking for was not found.</p>
      <Link to="/" className="mt-6 inline-block bg-purple-500 text-white px-4 py-2 rounded">Return to Home</Link>
    </div>
  )
}
