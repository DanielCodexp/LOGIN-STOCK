import { Router } from "express";
import AuthController from "../controller/AuthController";
import { ProductsController } from './../controller/Products.Controller';



const router = Router();

//products
router.get('/products', ProductsController.getAll)

//CreateProduct

router.post('/products', ProductsController.new)

export default router;
