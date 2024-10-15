import { createTakeAwayOrderDTO } from "../../Models/HTTPServices/RequestDTO";
import { createTakeAwayOrderResponseDTO, getAllTakeAwayOrdersResponseDTO, getTakeAwayOrderByIdResponseDTO } from "../../Models/HTTPServices/ResponseDTO";
import { apiClient } from "./api";
import { AxiosResponse } from 'axios';

export const createTakeAwayOrder = async (customerDetails: createTakeAwayOrderDTO): Promise<AxiosResponse<createTakeAwayOrderResponseDTO>> => {
    return apiClient.post('/takeaways/createTakeAwayOrder', customerDetails);
}

export const getAllTakeAwayOrders = async (): Promise<AxiosResponse<getAllTakeAwayOrdersResponseDTO>> => {
    return apiClient.get('/takeaways/getAllTakeAwayOrders');
}

export const getTakeAwayOrderById = async (orderId: string): Promise<AxiosResponse<getTakeAwayOrderByIdResponseDTO>> => {
    return apiClient.get(`/takeaways/getTakeAwayOrdersById/${orderId}`);
}