import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;
console.log("API_BASE :", API_BASE);

export default axios.create({
  baseURL: `${API_BASE}`,
});
