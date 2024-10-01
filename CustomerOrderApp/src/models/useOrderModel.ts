import { getOrderByTableIdAPI, getStatusByIdAPI, updateOrderStatusAPI, OrderDTO } from "../Services/HTTPServices/orders";
import { orderStatusToColors } from "../Assets/Constants/OrderStatusColors";

const useOrderModel = () => {
    type getOrderByTableIdArguements = {
        setOrder: React.Dispatch<React.SetStateAction<OrderDTO | null>>;
        tableId: string
    }

    type getStatusByIdArguements = {
        setOrderStatus: React.Dispatch<React.SetStateAction<keyof typeof orderStatusToColors>>;
        orderStatusId: number;
    }

    const getOrderByTableId = async ({setOrder, tableId}: getOrderByTableIdArguements) => {
        try {
            const data = await getOrderByTableIdAPI(tableId)
            if(data.status == 200) {
                setOrder(data.data)
            }else {
                throw new Error('Error fetching tables list')
            }
            return null
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const getStatusById = async ({setOrderStatus,  orderStatusId}: getStatusByIdArguements) => {
        try {
            const data = await getStatusByIdAPI(orderStatusId)
            if(data.status == 200) {
                setOrderStatus(data.data.statusName as keyof typeof orderStatusToColors)
            }else {
                throw new Error('Error fetching tables list')
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const updateOrderStatus = async (orderId: string, orderStatusId: number) => {
        try {
            const res = await updateOrderStatusAPI(orderId, orderStatusId)
            if(res.status !== 200) {
                throw new Error('Error fetching tables list')
            }
        } catch (error) {   
            console.log(error)
            return error
        }
    }

    return { getOrderByTableId, getStatusById, updateOrderStatus }
}

export default useOrderModel