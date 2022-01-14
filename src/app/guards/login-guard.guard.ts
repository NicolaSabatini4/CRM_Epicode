import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router: Router,private authService:AuthService){}

  canActivate() {

    if(this.authService.isLogged()){
      return true;
    }

    Swal.fire({
      title: 'Effettua il login per accedere a questa sezione!',
       icon: 'error',
       confirmButtonColor:'#f09927'
       
     })
    this.router.navigate(['']);
    return false;



  }
    
  }
  

