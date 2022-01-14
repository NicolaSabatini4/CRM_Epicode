import { IRoles, IUtenti } from "src/app/interfaces/utenti/iutenti";

export class Utenti implements IUtenti {
    
        id?:number;
        username!:string;
        email!:string;
        password!:string;
        nome!:string;
        cognome!:string;
        roles:Roles= new Roles
    
    
    }
    
    export class Roles implements IRoles{
        id?:string;
        roleName!:string
    }

