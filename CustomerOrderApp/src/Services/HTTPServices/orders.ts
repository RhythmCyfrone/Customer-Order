import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { OrderDTO, StatusDTO } from "../../Models/HTTPServices/ResponseDTO";
import { getOrderByTableIdDTO, getStatusByIdDTO, updateOrderStatusDTO } from "../../Models/HTTPServices/RequestDTO";


export const getOrderByTableId = async ({tableId}: getOrderByTableIdDTO): Promise<AxiosResponse<OrderDTO> > => {
    return apiClient.get(`/orders/getOrderByTableId/${tableId}`);
}

export const getStatusById = async ({orderStatusId}: getStatusByIdDTO): Promise<AxiosResponse<StatusDTO>> => {
    return apiClient.get(`/orders/getStatusById/${orderStatusId}`);
}

export const updateOrderStatus = async ({orderId, orderStatusId}: updateOrderStatusDTO): Promise<AxiosResponse> => {
    return apiClient.put(`/orders/updateOrderStatus/${orderId}/${orderStatusId}`);
}