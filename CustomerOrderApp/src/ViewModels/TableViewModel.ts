import { statusToColors, statusToTextColors } from "../Constants/TableStatusColors";
import { useAppDispatch, useAppSelector } from "../State/hooks";

export type Status = keyof typeof statusToColors

const useTableViewModel = (status: Status) => {
    const selectedTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const dispatch = useAppDispatch()
    const statusColorClass = statusToColors[status];
    const statusColorText = statusToTextColors[status];

    return {
        selectedTable, currentFloor, dispatch, statusColorClass, statusColorText
    }
}

export default useTableViewModel