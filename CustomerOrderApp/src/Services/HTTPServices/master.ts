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
    }
}

export const getTableStatus = async (): Promise<AxiosResponse> => {
    return apiClient.get('/MasterRead/GetAllServingTableStatus');
}
    