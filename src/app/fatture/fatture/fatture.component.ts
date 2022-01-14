import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  fatture: IFatture[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor(private fattureService: FattureService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
        
      this.fattureService.getPagedFatture(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.fatture = users.content

        /**inizio paginazione */
        this.totalElements = users.totalElements
        this.size = users.size
        this.numberOfPages = (users.totalElements / users.size)

        let temp_array:number[] = []

        let j = parseInt(params["page"])
        for(let i = 0; i <= this.numberOfPages; i++){
          temp_array.push(i);
        }
        this.pageNumbers = temp_array.filter(item => item >= (j - 4) && item <= (j + 4))
        /**fine paginazione */
      });

    })

  }



  next(){
    
    this.route.params.subscribe(params =>{
     let numPage:number =parseInt (params ["page"]);  //da finire 
     this.router.navigate(['fatture/page/'+numPage]);
     return;
    
    })

  }

  removeFattura(fattura:IFatture){
    this.fattureService.delFattura(fattura).subscribe(res=>{
      this.fatture = this.fatture.filter(fattura => fattura.id !== fattura.id)
    })
  }


  detailFattura(item:IFatture){
    this.router.navigate(['fatture/detailFattura/', item.id])
  }




}
