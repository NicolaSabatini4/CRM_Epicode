import { IComuni } from "../comuni/icomuni";


export interface ISede {
    id:number,
    via: string,
    civico: string,
    cap:string,
    localita: string,
    comune:IComuni,
   
}
