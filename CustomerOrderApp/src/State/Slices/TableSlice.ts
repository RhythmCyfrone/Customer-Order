import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TableState = {
    selectedTable: string;
    selectedTableId: number;
    takeaway: boolean
}

const initialState: TableState = {
    selectedTable: 'None',
    selectedTableId: 0,
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
          state.selectedTableId = actions.payload.selectedTableId
      }else{
        state.selectedTable = 'None',
        state.takeaway = false
        state.selectedTableId = 0
      }
    }
  }
})

export const {
    selectTable
} = tableSlice.actions

export default tableSlice.reducer