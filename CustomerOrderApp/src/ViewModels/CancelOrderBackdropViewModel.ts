import { useAppDispatch, useAppSelector } from "../State/hooks"
const useCancelOrderBackdropViewModel = () => {
    const startPosition = useAppSelector(state => state.backdrop)
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const dispatch = useAppDispatch()

    return {
        startPosition,
        currentTable,
        currentFloor,
        dispatch
    }

}

export default useCancelOrderBackdropViewModel