import axios, { AxiosInstance} from 'axios';
import { Guid } from 'guid-typescript';

const API_BASE_URL = import.meta.env.VITE_APP_COVIDB_BASE_URL_PROD
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {

  const corrId = Guid.create().toString();

  config.headers['x-cyfrone-corrid'] = corrId;

  return config;

}, (error) => {
  return Promise.reject(error);
});