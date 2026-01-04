import {Router} from "express";
import {login,/*login,*/ register,} from "../controllers/auth.controller";

const authRouter: Router = Router()
console.log("awa router ")
authRouter.post("/register", register)

authRouter.post("/login", login);


export default authRouter;