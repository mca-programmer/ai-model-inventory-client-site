// src/pages/MyPurchases.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import ModelCard from '../components/ModelCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function MyPurchases(){
  const { user, getToken } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    (async ()=>{
      try {
        const token = await getToken();
        const res = await api.getPurchased(user.email, token);
        setModels(res.data);
      } catch (err) { }
      finally { setLoading(false); }
    })();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">My Purchased Models</h2>
      {loading ? <LoadingSpinner /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models.map(m => <ModelCard key={m._id} model={m} />)}
        </div>
      )}
    </div>
  );
}
