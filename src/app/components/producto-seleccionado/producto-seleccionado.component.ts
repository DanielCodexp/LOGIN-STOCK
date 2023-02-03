import { Rew } from './../../interfaces/rew';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clippingParents } from '@popperjs/core';
import { Products } from 'src/app/interfaces/products';
import { Equipo, ProductsService } from 'src/app/services/products.service';
import { Reports } from '../../interfaces/reports';
import { StockService } from 'src/app/services/stock.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-producto-seleccionado',
  templateUrl: './producto-seleccionado.component.html',
  styleUrls: ['./producto-seleccionado.component.css']
})
export class ProductoSeleccionadoComponent implements  OnInit {
   id_equipo = <string>this.activeRoute.snapshot.params['id'];
   public src;
   producto: Products=
    {
  cCodPrd: '',
  cDesPrd: '',
  cPosPrd: '',
  cDesUM: '',
  };
  report: Reports={
    cCodPrd: this.id_equipo,
    dtFecReg:new Date,
    cCvePer: this.authSvc.rsx.token,
    nInvAPrd: '',
    nRevPrd: '1'
  };

  public correcto!: boolean;

  public img;


  constructor(
    private router:Router,
    private ServicioProd: ProductsService,
    private activeRoute:ActivatedRoute,
    private stock: StockService,
      private authSvc: AuthService,
  ){

  }

  ngOnInit(): void {

    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    if(id_entrada){
      this.stock.getProductSelect(id_entrada).subscribe(
        res=> this.producto = <any>res
      )
      this.stock.getImageById(id_entrada).subscribe(
        img=> {
          this.img = <any> img
        }
      )
    }
  }


  public correct(){
    this.correcto = true;
  }
  public si() {
    this.router.navigate(['qr']);
  }



  addreport(){
  this.stock.addReport(this.report).subscribe();
  this.router.navigate(['qr']);


}
}


