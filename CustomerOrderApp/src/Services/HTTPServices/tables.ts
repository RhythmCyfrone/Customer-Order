import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { getAllTablesResponseDTO } from "../../Models/HTTPServices/ResponseDTO";

export const getAllTables = async (): Promise<AxiosResponse<getAllTablesResponseDTO> > => {
    return apiClient.get('/PointOfSale/GetAllPosTables');
}