
export interface IUtenti {
    id?:number,
    username:string,
    email:string,
    password:string,
    nome:string,
    cognome:string,
    roles:IRoles,


}

export interface IRoles {
    id?:string,
    roleName:string
}
