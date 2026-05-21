import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090/api/v1",
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
