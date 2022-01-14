import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-comuni',
  templateUrl: './add-comuni.component.html',
  styleUrls: ['./add-comuni.component.css']
})
export class AddComuniComponent implements OnInit {

province:IProvince[]=[];
newComune:IComuni = new Comuni();

  constructor(private comuniService:ComuniService,private router:Router,private route:ActivatedRoute, private provinceService:ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provinceService.getAllProvince().subscribe((users:any) => {
        this.province = users.content
      })
    })
  }

  aggiungiComune(newComune:IComuni){
    this.comuniService.addComune(newComune).subscribe(res => {
      console.log(res);
      Swal.fire({
        title: 'Comune aggiunto con successo',
         icon: 'success',
         confirmButtonColor:'#f09927'
         
       })
       this.router.navigate(['comuni/page/0'])
    })   
  }

}
