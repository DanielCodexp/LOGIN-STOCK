import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

constructor(
  private authSvc: AuthService
){}
  ngOnInit(): void {
    const userData = {
      username: 'daniel',
      password: '123456'
    };
    this.authSvc.login(userData).subscribe((res) => console.log('Login'));
  }

}
