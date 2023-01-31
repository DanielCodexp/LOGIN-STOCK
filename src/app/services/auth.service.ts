import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoged = false;
  constructor(
    private http: HttpClient
  ) { }

login(authData: User): Observable<UserResponse | void>{
  return this.http.post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
  .pipe(
    map( (res: UserResponse)=> {

      this.isLoged= true;
      console.log('Estas logeado?', this.isLoged)
      console.log('Res->',res);
      this.saveToken(res.token);
    }),
    catchError((err) => this.handlerError(err))
  );
}

logout(): void {}

private readToken(): void {}

private saveToken(token:string
){
localStorage.setItem('token',token)
}

private handlerError(err): Observable<never>{
  let errorMessage = 'An error ocurred retrienving data';
  if(err){
    errorMessage = `Error: code ${err.message}`;
  }
  window.alert(errorMessage);
  return  throwError(errorMessage);
}

}
