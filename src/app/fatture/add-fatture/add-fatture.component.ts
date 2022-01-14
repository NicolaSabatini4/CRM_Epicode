import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-fatture',
  templateUrl: './add-fatture.component.html',
  styleUrls: ['./add-fatture.component.css']
})
export class AddFattureComponent implements OnInit {

  sfattura=[{id:1, nome: "PAGATO"}, {id:2, nome:"NON PAGATO"}]
  newFattura: Fatture = new Fatture
  newCliente: Clienti = new Clienti
  
  clienti: IClienti[] =[]
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number []=[]; 

  constructor(private fattureService:FattureService, private router:Router,private provinceService:ProvinceService,private route:ActivatedRoute,private clientiService:ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe((clienti:any)=>{
      this.clienti=clienti.content
      console.log(this.clienti)
    })

  
    
  }
  



  aggiungiFattura(newFattura:IFatture){
    console.log(newFattura)
    this.fattureService.addFattura(newFattura).subscribe(res => {
    console.log(res);

    Swal.fire({
     title: 'Fattura aggiunta con successo',
      icon: 'success',
      confirmButtonColor:'#f09927'
      
    })
    
  })   
  this.router.navigate(['fatture/page/0'])
}

}
