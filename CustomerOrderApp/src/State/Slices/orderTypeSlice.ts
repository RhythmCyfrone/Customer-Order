import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export type OrderType = 'Dine-in' | 'Takeaway' | 'Delivery'
export type orderTypeState = {
    type: OrderType
}

const initialState: orderTypeState = {
    type: 'Dine-in'
}

export const orderTypeSlice = createSlice({
  name: 'orderType',
  initialState,
  reducers: {
    selectOrderType: (state, actions: PayloadAction<OrderType>) => {
        state.type = actions.payload
    }
  }
})

export const {
    selectOrderType
} = orderTypeSlice.actions

export default orderTypeSlice.reducer