import { clippingParents } from '@popperjs/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Rew } from 'src/app/interfaces/rew';
import { PageEvent } from '@angular/material/paginator';
import { Reports } from '../../interfaces/reports';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  public reports: Reports[] = [];
  pModificar: Products = {
    cCodPrd: '',
    cDesPrd: '',
    cPosPrd: '',
    cDesUm: '',
  }
  pageSize = 15;
  desde: number = 0;
  hasta: number = 15;

  constructor(
    private ProductsService: ProductsService,
    private router:Router
    ) {

  }

  ngOnInit(): void {
    this.getReports()
  }

  getReports() {
    this.ProductsService.getReports().subscribe(
      res => {
        console.log(res);
        this.reports = <any>res;
      }
    )
  }

  cambiarpagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }



  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }


  listarReportes() {
    this.ProductsService.getReports().subscribe(
      res => {
        console.log(res);
        this.listarReportes=<any> res;
      },
      err => console.log(err)
    );
  }


  eliminar(id: string) {
    console.log(id);
    this.ProductsService.deleteReport(id).subscribe(
      res => {
        console.log('Reporte Eliminado');
        this.listarReportes();
      },
      err => console.log(err)
    );
  }

}
