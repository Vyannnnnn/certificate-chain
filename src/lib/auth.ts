import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt.types";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
