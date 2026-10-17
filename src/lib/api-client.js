import axios from "axios";
import { getToken } from "../utils/token-storage";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    config.headers.Authorization = `Bearer ${token}`;
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
