import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TableState = {
    selectedTable: string;
    takeaway: boolean
}

const initialState: TableState = {
    selectedTable: 'None',
    takeaway: false
}

export const tableSlice = createSlice({
  name: 'tableSelected',
  initialState,
  reducers: {
    selectTable: (state, actions: PayloadAction<TableState>) => {
      if(state.selectedTable !== actions.payload.selectedTable ||
        state.takeaway !== actions.payload.takeaway
      ) { 
          state.selectedTable = actions.payload.selectedTable
          state.takeaway = actions.payload.takeaway
      }else{
        state.selectedTable = 'None',
        state.takeaway = false
      }
    }
  }
})

export const {
    selectTable
} = tableSlice.actions

export default tableSlice.reducer