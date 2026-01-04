import { Cart } from "../model/cart.model";

export const addToCartService = async (userId: string, bookId: string, quantity: number = 1) => {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        // Create new cart if user doesn't have one
        cart = new Cart({
            userId,
            items: [{ bookId, quantity }]
        });
    } else {
        // Check if book already exists in cart
        const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

        if (itemIndex > -1) {
            // Increase quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // Add new book
            cart.items.push({ bookId, quantity });
        }
    }

    await cart.save();
    return cart;
};
