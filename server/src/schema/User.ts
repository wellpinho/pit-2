import { Joi, Segments, celebrate } from "celebrate"

export const createUserSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    }),
})

export const updateUserSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string().min(6),
    }),
})