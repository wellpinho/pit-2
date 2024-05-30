import { api } from "./api";

export const getUser = async (email: string) => {
    const response = await api.get("/users");
    return response.data;
};