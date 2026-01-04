import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    items: [
        {
            bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
            title: String,
            price: Number,
            quantity: Number,
        },
    ],
    total: { type: Number, required: true },

});

export const Order = mongoose.model("Order", OrderSchema);
