import { Router } from "express";
import { ProductsController } from './../controller/Products.Controller';



const router = Router();

//products all products
router.get('/products', ProductsController.getAll);

//CreateProduct

router.post('/products', ProductsController.new);

export default router;
