import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import { ProvinceService } from 'src/app/services/province/province.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clienti: IClienti[] = [];
  clientiTotalElements!: number;

  fatture: IFatture[] = [];
  fattureTotalElements!: number;

  comuni: IComuni[] = [];
  comuniTotalElements!: number;

  province: IProvince[] = [];
  provinceTotalElements!: number;

  constructor( private clientiService:ClientiService, private fattureService:FattureService, private comuniService:ComuniService, private provinceService:ProvinceService, private router: Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getPagedClienti(params["page"]).subscribe((users:any) => {
        this.clienti = users.content
        this.clientiTotalElements = users.totalElements
        })
      })

      this.route.params.subscribe(params => {
        this.fattureService.getPagedFatture(params["page"]).subscribe((fatture:any) => {
          this.fatture = fatture.content
          this.fattureTotalElements = fatture.totalElements})
        })


        this.route.params.subscribe(params => {
          this.comuniService.getPagedComuni(params["page"]).subscribe((comuni:any) => {
            this.comuni = comuni.content
            this.comuniTotalElements = comuni.totalElements
          })
        })


        this.route.params.subscribe(params => {
          this.provinceService.getPagedProvince(params["page"]).subscribe((province:any) => {
            this.province = province.content
            this.provinceTotalElements = province.totalElements
          })
        })
      

    }
  }
