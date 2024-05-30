interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

interface IShowUser {
    email: string;
}

interface IUpdate {
    id: string;
    email: string;
    password: string;
}

interface IDelete {
    id: string;
}

interface ISession {
    email: string;
    password: string;
}

export { ICreateUser, IShowUser, IUpdate, IDelete, ISession };