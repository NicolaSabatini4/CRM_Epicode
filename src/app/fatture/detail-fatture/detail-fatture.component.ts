import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';

@Component({
  selector: 'app-detail-fatture',
  templateUrl: './detail-fatture.component.html',
  styleUrls: ['./detail-fatture.component.css']
})
export class DetailFattureComponent implements OnInit {


  fatturaDetail:IFatture = new Fatture
   

  constructor(private router:Router, private route:ActivatedRoute, private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.fattureService.getFatturaById(res['id']).subscribe(res => {
        this.fatturaDetail = res;
      })
    })
  }



  goEditFattura(){

    this.router.navigate(['fatture/editFattura/'+ this.fatturaDetail.id])
  }

}
