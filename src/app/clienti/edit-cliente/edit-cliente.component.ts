import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {


  clienteEdit:IClienti = new Clienti

  comuni:IComuni[]=[];
  province:IProvince[]=[]

  constructor(private router:Router,private route:ActivatedRoute,private clientiService:ClientiService,private provinceService:ProvinceService,private comuniService:ComuniService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.clientiService.getClienteById(res['id']).subscribe(res => {
        this.clienteEdit = res;
      })
    })
    this.provinceService.getAllProvince().subscribe((province:any) => {
      this.province = province.content
    })
    this.comuniService.getAllComuni().subscribe((comuni:any) => {
      this.comuni = comuni.content
    })
  }







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



  salvaCliente(clienteEdit:IClienti){
    


    this.clientiService.updateCliente(clienteEdit).subscribe(res=>{
      console.log(res)
      Swal.fire({
        title: 'Cliente modificato con successo',
         icon: 'success',
         confirmButtonColor:'#f09927'
         
       })
    });
    this.router.navigate(['clienti/page/0'])
  }
}
