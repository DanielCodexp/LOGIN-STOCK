import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import router from './../../../../../API/src/routes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

constructor(
  private authSvc: AuthService,
  private fb:FormBuilder,
  private router: Router
){
  this.form = fb.group({
    username: [,[Validators.required]],
    password: [,[Validators.required]]
  });
}
  ngOnInit(): void {
    // const userData = {
    //   username: 'daniel',
    //   password: '123456'
    // };
    // this.authSvc.login(userData).subscribe((res) => console.log('Login'));
  }

  onLogin(): void {
    const formValue = this.loginForm({
      username:[,Validators.required],
      password: [,Validators.required]
    });
    this.authSvc.login(formValue).subscribe( res => {
      if(res){
        this.router.navigate[''];
      }
    });
  }

}
