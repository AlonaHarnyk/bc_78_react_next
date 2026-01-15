import axios from "axios";

export const api = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export const authApi = axios.create({
  baseURL: "https://notehub-api.goit.study",
});
