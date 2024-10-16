import { statusToColors, statusToTextColors } from "../Constants/TableStatusColors";
import { useAppDispatch, useAppSelector } from "../State/hooks";
import { selectTable } from "../State/Slices/TableSlice";

export type Status = keyof typeof statusToColors

const useTakeawayTableViewModel = (status: Status) => {
    const selectedTable = useAppSelector(state => state.tableSelect.selectedTable)
    const dispatch = useAppDispatch()
    const statusColorClass = statusToColors[status];
    const statusColorText = statusToTextColors[status];

    const handleTakeAwayClick = (tableNumber: string) => {
        dispatch(selectTable({
            selectedTable: tableNumber,
            takeaway: true,
            selectedTableId: 0
        }))
    }
    return {
        selectedTable, dispatch, statusColorClass, statusColorText, handleTakeAwayClick
    }
}

export default useTakeawayTableViewModel;