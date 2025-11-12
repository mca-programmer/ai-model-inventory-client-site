// src/context/AuthContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  getIdToken
} from 'firebase/auth';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u ? { uid: u.uid, email: u.email, displayName: u.displayName, photoURL: u.photoURL } : null);
      setLoadingAuth(false);
    });
    return () => unsub();
  }, []);

  const register = async ({ name, email, password, photoURL }) => {
    if (!/(?=.*[A-Z])/.test(password) || !/(?=.*[a-z])/.test(password) || password.length < 6) {
      throw new Error('Password must be min 6 chars with both uppercase and lowercase letters');
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name, photoURL });
    setUser({ uid: cred.user.uid, email: cred.user.email, displayName: name, photoURL });
    toast.success('Registered successfully');
    return cred;
  };

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in');
      return res;
    } catch (err) {
      throw err;
    }
  };

  const loginWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    toast.success('Signed in with Google');
    return res;
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    toast.success('Logged out');
  };

  const getToken = async () => {
    if (!auth.currentUser) return null;
    return await getIdToken(auth.currentUser);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, loginWithGoogle, logout, loadingAuth, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}
