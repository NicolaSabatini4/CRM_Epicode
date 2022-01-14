import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  comuni: IComuni[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor(private comuniService: ComuniService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
        
      this.comuniService.getPagedComuni(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.comuni = users.content

        /**inizio paginazione */
        this.totalElements = users.totalElements
        this.size = users.size
        this.numberOfPages = (users.totalElements / users.size)

        let temp_array = []

        let j = parseInt(params["page"])
        for(let i = 0; i <= this.numberOfPages; i++){
          temp_array.push(i);
          
        }
        this.pageNumbers = temp_array.filter(item => item >= (j - 4) && item <= (j + 4));
        
        /**fine paginazione */
      });

    })

  }
  goComune(item:IComuni){
    this.router.navigate(['comuni/editComuni/', item.id])
  }

  removeComune(comune:IComuni){
    this.comuniService.delComune(comune).subscribe(res=>{
      this.comuni = this.comuni.filter(comuni => comuni.id !== comuni.id);
      Swal.fire({
        title: 'Comune rimosso con successo',
         icon: 'success',
         confirmButtonColor:'#f09927'
         
       })
       this.router.navigate(['comuni/page/0'])
    })
  }



}
