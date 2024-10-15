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
    tableId:string;
    tableName: string;
    tableMapperId: number;
    tableMaxPax: number;
    dateTimeSinceLastStatusChange: string;
    tableTrackingStatusId: number;
    tableTrackingStatusName: Status;
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
export type createTakeAwayOrderResponseDTO = any

export type getAllTakeAwayOrdersResponseDTO = TakeAwayDTO[]

export type getTakeAwayOrderByIdResponseDTO = any