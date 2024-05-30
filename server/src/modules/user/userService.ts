import bcrypt, { compare } from "bcrypt";
import { prismaClient } from "../../prismaClient";
import { sign } from "jsonwebtoken";
import { ICreateUser, IUpdate } from "../../interface";
import { AppError } from "../../errors/AppErrors";
import { authConfig } from "../../config/auth";

const createUserService = async (userData: ICreateUser) => {
    const hasUser = await prismaClient.user.findUnique({
        where: { email: userData.email },
    });

    if (hasUser) {
        throw new AppError("User already existes", 400);
    }

    const {
        name,
        email,
        password,
    } = userData;

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        await prismaClient.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'user'
            },
        });

        return { code: 201, message: "User created successfully!" };
    } catch (error) {
        throw new AppError(`${error}`, 403);
    }
};

const listUsersService = async () => {
    const users = await prismaClient.user.findMany({ 
        select: { 
            name: true, 
            email: true 
        } 
    });

    return users;
}

// const showUserService = async (id: string) => {
//     const user = await prismaClient.user.findUnique({
//         where: { id },
//     });

//     if (!user) {
//         throw new AppError("User not found!");
//     }

//     return user;
// };

const updateUserService = async ({ id, email, password }: IUpdate) => {
    try {
        await prismaClient.user.update({
            where: { id },
            data: {
                email,
                password,
            },
        });
        
        return "User updated successfuly";
    } catch (error) {
        return error;
    }
};

// const deleteUserService = async ({ id }: IDelete) => {
//     const user = await prismaClient.user.delete({
//         where: { id },
//     });

//     if (!user) {
//         throw new AppError("User not found!");
//     }

//     return "User deleted successfuly";
// };

// const createSessionService = async ({ email, password }: ISession) => {
//     const user = await prismaClient.user.findUnique({
//         where: { email },
//         select: { id: true, firstName: true, email: true, isAdmin: true, password: true }
//     });

//     if (!user) {
//         throw new AppError("Incorrect email/password combination");
//     }

//     const passwordConfirmed = await compare(password, user.password);

//     if (!passwordConfirmed) {
//         throw new AppError("Incorrect email/password combination");
//     }

//     // TODO: dont return here sensitive data, because is intercepted in frontend
//     const token = sign({}, authConfig.jwt.secret, {
//         subject: user.id,
//         expiresIn: authConfig.jwt.expiresIn,
//     });

//     return {
//         user: {
//             id: user.id,
//             name: user.firstName,
//             email: user.email,
//             isAdmin: user.isAdmin
//         },
//         token
//     };
// };

// const createAdminSessionService = async ({ email, password }: ISession) => {
//     const user = await prismaClient.admin.findUnique({ where: { email } });

//     if (!user) {
//         throw new AppError("Incorrect email/password combination");
//     }

//     const passwordConfirmed = await compare(password, user.password);

//     if (!passwordConfirmed) {
//         throw new AppError("Incorrect email/password combination");
//     }

//     // TODO: dont return here sensitive data, because is intercepted in frontend
//     const token = sign({}, authConfig.jwt.secret, {
//         subject: user.id,
//         expiresIn: authConfig.jwt.expiresIn,
//     });

//     return { user, token };
// };

// const userDetailsService = async (id: string) => {
//     const user = await prismaClient.user.findUnique({
//         where: { id },
//         select: {
//             id: true,
//             email: true,
//             firstName: true,
//         },
//     });

//     return user;
// }

export {
    listUsersService,
    createUserService,
    // createAdminService,
    // showUserService,
    updateUserService,
    // deleteUserService,
    // createSessionService,
    // createAdminSessionService,
    // userDetailsService,
};