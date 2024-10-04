import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../State/hooks"
const usePaymentBackdropViewModel = () => {
    const startPosition = useAppSelector(state => state.backdrop)
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const [disableConfirm, setDisableConfirm] = useState(true)
    const dispatch = useAppDispatch()

    return {
        startPosition,
        currentTable,
        currentFloor,
        disableConfirm,
        dispatch
    }
}

export default usePaymentBackdropViewModel