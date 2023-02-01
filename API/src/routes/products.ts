import { Router } from "express";
import { ProductsController } from './../controller/Products.Controller';



const router = Router();

//products all products
router.get('/', ProductsController.getAll);

//CreateProduct

router.post('/', ProductsController.new);

export default router;
