import express from "express";


import {deleteBook, updateBook ,getAllBooks,createBook} from "../controllers/books.controller";
import {authMiddleware, authorizeRole} from "../middleware/auth.middleware";

const router = express.Router();


router.get("/",
    getAllBooks);

router.post("/add",
    authMiddleware,
    authorizeRole("admin"),
    createBook);

router.put("/update/:name",updateBook);

router.delete("/delete/:id",
    authMiddleware,
    authorizeRole("admin"),
    deleteBook);


export default router;
