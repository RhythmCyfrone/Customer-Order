import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { TableDTO } from "../../Models/HTTPServices/ResponseDTO";

export const getAllTables = async (): Promise<AxiosResponse<TableDTO[]> > => {
    return apiClient.get('/tables/getAllTables');
}