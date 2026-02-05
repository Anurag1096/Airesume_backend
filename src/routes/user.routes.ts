import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
const router = Router();


router.get("/home",authMiddleware,(_req,res)=>{
    res.send("Hii this is inside route's ")
})
router.get("/",authMiddleware,(_req,res)=>{
    res.send("This is the home page")
})
export default router;
