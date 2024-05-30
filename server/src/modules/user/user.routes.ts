import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUsersController,
    showUserController,
    updateUserController,
} from "./userController";
// import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { celebrate, Joi, errors, Segments } from "celebrate";
import { createUserSchema, updateUserSchema } from "../../schema/User";

const userRoutes = Router();

userRoutes.get("/users", listUsersController);
userRoutes.get("/user/:id", showUserController);
userRoutes.post("/users", createUserSchema, createUserController);
userRoutes.put("/user/:id", updateUserSchema, updateUserController);
userRoutes.delete("/user/:id", deleteUserController);
// userRoutes.post(
//     "/sessions/users",
//     celebrate({
//         [Segments.BODY]: Joi.object().keys({
//             email: Joi.string().email().required(),
//             password: Joi.string().required(),
//         }),
//     }),
//     createSessionController
// );

// userRoutes.post(
//     "/sessions/admins",
//     celebrate({
//         [Segments.BODY]: Joi.object().keys({
//             email: Joi.string().email().required(),
//             password: Joi.string().required(),
//         }),
//     }),
//     createAdminSessionController
// );

userRoutes.use(errors());
export { userRoutes };