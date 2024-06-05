export interface InputRegister {
    name: string;
    email: string;
    password: string;
}

export interface InputComponent {
    name: string, 
    type: string, 
    placeholder: string, 
}

export interface IProduct {
    image: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
}