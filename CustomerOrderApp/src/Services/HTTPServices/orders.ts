import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { getOrderByTableIdResponseDTO, getStatusByIdResponseDTO } from "../../Models/HTTPServices/ResponseDTO";
import { getOrderByTableIdDTO, getStatusByIdDTO, updateOrderStatusDTO } from "../../Models/HTTPServices/RequestDTO";


export const getOrderByTableId = async ({tableId}: getOrderByTableIdDTO): Promise<AxiosResponse<getOrderByTableIdResponseDTO> > => {
    return apiClient.get(`/orders/getOrderByTableId/${tableId}`);
}

export const getStatusById = async ({orderStatusId}: getStatusByIdDTO): Promise<AxiosResponse<getStatusByIdResponseDTO>> => {
    return apiClient.get(`/orders/getStatusById/${orderStatusId}`);
}

export const updateOrderStatus = async ({orderId, orderStatusId}: updateOrderStatusDTO): Promise<AxiosResponse> => {
    return apiClient.put(`/orders/updateOrderStatus/${orderId}/${orderStatusId}`);
}