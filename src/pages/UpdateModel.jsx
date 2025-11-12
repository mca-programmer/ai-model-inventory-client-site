// src/pages/UpdateModel.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function UpdateModel() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getModel(id)
      .then((res) => {
        setForm(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      await api.updateModel(id, form, token);
      toast.success("Updated");
      navigate(`/models/${id}`);
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (loading)
    return (
      <div className="p-8">
        <p>Loading...</p>
      </div>
    );
  if (!form) return <div className="p-8">Not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Update Model</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white  text-gray-700 dark:text-gray-900 bg-gradient-to-br from-purple-200 via-indigo-100 to-blue-200 p-6 rounded shadow space-y-3"
      >
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          value={form.framework}
          onChange={(e) => setForm({ ...form, framework: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          value={form.useCase}
          onChange={(e) => setForm({ ...form, useCase: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          value={form.dataset}
          onChange={(e) => setForm({ ...form, dataset: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
        ></textarea>
        <input
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full p-2 border rounded "
          placeholder="Image URL"
        />
        <button className="bg-purple-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
