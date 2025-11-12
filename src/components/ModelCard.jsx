// src/components/ModelCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ModelCard({ model }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow p-4 flex flex-col">
      <img src={model.image} alt={model.name} className="h-44 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-3">{model.name}</h3>
      <p className="text-sm text-gray-600">{model.framework} • {model.useCase}</p>
      <p className="mt-2 text-sm flex-1">{model.description?.slice(0,120)}{model.description?.length>120?'...':''}</p>
      <div className="mt-3 flex justify-between items-center">
        <Link to={`/models/${model._id}`} className="text-sm bg-brand-500 text-white px-3 py-1 rounded">View Details</Link>
        <div className="text-xs text-gray-500">Purchased {model.purchased || 0}</div>
      </div>
    </div>
  );
}
