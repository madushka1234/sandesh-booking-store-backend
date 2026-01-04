import mongoose, { Schema, Document } from "mongoose";

export interface BookData extends Document {
    title: string;
    author: string;
    description?: string;
    photo?: string;       // store photo filename or URL
    category?: string;    // new category field
    price?: number;       // new price field
}

const BookSchema: Schema = new Schema({
    title: { type: String },
    author: { type: String  },
    description: { type: String },
    photo: { type: String },
    category: { type: String },    // optional category
    price: { type: Number },       // optional price
});

export const Book = mongoose.model<BookData>("Book", BookSchema);
