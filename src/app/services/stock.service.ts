import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

getProducts() {
  return this.http.get(`${environment.API_URL}/products`)

}

getReport() {
  return this.http.get(`${environment.API_URL}/reports`)
}


  }

