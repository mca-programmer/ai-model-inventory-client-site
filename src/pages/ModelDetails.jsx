// src/pages/ModelDetails.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function ModelDetails(){
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, getToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.getModel(id).then(res => setModel(res.data)).catch(()=>{}).finally(()=>setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    if (!confirm('Delete this model?')) return;
    try {
      const token = await getToken();
      await api.deleteModel(id, token);
      toast.success('Deleted');
      navigate('/models');
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  const handlePurchase = async () => {
    try {
      const token = await getToken();
      await api.purchaseModel(id, { purchasedBy: user.email }, token);
      // optimistic update: increase purchased locally
      setModel(prev => ({ ...prev, purchased: (prev.purchased||0) + 1 }));
      toast.success('Purchased (count incremented)');
    } catch (err) { toast.error('Purchase failed'); }
  };

  if (loading) return <LoadingSpinner />;
  if (!model) return <div className="container mx-auto px-4 py-8">Model not found.</div>;

  const isCreator = user?.email === model.createdBy;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white p-6 rounded shadow">
        <img src={model.image} alt={model.name} className="w-full h-64 object-cover rounded"/>
        <h2 className="text-2xl font-bold mt-4">{model.name}</h2>
        <p className="text-gray-600">{model.framework} • {model.useCase}</p>
        <p className="mt-3">{model.description}</p>
        <p className="mt-2 text-sm text-gray-500">Dataset: {model.dataset}</p>
        <p className="mt-2 text-sm text-gray-500">Purchased {model.purchased || 0} times</p>

        <div className="mt-4 flex gap-2">
          <button onClick={handlePurchase} className="bg-green-600 text-white px-3 py-1 rounded">Purchase Model</button>
          {isCreator && <button onClick={()=>navigate(`/update-model/${id}`)} className="bg-yellow-500 px-3 py-1 rounded">Edit</button>}
          {isCreator && <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>}
        </div>
      </div>
    </div>
  );
}
