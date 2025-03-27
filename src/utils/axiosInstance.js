import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const getToken = () => {
  let token = localStorage.getItem("token");

  if (!token) {
    token = uuidv4();
    localStorage.setItem("token", token);
  }

  return token;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
