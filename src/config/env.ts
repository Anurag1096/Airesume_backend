import { z } from "zod";

export const env = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  JWT_SECRET: z.string().min(32),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_CONN_TIMEOUT:z.string(),
  DB_MAX_POOL:z.string(),
  DB_IDLE_TIMEOUT:z.string(),
}).parse(process.env);
