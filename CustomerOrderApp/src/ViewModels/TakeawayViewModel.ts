import { useAppSelector, useAppDispatch } from "../State/hooks";
import { selectTable } from "../State/Slices/TableSlice";

const useTakeawayViewModel = () => {
    const selectedTable = useAppSelector(state => state.tableSelect.selectedTable)
    const dispatch = useAppDispatch()

    const handleTakeaway = () => {
        dispatch(selectTable({
            selectedTable: 'AddTakeaway',
            takeaway: true,
            selectedTableId: 0
        }))
    }
    return {
        selectedTable, dispatch, handleTakeaway
    }
}

export default useTakeawayViewModel;