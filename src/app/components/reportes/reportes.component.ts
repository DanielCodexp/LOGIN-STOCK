import { clippingParents } from '@popperjs/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Rew } from 'src/app/interfaces/rew';
import { PageEvent } from '@angular/material/paginator';
import { Reports } from '../../interfaces/reports';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import * as html2pdf from 'html2pdf.js';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {

  public reports: Reports[] = [];
  // pModificar: Products = {
  //   cCodPrd: '',
  //   cDesPrd: '',
  //   cPosPrd: '',
  //   cDesUM: '',
  // };
  pageSize = 15;
  desde: number = 0;
  hasta: number = 15;
  public imprimir = false;

  columnas: string[] = ['codigo', 'clave Personal', 'fecha de reporte', 'Existencia Real','Revisado'];

  constructor(
    private ProductsService: ProductsService,
    private router: Router,
    private stock: StockService
  ) {}
  dataSource:any;
  ngOnInit(): void {
    this.getReports();
    this.dataSource = new MatTableDataSource(this.reports);


  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  getReports() {
    this.stock.getReport().subscribe((res) => {
      this.reports = <any>res;
      console.log(this.reports)
    });
  }

  cambiarpagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  modificar(id: string) {
    this.router.navigate(['/edit/' + id]);
  }

  listarReportes() {
    this.ProductsService.getReports().subscribe(
      (res) => {
        this.listarReportes = <any>res;
      },
      (err) => console.log(err)
    );
  }

  eliminar(id: string) {
    console.log(id);
    this.ProductsService.deleteReport(id).subscribe(
      (res) => {
        console.log('Reporte Eliminado');
        this.listarReportes();
      },
      (err) => console.log(err)
    );
  }

  download() {
    var element = document.getElementById('table');
    var opt = {
      margin: 1,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  }
}
function filtrar(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
  throw new Error('Function not implemented.');
}

