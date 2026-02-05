// utils/token.js
import jwt from "jsonwebtoken"
import { jwtConfig } from "../config/jwt.ts";

export function signToken(payload) {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.accessTokenExpiry,
  });
}

export function verifyToken(token,jwtSecret) {
  
  return jwt.verify(token, jwtSecret);
}
