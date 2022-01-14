import { IFatture } from "src/app/interfaces/fatture/ifatture";
import { Clienti } from "../clienti/clienti";
import { SFattura } from "../sfattura/sfattura"

export class Fatture implements IFatture{
    id!: number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!: number;
    stato: SFattura = new SFattura
    cliente: Clienti = new Clienti
        
    }

