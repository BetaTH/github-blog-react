import axios from "axios";

const URL = "https://api.github.com";
export const api = axios.create({
  baseURL: URL,
});
