import { IUser } from "./IUser";

/**
 * Note interface used by mongoose model
 */
export interface INote {
  id: String;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  userId: IUser;
}

/**
 * Note interface used by GraphQL
 */
export interface IGraphNote {
  id: String;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
