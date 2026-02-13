import { pool } from "../config/db";


export const initDb=async ()=>{
    
    try{

    await pool.query(`
    CREATE SCHEMA IF NOT EXISTS auth;
  `);
        await pool.query(`
            CREATE TABLE IF NOT EXISTS  auth.users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            `);
        
        // Add more create table queries as needed. 

    console.log("All  table quries have been executed");
    }catch(error){
    console.error("db init failed")
    throw error
    }

}