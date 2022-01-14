import { ILogin } from "src/app/interfaces/auth/ilogin";

export class AdminLogin implements ILogin{
    username: string = 'admin';
    password: string = '111111';
}
