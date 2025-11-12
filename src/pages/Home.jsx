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
    <div>
      <Slider />

      <section className="container mx-auto px-4 my-8">
        <h2 className="text-2xl font-bold mb-4">Featured AI Models</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {models.map((m) => (
              <ModelCard key={m._id} model={m} />
            ))}
            {models.length === 0 && <div>No models yet.</div>}
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 py-8 bg-gray-50 rounded">
        <h3 className="text-xl font-semibold">About AI Models</h3>
        <p className="mt-2 text-gray-600">
          AI models are trained systems (neural networks, transformers) used for
          tasks like NLP, image recognition, and more.
        </p>
      </section>

      <section className="container mx-auto px-4 py-8 text-center">
        <h3 className="text-xl font-semibold">Get Started</h3>
        <p className="mt-2">
          Register or login to start adding and managing AI models.
        </p>
        <div className="mt-4">
          <a
            href="/register"
            className="bg-brand-500 text-white px-4 py-2 rounded"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
