import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import api from "../services/api";
import ModelCard from "../components/ModelCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getModels({ limit: 6, sort: "createdAt:desc" })
      .then((res) => setModels(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero / Slider Section */}
      <Slider />

      {/*  Featured Models Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          Featured AI Models
        </h2>

        {loading ? (
          <div className="flex justify-center py-10">
            <LoadingSpinner />
          </div>
        ) : models.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((m) => (
              <ModelCard key={m._id} model={m} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No models added yet.
          </div>
        )}
      </section>

      {/* 🌐 About AI Models Section */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          About AI Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg hover:bg-white/30 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-center">
               Neural Networks
            </h3>
            <p className="text-base text-center leading-relaxed">
              Neural networks mimic the human brain to recognize patterns and
              make predictions — essential for speech and handwriting
              recognition.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg hover:bg-white/30 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-center">
               Transformers
            </h3>
            <p className="text-base text-center leading-relaxed">
              Transformers power NLP systems like ChatGPT and Google Translate
              with deep context understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg hover:bg-white/30 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-center">
               Computer Vision
            </h3>
            <p className="text-base text-center leading-relaxed">
              Computer vision models help machines understand visual data — from
              face detection to self-driving cars.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="container mx-auto px-6 py-16 text-center mt-16 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl shadow-lg text-white">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">
            Get Started with AI Models
          </h3>
          <p className="text-lg mb-6 leading-relaxed">
            Join our platform to explore, create, and manage AI models — all in
            one place.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Register Now
            </a>
            <a
              href="/login"
              className="bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
