import { Request, Response } from "express";
import {
    createUserService,
    updateUserService,
} from "./userService";

const createUserController = async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const user = await createUserService(userData);

    return res.json(user);
};

// const listUsersController = async (req: Request, res: Response) => {
//     const users = await listUsersService();

//     return res.json(users);
// };

// const showUserController = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const users = await showUserService(id);

//     return res.json(users);
// };

const updateUserController = async (req: Request, res: Response) => {
    const { ...data } = req.body;
    const { id } = req.params;
    const user = await updateUserService({ ...data, id });

    return res.json(user);
};

// const deleteUserController = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const user = await deleteUserService({ id });

//     return res.json(user);
// };

// const createSessionController = async (req: Request, res: Response) => {
//     const { email, password } = req.body;

//     const user = await createSessionService({ email, password });

//     return res.json(user);
// };

// const createAdminSessionController = async (req: Request, res: Response) => {
//     const { email, password } = req.body;

//     const user = await createAdminSessionService({ email, password });

//     return res.json(user);
// };

// const userDetailsController = async (req: Request, res: Response) => {
//     const { email } = req.body;
//     const user = await userDetailsService(email);

//     return res.json(user);
// };

export {
    createUserController,
    // createAdminController,
    // listUsersController,
    // showUserController,
    updateUserController,
    // deleteUserController,
    // createSessionController,
    // createAdminSessionController,
    // userDetailsController,
};