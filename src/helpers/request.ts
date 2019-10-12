import axios from "axios";

export const request = axios.create({
  baseURL: process.env.REACT_APP__API_URL
});
