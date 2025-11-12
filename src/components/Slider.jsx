// src/components/Slider.jsx
import React from "react";

export default function Slider() {
  return (
    <div className="container mx-auto my-6">
      <div className="carousel w-full rounded-xl shadow-lg">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="w-full h-64 bg-cover bg-center flex items-center justify-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=8…')",
            }}
          >
            <div className="bg-purple-500 bg-opacity-90 p-4 rounded text-white text-xl font-bold">
              MobileNet-v3
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="w-full h-64 bg-cover bg-center flex items-center justify-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=8…')",
            }}
          >
            <div className="bg-purple-500 bg-opacity-50 p-4 rounded text-white text-xl font-bold">
              DeepLabV3
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="w-full h-64 bg-cover bg-center flex items-center justify-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0f3Yk2E6018nLpsmE_swg1_nB9CRMS-Umqg&s')",
            }}
          >
            <div className="bg-purple-500 bg-opacity-50 p-4 rounded text-white text-xl font-bold">
              GPT-3.5-Turbo
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
