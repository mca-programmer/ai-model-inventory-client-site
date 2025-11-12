// src/components/ModelCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ModelCard({ model }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      
      {/* Model Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-52 sm:h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Model Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {model.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-1">
          {model.framework} • {model.useCase}
        </p>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 flex-1">
          {model.description?.length > 120
            ? model.description.slice(0, 120) + "..."
            : model.description}
        </p>

        {/* Action & Stats */}
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/models/${model._id}`}
            className="text-sm sm:text-base bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            View Details
          </Link>
          <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
            Purchased {model.purchased || 0}
          </div>
        </div>
      </div>
    </div>
  );
}
