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
 private loggedIn = new BehaviorSubject<boolean>(false);
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
      console.log('Res->',res);
      this.saveToken(res.token)
      this.loggedIn.next(true);
    }),
    catchError((err) => this.handlerError(err))
  );
}

logout(): void {
  localStorage.removeItem('token')
  this.loggedIn.next(false);
}

private checkToken(): void {
const userToken = localStorage.getItem('token');
const isExpired =  helper.isTokenExpired(userToken)
console.log('isExpired', isExpired);

 if (isExpired) {
  this.logout();
} else {
  this.loggedIn.next(true)
}

}


private saveToken(token: string): void {
  localStorage.setItem('token', token)
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
