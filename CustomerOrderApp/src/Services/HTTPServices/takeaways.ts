import { createTakeAwayOrderDTO } from "../../Models/HTTPServices/RequestDTO";
import { TakeAwayDTO } from "../../Models/HTTPServices/ResponseDTO";
import { apiClient } from "./api";
import { AxiosResponse } from 'axios';

export const createTakeAwayOrder = async (customerDetails: createTakeAwayOrderDTO): Promise<AxiosResponse<any>> => {
    return apiClient.post('/takeaways/createTakeAwayOrder', customerDetails);
}

export const getAllTakeAwayOrders = async (): Promise<AxiosResponse<TakeAwayDTO[]>> => {
    return apiClient.get('/takeaways/getAllTakeAwayOrders');
}

export const getTakeAwayOrderById = async (orderId: string): Promise<AxiosResponse<any>> => {
    return apiClient.get(`/takeaways/getTakeAwayOrdersById/${orderId}`);
}