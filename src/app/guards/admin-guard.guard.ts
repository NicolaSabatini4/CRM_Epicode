import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IRoles, IUtenti } from '../interfaces/utenti/iutenti';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private router: Router,private authService:AuthService){}

  utenti: IUtenti[] = [];
  ruolo: IRoles[] = [];
  
  ngOnInit(): void {
     this.authService.getUsers().subscribe((users:any) =>{
      this.utenti = users.content,
     // this.authService.matchUsers().subscribe(res =>)
     console.log(this.utenti)
      
     })
  }

  canActivate() {

    if(localStorage.getItem('accessToken')){
      return true;
    }
    this.router.navigate(['']);
    return false;



  }
    
  }
