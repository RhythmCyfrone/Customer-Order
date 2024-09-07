import { configureStore } from "@reduxjs/toolkit";
import { indentsSlice } from "./store/indentsSlice";
import { sidebarSlice } from "./store/sidebarSlice";

export const store = configureStore({
  reducer: {
    indents: indentsSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
