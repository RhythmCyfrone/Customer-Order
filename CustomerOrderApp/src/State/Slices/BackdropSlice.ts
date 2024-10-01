import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type backdropStartType = {
    top: number;
    left: number;
}
export type backdropStartState = {
    startPosition: backdropStartType;
    initiator: string
}

export const initialState: backdropStartState = {
    startPosition: {
        top: 0,
        left: 0
    },
    initiator: ''
}

export const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    setStartPosition: (state, actions: PayloadAction<backdropStartType & { initiator: string }>) => {
      state.startPosition.top = actions.payload.top
      state.startPosition.left = actions.payload.left
      state.initiator = actions.payload.initiator
    },
    resetStartPosition: (state, actions: PayloadAction<backdropStartState>) => {
      state.startPosition.top = actions.payload.startPosition.top
      state.startPosition.left = actions.payload.startPosition.left
      state.initiator = actions.payload.initiator
    },
  }
})

export const {
    setStartPosition,
    resetStartPosition
} = backdropSlice.actions

export default backdropSlice.reducer