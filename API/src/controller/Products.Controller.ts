import { Response,  Request } from "express";
import { getRepository } from "typeorm";
import { tbproductos } from "../entity/Products";


export class ProductsController {

static getAll= async (req: Request, res: Response) => {
  const userRepository = getRepository( tbproductos);
  let products = await userRepository.find();


if(products.length>0) {
  res.send(products);
} else {
  res.status(404).json({ message: 'Not result' });
}

}
}

export default ProductsController;
