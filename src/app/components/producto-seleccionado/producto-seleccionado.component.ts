import { Rew } from './../../interfaces/rew';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clippingParents } from '@popperjs/core';
import { Products } from 'src/app/interfaces/products';
import { Equipo, ProductsService } from 'src/app/services/products.service';
import { Reports } from '../../interfaces/reports';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-producto-seleccionado',
  templateUrl: './producto-seleccionado.component.html',
  styleUrls: ['./producto-seleccionado.component.css']
})
export class ProductoSeleccionadoComponent implements  OnInit {
   id_equipo = <string>this.activeRoute.snapshot.params['id'];
  producto: Products=
    {
  cCodPrd: '',
  cDesPrd: '',
  cPosPrd: '',
  cDesUm: '',
  };

  report: Reports={
    cCodPrd: this.id_equipo,
    dtFecReg:new Date,
    cCuePer: '',
    nlnvAprd: '',
    nRevPrd: '1'
  };
  public correcto!: boolean;


  constructor(
    private router:Router,
    private ServicioProd: ProductsService,
    private activeRoute:ActivatedRoute,
    private stock: StockService
  ){

  }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.stock.getProductSelect(id_entrada).subscribe(
        res=> this.producto = <any>res
      )
    }
  }

  public correct(){
    this.correcto = true;
    console.log(this.correcto)
  }



  addreport(){
  console.log(this.report)
  this.stock.addReport(this.report).subscribe();
  this.router.navigate(['qr']);


}
}


