import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddModel from './pages/AddModel';
import Models from './pages/Models';
import ModelDetails from './pages/ModelDetails';
import UpdateModel from './pages/UpdateModel';
import MyModels from './pages/MyModels';
import MyPurchases from './pages/MyPurchases';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/add-model" element={
            <ProtectedRoute><AddModel /></ProtectedRoute>
          } />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:id" element={
            <ProtectedRoute><ModelDetails /></ProtectedRoute>
          } />

          <Route path="/update-model/:id" element={
            <ProtectedRoute><UpdateModel /></ProtectedRoute>
          } />

          <Route path="/my-models" element={<ProtectedRoute><MyModels /></ProtectedRoute>} />
          <Route path="/my-purchases" element={<ProtectedRoute><MyPurchases /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
