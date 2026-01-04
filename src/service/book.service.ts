import { Book } from "../model/book.model";

export const getAllBooks = async () => {
    return await Book.find();
}

export const createBook = async (bookData: any) => {
    return await Book.create(bookData);
}


export const updateBookByName = async (name: string, bookData: any) => {
    return await Book.findOneAndUpdate({ name }, bookData, { new: true });
}

export const deleteBookByName = async (name: string) => {
    return await Book.findOneAndDelete({ name });
}


export const updateBookById = async (id: string, bookData: any) => {
    return await Book.findByIdAndUpdate(id, bookData, { new: true });
}


export const deleteBookById = async (id: string) => {
    return await Book.findByIdAndDelete(id);
}

export const getBookById = async (id: string) => {
    return await Book.findById(id);
}

export const getBookByName = async (name: string) => {
    return await Book.findOne({ name });
}
