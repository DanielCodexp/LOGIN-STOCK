import { Rew } from './../interfaces/rew';
import { Products } from './../interfaces/products';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reports } from '../interfaces/reports';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  url='/api';
  constructor(private http: HttpClient) { }


  //get productos
  getProductos()
  {
    return this.http.get(this.url);
  }
  //get reports
  getReports(){
    return this.http.get(this.url+'/reports')
  }

  //get producto Seleccionado
  getProductSelect(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar Reporte
  addReport(Report:Reports)
  {
    //return this.http.post(this.url, addReport);
    return this.http.post(this.url+'/',Report)
  }


  // //eliminar
   deleteReport(id:string){
     return this.http.delete(this.url+'/'+id);
   }

   //modificar equipo
   editProduct(id:string, producto:Products){
     return this.http.put(this.url+'/'+id, producto);
   }

}


export interface Equipo{
  id_equipo?:string;
  nombre?:string;
  logo?:string;
}

