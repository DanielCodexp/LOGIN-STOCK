import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit  {

  public productos: Products[] = [];
  pageSize = 15;
  desde: number = 0;
  hasta: number = 15;
  constructor(private ProductsService: ProductsService){

  }
  ngOnInit(): void {

    this.getProductos()
  }

 getProductos()
  {
    this.ProductsService.getProductos().subscribe(
      res=>{
        console.log(res);
        this.productos=<any>res;
      },
      err => console.log(err)
    );
  }

  cambiarpagina(e:PageEvent){
  this.desde = e.pageIndex * e.pageSize;
  this.hasta = this.desde + e.pageSize;
  }



}
