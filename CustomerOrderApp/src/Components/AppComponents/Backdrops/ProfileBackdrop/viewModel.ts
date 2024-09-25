import { useAppDispatch, useAppSelector } from "../../../../State/hooks"
import { useState } from "react"
const useProfileBackdropViewModel = () => {
    const startPosition = useAppSelector(state => state.backdrop)
    const dispatch = useAppDispatch()
    const [logout, setLogout] = useState(false)

    return {
        startPosition,
        dispatch,
        logout,
        setLogout
    }
}

export default useProfileBackdropViewModel