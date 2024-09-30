import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { statusToColors } from "../../Assets/Constants/TableStatusColors";

type Status = keyof typeof statusToColors

export type OrderDTO = {
    orderId: string;
	tableId: string;
	customerId: string;
    customerName: string;
    orderTakerId: string;
    orderTakerName: string;
	orderStatusId: number;
	billId: number;
}

export type StatusDTO = {
    statusId: number;
    statusName: Status;
    statusColor: string;

}

export const getOrderByTableIdAPI = async (tableId: string): Promise<AxiosResponse<OrderDTO> > => {
    return apiClient.get(`/orders/getOrderByTableId/${tableId}`);
}

export const getStatusByIdAPI = async (orderStatusId: number): Promise<AxiosResponse<StatusDTO>> => {
    return apiClient.get(`/orders/getStatusById/${orderStatusId}`);
}

export const updateOrderStatusAPI = async (orderId: string, orderStatusId: number): Promise<AxiosResponse> => {
    return apiClient.put(`/orders/updateOrderStatus/${orderId}/${orderStatusId}`);
}