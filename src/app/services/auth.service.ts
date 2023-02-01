import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interfaces';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoged = false;
  loggedIn: any;
  constructor(
    private http: HttpClient
  ) {
   this.checkToken();
  }

get isLogged():Observable<boolean> {
  return this.loggedIn.asObservable();
}

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

logout(): void {
  localStorage.removeItem('token')
  this.isLoged = false;
}

private checkToken(): void {
  const userToken = localStorage.getItem('token')
  const isExpired = helper.isTokenExpired(userToken);
  console.log('IsExpired -->', isExpired);
}

private saveToken(token:string){
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
