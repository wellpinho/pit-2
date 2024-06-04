import { axiosApi } from "./api";

export const listShoppings = async () => {
    const response = await axiosApi.get("/shoppings");
    return response.data;
};

export const shoppingDetail = async (slug: string) => {
    const response = await axiosApi.get(`/shoppings/${slug}`);
    return response.data;
};

export const storeDetail = async (slug: string) => {
    const response = await axiosApi.get(`/company/${slug}`);
    return response.data;
};