import { IProvince } from "src/app/interfaces/province/iprovince";

export class Province implements IProvince{
            id!: number;
            nome!: string;
            sigla!: string;
}
