import { User } from "../model/user.model";

export const getAllUsers = async () => {
    return await User.find();
};

export const createUser = async (userData: any) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new Error("User already exists");
    return await User.create(userData);
};

export const updateUserByEmail = async (email: string, userData: any) => {
    return await User.findOneAndUpdate({ email }, userData, { new: true });
};

export const deleteUserByEmail = async (email: string) => {
    return await User.findOneAndDelete({ email });
};
