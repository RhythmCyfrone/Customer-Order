import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { OrdersType } from "./types";

export const getOrders = async (): Promise<AxiosResponse<OrdersType[]>> => {
    return apiClient.get('/Orders');
};

export const getOrdersByTable = async (tableID: string): Promise<AxiosResponse<OrdersType[]>> => {
    return apiClient.get(`/Orders?TableID=${tableID}`);
};

export const updateOrderStatus = async (orderId: number, status: string): Promise<void> => {
    try {
      await apiClient.patch(`/Orders/${orderId}`, {
        "Order Status": status,
      });
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  };