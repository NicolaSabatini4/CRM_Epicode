import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {


  fatturaEdit:IFatture=new Fatture
  sfattura=[{id:1, nome: "PAGATO"}, {id:2, nome:"NON PAGATO"}]


  constructor(private router:Router,private route:ActivatedRoute, private fattureService:FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.fattureService.getFatturaById(res['id']).subscribe(res => {
        this.fatturaEdit = res;
        console.log(res)
      })
    })
  }




  salvaFattura(fatturaEdit:IFatture){
    this.fattureService.updateFattura(fatturaEdit).subscribe(res=> {
      Swal.fire({
        title: 'Fattura modificata con successo',
         icon: 'success',
         confirmButtonColor:'#f09927'
         
       })
    })
    this.router.navigate(["fatture/detailFattura/",this.fatturaEdit.id])
  }
}
