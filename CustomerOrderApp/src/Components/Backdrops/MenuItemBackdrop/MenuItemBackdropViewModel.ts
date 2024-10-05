import { useAppSelector, useAppDispatch } from "../../../State/hooks"
import { resetStartPosition, initialState } from "../../../State/Slices/BackdropSlice";


export type MenuItemBackdropProps = {
    isMenuItemBackdrop: boolean;
    setIsMenuItemBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}

const useMenuItemBackdropViewModel = ({isMenuItemBackdrop, setIsMenuItemBackdrop}: MenuItemBackdropProps) => {
    const startPosition = useAppSelector(state => state.backdrop)
    const dispatch = useAppDispatch()

    const handleRemoveBackdrop = () => {
        dispatch(resetStartPosition(initialState))
        setIsMenuItemBackdrop(false)
    
    }
    return {
        startPosition,
        handleRemoveBackdrop
    }
}

export default useMenuItemBackdropViewModel