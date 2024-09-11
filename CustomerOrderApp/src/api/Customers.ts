import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { CustomersType } from "./types";

export const getCustomers = async (): Promise<AxiosResponse<CustomersType[]>> => {
    return apiClient.get('/Customers');
};

export const getCustomerByID = async (ID: number): Promise<AxiosResponse<CustomersType[]>> => {
    return apiClient.get(`/Customers?id=${ID}`);
};