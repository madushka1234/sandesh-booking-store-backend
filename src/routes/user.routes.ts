import express from "express";
import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/user.cotroller";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/update/:email", updateUser);
router.delete("/delete/:email", deleteUser);

export default router;
