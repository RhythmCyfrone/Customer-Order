import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../State/hooks"
import { orderStatusToColors } from "../../../Assets/Constants/OrderStatusColors"
import { OrderDTO } from "../../../Models/api/orders"
import useOrderModel from "../../../Models/useOrderModel"

export const useTableDetailsViewModel = (order: OrderDTO) => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const [customerName, setCustomerName] = useState<string>()
    const dispatch = useAppDispatch()

    return {
        currentFloor, currentTable, customerName, setCustomerName, dispatch
    }
}

export type OrderStatusDropdownProps = {
    orderID: string;
    currentStatus: number;
}

export const useOrderStatusDropdown = ({orderID, currentStatus}: OrderStatusDropdownProps) => {
    const [dropDown, setDropDown] = useState(false)
    const [orderStatus, setOrderStatus] = useState<keyof typeof orderStatusToColors>('Ordered')
    const { getStatusById, updateOrderStatus } = useOrderModel()

    const handleUpdateOrderStatus = async (orderStatusId: number) => {
        const err = await updateOrderStatus(orderID, orderStatusId)
        if(err !== null) {
            console.error(err)
        }
    }

    useEffect(() => {
        const getStatus = async () => {
            const err = await getStatusById({setOrderStatus, orderStatusId: currentStatus})
            if(err !== null) {
                console.error(err)
            }
        }
        getStatus()
    }, [])

    return {
        dropDown, setDropDown, orderStatus, setOrderStatus, handleUpdateOrderStatus
    }
}