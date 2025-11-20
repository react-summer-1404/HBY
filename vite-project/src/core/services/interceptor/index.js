import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  console.log(error);

  return Promise.reject(error);
};

apiClient.interceptors.response.use(onSuccess, onError);

apiClient.interceptors.request.use((otp) => {
  let token = localStorage.getItem("token");
  token = JSON.parse(token);

  if (token) opt.headers.Authorization = "Bearer " + token.token;
  return otp;
});

export default apiClient;