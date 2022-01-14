import { IProvince } from "../province/iprovince";

export interface IComuni {
    
        id: number,
        nome: string,
        provincia:IProvince
}
