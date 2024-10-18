import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface MasterEntry<T> {
    data: T;
}

export interface MasterState<T = any> {
    masterData: {
        [key: string]: MasterEntry<T>;
    };
}

const initialState: MasterState = {
    masterData: {},
};

const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setMaster: <T>(state: MasterState<T>, action: PayloadAction<{ key: string; data: T }>) => {
            const { key, data } = action.payload;
            state.masterData[key] = { data };
        },
        clearMaster: (state, action: PayloadAction<{ key: string }>) => {
            const { key } = action.payload;
            delete state.masterData[key];
        },
    },
});

export const { 
    setMaster, clearMaster 
} = masterSlice.actions;

export default masterSlice.reducer;