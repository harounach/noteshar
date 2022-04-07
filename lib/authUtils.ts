import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { IAuthUser } from "../interfaces/IUser";

const JWT_SECRET = process.env.JWT_SECRET as string;

const AUTH_USER_KEY = "auth_user_key";

export const generateToken = (id: string, username: string, email: string) => {
  return jwt.sign(
    {
      id,
      username,
      email,
    },
    JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const generateHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const saveAuthUser = (user: IAuthUser) => {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};

export const loadAuthUser = (): IAuthUser => {
  let user: IAuthUser = {
    id: "",
    username: "",
    email: "",
    token: "",
  };

  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userStr = localStorage.getItem(AUTH_USER_KEY) as string;
    if (userStr) {
      user = JSON.parse(userStr) as IAuthUser;
    }
  }

  return user;
};

export const clearAuthUser = () => {
  localStorage.removeItem(AUTH_USER_KEY);
};

export const isLoggedIn = () => {
  const user = loadAuthUser();
  return user.token !== "";
};
