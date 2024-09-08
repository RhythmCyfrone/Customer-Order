import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../Components/AppComponents/Sidebar/sidebarSlice'
import tableReducer from '../Components/AppComponents/Table/TableSlice'
import orderTypeReducer from '../Components/AppComponents/OrderType/orderTypeSlice'
import floorReducer from '../Components/AppComponents/FloorNavbar/floorSlice'
import TableSelectorReducer from '../Components/AppComponents/TableSelectorNavbar/TableSelectorSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tableSelect: tableReducer,
    orderType: orderTypeReducer,
    floor: floorReducer,
    tableSelector: TableSelectorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store