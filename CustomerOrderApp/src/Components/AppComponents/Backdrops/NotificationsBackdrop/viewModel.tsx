import { useAppDispatch, useAppSelector } from "../../../../State/hooks"
import { useState } from "react"

const useNotificationsBackdropViewModel = () => {
    const startPosition = useAppSelector(state => state.backdrop)
    const dispatch = useAppDispatch()
    const [maxHeight, setMaxHeight] = useState(`${document.body.clientHeight - 130}px`)

    const updateMaxHeight = () => {
        const screenHeight = document.body.clientHeight
        setMaxHeight(`${screenHeight-180}px`)
    };

    return {
        startPosition,
        dispatch,
        maxHeight,
        setMaxHeight,
        updateMaxHeight
    }
}

export default useNotificationsBackdropViewModel