import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.css']
})
export class EditProvinceComponent implements OnInit {

  editProvincia:IProvince = new Province

  constructor(private router:Router,private route:ActivatedRoute, private provinceService:ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      this.provinceService.getProvinciaById(res['id']).subscribe(res =>{
        this.editProvincia = res;
      })
    })
  }


  modificaProvincia(editProvincia:IProvince){
    this.provinceService.editProvincia(editProvincia)
    console.log(editProvincia)
    
      Swal.fire({
        title: 'Provincia modificata con successo',
         icon: 'success',
         confirmButtonColor:'#f09927'
         
       });
       this.router.navigate(['province/page/0'])
    
    
     
  }





}
