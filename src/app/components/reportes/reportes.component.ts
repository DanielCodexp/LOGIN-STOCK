import { clippingParents } from '@popperjs/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Rew } from 'src/app/interfaces/rew';
import { PageEvent } from '@angular/material/paginator';
import { Reports } from '../../interfaces/reports';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  @ViewChild('screen')
  screen!: ElementRef;
  @ViewChild('canvas')
  canvas!: ElementRef;
  @ViewChild('downloadLink')
  downloadLink!: ElementRef;

  public reports: Reports[] = [];
  pModificar: Products = {
    cCodPrd: '',
    cDesPrd: '',
    cPosPrd: '',
    cDesUM: '',
  }
  pageSize = 15;
  desde: number = 0;
  hasta: number = 15;
  public imprimir = false;

  constructor(
    private ProductsService: ProductsService,
    private router:Router,
    private stock: StockService
    ) {

  }

  ngOnInit(): void {
    this.getReports()
  }

  getReports() {
    this.stock.getReport().subscribe(
      res => {
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
  //  public download(){
  //    this.imprimir = true;
  //    const DATA = document.getElementById('htmlData') as HTMLElement;
  //    const doc = new jsPDF('p', 'pt', 'a4');
  //    const options = {
  //      background: 'white',
  //      scale: 3
  //    };
  //    html2canvas(DATA, options).then((canvas) => {

  //      const img = canvas.toDataURL('image/PNG');

  //      // Add image Canvas to PDF
  //      const bufferX = 25;
  //      const bufferY = 25;
  //      const imgProps = (doc as any).getImageProperties(img);
  //      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
  //      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
  //      return doc;
  //    }).then((docResult) => {
  //      docResult.save(`${new Date().toISOString()}_VLICARS.pdf`);
  //      this,this.imprimir = false
  //    });
  //  }

  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
