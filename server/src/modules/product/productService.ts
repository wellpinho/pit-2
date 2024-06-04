import { IProduct } from "../../interface/Product";
import { prismaClient } from "../../prismaClient";

const createProductService = async (data: IProduct) => {
    try {
        const product = await prismaClient.product.create({
            data: {
                image: data.image, 
                title: data.title, 
                description: data.description, 
                price: data.price, 
                quantity: data.quantity
            },
        });
    
        return product;
    } catch (error) {
        return error;
    }
}

export { createProductService }