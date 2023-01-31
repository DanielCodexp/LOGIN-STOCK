import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeSelectedFiles,
  NgxScannerQrcodeService,
  ScannerQRCodeResult
} from 'ngx-scanner-qrcode';
import { Equipo } from '../services/products.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { clippingParents } from '@popperjs/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  public log;
  public config: ScannerQRCodeConfig = {
    medias: {
      audio: false,
      video: {
        width: window.innerWidth
      }
    }
  };
public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];

  public res;
  public select;

  ListarEquipo: Equipo[] | undefined;


  constructor(
    private qrcode: NgxScannerQrcodeService,
    private ProductsService: ProductsService,
    private router:Router,
    private authSvc: AuthService,
    ) { }

    ngOnInit(): void {
    }

  public onEvent(e: ScannerQRCodeResult[]): void {
    this.res= e;
    console.log(this.res);
    console.log(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }

  public onDowload(action) {
    action.download().subscribe(console.log, alert);
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }

  public qrSelect(id:string){
    this.select = id;
    this.router.navigate(['/rew/'+id]);
  }



// listarEquipo() {
//   this.ProductsService.getEquipos().subscribe (
//     res=>{
//       console.log(res)
//     },
//     err => console.log(err)
//   )
// }

  // listarEquipo()
  // {
  //   this.ProductsService.getEquipos().subscribe(
  //     res=>{
  //       console.log(res);
  //       this.ListarEquipo=<any>res;
  //     },
  //     err => console.log(err)
  //   );
  // }


  // eliminar(id:string)
  // {
  //   this.ProductsService.deleteEquipo(id).subscribe(
  //     res=>{
  //       console.log('equipo eliminado');
  //       this.listarEquipo();
  //     },
  //     err=> console.log(err)
  //     );
  // }

  // modificar(id:string){
  //   this.router.navigate(['/edit/'+id]);
  // }




}

