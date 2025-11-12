// src/hooks/useTheme.js
import { useEffect } from 'react';
export default function useTheme() {
  useEffect(()=>{
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }, []);
}
