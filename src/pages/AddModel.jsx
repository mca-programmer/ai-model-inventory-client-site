import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { uploadToImgBB } from "../utils/imgbb";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddModel() {
  const { user, getToken } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select an image");
      return;
    }
    try {
      setLoading(true);
      const imgUrl = await uploadToImgBB(file);
      const token = await getToken();
      const payload = {
        ...form,
        image: imgUrl,
        createdBy: user.email,
        createdAt: new Date(),
        purchased: 0,
      };
      await api.addModel(payload, token);
      toast.success("Model added successfully!");
      navigate("/models");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add model");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-300 dark:to-gray-400 flex items-center justify-center px-4 py-10 transition-colors">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 transition-colors">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
          Add New AI Model
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "framework", "useCase", "dataset"].map((field) => (
            <input
              key={field}
              required
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              placeholder={
                field === "useCase"
                  ? "Use Case (NLP / CV)"
                  : field.charAt(0).toUpperCase() + field.slice(1)
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 transition"
            />
          ))}
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            rows={4}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 transition"
          />
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-gray-700 dark:text-gray-200"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
              />
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition 
                        ${
                          loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700"
                        }`}
          >
            {loading ? "Saving..." : "Add Model"}
          </button>
        </form>
      </div>
    </div>
  );
}
