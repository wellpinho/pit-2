import { Request, Response } from 'express'
import { createProductService, listProductsService } from "./productService";

const listProductController = async (req: Request, res: Response) => {
    const products = await listProductsService();
    
    return res.json(products);
}

const createProductController = async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const product = await createProductService(data)

    return res.json(product)
}

export { createProductController, listProductController }