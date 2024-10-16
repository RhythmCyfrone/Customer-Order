export type getOrderByTableIdDTO = {
    tableId: number;
}

export type getStatusByIdDTO = {
    orderStatusId: number
}

export type updateOrderStatusDTO = {
    orderId: string;
    orderStatusId: number
}

export type createTakeAwayOrderDTO = {
    customerName: string;
    customerPhone: string | null;
}