import { Router } from "express";
import { createProductController } from "./productController";

const productRoutes = Router();

productRoutes.post("/products", createProductController);

export { productRoutes };