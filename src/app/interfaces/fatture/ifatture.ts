import { IClienti } from "../clienti/iclienti";
import { ISFattura } from "../sfattura/isfattura";

export interface IFatture {
    id: number,
    data: string,
    numero: number,
    anno: number,
    importo: number,
    stato: ISFattura,
    cliente: IClienti,
    
}
