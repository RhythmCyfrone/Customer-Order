import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type selectorType = 'All' | 'Assigned' | 'Occupied'
export type TableSelector = {
    selector: selectorType
}

const initialState: TableSelector = {
    selector: 'All'
}

export const tableSelectorSlice = createSlice({
  name: 'tableSelector',
  initialState,
  reducers: {
    selectTableSelector: (state, actions: PayloadAction<selectorType>) => {
        state.selector = actions.payload
    }
  }
})

export const {
    selectTableSelector
} = tableSelectorSlice.actions

export default tableSelectorSlice.reducer