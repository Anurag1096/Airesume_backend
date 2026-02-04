// src/app.ts
import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.get("/",(_req,res)=>{
    res.send("home page")
})

export default app;
