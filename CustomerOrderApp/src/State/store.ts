import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './Slices/sidebarSlice'
import tableReducer from './Slices/TableSlice'
import orderTypeReducer from './Slices/orderTypeSlice'
import floorReducer from './Slices/floorSlice'
import ScreensReducer from './Slices/ScreensSlice'
import FoodSelectorNavbarReducer from './Slices/FoodSelectorNavbarSlice'
import BackdropReducer from './Slices/BackdropSlice'
import tableDataReducer from './Slices/tablesSlice'
import takeawaysDataReducer from './Slices/takeawaySlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tableSelect: tableReducer,
    orderType: orderTypeReducer,
    floor: floorReducer,
    screen: ScreensReducer,
    foodSelector: FoodSelectorNavbarReducer,
    backdrop: BackdropReducer,
    tablesList: tableDataReducer,
    takeawaysList: takeawaysDataReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store