import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti} from 'src/app/classes/clienti/clienti';
import { IClienti} from 'src/app/interfaces/clienti/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { Province } from 'src/app/classes/province/province';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { Sede } from 'src/app/classes/sede/sede';
import { ISede } from 'src/app/interfaces/sede/isede';
import Swal from 'sweetalert2';
import { ProvinceService } from 'src/app/services/province/province.service';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {


  province:IProvince[] = [];
  comuni: IComuni[] = [];

  constructor(private router:Router, private clientiService:ClientiService, private provinceService:ProvinceService,private route:ActivatedRoute,private comuniService:ComuniService) { }

  ngOnInit(): void {
   
      this.provinceService.getAllProvince().subscribe((province:any) => {
        this.province = province.content
      })
      this.comuniService.getAllComuni().subscribe((comuni:any) => {
        this.comuni = comuni.content
      })
    
  }
  


  newCliente:IClienti= new  Clienti

  newSedeL:ISede= new Sede;
  newSedeO:ISede= new Sede;

  newComune:IComuni = new Comuni;
  newProvincia:IProvince = new Province;



  displayOp: boolean = false;

  displayLeg: boolean = false;


  displayL(){
    if(this.displayLeg == false)
      this.displayLeg = true
    else
      this.displayLeg = false
    
  }


  displayO(){
    if(this.displayOp == false)
      this.displayOp = true
    else
      this.displayOp = false
  }



  aggiungiCliente(newCliente:IClienti){
  

  this.clientiService.addCliente(newCliente).subscribe(res => {
    console.log(res);
    Swal.fire({
     title: 'Cliente aggiunto con successo',
      icon: 'success',
      confirmButtonColor:'#f09927'
      
    })
    
  })   
  this.router.navigate(['clienti/page/0'])
}

}
