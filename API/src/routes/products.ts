import { Router } from "express";
import AuthController from "../controller/AuthController";



const router = Router();

//products
router.get('/products', AuthController.login)

export default router;
