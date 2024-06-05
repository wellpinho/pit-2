import { Router } from "express";
import { createProductController, listProductController } from "./productController";

const productRoutes = Router();

productRoutes.get("/products", listProductController);
productRoutes.post("/products", createProductController);

export { productRoutes };