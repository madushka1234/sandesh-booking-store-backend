import dotenv from "dotenv";
import {LoginUserDto, RegisterUserDto} from "../dto/user.dto";
import {User} from "../model/user.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;
const refreshTokens = new Set<string>() ;
export const registerUser = async (data: RegisterUserDto) => {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hashedPassword });
    return user;
}


export const logUser = async (data : LoginUserDto) => {
    console.log("Login Request Data:", data);

    const user = await User.findOne({ email: data.email });
    if (!user) {
        console.log("User not found");
        console.log(data.email)
        console.log(user ,"email");

        throw new Error("Invalid credentials");
    }

    console.log("Found user:", user.email);

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    console.log("Password valid?", isPasswordValid);

    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign({
        id: user.id,
        username: user.name,
        role: user.role
    }, JWT_SECRET, {expiresIn: '1d'})
    const refreshToken = jwt.sign({
        username: user.name
    }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
    return {
        accessToken,
        refreshToken
    };

}

