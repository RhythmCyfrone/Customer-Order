import { orderStatusToColors } from "../Assets/Constants/OrderStatusColors"

export type OrdersType = {
    "id": number,
    "CustomerID": number,
    "TableID": string,
    "Order Taken By": string,
    "Order Status": keyof typeof orderStatusToColors,
}

export type CustomersType = {
    "id": number,
    "Name": string,
    "Email": string,
    "Phone": number,
}