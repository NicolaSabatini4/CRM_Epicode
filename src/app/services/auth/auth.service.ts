import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from 'src/app/classes/auth/login-response';
import { AdminLogin } from 'src/app/classes/auth/admin-login';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IUtenti } from 'src/app/interfaces/utenti/iutenti';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!:LoginResponse;


  constructor(private http: HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
     
  }

  login(loginPayload:AdminLogin){
    return this.http.post<LoginResponse>(environment.APIURL+'api/auth/login/', loginPayload)
  }

  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('currentUser')
    this.router.navigate([''])
    Swal.fire({
      title: 'Logout avvenuto con successo',
       icon: 'success',
       confirmButtonColor:'#f09927'
       
     })
  }

  isLogged(){
    return localStorage.getItem('accessToken') != null;
  }
  utenteCorrente() {
    return localStorage.getItem('currentUser') || null;
  }
  userToken() {
    return localStorage.getItem('accessToken') || null;
  }

  getUsers() {
    return this.http.get<IUtenti>(environment.APIURL+'/api/users')
  }

 

}
