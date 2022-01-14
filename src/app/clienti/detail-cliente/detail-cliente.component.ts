import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.css']
})
export class DetailClienteComponent implements OnInit {

  constructor(private clientiService:ClientiService,private router:Router, private route:ActivatedRoute) { }

clienteDetail:IClienti = new Clienti


ngOnInit(): void {
  this.route.params.subscribe(res => {
    this.clientiService.getClienteById(res['id']).subscribe(res => {
      this.clienteDetail = res;
      console.log(res)
    })
  })

}



goModifica(){
  this.router.navigate(['clienti/editCliente/'+ this.clienteDetail.id])
}
}
