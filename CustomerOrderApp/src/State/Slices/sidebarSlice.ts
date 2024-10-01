import { createSlice} from '@reduxjs/toolkit'

export type SideBarState = {
    currentTab: 'POS' | 'Table'
}

const initialState: SideBarState = {
    currentTab:  'POS'
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: state => {
      if(state.currentTab == 'POS')
        state.currentTab = 'Table'
      else
        state.currentTab = 'POS'
    }
  }
})

export const {
    toggle
} = sidebarSlice.actions

export default sidebarSlice.reducer