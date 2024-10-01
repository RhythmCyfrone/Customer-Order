import axios, { AxiosInstance} from 'axios';

// Define the base URL for your API
export const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});