import User, { IUser } from './user.model';

export const createUserService = async (data: Partial<IUser>) => {
  const newUser = new User(data);
  return await newUser.save();
};

export const getAllUsersService = async () => {
  return await User.find();
};
