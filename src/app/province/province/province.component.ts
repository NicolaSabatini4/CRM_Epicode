import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  province: IProvince[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor(private provinceService: ProvinceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
        
      this.provinceService.getPagedProvince(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.province = users.content

        /**inizio paginazione */
        this.totalElements = users.totalElements
        this.size = users.size
        this.numberOfPages = (users.totalElements / users.size)


        for(let i = 0; i <= this.numberOfPages; i++){
          this.pageNumbers.push(i);
        }

        /**fine paginazione */
      });

    })

  }
  goProvincia(item:IProvince){
    this.router.navigate(['province/editProvince/', item.id])
  }

  removeProvincia(provincia:IProvince){
    this.provinceService.delProvincia(provincia).subscribe(res=>{
      this.province = this.province.filter(province => province.id !== province.id)
    })
    
    Swal.fire({
      title: 'Provincia eliminata con successo',
       icon: 'success',
       confirmButtonColor:'#f09927'
       
     })
     this.router.navigate(['province/page/0']);
    
 
  }


}



