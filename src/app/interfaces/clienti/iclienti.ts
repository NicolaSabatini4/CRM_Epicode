import { ISede } from "../sede/isede";

export interface IClienti {
    
        id?: number,
        ragioneSociale: string,
        partitaIva: string,
        tipoCliente: string,
        email: string,
        pec: string,
        telefono: string,
        nomeContatto: string,
        cognomeContatto: string,
        telefonoContatto: string,
        emailContatto: string,
        indirizzoSedeOperativa: ISede,
        indirizzoSedeLegale: ISede,
        dataInserimento: string,
        dataUltimoContatto: string,
        fatturatoAnnuale: number
    
};



