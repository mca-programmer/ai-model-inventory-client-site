// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold">404 — Oops! This AI model doesn’t exist.</h2>
      <p className="mt-4">The page you’re looking for was not found.</p>
      <Link to="/" className="mt-6 inline-block bg-brand-500 text-white px-4 py-2 rounded">Return to Home</Link>
    </div>
  )
}
