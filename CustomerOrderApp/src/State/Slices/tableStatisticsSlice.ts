import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TableStatisticsState = {
    countOfActualCapacity: number,
    avgTableOccupancy: number,
    avgTableTurnOverTime: number,
}

export const initialState: TableStatisticsState = {
    countOfActualCapacity: 0,
    avgTableOccupancy: 0,
    avgTableTurnOverTime: 0,
}

export const tableStatisticsSlice = createSlice({
    name: 'tableStatistics',
    initialState,
    reducers: {
      updateTableStatistics: (state, actions: PayloadAction<TableStatisticsState>) => {
        state = actions.payload
      }
    }
})

export const {
    updateTableStatistics
} = tableStatisticsSlice.actions

export default tableStatisticsSlice.reducer