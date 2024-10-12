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

export type StatusDTO = {
    statusId: number;
    statusName: Status;
    statusColor: string;

}

export type TableDTO = {
    id:string;
	floor: string;
	siting: number;  
	curr_status: Status;
	branchID: string
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