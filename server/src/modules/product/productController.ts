import { Request, Response } from 'express'
import { createProductService } from "./productService";

const createProductController = async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const product = await createProductService(data)

    return res.json(product)
}

export { createProductController }