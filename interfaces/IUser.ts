/**
 * User interface used by mongoose model
 */
export interface IUser {
  id: String;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * AuthUser interface used by GraphQL mutation operations
 */
export interface IAuthUser {
  id: string;
  username: string;
  email: string;
  token: string;
}
