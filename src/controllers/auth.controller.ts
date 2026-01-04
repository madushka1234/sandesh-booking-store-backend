import { Request, Response } from "express";
import * as authService from "../service/auth.service";

export const register = async (req: Request, res: Response) => {
    try {
        const user = req.body
        console.log(user)
         await authService.registerUser(user);
        console.log(user);
        console.log('controller');
        res.status(201).json(user);
    } catch (err : any) {
        res.status(401).json({ message: err.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const user = await authService.logUser(req.body);
        console.log(user);
        res.status(200).json(user);
    } catch (err: any) {
    res.status(401).json({ message: err.message });
    }

};