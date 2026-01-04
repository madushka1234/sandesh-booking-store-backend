
import type { CreateOrderDTO } from "../dto/order.dto";
import {Order} from "../model/order.model";
import nodemailer from "nodemailer";

export const createOrder = async (orderData: CreateOrderDTO) => {
    const newOrder = new Order(orderData);
    return await newOrder.save();
};

export const getAllOrders = async () => {
    return await Order.find();
};
export const sendEmail = async (orderData: CreateOrderDTO): Promise<boolean> => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "madushkasenarathna06@gmail.com",
                pass: "doxa hehm drfx dlhr",
            },
        });

        const bookList = orderData.items
            .map((book, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${book.title}</td>
                  <td>${book.price} LKR</td>
                </tr>`)
            .join("");

        const total = (orderData.total ?? 0) + 350;

        const htmlContent = `
            <h2>Thank you for your order!</h2>
            <p>Here are your book order details:</p>
            <table border="1" cellpadding="8" cellspacing="0">
              <thead>
                <tr><th>#</th><th>Book Name</th><th>Price</th></tr>
              </thead>
              <tbody>${bookList}</tbody>
            </table>
            <h3>Total: ${total} LKR (including 350 LKR delivery charge)</h3>
            <p>Payment Method: <strong>Cash on Delivery</strong></p>
        `;

        await transporter.sendMail({
            from: "madushkasenarathna06@gmail.com",
            to: orderData.email,
            subject: "Your Book Order Invoice - COD",
            html: htmlContent,
        });

        console.log(" Email sent to:", orderData.email);
        return true;
    } catch (error) {
        console.error(" Failed to send email:", error);
        return false;
    }
};
