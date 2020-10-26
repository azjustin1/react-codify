import axios from "axios";

const config = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "http://localhost:9000",
  config: config,
});

export const setClientToken = (token) => {
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default instance;
