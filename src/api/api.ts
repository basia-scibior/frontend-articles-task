import axios from "axios";
import axiosRetry from "axios-retry";

export const api = axios.create({
  baseURL: "http://localhost:6010",
});

axiosRetry(api, { retries: 3 });
