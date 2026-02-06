import { Pool } from "pg";
import { env } from "./env";

export const pool =new Pool({
    host:env.DB_HOST,
    port:Number(env.DB_PORT),
    user:env.DB_USER,
    password:env.DB_PASSWORD,
    database:env.DB_NAME,
    ssl:env.NODE_ENV === "production"?{rejectUnauthorized:false}:false,
    max:10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000

})

pool.on("connect",()=>{
    console.log("connected to the postgress db")
})

pool.on("error",(err)=>{
    console.log("Connection error",err)
    process.exit(1)
})