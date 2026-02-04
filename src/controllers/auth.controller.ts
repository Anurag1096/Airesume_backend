import * as authService from "../services/auth.service"
import { Request,Response } from "express"

export async function login(_req:Request,res:Response){
    const { email, password}=_req.body
    const token= await authService.login({email, password})
    res.json({token})
}