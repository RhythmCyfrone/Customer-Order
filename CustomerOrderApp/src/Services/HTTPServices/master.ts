import { apiClient } from "./api";
import { AxiosResponse } from "axios";
import type { 
    getAllMenuItemsResponseDTO,
    getAllDietsResponseDTO,
    getAllCuisinesResponseDTO,
    getAllMealCoursesResponseDTO
} from "../../Models/HTTPServices/ResponseDTO";

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
    },
    getAllDiets: {
        endpoint: '/MasterRead/GetAllDiets',
        data: 'diets'
    },
    getAllCuisines: {
        endpoint: '/MasterRead/GetAllCuisines',
        data: 'cuisines'
    },
    getAllMealCourses: {
        endpoint: '/MasterRead/GetAllMealCourses',
        data: 'mealCourses'
    }
}

export const getTableStatus = async (): Promise<AxiosResponse> => {
    return apiClient.get('/MasterRead/GetAllServingTableStatus');
}

export const getAllMenuItems = async (): Promise<AxiosResponse<getAllMenuItemsResponseDTO>> => {
    return apiClient.get('/MasterItem/GetAllMenuItems');
}

export const getAllDiets = async (): Promise<AxiosResponse<getAllDietsResponseDTO>> => {
    return apiClient.get('/MasterRead/GetAllDiets');
}

export const getAllCuisines = async (): Promise<AxiosResponse<getAllCuisinesResponseDTO>> => {
    return apiClient.get('/MasterRead/GetAllCuisines');
}

export const getAllMealCourses = async (): Promise<AxiosResponse<getAllMealCoursesResponseDTO>> => {
    return apiClient.get('/MasterRead/GetAllMealCourses');
}
    