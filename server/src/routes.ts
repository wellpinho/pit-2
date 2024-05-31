import { Router, Request, Response } from 'express';
import { userRoutes } from './modules/user/user.routes';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' });
})
routes.use(userRoutes);

export { routes };