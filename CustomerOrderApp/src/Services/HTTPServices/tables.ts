import { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { statusToColors } from "../../Assets/Constants/TableStatusColors";

type Status = keyof typeof statusToColors

export type TableDTO = {
    id:string;
	floor: string;
	siting: number;  
	curr_status: Status;
	branchID: string
}

export const getAllTablesAPI = async (): Promise<AxiosResponse<TableDTO[]> > => {
    return apiClient.get('/tables/getAllTables');
}