// utils/token.js
import jwt from "jsonwebtoken"
import { jwtConfig } from "../config/jwt.ts";

export function signToken(payload) {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.accessTokenExpiry,
  });
}

export function verifyToken(req) {
  const token = req.headers.authorization?.split(" ")[1];
  return jwt.verify(token, jwtConfig.secret);
}
