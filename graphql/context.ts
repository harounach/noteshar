import { verifyToken } from "../lib/authUtils";

export type Context = {
  authUserId: string;
};

/* @ts-ignore */
export async function createContext({ req }): Promise<Context> {
  let id = "";
  try {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      return {
        authUserId: id,
      };
    }

    let token = authorization.split(" ")[1];

    const tokenPayload = verifyToken(token);

    id = typeof tokenPayload === "object" ? tokenPayload.id : "";

    return {
      authUserId: id,
    };
  } catch (err) {
    console.error(err);
    return {
      authUserId: id,
    };
  }
}
