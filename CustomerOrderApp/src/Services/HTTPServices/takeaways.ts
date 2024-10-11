import { createTakeAwayOrderDTO } from "../../Models/HTTPServices/RequestDTO";
import { apiClient } from "./api";
import { AxiosResponse } from 'axios';

export const createTakeAwayOrder = async (customerDetails: createTakeAwayOrderDTO): Promise<AxiosResponse<any>> => {
    return apiClient.post('/takeaways/createTakeAwayOrder', customerDetails);
}

export const getAllTakeAwayOrders = async (): Promise<AxiosResponse<any>> => {
    return apiClient.get('/takeaways/getAllTakeAwayOrders');
}

export const getTakeAwayOrderById = async (orderId: string): Promise<AxiosResponse<any>> => {
    return apiClient.get(`/takeaways/getTakeAwayOrdersById/${orderId}`);
}