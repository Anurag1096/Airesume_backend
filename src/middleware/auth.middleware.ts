// middlewares/auth.middleware.js
import { verifyToken } from "../utils/token.ts";
import {Request,Response,NextFunction} from 'express'



export interface AuthRequest extends Request{
  user?:{
    id:string;
    role:string;
  }
}
export function authMiddleware(req:Request, res:Response, next:NextFunction) {
 
 const token = req.headers.authorization?.split(" ")[1];
 if(!token){
  return res.send(401).json({message:"No token provided"})

 }
  try {
    const clearence = verifyToken(token,process.env.JWT_SECRET) as any;
    
    req.user={
      id:clearence.id,
      role:clearence.role,
    }
    
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}
