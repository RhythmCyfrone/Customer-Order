import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type ScreenState = {
    screen: string
}

const initialState: ScreenState = {
    screen: 'Dashboard'
}

export const screenSlice = createSlice({
  name: 'Screen',
  initialState,
  reducers: {
    selectScreen: (state, actions: PayloadAction<ScreenState>) => {
      state.screen = actions.payload.screen
    }
  }
})

export const {
    selectScreen
} = screenSlice.actions

export default screenSlice.reducer