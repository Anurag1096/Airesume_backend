import { pool } from "../config/db";


export const initDb=async ()=>{
    await pool.query("SELECT 1")
    console.log("Database reddy for query")
}