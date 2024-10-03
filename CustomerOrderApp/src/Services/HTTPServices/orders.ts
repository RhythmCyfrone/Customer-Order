import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { OrderDTO, StatusDTO } from "../../Models/HTTPServices/ResponseDTO";


export const getOrderByTableIdAPI = async (tableId: string): Promise<AxiosResponse<OrderDTO> > => {
    return apiClient.get(`/orders/getOrderByTableId/${tableId}`);
}

export const getStatusByIdAPI = async (orderStatusId: number): Promise<AxiosResponse<StatusDTO>> => {
    return apiClient.get(`/orders/getStatusById/${orderStatusId}`);
}

export const updateOrderStatusAPI = async (orderId: string, orderStatusId: number): Promise<AxiosResponse> => {
    return apiClient.put(`/orders/updateOrderStatus/${orderId}/${orderStatusId}`);
}