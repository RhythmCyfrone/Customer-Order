import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type FloorType = '1' | '2' | '3'
export type FloorState = {
    currentFloor: FloorType
}

const initialState: FloorState = {
    currentFloor: '1'
}

export const floorSlice = createSlice({
  name: 'floor',
  initialState,
  reducers: {
    selectFloor: (state, actions: PayloadAction<FloorType>) => {
      state.currentFloor = actions.payload
    }
  }
})

export const {
    selectFloor
} = floorSlice.actions

export default floorSlice.reducer