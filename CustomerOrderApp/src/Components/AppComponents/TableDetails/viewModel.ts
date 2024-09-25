import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../State/hooks"
import { AxiosResponse } from "axios"
import { CustomersType, OrdersType } from "../../../api/types"
import { getCustomerByID } from "../../../api/Customers"
import { orderStatusToColors } from "../../../Assets/Constants/OrderStatusColors"
import { updateOrderStatus } from "../../../api/Orders"

export const useTableDetailsViewModel = (order: OrdersType[]) => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const [customerName, setCustomerName] = useState<string>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchCustomerByID = async () => {
            try{
                const data:AxiosResponse<CustomersType[]> = await getCustomerByID(order[0]?.CustomerID)
                if(data.status == 200)
                {
                    setCustomerName(data.data[0]?.Name)
                }
            }catch(err) {
                console.log(err)
            }
        }
        fetchCustomerByID()

    }, [])

    return {
        currentFloor, currentTable, customerName, setCustomerName, dispatch
    }
}

export type OrderStatusDropdownProps = {
    orderID: number;
    currentStatus: keyof typeof orderStatusToColors
}

export const useOrderStatusDropdown = ({orderID, currentStatus}: OrderStatusDropdownProps) => {
    const [dropDown, setDropDown] = useState(false)
    const [orderStatus, setOrderStatus] = useState<keyof typeof orderStatusToColors>(currentStatus)

    const handleUpdateOrderStatus = async (status: string) => {
        try{
            await updateOrderStatus(orderID, status)
        }catch(err) {
            console.error(err)
        }
    }

    return {
        dropDown, setDropDown, orderStatus, setOrderStatus, handleUpdateOrderStatus
    }
}