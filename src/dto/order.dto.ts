export interface OrderItemDTO {
    bookId: string;
    title: string;
    price: number;
    quantity: number;
}

export interface CreateOrderDTO {
    fullName: string;
    email: string;
    phone: string;
    shippingAddress: string;
    items: OrderItemDTO[];
    total: number;
}
