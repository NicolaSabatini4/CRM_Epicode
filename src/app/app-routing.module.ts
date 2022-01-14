import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './clienti/add-cliente/add-cliente.component';
import { ClientiComponent } from './clienti/clienti/clienti.component';
import { DetailClienteComponent } from './clienti/detail-cliente/detail-cliente.component';
import { EditClienteComponent } from './clienti/edit-cliente/edit-cliente.component';
import { AddComuniComponent } from './comuni/add-comuni/add-comuni.component';
import { ComuniComponent } from './comuni/comuni/comuni.component';
import { EditComuniComponent } from './comuni/edit-comuni/edit-comuni.component';
import { AddFattureComponent } from './fatture/add-fatture/add-fatture.component';
import { DetailFattureComponent } from './fatture/detail-fatture/detail-fatture.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { ProvinceComponent } from './province/province/province.component';
import { LoginGuardGuard } from './guards/login-guard.guard';


const routes: Routes = [
   ////////HOME
  {path:"",component: HomeComponent},
  ////// LOGIN
  {path:"login",component: LoginComponent},
 ///////CLIENTI
  //{path:"clienti",component:ClientiComponent},
  {path:"clienti/page/:page",component:ClientiComponent,canActivate: [LoginGuardGuard]},
  {path: "clienti/add", component: AddClienteComponent,canActivate: [LoginGuardGuard]},
  {path:"clienti/detailCliente/:id", component:DetailClienteComponent,canActivate: [LoginGuardGuard]},
  {path:"clienti/editCliente/:id", component:EditClienteComponent,canActivate: [LoginGuardGuard]},
  ///////////PROVINCE
 // {path:"province",component:ProvinceComponent},
  {path:"province/page/:page",component:ProvinceComponent,canActivate: [LoginGuardGuard]},
  {path: "province/add", component: AddProvinceComponent,canActivate: [LoginGuardGuard]},
  {path:"province/editProvince/:id", component:EditProvinceComponent,canActivate: [LoginGuardGuard]},
  /////////COMUNI
 // {path:"comuni",component:ComuniComponent},
  {path:"comuni/page/:page",component:ComuniComponent,canActivate: [LoginGuardGuard]},
  {path: "comuni/add", component: AddComuniComponent,canActivate: [LoginGuardGuard]},
  {path:"comuni/editComuni/:id", component:EditComuniComponent,canActivate: [LoginGuardGuard]},
   /////////FATTURE
  // {path:"fatture",component:FattureComponent},
   {path:"fatture/page/:page",component:FattureComponent,canActivate: [LoginGuardGuard]},
   {path: "fatture/add", component: AddFattureComponent,canActivate: [LoginGuardGuard]},
   {path:"fatture/detailFattura/:id", component:DetailFattureComponent,canActivate: [LoginGuardGuard]},
   {path:"fatture/editFattura/:id", component:EditFattureComponent,canActivate: [LoginGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
