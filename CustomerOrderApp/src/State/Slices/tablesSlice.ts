import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { TableDTO } from '../../Models/HTTPServices/ResponseDTO'

export type tablesList = TableDTO[]

const initialState: tablesList = []

export const tablesDataSlice = createSlice({
  name: 'tablesData',
  initialState,
  reducers: {
      updateTablesList: (state, actions: PayloadAction<TableDTO[]>) => {
        return actions.payload
      }
  }
})

export const {
    updateTablesList
} = tablesDataSlice.actions

export default tablesDataSlice.reducer