import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TableState = {
    selectedTable: string;
    currentFloor: string;
}

const initialState: TableState = {
    selectedTable: 'None',
    currentFloor: '1'
}

export const tableSlice = createSlice({
  name: 'tableSelected',
  initialState,
  reducers: {
    selectTable: (state, actions: PayloadAction<TableState>) => {
      if(state.currentFloor !== actions.payload.currentFloor ||
        state.selectedTable !== actions.payload.selectedTable
      ) { 
          state.currentFloor = actions.payload.currentFloor
          state.selectedTable = actions.payload.selectedTable
      }else{
        state.selectedTable = 'None',
        state.currentFloor = '1'
      }
    }
  }
})

export const {
    selectTable
} = tableSlice.actions

export default tableSlice.reducer