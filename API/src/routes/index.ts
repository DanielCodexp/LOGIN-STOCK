import { Router } from 'express';
import auth from './auth';
import user from './user';
import products from './products';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/products', products)

export default routes;
