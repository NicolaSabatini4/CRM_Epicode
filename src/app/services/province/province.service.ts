import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http:HttpClient) { }

  getPagedProvince(page:number){
    return this.http.get(environment.APIURL+`api/province?page=${page}&size=20&sort=id,ASC`)
  }
  

  addProvincia(provincia:IProvince) {
    return this.http.post(environment.APIURL+'api/province', provincia)
  }



  delProvincia(provincia: IProvince){
    return this.http.delete(environment.APIURL+'api/province/'+provincia.id)
  }




  getAllProvince(){
    return this.http.get<IProvince[]>(environment.APIURL +'api/province')
  }

  editProvincia(editProvincia:IProvince) {
    return this.http.put(environment.APIURL+'api/province/'+ editProvincia.id, editProvincia)
 
   }

  getProvinciaById(id:number){
    return this.http.get<IProvince>(environment.APIURL+'api/province/'+ id)
  }

}
