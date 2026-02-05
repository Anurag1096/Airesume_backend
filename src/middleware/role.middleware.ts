import { Response,NextFunction, } from "express"
import { AuthRequest } from "./auth.middleware"
export default function roleMiddleware(...allowedRoles:string[]){
   return (_req:AuthRequest,res:Response,next:NextFunction)=>{
    if(!_req.user){
        return res.status(401).json({"message":"unautheticated"})
    }
    if(!allowedRoles.includes(_req.user.role)){
        return res.status(403).json({
            "message":"You do not have permission to access this resource",
        })
    }
    next()
   }
}