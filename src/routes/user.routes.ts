import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";
const router = Router();

router.get("/",(_req,res)=>{
    res.send("This is the home page")
})
router.use(authMiddleware)
router.get("/home",roleMiddleware("admin"),(_req,res)=>{
    res.send("Hii this is inside route's ")
})



export default router;
