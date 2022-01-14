import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';

import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-comuni',
  templateUrl: './edit-comuni.component.html',
  styleUrls: ['./edit-comuni.component.css']
})
export class EditComuniComponent implements OnInit {


  editComune:IComuni= new Comuni

  province:IProvince[]=[];
 
  constructor(private comuniService: ComuniService,private router:Router,private route:ActivatedRoute, private provinceService:ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      this.comuniService.getComuneById(res['id']).subscribe(res =>{
        this.editComune = res;
      })
    })
    this.route.params.subscribe(res =>{
      this.provinceService.getAllProvince().subscribe((province:any)=>{
        this.province=province.content
      })
    })

  }



modificaComune(editComune:IComuni){
  
  this.comuniService.editComune(editComune).subscribe(res=>{
    console.log(res)
})
  
  
    Swal.fire({
      title: 'Comune modificato con successo',
       icon: 'success',
       confirmButtonColor:'#f09927'
       
     });
     this.router.navigate(['comuni/page/0'])
    
  
  
   
}







}
