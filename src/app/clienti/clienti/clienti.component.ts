import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from 'src/app/interfaces/clienti/iclienti'; 
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})

export class ClientiComponent implements OnInit {

  clienti: IClienti[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor(private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) { }

  

  

  
    ngOnInit(): void {
      this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
        
        this.clientiService.getPagedClienti(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
        

          this.clienti = users.content
  
          /**inizio paginazione */
          this.totalElements = users.totalElements
          this.size = users.size
          this.numberOfPages = (users.totalElements / users.size)
  
         let temp_array = []

         let j = parseInt(params["page"])
          for(let i= 0 ; i <= this.numberOfPages ; i++){
            temp_array.push(i);
          }
          this.pageNumbers = temp_array.filter(item => item >= (j - 4) && item <= (j + 4))
          /**fine paginazione */
        });
  
      })
  }
  
removeCliente(cliente:IClienti){
  this.clientiService.delCliente(cliente).subscribe(res=>{
    this.clienti = this.clienti.filter(cliente => cliente.id !== cliente.id);
    Swal.fire({
      title: 'Cliente eliminato con successo',
       icon: 'success',
       confirmButtonColor:'#f09927'
       
     });
     
     this.router.navigate(['clienti/page/0' ])
  })
}


detailCliente(item:IClienti){
  this.router.navigate(['clienti/detailCliente/', item.id])
}


}

