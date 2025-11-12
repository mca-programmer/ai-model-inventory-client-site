// src/components/LoadingSpinner.jsx
import React from 'react';

export default function LoadingSpinner(){
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-12 h-12 rounded-full border-4 border-t-brand-500 animate-spin"></div>
    </div>
  );
}
