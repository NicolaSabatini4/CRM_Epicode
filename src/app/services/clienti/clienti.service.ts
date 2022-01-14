import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http:HttpClient) { }

  getPagedClienti(page: number){
    return this.http.get(environment.APIURL+`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  delCliente(cliente:IClienti) {
    return this.http.delete(environment.APIURL+'api/clienti/'+cliente.id)
  }

  addCliente(newCliente:IClienti) {
    return this.http.post<IClienti>(environment.APIURL+'api/clienti', newCliente)
  }

  getClienteById(id:number){
    return this.http.get<IClienti>(environment.APIURL+'api/clienti/'+id)
  }

  updateCliente(cliente:IClienti){
    return this.http.put<IClienti>(environment.APIURL+'api/clienti/'+ cliente.id, cliente)
  }

  getAllClienti(){
    return this.http.get<IClienti[]>(environment.APIURL + 'api/clienti')
  }
}
