/*
import { Request, Response } from "express";
import { addToCartService } from "../service/cart.service";

export const addToCartController = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id;
        const { bookId, quantity } = req.body;

        if (!bookId) return res.status(400).json({ message: "Book ID is required" });

        const cart = await addToCartService(userId, bookId, quantity || 1);
        res.status(200).json({ message: "Book added to cart", cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add to cart", error: err });
    }
};
*/
