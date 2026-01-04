import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({error: 'auth token is not present in ' + 'request header'
        });
        return;
    }

    jwt.verify(token,JWT_SECRET,(error,user)=>{
        if (error) {
            res.status(401).json({error: 'Invalid or expired auth token provide'}
            );
            return;
        }
        (req as Request & {user?:any}).user = user;
        next();
    });
};
export const authorizeRole  = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as Request & {user?:any}).user;
        if (!user || !roles.includes(user.role)) {
            res.status(403).json({error: 'Access denied! User does not have the required role'});
            return;
        }
        next();
    }
}