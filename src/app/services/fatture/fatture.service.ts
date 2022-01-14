import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http:HttpClient) { }

  getPagedFatture(page: number){
    return this.http.get(environment.APIURL+`api/fatture?page=${page}&size=20&sort=id,ASC`)
  }


  getFatturaById(id:number){
    return this.http.get<IFatture>(environment.APIURL+'api/fatture/'+id)
  }

  addFattura(newFattura:IFatture) {
    return this.http.post<IFatture>(environment.APIURL+'api/fatture', newFattura)
  }

  delFattura(fattura:IFatture){
    return this.http.delete(environment.APIURL+'api/fatture/'+fattura.id)
  }


  updateFattura(fattura:IFatture){
   return this.http.put<IFatture>(environment.APIURL+'api/fatture/'+ fattura.id, fattura)

    
  }
}
