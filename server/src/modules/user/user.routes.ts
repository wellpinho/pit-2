import { Router } from "express";
import {
    createUserController,
    listUsersController,
    updateUserController,
} from "./userController";
// import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { celebrate, Joi, errors, Segments } from "celebrate";
import { createUserSchema, updateUserSchema } from "../../schema/User";

const userRoutes = Router();

userRoutes.get("/users", listUsersController);
userRoutes.post("/users", createUserSchema, createUserController);

// userRoutes.post(
//     "/users/admin",
//     celebrate({
//         [Segments.BODY]: Joi.object().keys({
//             firstName: Joi.string().required(),
//             lastName: Joi.string().required(),
//             phone: Joi.string().required(),
//             email: Joi.string().required(),
//             password: Joi.string().required(),
//             age: Joi.number().required(),
//             state: Joi.string().required(),
//             city: Joi.string().required(),
//             street: Joi.string().required(),
//             numHouse: Joi.string().required(),
//             zipcode: Joi.string().required(),
//             cpf: Joi.string().required(),
//             cnpj: Joi.string(),
//             birth: Joi.string().required(),
//         }),
//     }),
//     createAdminController
// );

// userRoutes.get("/user/:id", showUserController);
userRoutes.put("/users/:id", updateUserSchema, updateUserController);
// userRoutes.delete("/user/:id", deleteUserController);
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