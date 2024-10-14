import { useAppDispatch, useAppSelector } from "../State/hooks"
import { toggle } from "../State/Slices/sidebarSlice"
import { selectScreen } from "../State/Slices/ScreensSlice"

const useSidebarViewModel = () => {
    const sidebarTab = useAppSelector(state => state.sidebar.currentTab)
    const dispatch = useAppDispatch()

    const handleToggle = () => {
        if(sidebarTab == 'POS')
            dispatch(selectScreen({screen: 'Table Management'}))
        else
            dispatch(selectScreen({screen: 'Dashboard'}))
        dispatch(toggle())
    }

    return {
        sidebarTab,
        handleToggle
    }
}

export default useSidebarViewModel