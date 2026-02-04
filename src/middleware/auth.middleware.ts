// middlewares/auth.middleware.js
import { verifyToken } from "../utils/token.ts";

export function authMiddleware(req, res, next) {
  try {
    req.user = verifyToken(req);
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
}
