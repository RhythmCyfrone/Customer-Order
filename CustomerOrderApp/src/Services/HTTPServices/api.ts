import axios, { AxiosInstance} from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_COVIDB_BASE_URL
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});