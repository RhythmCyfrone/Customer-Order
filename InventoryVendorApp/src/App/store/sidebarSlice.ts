import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  open: boolean;
  type?: string;
}

const initialState: SidebarState = {
  open: false,
  type: "",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.open = state.open && state.type === action.payload ? false : true;
      state.type = action.payload;
    },
    closeSidebar: (state) => {
      state.open = false;
      state.type = "";
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
