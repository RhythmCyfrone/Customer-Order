import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CacheEntry<T> {
    data: T;
    expiry: number;
}

export interface CacheState<T = any> {
    cache: {
        [key: string]: CacheEntry<T>;
    };
}

const initialState: CacheState = {
    cache: {},
};

const cacheSlice = createSlice({
    name: 'cache',
    initialState,
    reducers: {
        setCache: <T>(state: CacheState<T>, action: PayloadAction<{ key: string; data: T; ttl: number }>) => {
            const { key, data, ttl } = action.payload;
            const expiry = new Date().getTime() + ttl; // ttl is time-to-live in milliseconds
            state.cache[key] = { data, expiry };
        },
        clearCache: (state, action: PayloadAction<{ key: string }>) => {
            const { key } = action.payload;
            delete state.cache[key];
        },
    },
});

export const { 
    setCache, clearCache 
} = cacheSlice.actions;

export default cacheSlice.reducer;