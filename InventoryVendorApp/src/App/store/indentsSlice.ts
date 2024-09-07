import { createSlice } from "@reduxjs/toolkit";

export interface Indent {
  id: string; // unique identifier
  date: Date; // date of indent
  kitchen: string; // kitchen name
  noOfItems: number; // number of items in the indent
  raisedBy: string;
  status: string;
  item: Item[]; // list of items in the indent
}
export interface Item {
  itemName: string; // name of the item
  uom: string; //unit of measurement
  parLevel: number; // minimum stock level
  currentInventory: number; // current stock level
  orderQuantity: number; // quantity to order
}

export interface IndentsState {
  indents: Indent[];
}

const initialState: IndentsState = {
  indents: [],
  // notifications:[],
};

export const indentsSlice = createSlice({
  name: "indents",
  initialState,
  reducers: {
    addIndent: (state, action) => {
      state.indents.push(action.payload);
    },
    removeIndent: (state, action) => {
      state.indents = state.indents.filter(
        (indent) => indent.id !== action.payload,
      );
    },
    updateIndent: (state, action) => {
      const index = state.indents.findIndex(
        (indent) => indent.id === action.payload.id,
      );
      if (index !== -1) {
        state.indents[index] = action.payload;
      }
    },
  },
});

export const { addIndent, removeIndent, updateIndent } = indentsSlice.actions;

export default indentsSlice.reducer;
