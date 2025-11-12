// src/pages/AddModel.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { uploadToImgBB } from '../utils/imgbb';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AddModel() {
  const { user, getToken } = useContext(AuthContext);
  const [form, setForm] = useState({ name:'', framework:'', useCase:'', dataset:'', description:'' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) { 
      toast.error('Please select an image'); 
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
      toast.success('Model added successfully!');
      navigate('/models');
    } catch (err) {
      console.error(err);
      toast.error('Failed to add model');
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Add New AI Model</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            placeholder="Model Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            required
            value={form.framework}
            onChange={e => setForm({...form, framework: e.target.value})}
            placeholder="Framework (TensorFlow / PyTorch)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            required
            value={form.useCase}
            onChange={e => setForm({...form, useCase: e.target.value})}
            placeholder="Use Case (NLP / CV)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            required
            value={form.dataset}
            onChange={e => setForm({...form, dataset: e.target.value})}
            placeholder="Dataset"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            required
            value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
            placeholder="Description"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input 
            type="file" 
            accept="image/*" 
            onChange={e => setFile(e.target.files[0])} 
            className="w-full text-gray-700"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition 
                        ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {loading ? 'Saving...' : 'Add Model'}
          </button>
        </form>
      </div>
    </div>
  );
}
