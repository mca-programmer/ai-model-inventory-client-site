import axios from "axios";
import { toast } from "react-hot-toast";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

const client = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error(err);
    toast.error(err?.response?.data?.message || "Server error");
    return Promise.reject(err);
  }
);

const withToken = (token) => token ? { headers: { Authorization: `Bearer ${token}` } } : {};

export default {
  getModels: (params) => client.get("/models", { params }),
  getModel: (id) => client.get(`/models/${id}`),
  addModel: (data, token) => client.post("/models", data, withToken(token)),
  updateModel: (id, data, token) => client.put(`/models/${id}`, data, withToken(token)),
  deleteModel: (id, token) => client.delete(`/models/${id}`, withToken(token)),
  purchaseModel: (id, payload, token) => client.patch(`/models/purchase/${id}`, payload, withToken(token)),
  getMyModels: (email, token) => client.get(`/models/my/${email}`, withToken(token)),
  getPurchased: (email, token) => client.get(`/models/purchased/${email}`, withToken(token)),
};
