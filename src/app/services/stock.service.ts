import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reports } from '../interfaces/reports';

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

getProductSelect(id:string) {
  return this.http.get(`${environment.API_URL}/products/`+id)
}

addReport(Report:Reports):Observable<Reports> {
  console.log(Report)
  return this.http
  .post<Reports>
  (`${environment.API_URL}/reports`,Report)

}

handlerError(error): Observable<never> {
  let errorMessage = 'Error unknown';
  if (error) {
    errorMessage = `Error ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

  }

