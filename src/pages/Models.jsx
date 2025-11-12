// src/pages/Models.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ModelCard from '../components/ModelCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Models(){
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [frameworkFilter, setFrameworkFilter] = useState([]);
  const [search, setSearch] = useState('');

  const fetchModels = () => {
    setLoading(true);
    const params = {};
    if (search) params.search = search;
    api.getModels(params)
      .then(res => setModels(res.data))
      .catch(()=>{})
      .finally(()=> setLoading(false));
  };

  useEffect(() => { fetchModels(); }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchModels();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">All Models</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name" className="p-2 border rounded flex-1"/>
        <select onChange={e=>setFrameworkFilter([e.target.value])} className="p-2 border rounded">
          <option value="">All frameworks</option>
          <option>TensorFlow</option>
          <option>PyTorch</option>
          <option>ONNX</option>
        </select>
        <button className="px-3 py-2 bg-brand-500 text-white rounded">Search</button>
      </form>

      {loading ? <LoadingSpinner /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models.map(m => <ModelCard key={m._id} model={m} />)}
          {models.length===0 && <div>No models.</div>}
        </div>
      )}
    </div>
  );
}
