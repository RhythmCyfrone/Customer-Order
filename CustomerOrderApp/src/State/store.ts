import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../Components/AppComponents/Sidebar/sidebarSlice'
import tableReducer from '../Components/AppComponents/Table/TableSlice'
import orderTypeReducer from '../Components/AppComponents/OrderType/orderTypeSlice'
import floorReducer from '../Components/AppComponents/FloorNavbar/floorSlice'
import ScreensReducer from '../Screens/ScreensSlice'
import FoodSelectorNavbarReducer from '../Components/AppComponents/FoodSelectorNavbar/FoodSelectorNavbarSlice'
import BackdropReducer from '../Screens/BackdropSlice'
import tableDataReducer from '../models/slices/tablesSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tableSelect: tableReducer,
    orderType: orderTypeReducer,
    floor: floorReducer,
    screen: ScreensReducer,
    foodSelector: FoodSelectorNavbarReducer,
    backdrop: BackdropReducer,
    tablesList: tableDataReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store