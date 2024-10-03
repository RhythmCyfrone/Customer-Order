import { useAppSelector } from "../../../../State/hooks"

const useBackdropHandlerViewModal = () => {
    const startPosition = useAppSelector(state => state.backdrop)

    return {
        startPosition
    }

}

export default useBackdropHandlerViewModal