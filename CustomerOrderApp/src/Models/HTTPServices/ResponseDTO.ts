import { statusToColors } from "../../Constants/TableStatusColors";

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
export type getOrderByTableIdResponseDTO = OrderDTO

export type StatusDTO = {
    statusId: number;
    statusName: Status;
    statusColor: string;

}
export type getStatusByIdResponseDTO = StatusDTO

export type TableDTO = {
    tableId:number;
    tableLocaleName: string;
    tableName: string;
    tableSeatingAssignmentId: number;
    tableHexCode: string;
    tableMaxPax: number;
    tableStatusId: number;
    tableStatusName: Status;
    tableLocaleStatusName: string;
}
export type getAllTablesResponseDTO = {
    countOfActualCapacity: number;
    avgTableOccupancy: number;
    avgTableTurnOverTime: number;
    servingTableDetails: TableDTO[]
}

export type TakeAwayDTO = {
    orderId: string;
	customerId: string;
    customerName: string;
    customerPhone: string;
	orderStatusId: number;
    curr_status: Status;
	billId: number;
    branchID: string;
}

export type MenutItemDTO = {
    menuItemId: number,
    menuItemName: string,
    menuItemDescription: string,
    menuItemLocaleDescription: null,
    uomId: number,
    finalQty: number,
    cuisineId: number,
    dietId: number,
    courceId: number,
    noOfItems: number,
    spiceLevelRanking: number,
    allergensInfo: string,
    allergensInfoLocale: string,
    oneLinerMenuDescription: string,
    oneLinerMenuDescriptionLocale: string,
    sellingPriceExcludTax: number,
    isVisible: boolean,
    visibilityTimePeriodStructureInJson: string,
    recipeInstructions: string,
    prepTimeInMinutes: number,
    cookTimeInMinutes: number,
    targetCostInPerc: number,
    actualCost: number,
    grossProfit: number,
    profitMarginInPerc: number,
    nutritionalInfo: string,
    imgLink: string
}

export type DietDTO = {
    dietId: number,
    dietName: string,
    dietLocaleName: string, 
}
export type getAllDietsResponseDTO = DietDTO[]

export type CuisineDTO = {
    cuisineId: number,
    cuisineName: string,
    cuisineLocaleName: string, 
}
export type getAllCuisinesResponseDTO = CuisineDTO[]

export type MealCourseDTO = {
    mealCourseId: number,
    mealCourseName: string,
    mealCourseLocaleName: string, 
}
export type getAllMealCoursesResponseDTO = MealCourseDTO[]


export type getAllMenuItemsResponseDTO = MenutItemDTO[]

export type createTakeAwayOrderResponseDTO = any

export type getAllTakeAwayOrdersResponseDTO = TakeAwayDTO[]

export type getTakeAwayOrderByIdResponseDTO = any