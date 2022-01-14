import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css']
})
export class AddProvinceComponent implements OnInit {

  constructor(private provinceService:ProvinceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  province: IProvince[] = [];

  newProvincia: IProvince = new Province();


  aggiungiProvincia(newProvincia:IProvince){
    this.provinceService.addProvincia(newProvincia).subscribe(res => {
      console.log(res);
      
      Swal.fire({
        title: 'Provincia modificata con successo',
         icon: 'success',
         confirmButtonColor:'#f09927'
         
       });
       this.router.navigate(['province/page/0'])
      
    })   
  }

}
