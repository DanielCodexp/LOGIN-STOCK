import { Router } from 'express';
import auth from './auth';
import user from './user';
import Products from './products'

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/products', Products)

export default routes;
