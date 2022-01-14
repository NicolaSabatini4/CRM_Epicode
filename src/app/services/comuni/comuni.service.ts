import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http:HttpClient) { }

  getPagedComuni(page: number){
    return this.http.get(environment.APIURL+`api/comuni?page=${page}&size=20&sort=id,ASC`)
  }


  addComune(newComune:IComuni) {
    return this.http.post<IComuni>(environment.APIURL+'api/comuni', newComune)
  }



  delComune(comune:IComuni) {
    return this.http.delete(environment.APIURL+'api/comuni/'+comune.id)
  }


  editComune(editComune:IComuni) {
   return this.http.put(environment.APIURL+'api/comuni/'+ editComune.id, editComune)

  }


  getComuneById(id:number){
    return this.http.get<IComuni>(environment.APIURL+'api/comuni/'+ id)
  }

  getAllComuni(){
    return this.http.get<IComuni[]>(environment.APIURL +'api/comuni')
  }
  
}
