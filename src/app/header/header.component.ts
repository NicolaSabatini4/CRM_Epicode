import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  displayLogged:boolean=false 
  displayUnlogged:boolean=false

  ngOnInit(): void {
    if(this.AuthService.isLogged()){
      this.displayLogged = true
      this.displayUnlogged = false
    }
    this.displayUnlogged = true
    this.displayLogged = false
  }

  ngDoCheck(): void{
    if(this.AuthService.isLogged()){
      this.displayLogged = true
      this.displayUnlogged = false
    }
    this.displayUnlogged = true
    this.displayLogged = false
  
  }





  goLogOut(){
    this.AuthService.logout()
  }


}
