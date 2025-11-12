// src/components/Slider.jsx
import React from 'react';

export default function Slider() {
  // simple static slider, you can replace with Swiper or embla for animations
  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-gradient-to-r from-blue-100 to-white rounded shadow">Slide 1: Modern AI Models</div>
        <div className="p-6 bg-gradient-to-r from-purple-100 to-white rounded shadow">Slide 2: Secure Storage</div>
        <div className="p-6 bg-gradient-to-r from-green-100 to-white rounded shadow">Slide 3: Easy Deployment</div>
      </div>
    </div>
  );
}
