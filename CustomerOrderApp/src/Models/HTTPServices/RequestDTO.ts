export type getOrderByTableIdDTO = {
    tableId: string;
}

export type getStatusByIdDTO = {
    orderStatusId: number
}

export type updateOrderStatusDTO = {
    orderId: string;
    orderStatusId: number
}