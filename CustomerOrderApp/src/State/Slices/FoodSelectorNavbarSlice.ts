import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type selectorType = 'All' | 'Starters' | 'Main Course' | 'Snacks' | 'Desserts'
export type FoodSelector = {
    selector: selectorType
}

const initialState: FoodSelector = {
    selector: 'All'
}

export const FoodSelectorSlice = createSlice({
  name: 'foodSelector',
  initialState,
  reducers: {
    selectFoodKind: (state, actions: PayloadAction<selectorType>) => {
        state.selector = actions.payload
    }
  }
})

export const {
    selectFoodKind
} = FoodSelectorSlice.actions

export default FoodSelectorSlice.reducer