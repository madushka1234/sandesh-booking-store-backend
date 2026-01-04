import { Request, Response } from "express";
import * as userService from "../service/user.service";

// GET all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ message: error.message });
    }
};

// CREATE user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};

// UPDATE user by email
export const updateUser = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const updatedUser = await userService.updateUserByEmail(email, req.body);
        res.json(updatedUser);
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};

// DELETE user by email
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        await userService.deleteUserByEmail(email);
        res.json({ message: "User deleted" });
    } catch (err) {
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
};
