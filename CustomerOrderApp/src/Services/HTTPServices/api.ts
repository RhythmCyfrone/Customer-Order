import axios, { AxiosInstance} from 'axios';
import { Guid } from 'guid-typescript';
import { store } from '../../State/store';
import { RootState } from '../../State/store';
import { setCache, clearCache } from '../../State/Slices/cacheSlice';

const API_BASE_URL = import.meta.env.VITE_APP_COVIDB_BASE_URL_DEV
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {

  const corrId = Guid.create().toString();

  config.headers['x-cyfrone-corrid'] = corrId;

  const key = config.url || '';

  const state: RootState = store.getState();

  const cachedData = state.cache.cache[key];

  if (cachedData && cachedData.expiry > new Date().getTime()) {
    return Promise.reject({
      config,
      isCached: true,
      data: cachedData.data,
    });
  }

  return config;

}, (error) => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(
  (response) => {
    const key = response.config.url || '';

    const ttl = 5 * 60 * 1000;
    const expiry = new Date().getTime() + ttl;

    store.dispatch(setCache({ key, data: response.data, ttl: expiry }));

    return response;
  },
  (error) => {
    if (error.isCached) {

      return Promise.resolve({status: 200, data: error.data });
    }

    return Promise.reject(error);
  }
);