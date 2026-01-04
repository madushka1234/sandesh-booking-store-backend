import { Request, Response } from "express";
import * as bookService from "../service/book.service";


export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
}

export const createBook = async (req: Request, res: Response) => {

    try {
        console.log(req.body)
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}


export const updateBook = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const updated = await bookService.updateBookByName(name, req.body);
        if (!updated) return res.status(404).json({ message: "Book not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}


export const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        console.log(id)
        const deleted = await bookService.deleteBookById(id);
        if (!deleted) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted" });
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}
