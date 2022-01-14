import { ISede } from "src/app/interfaces/sede/isede";
import { Comuni } from "../comuni/comuni";


export class Sede implements ISede{
    id!:number;
    via!: string;
    civico!: string;
    cap!:string;
    localita!: string;
    comune:Comuni = new Comuni;
    
}
