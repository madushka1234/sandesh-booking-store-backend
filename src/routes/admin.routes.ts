import express from "express";

import { authMiddleware, authorizeRole } from "../middleware/auth.middleware";
import {getAllUsersController} from "../controllers/admin.controller";

const router = express.Router();

router.get(
    "/users",
    authMiddleware,
    authorizeRole("admin"),
    getAllUsersController
);

/*
router.delete(
    "/users/:id",
    authMiddleware,
    authorizeRole("admin"),
    deleteUserController
);
*/



export default router;