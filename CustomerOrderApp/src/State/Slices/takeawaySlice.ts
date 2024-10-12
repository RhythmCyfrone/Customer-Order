import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { TakeAwayDTO } from '../../Models/HTTPServices/ResponseDTO'

export type takeawaysList = TakeAwayDTO[]

const initialState: takeawaysList = []

export const takeawaysDataSlice = createSlice({
  name: 'takeawaysData',
  initialState,
  reducers: {
      updateTakeAwaysList: (state, actions: PayloadAction<TakeAwayDTO[]>) => {
        return actions.payload
      }
  }
})

export const {
    updateTakeAwaysList
} = takeawaysDataSlice.actions

export default takeawaysDataSlice.reducer