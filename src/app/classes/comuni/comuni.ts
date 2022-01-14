import { IComuni } from "src/app/interfaces/comuni/icomuni";
import { Province } from "../province/province";

export class Comuni implements IComuni{
    
    
        id!: number;
        nome!: string;
        provincia:Province = new Province

}
