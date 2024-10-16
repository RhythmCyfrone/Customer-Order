import { useAppDispatch, useAppSelector } from "../State/hooks"
const useCancelOrderBackdropViewModel = () => {
    const startPosition = useAppSelector(state => state.backdrop)
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const dispatch = useAppDispatch()

    return {
        startPosition,
        currentTable,
        dispatch
    }

}

export default useCancelOrderBackdropViewModel