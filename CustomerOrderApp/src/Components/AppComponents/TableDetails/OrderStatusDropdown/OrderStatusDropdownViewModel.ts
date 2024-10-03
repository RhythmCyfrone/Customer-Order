import { useState, useEffect } from "react"
import { orderStatusToColors } from "../../../../Assets/Constants/OrderStatusColors"
import { getStatusByIdAPI, updateOrderStatusAPI } from "../../../../Services/HTTPServices/orders"

export type OrderStatusDropdownProps = {
    orderID: string;
    currentStatus: number;
}

export const useOrderStatusDropdown = ({orderID, currentStatus}: OrderStatusDropdownProps) => {
    const [dropDown, setDropDown] = useState(false)
    const [orderStatus, setOrderStatus] = useState<keyof typeof orderStatusToColors>('Ordered')

    const handleUpdateOrderStatus = async (orderStatusId: number) => {
        try {
            const res = await updateOrderStatusAPI(orderID, orderStatusId)
            if(res.status !== 200) {
                throw new Error('Error fetching tables list')
            }
        } catch (error) {   
            console.log(error)
        }
    }

    useEffect(() => {
        const getStatus = async () => {
            try {
                const data = await getStatusByIdAPI(currentStatus)
                if(data.status == 200) {
                    setOrderStatus(data.data.statusName as keyof typeof orderStatusToColors)
                }else {
                    throw new Error('Error fetching tables list')
                }
            } catch (error) {
                console.log(error)
            }
        }
        getStatus()
    }, [])

    return {
        dropDown, setDropDown, orderStatus, setOrderStatus, handleUpdateOrderStatus
    }
}