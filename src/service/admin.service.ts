import {User} from "../model/user.model";

export const getAllUsersService = async () => {
    return await User.find().select("-password");
};

/*export const deleteUserService = async (id: string) => {
    return await User.findByIdAndDelete(id);
};*/
