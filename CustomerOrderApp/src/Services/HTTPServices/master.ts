import { apiClient } from "./api";
import { AxiosResponse } from "axios";

type MasterEndpointsEntry = {
    endpoint: string;
    data: string;
}
type MasterEndpointsType = {
    [key: string]: MasterEndpointsEntry;
}

export const MasterEndpoints: MasterEndpointsType = {
    getTableStatus: {
        endpoint: '/MasterRead/GetAllServingTableStatus',
        data: 'tableStatus'
    },
    getAllMenuItems: {
        endpoint: '/MasterItem/GetAllMenuItems',
        data: 'menuItems'
    }
}

export const getTableStatus = async (): Promise<AxiosResponse> => {
    return apiClient.get('/MasterRead/GetAllServingTableStatus');
}

export const getAllMenuItems = async (): Promise<AxiosResponse> => {
    return apiClient.get('/MasterItem/GetAllMenuItems');
}
    