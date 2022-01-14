import { IClienti} from "src/app/interfaces/clienti/iclienti"
import { Sede } from "../sede/sede";

export class Clienti implements IClienti {

        id!: number;
        ragioneSociale!: string;
        partitaIva!: string;
        tipoCliente!: string;
        email!: string;
        pec!: string;
        telefono!: string;
        nomeContatto!: string;
        cognomeContatto!: string;
        telefonoContatto!: string;
        emailContatto!: string;
        indirizzoSedeOperativa: Sede = new Sede;
        indirizzoSedeLegale:  Sede = new Sede;
        dataInserimento!: string;
        dataUltimoContatto!: string;
        fatturatoAnnuale!: number;

    }

   
            
                