import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../State/hooks"
const usePaymentBackdropViewModel = () => {
    const startPosition = useAppSelector(state => state.backdrop)
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const [disableConfirm, setDisableConfirm] = useState(true)
    const [selectPaymentMode, setSelectPaymentMode] = useState("")
    const gap = selectPaymentMode == "Cash" ?'gap-y-[32px]':'gap-y-[54px]'
    const dispatch = useAppDispatch()

    const handlePaymentModeChange = (paymentMode: string) => {
        setSelectPaymentMode(paymentMode)
        setDisableConfirm(false)
    }

    return {
        startPosition,
        currentTable,
        disableConfirm,
        selectPaymentMode, 
        handlePaymentModeChange,
        gap,
        dispatch,
    }
}

export default usePaymentBackdropViewModel