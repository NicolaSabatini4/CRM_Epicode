import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ClientiComponent } from './clienti/clienti/clienti.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { AddClienteComponent } from './clienti/add-cliente/add-cliente.component';
import { DetailClienteComponent } from './clienti/detail-cliente/detail-cliente.component';
import { ProvinceComponent } from './province/province/province.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { ComuniComponent } from './comuni/comuni/comuni.component';
import { AddComuniComponent } from './comuni/add-comuni/add-comuni.component';
import { EditComuniComponent } from './comuni/edit-comuni/edit-comuni.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture.component';
import { AddFattureComponent } from './fatture/add-fatture/add-fatture.component';
import { DetailFattureComponent } from './fatture/detail-fatture/detail-fatture.component';
import { EditClienteComponent } from './clienti/edit-cliente/edit-cliente.component';
import { HomeComponent } from './home/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    ClientiComponent,
    AddClienteComponent,
    DetailClienteComponent,
    ProvinceComponent,
    AddProvinceComponent,
    EditProvinceComponent,
    ComuniComponent,
    AddComuniComponent,
    EditComuniComponent,
    FattureComponent,
    EditFattureComponent,
    AddFattureComponent,
    DetailFattureComponent,
    EditClienteComponent,
    HomeComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
