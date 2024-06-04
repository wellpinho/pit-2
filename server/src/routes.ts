import { Router, Request, Response } from 'express';
import { userRoutes } from './modules/user/user.routes';
import { productRoutes } from './modules/product/product.routes';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' });
})
routes.use(userRoutes);
routes.use(productRoutes);

export { routes };