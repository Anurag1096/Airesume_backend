// services/auth.service.js
import { signToken } from "../utils/token.ts";

export async function login({ email, password }) {
  // 1. Validate user (DB, hash compare, etc.)
  const user = { id: 1, email }; // mock

  // 2. Create JWT
  return signToken({ userId: user.id });
}
