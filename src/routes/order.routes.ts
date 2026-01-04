import express from "express";
import { placeOrder, getOrders } from "../controllers/order.controller";
import {authMiddleware, authorizeRole} from "../middleware/auth.middleware";

const router = express.Router();

router.post("/checkout", placeOrder);
router.get("/all",
    authMiddleware,
    authorizeRole("admin"),
    getOrders);

export default router;
