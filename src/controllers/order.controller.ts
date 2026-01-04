import { Request, Response } from "express";
import * as OrderService from "../service/order.service";
import type { CreateOrderDTO } from "../dto/order.dto";

export const placeOrder = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const orderData: CreateOrderDTO = req.body;

        const order = await OrderService.createOrder(orderData);

        const emailSent = await OrderService.sendEmail(orderData);

        if (!emailSent) {
            console.error(" Email sending failed");
            return res.status(500).json({ success: false, message: "Order saved but email sending failed" });
        }

        res.status(201).json({ success: true, message: "Order placed and email sent", order });
    } catch (err) {
        console.error("Error placing order:", err);
        res.status(500).json({ success: false, message: "Order creation failed" });
    }
};


export const getOrders = async (_req: Request, res: Response) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.json({ success: true, orders });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch orders" });
    }
};
